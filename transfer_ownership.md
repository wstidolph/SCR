# Santa Cruz Randonneurs - Website Ownership & Account Transfer Guide

This guide is designed for **Wayne Stidolph** and **Lois Springsteen** (and future club administrators) to transition the hosting, source code, and domain management of the Santa Cruz Randonneurs website from Wayne's personal accounts to club-controlled administrator accounts.

---

## 🎯 Transition Goal
To migrate the website assets away from `wstidolph` personal accounts and host them under accounts tied to a club email address (such as `admin@santacruzrandonneurs.org` or `lois@santacruzrandonneurs.org`). 

Later, when Lois relinquishes the role, she can hand over the account credentials (via a password manager) to the next administrator without needing to repeat this migration.

---

## 🗺️ Migration Overview
The transfer process is divided into 5 phases:
1. [Phase 1: Establish the Admin Password Manager (Handoff Core)](#phase-1-establish-the-admin-password-manager)
2. [Phase 2: Migrate the GitHub Code Repository](#phase-2-migrate-the-github-code-repository)
3. [Phase 3: Migrate Cloudflare Static Hosting](#phase-3-migrate-cloudflare-static-hosting)
4. [Phase 4: Transfer Custom Domain & DNS Settings](#phase-4-transfer-custom-domain--dns-settings)
5. [Phase 5: Future Admin Handoff Checklist](#phase-5-future-admin-handoff-checklist)

---

## 🔑 Phase 1: Establish the Admin Password Manager
Before creating any accounts, establish a secure, shared vault to store credentials:
1. **Choose a Password Manager**: Use a secure password manager like **Bitwarden** (free, open-source), **1Password**, or **LastPass**.
2. **Create the Administrator Vault**:
   - Create an account using the club email address (e.g. `admin@santacruzrandonneurs.org` or `lois@santacruzrandonneurs.org`).
   - Write down the **Master Password** and the **2FA Recovery Codes** and store them in a secure physical location (like a club safe or physical binder).
3. **Record All Credentials**: Every account created in the following steps must be immediately recorded inside this vault.

---

## 🐱 Phase 2: Migrate the GitHub Code Repository
This step moves the website code from Wayne's GitHub account to a new club account.

### Step 1: Create the Club GitHub Account
1. Go to **[github.com](https://github.com/signup)**.
2. Sign up using the club email address. Create a username like `sc-randonneurs-admin` or `scr-admin`.
3. Save the username and password in the Admin Password Manager.

### Step 2: Choose Your Migration Method

Choose **Method A** (Recommended for club longevity) or **Method B**:

#### Method A: Create a GitHub Organization (Recommended)
Creating an "Organization" is free and allows multiple personal GitHub accounts to share ownership of the repository. If Wayne wants to help in the future, he can remain a member without sharing passwords.
1. Logged into the new club GitHub account, go to: **[github.com/organizations/plan](https://github.com/organizations/plan)**.
2. Choose the **Free** plan.
3. Name the organization (e.g., `santa-cruz-randonneurs` or `scr-randonneurs`).
4. **Invite Wayne**: Invite Wayne's personal GitHub account (`wstidolph`) as an **Owner**.
5. **Transfer the repository**: 
   - Wayne logs into his personal account, goes to the repository page (`github.com/wstidolph/SCR`), and navigates to **Settings > Danger Zone** (at the bottom).
   - Click **Transfer ownership**.
   - Enter the new organization name as the target.
   - Once accepted, the repository will reside permanently at `github.com/santa-cruz-randonneurs/SCR`.

#### Method B: Fork the Repository to Lois's Account
If you prefer a simpler personal ownership model:
1. Logged into the new club GitHub account, go to **[github.com/wstidolph/SCR](https://github.com/wstidolph/SCR)**.
2. Click the **Fork** button in the top right.
3. This creates a duplicate copy of the repository in the club account (`github.com/scr-admin/SCR`).
4. *Note: Moving forward, all updates must be pushed to this new fork instead of Wayne's original repository.*

---

## ☁️ Phase 3: Migrate Cloudflare Static Hosting
This step sets up the automated static site compiler on a new Cloudflare account.

### Step 1: Create the Club Cloudflare Account
1. Go to **[dash.cloudflare.com/sign-up](https://dash-cloudflare-com.pages.dev/)**.
2. Register using the club email address.
3. Save the credentials in the Admin Password Manager.

### Step 2: Set Up Cloudflare Pages
1. In the Cloudflare dashboard, click **Workers & Pages** in the left sidebar.
2. Click **Create** and select the **Pages** tab.
3. Click **Connect to Git**.
4. Authenticate with the new club GitHub account created in Phase 2.
5. Select the repository (either the transferred organization repo or the fork).
6. Configure the build settings:
   - **Framework Preset**: Select `None` or `Eleventy` (if available).
   - **Build Command**: Enter `npm run build`.
   - **Build Output Directory**: Enter `_site`.
7. Click **Save and Deploy**.
8. Cloudflare will build the site and provide a free staging domain (e.g., `scr-admin.pages.dev`). Check this URL to make sure the website looks correct!

---

## 🌐 Phase 4: Transfer Custom Domain & DNS Settings
To make the live domain (`santacruzrandonneurs.org`) point to the new Cloudflare deployment:

### Step 1: Add Custom Domain to the New Cloudflare Pages Project
1. In the new Cloudflare dashboard, go to **Workers & Pages** > select your project.
2. Go to the **Custom Domains** tab and click **Set up a custom domain**.
3. Enter `santacruzrandonneurs.org` (and repeat for `www.santacruzrandonneurs.org`).

### Step 2: Update Registrar DNS (or transfer domain)
If the domain registrar (like Namecheap, GoDaddy, or Google Domains/Squarespace) is managed by Wayne:
* **Option A (Easiest)**: Keep the domain registered where it is, but change the **Custom Nameservers** in the registrar's settings to point to the nameservers listed in the new club Cloudflare account DNS settings.
* **Option B (Full Ownership Transfer)**: Wayne can initiate a domain transfer through the registrar to move the billing and registration of the domain directly into a registrar account registered under the club email address.

---

## 📋 Phase 5: Future Admin Handoff Checklist
When Lois is ready to hand over the website to the next Santa Cruz Randonneurs administrator, follow this checklist to complete the transition:

- [ ] **Transfer Password Manager Access**: Invite the new admin to the vault, or change the master email and Master Password of the Admin Password Manager.
- [ ] **Update Multi-Factor Authentication (2FA)**:
  - If 2FA is tied to Lois's phone number, log into GitHub, Cloudflare, and the Domain Registrar to update the phone number or transfer authenticator app seeds to the new admin.
- [ ] **Review SSH and Deploy Keys**: Remove any personal SSH keys from the GitHub account profile settings that belonged to the previous admin, and add the new admin's keys.
- [ ] **Update Billing Information**: Update credit card/payment details on Cloudflare or the Domain Registrar if paid features (such as domain registration renewals) are active.
