# Step 6c repair — step6-ledger-valid

This file is the authority for repair cycle 1.
Primary gate: `step6-ledger-valid`
Reason: ERROR f26-b-t6-01: subclass "contract-mismatch" outside the closed enum
Owning Alpha group: (repository-scoped or mixed)
Live item ids: `*`
Exhausted item ids — do not repair or re-review: (none)

Repair only the live ids. Reproduce the primary gate from the current tree.
Advisory failures are context only; they receive their own gate budget if they become primary.


## Primary gate output

```text
defect-ledger: 145 defect row(s) checked, 77 error(s)
ERROR f26-b-t6-01: subclass "contract-mismatch" outside the closed enum
ERROR f26-b-t6-01: location "proof-contract entry" outside the closed enum
ERROR f26-b-t6-01: repair_cost "contract-sync" outside the closed enum
ERROR f26-b-t6-02: subclass "unsupported-inference" outside the closed enum
ERROR f26-b-t6-02: location "proof-step 2.1" outside the closed enum
ERROR f26-b-t6-03: subclass "contract-mismatch" outside the closed enum
ERROR f26-b-t6-03: location "proof-contract entry" outside the closed enum
ERROR f26-b-t6-03: repair_cost "contract-sync" outside the closed enum
ERROR f26-b-t6-04: subclass "contract-mismatch" outside the closed enum
ERROR f26-b-t6-04: location "proof-contract entry" outside the closed enum
ERROR f26-b-t6-04: repair_cost "contract-sync" outside the closed enum
ERROR f26-b-t6-05: subclass "contract-mismatch" outside the closed enum
ERROR f26-b-t6-05: location "proof-contract entry" outside the closed enum
ERROR f26-b-t6-05: repair_cost "contract-sync" outside the closed enum
ERROR f26-b-t6-06: subclass "contract-mismatch" outside the closed enum
ERROR f26-b-t6-06: location "proof-contract entry" outside the closed enum
ERROR f26-b-t6-06: repair_cost "contract-sync" outside the closed enum
ERROR f26-b-t6-07: subclass "contract-mismatch" outside the closed enum
ERROR f26-b-t6-07: location "proof-contract entry" outside the closed enum
ERROR f26-b-t6-07: repair_cost "contract-sync" outside the closed enum
ERROR f26-b-t6-08: subclass "contract-mismatch" outside the closed enum
ERROR f26-b-t6-08: location "proof-contract entry" outside the closed enum
ERROR f26-b-t6-08: repair_cost "contract-sync" outside the closed enum
ERROR f26-b-t6-09: subclass "contract-mismatch" outside the closed enum
ERROR f26-b-t6-09: location "proof-contract entry" outside the closed enum
ERROR f26-b-t6-09: repair_cost "contract-sync" outside the closed enum
ERROR f26-b-t6-10: subclass "contract-mismatch" outside the closed enum
ERROR f26-b-t6-10: location "proof-contract entry" outside the closed enum
ERROR f26-b-t6-10: repair_cost "contract-sync" outside the closed enum
ERROR f26-b-t6-11: subclass "contract-mismatch" outside the closed enum
ERROR f26-b-t6-11: location "proof-contract entry" outside the closed enum
ERROR f26-b-t6-11: repair_cost "contract-sync" outside the closed enum
ERROR f26-b-t6-12: subclass "contract-mismatch" outside the closed enum
ERROR f26-b-t6-12: location "proof-contract entry" outside the closed enum
ERROR f26-b-t6-12: repair_cost "contract-sync" outside the closed enum
ERROR f26-b-t6-13: subclass "contract-mismatch" outside the closed enum
ERROR f26-b-t6-13: location "proof-contract entry" outside the closed enum
ERROR f26-b-t6-13: repair_cost "contract-sync" outside the closed enum
ERROR f26-b-t6-14: subclass "ill-typed-claim" outside the closed enum
ERROR f26-b-t6-14: location "statement-and-proof" outside the closed enum
ERROR f26-b-t6-15: subclass "contract-mismatch" outside the closed enum
ERROR f26-b-t6-15: location "proof-contract entry" outside the closed enum
ERROR f26-b-t6-15: repair_cost "contract-sync" outside the closed enum
ERROR f26-b-t6-16: subclass "contract-mismatch" outside the closed enum
ERROR f26-b-t6-16: location "proof-contract entry" outside the closed enum
ERROR f26-b-t6-16: repair_cost "contract-sync" outside the closed enum
ERROR f26-b-t6-17: subclass "contract-mismatch" outside the closed enum
ERROR f26-b-t6-17: location "proof-contract entry" outside the closed enum
ERROR f26-b-t6-17: repair_cost "contract-sync" outside the closed enum
ERROR f26-b-t6-18: subclass "contract-mismatch" outside the closed enum
ERROR f26-b-t6-18: location "proof-contract entry" outside the closed enum
ERROR f26-b-t6-18: repair_cost "contract-sync" outside the closed enum
ERROR f26-b-t6-19: subclass "unsupported-universal-property" outside the closed enum
ERROR f26-b-t6-19: location "statement-and-proof" outside the closed enum
ERROR f26-b-t6-20: subclass "contract-mismatch" outside the closed enum
ERROR f26-b-t6-20: location "proof-contract entry" outside the closed enum
ERROR f26-b-t6-20: repair_cost "contract-sync" outside the closed enum
ERROR f26-b-t7-01: location "Definition" outside the closed enum
ERROR f26-b-t7-02: subclass "contract-mismatch" outside the closed enum
ERROR f26-b-t7-02: location "proof-contract entry" outside the closed enum
ERROR f26-b-t7-02: repair_cost "contract-sync" outside the closed enum
ERROR f26-b-t7-03: subclass "contract-mismatch" outside the closed enum
ERROR f26-b-t7-03: location "proof-contract entry" outside the closed enum
ERROR f26-b-t7-03: repair_cost "contract-sync" outside the closed enum
ERROR f26-b-t9-01: location "Definition opening sentence" outside the closed enum
ERROR f26-b-t9-02: location "verification step 1.1" outside the closed enum
ERROR f26-b-t9-04: location "proof-step 1.1" outside the closed enum
ERROR f26-b-read9-01: location "contract-row empty" outside the closed enum
ERROR f26-b-ref7-01: location "Statement" outside the closed enum
ERROR f26-b-ref9-01: location "Definition" outside the closed enum
ERROR f26-b-ref9-02: subclass "unlicensed-inference" outside the closed enum
ERROR f26-b-ref9-02: location "Statement and Refutation" outside the closed enum
ERROR f26-b-ref9-03: location "title-and-statement" outside the closed enum
ERROR f26-b-ref9-04: location "title-and-statement" outside the closed enum
ERROR f26-b-ref9-05: location "Remark" outside the closed enum
ERROR f26-b-g9-01: location "proof-steps 1.1-2.1" outside the closed enum
ERROR f26-b-g9-02: location "proof-steps 1.1-3.1" outside the closed enum

```

## Advisory failures

```json
[
  {
    "stage": "6c-cross",
    "gate": "url-liveness",
    "why": "FAIL 503 https://web.archive.org/web/20190716035340if_/https://cs.stackexchange.com/questions/12041/example-of-a-non-context-free-language-that-nonetheless-can-be-pumped — HTTP 503"
  },
  {
    "stage": "6c-cross",
    "gate": "audit-manifest",
    "why": "ERROR unresolved: thm-a-forest-complement-and-its-star-expansion-have-the-erdos-hajnal-property (frontier-26-batch-8) declares dependency \"thm-forest-free-graphs-have-a-linear-anticomplete-pair-or-a-high-degree-vertex\", which resolves to no"
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

