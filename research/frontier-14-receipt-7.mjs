#!/usr/bin/env node
// frontier-14 step-4 receipt writer for batch 7 (lead Alpha).
import { readFileSync, writeFileSync } from 'node:fs';

const spec = JSON.parse(readFileSync('research/plan-spec.json', 'utf8'));
const byId = new Map(spec.pages.map((p) => [p.id, p]));
const manifest = JSON.parse(readFileSync('research/frontier-14-batch-7.pages.json', 'utf8'));

const pages = [];
const all = [];
for (const mp of manifest) {
  const p = byId.get(mp.id);
  const ids = (p.items ?? []).map((i) => i.id);
  all.push(...ids);
  pages.push({ page: mp.id, kind: p.kind, order: p.order, item_count: ids.length, items: ids });
}
const maxA = Math.max(...pages.filter((p) => p.kind === 'A').map((p) => p.item_count));

const receipt = {
  run: 'frontier-14',
  step: 4,
  batch: 7,
  spliced_by: 'lead Alpha (Claude Opus 5, xhigh, 1M)',
  baseline_snapshot: {
    ledger: 'research/frontier-14-touches.json',
    label: 'pre-step5',
    items: 4960,
    taken: 'before batch 7 authoring, at the start of this step-4 session',
    note:
      'CORRECTED by the lead Alpha of record. This is the THIRD snapshot labelled pre-step5 and it is pre-authoring for BATCH 7 ONLY: 314 of the run’s 338 items (batches 1-6) were already authored into items/ before it was taken, which is why it holds 4960 items against the first snapshot’s 4646. It is NOT a valid impact-audit baseline for batches 1-6.',
    impact_audit_baseline_of_record: {
      snapshot_index: 0,
      at: '2026-08-15T18:04:12.861Z',
      items: 4646,
      why: 'taken at the original step-4 entry, before any frontier-14 authoring',
      safe_because:
        'impact-audit.mjs resolves --from with snapshots.find(), i.e. the FIRST snapshot carrying the label, so `--from pre-step5` selects index 0 and the batches 1-6 diff is real, not empty. Do not change that resolution to a last-match without relabelling the ledger.',
    },
  },
  releases_hold: {
    held_by: 'research/frontier-14-splice-2.json and research/frontier-14-splice-BLOCKER.md',
    finding: 'group Alpha a step-3 finding D1 — batch 2 built local complex scalars instead of using the published complex numbers',
    decision:
      'the orchestrator approved Option A as D5 (commit 137c5f33); the pair was rebuilt as batch 7 against field-extensions-and-the-complex-numbers (order 54) and the-complex-exponential-and-eulers-formula (order 189)',
    recheck:
      'research/frontier-14-alpha-c-recheck.md — group Alpha c returns "ready for splice" for both pages; all eleven findings confirmed applied on disk',
    hold_set_now_empty: true,
  },
  pages,
  item_ids_spliced: all,
  item_count: all.length,
  held_pages: [],
  requires_disagreements: [],
  requires_note:
    'plan-spec already carried all five requires edges for stone-weierstrass-general (the D1 approval landed in commit 137c5f33), so the union was a no-op and this splice added no edge.',
  id_clash_check: {
    internal_duplicates: 0,
    collisions_with_items_dir: 0,
    collisions_with_plan_spec: 0,
    scaffolded_ids_checked: 24,
  },
  size_check: { ceiling: 60, max_a_page_items: maxA, result: maxA <= 60 ? 'pass' : 'FAIL' },
  dependency_checks: {
    a_items_citing_b_items: 0,
    external_deps: 29,
    external_deps_missing_on_disk: 0,
    external_deps_not_published: 0,
    external_deps_outside_287_closure: 0,
    closure_pages: 64,
    closure_pages_including_287: 65,
    note: 'recomputed independently against disk by the lead Alpha of record, not relayed from group Alpha c: the requires closure of stone-weierstrass-general was walked from plan-spec, every one of the 29 distinct external deps was opened in items/, its status: published read, and its home page checked for closure membership. 0 violations. Agrees with group Alpha c (which counted the closure excluding 287 itself).',
  },
  lead_alpha_of_record: {
    dispatch: 'attempt 2, pid 91051, under tools/dispatch.mjs pid 91039',
    note: 'attempt 1 of alpha/step4-lead (pid 90667) was orphaned when its dispatch harness exited at 06:45:42 with exit=null; the autopilot logged dispatch-failed and started attempt 2, but the attempt-1 agent kept running unsupervised and performed this splice, this receipt and the splice-2/BLOCKER annotations. The lead Alpha of record terminated it at 06:52 to end concurrent writes to plan-spec.json, then re-verified every claim in this receipt against disk before adopting it. See research/frontier-14-step4-lead-notes.md finding S2.',
    reverified: [
      'plan-spec.json parses; the diff against HEAD is exactly the 24 batch-7 items and the two "items": [] removals, nothing else',
      'all 18 A ids and 6 B ids match research/frontier-14-batch-7.pages.json in declared order',
      '0 id clashes against plan-spec and against items/',
      '0 A-page items citing B-page items',
      '29 external deps: all present, all published, all in closure',
      'node tools/validate-plan.mjs research/plan-spec.json exit 0',
      'all 16 previously spliced pages still match their manifests exactly (314 items), so nothing was re-spliced or overwritten',
    ],
  },
  validate_plan: {
    command: 'node tools/validate-plan.mjs research/plan-spec.json',
    exit_code: 0,
    hard_errors: 0,
    result: 'OK',
    pages_with_item_lists: 284,
    pages_with_item_lists_before: 282,
    warnings: { 'redundant-prereq': 310, new_since_baseline: 1 },
    note: 'the one new redundant-prereq is on stone-weierstrass-general: field-extensions-and-the-complex-numbers is also reachable through the-complex-exponential-and-eulers-formula. It is a WARN, never a hard error. The direct edge is kept deliberately — D5 approved both edges, and the step-4 splice rule is union, never drop.',
  },
  step5_carry_forward: {
    source: 'research/frontier-14-alpha-c-recheck.md',
    note: 'group Alpha c left seven residuals. R1 and R2 are coverage-row string edits that touch no item and no plan-spec entry; R3 to R7 are step-5 work. None gates this splice. They belong in the batch-7 authoring brief so step 6 does not rediscover them.',
    residuals: ['R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7'],
  },
  status: 'complete',
};

writeFileSync('research/frontier-14-splice-7.json', JSON.stringify(receipt, null, 2) + '\n');
console.log(
  `wrote research/frontier-14-splice-7.json — ${receipt.item_count} items, A size ${maxA}/60, ${receipt.status}`,
);
