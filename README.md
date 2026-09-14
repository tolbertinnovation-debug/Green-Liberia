# Voices for a Green Liberia (VGL) Media

A responsive, static website with a forest-green, cream and lime visual identity inspired by the supplied brand image.

## Included
- Responsive navigation and mobile menu
- Environmental topic filters
- Three introductory reading guides in accessible native dialogs
- Original VGL logo in the header, organization section, footer, and favicon
- VGL community clean-up photograph in the hero, served responsively (800w / 1300w)
- Mission, vision, objectives, six work areas, The Environmental Hour, community approach and partnership philosophy
- Founder and Executive Director Rufus Divine Carneh Jr., office address, phone and email links
- Official Facebook and YouTube links
- Click-to-load embeds: the VGL YouTube uploads player (no-cookie domain) on the home page and The Environmental Hour page, and the VGL Facebook page feed on the home page. Neither is requested until the visitor loads it, so the default page makes no third-party requests. The YouTube player uses the channel's uploads playlist (channel UC... -> playlist UU...), so it stays current with no edits when new videos are posted.
- Downloadable organization profile
- Partner with us page: why partnership, the partnership equation, all thirteen stakeholder categories, the six-step community model and partnership contacts
- Gallery of nine VGL clean-up photographs with an accessible lightbox (keyboard arrows, Escape, focus return); thumbnails pre-cropped to 3:2 and lazy-loaded, full-size versions fetched only when a photograph is opened
- Who we are page: organization facts, what VGL believes, vision, mission and all ten environmental objectives shown in full
- The Environmental Hour page: the program, its seven guest groups, its ten topics, recorded discussions and ways to take part. Broadcast days and times are not published anywhere in the source profile, so the page directs visitors to contact VGL rather than stating a schedule — fill in the `.schedule` block in environmental-hour.html once they are known.
- Story, interest and partnership message preparation with clipboard copying and email-app handoff
- Privacy information, reduced-motion support and keyboard focus styles
- WCAG AA text contrast on every page, and Open Graph/Twitter card metadata on all five pages so shared links render a title, description and image

Open index.html in a browser. No installation or build is required.

## Files
- `index.html` — home page
- `about.html` — Who we are
- `partners.html` — Partner with us
- `environmental-hour.html` — The Environmental Hour
- `gallery.html` — Our work in pictures
- `styles.css` — shared stylesheet for every page
- `site.js` — shared behaviour (mobile menu, footer year, privacy dialog)

Page-specific JavaScript (the topic filters, reading guides and message drafting) stays inline in `index.html`.
Add a new page by copying the header and footer from `partners.html`, linking `styles.css` and `site.js`, and adding a `cp` line to `.github/workflows/pages.yml`.

## Publish with GitHub Pages
1. Open this repository's Settings > Pages.
2. Under Build and deployment, select GitHub Actions.
3. Open Actions > Publish VGL Media website > Run workflow.
4. The successful deployment will provide the live website URL.

The workflow is manual so publication can follow content review. Future edits require running it again.

## Content sources
Organization-specific content comes from the user-uploaded "PROFILE Voices for a Green Liberia.docx". The current white-background logo is "file_00000000d0188243baf20b9f515b8f73.png". The hero photograph is a user-supplied VGL radio-studio photograph, re-encoded to JPEG at two widths as "vgl-studio-1300.jpg" (240 KB) and "vgl-studio-800.jpg" (120 KB). "vgl-community-cleanup-1300.jpg" is retained as the Open Graph share image. All are included in the Pages deployment artifact.

Contact: Rufus Divine Carneh Jr., Founder & Executive Director. Technology Building, 10th Street Sinkor, Monrovia, Liberia. Phone: +231770378566 / +231886962999. Email: rufuscarneh@gmail.com.

General environmental guides are supplementary editorial content. The hero photograph and the first guide-card photograph show actual VGL activities and are served from this repository. The remaining two guide-card photographs are illustrative Unsplash imagery and do not document VGL activities. Google Fonts and the guide-card Unsplash images require internet access. No broadcast times, partner endorsements, or impact statistics have been invented.

## Form behavior
The introduction form prepares a message locally, lets the visitor copy it, or opens the visitor's email app addressed to the profile's contact email. Visitors review and send through their own email provider. The site does not send or store messages and has no payment processor.

## Verification
JavaScript parsed successfully and every internal navigation anchor was checked. Responsive breakpoints and reduced-motion rules are included. A browser rendering check was not available in the creation session.
