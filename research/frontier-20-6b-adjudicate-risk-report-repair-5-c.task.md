# Step 6b repair — risk-report

This file is the authority for repair cycle 5.
Primary gate: `risk-report`
Reason: 4 high/critical item(s) in Alpha group c lack complete risk_review records
Owning Alpha group: `c`
Live item ids: `thm-finite-characteristically-simple-groups-are-direct-products-of-isomorphic-simple-groups`, `prop-socle-is-characteristic-and-admits-a-direct-product-decomposition`, `lem-two-distinct-minimal-normal-subgroups-of-a-primitive-group-are-regular`, `cor-a-finite-primitive-group-has-at-most-two-minimal-normal-subgroups`
Exhausted item ids — do not repair or re-review: (none)

Repair only the live ids. Reproduce the primary gate from the current tree.
Advisory failures are context only; they receive their own gate budget if they become primary.


## Primary gate output

```text
HIGH 6 [thm-finite-characteristically-simple-groups-are-direct-products-of-isomorphic-simple-groups] 2:4 declared dependencies; 2:boundary-sensitive language; 2:induction, recursion, or minimality
HIGH 7 [prop-socle-is-characteristic-and-admits-a-direct-product-decomposition] 2:5 declared dependencies; 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality
HIGH 5 [lem-two-distinct-minimal-normal-subgroups-of-a-primitive-group-are-regular] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality
HIGH 5 [cor-a-finite-primitive-group-has-at-most-two-minimal-normal-subgroups] 1:2 cited facts; 2:boundary-sensitive language; 2:induction, recursion, or minimality
risk-report: 64 error(s), 393 item(s) routed
ERROR risk-review-missing [thm-finite-characteristically-simple-groups-are-direct-products-of-isomorphic-simple-groups]: thm-finite-characteristically-simple-groups-are-direct-products-of-isomorphic-simple-groups is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [prop-socle-is-characteristic-and-admits-a-direct-product-decomposition]: prop-socle-is-characteristic-and-admits-a-direct-product-decomposition is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [lem-two-distinct-minimal-normal-subgroups-of-a-primitive-group-are-regular]: lem-two-distinct-minimal-normal-subgroups-of-a-primitive-group-are-regular is high risk and lacks a complete Alpha risk_review
ERROR risk-review-missing [cor-a-finite-primitive-group-has-at-most-two-minimal-normal-subgroups]: cor-a-finite-primitive-group-has-at-most-two-minimal-normal-subgroups is high risk and lacks a complete Alpha risk_review
```

## Advisory failures

```json
[
  {
    "stage": "6b-adjudicate",
    "gate": "step6-routing-adjudicate",
    "why": "ERROR decision-not-applied: [ex-a-step-function-generates-a-finite-atomic-measure] accepted_repair no longer matches the reader result"
  }
]
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

