# Step 6c repair — step6-ledger-valid

This file is the authority for repair cycle 1.
Primary gate: `step6-ledger-valid`
Reason: ERROR frontier-29-S6-b-touched-13-cor-zariski-topology-cofinite-on-affine-line: subclass "frontmatter-schema" outside the closed enum
Owning Alpha group: (repository-scoped or mixed)
Live item ids: `cor-zariski-topology-cofinite-on-affine-line`, `lem-algebraic-set-finite-irreducible-components`, `lem-density-nonempty-open-affine-variety`, `lem-maximal-ideals-are-points-over-algebraically-closed-field`, `lem-principal-opens-form-affine-basis`, `lem-variety-ideal-galois-connection`, `lem-zero-locus-ideal-closure`, `thm-affine-algebraic-sets-coordinate-duality`, `thm-affine-nullstellensatz-correspondence`, `thm-affine-variety-prime-coordinate-ring`, `thm-regular-functions-on-affine-algebraic-set`, `thm-zariski-closed-sets-affine-space`
Exhausted item ids — do not repair or re-review: (none)

Repair only the live ids. Reproduce the primary gate from the current tree.
Advisory failures are context only; they receive their own gate budget if they become primary.


## Primary gate output

```text
defect-ledger: 350 defect row(s) checked, 13 error(s)
ERROR frontier-29-S6-b-touched-13-cor-zariski-topology-cofinite-on-affine-line: subclass "frontmatter-schema" outside the closed enum
ERROR frontier-29-S6-b-touched-13-lem-algebraic-set-finite-irreducible-components: subclass "frontmatter-schema" outside the closed enum
ERROR frontier-29-S6-b-touched-13-lem-density-nonempty-open-affine-variety: subclass "frontmatter-schema" outside the closed enum
ERROR frontier-29-S6-b-touched-13-lem-maximal-ideals-are-points-over-algebraically-closed-field: subclass "frontmatter-schema" outside the closed enum
ERROR frontier-29-S6-b-touched-13-lem-principal-opens-form-affine-basis: subclass "frontmatter-schema" outside the closed enum
ERROR frontier-29-S6-b-touched-13-lem-variety-ideal-galois-connection: subclass "frontmatter-schema" outside the closed enum
ERROR frontier-29-S6-b-touched-13-lem-zero-locus-ideal-closure: subclass "frontmatter-schema" outside the closed enum
ERROR frontier-29-S6-b-touched-13-thm-affine-algebraic-sets-coordinate-duality: subclass "frontmatter-schema" outside the closed enum
ERROR frontier-29-S6-b-touched-13-thm-affine-nullstellensatz-correspondence: subclass "frontmatter-schema" outside the closed enum
ERROR frontier-29-S6-b-touched-13-thm-affine-variety-prime-coordinate-ring: subclass "frontmatter-schema" outside the closed enum
ERROR frontier-29-S6-b-touched-13-thm-regular-functions-on-affine-algebraic-set: subclass "frontmatter-schema" outside the closed enum
ERROR frontier-29-S6-b-touched-13-thm-zariski-closed-sets-affine-space: subclass "frontmatter-schema" outside the closed enum
ERROR frontier-29-S6-b-refuter-14-4: location "page prose" outside the closed enum

```

## Advisory failures

```json
[
  {
    "stage": "6c-cross",
    "gate": "impact-audit",
    "why": "ERROR receipt-reviewer: research/frontier-29-impact.json: reviewer is required"
  },
  {
    "stage": "6c-cross",
    "gate": "impact-audit-6c",
    "why": "ERROR receipt-reviewer: research/frontier-29-impact-6c.json: reviewer is required"
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

