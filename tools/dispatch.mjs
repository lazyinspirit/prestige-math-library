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
// Model routing. BUILD roles follow the standing owner rule: GPT 5.6 Sol through
// the Codex subscription at xhigh with a 1,000,000-token context window, passed
// explicitly because the temporary CODEX_HOME deliberately does not inherit the
// user's config.toml. The audit uses the same Codex subscription route: Sol for
// writing/adjudication roles and Terra for independent certification.
//
// ONE EXCEPTION, owner 2026-08-10: the BUILD `alpha` role runs Claude Opus 5 on
// the `claude` runner at xhigh with the same 1,000,000-token window, selected by
// the `[1m]` model id. This is a deliberate cross-family split — Alpha
// adjudicates the DeepSeek and Terra judges, and a Sol Alpha shared the GPT
// family with the Terra lane it was weighing. The published-audit `audit-alpha`
// role is NOT covered by this change and stays on Sol.
//
// READ-ONLY IS ENFORCED PER RUNNER, AND THE TWO RUNNERS DO IT DIFFERENTLY.
// Codex has `--sandbox read-only`, a kernel-level guarantee. The `claude` CLI
// has no sandbox flag, so its analogue is `--disallowed-tools` naming every tool
// that can reach the filesystem — Write, Edit, NotebookEdit AND Bash, since a
// shell is a write primitive. A deny rule outranks `--permission-mode`, so the
// mode may still grant WebFetch/WebSearch (a certifier that cannot check a
// source falls back to guessing) while file mutation stays impossible. This is
// weaker than a sandbox: it binds the tool layer rather than the process, and it
// is only as good as the tool list. `--check-read-only` re-asserts the list from
// the role table so a future tool addition cannot silently widen it.

import { readFileSync, writeFileSync, existsSync, mkdirSync, mkdtempSync, copyFileSync, chmodSync, rmSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { join } from 'node:path';
import { homedir } from 'node:os';
import { REPO, deepseekEnvFile } from './paths.mjs';
import { createSlotPool } from './slots.mjs';

const SOL_MODEL = process.env.SOL_MODEL ?? 'gpt-5.6-sol';
const TERRA_MODEL = process.env.TERRA_MODEL ?? 'gpt-5.6-terra';
const DEEPSEEK_MODEL = process.env.DEEPSEEK_MODEL ?? 'deepseek-v4-pro';
// The `[1m]` suffix IS the context window. Unlike Codex, the claude CLI has no
// `model_context_window` knob — the 1,000,000-token variant is selected by the
// model id itself, and bare `claude-opus-5` silently runs the standard window.
// Alpha reads a whole level plus its published dependencies, so the owner's
// standing 1M rule has to be expressed here or it is not expressed at all.
const OPUS_MODEL = process.env.OPUS_MODEL ?? 'claude-opus-5[1m]';

// READ-ONLY ON THE `claude` RUNNER, and why it is BOTH lists.
//
// Measured 2026-08-05, and this is the whole reason the shape is what it is: a
// read-only probe carrying only `--disallowed-tools Bash Write Edit NotebookEdit`
// CREATED THE FILE IT WAS ASKED TO CREATE. It delegated to a subagent, whose
// tools do not inherit the parent's deny list — the agent's own words were "a
// second agent apparently ran independently". A deny list is a blocklist, and a
// blocklist cannot cover a tool that spawns a fresh tool set.
//
// So the guarantee is the ALLOW list: `--allowed-tools` restricts which tools
// load at all, making the default deny. Re-probed with it, the same request
// reported "no Write, Edit, or Bash tool was loaded or discoverable", while
// WebSearch still retrieved and cited a live URL. The deny list is kept as a
// second, redundant barrier naming the write primitives AND every delegation
// tool, so that a future tool named outside CLAUDE_READ_TOOLS still cannot
// reach the disk through a child agent.
const CLAUDE_READ_TOOLS = Object.freeze(['Read', 'Glob', 'Grep', 'WebSearch', 'WebFetch']);
const CLAUDE_WRITE_TOOLS = Object.freeze([
  'Bash', 'Write', 'Edit', 'NotebookEdit',
  // Delegation tools. Not writers themselves — they MINT a new agent whose tool
  // set this process does not constrain. This is the line the 2026-08-05 probe
  // walked through.
  'Task', 'Agent', 'Workflow',
]);
// Stated separately and on purpose. CLAUDE_WRITE_TOOLS is the list we SEND;
// this is the list a read-only role must be denied for the guarantee to mean
// anything. Keeping them apart lets --check-read-only fail loudly if someone
// trims the sent list, which is the realistic way this protection erodes.
const REQUIRED_CLAUDE_DENIES = Object.freeze(['Bash', 'Write', 'Edit', 'NotebookEdit', 'Task', 'Agent', 'Workflow']);

// lane caps: how many of this role may run at once across every process.
const ROLES = Object.freeze({
  // `web: true` on the two source-reading build lanes (owner, 2026-08-11). Every
  // audit role already had it; the build roles that LEVELS.md §Step 1 orders to
  // "search reputable mathematical sources on the web" did not. A probe on
  // 2026-08-11 confirmed this account exposes a `web.run` tool even under the
  // isolated CODEX_HOME, so this was never a total blackout — but the native
  // search tool was off for exactly the lanes whose brief is half source
  // research, and the comment below already records what an unsearching lane
  // does instead: it asserts from memory.
  beta:         { runner: 'codex',  model: SOL_MODEL, sandbox: 'workspace-write', cap: 5, web: true, why: 'one per batch, scaffolds and authors' },
  reader:       { runner: 'codex',  model: SOL_MODEL, sandbox: 'workspace-write', cap: 5, web: true, why: 'independent step-6 audit of a foreign batch' },
  // Alpha moved from Sol to Claude Opus 5 (owner, 2026-08-10), keeping xhigh and
  // the 1M window (the `[1m]` id above).
  // `effort` must be explicit: buildClaude defaults the claude runner to 'high',
  // so omitting it here would silently downgrade the adjudicator.
  alpha:        { runner: 'claude', model: OPUS_MODEL, sandbox: 'workspace-write', effort: 'xhigh', cap: 1, why: 'SINGLE writer of the prose scaffolds' },
  refuter:      { runner: 'codex',  model: SOL_MODEL, sandbox: 'read-only',       cap: 8, why: 'read-only by owner rule; returns evidence, never edits' },
  orchestrator: { runner: 'codex',  model: SOL_MODEL, sandbox: 'workspace-write', effort: 'xhigh', cap: 1, why: 'delegated judgment at steps 3, 4, 9' },

  // `scaffolder` (owner, 2026-08-13): concurrent SUBJECT-track prose scaffolding,
  // outside any level build. Same runner, model, effort and window as `alpha` —
  // the owner asked for Opus 5 at xhigh per subject — but a different cap, and the
  // difference is the whole reason it is a separate row rather than a raised
  // `alpha` cap.
  //
  // Alpha's cap of 1 is NOT a resource limit. It is a mutual-exclusion guarantee:
  // within a level, Alpha is the single writer of a SHARED set of artifacts, and
  // two concurrent Alphas silently overwrite each other. Raising that cap to run
  // this job would delete the guarantee for every future build. A scaffolder
  // instead owns exactly one subject file that no sibling may open for writing,
  // so mutual exclusion is supplied by the ownership contract in the run's SEAMS
  // record, and the cap is free to express the real constraint.
  //
  // WHICH IS NOT MEMORY. An earlier version of this comment said it was, and
  // that was an assumption stated as a measurement. Measured 2026-08-13 under
  // four live lanes: each `claude` process held ~0.25 GB RSS, 0.9 GB across all
  // four, because inference is server-side and the 1M window costs nothing
  // locally. The host's memory pressure was entirely unrelated.
  //
  // The constraint is the CLAUDE SUBSCRIPTION SESSION LIMIT, and it binds hard:
  // four concurrent Opus 5 lanes at xhigh, each fanning out to its own research
  // subagents, exhausted it in 25-34 minutes and all four died mid-scaffold with
  // "You've hit your session limit". Concurrency multiplies burn rate against a
  // shared quota, so raising this cap does not buy throughput — it buys a
  // shorter run before every lane fails at once, and it burns the orchestrator's
  // own session too. Lower is often faster end to end. The Codex and DeepSeek
  // lanes draw on different accounts and are unaffected by a Claude exhaustion.
  // MOVED FROM OPUS 5 TO SOL (owner, 2026-08-14): "Change agent LLM from opus 5
  // to gpt 5.6 sol". The reason is the paragraph above — quota, measured twice.
  // Two rounds of Opus scaffolders were killed mid-track by the Claude session
  // limit (25-34 min, then 10-43 min), and the second exhaustion reset five and a
  // half hours out. Sol runs on the Codex subscription, which is a different
  // account and is the standing model for every other authoring lane in this
  // repo, so the switch also puts the scaffolder back in line with the model
  // table rather than leaving it as a second Opus exception.
  //
  // `web: true` is REQUIRED here and is not optional decoration: half of a
  // scaffolder's brief is source research, and a Codex lane without it does not
  // fail — it silently asserts from memory, which is the exact failure mode
  // CLAUDE.md records for the build lanes before 2026-08-11.
  scaffolder:   { runner: 'codex',  model: SOL_MODEL,  sandbox: 'workspace-write', effort: 'xhigh', cap: 4, web: true, why: 'one per subject track; owns exactly one prose scaffold file' },

  // `mechanic` (owner, 2026-08-14): "use Terra instead of Sol for tasks
  // requiring less reasoning". Terra on a `medium` effort budget, for work whose
  // difficulty is bookkeeping rather than mathematics — applying an already
  // adjudicated amendment, collecting entries into a table, sweeping ids,
  // reformatting. The judgment has already been made by the time this lane runs.
  //
  // TWO THINGS THIS LANE MAY NEVER DO, and both are load-bearing:
  //
  // 1. **Author mathematical content.** CLAUDE.md is unambiguous — "The
  //    authoring role uses Sol, never Terra." Item authoring stays on `beta`.
  // 2. **Produce anything a Terra judge lane will later judge.** Terra is half
  //    the paired-judge lineup, and a model reviewing its own output is
  //    self-agreement wearing the costume of corroboration. This exact trap was
  //    walked into on frontier-12, where the Terra `certifier` declined to
  //    certify a repair while citing its OWN judge ledger row as support.
  //
  // So: mechanical, post-adjudication, non-judged work only. If a task needs a
  // mathematical decision, it is not this lane's.
  mechanic:     { runner: 'codex',  model: TERRA_MODEL, sandbox: 'workspace-write', effort: 'medium', cap: 4, why: 'bookkeeping after the judgment is made; never authors, never judged by Terra' },

  // ---- the published-page retro-audit (AUDIT-WORKFLOW.md, A0 to A10) --------
  // Every Codex audit lane receives the explicit xhigh/1M configuration below;
  // the tool-less DeepSeek refuter maps xhigh to its API's `max` value.
  'audit-beta':    { runner: 'codex', model: SOL_MODEL,   sandbox: 'workspace-write', effort: 'xhigh', cap: 5, dir: 'research/audit', web: true, why: 'one per category batch: A1/A2 determination, A4 application' },
  'audit-alpha':   { runner: 'codex', model: SOL_MODEL,   sandbox: 'workspace-write', effort: 'xhigh', cap: 1, dir: 'research/audit', web: true, why: 'single adjudicator at A6 and A8' },
  certifier:       { runner: 'codex', model: TERRA_MODEL, sandbox: 'read-only',       effort: 'xhigh', cap: 6, dir: 'research/audit', web: true, why: 'independent current reading of a repair it did not author; needs web to check sources' },
  'audit-refuter': { runner: 'deepseek', model: DEEPSEEK_MODEL, sandbox: 'read-only', effort: 'xhigh', cap: 8, dir: 'research/audit', requiresTask: true, why: 'adversarial proof reading on assembled context; tool-less by transport' },
});

const argv = process.argv.slice(2);
const asJson = argv.includes('--json');
const dryRun = argv.includes('--dry-run');
const option = (name) => { const i = argv.indexOf(name); return i >= 0 ? argv[i + 1] : null; };
const options = (name) => argv.reduce((acc, arg, i) => (arg === name && argv[i + 1] ? [...acc, argv[i + 1]] : acc), []);

// --check-read-only: assert that every role declaring `sandbox: 'read-only'`
// actually gets a mechanical guarantee on its own runner, and print the exact
// enforcement so it is auditable without reading this file. Cheap, spawns
// nothing, and belongs in a preflight: the failure it catches is a role that
// silently became writable because its runner changed.
if (argv.includes('--check-read-only')) {
  const problems = [];
  for (const [name, r] of Object.entries(ROLES)) {
    if (r.sandbox !== 'read-only') continue;
    if (r.runner === 'codex') {
      console.log(`${name.padEnd(14)} codex    --sandbox read-only (process-level)`);
    } else if (r.runner === 'deepseek') {
      console.log(`${name.padEnd(14)} deepseek tool-less API lane, no filesystem (transport-level)`);
    } else if (r.runner === 'claude') {
      const missing = REQUIRED_CLAUDE_DENIES.filter((tool) => !CLAUDE_WRITE_TOOLS.includes(tool));
      if (missing.length) problems.push(`${name}: deny list omits ${missing.join(', ')}`);
      // The allow list is the guarantee; a read-only claude role without one is
      // the exact configuration the 2026-08-05 probe walked out of.
      if (!CLAUDE_READ_TOOLS.length) problems.push(`${name}: no allow list — deny-only is provably escapable via a subagent`);
      console.log(`${name.padEnd(14)} claude   --allowed-tools ${CLAUDE_READ_TOOLS.join(' ')} (default-deny) + deny ${CLAUDE_WRITE_TOOLS.join(' ')}`);
    } else {
      problems.push(`${name}: runner ${r.runner} has no read-only enforcement`);
    }
  }
  for (const problem of problems) console.error(`dispatch: ${problem}`);
  process.exit(problems.length ? 1 : 0);
}

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

// A tool-less runner cannot open a file, so a brief that says "read the item on
// disk" produces a confident reading of nothing. The task file IS the context
// for those lanes, and its absence is a dispatch error rather than a quiet
// degradation.
if (spec.requiresTask && !taskPath) {
  usage(`role ${role} runs on ${spec.runner}, which has no filesystem access — pass --task with the assembled context`);
}
if (taskPath) {
  if (!existsSync(resolveFile(taskPath))) usage(`task file not found: ${taskPath}`);
  prompt += `\n\n---\n\n# This dispatch\n\n${readFileSync(resolveFile(taskPath), 'utf8')}`;
}

// A leftover `<n>` is a real defect: the level identity must be concrete, and
// briefing an agent about "level <n>" is how it ends up guessing which level it
// is on. Other placeholders are often deliberately generic — Alpha's brief says
// "every research/level<n>-batch-<i>.notes.md", where `<i>` means *each* batch
// and substituting one value would be wrong — so those only warn.
// The audit briefs use <k> for the wave and <category> for the batch, exactly as
// the build briefs use <n> and <i>. Both identity placeholders are hard errors
// for the same reason: an agent briefed about "wave <k>" guesses which wave it
// is on, and a wave-2 Beta that guesses wave 3 audits the wrong pages.
const unsubstituted = [...new Set([...prompt.matchAll(/<([a-z]+)>/g)].map((m) => m[1]))];
const IDENTITY = ['n', 'k'];
for (const name of IDENTITY) {
  if (!unsubstituted.includes(name)) continue;
  const what = name === 'n' ? 'level' : 'wave';
  console.error(`dispatch: the brief still says "<${name}>" — the ${what} identity must be concrete. Pass --var ${name}=<${what}>.`);
  process.exit(2);
}
const generic = unsubstituted.filter((name) => !IDENTITY.includes(name));
if (generic.length && !asJson) {
  console.error(`dispatch: note — brief retains generic placeholder(s) ${generic.map((n) => `<${n}>`).join(', ')}; ` +
    'pass --var to pin them if this role owns exactly one.');
}

// ---- output paths ------------------------------------------------------------

// Audit roles keep their dispatch record beside the wave's other artifacts, so a
// wave and a level of the same number cannot collide on a log name.
const outDir = join(REPO, spec.dir ?? 'research', `${run}-dispatch`);
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
    // Role-driven, defaulting to xhigh so every pre-existing lane is unchanged
    // (owner, 2026-08-14). Previously hardcoded, which meant a deliberately
    // cheap lane still paid for xhigh reasoning it did not need. A role that
    // wants less says so in the table; silence still means xhigh.
    '-c', `model_reasoning_effort="${spec.effort ?? 'xhigh'}"`,
    // The temporary CODEX_HOME holds only auth.json, so config.toml — including
    // model_context_window — is deliberately NOT inherited. Pass the owner's
    // 1,000,000-token window explicitly or the lane silently runs at the
    // built-in default.
    '-c', 'model_context_window=1000000',
    // Passed explicitly, never inherited. The temporary CODEX_HOME carries only
    // auth.json, and wave 1b's defect was exactly an implicitly inherited
    // setting that turned out not to be inherited. An audit role that cannot
    // search cannot do provenance determination, and would fall back to
    // `established-knowledge` waivers instead — wave 2 produced eight of those,
    // seven of which evaporated once someone with a working fetch looked.
    ...(spec.web ? ['-c', 'tools.web_search=true'] : []),
    '--sandbox', spec.sandbox,
    '--skip-git-repo-check',
    '--cd', REPO,
    '-',
  ],
  { CODEX_HOME: temporaryHome },
];

// `bypassPermissions` is used even for a read-only role. It is safe because the
// ALLOW list, not the permission mode, is what withholds the write tools — they
// are never loaded, so there is nothing for the mode to permit. It is necessary
// because anything stricter withholds web access: probed 2026-08-05, a read-only
// lane in `default` mode reported it could not confirm web reachability, and a
// certifier that cannot fetch its source falls back to asserting from memory —
// wave 2's eight `established-knowledge` waivers, seven of which dissolved once
// a reader could actually fetch.
//
// `acceptEdits` was the previous setting and was NOT enough, measured on
// frontier-11 step 3 (2026-08-12): it auto-accepts edits but still PROMPTS for
// WebFetch, so Alpha halted its source-faithfulness check with "Claude requested
// permissions to use WebFetch, but you haven't granted it yet", correctly
// recorded a blocker rather than asking, and could not perform criterion 2 of
// the step-3 review at all. A dispatched agent has no human to answer a prompt,
// so any prompt is a silent capability loss dressed up as a completed stage.
// This is also the owner's standing rule (2026-07-30, broadened 2026-08-11):
// no agent may be put in a position to ask for permissions of any kind, web
// search included.
const buildClaude = () => [
  process.env.CLAUDE_BIN ?? 'claude',
  [
    '-p',
    // null model = inherit the session model (the orchestrator role).
    ...(spec.model ? ['--model', spec.model] : []),
    '--effort', spec.effort ?? 'high',
    '--permission-mode', 'bypassPermissions',
    // Allow list FIRST (it is the actual guarantee), deny list second (redundant
    // barrier). Both are variadic, so each must be the last thing before the
    // next flag — hence the explicit ordering rather than a spread at the end.
    ...(spec.sandbox === 'read-only'
      ? ['--allowed-tools', ...CLAUDE_READ_TOOLS, '--disallowed-tools', ...CLAUDE_WRITE_TOOLS]
      : []),
  ],
  {},
];

// The DeepSeek lane is an HTTP call, not a process: no tools, no disk, no web.
// That makes it read-only by construction — the strongest of the three
// guarantees here — and simultaneously blind, which is why `requiresTask` is
// enforced for it. Transport settings mirror the judge lane in tools/judge.mts
// so a refuter and a judge read at the same depth: thinking enabled, the
// owner's xhigh mapped to the API's `max`, and a reasoning-sized token budget.
const DEEPSEEK_MAX_TOKENS = 40_000;

const deepseekKey = () => {
  if (process.env.DEEPSEEK_API_KEY) return process.env.DEEPSEEK_API_KEY;
  const file = deepseekEnvFile();
  if (!file || !existsSync(file)) return null;
  const line = readFileSync(file, 'utf8').split(/\r?\n/)
    .find((l) => /^(?:export\s+)?DEEPSEEK_API_KEY\s*=\s*\S/.test(l));
  return line ? line.replace(/^(?:export\s+)?DEEPSEEK_API_KEY\s*=\s*/, '').replace(/^["']|["']$/g, '').trim() : null;
};

const runDeepSeek = async (text, timeoutMs) => {
  const key = deepseekKey();
  if (!key) return { code: 1, timedOut: false, stdout: '', stderr: `no DEEPSEEK_API_KEY in env or ${deepseekEnvFile()}` };
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: { 'content-type': 'application/json', authorization: `Bearer ${key}` },
      body: JSON.stringify({
        model: spec.model,
        messages: [{ role: 'user', content: text }],
        reasoning_effort: 'max',
        thinking: { type: 'enabled' },
        max_tokens: DEEPSEEK_MAX_TOKENS,
      }),
      signal: controller.signal,
    });
    const raw = await response.text();
    if (response.status >= 400) return { code: 1, timedOut: false, stdout: '', stderr: `HTTP ${response.status}: ${raw.slice(0, 500)}` };
    const body = JSON.parse(raw);
    const content = body.choices?.[0]?.message?.content ?? '';
    const finish = body.choices?.[0]?.finish_reason;
    // A length stop is a truncated reading, not a clean refutation. Surface it
    // as a failure so Alpha re-dispatches rather than adjudicating a fragment.
    if (finish === 'length') return { code: 1, timedOut: false, stdout: content, stderr: 'finish_reason: length — reading truncated, re-dispatch with narrower context' };
    if (!content.trim()) return { code: 1, timedOut: false, stdout: '', stderr: `empty response (finish_reason: ${finish})` };
    return { code: 0, timedOut: false, stdout: content, stderr: '' };
  } catch (error) {
    const aborted = error?.name === 'AbortError';
    return { code: aborted ? null : 1, timedOut: aborted, stdout: '', stderr: String(error) };
  } finally {
    clearTimeout(timer);
  }
};

if (dryRun) {
  const [bin, args] = spec.runner === 'codex' ? buildCodex('<temp-home>')
    : spec.runner === 'deepseek' ? [`POST api.deepseek.com/chat/completions model=${spec.model}`, []]
    : buildClaude();
  const report = {
    role, label, run, runner: spec.runner, model: spec.model, sandbox: spec.sandbox,
    effort: spec.runner === 'claude' ? (spec.effort ?? 'high') : 'xhigh',
    read_only_enforcement: spec.sandbox !== 'read-only' ? null
      : spec.runner === 'codex' ? 'process: --sandbox read-only'
      : spec.runner === 'deepseek' ? 'transport: tool-less API lane, no filesystem at all'
      : `tools: --allowed-tools ${CLAUDE_READ_TOOLS.join(' ')} (default-deny) + --disallowed-tools ${CLAUDE_WRITE_TOOLS.join(' ')}`,
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
let codexAuthPaths = null;

// Copy a rotated auth record back to the canonical CODEX_HOME before the
// temporary home is destroyed. Only writes when the bytes actually changed, so
// an unrotated run leaves the canonical file untouched.
//
// Concurrency caveat, stated rather than hidden: a single-use refresh token and
// N parallel agents are fundamentally in tension — if two agents rotate, the
// later writer wins and the earlier agent's rotated token is retired. That is
// still strictly better than the previous behaviour, where EVERY rotation was
// discarded and the canonical file was guaranteed to go stale. Betas run at
// cap 5, so if this proves lossy the fix is to refresh once before fan-out
// rather than to drop the copy-back.
const persistRotatedCodexAuth = () => {
  if (!codexAuthPaths) return;
  const { source, temporary } = codexAuthPaths;
  try {
    if (!existsSync(temporary)) return;
    const after = readFileSync(temporary);
    if (existsSync(source) && readFileSync(source).equals(after)) return;
    writeFileSync(source, after);
    chmodSync(source, 0o600);
  } catch { /* best-effort: never fail a completed run over bookkeeping */ }
};
const result = spec.runner === 'deepseek'
  ? await (async () => {
    const outcome = await runDeepSeek(prompt, timeoutSec * 1000);
    writeFileSync(logPath, `# ${role}/${label} ${started.toISOString()}\n\n## stdout\n${outcome.stdout}\n\n## stderr\n${outcome.stderr}\n`);
    return outcome;
  })()
  : await new Promise((resolve) => {
  let bin, args, extraEnv;
  if (spec.runner === 'codex') {
    // Give each agent a 0700 temporary home containing only its auth record, so
    // parallel agents cannot race on Codex's own state and a killed one leaves
    // nothing behind. The token never enters a prompt, log, or argument.
    //
    // THE ROTATION MUST BE PERSISTED BACK (2026-08-10, learned the hard way).
    // ChatGPT-subscription auth is OAuth with a SINGLE-USE refresh token: when
    // Codex refreshes, the old refresh token is consumed and a new one is
    // written to auth.json in its CODEX_HOME. That home is this temporary
    // directory, which is deleted at the end of the run — so the rotated token
    // was destroyed while the canonical copy kept a refresh token the server had
    // already retired. The next dispatch then failed with
    // `refresh_token_reused`, 401, and so did every subsequent codex call
    // including plain `codex exec`: one long run silently bricked the whole
    // lane. `codex login status` does NOT catch this — it reads the file
    // without validating it, and keeps reporting "Logged in using ChatGPT".
    // Copying the record back on exit keeps the canonical file in step.
    temporaryHome = mkdtempSync(`/tmp/prestige-dispatch-${role}-`);
    const sourceAuth = join(codexHome, 'auth.json');
    codexAuthPaths = { source: sourceAuth, temporary: join(temporaryHome, 'auth.json') };
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
persistRotatedCodexAuth();
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
