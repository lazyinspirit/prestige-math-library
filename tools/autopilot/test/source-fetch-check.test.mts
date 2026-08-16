// Full-text fetchability must be provable, strict, and stamped — not asserted.
//
// WHY. The brief said "Verify every URL you record." — one sentence, no
// mechanism, nothing checking it happened — and the liveness sweep probes
// headers only, so a bot wall answering 200 with an interstitial body read as
// a live citation. The owner's instruction (2026-08-17): Betas test each URL
// at step 1 and prove full text is fetchable. These tests pin the tool's
// verdicts against a local server — a real PDF stamps, a thin error page does
// not, a sign-in redirect does not, and check mode fails unstamped sources —
// plus the stage wiring on both scaffold-side joins.
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { createServer } from 'node:http';
import type { Server } from 'node:http';

const execFileP = promisify(execFile);

import { stages } from '../stages/mathlib.mts';

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');
const TOOL = join(REPO, 'tools', 'source-fetch-check.mjs');

// ---- a local source host: one real PDF, one thin page, one sign-in bounce ----
let server: Server;
let base = '';
/** A byte-level PDF the page counter can read: n page objects + padding. */
const fakePdf = (pages: number) => Buffer.concat([
  Buffer.from('%PDF-1.4\n'),
  Buffer.from(Array.from({ length: pages }, (_, i) => `${i + 2} 0 obj << /Type /Page /Parent 1 0 R >> endobj\n`).join('')),
  Buffer.alloc(20_000, 0x20),
]);

before(async () => {
  const article = `<html><body><main>${'Lemma 1. A finite intersection of open sets is open. '.repeat(120)}</main></body></html>`;
  server = createServer((req, res) => {
    if (req.url === '/notes.pdf') { res.writeHead(200, { 'content-type': 'application/pdf' }); res.end(fakePdf(12)); return; }
    if (req.url === '/abstract.pdf') { res.writeHead(200, { 'content-type': 'application/pdf' }); res.end(fakePdf(2)); return; }
    if (req.url === '/article.html') { res.writeHead(200, { 'content-type': 'text/html' }); res.end(article); return; }
    if (req.url === '/thin.html') { res.writeHead(200, { 'content-type': 'text/html' }); res.end('<html><body>Not found.</body></html>'); return; }
    if (req.url === '/paywalled.pdf') { res.writeHead(302, { location: `${base}/signin/` }); res.end(); return; }
    if (req.url === '/signin/') { res.writeHead(200, { 'content-type': 'text/html' }); res.end(`<html><body>${'Please sign in to continue. '.repeat(200)}</body></html>`); return; }
    res.writeHead(404); res.end('gone');
  });
  await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
  base = `http://127.0.0.1:${(server.address() as any).port}`;
});
after(() => server?.close());

function coverage(urls: string[]) {
  const dir = mkdtempSync(join(tmpdir(), 'sfc-'));
  mkdirSync(join(dir, 'research'));
  const file = join(dir, 'research', 'cov.json');
  writeFileSync(file, JSON.stringify({
    pages: [{ page: 'p', sources: urls.map((url) => ({ url, title: 't', locator: 'l', contents: [] })) }],
  }, null, 2));
  return { dir, file };
}

// ASYNC on purpose: the fixture server lives in THIS process, and a
// spawnSync here blocks the event loop — the server can never accept the
// tool's connection and every fetch times out. That deadlock cost four
// red tests against a working tool before it was recognised.
async function run(file: string, extra: string[] = []) {
  try {
    const { stdout, stderr } = await execFileP(process.execPath,
      [TOOL, '--coverage', file, '--timeout-sec', '10', ...extra], { timeout: 120_000 });
    return { status: 0, stdout, stderr };
  } catch (err: any) {
    return { status: err.code ?? 1, stdout: err.stdout ?? '', stderr: err.stderr ?? '' };
  }
}

test('a real PDF and a substantive page stamp; the stamps carry evidence', async () => {
  const { dir, file } = coverage([`${base}/notes.pdf`, `${base}/article.html`]);
  const r = await run(file, ['--stamp']);
  assert.equal(r.status, 0, r.stderr);
  assert.match(r.stdout, /2\/2 source\(s\) fetch-verified \(2 newly stamped\)/);
  const cov = JSON.parse(readFileSync(file, 'utf8'));
  const [pdf, html] = cov.pages[0].sources;
  assert.equal(pdf.fetch_verified.kind, 'pdf');
  assert.equal(pdf.fetch_verified.pages, 12);
  assert.ok(pdf.fetch_verified.bytes > 10_000);
  assert.match(pdf.fetch_verified.sha256_16, /^[0-9a-f]{16}$/);
  assert.equal(html.fetch_verified.kind, 'html');
  assert.ok(html.fetch_verified.text_chars > 2_000);
  rmSync(dir, { recursive: true, force: true });
});

test('a 2-page PDF is an abstract, not a citable treatment', async () => {
  const { dir, file } = coverage([`${base}/abstract.pdf`]);
  const r = await run(file, ['--stamp']);
  assert.equal(r.status, 1);
  assert.match(r.stderr, /fetch-check-not-full-text.*2 page\(s\)/);
  rmSync(dir, { recursive: true, force: true });
});

test('an arXiv /abs/ URL fails by shape, before any fetch, with the fix named', async () => {
  const { dir, file } = coverage(['https://arxiv.org/abs/2101.00001']);
  const r = await run(file, ['--stamp']);
  assert.equal(r.status, 1);
  assert.match(r.stderr, /fetch-check-abstract-url.*cite the full text at \/pdf\//);
  rmSync(dir, { recursive: true, force: true });
});

test('a thin page is not full text and does not stamp', async () => {
  const { dir, file } = coverage([`${base}/thin.html`]);
  const r = await run(file, ['--stamp']);
  assert.equal(r.status, 1);
  assert.match(r.stderr, /fetch-check-not-full-text/);
  const cov = JSON.parse(readFileSync(file, 'utf8'));
  assert.ok(!cov.pages[0].sources[0].fetch_verified, 'a failed fetch must leave no stamp');
  rmSync(dir, { recursive: true, force: true });
});

test('a sign-in redirect is a bot wall, not a document', async () => {
  const { dir, file } = coverage([`${base}/paywalled.pdf`]);
  const r = await run(file, ['--stamp']);
  assert.equal(r.status, 1);
  assert.match(r.stderr, /fetch-check-not-full-text|bot wall/);
  rmSync(dir, { recursive: true, force: true });
});

test('a dead URL reports fetch-check-dead and does not stamp', async () => {
  const { dir, file } = coverage([`http://127.0.0.1:9/unroutable.pdf`]);
  const r = await run(file, ['--stamp']);
  assert.equal(r.status, 1);
  assert.match(r.stderr, /fetch-check-dead/);
  rmSync(dir, { recursive: true, force: true });
});

test('check mode fails unstamped sources without touching the network', async () => {
  const { dir, file } = coverage(['https://any.example.edu/x.pdf']);
  const r = await run(file);
  assert.equal(r.status, 1);
  assert.match(r.stderr, /fetch-check-unstamped/);
  rmSync(dir, { recursive: true, force: true });
});

test('a stamped file passes check mode, and re-stamping is a no-op', async () => {
  const { dir, file } = coverage([`${base}/notes.pdf`]);
  assert.equal((await run(file, ['--stamp'])).status, 0);
  const once = readFileSync(file, 'utf8');
  const check = await run(file);
  assert.equal(check.status, 0, check.stderr);
  assert.match(check.stdout, /1\/1 source\(s\) fetch-verified/);
  const again = await run(file, ['--stamp']);
  assert.equal(again.status, 0);
  assert.match(again.stdout, /\(0 newly stamped\)/);
  assert.equal(readFileSync(file, 'utf8'), once, 'idempotent re-stamp must not rewrite');
  rmSync(dir, { recursive: true, force: true });
});

test('zero sources is a failure, never a pass', async () => {
  const dir = mkdtempSync(join(tmpdir(), 'sfc-'));
  mkdirSync(join(dir, 'research'));
  const file = join(dir, 'research', 'cov.json');
  writeFileSync(file, JSON.stringify({ pages: [] }));
  const r = await run(file);
  assert.equal(r.status, 1);
  assert.match(r.stderr, /fetch-check-empty/);
  rmSync(dir, { recursive: true, force: true });
});

// ---------------------------------------------------------------- the wiring

test('both scaffold-side joins gate on the stamp, and both repair mechanically', () => {
  const dir = mkdtempSync(join(tmpdir(), 'sfc-stage-'));
  mkdirSync(join(dir, 'research'));
  for (const b of ['1']) writeFileSync(join(dir, 'research', `demo-batch-${b}.pages.json`), '[]');
  const ctx = { run: 'demo', repo: dir };
  for (const id of ['1-scaffold', '3-recheck']) {
    const st: any = stages.find((s: any) => s.id === id);
    const g = st.gates(ctx).find((x: any) => x.id === 'source-fetch-check');
    assert.ok(g, `${id} declares no source-fetch-check gate`);
    assert.ok(g.liveness, `${id}'s fetch gate has no liveness floor`);
    assert.ok(typeof st.onGateFailure === 'function', `${id} has no repair hook`);
    assert.ok((st.maxFixRounds ?? 0) >= 1, `${id} has no repair budget`);
  }
  // 3-recheck also sweeps liveness at its join now
  const st3: any = stages.find((s: any) => s.id === '3-recheck');
  assert.ok(st3.gates(ctx).some((x: any) => x.id === 'url-liveness'), '3-recheck lost the liveness sweep');
  rmSync(dir, { recursive: true, force: true });
});
