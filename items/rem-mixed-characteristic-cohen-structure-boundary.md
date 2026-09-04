---
id: rem-mixed-characteristic-cohen-structure-boundary
kind: remark
title: "Mixed-characteristic Cohen structure remains a cited boundary"
status: draft
origin: session
proved_here: false
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [cor-equicharacteristic-complete-local-power-series-quotient]
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 10.160: The Cohen structure theorem"
      url: "https://stacks.math.columbia.edu/tag/0323"
pipeline_run: null
external_dependency:
  source_url: "https://stacks.math.columbia.edu/tag/0323"
  exact_statement: "In mixed characteristic, a Noetherian complete local ring is a quotient of a power-series ring over a Cohen ring; the equicharacteristic theorem is only the field-coefficient special case."
  local_proof_attempt: "This page proves only the equicharacteristic route: coefficient fields, formal power-series substitution, and the parameter-subring theorem. It does not build Cohen rings, the mixed-characteristic lifting maps, or the formal-smoothness machinery used in the general theorem."
  necessity: "The design requires the mixed-characteristic theorem to be recorded honestly as a boundary because later pages may cite its existence, but this batch is not allowed to import the missing Cohen-ring machinery under a false proved-here label."
---

## Statement

The full Cohen structure theorem extends beyond the equicharacteristic case:
if $(A,\mathfrak m)$ is a Noetherian complete local ring of mixed
characteristic, then $A$ is a quotient of a power-series ring over a Cohen ring.

This page does not prove that theorem. It records it only as the boundary
immediately beyond the equicharacteristic results proved here.

## Remarks

The missing input is not cosmetic. Mixed characteristic requires two genuinely
new pieces of machinery:

1. Cohen rings that lift the residue field in characteristic $p$ while the ring
   itself has characteristic $0$.
2. The mixed-characteristic lifting argument that replaces the field-valued
   coefficient-field step used on this page.

The equicharacteristic corollary [[cor-equicharacteristic-complete-local-power-series-quotient]]
is therefore the terminal proved-here result of this pair, not an incomplete
first draft of the mixed-characteristic theorem.
