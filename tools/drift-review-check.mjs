#!/usr/bin/env node
// drift-review-check — gate the step-0 prerequisite-drift review.
//
//   node tools/drift-review-check.mjs --run <run>
//
// The drift review is an Alpha reading task: does any track design require a
// prerequisite the spec's `requires` closure lacks? `autopilot plan` assembles
// the evidence and writes the task; the engine dispatches it as the `drift`
// unit of stage 1. THIS gate is what makes that node unable to be skipped —
// it was written after the review was found to be a never-invoked node: the
// task file existed, the plan output said "dispatched as the first audit
// node", and nothing dispatched it or required its report.
//
// Fails when:
//   - the report is missing (the review has not run),
//   - any A page the run owes lacks exactly one well-formed VERDICT line,
//   - a drift-applied/drift-blocked verdict names no edge,
//   - any verdict is drift-blocked. This USED TO BE the routine disposition for
//     a reading-order change or a prerequisite with no page id, both being the
//     owner's alone. It is not any more (owner, 2026-08-24): the Alpha may mint
//     a missing prerequisite, may reorder to close a forward edge, and above
//     three mintings must rescope the run onto the dependencies instead. So a
//     blocked verdict now means the Alpha declined authority it has, and the
//     run still stops — the point of the stop has moved from "an owner must
//     decide" to "nobody decided".
//   - AN APPLIED EDGE IS NOT TRUE OF `plan-spec.json`, points forward, or names
//     a page that neither exists nor is built by this run.
//
// THE LAST CLAUSE, AND WHY IT IS NOT OPTIONAL. This gate began as a pure prose
// check over a stage whose whole purpose is to MUTATE THE PLAN, so it could
// confirm that a review happened and say nothing about what it did. On
// `frontier-16` the review read a design sentence saying CA-5 "cites the
// canonical statement on `the-fundamental-theorem-of-algebra` once that
// predecessor is authored", and turned that conditional future citation into a
// hard `requires` edge. FTA is planned, unauthored, and deliberately out of
// scope since frontier-15 because its route needs two unbuilt Galois pages.
//
// Nothing could see it. `validate-plan` passes, because the edge is backward
// and a planned page with no item list has no dependencies to assert. This gate
// passed, because the report's prose was well-formed. The effect was that the
// page being scaffolded at that moment became unbuildable, and with it the
// twenty-three pairs of the complex-analysis track that chain through it —
// discovered only by re-running `frontier`, which nothing does after step 0.
//
// An edge to an unbuilt page is not a small error: it is indistinguishable from
// a correct edge until someone asks whether the target exists.
//
// The verdict contract (written into the task template in
// tools/autopilot/bin/autopilot.mts — change them together):
//   ### <a-page-id>
//   ...prose: what was read, what was found...
//   VERDICT: no-drift
//   VERDICT: drift-applied — added <page-id> (order <n>)[, ...]
//   VERDICT: drift-minted — <page-id> (order <n>)[, ...]
//   VERDICT: drift-reordered — <page-id> (order <old> -> <new>)[, ...]
//   VERDICT: drift-rescoped — build <page-id> (order <n>)[, ...] instead
//   VERDICT: drift-blocked — <the exact edge and why no authority reaches it>
//
// `drift-minted` and `drift-rescoped` are materialised by tools/drift-apply.mjs,
// which the `1-drift` stage runs as its mechanical repair. This gate does not
// re-check their bookkeeping directly: a minted page that never reached a
// manifest is absent from the scope ledger, so the unbuildable-edge loop below
// still reports its citing page. One check, not two that can disagree.

import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const argv = process.argv.slice(2);
const opt = (n) => { const i = argv.indexOf(`--${n}`); return i >= 0 && argv[i + 1] ? argv[i + 1] : null; };
const run = opt('run');
if (!run) { console.error('usage: node tools/drift-review-check.mjs --run <run>'); process.exit(2); }

const ledgerPath = `research/${run}-scope-ledger.json`;
const reportPath = `research/${run}-alpha-step0-drift.md`;

if (!existsSync(ledgerPath)) {
  console.error(`ERROR drift-check-no-ledger: ${ledgerPath} does not exist — run \`autopilot plan\``);
  process.exit(1);
}
const owed = (JSON.parse(readFileSync(ledgerPath, 'utf8')).pages ?? [])
  .filter((p) => p.kind === 'A')
  .map((p) => p.id);
if (!owed.length) {
  // An empty owed set would make every report "complete". That is a scope
  // defect upstream, never a pass here.
  console.error(`ERROR drift-check-empty-ledger: ${ledgerPath} owes no A pages`);
  process.exit(1);
}
if (!existsSync(reportPath)) {
  console.error(`ERROR drift-check-no-report: ${reportPath} — the drift review has not run`);
  process.exit(1);
}
const text = readFileSync(reportPath, 'utf8');

// What a `requires` edge may point at: a page a reader can already open, or one
// this run is building. Anything else leaves the citing page unbuildable.
const specPath = 'research/plan-spec.json';
if (!existsSync(specPath)) {
  console.error(`ERROR drift-check-no-spec: ${specPath} does not exist`);
  process.exit(1);
}
const spec = JSON.parse(readFileSync(specPath, 'utf8'));
const pageById = new Map((spec.pages ?? []).map((p) => [p.id, p]));

// Page id is the file stem, and `status:` is the only field that decides
// whether a reader can open it — the same rule the frontier's wave computation
// uses, so this gate and buildability cannot disagree.
const published = new Set();
const walkLibrary = (dir) => {
  if (!existsSync(dir)) return;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walkLibrary(p);
    else if (e.name.endsWith('.md')) {
      const m = /^status:\s*(\S+)/m.exec(readFileSync(p, 'utf8'));
      if (m && m[1] === 'published') published.add(e.name.replace(/\.md$/, ''));
    }
  }
};
walkLibrary('library');

const builtHere = new Set((JSON.parse(readFileSync(ledgerPath, 'utf8')).pages ?? []).map((p) => p.id));
const satisfiable = (id) => published.has(id) || builtHere.has(id);

const errors = [];
let applied = 0;
let edgesChecked = 0;

// A verdict names its pages as `<page-id> (order <n>)`. Shared by every verdict
// kind that names one, so the report contract has a single spelling.
const idsWithOrder = (detail) =>
  [...detail.matchAll(/`?([a-z0-9][a-z0-9-]*)`?\s*\(order\s*[0-9.]+\)/g)].map((m) => m[1]);

// Every `requires` edge of every page this run owes, not only the ones this
// report claims to have added. A bad edge from any source has the same effect,
// and this is the last stage that can see it cheaply.
for (const id of owed) {
  const page = pageById.get(id);
  if (!page) { errors.push(`drift-check-unknown-page: ${id} is owed but absent from ${specPath}`); continue; }
  for (const req of page.requires ?? []) {
    edgesChecked += 1;
    if (satisfiable(req)) continue;
    const target = pageById.get(req);
    errors.push(`drift-check-unbuildable-edge: ${id} requires \`${req}\`, which is `
      + (target ? `planned (order ${target.order}) but neither published nor built by this run`
                : 'not a page in the plan at all')
      + ` — the citing page cannot be built, and neither can anything downstream of it`);
  }
}

for (const id of owed) {
  const esc = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const head = text.match(new RegExp(`^###\\s+\`?${esc}\`?\\s*$`, 'm'));
  if (!head) { errors.push(`drift-check-missing-page: no \`### ${id}\` section in the report`); continue; }
  const start = head.index + head[0].length;
  const rest = text.slice(start);
  const next = rest.search(/^###\s/m);
  const body = next < 0 ? rest : rest.slice(0, next);
  const verdicts = [...body.matchAll(/^VERDICT:\s*(no-drift|drift-applied|drift-minted|drift-reordered|drift-rescoped|drift-blocked)\b[ —-]*(.*)$/gm)];
  if (verdicts.length !== 1) {
    errors.push(`drift-check-verdict: ${id} has ${verdicts.length} VERDICT line(s); exactly one is required`);
    continue;
  }
  const [, kind, detail] = verdicts[0];
  if (kind !== 'no-drift' && !detail.trim()) {
    errors.push(`drift-check-detail: ${id} is ${kind} but names no edge`);
  }
  if (kind === 'drift-applied' && detail.trim()) {
    applied += 1;
    // The verdict names its edges as `<page-id> (order <n>)`. Each must be true
    // of the spec and must point backward. A report claiming an edit it did not
    // make produces the same file as one that made it — the same failure the
    // step-3 recheck exists for, one stage earlier.
    const named = idsWithOrder(detail);
    if (!named.length) {
      errors.push(`drift-check-detail: ${id} is drift-applied but its detail names no \`<page-id> (order <n>)\` edge`);
      continue;
    }
    const page = pageById.get(id);
    for (const target of named) {
      if (!(page?.requires ?? []).includes(target)) {
        errors.push(`drift-check-not-applied: ${id} reports adding \`${target}\` but ${specPath} does not carry the edge`);
        continue;
      }
      const t = pageById.get(target);
      if (t && page && Number(t.order) >= Number(page.order)) {
        errors.push(`drift-check-forward-edge: ${id} (order ${page.order}) requires \`${target}\` (order ${t.order}) — `
          + 'a forward edge is a reading-order change and is the owner\'s alone');
      }
    }
  }
  // MINTED / RESCOPED. The Alpha decided; `tools/drift-apply.mjs` does the
  // bookkeeping and the unbuildable-edge loop above is what proves it landed —
  // a minted page that never reached a manifest is not in the scope ledger, so
  // its citing page still reads as unbuildable and this gate still fails. That
  // is the check; there is nothing extra to assert here.
  if (kind === 'drift-minted' || kind === 'drift-rescoped') {
    applied += 1;
    if (!idsWithOrder(detail).length) {
      errors.push(`drift-check-detail: ${id} is ${kind} but its detail names no \`<page-id> (order <n>)\` page`);
    }
  }
  // REORDERED moves a page in reading order to close a forward edge (owner,
  // 2026-08-24). VERIFIED AGAINST THE SPEC, because a report that claims an
  // edit produces the same file as one that made it — the same reason
  // `drift-check-not-applied` exists for drift-applied. `drift-check-forward-edge`
  // does NOT cover this: it only runs over the edges a drift-applied verdict
  // names, so an unmade reorder would otherwise pass unseen.
  if (kind === 'drift-reordered') {
    applied += 1;
    const moves = [...detail.matchAll(/`?([a-z0-9][a-z0-9-]*)`?\s*\(order\s*([0-9.]+)\s*(?:->|→)\s*([0-9.]+)\)/g)];
    if (!moves.length) {
      errors.push(`drift-check-detail: ${id} is drift-reordered but its detail names no `
        + '`<page-id> (order OLD -> NEW)` move');
    }
    for (const [, target, from, to] of moves) {
      const t = pageById.get(target);
      if (!t) {
        errors.push(`drift-check-reorder-unknown-page: ${id} reports moving \`${target}\`, absent from ${specPath}`);
      } else if (Number(t.order) !== Number(to)) {
        errors.push(`drift-check-not-reordered: ${id} reports moving \`${target}\` from ${from} to ${to}, `
          + `but ${specPath} carries order ${t.order}`);
      }
    }
  }
  if (kind === 'drift-blocked') {
    errors.push(`drift-check-blocked: ${id} — ${detail.trim() || 'unspecified edge'} — `
      + 'minting a missing prerequisite, reordering to close a forward edge, and rescoping onto '
      + 'dependencies are all Alpha authority (owner, 2026-08-24). Use drift-minted, drift-reordered '
      + 'or drift-rescoped; drift-blocked stops the run and is now a last resort, not a routine finding.');
  }
}

if (errors.length) {
  for (const e of errors) console.error(`ERROR ${e}`);
  process.exit(1);
}
console.log(`drift-review-check: ${owed.length} page(s) reviewed, ${applied} spec edit(s) applied, no blocked edges; `
  + `${edgesChecked} requires edge(s) checked, every one published or built by this run`);
