// A bot wall answers 200, and a status-only liveness check calls it live.
//
// WHY. url-sweep decides `ok` from the HTTP status alone. Springer redirects an
// unrecognised client to `…?error=cookies_not_supported`, Cloudflare serves
// `/cdn-cgi/challenge-platform/…`, Google answers `/sorry/index`, and a paywall
// bounces a deep link to a sign-in page — all 200, none of them the document a
// reader clicked for. The gate said `live` and a human found out later.
//
// A SUSPECT IS NOT A DEAD LINK. `--recover --fail-on-dead` drives
// recover-before-replace, and firing it on a false positive costs a re-harvest
// and rewrites the provenance of every item the source backed. So the classifier
// is narrow — a path SEGMENT, a named query parameter, a specific host — the
// exit code is untouched, and these tests pin both halves of that.
//
// The classifier is unit-tested on recorded final_url strings rather than over
// the live network: a test whose verdict depends on whether Springer feels like
// walling this particular runner today is a test that cannot disagree.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { botWallReason, markSuspect } from '../../bot-wall.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const REPO: string = process.env.AUTOPILOT_TEST_REPO ?? resolve(HERE, '..', '..', '..');

// Recorded shapes, from real walls.
const WALLED: [string, string, RegExp][] = [
  ['https://link.springer.com/chapter/10.1007/978-1-4757-4721-8_3',
    'https://link.springer.com/chapter/10.1007/978-1-4757-4721-8_3?error=cookies_not_supported&code=8b1c',
    /cookie-consent interstitial/],
  ['https://www.nature.com/articles/nmeth.2019',
    'https://www.nature.com/articles/nmeth.2019?cookieAbsent=1',
    /cookie-consent interstitial/],
  ['https://example.edu/notes/analysis.pdf',
    'https://example.edu/cdn-cgi/challenge-platform/h/b/orchestrate/jsch/v1',
    /Cloudflare challenge/],
  ['https://example.org/papers/gram.pdf',
    'https://example.org/captcha?return=%2Fpapers%2Fgram.pdf',
    /captcha or challenge/],
  ['https://books.google.com/books?id=abc',
    'https://www.google.com/sorry/index?continue=https://books.google.com/books%3Fid%3Dabc',
    /automated-traffic block/],
  ['https://drive.google.com/file/d/1abc/view',
    'https://accounts.google.com/v3/signin/identifier?continue=https://drive.google.com/file/d/1abc/view',
    /sign-in page/],
  ['https://www.jstor.org/stable/2323936',
    'https://www.jstor.org/login?redirectUri=%2Fstable%2F2323936',
    /sign-in page/],
  ['https://homepages.ucl.ac.uk/~ucahmki/lectures.pdf',
    'https://homepages.ucl.ac.uk/',
    /to the site root/],
];

// Live documents this corpus actually cites, and the shapes that must NOT trip.
const CLEAN: [string, string][] = [
  ['https://en.wikipedia.org/wiki/Arzel%C3%A0%E2%80%93Ascoli_theorem',
    'https://en.wikipedia.org/wiki/Arzel%C3%A0%E2%80%93Ascoli_theorem'],
  ['http://users.math.msu.edu/users/shapiro/Teaching/notes.pdf',
    'https://users.math.msu.edu/users/shapiro/Teaching/notes.pdf'],
  // a paper whose TITLE contains the words the narrow patterns must not match
  ['https://arxiv.org/abs/1802.00001',
    'https://arxiv.org/abs/1802.00001'],
  ['https://example.org/the-challenge-of-large-cardinals.pdf',
    'https://example.org/the-challenge-of-large-cardinals.pdf'],
  ['https://example.org/papers/challenges/index.html',
    'https://example.org/papers/challenges/index.html'],
  ['https://example.org/logins-and-monoids.pdf',
    'https://example.org/logins-and-monoids.pdf'],
  // a plain http -> https upgrade on the same deep path
  ['http://example.org/a/b/c.pdf', 'https://example.org/a/b/c.pdf'],
  // a root URL that was ALREADY the root: nothing was dropped
  ['https://example.org/', 'https://example.org/'],
  // no redirect information at all
  ['https://example.org/paper.pdf', ''],
];

test('every recorded wall shape is classified, with an actionable reason', () => {
  for (const [url, final, why] of WALLED) {
    const reason = botWallReason(url, final);
    assert.ok(reason, `not flagged: ${final}`);
    assert.match(reason!, why, `wrong reason for ${final}: ${reason}`);
  }
});

test('live documents and lookalike titles are not flagged', () => {
  for (const [url, final] of CLEAN) {
    assert.equal(botWallReason(url, final || null), null,
      `false positive on ${final || url}`);
  }
});

test('a citation that itself names a sign-in page says so, without claiming a redirect', () => {
  const u = 'https://www.jstor.org/login?redirectUri=%2Fstable%2F1';
  const reason = botWallReason(u, u);
  assert.ok(reason);
  assert.match(reason!, /the cited URL is a sign-in page/);
  assert.doesNotMatch(reason!, /redirected/);
});

test('markSuspect annotates a live row and leaves a dead one alone', () => {
  const live = markSuspect({
    url: 'https://link.springer.com/chapter/10.1007/x', ok: true, status: 200,
    final_url: 'https://link.springer.com/chapter/10.1007/x?error=cookies_not_supported',
  } as any);
  assert.equal(live.suspect, true);
  assert.match(live.suspect_reason, /cookie-consent/);

  // dead outranks suspicious: a 404 that lands on a captcha is still a 404
  const dead = markSuspect({
    url: 'https://example.org/x.pdf', ok: false, status: 404,
    final_url: 'https://example.org/captcha',
  } as any);
  assert.equal(dead.suspect, undefined);

  const clean = markSuspect({
    url: 'https://example.org/x.pdf', ok: true, status: 200,
    final_url: 'https://example.org/x.pdf',
  } as any);
  assert.equal(clean.suspect, undefined);
});

test('url-sweep records the suspect count and does NOT change its exit code', () => {
  const src = readFileSync(join(REPO, 'tools', 'url-sweep.mjs'), 'utf8');
  assert.match(src, /from '\.\/bot-wall\.mjs'/, 'url-sweep must use the shared classifier');
  assert.match(src, /suspect: rows\.filter\(\(row\) => row\.suspect\)\.length/,
    'the summary must carry a suspect count');
  // the only exit in the report section is still the dead-link one
  const exits = [...src.matchAll(/process\.exit\((.+?)\)/g)].map((m) => m[1]);
  assert.ok(exits.includes('1'), 'the --fail-on-dead exit must still exist');
  assert.ok(!src.includes('summary.suspect) process.exit'),
    'a suspect must never fail the gate — recover-before-replace must not fire on a false positive');
  // and the liveness probe the stage table reads is unchanged
  assert.match(src, /\$\{result\.summary\.live\}\/\$\{result\.summary\.urls\} live/);
});
