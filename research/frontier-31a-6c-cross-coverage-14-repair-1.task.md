# Step 6c repair — coverage-14

This file is the authority for repair cycle 1.
Primary gate: `coverage-14`
Reason: ERROR coverage-not-published [affine-schemes-and-the-structure-sheaf]: frontier-31a-batch-14.coverage.json: affine-schemes-and-the-structure-sheaf: "10.5 The sheaf defined by a sheaf on a base for a topology" claims already-published item l
Owning Alpha group: (repository-scoped or mixed)
Live item ids: `affine-schemes-and-the-structure-sheaf`
Exhausted item ids — do not repair or re-review: (none)

Repair only the live ids. Reproduce the primary gate from the current tree.
Advisory failures are context only; they receive their own gate budget if they become primary.


## Primary gate output

```text
coverage-checklist: 1 page(s), 38 harvested result(s), 1 error(s), 0 warning(s)
ERROR coverage-not-published [affine-schemes-and-the-structure-sheaf]: frontier-31a-batch-14.coverage.json: affine-schemes-and-the-structure-sheaf: "10.5 The sheaf defined by a sheaf on a base for a topology" claims already-published item lem-sheaf-condition-check-on-basis, which is not a published item on disk

```

## Advisory failures

```json
[
  {
    "stage": "6c-cross",
    "gate": "impact-audit",
    "why": "ERROR receipt-reviewer: research/frontier-31a-impact.json: reviewer is required"
  },
  {
    "stage": "6c-cross",
    "gate": "impact-audit-6c",
    "why": "ERROR receipt-reviewer: research/frontier-31a-impact-6c.json: reviewer is required"
  },
  {
    "stage": "6c-cross",
    "gate": "audit-manifest",
    "why": "ERROR unresolved: lem-structure-presheaf-basic-open-well-defined (frontier-31a-batch-14) declares dependency \"lem-sheaf-condition-check-on-basis\", which resolves to no published or in-run item"
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

# Step 6c — cross-batch audit and closure

Read `research/<run>-cross-group-edges.json`, the post-6b carriers, and every
listed citing/cited item or structural change. An empty computed list is valid.

Append one evidence-bearing current-hash row per edge, forward reference,
addition, removal, item, page, or gate outcome to
`research/<run>-6c-verdicts.jsonl`; use the exact kind and verdict vocabulary
accepted by `tools/cross-group-edges.mjs`. Obtain a current carrier hash with
`node tools/cross-group-edges.mjs carrier --run <run> --id ITEM_ID` after edits.

Clean outcomes use `defect_ids:[]`. Every repair, strike, drop, removal, or
reversion names one closed, uniquely owned `6c-cross` ledger row. Restore a
pre-existing removal before deciding it; a page addition, removal, or
reading-order change is an owner blocker unless the active task explicitly
grants that authority.

Write `research/<run>-alpha-6c.md` with the evidence, disposition, edits, and
remaining blocker for each computed obligation. The closure gates rederive
edges, validate verdict currency and ledger ownership, and run the Step-6 gate
battery.

