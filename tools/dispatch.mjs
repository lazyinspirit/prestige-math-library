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
// Model routing. EVERY dispatched role follows the standing owner rule: CLAUDE
// OPUS 5 on the `claude` runner at xhigh with a 1,000,000-token context window,
// selected by the `[1m]` suffix on the model id itself. The tool-less DeepSeek
// lane keeps `audit-refuter`. There is no Codex lane.
//
// SOL AND TERRA ARE WITHDRAWN (owner, 2026-08-23): "change all LLMs from gpt 5.6
// sol and gpt 5.6 Terra to opus 5 since Codex subscription reached weekly
// limit". The trigger is capacity, not quality — the Codex subscription that
// carried every GPT lane hit its weekly cap mid-`frontier-17`, with step 6b
// stalled at 6/9 group Alphas. A capacity refusal is not a verdict and not a
// completed stage, so the lanes move rather than wait.
//
// WHAT THIS DOES TO CROSS-FAMILY INDEPENDENCE: nothing, structurally. Read this
// before concluding the move bought independence back. Under Sol/Terra the
// authors, the Alpha adjudicating the judges, and one judge lane were all
// GPT-family; they are now all ANTHROPIC-family. The asymmetry is identical with
// the family name swapped, and what absorbs it is unchanged: the DEEPSEEK lane
// is the only cross-family reader anywhere in either workflow, judging every
// item at step 7 and refuting on the audit side. Same-family agreement between
// Alpha and the Opus judge lane is therefore weak evidence and is weighted as
// such (CLAUDE.md §Paired skeptical judges; tools/judge.mts).
//
// WHAT THIS RE-ACCEPTS, stated so no future session rediscovers it as a
// surprise. Sol/Terra took these lanes on 2026-08-14/08-20 for a MEASURED
// reason: four concurrent Opus 5 lanes at xhigh exhausted the Claude
// subscription session limit in 25-34 minutes, twice, killing every scaffolder
// mid-track and taking the dispatching session down with them (see `scaffolder`
// below, and ARCHITECTURE.md §6). Every lane cap in the table below was set
// against the Codex or DeepSeek accounts and is UNCHANGED by this move (owner,
// 2026-08-23: "Just replace LLMs as instructed without changing anything else"),
// so the concurrency ceilings now point at an account with a different and
// previously-measured cliff. A cap is a ceiling the engine may use, never a
// quota it must spend; if lanes start dying on the session limit, LOWER the caps
// rather than re-spending the loop.
//
// The `codex` runner below is KEPT and no role routes to it, exactly as the
// `claude` runner was kept from 2026-08-20 to 2026-08-23. It is the return path
// when the Codex subscription resets, and its `--sandbox read-only` is a
// kernel-level guarantee that the claude runner can only approximate.
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
import { dirname, join, relative, resolve } from 'node:path';
import { homedir } from 'node:os';
import { REPO, deepseekEnvFile } from './paths.mjs';
import { createSlotPool } from './slots.mjs';
import { validateCodexOutputSchema } from './codex-output-schema.mjs';
import { unwrapClaudeEnvelope } from './judge-parse.mjs';

// WHICH MODEL ANSWERS IS NOT DECIDED HERE ANY MORE (2026-08-23).
//
// `tools/models.mjs` is the registry: it owns every model id, the runner that
// can spawn it, and the LANE assignment that says which job that model does.
// A role below asks for a lane — `...lane('agentic')` — and gets back the
// matching `{ runner, model }` pair. Moving every agent role to a different
// model is therefore one edit to `LANES` in that file, not twelve here, and a
// role can no longer name a model its runner cannot spawn.
//
// The `[1m]` suffix rule lives there too, with its warning intact: the claude
// CLI has no `model_context_window` knob, so the 1,000,000-token variant is
// selected by the suffix on the id and nothing else, and a bare
// `claude-opus-5` silently runs the standard window.
//
// WHAT STAYS HERE, deliberately: sandbox, effort, cap, web, dir, requiresTask.
// Those are properties of the ROLE, not of the model. The owner's instruction
// on the 2026-08-23 swap was "just replace LLMs without changing anything
// else"; a registry that carried caps would break that by construction.
import { lane } from './models.mjs';

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
  // CAP 9, NOT 5 (owner, 2026-08-16). The alpha cap is 3 and each group Alpha
  // owns at most 3 batches, so a run can legitimately carry nine. Five throttled
  // the widest legal run into two waves for no stated reason: the 3-and-3 bound
  // exists for Alpha's attention span, not for Beta's. The reader lane matches
  // because 6a dispatches one independent reader per batch.
  beta:         { ...lane('agentic'), sandbox: 'workspace-write', cap: 9, web: true, why: 'one per batch, scaffolds and authors; 3 group Alphas x 3 batches' },
  reader:       { ...lane('agentic'), sandbox: 'workspace-write', cap: 9, web: true, why: 'independent step-6 audit of a foreign batch, one per batch' },
  // Alpha moved Sol -> Claude Opus 5 (owner, 2026-08-10), BACK TO SOL (owner,
  // 2026-08-20), and back to Opus 5 with every other lane (owner, 2026-08-23),
  // keeping xhigh and the 1M window throughout — now the `[1m]` model id again
  // rather than the Codex `-c` pair. `effort` stays explicit even though the
  // runner has its own default: this is the adjudicating lane, and the one role
  // where a silent downgrade would be invisible in its output.
  //
  // `web: true` IS DOCUMENTATION on this runner, not a switch. A Codex lane
  // without `tools.web_search` does not fail, it asserts from memory (the failure
  // this file records for the build lanes before 2026-08-11); the claude runner
  // loads WebFetch/WebSearch by default for a write role and names them in the
  // read-only allow list, so the capability is present either way. The flag stays
  // because it records WHICH lanes must not lose it — Alpha's step-3 criterion 2
  // is source faithfulness, and step 6 has it probe an AI-generated claim for
  // counterexamples, both source work rather than recall — and because the Codex
  // return path reads it as a real switch.
  //
  // CAP RAISED 1 -> 3 (owner, 2026-08-14): GROUP ALPHAS. One Alpha per at most
  // THREE Beta batches at step 3 and steps 6a/6b, so no single agent reads a
  // whole level's proofs (frontier-12 was 454 items for one Alpha). The old
  // cap of 1 enforced a step-4 invariant at every stage; its `why` said so.
  //
  // The mutual-exclusion guarantee is NOT deleted, it is relocated to an
  // ownership contract, exactly as `scaffolder` does below. A group Alpha at
  // step 3 edits no batch file at all and writes one namespaced report; at
  // step 6 it owns its own group's batches and no sibling's. The LEAD Alpha
  // alone performs step 4 propagation into the shared `research/plan-*.md`
  // prose scaffolds, step 6c cross-batch/cross-level citation audit, and step 8
  // judge adjudication — one prose writer, one global citation reader, one
  // exact-hash adjudication ledger. Those three stages stay single-agent by
  // rule, and the rule is in LEVELS.md, not in this number.
  //
  // WHY 3 IS STILL 3, AND WHAT IT NOW MEANS AGAIN. Under Opus the number was
  // originally read off a measured quota cliff (ARCHITECTURE.md §6): four
  // concurrent Opus lanes at xhigh exhausted the Claude session limit in 25-34
  // minutes and took the dispatching session down with them. Under Sol the
  // cliff was gone and the number survived on different grounds — 3 is also the
  // group-Alpha arithmetic, one Alpha per <=3 batches against a beta/reader cap
  // of 9. With the 2026-08-23 move back to Opus BOTH readings apply again, and
  // they happen to agree. They do NOT agree for beta/reader/refuter, whose caps
  // of 9/9/8 were set against the Codex subscription and are deliberately left
  // untouched (owner: "without changing anything else"). Concurrency here is a
  // ceiling the engine may use, never a quota it must spend: the accuracy win
  // comes from SCOPING a group Alpha to 3 batches, which is free, and running
  // the groups in series costs only wall clock.
  alpha:        { ...lane('agentic'), sandbox: 'workspace-write', effort: 'xhigh', cap: 3, web: true, why: 'group Alpha, <=3 batches each; lead Alpha alone writes prose scaffolds' },
  refuter:      { ...lane('agentic'), sandbox: 'read-only',       cap: 8, why: 'read-only by owner rule; returns evidence, never edits' },
  // AUDIT ONLY. The build has no orchestrator: every judgment it used to make
  // belongs to an Alpha, and every transition to the engine. The published-page
  // audit still runs under run-wave.mjs and still has one.
  orchestrator: { ...lane('agentic'), sandbox: 'workspace-write', effort: 'xhigh', cap: 1, why: 'delegated judgment in the published-page audit (AUDIT-WORKFLOW.md)' },

  // The `supervisor` role was removed 2026-08-16. It existed to take "is the
  // stage done, and what fires next" away from the orchestrator, which was the
  // bottleneck — measured on frontier-13 as ~5h of a ~14h run spent writing
  // status reports at cleared stages instead of dispatching.
  //
  // That was the right diagnosis and the wrong cure: it moved the transition
  // from one model to another. The transition is a predicate over files on
  // disk, so it belongs to code, and `tools/autopilot/` owns it now. Both the
  // role's brief and `run-supervisor.mjs` are deleted.

  // `scaffolder` (owner, 2026-08-13): concurrent SUBJECT-track prose scaffolding,
  // outside any level build. Runner, model, effort and window are `alpha`'s — the
  // two rows have now met on Opus 5, on Sol, and on Opus 5 again — but the cap
  // differs, and that difference is the whole reason it is a separate row rather
  // than a raised `alpha` cap.
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
  // shorter run before every lane fails at once, and it burns the dispatching
  // session too. Lower is often faster end to end.
  //
  // READ THAT PARAGRAPH AS LIVE, NOT HISTORICAL (2026-08-23). It was written for
  // an Opus scaffolder, the lane moved to Sol on 2026-08-14 BECAUSE of it —
  // "Change agent LLM from opus 5 to gpt 5.6 sol", after two rounds of Opus
  // scaffolders were killed mid-track (25-34 min, then 10-43 min, the second
  // exhaustion resetting five and a half hours out) — and the owner has now moved
  // every lane back to Opus 5 because the Codex subscription hit its own weekly
  // cap. So the measurement applies again, at the same cap of 4, and the cap is
  // deliberately unchanged ("without changing anything else"). The escape hatch
  // that existed last time does not: Sol was a DIFFERENT account, and there is no
  // third one. Only the DeepSeek lane is now unaffected by a Claude exhaustion.
  //
  // `web: true` is REQUIRED here and is not optional decoration: half of a
  // scaffolder's brief is source research, and a lane without it does not fail —
  // it silently asserts from memory, which is the exact failure mode CLAUDE.md
  // records for the build lanes before 2026-08-11.
  scaffolder:   { ...lane('agentic'), sandbox: 'workspace-write', effort: 'xhigh', cap: 4, web: true, why: 'one per subject track; owns exactly one prose scaffold file' },

  // `mechanic` (owner, 2026-08-14): "use Terra instead of Sol for tasks
  // requiring less reasoning" — for work whose difficulty is bookkeeping rather
  // than mathematics: applying an already adjudicated amendment, collecting
  // entries into a table, sweeping ids, reformatting. The judgment has already
  // been made by the time this lane runs.
  //
  // AFTER 2026-08-23 THE CHEAPNESS IS `effort`, NOT THE MODEL. Sol and Terra were
  // two models of one family and this row took the weaker one; every lane is now
  // Opus 5, so the only thing separating this lane from `beta` is the `medium`
  // effort budget, which is deliberately kept. Do not "fix" that inconsistency by
  // raising it — a bookkeeping lane at xhigh buys nothing and burns the same
  // session quota every other lane now draws on.
  //
  // TWO THINGS THIS LANE MAY NEVER DO, and both are load-bearing:
  //
  // 1. **Author mathematical content.** Item authoring stays on `beta`, at the
  //    authoring effort. A `medium` lane must not become a cheap author.
  // 2. **Produce anything the second judge lane will later judge.** That lane is
  //    now Opus, the same model this row runs, and a model reviewing its own
  //    output is self-agreement wearing the costume of corroboration. This exact
  //    trap was walked into on frontier-12, where the Terra `certifier` declined
  //    to certify a repair while citing its OWN judge ledger row as support. The
  //    move to a single model makes it EASIER to walk into, not harder.
  //
  // So: mechanical, post-adjudication, non-judged work only. If a task needs a
  // mathematical decision, it is not this lane's.
  mechanic:     { ...lane('agentic'), sandbox: 'workspace-write', effort: 'medium', cap: 4, why: 'bookkeeping after the judgment is made; never authors, never judged by its own lane' },

  // THE STEP-10 VISUAL LANE IS GONE (owner, 2026-08-23). `sigma` (read-only
  // render adjudicator) and `tau` (repairer scoped to exact Sigma findings)
  // were removed with the whole `10-render-*`/`10-sigma-*`/`10-tau-*` chain.
  // What it cost per run was two full-corpus screenshot captures and two
  // whole-level adjudications of every A/B page; what it bought on frontier-17
  // was three findings that Tau closed as `no-change-required` because the
  // repairs were already on disk. The mechanical renderer check survives as
  // `rendercheck` inside repoWide, which is where real rendering breakage was
  // actually caught. Nothing routes an image or an `--output-schema` any more.

  // ---- the published-page retro-audit (AUDIT-WORKFLOW.md, A0 to A10) --------
  // Every agentic audit lane receives the explicit xhigh/1M configuration below;
  // the tool-less DeepSeek refuter maps xhigh to its API's `max` value.
  //
  // THE CERTIFIER'S INDEPENDENCE IS NOW EFFORT-AND-CONTEXT ONLY. AUDIT-WORKFLOW.md
  // §2 makes it "an independent current reading of a repair it did not author",
  // and until 2026-08-23 that independence had a model behind it: a Terra
  // certifier read a Sol audit-beta's repair. Both are Opus now, so what remains
  // is a fresh process with no sight of the authoring context. Weigh a
  // certification accordingly — it is a second READ, not a second FAMILY, and the
  // frontier-12 self-citation failure is the precedent for what that can go wrong.
  'audit-beta':    { ...lane('agentic'), sandbox: 'workspace-write', effort: 'xhigh', cap: 5, dir: 'research/audit', web: true, why: 'one per category batch: A1/A2 determination, A4 application' },
  'audit-alpha':   { ...lane('agentic'), sandbox: 'workspace-write', effort: 'xhigh', cap: 1, dir: 'research/audit', web: true, why: 'single adjudicator at A6 and A8' },
  certifier:       { ...lane('agentic'), sandbox: 'read-only',       effort: 'xhigh', cap: 6, dir: 'research/audit', web: true, why: 'independent current reading of a repair it did not author; needs web to check sources' },
  'audit-refuter': { ...lane('crossFamily'), sandbox: 'read-only', effort: 'xhigh', cap: 8, dir: 'research/audit', requiresTask: true, why: 'adversarial proof reading on assembled context; tool-less by transport' },
});

const argv = process.argv.slice(2);
const asJson = argv.includes('--json');
const dryRun = argv.includes('--dry-run');
const option = (name) => { const i = argv.indexOf(name); return i >= 0 ? argv[i + 1] : null; };
const options = (name) => argv.reduce((acc, arg, i) => (arg === name && argv[i + 1] ? [...acc, argv[i + 1]] : acc), []);
const resolveFile = (p) => (existsSync(p) ? p : join(REPO, p));

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
const imagePaths = options('--image').flatMap((value) => value.split(',')).map((s) => s.trim()).filter(Boolean);
const outputSchemaPath = option('--output-schema');
const resultArtifactPath = option('--result-artifact');
const timeoutSec = Number(option('--timeout') ?? 7200);
const covers = option('--covers') ? option('--covers').split(',').map((s) => s.trim()).filter(Boolean) : [];

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
for (const image of imagePaths) if (!existsSync(resolveFile(image))) usage(`image not found: ${image}`);
if (outputSchemaPath) {
  if (!existsSync(resolveFile(outputSchemaPath))) usage(`output schema not found: ${outputSchemaPath}`);
  try {
    const schema = JSON.parse(readFileSync(resolveFile(outputSchemaPath), 'utf8'));
    const problems = validateCodexOutputSchema(schema);
    if (problems.length) usage(`invalid Codex output schema ${outputSchemaPath}: ${problems.join('; ')}`);
  } catch (error) {
    if (error?.name === 'SyntaxError') usage(`output schema is not valid JSON: ${outputSchemaPath} (${error.message})`);
    throw error;
  }
}
if (resultArtifactPath) {
  const target = resolve(REPO, resultArtifactPath);
  const rel = relative(REPO, target);
  if (rel.startsWith('..') || rel === '' || !rel.startsWith(`research/`)) {
    usage('--result-artifact must name a file below research/');
  }
}

const spec = ROLES[role];

// ---- prompt ------------------------------------------------------------------

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
if (covers.length) vars.set('covers', covers.join(','));

// A tool-less runner cannot open a file, so a brief that says "read the item on
// disk" produces a confident reading of nothing. The task file IS the context
// for those lanes, and its absence is a dispatch error rather than a quiet
// degradation.
if (spec.requiresTask && !taskPath) {
  usage(`role ${role} runs on ${spec.runner}, which has no filesystem access — pass --task with the assembled context`);
}
// Every prompt carries its own identity, so a generic brief or fallback task
// file still tells the agent which run, role, label and units it owns — the
// group-Alpha briefs read their batches from the `covers:` line here.
const identity = [
  `run: ${run}`, `role: ${role}`, `label: ${label}`,
  ...(covers.length ? [`covers: ${covers.join(', ')}`] : []),
  ...(vars.get('output') ? [`output: ${vars.get('output')}`] : []),
].join('\n');
if (taskPath) {
  if (!existsSync(resolveFile(taskPath))) usage(`task file not found: ${taskPath}`);
  prompt += `\n\n---\n\n# This dispatch\n\n${identity}\n\n${readFileSync(resolveFile(taskPath), 'utf8')}`;
} else {
  prompt += `\n\n---\n\n# This dispatch\n\n${identity}\n`;
}

// Render the complete assembled prompt, including the task. An EMPTY value
// means "not pinned", never "erase the placeholder": the engine passes
// --var i={unit} with unit='' on every multi-batch dispatch, and replacing a
// deliberately generic <i> ("each batch") with '' turned
// research/<run>-batch-<i>.pages.json into a path that does not exist.
for (const [key, value] of vars) {
  if (value === '') continue;
  prompt = prompt.replaceAll(`<${key}>`, value);
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

// ---- runner shims: the two things the claude CLI has no flag for ---------------
//
// Codex takes `--image` and `--output-schema` as real flags and enforces both
// server-side. The claude CLI has neither, so after the 2026-08-23 move every
// role onto it, both become PROMPT contracts. The guarantees are genuinely
// weaker and the difference is stated rather than papered over:
//
//   IMAGES. Codex attaches the bytes; here the model must Read the paths itself.
//   The capability is present either way — every read-only role's allow list
//   carries Read, a write role loads it by default, and Read renders an image
//   visually — but what is lost is the certainty that it LOOKED. A model that
//   skips the Read can still emit a confident verdict about a capture it never
//   opened. No role passes images today — the step-10 visual lane was the only
//   one and was deleted on 2026-08-23 — so this shim is unexercised. Anything
//   that routes images here again must pair them with an output schema that
//   demands per-item detail, so an unread capture surfaces as a missing entry
//   rather than as a silent pass; a verdict citing no specific detail should be
//   read as an unread attachment, not as a clean one.
//
//   OUTPUT SCHEMA. Codex constrains the sampler and CANNOT return a
//   non-conforming object. Here the schema is a literal final-message contract
//   and the JSON.parse under `--result-artifact` is the only enforcement. That
//   parse already turns a malformed `--output-last-message` red, so the failure
//   MODE is unchanged; its likelihood is not.
if (spec.runner === 'claude') {
  if (imagePaths.length) {
    prompt += '\n\n---\n\n# Attached images\n\n'
      + `${imagePaths.length} image(s) belong to this dispatch. Your runner cannot inline them, so READ EVERY PATH BELOW with the Read tool before you answer — Read renders an image visually. Do not report on an image you have not opened, and do not infer its contents from its filename.\n\n`
      + imagePaths.map((image) => `- ${resolve(REPO, resolveFile(image))}`).join('\n') + '\n';
  }
  if (outputSchemaPath) {
    prompt += '\n\n---\n\n# Required final message\n\n'
      + 'Your FINAL message must be a single JSON object conforming to the schema below, and NOTHING else: no prose before or after it, no code fence, no explanation. It is parsed mechanically, and a malformed or non-conforming object fails this dispatch outright.\n\n'
      + '```json\n' + readFileSync(resolveFile(outputSchemaPath), 'utf8').trim() + '\n```\n';
  }
}

// ---- output paths ------------------------------------------------------------

// Audit roles keep their dispatch record beside the wave's other artifacts, so a
// wave and a level of the same number cannot collide on a log name.
const outDir = join(REPO, spec.dir ?? 'research', `${run}-dispatch`);
if (!dryRun) mkdirSync(outDir, { recursive: true });
const logPath = join(outDir, `${role}-${label}.log`);
const resultPath = join(outDir, `${role}-${label}.result.json`);
const promptPath = join(outDir, `${role}-${label}.prompt.md`);
const lastMessagePath = join(outDir, `${role}-${label}.last-message.json`);

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
    ...imagePaths.flatMap((image) => ['--image', resolveFile(image)]),
    ...(outputSchemaPath ? ['--output-schema', resolveFile(outputSchemaPath)] : []),
    ...(resultArtifactPath ? ['--output-last-message', lastMessagePath] : []),
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
//
// `--output-format json` is passed on EVERY call, and it is not decoration.
// Plain-text mode carries no `usage`, which is how frontier-15 recorded 626
// claude-lane attempts at pt=0/ct=0 and left every lane decision half-blind
// (tools/judge-parse.mjs). It is also what makes the final message recoverable
// as a discrete field, which is what `--result-artifact` needs now that there is
// no `--output-last-message` to write one. The envelope is unwrapped before
// anything downstream sees stdout, so logs and result records read exactly as
// they did on the Codex runner.
const buildClaude = () => [
  process.env.CLAUDE_BIN ?? 'claude',
  [
    '-p',
    // null model = inherit the session model (the orchestrator role).
    ...(spec.model ? ['--model', spec.model] : []),
    // SILENCE MEANS XHIGH, on this runner exactly as on Codex. This fallback
    // was 'high' while the claude runner carried no roles, and the 2026-08-23
    // move would otherwise have SILENTLY DOWNGRADED the three lanes that state
    // no effort in the role table — `beta` (the author), `reader` and
    // `refuter` — from the owner's xhigh. A model substitution may not change
    // a reasoning setting as a side effect, and this one produces no error and
    // no log line: only the work gets quietly worse. A role that wants less
    // still says so, and `mechanic` is the only one that does.
    '--effort', spec.effort ?? 'xhigh',
    '--permission-mode', 'bypassPermissions',
    '--output-format', 'json',
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
    // The same fallback buildCodex/buildClaude actually use — this report is
    // the lineup-attestation surface, and it hardcoded 'xhigh' for every codex
    // role even when the role's spec said otherwise. Both runners now default
    // to 'xhigh', so the per-runner split this line used to carry is gone; if
    // one runner's default ever diverges again, this line must diverge with it
    // or the attestation lies about the very thing it exists to attest.
    effort: spec.effort ?? 'xhigh',
    read_only_enforcement: spec.sandbox !== 'read-only' ? null
      : spec.runner === 'codex' ? 'process: --sandbox read-only'
      : spec.runner === 'deepseek' ? 'transport: tool-less API lane, no filesystem at all'
      : `tools: --allowed-tools ${CLAUDE_READ_TOOLS.join(' ')} (default-deny) + --disallowed-tools ${CLAUDE_WRITE_TOOLS.join(' ')}`,
    lane_cap: spec.cap, timeout_s: timeoutSec,
    command: [bin, ...args].join(' '),
    prompt_bytes: Buffer.byteLength(prompt), prompt_lines: prompt.split('\n').length,
    would_write: { log: logPath, result: resultPath, prompt: promptPath },
    // The rendered prompt itself, so "render it through --dry-run and read the
    // actual output" is possible without a live dispatch.
    ...(asJson ? { prompt } : {}),
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
    // Unwrap the claude CLI's `--output-format json` envelope HERE, before the
    // log is written, so every downstream consumer — the log, the record tail,
    // the result artifact — sees the agent's own text rather than a transport
    // wrapper. A stdout that is not an envelope (older CLI, crash banner) passes
    // through unchanged, so a broken run still reports what it printed.
    if (spec.runner === 'claude') stdout = unwrapClaudeEnvelope(stdout).content;
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

// A read-only role cannot write its own receipt, so the dispatcher—not the
// model—materialises the schema-constrained final response. This keeps such a
// role unable to edit the evidence it is judging while still giving the next
// gate a durable JSON receipt. A missing or malformed final message turns the
// dispatch red. No role routes here today: the step-10 visual lane was the last
// user and was deleted on 2026-08-23. The path stays because `--result-artifact`
// is generic, engine-level plumbing with its own test coverage.
//
// The claude runner has no `--output-last-message`, so materialise the same file
// the Codex path writes and let the single parse below stay the ONE enforcement
// point for both runners. A fence is tolerated because it is a formatting slip,
// not a content failure; anything else still fails the dispatch.
if (resultArtifactPath && spec.runner === 'claude' && result.code === 0 && !result.timedOut) {
  const unfenced = result.stdout.trim()
    .replace(/^```(?:json)?\s*/i, '')
    .replace(/\s*```$/, '');
  writeFileSync(lastMessagePath, unfenced);
}
if (resultArtifactPath && result.code === 0 && !result.timedOut) {
  try {
    const parsed = JSON.parse(readFileSync(lastMessagePath, 'utf8'));
    const target = resolve(REPO, resultArtifactPath);
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, JSON.stringify(parsed, null, 2) + '\n');
  } catch (error) {
    result.code = 1;
    result.stderr += `\nresult artifact was not valid JSON: ${error?.message ?? error}`;
  }
}

const ended = new Date();
const record = {
  role, label, run,
  // WHAT UNIT OF WORK THIS DISPATCH COVERS, and why it is on the record.
  //
  // Stage completion used to be a COUNT: "3 group Alphas returned". A count has
  // to be known in advance, so it encodes the shape of one particular run —
  // frontier-13's seven batches gave three groups, and that 3 was hardcoded.
  // frontier-14 has six batches and two groups, so the predicate could never
  // fire and the driver would have polled a finished stage forever.
  //
  // ceil(batches/3) fixes that instance and leaves the class intact: it still
  // assumes the grouping rule, and it still cannot tell three agents that each
  // covered two batches from three agents that all covered the same one.
  //
  // `covers` removes the inference. A dispatch declares the batches or pages it
  // is responsible for, and a stage is done when the union of covered units
  // over `ok:true` results contains every unit the stage owes. One Alpha over
  // six batches and six Alphas over one batch each are then both complete, and
  // neither needs the table to be edited.
  covers,
  stage: option('--stage') ?? null,
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
