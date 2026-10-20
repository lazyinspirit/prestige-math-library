#!/usr/bin/env node
// Take a touch snapshot only after a named dispatch has finished successfully.
//
// Repair hooks may launch the cognitive repair and its mechanical follower in
// the same controller tick. The follower must not observe the pre-repair tree,
// so it waits for the exact result record rather than relying on launch order.

import { existsSync, readFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { dirname, isAbsolute, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const argv = process.argv.slice(2);
const value = (flag) => {
  const at = argv.indexOf(flag);
  return at < 0 ? '' : argv[at + 1] ?? '';
};
const toolRoot = resolve(join(dirname(fileURLToPath(import.meta.url)), '..'));
const root = resolve(value('--root') || toolRoot);
const atRoot = (path) => isAbsolute(path) ? path : join(root, path);
const resultPath = atRoot(value('--result'));
const touchesPath = atRoot(value('--touches'));
const label = value('--label');
const timeoutMs = Number(value('--timeout-ms') || 7_200_000);
const die = (message, code = 2) => { console.error(`ERROR ${message}`); process.exit(code); };

if (!value('--result') || !value('--touches') || !label || !Number.isFinite(timeoutMs) || timeoutMs <= 0) {
  die('usage: node tools/touchlog-after-result.mjs --result <result.json> --touches <touches.json> --label <label> [--timeout-ms N] [--root <repo>]');
}

const deadline = Date.now() + timeoutMs;
let result;
while (Date.now() < deadline) {
  if (existsSync(resultPath)) {
    try { result = JSON.parse(readFileSync(resultPath, 'utf8')); }
    catch { result = null; }
    if (result && typeof result.ok === 'boolean') break;
  }
  await new Promise((resolveWait) => setTimeout(resolveWait, 250));
}

if (!result) die(`timed out waiting for a complete result at ${resultPath}`, 1);
if (!result.ok) die(`refusing to snapshot after failed dispatch ${result.role ?? '?'}\/${result.label ?? '?'}`, 1);

const touchlog = join(toolRoot, 'tools', 'touchlog.mjs');
const snap = spawnSync(process.execPath, [touchlog, 'snap', touchesPath, label], {
  cwd: root,
  encoding: 'utf8',
});
if (snap.stdout) process.stdout.write(snap.stdout);
if (snap.stderr) process.stderr.write(snap.stderr);
process.exit(snap.status ?? 1);
