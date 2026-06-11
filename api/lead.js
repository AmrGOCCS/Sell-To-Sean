/**
 * Vercel serverless function: lead intake endpoint.
 * To use: set PUBLIC_LEAD_WEBHOOK_URL=/api/lead in your env, deploy to Vercel,
 * then fill in ONE of the integrations below (CRM webhook, email, or Zapier)
 * and optionally the Twilio SMS speed-to-lead ping. See README §"Connect the form".
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const lead = req.body || {};
  if (!lead.street_address || !lead.phone) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // --- 1) Forward to your CRM / Zapier / Make webhook -------------------
    if (process.env.CRM_WEBHOOK_URL) {
      await fetch(process.env.CRM_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      });
    }

    // --- 2) Speed-to-lead SMS to the team (Twilio stub) -------------------
    // Uncomment after setting TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN,
    // TWILIO_FROM (your Twilio number) and TEAM_PHONE (Sean's cell).
    //
    // if (process.env.TWILIO_ACCOUNT_SID) {
    //   const body = new URLSearchParams({
    //     From: process.env.TWILIO_FROM,
    //     To: process.env.TEAM_PHONE,
    //     Body: `🏠 NEW LEAD: ${lead.street_address} | ${lead.name} ${lead.phone} | timeline: ${lead.timeline} | condition: ${lead.condition}. Call back NOW — speed wins deals.`,
    //   });
    //   await fetch(
    //     `https://api.twilio.com/2010-04-01/Accounts/${process.env.TWILIO_ACCOUNT_SID}/Messages.json`,
    //     {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //         Authorization:
    //           'Basic ' +
    //           Buffer.from(`${process.env.TWILIO_ACCOUNT_SID}:${process.env.TWILIO_AUTH_TOKEN}`).toString('base64'),
    //       },
    //       body,
    //     }
    //   );
    // }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Lead forwarding failed:', err);
    // Still return 200 so the visitor reaches the thank-you page; the lead
    // payload is in the function logs as a last resort.
    console.error('LEAD PAYLOAD (recover manually):', JSON.stringify(lead));
    return res.status(200).json({ ok: true, degraded: true });
  }
}
