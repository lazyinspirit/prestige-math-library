#!/usr/bin/env node
// preflight.mjs — can this machine actually run a build?
//
//   node tools/preflight.mjs [--judges] [--json]
//
// WHY. Every dependency this repo has is somewhere else: tsx and the normative
// precheck source in the app repo, KaTeX in its web tree, Codex auth in a home
// directory, the DeepSeek key in a .env. Interactively a missing one is an
// annoying error message. Unattended it is worse than that, because several of
// them fail SOFT: rendercheck reports "real KaTeX (SKIPPED)" and exits 0, so a
// gate that never ran is indistinguishable in a log from a gate that found
// nothing wrong. This runs every check up front, loudly, before a run starts
// spending model calls on work it cannot finish.
//
// `--judges` additionally spends one minimal call per judge lane through
// `judge.mts --preflight`. It is opt-in because it costs money and a live token,
// and it is the single check most likely to catch the thing that actually kills
// an overnight run: an expired Codex subscription token, which takes out the
// Sol and Terra lanes simultaneously and cannot be fixed without a human.
//
// Exit 0 = every REQUIRED check passed. Exit 1 = at least one failed.

import { existsSync, readFileSync, statSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';
import { homedir } from 'node:os';
import { createRequire } from 'node:module';
import { REPO, APP_DIR, WORKER_DIR, describe, tsxLoader, precheckSource, katexCandidates, yamlCandidates, deepseekEnvFile } from './paths.mjs';

const argv = process.argv.slice(2);
const asJson = argv.includes('--json');
const withJudges = argv.includes('--judges');
const isAudit = argv.includes('--audit');

const checks = [];
/** @param status 'pass' | 'fail' | 'warn' | 'skip' */
const record = (name, required, status, detail, remedy = null) =>
  checks.push({ name, required, status, detail, remedy });

const attempt = (name, required, fn, remedy = null) => {
  try {
    const detail = fn();
    record(name, required, 'pass', detail);
  } catch (error) {
    record(name, required, required ? 'fail' : 'warn', error.message, remedy);
  }
};

/** Run a command that may not exist at all. */
const probe = (bin, args, timeout = 15_000) => {
  const result = spawnSync(bin, args, { encoding: 'utf8', timeout });
  if (result.error) throw new Error(`${bin}: ${result.error.code === 'ENOENT' ? 'not on PATH' : result.error.message}`);
  if (result.status !== 0) throw new Error(`${bin} exited ${result.status}: ${(result.stderr || result.stdout || '').trim().slice(0, 200)}`);
  return (result.stdout || result.stderr).trim().split('\n')[0];
};

// ---- environment ------------------------------------------------------------

const where = describe();
record('repo', true, 'pass', where.repo);
record('app-repo', true, APP_DIR ? 'pass' : 'fail',
  APP_DIR ? `${APP_DIR} (${where.app_dir_source})` : 'no prestige-intelligence checkout found',
  APP_DIR ? null : 'set PRESTIGE_APP_DIR to the app repo');

attempt('tsx-loader', true, () => tsxLoader(), `npm install in ${WORKER_DIR ?? '<app>/worker'}`);
attempt('precheck-source', true, () => precheckSource(), 'check out the app repo at the matching revision');

// rendercheck degrades to a SKIP without KaTeX, so an unattended run would
// silently stop checking that every item's math actually parses.
attempt('katex', true, () => {
  const req = createRequire(import.meta.url);
  for (const candidate of katexCandidates()) {
    try { req.resolve(candidate); return candidate; } catch { /* try the next candidate */ }
  }
  throw new Error(`not resolvable from ${katexCandidates().join(' or ')}`);
}, `npm install in ${APP_DIR ? join(APP_DIR, 'web') : '<app>/web'} — without it rendercheck SKIPS silently`);

// Same soft failure, one layer up: without the renderer's own `yaml`,
// rendercheck stops checking that each frontmatter block parses at all, and a
// file the renderer silently drops from the corpus 404s every published page
// that lists it.
attempt('yaml', true, () => {
  const req = createRequire(import.meta.url);
  for (const candidate of yamlCandidates()) {
    try { req.resolve(candidate); return candidate; } catch { /* try the next candidate */ }
  }
  throw new Error(`not resolvable from ${yamlCandidates().join(' or ')}`);
}, `npm install in ${APP_DIR ? join(APP_DIR, 'web') : '<app>/web'} — without it rendercheck's frontmatter parse SKIPS silently`);

// ---- model lanes ------------------------------------------------------------

// WHICH CLI IS REQUIRED IS COMPUTED, NOT ASSUMED.
// Two independent consumers decide it, and getting either wrong lets a run start
// that cannot finish:
//
//   AGENTS  — every dispatched role is Claude Opus 5 on the claude CLI (owner,
//             2026-08-23): authoring, Beta, reader, `alpha`, `refuter`,
//             `orchestrator`, `scaffolder`, `mechanic`, and the
//             audit's `audit-beta`/`audit-alpha`/`certifier`. Only
//             `audit-refuter` is elsewhere, and it is a keyed HTTP lane rather
//             than a CLI. No workflow needs Codex for an agent any more.
//   JUDGES  — both workflows judge with the configured lineup, `deepseek+opus`
//             by default (owner, 2026-08-23), with `deepseek+terra` and
//             `deepseek+sonnet` selectable.
//
// The claude CLI is therefore required by every workflow, and Codex is required
// only when the SELECTED JUDGE LINEUP names a GPT-family lane. THIS IS THE EXACT
// MIRROR of what stood here until 2026-08-23, and the hole it re-opens is the
// one that paragraph warned about: checking only the lineup, as this did until
// 2026-08-11, once reported a green preflight for a build that could not
// dispatch its sole adjudicator. The agent side is what closes it, so
// `needClaude` is unconditional below and must STAY unconditional for as long as
// any agent lane is claude — do not simplify it back into the lineup test. The
// lineup table is duplicated from judge.mts on purpose: preflight must not
// import a tool it is checking is runnable.
const lineupModels = {
  'deepseek+opus': ['deepseek-v4-pro', 'claude-opus-5[1m]'],
  'deepseek+terra': ['deepseek-v4-pro', 'gpt-5.6-terra'],
  'deepseek+sonnet': ['deepseek-v4-pro', 'claude-sonnet-5'],
}[process.env.JUDGE_LINEUP ?? 'deepseek+opus'] ?? [];
const judgeNeedsCodex = lineupModels.some((m) => m.startsWith('gpt-'));
// Unconditional in both workflows: every agent lane is claude, and so is the
// Opus judge lane whenever it is selected.
const needClaude = true;
// Nothing routes to Codex after 2026-08-23; only a GPT-family JUDGE lane does.
const needCodex = judgeNeedsCodex;

const codexHome = process.env.CODEX_HOME ?? join(homedir(), '.codex');
attempt('codex-cli', needCodex, () => probe(process.env.CODEX_BIN ?? 'codex', ['--version']),
  'install the Codex CLI — only a GPT-family judge lane spawns it now');
// PRESENCE IS NOT VALIDITY (2026-08-10, learned the hard way). This checks that
// an auth record exists; it cannot tell a live token from a retired one, and
// neither can `codex login status`, which reads the file and keeps reporting
// "Logged in using ChatGPT" against a refresh token the server has already
// retired. That false green cost a build: a long Beta rotated the single-use
// refresh token inside its throwaway CODEX_HOME, the rotation was discarded
// with the temp directory, and every later codex call died on
// `refresh_token_reused`. `dispatch.mjs` now persists the rotation back; the
// label here is downgraded so nobody reads this line as proof the lane works.
// `--judges` spends one minimal real call and IS proof.
record('codex-auth', needCodex, existsSync(join(codexHome, 'auth.json')) ? 'pass' : 'fail',
  existsSync(join(codexHome, 'auth.json'))
    ? `${join(codexHome, 'auth.json')} present (NOT validated — pass --judges to spend a real call)`
    : `no auth.json under ${codexHome}`,
  'run the Codex login flow; an expired or already-rotated token takes out every GPT-family lane at once');

// UNCONDITIONAL, and the paragraph above says why: every dispatched agent role
// runs `claude -p`, so a missing CLI is not a judge-lineup question. A build that
// cannot spawn this cannot author, audit, adjudicate or repair anything.
attempt('claude-cli', needClaude, () => probe(process.env.CLAUDE_BIN ?? 'claude', ['--version']),
  'install the claude CLI — every dispatched agent role and the Opus judge lane spawn `claude -p`');
// PRESENCE IS NOT CAPACITY, and this is the failure that caused the 2026-08-23
// move in the first place — with the roles reversed. A subscription that has
// spent its weekly or session quota still has a working CLI and a valid session,
// so this check stays green while every lane returns a capacity refusal. A
// capacity refusal is a null verdict and an incomplete stage, never a verdict and
// never a completed stage. `--judges` spends one real call and IS proof.
record('claude-quota', needClaude, 'warn',
  'not checked — CLI presence says nothing about remaining subscription quota',
  'pass --judges to spend one real call per lane before committing to a sweep');

// The key itself is never printed, logged, or placed in any output.
const envFile = deepseekEnvFile();
if (process.env.DEEPSEEK_API_KEY) {
  record('deepseek-key', true, 'pass', 'present in environment');
} else if (envFile && existsSync(envFile)) {
  const found = readFileSync(envFile, 'utf8').split(/\r?\n/)
    .some((line) => /^(?:export\s+)?DEEPSEEK_API_KEY\s*=\s*\S/.test(line));
  record('deepseek-key', true, found ? 'pass' : 'fail',
    found ? `present in ${envFile}` : `${envFile} has no DEEPSEEK_API_KEY`,
    found ? null : 'set DEEPSEEK_API_KEY or add it to that file');
} else {
  record('deepseek-key', true, 'fail', `no DEEPSEEK_API_KEY and no env file at ${envFile ?? '<unresolved>'}`,
    'set DEEPSEEK_API_KEY or DEEPSEEK_ENV_FILE');
}

// ---- host -------------------------------------------------------------------

const major = Number(process.versions.node.split('.')[0]);
record('node', true, major >= 20 ? 'pass' : 'fail', `v${process.versions.node}`,
  major >= 20 ? null : 'the tools use modern ESM and node: imports; use Node 20+');

attempt('git-clean', false, () => {
  const status = probe('git', ['-C', REPO, 'status', '--porcelain']);
  if (status) throw new Error('working tree is dirty; an unattended run should start from a known state');
  return 'clean';
});
attempt('git-branch', false, () => probe('git', ['-C', REPO, 'rev-parse', '--abbrev-ref', 'HEAD']));

attempt('disk', false, () => {
  const out = probe('df', ['-Pk', REPO]).length ? spawnSync('df', ['-Pk', REPO], { encoding: 'utf8' }).stdout : '';
  const line = out.trim().split('\n').at(-1) ?? '';
  const availableKb = Number(line.split(/\s+/)[3]);
  if (!Number.isFinite(availableKb)) throw new Error('could not read free space');
  const gb = availableKb / 1024 / 1024;
  if (gb < 2) throw new Error(`${gb.toFixed(1)} GiB free — judge ledgers and touch snapshots grow through a level`);
  return `${gb.toFixed(1)} GiB free`;
});

// ---- audit-only checks -------------------------------------------------------
//
// The retro-audit needs something the build does not: outbound HTTP from the
// DRIVER. Every provenance row carries a source URL, and the orchestrator is the
// only actor that can verify them — the Codex agent sandboxes have no DNS, which
// is why wave 2 produced eight `established-knowledge` waivers, seven of which
// dissolved the moment someone with a working fetch looked. A wave driven on a
// machine with no egress would silently degrade to that failure mode.

if (isAudit) {
  attempt('outbound-http', true, () => {
    const result = spawnSync('curl', ['-sSL', '-o', '/dev/null', '-w', '%{http_code}', '--max-time', '20',
      'https://en.wikipedia.org/wiki/Ordinal_arithmetic'], { encoding: 'utf8', timeout: 30_000 });
    if (result.error) throw new Error(`curl unavailable: ${result.error.message}`);
    const code = (result.stdout || '').trim();
    if (code !== '200') throw new Error(`expected 200, got ${code || 'no response'} — the URL liveness sweep cannot run`);
    return 'curl reaches the open web (200)';
  }, 'without this the wave cannot verify a single source URL');

  attempt('audit-dir', true, () => {
    const dir = join(REPO, 'research', 'audit');
    if (!existsSync(dir)) throw new Error('research/audit/ is missing — every wave artifact lives there');
    return 'research/audit/ present';
  });
}

// ---- optional live lane check ----------------------------------------------

if (withJudges) {
  attempt('judge-lanes', true, () => {
    const loader = tsxLoader();
    const result = spawnSync(process.execPath, ['--import', loader, 'tools/judge.mts', '--preflight', '--parallel'],
      { cwd: REPO, encoding: 'utf8', timeout: 300_000 });
    if (result.status !== 0) throw new Error((result.stderr || result.stdout || `exited ${result.status}`).trim().slice(0, 400));
    return (result.stdout || '').trim().split('\n').at(-1) ?? 'ok';
  }, 'a failing lane here is the most common cause of a dead overnight run');
} else {
  record('judge-lanes', false, 'skip', 'not run — pass --judges to spend one minimal call per lane');
}

// ---- report -----------------------------------------------------------------

const failed = checks.filter((c) => c.status === 'fail');
const warned = checks.filter((c) => c.status === 'warn');

if (asJson) {
  console.log(JSON.stringify({ summary: { checks: checks.length, failed: failed.length, warned: warned.length }, where, checks }, null, 2));
} else {
  const mark = { pass: ' ok ', fail: 'FAIL', warn: 'warn', skip: 'skip' };
  for (const c of checks) {
    console.log(`[${mark[c.status]}] ${c.name.padEnd(16)} ${c.detail}`);
    if (c.remedy && c.status !== 'pass') console.log(`         ${' '.repeat(16)} → ${c.remedy}`);
  }
  console.log(failed.length
    ? `\nNOT READY — ${failed.length} required check(s) failed${warned.length ? `, ${warned.length} warning(s)` : ''}`
    : `\nREADY${warned.length ? ` — with ${warned.length} warning(s)` : ''}`);
}
process.exit(failed.length ? 1 : 0);
