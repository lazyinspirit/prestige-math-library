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

import { readFileSync, readdirSync, existsSync } from 'node:fs';
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

/**
 * Every `requires` edge of the proposed pair set that points at a page which is
 * neither published nor built by this run.
 *
 * THE SAME PREDICATE `drift-review-check` ENFORCES AT STAGE 1, checked before
 * a single agent is dispatched. On frontier-18 a fourteen-pair set was planned
 * whose ten largest members cited the previous run's pages while that run was
 * still `draft`. `frontier` had already reported the buildable wave as four;
 * the plan overrode it by hand, and nothing between `plan` and the stage-1
 * gate could see the difference. The gate caught it — three hours and twenty
 * minutes later, after ten Betas had scaffolded and a whole session window was
 * spent, and it caught it as a stop that needed a person.
 *
 * Publication state is read from the FILESYSTEM, never from git: the owner
 * flips `status: published` on disk hours before committing, so a commit
 * timestamp says nothing about whether a page is readable.
 */
export function unsatisfiableEdges(repo: string, pageIds: string[]): any[] {
  const spec = loadPlan(repo);
  const byId = new Map<string, any>(spec.pages.map((p: any) => [p.id, p]));
  const status = pageStatus(repo);
  const published = new Set([...status.entries()].filter(([, s]) => s === 'published').map(([id]) => id));

  const inRun = new Set<string>();
  for (const id of pageIds) {
    inRun.add(id);
    inRun.add(byId.get(id)?.companion ?? `${id}-examples`);
  }
  const out: any[] = [];
  for (const id of [...inRun].sort()) {
    const page: any = byId.get(id);
    if (!page) { out.push({ page: id, requires: null, why: 'absent from plan-spec.json' }); continue; }
    for (const req of page.requires ?? []) {
      if (published.has(req) || inRun.has(req)) continue;
      const t: any = byId.get(req);
      out.push({
        page: id,
        requires: req,
        why: t
          ? `planned (order ${t.order}) but ${status.has(req) ? `on disk as ${status.get(req)}` : 'not built'} and not in this run`
          : 'not a page in the plan at all',
      });
    }
  }
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

// packBatches / writeManifests live in tools/plan-manifests.mjs so that
// `tools/drift-apply.mjs` — a plain .mjs tool that cannot load a .mts module —
// materialises a minted page through the SAME packer `plan` used. Two
// implementations of a batcher produce two packings of the same pages.
export { packBatches, writeManifests, scaffoldedManifests } from '../../plan-manifests.mjs';


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
