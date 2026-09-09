#!/usr/bin/env node
// Validate drift decisions before and after mechanical materialization.
// --before-apply validates report/spec edits; the next stage enforces final scope/buildability.

import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { pageBuildability } from './buildability.mjs';

const argv = process.argv.slice(2);
const opt = (n) => { const i = argv.indexOf(`--${n}`); return i >= 0 && argv[i + 1] ? argv[i + 1] : null; };
const run = opt('run');
const beforeApply = argv.includes('--before-apply');
if (!run) { console.error('usage: node tools/drift-review-check.mjs --run <run>'); process.exit(2); }

const ledgerPath = `research/${run}-scope-ledger.json`;
const reportPath = `research/${run}-alpha-step1-drift.md`;

if (!existsSync(ledgerPath)) {
  console.error(`ERROR drift-check-no-ledger: ${ledgerPath} does not exist — run \`autopilot plan\``);
  process.exit(1);
}
const ledger = JSON.parse(readFileSync(ledgerPath, 'utf8'));
const ledgerPages = ledger.pages ?? [];
const allowInRunDependencies = ledger.allow_in_run_dependencies === true;
const owed = ledgerPages
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

// A minted/rescoped pair enters the run only *after* this Alpha review has
// completed. Requiring it to have its own report section turns a successful
// materialisation into an impossible gate: the Alpha cannot review a pair that
// was not in its task, while drift-apply correctly adds it to the scope ledger.
// Its naming verdict is the review evidence for that pair; the ordinary
// per-page section requirement applies to the scope the Alpha was given.
const mintedOrRescoped = new Set();
const reportHeadings = [...text.matchAll(/^###\s+`?([a-z0-9][a-z0-9-]*)`?\s*$/gm)];
for (const [i, heading] of reportHeadings.entries()) {
  const body = text.slice(heading.index + heading[0].length, reportHeadings[i + 1]?.index ?? text.length);
  const verdict = /^VERDICT:\s*(drift-minted|drift-rescoped)\b[ —-]*(.*)$/m.exec(body);
  if (!verdict) continue;
  for (const id of verdict[2].matchAll(/`?([a-z0-9][a-z0-9-]*)`?\s*\(order\s*[0-9.]+\)/g)) {
    mintedOrRescoped.add(id[1]);
  }
}
const reviewedOwed = owed.filter((id) => !mintedOrRescoped.has(id));

// Buildability is page-local: strictly more than 95% of each page's
// same-category `requires` must already be published. The A/B partner and
// cross-category edges do not serialize the frontier. An explicit plan may
// record the narrow scope-ledger exception that a lower-order prerequisite is
// carried by this same run; the normal next-frontier path never records it.
const specPath = 'research/plan-spec.json';
if (!existsSync(specPath)) {
  console.error(`ERROR drift-check-no-spec: ${specPath} does not exist`);
  process.exit(1);
}
const spec = JSON.parse(readFileSync(specPath, 'utf8'));
const pageById = new Map((spec.pages ?? []).map((p) => [p.id, p]));
const partnerById = new Map();
for (const page of spec.pages ?? []) {
  if (page.kind !== 'A') continue;
  const companionId = page.companion ?? `${page.id}-examples`;
  partnerById.set(page.id, companionId);
  partnerById.set(companionId, page.id);
}

// Page id is the file stem, and `status:` is the only field that decides
// whether a reader can open it — the same publication-state input the next-set
// selector uses, so this gate and buildability cannot disagree.
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

const builtHere = new Set(ledgerPages.map((p) => p.id));
const owedPages = ledgerPages
  .filter((p) => p.kind === 'A' || p.kind === 'B')
  .map((p) => p.id);

const errors = [];
let applied = 0;
let edgesChecked = 0;

// Scope amendments must exist in the plan before application and in the final ledger afterward.
for (const id of mintedOrRescoped) {
  if (!pageById.has(id)) errors.push(`drift-check-unknown-page: ${id} named by a scope decision is absent from ${specPath}`);
  if (!beforeApply && !builtHere.has(id)) {
    errors.push(`drift-check-not-materialised: ${id} is named by a drift-minted/drift-rescoped verdict but is absent from ${ledgerPath}`);
  }
}

// A verdict names its pages as `<page-id> (order <n>)`. Shared by every verdict
// kind that names one, so the report contract has a single spelling.
const idsWithOrder = (detail) =>
  [...detail.matchAll(/`?([a-z0-9][a-z0-9-]*)`?\s*\(order\s*[0-9.]+\)/g)].map((m) => m[1]);

// Check BOTH pages of every owed pair, not only the A pages for which the Alpha
// writes report sections. A companion can carry independent prerequisites and
// therefore has its own denominator.
for (const id of beforeApply ? [] : owedPages) {
  const page = pageById.get(id);
  if (!page) { errors.push(`drift-check-unknown-page: ${id} is owed but absent from ${specPath}`); continue; }
  const available = new Set(published);
  if (allowInRunDependencies) {
    for (const candidate of builtHere) {
      const target = pageById.get(candidate);
      if (target && Number(target.order) < Number(page.order)) available.add(candidate);
    }
  }
  const metric = pageBuildability(page, partnerById.get(id), available, pageById);
  edgesChecked += metric.dependencyCount;
  if (metric.buildable) continue;
  for (const req of metric.unpublishedDependencies) {
    const target = pageById.get(req);
    errors.push(`drift-check-unbuildable-edge: ${id} requires \`${req}\`, which is `
      + (target ? `planned (order ${target.order}) but not published`
                : 'not a page in the plan at all')
      + ` — only ${metric.publishedCount}/${metric.dependencyCount} same-category dependencies are ${allowInRunDependencies ? 'published or earlier in-run' : 'published'}; `
      + 'the page needs a share strictly greater than 95%');
  }
}

for (const id of reviewedOwed) {
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
      + 'owner action required; no automatic re-review.');
  }
}

if (errors.length) {
  for (const e of errors) console.error(`ERROR ${e}`);
  process.exit(1);
}
console.log(beforeApply ? `drift-review-check: ${reviewedOwed.length} page(s) reviewed; decisions valid, materialization and buildability pending` : `drift-review-check: ${reviewedOwed.length} page(s) reviewed, ${applied} spec edit(s) applied, no blocked edges; `
  + `${edgesChecked} same-category requires edge(s) checked, every owed A and B page strictly above 95% `
  + (allowInRunDependencies ? 'published-or-earlier-in-run' : 'published'));
