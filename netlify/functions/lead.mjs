/**
 * Netlify function: lead intake endpoint.
 * To use: set PUBLIC_LEAD_WEBHOOK_URL=/.netlify/functions/lead in your env,
 * then configure CRM_WEBHOOK_URL (Zapier/Make/CRM) and optionally the Twilio
 * variables for the speed-to-lead SMS. See README §"Connect the form".
 */
export default async (req) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
  }

  const lead = await req.json().catch(() => ({}));
  if (!lead.street_address || !lead.phone) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
  }

  try {
    if (process.env.CRM_WEBHOOK_URL) {
      await fetch(process.env.CRM_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      });
    }

    // Twilio speed-to-lead SMS stub — same pattern as api/lead.js (Vercel);
    // uncomment and set TWILIO_ACCOUNT_SID / TWILIO_AUTH_TOKEN / TWILIO_FROM / TEAM_PHONE.

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error('Lead forwarding failed:', err, 'PAYLOAD:', JSON.stringify(lead));
    return new Response(JSON.stringify({ ok: true, degraded: true }), { status: 200 });
  }
};
