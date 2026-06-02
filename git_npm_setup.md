# Santa Cruz Randonneurs - Git & Node.js/NPM Setup Guide

This guide is written for **absolute beginners** to help you install and configure **Git** and **Node.js (including NPM)** on a Windows 11 PC or a Mac. 

Setting up these tools is a one-time process. Once completed, you will be fully equipped to run a local preview of the website and publish your updates as described in the [Site Maintenance Handoff Guide](maintenance_guide.md).

---

## 💻 Choose Your Operating System

* [Windows 11 Setup Instructions](#windows-11-pc-setup)
* [macOS (Mac) Setup Instructions](#macos-mac-setup)

---

## 🪟 Windows 11 PC Setup

### Step 1: Install Git (Command Line & Version Control)
1. Open your web browser and go to: **[git-scm.com/download/win](https://git-scm.com/download/win)**
2. Click **"Click here to download"** to download the 64-bit Git for Windows installer.
3. Once downloaded, open the installer file (usually in your Downloads folder).
4. Click **Next** on each screen to accept the default settings (the defaults are optimized for safety and security).
5. Click **Install**.
6. *Optional*: This installer also installs **Git Bash**, a clean, beginner-friendly terminal that behaves exactly like macOS/Linux terminals.

### Step 2: Install Node.js & NPM (Local Preview Compiler)
1. Go to: **[nodejs.org](https://nodejs.org)**
2. Click the large green button labeled **"LTS"** (Long Term Support). This is the stable, recommended version for most users.
3. Open the downloaded installer file.
4. Click **Next** on each screen, accept the license agreement, and use default settings.
5. Click **Install**.

---

## 🍏 macOS (Mac) Setup

### Step 1: Install Git (Command Line & Version Control)
Apple makes installing Git incredibly easy through their native Developer Tools:
1. Open the **Terminal** app on your Mac (you can find it in `Applications > Utilities`, or search for it using Spotlight with `Cmd + Space`).
2. Type the following command in the Terminal window and press **Enter**:
   ```bash
   git --version
   ```
3. A popup window will appear saying: *"The 'git' command requires the command line developer tools. Would you like to install the tools now?"*
4. Click **Install** and accept the license agreement. macOS will download and install the tools automatically in the background.

### Step 2: Install Node.js & NPM (Local Preview Compiler)
1. Go to: **[nodejs.org](https://nodejs.org)**
2. Click the large green button labeled **"LTS"** (Long Term Support).
3. Download the macOS installer (`.pkg` file).
4. Double-click the downloaded file to run the installer and click **Continue** / **Install** using the default selections.

---

## 🧪 Step 3: Verify Your Installation

To confirm everything was installed successfully, open a new command terminal:
* **Windows**: Open **Git Bash** or **PowerShell** from your Start Menu.
* **Mac**: Open the **Terminal** app.

Type the following verification commands and press **Enter**:

```bash
# 1. Check Git
git --version

# 2. Check Node.js
node -v

# 3. Check NPM
npm -v
```

If each command returns a version number (for example: `git version 2.x.x` or `v20.x.x`), **your installation was successful!**

---

## ✍️ Step 4: Configure Your Git Credentials (One-time)
Before Git lets you commit changes, you must introduce yourself so it can stamp your name onto your edits:
1. Run these two commands in your terminal (replace the names in quotes with your actual name and email):
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```
2. You are now ready to run **Task 1 (npm start)** and **Task 2 (git commit & deploy)** in the main [Maintenance Guide](maintenance_guide.md)!

---

## 📚 Recommended Beginner References

If you would like to explore or learn more about these tools, here are some excellent beginner-friendly resources:

* **Interactive Git Tutorial**: **[GitHub Git Handbook](https://guides.github.com/introduction/git-handbook/)** - An easy-to-read guide explaining why we use Git.
* **Visual Git Client**: **[GitHub Desktop](https://desktop.github.com/)** - If you prefer a visual click-and-drag interface instead of running commands in the terminal, this free tool handles all Git tasks visually.
* **Official Node.js Guide**: **[Node.js Introduction Guide](https://nodejs.dev/en/learn/)** - Learn more about how the JavaScript compiler works.
* **Git Cheat Sheet**: **[GitHub Git Cheat Sheet (PDF)](https://training.github.com/downloads/github-git-cheat-sheet.pdf)** - A handy, printable summary of basic Git terminal commands.
