#!/usr/bin/env node
// dispatch.mjs — spawn one briefed agent role, headlessly.
//
//   node tools/dispatch.mjs --role beta --brief briefs/beta-scaffold.md \
//     --label batch-1 --run frontier-10 --var n=10 --var i=1 [--task extra.md] \
//     [--timeout 7200] [--dry-run] [--json]
//
// Every role resolves to a GPT model on the Codex runner. Role-specific
// sandboxes, effort, web access, and concurrency caps are enforced here.

import { readFileSync, writeFileSync, existsSync, mkdirSync, mkdtempSync, copyFileSync, chmodSync, rmSync, readdirSync, statSync, linkSync, unlinkSync, renameSync, constants as fsConstants } from 'node:fs';
import { spawn } from 'node:child_process';
// `resolve` is aliased because the spawn block below runs inside a Promise
// executor whose parameter is also called `resolve`; the unaliased import was
// shadowed there and silently settled the promise instead of building a path.
import { dirname, join, relative, resolve, resolve as pathResolve } from 'node:path';
import { homedir } from 'node:os';
import { REPO, deepseekEnvFile } from './paths.mjs';
import { createSlotPool } from './slots.mjs';
import { validateCodexOutputSchema } from './codex-output-schema.mjs';

// tools/models.mjs owns model IDs and semantic lane assignments.
import { lane, modelProfile } from './models.mjs';

// lane caps: how many of this role may run at once across every process.
const ROLES = Object.freeze({
  // `web: true` on the two source-reading build lanes (owner, 2026-08-11). Every
  // source-review roles already had it; the build roles that LEVELS.md §Step 1 orders to
  // "search reputable mathematical sources on the web" did not. A probe on
  // 2026-08-11 confirmed this account exposes a `web.run` tool even under the
  // isolated CODEX_HOME, so this was never a total blackout — but the native
  // search tool was off for exactly the lanes whose brief is half source
  // research, and the comment below already records what an unsearching lane
  // does instead: it asserts from memory.
  // CAP 9, NOT 5 (owner, 2026-08-16). The alpha cap was 3 and each group Alpha
  // owns at most 3 batches, so a run can legitimately carry nine. Five throttled
  // the widest legal run into two waves for no stated reason: the 3-and-3 bound
  // exists for Alpha's attention span, not for Beta's. The reader lane matches
  // because 6a dispatches one independent reader per batch.
  //
  // 9 -> 12 (owner, 2026-08-24), tracking the alpha cap 3 -> 4 by the SAME
  // arithmetic that set 9: group Alphas x batches per Alpha is the widest legal
  // run, and that is now 4 x 3. Leaving these at 9 would have throttled the
  // twelve batches the new alpha cap admits, reintroducing the two-wave stall
  // the 2026-08-16 raise removed.
  //
  beta:         { ...lane('agentic'), sandbox: 'workspace-write', cap: 12, web: true, why: 'one per batch, scaffolds and authors; 4 group Alphas x 3 batches' },
  reader:       { ...lane('agentic'), sandbox: 'workspace-write', cap: 12, web: true, why: 'independent step-6 audit of a foreign batch, one per batch' },
  // `web: true` is a required capability. A Codex lane
  // without `tools.web_search` does not fail, it asserts from memory (the failure
  // this file records for the build lanes before 2026-08-11). The flag records
  // which lanes must not lose it — Alpha's step-3 criterion 2
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
  // CAP 3 -> 4 (owner, 2026-08-24). Two caps multiply into a ceiling on run
  // width: group Alphas at <=3 batches each, times this cap, is the largest
  // batch count `alpha-groups.mjs` will accept. At 3 that ceiling was NINE
  // batches, and frontier-18's fourteen pairs across eight categories need ten
  // — the packer only pairs within a category, so no legal repacking reaches
  // nine. The assigning Alpha found a partition with zero cross-group
  // dependency edges and the gate refused it anyway. 4 x 3 = 12 batches.
  alpha:        { ...lane('agentic'), sandbox: 'workspace-write', effort: 'xhigh', cap: 4, web: true, why: 'group Alpha, <=3 batches each; lead Alpha alone writes prose scaffolds' },
  // TWO NARROWER ALPHA ROLES (owner, 2026-08-24). Effort and model are ROLE
  // properties, so a stage that wants either to differ needs its own role —
  // exactly as `mechanic` has been a separate role at `medium` since 2026-08-14
  // for the same reason.
  //
  // THIS DOES NOT WIDEN STEP-3 CONCURRENCY, which was the thing to check before
  // splitting `3-recheck` off the shared `alpha` budget. A run has N groups (4
  // here) and a group is in review OR fix OR recheck at any instant, never two.
  // The real peak across those stages is the group count whatever the roles are.
  //
  // `alpha-assign` — `2-assign` only. The one lane whose output is fully
  // machine-checkable (`alpha-groups.mjs`, nine properties), which is why it may
  // run a model nothing else runs. No web: partitioning reads the manifests, not
  // the literature.
  'alpha-assign': { ...lane('partition'), sandbox: 'workspace-write', effort: 'high', cap: 1, why: 'batch partition for the group Alphas; output fully validated by alpha-groups.mjs' },
  // `alpha-high` — `3-recheck` and `10-pathway-author-v2`. Same model as
  // `alpha`, one tier down. Owner's call on 3-recheck against my advice: it is
  // the gate on scaffold richness and `scaffold-verdicts` checks that verdicts
  // resolve, not that a fix was mathematically adequate. Recorded, not argued.
  'alpha-high':   { ...lane('agentic'), sandbox: 'workspace-write', effort: 'high', cap: 4, web: true, why: 'scaffold recheck and pathway prose; one effort tier below alpha' },
  // The final owner report interprets a mechanically reconciled local evidence
  // packet.  It neither repairs nor researches; disabling web removes a costly
  // source of irrelevant context while the read-only sandbox and structured
  // response preserve the final readiness receipt.
  'alpha-report': { ...lane('agentic'), sandbox: 'read-only', effort: 'xhigh', cap: 1, web: false, requiresTask: true, why: 'Step-10 interpretation of reconciled local evidence; read-only so final readiness remains current through close-out' },
  // `alpha-adjudicate` — step 8 ONLY (owner, 2026-08-24). gpt-5.6-sol at xhigh,
  // the SAME adjudicator every past run used, so frontier-18's confirmed_fatal
  // counts stay comparable with frontiers 15-17 even though its authors are
  // gpt-5.4.
  //
  // CAP 1 -> 4 (owner, 2026-08-25), because step 8 is now partitioned by group
  // Alpha rather than run by a single lead. The cap tracks the `alpha` cap by
  // the same arithmetic it does: one Alpha per <=3 batches, four groups over the
  // ten batches frontier-18 builds. A cap of 1 under group units would not have
  // failed — it would have serialised the four groups behind one slot and looked
  // like slowness rather than a misconfiguration, which is the worse failure.
  //
  // This cap is a THROUGHPUT limit, not a mutual-exclusion guarantee. The
  // `alpha` role's cap of 4 has the same character; what makes concurrent
  // adjudication safe is that the partition gives each group disjoint items and
  // that `<run>-judge-adjudications.jsonl` is append-only. Two Alphas appending
  // rows for different items do not race; two Alphas rewriting the same file
  // would, which is why the task file says append and never rewrite.
  //
  // Step 8 is the sharpest role in the build: a `false_positive` adjudication
  // silently discards a real defect and no later gate re-examines it. Keeping it
  // on the model with the longest measured track record here is quality control,
  // not conservatism.
  'alpha-adjudicate': { ...lane('adjudication'), sandbox: 'workspace-write', effort: 'xhigh', cap: 4, web: true, why: 'step-8 fatal-only adjudication, one per group Alpha; held on Sol so fatal counts stay comparable across runs' },
  // `final-adjudicator` — the independent Step-8 close after an item has used
  // both frozen judge contexts and the owning group Alpha has made the second
  // fatal repair.  It is intentionally a fresh Sol conversation rather than a
  // resume of the Alpha: independence is the point of the escalation.  Max
  // reasoning and web search are both owner requirements; the task queue and
  // terminal-resolution recorder make its one-item-at-a-time discipline
  // mechanical rather than aspirational.
  'final-adjudicator': { ...lane('adjudication'), sandbox: 'workspace-write', effort: 'max', cap: 4, web: true, requiresTask: true, why: 'Step-8 final adjudication after two fatal contexts; one independent Sol-max agent per affected group, with authoritative web verification' },
  // `alpha-group-read` — the step-7 pass that reads a group's A/B pairs while the
  // judges are still sweeping (owner, 2026-08-25). Step 7 applies the Terra
  // xhigh profile in the stage table; Step 8 resumes the same conversation
  // under the adjudicator's own Sol xhigh role.
  //
  // READ-ONLY IS THE POINT, NOT A PRECAUTION. Step 7 judges a frozen text; an
  // edit landing mid-sweep voids verdicts already cast against the old bytes and
  // leaves a level judged in two states with nothing on disk saying so. `--sandbox
  // read-only` on codex is a kernel guarantee, not an instruction the model could
  // follow badly, which is why this is a separate role rather than a paragraph in
  // the task file. It returns its digest through `--result-artifact`: the
  // dispatcher writes the file, so a role that cannot write still produces one a
  // gate can read.
  //
  // No web: everything it reads is on disk, and a source lookup belongs to the
  // Beta that authored the page, not to a reader of it.
  // `alpha-group-read` — the step-7 half of a group Alpha's life (owner,
  // 2026-08-25). Read-only at the kernel while the judges sweep a frozen text,
  // and given a PERSISTENT session home so that `8-adjudicate` resumes this very
  // conversation with write access rather than starting a fresh agent. The
  // model change at the boundary is deliberate: Terra xhigh reads at Step 7,
  // then Sol xhigh performs the Step-8 adjudication.
  //
  // No web: everything it reads is on disk. Sourcing belongs to the Beta that
  // authored the page, not to a reader of it.
  'alpha-group-read': { ...lane('adjudication'), sandbox: 'read-only', effort: 'xhigh', cap: 4, why: 'step-7 reading half of a group Alpha; read-only so it cannot stale a verdict mid-sweep, session resumed at step 8' },
  // `effort: 'high'` (owner, 2026-08-24) — the thinking level for this lane.
  refuter:      { ...lane('secondary'), sandbox: 'read-only', effort: 'high', cap: 8, why: 'read-only by owner rule; returns evidence, never edits' },

  // The `supervisor` role was removed 2026-08-16. It existed to take "is the
  // stage done, and what fires next" away from the orchestrator, which was the
  // bottleneck — measured on frontier-13 as ~5h of a ~14h run spent writing
  // status reports at cleared stages instead of dispatching.
  //
  // That was the right diagnosis and the wrong cure: it moved the transition
  // from one model to another. The transition is a predicate over files on
  // disk, so it belongs to code, and `tools/autopilot/` owns it now. Both the
  // role's brief and `run-supervisor.mjs` are deleted.

  // `scaffolder` runs concurrent subject-track prose scaffolding outside a build.
  //
  // Alpha's cap of 1 is NOT a resource limit. It is a mutual-exclusion guarantee:
  // within a level, Alpha is the single writer of a SHARED set of artifacts, and
  // two concurrent Alphas silently overwrite each other. Raising that cap to run
  // this job would delete the guarantee for every future build. A scaffolder
  // instead owns exactly one subject file that no sibling may open for writing,
  // so mutual exclusion is supplied by the ownership contract in the run's SEAMS
  // record, and the cap is free to express the real constraint.
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
  // TWO THINGS THIS LANE MAY NEVER DO, and both are load-bearing:
  //
  // 1. **Author mathematical content.** Item authoring stays on `beta`, at the
  //    authoring effort. A `medium` lane must not become a cheap author.
  // 2. **Produce anything its judge lane will later judge.** A model reviewing
  //    its own output is self-agreement, not corroboration.
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
const profileName = option('--profile');
// A CODEX_HOME that OUTLIVES the dispatch, so the conversation can be resumed.
// Every other lane gets a throwaway home deleted on exit — deliberately, because
// a long-lived shared home was once corrupted and bricked every codex call. A
// role that names one here opts out of that for exactly one reason: step 8 must
// re-enter step 7's conversation. Per-group and per-run, so no two lanes share
// one; kept out of the repository so it never reaches git status, and out of
// /tmp so codex can lay down its PATH helpers without warning.
const sessionHomeArg = option('--session-home');
// Resume this conversation instead of starting a new one. The id comes from the
// step-7 result record, never from `--last`: four group Alphas run at once, so
// "most recent" is whichever happened to finish last, which is not a group.
const resumeSession = option('--resume-session');
const timeoutSec = Number(option('--timeout') ?? 7200);
const attemptArg = option('--attempt');
const attempt = attemptArg == null ? null : Number(attemptArg);
const covers = option('--covers') ? option('--covers').split(',').map((s) => s.trim()).filter(Boolean) : [];

const usage = (message) => {
  if (message) console.error(`dispatch: ${message}`);
  console.error('usage: node tools/dispatch.mjs --role <role> --brief <file> --label <name> --run <name>');
  console.error(`                               [--var k=v ...] [--task <file>] [--timeout <sec>] [--attempt <n>] [--dry-run] [--json]`);
  console.error(`                               [--session-home <dir>] [--resume-session <uuid>]`);
  console.error(`                               [--profile <registered-model-profile>]`);
  console.error(`roles: ${Object.entries(ROLES).map(([n, r]) => `${n} (${r.sandbox ?? r.runner}, cap ${r.cap})`).join(', ')}`);
  process.exit(2);
};

if (!role || !ROLES[role]) usage(`--role must be one of ${Object.keys(ROLES).join(', ')}`);
if (!briefPath) usage('--brief is required');
if (!label || !/^[A-Za-z0-9._-]+$/.test(label)) usage('--label is required and must be a plain name');
if (!run || !/^[A-Za-z0-9._-]+$/.test(run)) usage('--run is required and must be a plain name');
if (!Number.isFinite(timeoutSec) || timeoutSec <= 0) usage('--timeout must be a positive number of seconds');
if (attempt != null && (!Number.isInteger(attempt) || attempt < 1)) usage('--attempt must be a positive integer');
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

let profileSpec = null;
if (profileName) {
  try { profileSpec = modelProfile(profileName); }
  catch (error) { usage(error?.message ?? String(error)); }
}
const spec = Object.freeze({
  ...ROLES[role],
  provider: 'openai',
  contextWindow: 1_000_000,
  requestedEffort: ROLES[role].effort ?? 'xhigh',
  ...profileSpec,
  profile: profileName,
});

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

// Roles that require a frozen evidence packet must receive it as a task file;
// its absence is a dispatch error rather than a quiet context change.
if (spec.requiresTask && !taskPath) {
  usage(`role ${role} requires --task with its assembled context`);
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
const unsubstituted = [...new Set([...prompt.matchAll(/<([a-z]+)>/g)].map((m) => m[1]))];
const IDENTITY = ['n'];
for (const name of IDENTITY) {
  if (!unsubstituted.includes(name)) continue;
  console.error(`dispatch: the brief still says "<${name}>" — the level identity must be concrete. Pass --var ${name}=<level>.`);
  process.exit(2);
}
const generic = unsubstituted.filter((name) => !IDENTITY.includes(name));
if (generic.length && !asJson) {
  console.error(`dispatch: note — brief retains generic placeholder(s) ${generic.map((n) => `<${n}>`).join(', ')}; ` +
    'pass --var to pin them if this role owns exactly one.');
}

// ---- output paths ------------------------------------------------------------

const outDir = join(REPO, spec.dir ?? 'research', `${run}-dispatch`);
if (!dryRun) mkdirSync(outDir, { recursive: true });
const stem = `${role}-${label}`;
// `autopilot retry` deliberately resets its policy counter, so a manually
// re-armed lane may arrive here as attempt 1 again. Never overwrite the first
// attempt's evidence: select the first unused replay suffix as a separate,
// monotone-on-disk evidence identity while keeping the policy attempt in the
// result record and status line.
let promptClaimed = false;
const attemptTag = (() => {
  if (attempt == null) return '';
  const base = `.attempt-${attempt}`;
  let candidate = base;
  let replay = 1;
  for (;;) {
    const occupied = ['log', 'result.json', 'prompt.md', 'last-message.json']
      .some((extension) => existsSync(join(outDir, `${stem}${candidate}.${extension}`)));
    if (!occupied && !dryRun) {
      // The prompt is the attempt reservation. existsSync-then-write alone is
      // racy: two re-armed dispatchers can both choose replay-2 before either
      // writes, then overwrite the same supposedly immutable evidence. `wx`
      // makes the identity claim atomic on every supported filesystem.
      try {
        writeFileSync(join(outDir, `${stem}${candidate}.prompt.md`), prompt, { flag: 'wx' });
        promptClaimed = true;
        return candidate;
      } catch (error) {
        if (error?.code !== 'EEXIST') throw error;
      }
    }
    if (!occupied && dryRun) return candidate;
    replay += 1;
    candidate = `${base}.replay-${replay}`;
  }
})();
const logPath = join(outDir, `${stem}${attemptTag}.log`);
const resultPath = join(outDir, `${stem}${attemptTag}.result.json`);
const promptPath = join(outDir, `${stem}${attemptTag}.prompt.md`);
const lastMessagePath = join(outDir, `${stem}${attemptTag}.last-message.json`);
const stableLogPath = join(outDir, `${stem}.log`);
const stableResultPath = join(outDir, `${stem}.result.json`);
const stablePromptPath = join(outDir, `${stem}.prompt.md`);
const stableLastMessagePath = join(outDir, `${stem}.last-message.json`);

// Every retry keeps an immutable attempt file while the historical unsuffixed
// names remain aliases to the latest attempt. Hard links add no duplicate log
// bytes; copy is a portability fallback for filesystems that refuse links.
// Build the replacement under a unique name, then rename it over the alias.
// Never copy directly over an alias whose unlink failed: when that alias is a
// hard link to attempt 1, doing so overwrites attempt 1's supposedly immutable
// inode.
const refreshLatest = (path, stable) => {
  if (path === stable) return;
  const temporary = `${stable}.latest-${process.pid}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  try {
    try { linkSync(path, temporary); }
    catch { copyFileSync(path, temporary, fsConstants.COPYFILE_EXCL); }
    try { renameSync(temporary, stable); }
    catch (error) {
      // Windows does not replace an existing destination with rename. Remove
      // the alias first there; if removal is refused, fail without ever opening
      // the old hard-linked attempt for writing.
      if (!['EEXIST', 'EPERM', 'EACCES'].includes(error?.code)) throw error;
      if (existsSync(stable)) unlinkSync(stable);
      renameSync(temporary, stable);
    }
  } finally {
    try { if (existsSync(temporary)) unlinkSync(temporary); } catch { /* best effort */ }
  }
};
const writeAttemptFile = (path, stable, value) => {
  writeFileSync(path, value, attemptTag ? { flag: 'wx' } : undefined);
  refreshLatest(path, stable);
};

// ---- the command -------------------------------------------------------------

const codexHome = process.env.CODEX_HOME ?? join(homedir(), '.codex');

// RESUMING A SESSION INTO A DIFFERENT SANDBOX (owner, 2026-08-25).
//
// A group Alpha reads its pairs at step 7 and adjudicates them at step 8, and it
// must be the SAME agent — the point of reading early is to hold the mathematics
// in context before the objections arrive. But step 7 judges a frozen text, so
// the reading half must be read-only, and the adjudicating half must be able to
// repair. One `codex exec` cannot be both: `--sandbox` is fixed for the life of
// the process.
//
// `codex exec resume` is the seam. It re-enters an existing conversation in a
// NEW process, so the sandbox is chosen again. Verified 2026-08-25 against the
// installed codex: a session created under `--sandbox read-only` and resumed
// with `-c sandbox_mode="workspace-write"` recalled its earlier turn AND wrote a
// file. Both halves matter — context without write access adjudicates nothing,
// write access without context is just a fresh agent.
//
// THE FLAG SET IS DIFFERENT AND SMALLER, checked against `resume --help` rather
// than assumed: `--sandbox` and `--cd` are REJECTED as unexpected arguments, so
// the sandbox goes through `-c sandbox_mode=` and the working directory comes
// from the spawned process's cwd. `-m`, `-c`, `--output-schema`,
// `--output-last-message` and `--skip-git-repo-check` all still apply.
//
// `-c sandbox_mode=` is load-bearing and undocumented in `resume --help`, which
// is why `--check-read-only` prints the resume form too: a resumed lane that
// silently stayed read-only would look exactly like an adjudicator that found
// nothing worth repairing.
const buildCodexResume = (sessionHome) => [
  process.env.CODEX_BIN ?? 'codex',
  [
    '--ask-for-approval', 'never', 'exec', 'resume', resumeSession,
    '--model', spec.model,
    ...(spec.provider !== 'openai' ? ['-c', `model_provider="${spec.provider}"`] : []),
    '-c', `sandbox_mode="${spec.sandbox}"`,
    '-c', `model_reasoning_effort="${spec.effort ?? 'xhigh'}"`,
    '-c', `model_context_window=${spec.contextWindow}`,
    ...(spec.web ? ['-c', 'tools.web_search=true'] : []),
    ...imagePaths.flatMap((image) => ['--image', resolveFile(image)]),
    ...(outputSchemaPath ? ['--output-schema', resolveFile(outputSchemaPath)] : []),
    ...(resultArtifactPath ? ['--output-last-message', lastMessagePath] : []),
    '--skip-git-repo-check',
    '-',
  ],
  { CODEX_HOME: sessionHome },
];

const buildCodex = (temporaryHome) => [
  process.env.CODEX_BIN ?? 'codex',
  [
    '--ask-for-approval', 'never', 'exec',
    '--model', spec.model,
    ...(spec.provider !== 'openai' ? ['-c', `model_provider="${spec.provider}"`] : []),
    // Role-driven, defaulting to xhigh so every pre-existing lane is unchanged
    // (owner, 2026-08-14). Previously hardcoded, which meant a deliberately
    // cheap lane still paid for xhigh reasoning it did not need. A role that
    // wants less says so in the table; silence still means xhigh.
    '-c', `model_reasoning_effort="${spec.effort ?? 'xhigh'}"`,
    // The temporary CODEX_HOME holds only auth.json, so config.toml — including
    // model_context_window — is deliberately NOT inherited. Pass the owner's
    // 1,000,000-token window explicitly or the lane silently runs at the
    // built-in default.
    '-c', `model_context_window=${spec.contextWindow}`,
    // Passed explicitly, never inherited. The temporary CODEX_HOME carries only
    // auth.json, and wave 1b's defect was exactly an implicitly inherited
    // setting that turned out not to be inherited. A source-review role that cannot
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

if (dryRun) {
  const [bin, args] = buildCodex('<temp-home>');
  const report = {
    role, label, run, runner: spec.runner, provider: spec.provider,
    model: spec.model, profile: spec.profile, sandbox: spec.sandbox,
    requested_effort: spec.requestedEffort,
    provider_effort: spec.effort ?? 'xhigh', context_window: spec.contextWindow,
    read_only_enforcement: spec.sandbox !== 'read-only' ? null
      : 'process: --sandbox read-only',
    lane_cap: spec.cap, timeout_s: timeoutSec,
    command: [bin, ...args].join(' '),
    prompt_bytes: Buffer.byteLength(prompt), prompt_lines: prompt.split('\n').length,
    attempt,
    evidence_tag: attemptTag || null,
    would_write: {
      log: logPath, result: resultPath, prompt: promptPath,
      latest_result: stableResultPath,
    },
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
  root: process.env.DISPATCH_SLOT_ROOT ?? '/tmp/prestige-math-library-agent-slots',
  caps: Object.fromEntries(Object.entries(ROLES).map(([name, r]) => [name, r.cap])),
  label: 'dispatch',
});

if (promptClaimed) refreshLatest(promptPath, stablePromptPath);
else writeAttemptFile(promptPath, stablePromptPath, prompt);

const started = new Date();
const release = await pool.acquire(role);

let temporaryHome = null;
// Set only when `--session-home` was given. Never torn down: it carries the
// rollout a later `codex exec resume` re-enters.
let persistentHome = null;
let codexAuthPaths = null;
let providerEnvironment = {};

const deepseekKey = () => {
  if (process.env.DEEPSEEK_API_KEY) return process.env.DEEPSEEK_API_KEY;
  const file = deepseekEnvFile();
  if (!file || !existsSync(file)) return null;
  const line = readFileSync(file, 'utf8').split(/\r?\n/)
    .find((candidate) => /^(?:export\s+)?DEEPSEEK_API_KEY\s*=\s*\S/.test(candidate));
  return line
    ? line.replace(/^(?:export\s+)?DEEPSEEK_API_KEY\s*=\s*/, '')
      .replace(/^['"]|['"]\s*$/g, '').trim()
    : null;
};

const configureProviderHome = (activeHome) => {
  if (spec.provider !== 'deepseek') return;
  const key = deepseekKey();
  if (!key) throw new Error(`no DEEPSEEK_API_KEY in env or ${deepseekEnvFile()}`);
  const catalog = join(activeHome, 'models.json');
  const config = join(activeHome, 'config.toml');
  // Exact DeepSeek Codex catalog entry vendored from the official setup script:
  // https://cdn.deepseek.com/api-docs/codex-deepseek-setup-en.sh
  copyFileSync(join(REPO, 'tools', 'deepseek-models.json'), catalog);
  chmodSync(catalog, 0o600);
  writeFileSync(config, [
    `model = "${spec.model}"`,
    'model_provider = "deepseek"',
    'preferred_auth_method = "apikey"',
    'forced_login_method = "api"',
    `model_reasoning_effort = "${spec.effort}"`,
    `model_catalog_json = ${JSON.stringify(catalog)}`,
    '',
    '[model_providers.deepseek]',
    'name = "deepseek"',
    'base_url = "https://api.deepseek.com/"',
    'wire_api = "responses"',
    'env_key = "DEEPSEEK_API_KEY"',
    '',
  ].join('\n'));
  chmodSync(config, 0o600);
  providerEnvironment = { DEEPSEEK_API_KEY: key };
};
/** The codex conversation this dispatch created, or null for a non-codex lane.
 *
 *  Two sources, in order. codex announces `session id: <uuid>` on stderr at
 *  startup — that is where it actually goes, checked against a real run rather
 *  than assumed from where the banner appears in a terminal. If a future release
 *  moves or drops that line, the rollout file under the session home names the
 *  same uuid, and that home holds exactly one dispatch's sessions, so there is
 *  nothing to disambiguate. */
const codexSessionId = (result) => {
  const banner = /^\s*session id:\s*([0-9a-f-]{36})\s*$/mi;
  for (const stream of [result?.stderr, result?.stdout]) {
    const hit = banner.exec(String(stream ?? ''))?.[1];
    if (hit) return hit;
  }
  const sessionHome = persistentHome ?? temporaryHome;
  if (!sessionHome) return null;
  const roots = [join(sessionHome, 'sessions')];
  const found = [];
  while (roots.length) {
    const dir = roots.pop();
    let entries;
    try { entries = readdirSync(dir, { withFileTypes: true }); } catch { continue; }
    for (const e of entries) {
      if (e.isDirectory()) roots.push(join(dir, e.name));
      else {
        const m = /^rollout-.*-([0-9a-f-]{36})\.jsonl$/i.exec(e.name);
        if (m) found.push({ id: m[1], at: statSync(join(dir, e.name)).mtimeMs });
      }
    }
  }
  if (!found.length) return null;
  found.sort((a, b) => b.at - a.at);
  return found[0].id;
};

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
const result = await new Promise((resolve) => {
  let bin, args, extraEnv;
  // Give each agent an isolated home containing only its auth record so
  // concurrent processes cannot race on local state. Persist a rotated OAuth
  // token before removing a temporary home.
  if (sessionHomeArg) {
    persistentHome = pathResolve(REPO, sessionHomeArg);
    mkdirSync(persistentHome, { recursive: true, mode: 0o700 });
  } else {
    temporaryHome = mkdtempSync(`/tmp/prestige-dispatch-${role}-`);
  }
  const activeHome = persistentHome ?? temporaryHome;
  try {
    if (spec.provider === 'openai') {
      const sourceAuth = join(codexHome, 'auth.json');
      codexAuthPaths = { source: sourceAuth, temporary: join(activeHome, 'auth.json') };
      if (existsSync(sourceAuth)) {
        copyFileSync(sourceAuth, join(activeHome, 'auth.json'));
        chmodSync(join(activeHome, 'auth.json'), 0o600);
      }
    } else {
      configureProviderHome(activeHome);
    }
  } catch (error) {
    const stderr = String(error?.message ?? error);
    writeAttemptFile(logPath, stableLogPath,
      `# ${role}/${label} ${started.toISOString()}\n\n## stdout\n\n\n## stderr\n${stderr}\n`);
    resolve({ code: 1, timedOut: false, stdout: '', stderr });
    return;
  }
  [bin, args, extraEnv] = resumeSession ? buildCodexResume(activeHome) : buildCodex(activeHome);

  const child = spawn(bin, args, {
    cwd: REPO,
    stdio: ['pipe', 'pipe', 'pipe'],
    env: { ...process.env, ...extraEnv, ...providerEnvironment },
  });

  let stdout = '';
  let stderr = '';
  let settled = false;
  let timedOut = false;

  const finish = (code) => {
    if (settled) return;
    settled = true;
    clearTimeout(timer);
    writeAttemptFile(logPath, stableLogPath, `# ${role}/${label} ${started.toISOString()}\n\n## stdout\n${stdout}\n\n## stderr\n${stderr}\n`);
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
const completedSessionId = resumeSession ?? codexSessionId(result);

const attestContext = () => {
  if (!spec.attestContext) return null;
  const home = persistentHome ?? temporaryHome;
  const attestation = {
    required: true,
    ok: false,
    profile: spec.profile,
    model: spec.model,
    provider: spec.provider,
    requested_effort: spec.requestedEffort,
    provider_effort: spec.effort,
    nominal_context_window: spec.contextWindow,
    observed_context_window: null,
  };
  if (!home || !completedSessionId) return { ...attestation, error: 'session metadata missing' };
  const pending = [join(home, 'sessions')];
  let rollout = null;
  while (pending.length && !rollout) {
    const dir = pending.pop();
    let entries;
    try { entries = readdirSync(dir, { withFileTypes: true }); } catch { continue; }
    for (const entry of entries) {
      const path = join(dir, entry.name);
      if (entry.isDirectory()) pending.push(path);
      else if (entry.name.endsWith(`-${completedSessionId}.jsonl`)) { rollout = path; break; }
    }
  }
  if (!rollout) return { ...attestation, error: 'rollout metadata missing' };
  let provider = null;
  let model = null;
  let effort = null;
  let observed = null;
  for (const line of readFileSync(rollout, 'utf8').split('\n').filter(Boolean)) {
    let row;
    try { row = JSON.parse(line); } catch { continue; }
    if (row.type === 'session_meta') provider = row.payload?.model_provider ?? provider;
    if (row.type === 'turn_context') {
      model = row.payload?.model ?? model;
      effort = row.payload?.effort ?? effort;
    }
    if (row.type === 'event_msg' && row.payload?.type === 'task_started') {
      observed = row.payload?.model_context_window ?? observed;
    }
  }
  const ok = provider === spec.provider && model === spec.model && effort === spec.effort
    && Number(observed) >= Number(spec.effectiveContextFloor);
  return { ...attestation, ok, observed_context_window: observed,
    observed_provider: provider, observed_model: model, observed_effort: effort,
    ...(ok ? {} : { error: `expected ${spec.provider}/${spec.model}/${spec.effort} and >=${spec.effectiveContextFloor} effective tokens` }) };
};

const contextAttestation = attestContext();
if (contextAttestation && !contextAttestation.ok) {
  result.code = 1;
  result.stderr += `\nDeepSeek context attestation failed: ${contextAttestation.error}`;
}
if (temporaryHome) { try { rmSync(temporaryHome, { recursive: true, force: true }); } catch { /* best-effort */ } }

// A read-only role cannot write its own receipt, so the dispatcher—not the
// model—materialises the schema-constrained final response. This keeps such a
// role unable to edit the evidence it is judging while still giving the next
// gate a durable JSON receipt. A missing or malformed final message turns the
// dispatch red. No role routes here today: the step-10 visual lane was the last
// user and was deleted on 2026-08-23. The path stays because `--result-artifact`
// is generic, engine-level plumbing with its own test coverage.
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
  role, label, run, attempt, evidence_tag: attemptTag || null,
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
  runner: spec.runner, provider: spec.provider, model: spec.model,
  profile: spec.profile, requested_effort: spec.requestedEffort,
  provider_effort: spec.effort ?? 'xhigh', context_window: spec.contextWindow,
  context_attestation: contextAttestation,
  sandbox: spec.sandbox,
  started_at: started.toISOString(), ended_at: ended.toISOString(), ms: ended - started,
  exit_code: result.code, timed_out: result.timedOut,
  ok: result.code === 0 && !result.timedOut,
  // THE THREAD THIS DISPATCH IS PART OF, so a later stage can re-enter it.
  //
  // codex prints `session id: <uuid>` on its own stdout at startup. Parsed from
  // there rather than by scanning the rollout directory for the newest file:
  // four group Alphas share nothing but they do run at once, and "newest
  // rollout" resolves to whichever wrote last, which is not this dispatch. On a
  // resume the id is what we passed in, so it stays stable down the chain.
  //
  // Recorded for every codex lane, not only the resumable ones — an id costs
  // nothing to keep and a transcript nobody can find again is the expensive
  // thing.
  // codex prints it on STDERR, not stdout — measured, not assumed; the first
  // version scanned stdout only and recorded null against a session that existed.
  // Both streams are scanned so a future move does not silently break it, and
  // the rollout filename is the fallback: `rollout-<ts>-<uuid>.jsonl` under the
  // session home, which is unambiguous precisely because that home belongs to
  // this one dispatch.
  session_id: completedSessionId,
  session_home: persistentHome ? relative(REPO, persistentHome) : null,
  log: logPath, prompt: promptPath,
  // The agent's own final text, which is its report. Truncated in the record;
  // the log holds it in full.
  tail: result.stdout.trim().split('\n').slice(-40).join('\n'),
};
writeAttemptFile(resultPath, stableResultPath, JSON.stringify(record, null, 2) + '\n');
if (existsSync(lastMessagePath)) refreshLatest(lastMessagePath, stableLastMessagePath);

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
