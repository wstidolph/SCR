# Purpose
This is a re-hosting project for the Santa Cruz Randonneurs site, just to make it easier to move ownership/maintenance of the site in the future, and to explore variant styling. 

# Status
Currently the generated site is hosted at [https://scr-5d6.pages.dev/](https://scr-5d6.pages.dev/) (a free Cloudglage Pages setup under Wayne Stidolph's account)
* see the Walkthrough file for general architecture and instructions
* file a github [Issue](https://github.com/wstidolph/SCR/issues) to comment or complain

# Updating
whenever you or your client make updates:

1. Place any new files (such as the missing Jenny Oh Hatfield images as described in the  
todo.md) or update text in the `src/` folder
1. Commit the changes and run `git push origin main`
1. Cloudflare will automatically detect the push, rebuild the static assets using Eleventy, and update your live site at scr-5d6.pages.dev within seconds.
# Tech Support
This initial rehosting is done by Wayne Stidolph using Google's AI 'Gemini'
