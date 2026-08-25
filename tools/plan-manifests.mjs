// The batch-manifest primitives, in plain JS so BOTH callers share one copy.
//
// WHY THIS FILE EXISTS. `packBatches` and `writeManifests` used to live only in
// `tools/autopilot/src/frontier.mts`, reachable from `autopilot plan` and from
// nothing else. `tools/drift-apply.mjs` needs exactly the same two functions to
// materialise a page the step-0 drift review minted, and a `.mjs` tool cannot
// import a `.mts` module without the TypeScript loader the engine installs for
// itself. The realistic alternative was a second implementation in drift-apply,
// which is how two batchers drift apart and produce two different packings of
// the same pages. `frontier.mts` re-exports these, so there is one packer.
//
// Nothing here reads run state beyond `plan-spec.json` and the manifests, and
// nothing here decides WHICH pages to build — that is the caller's judgment.

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

export function loadPlan(repo) {
  return JSON.parse(readFileSync(join(repo, 'research', 'plan-spec.json'), 'utf8'));
}

/** Transitive `requires` closure of a page, over the plan. */
export function closure(byId, pid) {
  const seen = new Set();
  const walk = (id) => {
    for (const r of byId.get(id)?.requires ?? []) {
      if (seen.has(r)) continue;
      seen.add(r);
      walk(r);
    }
  };
  walk(pid);
  return seen;
}

/**
 * Pack A pages into batches of at most `cap`, preferring pages that share
 * prerequisites so seams fall inside a batch.
 *
 * Greedy by shared-closure size. Optimal packing is not worth solving here: the
 * cap is 2, the candidate set is a handful of pages, and the cost of a
 * suboptimal pairing is one extra cross-batch edge, not a defect.
 */
export function packBatches(repo, pageIds, { cap = 2 } = {}) {
  const spec = loadPlan(repo);
  const byId = new Map(spec.pages.map((p) => [p.id, p]));
  const ids = [...pageIds];
  const cl = new Map(ids.map((id) => [id, closure(byId, id)]));
  const affinity = (a, b) => {
    const A = cl.get(a); const B = cl.get(b);
    let n = 0;
    for (const x of A) if (B.has(x)) n += 1;
    return n;
  };
  const sameCategory = (a, b) => byId.get(a)?.category === byId.get(b)?.category;

  const remaining = new Set(ids);
  const out = [];
  // Deterministic seed order, so the same input always produces the same
  // batching — a run that batches differently on a re-plan is unreviewable.
  const ordered = ids.slice().sort((a, b) => (byId.get(a).order ?? 0) - (byId.get(b).order ?? 0));

  for (const seed of ordered) {
    if (!remaining.has(seed)) continue;
    remaining.delete(seed);
    const group = [seed];
    while (group.length < cap) {
      let best = null; let bestScore = -1;
      // Iterate candidates in the SAME canonical order as the seeds. Iterating
      // `remaining` directly follows Set insertion order, which is the order
      // the caller passed ids in — so the same pages batched differently
      // depending on argument order, and a re-plan produced a different,
      // unreviewable batching.
      for (const cand of ordered) {
        if (!remaining.has(cand)) continue;
        // Only pair within a category: a Beta reading two literatures for two
        // unrelated subjects is slower and reads less of each.
        if (!sameCategory(seed, cand)) continue;
        const score = affinity(seed, cand);
        if (score > bestScore) { best = cand; bestScore = score; }
      }
      if (!best) break;
      remaining.delete(best);
      group.push(best);
    }
    out.push(group);
  }
  return out;
}

const MANIFEST_KEYS = ['order', 'id', 'kind', 'category', 'title', 'companion', 'requires', 'items'];

/** Manifest paths that already carry a Beta's item list, lowest batch first. */
export function scaffoldedManifests(repo, run) {
  const populated = [];
  for (let i = 1; ; i += 1) {
    const path = join(repo, 'research', `${run}-batch-${i}.pages.json`);
    if (!existsSync(path)) break;
    try {
      const pages = JSON.parse(readFileSync(path, 'utf8'));
      if ((Array.isArray(pages) ? pages : []).some((p) => (p.items ?? []).length)) populated.push(path);
    } catch { populated.push(path); }
  }
  return populated;
}

/** Write the step-0 batch manifests, with empty item lists for the Betas.
 *
 *  REFUSES to overwrite a manifest that already carries items. `plan` is a
 *  step-0 command; re-running it mid-run against a scaffolded run would reset
 *  every Beta's item list to [] — and the scope ledger regenerated in the same
 *  command would then CONFIRM the emptied manifests, so the anti-scope-loss
 *  gate could not see the loss it was built for. Scaffolded state is torn down
 *  by hand, on the record, never by a planner default.
 *
 *  `startAt` appends instead of renumbering: `drift-apply` adds a batch for a
 *  minted page while earlier manifests already exist, and rewriting those from
 *  index 1 would repoint every batch number the covers map and the dispatched
 *  labels already use. */
export function writeManifests(repo, run, batchGroups, { force = false, startAt = 1 } = {}) {
  const spec = loadPlan(repo);
  const byId = new Map(spec.pages.map((p) => [p.id, p]));
  if (!force && startAt === 1) {
    const populated = scaffoldedManifests(repo, run);
    if (populated.length) {
      throw new Error(`refusing to overwrite scaffolded manifest(s): ${populated.join(', ')} — `
        + 'they carry item lists a Beta authored. Re-planning a live run destroys them; '
        + 'pass --force only for a deliberate, on-the-record teardown.');
    }
  }
  const written = [];
  batchGroups.forEach((group, i) => {
    const entries = [];
    for (const a of group) {
      const A = byId.get(a);
      if (!A) throw new Error(`unknown page ${a}`);
      const bId = A.companion ?? `${a}-examples`;
      const B = byId.get(bId);
      if (!B) throw new Error(`page ${a} has no companion entry ${bId} in the plan`);
      for (const p of [A, B]) {
        const e = {};
        for (const k of MANIFEST_KEYS) if (k in p) e[k] = k === 'items' ? [] : p[k];
        if (!('items' in e)) e.items = [];
        entries.push(e);
      }
    }
    const batch = startAt + i;
    const path = join(repo, 'research', `${run}-batch-${batch}.pages.json`);
    writeFileSync(path, JSON.stringify(entries, null, 2) + '\n');
    written.push({ batch, path, pages: entries.map((e) => e.id) });
  });
  return written;
}
