# Step 6b repair — step6-routing-adjudicate

This file is the authority for repair cycle 1.
Primary gate: `step6-routing-adjudicate`
Reason: ERROR decision-not-applied: [thm-mackey-double-coset-formula-for-restricting-an-induced-character] accepted_repair no longer matches the reader result
Owning Alpha group: (repository-scoped or mixed)
Live item ids: `thm-mackey-double-coset-formula-for-restricting-an-induced-character`, `thm-change-of-coordinate-formula-for-tangent-bases`, `cex-a-finitely-additive-finite-valued-set-function-can-have-infinite-total-variation`, `ex-sine-density-on-zero-to-two-pi-exhibits-the-nonuniqueness-of-hahn-decompositions`, `fs-finite-values-and-finite-additivity-force-finite-total-variation`, `prop-real-and-imaginary-parts-of-a-complex-measure-are-finite-signed-measures`
Exhausted item ids — do not repair or re-review: (none)

Repair only the live ids. Reproduce the primary gate from the current tree.
Advisory failures are context only; they receive their own gate budget if they become primary.


## Primary gate output

```text
step6-scope: 493 item(s) routed, 122 adjudication obligation(s), 6 error(s)
ERROR decision-not-applied: [thm-mackey-double-coset-formula-for-restricting-an-induced-character] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [thm-change-of-coordinate-formula-for-tangent-bases] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [cex-a-finitely-additive-finite-valued-set-function-can-have-infinite-total-variation] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [ex-sine-density-on-zero-to-two-pi-exhibits-the-nonuniqueness-of-hahn-decompositions] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [fs-finite-values-and-finite-additivity-force-finite-total-variation] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [prop-real-and-imaginary-parts-of-a-complex-measure-are-finite-signed-measures] accepted_repair no longer matches the reader result

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

