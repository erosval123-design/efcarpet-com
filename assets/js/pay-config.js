/* EF Carpet: Stripe connection settings. This is the ONLY file to change when Stripe is connected.
 * Source of truth: _build/values.json (STRIPE_PUBLISHABLE_KEY, STRIPE_PAYMENT_ENDPOINT) -> python3 _build/placeholders.py fill.
 * Until both values are real, the checkout stays in "Payments open soon" mode: card fields disabled, Place order disabled.
 *
 * STRIPE_PUBLISHABLE_KEY  : Stripe Dashboard > Developers > API keys > Publishable key (pk_live_... or pk_test_...).
 *                           Publishable keys are meant to be public. NEVER put the secret key (sk_...) in this file.
 * STRIPE_PAYMENT_ENDPOINT : https URL of the deployed stripe/worker.js (it creates the payment from server-side prices).
 * See STRIPE_SETUP.md for the full steps. */
var STRIPE_PUBLISHABLE_KEY = "{{STRIPE_PUBLISHABLE_KEY}}";
var STRIPE_PAYMENT_ENDPOINT = "{{STRIPE_PAYMENT_ENDPOINT}}";
