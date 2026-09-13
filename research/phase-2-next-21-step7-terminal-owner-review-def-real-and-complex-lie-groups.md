# Step-7 terminal owner-review draft: `def-real-and-complex-lie-groups`

**Status:** DRAFT — mathematical owner review only; no judge verdict or terminal disposition recorded.

**Current Terra context SHA-256:** `00cd6ec070450c26214d0959b0dde910186951e73e6713e609f735f9fe302aef`  
**Rejected-item SHA-256 (historical):** `fc6ee14963d11ffbc189341ece7ece857d5088f3439934110199ec18b1919ec3`  
**Proposed disposition:** `repair-required`

## Mathematical review

The zero-dimensional paragraph correctly observes that the tangent bracket is zero, but it does not define the preceding requirement that multiplication and inversion be holomorphic in complex charts of dimension zero. The cited holomorphic-map Definition explicitly fixes source and target dimensions m,n≥1, only separately remarking about target n=0. It does not cover C^0→C^0. The definition's final sentence includes zero-dimensional groups, so its own defining predicate remains undefined there.

## Repair disposition

State the zero-dimensional convention directly: a 0-dimensional complex manifold has discrete charts modelled on C^0={0}; every map between such charts is holomorphic, with the unique zero differential. Restrict the existing positive-dimensional citation to its stated range. No assertion about higher-dimensional maps into C^0 is needed.

## Implemented repair — draft owner evidence

**Repaired item SHA-256:** `7104a3bdd0e243135fdf76f735f37d28eb5bf34e519ebdadd7735f654c565b25`  
**State:** local repair implemented; terminal owner decision and judge verdict still pending.

The Definition now separately defines every C^0→C^0 chart map as holomorphic, with zero differential and empty Jacobian, while reserving the cited positive-dimensional interface for positive dimensions. The zero-dimensional inclusion is therefore defined rather than inferred from a supplier with m≥1. Batch 7 manifest and its zero-case contract evidence reflect the convention.
