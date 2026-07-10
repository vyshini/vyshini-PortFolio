## Plan: Add "View Certificate" for each certification & hackathon

Recommendation: **upload all certificates for both sections** — recruiters value verifiable proof, and a "View Certificate" button per item keeps the layout clean (image only opens on click).

### UI behavior
- Under each certification card and each hackathon card, add a **"View Certificate"** button.
- Clicking opens a lightbox/modal showing the certificate as a full image (zoomable, close on Esc / backdrop click).
- If a specific entry has no certificate uploaded yet, hide the button for that entry only (no broken links).

### Upload approach
- You upload the certificate images (JPG/PNG) via chat — one message per batch is fine.
- For each image, please label it with the exact certification / hackathon name so I can wire it to the right card.
- Images will be stored as Lovable CDN assets (keeps repo light, fast global delivery).

### Implementation steps (once you send the images)
1. Upload each certificate to Lovable Assets → get `.asset.json` pointers.
2. Extend the certifications & hackathons data in `src/routes/index.tsx` with an optional `certificateUrl` field per entry.
3. Add a reusable `CertificateViewer` modal component (image + close button, backdrop blur).
4. Add "View Certificate" button under each card, conditionally rendered.
5. Verify visually in preview at mobile + desktop widths.

### What I need from you next
- Send the certificate images in chat.
- For each image, tell me which certification or hackathon it belongs to (name as it appears on the site).