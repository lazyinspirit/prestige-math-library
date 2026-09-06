# Step 6c repair — impact-audit-6c

This file is the authority for repair cycle 3.
Primary gate: `impact-audit-6c`
Reason: ERROR receipt-changed-scope: research/frontier-32-impact-6c.json: changed_interfaces must exactly match the computed interface changes
Owning Alpha group: (repository-scoped or mixed)
Live item ids: `cor-the-singleton-family-containing-e-has-property-star`, `ex-a-bipartite-four-tooth-comb-has-the-co-e-structural-partition`, `thm-co-e-free-comb-blocks-admit-an-h-five-co-e-structural-partition`
Exhausted item ids — do not repair or re-review: (none)

Repair only the live ids. Reproduce the primary gate from the current tree.
Advisory failures are context only; they receive their own gate budget if they become primary.


## Primary gate output

```text
impact-audit: 4 changed public interface(s), 5 affected item(s)
  fs-a-triangle-is-distinguished-whenever-the-three-composites-vanish: 1 logical, 1 direct citation consumer(s)
  fs-the-third-map-in-a-morphism-of-triangles-is-unique: 1 logical, 1 direct citation consumer(s)
  lem-h-five-and-co-e-free-family-has-the-erdos-hajnal-property: 3 logical, 2 direct citation consumer(s)
  rem-complete-convergence-implication-diagram: 0 logical, 0 direct citation consumer(s)
ERROR receipt-changed-scope: research/frontier-32-impact-6c.json: changed_interfaces must exactly match the computed interface changes
ERROR receipt-impact-scope: research/frontier-32-impact-6c.json: required_review must exactly match the computed downstream impact set
ERROR receipt-missing-impact: research/frontier-32-impact-6c.json: no disposition for affected item cor-the-singleton-family-containing-e-has-property-star
ERROR receipt-missing-impact: research/frontier-32-impact-6c.json: no disposition for affected item ex-a-bipartite-four-tooth-comb-has-the-co-e-structural-partition
ERROR receipt-missing-impact: research/frontier-32-impact-6c.json: no disposition for affected item thm-co-e-free-comb-blocks-admit-an-h-five-co-e-structural-partition

```

## Advisory failures

```json
[]
```

## Canonical repair protocol

# Step 6 gate repair

The generated repair task defines your authority. A Step-6B batch envelope
assigns every listed gate finding on your owned carriers in one wave. A single
gate task (including Step 6C) assigns its primary gate and live ids; its advisory
failures remain context only. Never revisit exhausted ids or another group's
carriers. Reproduce the assigned checks on the current tree.

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

