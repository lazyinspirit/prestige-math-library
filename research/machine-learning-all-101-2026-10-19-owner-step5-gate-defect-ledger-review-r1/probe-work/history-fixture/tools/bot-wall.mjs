// bot-wall.mjs — is this 200 a document, or a wall in front of one?
//
// WHY THIS EXISTS. `url-sweep.mjs` decides liveness from the HTTP status alone,
// and a bot wall answers 200. Springer redirects an unrecognised client to
// `…?error=cookies_not_supported&code=…`, Cloudflare serves
// `/cdn-cgi/challenge-platform/…`, Google answers `/sorry/index`, and a paywall
// bounces a deep link to a sign-in page — every one of them a 200, every one of
// them a page with no mathematics on it. The gate reports `live` and a reader
// clicking the citation gets the wall.
//
// A SUSPECT IS NOT A DEAD LINK, and this deliberately does not make it one.
// `--recover --fail-on-dead` exists to swap a citation onto an archive snapshot
// before anyone re-sources the page, and firing that on a false positive is
// destructive: replacing a recoverable source costs a re-harvest and rewrites
// the provenance of every item it backed. So a suspect is a warning and a row
// field for a human to read, the exit code is untouched, and the patterns below
// are narrow on purpose — a path SEGMENT, a named query parameter, a specific
// host — never a substring search that a paper titled "The Challenge of …"
// would trip.
//
// WHAT THIS CANNOT SEE. url-sweep never downloads a body: it probes with HEAD
// and a one-byte ranged GET, precisely so that a legitimate 9.4 MB PDF is as
// cheap to check as a web page, and its `--recover` path fetches the Wayback
// CDX index rather than any page. So this reads the FINAL URL after redirects
// and nothing else. A wall that returns 200 at the original URL with the
// interstitial in the body — some Cloudflare and Akamai configurations — is
// invisible here, and catching it would mean adding a body fetch to every
// probe, which is the false positive that cost a re-harvest last time.

/** Ordered, narrow signatures. Each returns a reason a human can act on. */
const SIGNATURES = [
  {
    // Springer/Nature: an unrecognised client is redirected to the article URL
    // with this parameter appended, and the page is a cookie notice.
    test: (u) => /[?&](error=cookies_not_supported|cookieAbsent)\b/i.test(u.href),
    why: 'redirected to a cookie-consent interstitial (error=cookies_not_supported / cookieAbsent)',
  },
  {
    test: (u) => /^\/cdn-cgi\/challenge-platform(\/|$)/i.test(u.pathname),
    why: 'redirected to a Cloudflare challenge page',
  },
  {
    test: (u) => /(^|\/)(captcha|challenge)(\/|$)/i.test(u.pathname),
    why: 'redirected to a captcha or challenge page',
  },
  {
    test: (u) => /(^|\/)sorry(\/|$)/i.test(u.pathname) && /\.google\./i.test(u.host),
    why: "redirected to Google's automated-traffic block page",
  },
  {
    // A deep link answered with a sign-in page is a paywall, not a document.
    test: (u) => /^accounts\./i.test(u.host)
      || /(^|\/)(signin|sign-in|ServiceLogin|login)(\/|$)/i.test(u.pathname),
    why: 'redirected to a sign-in page',
  },
];

/** Was a deep document link answered with the site's front page? */
const droppedToRoot = (original, final) =>
  original.host === final.host
  && original.pathname.replace(/\/+$/, '').length > 1
  && final.pathname.replace(/\/+$/, '') === '';

/**
 * Classify a probe result.
 *
 * @param {string} url        the URL as it is written in the citation
 * @param {string|null} finalUrl  curl's `%{url_effective}` after redirects
 * @returns {string|null} a reason this 200 is suspect, or null
 */
export function botWallReason(url, finalUrl) {
  let original;
  try { original = new URL(url); } catch { return null; }
  let final;
  try { final = new URL(finalUrl ?? url); } catch { return null; }

  for (const sig of SIGNATURES) {
    if (!sig.test(final)) continue;
    // A citation that already points AT a sign-in page is a different problem,
    // and saying "redirected to" about a URL nobody redirected would be wrong.
    if (sig.test(original) && original.href === final.href) {
      return `${sig.why.replace(/^redirected to/, 'the cited URL is')} (not a redirect — the citation names it)`;
    }
    return sig.why;
  }
  if (droppedToRoot(original, final)) {
    return `redirected from ${original.pathname} to the site root — the document was not served`;
  }
  return null;
}

/** Annotate a url-sweep row in place. Only a row that PASSED the status check
 *  can be suspect: a row that already failed is dead, and dead outranks
 *  suspicious. Returns the row. */
export function markSuspect(row) {
  if (!row?.ok) return row;
  const why = botWallReason(row.url, row.final_url);
  if (why) {
    row.suspect = true;
    row.suspect_reason = why;
  }
  return row;
}
