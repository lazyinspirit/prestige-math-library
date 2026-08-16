// Step 0, mechanically: what is buildable, how it batches, and what the plan
// and the design docs disagree about.
//
// All three of these were done by hand at the start of the last run. All three
// are deterministic functions of files already on disk, and doing them by hand
// is how the run picks up its first defect before an agent has even started.
//
// THE FRONTIER. A page is buildable when every page in its `requires` is
// published. Iterating that gives waves. It must be computed from PUBLICATION
// STATE on disk, never from a page count or a remembered position — a page can
// exist as a draft, be planned but unbuilt, or be published, and only the third
// licenses a dependent.
//
// THE BATCHING. Pack A pages to the cap by prerequisite affinity so that
// dependency seams fall INSIDE a batch rather than between two. Merging two
// batches can only remove cross-batch edges, never add them, so affinity
// packing is safe to do greedily.
//
// THE DRIFT CHECK. A track design names the prerequisites a page needs; the
// spec declares them. When they disagree, the Beta scaffolds against the design
// and step 4 fails with an undeclared-prerequisite error — after the citation
// has been written. Diffing them at step 0 turns a rewrite into a one-line spec
// edit. On the last run this found exactly one drift, and it was real.

import { readFileSync, readdirSync, existsSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

export function loadPlan(repo: string): any {
  return JSON.parse(readFileSync(join(repo, 'research', 'plan-spec.json'), 'utf8'));
}

/** id -> status, for every page file on disk. Absent means "not built". */
export function pageStatus(repo: string): Map<string, string> {
  const out = new Map<string, any>();
  const root = join(repo, 'library');
  const walk = (dir) => {
    if (!existsSync(dir)) return;
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith('.md')) {
        const m = /^status:\s*(\S+)/m.exec(readFileSync(p, 'utf8'));
        out.set(e.name.replace(/\.md$/, ''), m ? m[1] : 'unknown');
      }
    }
  };
  walk(root);
  return out;
}

export function waves(repo: string, { categories = null }: { categories?: string[] | null } = {}): any {
  const spec = loadPlan(repo);
  const byId = new Map<string, any>(spec.pages.map((p: any) => [p.id, p]));
  const status = pageStatus(repo);
  const published = new Set([...status.entries()].filter(([, s]) => s === 'published').map(([id]) => id));

  const inScope = (p) => p.kind === 'A' && !status.has(p.id) && (!categories || categories.includes(p.category));
  const targets = spec.pages.filter(inScope);

  const have = new Set(published);
  const remaining = new Set<string>(targets.map((p: any) => p.id));
  const out: any[] = [];
  const blocked = [];

  while (remaining.size) {
    const ready = targets.filter((p: any) => remaining.has(p.id) && (p.requires ?? []).every((r: any) => have.has(r)));
    if (!ready.length) {
      for (const id of remaining as Set<string>) {
        const p: any = byId.get(id);
        const external = (p.requires ?? []).filter((r: any) => !have.has(r) && !remaining.has(r));
        blocked.push({ id, title: p.title, category: p.category, blockedBy: external });
      }
      break;
    }
    out.push(ready.map((p: any) => ({
      id: p.id, order: p.order, category: p.category, title: p.title,
      requires: p.requires ?? [],
      companion: p.companion ?? `${p.id}-examples`,
    })));
    for (const p of ready) {
      have.add(p.id);
      have.add(p.companion ?? `${p.id}-examples`);
      remaining.delete(p.id);
    }
  }
  return { waves: out, blocked };
}

/** Transitive `requires` closure of a page, over the plan. */
export function closure(byId: Map<string, any>, pid: string): Set<string> {
  const seen = new Set<string>();
  const stack = [...(byId.get(pid)?.requires ?? [])];
  while (stack.length) {
    const x = stack.pop();
    if (seen.has(x)) continue;
    seen.add(x);
    stack.push(...(byId.get(x)?.requires ?? []));
  }
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
export function packBatches(repo: string, pageIds: string[], { cap = 2 }: { cap?: number } = {}): string[][] {
  const spec = loadPlan(repo);
  const byId = new Map<string, any>(spec.pages.map((p: any) => [p.id, p]));
  const ids = [...pageIds];
  const cl = new Map<string, any>(ids.map((id: any) => [id, closure(byId, id)]));
  const affinity = (a, b) => {
    const A = cl.get(a); const B = cl.get(b);
    let n = 0;
    for (const x of A) if (B.has(x)) n += 1;
    return n;
  };
  const sameCategory = (a, b) => byId.get(a)?.category === byId.get(b)?.category;

  const remaining = new Set(ids);
  const out: any[] = [];
  // Deterministic seed order, so the same input always produces the same
  // batching — a run that batches differently on a re-plan is unreviewable.
  const ordered = ids.slice().sort((a: any, b: any) => (byId.get(a).order ?? 0) - (byId.get(b).order ?? 0));

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

/** Write the step-0 batch manifests, with empty item lists for the Betas. */
export function writeManifests(repo: string, run: string, batchGroups: string[][]): any[] {
  const spec = loadPlan(repo);
  const byId = new Map<string, any>(spec.pages.map((p: any) => [p.id, p]));
  const KEYS = ['order', 'id', 'kind', 'category', 'title', 'companion', 'requires', 'items'];
  const written: any[] = [];
  batchGroups.forEach((group: any, i: any) => {
    const entries: any[] = [];
    for (const a of group) {
      const A: any = byId.get(a);
      if (!A) throw new Error(`unknown page ${a}`);
      const bId = A.companion ?? `${a}-examples`;
      const B: any = byId.get(bId);
      if (!B) throw new Error(`page ${a} has no companion entry ${bId} in the plan`);
      for (const p of [A, B]) {
        const e: any = {};
        for (const k of KEYS) if (k in p) e[k] = k === 'items' ? [] : p[k];
        if (!('items' in e)) e.items = [];
        entries.push(e);
      }
    }
    const path = join(repo, 'research', `${run}-batch-${i + 1}.pages.json`);
    writeFileSync(path, JSON.stringify(entries, null, 2) + '\n');
    written.push({ batch: i + 1, path, pages: entries.map((e: any) => e.id) });
  });
  return written;
}

/**
 * Assemble the evidence an Alpha needs to judge prerequisite drift.
 *
 * NOT A DETECTOR, AND THAT IS A CORRECTION. This was a heuristic that parsed
 * design documents for `requires` declarations. Three versions:
 *
 *   proximity scan      54 candidates for one page — unreadable, so unread
 *   declaration parser  precise, but MISSED the one real drift on the last run
 *                       (`ascoli-arzela` needed `compactness`; its design says
 *                       so in prose and never writes a requires line)
 *   + attribution       fixed four false positives, and pushed three pages that
 *                       DO declare back onto the noisy path
 *
 * Each version traded one error class for another, which is the signature of a
 * task that is not mechanical. Determining what a design document requires
 * means READING it: the claim can be in a table, a scope denial, a sentence
 * about why something was postponed, or a paragraph explaining that a
 * restriction was forced by a page that has since been built. No regex reaches
 * that, and a regex that pretends to is worse than none — it reports fiction
 * with the authority of a tool.
 *
 * The owner's rule settles it: scouting and auditing are LLM jobs, and the test
 * for mechanical is "is the answer a function of files on disk". The spec
 * closure is. What a design document means is not.
 *
 * So this computes the half that IS mechanical — each page's declared closure,
 * its design-document locations, and every page id those documents mention near
 * it — and hands that to an Alpha as an audit task. The Alpha reads the design
 * and reports drift with evidence. The mechanical half is exact and the
 * cognitive half is honest about being cognitive.
 */
export function driftEvidence(repo: string, pageIds: string[]): any[] {
  const spec = loadPlan(repo);
  const byId = new Map<string, any>(spec.pages.map((p: any) => [p.id, p]));
  const planIds = new Set(spec.pages.map((p: any) => p.id));
  const dir = join(repo, 'research');
  const docs = readdirSync(dir).filter((f: any) => f.startsWith('plan-') && f.endsWith('.md'));

  return pageIds.map((pid: any) => {
    const cl = closure(byId, pid);
    const locations: any[] = [];
    const mentioned = new Set<string>();
    for (const doc of docs) {
      const lines = readFileSync(join(dir, doc), 'utf8').split('\n');
      for (let i = 0; i < lines.length; i += 1) {
        if (!lines[i].includes(pid)) continue;
        locations.push({ doc, line: i + 1, text: lines[i].trim().slice(0, 160) });
        for (let j = Math.max(0, i - 8); j < Math.min(lines.length, i + 24); j += 1) {
          for (const m of lines[j].matchAll(/`([a-z0-9-]{2,})`/g)) {
            if (planIds.has(m[1]) && m[1] !== pid) mentioned.add(m[1]);
          }
        }
      }
    }
    const declared = (byId.get(pid)?.requires ?? []);
    return {
      page: pid,
      declaredRequires: declared,
      closure: [...cl].sort(),
      designLocations: locations.slice(0, 40),
      mentionedNearby: [...mentioned].filter((m: any) => !cl.has(m)).sort(),
    };
  });
}
