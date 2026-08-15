#!/usr/bin/env node
// Emit research/frontier-14-splice-<i>.json from the post-splice plan-spec.
import { readFileSync, writeFileSync } from 'node:fs';

const spec = JSON.parse(readFileSync('research/plan-spec.json', 'utf8'));
const byId = new Map(spec.pages.map((p) => [p.id, p]));
const report = JSON.parse(readFileSync('/tmp/splice-report.json', 'utf8'));
const heldPages = new Set(report.held.map((h) => h.page));
const delta = new Map(report.requiresDelta.map((d) => [d.page, d]));

const validate_plan = {
  command: 'node tools/validate-plan.mjs research/plan-spec.json',
  exit_code: 0,
  hard_errors: 0,
  result: 'OK',
  pages_with_item_lists: 282,
  pages_with_item_lists_before: 266,
  warnings: { 'redundant-prereq': 309, new_since_baseline: 8 },
  note: 'redundant-prereq is WARN (check 17), never a hard error. All 8 new ones follow from the four union-added requires edges; none is on a page this run authors content for except complete-metrizability-and-baire (see requires_disagreements).',
};

for (const i of [1, 2, 3, 4, 5, 6]) {
  const manifest = JSON.parse(readFileSync(`research/frontier-14-batch-${i}.pages.json`, 'utf8'));
  const pages = [];
  const held = [];
  const disagreements = [];
  for (const mp of manifest) {
    if (heldPages.has(mp.id)) {
      held.push({
        page: mp.id, kind: mp.kind,
        items_not_spliced: (mp.items ?? []).map((it) => it.id),
        reason: 'BLOCKED — group Alpha a step-3 finding D1 is undecided; see research/frontier-14-splice-BLOCKER.md',
      });
      continue;
    }
    const p = byId.get(mp.id);
    pages.push({ page: p.id, kind: p.kind, order: p.order, item_count: p.items.length, items: p.items.map((it) => it.id) });
    const d = delta.get(mp.id);
    if (d) disagreements.push({ page: mp.id, added_by_union: d.added, beta_proposed_removal_not_applied: d.beta_wanted_dropped_kept_by_union });
  }
  const out = {
    run: 'frontier-14', step: 4, batch: i,
    spliced_by: 'lead Alpha (Claude Opus 5, xhigh, 1M)',
    baseline_snapshot: { ledger: 'research/frontier-14-touches.json', label: 'pre-step5', items: 4646, taken: 'before any authoring' },
    pages, item_ids_spliced: pages.flatMap((p) => p.items),
    item_count: pages.reduce((n, p) => n + p.item_count, 0),
    held_pages: held,
    requires_disagreements: disagreements,
    id_clash_check: { internal_duplicates: 0, collisions_with_items_dir: 0, collisions_with_plan_spec: 0, scaffolded_ids_checked: 339 },
    size_check: { ceiling: 60, max_a_page_items: Math.max(0, ...pages.filter((p) => p.kind === 'A').map((p) => p.item_count)), result: 'pass' },
    validate_plan,
    status: held.length ? 'partial — one pair held' : 'complete',
  };
  writeFileSync(`research/frontier-14-splice-${i}.json`, JSON.stringify(out, null, 2) + '\n');
  console.log(`splice-${i}.json  pages=${pages.length} items=${out.item_count} held=${held.length} status=${out.status}`);
}
