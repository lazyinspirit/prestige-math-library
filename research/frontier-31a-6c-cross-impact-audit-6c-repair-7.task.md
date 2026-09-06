# Step 6c repair — impact-audit-6c

This file is the authority for repair cycle 7.
Primary gate: `impact-audit-6c`
Reason: ERROR receipt-changed-scope: research/frontier-31a-impact-6c.json: changed_interfaces must exactly match the computed interface changes
Owning Alpha group: (repository-scoped or mixed)
Live item ids: `cex-nonclosed-scheme-point-no-k-valued-coordinate`, `cex-scheme-not-determined-by-underlying-space`, `cor-affine-scheme-isomorphism-ring-isomorphism`, `cor-affine-scheme-quasi-compact`, `cor-spectrum-with-structure-sheaf-locally-ringed`, `def-affine-scheme`, `def-closed-point-scheme`, `def-dual-numbers-scheme`, `def-functor-of-points-affine-scheme`, `def-generic-point-irreducible-closed-subset`, `def-integral-affine-scheme`, `def-morphism-affine-schemes-from-ring-map`, `def-nonreduced-infinitesimal-thickening-affine`, `def-reduced-affine-scheme`, `def-residue-field-scheme-point`, `ex-basic-open-affine-line`, `ex-dual-numbers-one-point-nonreduced`, `ex-functor-points-affine-line`, `ex-spectrum-field-one-point`, `ex-spectrum-integers-generic-and-closed-points`, `ex-spectrum-product-ring-disjoint-union`, `ex-spectrum-zero-ring-empty`, `lem-basic-opens-quasi-compact`, `lem-classical-points-inside-affine-scheme`, `lem-spectrum-localization-open-immersion`, `lem-spectrum-map-stalk-homomorphisms-local`, `rem-spec-contravariance-and-points`, `thm-affine-scheme-ring-anti-equivalence`, `thm-affine-schemes-determined-by-functor-of-points`, `thm-global-sections-affine-scheme`, `thm-sections-basic-open-affine-scheme`, `thm-spectrum-sober`, `thm-stalk-structure-sheaf-prime-localization`, `thm-structure-sheaf-affine-scheme`
Exhausted item ids — do not repair or re-review: (none)

Repair only the live ids. Reproduce the primary gate from the current tree.
Advisory failures are context only; they receive their own gate budget if they become primary.


## Primary gate output

```text
impact-audit: 9 changed public interface(s), 85 affected item(s)
  fs-a-continuous-function-of-bounded-variation-is-absolutely-continuous: 0 logical, 0 direct citation consumer(s)
  fs-absolute-continuity-is-preserved-under-composition: 0 logical, 0 direct citation consumer(s)
  fs-continuity-almost-everywhere-differentiability-and-an-integrable-derivative-imply-newton-leibniz: 0 logical, 0 direct citation consumer(s)
  fs-luzin-property-n-implies-absolute-continuity: 0 logical, 0 direct citation consumer(s)
  lem-structure-presheaf-basic-open-well-defined: 34 logical, 1 direct citation consumer(s)
  rem-noncompact-flow-completeness-is-an-extra-hypothesis: 0 logical, 0 direct citation consumer(s)
  thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic: 49 logical, 5 direct citation consumer(s)
  thm-structure-sheaf-affine-scheme: 33 logical, 2 direct citation consumer(s)
  thm-universal-coefficient-sequence-for-group-cohomology-in-degree-two: 2 logical, 2 direct citation consumer(s)
ERROR receipt-changed-scope: research/frontier-31a-impact-6c.json: changed_interfaces must exactly match the computed interface changes
ERROR receipt-impact-scope: research/frontier-31a-impact-6c.json: required_review must exactly match the computed downstream impact set
ERROR receipt-missing-impact: research/frontier-31a-impact-6c.json: no disposition for affected item cex-nonclosed-scheme-point-no-k-valued-coordinate
ERROR receipt-missing-impact: research/frontier-31a-impact-6c.json: no disposition for affected item cex-scheme-not-determined-by-underlying-space
ERROR receipt-missing-impact: research/frontier-31a-impact-6c.json: no disposition for affected item cor-affine-scheme-isomorphism-ring-isomorphism
ERROR receipt-missing-impact: research/frontier-31a-impact-6c.json: no disposition for affected item cor-affine-scheme-quasi-compact
ERROR receipt-missing-impact: research/frontier-31a-impact-6c.json: no disposition for affected item cor-spectrum-with-structure-sheaf-locally-ringed
ERROR receipt-missing-impact: research/frontier-31a-impact-6c.json: no disposition for affected item def-affine-scheme
ERROR receipt-missing-impact: research/frontier-31a-impact-6c.json: no disposition for affected item def-closed-point-scheme
ERROR receipt-missing-impact: research/frontier-31a-impact-6c.json: no disposition for affected item def-dual-numbers-scheme
ERROR receipt-missing-impact: research/frontier-31a-impact-6c.json: no disposition for affected item def-functor-of-points-affine-scheme
ERROR receipt-missing-impact: research/frontier-31a-impact-6c.json: no disposition for affected item def-generic-point-irreducible-closed-subset
ERROR receipt-missing-impact: research/frontier-31a-impact-6c.json: no disposition for affected item def-integral-affine-scheme
ERROR receipt-missing-impact: research/frontier-31a-impact-6c.json: no disposition for affected item def-morphism-affine-schemes-from-ring-map
ERROR receipt-missing-impact: research/frontier-31a-impact-6c.json: no disposition for affected item def-nonreduced-infinitesimal-thickening-affine
ERROR receipt-missing-impact: research/frontier-31a-impact-6c.json: no disposition for affected item def-reduced-affine-scheme
ERROR receipt-missing-impact: research/frontier-31a-impact-6c.json: no disposition for affected item def-residue-field-scheme-point
ERROR receipt-missing-impact: research/frontier-31a-impact-6c.json: no disposition for affected item ex-basic-open-affine-line
ERROR receipt-missing-impact: research/frontier-31a-impact-6c.json: no disposition for affected item ex-dual-numbers-one-point-nonreduced
ERROR receipt-missing-impact: research/frontier-31a-impact-6c.json: no disposition for affected item ex-functor-points-affine-line
ERROR receipt-missing-impact: research/frontier-31a-impact-6c.json: no disposition for affected item ex-spectrum-field-one-point
ERROR receipt-missing-impact: research/frontier-31a-impact-6c.json: no disposition for affected item ex-spectrum-integers-generic-and-closed-points
ERROR receipt-missing-impact: research/frontier-31a-impact-6c.json: no disposition for affected item ex-spectrum-product-ring-disjoint-union
ERROR receipt-missing-impact: research/frontier-31a-impact-6c.json: no disposition for affected item ex-spectrum-zero-ring-empty
ERROR receipt-missing-impact: research/frontier-31a-impact-6c.json: no disposition for affected item lem-basic-opens-quasi-compact
ERROR receipt-missing-impact: research/frontier-31a-impact-6c.json: no disposition for affected item lem-classical-points-inside-affine-scheme
ERROR receipt-missing-impact: research/frontier-31a-impact-6c.json: no disposition for affected item lem-spectrum-localization-open-immersion
ERROR receipt-missing-impact: research/frontier-31a-impact-6c.json: no disposition for affected item lem-spectrum-map-stalk-homomorphisms-local
ERROR receipt-missing-impact: research/frontier-31a-impact-6c.json: no disposition for affected item rem-spec-contravariance-and-points
ERROR receipt-missing-impact: research/frontier-31a-impact-6c.json: no disposition for affected item thm-affine-scheme-ring-anti-equivalence
ERROR receipt-missing-impact: research/frontier-31a-impact-6c.json: no disposition for affected item thm-affine-schemes-determined-by-functor-of-points
ERROR receipt-missing-impact: research/frontier-31a-impact-6c.json: no disposition for affected item thm-global-sections-affine-scheme
ERROR receipt-missing-impact: research/frontier-31a-impact-6c.json: no disposition for affected item thm-sections-basic-open-affine-scheme
ERROR receipt-missing-impact: research/frontier-31a-impact-6c.json: no disposition for affected item thm-spectrum-sober
ERROR receipt-missing-impact: research/frontier-31a-impact-6c.json: no disposition for affected item thm-stalk-structure-sheaf-prime-localization
ERROR receipt-missing-impact: research/frontier-31a-impact-6c.json: no disposition for affected item thm-structure-sheaf-affine-scheme

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

