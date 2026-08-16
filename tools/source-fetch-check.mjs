#!/usr/bin/env node
// source-fetch-check — can a reader actually FETCH FULL TEXT from every
// source a scaffold cites?
//
//   node tools/source-fetch-check.mjs --coverage <a,b,...> --stamp   # fetch + stamp
//   node tools/source-fetch-check.mjs --coverage <a,b,...>           # gate: stamps exist
//
// Owner instruction (2026-08-17): dead and stale URLs from academic sources
// are an expected, common occurrence, and the machinery must address them
// mechanically — Betas test each URL at step 1 and prove FULL TEXT is
// fetchable: the document itself, never an abstract or landing page. This
// tool is the mechanical half. The liveness sweep (url-sweep.mjs)
// deliberately probes HEADERS ONLY, because downloading bodies at gate time
// once reported a legitimate 9.4 MB PDF as dead; this tool is the complement
// — it downloads the body ONCE, at harvest time, by the Beta that is reading
// the source anyway, and leaves a durable stamp the gate can check without
// any network at all.
//
// WHAT COUNTS AS FULL TEXT — four layers, each mechanical:
//   1. The URL itself must not be a known ABSTRACT-PAGE shape. arXiv's
//      `/abs/` is the canonical case — the full text lives at `/pdf/` — and
//      the failure message says exactly that. Signatures are narrow, in the
//      bot-wall spirit: a path shape, never a substring a legitimate title
//      could trip. Checked before any fetch.
//   2. The final URL after redirects must not be a bot wall or sign-in page
//      (bot-wall.mjs — a Springer cookie-wall answers 200 with no
//      mathematics in it).
//   3. A PDF must carry the %PDF magic, a substantive size, and — when its
//      page objects are countable — MORE THAN THREE PAGES: an abstract or
//      front-matter extract is 1–3 pages, a citable treatment is not. Object-
//      stream PDFs hide their page tree from a byte scan; those pass on size
//      and stamp `pages: null`, and the count that IS recorded lets the
//      step-3 Alpha weigh a claimed locator range against the document.
//   4. An HTML page must carry substantive extracted text.
//
// STAMP MODE (`--stamp`) fetches every unstamped source and writes
// `fetch_verified: {at, bytes, sha256_16, kind, pages?|text_chars?}` onto it.
// Already-stamped sources are skipped, so re-runs are cheap and idempotent;
// `--force` re-fetches. Failures are reported by name and leave the source
// unstamped — exit 1 tells the calling Beta (or the stage repair hook) that
// scouting is owed: an alternate URL for the SAME source, or the archive
// fallback under url-sweep's convention (url <- snapshot, original_url kept).
//
// CHECK MODE (no flag) is the gate: every source carries a stamp. No
// network, cheap, and non-vacuous — zero sources is a failure, never a pass.

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';
import { REPO } from './paths.mjs';
import { botWallReason } from './bot-wall.mjs';

const argv = process.argv.slice(2);
const option = (name) => { const i = argv.indexOf(name); return i >= 0 && argv[i + 1] ? argv[i + 1] : null; };
const coverages = (option('--coverage') ?? '').split(',').map((s) => s.trim()).filter(Boolean);
const stampMode = argv.includes('--stamp');
const force = argv.includes('--force');
const timeoutSec = Number(option('--timeout-sec') ?? 90);
const maxBytes = Number(option('--max-bytes') ?? 80 * 1024 * 1024);
// substantive-content floors: a 400-byte "not found" page must not stamp
const MIN_PDF = 10 * 1024;
const MIN_HTML_TEXT = 2 * 1024;
const MIN_OTHER = 10 * 1024;
const MIN_PDF_PAGES = 4;   // 1-3 countable pages is an abstract, not a treatment

if (!coverages.length) {
  console.error('usage: node tools/source-fetch-check.mjs --coverage <a,b,...> [--stamp] [--force] [--timeout-sec 90] [--max-bytes N]');
  process.exit(2);
}
const absolute = (f) => (f.startsWith('/') ? f : join(REPO, f));

/** Known abstract/landing-page URL shapes, each with the fix in the message.
 *  Narrow on purpose: path shapes only, never substrings. */
const ABSTRACT_SHAPES = [
  { test: (u) => /(^|\.)arxiv\.org$/i.test(u.host) && /^\/abs\//i.test(u.pathname),
    why: 'arXiv /abs/ is the abstract page — cite the full text at /pdf/<id>' },
  { test: (u) => /(^|\.)sciencedirect\.com$/i.test(u.host) && /\/science\/article\/abs\//i.test(u.pathname),
    why: 'ScienceDirect /article/abs/ is the abstract page — cite an open full-text copy or a different source' },
  { test: (u) => /(^|\.)semanticscholar\.org$/i.test(u.host) && /^\/paper\//i.test(u.pathname),
    why: 'Semantic Scholar /paper/ is a metadata page — cite the document it indexes' },
];
function abstractShape(url) {
  try {
    const u = new URL(url);
    for (const s of ABSTRACT_SHAPES) if (s.test(u)) return s.why;
  } catch { /* malformed URLs fail at fetch */ }
  return null;
}

/** Fetch the full body with Node's own fetch: redirects followed, the final
 *  URL on the response, timeout by AbortSignal — no subprocess, no flag
 *  surface. (A curl-based version stalled against a local test server and
 *  needed a stderr marker to recover the final URL; this replaces it.) */
async function fetchFull(url) {
  try {
    const res = await fetch(url, {
      redirect: 'follow',
      signal: AbortSignal.timeout(timeoutSec * 1000),
      headers: { 'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) prestige-math-library source check', accept: '*/*' },
    });
    const finalUrl = res.url || url;
    if (!res.ok) return { error: `HTTP ${res.status}`, finalUrl };
    const declared = Number(res.headers.get('content-length') ?? 0);
    if (declared > maxBytes) return { error: `content-length ${declared} exceeds --max-bytes ${maxBytes}`, finalUrl };
    const buffer = Buffer.from(await res.arrayBuffer());
    if (buffer.length > maxBytes) return { error: `body of ${buffer.length} bytes exceeds --max-bytes ${maxBytes}`, finalUrl };
    return { bytes: buffer.length, buffer, finalUrl };
  } catch (err) {
    const why = err?.name === 'TimeoutError' ? `timeout after ${timeoutSec}s`
      : (err?.cause?.code ?? err?.message ?? String(err));
    return { error: why, finalUrl: url };
  }
}

/** Count a PDF's page objects from bytes. Object-stream PDFs hide the page
 *  tree; return null rather than a false low count. */
function pdfPageCount(buffer) {
  const text = buffer.toString('latin1');
  const pages = text.match(/\/Type\s*\/Page(?![a-zA-Z])/g)?.length ?? 0;
  if (pages > 0) return pages;
  const counts = [...text.matchAll(/\/Type\s*\/Pages[^>]*?\/Count\s+(\d+)/g)].map((m) => Number(m[1]));
  if (counts.length) return Math.max(...counts);
  return null;
}

/** Classify a fetched body as full text, or say why it is not. */
function classify(url, finalUrl, buffer) {
  const wall = botWallReason(url, finalUrl ?? url);
  if (wall) return { fail: `bot wall: ${wall}` };
  const head = buffer.subarray(0, 8).toString('latin1');
  if (head.startsWith('%PDF')) {
    if (buffer.length < MIN_PDF) return { fail: `PDF of ${buffer.length} bytes — below the ${MIN_PDF}-byte floor` };
    const pages = pdfPageCount(buffer);
    if (pages !== null && pages < MIN_PDF_PAGES) {
      return { fail: `PDF with ${pages} page(s) — an abstract or extract, not a citable treatment; find the full document` };
    }
    return { kind: 'pdf', detail: { pages } };
  }
  const text = buffer.toString('utf8');
  if (/<html[\s>]|<!doctype html/i.test(text.slice(0, 2048))) {
    const stripped = text.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '')
      .replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (stripped.length < MIN_HTML_TEXT) return { fail: `HTML with ${stripped.length} chars of text — below the ${MIN_HTML_TEXT}-char floor (a wall or an error page, not a document)` };
    return { kind: 'html', detail: { text_chars: stripped.length } };
  }
  if (buffer.length < MIN_OTHER) return { fail: `${buffer.length} bytes of unrecognised content — below the ${MIN_OTHER}-byte floor` };
  return { kind: 'binary', detail: {} };
}

let verified = 0;
let stamped = 0;
let sources = 0;
const failures = [];

for (const file of coverages) {
  const path = absolute(file);
  if (!existsSync(path)) { console.error(`ERROR fetch-check-no-coverage: ${file}`); process.exit(1); }
  const cov = JSON.parse(readFileSync(path, 'utf8'));
  let changed = false;
  for (const page of cov.pages ?? []) {
    for (const source of page.sources ?? []) {
      if (!source?.url) continue;
      sources += 1;
      if (source.fetch_verified && !force) { verified += 1; continue; }
      const shape = abstractShape(source.url);
      if (shape) { failures.push(`fetch-check-abstract-url: ${page.page}: ${source.url} — ${shape}`); continue; }
      if (!stampMode) { failures.push(`fetch-check-unstamped: ${page.page}: ${source.url}`); continue; }
      const got = await fetchFull(source.url);
      if (got.error) { failures.push(`fetch-check-dead: ${page.page}: ${source.url} — ${got.error}`); continue; }
      const cls = classify(source.url, got.finalUrl, got.buffer);
      if (cls.fail) { failures.push(`fetch-check-not-full-text: ${page.page}: ${source.url} — ${cls.fail}`); continue; }
      source.fetch_verified = {
        at: new Date().toISOString(),
        bytes: got.bytes,
        sha256_16: createHash('sha256').update(got.buffer).digest('hex').slice(0, 16),
        kind: cls.kind,
        ...cls.detail,
      };
      verified += 1; stamped += 1; changed = true;
    }
  }
  if (changed) writeFileSync(path, JSON.stringify(cov, null, 2) + '\n');
}

if (!sources) { console.error('ERROR fetch-check-empty: zero sources in scope — a selection gone wrong is not a pass'); process.exit(1); }
for (const f of failures) console.error(`ERROR ${f}`);
console.log(`source-fetch-check: ${verified}/${sources} source(s) fetch-verified`
  + (stampMode ? ` (${stamped} newly stamped)` : '') + (failures.length ? `, ${failures.length} FAILED` : ''));
process.exit(failures.length ? 1 : 0);
