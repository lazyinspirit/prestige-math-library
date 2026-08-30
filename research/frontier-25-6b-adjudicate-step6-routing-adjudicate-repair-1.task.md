# Step 6b repair — step6-routing-adjudicate

This file is the authority for repair cycle 1.
Primary gate: `step6-routing-adjudicate`
Reason: ERROR decision-not-applied: [cor-winding-number-classifies-loops-in-the-punctured-plane] accepted_repair no longer matches the reader result
Owning Alpha group: (repository-scoped or mixed)
Live item ids: `cor-winding-number-classifies-loops-in-the-punctured-plane`, `lem-null-homology-implies-connected-spherical-complement`, `cex-equal-dominant-moduli-can-make-power-iteration-cycle`, `cor-the-two-unitors-agree-on-the-unit-object`, `ex-the-free-monoid-monad-as-a-monoid-object`, `thm-modules-over-a-commutative-ring-form-a-monoidal-category`, `def-halting-computation-and-divergence`
Exhausted item ids — do not repair or re-review: (none)

Repair only the live ids. Reproduce the primary gate from the current tree.
Advisory failures are context only; they receive their own gate budget if they become primary.


## Primary gate output

```text
step6-scope: 381 item(s) routed, 110 adjudication obligation(s), 7 error(s)
ERROR decision-not-applied: [cor-winding-number-classifies-loops-in-the-punctured-plane] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [lem-null-homology-implies-connected-spherical-complement] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [cex-equal-dominant-moduli-can-make-power-iteration-cycle] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [cor-the-two-unitors-agree-on-the-unit-object] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [ex-the-free-monoid-monad-as-a-monoid-object] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [thm-modules-over-a-commutative-ring-form-a-monoidal-category] accepted_repair no longer matches the reader result
ERROR decision-not-applied: [def-halting-computation-and-divergence] accepted_repair no longer matches the reader result

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

