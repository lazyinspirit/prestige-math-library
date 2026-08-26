#!/usr/bin/env node
// paths.mjs — where this repo is, and where the app repo it borrows from is.
//
// WHY THIS EXISTS. This repo has no `node_modules` of its own: tsx, KaTeX and
// the normative precheck source all live in the prestige-intelligence checkout
// next door. Every tool that needed one reached in through a hardcoded
// `/root/Projects/...` literal, which is invisible until it isn't — on a
// checkout under a different home the loader simply does not resolve, and a gate
// that could not start looks a lot like a gate that found nothing wrong.
// Unattended, that is the whole difference between a halt and a silent skip.
//
// RESOLUTION ORDER for the app repo, first existing directory wins:
//   1. $PRESTIGE_APP_DIR                     explicit; always wins
//   2. <repo>/../prestige-intelligence       the sibling checkout
//   3. /root/Projects/prestige-intelligence  the original VPS layout
//
// This repo's own root is never configured — it is derived from this file's
// location, because tools/ is always exactly one level below it.
//
// Every accessor THROWS with the remedy rather than returning a broken path, and
// nothing resolves at import time: a tool that never needs tsx must not fail to
// load because tsx is absent.

import { existsSync, realpathSync } from 'node:fs';
import { delimiter, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

export const REPO = join(fileURLToPath(new URL('.', import.meta.url)), '..');

const APP_CANDIDATES = [
  process.env.PRESTIGE_APP_DIR,
  join(REPO, '..', 'prestige-intelligence'),
  '/root/Projects/prestige-intelligence',
].filter(Boolean);

/** The prestige-intelligence checkout, or null when none of the candidates exist. */
export const APP_DIR = APP_CANDIDATES.find((dir) => {
  try { return existsSync(dir); } catch { return false; }   // unreadable != absent
}) ?? null;

export const WORKER_DIR = APP_DIR ? join(APP_DIR, 'worker') : null;
export const WEB_DIR = APP_DIR ? join(APP_DIR, 'web') : null;

const need = (what, path, install) => {
  if (!APP_DIR) {
    throw new Error(
      `${what}: no prestige-intelligence checkout found. Tried ${APP_CANDIDATES.join(', ')}. ` +
      'Set PRESTIGE_APP_DIR to the app repo.');
  }
  if (!existsSync(path)) {
    throw new Error(
      `${what}: ${path} does not exist. The app repo is at ${APP_DIR}` +
      (install ? `, but its dependencies are not installed — run \`npm install\` in ${install}.` : '.'));
  }
  return path;
};

const localTypeScriptRegister = join(REPO, 'tools/typescript-register.mjs');

const globalTypeScriptRuntime = () => {
  if (process.env.PRESTIGE_TYPESCRIPT_PATH && existsSync(process.env.PRESTIGE_TYPESCRIPT_PATH)) {
    return process.env.PRESTIGE_TYPESCRIPT_PATH;
  }
  for (const dir of (process.env.PATH ?? '').split(delimiter).filter(Boolean)) {
    const command = join(dir, process.platform === 'win32' ? 'tsc.cmd' : 'tsc');
    if (!existsSync(command)) continue;
    try {
      const root = dirname(dirname(realpathSync(command)));
      const runtime = join(root, 'lib/typescript.js');
      if (existsSync(runtime)) return runtime;
    } catch { /* an unreadable PATH entry is not a usable compiler */ }
  }
  return null;
};

/** A TypeScript ESM loader, for `node --import <loader> tools/<x>.mts`.
 * Prefer the app's tsx package. If that checkout has no installed dependencies,
 * use this repo's register hook with an already-installed global TypeScript
 * runtime; this executes the same source files and makes no external checkout
 * writable. */
export const tsxLoader = () => {
  const appLoader = join(WORKER_DIR ?? '', 'node_modules/tsx/dist/loader.mjs');
  if (WORKER_DIR && existsSync(appLoader)) return appLoader;
  const typescript = globalTypeScriptRuntime();
  if (typescript && existsSync(localTypeScriptRegister)) {
    process.env.PRESTIGE_TYPESCRIPT_PATH = typescript;
    return localTypeScriptRegister;
  }
  return need('tsx loader', appLoader, WORKER_DIR);
};

/** The normative precheck implementation. Never substitute a test fixture. */
export const precheckSource = () =>
  need('precheck source', join(WORKER_DIR ?? '', 'src/precheck.ts'), null);

/** Candidates for `createRequire`, most specific first; the bare name lets a
 *  locally installed copy work without the app repo at all. */
export const katexCandidates = () =>
  [APP_DIR ? join(WEB_DIR, 'node_modules/katex') : null, 'katex'].filter(Boolean);

/** The SAME YAML parser the renderer loads frontmatter with (web/lib/math-library.ts).
 *  It must be that copy and not a second implementation: the whole point of the
 *  strict-frontmatter check is that the gate and the renderer agree on what
 *  parses, and two parsers cannot be made to agree by inspection. */
export const yamlCandidates = () =>
  [APP_DIR ? join(WEB_DIR, 'node_modules/yaml') : null, 'yaml'].filter(Boolean);

/** For `npx --prefix <dir> tsx ...`. */
export const workerPrefix = () => {
  if (!WORKER_DIR) {
    throw new Error(
      `worker prefix: no prestige-intelligence checkout found. Tried ${APP_CANDIDATES.join(', ')}. ` +
      'Set PRESTIGE_APP_DIR to the app repo.');
  }
  return WORKER_DIR;
};

/** One-line description for a preflight report. */
export const describe = () => ({
  repo: REPO,
  app_dir: APP_DIR,
  app_dir_source: APP_DIR === process.env.PRESTIGE_APP_DIR ? 'PRESTIGE_APP_DIR'
    : APP_DIR === join(REPO, '..', 'prestige-intelligence') ? 'sibling checkout'
    : APP_DIR ? 'default VPS layout' : 'not found',
});
