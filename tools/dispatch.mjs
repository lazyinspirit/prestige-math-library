#!/usr/bin/env node
// dispatch.mjs — spawn one briefed agent role, headlessly.
//
//   node tools/dispatch.mjs --role beta --brief briefs/beta-scaffold.md \
//     --label batch-1 --run frontier-10 --var n=10 --var i=1 [--task extra.md] \
//     [--timeout 7200] [--dry-run] [--json]
//
// WHY. Today an orchestrator session spawns Beta/reader/Alpha through whatever
// subagent mechanism its own runtime provides, which is exactly why closing the
// session kills the build. This turns "spawn a role" into a process any driver —
// or any supervising session, or a systemd unit — can invoke identically.
//
// THE SANDBOX IS PART OF THE ROLE, NOT PART OF THE PROMPT. CLAUDE.md makes
// proof-refuters read-only: "They return evidence, never edits", and where the
// runtime exposes file permissions, grant no write capability. A prompt that
// merely ASKS an agent not to write is not that guarantee. So the role table
// below sets `--sandbox read-only` for refuters mechanically, and no flag can
// override it. Likewise Alpha's lane cap is 1, because Alpha is the single
// writer of the prose scaffolds and two concurrent Alphas would silently
// overwrite each other.
//
// Model routing follows the standing owner rule: GPT 5.6 Sol through the Codex
// subscription at xhigh with a 1,000,000-token context window, passed
// explicitly because the temporary CODEX_HOME deliberately does not inherit the
// user's config.toml.

import { readFileSync, writeFileSync, existsSync, mkdirSync, mkdtempSync, copyFileSync, chmodSync, rmSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { join } from 'node:path';
import { homedir } from 'node:os';
import { REPO } from './paths.mjs';
import { createSlotPool } from './slots.mjs';

const SOL_MODEL = process.env.SOL_MODEL ?? 'gpt-5.6-sol';

// lane caps: how many of this role may run at once across every process.
const ROLES = Object.freeze({
  beta:         { runner: 'codex',  model: SOL_MODEL, sandbox: 'workspace-write', cap: 5, why: 'one per batch, scaffolds and authors' },
  reader:       { runner: 'codex',  model: SOL_MODEL, sandbox: 'workspace-write', cap: 5, why: 'independent step-6 audit of a foreign batch' },
  alpha:        { runner: 'codex',  model: SOL_MODEL, sandbox: 'workspace-write', cap: 1, why: 'SINGLE writer of the prose scaffolds' },
  refuter:      { runner: 'codex',  model: SOL_MODEL, sandbox: 'read-only',       cap: 8, why: 'read-only by owner rule; returns evidence, never edits' },
  orchestrator: { runner: 'claude', model: null,      sandbox: null,              cap: 1, why: 'delegated judgment at steps 3, 4, 9' },
});

const argv = process.argv.slice(2);
const asJson = argv.includes('--json');
const dryRun = argv.includes('--dry-run');
const option = (name) => { const i = argv.indexOf(name); return i >= 0 ? argv[i + 1] : null; };
const options = (name) => argv.reduce((acc, arg, i) => (arg === name && argv[i + 1] ? [...acc, argv[i + 1]] : acc), []);

const role = option('--role');
const briefPath = option('--brief');
const label = option('--label');
const run = option('--run');
const taskPath = option('--task');
const timeoutSec = Number(option('--timeout') ?? 7200);

const usage = (message) => {
  if (message) console.error(`dispatch: ${message}`);
  console.error('usage: node tools/dispatch.mjs --role <role> --brief <file> --label <name> --run <name>');
  console.error(`                               [--var k=v ...] [--task <file>] [--timeout <sec>] [--dry-run] [--json]`);
  console.error(`roles: ${Object.entries(ROLES).map(([n, r]) => `${n} (${r.sandbox ?? r.runner}, cap ${r.cap})`).join(', ')}`);
  process.exit(2);
};

if (!role || !ROLES[role]) usage(`--role must be one of ${Object.keys(ROLES).join(', ')}`);
if (!briefPath) usage('--brief is required');
if (!label || !/^[A-Za-z0-9._-]+$/.test(label)) usage('--label is required and must be a plain name');
if (!run || !/^[A-Za-z0-9._-]+$/.test(run)) usage('--run is required and must be a plain name');
if (!Number.isFinite(timeoutSec) || timeoutSec <= 0) usage('--timeout must be a positive number of seconds');
if (!existsSync(join(REPO, briefPath)) && !existsSync(briefPath)) usage(`brief not found: ${briefPath}`);

const spec = ROLES[role];

// ---- prompt ------------------------------------------------------------------

const resolveFile = (p) => (existsSync(p) ? p : join(REPO, p));
let prompt = readFileSync(resolveFile(briefPath), 'utf8');

// Briefs are templates carrying <n>/<i> placeholders ("Copy into a Beta-n-i
// prompt and substitute <n> and <i>"). Substitute rather than hand an agent a
// brief still talking about level <n>.
const vars = new Map(options('--var').map((pair) => {
  const at = pair.indexOf('=');
  if (at < 0) usage(`--var must be k=v, got ${pair}`);
  return [pair.slice(0, at), pair.slice(at + 1)];
}));
vars.set('run', run);
for (const [key, value] of vars) prompt = prompt.replaceAll(`<${key}>`, value);

if (taskPath) {
  if (!existsSync(resolveFile(taskPath))) usage(`task file not found: ${taskPath}`);
  prompt += `\n\n---\n\n# This dispatch\n\n${readFileSync(resolveFile(taskPath), 'utf8')}`;
}

// A leftover `<n>` is a real defect: the level identity must be concrete, and
// briefing an agent about "level <n>" is how it ends up guessing which level it
// is on. Other placeholders are often deliberately generic — Alpha's brief says
// "every research/level<n>-batch-<i>.notes.md", where `<i>` means *each* batch
// and substituting one value would be wrong — so those only warn.
const unsubstituted = [...new Set([...prompt.matchAll(/<([a-z])>/g)].map((m) => m[1]))];
if (unsubstituted.includes('n')) {
  console.error('dispatch: the brief still says "<n>" — the level identity must be concrete. Pass --var n=<level>.');
  process.exit(2);
}
const generic = unsubstituted.filter((name) => name !== 'n');
if (generic.length && !asJson) {
  console.error(`dispatch: note — brief retains generic placeholder(s) ${generic.map((n) => `<${n}>`).join(', ')}; ` +
    'pass --var to pin them if this role owns exactly one.');
}

// ---- output paths ------------------------------------------------------------

const outDir = join(REPO, 'research', `${run}-dispatch`);
if (!dryRun) mkdirSync(outDir, { recursive: true });
const logPath = join(outDir, `${role}-${label}.log`);
const resultPath = join(outDir, `${role}-${label}.result.json`);
const promptPath = join(outDir, `${role}-${label}.prompt.md`);

// ---- the command -------------------------------------------------------------

const codexHome = process.env.CODEX_HOME ?? join(homedir(), '.codex');

const buildCodex = (temporaryHome) => [
  process.env.CODEX_BIN ?? 'codex',
  [
    '--ask-for-approval', 'never', 'exec',
    '--model', spec.model,
    '-c', 'model_reasoning_effort="xhigh"',
    // The temporary CODEX_HOME holds only auth.json, so config.toml — including
    // model_context_window — is deliberately NOT inherited. Pass the owner's
    // 1,000,000-token window explicitly or the lane silently runs at the
    // built-in default.
    '-c', 'model_context_window=1000000',
    '--sandbox', spec.sandbox,
    '--skip-git-repo-check',
    '--cd', REPO,
    '-',
  ],
  { CODEX_HOME: temporaryHome },
];

const buildClaude = () => [
  process.env.CLAUDE_BIN ?? 'claude',
  ['-p', '--effort', 'high', '--permission-mode', 'acceptEdits'],
  {},
];

if (dryRun) {
  const [bin, args] = spec.runner === 'codex' ? buildCodex('<temp-home>') : buildClaude();
  const report = {
    role, label, run, runner: spec.runner, model: spec.model, sandbox: spec.sandbox,
    lane_cap: spec.cap, timeout_s: timeoutSec,
    command: [bin, ...args].join(' '),
    prompt_bytes: Buffer.byteLength(prompt), prompt_lines: prompt.split('\n').length,
    would_write: { log: logPath, result: resultPath, prompt: promptPath },
  };
  console.log(asJson ? JSON.stringify(report, null, 2) : Object.entries(report)
    .map(([k, v]) => `${k.padEnd(14)} ${typeof v === 'object' ? JSON.stringify(v) : v}`).join('\n'));
  process.exit(0);
}

// ---- run ---------------------------------------------------------------------

const pool = createSlotPool({
  root: '/tmp/prestige-math-library-agent-slots',
  caps: Object.fromEntries(Object.entries(ROLES).map(([name, r]) => [name, r.cap])),
  label: 'dispatch',
});

writeFileSync(promptPath, prompt);

const started = new Date();
const release = await pool.acquire(role);

let temporaryHome = null;
const result = await new Promise((resolve) => {
  let bin, args, extraEnv;
  if (spec.runner === 'codex') {
    // Give each agent a 0700 temporary home containing only its auth record, so
    // parallel agents cannot race on Codex's own state and a killed one leaves
    // nothing behind. The token never enters a prompt, log, or argument.
    temporaryHome = mkdtempSync(`/tmp/prestige-dispatch-${role}-`);
    const sourceAuth = join(codexHome, 'auth.json');
    if (existsSync(sourceAuth)) {
      copyFileSync(sourceAuth, join(temporaryHome, 'auth.json'));
      chmodSync(join(temporaryHome, 'auth.json'), 0o600);
    }
    [bin, args, extraEnv] = buildCodex(temporaryHome);
  } else {
    [bin, args, extraEnv] = buildClaude();
  }

  const child = spawn(bin, args, {
    cwd: REPO,
    stdio: ['pipe', 'pipe', 'pipe'],
    env: { ...process.env, ...extraEnv },
  });

  let stdout = '';
  let stderr = '';
  let settled = false;
  let timedOut = false;

  const finish = (code) => {
    if (settled) return;
    settled = true;
    clearTimeout(timer);
    writeFileSync(logPath, `# ${role}/${label} ${started.toISOString()}\n\n## stdout\n${stdout}\n\n## stderr\n${stderr}\n`);
    resolve({ code, timedOut, stdout, stderr });
  };
  const timer = setTimeout(() => { timedOut = true; child.kill('SIGTERM'); }, timeoutSec * 1000);

  child.stdout.on('data', (chunk) => { stdout += chunk; });
  child.stderr.on('data', (chunk) => { stderr += chunk; });
  child.on('error', (error) => { stderr += String(error); finish(null); });
  child.on('close', finish);
  child.stdin.end(prompt);
});

release();
if (temporaryHome) { try { rmSync(temporaryHome, { recursive: true, force: true }); } catch { /* best-effort */ } }

const ended = new Date();
const record = {
  role, label, run,
  runner: spec.runner, model: spec.model, sandbox: spec.sandbox,
  started_at: started.toISOString(), ended_at: ended.toISOString(), ms: ended - started,
  exit_code: result.code, timed_out: result.timedOut,
  ok: result.code === 0 && !result.timedOut,
  log: logPath, prompt: promptPath,
  // The agent's own final text, which is its report. Truncated in the record;
  // the log holds it in full.
  tail: result.stdout.trim().split('\n').slice(-40).join('\n'),
};
writeFileSync(resultPath, JSON.stringify(record, null, 2) + '\n');

if (asJson) {
  console.log(JSON.stringify(record, null, 2));
} else {
  console.log(`dispatch ${role}/${label}: ${record.ok ? 'ok' : 'FAILED'} in ${Math.round(record.ms / 1000)}s` +
    `${result.timedOut ? ' (TIMED OUT)' : ''}${result.code === null ? ' (spawn error)' : ` exit ${result.code}`}`);
  console.log(`  log    ${logPath}`);
  console.log(`  result ${resultPath}`);
  if (!record.ok) console.log(`\n${result.stderr.trim().split('\n').slice(-10).join('\n')}`);
}
process.exit(record.ok ? 0 : 1);
