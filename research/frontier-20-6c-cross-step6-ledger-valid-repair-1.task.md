# Step 6c repair — step6-ledger-valid

This file is the authority for repair cycle 1.
Primary gate: `step6-ledger-valid`
Reason: ERROR f20-b-t3-01: location "definition-display" outside the closed enum
Owning Alpha group: (repository-scoped or mixed)
Live item ids: `*`
Exhausted item ids — do not repair or re-review: (none)

Repair only the live ids. Reproduce the primary gate from the current tree.
Advisory failures are context only; they receive their own gate budget if they become primary.


## Primary gate output

```text
defect-ledger: 187 defect row(s) checked, 75 error(s)
ERROR f20-b-t3-01: location "definition-display" outside the closed enum
ERROR f20-b-t3-01: subclass "other" requires subclass_note
ERROR f20-b-t3-02: location "definition-display" outside the closed enum
ERROR f20-b-t3-02: subclass "other" requires subclass_note
ERROR f20-b-t3-03: location "frontmatter-and-display-math" outside the closed enum
ERROR f20-b-t3-03: subclass "other" requires subclass_note
ERROR f20-b-t3-05: location "proof-display" outside the closed enum
ERROR f20-b-t3-05: subclass "other" requires subclass_note
ERROR f20-b-t3-06: location "proof-display" outside the closed enum
ERROR f20-b-t3-06: subclass "other" requires subclass_note
ERROR f20-b-t3-08: location "statement-display" outside the closed enum
ERROR f20-b-t3-08: subclass "other" requires subclass_note
ERROR f20-b-t3-09: location "proof-display" outside the closed enum
ERROR f20-b-t3-09: subclass "other" requires subclass_note
ERROR f20-b-t3-10: location "proof-display" outside the closed enum
ERROR f20-b-t3-10: subclass "other" requires subclass_note
ERROR f20-b-r3-01: location "proof-step 1.1" outside the closed enum
ERROR f20-b-r3-02: location "proof-step 2.1" outside the closed enum
ERROR f20-b-r3-03: location "proof-step 1.1" outside the closed enum
ERROR f20-b-r3-04: location "proof-step 1.1" outside the closed enum
ERROR f20-b-t9-01: location "carrier" outside the closed enum
ERROR f20-b-t9-01: subclass "other" requires subclass_note
ERROR f20-b-t9-02: location "carrier" outside the closed enum
ERROR f20-b-t9-02: subclass "other" requires subclass_note
ERROR f20-b-t9-03: subclass "other" requires subclass_note
ERROR f20-b-t9-04: location "carrier" outside the closed enum
ERROR f20-b-t9-04: subclass "other" requires subclass_note
ERROR f20-b-t9-05: location "carrier" outside the closed enum
ERROR f20-b-t9-05: subclass "other" requires subclass_note
ERROR f20-b-t9-06: location "carrier" outside the closed enum
ERROR f20-b-t9-06: subclass "other" requires subclass_note
ERROR f20-b-t9-07: subclass "other" requires subclass_note
ERROR f20-b-t9-08: subclass "other" requires subclass_note
ERROR f20-b-t9-09: location "carrier" outside the closed enum
ERROR f20-b-t9-09: subclass "other" requires subclass_note
ERROR f20-b-t9-10: location "carrier" outside the closed enum
ERROR f20-b-t9-10: subclass "other" requires subclass_note
ERROR f20-b-t9-11: location "carrier" outside the closed enum
ERROR f20-b-t9-11: subclass "other" requires subclass_note
ERROR f20-b-t9-12: location "carrier" outside the closed enum
ERROR f20-b-t9-12: subclass "other" requires subclass_note
ERROR f20-b-t9-13: location "title-and-proof-steps" outside the closed enum
ERROR f20-b-t9-14: location "carrier" outside the closed enum
ERROR f20-b-t9-14: subclass "other" requires subclass_note
ERROR f20-b-t9-15: location "carrier" outside the closed enum
ERROR f20-b-t9-15: subclass "other" requires subclass_note
ERROR f20-b-t9-16: location "carrier" outside the closed enum
ERROR f20-b-t9-16: subclass "other" requires subclass_note
ERROR f20-b-t9-17: location "carrier" outside the closed enum
ERROR f20-b-t9-17: subclass "other" requires subclass_note
ERROR f20-b-t9-18: location "refutation-step" outside the closed enum
ERROR f20-b-t9-19: location "carrier" outside the closed enum
ERROR f20-b-t9-19: subclass "other" requires subclass_note
ERROR f20-b-t9-21: location "carrier" outside the closed enum
ERROR f20-b-t9-21: subclass "other" requires subclass_note
ERROR f20-b-t9-22: location "scope-restoration" outside the closed enum
ERROR f20-b-t9-23: location "scope-restoration" outside the closed enum
ERROR f20-b-t9-25: location "carrier" outside the closed enum
ERROR f20-b-t9-25: subclass "other" requires subclass_note
ERROR f20-b-t9-26: location "scope-restoration" outside the closed enum
ERROR f20-b-t9-27: location "carrier" outside the closed enum
ERROR f20-b-t9-27: subclass "other" requires subclass_note
ERROR f20-b-t9-29: location "carrier" outside the closed enum
ERROR f20-b-t9-29: subclass "other" requires subclass_note
ERROR f20-b-t9-30: location "carrier" outside the closed enum
ERROR f20-b-t9-30: subclass "other" requires subclass_note
ERROR f20-b-t9-31: location "carrier" outside the closed enum
ERROR f20-b-t9-31: subclass "other" requires subclass_note
ERROR f20-b-p9-02: subclass "other" requires subclass_note
ERROR f20-b-r9-01: location "proof-step 7.1" outside the closed enum
ERROR f20-b-r9-02: location "proof-step 1.2" outside the closed enum
ERROR f20-b-r9-03: location "statement-and-proof" outside the closed enum
ERROR f20-b-r9-04: location "page prose paragraph 2" outside the closed enum
ERROR f20-d-g5-1: location "proof-step 3.1" outside the closed enum
ERROR f20-c-g6-1: location "statement-and-proof" outside the closed enum

```

## Advisory failures

```json
[
  {
    "stage": "6c-cross",
    "gate": "impact-audit",
    "why": "ERROR receipt-missing: research/frontier-20-impact.json: no receipt existed — wrote the template there with 452 pending disposition(s); fill reviewer and every disposition, then re-run"
  },
  {
    "stage": "6c-cross",
    "gate": "impact-audit-6c",
    "why": "ERROR receipt-missing: research/frontier-20-impact-6c.json: no receipt existed — wrote the template there with 2 pending disposition(s); fill reviewer and every disposition, then re-run"
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

