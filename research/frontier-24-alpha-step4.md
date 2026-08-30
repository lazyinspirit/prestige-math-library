# frontier-24 · Alpha step 4 adjudication

Lane: `step4-adjudicate-1`  
Run date: Saturday, August 29, 2026

I read `research/frontier-24-alpha-step4.task.md`,
`research/frontier-24-splice-refusals.json`, the owning batch scaffolds,
the cited target pages/items in the current `research/plan-spec.json`, and the
live output of `node tools/validate-plan.mjs research/plan-spec.json`.

`research/frontier-24-splice-refusals.json` contains no refusal edges. The live
validator run on the current bytes reaches `OK`, so there is no remaining live
`[undeclared-prereq]` row to repair in `research/plan-spec.json`. The two
relevant Step-4 backward prerequisites are already present in the live plan; the
work in this turn was to verify that each edge is genuine and to sync the owning
batch scaffolds to the current plan so the next engine splice does not regress
them.

## Edge dispositions

| batch | edge | evidence | disposition | edit | validation result | blocker |
|---|---|---|---|---|---|---|
| `1` | `noether-normalisation-and-nullstellensatz -> finite-fields-and-cyclotomic-extensions` | In `research/frontier-24-batch-1.pages.json:46-51`, `lem-noether-normalisation-nonzero-polynomial-made-monic` depends on `lem-a-nonzero-polynomial-in-several-variables-does-not-vanish-on-an-infinite-subring`. That target item is published at `items/lem-a-nonzero-polynomial-in-several-variables-does-not-vanish-on-an-infinite-subring.md:2-10` and is homed on the earlier A page `finite-fields-and-cyclotomic-extensions` at order `101.2` (`research/plan-spec.json:27850-27859`). The live page closure now includes that target because `research/plan-spec.json:34585-34588` already carries the backward page edge. | Genuine backward prerequisite. The target is an earlier A page, not an `-examples` page, and the citing item uses its exact published lemma rather than a forward or owner-only seam. | Synced the owning scaffold to the live plan by adding `finite-fields-and-cyclotomic-extensions` to `research/frontier-24-batch-1.pages.json:9-12`. While touching that same `requires` block, I also synced the already-adjudicated Step-0 edge `algebraic-closure-embeddings-and-separability` so the batch scaffold matches the current plan exactly. No further `research/plan-spec.json` edit was needed in this turn because the live plan already carried both backward edges. | Post-sync `node tools/validate-plan.mjs research/plan-spec.json` returns `OK`, with only standing `redundant-prereq` advisories. | none |
| `5` | `bloch-schottky-and-picard -> the-riemann-mapping-theorem` | In `research/frontier-24-batch-5.pages.json:331-336`, `def-bloch-radius-and-bloch-constant` depends on `def-univalent-holomorphic-function`, and in `research/frontier-24-batch-5.pages.json:361-367`, `lem-quantitative-univalence-from-controlled-derivative` depends on that same item. The target item is on the earlier A page `the-riemann-mapping-theorem` at order `333` (`research/plan-spec.json:104115-104119`). The live page closure now includes that target because `research/plan-spec.json:105329-105333` already carries the backward page edge. | Genuine backward prerequisite. The citing CA-23 scaffold consumes an item from an earlier A page in the same run, with no forward edge, page split, or reading-order change. | Synced the owning scaffold to the live plan by adding `the-riemann-mapping-theorem` to `research/frontier-24-batch-5.pages.json:323-327`. No further `research/plan-spec.json` edit was needed in this turn because the live plan already carried the edge. | Post-sync `node tools/validate-plan.mjs research/plan-spec.json` returns `OK`, with only standing `redundant-prereq` advisories. | none |

## Validation

Command run:

```bash
node tools/validate-plan.mjs research/plan-spec.json
```

Result on the post-sync bytes:

- `OK — declared page order is acyclic and consistent; no item-level cycles, forward references, B-page dependencies, or unresolved ids among the 540 page(s) with item lists.`
- The command still emits repository-wide `redundant-prereq` advisories only.

## Summary

- Splice refusals in `research/frontier-24-splice-refusals.json`: `0`.
- Live `undeclared-prereq` errors after sync: `0`.
- Genuine backward prerequisites verified on current disk: `2`.
- `research/plan-spec.json` edits in this turn: `0` needed; both edges were already live.
- Batch scaffold syncs applied: `2`.
- Owner blockers: none.
