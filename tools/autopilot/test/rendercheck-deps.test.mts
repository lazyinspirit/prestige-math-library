// rendercheck without its renderer is not a rendercheck.
//
// WHY. The two defect classes the tool exists for — a formula that dies in
// the real KaTeX and a frontmatter YAML error that 404s a published page —
// both live in dependencies loaded from the app repo. When those failed to
// load, the tool printed "OK … (SKIPPED: Cannot find module 'katex')" and
// exited 0: a green gate with its two real checks disabled, invisible to the
// engine, which reads exit codes and never parses a passing gate's text.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { spawnSync } from 'node:child_process';

const REPO: string = process.env.AUTOPILOT_TEST_REPO
  ?? new URL('../../..', import.meta.url).pathname.replace(/\/$/, '');

test('rendercheck fails when KaTeX or the renderer YAML parser cannot load', () => {
  const emptyApp = mkdtempSync(join(tmpdir(), 'no-app-'));
  const r = spawnSync(process.execPath,
    [join(REPO, 'tools', 'rendercheck.mjs'), 'items/lem-cauchy-bounded.md'],
    { cwd: REPO, encoding: 'utf8', timeout: 120_000, env: { ...process.env, PRESTIGE_APP_DIR: emptyApp } });
  assert.notEqual(r.status, 0,
    `rendercheck exited ${r.status} with its KaTeX and YAML checks disabled\n${r.stdout.slice(-400)}`);
  assert.match(r.stdout + r.stderr, /katex|KaTeX/i);
});

test('rendercheck still passes with the real renderer present', () => {
  const r = spawnSync(process.execPath,
    [join(REPO, 'tools', 'rendercheck.mjs'), 'items/lem-cauchy-bounded.md'],
    { cwd: REPO, encoding: 'utf8', timeout: 120_000 });
  assert.equal(r.status, 0, r.stdout.slice(-400));
  assert.doesNotMatch(r.stdout, /SKIPPED/);
});
