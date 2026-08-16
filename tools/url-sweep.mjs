#!/usr/bin/env node
// url-sweep.mjs — the CITATION LIVENESS gate: every source a page credits must
// be openable by a reader.
//
//   node tools/url-sweep.mjs --manifests a.pages.json,b.pages.json \
//     --ledgers a.provenance.jsonl,b.provenance.jsonl --out wave-url-liveness.json
//
//   node tools/url-sweep.mjs --coverage research/<run>-batch-*.coverage.json \
//     --out research/<run>-url-liveness.json --recover --fail-on-dead
//
// WHY THIS RUNS IN THE BUILD AND NOT ONLY THE AUDIT (owner, 2026-08-15). On run
// `frontier-13` a batch cited Minhyong Kim's UCL lecture notes at a URL that
// returns 404. `coverage-checklist.mjs` checks a source URL is PRESENT, never
// that it RESOLVES, so every gate was green while 47 of 114 harvested rows — and
// 15 items outright — rested on a document no reader can open. It was caught by
// an Alpha happening to try the link. This tool already existed and did exactly
// that job, but its only caller was `run-wave.mjs`, the published-page audit
// driver; the build never ran it, so the check that would have caught it at
// step 2 ran for the first time three steps too late.
//
// THREE THINGS THAT MADE IT A BUILD GATE.
//
// 1. `--coverage`. The original reads URLs out of `items/<id>.md`, which do not
//    exist until step 5. Scaffold-time source URLs live in `coverage.json`, so
//    without this the gate could not run at the only step where acting on a dead
//    source still costs a scaffold edit instead of a rewrite.
//
// 2. `--recover`. RECOVER BEFORE YOU REPLACE. The frontier-13 response was to
//    re-source the whole page onto different textbooks — a 42-minute re-harvest,
//    an instruction that turned out to name a chapter which did not contain the
//    material, and the near-loss of the original attribution. The notes were
//    archived the whole time. What hid them is worth stating exactly: the
//    citation read `homepages.ucl.ac.uk/~ucahmki/...` and the Wayback copy is
//    under `www.ucl.ac.uk/~ucahmki/...` — UCL moved `~user` pages behind a new
//    subdomain and only the pre-move URL was ever crawled. Querying the archive
//    on the hostname IN THE CITATION returns nothing and reads as "never
//    archived". So recovery tries the host with each leading label stripped and
//    with `www.` normalised, not just the host as written.
//
// 3. `--fail-on-dead`. Reporting a dead citation is not the same as stopping on
//    one. Default stays report-only and exit 0 — `run-wave.mjs` halts the whole
//    wave on a nonzero exit here, and a dead URL in already-published content is
//    a finding for Alpha, not a reason to abort an audit mid-flight. The build
//    passes the flag; the audit does not.
//
// A dead URL WITH a recovered snapshot is still a failure under --fail-on-dead:
// the citation on disk is what a reader clicks, and it is still broken. The
// recovery is printed so the fix is a URL swap rather than a re-harvest.

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { spawn } from 'node:child_process';
import { REPO } from './paths.mjs';
import { markSuspect } from './bot-wall.mjs';

const argv = process.argv.slice(2);
const option = (name) => {
  const index = argv.indexOf(name);
  return index >= 0 ? argv[index + 1] : null;
};
/** Accept BOTH `--coverage a,b,c` and `--coverage a b c`. `gates.mjs` expands a
 *  placeholder like `{checklists}` into one argv entry per file, so a
 *  comma-only reader silently sees the first batch and reports the other six as
 *  clean — which is exactly what it did on the first run of this gate. */
const list = (name) => {
  const start = argv.indexOf(name);
  if (start < 0) return [];
  const out = [];
  for (let i = start + 1; i < argv.length && !argv[i].startsWith('--'); i++) {
    for (const part of argv[i].split(',')) if (part.trim()) out.push(part.trim());
  }
  return out;
};
const manifests = list('--manifests');
const ledgers = list('--ledgers');
const coverages = list('--coverage');
const out = option('--out');
const concurrency = Number(option('--concurrency') ?? 8);
const timeoutMs = Number(option('--timeout-ms') ?? 22_000);
const recover = argv.includes('--recover');
const failOnDead = argv.includes('--fail-on-dead');

if ((!manifests.length && !coverages.length) || !out || !Number.isInteger(concurrency) || concurrency < 1 || timeoutMs < 1) {
  console.error('usage: node tools/url-sweep.mjs (--manifests <a,b,...> | --coverage <a,b,...>) [--ledgers <a,b,...>] --out <file> [--concurrency 8] [--timeout-ms 22000] [--recover] [--fail-on-dead]');
  process.exit(2);
}

const absolute = (file) => file.startsWith('/') ? file : join(REPO, file);
for (const file of [...manifests, ...ledgers, ...coverages]) {
  if (!existsSync(absolute(file))) {
    console.error(`url-sweep: missing input ${file}`);
    process.exit(2);
  }
}

const urls = new Set();
const collect = (text) => {
  for (const match of text.matchAll(/https?:\/\/[^\s"'<>`\]]+/g)) {
    // Parentheses are valid and common at the end of Wikipedia paths. Inputs
    // are quoted YAML/JSON strings, so only prose punctuation is extraneous.
    const url = match[0].replace(/[,.;:]+$/g, '');
    try { urls.add(new URL(url).href); } catch { /* malformed text is not a fetch target */ }
  }
};

const itemIds = new Set();
for (const manifest of manifests) {
  const pages = JSON.parse(readFileSync(absolute(manifest), 'utf8'));
  for (const page of pages) for (const item of page.items ?? []) itemIds.add(item.id);
}
// Scaffold-time callers pass manifests whose items are not authored yet. A
// missing item file is not a defect at step 2, so skip it rather than throwing —
// the coverage files carry the source URLs at that stage.
for (const id of itemIds) {
  const file = join(REPO, 'items', `${id}.md`);
  if (existsSync(file)) collect(readFileSync(file, 'utf8'));
}
for (const ledger of ledgers) collect(readFileSync(absolute(ledger), 'utf8'));
for (const coverage of coverages) collect(readFileSync(absolute(coverage), 'utf8'));

const queue = [...urls].sort();
const rows = new Array(queue.length);
let cursor = 0;

/** LIVENESS IS A HEADER QUESTION, NOT A DOWNLOAD.
 *
 *  The first version fetched the whole body. Knapp's *Basic Algebra* is a 9.4 MB
 *  PDF that this corpus legitimately cites, and at the 22 s default it timed out
 *  after 1.2 MB and was reported FAILED — a live, correct source that would have
 *  blocked the build. It is very likely the same false positive that made a
 *  step-3 reviewer report that exact URL as a 404 and block a page on it, which
 *  then cost a re-harvest onto different textbooks.
 *
 *  So: HEAD first, and fall back to a one-byte ranged GET for the servers that
 *  answer HEAD with 403/405/501 while serving GET perfectly well. Either way the
 *  body never arrives and a big file is as cheap to check as a small one. */
// HEAD first, then a one-byte ranged GET for servers that refuse HEAD, then
// the same GET forced onto HTTP/1.1.
//
// The third attempt exists because of a REAL false positive. Shapiro's
// Arzela-Ascoli notes (users.math.msu.edu) return 200 to a plain curl every
// time, and fail here every time with "curl: (16) Error in the HTTP2 framing
// layer" — the server mis-frames under the HTTP/2 negotiation these flags
// trigger. Reported as a dead source, it would have sent a live, correct
// citation to an archive snapshot from 2016 and rewritten the provenance of
// every item it backs. A transport-level framing failure is a fact about the
// connection, not about whether a reader can open the page.
const ATTEMPTS = [
  ['-sSLI', '-o', '/dev/null'],
  ['-sSL', '-o', '/dev/null', '--range', '0-0'],
  ['-sSL', '--http1.1', '-o', '/dev/null', '--range', '0-0'],
];

const fetchOnce = async (url, mode) => {
  const started = Date.now();
  return new Promise((resolve) => {
    const child = spawn('curl', [
      ...mode, '-w', '%{http_code}\t%{url_effective}',
      '--max-time', String(Math.ceil(timeoutMs / 1000)),
      '--user-agent', 'prestige-math-library-audit/1.0 (+URL liveness check)',
      url,
    ], { stdio: ['ignore', 'pipe', 'pipe'] });
    let stdout = '', stderr = '';
    child.stdout.on('data', (chunk) => { stdout += chunk; });
    child.stderr.on('data', (chunk) => { stderr += chunk; });
    child.on('error', (error) => resolve({
      url, status: null, ok: false, final_url: null,
      ms: Date.now() - started, error: error.message,
    }));
    child.on('close', (code) => {
      const [statusText, finalUrl] = stdout.trim().split('\t');
      const status = /^\d{3}$/.test(statusText ?? '') ? Number(statusText) : null;
      resolve({
        url,
        status,
        ok: code === 0 && status !== null && status >= 200 && status < 300,
        final_url: finalUrl || null,
        ms: Date.now() - started,
        error: code === 0 ? null : (stderr.trim() || `curl exit ${code}`),
      });
    });
  });
};

const fetchOne = async (url) => {
  let last = null;
  for (const mode of ATTEMPTS) {
    last = await fetchOnce(url, mode);
    if (last.ok) return last;
    // A definite 404/410 is settled; no fallback will change it. Only retry when
    // the method itself may be the problem.
    //
    // A TRANSPORT FAILURE MUST NOT SHORT-CIRCUIT, even when curl still reports
    // a status. Shapiro's Arzela-Ascoli notes answer the HEAD attempt with BOTH
    // `200` on stdout and `curl: (16) Error in the HTTP2 framing layer` on
    // stderr; the status made this line return immediately, so the ranged-GET
    // and HTTP/1.1 attempts never ran and a live, correct citation was reported
    // dead. `last.error` is the signal that the attempt itself failed, and when
    // it did, another protocol deserves its turn.
    if (last.error) continue;
    if (last.status && ![403, 405, 501, 400].includes(last.status)) return last;
  }
  return last;
};

/** Every host the same document may have been archived under. A personal page
 *  that moves behind a new subdomain — `x.ac.uk/~u/f.pdf` becoming
 *  `homepages.x.ac.uk/~u/f.pdf` — is archived only under whichever host existed
 *  when a crawler last saw it, so asking the archive about the host in the
 *  citation is what makes a recoverable document look permanently lost. Strip
 *  leading labels down to the registrable-ish name and normalise `www.`. */
/** `ac.uk`, `co.uk`, `edu.au` and friends are registry suffixes, not sites.
 *  Querying one asks the archive for an entire national academic namespace. */
const PUBLIC_SUFFIX_2 = new Set(['ac', 'co', 'gov', 'edu', 'org', 'net', 'com', 'sch', 'mil']);
const isRegistrySuffix = (candidate) => {
  const labels = candidate.split('.');
  return labels.length === 2 && labels[1].length === 2 && PUBLIC_SUFFIX_2.has(labels[0]);
};

const hostVariants = (host) => {
  const seen = new Set([host]);
  const bare = host.replace(/^www\./, '');
  let labels = bare.split('.');
  while (labels.length >= 2) {
    const candidate = labels.join('.');
    if (!isRegistrySuffix(candidate)) {
      seen.add(candidate);
      seen.add(`www.${candidate}`);
    }
    labels = labels.slice(1);
  }
  return [...seen];
};

/** A CDX row is `urlkey timestamp original mimetype statuscode digest length`.
 *  The archive answers a rate-limited query with a 503 HTML page, and parsing
 *  that as whitespace-separated columns invents a snapshot out of the words in
 *  an error message — this returned `web.archive.org/web/serverif_/is` from
 *  "No server is available to handle this request" before the check existed. */
const cdxRows = (text) => text.trim().split('\n')
  .map((line) => line.trim().split(/\s+/))
  .filter((fields) => fields.length >= 5
    && /^\d{14}$/.test(fields[1])
    && /^https?:\/\//.test(fields[2])
    && /^\d{3}$/.test(fields[4]));

const curlText = (args) => new Promise((resolve) => {
  const child = spawn('curl', args, { stdio: ['ignore', 'pipe', 'ignore'] });
  let stdout = '';
  child.stdout.on('data', (chunk) => { stdout += chunk; });
  child.on('error', () => resolve(''));
  child.on('close', () => resolve(stdout));
});

/** Ask the Wayback CDX index for a 200-status snapshot of this document under
 *  any host it may have lived at. Returns the newest, or null. */
const recoverOne = async (url) => {
  let parsed;
  try { parsed = new URL(url); } catch { return null; }
  for (const host of hostVariants(parsed.host)) {
    const target = `${host}${parsed.pathname}`;
    const query = `http://web.archive.org/cdx/search/cdx?url=${encodeURIComponent(target)}&output=text&filter=statuscode:200&collapse=digest&limit=8`;
    // The archive rate-limits, and this walks several host variants per dead
    // URL. One retry converts a 503 from "never archived" into an answer.
    let found = [];
    for (let attempt = 0; attempt < 2 && !found.length; attempt++) {
      if (attempt) await new Promise((r) => setTimeout(r, 1500));
      found = cdxRows(await curlText([
        '-sS', '--max-time', String(Math.ceil(timeoutMs / 1000)),
        '--user-agent', 'prestige-math-library/1.0 (+citation recovery)',
        query,
      ]));
    }
    if (!found.length) continue;
    const [, timestamp, original, mimetype] = found[found.length - 1];
    return {
      queried_host: host,
      snapshot: `https://web.archive.org/web/${timestamp}if_/${original}`,
      timestamp,
      mimetype: mimetype ?? null,
      note: host === parsed.host ? null
        : `archived under ${host}, not the ${parsed.host} in the citation`,
    };
  }
  return null;
};

const worker = async () => {
  while (cursor < queue.length) {
    const index = cursor++;
    rows[index] = await fetchOne(queue[index]);
  }
};
await Promise.all(Array.from({ length: Math.min(concurrency, queue.length || 1) }, worker));

// A BOT WALL ANSWERS 200. Springer's cookie interstitial, a Cloudflare
// challenge, Google's `/sorry/index` and a paywall's sign-in page are all HTTP
// 200 with no mathematics on them, and a status-only check reports every one as
// live. This reads the FINAL URL after redirects — see tools/bot-wall.mjs for
// what that can and cannot see, and why nothing here downloads a body.
//
// A suspect is a HUMAN READ, never a dead link. `--fail-on-dead` drives
// recover-before-replace, and firing that on a false positive costs a
// re-harvest and rewrites the provenance of every item the source backed. So
// the exit code below is deliberately untouched by this.
for (const row of rows) markSuspect(row);

// RECOVER BEFORE YOU REPLACE. Only dead URLs are looked up, so a clean sweep
// costs nothing and never touches the network beyond the liveness checks.
if (recover) {
  for (const row of rows) {
    if (row.ok) continue;
    row.recovered = await recoverOne(row.url);
  }
}

const result = {
  version: 1,
  generated_at: new Date().toISOString(),
  scope: {
    manifests,
    ledgers,
    items: itemIds.size,
  },
  summary: {
    urls: rows.length,
    live: rows.filter((row) => row.ok).length,
    failed: rows.filter((row) => !row.ok).length,
    recovered: rows.filter((row) => !row.ok && row.recovered).length,
    suspect: rows.filter((row) => row.suspect).length,
  },
  rows,
};
writeFileSync(absolute(out), JSON.stringify(result, null, 2) + '\n');
console.log(`url-sweep: ${result.summary.live}/${result.summary.urls} live; ${result.summary.failed} failed`
  + (recover ? `; ${result.summary.recovered} recoverable from the archive` : '')
  + `; ${result.summary.suspect} suspect` + ` -> ${out}`);
if (result.summary.suspect) {
  console.log(`\nSUSPECT — ${result.summary.suspect} URL(s) answered 200 from what looks like a wall,`);
  console.log('not the document. These are NOT dead and do not fail the gate; read them.');
  for (const row of rows.filter((entry) => entry.suspect)) {
    console.log(`SUSPECT ${row.status} ${row.url}`);
    console.log(`  ${row.suspect_reason}`);
    if (row.final_url && row.final_url !== row.url) console.log(`  final: ${row.final_url}`);
  }
  console.log('');
}
if (result.summary.failed) {
  for (const row of rows.filter((entry) => !entry.ok)) {
    console.log(`FAIL ${row.status ?? 'ERR'} ${row.url} — ${row.error ?? `HTTP ${row.status}`}`);
    if (row.recovered) {
      console.log(`  RECOVERED ${row.recovered.snapshot}`);
      if (row.recovered.note) console.log(`  NOTE      ${row.recovered.note}`);
      console.log('  Swap the citation to the snapshot. Do NOT re-source the page onto a different');
      console.log('  text until recovery has actually failed — replacing a recoverable source costs a');
      console.log('  re-harvest and silently rewrites the provenance of every item it backed.');
    } else if (recover) {
      console.log('  no archived snapshot under any host variant — re-sourcing is justified here');
    }
  }
}
// Default exit 0 preserves `run-wave.mjs`, which halts the audit on nonzero.
if (failOnDead && result.summary.failed) process.exit(1);
