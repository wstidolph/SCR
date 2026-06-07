# Santa Cruz Randonneurs Rehosting Project

This is a re-hosting and migration project for the Santa Cruz Randonneurs website. The goal of this project is to move ownership and maintenance of the site from legacy Drupal hosting to a fast, modern static site setup, and to explore responsive dual-theme styling layouts.

---

## 🚀 Getting Started

To get started with running, editing, or administering the site, please refer to the following resources:

* **[Live Deployment Target](https://scr-5d6.pages.dev/)**: The current live production site, compiled using Eleventy and hosted on Cloudflare Pages.
* **[Site Maintenance Handoff Guide](maintenance_guide.md)**: The primary guide detailing how the static site architecture works, how the page layout is structured, and instructions for common edits (updating events schedule, editing page text, and activating contact forms).
* **[Git & Node.js/NPM Setup Guide](git_npm_setup.md)**: A step-by-step setup guide for beginners to install Git, Node.js, and NPM on a Windows 11 PC or macOS, configure Git credentials, clone the repository locally, and run `npm install`.
* **[Website Ownership & Account Transfer Guide](transfer_ownership.md)**: A migration guide for transferring the GitHub repository, Cloudflare Pages hosting account, and custom domain billing from Wayne's personal accounts to club-managed administrator accounts (Lois Springsteen / admin).

---

## 📊 Status & Project TODOs

### Completeness Summary
The core migration from Drupal to Eleventy is complete:
* All static pages, rule sheets, annual reports, and results (from 2004 to 2025) have been successfully ported.
* A floating comparison control is available to swap the site template in real-time between the **Modern Redesign** and **Classic Drupal** styles.
* An ultra-fast, client-side search engine is fully integrated into the Results page, allowing users to search across the entire site's historical text in milliseconds.

### Remaining TODO Checklist
To finalize the site transition, the club administrators need to complete the following:
1. **Verify PayPal Checkout**: Test and confirm that the PayPal event payment button credentials under `src/pages/paypal.html` are correct for registrations.
2. **Execute Ownership Transfer**: Follow the [Transfer Guide](transfer_ownership.md) to move the GitHub code repository and Cloudflare site hosting into club-controlled administrator accounts.

### Bug Reports & Enhancements
Please visit the **[GitHub Issues Page](https://github.com/wstidolph/SCR/issues)** to track active tasks, file new bug reports, or review project requests.

---

## ✍️ Updating instructions

To make updates, add new content, or edit page text, please refer to the detailed step-by-step instructions in the main **[Site Maintenance Handoff Guide (Task 2: Publish Your Changes)](maintenance_guide.md#task-2-publish-your-changes-to-the-web-git-deploy)**. It details how to stage changes, write commit messages, and push updates live.

---

## 🛠️ Tech Support
This initial rehosting and modern code migration was completed by Wayne Stidolph utilizing Google's AI assistant 'Gemini'.
