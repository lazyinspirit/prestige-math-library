// The stage specification for the prestige-math-library build, steps 0 -> 10.
//
// EVERYTHING DOMAIN-SPECIFIC LIVES HERE. The engine knows nothing about
// mathematics, batches, Alphas or judges; it knows stages, units, coverage and
// gates. Porting this pipeline to another project means writing another file
// like this one, and porting it to another agent platform means changing one
// command template in the config. That separation is the whole design.
//
// Each stage declares:
//   units(ctx)          the units of work it owes           -> ['1','2',...]
//   pattern             which result files belong to it     -> /^beta-batch-/
//   labelFor(unit)      the dispatch label for a unit       (enables per-unit retry)
//   plan(ctx, pending)  dispatch descriptors for what is missing
//   gates(ctx)          commands that must pass before advancing
//
// A stage with no `plan` is a checkpoint: it advances when its artifacts appear,
// whoever produced them. That is how a step done by hand, or by a tool rather
// than an agent, still fits the machine.

import { readdirSync, existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const R = (ctx: any, ...p: string[]) => join(ctx.repo, ...p);

/** Batch numbers, read from disk rather than configured.
 *  A run's batch count is a property of its step-0 output, and anything that
 *  restates it in a second place will eventually disagree with it. */
export function batches(ctx: any): string[] {
  const dir = R(ctx, 'research');
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f: any) => f.startsWith(`${ctx.run}-batch-`) && f.endsWith('.pages.json'))
    .map((f: any) => f.replace(`${ctx.run}-batch-`, '').replace('.pages.json', ''))
    .filter((n: any) => /^\d+$/.test(n))
    .sort((a: any, b: any) => Number(a) - Number(b));
}

/**
 * Group Alphas: one per <=3 batches, read from the assignment an agent made at
 * stage `2-assign` and `tools/alpha-groups.mjs` validated.
 *
 * WHY THIS IS NOT A CHUNK OF THE SORTED LIST ANY MORE. It used to be exactly
 * that — `b.slice(i, i + 3)` — which is deterministic but not sound. On
 * `frontier-14` it handed one Alpha linear-algebra + number-theory +
 * category-theory, three unrelated subjects at once, while splitting topology's
 * three batches across two different Alphas so neither could see the
 * cross-references between its own pages. Minimising what crosses a group
 * boundary is a judgment about mathematical relatedness; category is a strong
 * proxy but does not settle the residual, because five categories over three
 * Alphas forces somebody to pair two singletons.
 *
 * The fallback is the old positional chunking, used only before the assignment
 * exists — `autopilot plan` and `doctor` both call this while `2-assign` is
 * still ahead of them, and neither dispatches anything.
 */
export function alphaGroups(ctx: any, size = 3): Array<{ label: string; covers: string[] }> {
  const assigned = readAlphaGroups(ctx);
  if (assigned) return assigned;
  const b = batches(ctx);
  const out: any[] = [];
  for (let i = 0; i < b.length; i += size) {
    out.push({ label: String.fromCharCode(97 + out.length), covers: b.slice(i, i + size) });
  }
  return out;
}

/** The validated assignment, or null before `2-assign` has produced one. */
function readAlphaGroups(ctx: any): Array<{ label: string; covers: string[] }> | null {
  const p = join(ctx.repo, `research/${ctx.run}-alpha-groups.json`);
  if (!existsSync(p)) return null;
  try {
    const raw = JSON.parse(readFileSync(p, 'utf8'));
    const rows = Array.isArray(raw) ? raw : raw?.groups;
    if (!Array.isArray(rows) || !rows.length) return null;
    return rows.map((g: any) => ({ label: String(g.label), covers: (g.covers ?? []).map(String) }));
  } catch { return null; }
}

/** The batches that must advance together at a group-Alpha stage.
 *
 *  One Alpha dispatch declares coverage of its whole group, so the group may not
 *  start until every batch it will claim is finished at the previous stage —
 *  otherwise its result file records work on a batch nobody has done.
 *
 *  READ THE ASSIGNMENT, NEVER THE FALLBACK. `alphaGroups` chunks positionally
 *  until `2-assign` writes the real partition, and the two disagree — that is the
 *  whole point of the stage. A cohort taken from the fallback would hold a batch
 *  for the wrong siblings, so every stage using this sits AFTER the `2-assign`
 *  barrier, and none of them is in a group that starts before it. */
const alphaCohort = (ctx: any, u: string): string[] =>
  alphaGroups(ctx).find((g: any) => g.covers.map(String).includes(String(u)))?.covers.map(String) ?? [String(u)];

const gate = (id: string, argv: any, extra: any = {}) => ({ id, argv, ...extra });

/** Gates that apply to the whole repository, re-run at several stages because
 *  authoring and repair both change items on disk. */
const repoWide = (ctx) => [
  gate('precheck', ['node', 'tools/tsx-run.mjs', 'tools/precheck.mts'], {
    liveness: { pattern: /(\d+)\s+checked/.source, min: 1, unit: 'items checked' },
  }),
  gate('depcheck', ['node', 'tools/depcheck.mjs']),
  gate('fwdcheck', ['node', 'tools/fwdcheck.mjs']),
  gate('extcheck', ['node', 'tools/extcheck.mjs']),
  gate('rendercheck', ['node', 'tools/rendercheck.mjs']),
  // gates.mjs listed these two as gates of record at steps 5/6/9/10 and
  // 2/5/6/10; this table — the only one that runs — carried neither.
  // prosecheck is the positional-claim class LEVELS.md calls "where 100% of
  // this library's found defects live"; depsource is dep-to-page resolution.
  // (citecheck stays advisory by design: it cannot exit nonzero, and an
  // always-green gate is noise, not checking — readers run it by hand.)
  gate('prosecheck', ['node', 'tools/prosecheck.mjs']),
  gate('depsource', ['node', 'tools/depsource.mjs']),
  // Scope loss is invisible to every gate that reads current state, and the
  // add/delete authority briefs/alpha.md grants runs through step 9 — so the
  // step-0 scope ledger is re-checked at every repo-wide gate point, not only
  // through step 5 (where it stopped when a scaffolded pair vanished anyway).
  scopeGate(ctx),
  // The judge sweep and level-coverage both expand pages into items — the
  // sweep via plan-spec.json (spliced at step 4), closure via the batch
  // manifests. An item an Alpha adds to a manifest after step 4 diverges the
  // two scopes: it escapes the sweep or hard-stops closure. Verify fails on
  // any divergence; the licensed remedy is splice-plan --batch <i> --update.
  gate('splice-verify', ['node', 'tools/splice-plan.mjs', '--run', ctx.run, '--verify']),
];

const coverageGates = (ctx) => batches(ctx).map((b: any) =>
  gate(`coverage-${b}`, ['node', 'tools/coverage-checklist.mjs', `research/${ctx.run}-batch-${b}.coverage.json`], {
    liveness: { pattern: /(\d+)\s+harvested/.source, min: 1, unit: 'harvested results' },
  }));

const policyGates = (ctx) => batches(ctx).map((b: any) =>
  gate(`policy-${b}`, ['node', 'tools/content-policy.mjs', '--manifest-only', `research/${ctx.run}-batch-${b}.pages.json`]));

/** Item mode — the other half of content-policy, and the only enforcement of
 *  applied-iota notation, provenance ENUM validity (level-coverage checks
 *  presence only), reader-visible source URLs, generated-claim containment and
 *  the external_dependency record. `--manifest-only` guards all of that behind
 *  `if (!manifestOnly)`, so a pipeline that only ever passes the flag performs
 *  none of it — which is what this engine did until 2026-08-16. Scope comes
 *  from the manifests, so the legacy corpus is not retro-flagged; runs only
 *  after step 5, when the item files exist. */
const policyItemGate = (ctx) => gate('content-policy-items', ['node', 'tools/content-policy.mjs',
  ...batches(ctx).map((b: any) => `research/${ctx.run}-batch-${b}.pages.json`)], {
  liveness: { pattern: /(\d+)\s+scoped item/.source, min: 1, unit: 'scoped items' },
});

const planGate = () => gate('validate-plan', ['node', 'tools/validate-plan.mjs', 'research/plan-spec.json']);

/** The step-0 drift review's teeth. The review is the `drift` unit of stage 1;
 *  this is what makes its report load-bearing rather than decorative. Fails on
 *  a missing report, an owed A page with no verdict, or any drift-blocked
 *  verdict — a blocked edge is a reading-order question, owner-only, and the
 *  run must stop at it rather than meet it at step 4 as `undeclared-prereq`. */
const driftGate = (ctx) => gate('drift-review', ['node', 'tools/drift-review-check.mjs', '--run', ctx.run], {
  liveness: { pattern: /(\d+)\s+page\(s\) reviewed/.source, min: 1, unit: 'pages reviewed' },
});

const batchCoverages = (ctx: any) => batches(ctx).map((b: any) => `research/${ctx.run}-batch-${b}.coverage.json`);

/** Full-text fetchability — the complement of url-liveness. The sweep probes
 *  HEADERS ONLY (a body download once reported a live 9.4 MB PDF as dead), so
 *  a bot wall answering 200 with an interstitial body is invisible to it.
 *  Owner instruction (2026-08-17): dead academic URLs are a normal case, and
 *  Betas prove full text is fetchable per URL at step 1. The Beta stamps each
 *  source at harvest time (`source-fetch-check --stamp`, per its brief); this
 *  gate is the no-network check that every source carries the stamp. */
const fetchGate = (ctx) => gate('source-fetch-check', ['node', 'tools/source-fetch-check.mjs',
  '--coverage', batchCoverages(ctx).join(',')], {
  liveness: { pattern: /(\d+)\/\d+ source\(s\) fetch-verified/.source, min: 1, unit: 'sources fetch-verified' },
});

/** MECHANICAL REPAIRS, keyed by the failing gate.
 *
 *  A repair in this table is a function of files on disk (plus, for the
 *  stamp, the network fetch that reading the cited document requires anyway)
 *  — the roles rule assigns those to code, never to a dispatch. Both
 *  scaffold-side joins share the table: stage 1 for a failure at the scaffold
 *  join, 3-recheck for one at the group join, because a source can die
 *  between the two. Strictness lives in the tools themselves: a dead URL
 *  with no archive snapshot, or a source that will not yield full text, exits
 *  nonzero, the round is spent, and the blocker survives for the judgment
 *  call (scouting a replacement source) that no table can make.
 */
// Absolute paths on purpose: the tools anchor RELATIVE paths to the library
// REPO constant, not to cwd, so a repair running against any other ctx.repo
// (a test fixture; a future second checkout) would silently read the wrong
// tree. ctx.repo is the truth the engine already holds.
const MECHANICAL_REPAIRS: Record<string, (ctx: any) => string[]> = {
  // dead citation with a recorded archive snapshot -> swap it in place
  'url-liveness': (ctx) => ['tools/url-recover-apply.mjs',
    '--liveness', R(ctx, 'research', `${ctx.run}-url-liveness.json`),
    '--coverage', batchCoverages(ctx).map((f: string) => join(ctx.repo, f)).join(',')],
  // sources missing their full-text stamp -> fetch the bodies and stamp them
  'source-fetch-check': (ctx) => ['tools/source-fetch-check.mjs',
    '--coverage', batchCoverages(ctx).map((f: string) => join(ctx.repo, f)).join(','), '--stamp'],
  // withheld splice batches -> re-transcribe; exit 1 = edges still await the
  // adjudicating Alpha (the residual the stage-4 hook routes)
  'splice-refusals': (ctx) => ['tools/splice-plan.mjs', '--run', ctx.run, '--all', '--fail-on-refusal'],
  // the stalemate synthetic (covered, undispatched, artifact-incomplete) on
  // stage 4 IS the withheld-splice shape — same repair
  'stage-stalemate': (ctx) => ['tools/splice-plan.mjs', '--run', ctx.run, '--all', '--fail-on-refusal'],
};

/** Run the table's repair for this failure, if it has one.
 *  'clean'      — a repair ran and exited 0; the battery re-verifies.
 *  'residual'   — a repair ran and left named failures (stderr carries
 *                 `fetch-check-...: <page>: <url>` lines); the caller may
 *                 route the residue to a scouting dispatch.
 *  'unhandled'  — no table entry for this gate. */
const mechanicalRepair = async ({ ctx, failure }: any): Promise<{ outcome: string; stderr?: string }> => {
  const repair = MECHANICAL_REPAIRS[failure.id];
  if (!repair) return { outcome: 'unhandled' };
  const argvTail = repair(ctx);
  const { spawnSync } = await import('node:child_process');
  const r = spawnSync('node', argvTail, { cwd: ctx.repo, encoding: 'utf8' });
  if (r.status !== 0) return { outcome: 'residual', stderr: (r.stderr || r.stdout || '').trim() };
  return { outcome: 'clean' };
};

/** Owner instruction (2026-08-17): when a source cannot be fetched or
 *  recovered mechanically, a BETA SCOUTS an alternate URL for the same
 *  source — that judgment is the one step no table can make, and burning
 *  repair rounds on it (the first live firing exhausted all three on a
 *  2-page archive capture the full-text gate rightly refused) routes it to
 *  a person when the design routes it to an agent. Parse the failing pages
 *  out of the repair residue, map page -> owning batch via the scope
 *  ledger, one scouting lane per batch. */
const dispatchSourceScouts = ({ ctx, executor, stage, round, stderr }: any) => {
  const pages = [...new Set([...(stderr ?? '').matchAll(/fetch-check-[a-z-]+: ([a-z0-9-]+):/g)].map((m) => m[1]))];
  if (!pages.length) return false;
  const ledger = JSON.parse(readFileSync(join(R(ctx, 'research'), `${ctx.run}-scope-ledger.json`), 'utf8'));
  const batchOf = new Map(ledger.pages.map((p: any) => [p.id, String(p.batch)]));
  const owed = [...new Set(pages.map((p) => batchOf.get(p)).filter(Boolean))];
  for (const b of owed) {
    executor.start(stage, {
      role: 'beta',
      label: `source-scout-${round}-b${b}`,
      job: 'scouting',
      covers: [b],
      brief: 'briefs/beta-scaffold.md',
      task: [`research/${ctx.run}-beta-source-scout.task.md`, `research/${ctx.run}-beta-fix.task.md`],
      timeout: 3600,
    });
  }
  return owed.length > 0;
};

/** Scope loss is invisible to every gate that reads the current state.
 *
 *  On frontier-14 a fully scaffolded A/B pair — 19 items, three verified
 *  sources, complete contracts, reviewed by a group Alpha — was removed from
 *  the manifest, the harvest and the contracts between step 3 and step 4, and
 *  every gate stayed green. They validate what is IN the artifacts; none can
 *  see a page that is no longer there. This one compares against what step 0
 *  said the run owed. */
const scopeGate = (ctx) => gate('manifest-integrity',
  ['node', 'tools/manifest-integrity.mjs', '--run', ctx.run]);

const urlGate = (ctx) => gate('url-liveness', [
  'node', 'tools/url-sweep.mjs', '--coverage',
  ...batches(ctx).map((b: any) => `research/${ctx.run}-batch-${b}.coverage.json`),
  '--out', `research/${ctx.run}-url-liveness.json`, '--recover', '--fail-on-dead',
], {
  // Zero collected URLs prints "0/0 live" and exits 0 — a coverage selection
  // gone wrong (wrong run name, empty files) must not pass as a sweep.
  liveness: { pattern: /\/(\d+) live/.source, min: 1, unit: 'URLs collected' },
});

// ---------------------------------------------------------------------------
// THE QUALITY-CONTROL GATES, AND WHY THEY ARE HERE NOW
//
// This engine used to gate on fourteen tools. The library has sixty, and the
// decisive ones — the proof contract, the finite smoke tests, the risk tiers,
// the blast radius, the spine receipt, and above all `level-coverage` — were in
// none of the thirteen stages. `level-coverage` did not appear anywhere in the
// autopilot source at all.
//
// They were not skipped. They were run BY THE ALPHAS, by hand, and reported in
// prose. frontier-14's step-8 report contains a "Gate state at hand-off" table
// whose last row reads `level-coverage BLOCKED`. The engine never saw it, because
// a markdown table is not an exit code. Step 9 ran, step 10 ran, and the build
// reported done with two fatal defects open and its receipt gate red.
//
// A gate a model runs and describes is a description. A gate the engine runs is
// a gate. Every signature below was read from the tool's own usage output, not
// recalled — four of six invocations were invented last time this was written.
// ---------------------------------------------------------------------------

/** The merged contract path. One place, because two would disagree. */
const contractsPath = (ctx) => `research/${ctx.run}-proof-contracts.json`;
const touchesPath = (ctx) => `research/${ctx.run}-touches.json`;
const closurePath = (ctx) => `research/${ctx.run}-judge-closure.json`;
const scaffoldPath = (ctx) => `research/${ctx.run}-scaffold-closure.json`;

/** The step-3 closure receipt, or null before the gate has ever run. */
function readScaffold(ctx): { insufficient: string[]; missing_verdict: string[]; closed: boolean } | null {
  const p = R(ctx, scaffoldPath(ctx));
  if (!existsSync(p)) return null;
  try { return JSON.parse(readFileSync(p, 'utf8')); } catch { return null; }
}

/** The closure receipt the judge gate writes, or null before it has ever run.
 *  Read fresh every time — it is rewritten by each gate run, and a cached copy
 *  would name repairs that have since landed. */
function readClosure(ctx): { needs_rejudge: string[]; unadjudicated: string[]; open_fatal: string[]; closed: boolean } | null {
  const p = R(ctx, closurePath(ctx));
  if (!existsSync(p)) return null;
  try { return JSON.parse(readFileSync(p, 'utf8')); } catch { return null; }
}

/**
 * Proof-obligation gates: merge the per-batch contracts, then check them.
 *
 * The merge is gate zero on purpose. `runGates` is sequential and stops at the
 * first failure, so a merge that fails means the checks below it never claim to
 * have passed over a stale file. Step 9 of frontier-14 re-merged to fold in a
 * late batch and left `proof-contract --strict` red for the rest of the run.
 *
 * `--require-reviewed` is a RISK-REPORT flag, not a proof-contract one — read
 * from `tools/risk-report.mjs`'s usage line. It demands an Alpha `risk_review`
 * disposition, which only exists after step 6, so it is off at step 5. Asking
 * the authoring Betas for another role's record can never pass on a fresh level.
 */
const contractGates = (ctx, { reviewed = false }: { reviewed?: boolean } = {}) => {
  const merged = contractsPath(ctx);
  const perBatch = batches(ctx).map((b: any) => `research/${ctx.run}-batch-${b}.proof-contracts.json`);
  return [
    gate('merge-contracts', ['node', 'tools/merge-proof-contracts.mjs', '--level', ctx.run, merged, ...perBatch]),
    gate('proof-contract', ['node', 'tools/proof-contract.mjs', merged, '--strict']),
    gate('finite-smoke', ['node', 'tools/finite-smoke.mjs', merged]),
    gate('risk-report', ['node', 'tools/risk-report.mjs', merged, ...(reviewed ? ['--require-reviewed'] : [])]),
    // A templated `not_applicable` boundary row is not a disposition. On
    // frontier-13 two false template rows each hid a fatal defect, and on
    // frontier-14 three did — three times out of three that anyone looked.
    gate('boundary-audit', ['node', 'tools/boundary-audit.mjs', merged,
      '--fail-on-contradicted', '--fail-on-template']),
    gate('citation-fidelity', ['node', 'tools/citation-fidelity.mjs', merged, '--fail-on-missing-quote']),
    // The gate that checks the gates. finite-smoke once reported "0 error(s), 0
    // check(s)" for most of a run: a green tick over an empty scope.
    gate('gate-liveness', ['node', 'tools/gate-liveness.mjs', '--run', ctx.run,
      '--contracts', merged,
      '--checklists', batches(ctx).map((b: any) => `research/${ctx.run}-batch-${b}.coverage.json`).join(','),
      '--min-checks', '1']),
  ];
};

/** The defect ledger: whoever writes a disposition writes the row, and this
 *  gate holds the two accountable to each other — every confirmed_fatal
 *  adjudication owned by exactly one row (anti-double-count), step-6-caught
 *  rows whenever a 6b report exists (the clause that stops the ledger being a
 *  mirror of the adjudication file), and open rows agreeing with the closure
 *  receipt (two blockers once lived only in markdown). */
const ledgerGate = (ctx) => gate('defect-ledger', ['node', 'tools/defect-ledger.mjs', 'check',
  '--run', ctx.run,
  '--adjudications', `research/${ctx.run}-judge-adjudications.jsonl`,
  '--closure', `research/${ctx.run}-judge-closure.json`], {
  liveness: { pattern: /(\d+) defect row\(s\) checked/.source, min: 1, unit: 'defect rows' },
});

/**
 * Judge closure — the predicate that says whether the mathematics is signed off.
 *
 * Three questions, all answered against the text on disk right now: does every
 * item have a current verdict pair, is every current rejection adjudicated, and
 * is any adjudication `confirmed_fatal`. `--out` writes the ids in each class so
 * the rejudge stage has something to dispatch from — frontier-14's step 8 named
 * its 23 rejudge targets in a markdown table and the rejudge never ran, because
 * nothing downstream could read a table.
 *
 * The allowances are per-stage and narrow:
 *   step 7 — nothing is adjudicated yet, so rejections are expected;
 *   step 8 — repairs legitimately void their own pairs, and the next stage fixes
 *            that; an unadjudicated rejection and an open fatal are NOT allowed.
 *   after  — no allowances at all.
 */
const closureGate = (ctx, { allowUnadjudicated = false, pendingRejudge = false } = {}) =>
  gate('judge-closure', ['node', 'tools/level-coverage.mjs',
    '--judge-only', '--verify-current-context',
    '--judge-ledger', `research/${ctx.run}-judge.jsonl`,
    '--judge-adjudications', `research/${ctx.run}-judge-adjudications.jsonl`,
    ...(allowUnadjudicated ? ['--allow-unadjudicated'] : []),
    ...(pendingRejudge ? ['--allow-pending-rejudge'] : []),
    '--out', closurePath(ctx),
    ...batches(ctx).map((b: any) => `research/${ctx.run}-batch-${b}.pages.json`),
  ], {
    liveness: { pattern: /(\d+)\/(?:\d+) current pair/.source, min: 1, unit: 'judged pairs' },
  });

/** The whole-level receipt gate. The one frontier-14 never ran. */
const levelCoverageGate = (ctx) => gate('level-coverage', ['node', 'tools/level-coverage.mjs',
  '--contracts', contractsPath(ctx),
  '--judge-ledger', `research/${ctx.run}-judge.jsonl`,
  '--judge-adjudications', `research/${ctx.run}-judge-adjudications.jsonl`,
  '--spine-receipt', `research/${ctx.run}-spine-audit.json`,
  '--audit-receipt', `research/${ctx.run}-audit-coverage.json`,
  '--verify-current-context',
  ...batches(ctx).map((b: any) => `research/${ctx.run}-batch-${b}.pages.json`),
], {
  liveness: { pattern: /level-coverage: (\d+) item/.source, min: 1, unit: 'items' },
});

/**
 * The step-3 closure predicate — the scaffold half of the self-correcting loop.
 *
 * Step 3 asks whether each pair is deep enough to author. Alpha answers
 * `sufficient` or `insufficient` per pair; a Beta repairs; Alpha re-checks. That
 * ran once each, in a line, and the re-check's conclusion changed nothing —
 * whatever it said, step 4 spliced. A scaffold still insufficient advanced
 * exactly like one that was not, which is how a pair published with no
 * orbit–stabiliser theorem.
 *
 * `review` requires every A page to HAVE a verdict; `sufficient` requires every
 * verdict to BE sufficient, and is what the re-check gates on so the loop
 * cannot exit while a pair is still thin.
 */
const scaffoldGate = (ctx, { requireSufficient = false } = {}) =>
  gate('scaffold-verdicts', ['node', 'tools/scaffold-verdicts.mjs',
    '--run', ctx.run,
    ...(requireSufficient ? ['--require-sufficient'] : []),
    '--out', scaffoldPath(ctx),
  ], {
    liveness: { pattern: /(\d+)\/(?:\d+) A page\(s\) reviewed/.source, min: 1, unit: 'reviewed pairs' },
  });

/** Blast radius, `pre-author -> post-6b`. Both endpoints are load-bearing:
 *  a baseline taken after authoring makes the diff empty by construction
 *  (hence `4-baseline` before step 5), and without an explicit `--to` the
 *  tool diffs against the ledger's LAST snapshot — which at 6c time was
 *  `pre-author` itself, so the gate diffed the baseline against itself and
 *  confirmed "0 changed" over the whole level (hence `6b-baseline` before
 *  6c). The 6c Alpha's own later edits fall inside the step-8 window. */
const impactGate = (ctx) => gate('impact-audit', ['node', 'tools/impact-audit.mjs',
  '--touches', touchesPath(ctx), '--from', 'pre-author', '--to', 'post-6b',
  '--receipt', `research/${ctx.run}-impact.json`,
]);


/**
 * Build the result-file matcher from the dispatcher's own naming rule.
 *
 * `dispatch.mjs` writes `<role>-<label>.result.json` (its line 357). Thirteen
 * stages hand-wrote a regex against that rule from memory, and they drifted:
 * `/^alpha-step3-/` missed `alpha-alpha-step3-a.result.json`, produced when a
 * caller's label already contains the role. The stage read 3/6 covered while a
 * completed, ok:true result sat on disk.
 *
 * Deriving it removes the class. `role` and a label pattern are what a stage
 * actually knows; the doubled `<role>-<role>-<label>` form and the
 * `.result.json` suffix are the dispatcher's business, encoded once.
 *
 * The label pattern is anchored at both ends on purpose: without it,
 * `batch-\d+` also matches `fix-batch-3`, and two stages count each other's work.
 */
const resultPattern = (role: string, labelSource: string): RegExp =>
  new RegExp(`^${role}-(?:${role}-)?(?:${labelSource})\\.result\\.json$`);

// ---------------------------------------------------------------------------
// THE TWO OVERLAP GROUPS, AND WHY THEY STOP WHERE THEY DO
//
// Serial stages make the slowest unit of one stage the start time of every unit
// of the next. Authors run to six hours and readers to four, so on a seven-batch
// level the last author held five readers idle for most of an afternoon.
//
//   'scaffold'  3-review -> 3-fix -> 3-recheck
//   'read'      5-author -> 6a-read -> 6b-adjudicate
//
// Both are contiguous runs, and both end at a hard barrier: `4-splice` and
// `6b-baseline`. Everything outside them — `1-scaffold`, `2-assign`, all three
// touch snapshots, the splice, the cross-level audit, the judge sweep, step 8,
// step 9 and the report — carries no `pipeline` and is therefore still strictly
// serial and whole-level. Those are the stages that write a shared ledger or take
// a snapshot whose ordering IS the guarantee, and overlapping two of them is what
// produced 97 staled judge rows.
//
// WHY `1-scaffold` IS NOT IN THE SCAFFOLD GROUP, though it looks like the
// obvious first member. Every group-Alpha stage waits on a COHORT, and the
// cohort is the Alpha's assigned batches — which do not exist until `2-assign`
// writes `<run>-alpha-groups.json` mid-run. Before that, `alphaGroups` returns a
// positional chunking that is deliberately NOT the answer: the whole reason the
// stage exists is that chunking split topology across two Alphas and gave one
// Alpha three unrelated subjects. A group spanning `1-scaffold -> 3-review` would
// therefore compute cohorts from the fallback and hold each batch for the wrong
// siblings. `2-assign` also needs every batch's manifest before it can partition
// anything, so it is a barrier on both counts and the pipeline starts after it.
//
// The `read` group joins at `6b-baseline`, not at `6c-cross`: the snapshot is the
// `--to` endpoint of the 6c impact window, and it must capture text that has
// already passed the group's gates. Stage order gives that for free — no member
// of a group is `done` until the join's gates are green, and `6b-baseline` is a
// later stage, so the gates run first and the snapshot is of gated text. A
// snapshot taken before the join would drift the moment a gate failure sent an
// Alpha back to repair something.
//
// WHAT THIS DOES NOT MOVE: gates. Every gate listed on every member stage runs
// at the group exit, once, over the whole level, with the group drained. The
// per-batch coverage and policy gates run there too — they are per-batch in
// their ARGUMENTS, not in their timing, and making them per-batch in timing
// would buy an earlier signal at the price of a gate whose scope depends on
// which batch happened to finish first.
// ---------------------------------------------------------------------------

export const stages = [
  {
    id: '1-scaffold',
    label: 'Beta scaffolding + step-0 drift review',
    // Not pipelined: the stage after it is the assignment barrier. See the note
    // above — a cohort computed before `2-assign` is computed from a fallback
    // that the assignment exists to overrule.
    //
    // THE `drift` UNIT. `autopilot plan` writes the prerequisite-drift review
    // task and its evidence file, and until 2026-08-16 nothing dispatched it:
    // the plan output said "dispatched as the first audit node" and no stage
    // owned the dispatch, no gate required the report — a never-invoked node,
    // found only because frontier-15's step 0 surfaced real drift the review
    // existed to catch. It rides in this stage because it is read-only on the
    // designs and the spec, so it costs no wall-clock next to the 4-hour
    // scaffold window, and `drift-review-check` makes it unable to be skipped:
    // a missing report, an unreviewed page, or a blocked (owner-only) edge
    // fails the stage. Coverage attributes results by their declared `covers`,
    // so the mixed unit set is safe — the Alpha declares `drift`, each Beta
    // declares its batch number.
    units: (ctx: any) => ['drift', ...batches(ctx)],
    // Anchored and exact ON PURPOSE: an unanchored `beta-batch-` also matches
    // `beta-fix-batch-3.result.json`, which belongs to a different stage. The
    // alternation admits exactly the two result shapes this stage owns.
    pattern: /^(?:beta-(?:beta-)?batch-\d+|alpha-(?:alpha-)?drift-review)\.result\.json$/,
    labelFor: (u) => (u === 'drift' ? 'drift-review' : `batch-${u}`),
    concurrency: 9,
    plan: (ctx, pending) => pending.map((u: any) => (u === 'drift'
      ? {
        role: 'alpha',
        label: 'drift-review',
        job: 'verification',
        covers: ['drift'],
        brief: 'briefs/alpha-drift.md',
        task: [`research/${ctx.run}-alpha-step0-drift.task.md`],
        timeout: 7200,
      }
      : {
        role: 'beta',
        label: `batch-${u}`,
        job: 'scaffolding',
        covers: [u],
        brief: 'briefs/beta-scaffold.md',
        task: [`research/${ctx.run}-beta-${u}.task.md`, `research/${ctx.run}-beta-batch.task.md`],
        timeout: 14400,
      })),
    gates: (ctx) => [scopeGate(ctx), driftGate(ctx), ...coverageGates(ctx), ...policyGates(ctx), planGate(), urlGate(ctx), fetchGate(ctx)],

    // Failures at this join with a MECHANICAL_REPAIRS entry — the archive
    // swap, the full-text stamp — are repaired by code, one round each; see
    // the table above for why, and for why its strictness is the point. The
    // first live firing of the swap round is what un-deadlocked this stage on
    // frontier-15 (§3.11c). Two rounds, because the two repairs can be owed
    // independently and each consumes one.
    maxFixRounds: 2,
    onGateFailure: async (args: any) => {
      const repair = await mechanicalRepair(args);
      if (repair.outcome === 'residual' && !dispatchSourceScouts({ ...args, stderr: repair.stderr })) {
        throw new Error(`mechanical repair left residue and no scout could be routed: ${(repair.stderr ?? '').slice(0, 300)}`);
      }
    },
  },

  // THE ORCHESTRATOR ROLE IS GONE (owner, 2026-08-16). Every judgment it used
  // to make belongs to an Alpha; every transition between judgments belongs to
  // the engine. The two are different things and conflating them is what put a
  // model on the critical path in the first place.
  //
  // What the orchestrator used to do, and where it went:
  //   batching, seam count, drift diff   -> `autopilot plan`, mechanical
  //   adjudicating Beta recommendations  -> the step-3 Alpha, below
  //   routing findings to owning Betas   -> the 3-fix stage, mechanical fan-out
  //   running gates, keeping ledgers     -> the engine
  //   deciding a stage is finished       -> the engine's coverage predicate
  //   the step-10 owner report           -> a supervisor agent, last stage
  // ASSIGN BATCHES TO ALPHAS BEFORE ANY ALPHA IS DISPATCHED (owner, 2026-08-16).
  //
  // This is a judgment, not a chunking: minimise what crosses a group boundary,
  // and keep each Alpha inside one category wherever a category fits in one.
  // It is NOT `dispatch-planning` — the engine still decides which units are
  // uncovered and what to dispatch. This decides only how already-owed work is
  // grouped, and `alpha-groups.mjs` checks every structural property of the
  // answer rather than trusting it: full coverage, no duplicate batch, the lane
  // and per-group caps, a stated rationale, and no avoidable category split.
  {
    id: '2-assign',
    label: 'assign batches to group Alphas',
    units: () => ['all'],
    pattern: resultPattern('alpha', 'assign'),
    artifacts: (ctx) => `research/${ctx.run}-alpha-groups.json`,
    concurrency: 1,
    plan: (ctx) => [{
      role: 'alpha',
      label: 'assign',
      job: 'partitioning',
      covers: ['all'],
      brief: 'briefs/alpha.md',
      task: [`research/${ctx.run}-alpha-assign.task.md`, 'briefs/alpha-assign.md'],
      timeout: 3600,
    }],
    gates: (ctx) => [gate('alpha-groups', ['node', 'tools/alpha-groups.mjs', '--run', ctx.run], {
      liveness: { pattern: /(\d+) group\(s\) over/.source, min: 1, unit: 'groups' },
    })],
  },

  {
    id: '3-review',
    label: 'Alpha scaffold review and adjudication',
    pipeline: 'scaffold',
    role: 'alpha',
    units: batches,
    pattern: resultPattern('alpha', 'step3-[a-z]+'),
    concurrency: 3,
    // An Alpha group reviews as a unit, so it waits for its own three batches to
    // scaffold — and for nobody else's.
    cohort: alphaCohort,
    // One Alpha per group; each declares the batches it covers, so the stage
    // completes on coverage no matter how the grouping came out.
    plan: (ctx, pendingUnits) => {
      const groups = alphaGroups(ctx).filter((g: any) => g.covers.some((c: any) => pendingUnits.includes(String(c))));
      return groups.map((g: any) => ({
        role: 'alpha',
        label: `step3-${g.label}`,
      job: 'audit',
        covers: g.covers,
        brief: "briefs/alpha.md",
        task: [`research/${ctx.run}-alpha-${g.label}.task.md`, `research/${ctx.run}-alpha-group.task.md`],
        timeout: 10800,
      }));
    },
    // Every pair must carry a verdict. An Alpha that reviewed four of six pairs
    // and exited zero used to clear this stage.
    gates: (ctx) => [scopeGate(ctx), planGate(), scaffoldGate(ctx)],
  },

  // Findings go back to the Beta that owns the batch. This used to be an
  // orchestrator writing a fix brief per batch, which is also where eleven
  // findings were once lost — they were transcribed from an agent's closing
  // message instead of its report, and renumbering made the losses look like
  // completions. The fan-out is now mechanical and the task file points at the
  // report FILE and the finding ids, so there is no transcription step to lose
  // anything in.
  {
    id: '3-fix',
    label: 'Beta fix pass on step-3 findings',
    pipeline: 'scaffold',
    role: 'beta',
    units: batches,
    pattern: resultPattern('beta', 'fix-batch-\\d+'),
    labelFor: (u) => `fix-batch-${u}`,
    concurrency: 9,
    // A batch with no findings still needs a covering result, so the fix task
    // is written for every batch and a Beta with nothing to do says so and
    // exits. Making "no findings" a fast no-op is cheaper than making the
    // engine reason about which batches were named.
    plan: (ctx, pending) => pending.map((u: any) => ({
      role: 'beta',
      label: `fix-batch-${u}`,
      job: 'authoring',
      covers: [u],
      brief: "briefs/beta-scaffold.md",
      task: [`research/${ctx.run}-beta-${u}-fix.task.md`, `research/${ctx.run}-beta-fix.task.md`],
      timeout: 7200,
    })),
    gates: (ctx) => [scopeGate(ctx), ...coverageGates(ctx), ...policyGates(ctx), planGate()],
  },

  // Alpha re-checks its own findings from disk before the splice. An `applied`
  // claim that changed nothing is caught here, which is the only reason the
  // fix stage can be trusted without a human reading it.
  {
    id: '3-recheck',
    label: 'Alpha re-check before splice',
    pipeline: 'scaffold',
    role: 'alpha',
    units: batches,
    pattern: resultPattern('alpha', 'recheck-[a-z]+'),
    concurrency: 3,
    cohort: alphaCohort,
    plan: (ctx, pendingUnits) => alphaGroups(ctx)
      .filter((g: any) => g.covers.some((c: any) => pendingUnits.includes(String(c))))
      .map((g: any) => ({
        role: 'alpha',
        label: `recheck-${g.label}`,
      job: 'adjudication',
        covers: g.covers,
        brief: "briefs/alpha.md",
        task: [`research/${ctx.run}-alpha-${g.label}-recheck.task.md`, `research/${ctx.run}-alpha-group-recheck.task.md`],
        timeout: 7200,
      })),
    // THE SCAFFOLD LOOP CLOSES HERE. Not "a re-check happened" — every pair is
    // actually sufficient, or this stage does not clear and step 4 cannot splice.
    //
    // The URL gates run at this join too (owner, 2026-08-17): a source can die
    // between the stage-1 join and the splice, and step 3 is the last point
    // where the repair is a scaffold edit. Same self-heal path as stage 1 —
    // the MECHANICAL_REPAIRS table swaps recorded snapshots and stamps
    // unstamped sources; only an unrecoverable or unfetchable source reaches
    // the fix loop below, as scouting work for the owning Beta.
    gates: (ctx) => [scopeGate(ctx), planGate(), scaffoldGate(ctx, { requireSufficient: true }), urlGate(ctx), fetchGate(ctx)],
    // Still thin after the re-check is another fix round, not an advance. Bounded
    // for the same reason the judge loop is: a scaffold that will not converge is
    // a decision for a person, and the blocker names the pairs.
    maxFixRounds: 3,
    onGateFailure: async ({ ctx, executor, stage, round, failure }) => {
      // Mechanically repairable failures never spend a Beta dispatch; a
      // repair that leaves residue (a source no swap or stamp can save)
      // routes the residue to scouting Betas — the owner's designed remedy —
      // rather than burning rounds into a needs-a-person blocker.
      const repair = await mechanicalRepair({ ctx, failure });
      if (repair.outcome === 'clean') return;
      if (repair.outcome === 'residual') {
        if (dispatchSourceScouts({ ctx, executor, stage, round, stderr: repair.stderr })) return;
        throw new Error(`mechanical repair left residue and no scout could be routed: ${(repair.stderr ?? '').slice(0, 300)}`);
      }
      const scaffold = readScaffold(ctx);
      const pages = scaffold?.insufficient ?? [];
      if (!pages.length) return;                 // failed on a missing verdict instead
      // ONE LANE PER OWNING BATCH, the batch carried as the cover. The first
      // live firing dispatched one anonymous lane per PAGE — same prompt, no
      // page identity, covers [] — so four Betas would each have had to guess
      // which finding was theirs, and two pages in one batch meant two
      // writers on one batch's files. The scope ledger maps page -> batch;
      // the single cover flows into `--var i=<batch>` mechanically, and the
      // task file keys the receipt's findings on it. The result files match
      // no stage's pattern, so these lanes claim no coverage — the recheck
      // Alphas re-assert sufficiency, which is the loop's whole point.
      const ledger = JSON.parse(readFileSync(join(R(ctx, 'research'), `${ctx.run}-scope-ledger.json`), 'utf8'));
      const batchOf = new Map(ledger.pages.map((p: any) => [p.id, String(p.batch)]));
      const owed = [...new Set(pages.map((p: any) => batchOf.get(p)).filter(Boolean))];
      for (const b of owed) {
        executor.start(stage, {
          role: 'beta',
          label: `scaffold-fix-${round}-b${b}`,
          job: 'scaffolding',
          covers: [b],
          brief: 'briefs/beta-scaffold.md',
          task: [`research/${ctx.run}-beta-scaffold-fix.task.md`, `research/${ctx.run}-beta-fix.task.md`],
          timeout: 7200,
        });
      }
    },
  },

  // STEP 4 IS A CODE NODE (audit, 2026-08-16). It was dispatched to a lead
  // Alpha, whose receipt recorded `item_ids_spliced`, `id_clash_check`,
  // `size_check` and `validate_plan` — and whose output was byte-identical to
  // the batch manifests. Transcription plus three mechanical gates, with no
  // judgment in it.
  //
  // It also cost a whole A/B pair: a step-4 Alpha met a page marked `not ready`
  // and resolved the deadlock by dropping it from the manifest.
  //
  // `splice-plan.mjs` refuses to guess. A `requires` disagreement, an existing
  // item list that differs, an oversized page or a duplicate id all exit
  // nonzero, and the engine raises a blocker for an Alpha to adjudicate — which
  // is the cognitive half, kept separate from the mechanical one.
  {
    id: '4-splice',
    label: 'splice ids into the plan (mechanical)',
    units: batches,
    // One dispatch, all batches: splice-plan is the single writer on
    // plan-spec.json either way, and one per-batch dispatch per 30s poll tick
    // cost ~3.5 minutes of wall clock for ~2 seconds of work. All-or-nothing
    // inside the tool; the per-batch receipts are still owed per unit.
    pattern: resultPattern('tool', 'splice-all'),
    artifacts: (ctx, u) => `research/${ctx.run}-splice-${u}.json`,
    concurrency: 1,
    plan: (ctx) => [{
      role: 'tool',
      label: 'splice-all',
      job: 'bookkeeping-mechanical',
      covers: batches(ctx),
      argv: ['node', 'tools/splice-plan.mjs', '--run', ctx.run, '--all'],
    }],
    // A `requires` refusal is the splice's correct OUTPUT, not its failure:
    // the lane exits 0, clean batches splice, the refusing batch is withheld
    // (no receipt, so its units stay open), and THIS gate holds the stage
    // while the adjudicating Alpha decides each edge — the disposition
    // CLAUDE.md assigns it ("the splice's refusal is what Alpha adjudicates").
    // Before this, the lane exited 1 on a deterministic refusal, burned its
    // three attempts on identical output, and the adjudication had no
    // dispatch route.
    gates: (ctx) => [
      // No liveness floor: vacuity is impossible here — an absent artifact
      // (the splice never ran) is exit 2, its own hard failure.
      gate('splice-refusals', ['node', 'tools/splice-plan.mjs', '--run', ctx.run, '--refusals-gate']),
      scopeGate(ctx), planGate()],
    maxFixRounds: 3,
    // Round shape: a refusal failure (or the stalemate synthetic, which on
    // this stage IS the withheld-splice shape) first re-runs the splice
    // mechanically — after an adjudication that is all it takes, receipts
    // land, and the battery greens. A residual exit means edges still await
    // the decision, so the round dispatches the adjudicating Alpha; the next
    // round's re-splice then transcribes what it decided. Three rounds:
    // re-splice, adjudicate, re-splice.
    onGateFailure: async ({ ctx, executor, stage, round, failure }: any) => {
      if (!['splice-refusals', 'stage-stalemate'].includes(failure.id)) return;
      const repair = await mechanicalRepair({ ctx, failure: { id: 'splice-refusals' } });
      if (repair.outcome === 'clean') return;
      executor.start(stage, {
        role: 'alpha',
        label: `step4-adjudicate-${round}`,
        job: 'adjudication',
        covers: [],
        brief: 'briefs/alpha.md',
        task: [`research/${ctx.run}-alpha-step4.task.md`],
        timeout: 3600,
      });
    },
  },

  // THE IMPACT BASELINE, TAKEN BEFORE AUTHORING.
  //
  // Its own stage because ordering is the whole point. `impact-audit` diffs the
  // items against a labelled snapshot; take the snapshot after authoring and the
  // diff is empty by construction, so the gate confirms rather than checks — a
  // gate that passes vacuously, with no way to tell from the outside.
  //
  // Stages are strictly ordered, so a stage boundary is the only place this can
  // be guaranteed. Two plan entries in one stage are not: they are dispatched
  // together up to the concurrency cap.
  {
    id: '4-baseline',
    label: 'pre-authoring touch snapshot (mechanical)',
    units: () => ['all'],
    pattern: resultPattern('tool', 'snap-pre-author'),
    artifacts: (ctx) => touchesPath(ctx),
    concurrency: 1,
    plan: (ctx) => [{
      role: 'tool',
      label: 'snap-pre-author',
      job: 'bookkeeping-mechanical',
      covers: ['all'],
      argv: ['node', 'tools/touchlog.mjs', 'snap', touchesPath(ctx), 'pre-author'],
    }],
    gatesWaived: 'A snapshot has nothing to check beyond its own existence, which `artifacts` '
      + 'already requires; the snapshot is itself the input to the impact gate at step 6c.',
  },

  {
    id: '5-author',
    label: 'authoring',
    // THE LARGEST WIN. A batch whose authoring is finished starts its reader
    // while the other batches are still being written: authors run to six hours
    // and readers to four, and serially the slowest author gated every reader.
    pipeline: 'read',
    role: 'beta',
    units: batches,
    pattern: resultPattern('beta', 'author-batch-\\d+'),
    labelFor: (u) => `author-batch-${u}`,
    concurrency: 9,
    plan: (ctx, pending) => pending.map((u: any) => ({
      role: 'beta',
      label: `author-batch-${u}`,
      job: 'authoring',
      covers: [u],
      brief: "briefs/authoring.md",
      task: [`research/${ctx.run}-beta-${u}-author.task.md`, `research/${ctx.run}-beta-author.task.md`],
      timeout: 21600,
    })),
    // Step 5 computes the risk tiers; step 6 requires their dispositions. Same
    // split the audit carries at A4 versus A6.
    gates: (ctx) => [...repoWide(ctx), planGate(), policyItemGate(ctx),
      ...contractGates(ctx, { reviewed: false })],
    // The candidate detectors' residue is a HUMAN READ by contract — their
    // own summary line says so — and the read is an Alpha's, at step 6,
    // before the text freezes. The first live join flagged two boundary rows
    // on one fs- item ("equivalent" naming a categorical predicate, not a
    // biconditional) and the failure dead-ended: candidate-typed judgment
    // with no routed lane, the same family as the source scouts and the
    // splice adjudication. One round dispatches the contract-audit Alpha; it
    // fixes a row that is genuinely wrong, or upholds it on the record
    // (`reviewed: {upheld, by, reason}`), which the detector then respects.
    // Structural gate failures (merge, strict, smoke, liveness) stay
    // blockers — those are tool or authoring defects, not candidate reads.
    maxFixRounds: 2,
    onGateFailure: async ({ ctx, executor, stage, round, failure }: any) => {
      if (!['boundary-audit', 'citation-fidelity'].includes(failure.id)) return;
      executor.start(stage, {
        role: 'alpha',
        label: `contract-audit-${round}`,
        job: 'adjudication',
        covers: [],
        brief: 'briefs/alpha.md',
        task: [`research/${ctx.run}-alpha-contract-audit.task.md`],
        timeout: 3600,
      });
    },
  },

  {
    id: '6a-read',
    label: 'independent readers',
    pipeline: 'read',
    role: 'reader',
    units: batches,
    pattern: resultPattern('reader', 'reader-\\d+'),
    // The report is the deliverable; a zero exit is not. reader-7 once exited
    // zero having written its report over reader-1's.
    artifacts: (ctx, u) => `research/${ctx.run}-reader-${u}.md`,
    labelFor: (u) => `reader-${u}`,
    concurrency: 9,
    plan: (ctx, pending) => pending.map((u: any) => ({
      role: 'reader',
      label: `reader-${u}`,
      job: 'audit',
      covers: [u],
      brief: "briefs/reader.md",
      task: [`research/${ctx.run}-reader-${u}.task.md`, `research/${ctx.run}-reader.task.md`],
      timeout: 14400,
    })),
    gatesWaived: 'Readers fix what they are licensed to fix (LEVELS.md 6a), so items DO change '
      + 'here — and the full repo-wide and contract gate set runs on that text at the read '
      + 'group\'s exit, over the whole level, with the adjudicating Alphas in the loop to route '
      + 'any failure, before the 6b snapshot and before 6c. A gate run per reader instead would '
      + 'be reading a level the other batches are still authoring. Each reader\'s report is '
      + 'required as `artifacts` above.',
  },

  {
    id: '6b-adjudicate',
    // The report is the deliverable, exactly as at 6a: a group Alpha that
    // adjudicates nothing and exits 0 must not clear the stage. Maps each
    // batch to its owning group's report; before 2-assign there is no group,
    // and the filter drops the null.
    artifacts: (ctx, u) => {
      const g = readAlphaGroups(ctx)?.find((x) => x.covers.includes(String(u)));
      return g ? `research/${ctx.run}-alpha-${g.label}-6b.md` : null;
    },
    label: 'group Alpha adjudication',
    // A group whose readers have ALL reported adjudicates while other groups are
    // still reading. Its repairs are confined to its own batches; the level-wide
    // checks that could be disturbed by them — the whole repo-wide set and the
    // contract gates — run at the group exit, after every group's 6b is done and
    // before 6c touches anything.
    pipeline: 'read',
    role: 'alpha',
    units: batches,
    pattern: resultPattern('alpha', '6b-[a-z]+'),
    concurrency: 3,
    cohort: alphaCohort,
    plan: (ctx, pendingUnits) => alphaGroups(ctx)
      .filter((g: any) => g.covers.some((c: any) => pendingUnits.includes(String(c))))
      .map((g: any) => ({
        role: 'alpha',
        label: `6b-${g.label}`,
      job: 'adjudication',
        covers: g.covers,
        brief: "briefs/alpha.md",
        task: [`research/${ctx.run}-alpha-${g.label}-6b.task.md`, `research/${ctx.run}-alpha-group-6b.task.md`],
        timeout: 14400,
      })),
    // `--require-reviewed` belongs here, not at step 5: a `risk_review` is a
    // disposition only Alpha may write, and Alpha writes it at step 6.
    gates: (ctx) => [...repoWide(ctx), ...contractGates(ctx, { reviewed: true })],
  },

  {
    id: '6b-baseline',
    label: 'post-6b touch snapshot (mechanical)',
    units: () => ['all'],
    pattern: resultPattern('tool', 'snap-post-6b'),
    artifacts: (ctx) => touchesPath(ctx),
    concurrency: 1,
    plan: (ctx) => [{
      role: 'tool',
      label: 'snap-post-6b',
      job: 'bookkeeping-mechanical',
      covers: ['all'],
      argv: ['node', 'tools/touchlog.mjs', 'snap', touchesPath(ctx), 'post-6b'],
    }],
    gatesWaived: 'A snapshot has nothing to check beyond its own existence, which `artifacts` '
      + 'already requires; it is the right endpoint of the 6c impact window, capturing '
      + 'authoring plus every 6a/6b repair.',
  },

  {
    id: '6c-cross',
    label: 'cross-level citation audit',
    units: () => ['all'],
    artifacts: (ctx) => `research/${ctx.run}-alpha-6c.md`,
    pattern: resultPattern('alpha', '6c-[a-z-]+'),
    concurrency: 1,
    plan: (ctx) => [{
      role: 'alpha',
      label: '6c-lead',
      job: 'audit',
      covers: ['all'],
      brief: "briefs/alpha.md",
      task: `research/${ctx.run}-alpha-6c.task.md`,
      timeout: 14400,
    }],
    gates: (ctx) => [
      ...repoWide(ctx), ...coverageGates(ctx), urlGate(ctx), policyItemGate(ctx),
      ...contractGates(ctx, { reviewed: true }),
      // Blast radius against the pre-authoring baseline, and the scope checklist
      // Alpha's receipt is bound to.
      impactGate(ctx),
      gate('audit-manifest', ['node', 'tools/audit-manifest.mjs',
        ...batches(ctx).map((b: any) => `research/${ctx.run}-batch-${b}.pages.json`),
        '--output', `research/${ctx.run}-audit-manifest.json`], {
        // A manifest set that resolved to nothing — wrong run name, empty
        // pages.json — enumerates zero relationships and exits 0. That is not
        // a clean scope checklist, it is no checklist.
        liveness: { pattern: /over (\d+) item\(s\) in/.source, min: 1, unit: 'manifest items' },
      }),
    ],
  },

  {
    id: '7-judge',
    label: 'paired judge sweep',
    units: () => ['all'],
    pattern: resultPattern('tool', 'judge-sweep'),
    concurrency: 1,
    // The judge sweep is a TOOL RUN, not an agent dispatch — judge-sweep.mjs
    // owns its own lane pools, retry semantics and attestation. The A-page ids
    // are computed here rather than in a shell sub-invocation: the first
    // version nested three levels of quoting inside a `sh -c`, which is a
    // defect waiting to happen in a stage that runs once, twelve hours into a
    // build, unattended.
    plan: (ctx) => {
      const aPages = [];
      for (const b of batches(ctx)) {
        const pj = JSON.parse(readFileSync(R(ctx, 'research', `${ctx.run}-batch-${b}.pages.json`), 'utf8'));
        for (const p of pj) if (p.kind === 'A') aPages.push(p.id);
      }
      return [{
        role: 'tool',
        label: 'judge-sweep',
        job: 'judgement',
        covers: ['all'],
        timeout: 43200,
        // argv, so there is nothing to quote and nothing to parse. The engine
        // writes the result record when this exits zero.
        argv: ['node', 'tools/judge-sweep.mjs',
          '--ledger', `research/${ctx.run}-judge.jsonl`,
          '--cost', `research/${ctx.run}-judge-cost.jsonl`,
          '--pages', aPages.join(',')],
      }];
    },
    // The sweep exiting zero says the tool ran. It does not say every item got a
    // verdict from both lanes, and on frontier-14 it did not: the stage cleared
    // on its own receipt and the level went forward with holes that only surfaced
    // at the very end. Coverage of the LEDGER is the completion condition.
    //
    // Rejections are expected here — nothing has adjudicated anything yet — so
    // they are warnings at this one stage and hard errors everywhere after.
    gates: (ctx) => [closureGate(ctx, { allowUnadjudicated: true })],
  },

  // The step-8 baseline, for the same reason as `4-baseline`: `step8-guard`
  // compares every changed item against a snapshot taken BEFORE adjudication
  // began. Taken afterwards it licenses whatever happened.
  {
    id: '8-baseline',
    label: 'pre-adjudication touch snapshot (mechanical)',
    units: () => ['all'],
    pattern: resultPattern('tool', 'snap-pre-step8'),
    concurrency: 1,
    plan: (ctx) => [{
      role: 'tool',
      label: 'snap-pre-step8',
      job: 'bookkeeping-mechanical',
      covers: ['all'],
      argv: ['node', 'tools/touchlog.mjs', 'snap', touchesPath(ctx), 'pre-step8'],
    }],
    gatesWaived: 'A snapshot has nothing to check beyond its own existence; it is the baseline '
      + 'the step-8 guard measures the next stage against.',
  },

  {
    id: '8-adjudicate',
    label: 'fatal-only adjudication',
    units: () => ['all'],
    pattern: resultPattern('alpha', 'step8-[a-z-]+'),
    concurrency: 1,
    plan: (ctx) => [{
      role: 'alpha',
      label: 'step8-lead',
      job: 'adjudication',
      covers: ['all'],
      brief: "briefs/alpha.md",
      task: `research/${ctx.run}-alpha-step8.task.md`,
      timeout: 21600,
    }],
    gates: (ctx) => [
      // Verified against the real tool: it takes a touch ledger, a baseline
      // label and the adjudication ledger — NOT --run. The first version of
      // this file guessed --run from memory and would have failed the stage
      // after burning two agent attempts.
      gate('step8-guard', ['node', 'tools/step8-guard.mjs',
        '--touches', touchesPath(ctx),
        '--baseline', 'pre-step8',
        '--adjudications', `research/${ctx.run}-judge-adjudications.jsonl`]),
      ...repoWide(ctx),
      // step8-guard checks one direction only: that every EDIT was licensed by a
      // fatal row. Nothing checked the other direction — that every REJECTION got
      // an outcome — so sixteen rejections on one batch were never read and the
      // stage passed green. This is that direction.
      //
      // A repaired item correctly has no current verdict pair; `8-rejudge` owns
      // that, hence the allowance. An unadjudicated rejection or an open fatal is
      // this stage's own unfinished work.
      closureGate(ctx, { pendingRejudge: true }),
      ledgerGate(ctx),
      // Repairs rewrite proofs, so the contract gates re-verify here — a fatal
      // repair whose new proof breaks its own input map must not wait for
      // 9-scope to surface. Repairs update the OWNING BATCH contract; the merge
      // re-derives from batch files, so a merged-only edit is resurrected
      // stale (frontier-14's step 9 did exactly that).
      ...contractGates(ctx, { reviewed: true }),
    ],
    // THE FATAL-REPAIR LOOP.
    //
    // frontier-14 ended with two confirmed-fatal proofs unrepaired. Both needed a
    // proof rewrite rather than a minimal correction, and step 8 is fatal-only —
    // so the lead Alpha correctly declined to improvise under a frozen verdict and
    // declared them blockers. It wrote that in markdown. Nothing read it, the
    // engine had no notion of an open fatal defect, and the run went to step 10.
    //
    // A fatal defect that needs authoring is still work. It gets dispatched.
    maxFixRounds: 3,
    onGateFailure: async ({ ctx, executor, stage, round }) => {
      const closure = readClosure(ctx);
      const ids = closure?.open_fatal ?? [];
      if (!ids.length) return;              // gate failed on something else
      // The task points at the closure RECEIPT, never at a transcribed id list.
      // Copying a list of findings into a prompt is how eleven of them went
      // missing once already.
      executor.start(stage, {
        role: 'alpha',
        // Deliberately not `step8-*`: the stage pattern matches `step8-` result
        // files, and a repair must not be mistaken for the adjudication itself.
        label: `repair-8-round-${round}`,
        job: 'authoring',
        covers: ['all'],
        brief: "briefs/alpha.md",
        task: [`research/${ctx.run}-alpha-repair.task.md`, `research/${ctx.run}-alpha-step8.task.md`],
        timeout: 21600,
      });
    },
  },

  // REJUDGE WHAT STEP 8 REPAIRED.
  //
  // This stage did not exist. Step 8 repaired 23 items and named them as the
  // rejudge set; the rejudge never ran, and 22 of them sit unjudged today. A
  // repaired item's own hash changed, so its verdict is void by construction —
  // there is no reading of the rules under which those repairs were signed off.
  {
    id: '8-rejudge',
    label: 'rejudge the repaired items',
    units: () => ['all'],
    pattern: resultPattern('tool', 'rejudge'),
    concurrency: 1,
    plan: (ctx) => {
      const ids = readClosure(ctx)?.needs_rejudge ?? [];
      return [{
        role: 'tool',
        label: 'rejudge',
        job: 'judgement',
        covers: ['all'],
        timeout: 43200,
        // `--items` is exactly what the owner rule reserves for "a later
        // Alpha-selected rejudge of an item materially repaired after the
        // complete sweep". Unedited page-mates keep their verdicts under
        // level-coverage clause (b) and are not re-spent.
        //
        // Nothing to rejudge is a real outcome, not an error: step 8 may have
        // confirmed every rejection nonfatal and touched nothing. The closure
        // gate below is what decides whether that is true.
        argv: ids.length
          ? ['node', 'tools/judge-sweep.mjs',
            '--ledger', `research/${ctx.run}-judge.jsonl`,
            '--cost', `research/${ctx.run}-judge-cost.jsonl`,
            '--items', ids.join(',')]
          : ['node', '-e', 'console.log("rejudge: nothing repaired since the sweep")'],
      }];
    },
    // No allowances. Every item has a current pair, every current rejection has
    // an outcome, and no outcome is fatal — or this stage is not finished.
    // step8-guard runs here too: the repair loop below dispatches an
    // adjudicate-and-repair Alpha up to three times INSIDE the pre-step8
    // window, and without the guard those edits were never measured against
    // the fatal-only rule. Contract gates for the same reason as 8-adjudicate.
    gates: (ctx) => [
      gate('step8-guard', ['node', 'tools/step8-guard.mjs',
        '--touches', touchesPath(ctx),
        '--baseline', 'pre-step8',
        '--adjudications', `research/${ctx.run}-judge-adjudications.jsonl`]),
      ...repoWide(ctx), ...contractGates(ctx, { reviewed: true }), closureGate(ctx),
      ledgerGate(ctx),
    ],
    // A rejudge can surface a NEW rejection on repaired text, which needs
    // adjudicating and possibly repairing again. That is a real convergence
    // loop and it is bounded: past the cap the gate still blocks and a person
    // reads the blocker. Fatal repairs being uncapped is a rule about what may
    // be edited, not a licence to spend without limit unattended.
    maxFixRounds: 3,
    onGateFailure: async ({ ctx, executor, stage, round }) => {
      const closure = readClosure(ctx);
      if (!closure || closure.closed) return;

      // The gate fails for two different reasons and they need different work.
      //
      // Items with no current pair need JUDGING, which is mechanical — a repair
      // round can edit further items, and dispatching an adjudicator at them
      // would be asking a model to read verdicts that do not exist yet. Judge
      // first; adjudicate what comes back on the next round.
      if (closure.needs_rejudge?.length) {
        executor.start(stage, {
          role: 'tool',
          label: `rejudge-round-${round}`,
          job: 'judgement',
          covers: [],                       // declares no coverage: this is extra work, not the stage's unit
          timeout: 43200,
          argv: ['node', 'tools/judge-sweep.mjs',
            '--ledger', `research/${ctx.run}-judge.jsonl`,
            '--cost', `research/${ctx.run}-judge-cost.jsonl`,
            '--items', closure.needs_rejudge.join(',')],
        });
        return;
      }

      // Everything is judged; what is left is a decision about a rejection, or a
      // fatal defect to repair. Both belong to Alpha.
      executor.start(stage, {
        role: 'alpha',
        label: `adjudicate-rejudge-round-${round}`,
        job: 'adjudication',
        covers: ['all'],
        brief: "briefs/alpha.md",
        task: [`research/${ctx.run}-alpha-rejudge.task.md`, `research/${ctx.run}-alpha-step8.task.md`],
        timeout: 21600,
      });
    },
  },

  {
    id: '9-scope',
    label: 'scope-denial sweep',
    units: () => ['all'],
    // The sweep's ONLY deliverable is prose about declined results — without
    // this line an Alpha that exits 0 writing nothing clears the richness
    // stage.
    artifacts: (ctx) => `research/${ctx.run}-alpha-step9.md`,
    pattern: resultPattern('(?:alpha|orchestrator)', 'step9-[a-z-]+'),
    concurrency: 1,
    plan: (ctx) => [{
      role: 'alpha',
      label: 'step9-lead',
      job: 'audit',
      covers: ['all'],
      brief: "briefs/alpha.md",
      task: `research/${ctx.run}-alpha-step9.task.md`,
      timeout: 14400,
    }],
    // Step 9 can BUILD items (frontier-14 added two), so everything it could
    // have disturbed is re-checked, judge closure included.
    gates: (ctx) => [...repoWide(ctx), ...contractGates(ctx, { reviewed: true }), closureGate(ctx),
      ledgerGate(ctx)],
  },

  // THE WHOLE-LEVEL RECEIPTS.
  //
  // `level-coverage` needs a spine receipt and a completed audit receipt. On
  // frontier-14 neither existed: step 8 discovered at the very end that
  // `<run>-audit-coverage.json` had never been generated by any stage, generated
  // the empty template itself, and left 57 reconciliation reasons blank. Nothing
  // owned the artifact, so nothing produced it.
  //
  // Filling it is cognitive — a reviewer attests to scope and reconciles every
  // dependency drift with a concrete reason — so it is an Alpha dispatch, and the
  // gate is the receipt actually validating.
  {
    id: '9-receipt',
    label: 'whole-level audit and spine receipts',
    units: () => ['all'],
    pattern: resultPattern('alpha', 'receipts'),
    artifacts: (ctx) => [`research/${ctx.run}-audit-coverage.json`, `research/${ctx.run}-spine-audit.json`],
    concurrency: 1,
    plan: (ctx) => [{
      role: 'alpha',
      label: 'receipts',
      job: 'audit',
      covers: ['all'],
      brief: "briefs/alpha.md",
      task: [`research/${ctx.run}-alpha-receipts.task.md`, `research/${ctx.run}-alpha-step9.task.md`],
      timeout: 14400,
    }],
    gates: (ctx) => [levelCoverageGate(ctx)],
    // The spine receipt LAPSES on any mathematical-content change after it is
    // written — that is its design — so any edit between the receipts dispatch
    // and this gate turns the stage permanently red with no path back. The
    // receipts task already carries the regeneration commands; re-dispatch it.
    maxFixRounds: 2,
    onGateFailure: async ({ ctx, executor, stage, round }) => {
      executor.start(stage, {
        role: 'alpha',
        label: `receipts-fix-${round}`,
        job: 'audit',
        covers: [],
        brief: 'briefs/alpha.md',
        task: [`research/${ctx.run}-alpha-receipts.task.md`, `research/${ctx.run}-alpha-step9.task.md`],
        timeout: 14400,
      });
    },
  },

  {
    id: '10-report',
    label: 'owner report',
    units: () => ['all'],
    // The stage that owes CLAUDE.md's step-10 fatal-error report must require
    // the report.
    artifacts: (ctx) => `research/${ctx.run}-step10-report.md`,
    pattern: resultPattern('(?:report|alpha)', 'step10-[a-z-]+'),
    concurrency: 1,
    plan: (ctx) => [{
      role: 'alpha',
      label: 'step10-report',
      job: 'reporting',
      covers: ['all'],
      brief: "briefs/alpha.md",
      task: `research/${ctx.run}-alpha-step10.task.md`,
      timeout: 10800,
    }],
    // THE TERMINAL GATE. This stage declared `gates: () => []`, and an empty gate
    // list was read as "gates passed" — so the last stage of the pipeline could
    // not fail. frontier-14 finished with `level-coverage` red, two unrepaired
    // fatal defects and sixteen unread rejections, and the engine called it done.
    //
    // `validateStages` now refuses a terminal stage that waives its gates, so
    // this cannot be removed by accident. Re-running the full receipt gate here
    // rather than trusting 9-receipt is deliberate: it is the last thing that
    // runs, on the final text, and it is what "the level is closed" means.
    // The repo-wide invariants run once more for the same reason — step 10 is
    // gates.mjs's last gate point for prosecheck/depsource, and step-9 edits
    // land after 9-scope's own sweep.
    gates: (ctx) => [...repoWide(ctx), levelCoverageGate(ctx), closureGate(ctx), ledgerGate(ctx)],
  },
];

export default { stages, batches, alphaGroups };
