# Step 6c repair — impact-audit-6c

This file is the authority for repair cycle 2.
Primary gate: `impact-audit-6c`
Reason: ERROR receipt-reviewer: research/frontier-22-impact-6c.json: reviewer is required
Owning Alpha group: (repository-scoped or mixed)
Live item ids: `fs-decomposition-into-irreducible-subrepresentations-is-unique`
Exhausted item ids — do not repair or re-review: (none)

Repair only the live ids. Reproduce the primary gate from the current tree.
Advisory failures are context only; they receive their own gate budget if they become primary.


## Primary gate output

```text
impact-audit: 8 changed public interface(s), 1 affected item(s)
  fs-almost-everywhere-convergence-implies-convergence-in-measure-on-every-measure-space: 0 logical, 0 direct citation consumer(s)
  fs-convergence-in-measure-implies-almost-everywhere-convergence: 0 logical, 0 direct citation consumer(s)
  fs-egorovs-theorem-holds-on-every-measure-space: 0 logical, 0 direct citation consumer(s)
  fs-l-one-convergence-implies-almost-everywhere-convergence: 0 logical, 0 direct citation consumer(s)
  fs-lusins-theorem-says-measurable-functions-are-continuous-off-a-null-set: 0 logical, 0 direct citation consumer(s)
  fs-uniform-integrability-implies-domination-by-an-integrable-function: 0 logical, 0 direct citation consumer(s)
  rem-decomposition-into-irreducible-summands-need-not-be-unique: 1 logical, 1 direct citation consumer(s)
  rem-finite-measure-implication-table-for-the-main-modes-of-convergence: 0 logical, 0 direct citation consumer(s)
ERROR receipt-reviewer: research/frontier-22-impact-6c.json: reviewer is required
ERROR receipt-disposition-status: research/frontier-22-impact-6c.json: fs-decomposition-into-irreducible-subrepresentations-is-unique has an invalid or unresolved status
ERROR receipt-disposition-notes: research/frontier-22-impact-6c.json: fs-decomposition-into-irreducible-subrepresentations-is-unique needs a concrete review note

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

# Step 6c — cross-batch audit and closure

Read `research/<run>-cross-group-edges.json`, the post-6b carriers, and every
listed citing/cited item or structural change. An empty computed list is valid.

Append one evidence-bearing current-hash row per edge, forward reference,
addition, removal, item, page, or gate outcome to
`research/<run>-6c-verdicts.jsonl`; use the exact kind and verdict vocabulary
accepted by `tools/cross-group-edges.mjs`. Obtain a current carrier hash with
`node tools/cross-group-edges.mjs carrier --run <run> --id <id>` after edits.

Clean outcomes use `defect_ids:[]`. Every repair, strike, drop, removal, or
reversion names one closed, uniquely owned `6c-cross` ledger row. Restore a
pre-existing removal before deciding it; a page addition, removal, or
reading-order change is an owner blocker unless the active task explicitly
grants that authority.

Write `research/<run>-alpha-6c.md` with the evidence, disposition, edits, and
remaining blocker for each computed obligation. The closure gates rederive
edges, validate verdict currency and ledger ownership, and run the Step-6 gate
battery.

