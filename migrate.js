const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const RAW_SITE_DIR = 'C:\\Users\\wayne\\.gemini\\antigravity\\brain\\e481f761-85d3-4d3c-b47f-f03cce0407ee\\scratch\\raw_scraped_site';
const SRC_DIR = path.join(__dirname, 'src');

// Ensure src directory structure
fs.mkdirSync(SRC_DIR, { recursive: true });
fs.mkdirSync(path.join(SRC_DIR, 'pages'), { recursive: true });
fs.mkdirSync(path.join(SRC_DIR, 'contact'), { recursive: true });

// Copy directory recursively
function copyDirSync(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Copy assets
console.log('Copying legacy sites and themes assets...');
copyDirSync(path.join(RAW_SITE_DIR, 'sites'), path.join(SRC_DIR, 'sites'));
copyDirSync(path.join(RAW_SITE_DIR, 'themes'), path.join(SRC_DIR, 'themes'));

// Helper to clean HTML content
function cleanHtml(htmlContent) {
  if (!htmlContent) return '';
  
  // Replace absolute URLs with relative ones
  let cleaned = htmlContent.replace(/https:\/\/santacruzrandonneurs\.org/g, '');
  
  // Clean up any double page links like /pages/pages/
  cleaned = cleaned.replace(/\/pages\/pages\//g, '/pages/');

  // Replace any .html links inside /pages/
  cleaned = cleaned.replace(/href="\/pages\/([^"]+)\.html"/g, 'href="/pages/$1/"');
  cleaned = cleaned.replace(/href="\/pages\/([^"]+)"/g, 'href="/pages/$1/"');

  // Let's ensure any /contact links are cleaned
  cleaned = cleaned.replace(/href="\/contact\.html"/g, 'href="/contact/"');
  cleaned = cleaned.replace(/href="\/contact"/g, 'href="/contact/"');
  cleaned = cleaned.replace(/href="\/"/g, 'href="/"');

  return cleaned;
}

// Helper to extract page metadata and content body
function parseLegacyHtml(filePath) {
  const html = fs.readFileSync(filePath, 'utf-8');
  const dom = new JSDOM(html);
  const doc = dom.window.document;

  // Extract page title
  let title = 'Santa Cruz Randonneurs';
  const titleEl = doc.querySelector('.page-title span, .page-title, title');
  if (titleEl) {
    title = titleEl.textContent.replace(' | Santa Cruz Randonneurs', '').trim();
  }

  // Extract body content
  let bodyContent = '';
  const bodyEl = doc.querySelector('.field--name-body .field__item, .field--name-body, .node__content');
  if (bodyEl) {
    bodyContent = bodyEl.innerHTML;
  } else {
    // Fallback: look for general content region
    const contentEl = doc.querySelector('.region-content');
    if (contentEl) {
      bodyContent = contentEl.innerHTML;
    }
  }

  // Clean body html
  bodyContent = cleanHtml(bodyContent);

  return { title, bodyContent };
}

// Migrate all pages
function migratePages() {
  console.log('Migrating pages...');

  // 1. Home Page (index.html)
  const homePath = path.join(RAW_SITE_DIR, 'index.html');
  if (fs.existsSync(homePath)) {
    const { title, bodyContent } = parseLegacyHtml(homePath);
    const output = `---
layout: layout.njk
title: "${title}"
permalink: "/"
---
${bodyContent}
`;
    fs.writeFileSync(path.join(SRC_DIR, 'index.html'), output, 'utf-8');
    console.log('Migrated: Home -> src/index.html');
  }

  // 2. Contact Page (contact.html)
  const contactPath = path.join(RAW_SITE_DIR, 'contact.html');
  if (fs.existsSync(contactPath)) {
    const { title } = parseLegacyHtml(contactPath);
    const output = `---
layout: layout.njk
title: "${title}"
permalink: "/contact/"
---
<div class="contact-container">
  <p class="contact-lead text-center">Have a question or feedback? Drop us a message below and we'll get back to you as soon as possible.</p>
  
  <form class="contact-feedback-form" action="https://api.web3forms.com/submit" method="POST">
    <!-- Web3Forms Access Key for the club (user can replace this key) -->
    <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
    <input type="hidden" name="subject" value="Santa Cruz Randonneurs Website Feedback">
    <input type="hidden" name="from_name" value="Santa Cruz Randonneurs Form">
    <input type="checkbox" name="botcheck" class="hidden" style="display: none;">

    <div class="form-group">
      <label for="name" class="form-label required">Your name</label>
      <input type="text" id="name" name="name" class="form-control" required placeholder="John Doe">
    </div>

    <div class="form-group">
      <label for="email" class="form-label required">Your email address</label>
      <input type="email" id="email" name="email" class="form-control" required placeholder="john@example.com">
    </div>

    <div class="form-group">
      <label for="message-subject" class="form-label required">Subject</label>
      <input type="text" id="message-subject" name="msg_subject" class="form-control" required placeholder="Website feedback / Ride question">
    </div>

    <div class="form-group">
      <label for="message" class="form-label required">Message</label>
      <textarea id="message" name="message" rows="8" class="form-control" required placeholder="Write your message here..."></textarea>
    </div>

    <div class="form-actions text-center">
      <button type="submit" class="btn btn-submit">Send message</button>
    </div>
  </form>
</div>
`;
    fs.writeFileSync(path.join(SRC_DIR, 'contact', 'index.html'), output, 'utf-8');
    console.log('Migrated: Contact -> src/contact/index.html');
  }

  // 3. PayPal Page (pages/paypal.html)
  const paypalPath = path.join(RAW_SITE_DIR, 'pages', 'paypal.html');
  if (fs.existsSync(paypalPath)) {
    const { title, bodyContent } = parseLegacyHtml(paypalPath);
    const output = `---
layout: layout.njk
title: "${title}"
permalink: "/pages/paypal/"
---
<div class="paypal-payment-container">
  ${bodyContent}
</div>
`;
    fs.writeFileSync(path.join(SRC_DIR, 'pages', 'paypal.html'), output, 'utf-8');
    console.log('Migrated: PayPal page -> src/pages/paypal.html');
  }

  // 4. Migrate all other subpages under pages/
  const pagesDir = path.join(RAW_SITE_DIR, 'pages');
  const files = fs.readdirSync(pagesDir);

  for (const file of files) {
    if (file.endsWith('.html') && file !== 'paypal.html') {
      const pageName = file.replace('.html', '');
      const filePath = path.join(pagesDir, file);
      
      const { title, bodyContent } = parseLegacyHtml(filePath);
      
      // We will write pages inside src/pages/[pagename].html so eleventy outputs pages/[pagename]/index.html
      const output = `---
layout: layout.njk
title: "${title}"
permalink: "/pages/${pageName}/"
---
${bodyContent}
`;
      fs.writeFileSync(path.join(SRC_DIR, 'pages', `${pageName}.html`), output, 'utf-8');
      console.log(`Migrated: pages/${file} -> src/pages/${pageName}.html`);
    }
  }

  console.log('Page migration complete!');
}

migratePages();
