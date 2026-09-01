# Step 6b repair — step6-routing-adjudicate

This file is the authority for repair cycle 1.
Primary gate: `step6-routing-adjudicate`
Reason: ERROR decision-not-applied: [thm-flat-going-down] amended_repair must differ from both the pre-reader and reader-result carriers
Owning Alpha group: (repository-scoped or mixed)
Live item ids: `thm-flat-going-down`, `thm-in-a-strict-braided-monoidal-category-the-braiding-satisfies-the-yang-baxter-equation`, `cor-a-closed-euclidean-submanifold-has-a-smooth-neighbourhood-retraction`, `fs-every-injective-immersion-is-a-proper-embedding`, `fs-every-noncompact-submanifold-has-a-uniform-radius-tubular-neighbourhood`, `lem-a-countable-coordinate-bump-map-embeds-a-manifold-in-countable-euclidean-data`, `lem-a-fine-euclidean-approximation-lands-in-a-prescribed-tubular-neighbourhood`, `lem-a-generic-linear-projection-preserves-injectivity-and-immersion`, `cor-ell-p-duality-by-counting-measure`, `cor-l-p-norm-recovery-by-unit-l-q-pairings`
Exhausted item ids — do not repair or re-review: (none)

Repair only the live ids. Reproduce the primary gate from the current tree.
Advisory failures are context only; they receive their own gate budget if they become primary.


## Primary gate output

```text
step6-scope: 424 item(s) routed, 166 adjudication obligation(s), 10 error(s)
ERROR decision-not-applied: [thm-flat-going-down] amended_repair must differ from both the pre-reader and reader-result carriers
ERROR decision-not-applied: [thm-in-a-strict-braided-monoidal-category-the-braiding-satisfies-the-yang-baxter-equation] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [cor-a-closed-euclidean-submanifold-has-a-smooth-neighbourhood-retraction] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [fs-every-injective-immersion-is-a-proper-embedding] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [fs-every-noncompact-submanifold-has-a-uniform-radius-tubular-neighbourhood] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [lem-a-countable-coordinate-bump-map-embeds-a-manifold-in-countable-euclidean-data] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [lem-a-fine-euclidean-approximation-lands-in-a-prescribed-tubular-neighbourhood] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [lem-a-generic-linear-projection-preserves-injectivity-and-immersion] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [cor-ell-p-duality-by-counting-measure] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [cor-l-p-norm-recovery-by-unit-l-q-pairings] accepted_repair no longer matches the reader result

```

## Advisory failures

```json
[]
```

## Canonical repair protocol

# Step 6 gate repair

The generated repair task supplies the primary gate, live ids, exhausted ids,
output, and advisory failures. Reproduce only the primary gate on the current
tree; do not revisit exhausted ids or treat advisory failures as this dispatch's
scope.

For each live finding, repair a confirmed in-scope defect or document a
false-positive with the governing rule and exact evidence. Update only records
made stale by a confirmed repair. An unscoped mechanical failure may be fixed at
its repository cause; do not invent an item or ledger row for it.

When `risk-report` is primary, every live id needs an actual mathematical read
and a complete, item-specific `risk_review` in its owning batch contract. Use
scoped `--items` invocations while working. The generated task is already
partitioned by Alpha group; do not inspect or write another group's carriers.
A missing review is not itself a defect-ledger row, though a defect found during
that review follows the normal repair and ledger protocol.

At 6b, append one `route:"gate"` supplemental decision per concrete defect to
the owning group's decisions file and its matching ledger row. At 6c, append the
required `kind:"gate"` verdict and current carrier hash to
`research/<run>-6c-verdicts.jsonl`; also record the changed item/page verdict.
Extend prior retry artifacts and report the current gate result.

