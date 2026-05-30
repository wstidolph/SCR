# Santa Cruz Randonneurs Migration TODO List

This document lists the remaining manual tasks to finalized the migration from Drupal to Eleventy on Cloudflare Pages.

## 🖼️ Missing Media Assets (Action Required)
The original Drupal site contained two absolute links on the **Ride Format** page pointing to an inactive staging subdomain (`scr.orchardware.net`). 

We have updated the HTML source code inside `src/pages/ride-format.html` to point to **local, relative paths** so that the site remains perfectly structured and self-contained. 

To restore these images, you should retrieve the original files and place them into the designated folder:

1. **`Meeting.png`** (Rider Meeting photo by Jenny Oh Hatfield):
   - **Target Folder**: `src/sites/default/files/2021-04/`
   - **Filename**: `Meeting.png`
   
2. **`StoreControl.png`** (Store Checkpoint photo by Jenny Oh Hatfield):
   - **Target Folder**: `src/sites/default/files/2021-04/`
   - **Filename**: `StoreControl.png`

Once these two files are placed in that folder, they will automatically copy during build and display beautifully in both the Classic and Modern visual styles!

## 📨 Contact Form Setup (Optional)
The static contact page under `src/contact/index.html` is configured to use **Web3Forms** for zero-config static forms.
1. Go to [web3forms.com](https://web3forms.com/) and enter your email address to retrieve a free access key.
2. Open `src/contact/index.html` and replace the placeholder value `YOUR_ACCESS_KEY_HERE` with your key:
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
   ```
3. Test a submission. Form entries will deliver directly to the email address tied to that key.
