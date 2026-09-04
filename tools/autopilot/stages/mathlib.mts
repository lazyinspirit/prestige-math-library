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

import { readdirSync, existsSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { join } from 'node:path';
import { itemHashGuard, shortHash } from '../../item-hash.mjs';
import { MODEL_PROFILE_NAMES } from '../../models.mjs';
import { hasLegacyStep6Cutover, step6Stages } from './mathlib.step6.mts';

const GPT54_HIGH_1M = MODEL_PROFILE_NAMES.gpt54High1m;
const TERRA_XHIGH = MODEL_PROFILE_NAMES.terraXhigh;

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
  // The category pages render an AUTHORED reading order (library/<cat>/_pathway.md),
  // so nothing mechanical keeps it covering the corpus as levels land. This is
  // that guarantee: a published page in no part fails here. `pathway-sync` runs
  // in 10-pathway-sync-v2, ahead of the report Alpha, so the usual case is already
  // repaired by the time this reads it.
  gate('pathcheck', ['node', 'tools/pathcheck.mjs']),
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

// `requireDestination` binds only where harvest rows are BORN (stage 1 and
// the 3-recheck loop): a deferral written under the new contract must name a
// resolvable destination — 86 of frontier-15's 168 declines named none and
// the Craven hole reached step 9 when step 2 could have caught it. Later
// re-verifications keep the base form so a run whose files predate the
// contract (frontier-15's terminal battery included) is not flipped red
// after its receipts closed. A destination that is PRESENT but resolves to
// nothing fails in either form.
const coverageGates = (ctx, { requireDestination = false } = {}) => batches(ctx).map((b: any) =>
  gate(`coverage-${b}`, ['node', 'tools/coverage-checklist.mjs', `research/${ctx.run}-batch-${b}.coverage.json`,
    ...(requireDestination ? ['--require-destination'] : [])], {
    liveness: { pattern: /(\d+)\s+harvested/.source, min: 1, unit: 'harvested results' },
  }));

/** Scaffold policy is a whole-level join. `content-policy --manifest-only`
 *  still enforces the two-pair capacity separately for every manifest, but it
 *  must see every in-flight manifest at once so a legal dependency on an
 *  earlier page in another batch resolves as planned content. Running one
 *  invocation per batch misclassifies that edge as missing until step 4 has
 *  authored the target, creating a deadlock before the splice. */
const policyGates = (ctx) => [gate('content-policy-scaffold', ['node', 'tools/content-policy.mjs',
  '--manifest-only',
  ...batches(ctx).map((b: any) => `research/${ctx.run}-batch-${b}.pages.json`)], {
  liveness: { pattern: /(\d+)\s+scoped item/.source, min: 1, unit: 'scoped items' },
})];

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
// A gate may own SEVERAL mechanical repairs, run in order. `url-liveness` is
// the case that needs it: recover from the archive first — RECOVER BEFORE
// REPLACE is the standing rule — and only then retire what is still dead and
// carries nothing the level would lose.
export const MECHANICAL_REPAIRS: Record<string, (ctx: any) => string[] | string[][]> = {
  'url-liveness': (ctx) => [
    // 1. dead citation with a recorded archive snapshot -> swap it in place
    ['tools/url-recover-apply.mjs',
      '--liveness', R(ctx, 'research', `${ctx.run}-url-liveness.json`),
      '--coverage', batchCoverages(ctx).map((f: string) => join(ctx.repo, f)).join(',')],
    // 2. still dead, and every result on it independently backed by a live
    //    source -> retire it, recorded. Without this the scouting order has no
    //    disposition for a redundant dead source: there is nothing to replace
    //    and no licence to remove, so a scout re-points the URL, fails, and
    //    spends a round. frontier-16 spent three on one walled textbook whose
    //    two results were backed by a second treatment the whole time.
    //    A source carrying the LAST backing is never retired here — that stays
    //    `backing-lost` and stays a scout's job.
    ['tools/source-backing.mjs',
      '--coverage', batchCoverages(ctx).join(','),
      '--liveness', `research/${ctx.run}-url-liveness.json`,
      '--retire-redundant',
      '--retired-record', `research/${ctx.run}-retired-sources.json`],
  ],
  // the drift review MINTED a prerequisite page or RESCOPED the run onto its
  // dependencies (owner, 2026-08-24) -> write the batch manifests those
  // decisions imply, and regenerate the ledger, task files and covers map from
  // them. The Alpha decided; this is the bookkeeping, which is why it is
  // mechanical. Exits 0 having done nothing when the report decided nothing,
  // so it is safe as an unconditional repair for this gate.
  'drift-review': (ctx) => ['tools/drift-apply.mjs', '--run', ctx.run],
  // sources missing their full-text stamp -> fetch the bodies and stamp them
  'source-fetch-check': (ctx) => ['tools/source-fetch-check.mjs',
    '--coverage', batchCoverages(ctx).map((f: string) => join(ctx.repo, f)).join(','), '--stamp'],
  // Coverage repairs can retire or rewrite decline rows after an Alpha has
  // already classified them. Removing decisions for declines that no longer
  // exist is mechanical; any new or changed decline remains `pending` and the
  // check still routes it back to an Alpha.
  'scope-decisions': (ctx) => ['tools/scope-decisions.mjs', 'refresh',
    '--run', ctx.run, '--all', '--root', ctx.repo],
  // withheld splice batches -> re-transcribe; exit 1 = edges still await the
  // adjudicating Alpha (the residual the stage-4 hook routes)
  'splice-refusals': (ctx) => ['tools/splice-plan.mjs', '--run', ctx.run, '--all', '--fail-on-refusal'],
  // a judge lane that returned nulls (capacity refusal, a 429 boot stampede)
  // -> re-run the sweep. The currency rule spends ONLY on items lacking a
  // current boolean verdict, so a lane that answered is never re-billed:
  // frontier-15's retry pended terra 392, terra 0.
  'judge-closure': (ctx) => {
    const ledger = JSON.parse(readFileSync(join(R(ctx, 'research'), `${ctx.run}-scope-ledger.json`), 'utf8'));
    const aPages = ledger.pages.filter((p: any) => p.kind === 'A').map((p: any) => p.id);
    return ['tools/judge-sweep.mjs', '--run', ctx.run,
      '--ledger', R(ctx, 'research', `${ctx.run}-judge.jsonl`),
      '--cost', R(ctx, 'research', `${ctx.run}-judge-cost.jsonl`),
      '--pages', aPages.join(',')];
  },
  // A Step-9 fatal repair changes the exact delta this receipt freezes. Refresh
  // it synchronously before routing any independent cognitive residue, so the
  // next closure pass judges the repaired bytes rather than a stale scope.
  'step9-changes': (ctx) => step9ChangesRefreshArgv(ctx),
  // the stalemate synthetic (covered, undispatched, artifact-incomplete) on
  // stage 4 IS the withheld-splice shape — same repair
  'stage-stalemate': (ctx) => ['tools/splice-plan.mjs', '--run', ctx.run, '--all', '--fail-on-refusal'],
  // Object drift between the manifests and the plan — "same ids, N item
  // object(s) changed" — is what the splice's REFRESH exists for, and the
  // refresh is `--update`, which the tool accepts ONLY per batch:
  // `(update && !batch)` is a usage error. The entry here was
  // `--all --fail-on-refusal`, which treats a differing page as a hard error
  // and refuses to overwrite, so it could never clear the very drift the gate
  // reports. frontier-16 spent three rounds on it at step 5 after the 6b
  // Alphas repaired items in four pages of batch 1.
  //
  // One `--update` per batch instead. A batch whose items already match is
  // left alone, so this is idempotent over the ones that did not drift.
  'splice-verify': (ctx) => batches(ctx).map((b: any) =>
    ['tools/splice-plan.mjs', '--run', ctx.run, '--batch', String(b), '--update']),
  // a stale impact receipt is a disk function: recompute the window from the
  // newest snapshot and add `pending` rows for new consumers. The pendings
  // keep the gate red, which correctly routes the RESIDUAL to the
  // impact-close Alpha — refreshing is mechanical, dispositioning is not.
  'impact-receipt': (ctx) => ['tools/impact-audit.mjs',
    '--touches', join(ctx.repo, touchesPath(ctx)),
    '--from', 'pre-author', '--to', latestSnapshotLabel(ctx),
    '--refresh-receipt', R(ctx, 'research', `${ctx.run}-impact.json`)],
  // the configured-judge ledger licenses stamps the frontmatter does not carry ->
  // write them (and strip any pass block a current rejection contradicts).
  // Stamping is a disk function of the ledger plus the current item text;
  // the residue — an item no current verdict covers at closure — survives as
  // the blocker. frontier-15 closed 398/398 in the ledger with 0 of 398
  // items stamped, because no stage owned this act (owner, 2026-08-17).
  'judge-stamps': (ctx) => ['tools/apply-judge-stamps.mjs',
    '--ledger', R(ctx, 'research', `${ctx.run}-judge.jsonl`),
    '--manifests', batches(ctx).map((b: any) => join(ctx.repo, 'research', `${ctx.run}-batch-${b}.pages.json`)).join(','),
    '--terminal-resolutions', R(ctx, terminalResolutionsPath(ctx)),
    '--apply', '--report', R(ctx, 'research', `${ctx.run}-judge-stamps.json`)],
  // a dirty tree at 10-close-v2 means repairs landed after the close-out
  // commit: commit again. Idempotent; refuses any branch but main.
  'tree-clean': (ctx) => ['tools/run-commit.mjs', '--run', ctx.run],
};

/** Newest snapshot label on disk, preferring the latest stage boundary. The
 *  impact window always starts at pre-author; where it ENDS depends on how
 *  far the run got, and hardcoding a label made the receipt permanently one
 *  stage stale the moment a later stage edited anything. */
const latestSnapshotLabel = (ctx: any): string => {
  try {
    const t = JSON.parse(readFileSync(join(ctx.repo, touchesPath(ctx)), 'utf8'));
    const label = (t.snapshots ?? []).at(-1)?.label;
    if (typeof label === 'string' && label) return label;
  } catch { /* fall through */ }
  return 'post-6b';
};

/** Open contract-quality ledger rows with an owning batch — the rr-005 shape:
 *  worksheets only that batch's Beta can honestly rewrite. */
const openContractRows = (ctx: any): any[] => {
  try {
    return readFileSync(join(ctx.repo, 'research', 'defect-ledger.jsonl'), 'utf8')
      .split('\n').filter(Boolean).map((l) => JSON.parse(l))
      .filter((r) => r.run === ctx.run && r.disposition === 'open'
        && r.location === 'contract-row' && r.batch);
  } catch { return []; }
};

/** A rework result is evidence for one exact set of still-open ledger rows, not
 * for a batch forever. Any row edit (including a certifier's retained-open
 * reason) changes the token and requires fresh owning-Beta work. */
const contractReworkVersion = (rows: any[]): string => createHash('sha256')
  .update(JSON.stringify([...rows].sort((a, b) => String(a.defect_id).localeCompare(String(b.defect_id)))))
  .digest('hex').slice(0, 16);

/** An unexpired quota/outage obligation for the given kind, as an outage
 *  report the executor turns into a backoff clock. */
const blockedObligation = (ctx: any, kind: string): { reason: string; retryAfterMs: number } | null => {
  try {
    const rows = readFileSync(join(ctx.repo, 'research', `${ctx.run}-obligations.jsonl`), 'utf8')
      .split('\n').filter(Boolean).map((l) => JSON.parse(l));
    for (const r of rows) {
      if (r.kind !== kind || r.status !== 'open' || !r.unblock_at) continue;
      const ms = new Date(r.unblock_at).getTime() - Date.now();
      if (ms > 0) return { reason: `${r.id}: ${r.blocked_by ?? r.note} (unblocks ${r.unblock_at})`, retryAfterMs: ms };
    }
  } catch { /* no obligations file: nothing blocks */ }
  return null;
};

/** A lane override recorded on the matching obligation row — how an owner
 *  substitution travels: the row's `dispatch` carries role/brief/task (e.g.
 *  Sol 5 standing in for a quota-locked Codex lane, owner 2026-08-17), and
 *  the decision sits in the run's own artifacts rather than in code. */
const obligationDispatch = (ctx: any, kind: string): any | null => {
  try {
    const rows = readFileSync(join(ctx.repo, 'research', `${ctx.run}-obligations.jsonl`), 'utf8')
      .split('\n').filter(Boolean).map((l) => JSON.parse(l));
    return rows.find((r) => r.kind === kind && r.status === 'open' && r.dispatch)?.dispatch ?? null;
  } catch { return null; }
};

/** An external platform outage answering for a whole lane: an account session
 *  limit ("You've hit your session limit · resets 12pm"), a provider-wide 429
 *  or quota refusal. During one, a judge re-sweep is a guaranteed null — the
 *  terra limit on frontier-15 burned both of 7-judge's repair rounds on
 *  re-sweeps that could not have succeeded, and the stage exhausted into a
 *  manual rounds-reset. Deliberately NOT matched: UNPARSEABLE (a prose verdict
 *  re-spends on a round, correctly) and NO_CONTENT alone (Terra's account
 *  fault answered that way for hours — an outage classifier that matches a
 *  bare empty answer would wait forever on a lane that is dead, not busy).
 *
 *  THIS CLASSIFIER BECAME LOAD-BEARING ON 2026-08-23. It was written for a
 *  second-lane outage while the agent lanes ran on a different account; the
 *  owner has now moved every agent role AND the second judge lane onto one
 *  Codex subscription, so a single "You've hit your session limit" answers for
 *  the whole run rather than for one lane. `session limit` is matched and stays
 *  matched. Do not narrow this pattern. */
export const OUTAGE_SIGNATURE = /session limit|resets \d|rate.?limit|\b429\b|quota exceeded|overloaded/i;

/** The judge-lane outage test: of the ledger rows written since `sinceIso`,
 *  at least one is a null verdict and EVERY null carries the outage
 *  signature. Returns the first such reason, or null. One non-outage null —
 *  an unparseable verdict, a genuine tool fault — means a repair round is
 *  the right spend after all. */
export const judgeOutageSince = (ctx: any, sinceIso: string): string | null => {
  let rows: any[];
  try {
    rows = readFileSync(R(ctx, 'research', `${ctx.run}-judge.jsonl`), 'utf8')
      .trim().split('\n').filter(Boolean).map((l) => JSON.parse(l));
  } catch { return null; }
  const nulls = rows.filter((r) => r.keep === null && typeof r.at === 'string' && r.at >= sinceIso);
  if (!nulls.length) return null;
  const reasons = nulls.map((r) => String(r.reason ?? ''));
  if (!reasons.every((why) => OUTAGE_SIGNATURE.test(why))) return null;
  return reasons[0].replace(/\s+/g, ' ').slice(0, 160);
};

const OUTAGE_CLASSIFIERS: Record<string, (ctx: any, startedAt: string) => string | null> = {
  'judge-closure': judgeOutageSince,
};

/** Run the table's repair for EVERY failing gate that has one — the primary
 *  failure and every advisory one the same battery named.
 *
 *  WHY ALL OF THEM. The battery stops at its first failure and then runs the
 *  rest read-only, so that one battery names every failure rather than one per
 *  round. That is the whole point of `failure.advisory`. But the repair hook
 *  read only `failure.id`, so a mechanical repair keyed to an ADVISORY gate was
 *  never attempted: it sat starved behind whichever gate happened to fail
 *  first, for as many rounds as the stage had.
 *
 *  On frontier-16 that cost the run. `url-liveness` failed on one unreachable
 *  citation and `source-fetch-check` failed advisory on 28 sources across six
 *  of seven pages. The 28 were the STAMPABLE case — `--stamp` fetches the
 *  bodies and verifies them, deterministically, and the entry for it sits in
 *  the table right here. It never ran once in five batteries and two repair
 *  rounds, because a different gate was first. The run exhausted its rounds
 *  and blocked with a repair it owned, untried.
 *
 *  A mechanical repair is deterministic, idempotent and cheap, and it runs in
 *  THIS process rather than in a dispatched agent's sandbox — which is also
 *  where the network is. There is no reason to ration them one per round.
 *
 *  'clean'      — every repair that ran exited 0; the battery re-verifies.
 *  'outage'     — some repair's failures were all an external platform outage
 *                 (`reason` carries the evidence); the hook returns it and the
 *                 executor waits on a clock instead of spending a round.
 *                 Classified BEFORE exit status is read: during an outage the
 *                 tool itself runs fine while every call it made was refused.
 *  'residual'   — a repair ran and left named failures (stderr carries
 *                 `fetch-check-...: <page>: <url>` lines, or a bare URL); the
 *                 caller may route the residue to a scouting dispatch.
 *  'unhandled'  — no table entry for any of the failing gates. */
export const mechanicalRepair = async ({ ctx, failure, excludeGateIds = [] }: any): Promise<{ outcome: string; stderr?: string; reason?: string }> => {
  const excluded = new Set((excludeGateIds ?? []).map(String));
  const failing = [failure, ...(failure?.advisory ?? [])].filter((f: any) => f?.id);
  const handled = failing.filter((f: any) => !excluded.has(String(f.id)) && MECHANICAL_REPAIRS[f.id]);
  if (!handled.length) return { outcome: 'unhandled' };

  const { spawnSync } = await import('node:child_process');
  const residues: string[] = [];
  for (const f of handled) {
    const declared = MECHANICAL_REPAIRS[f.id](ctx);
    // One gate may own several repairs, run in order, most-preferred first.
    const commands: string[][] = Array.isArray(declared[0]) ? declared as string[][] : [declared as string[]];
    const startedAt = new Date().toISOString();
    let r: any = { status: 0, stderr: '', stdout: '' };
    // EVERY step runs, and the LAST one decides. An earlier step leaving
    // residue is not a failure of the chain — it is why the later steps exist.
    // `url-liveness` is the shape: the archive swap exits 1 on a citation it
    // cannot recover, and the retire step then removes it if nothing would be
    // lost. Breaking on the first non-zero would skip the step that resolves
    // the case, which is the starvation this whole loop was rewritten to end.
    for (const argvTail of commands) {
      r = spawnSync('node', argvTail, { cwd: ctx.repo, encoding: 'utf8' });
    }
    const classify = OUTAGE_CLASSIFIERS[f.id];
    const directOutage = f.id === 'judge-closure' && r.status === 3
      ? String(r.stderr || r.stdout || 'judge provider outage').replace(/\s+/g, ' ').slice(-300)
      : null;
    const reason = directOutage ?? (classify ? classify(ctx, startedAt) : null);
    // An outage short-circuits: the round is refunded and the clock waited on,
    // so running the remaining repairs against a platform that is refusing
    // calls would spend work to learn what this already knows.
    if (reason) return { outcome: 'outage', reason };
    // Every repair is attempted even after one leaves residue. They are
    // independent — a dead citation and an unstamped source are different
    // defects on different rows — and stopping at the first would reinstate
    // exactly the starvation this loop exists to end.
    if (r.status !== 0) residues.push((r.stderr || r.stdout || '').trim());
  }
  if (residues.length) return { outcome: 'residual', stderr: residues.join('\n') };
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
/** Normalised for comparison: the same URL reaches us HTML-escaped in one
 *  report and raw in another, and error text often carries trailing punctuation. */
const sameUrl = (a: string, b: string) => {
  const n = (u: string) => u.replace(/&amp;/g, '&').replace(/[.,;)\]]+$/, '').trim();
  if (n(a) === n(b)) return true;
  try {
    const [x, y] = [new URL(n(a)), new URL(n(b))];
    return x.host === y.host && x.pathname === y.pathname;
  } catch { return false; }
};

/** Is this `validate-plan` failure the one class that is an EDGE DECISION?
 *
 *  That gate is repo-wide and fails for heterogeneous reasons — a cycle, a
 *  forward reference, an unresolved id, a page over the 60-item ceiling — and
 *  most are not anybody's edge to decide. Only `undeclared-prereq` is: an item
 *  whose `deps` reach a page outside its own page's `requires` closure, settled
 *  exactly as a splice refusal is (apply a backward edge the item genuinely
 *  consumes, strike the dependency, block a forward one as owner-only).
 *
 *  ASK THE TOOL. `failure.why` is the gate's last line — for this gate, the
 *  word "FAIL" — and `failure.output` is a truncated tail holding whichever
 *  part of a long report happened to fit. Matching either decided this by which
 *  lines landed in the slice, and on its first live firing that was a run of
 *  `redundant-prereq` warnings and no dispatch at all.
 *
 *  Shared by every stage that gates on validate-plan: the class does not change
 *  with the stage, and neither does who settles it. The 6b Alphas repair items
 *  under their step-6 licence, so a repair can introduce one of these long
 *  after step 4 — frontier-16 met exactly that, one edge, at step 5. */
export const isEdgeDecision = async ({ ctx, failure }: any): Promise<boolean> => {
  if (failure?.id !== 'validate-plan') return false;
  const { spawnSync } = await import('node:child_process');
  const v = spawnSync('node', ['tools/validate-plan.mjs', 'research/plan-spec.json'],
    { cwd: ctx.repo, encoding: 'utf8' });
  return /undeclared-prereq/.test(`${v.stdout ?? ''}${v.stderr ?? ''}`);
};

/** The lane that settles an edge, wherever the failure surfaced. */
export const dispatchEdgeAdjudication = ({ ctx, executor, stage, round }: any) => {
  executor.start(stage, {
    role: 'alpha',
    label: `step4-adjudicate-${round}`,
    job: 'adjudication',
    covers: [],
    brief: 'briefs/alpha.md',
    task: [`research/${ctx.run}-alpha-step4.task.md`],
    timeout: 3600,
  });
};

/**
 * Re-dispatch the drift review when its report is the thing that is stale.
 *
 * THE GAP THIS CLOSES. `drift-check-blocked` is read out of the report's
 * VERDICT lines, so a report can fail the gate for a finding that is no longer
 * true — the Alpha wrote it under narrower authority, or a scaffold has since
 * engineered around the edge. Nothing could rewrite it: the review had already
 * returned exit 0, so the unit stayed covered and no retry re-armed it, and
 * `drift-apply` only materialises decisions rather than making them. The run
 * stopped for a reason nobody needed to decide, which is the exact shape of
 * deadlock the 2026-08-24 rulings exist to remove.
 *
 * Deciding whether the edge is still real is judgment, so it goes back to an
 * Alpha. Deciding THAT it must be re-asked is a function of the gate output, so
 * it is here. The re-review reads the same task and brief; what has changed is
 * the report on disk, the spec, and — the usual case — the scaffolds.
 */
export const dispatchDriftRereview = ({ ctx, executor, stage, round, failure }: any) => {
  // KEYED OFF THE GATE, NOT THE REPAIR RESIDUE. `drift-apply` exits 0 when the
  // report decided nothing it can materialise, which is exactly the blocked
  // case — so `mechanicalRepair` reports 'clean', and a route hung off its
  // residue would never fire. The honest question is what the GATE said.
  const failing = [failure, ...(failure?.advisory ?? [])].filter((f: any) => f?.id);
  const blocked = failing.some((f: any) => f.id === 'drift-review'
    && /drift-check-blocked:/.test(String(f.output ?? '') + String(f.stderr ?? '')));
  if (!blocked) return false;
  executor.start(stage, {
    role: 'alpha',
    label: `drift-review-${round}`,
    job: 'verification',
    covers: ['drift'],
    brief: 'briefs/alpha-drift.md',
    task: [`research/${ctx.run}-alpha-step0-drift.task.md`],
    timeout: 7200,
  });
  return true;
};

export const dispatchSourceScouts = ({ ctx, executor, stage, round, stderr }: any) => {
  const text = String(stderr ?? '');
  const pages = new Set<string>([...text.matchAll(/fetch-check-[a-z-]+: ([a-z0-9-]+):/g)].map((m: any) => m[1]));

  // A URL-LIVENESS FAILURE NAMES A URL, NOT A PAGE, and the router used to read
  // only `source-fetch-check`'s format. `url-recover-apply` reports
  // `ERROR recover-apply-unrecoverable: <url>` — recovery works on URLs, so
  // there is no page id in the line — and the match above produced nothing, so
  // `dispatchSourceScouts` returned false and the stage THREW. Both repair
  // rounds burned on that throw and the run raised a blocker needing a person,
  // for the one case this stage already has an automated answer to: the
  // `beta-source-scout` task exists precisely to find a live URL for a source
  // whose citation cannot be fetched, and its own text opens "dead with no
  // usable archive copy".
  //
  // Mapping a URL back to its batch is mechanical and exact — the coverage
  // files record which page cites which source — so it is code, not judgment.
  // Which REPLACEMENT to pick stays the scout's judgment, which is the part
  // that needed an agent all along.
  const urls = [...new Set([...text.matchAll(/https?:\/\/[^\s"'<>]+/g)].map((m: any) => m[0]))];
  if (urls.length) {
    for (const b of batches(ctx)) {
      const f = join(R(ctx, 'research'), `${ctx.run}-batch-${b}.coverage.json`);
      if (!existsSync(f)) continue;
      let cov: any;
      try { cov = JSON.parse(readFileSync(f, 'utf8')); } catch { continue; }
      for (const p of cov.pages ?? []) {
        for (const s of p.sources ?? []) {
          if (s?.url && urls.some((u: any) => sameUrl(u, s.url))) pages.add(p.page ?? p.id);
        }
      }
    }
  }

  if (!pages.size) return false;
  const ledger = JSON.parse(readFileSync(join(R(ctx, 'research'), `${ctx.run}-scope-ledger.json`), 'utf8'));
  const batchOf = new Map(ledger.pages.map((p: any) => [p.id, String(p.batch)]));
  const owed = [...new Set([...pages].map((p) => batchOf.get(p)).filter(Boolean))];
  // WHICH TASK. A dead URL and a dead SOURCE are different jobs. Scouting looks
  // for another way to reach the same document; re-harvesting accepts the
  // document is gone and looks for a different treatment carrying the same
  // results. `backing-lost` is the second, and it names authored results that
  // would otherwise be deleted along with their source row — silently, since
  // every other gate validates what is present.
  const lostBacking = /backing-lost:/.test(text);
  const task = lostBacking
    ? [`research/${ctx.run}-beta-reharvest.task.md`, `research/${ctx.run}-beta-source-scout.task.md`]
    : [`research/${ctx.run}-beta-source-scout.task.md`, `research/${ctx.run}-beta-fix.task.md`];
  for (const b of owed) {
    executor.start(stage, {
      role: 'beta',
      label: `${lostBacking ? 'reharvest' : 'source-scout'}-${round}-b${b}`,
      job: 'scouting',
      covers: [b],
      brief: 'briefs/beta-scaffold.md',
      task,
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

// A dead citation is a broken link; a dead SOURCE is missing mathematics. This
// gate is the second question, and it is the only one that can see it: it maps
// every authored result back to the sources that back it, and fails when a
// result has none a reader can open. Without it the cheapest way past a dead
// citation is to delete the source row — which deletes its `included` results
// too, silently, because every other gate validates what is present.
//
// It runs AFTER `url-liveness`, whose artifact it reads, and writes the
// re-harvest work list the scout is dispatched against.
const backingGate = (ctx) => gate('source-backing', [
  'node', 'tools/source-backing.mjs',
  '--coverage', batchCoverages(ctx).join(','),
  '--liveness', `research/${ctx.run}-url-liveness.json`,
  '--reharvest-plan', `research/${ctx.run}-reharvest-plan.json`,
], {
  // "0 results checked, all backed" is a coverage-selection defect, not a pass.
  liveness: { pattern: /(\d+) authored result\(s\)/.source, min: 1, unit: 'authored results' },
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
const terminalResolutionsPath = (ctx) => `research/${ctx.run}-step8-terminal-resolutions.jsonl`;
const publishedClosurePath = (ctx) => `research/${ctx.run}-step8-published-closure.json`;
const cutoverPath = (ctx) => `research/${ctx.run}-step8-cutover.json`;
const step9ChangesPath = (ctx) => `research/${ctx.run}-step9-changes.json`;
const step9ChangesScopePath = (ctx) => `research/${ctx.run}-step9-changes.pages.json`;
const step9ClosurePath = (ctx) => `research/${ctx.run}-step9-judge-closure.json`;
const scaffoldPath = (ctx) => `research/${ctx.run}-scaffold-closure.json`;
const step9ScopeDeltaPath = (ctx) => `research/${ctx.run}-step9-scope-delta.json`;
const step9ScopeReviewPath = (ctx) => `research/${ctx.run}-alpha-step9-review.md`;
const step9ScopeRegisterPath = (ctx) => `research/${ctx.run}-alpha-step9.md`;

const step9ChangesRefreshArgv = (ctx: any): string[] => ['tools/step9-changes.mjs',
  '--touches', touchesPath(ctx), '--baseline', 'post-step8',
  '--manifests', batches(ctx).map((b: any) => `research/${ctx.run}-batch-${b}.pages.json`).join(','),
  '--out', step9ChangesPath(ctx), '--scope-out', step9ChangesScopePath(ctx), '--root', ctx.repo];

function writeStep9GateEnvelope({ ctx, stage, round, failures, mechanicalStderr = '' }: any): string {
  const rel = `research/${ctx.run}-${stage.id}-gate-envelope-${round}.task.md`;
  const envelope = {
    version: 1, run: ctx.run, stage: stage.id, round,
    failures: failures.map((entry: any) => ({
      id: String(entry.id), stage: entry.stage ?? stage.id,
      why: String(entry.why ?? ''), output: String(entry.output ?? ''),
      named_ids: itemsFromGateFailure(entry),
    })),
    mechanical_residue: String(mechanicalStderr ?? ''),
  };
  writeFileSync(R(ctx, rel), [
    `# Exact Step-9 gate envelope — round ${round}`,
    '',
    'The JSON envelope is the complete primary/advisory failure set assigned to this dispatch.',
    'Adjudicate every entry; do not infer scope from whichever event happened to be logged last.',
    '', '```json', JSON.stringify(envelope, null, 2), '```', '', '---', '',
    readFileSync(R(ctx, 'briefs/tasks/alpha-step9-gate-adjudication.md'), 'utf8').trim(), '',
  ].join('\n'));
  return rel;
}

/** Step 9 cannot start its Alpha until the exact delta has been captured and
 * every group decision file has been refreshed from that frozen comparison.
 * The preparation command performs those two writes serially. */
const step9ScopePrepared = (ctx): boolean => existsSync(R(ctx, step9ScopeDeltaPath(ctx)))
  && alphaGroups(ctx).every((group) => existsSync(R(ctx,
    `research/${ctx.run}-alpha-${group.label}-scope-decisions.json`)));

/** The step-3 closure receipt, or null before the gate has ever run. */
function readScaffold(ctx): { insufficient: string[]; missing_verdict: string[]; closed: boolean } | null {
  const p = R(ctx, scaffoldPath(ctx));
  if (!existsSync(p)) return null;
  try { return JSON.parse(readFileSync(p, 'utf8')); } catch { return null; }
}

/** The closure receipt the judge gate writes, or null before it has ever run.
 *  Read fresh every time — it is rewritten by each gate run, and a cached copy
 *  would name repairs that have since landed. */
function readClosure(ctx): {
  needs_rejudge: string[];
  unadjudicated: string[];
  unadjudicated_rows?: Array<{ id: string; model: string; context_sha256: string }>;
  open_fatal: string[];
  open_fatal_rows?: Array<{ id: string; model: string; context_sha256: string }>;
  closed: boolean;
} | null {
  const p = R(ctx, closurePath(ctx));
  if (!existsSync(p)) return null;
  try { return JSON.parse(readFileSync(p, 'utf8')); } catch { return null; }
}

function readStep9Closure(ctx): ReturnType<typeof readClosure> {
  const p = R(ctx, step9ClosurePath(ctx));
  if (!existsSync(p)) return null;
  try { return JSON.parse(readFileSync(p, 'utf8')); } catch { return null; }
}

/** Every mathematical item Step 9 created or modified after the Step-8
 * baseline.  This is the exact certification boundary, not an agent claim. */
function readStep9Changes(ctx): string[] {
  try {
    const receipt = JSON.parse(readFileSync(R(ctx, step9ChangesPath(ctx)), 'utf8'));
    return Array.isArray(receipt?.items) ? receipt.items.filter((id: any) => typeof id === 'string') : [];
  } catch { return []; }
}

/** Derive the same Step-9 delta before its receipt exists so the first judge
 * dispatch already has the exact set. */
function step9ChangesOnDisk(ctx): string[] {
  try {
    const touches = JSON.parse(readFileSync(R(ctx, touchesPath(ctx)), 'utf8'));
    const baseline = [...(touches.snapshots ?? [])].reverse().find((s: any) => s.label === 'post-step8');
    if (!baseline?.hashes) return [];
    return readdirSync(R(ctx, 'items')).filter((name) => name.endsWith('.md'))
      .map((name) => name.slice(0, -3)).filter((id) => {
        const hash = shortHash(itemHashGuard(readFileSync(R(ctx, 'items', `${id}.md`), 'utf8')));
        return !(id in baseline.hashes) || baseline.hashes[id] !== hash;
      }).sort();
  } catch { return []; }
}

const step9ChangesGate = (ctx) => gate('step9-changes', ['node', 'tools/step9-changes.mjs',
  '--touches', touchesPath(ctx), '--baseline', 'post-step8',
  '--manifests', batches(ctx).map((b: any) => `research/${ctx.run}-batch-${b}.pages.json`).join(','),
  '--out', step9ChangesPath(ctx), '--scope-out', step9ChangesScopePath(ctx), '--check']);

const step9ClosureGate = (ctx) => gate('step9-judge-closure', ['node', 'tools/level-coverage.mjs',
  '--judge-only', '--verify-current-context', '--judge-ledger', `research/${ctx.run}-judge.jsonl`,
  '--judge-adjudications', `research/${ctx.run}-judge-adjudications.jsonl`,
  '--out', step9ClosurePath(ctx), step9ChangesScopePath(ctx)]);

const scopeDecisionsGate = (ctx) => gate('scope-decisions', ['node', 'tools/scope-decisions.mjs',
  'check', '--run', ctx.run]);

/** Re-render current Step-8 tasks before a recovery dispatch. The initial task
 *  is a snapshot of the first rejection set; using it after a rejudge made an
 *  Alpha reread historical rows that no longer owed a decision. */
function refreshStep8Scope(ctx: any): void {
  const result = spawnSync('node', ['tools/step8-scope.mjs', 'render', '--run', ctx.run], {
    cwd: ctx.repo,
    encoding: 'utf8',
  });
  if (result.status !== 0) {
    throw new Error(`could not refresh Step-8 scope: ${(result.stderr || result.stdout || 'unknown failure').trim()}`);
  }
}

/** The cutover tool materialises this receipt only when 8-rejudge had already
 * completed before the rebuilt preflight stage ran.  Rechecking the live
 * rejudge result here is not equivalent: every ordinary run has necessarily
 * completed rejudge by the time it enters 8-close, which made that stage
 * misclassify live frontier-21 as a historical migration. */
function hasHistoricalRejudgeCutover(ctx: any): boolean {
  const receiptPath = R(ctx, cutoverPath(ctx));
  if (!existsSync(receiptPath)) return false;
  try {
    const receipt = JSON.parse(readFileSync(receiptPath, 'utf8'));
    return receipt.version === 1 && receipt.run === ctx.run
      && receipt.mode === 'post-rejudge-frozen';
  } catch { return false; }
}

const step8GuardGate = (ctx) => gate('step8-guard', ['node', 'tools/step8-guard.mjs',
  '--touches', touchesPath(ctx), '--baseline', 'pre-step8',
  '--judge-ledger', `research/${ctx.run}-judge.jsonl`,
  '--adjudications', `research/${ctx.run}-judge-adjudications.jsonl`,
  '--scope', `research/${ctx.run}-step8-scope.json`,
  '--terminal-resolutions', terminalResolutionsPath(ctx),
  '--published-repairs', `research/${ctx.run}-step8-published-repairs.jsonl`,
  '--owner-prerequisite-repairs', `research/${ctx.run}-step8-owner-prerequisite-repairs.jsonl`]);

/** Final-adjudicator receipts are accepted by judge closure only after this
 * gate proves their ordered queue and successful Sol/max dispatch attestation.
 * Missing is a valid zero-escalation case; malformed or stale is never one. */
const terminalResolutionGate = (ctx) => gate('step8-terminal-resolutions', [
  'node', 'tools/step8-terminal-resolution.mjs', 'check', '--run', ctx.run, '--allow-missing',
]);

const publishedGate = (ctx) => gate('step8-published', ['node', 'tools/step8-scope.mjs',
  'published', '--run', ctx.run, '--out', publishedClosurePath(ctx)]);

function readPublishedClosure(ctx): ReturnType<typeof readClosure> {
  const p = R(ctx, publishedClosurePath(ctx));
  if (!existsSync(p)) return null;
  try {
    const row = JSON.parse(readFileSync(p, 'utf8'));
    return {
      needs_rejudge: row.needs_rejudge ?? [],
      unadjudicated: [...new Set<string>((row.unadjudicated_rows ?? []).map((entry: any) => String(entry.id)))],
      unadjudicated_rows: row.unadjudicated_rows ?? [],
      open_fatal: row.open_fatal ?? [],
      open_fatal_rows: row.open_fatal_rows ?? [],
      closed: !(row.needs_rejudge?.length || row.unadjudicated_rows?.length || row.open_fatal?.length || row.escalations?.length),
    };
  } catch { return null; }
}

/** Item ids printed by the standard `ERROR code [item-id]:` gate grammar. */
function itemsFromGateFailure(failure: any): string[] {
  const text = `${failure?.output ?? ''}\n${failure?.why ?? ''}`;
  const grammar = '[a-z][a-z0-9]*(?:-[a-z0-9]+){2,}';
  return [...new Set([
    ...[...text.matchAll(new RegExp(`\\[(${grammar})\\]`, 'g'))].map((m) => m[1]),
    ...[...text.matchAll(new RegExp(`\\\`(${grammar})\\\``, 'g'))].map((m) => m[1]),
    ...[...text.matchAll(new RegExp(`^\\s*(?:ERROR|FAIL)\\s+[a-z0-9-]+:\\s+(${grammar})(?=[:\\s])`, 'gmi'))].map((m) => m[1]),
    ...[...text.matchAll(new RegExp(`items/(${grammar})\\.md`, 'g'))].map((m) => m[1]),
  ])];
}

function startStep8Group(ctx: any, executor: any, stage: any, plan: any, _group: string | null): void {
  executor.start(stage, {
    role: 'alpha-adjudicate',
    covers: [],
    brief: 'briefs/alpha.md',
    ...plan,
  });
}

function writeFrozenFile(path: string, body: string): void {
  if (existsSync(path)) {
    if (readFileSync(path, 'utf8') !== body) throw new Error(`${path}: frozen FA queue/task already exists with different content`);
    return;
  }
  writeFileSync(path, body, { flag: 'wx' });
}

/** Materialise one deterministic, strictly ordered final-adjudicator queue for
 * an affected Alpha group.  The terminal recorder reads this same JSON and
 * refuses position N until positions 1..N-1 have current resolutions. */
function writeFinalAdjudicatorTask(ctx: any, stage: any, round: number, group: string,
  assignments: Array<{ id: string; scope: Step8RepairScope; owner: string | null }>): string {
  const ordered = [...assignments].sort((a, b) => a.id.localeCompare(b.id));
  const dispatchLabel = `step8-fa-${group}-round-${round}`;
  const queueRel = `research/${ctx.run}-${dispatchLabel}.json`;
  const taskRel = `research/${ctx.run}-${dispatchLabel}.task.md`;
  const stateDir = ctx.config?.stateDir ?? '.autopilot';
  const queue = {
    version: 1,
    run: ctx.run,
    stage: stage.id,
    group,
    round,
    dispatch_label: dispatchLabel,
    state_dir: stateDir,
    items: ordered.map((row, index) => ({ ...row, position: index + 1 })),
  };
  const queueBody = `${JSON.stringify(queue, null, 2)}\n`;
  writeFrozenFile(R(ctx, queueRel), queueBody);

  const lines = [
    `# Final Adjudicator queue — ${ctx.run}, group ${group}, round ${round}`,
    '',
    `This is the exact queue frozen in \`${queueRel}\`. It contains ${ordered.length} item(s).`,
    'Work in the numbered order below. Do not substantively review the next item until the recorder accepts the current one.',
    '',
  ];
  for (const [index, row] of ordered.entries()) {
    const position = index + 1;
    const evidenceRel = `research/${ctx.run}-step8-fa-${group}-${position}-${row.id}.md`;
    lines.push(
      `## ${position}. \`${row.id}\` (${row.scope})`,
      '',
      `1. Read \`items/${row.id}.md\`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.`,
      '2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.',
      `3. Write concrete evidence to \`${evidenceRel}\`, including exact source URLs and what they support, or explain why the mathematics was familiar.`,
      '4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks.',
      '5. Record the exact final bytes with exactly one of these commands:',
      '',
      '```bash',
      `node tools/step8-terminal-resolution.mjs record --run ${ctx.run} --id ${row.id} --resolved-by final-adjudicator --group ${group} --queue ${queueRel} --state-dir ${stateDir} --disposition accepted-after-review --source-status verified --basis-file ${evidenceRel}`,
      `node tools/step8-terminal-resolution.mjs record --run ${ctx.run} --id ${row.id} --resolved-by final-adjudicator --group ${group} --queue ${queueRel} --state-dir ${stateDir} --disposition repaired --source-status verified --basis-file ${evidenceRel}`,
      '```',
      '',
      'Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.',
      '',
    );
  }
  writeFrozenFile(R(ctx, taskRel), `${lines.join('\n')}\n`);
  return taskRel;
}

/** One fresh FA per affected group. Unknown ownership is a loud blocker rather
 * than duplicated edits by every group; valid run and published repair scopes
 * always carry an exact owner before reaching this boundary. */
function startFinalAdjudicators(ctx: any, executor: any, stage: any, round: number, ids: string[]): number {
  const assignments = step8RepairAssignments(ctx, ids);
  const unknown = assignments.filter((row) => row.scope === 'unknown' || !row.owner);
  for (const row of unknown) {
    const message = `${row.id}: exhausted fatal repair has no Step-8 group owner; cannot construct an independent FA queue`;
    if (executor.state?.addBlocker?.(stage.id, message, `step8-fa-owner:${row.id}`))
      executor.reporter?.notify?.('blocked', message, { stage: stage.id, item: row.id });
  }
  let started = 0;
  for (const group of alphaGroups(ctx).map((row: any) => String(row.label))) {
    const owned = assignments.filter((row) => row.owner === group);
    if (!owned.length) continue;
    const task = writeFinalAdjudicatorTask(ctx, stage, round, group, owned);
    executor.start(stage, {
      role: 'final-adjudicator',
      label: `step8-fa-${group}-round-${round}`,
      job: 'adjudication',
      covers: [],
      brief: 'briefs/final-adjudicator.md',
      task: [task, 'briefs/tasks/final-adjudicator-step8.md'],
      timeout: 21600,
    });
    started += 1;
  }
  return started;
}

type Step8RepairScope = 'run' | 'published' | 'unknown';

function step8RepairAssignments(ctx: any, ids: string[]): Array<{ id: string; scope: Step8RepairScope; owner: string | null }> {
  let byItem: Record<string, string> = {};
  try {
    byItem = JSON.parse(readFileSync(R(ctx, `research/${ctx.run}-step8-scope.json`), 'utf8'))?.by_item ?? {};
  } catch { /* an absent scope is represented explicitly as unknown below */ }
  const published = new Map<string, string>();
  try {
    for (const line of readFileSync(R(ctx, `research/${ctx.run}-step8-published-repairs.jsonl`), 'utf8').split(/\r?\n/)) {
      if (!line.trim()) continue;
      const row = JSON.parse(line);
      if (row.kind === 'repaired' && typeof row.id === 'string' && typeof row.group === 'string')
        published.set(row.id, row.group);
    }
  } catch { /* no published repairs: none of the ids are published work */ }
  return [...new Set(ids.map(String))].map((id) => byItem[id]
    ? { id, scope: 'run' as const, owner: byItem[id] }
    : published.has(id)
      ? { id, scope: 'published' as const, owner: published.get(id)! }
      : { id, scope: 'unknown' as const, owner: null });
}

/** Resolve Step-8 repair owners without treating a published item as an unknown
 * run item. Unknown ids still fan out loudly under `step8Owners`' contract. */
function step8RepairOwners(ctx: any, ids: string[]): Array<string | null> {
  const assignments = step8RepairAssignments(ctx, ids);
  const known = new Set(assignments.map((row) => row.owner).filter(Boolean) as string[]);
  if (assignments.some((row) => row.scope === 'unknown'))
    for (const owner of step8Owners(ctx, assignments.filter((row) => row.scope === 'unknown').map((row) => row.id)))
      if (owner) known.add(owner);
  const labels = alphaGroups(ctx).map((group: any) => String(group.label));
  const ordered = labels.filter((label) => known.has(label));
  if (ordered.length) return ordered;
  return labels.length ? labels : [null];
}

function resolveStep8Task(ctx: any, task: string | string[]): string {
  const candidates = Array.isArray(task) ? task : [task];
  return candidates.find((candidate) => existsSync(R(ctx, candidate))) ?? candidates[candidates.length - 1];
}

/** Materialise the exact evidence a Step-8 repair dispatch owns. Event-log
 * ordering is deliberately irrelevant: every primary/advisory failure and its
 * full output is embedded, together with exact current closure tuples and an
 * explicit run/published/unknown classification for every live id. */
function writeStep8RepairEnvelope({ ctx, stage, round, group, mode, failures, mechanicalStderr = '', named, task }: any): string {
  const runClosure = readClosure(ctx);
  const publishedClosure = readPublishedClosure(ctx);
  const assignments = step8RepairAssignments(ctx, named);
  const belongs = (row: any) => group == null || row.owner === group || row.scope === 'unknown';
  const assigned = assignments.filter(belongs);
  const tupleRows = [
    ...((runClosure?.unadjudicated_rows ?? []).map((row) => ({ ...row, scope: 'run', status: 'unadjudicated' }))),
    ...((runClosure?.open_fatal_rows ?? []).map((row) => ({ ...row, scope: 'run', status: 'open_fatal' }))),
    ...((publishedClosure?.unadjudicated_rows ?? []).map((row) => ({ ...row, scope: 'published', status: 'unadjudicated' }))),
    ...((publishedClosure?.open_fatal_rows ?? []).map((row) => ({ ...row, scope: 'published', status: 'open_fatal' }))),
  ];
  const assignedIds = new Set(assigned.map((row) => row.id));
  const envelope = {
    version: 1,
    run: ctx.run,
    stage: stage.id,
    round,
    mode,
    group,
    failures: failures.map((entry: any) => ({
      id: String(entry.id),
      stage: entry.stage ?? stage.id,
      why: String(entry.why ?? ''),
      output: String(entry.output ?? ''),
      named_ids: itemsFromGateFailure(entry),
    })),
    mechanical_residue: String(mechanicalStderr ?? ''),
    live_items: assignments,
    assigned_items: assigned,
    live_tuples: tupleRows.filter((row: any) => assignedIds.has(String(row.id))),
  };
  const baseTask = resolveStep8Task(ctx, task);
  const baseBody = readFileSync(R(ctx, baseTask), 'utf8');
  const suffix = group == null ? 'review' : group;
  const rel = `research/${ctx.run}-${stage.id}-repair-envelope-${round}-${suffix}.task.md`;
  writeFileSync(R(ctx, rel), [
    `# Exact Step-8 repair envelope — ${stage.id}, round ${round}`,
    '',
    'The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,',
    'the full untruncated output, exact current rejection tuples, and explicit run/published ownership.',
    'Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.',
    '',
    '```json',
    JSON.stringify(envelope, null, 2),
    '```',
    '',
    '---',
    '',
    baseBody.trim(),
    '',
  ].join('\n'));
  return rel;
}

/** Materialised alerts whose owning group still owes a disposition, or has
 *  confirmed a fatal target without the targeted rejection needed to edit. */
function readOpenAlerts(ctx): Array<{ alert_id: string; item: string; owning_group: string; needs_judge: boolean; judge_started: boolean }> {
  const alertsFile = R(ctx, `research/${ctx.run}-step8-alerts.json`);
  const decisionsFile = R(ctx, `research/${ctx.run}-step8-alert-decisions.jsonl`);
  if (!existsSync(alertsFile)) return [];
  try {
    const alerts = JSON.parse(readFileSync(alertsFile, 'utf8'))?.alerts ?? [];
    const decisions = new Map<string, any>();
    if (existsSync(decisionsFile)) for (const line of readFileSync(decisionsFile, 'utf8').split(/\r?\n/)) {
      if (!line.trim()) continue;
      const row = JSON.parse(line);
      if (typeof row.alert_id === 'string') decisions.set(row.alert_id, row);
    }
    let cycles: any[] = [];
    try { cycles = JSON.parse(readFileSync(R(ctx, `research/${ctx.run}-step8-rejudge-cycles.json`), 'utf8'))?.cycles ?? []; }
    catch { /* no targeted cycle has run */ }
    return alerts.flatMap((alert: any) => {
      const decision = decisions.get(alert.alert_id);
      if (!decision) return [{ ...alert, needs_judge: false, judge_started: false }];
      if (decision.outcome === 'confirmed_fatal_unlicensed') {
        const judgeStarted = cycles.some((cycle: any) => cycle.kind === 'alert'
          && (cycle.items ?? []).includes(alert.item)
          && String(cycle.started_at ?? '') >= String(decision.at ?? ''));
        return [{ ...alert, needs_judge: true, judge_started: judgeStarted }];
      }
      return [];
    });
  } catch { return []; } // the strict scope gate reports exact line diagnostics
}

/** Published items repaired at step 8. They are OUTSIDE the run's scope, so the
 *  closure receipt never names them and `8-rejudge` would ship a repaired
 *  published page unjudged. */
function readPublishedRepairs(ctx): string[] {
  const p = R(ctx, `research/${ctx.run}-step8-published-repairs.jsonl`);
  if (!existsSync(p)) return [];
  const ids = new Set<string>();
  for (const line of readFileSync(p, 'utf8').split('\n')) {
    if (!line.trim()) continue;
    try {
      const r = JSON.parse(line);
      if (r.kind === 'repaired' && typeof r.id === 'string') ids.add(r.id);
    } catch { /* the guard reports malformed rows; this must not throw here */ }
  }
  return [...ids];
}

function publishedRepairOwners(ctx, ids: string[]): string[] {
  const wanted = new Set(ids);
  const p = R(ctx, `research/${ctx.run}-step8-published-repairs.jsonl`);
  if (!existsSync(p)) return [];
  const owners = new Set<string>();
  try {
    for (const line of readFileSync(p, 'utf8').split(/\r?\n/)) {
      if (!line.trim()) continue;
      const row = JSON.parse(line);
      if (row.kind === 'repaired' && wanted.has(row.id) && typeof row.group === 'string') owners.add(row.group);
    }
  } catch { return []; }
  return alphaGroups(ctx).map((group: any) => String(group.label)).filter((label) => owners.has(label));
}

function fatalAdjudicationCounts(ctx): Map<string, number> {
  const p = R(ctx, `research/${ctx.run}-judge-adjudications.jsonl`);
  const contexts = new Map<string, Set<string>>();
  if (!existsSync(p)) return new Map();
  try {
    for (const line of readFileSync(p, 'utf8').split(/\r?\n/)) {
      if (!line.trim()) continue;
      const row = JSON.parse(line);
      if (row.outcome !== 'confirmed_fatal' || typeof row.id !== 'string') continue;
      const seen = contexts.get(row.id) ?? new Set<string>();
      // Two lanes rejecting the same frozen text are one fatal cycle, not two.
      seen.add(String(row.context_sha256 ?? ''));
      contexts.set(row.id, seen);
    }
  } catch { return new Map(); }
  return new Map([...contexts].map(([id, rows]) => [id, rows.size]));
}

/** Durable Step-8 judge-cycle counts.  The receipt, not the stage-wide repair
 * counter, owns the two-context lifetime ceiling for each item. */
function rejudgeCycleCounts(ctx): Map<string, number> {
  const p = R(ctx, `research/${ctx.run}-step8-rejudge-cycles.json`);
  const counts = new Map<string, number>();
  if (!existsSync(p)) return counts;
  try {
    const receipt = JSON.parse(readFileSync(p, 'utf8'));
    for (const cycle of receipt?.cycles ?? []) {
      for (const id of new Set<string>((cycle?.items ?? []).map(String))) {
        counts.set(id, (counts.get(id) ?? 0) + 1);
      }
    }
  } catch { /* the cycle wrapper reports a malformed receipt exactly */ }
  return counts;
}

/** The group labels that own the given item ids, in assignment order.
 *
 *  Read from `<run>-step8-scope.json`, which `8-scope` renders mechanically
 *  from the batch manifests and the validated group assignment. A repair round
 *  uses this to send each open fatal back to the Alpha holding that batch's
 *  conventions rather than to whichever lane is free.
 *
 *  An id the scope does not know — a step-9 build, or an item added after the
 *  render — has no owner, and returning nothing for it would silently drop a
 *  fatal defect. It falls to EVERY group instead: an Alpha told to repair an
 *  item outside its batches declines and records a cross-group finding, which
 *  the `step8-scope` gate then refuses to let the stage close over. Loud beats
 *  lost.
 *
 *  A SINGLE `null` MEANS "no partition": the run has no group assignment yet, or
 *  `8-scope` has not rendered. The caller then dispatches one whole-level Alpha,
 *  which is what step 8 did before it was partitioned. This is the one case that
 *  must never return an empty list — an empty list is a repair round that
 *  dispatches nothing and reports a spent round, which is how an open fatal
 *  reaches step 10.
 */
function step8Owners(ctx, ids: string[]): Array<string | null> {
  const labels = alphaGroups(ctx).map((g: any) => String(g.label));
  if (!labels.length) return [null];
  const p = R(ctx, `research/${ctx.run}-step8-scope.json`);
  if (!existsSync(p)) return labels;
  let byItem: Record<string, string> = {};
  try { byItem = JSON.parse(readFileSync(p, 'utf8'))?.by_item ?? {}; } catch { return labels; }
  const owners = new Set<string>();
  let unknown = false;
  for (const id of ids) {
    const g = byItem[id];
    if (g) owners.add(g); else unknown = true;
  }
  if (unknown) return labels;
  const hit = labels.filter((l) => owners.has(l));
  return hit.length ? hit : [null];
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
const ledgerGate = (ctx, { terminal = false } = {}) => gate('defect-ledger', ['node', 'tools/defect-ledger.mjs', 'check',
  '--run', ctx.run,
  '--adjudications', `research/${ctx.run}-judge-adjudications.jsonl`,
  '--closure', `research/${ctx.run}-judge-closure.json`,
  // The terminal stage may not end with any open row; steps 8–9 tolerate a
  // nonfatal one deliberately left open (step 9 owns the sweep that closes it).
  ...(terminal ? ['--no-open'] : [])], {
  liveness: { pattern: /(\d+) defect row\(s\) checked/.source, min: 1, unit: 'defect rows' },
});

/**
 * Judge closure — the predicate that says whether the mathematics is signed off.
 *
 * Three questions, all answered against the text on disk right now: does every
 * item have a current configured-judge verdict set, is every current rejection adjudicated, and
 * is any adjudication `confirmed_fatal`. `--out` writes the ids in each class so
 * the rejudge stage has something to dispatch from — frontier-14's step 8 named
 * its 23 rejudge targets in a markdown table and the rejudge never ran, because
 * nothing downstream could read a table.
 *
 * The allowances are per-stage and narrow:
 *   step 7 — nothing is adjudicated yet, so rejections are expected;
 *   step 8 — repairs legitimately void their own verdicts, and the next stage fixes
 *            that; an unadjudicated rejection and an open fatal are NOT allowed.
 *   after  — no allowances at all.
 */
const closureGate = (ctx, { allowUnadjudicated = false, pendingRejudge = false } = {}) =>
  gate('judge-closure', ['node', 'tools/level-coverage.mjs',
    '--judge-only', '--verify-current-context',
    '--judge-ledger', `research/${ctx.run}-judge.jsonl`,
    '--judge-adjudications', `research/${ctx.run}-judge-adjudications.jsonl`,
    '--terminal-resolutions', terminalResolutionsPath(ctx),
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
  '--terminal-resolutions', terminalResolutionsPath(ctx),
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
 *  6c). A second live `post-6b -> current` gate closes the lead Alpha's later
 *  edits before Step 6 ends. */
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
  // ---------------------------------------------------------------------------
  // WHY THE DRIFT REVIEW IS ITS OWN STAGE, AHEAD OF THE BETAS (owner rulings,
  // 2026-08-24). It used to ride inside `1-scaffold` as the `drift` unit,
  // finishing in ~15 minutes while the Betas ran for ~50. That was free while
  // the review's only outputs were `requires` edits and a report. It stopped
  // being free the moment the Alpha gained authority to MINT a missing
  // prerequisite, REORDER to close a forward edge, and — above three
  // mintings — RESCOPE the run onto its dependencies. Each of those changes
  // WHICH PAGES THE RUN BUILDS, and a scope change discovered after ten Betas
  // have scaffolded is a teardown of authored work: `drift-apply` refuses it,
  // correctly, and the run would stop needing a person for the one class of
  // decision these rulings were meant to automate.
  //
  // Ahead of the Betas the same decision costs one ~15-minute Alpha and
  // nothing else. `batches()` reads the manifest directory, so a batch minted
  // here simply exists when the scaffold stage computes its units — no
  // signalling between the stages, and no cohort recomputed from a stale list.
  // ---------------------------------------------------------------------------
  {
    id: '1-drift',
    label: 'step-0 prerequisite-drift review',
    units: () => ['drift'],
    pattern: /^alpha-(?:alpha-)?drift-review\.result\.json$/,
    labelFor: () => 'drift-review',
    concurrency: 1,
    artifacts: (ctx: any) => `research/${ctx.run}-alpha-step0-drift.md`,
    plan: (ctx: any) => [{
      role: 'alpha',
      label: 'drift-review',
      job: 'verification',
      covers: ['drift'],
      brief: 'briefs/alpha-drift.md',
      task: [`research/${ctx.run}-alpha-step0-drift.task.md`],
      timeout: 7200,
    }],
    gates: (ctx: any) => [driftGate(ctx), planGate()],
    // TWO ROUNDS, and they are different repairs. Round one materialises what
    // the report already decided (`drift-apply`). If what remains is a BLOCKED
    // verdict, the report itself is the stale artifact and the second round
    // sends it back to an Alpha, which may now reorder, mint or rescope. A
    // third round would re-ask an Alpha that has just answered.
    maxFixRounds: 2,
    onGateFailure: async (args: any) => {
      const repair = await mechanicalRepair(args);
      // A blocked verdict is never materialisable — the REPORT is the stale
      // artifact — so this is asked regardless of how the repair went, and
      // before the residue check, which cannot see a clean-exiting no-op.
      if (dispatchDriftRereview(args)) return;
      if (repair.outcome === 'residual') {
        throw new Error(`drift decisions could not be materialised: ${(repair.stderr ?? '').slice(0, 300)}`);
      }
    },
  },
  {
    id: '1-scaffold',
    label: 'Beta scaffolding',
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
    units: (ctx: any) => batches(ctx),
    // Anchored and exact ON PURPOSE: an unanchored `beta-batch-` also matches
    // `beta-fix-batch-3.result.json`, which belongs to a different stage.
    pattern: /^beta-(?:beta-)?batch-\d+\.result\.json$/,
    labelFor: (u) => `batch-${u}`,
    concurrency: 24,
    plan: (ctx, pending) => pending.map((u: any) => ({
      role: 'beta',
      label: `batch-${u}`,
      job: 'scaffolding',
      covers: [u],
      brief: 'briefs/beta-scaffold.md',
      task: [`research/${ctx.run}-beta-${u}.task.md`, `research/${ctx.run}-beta-batch.task.md`],
      timeout: 14400,
    })),
    // `driftGate` stays on this stage as well as on `1-drift`. It is cheap, and
    // it is the check that a scope change applied upstream is still true of the
    // manifests the Betas actually scaffolded against.
    gates: (ctx) => [scopeGate(ctx), driftGate(ctx), ...coverageGates(ctx, { requireDestination: true }), ...policyGates(ctx), planGate(), urlGate(ctx), backingGate(ctx), fetchGate(ctx)],

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
    // THE SAME PATTERN-VS-ROLE DEFECT `8-adjudicate` CARRIED, found by the
    // class guard in `test/step8-groups.test.mts` on 2026-08-25. The plan moved
    // to role `alpha-assign` when that lane was introduced (2026-08-24) and this
    // line did not, so a re-run would write
    // `alpha-assign-assign.result.json` and match nothing — the stage would
    // re-dispatch a completed partition forever. It has not bitten only because
    // frontier-18's `2-assign` ran before the lane existed and its result file
    // records role `alpha`.
    //
    // Both spellings are recognised deliberately: the new one because it is what
    // the plan now produces, the old one because frontier-18's result is on disk
    // under it and narrowing the pattern would reopen a barrier the run passed
    // days ago. Not written through `resultPattern`, which takes one role.
    pattern: /^alpha-(?:assign-)?assign\.result\.json$/,
    artifacts: (ctx) => `research/${ctx.run}-alpha-groups.json`,
    concurrency: 1,
    plan: (ctx) => [{
      role: 'alpha-assign',
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
    concurrency: 8,
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
    // Scope decisions are checked at the recheck join below, after Betas have
    // finished changing coverage. Checking the same file here first makes a
    // post-recheck scaffold repair fail under 3-review's ownership before the
    // recheck stage can refresh the newly introduced decision rows.
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
    concurrency: 24,
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
    gates: (ctx) => [scopeGate(ctx), ...coverageGates(ctx, { requireDestination: true }), ...policyGates(ctx), planGate()],
  },

  // Alpha re-checks its own findings from disk before the splice. An `applied`
  // claim that changed nothing is caught here, which is the only reason the
  // fix stage can be trusted without a human reading it.
  {
    id: '3-recheck',
    label: 'Alpha re-check before splice',
    pipeline: 'scaffold',
    role: 'alpha-high',
    units: batches,
    // The same pattern-vs-role defect as `2-assign`, and dormant for the same
    // reason: the plan moved to role `alpha-high` on 2026-08-24 and this line
    // did not, so frontier-18's four results are on disk as `alpha-recheck-*`
    // while a re-run would write `alpha-high-recheck-*` and match nothing. Both
    // spellings, so a fixed pattern does not reopen a stage that closed at
    // step 3.
    pattern: /^alpha-(?:high-)?recheck-[a-z]+\.result\.json$/,
    concurrency: 8,
    cohort: alphaCohort,
    plan: (ctx, pendingUnits) => alphaGroups(ctx)
      .filter((g: any) => g.covers.some((c: any) => pendingUnits.includes(String(c))))
      .map((g: any) => ({
        role: 'alpha-high',
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
    gates: (ctx) => [scopeGate(ctx), planGate(), scaffoldGate(ctx, { requireSufficient: true }),
      scopeDecisionsGate(ctx), urlGate(ctx), backingGate(ctx), fetchGate(ctx)],
    // Still thin after the re-check is another fix round, not an advance. Bounded
    // for the same reason the judge loop is: a scaffold that will not converge is
    // a decision for a person, and the blocker names the pairs.
    maxFixRounds: 3,
    onGateFailure: async ({ ctx, executor, stage, round, failure }) => {
      const scaffoldFailed = [failure, ...(failure?.advisory ?? [])]
        .some((entry: any) => entry?.id === 'scaffold-verdicts');
      // Mechanically repairable failures never spend a Beta dispatch; a
      // repair that leaves residue (a source no swap or stamp can save)
      // routes the residue to scouting Betas — the owner's designed remedy —
      // rather than burning rounds into a needs-a-person blocker.
      const repair = await mechanicalRepair({ ctx, failure });
      // A clean mechanical repair may have fixed only an advisory failure.
      // It must not hide an unrelated thin-scaffold verdict from this same
      // battery: frontier-21 otherwise spent round 1 stamping a source and
      // dispatched no Beta for the primary scaffold failure.
      if (repair.outcome === 'clean' && !scaffoldFailed) return;
      if (repair.outcome === 'outage') return { outage: { reason: repair.reason! } };
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
      // A scaffold-fix Beta changes the evidence that the group Alpha already
      // judged. When such a repair result is newer than either the group's
      // verdict or its scope decisions, the next repair action is an Alpha
      // recheck, not another Beta rewrite. Frontier-21 exposed the missing
      // handoff: the Beta added Theorem 3.4, gates read stale Alpha artifacts,
      // and the engine otherwise asked the Beta to repair the same scaffold
      // again.
      const dispatchDir = R(ctx, 'research', `${ctx.run}-dispatch`);
      const repairFiles = existsSync(dispatchDir)
        ? readdirSync(dispatchDir).filter((name: string) => /^beta-scaffold-fix-\d+-b\d+\.result\.json$/.test(name))
        : [];
      const staleGroups = alphaGroups(ctx).filter((group: any) => {
        if (!group.covers.some((batch: string) => owed.includes(batch))) return false;
        const verdict = R(ctx, 'research', `${ctx.run}-alpha-${group.label}-step3-verdicts.json`);
        const decisions = R(ctx, 'research', `${ctx.run}-alpha-${group.label}-scope-decisions.json`);
        const artifactJudgedAt = Math.min(
          existsSync(verdict) ? statSync(verdict).mtimeMs : 0,
          existsSync(decisions) ? statSync(decisions).mtimeMs : 0,
        );
        // An unchanged verdict is still a completed recheck. Codex correctly
        // leaves byte-identical artifacts untouched, so their mtimes alone can
        // make the same Alpha look stale forever. The dispatch receipt is the
        // durable proof that the group read the repaired bytes; include the
        // newest one when deciding whether another Beta or another Alpha owns
        // the next move.
        const recheckJudgedAt = existsSync(dispatchDir)
          ? readdirSync(dispatchDir)
            .filter((name: string) => new RegExp(`^alpha-(?:high-)?scaffold-recheck-\\d+-${group.label}\\.result\\.json$`).test(name))
            .reduce((latest: number, name: string) => Math.max(latest, statSync(join(dispatchDir, name)).mtimeMs), 0)
          : 0;
        const judgedAt = Math.max(artifactJudgedAt, recheckJudgedAt);
        return repairFiles.some((name: string) => {
          const batch = name.match(/-b(\d+)\.result\.json$/)?.[1];
          return batch && group.covers.includes(batch)
            && statSync(join(dispatchDir, name)).mtimeMs > judgedAt;
        });
      });
      if (staleGroups.length) {
        for (const group of staleGroups) {
          executor.start(stage, {
            role: 'alpha-high',
            label: `scaffold-recheck-${round}-${group.label}`,
            job: 'adjudication',
            covers: group.covers,
            brief: 'briefs/alpha.md',
            task: [`research/${ctx.run}-alpha-${group.label}-recheck.task.md`, `research/${ctx.run}-alpha-group-recheck.task.md`],
            timeout: 7200,
          });
        }
        return;
      }
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
    // `validate-plan` IS this stage's business, and it used to fall straight
    // through this hook. Its `undeclared-prereq` finding — an item whose `deps`
    // reach a page outside its own page's `requires` closure — is precisely
    // what the step-4 Alpha adjudicates: apply a backward edge the scaffold
    // genuinely consumes, strike one it does not, block a forward one as a
    // reading-order change. The task file has said so all along.
    //
    // frontier-16 spliced cleanly and `validate-plan` returned 23 of them
    // across all 11 pages, four being the b-leaf class. The hook returned on
    // the first line, three rounds were spent in ninety seconds dispatching
    // nothing, and the run reported "this needs a person" for a decision the
    // stage owns an Alpha to make. A gate with no route to its fixer does not
    // read as unrouted — it reads as exhausted, which is a worse blocker
    // because it looks like the repair was tried.
    onGateFailure: async ({ ctx, executor, stage, round, failure }: any) => {
      // ONLY the undeclared-prereq class, not every validate-plan failure.
      // That gate is repo-wide and fails for heterogeneous reasons — a cycle,
      // a forward reference, an unresolved id, a page over the 60-item
      // ceiling — and most of them are not edge decisions at all. An Alpha
      // handed a `size` violation under an edge-adjudication task would reach
      // for the tool it was given and add an edge. Leaving the rest on the
      // blocker path is the original design and it is right.
      //
      // ASK THE TOOL, don't read the failure text. `failure.why` is the gate's
      // last line — for this gate, the word "FAIL" — and `failure.output` is a
      // truncated tail that may hold any part of a long report. Matching
      // either one decided this by whichever lines happened to land in the
      // slice, which on the first live firing was a run of `redundant-prereq`
      // warnings and no dispatch. `validate-plan` is fast and deterministic,
      // so re-running it and reading all of its output is both cheaper and
      // correct.
      const edge = await isEdgeDecision({ ctx, failure });
      if (!['splice-refusals', 'stage-stalemate'].includes(failure.id) && !edge) return;
      // A re-splice cannot clear `undeclared-prereq`: the edges it names are
      // induced by item `deps`, not declared by a manifest, so there is
      // nothing for the transcriber to transcribe. Go straight to the Alpha.
      if (!edge) {
        const repair = await mechanicalRepair({ ctx, failure: { id: 'splice-refusals' } });
        if (repair.outcome === 'clean') return;
        if (repair.outcome === 'outage') return { outage: { reason: repair.reason! } };
      }
      executor.start(stage, {
        role: 'alpha',
        label: `step4-adjudicate-${round}`,
        job: 'adjudication',
        // A stalemate is unit-scoped. Claim its withheld units while this
        // repair is in flight so the executor's next 30-second scan does not
        // mistake the same units for abandoned and launch another writer
        // against this report. The Alpha receipt cannot satisfy 4-splice
        // coverage because the stage pattern admits only tool/splice-all.
        covers: failure.id === 'stage-stalemate' ? (failure.units ?? []).map(String) : [],
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
    modelProfile: (plan: any) => plan.role === 'beta' && plan.job === 'authoring'
      ? GPT54_HIGH_1M
      : undefined,
    // THE LARGEST WIN. A batch whose authoring is finished starts its reader
    // while the other batches are still being written: authors run to six hours
    // and readers to four, and serially the slowest author gated every reader.
    pipeline: 'read',
    role: 'beta',
    units: batches,
    pattern: resultPattern('beta', '(?:author-batch-\\d+|author-recover-\\d+(?:-\\d+)?)'),
    labelFor: (u) => `author-batch-${u}`,
    // A zero-exit author result is only a process receipt. Frontier 21 batch 8
    // explicitly stopped after one of two pairs and omitted its contract, yet
    // coverage released the reader and made split retry an impossible command.
    // The per-batch contract is the durable completion artifact consumed by
    // Step 6, so keep that unit in authoring until the artifact actually lands.
    artifacts: (ctx, u) => `research/${ctx.run}-batch-${u}.proof-contracts.json`,
    concurrency: 24,
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
    // gate-liveness joins the routed set for exactly one of its probes: a
    // finite-smoke vacuity (0 checks over a full level) is either registry
    // inapplicability or author under-selection, and telling those apart —
    // then SELECTING the applicable checks with their asserts excerpts — is
    // a read of the mathematics. This level carries Sylow, unit groups and
    // poset-category limit claims, all squarely inside the registry, so the
    // floor held correctly on 0/324.
    //
    // This is the 22-gate Step-5/6 join, and primary failures surface one at a
    // time. Frontier 21 repaired rendercheck, splice currency, and one contract
    // quote in three successful rounds, then falsely exhausted before the newly
    // exposed boundary review could receive its first routed read. Keep the
    // loop bounded, but budget for sequential distinct gates at this join.
    // Frontier 28 needed depcheck, rendercheck, two splice synchronisations,
    // contract quote repair, and contract-detector review in one join; eight
    // rounds left no room for a truthful residual from the detector audit.
    maxFixRounds: 10,
    onGateFailure: async ({ ctx, executor, stage, round, failure }: any) => {
      // Artifact accounting now keeps a partial zero-exit author covered but
      // incomplete. Resume exactly the batches whose required contracts never
      // landed. The executor names only covered, artifact-incomplete units that
      // are no longer active, so one slow ordinary author cannot suppress or
      // duplicate recovery for its completed siblings.
      if (failure.id === 'stage-stalemate') {
        const requested = Array.isArray(failure.units) ? failure.units.map(String) : batches(ctx).map(String);
        const missing = requested.filter((u: any) => !existsSync(join(ctx.repo,
          'research', `${ctx.run}-batch-${u}.proof-contracts.json`)));
        for (const u of missing) {
          executor.start(stage, {
            role: 'beta', label: `author-recover-${u}-${round}`,
            job: 'authoring', covers: [u], brief: 'briefs/authoring.md',
            task: [`research/${ctx.run}-beta-${u}-author.task.md`, `research/${ctx.run}-beta-author.task.md`],
            timeout: 21600,
          });
        }
        return;
      }
      // A FAILURE WITH A MECHANICAL REPAIR TAKES IT FIRST, whatever its id.
      // `splice-verify` fails here as a matter of course: the 6b Alphas add
      // and repair items under their step-6 licence, so the manifests move
      // ahead of the plan and the currency check says so — correctly. It is
      // not a candidate read and it has no Alpha; it has a transcription.
      // This hook enumerated three ids, so it fell straight through, three
      // rounds were spent dispatching nothing, and the run reported "did not
      // clear" for a repair it never ran. Third instance of that shape today.
      if (MECHANICAL_REPAIRS[failure.id]) {
        const repair = await mechanicalRepair({ ctx, failure });
        if (repair.outcome === 'outage') return { outage: { reason: repair.reason! } };
        return;   // the battery re-verifies; a residue fails the gate again, honestly
      }
      // An edge decision reaches the same lane it does at step 4. A 6b Alpha
      // repairing an item under its step-6 licence can introduce a dependency
      // its page does not declare, long after the splice; frontier-16 did,
      // once, and it fell through here for want of a route.
      if (await isEdgeDecision({ ctx, failure })) {
        dispatchEdgeAdjudication({ ctx, executor, stage, round });
        return;
      }
      // THE CONTRACT DETECTORS have their own task, because it names the three
      // tools to re-run. Everything else gets the general route below.
      if (['boundary-audit', 'citation-fidelity', 'gate-liveness'].includes(failure.id)) {
        executor.start(stage, {
          role: 'alpha',
          label: `contract-audit-${round}`,
          job: 'adjudication',
          covers: [],
          brief: 'briefs/alpha.md',
          task: [`research/${ctx.run}-alpha-contract-audit.task.md`],
          timeout: 3600,
        });
        return;
      }

      // DEFAULT ROUTE, NOT AN ALLOW-LIST (owner, 2026-08-24). This line used to
      // read `if (!['boundary-audit','citation-fidelity','gate-liveness']
      // .includes(failure.id)) return;` — so any other failing gate fell through
      // to a bare return, the round budget was spent re-running an identical
      // failure, and the run reported "did not clear" for a repair it never ran.
      //
      // frontier-18 produced THREE blockers of exactly that shape in one run:
      // `depcheck` (one typo'd id in a deps array), `rendercheck` (37 items of
      // `$$` split across source lines) and `content-policy-items` (a notation
      // detector firing wider than the rule it enforces). All three were
      // adjudicable from disk by an Alpha; none needed a person, and the third
      // still needed one only for the part that is genuinely the owner's — the
      // scope of an owner-written rule.
      //
      // The comment two hooks above already recorded this shape ("This hook
      // enumerated three ids, so it fell straight through") and closed it only
      // for the mechanical case. An allow-list of failures worth routing is a
      // list that is always one entry short of the next incident.
      //
      // A gate failure is a FINDING. The Alpha adjudicates it, repairs what is
      // genuinely wrong, and reports a false positive as a false positive — the
      // task is explicit that narrowing a detector to clear a run is never its
      // call.
      executor.start(stage, {
        role: 'alpha',
        label: `gate-adjudication-${failure.id}-${round}`,
        job: 'adjudication',
        covers: [],
        brief: 'briefs/alpha.md',
        task: [`research/${ctx.run}-alpha-gate-adjudication.task.md`],
        timeout: 3600,
      });
    },
  },

  // Step 6 includes artifact-owner recovery for incomplete author contracts
  // and malformed reader findings; keep it inside the hot-reloaded table.
  ...step6Stages({
    gate, repoWide, contractGates, coverageGates, policyItemGate, urlGate,
    impactGate, batches, alphaGroups, alphaCohort, resultPattern, touchesPath,
    MECHANICAL_REPAIRS, mechanicalRepair, isEdgeDecision,
    dispatchSourceScouts,
  }).map((entry: any) => {
    if (entry.id === '6a-collect') {
      const ordinaryPattern = resultPattern('tool', 'collect-\\d+(?:-recovered)?');
      return {
        ...entry,
        pattern: (ctx: any) => hasLegacyStep6Cutover(ctx) ? entry.pattern(ctx) : ordinaryPattern,
        plan: (ctx: any, pending: string[]) => {
          if (hasLegacyStep6Cutover(ctx)) return entry.plan(ctx, pending);
          return pending.map((unit: string) => {
            let malformed = false;
            try {
              const scope = JSON.parse(readFileSync(join(ctx.repo, 'research',
                `${ctx.run}-step6-scope-${unit}.json`), 'utf8'));
              const report = JSON.parse(readFileSync(join(ctx.repo, 'research',
                `${ctx.run}-refute-${unit}.json`), 'utf8'));
              const expected = new Set((scope?.refuter_scope ?? []).map(String));
              const opened = (report?.opened ?? []).map(String);
              const notOpened = (report?.not_opened ?? []).map(String);
              const actual = new Set([...opened, ...notOpened]);
              malformed = !Array.isArray(report?.opened) || !Array.isArray(report?.not_opened)
                || expected.size !== actual.size
                || [...expected].some((id) => !actual.has(id))
                || notOpened.length > 0;
            } catch { malformed = true; }
            if (malformed) {
              return {
                role: 'refuter', label: `refute-recover-${unit}`,
                // Recovery repairs the input artifact. Only the following
                // collect tool may cover this mechanical stage.
                job: 'refutation', covers: [], brief: 'briefs/refuter.md',
                task: 'briefs/tasks/refuter-untouched.md',
                outputSchema: 'briefs/schemas/refute-report.json',
                resultArtifact: `research/${ctx.run}-refute-${unit}.json`,
                timeout: 10800,
              };
            }
            const dispatchDir = ctx.dispatchDir ?? join(ctx.repo, 'research', `${ctx.run}-dispatch`);
            const recovered = existsSync(join(dispatchDir,
              `refuter-refute-recover-${unit}.result.json`));
            return {
              role: 'tool', label: `collect-${unit}${recovered ? '-recovered' : ''}`,
              job: 'bookkeeping-mechanical', covers: [unit],
              argv: ['node', 'tools/step6-scope.mjs', 'collect', '--run', ctx.run,
                '--batch', String(unit)],
              timeout: 600,
            };
          });
        },
      };
    }
    if (entry.id !== '6a-split') return entry;
    const ordinaryPattern = resultPattern('tool', 'split-\\d+(?:-(?:reader-)?recovered)?');
    return {
      ...entry,
      pattern: (ctx: any) => hasLegacyStep6Cutover(ctx) ? entry.pattern(ctx) : ordinaryPattern,
      plan: (ctx: any, pending: string[]) => {
        if (hasLegacyStep6Cutover(ctx)) return entry.plan(ctx, pending);
        return pending.map((unit: string) => {
          const contract = join(ctx.repo, 'research', `${ctx.run}-batch-${unit}.proof-contracts.json`);
          if (!existsSync(contract)) {
            return {
              role: 'beta', label: `author-recover-${unit}`,
              // Preparation only: the split tool still owes this unit after
              // the missing contract is restored.
              job: 'authoring', covers: [], brief: 'briefs/authoring.md',
              task: [`research/${ctx.run}-beta-${unit}-author.task.md`, `research/${ctx.run}-beta-author.task.md`],
              timeout: 21600,
            };
          }
          const findings = join(ctx.repo, 'research', `${ctx.run}-reader-findings-${unit}.json`);
          let malformed = false;
          try {
            const report = JSON.parse(readFileSync(findings, 'utf8'));
            const manifest = JSON.parse(readFileSync(join(ctx.repo, 'research',
              `${ctx.run}-batch-${unit}.pages.json`), 'utf8'));
            const assignedItems = new Set((Array.isArray(manifest) ? manifest : [])
              .flatMap((page: any) => (page?.items ?? []).map((item: any) => String(item?.id ?? item))));
            const assignedPages = new Set((Array.isArray(manifest) ? manifest : [])
              .map((page: any) => String(page?.id ?? '')).filter(Boolean));
            // The output schema proves only that these are strings. Routing
            // needs carrier identities: invented obligation labels such as
            // R3-U1 are neither a page nor an item, and sending them straight
            // to the mechanical split only retries the same deterministic
            // failure until its lane budget is exhausted.
            const badCarrier = (finding: any) => {
              if (typeof finding?.id !== 'string') return true;
              if (finding.subject_type === 'in-flight-item') return !assignedItems.has(finding.id);
              if (finding.subject_type === 'page') return !assignedPages.has(finding.id);
              if (finding.subject_type === 'published-dependency') {
                return !existsSync(join(ctx.repo, 'items', `${finding.id}.md`));
              }
              return true;
            };
            malformed = ![String(unit), `${ctx.run}-batch-${unit}`].includes(String(report?.batch))
              || !Array.isArray(report?.findings) || report.findings.some(badCarrier);
            const prePath = join(ctx.repo, 'research', `${ctx.run}-step6-hash-${unit}-pre.json`);
            const postPath = join(ctx.repo, 'research', `${ctx.run}-step6-hash-${unit}-post.json`);
            if (existsSync(prePath) && existsSync(postPath)) {
              const pre = JSON.parse(readFileSync(prePath, 'utf8'));
              const post = JSON.parse(readFileSync(postPath, 'utf8'));
              const carrierChanged = (finding: any) => {
                if (finding?.subject_type === 'in-flight-item') {
                  return JSON.stringify(pre?.hashes?.[finding.id] ?? null)
                    !== JSON.stringify(post?.hashes?.[finding.id] ?? null);
                }
                if (finding?.subject_type === 'page') {
                  return JSON.stringify(pre?.page_hashes?.[finding.id] ?? null)
                    !== JSON.stringify(post?.page_hashes?.[finding.id] ?? null);
                }
                return false;
              };
              malformed ||= report.findings.some(carrierChanged);
            }
          } catch { malformed = true; }
          if (malformed) {
            const recoveryTask = `research/${ctx.run}-reader-recover-${unit}.task.md`;
            writeFileSync(join(ctx.repo, recoveryTask), [
              '# Step 6 reader routing-artifact correction',
              '',
              `Correct research/${ctx.run}-reader-findings-${unit}.json for batch ${unit}.`,
              `Set the top-level \`batch\` field to exactly "${unit}"; it identifies this batch, not the run number.`,
              'Preserve every genuine uneditable finding and the existing reader report.',
              'The finding `id` is NOT an obligation label or a newly invented finding key.',
              'For `published-dependency`, `id` must be the exact published item id:',
              'the filename stem under items/ for the carrier named by `location`.',
              'For `in-flight-item` or `page`, `id` must likewise be the exact assigned carrier id.',
              '`consumer_id` must be an assigned item whose dependency closure reaches that published id.',
              'Remove a finding if its in-flight item or page changed since the pre-reader hash.',
              'Compare the COMPLETE JSON fingerprint at pre.hashes[id] versus post.hashes[id]',
              '(or pre.page_hashes[id] versus post.page_hashes[id]), not only item_sha256/file_sha256.',
              'A changed contract_sha256 or manifest_sha256 also makes the carrier touched.',
              'A touched carrier is already routed mechanically and cannot remain an open finding.',
              'Write the corrected schema-conforming JSON to the same named result artifact.',
              '',
            ].join('\n'));
            return {
              role: 'reader', label: `reader-recover-${unit}`,
              // Preparation only: repaired findings feed the split tool and
              // do not themselves satisfy its coverage.
              job: 'audit', covers: [], brief: 'briefs/reader.md',
              task: recoveryTask, outputSchema: 'briefs/schemas/reader-findings.json',
              resultArtifact: `research/${ctx.run}-reader-findings-${unit}.json`,
              timeout: 14400,
            };
          }
          const dispatchDir = ctx.dispatchDir ?? join(ctx.repo, 'research', `${ctx.run}-dispatch`);
          const authorRecovered = existsSync(join(dispatchDir,
            `beta-author-recover-${unit}.result.json`));
          const readerRecovered = existsSync(join(dispatchDir,
            `reader-reader-recover-${unit}.result.json`));
          const suffix = readerRecovered && authorRecovered ? '-reader-recovered'
            : authorRecovered || readerRecovered ? '-recovered' : '';
          return {
            role: 'tool', label: `split-${unit}${suffix}`,
            job: 'bookkeeping-mechanical', covers: [unit],
            argv: ['node', 'tools/step6-scope.mjs', 'post-reader', '--run', ctx.run,
              '--batch', String(unit)],
            timeout: 600,
          };
        });
      },
    };
  }),

  // The group partition, rendered BEFORE the sweep so the step-7 readers have
  // their scope. `8-scope` runs the same tool again after the sweep, when the
  // rejection rows exist; the content half — pages, items, seams — is identical
  // and is what the reading half needs.
  {
    id: '7-scope',
    label: 'partition the level by group (mechanical)',
    units: () => ['all'],
    pattern: resultPattern('tool', 'step7-scope'),
    artifacts: (ctx) => `research/${ctx.run}-step8-scope.json`,
    concurrency: 1,
    plan: (ctx) => [{
      role: 'tool',
      label: 'step7-scope',
      job: 'bookkeeping-mechanical',
      covers: ['all'],
      argv: ['node', 'tools/step8-scope.mjs', 'render', '--run', ctx.run],
    }],
    gates: (ctx) => [
      gate('step8-scope', ['node', 'tools/step8-scope.mjs', 'check', '--run', ctx.run], {
        liveness: { pattern: /(\d+) item\(s\) partitioned/.source, min: 1, unit: 'items partitioned' },
      }),
    ],
  },

  // THE SWEEP AND THE GROUP PRE-READS RUN TOGETHER (owner, 2026-08-25).
  //
  // "Step 8 group alpha agents can be spawned, assigned groups, and can start
  // reading A/B pairs they are tasked to adjudicate. All of these can be done
  // during step 7." They are units of ONE stage rather than two stages, because
  // the engine overlaps units inside a stage and serialises stages: a separate
  // reading stage in front of the sweep would cost its own wall-clock, which is
  // the thing the owner's instruction removes.
  //
  // WHAT THE PRE-READ BUYS. Each group reads its own pairs while no verdict
  // exists and writes a durable digest. Step 8 starts fresh from that digest,
  // so it receives the useful mathematical findings without paying again for
  // an entire Step-7 transcript.
  // A concern recorded here was found with nobody pointing at it, so a judge
  // rejection landing in the same place is two independent readings agreeing —
  // evidence of a different quality from agreeing with a rejection you were
  // handed.
  //
  // WHY THE PRE-READ IS READ-ONLY, at the kernel rather than in the prompt. Step
  // 7 judges a frozen text. An edit landing mid-sweep voids verdicts already cast
  // against the old bytes and leaves the level judged in two states with nothing
  // on disk recording it. `alpha-group-read` carries `--sandbox read-only`; its
  // digest reaches disk through `--result-artifact`, which the DISPATCHER writes.
  //
  // QUOTA. Eight Terra group-reader lanes may run concurrently with the Terra
  // judge sweep, all on the Codex weekly cap. A cap is a ceiling the engine may
  // use, never a quota it must spend: if lanes start dying on a limit, lower
  // `alpha-group-read`'s cap rather than re-spending the loop.
  {
    id: '7-judge',
    label: 'one stateless Terra judge per item, with whole-group readers alongside',
    modelProfile: (plan: any) => plan.role === 'alpha-group-read'
      ? TERRA_XHIGH
      : undefined,
    // One unit for the sweep, one per group. The stage is done when the ledger
    // is covered AND every group has a digest — which is what makes the reading
    // a real obligation rather than a best-effort rider.
    units: (ctx) => ['sweep', ...alphaGroups(ctx).map((g: any) => String(g.label))],
    // Two result-file families in one stage, so the pattern is written out
    // rather than derived: `resultPattern` takes one role. The group half is
    // `<role>-<label>` with the label being the bare group letter, which is why
    // the repair round below is labelled `read-again-*` — digits and the
    // longer name keep it outside this pattern, so a re-read is never mistaken
    // for the unit's own coverage.
    pattern: /^(?:tool-judge-sweep|alpha-group-read-[a-z]+)\.result\.json$/,
    // One judge-sweep controller plus one read-only lane for each of eight
    // groups. The sweep's own 24-way item pool is independently bounded.
    concurrency: 9,
    // The judge sweep is a TOOL RUN, not an agent dispatch — judge-sweep.mjs
    // owns its own lane pools, retry semantics and attestation. The A-page ids
    // are computed here rather than in a shell sub-invocation: the first
    // version nested three levels of quoting inside a `sh -c`, which is a
    // defect waiting to happen in a stage that runs once, twelve hours into a
    // build, unattended.
    plan: (ctx, pendingUnits) => {
      const plans: any[] = [];
      if (pendingUnits.includes('sweep')) {
        const aPages = [];
        for (const b of batches(ctx)) {
          const pj = JSON.parse(readFileSync(R(ctx, 'research', `${ctx.run}-batch-${b}.pages.json`), 'utf8'));
          for (const p of pj) if (p.kind === 'A') aPages.push(p.id);
        }
        plans.push({
          role: 'tool',
          label: 'judge-sweep',
          job: 'judgement',
          covers: ['sweep'],
          timeout: 43200,
          // argv, so there is nothing to quote and nothing to parse. The engine
          // writes the result record when this exits zero.
          argv: ['node', 'tools/judge-sweep.mjs', '--run', ctx.run,
            '--ledger', `research/${ctx.run}-judge.jsonl`,
            '--cost', `research/${ctx.run}-judge-cost.jsonl`,
            '--pages', aPages.join(',')],
        });
      }
      for (const g of alphaGroups(ctx)) {
        if (!pendingUnits.includes(String(g.label))) continue;
        plans.push({
          role: 'alpha-group-read',
          label: String(g.label),
          job: 'audit',
          covers: [String(g.label)],
          brief: 'briefs/alpha.md',
          task: [`research/${ctx.run}-alpha-${g.label}-step7-read.task.md`, 'briefs/tasks/alpha-step7-read.md'],
          outputSchema: 'briefs/schemas/step8-context.json',
          resultArtifact: `research/${ctx.run}-alpha-${g.label}-step8-context.json`,
          timeout: 21600,
        });
      }
      return plans;
    },
    // The sweep exiting zero says the tool ran. It does not say every item got a
    // verdict from every configured model, and on frontier-14 it did not: the stage cleared
    // on its own receipt and the level went forward with holes that only surfaced
    // at the very end. Coverage of the LEDGER is the completion condition.
    //
    // Rejections are expected here — nothing has adjudicated anything yet — so
    // they are warnings at this one stage and hard errors everywhere after.
    //
    // The digest gate is what stops the reading from being a formality: a schema
    // -valid object with nothing in it exits zero, so the check is against the
    // group's real size. It deliberately does NOT require a nonempty `concerns`
    // list — a careful reading that finds nothing thin is a result, and failing
    // it would teach the lane to manufacture concerns.
    gates: (ctx) => [
      closureGate(ctx, { allowUnadjudicated: true }),
      gate('step8-digests', ['node', 'tools/step8-scope.mjs', 'digests', '--run', ctx.run], {
        liveness: { pattern: /(\d+) item\(s\) opened/.source, min: 1, unit: 'items opened while reading' },
      }),
    ],
    // A judge lane can die wholesale without a single verdict being wrong —
    // frontier-15 lost all 392 Terra calls to a 429 boot stampede while
    // Terra answered everything. The re-sweep is mechanical, and the
    // currency rule makes it surgical: only null-verdict items spend. Two
    // rounds; a lane that nulls twice is a platform problem for a person.
    maxFixRounds: 2,
    onGateFailure: async (args: any) => {
      // A thin or missing digest is re-read, not reported. The dispatch that
      // produced it exited zero, so unit coverage will not re-drive it on its
      // own — this hook is the only route back.
      if (args.failure.id === 'step8-digests') {
        const text = `${args.failure.output ?? ''}\n${args.failure.why ?? ''}`;
        const named = new Set([...text.matchAll(/group\s+([a-z]+)\s*:/gi)].map((m) => m[1].toLowerCase()));
        const groups = alphaGroups(args.ctx);
        const selected = groups.filter((g: any) => named.has(String(g.label)));
        const retry = selected.length ? selected : groups;
        for (const g of retry) {
          args.executor.start(args.stage, {
            role: 'alpha-group-read',
            // Not `<label>` alone: that matches the stage pattern, and a repair
            // round must not be mistaken for the unit's own coverage.
            label: `read-again-${g.label}-${args.round}`,
            job: 'audit',
            covers: [],
            brief: 'briefs/alpha.md',
            task: [`research/${args.ctx.run}-alpha-${g.label}-step7-read.task.md`, 'briefs/tasks/alpha-step7-read.md'],
            outputSchema: 'briefs/schemas/step8-context.json',
            resultArtifact: `research/${args.ctx.run}-alpha-${g.label}-step8-context.json`,
            timeout: 21600,
          });
        }
        return;
      }
      if (args.failure.id !== 'judge-closure') return;
      const r = await mechanicalRepair({ ctx: args.ctx, failure: { id: 'judge-closure' } });
      // A lane down to an account limit is not a failed repair: report the
      // outage and the executor refunds the round and waits on a clock.
      if (r.outcome === 'outage') return { outage: { reason: r.reason! } };
    },
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

  // PARTITION STEP 8 ACROSS THE GROUP ALPHAS, AND GIVE EACH ONE ITS CONTENT.
  //
  // Mechanical, and ahead of the adjudicators for the same reason `2-assign` is
  // ahead of the group stages: who owns which rejection is a function of files
  // on disk, so it is code. `step8-scope.mjs render` writes the partition and
  // one self-contained task file per group — the group's pages, every item it
  // owns, the dependency edges that leave its boundary, and the exact rejection
  // rows still owing an outcome.
  {
    id: '8-scope',
    label: 'partition step-8 adjudication by group (mechanical)',
    units: () => ['all'],
    pattern: resultPattern('tool', 'step8-scope'),
    artifacts: (ctx) => `research/${ctx.run}-step8-scope.json`,
    concurrency: 1,
    plan: (ctx) => [{
      role: 'tool',
      label: 'step8-scope',
      job: 'bookkeeping-mechanical',
      covers: ['all'],
      argv: ['node', 'tools/step8-scope.mjs', 'render', '--run', ctx.run],
    }],
    // Not waived, and it is not the same check as `artifacts`: the render can
    // write a scope whose groups no longer match the assignment on disk, or a
    // rejection belonging to no batch manifest — which nobody would adjudicate.
    gates: (ctx) => [
      gate('step8-scope', ['node', 'tools/step8-scope.mjs', 'check', '--run', ctx.run], {
        liveness: { pattern: /(\d+) item\(s\) partitioned/.source, min: 1, unit: 'items partitioned' },
      }),
      // Published repairs intentionally lack current verdicts here: 8-rejudge
      // is the stage that buys those verdicts, and it owns publishedGate again
      // after doing so. Requiring it while merely rendering the adjudication
      // partition made a Step-6 published repair block the only path to its
      // rejudge (frontier 21: thm-discontinuity-set-is-f-sigma).
      // `7-judge` immediately before this stage already proved complete judge
      // coverage and no content-writing stage intervenes. Recomputing all exact
      // context hashes here was the same closure check over the same bytes.
    ],
  },

  // STEP 8 IS PARTITIONED BY GROUP (owner, 2026-08-25).
  //
  // It was one lead Alpha, `units: ['all']`, `concurrency: 1`, one task file
  // that named no mathematics. On a 796-item level in nine categories that is
  // one reader for every rejection in every subject, and the last ones it reads
  // are read with the least attention left. Steps 3 and 6 decided the same
  // question the other way years of runs ago: one Alpha per <=3 batches,
  // assigned by `2-assign` for mathematical relatedness rather than position.
  // Step 8 now uses that same partition, and the same `alphaCohort`.
  //
  // Each group Alpha starts a fresh Step-8 conversation from the durable digest
  // written by its rejection-blind Step-7 reading. This preserves the findings
  // and independence without replaying the reader's full transcript.
  //
  // READ SCOPE IS THE WHOLE LIBRARY, WRITE SCOPE IS THE GROUP. The sandbox is
  // the repository root, so every Alpha can open any published item and any
  // item this run has built — necessary, because a citation objection is
  // adjudicated by reading the cited item, wherever it lives. Repairs stay
  // inside the group's own batches; a defect found in another group's item is
  // recorded in `<run>-step8-cross-group.jsonl` and the `step8-scope` gate
  // fails until the owning group answers it.
  //
  // The pattern also changes, and the old one was wrong. It read
  // `resultPattern('alpha', ...)` while the plan dispatched role
  // `alpha-adjudicate` — introduced 2026-08-24 and never run — so
  // `alpha-adjudicate-step8-lead.result.json` matched nothing and the stage
  // would have re-dispatched a completed adjudication forever.
  {
    id: '8-adjudicate',
    label: 'fatal-only adjudication (group Alphas)',
    units: batches,
    cohort: alphaCohort,
    pattern: resultPattern('alpha-adjudicate', 'step8-[a-z]+'),
    concurrency: 8,
    plan: (ctx, pendingUnits) => alphaGroups(ctx)
      .filter((g: any) => g.covers.some((c: any) => pendingUnits.includes(String(c))))
      .map((g: any) => ({
        role: 'alpha-adjudicate',
        label: `step8-${g.label}`,
        job: 'adjudication',
        covers: g.covers,
        brief: "briefs/alpha.md",
        // The rendered per-group file first. The generic one is the fallback
        // for a repair round firing before `8-scope` has re-rendered, and it
        // tells the reader to look its own label up in the scope file.
        task: [`research/${ctx.run}-alpha-${g.label}-step8.task.md`, `research/${ctx.run}-alpha-step8.task.md`],
        timeout: 21600,
      })),
    gates: (ctx) => [
      // The partition is re-checked here, not only at `8-scope`: the group
      // Alphas are what write the cross-group findings, so the direction that
      // says "the owning group answered it" can only fail after they have run.
      gate('step8-scope', ['node', 'tools/step8-scope.mjs', 'check', '--run', ctx.run], {
        liveness: { pattern: /(\d+) item\(s\) partitioned/.source, min: 1, unit: 'items partitioned' },
      }),
      // Verified against the real tool: it takes a touch ledger, a baseline
      // label and the adjudication ledger — NOT --run. The first version of
      // this file guessed --run from memory and would have failed the stage
      // after burning two agent attempts.
      step8GuardGate(ctx),
      // step8-guard checks one direction only: that every EDIT was licensed by a
      // fatal row. Nothing checked the other direction — that every REJECTION got
      // an outcome — so sixteen rejections on one batch were never read and the
      // stage passed green. This is that direction.
      //
      // A repaired item correctly has no current verdict; `8-rejudge` owns
      // that, hence the allowance. An unadjudicated rejection or an open fatal is
      // this stage's own unfinished work.
      closureGate(ctx, { pendingRejudge: true }),
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
    onGateFailure: async ({ ctx, executor, stage, round, failure }) => {
      const failures = [failure, ...(failure?.advisory ?? [])].filter((entry: any) => entry?.id);
      const guardFailure = failures.find((entry: any) => entry.id === 'step8-guard');
      if (guardFailure) {
        refreshStep8Scope(ctx);
        const guardIds = itemsFromGateFailure(guardFailure);
        const owners = guardIds.length ? step8RepairOwners(ctx, guardIds) : [null];
        for (const g of owners) {
          const envelopeTask = writeStep8RepairEnvelope({
            ctx, stage, round, group: g, mode: 'guard', failures, named: guardIds,
            task: 'briefs/tasks/alpha-step8-guard.md',
          });
          startStep8Group(ctx, executor, stage, {
            label: g ? `step8-guard-${g}-round-${round}` : `step8-guard-review-round-${round}`,
            job: 'adjudication',
            task: [envelopeTask],
            timeout: 7200,
          }, g);
        }
        return;
      }
      // ALERT THE OWNING GROUP (owner, 2026-08-25). "If an Alpha discovers a
      // defect belonging to a different group, it must alert that group's Alpha."
      // The finding is already recorded and the gate already refuses to close
      // over it — but a gate that blocks and dispatches nobody spends a round
      // doing nothing and ends in a blocker for a person, which is not an alert.
      // This is the alert: the engine reads `owning_group` off each unanswered
      // finding and re-dispatches exactly those groups. The raiser never repairs
      // it, so the item is only ever edited by the Alpha holding its conventions.
      if (failure.id === 'step8-scope') {
        refreshStep8Scope(ctx);
        const openAlerts = readOpenAlerts(ctx);
        const targetJudgeIds = [...new Set(openAlerts
          .filter((alert) => alert.needs_judge && !alert.judge_started).map((alert) => alert.item))];
        if (targetJudgeIds.length) {
          executor.start(stage, {
            role: 'tool', label: `alert-target-judge-round-${round}`, job: 'judgement', covers: [], timeout: 43200,
            argv: ['node', 'tools/step8-rejudge-cycle.mjs', '--run', ctx.run,
              '--ledger', `research/${ctx.run}-judge.jsonl`,
              '--adjudications', `research/${ctx.run}-judge-adjudications.jsonl`,
              '--cost', `research/${ctx.run}-judge-cost.jsonl`,
              '--items', targetJudgeIds.join(','), '--kind', 'alert'],
          });
        }
        const owed = openAlerts
          .filter((alert) => !alert.needs_judge || alert.judge_started)
          .map((alert) => String(alert.owning_group)).filter(Boolean);
        for (const g of [...new Set(owed)]) {
          startStep8Group(ctx, executor, stage, {
            label: `cross-group-${g}-round-${round}`,
            job: 'adjudication',
            task: [`research/${ctx.run}-alpha-${g}-step8.task.md`, `research/${ctx.run}-alpha-step8.task.md`],
            timeout: 21600,
          }, g);
        }
        return;
      }
      const closure = readClosure(ctx);
      if (failure.id === 'judge-closure' && (closure?.unadjudicated?.length ?? 0) > 0) {
        refreshStep8Scope(ctx);
        // A group Alpha can miss rejection rows even though its stage result
        // covers its batches. The receipt's exact id/model/context work units
        // scope a recovery Alpha without repeating the completed adjudications.
        // Legacy receipts retain the id summary, from which the task
        // reconstructs the missing exact keys against the two append-only
        // ledgers.
        //
        // Routed back to the OWNING group for the same reason a repair is: an
        // unadjudicated rejection is a decision about that batch's mathematics,
        // and the group Alpha is the reader holding its conventions.
        for (const g of step8Owners(ctx, closure!.unadjudicated)) {
          startStep8Group(ctx, executor, stage, {
            label: g ? `adjudicate-closure-recovery-${g}-${round}` : `adjudicate-closure-recovery-${round}`,
            job: 'adjudication',
            // Candidate resolution takes the FIRST file that exists, so a list
            // that led with the group's ordinary step-8 file would silently
            // discard the reconstruction instructions this round exists for.
            // `8-scope` renders a per-group RECOVERY file — the same derived
            // context with the recovery brief as its body — so the group Alpha
            // gets both. The shared brief is the fallback if that render is
            // stale, and the whole of it when there is no partition.
            task: g
              ? [`research/${ctx.run}-alpha-${g}-step8-recovery.task.md`, 'briefs/tasks/alpha-step8-closure-recovery.md']
              : 'briefs/tasks/alpha-step8-closure-recovery.md',
            timeout: 21600,
          }, g);
        }
        return;
      }
      const ids = closure?.open_fatal ?? [];
      if (!ids.length) return;              // gate failed on something else
      refreshStep8Scope(ctx);
      // A FATAL REPAIR GOES BACK TO THE GROUP THAT OWNS THE ITEM. The item's
      // group Alpha is the one holding that batch's conventions, its seams and
      // its own adjudication of the rejection; sending an open fatal to whoever
      // happens to be free is how a repair gets made against the wrong
      // convention. `<run>-step8-scope.json` carries the item -> group map, and
      // it is stable: which batch owns an item does not change mid-run.
      //
      // The task points at the closure RECEIPT, never at a transcribed id list.
      // Copying a list of findings into a prompt is how eleven of them went
      // missing once already.
      //
      // The old candidate list led with `<run>-alpha-repair.task.md`, which has
      // not been rendered since `run-tasks.mjs` replaced the hand-written task
      // files — `briefs/tasks/` has no `alpha-repair.md`. The reference resolved
      // to nothing and silently fell through to the step-8 file, so it is gone
      // rather than left looking load-bearing.
      for (const g of step8Owners(ctx, ids)) {
        startStep8Group(ctx, executor, stage, {
          // Deliberately not `step8-<label>`: the stage pattern matches those,
          // and a repair must not be mistaken for the adjudication itself.
          label: g ? `repair-8-${g}-round-${round}` : `repair-8-round-${round}`,
          job: 'authoring',
          task: g
            ? [`research/${ctx.run}-alpha-${g}-step8.task.md`, `research/${ctx.run}-alpha-step8.task.md`]
            : [`research/${ctx.run}-alpha-step8.task.md`],
          timeout: 21600,
        }, g);
      }
    },
  },

  // CHECK EVERY LICENSED REPAIR BEFORE BUYING ITS NEW VERDICTS. This is a
  // separate non-judge budget: a stale proof contract, dependency typo or risk
  // receipt can be repaired without consuming another Step-8 judge
  // cycles, and its final text is what the judges then receive.
  {
    id: '8-preflight',
    label: 'verify Step-8 repairs before rejudge',
    units: () => ['all'],
    pattern: resultPattern('tool', 'step8-preflight'),
    concurrency: 1,
    plan: (ctx) => [{
      role: 'tool',
      label: 'step8-preflight',
      job: 'bookkeeping-mechanical',
      covers: ['all'],
      argv: ['node', 'tools/step8-cutover.mjs', 'prepare', '--run', ctx.run,
        '--dispatch-dir', ctx.dispatchDir, '--out', cutoverPath(ctx)],
    }],
    gates: (ctx) => hasHistoricalRejudgeCutover(ctx)
      ? [
          gate('step8-cutover-frozen', ['node', 'tools/step8-cutover.mjs', 'check', '--run', ctx.run,
            '--dispatch-dir', ctx.dispatchDir, '--out', cutoverPath(ctx)]),
          step8GuardGate(ctx),
          ...repoWide(ctx),
          ...contractGates(ctx, { reviewed: true }),
          ledgerGate(ctx),
        ]
      : [
          step8GuardGate(ctx),
          ...repoWide(ctx),
          ...contractGates(ctx, { reviewed: true }),
          ledgerGate(ctx),
          closureGate(ctx, { pendingRejudge: true }),
        ],
    maxFixRounds: 3,
    onGateFailure: async ({ ctx, executor, stage, round, failure }: any) => {
      // `judge-closure` has a mechanical full-sweep repair in Step 7. It is
      // deliberately excluded here: preflight's closure allowance means any
      // remaining failure is an adjudication/repair decision, and buying
      // verdicts before that decision merely makes them stale again.
      const mechanical = await mechanicalRepair({ ctx, failure, excludeGateIds: ['judge-closure'] });
      if (mechanical.outcome === 'outage') return { outage: { reason: mechanical.reason! } };
      const failures = [failure, ...(failure?.advisory ?? [])].filter((entry: any) => entry?.id);
      const needsAgent = failures.some((entry: any) => entry.id === 'judge-closure' || !MECHANICAL_REPAIRS[entry.id]);
      if (mechanical.outcome === 'clean' && !needsAgent) return;
      refreshStep8Scope(ctx);
      const closure = failures.some((entry: any) => entry.id === 'judge-closure') ? readClosure(ctx) : null;
      const routeEvidence = {
        output: `${failures.map((entry: any) => `${entry.output ?? ''}\n${entry.why ?? ''}`).join('\n')}\n${mechanical.stderr ?? ''}`,
        why: '',
      };
      const named = [...new Set([
        ...itemsFromGateFailure(routeEvidence),
        ...(closure?.unadjudicated ?? []),
        ...(closure?.open_fatal ?? []),
      ])];
      // An exact id routes to its owning group. A gate that provides no
      // id gets one focused reviewer, not four whole-group rereads.
      const owners = named.length ? step8RepairOwners(ctx, named) : [null];
      for (const g of owners) {
        const recoveringRejection = (closure?.unadjudicated?.length ?? 0) > 0;
        const baseTask = hasHistoricalRejudgeCutover(ctx)
          ? (g
            ? [`research/${ctx.run}-alpha-${g}-step8-close.task.md`, 'briefs/tasks/alpha-step8-close.md']
            : 'briefs/tasks/alpha-step8-close.md')
          : recoveringRejection
          ? (g
            ? [`research/${ctx.run}-alpha-${g}-step8-recovery.task.md`, 'briefs/tasks/alpha-step8-closure-recovery.md']
            : 'briefs/tasks/alpha-step8-closure-recovery.md')
          : (g
            ? [`research/${ctx.run}-alpha-${g}-step8-preflight.task.md`, 'briefs/tasks/alpha-step8-preflight.md']
            : 'briefs/tasks/alpha-step8-preflight.md');
        const envelopeTask = writeStep8RepairEnvelope({
          ctx, stage, round, group: g, mode: 'preflight', failures,
          mechanicalStderr: mechanical.stderr, named, task: baseTask,
        });
        startStep8Group(ctx, executor, stage, {
          label: g ? `step8-preflight-${g}-${round}` : `step8-preflight-review-${round}`,
          job: 'adjudication',
          task: [envelopeTask],
          timeout: 7200,
        }, g);
      }
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
    // The wrapper performs a paid-lane availability probe before fan-out. A
    // failed probe is a blocker, not a reason for the engine to repeat the same
    // probe automatically before the account or service changes.
    maxAttempts: 1,
    plan: (ctx) => {
      // The closure receipt is computed over the RUN's scope, so a published item
      // repaired at step 8 is not in it — the repair would ship unjudged, which
      // is exactly what the owner's routing rule forbids. `judge-sweep --items`
      // already accepts any authored item on disk (measured 2026-08-02, when an
      // audit rejudge of 13 ids died on two long-published items), so the union
      // needs no new machinery.
      const published = readPublishedClosure(ctx);
      const ids = [...new Set([...(readClosure(ctx)?.needs_rejudge ?? []),
        ...(published ? published.needs_rejudge : readPublishedRepairs(ctx))])];
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
          ? ['node', 'tools/step8-rejudge-cycle.mjs', '--run', ctx.run,
            '--ledger', `research/${ctx.run}-judge.jsonl`,
            '--adjudications', `research/${ctx.run}-judge-adjudications.jsonl`,
            '--cost', `research/${ctx.run}-judge-cost.jsonl`,
            '--items', ids.join(','), '--kind', 'initial']
          : ['node', '-e', 'console.log("rejudge: nothing repaired since the sweep")'],
      }];
    },
    // No allowances. Every item has a current pair, every current rejection has
    // an outcome, and no outcome is fatal — or this stage is not finished.
    // This stage owns judge closure and ONLY judge closure. Non-judge repair
    // integrity has its own preflight/close stages and its own budget, so a
    // proof-contract row can never trigger or consume a judge round.
    gates: (ctx) => [
      step8GuardGate(ctx),
      // The terminal check on the published route: this stage is where the
      // repaired published items were actually swept, so this is where "the
      // configured judge returned a current verdict" is a statement about work that has
      // happened rather than work that was planned.
      publishedGate(ctx),
      terminalResolutionGate(ctx),
      closureGate(ctx),
    ],
    // A rejudge can surface a NEW rejection on repaired text, which needs
    // adjudicating and possibly repairing again. Two distinct frozen contexts
    // per item are the lifetime ceiling: after the second fatal repair, one
    // independent FA per owning group records exact-hash terminal closure;
    // other exhaustion remains an explicit owner/session blocker. Neither path
    // can buy a third judge cycle.
    // The two-context ceiling is PER ITEM and is enforced durably by
    // step8-rejudge-cycle.mjs before it probes or spends a judge call.  Keep
    // this stage's two-round convergence budget re-armable after a supervising
    // intervention: one set of exhausted items can otherwise consume the
    // stage-wide counter and strand different items that still have an unused
    // legal cycle (frontier-19).  Re-arming the stage cannot buy a third
    // context for any item because the cycle receipt remains authoritative.
    // Three engine repair passes implement two mathematical cycles plus the
    // independent close: (1) adjudicate the second judge rejection, (2) let the
    // owning group Alpha make its second fatal repair, (3) send the exhausted
    // repaired item to one fresh Sol-max FA for that group. The durable cycle
    // receipt still forbids a third judge call.
    maxFixRounds: 3,
    onGateFailure: async ({ ctx, executor, stage, round, failure, prevRoundAt = null }) => {
      const closure = readClosure(ctx);
      const published = readPublishedClosure(ctx);
      if (!closure && !published) return;
      const failures = [failure, ...(failure?.advisory ?? [])].filter((entry: any) => entry?.id);

      // Decide every rejection already on disk before buying another verdict.
      // Frontier-18 had current unadjudicated rows and repaired items together;
      // the old order swept first, then adjudicated those pre-existing rows,
      // spending a judge pass that could not help close them.
      const runContested = [...new Set([...(closure?.unadjudicated ?? []), ...(closure?.open_fatal ?? [])])];
      const publishedContested = [...new Set([...(published?.unadjudicated ?? []), ...(published?.open_fatal ?? [])])];
      const contested = [...new Set([...runContested, ...publishedContested])];
      if (contested.length) {
        // A second confirmed-fatal context is no longer an immediate owner
        // blocker. The owning group Alpha performs the second repair first;
        // only the resulting exhausted `needs_rejudge` text is independent-FA
        // material. This preserves judge -> adjudication -> repair as a full
        // second cycle instead of stopping between adjudication and repair.
        const liveContested = contested;
        refreshStep8Scope(ctx);
        const liveRunContested = runContested.filter((id) => liveContested.includes(id));
        const livePublishedContested = publishedContested.filter((id) => liveContested.includes(id));
        const owners = [...new Set([
          ...(liveRunContested.length ? step8Owners(ctx, liveRunContested) : []),
          ...publishedRepairOwners(ctx, livePublishedContested),
        ])];
        for (const g of owners) {
          // A published rejection is outside the rendered run partition, so
          // the group's static Step-8 task cannot name it.  Frontier 21 routed
          // the Baire rejection to its correct owner but gave that owner a task
          // saying it had no open rejection, and two repair rounds did no work.
          // Materialise the same exact run/published tuple envelope used by the
          // other Step-8 repair stages so the dispatch has both evidence and
          // explicit authority for precisely its assigned contested rows.
          const baseTask = g
            ? (((closure?.unadjudicated?.length ?? 0) > 0 && runContested.some((id) => (closure?.unadjudicated ?? []).includes(id)))
              ? [`research/${ctx.run}-alpha-${g}-step8-recovery.task.md`, `research/${ctx.run}-alpha-${g}-step8.task.md`]
              : [`research/${ctx.run}-alpha-${g}-step8.task.md`, `research/${ctx.run}-alpha-step8.task.md`])
            : [`research/${ctx.run}-alpha-step8.task.md`];
          const envelopeTask = writeStep8RepairEnvelope({
            ctx, stage, round, group: g, mode: 'rejudge-adjudication', failures,
            named: liveContested, task: baseTask,
          });
          startStep8Group(ctx, executor, stage, {
            label: g ? `adjudicate-rejudge-${g}-round-${round}` : `adjudicate-rejudge-round-${round}`,
            job: 'adjudication',
            task: [envelopeTask],
            timeout: 21600,
          }, g);
        }
        return;
      }

      // With all existing decisions closed, items with no current pair need
      // JUDGING. The same union includes published repairs outside run scope.
      // The same union the stage's own plan takes, and for the same reason: a
      // published item repaired during THIS repair loop is outside the run's
      // scope, so the closure receipt will never name it, and the lane that must
      // certify it is the one being dispatched right here.
      const owed = [...new Set([...(closure?.needs_rejudge ?? []), ...(published?.needs_rejudge ?? [])])];
      if (owed.length) {
        // A repair makes the condemning verdict stale, so exhausted items appear
        // in `needs_rejudge` rather than `open_fatal`.  Do not pass them to the
        // wrapper as part of a mixed batch: it correctly rejects the whole
        // argv before spending, which used to strand unrelated eligible items.
        // Name each exhausted item as the intervention blocker and continue
        // only with ids whose durable per-item budget remains.
        const cycleCounts = rejudgeCycleCounts(ctx);
        const exhausted = owed.filter((id) => (cycleCounts.get(id) ?? 0) >= 2);
        const fatalCounts = fatalAdjudicationCounts(ctx);
        const faCandidates = exhausted.filter((id) => (fatalCounts.get(id) ?? 0) >= 2);
        const unresolvedWithoutTwoFatalRepairs = exhausted.filter((id) => !faCandidates.includes(id));
        // FA review is deliberately isolated from any funded judge fan-out.
        // It may independently edit an item, so running it alongside a sweep
        // could stale a sibling's pair context mid-call. Drain these queues,
        // then let the next battery handle still-eligible owed items.
        if (faCandidates.length) {
          startFinalAdjudicators(ctx, executor, stage, round, faCandidates);
          return;
        }
        for (const id of unresolvedWithoutTwoFatalRepairs) {
          const message = `${id}: current repaired text still needs closure after two Step-8 frozen contexts; intervention is required and no third judge cycle is permitted`;
          if (executor.state?.addBlocker?.(stage.id, message, `step8-two-cycle-owed:${id}`))
            executor.reporter?.notify?.('blocked', message, { stage: stage.id, item: id });
        }
        const liveOwed = owed.filter((id) => !exhausted.includes(id));
        if (!liveOwed.length) return;
        // The rejudge sweep runs as an ASYNC dispatch, so its outage shows up
        // one round late: if everything the PREVIOUS round's sweep produced was
        // outage-signature nulls, the lane is down — report it rather than
        // re-dispatch into it, and the executor refunds this round and waits.
        const reason = prevRoundAt ? judgeOutageSince(ctx, prevRoundAt) : null;
        if (reason) return { outage: { reason } };
        executor.start(stage, {
          role: 'tool',
          label: `rejudge-round-${round}`,
          job: 'judgement',
          covers: [],                       // declares no coverage: this is extra work, not the stage's unit
          timeout: 43200,
          argv: ['node', 'tools/step8-rejudge-cycle.mjs', '--run', ctx.run,
            '--ledger', `research/${ctx.run}-judge.jsonl`,
            '--adjudications', `research/${ctx.run}-judge-adjudications.jsonl`,
            '--cost', `research/${ctx.run}-judge-cost.jsonl`,
            '--items', liveOwed.join(','), '--kind', 'repair'],
        });
        return;
      }

      // No contested rows and no missing verdicts: a non-closure failure belongs
      // to 8-preflight/8-close and may not consume this terminal judge budget.
    },
  },

  // FINAL NON-JUDGE STEP-8 INTEGRITY. Full repository, contract and
  // defect-ledger checks run once on the final live state. The Alpha audit
  // receipt does not exist until 9-receipt, so full `level-coverage` cannot
  // honestly run here; `8-final` below closes exact judge currency instead.
  // Repair rounds here may update receipts or contracts only. The task makes
  // an item edit a visible blocker because the two-cycle judge stage is
  // already closed.
  {
    id: '8-close',
    label: 'final Step-8 integrity closure',
    units: () => ['all'],
    pattern: resultPattern('tool', 'step8-close-scope'),
    artifacts: (ctx) => `research/${ctx.run}-step8-scope.json`,
    concurrency: 1,
    plan: (ctx) => [{
      role: 'tool', label: 'step8-close-scope', job: 'bookkeeping-mechanical', covers: ['all'],
      argv: hasHistoricalRejudgeCutover(ctx)
        ? ['node', '-e', 'console.log("step8 close: frozen cutover already ran the final integrity battery")']
        : ['node', 'tools/step8-scope.mjs', 'render', '--run', ctx.run],
    }],
    gates: (ctx) => hasHistoricalRejudgeCutover(ctx)
      ? [gate('step8-cutover-frozen', ['node', 'tools/step8-cutover.mjs', 'check', '--run', ctx.run,
          '--dispatch-dir', ctx.dispatchDir, '--out', cutoverPath(ctx)])]
      : [
          step8GuardGate(ctx),
          publishedGate(ctx),
          terminalResolutionGate(ctx),
          ...repoWide(ctx),
          ...contractGates(ctx, { reviewed: true }),
          ledgerGate(ctx),
        ],
    maxFixRounds: 3,
    onGateFailure: async ({ ctx, executor, stage, round, failure }: any) => {
      const mechanical = await mechanicalRepair({ ctx, failure });
      if (mechanical.outcome === 'outage') return { outage: { reason: mechanical.reason! } };
      const failures = [failure, ...(failure?.advisory ?? [])].filter((entry: any) => entry?.id);
      const needsAgent = failures.some((entry: any) => !MECHANICAL_REPAIRS[entry.id]);
      if (mechanical.outcome === 'clean' && !needsAgent) return;
      refreshStep8Scope(ctx);
      const named = itemsFromGateFailure({
        output: `${failures.map((entry: any) => `${entry.output ?? ''}\n${entry.why ?? ''}`).join('\n')}\n${mechanical.stderr ?? ''}`,
        why: '',
      });
      // Final closure never turns an unscoped detector message into four
      // duplicated whole-group reviews. One focused reviewer diagnoses the
      // residue; exact item failures still go to their owning conversation.
      const owners = named.length ? step8RepairOwners(ctx, named) : [null];
      for (const g of owners) {
        const baseTask = g
          ? [`research/${ctx.run}-alpha-${g}-step8-close.task.md`, 'briefs/tasks/alpha-step8-close.md']
          : 'briefs/tasks/alpha-step8-close.md';
        const envelopeTask = writeStep8RepairEnvelope({
          ctx, stage, round, group: g, mode: 'close', failures,
          mechanicalStderr: mechanical.stderr, named, task: baseTask,
        });
        startStep8Group(ctx, executor, stage, {
          label: g ? `step8-close-${g}-${round}` : `step8-close-review-${round}`,
          job: 'adjudication',
          task: [envelopeTask],
          timeout: 7200,
        }, g);
      }
    },
  },

  // HARD MATHEMATICAL CLOSE. Integrity repair is now drained; recompute exact
  // judge currency once against those final bytes. There is deliberately no
  // repair hook and no round budget here. A failure means a post-budget item
  // edit, missing verdict, unadjudicated rejection or open fatal, each of which
  // requires the supervising session/owner under the terminal-resolution rule
  // rather than an implicit third judge cycle.
  {
    id: '8-final',
    label: 'final Step-8 mathematical currency',
    units: () => ['all'],
    pattern: resultPattern('tool', 'step8-final-currency'),
    concurrency: 1,
    plan: () => [{
      role: 'tool', label: 'step8-final-currency', job: 'bookkeeping-mechanical', covers: ['all'],
      argv: ['node', '-e', 'console.log("step8 final currency boundary")'],
    }],
    gates: (ctx) => [
      step8GuardGate(ctx),
      publishedGate(ctx),
      terminalResolutionGate(ctx),
      closureGate(ctx),
    ],
  },

  {
    id: '8-freeze',
    label: 'freeze the closed Step-8 item state',
    units: () => ['all'],
    pattern: resultPattern('tool', 'snap-after-step8-close'),
    artifacts: (ctx) => touchesPath(ctx),
    concurrency: 1,
    plan: (ctx) => [{
      role: 'tool', label: 'snap-after-step8-close', job: 'bookkeeping-mechanical', covers: ['all'],
      argv: ['node', 'tools/touchlog.mjs', 'snap', touchesPath(ctx), 'post-step8'],
    }],
    gatesWaived: 'The preceding 8-final stage validated exact mathematical currency and this immediately following '
      + 'mechanical snapshot freezes that exact item state for Step 9; its artifact existence is required.',
  },

  {
    id: '9-scope',
    label: 'scope-denial delta review',
    units: () => ['all'],
    artifacts: step9ScopeReviewPath,
    pattern: resultPattern('(?:alpha|tool)', 'step9-[a-z-]+'),
    concurrency: 1,
    // Step 3 stores one hash-bound decision per decline. Capture the delta
    // before refreshing those receipts: old runs therefore review everything,
    // while future runs spend Alpha time only where the row, page closure, or
    // destination changed. Preparation and review are separate polls so the
    // Alpha can never race the files that define its scope.
    plan: (ctx, pending) => {
      if (!pending.length) return [];
      if (!step9ScopePrepared(ctx)) return [{
        role: 'tool', label: 'step9-scope-prepare', job: 'bookkeeping-mechanical', covers: [],
        argv: ['node', 'tools/scope-decisions.mjs', 'prepare', '--run', ctx.run,
          '--out', step9ScopeDeltaPath(ctx)],
      }];
      return [{
        role: 'alpha', label: 'step9-lead', job: 'audit', covers: ['all'], brief: "briefs/alpha.md",
        task: `research/${ctx.run}-alpha-step9.task.md`, timeout: 14400,
      }];
    },
    gates: (ctx) => [scopeDecisionsGate(ctx), ...repoWide(ctx), ...contractGates(ctx, { reviewed: true }),
      closureGate(ctx, { pendingRejudge: true }), ledgerGate(ctx)],
  },

  {
    id: '9-scope-render',
    label: 'render the closed scope-denial register',
    units: () => ['all'],
    artifacts: step9ScopeRegisterPath,
    pattern: resultPattern('tool', 'step9-scope-render'),
    concurrency: 1,
    plan: (ctx) => [{
      role: 'tool', label: 'step9-scope-render', job: 'bookkeeping-mechanical', covers: ['all'],
      argv: ['node', 'tools/scope-decisions.mjs', 'render', '--run', ctx.run,
        '--out', step9ScopeRegisterPath(ctx)],
    }],
    gates: (ctx) => [scopeDecisionsGate(ctx)],
  },

  {
    id: '9-scope-freeze',
    label: 'freeze the reviewed Step-9 scope state',
    units: () => ['all'],
    pattern: resultPattern('tool', 'step9-scope-freeze'),
    concurrency: 1,
    plan: (ctx) => [{
      role: 'tool', label: 'step9-scope-freeze', job: 'bookkeeping-mechanical', covers: ['all'],
      argv: ['node', 'tools/touchlog.mjs', 'snap', touchesPath(ctx), 'post-step9-scope'],
    }],
    gatesWaived: 'The preceding scope review and render stages are closed; this successful mechanical snapshot is the change boundary used by later impact checks.',
  },

  // EVERY STEP-9 MATHEMATICAL CHANGE RE-ENTERS CERTIFICATION.  The guarded hash
  // delta includes both newly created items and edits to existing items.  Judge
  // currency makes the latter just as important: a pass belongs to one frozen
  // text, not to an id forever.  Only the exact changed set is swept.
  {
    id: '9-changes-judge',
    label: 'certify Step 9 mathematical changes',
    units: () => ['all'],
    artifacts: (ctx) => [step9ChangesPath(ctx), step9ChangesScopePath(ctx)],
    pattern: resultPattern('tool', 'step9-changes-index|step9-changes-judge'),
    concurrency: 1,
    plan: (ctx) => {
      const ids = step9ChangesOnDisk(ctx);
      return [{
        role: 'tool',
        label: 'step9-changes-index',
        job: 'bookkeeping-mechanical',
        covers: [],
        argv: ['node', ...step9ChangesRefreshArgv(ctx)],
      }, {
        role: 'tool',
        label: 'step9-changes-judge',
        job: 'judgement',
        covers: ['all'],
        timeout: 43200,
        argv: ids.length
          ? ['node', 'tools/judge-sweep.mjs', '--ledger', `research/${ctx.run}-judge.jsonl`,
            '--cost', `research/${ctx.run}-judge-cost.jsonl`, '--items', ids.join(',')]
          : ['node', '-e', 'console.log("step9 changes: nothing to judge")'],
      }];
    },
    gates: (ctx) => [step9ChangesGate(ctx), ...repoWide(ctx),
      ...contractGates(ctx, { reviewed: true }), step9ClosureGate(ctx), closureGate(ctx), ledgerGate(ctx)],
    maxFixRounds: 3,
    onGateFailure: async ({ ctx, executor, stage, round, prevRoundAt, failure }: any) => {
      const failures = [failure, ...(failure?.advisory ?? [])].filter((entry: any) => entry?.id);
      const closureFailure = failures.find((entry: any) => entry.id === 'judge-closure' || entry.id === 'step9-judge-closure');
      if (closureFailure) {
        const closure = closureFailure.id === 'step9-judge-closure' ? readStep9Closure(ctx) : readClosure(ctx);
        const needsJudge = closure?.needs_rejudge ?? [];
        if (needsJudge.length) {
          const reason = prevRoundAt ? judgeOutageSince(ctx, prevRoundAt) : null;
          if (reason) return { outage: { reason } };
          executor.start(stage, {
            role: 'tool', label: `step9-changes-rejudge-${round}`, job: 'judgement', covers: [], timeout: 43200,
            argv: ['node', 'tools/judge-sweep.mjs', '--ledger', `research/${ctx.run}-judge.jsonl`,
              '--cost', `research/${ctx.run}-judge-cost.jsonl`, '--items', needsJudge.join(',')],
          });
          return;
        }
        const contested = [...new Set([...(closure?.unadjudicated ?? []), ...(closure?.open_fatal ?? [])])];
        const changed = new Set(readStep9Changes(ctx));
        const local = contested.filter((id) => changed.has(id));
        if (local.length) {
          executor.start(stage, {
            role: 'alpha', label: `step9-changes-adjudicate-${round}`, job: 'adjudication', covers: [],
            brief: 'briefs/alpha.md', task: `research/${ctx.run}-alpha-step9-adjudicate.task.md`, timeout: 21600,
          });
        }
        const carried = contested.filter((id) => !changed.has(id));
        for (const g of step8Owners(ctx, carried)) if (carried.length) {
          executor.start(stage, {
            role: 'alpha', label: g ? `step9-carried-adjudicate-${g}-${round}` : `step9-carried-adjudicate-${round}`,
            job: 'adjudication', covers: [], brief: 'briefs/alpha.md',
            task: g
              ? [`research/${ctx.run}-alpha-${g}-step8-recovery.task.md`, 'briefs/tasks/alpha-step8-closure-recovery.md']
              : 'briefs/tasks/alpha-step8-closure-recovery.md', timeout: 21600,
          });
        }
        if (local.length || carried.length) return;
      }

      const mechanical = await mechanicalRepair({ ctx, failure, excludeGateIds: ['judge-closure'] });
      if (mechanical.outcome === 'outage') return { outage: { reason: mechanical.reason! } };
      // A closure failure with concrete stale/contested work returned through
      // its narrow route above. Any other closure failure is still an
      // unhandled nonmechanical finding and belongs in the general envelope.
      const unhandled = failures.filter((entry: any) => !MECHANICAL_REPAIRS[entry.id]);
      // A residual mechanical repair still needs judgment. A clean mechanical
      // advisory must not hide an unrelated unhandled primary (or vice versa).
      const routed = mechanical.outcome === 'residual'
        ? failures
        : unhandled;
      if (!routed.length) return;
      const envelopeTask = writeStep9GateEnvelope({
        ctx, stage, round, failures: routed, mechanicalStderr: mechanical.stderr,
      });
      executor.start(stage, {
        role: 'alpha', label: `step9-gate-adjudication-${round}`, job: 'adjudication', covers: [],
        brief: 'briefs/alpha.md', task: [envelopeTask], timeout: 21600,
      });
    },
  },

  // Finish all mechanically discoverable run repairs before the final Step-9
  // stamp and receipts.  An impact repair may change item mathematics; the
  // change receipt is therefore refreshed and the exact stale pair follows the
  // same narrow recovery path before this stage can close.
  {
    id: '9-close',
    label: 'mechanical run closers',
    units: () => ['all'],
    pattern: resultPattern('tool', 'close-splice'),
    concurrency: 1,
    plan: (ctx) => [{ role: 'tool', label: 'close-splice', job: 'bookkeeping-mechanical', covers: ['all'], timeout: 600,
      argv: ['node', 'tools/splice-plan.mjs', '--run', ctx.run, '--all', '--fail-on-refusal'] }],
    gates: (ctx) => [
      gate('splice-verify', ['node', 'tools/splice-plan.mjs', '--run', ctx.run, '--verify']),
      gate('impact-receipt', ['node', 'tools/impact-audit.mjs',
        '--touches', touchesPath(ctx), '--from', 'pre-author', '--to', latestSnapshotLabel(ctx),
        '--receipt', `research/${ctx.run}-impact.json`]),
      step9ChangesGate(ctx), step9ClosureGate(ctx), closureGate(ctx),
    ],
    maxFixRounds: 3,
    onGateFailure: async ({ ctx, executor, stage, round, prevRoundAt, failure }: any) => {
      if (failure.id === 'impact-receipt') {
        await mechanicalRepair({ ctx, failure, excludeGateIds: ['judge-closure'] });
        let pending = 0;
        try {
          const receipt = JSON.parse(readFileSync(R(ctx, `research/${ctx.run}-impact.json`), 'utf8'));
          pending = (receipt.dispositions ?? []).filter((row: any) => !row?.status || row.status === 'pending').length;
        } catch { pending = 1; }
        if (pending) {
          executor.start(stage, {
            role: 'alpha', label: `impact-close-${round}`, job: 'adjudication', covers: [], brief: 'briefs/alpha.md',
            task: 'briefs/tasks/alpha-impact-close.md', timeout: 7200,
          });
          executor.start(stage, {
            role: 'tool', label: `impact-close-snapshot-${round}`, job: 'bookkeeping-mechanical', covers: [],
            timeout: 7200,
            argv: ['node', 'tools/touchlog-after-result.mjs',
              '--result', join(ctx.dispatchDir, `alpha-impact-close-${round}.result.json`),
              '--touches', touchesPath(ctx), '--label', `post-step9-impact-round-${round}`],
          });
        }
        return;
      }
      if (failure.id === 'step9-changes') {
        executor.start(stage, {
          role: 'tool', label: `step9-changes-refresh-${round}`, job: 'bookkeeping-mechanical', covers: [],
          argv: ['node', ...step9ChangesRefreshArgv(ctx)],
        });
        return;
      }
      if (failure.id === 'judge-closure' || failure.id === 'step9-judge-closure') {
        const closure = failure.id === 'step9-judge-closure' ? readStep9Closure(ctx) : readClosure(ctx);
        const needsJudge = closure?.needs_rejudge ?? [];
        if (needsJudge.length) {
          const reason = prevRoundAt ? judgeOutageSince(ctx, prevRoundAt) : null;
          if (reason) return { outage: { reason } };
          executor.start(stage, {
            role: 'tool', label: `step9-close-rejudge-${round}`, job: 'judgement', covers: [], timeout: 43200,
            argv: ['node', 'tools/judge-sweep.mjs', '--ledger', `research/${ctx.run}-judge.jsonl`,
              '--cost', `research/${ctx.run}-judge-cost.jsonl`, '--items', needsJudge.join(',')],
          });
          return;
        }
        const contested = [...new Set([...(closure?.unadjudicated ?? []), ...(closure?.open_fatal ?? [])])];
        const changed = new Set(readStep9Changes(ctx));
        const local = contested.filter((id) => changed.has(id));
        if (local.length) executor.start(stage, {
          role: 'alpha', label: `step9-close-adjudicate-${round}`, job: 'adjudication', covers: [],
          brief: 'briefs/alpha.md', task: `research/${ctx.run}-alpha-step9-adjudicate.task.md`, timeout: 21600,
        });
        const carried = contested.filter((id) => !changed.has(id));
        for (const g of step8Owners(ctx, carried)) if (carried.length) executor.start(stage, {
          role: 'alpha', label: g ? `step9-close-carried-${g}-${round}` : `step9-close-carried-${round}`,
          job: 'adjudication', covers: [], brief: 'briefs/alpha.md',
          task: g
            ? [`research/${ctx.run}-alpha-${g}-step8-recovery.task.md`, 'briefs/tasks/alpha-step8-closure-recovery.md']
            : 'briefs/tasks/alpha-step8-closure-recovery.md', timeout: 21600,
        });
        return;
      }
      const repair = await mechanicalRepair({ ctx, failure, excludeGateIds: ['judge-closure'] });
      if (repair.outcome === 'outage') return { outage: { reason: repair.reason! } };
    },
  },

  // Stamp only after every Step-9 closer has finished changing mathematics.
  // The stamp itself is excluded from guarded hashes, so it cannot make its own
  // judge verdict stale.
  {
    id: '9-changes-stamp',
    label: 'stamp certified Step 9 changes',
    units: () => ['all'],
    pattern: resultPattern('tool', 'step9-changes-stamp'),
    concurrency: 1,
    plan: (ctx) => {
      const ids = readStep9Changes(ctx);
      return [{ role: 'tool', label: 'step9-changes-stamp', job: 'bookkeeping-mechanical', covers: ['all'],
        argv: ids.length
          ? ['node', 'tools/apply-judge-stamps.mjs', '--ledger', `research/${ctx.run}-judge.jsonl`,
            '--items', ids.join(','), '--terminal-resolutions', terminalResolutionsPath(ctx),
            '--apply', '--report', `research/${ctx.run}-step9-judge-stamps.json`]
          : ['node', '-e', 'console.log("step9 changes: nothing to stamp")'] }];
    },
    gates: (ctx) => {
      const ids = readStep9Changes(ctx);
      return [step9ChangesGate(ctx), step9ClosureGate(ctx), closureGate(ctx),
        ...(ids.length ? [gate('judge-stamps', ['node', 'tools/apply-judge-stamps.mjs',
          '--ledger', `research/${ctx.run}-judge.jsonl`, '--items', ids.join(','),
          '--terminal-resolutions', terminalResolutionsPath(ctx), '--verify'])] : [])];
    },
  },

  // Whole-level receipts are deliberately last in Step 9.  They are cognitive
  // attestations and lapse on later mathematical edits, so producing them
  // before the impact closer or final Step-9 stamp caused guaranteed rework.
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
      brief: 'briefs/alpha.md',
      task: [`research/${ctx.run}-alpha-receipts.task.md`, `research/${ctx.run}-alpha-step9.task.md`],
      timeout: 14400,
    }],
    gates: (ctx) => [levelCoverageGate(ctx)],
    maxFixRounds: 2,
    onGateFailure: async ({ ctx, executor, stage, round }) => {
      executor.start(stage, {
        role: 'alpha', label: `receipts-fix-${round}`, job: 'audit', covers: [], brief: 'briefs/alpha.md',
        task: [`research/${ctx.run}-alpha-receipts.task.md`, `research/${ctx.run}-alpha-step9.task.md`], timeout: 14400,
      });
    },
  },

  {
    id: '10-contract-close',
    label: 'terminal contract and defect-ledger closure',
    units: () => ['all'],
    artifacts: () => 'research/DEFECT-LEDGER.md',
    pattern: resultPattern('tool', 'step10-contract-close-v2'),
    concurrency: 1,
    plan: () => [{
      role: 'tool',
      label: 'step10-contract-close-v2',
      job: 'bookkeeping-mechanical',
      covers: ['all'],
      argv: ['node', 'tools/defect-ledger.mjs', 'render'],
    }],
    // This is an early terminal-ledger closer, not yet a final-text check:
    // pathway placement, pathway prose, and stamps still follow.  Re-running
    // repo-wide and level coverage here used a full pass on a tree later stages
    // could immediately supersede.  `10-readiness-v2` owns the first full
    // final-text validation, and the read-only report integrity receipt lets
    // `10-close-v2` safely reuse it on an unchanged protected tree.
    gates: (ctx) => [closureGate(ctx), ledgerGate(ctx, { terminal: true })],
    // THE CONTRACT-REWORK LOOP (owner directive, 2026-08-17). `--no-open`
    // red on a contract-quality row with an owning batch — the rr-005 shape —
    // used to be a dead end: its recorded remedy is "the owning Beta rewrites
    // the worksheets with its sources to hand", and no stage after authoring
    // could dispatch a Beta. Round shape: rework by the OWNING Beta (contract
    // files only, never item text — contracts are not judged, so no verdict
    // is voided), then an Alpha certification that samples the rewritten rows
    // and closes the ledger row in place; the gate re-verifies. A rework
    // blocked by a lane quota is an OUTAGE with the obligation row's clock,
    // not a burnt round — the engine re-fires it when the lane recovers.
    maxFixRounds: 4,
    onGateFailure: async ({ ctx, executor, stage, round, failure }: any) => {
      if (failure.id !== 'defect-ledger') return;
      const rows = openContractRows(ctx);
      if (!rows.length) return;
      const blocked = blockedObligation(ctx, 'contract-rework');
      if (blocked) return { outage: { reason: blocked.reason, retryAfterMs: blocked.retryAfterMs } };
      const batchesOwed = [...new Set(rows.map((r) => String(r.batch)))];
      const dispatchDir = ctx.dispatchDir ?? join(ctx.repo, 'research', `${ctx.run}-dispatch`);
      const versions = new Map(batchesOwed.map((b) => [b,
        contractReworkVersion(rows.filter((row) => String(row.batch) === b))]));
      const reworkDone = (b: string) => readdirSync(dispatchDir).some((f: string) => {
        if (!f.includes('contract-rework') || !f.includes(`-b${b}-${versions.get(b)}`)
          || !f.endsWith('.result.json')) return false;
        try {
          const result = JSON.parse(readFileSync(join(dispatchDir, f), 'utf8'));
          return result.ok === true && result.run === ctx.run
            && String(result.label ?? '').endsWith(`-b${b}-${versions.get(b)}`)
            && Array.isArray(result.covers) && result.covers.map(String).includes(b);
        } catch { return false; }
      });
      const pendingRework = batchesOwed.filter((b) => {
        try { return !reworkDone(b); } catch { return true; }
      });
      if (pendingRework.length) {
        // The chartered lane is the owning Beta; an obligation row's
        // `dispatch` overrides it when the owner substituted a model (the
        // substitution then lives in the run's artifacts, on the record).
        const override = obligationDispatch(ctx, 'contract-rework');
        for (const b of pendingRework) {
          executor.start(stage, {
            role: 'beta',
            job: 'authoring',
            brief: 'briefs/authoring.md',
            task: [`research/${ctx.run}-beta-contract-rework.task.md`],
            timeout: 14400,
            ...(override ?? {}),
            // The batch is both prompt identity (`<i>`) and evidence identity.
            // An obligation override may substitute a lane, never the work unit.
            covers: [b],
            label: `contract-rework-${round}-b${b}-${versions.get(b)}`,
          });
        }
        return;
      }
      // Every owed batch has a rework result: certify. The certifying Alpha
      // samples the rewritten rows against the items and closes (or keeps
      // open, with why) the ledger row IN PLACE — no author certifies its
      // own repair.
      executor.start(stage, {
        role: 'alpha',
        label: `certify-rework-${round}`,
        job: 'adjudication',
        covers: [],
        brief: 'briefs/alpha.md',
        task: [`research/${ctx.run}-alpha-rework-certify.task.md`],
        timeout: 7200,
      });
    },
  },

  // Step 10 is intentionally serial. Frontier 16's old report stage launched
  // snapshot, pathway mutation and report writing together; the report could
  // therefore read state that had not happened yet. Each transition below owns
  // one durable artifact and the next stage cannot start without it.
  {
    id: '10-snapshot-v2', label: 'post-step9 touch snapshot', units: () => ['all'],
    pattern: resultPattern('tool', 'snap-post-step9-v2'), concurrency: 1,
    plan: (ctx) => [{ role: 'tool', label: 'snap-post-step9-v2', job: 'bookkeeping-mechanical',
      covers: ['all'], argv: ['node', 'tools/touchlog.mjs', 'snap', touchesPath(ctx), 'post-step9-v2'] }],
    gatesWaived: 'This is the immutable endpoint used by later touch audits; successful execution is its receipt.',
  },
  {
    id: '10-pathway-sync-v2', label: 'mechanical pathway placement', units: () => ['all'],
    artifacts: (ctx) => `research/${ctx.run}-pathway.json`,
    pattern: resultPattern('tool', 'pathway-sync-v2'), concurrency: 1,
    plan: (ctx) => [{ role: 'tool', label: 'pathway-sync-v2', job: 'bookkeeping-mechanical',
      covers: ['all'], argv: ['node', 'tools/pathway-sync.mjs', '--run', ctx.run] }],
    gates: (ctx) => [gate('pathcheck', ['node', 'tools/pathcheck.mjs']), closureGate(ctx)],
  },
  {
    id: '10-pathway-seed-v2', label: 'pathway prose obligations', units: () => ['all'],
    artifacts: (ctx) => `research/${ctx.run}-pathway-closure.json`,
    pattern: resultPattern('tool', 'pathway-seed-v2'), concurrency: 1,
    plan: (ctx) => [{ role: 'tool', label: 'pathway-seed-v2', job: 'bookkeeping-mechanical',
      covers: ['all'], argv: ['node', 'tools/pathway-closure.mjs', 'seed', '--run', ctx.run] }],
    gatesWaived: 'The seed deliberately contains pending cognitive prose obligations; the next stage is their hard gate.',
  },
  {
    id: '10-pathway-author-v2', label: 'Lead Alpha pathway rewrite', units: () => ['all'],
    artifacts: (ctx) => `research/${ctx.run}-pathway-closure.json`,
    // Role `alpha-high` since 2026-08-24; the pattern still said `alpha`. No run
    // has reached step 10 under the new lane, so there is no legacy result to
    // keep matching and the correct single spelling is enough.
    pattern: resultPattern('alpha-high', 'pathway-close-v2'), concurrency: 1,
    plan: (ctx) => [{ role: 'alpha-high', label: 'pathway-close-v2', job: 'authoring', covers: ['all'],
      brief: 'briefs/alpha.md',
      task: [`research/${ctx.run}-alpha-pathway.task.md`, 'briefs/tasks/alpha-pathway.md'], timeout: 10800 }],
    gates: (ctx) => [
      gate('pathway-closure', ['node', 'tools/pathway-closure.mjs', 'check', '--run', ctx.run]),
      gate('pathcheck', ['node', 'tools/pathcheck.mjs']), gate('prosecheck', ['node', 'tools/prosecheck.mjs']), closureGate(ctx),
    ],
  },
  {
    id: '10-stamps-v2', label: 'final judge stamps', units: () => ['all'],
    artifacts: (ctx) => `research/${ctx.run}-judge-stamps.json`,
    pattern: resultPattern('tool', 'judge-stamps-v2'), concurrency: 1,
    plan: (ctx) => [{ role: 'tool', label: 'judge-stamps-v2', job: 'bookkeeping-mechanical', covers: ['all'],
      argv: ['node', 'tools/apply-judge-stamps.mjs', '--ledger', `research/${ctx.run}-judge.jsonl`,
        '--manifests', batches(ctx).map((b: any) => `research/${ctx.run}-batch-${b}.pages.json`).join(','),
        '--terminal-resolutions', terminalResolutionsPath(ctx),
        '--apply', '--report', `research/${ctx.run}-judge-stamps.json`] }],
    gates: (ctx) => [gate('judge-stamps', ['node', 'tools/apply-judge-stamps.mjs', '--ledger', `research/${ctx.run}-judge.jsonl`,
      '--manifests', batches(ctx).map((b: any) => `research/${ctx.run}-batch-${b}.pages.json`).join(','),
      '--terminal-resolutions', terminalResolutionsPath(ctx), '--verify'], {
      liveness: { pattern: /judge-stamps: (\d+) item\(s\) in scope/.source, min: 1, unit: 'items in scope' } }), closureGate(ctx)],
  },
  {
    id: '10-readiness-v2', label: 'structured publication readiness', units: () => ['all'],
    artifacts: (ctx) => `research/${ctx.run}-publication-readiness.json`,
    pattern: resultPattern('tool', 'readiness-v2'), concurrency: 1,
    plan: (ctx) => [{ role: 'tool', label: 'readiness-v2', job: 'bookkeeping-mechanical', covers: ['all'],
      argv: ['node', 'tools/publication-ready.mjs', '--run', ctx.run, '--write'] }],
    gates: (ctx) => [...repoWide(ctx), levelCoverageGate(ctx), closureGate(ctx), ledgerGate(ctx, { terminal: true }),
      gate('publication-readiness', ['node', 'tools/publication-ready.mjs', '--run', ctx.run, '--verify'])],
  },
  // Reconcile the final receipts and append-only ledgers once.  The reporter
  // receives this compact evidence packet instead of re-running gates or
  // reconstructing fatal counts from prose; the exhaustive defect table is
  // rendered mechanically from it.
  {
    id: '10-evidence-v2', label: 'mechanically reconciled owner evidence', units: () => ['all'],
    artifacts: (ctx) => `research/${ctx.run}-step10-evidence.json`,
    pattern: resultPattern('tool', 'step10-evidence-v2'), concurrency: 1,
    plan: (ctx) => [{ role: 'tool', label: 'step10-evidence-v2', job: 'bookkeeping-mechanical', covers: ['all'],
      argv: ['node', 'tools/step10-report.mjs', 'evidence', '--run', ctx.run] }],
    gates: (ctx) => [gate('step10-evidence', ['node', 'tools/step10-report.mjs', 'check-evidence', '--run', ctx.run])],
  },
  // Freeze the validated mathematical tree before asking for prose.  The next
  // agent is kernel-enforced read-only and returns JSON; this receipt catches an
  // out-of-band mutation as a hard failure rather than trusting that instruction.
  {
    id: '10-report-baseline-v2', label: 'freeze validated tree before reporting', units: () => ['all'],
    artifacts: (ctx) => `research/${ctx.run}-step10-report-integrity.json`,
    pattern: resultPattern('tool', 'report-baseline-v2'), concurrency: 1,
    plan: (ctx) => [{ role: 'tool', label: 'report-baseline-v2', job: 'bookkeeping-mechanical', covers: ['all'],
      argv: ['node', 'tools/step10-report.mjs', 'snapshot', '--run', ctx.run] }],
    gates: (ctx) => [gate('report-integrity', ['node', 'tools/step10-report.mjs', 'check', '--run', ctx.run])],
  },
  {
    id: '10-owner-report-v2', label: 'read-only evidence-bound owner report', units: () => ['all'],
    artifacts: (ctx) => `research/${ctx.run}-step10-report.response.json`,
    pattern: resultPattern('alpha-report', 'owner-report-v2'), concurrency: 1,
    plan: (ctx) => [{ role: 'alpha-report', label: 'owner-report-v2', job: 'reporting', covers: ['all'],
      brief: 'briefs/alpha.md', task: `research/${ctx.run}-alpha-step10.task.md`, timeout: 10800,
      outputSchema: 'briefs/schemas/step10-report.json', resultArtifact: `research/${ctx.run}-step10-report.response.json` }],
    gates: (ctx) => [gate('step10-evidence', ['node', 'tools/step10-report.mjs', 'check-evidence', '--run', ctx.run]),
      gate('report-response', ['node', 'tools/step10-report.mjs', 'check-response', '--run', ctx.run])],
  },
  {
    id: '10-owner-report-render-v2', label: 'materialize owner report', units: () => ['all'],
    artifacts: (ctx) => `research/${ctx.run}-step10-report.md`,
    pattern: resultPattern('tool', 'owner-report-render-v2'), concurrency: 1,
    plan: (ctx) => [{ role: 'tool', label: 'owner-report-render-v2', job: 'bookkeeping-mechanical', covers: ['all'],
      argv: ['node', 'tools/step10-report.mjs', 'render', '--run', ctx.run] }],
    gates: (ctx) => [
      gate('report-integrity', ['node', 'tools/step10-report.mjs', 'check', '--run', ctx.run]),
      gate('publication-readiness', ['node', 'tools/publication-ready.mjs', '--run', ctx.run, '--verify', '--require-report']),
    ],
  },

  // THE CLOSE-OUT COMMIT — the new terminal stage (owner directive,
  // 2026-08-17: everything on main, no worktrees, no branches; committing is
  // the engine's job so a `git clean` cannot lose a run that exists only in
  // the working tree — frontier-15 held 16 page files and 18 items
  // uncommitted at its pause). PUSH and `status: published` remain owner
  // acts; run-commit.mjs refuses any branch but main and never touches a
  // status field. The obligations gate is the other half of full closure:
  // externally-blocked work is rows with unblock clocks, and a `block`-tier
  // row must be closed or owner-accepted before the run may end.
  {
    id: '10-close-v2',
    label: 'close-out commit on main',
    units: () => ['all'],
    pattern: resultPattern('tool', 'close-step10-v2'),
    concurrency: 1,
    plan: (ctx) => [{
      role: 'tool',
      label: 'close-step10-v2',
      job: 'bookkeeping-mechanical',
      covers: ['all'],
      timeout: 300,
      argv: ['node', 'tools/run-commit.mjs', '--run', ctx.run],
    }],
    gates: (ctx) => [
      // No liveness floor: zero obligation rows is a legitimately empty set.
      gate('obligations', ['node', 'tools/obligations.mjs', 'check', '--run', ctx.run, '--terminal']),
      // `10-readiness-v2` already ran repo-wide, level coverage, judge closure,
      // terminal ledger, and stamp validation, and its receipt sealed the tree
      // on which those gates ran. The later report baseline independently
      // protects the evidence/report interval. Together their cheap hash checks
      // prove the validated inputs remain current instead of paying the same
      // full scan again. Any unexpected mutation is an honest hard stop.
      gate('report-integrity', ['node', 'tools/step10-report.mjs', 'check', '--run', ctx.run]),
      gate('publication-readiness', ['node', 'tools/publication-ready.mjs', '--run', ctx.run,
        '--verify', '--require-report']),
      // Last, so the commit the gate verifies includes the rendered report and
      // any obligation closure written in a repair round.
      gate('tree-clean', ['node', 'tools/run-commit.mjs', '--run', ctx.run, '--check']),
    ],
    // The close-out commit deliberately dirties the tree with its own result
    // file, so one clean-up/commit retry is expected. The remaining rounds are
    // headroom for a real late obligation; a report-integrity mismatch is never
    // auto-repaired because it signals an unexpected protected-tree mutation.
    maxFixRounds: 3,
    onGateFailure: async ({ ctx, executor, stage, round, failure }: any) => {
      if (failure.id === 'tree-clean') {
        const r = await mechanicalRepair({ ctx, failure });
        if (r.outcome === 'outage') return { outage: { reason: r.reason! } };
        return;
      }
      if (failure.id !== 'obligations') return;
      // Due rows with a recorded dispatch re-fire themselves; rows still on
      // their clock are an outage wait; anything else is genuinely the
      // owner's (accept on the record) and the blocker says so.
      let rows: any[] = [];
      try {
        rows = readFileSync(join(ctx.repo, 'research', `${ctx.run}-obligations.jsonl`), 'utf8')
          .split('\n').filter(Boolean).map((l) => JSON.parse(l))
          .filter((r) => r.tier === 'block' && r.status === 'open');
      } catch { return; }
      const due = rows.filter((r) => r.dispatch && (!r.unblock_at || new Date(r.unblock_at).getTime() <= Date.now()));
      if (due.length) {
        for (const r of due) {
          executor.start(stage, {
            covers: [], timeout: 14400,
            ...r.dispatch,
            label: `obligation-${r.id}-${round}`,
          });
        }
        return;
      }
      const clocks = rows.map((r) => (r.unblock_at ? new Date(r.unblock_at).getTime() - Date.now() : 0)).filter((ms) => ms > 0);
      if (clocks.length) {
        return { outage: { reason: `${rows.length} obligation(s) on an unblock clock`, retryAfterMs: Math.min(...clocks) } };
      }
    },
  },
];

// Owner-selected late-stage model boundary (2026-08-29). Apply it at the
// stage boundary so repair hooks and obligation re-dispatches cannot silently
// fall back to their role's ordinary lane. Tool plans remain deterministic.
for (const stage of stages) {
  if (/^(?:9|10)-/.test(stage.id)) {
    stage.modelProfile = (plan: any) => plan.role === 'tool' ? undefined : GPT54_HIGH_1M;
  }
}

export default { stages, batches, alphaGroups };
