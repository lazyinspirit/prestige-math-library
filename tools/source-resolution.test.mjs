import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync, spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { sourceDropped, sourceResolutionErrors } from './source-resolution.mjs';
import { citationUrls } from './citation-urls.mjs';

const repo = new URL('../', import.meta.url).pathname;
const source = () => ({
  url: 'https://missing.example.org/book.pdf', title: 'Unavailable book',
  contents: [{ name: 'Identity', disposition: 'included', item: 'lem-test-identity' }],
  source_resolution: {
    status: 'dropped', decided_by: 'step-1-scaffolder', confidence: 'certain',
    reason: 'No full text located after recovery and archive search.',
    search_summary: 'Author site, institutional copies and archives searched.',
    searches: [{ query: 'author book full text archive', outcome: 'Only metadata and previews found.' }],
    attempts: Array.from({ length: 6 }, (_, i) => ({
      url: `https://missing.example.org/copy-${i}.pdf`, at: `2026-09-08T00:0${i}:00Z`, outcome: '404',
    })),
    alternatives: [{ item: 'lem-test-identity', argument: 'For each x, the identity map sends x to x, so composing it twice sends x to x.', deps: [] }],
  },
});

test('documented drops preserve results without pretending to fetch the original', () => {
  const s = source();
  assert.equal(sourceDropped(s), true);
  assert.deepEqual(sourceResolutionErrors(s), []);
  assert.deepEqual([...citationUrls({ pages: [{ sources: [s] }] }, { coverage: true })], []);
  assert.equal(s.contents.length, 1);
  assert.equal(s.fetch_verified, undefined);
});

test('insufficient retries, uncertainty, absent searches and orphan results fail closed', () => {
  for (const change of [
    (r) => { r.attempts.pop(); },
    (r) => { r.confidence = 'likely'; },
    (r) => { r.status = 'owner-escalation'; },
    (r) => { r.searches = []; },
    (r) => { r.alternatives = []; },
    (r) => { r.alternatives = 'invalid'; },
    (r) => { r.attempts[0] = null; },
  ]) {
    const s = source(); change(s.source_resolution);
    assert.equal(sourceDropped(s), false);
    assert.ok(sourceResolutionErrors(s).length);
  }
});

test('all Step 1 source gates accept a documented local alternative; escalation blocks', () => {
  const dir = mkdtempSync(join(tmpdir(), 'source-resolution-test-'));
  const cov = join(dir, 'test.coverage.json');
  const live = join(dir, 'liveness.json');
  const s = source();
  const save = () => writeFileSync(cov, JSON.stringify({ pages: [{ page: 'test', sources: [s] }] }));
  const run = (tool, args) => spawnSync(process.execPath, [join(repo, 'tools', tool), ...args], { encoding: 'utf8', timeout: 15000 });
  try {
    save();
    writeFileSync(join(dir, 'test.pages.json'), JSON.stringify([{ id: 'test', kind: 'A', items: [{ id: 'lem-test-identity', deps: [] }] }]));
    for (const [tool, args] of [
      ['coverage-checklist.mjs', [cov]],
      ['url-sweep.mjs', ['--coverage', cov, '--out', live, '--fail-on-dead']],
      ['source-fetch-check.mjs', ['--coverage', cov]],
      ['source-backing.mjs', ['--coverage', cov, '--liveness', live, '--require-verified']],
    ]) {
      const r = run(tool, args);
      assert.equal(r.status, 0, `${tool}: ${r.stdout}\n${r.stderr}`);
    }
    assert.deepEqual(JSON.parse(readFileSync(live, 'utf8')).rows, []);
    s.source_resolution.alternatives[0].deps = ['undeclared-dependency']; save();
    assert.equal(run('coverage-checklist.mjs', [cov]).status, 1);
    s.source_resolution.status = 'owner-escalation'; save();
    assert.equal(run('source-fetch-check.mjs', ['--coverage', cov]).status, 1);
    assert.notEqual(run('source-backing.mjs', ['--coverage', cov, '--liveness', live]).status, 0);
  } finally { rmSync(dir, { recursive: true, force: true }); }
});

test('failed body fetch performs the initial attempt plus five retries and records evidence', async () => {
  let requests = 0;
  const server = createServer((_req, res) => { requests++; res.writeHead(404); res.end('missing'); });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const dir = mkdtempSync(join(tmpdir(), 'source-retries-test-'));
  const cov = join(dir, 'test.coverage.json');
  try {
    const s = { url: `http://127.0.0.1:${server.address().port}/book.pdf` };
    writeFileSync(cov, JSON.stringify({ pages: [{ page: 'test', sources: [s] }] }));
    const child = spawn(process.execPath, [join(repo, 'tools/source-fetch-check.mjs'), '--coverage', cov, '--stamp'], { stdio: 'ignore' });
    const code = await new Promise((resolve, reject) => { child.on('error', reject); child.on('exit', resolve); });
    assert.equal(code, 1);
    assert.equal(requests, 6);
    const result = JSON.parse(readFileSync(cov, 'utf8')).pages[0].sources[0];
    assert.equal(result.recovery_attempts.length, 6);
    assert.equal(result.fetch_verified, undefined);
  } finally {
    await new Promise((resolve) => server.close(resolve));
    rmSync(dir, { recursive: true, force: true });
  }
});
