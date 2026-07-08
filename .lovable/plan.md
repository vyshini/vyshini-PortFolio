## Plan: EmailJS contact form integration

Wire the existing contact form on the homepage to EmailJS using the provided credentials so submissions send a real email.

### Steps

1. **Install package**: add `@emailjs/browser` via `bun add`.
2. **Update `src/routes/index.tsx` → `Contact` component**:
   - Add controlled state for `name`, `email`, `subject`, `message`.
   - Add `status` state: `idle | sending | sent | error`.
   - On submit, call `emailjs.send(SERVICE_ID, TEMPLATE_ID, params, { publicKey: PUBLIC_KEY })` with template params `{ from_name, from_email, subject, message, reply_to }`.
   - On success: show "Message Sent!", reset fields, revert button after 3s.
   - On error: show "Failed to send – try again" and log the error.
   - Disable the submit button while sending; show a subtle sending state.
   - Bind `name`, `value`, `onChange`, `disabled` on all inputs/textarea.
3. **Credentials** (public/publishable — safe to inline in client code, per EmailJS design):
   - `SERVICE_ID = "service_d2djhzx"`
   - `TEMPLATE_ID = "template_v316htb"`
   - `PUBLIC_KEY = "05PL7P5vyes76Aew"`
4. **Validation**: keep native `required` + `type="email"`; trim values before sending.
5. **Verify**: run a typecheck-friendly build path (no new server code) and confirm no console errors on the preview.

No backend, no secrets tool, no other files touched. Note: your EmailJS template must reference variables `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}` for fields to populate.
