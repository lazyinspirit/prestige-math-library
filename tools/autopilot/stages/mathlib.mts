// The stage specification for the prestige-math-library build, steps 1 -> 6.
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

import { readdirSync, existsSync, readFileSync, writeFileSync, appendFileSync, statSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { join } from 'node:path';
import { itemHashGuard, shortHash } from '../../item-hash.mjs';
import { isPublishedItem } from '../../published-repair-policy.mjs';
import { MODEL_PROFILE_NAMES } from '../../models.mjs';
import { MAX_RUN_BATCHES, MAX_GROUPS } from '../src/capacity.mjs';
import { alphabeticLabel } from '../../alpha-group-assignment.mjs';
import { loadStep3 } from '../../frontier-snapshot.mjs';
import { step1Decision } from '../../step1-decisions.mjs';
import { dependencyLevels, orderedItems } from '../../item-dependency-levels.mjs';
import { scopedGateOutput } from '../src/repair-evidence.mts';
import { writeBatchDependencyLevels } from '../../batch-dependency-levels.mjs';
import { batchInput, prerequisiteBatches, loopState, collectBatch, accepted, loopPattern, batchPlans } from '../../batch-scope-review.mjs';
import { holdStep1 } from './step1-hold.mts';
import { appendStages } from '../src/frontier-append.mts';
import { yaml } from '../../pathway-lib.mjs';

// Version the composed Step-3 module independently. The executor watches both
// files and re-imports this root when either changes; the query prevents Node's
// ESM cache from retaining the old Step-3 closures in a live controller.
const STEP3_MODULE_URL = new URL('./mathlib.step3.mts', import.meta.url);
const STEP3_MODULE_STAT = statSync(STEP3_MODULE_URL);
const { step3Stages } = await import(
  `${STEP3_MODULE_URL.href}?v=${STEP3_MODULE_STAT.mtimeMs}:${STEP3_MODULE_STAT.size}`
);
const STEP5_MODULE_URL = new URL('./mathlib.step5.mts', import.meta.url);
const STEP5_MODULE_STAT = statSync(STEP5_MODULE_URL);
const { step5Stages } = await import(
  `${STEP5_MODULE_URL.href}?v=${STEP5_MODULE_STAT.mtimeMs}:${STEP5_MODULE_STAT.size}`
);

const DEEPSEEK_FLASH_MAX = MODEL_PROFILE_NAMES.deepseekFlashMax;
const LUNA_MAX = MODEL_PROFILE_NAMES.lunaMax;
// Pair/group author plans and their recovery fallback share this selection.
const STEP3_AUTHOR_PROFILE = DEEPSEEK_FLASH_MAX;
// A live engine hot-reloads this stage module but retains its first models.mjs
// import. The new profile name must also resolve in that already-running process.
const SOL61_HIGH = MODEL_PROFILE_NAMES.sol61High ?? 'gpt-6.1-sol-high';

const R = (ctx: any, ...p: string[]) => join(ctx.repo, ...p);

/** Batch numbers, read from disk rather than configured.
 *  A run's batch count is a property of its planning output, and anything that
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

/** A scaffold supplier is releasable only after its populated manifest,
 * coverage record, and every current item-readiness receipt exist. The item
 * list is read dynamically because planning intentionally creates empty page
 * shells before the Beta fills them. */
type ScaffoldSnapshot = {
  stamp: string;
  snapshot: any;
  levelCheck: ReturnType<typeof dependencyLevels>;
  itemStamps: Map<string, string>;
  aliasStamp: string | null;
  readiness: Map<string, { stamp: string; closed: boolean }>;
};
// Executor.ctx() is transient; its config retains the controller's identity.
// Scope the retained entries by repo/run as well, including diagnostic callers
// that deliberately reuse a configuration object across different frontiers.
const scaffoldSnapshots = new WeakMap<object, Map<string, ScaffoldSnapshot>>();

function fileStamp(path: string): string {
  try {
    const stat = statSync(path, { bigint: true });
    return `${stat.mtimeNs}:${stat.ctimeNs}:${stat.size}`;
  } catch { return 'missing'; }
}

export function scaffoldSnapshot(ctx: any) {
  const dir = R(ctx, 'research');
  const files = readdirSync(dir)
    .filter((name: string) => name.startsWith(`${ctx.run}-batch-`)
      && (name.endsWith('.pages.json') || name.endsWith('.coverage.json')))
    .sort();
  const stamp = [fileStamp(join(dir, 'plan-spec.json')),
    ...files.map((name: string) => `${name}:${fileStamp(join(dir, name))}`)].join('|');
  const owner = ctx.config && typeof ctx.config === 'object' ? ctx.config : ctx;
  const scope = JSON.stringify([ctx.repo, ctx.run]);
  let scopes = scaffoldSnapshots.get(owner);
  if (!scopes) { scopes = new Map(); scaffoldSnapshots.set(owner, scopes); }
  let cached = scopes.get(scope);
  if (!cached || cached.stamp !== stamp) {
    const snapshot = loadStep3(ctx.repo, ctx.run);
    cached = { stamp, snapshot, levelCheck: dependencyLevels(snapshot.pages), itemStamps: new Map(),
      aliasStamp: null, readiness: new Map() };
    scopes.set(scope, cached);
  } else {
    // Published and in-run item bodies can change without a manifest edit.
    // Invalidate dependency bytes before checking the next unit or status pass;
    // Step-1 receipt files themselves are read afresh below.
    for (const [id, prior] of cached.itemStamps) {
      if (fileStamp(R(ctx, 'items', `${id}.md`)) !== prior) {
        invalidateScaffoldInputs(cached);
        break;
      }
    }
    // Alias lookup reads all item carriers: an unrelated carrier can acquire
    // an alias, and a new canonical file can supersede an existing alias.
    if (cached.aliasStamp !== null && cached.aliasStamp !== scaffoldAliasStamp(ctx)) {
      invalidateScaffoldInputs(cached);
    }
  }
  return cached;
}

function scaffoldAliasStamp(ctx: any): string {
  return readdirSync(R(ctx, 'items')).filter(name => name.endsWith('.md')).sort()
    .map(name => `${name}:${fileStamp(R(ctx, 'items', name))}`).join('|');
}

function invalidateScaffoldInputs(cached: ScaffoldSnapshot): void {
  cached.snapshot.cache.clear();
  delete cached.snapshot.aliases;
  cached.itemStamps.clear();
  cached.aliasStamp = null;
  cached.readiness.clear();
}

function scaffoldArtifacts(ctx: any, unit: string): string[] {
  const manifest = `research/${ctx.run}-batch-${unit}.pages.json`;
  const out = [manifest, `research/${ctx.run}-batch-${unit}.coverage.json`];
  let complete = true;
  let cached: ScaffoldSnapshot | undefined;
  try {
    const pages = JSON.parse(readFileSync(R(ctx, manifest), 'utf8'));
    cached = scaffoldSnapshot(ctx);
    const { snapshot, levelCheck } = cached;
    if (levelCheck.errors.some((error: string) => error.startsWith('dependency cycle:'))) complete = false;
    if (!Array.isArray(pages) || !pages.length) complete = false;
    for (const page of Array.isArray(pages) ? pages : []) {
      if (!Array.isArray(page?.items) || !page.items.length) complete = false;
      for (const item of Array.isArray(page?.items) ? page.items : []) {
        if (typeof item?.id === 'string' && item.id) {
          out.push(`research/${ctx.run}-step1-${item.id}.json`);
          const receiptPath = R(ctx, 'research', `${ctx.run}-step1-${item.id}.json`);
          const receiptStamp = fileStamp(receiptPath);
          let decision = cached.readiness.get(item.id);
          if (!decision || decision.stamp !== receiptStamp) {
            decision = { stamp: receiptStamp, closed: step1Decision(snapshot, item.id).closed };
            cached.readiness.set(item.id, decision);
            // Explicit examined inputs can include an absent external supplier.
            // Its later creation must invalidate a cached readiness decision.
            if (existsSync(receiptPath)) {
              const row = JSON.parse(readFileSync(receiptPath, 'utf8'));
              for (const id of row.dependencies ?? []) {
                if (!cached.itemStamps.has(id)) cached.itemStamps.set(id, fileStamp(R(ctx, 'items', `${id}.md`)));
              }
            }
          }
          if (!decision.closed) complete = false;
          if (item.dependency_level !== levelCheck.levels.get(item.id)) complete = false;
        } else complete = false;
      }
    }
    // Include unresolved dependency leaves: the loader deliberately does not
    // cache unknown items, but creating one changes the current input hash.
    const inputIds = new Set<string>(snapshot.cache.keys());
    for (const node of snapshot.cache.values()) for (const id of node.deps) inputIds.add(id);
    for (const id of inputIds) {
      if (!cached.itemStamps.has(id)) cached.itemStamps.set(id, fileStamp(R(ctx, 'items', `${id}.md`)));
    }
    if (snapshot.aliases && cached.aliasStamp === null) cached.aliasStamp = scaffoldAliasStamp(ctx);
  } catch {
    // A failed alias scan can leave a partially populated index. Never let a
    // later status call reuse it or a decision computed before the failure.
    if (cached) invalidateScaffoldInputs(cached);
    complete = false;
  }
  // Planning creates empty page shells. A successful Beta receipt and coverage
  // file must not make that initial shell look complete and release consumers.
  // This sentinel is intentionally never authored; the normal stalemate/hold
  // path then reports the malformed or empty scaffold for owner resolution.
  if (!complete) out.push(`research/${ctx.run}-batch-${unit}.scaffold-incomplete`);
  return [...new Set(out)];
}

/** Durable construction output for one batch.
 *
 * A proof-contract file alone is not an authoring receipt: a blocked author can
 * truthfully emit an empty contract while writing none of the manifest's items
 * or pages.  Read the already-validated batch manifest and require the corpus
 * files as well, so artifact accounting cannot turn an empty authoring attempt
 * into completed coverage. */
export function authorArtifacts(ctx: any, unit: string): string[] {
  const manifest = `research/${ctx.run}-batch-${unit}.pages.json`;
  const out = [manifest, `research/${ctx.run}-batch-${unit}.proof-contracts.json`];
  try {
    const pages = JSON.parse(readFileSync(R(ctx, manifest), 'utf8'));
    for (const page of Array.isArray(pages) ? pages : []) {
      if (typeof page?.category === 'string' && typeof page?.id === 'string') {
        out.push(`library/${page.category}/${page.id}.md`);
      }
      for (const item of Array.isArray(page?.items) ? page.items : []) {
        if (typeof item?.id === 'string') out.push(`items/${item.id}.md`);
      }
    }
  } catch {
    // The manifest path remains in the result, and the manifest gates provide
    // the precise parse/schema diagnostic.  Artifact accounting stays total.
  }
  return [...new Set(out)];
}

/** Read the native planning assignment. Planning/doctor use positional groups
 * only before that validated artifact exists; neither dispatches this fallback. */
export function alphaGroups(ctx: any, size = 3): Array<{ label: string; covers: string[] }> {
  const assigned = readAlphaGroups(ctx);
  if (assigned) return assigned;
  const b = batches(ctx);
  const out: any[] = [];
  for (let i = 0; i < b.length; i += size) {
    out.push({ label: alphabeticLabel(out.length), covers: b.slice(i, i + size) });
  }
  return out;
}

/** The validated assignment, or null before planning has produced one. */
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

const gate = (id: string, argv: any, extra: any = {}) => ({ id, argv, ...extra });
const frontierItemGate = (ctx: any, id: string, tool: string, args: string[] = [], extra: any = {}) =>
  gate(id, ['node', 'tools/frontier-item-gate.mjs', '--run', ctx.run, '--tool', tool, '--', ...args], extra);
const extGate = (ctx: any) => frontierItemGate(ctx, 'extcheck', 'extcheck');

/** Item subjects belong only to the current frontier. Validators may load
 * external suppliers to resolve prerequisites, but unrelated items cannot hold
 * a frontier gate. The wrapper derives its exact scope from live manifests. */
const repoWide = (ctx, { pendingAuditOk = false }: { pendingAuditOk?: boolean } = {}) => [
  frontierItemGate(ctx, 'precheck', 'precheck', [], {
    liveness: { pattern: /(\d+)\s+checked/.source, min: 1, unit: 'items checked' },
  }),
  frontierItemGate(ctx, 'depcheck', 'depcheck', pendingAuditOk ? ['--pending-audit-ok'] : []),
  frontierItemGate(ctx, 'fwdcheck', 'fwdcheck', ['--quiet']),
  extGate(ctx),
  frontierItemGate(ctx, 'rendercheck', 'rendercheck'),
  frontierItemGate(ctx, 'prosecheck', 'prosecheck'),
  frontierItemGate(ctx, 'depsource', 'depsource'),
  frontierItemGate(ctx, 'pathcheck', 'pathcheck'),
  scopeGate(ctx),
  gate('splice-verify', ['node', 'tools/splice-plan.mjs', '--run', ctx.run, '--verify']),
];

// `requireDestination` binds only where harvest rows are BORN (stage 1 and
// the 3-recheck loop): a deferral written under the new contract must name a
// resolvable destination — 86 of frontier-15's 168 declines named none and
// the Craven hole reached step 6 when step 2 could have caught it. Later
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
 *  invocation per batch misclassifies that edge as missing until step 3 has
 *  authored the target, creating a deadlock before the splice. */
const manifestDepsGate = (ctx) => gate('manifest-deps', ['node', 'tools/manifest-deps.mjs',
  ...batches(ctx).map((b: any) => `research/${ctx.run}-batch-${b}.pages.json`)], {
  liveness: { pattern: /manifest-deps: (\d+) item/.source, min: 1, unit: 'planned items' },
});

const policyGates = (ctx) => [
  manifestDepsGate(ctx),
  gate('content-policy-scaffold', ['node', 'tools/content-policy.mjs',
    '--manifest-only',
    ...batches(ctx).map((b: any) => `research/${ctx.run}-batch-${b}.pages.json`)], {
    liveness: { pattern: /(\d+)\s+scoped item/.source, min: 1, unit: 'scoped items' },
  }),
];

/** Item mode — the other half of content-policy, and the only enforcement of
 *  applied-iota notation, provenance ENUM validity (level-coverage checks
 *  presence only), reader-visible source URLs, generated-claim containment and
 *  the external_dependency record. `--manifest-only` guards all of that behind
 *  `if (!manifestOnly)`, so a pipeline that only ever passes the flag performs
 *  none of it — which is what this engine did until 2026-08-16. Scope comes
 *  from the manifests, so the legacy corpus is not retro-flagged; runs only
 *  after step 3, when the item files exist. */
const policyItemGate = (ctx) => gate('content-policy-items', ['node', 'tools/content-policy.mjs',
  ...batches(ctx).map((b: any) => `research/${ctx.run}-batch-${b}.pages.json`)], {
  liveness: { pattern: /(\d+)\s+scoped item/.source, min: 1, unit: 'scoped items' },
});

const planGate = (ctx: any) => frontierItemGate(ctx, 'validate-plan', 'validate-plan');

/** The Step 1 drift review's teeth. The review is the `drift` unit of stage 1;
 *  this is what makes its report load-bearing rather than decorative. Fails on
 *  a missing report, an owed A page with no verdict, or any drift-blocked
 *  verdict — a blocked edge is a reading-order question, owner-only, and the
 *  run must stop at it rather than meet it at step 3 as `undeclared-prereq`. */
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
 *  gate accepts each stamp or a validated Step 1 source-drop decision. */
const fetchGate = (ctx) => gate('source-fetch-check', ['node', 'tools/source-fetch-check.mjs',
  '--coverage', batchCoverages(ctx).join(',')], {
  liveness: { pattern: /(\d+)\/\d+ source\(s\) resolved/.source, min: 1, unit: 'sources resolved' },
});

/** MECHANICAL REPAIRS, keyed by the failing gate.
 *
 *  A repair in this table is a function of files on disk (plus, for the
 *  stamp, the network fetch that reading the cited document requires anyway)
 *  — the roles rule assigns those to code, never to a dispatch. Both
 *  scaffold-side joins share the table: stage 1 for a failure at the scaffold
 *  join, Step 2 for one at the scope join, because a source can die
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
  // A scaffold item with no dependency field means an empty list was omitted,
  // not that mathematical judgment is needed. Normalize it before authoring so
  // Dispatch never spends an Alpha call discovering missing plan evidence.
  'manifest-deps': (ctx) => ['tools/manifest-deps.mjs', '--write',
    ...batches(ctx).map((b: any) => `research/${ctx.run}-batch-${b}.pages.json`)],
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
  // The drift review edited prerequisite edges/order, MINTED a prerequisite,
  // or RESCOPED the run (owner, 2026-08-24) -> rewrite the batch manifests from
  // the current spec and regenerate the ledger, task files and covers map. The
  // Alpha decided; this is bookkeeping. Even an applied edge or reorder with
  // the same pair set must sync, because generated Beta tasks quote those
  // fields.
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
  // the stalemate synthetic (covered, undispatched, artifact-incomplete) on
  // stage 4 IS the withheld-splice shape — same repair
  'stage-stalemate': (ctx) => ['tools/splice-plan.mjs', '--run', ctx.run, '--all', '--fail-on-refusal'],
  // Object drift between the manifests and the plan — "same ids, N item
  // object(s) changed" — is what the splice's REFRESH exists for, and the
  // refresh is `--update`, which the tool accepts ONLY per batch:
  // `(update && !batch)` is a usage error. The entry here was
  // `--all --fail-on-refusal`, which treats a differing page as a hard error
  // and refuses to overwrite, so it could never clear the very drift the gate
  // reports. frontier-16 spent three rounds on it at step 3 after the 3a
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
    '--direct-boundary',
    '--refresh-receipt', R(ctx, 'research', `${ctx.run}-impact.json`)],
  // the configured-judge ledger licenses stamps the frontmatter does not carry ->
  // write them (and strip any pass block a current rejection contradicts).
  // Stamping is a disk function of the ledger plus the current item text;
  // the residue — an item no current verdict covers at closure — survives as
  // the blocker. frontier-15 closed 398/398 in the ledger with 0 of 398
  // items stamped, because no stage owned this act (owner, 2026-08-17).
  'judge-stamps': (ctx) => ['tools/apply-judge-stamps.mjs',
    '--ledger', R(ctx, 'research', `${ctx.run}-judge.jsonl`),
    '--exclude-published',
    '--manifests', batches(ctx).map((b: any) => join(ctx.repo, 'research', `${ctx.run}-batch-${b}.pages.json`)).join(','),
    '--terminal-resolutions', R(ctx, terminalResolutionsPath(ctx)),
    ...auditorCertificationArgs(ctx),
    '--apply', '--report', R(ctx, 'research', `${ctx.run}-judge-stamps.json`)],
  // a dirty tree at 6-close-v2 means repairs landed after the close-out
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
  return 'post-3a';
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
 *  terra limit on frontier-15 burned both of 6-judge's repair rounds on
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
export const mechanicalRepair = async ({ ctx, failure, excludeGateIds = [], judgeLineup = 'sol61', judgeEffort = 'high' }: any): Promise<{ outcome: string; stderr?: string; reason?: string; handledIds?: string[] }> => {
  const excluded = new Set((excludeGateIds ?? []).map(String));
  const failing = [failure, ...(failure?.advisory ?? [])].filter((f: any) => f?.id);
  const handled = failing.filter((f: any) => !excluded.has(String(f.id)) && MECHANICAL_REPAIRS[f.id]);
  if (!handled.length) return { outcome: 'unhandled' };

  // A failed transport request is not evidence that a reviewed source is gone.
  // Do not retire its coverage or launch a reharvest after the gate's retry.
  if (handled.some((f: any) => f.id === 'url-liveness')) {
    const path = R(ctx, 'research', `${ctx.run}-url-liveness.json`);
    if (existsSync(path)) {
      const dead = (JSON.parse(readFileSync(path, 'utf8')).rows ?? []).filter((r: any) => !r.ok);
      if (dead.length && dead.every((r: any) => r.status === 0 &&
        /curl: \((6|7|16|18|28|35|52|56)\)|ECONNRESET|ETIMEDOUT|EAI_AGAIN|socket hang up/i.test(r.error ?? ''))) {
        return { outcome: 'outage', reason: `URL transport failure; preserve reviewed sources: ${dead.map((r: any) => r.url).join(', ')}` };
      }
    }
  }

  const { spawnSync } = await import('node:child_process');
  const residues: string[] = [];
  const handledIds: string[] = [];
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
      r = spawnSync('node', f.id === 'judge-closure'
        ? [...argvTail, '--lineup', judgeLineup, ...(judgeEffort ? ['--effort', judgeEffort] : [])]
        : argvTail,
        { cwd: ctx.repo, encoding: 'utf8' });
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
    else handledIds.push(f.id);
  }
  if (residues.length) return { outcome: 'residual', stderr: residues.join('\n'), handledIds };
  return { outcome: 'clean', handledIds };
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
 *  the manifest, the harvest and the contracts between step 3 and step 3, and
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
  // Documented drops are decisions, not live URLs. Empty selections still fail.
  liveness: { pattern: /(\d+) citation decision\(s\)/.source, min: 1, unit: 'citation decisions' },
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
// the blast radius, proof coverage, and above all `level-coverage` — were in
// none of the thirteen stages. `level-coverage` did not appear anywhere in the
// autopilot source at all.
//
// They were not skipped. They were run BY THE ALPHAS, by hand, and reported in
// prose. frontier-14's step-5 report contains a "Gate state at hand-off" table
// whose last row reads `level-coverage BLOCKED`. The engine never saw it, because
// a markdown table is not an exit code. Late review and closeout ran, and the build
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
const terminalResolutionsPath = (ctx) => `research/${ctx.run}-step5-terminal-resolutions.jsonl`;
const auditorCertificationsPath = (ctx, step: number) => `research/${ctx.run}-step${step}-auditor-certifications.json`;
const auditorCertificationArgs = (ctx) => ['--run', ctx.run, '--auditor-certifications',
  [7].map(step => auditorCertificationsPath(ctx, step)).join(',')];
const auditorCreatedGate = (ctx, step: 5) => gate(`step${step}-auditor-created-certifications`,
  ['node', 'tools/auditor-created-items.mjs', 'certify', '--run', ctx.run, '--step', String(step)]);

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

const scopeDecisionsGate = (ctx) => gate('scope-decisions', ['node', 'tools/scope-decisions.mjs',
  'check', '--run', ctx.run]);

const step5GuardGate = (ctx) => gate('step5-guard', ['node', 'tools/step5-guard.mjs',
  '--touches', touchesPath(ctx), '--baseline', 'pre-step5-v2',
  '--judge-ledger', `research/${ctx.run}-judge.jsonl`,
  '--adjudications', `research/${ctx.run}-judge-adjudications.jsonl`,
  '--scope', `research/${ctx.run}-step5-scope.json`,
  '--auditor-certifications', auditorCertificationsPath(ctx, 7),
  '--terminal-resolutions', terminalResolutionsPath(ctx),
  '--owner-prerequisite-repairs', `research/${ctx.run}-step5-owner-prerequisite-repairs.jsonl`]);

/** Item ids printed by the standard `ERROR code [item-id]:` gate grammar. */
export function repairGateOutput(failure: any): string {
  let text = String(failure?.output ?? '');
  if (failure?.id === 'boundary-audit') {
    if (text.trim().startsWith('{')) {
      const report = JSON.parse(text);
      // Only unresolved candidates. Reviewed/upheld rows remain in the full
      // evidence artifact, never in a repair assignment.
      return [
        ...(report.templates ?? []).flatMap((cluster: any) =>
          (cluster.rows ?? []).map((row: any) =>
            `ERROR boundary-template [${row.id}]: ${JSON.stringify(row)}`)),
        ...(report.contradicted ?? []).map((row: any) =>
          `ERROR boundary-contradicted [${row.id}]: ${JSON.stringify(row)}`),
      ].join('\n');
    }
    // Preserve compatibility with reports already captured by a live run.
    text = text.split(/^TEMPLATE CANDIDATES UPHELD|^UPHELD BY REVIEW/m)[0];
  }
  // Dependency reports put warnings and the whole inventory before this
  // section. Only the error section names repair subjects.
  const section = text.match(/^\s*\d+ ERROR\(s\):\s*$/m);
  if (section?.index !== undefined) text = text.slice(section.index);
  // Risk reports list every passing item before their ERROR records. Those
  // inventory rows are context, not repair subjects.
  if (/^\s*ERROR\b/m.test(text)) {
    const records = text.split(/(?=^(?:ERROR|WARN(?:ING)?|ORDINARY|MODERATE|HIGH|CRITICAL)\b)/m);
    text = records.filter(record => /^\s*ERROR\b/.test(record)).join('');
  }
  return text.trim();
}

export function itemsFromGateFailure(failure: any): string[] {
  const text = repairGateOutput(failure) || String(failure?.why ?? '');
  const grammar = '[a-z][a-z0-9]*(?:-[a-z0-9]+){2,}';
  const itemGrammar = '(?:alg|def|lem|thm|prop|cor|ex|cex|fs|rem)-[a-z0-9]+(?:-[a-z0-9]+)+';
  const itemSummaryIds = [...text.matchAll(/^\s*items:\s*(.*)$/gmi)]
    .flatMap((m) => [...m[1].matchAll(new RegExp(itemGrammar, 'g'))].map((hit) => hit[0]));
  const subjects = text.split('\n').flatMap(line => {
    // A cited supplier is context, not the subject of this diagnostic.
    const primary = /^\s*(?:ERROR|FAIL)\b[^\n]*?\[([a-z][a-z0-9-]+)\]/.exec(line)?.[1]
      ?? /^\s*\[[a-z0-9-]+\]\s+items\/([a-z][a-z0-9-]+)\.md:/.exec(line)?.[1];
    return primary && new RegExp(`^${itemGrammar}$`).test(primary) ? [primary] : [];
  });
  if (subjects.length) return [...new Set(subjects)];
  return [...new Set([
    ...[...text.matchAll(new RegExp(`\\[(${grammar})\\]`, 'g'))].map((m) => m[1]),
    ...[...text.matchAll(new RegExp(`\\\`(${grammar})\\\``, 'g'))].map((m) => m[1]),
    ...[...text.matchAll(new RegExp(`^\\s*(?:ERROR|FAIL)\\s+[a-z0-9-]+:\\s+(${grammar})(?=[:\\s])`, 'gmi'))].map((m) => m[1]),
    ...[...text.matchAll(new RegExp(`items/(${grammar})\\.md`, 'g'))].map((m) => m[1]),
    ...[...text.matchAll(new RegExp(`^\\s*(${itemGrammar})\\s+\\[[^\\]]+\\]`, 'gmi'))].map((m) => m[1]),
    ...itemSummaryIds,
  ])];
}


/** Stable dependency-first order, including dependencies through unqueued items. */
export function dependencyFirst(ids: string[], dependencies: (id: string) => string[]): string[] {
  const queued = new Set(ids);
  const visiting = new Set<string>();
  const visited = new Set<string>();
  const ordered: string[] = [];
  const visit = (id: string) => {
    if (visited.has(id)) return;
    if (visiting.has(id)) throw new Error(`Final-adjudicator dependency cycle at ${id}`);
    visiting.add(id);
    for (const dep of [...dependencies(id)].sort()) visit(dep);
    visiting.delete(id);
    visited.add(id);
    if (queued.has(id)) ordered.push(id);
  };
  for (const id of [...queued].sort()) visit(id);
  return ordered;
}


/**
 * Proof-obligation gates: merge the per-batch contracts, then check them.
 *
 * The merge is gate zero on purpose. `runGates` is sequential and stops at the
 * first failure, so a merge that fails means the checks below it never claim to
 * have passed over a stale file. The historical final review of frontier-14 re-merged to fold in a
 * late batch and left `proof-contract --strict` red for the rest of the run.
 *
 * `--require-reviewed` is a RISK-REPORT flag, not a proof-contract one — read
 * from `tools/risk-report.mjs`'s usage line. It demands an Alpha `risk_review`
 * disposition, which only exists after step 3, so it is off at step 3. Asking
 * group authors for another role's record can never pass on a fresh level.
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
      '--fail-on-contradicted', '--fail-on-template', '--json']),
    gate('citation-fidelity', ['node', 'tools/citation-fidelity.mjs', merged, '--fail-on-missing-quote']),
    // The gate that checks the gates. finite-smoke once reported "0 error(s), 0
    // check(s)" for most of a run: a green tick over an empty scope.
    gate('gate-liveness', ['node', 'tools/gate-liveness.mjs', '--run', ctx.run,
      '--contracts', merged,
      '--checklists', batches(ctx).map((b: any) => `research/${ctx.run}-batch-${b}.coverage.json`).join(','),
      '--min-checks', '1']),
  ];
};

/** Current author gates for verified continuations, without invented Step-3 work. */
export const authoredContentGates = (ctx: any) => [
  ...repoWide(ctx), planGate(ctx), policyItemGate(ctx),
  ...contractGates(ctx, { reviewed: false }),
];

/** The defect ledger: whoever writes a disposition writes the row, and this
 *  gate holds the two accountable to each other — every confirmed_fatal
 *  adjudication owned by exactly one row (anti-double-count), step-3-caught
 *  rows whenever a 3a report exists (the clause that stops the ledger being a
 *  mirror of the adjudication file), and open rows agreeing with the closure
 *  receipt (two blockers once lived only in markdown). */
const ledgerGate = (ctx, { terminal = false } = {}) => gate('defect-ledger', ['node', 'tools/defect-ledger.mjs', 'check',
  '--run', ctx.run,
  '--adjudications', `research/${ctx.run}-judge-adjudications.jsonl`,
  '--reader-decisions', `research/${ctx.run}-step5-alert-decisions.jsonl`,
  '--closure', `research/${ctx.run}-judge-closure.json`,
  // The terminal stage may not end with any open row; closeout tolerates a
  // nonfatal one deliberately left open (Step 5 owns repair closure).
  ...(terminal ? ['--no-open'] : [])], {
  liveness: { pattern: /(\d+) defect row\(s\) checked/.source, min: 1, unit: 'defect rows' },
});

/**
 * Judge closure — the predicate that says whether the mathematics is signed off.
 *
 * Three questions, all answered against the text on disk right now: does every
 * item have a current configured-judge verdict set, is every current rejection adjudicated, and
 * is any adjudication `confirmed_fatal`. `--out` writes the ids in each class so
 * the rejudge stage has something to dispatch from — frontier-14's step 5 named
 * its 23 rejudge targets in a markdown table and the rejudge never ran, because
 * nothing downstream could read a table.
 *
 * The allowances are per-stage and narrow:
 *   step 4 — nothing is adjudicated yet, so rejections are expected;
 *   step 5 — repairs legitimately void their own verdicts, and the next stage fixes
 *            that; an unadjudicated rejection and an open fatal are NOT allowed.
 *   after  — no allowances at all.
 */
const closureGate = (ctx, { allowUnadjudicated = false, pendingRejudge = false, judgeLineup = 'sol61', excludePublished = true } = {}) =>
  gate('judge-closure', ['env', `JUDGE_LINEUP=${judgeLineup}`, 'node', 'tools/level-coverage.mjs',
    '--judge-only', '--verify-current-context',
    ...(excludePublished ? ['--exclude-published'] : []),
    '--judge-ledger', `research/${ctx.run}-judge.jsonl`,
    '--judge-adjudications', `research/${ctx.run}-judge-adjudications.jsonl`,
    ...auditorCertificationArgs(ctx),
    '--terminal-resolutions', terminalResolutionsPath(ctx),
    ...(allowUnadjudicated ? ['--allow-unadjudicated'] : []),
    ...(pendingRejudge ? ['--allow-pending-rejudge'] : []),
    '--out', closurePath(ctx),
    ...batches(ctx).map((b: any) => `research/${ctx.run}-batch-${b}.pages.json`),
  ], {
    liveness: { pattern: /(\d+)\/(?:\d+) current pair/.source, min: 1, unit: 'judged pairs' },
  });

/** Final mechanical coverage of provenance, contracts and current judgments. */
const levelCoverageGate = (ctx) => gate('level-coverage', ['env', 'JUDGE_LINEUP=sol61', 'node', 'tools/level-coverage.mjs',
  '--exclude-published',
  '--contracts', contractsPath(ctx),
  '--judge-ledger', `research/${ctx.run}-judge.jsonl`,
  '--judge-adjudications', `research/${ctx.run}-judge-adjudications.jsonl`,
  ...auditorCertificationArgs(ctx),
  '--terminal-resolutions', terminalResolutionsPath(ctx),
  '--mechanical',
  '--verify-current-context',
  ...batches(ctx).map((b: any) => `research/${ctx.run}-batch-${b}.pages.json`),
], {
  liveness: { pattern: /level-coverage: (\d+) item/.source, min: 1, unit: 'items' },
});

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

export const stages = [
  // Drift review, mechanical materialization, then parallel construction and an owner-held gate.
  {
    id: '1-drift',
    label: 'Step 1 — prerequisite-drift review',
    modelProfile: LUNA_MAX,
    units: () => ['drift'],
    pattern: /^alpha-(?:alpha-)?drift-review\.result\.json$/,
    labelFor: () => 'drift-review',
    concurrency: 1,
    artifacts: (ctx: any) => `research/${ctx.run}-alpha-step1-drift.md`,
    plan: (ctx: any) => [{
      role: 'alpha',
      label: 'drift-review',
      job: 'verification',
      covers: ['drift'],
      brief: 'briefs/alpha-drift.md',
      task: [`research/${ctx.run}-alpha-step1-drift.task.md`],
      timeout: 7200,
    }],
    gates: (ctx: any) => [
      gate('drift-review', ['node', 'tools/drift-review-check.mjs', '--run', ctx.run, '--before-apply']), planGate(ctx),
    ],
    onHold: holdStep1,
  },
  {
    id: '1-drift-apply',
    label: 'materialize prerequisite-drift decisions (mechanical)',
    units: () => ['all'],
    pattern: resultPattern('tool', 'drift-apply'),
    concurrency: 1,
    plan: (ctx: any) => [{
      role: 'tool', label: 'drift-apply', job: 'bookkeeping-mechanical', covers: ['all'],
      argv: ['node', 'tools/drift-apply.mjs', '--run', ctx.run], timeout: 600,
    }],
    gates: (ctx: any) => [scopeGate(ctx), driftGate(ctx), planGate(ctx),
      gate('batch-dependency-levels', ['node', 'tools/batch-dependency-levels.mjs', 'check', '--run', ctx.run])],
    onHold: holdStep1,
  },
  {
    id: '1-baseline', label: 'pre-authoring snapshot (mechanical)', units: () => ['all'],
    pattern: resultPattern('tool', 'snap-pre-author'), artifacts: touchesPath, concurrency: 1,
    plan: (ctx: any) => [{role:'tool',label:'snap-pre-author',job:'bookkeeping-mechanical',covers:['all'],
      argv:['node','tools/touchlog.mjs','snap',touchesPath(ctx),'pre-author','--idempotent']}],
    gatesWaived: 'Immutable pre-authoring snapshot; construction checks all authored carriers.',
  },
  {
    id: '1-scaffold',
    label: 'Beta scaffolding and complete initial authoring',
    modelProfile: (plan: any) => plan.role === 'beta' && plan.job === 'scaffolding'
      ? DEEPSEEK_FLASH_MAX
      : undefined,
    units: (ctx: any) => batches(ctx),
    unitPrerequisites: (ctx: any, unit: string) => prerequisiteBatches(ctx.repo, ctx.run, unit),
    artifacts: (ctx: any, unit: string) => [...scaffoldArtifacts(ctx, unit), ...authorArtifacts(ctx, unit)],
    // Anchored and exact ON PURPOSE: an unanchored `beta-batch-` also matches
    // `beta-fix-batch-3.result.json`, which belongs to a different stage.
    pattern: /^beta-(?:beta-)?batch-\d+\.result\.json$/,
    labelFor: (u) => `batch-${u}`,
    concurrency: MAX_RUN_BATCHES,
    plan: (ctx, pending) => {
      if (ctx.doctor) return pending.map(u => ({role:'beta',label:`batch-${u}`,job:'scaffolding',covers:[u],
        brief:'briefs/beta-scaffold.md',task:[`research/${ctx.run}-beta-${u}.task.md`,`research/${ctx.run}-beta-batch.task.md`],timeout:14400}));
      // Fresh scheduling metadata before every construction dispatch. Readiness
      // still requires successful suppliers, finished carriers and drained writers.
      const levels = writeBatchDependencyLevels(ctx.repo, ctx.run);
      const levelFor = (u: string) => levels.batches.find((row: any) => row.batch === String(u))?.dependency_level ?? Infinity;
      return [...pending].sort((a, b) => levelFor(a) - levelFor(b) || Number(a) - Number(b)).map((u: any) => {
        const row = levels.batches.find((row: any) => row.batch === String(u));
        if (!row) throw Error(`Missing dependency level for batch ${u}`);
        const sources = [`research/${ctx.run}-beta-${u}.task.md`, `research/${ctx.run}-beta-batch.task.md`];
        for (const source of sources) if (!existsSync(R(ctx, source)))
          throw Error(`Missing construction task for batch ${u}: ${source}`);
        const task = `research/${ctx.run}-beta-${u}-dependency-order.task.md`;
        writeFileSync(R(ctx, task), [
          `Batch ${u}: dependency_level ${row.dependency_level}; prerequisite batches: ${row.requires.join(', ') || 'none'}.`,
          `Current scheduling input: ${levels.input_sha256}.`,
          'Determine item inventories, logical deps and item dependency_level labels in the scaffold manifest before writing carriers. Author suppliers before consumers in ascending item level.',
          ...sources.flatMap(source => ['', `<!-- Source: ${source} -->`, readFileSync(R(ctx, source), 'utf8')]),
        ].join('\n'));
        return { role: 'beta', label: `batch-${u}`, job: 'scaffolding', covers: [u],
          brief: 'briefs/beta-scaffold.md', task, timeout: 14400 };
      });
    },
    onProgress: ({ctx, executor, stage}: any) => {
      if (!ctx.doctor && ![...executor.inflight.values()].some((d: any) => d.meta.stage === stage.id)
        && !executor.adoptedUnits(stage).size) writeBatchDependencyLevels(ctx.repo, ctx.run);
    },
    gates: (ctx) => [
      gate('batch-dependency-levels', ['node', 'tools/batch-dependency-levels.mjs', 'check', '--run', ctx.run]),
      gate('step1-readiness', ['node', 'tools/step1-decisions.mjs', 'check', '--run', ctx.run]),
      gate('item-dependency-levels', ['node', 'tools/item-dependency-levels.mjs', 'check', '--run', ctx.run]),
      gate('step1-dependency-ledger', ['node', 'tools/frontier-dependency-ledger.mjs', 'refresh', '--run', ctx.run, '--require-reviewed']),
      scopeGate(ctx), driftGate(ctx), ...coverageGates(ctx, { requireDestination: true }),
      ...policyGates(ctx), planGate(ctx), extGate(ctx), urlGate(ctx), backingGate(ctx), fetchGate(ctx),
    ],
    onHold: holdStep1,
  },

  {
    id: '2-scope-review', label: 'whole-batch scope and prerequisite review/repair',
    modelProfile: MODEL_PROFILE_NAMES.lunaMax,
    units: batches,
    unitPrerequisites: (ctx: any, u: string) => prerequisiteBatches(ctx.repo, ctx.run, u, ctx),
    unitEligible: (ctx: any, u: string) => loopState(ctx.repo,ctx.run,u,ctx).phase !== 'held',
    pattern: (ctx: any) => loopPattern(ctx, batches(ctx)),
    artifacts: (ctx: any, u: string) => accepted(ctx.repo,ctx.run,u,ctx)
      ? `research/${ctx.run}-scope-review/batch-${u}/state.json`
      : `research/${ctx.run}-scope-review/batch-${u}/acceptance-missing`,
    concurrency: 30,
    // Repairs have unrestricted local item inventory authority. Isolate each
    // write wave so its outside-batch byte guard cannot blame another writer.
    exclusiveCohort: (ctx: any, u: string) => batches(ctx).some(b =>
      loopState(ctx.repo,ctx.run,b,ctx).prepared?.phase === 'repair')
      || loopState(ctx.repo,ctx.run,u,ctx).phase === 'repair' ? batches(ctx) : [u],
    onProgress: ({ctx, executor, stage}: any) => {
      const active = new Set([...executor.inflight.values()].filter((d: any) => d.meta.stage === stage.id)
        .flatMap((d: any) => d.meta.covers.map(String)));
      for (const u of executor.adoptedUnits(stage)) active.add(String(u));
      for (const u of batches(ctx)) if (!active.has(u)) {
        const state = collectBatch(ctx, u);
        if (state.phase === 'accepted') {
          const path=join(ctx.dispatchDir, `tool-scope-accepted-${u}.result.json`);
          if (!existsSync(path)) writeFileSync(path,JSON.stringify({run:ctx.run,role:'tool',label:`scope-accepted-${u}`,covers:[u],ok:true}));
        }
        const key = `scope-owner:${u}`;
        if (state.phase === 'held') {
          const message = `Batch ${u} owner escalation: ${state.reason}`;
          if (executor.state.addBlocker(stage.id, message, key))
            executor.reporter.notify('blocked', message, {stage:stage.id,unit:u});
        } else if (executor.state?.data.blockers.some((b:any) => b.stage === stage.id && b.key === key)) {
          executor.state.data.blockers = executor.state.data.blockers.filter((b:any) => b.stage !== stage.id || b.key !== key);
          executor.state.save();
        }
      }
      if (active.size || !executor.state) return;
      const stageState = executor.state.stage(stage.id);
      const owed = batches(ctx);
      const allAccepted = owed.length>0 && owed.every(u => loopState(ctx.repo,ctx.run,u,ctx).phase === 'accepted');
      const firstPass = !stageState.ownerPassPausedAt;
      if (!firstPass && (!allAccepted || stageState.ownerGatePausedAt)) return;
      const pending = owed.filter(u => !['accepted','held'].includes(loopState(ctx.repo,ctx.run,u,ctx).phase));
      const readiness = executor.unitReadiness(stage,ctx,pending);
      if (readiness.problem || readiness.deferred || readiness.ready.length) return;
      const at = new Date().toISOString();
      const receipt = `research/${ctx.run}-step2-owner-${firstPass ? 'pass' : 'battery-ready'}.json`;
      const dispositions = owed.map(batch => {
        const state = loopState(ctx.repo,ctx.run,batch,ctx);
        return {batch,disposition:state.phase === 'accepted' ? 'accepted' : state.phase === 'held' ? 'owner-escalation' : 'prerequisite-blocked',
          reviewed:state.reviews.length>0,reviews:state.reviews.length,repairs:state.repairs.length,
          ...(state.phase === 'held' ? {reason:state.reason} : {}),
          ...(state.phase !== 'accepted' && state.phase !== 'held' ? {blocked_by:prerequisiteBatches(ctx.repo,ctx.run,batch).filter(b => !accepted(ctx.repo,ctx.run,b,ctx))} : {})};
      });
      writeFileSync(join(ctx.repo,receipt),JSON.stringify({version:1,run:ctx.run,at,dispositions,
        battery_attempted:false,next:'Owner resolves escalations and resumes remaining native loops as needed; owner authorizes the full battery and progression to Step 3.'},null,2)+'\n');
      if (firstPass) {
        stageState.ownerPassPausedAt = at;
        stageState.ownerPassReceipt = receipt;
      }
      if (allAccepted) stageState.ownerGatePausedAt = at;
      executor.state.paused = true;
      executor.reporter.notify('paused',`Step 2 frontier pass handed to owner: ${receipt}; resolve escalations, then explicitly resume and authorize the battery`,{stage:stage.id});
    },
    plan: (ctx: any, pending: string[]) => {
      if (ctx.doctor) return pending.map(u => ({role:'scope-reviewer',label:`scope-review-${u}-0`,job:'audit',covers:[u],
        brief:'briefs/scope-reviewer.md',task:'briefs/tasks/scope-review-batch.md',
        outputSchema:'briefs/schemas/batch-scope-review.json',resultArtifact:`research/${ctx.run}-scope-review/batch-${u}/review-0.json`}));
      const eligible = pending.filter(u => loopState(ctx.repo,ctx.run,u,ctx).phase !== 'held');
      const repair = eligible.find(u => loopState(ctx.repo,ctx.run,u,ctx).phase === 'repair');
      return batchPlans(ctx, repair ? [repair] : eligible);
    },
    gates: (ctx: any) => [scopeGate(ctx),
      gate('batch-scope-review', ['node', 'tools/batch-scope-review.mjs', 'check', '--run', ctx.run]),
      gate('sync-accepted-plan', ['node','tools/splice-plan.mjs','--run',ctx.run,'--all']),
      gate('post-author-snapshot',['node','tools/touchlog.mjs','snap',touchesPath(ctx),'post-author','--idempotent']),
      gate('item-dependency-levels', ['node', 'tools/item-dependency-levels.mjs', 'check', '--run', ctx.run]),
      ...coverageGates(ctx, {requireDestination:true}), manifestDepsGate(ctx), extGate(ctx), fetchGate(ctx),
      ...repoWide(ctx).filter(g => g.id !== 'splice-verify'), policyItemGate(ctx), ...contractGates(ctx)],
    onHold: holdStep1,
  },

  // Independent review follows construction and whole-batch scope acceptance.
  ...step3Stages({
    gate, repoWide, contractGates, batches, alphaGroups, resultPattern, touchesPath,
  }),

  // Render each batch review scope and the Step-5 group context before the
  // sweep so every reviewer has its exact page, item and seam inventory.
  {
    id: '4-scope',
    label: 'render batch review scopes and adjudication groups (mechanical)',
    units: () => ['all'],
    pattern: resultPattern('tool', 'step4-scope'),
    artifacts: (ctx) => `research/${ctx.run}-step5-scope.json`,
    concurrency: 1,
    plan: (ctx) => [{
      role: 'tool',
      label: 'step4-scope',
      job: 'bookkeeping-mechanical',
      covers: ['all'],
      argv: ['node', 'tools/step5-scope.mjs', 'render', '--run', ctx.run],
    }],
    gates: (ctx) => [
      gate('step5-scope', ['node', 'tools/step5-scope.mjs', 'check', '--run', ctx.run], {
        liveness: { pattern: /(\d+) item\(s\) partitioned/.source, min: 1, unit: 'items partitioned' },
      }),
    ],
  },

  // One read-only reviewer per batch runs alongside the frozen-text judge sweep.
  // Each returns a separate durable digest for its Step-5 owning group. The
  // shared actual-agent budget bounds readers and nested judge calls together.
  {
    id: '4-judge',
    label: 'one stateless judge per item, with batch reviewers alongside',
    modelProfile: (plan: any) => plan.role === 'alpha-batch-read'
      ? SOL61_HIGH
      : undefined,
    // Completion requires both judge coverage and every batch's own digest.
    units: (ctx) => ['sweep', ...batches(ctx)],
    // Repair labels cannot satisfy the original batch unit's coverage.
    pattern: /^(?:tool-judge-sweep|alpha-batch-read-\d+)\.result\.json$/,
    concurrency: MAX_RUN_BATCHES + 1,
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
            '--lineup', 'sol61', '--effort', 'high',
            '--ledger', `research/${ctx.run}-judge.jsonl`,
            '--cost', `research/${ctx.run}-judge-cost.jsonl`,
            '--pages', aPages.join(',')],
        });
      }
      for (const b of batches(ctx)) {
        if (!pendingUnits.includes(b)) continue;
        plans.push({
          role: 'alpha-batch-read',
          label: b,
          job: 'audit',
          covers: [b],
          brief: 'briefs/alpha.md',
          task: [`research/${ctx.run}-batch-${b}-step4-read.task.md`, 'briefs/tasks/alpha-step4-read.md'],
          outputSchema: 'briefs/schemas/step5-context.json',
          resultArtifact: `research/${ctx.run}-batch-${b}-step5-context.json`,
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
    // batch's real size. It deliberately does NOT require a nonempty `concerns`
    // list — a careful reading that finds nothing thin is a result, and failing
    // it would teach the lane to manufacture concerns.
    gates: (ctx) => [
      closureGate(ctx, { allowUnadjudicated: true, judgeLineup: 'sol61', excludePublished: false }),
      gate('step5-digests', ['node', 'tools/step5-scope.mjs', 'digests', '--run', ctx.run], {
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
      if (args.failure.id === 'step5-digests') {
        const text = `${args.failure.output ?? ''}\n${args.failure.why ?? ''}`;
        const named = new Set([...text.matchAll(
          /batch\s+(\d+)(?=\s*:|\s+(?:pages_read|items_read|seams_checked|batches)\s*:)/gi,
        )].map((m) => m[1]));
        const assigned = batches(args.ctx);
        const selected = assigned.filter((b) => named.has(b));
        const retry = selected.length ? selected : assigned;
        for (const b of retry) {
          const repairTask = `research/${args.ctx.run}-batch-${b}-step4-repair-${args.round}.task.md`;
          writeFileSync(R(args.ctx, repairTask), [
            `# Step 4 digest correction — batch ${b}`,
            '',
            `Read research/${args.ctx.run}-batch-${b}-step4-read.task.md for the exact assigned scope.`,
            `Inspect the existing research/${args.ctx.run}-batch-${b}-step5-context.json and preserve supported findings.`,
            'Correct the specific failures below. Reopen the relevant items and sources where evidence is missing; do not repeat a completed reading solely to remove an extra JSON field.',
            'Return the complete corrected schema-constrained digest. Do not invent missing evidence or erase a substantive finding just to pass a gate.',
            '',
            '## Exact gate diagnostics',
            '',
            text,
          ].join('\n') + '\n');
          args.executor.start(args.stage, {
            role: 'alpha-batch-read',
            // Not `<label>` alone: that matches the stage pattern, and a repair
            // round must not be mistaken for the unit's own coverage.
            label: `read-again-${b}-${args.round}`,
            job: 'audit',
            covers: [],
            brief: 'briefs/alpha.md',
            task: repairTask,
            outputSchema: 'briefs/schemas/step5-context.json',
            resultArtifact: `research/${args.ctx.run}-batch-${b}-step5-context.json`,
            timeout: 21600,
          });
        }
        return;
      }
      if (args.failure.id !== 'judge-closure') return;
      const r = await mechanicalRepair({ ctx: args.ctx, failure: { id: 'judge-closure' }, judgeLineup: 'sol61', judgeEffort: 'high' });
      // A lane down to an account limit is not a failed repair: report the
      // outage and the executor refunds the round and waits on a clock.
      if (r.outcome === 'outage') return { outage: { reason: r.reason! } };
    },
  },

  // The step-5 baseline, for the same reason as `3-baseline`: `step5-guard`
  // compares every changed item against a snapshot taken BEFORE adjudication
  // began. Taken afterwards it licenses whatever happened.
  {
    id: '5-baseline',
    label: 'pre-adjudication touch snapshot (mechanical)',
    units: () => ['all'],
    pattern: resultPattern('tool', 'snap-pre-step5'),
    artifacts: (ctx) => [touchesPath(ctx), `research/${ctx.run}-step5-auditor-baseline.json`],
    concurrency: 1,
    plan: (ctx) => [{
      role: 'tool',
      label: 'snap-pre-step5',
      job: 'bookkeeping-mechanical',
      covers: ['all'],
      argv: ['node', 'tools/stage-touch-baseline.mjs', '--run', ctx.run, '--step', '5',
        '--touches', touchesPath(ctx), '--label', 'pre-step5-v2'],
    }],
    gatesWaived: 'A snapshot has nothing to check beyond its own existence; it is the baseline '
      + 'the step-5 guard measures the next stage against.',
  },

  ...step5Stages({ gate, repoWide, contractGates, ledgerGate, closureGate, auditorCreatedGate, step5GuardGate }),

  {
    id: '5-freeze',
    label: 'freeze the closed Step-5 item state',
    units: () => ['all'],
    pattern: resultPattern('tool', 'snap-after-step5-close'),
    artifacts: (ctx) => [touchesPath(ctx)],
    concurrency: 1,
    plan: (ctx) => [{
      role: 'tool', label: 'snap-after-step5-close', job: 'bookkeeping-mechanical', covers: ['all'],
      argv: ['node', 'tools/touchlog.mjs', 'snap', touchesPath(ctx), 'post-step5'],
    }],
    gatesWaived: 'The preceding complete Step-5 gate battery validated the stable certification and this immediately following '
      + 'mechanical snapshot freezes that exact item state for closeout; its artifact existence is required.',
  },

  {
    id: '6-contract-close',
    label: 'terminal contract and defect-ledger closure',
    units: () => ['all'],
    artifacts: () => 'research/DEFECT-LEDGER.md',
    pattern: resultPattern('tool', 'step6-contract-close-v2'),
    concurrency: 1,
    plan: () => [{
      role: 'tool',
      label: 'step6-contract-close-v2',
      job: 'bookkeeping-mechanical',
      covers: ['all'],
      argv: ['node', 'tools/defect-ledger.mjs', 'render'],
    }],
    // This is an early terminal-ledger closer, not yet a final-text check:
    // pathway placement, pathway prose, and stamps still follow.  Re-running
    // repo-wide and level coverage here used a full pass on a tree later stages
    // could immediately supersede.  `9-readiness-v2` owns the first full
    // final-text validation, and the read-only report integrity receipt lets
    // `6-close-v2` safely reuse it on an unchanged protected tree.
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
            brief: 'briefs/content-repair.md',
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

  // Step 6 is intentionally serial. Frontier 16's old report stage launched
  // snapshot, pathway mutation and report writing together; the report could
  // therefore read state that had not happened yet. Each transition below owns
  // one durable artifact and the next stage cannot start without it.
  {
    id: '6-snapshot-v2', label: 'pre-closeout touch snapshot', units: () => ['all'],
    pattern: resultPattern('tool', 'snap-pre-closeout-v2'), concurrency: 1,
    plan: (ctx) => [{ role: 'tool', label: 'snap-pre-closeout-v2', job: 'bookkeeping-mechanical',
      covers: ['all'], argv: ['node', 'tools/touchlog.mjs', 'snap', touchesPath(ctx), 'pre-closeout-v2'] }],
    gatesWaived: 'This is the immutable endpoint used by later touch audits; successful execution is its receipt.',
  },
  {
    id: '6-pathway-sync-v2', label: 'mechanical pathway placement', units: () => ['all'],
    artifacts: (ctx) => `research/${ctx.run}-pathway.json`,
    pattern: resultPattern('tool', 'pathway-sync-v2'), concurrency: 1,
    plan: (ctx) => [{ role: 'tool', label: 'pathway-sync-v2', job: 'bookkeeping-mechanical',
      covers: ['all'], argv: ['node', 'tools/pathway-sync.mjs', '--run', ctx.run] }],
    gates: (ctx) => [frontierItemGate(ctx, 'pathcheck', 'pathcheck'), closureGate(ctx)],
  },
  {
    id: '6-pathway-seed-v2', label: 'pathway prose obligations', units: () => ['all'],
    artifacts: (ctx) => `research/${ctx.run}-pathway-closure.json`,
    pattern: resultPattern('tool', 'pathway-seed-v2'), concurrency: 1,
    plan: (ctx) => [{ role: 'tool', label: 'pathway-seed-v2', job: 'bookkeeping-mechanical',
      covers: ['all'], argv: ['node', 'tools/pathway-closure.mjs', 'seed', '--run', ctx.run] }],
    gatesWaived: 'The seed deliberately contains pending cognitive prose obligations; the next stage is their hard gate.',
  },
  {
    id: '6-pathway-author-v2', label: 'Lead Alpha pathway rewrite', units: () => ['all'],
    artifacts: (ctx) => `research/${ctx.run}-pathway-closure.json`,
    // Role `alpha-high` since 2026-08-24; the pattern still said `alpha`. No run
    // has reached step 6 under the new lane, so there is no legacy result to
    // keep matching and the correct single spelling is enough.
    pattern: resultPattern('alpha-high', 'pathway-close-v2'), concurrency: 1,
    plan: (ctx) => [{ role: 'alpha-high', label: 'pathway-close-v2', job: 'authoring', covers: ['all'],
      brief: 'briefs/alpha.md',
      task: [`research/${ctx.run}-alpha-pathway.task.md`, 'briefs/tasks/alpha-pathway.md'], timeout: 10800 }],
    gates: (ctx) => [
      gate('pathway-closure', ['node', 'tools/pathway-closure.mjs', 'check', '--run', ctx.run]),
      frontierItemGate(ctx, 'pathcheck', 'pathcheck'), frontierItemGate(ctx, 'prosecheck', 'prosecheck'), closureGate(ctx),
    ],
  },
  {
    id: '6-stamps-v2', label: 'final judge stamps', units: () => ['all'],
    artifacts: (ctx) => `research/${ctx.run}-judge-stamps.json`,
    pattern: resultPattern('tool', 'judge-stamps-v2'), concurrency: 1,
    plan: (ctx) => [{ role: 'tool', label: 'judge-stamps-v2', job: 'bookkeeping-mechanical', covers: ['all'],
      argv: ['node', 'tools/apply-judge-stamps.mjs', '--ledger', `research/${ctx.run}-judge.jsonl`,
        '--exclude-published',
        '--manifests', batches(ctx).map((b: any) => `research/${ctx.run}-batch-${b}.pages.json`).join(','),
        '--terminal-resolutions', terminalResolutionsPath(ctx),
        ...auditorCertificationArgs(ctx),
        '--apply', '--report', `research/${ctx.run}-judge-stamps.json`] }],
    gates: (ctx) => [gate('judge-stamps', ['node', 'tools/apply-judge-stamps.mjs', '--ledger', `research/${ctx.run}-judge.jsonl`,
      '--exclude-published',
      '--manifests', batches(ctx).map((b: any) => `research/${ctx.run}-batch-${b}.pages.json`).join(','),
      '--terminal-resolutions', terminalResolutionsPath(ctx), ...auditorCertificationArgs(ctx), '--verify'], {
      liveness: { pattern: /judge-stamps: (\d+) item\(s\) in scope/.source, min: 1, unit: 'items in scope' } }), closureGate(ctx)],
  },
  {
    id: '6-readiness-v2', label: 'structured publication readiness', units: () => ['all'],
    artifacts: (ctx) => `research/${ctx.run}-publication-readiness.json`,
    pattern: resultPattern('tool', 'readiness-v2'), concurrency: 1,
    plan: (ctx) => [{ role: 'tool', label: 'readiness-v2', job: 'bookkeeping-mechanical', covers: ['all'],
      argv: ['node', 'tools/publication-ready.mjs', '--run', ctx.run, '--write'] }],
    // Full level coverage already performs the configured-judge closure and
    // writes its receipt. Running the judge-only scan beside it reread every
    // manifest, verdict, adjudication and terminal resolution for no added
    // assurance.
    gates: (ctx) => [...repoWide(ctx), levelCoverageGate(ctx), ledgerGate(ctx, { terminal: true }),
      // Both gates share one actual renderer scan, cached on content and
      // renderer/checker inputs. No new agent stage or repeated SSR pass.
      gate('proof-step-separation', ['node', 'tools/proof-layout.mjs', '--run', ctx.run, '--write', '--gate', 'proof-step-separation']),
      gate('proof-blue-tags', ['node', 'tools/proof-layout.mjs', '--run', ctx.run, '--write', '--gate', 'proof-blue-tags']),
      gate('publication-readiness', ['node', 'tools/publication-ready.mjs', '--run', ctx.run, '--verify'])],
  },
  // Reconcile the final receipts and append-only ledgers once.  The reporter
  // receives this compact evidence packet instead of re-running gates or
  // reconstructing fatal counts from prose; the exhaustive defect table is
  // rendered mechanically from it.
  {
    id: '6-evidence-v2', label: 'mechanically reconciled owner evidence', units: () => ['all'],
    artifacts: (ctx) => `research/${ctx.run}-step6-evidence.json`,
    pattern: resultPattern('tool', 'step6-evidence-v2'), concurrency: 1,
    plan: (ctx) => [{ role: 'tool', label: 'step6-evidence-v2', job: 'bookkeeping-mechanical', covers: ['all'],
      argv: ['node', 'tools/step6-report.mjs', 'evidence', '--run', ctx.run] }],
    gates: (ctx) => [gate('step6-evidence', ['node', 'tools/step6-report.mjs', 'check-evidence', '--run', ctx.run])],
  },
  // Freeze the validated mathematical tree before asking for prose.  The next
  // agent is kernel-enforced read-only and returns JSON; this receipt catches an
  // out-of-band mutation as a hard failure rather than trusting that instruction.
  {
    id: '6-report-baseline-v2', label: 'freeze validated tree before reporting', units: () => ['all'],
    artifacts: (ctx) => `research/${ctx.run}-step6-report-integrity.json`,
    pattern: resultPattern('tool', 'report-baseline-v2'), concurrency: 1,
    plan: (ctx) => [{ role: 'tool', label: 'report-baseline-v2', job: 'bookkeeping-mechanical', covers: ['all'],
      argv: ['node', 'tools/step6-report.mjs', 'snapshot', '--run', ctx.run] }],
    gates: (ctx) => [gate('report-integrity', ['node', 'tools/step6-report.mjs', 'check', '--run', ctx.run])],
  },
  {
    id: '6-owner-report-v2', label: 'read-only evidence-bound owner report', units: () => ['all'],
    artifacts: (ctx) => `research/${ctx.run}-step6-report.response.json`,
    pattern: resultPattern('alpha-report', 'owner-report-v2'), concurrency: 1,
    plan: (ctx) => [{ role: 'alpha-report', label: 'owner-report-v2', job: 'reporting', covers: ['all'],
      brief: 'briefs/alpha.md', task: `research/${ctx.run}-alpha-step6.task.md`, timeout: 10800,
      outputSchema: 'briefs/schemas/step6-report.json', resultArtifact: `research/${ctx.run}-step6-report.response.json` }],
    gates: (ctx) => [gate('step6-evidence', ['node', 'tools/step6-report.mjs', 'check-evidence', '--run', ctx.run]),
      gate('report-response', ['node', 'tools/step6-report.mjs', 'check-response', '--run', ctx.run])],
  },
  {
    id: '6-owner-report-render-v2', label: 'materialize owner report', units: () => ['all'],
    artifacts: (ctx) => `research/${ctx.run}-step6-report.md`,
    pattern: resultPattern('tool', 'owner-report-render-v2'), concurrency: 1,
    plan: (ctx) => [{ role: 'tool', label: 'owner-report-render-v2', job: 'bookkeeping-mechanical', covers: ['all'],
      argv: ['node', 'tools/step6-report.mjs', 'render', '--run', ctx.run] }],
    gates: (ctx) => [
      gate('report-integrity', ['node', 'tools/step6-report.mjs', 'check', '--run', ctx.run]),
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
    id: '6-close-v2',
    label: 'close-out commit on main',
    units: () => ['all'],
    pattern: resultPattern('tool', 'close-step6-v2'),
    concurrency: 1,
    plan: (ctx) => [{
      role: 'tool',
      label: 'close-step6-v2',
      job: 'bookkeeping-mechanical',
      covers: ['all'],
      timeout: 300,
      // run-commit writes this final receipt before staging, so the one close
      // commit contains its own coverage evidence and the engine must not add
      // a second, post-commit receipt.
      writeReceipt: false,
      argv: ['node', 'tools/run-commit.mjs', '--run', ctx.run, '--require-proof-layout', '--final-receipt',
        `research/${ctx.run}-dispatch/tool-close-step6-v2.result.json`],
    }],
    gates: (ctx) => [
      // No liveness floor: zero obligation rows is a legitimately empty set.
      gate('obligations', ['node', 'tools/obligations.mjs', 'check', '--run', ctx.run, '--terminal']),
      gate('proof-step-separation', ['node', 'tools/proof-layout.mjs', '--run', ctx.run, '--verify', '--gate', 'proof-step-separation']),
      gate('proof-blue-tags', ['node', 'tools/proof-layout.mjs', '--run', ctx.run, '--verify', '--gate', 'proof-blue-tags']),
      // `9-readiness-v2` already ran repo-wide, level coverage, judge closure,
      // terminal ledger, and stamp validation, and its receipt sealed the tree
      // on which those gates ran. The later report baseline independently
      // protects the evidence/report interval. Together their cheap hash checks
      // prove the validated inputs remain current instead of paying the same
      // full scan again. Any unexpected mutation is an honest hard stop.
      gate('report-integrity', ['node', 'tools/step6-report.mjs', 'check', '--run', ctx.run]),
      gate('publication-readiness', ['node', 'tools/publication-ready.mjs', '--run', ctx.run,
        '--verify', '--require-report']),
      // Last, so the commit the gate verifies includes the rendered report and
      // any obligation closure written in a repair round.
      gate('tree-clean', ['node', 'tools/run-commit.mjs', '--run', ctx.run, '--check']),
    ],
    // The close command commits its own receipt, so a clean run passes on the
    // first battery. Repair rounds remain for a real late obligation; a
    // report-integrity mismatch is never auto-repaired because it signals an
    // unexpected protected-tree mutation.
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

// Owner-selected late-stage model boundary. Apply it at the
// stage boundary so repair hooks and obligation re-dispatches cannot silently
// fall back to their role's ordinary lane. Tool plans remain deterministic.
for (const stage of stages) {
  // Refresh the one frontier index at mutable joins, not frozen judge/stamp
  // stages. Reviewers maintain batch-owned evidence; this merge is mechanical.
  if (['2-scope-review',
    '3a-adjudicate', '5.2-impact', '5.6-impact', '5.9-repair'].includes(stage.id)) {
    const previousGates = stage.gates;
    stage.gates = (ctx: any) => [gate('frontier-dependency-ledger',
      ['node', 'tools/frontier-dependency-ledger.mjs', 'refresh', '--run', ctx.run,
        ...(stage.id === '2-scope-review' ? ['--require-reviewed'] : [])]),
      ...(previousGates?.(ctx) ?? [])];
  }
  if (/^6-/.test(stage.id)) {
    stage.modelProfile = (plan: any) => plan.role === 'tool' ? undefined : DEEPSEEK_FLASH_MAX;
  }
}

export const workflowRevision = 'six-step-v1-construction-scope';
export const stagesForRun = (ctx: any) => appendStages(stages, ctx);
export default { stages, stagesForRun, batches, alphaGroups, workflowRevision };
