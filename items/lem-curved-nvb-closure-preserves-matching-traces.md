---
id: lem-curved-nvb-closure-preserves-matching-traces
kind: lemma
title: "Conforming NVB closure preserves curved shared traces"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-afem-nvb-labelled-triangulation-family
  - alg-dorfler-marking-and-conforming-nvb-refinement
  - lem-afem-nvb-conforming-closure-and-cumulative-counting
  - def-isoparametric-curved-cell-map
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jonathan R. Shewchuk, Delaunay Refinement Mesh Generation, 1999"
      url: https://people.eecs.berkeley.edu/~jrs/meshpapers/delnotes99.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let a compatible labeled reference triangulation be refined by recursive reference-edge closure as in [[alg-dorfler-marking-and-conforming-nvb-refinement]]. The closure terminates in a matching conforming affine descendant. If every cell is mapped through one common injective geometry map whose traces agree on common reference facets, the resulting curved cells also have matching interfaces.

## Facts & Assumptions

**Given:** A compatible labeled 2D triangulation, a finite refinement request, recursive reference-edge closure, and a common injective geometry map with matching facet traces.

[F1] [[lem-afem-nvb-conforming-closure-and-cumulative-counting]]: recursive reference-edge closure of any finite marked set terminates and produces a matching conforming NVB descendant.

[F2] [[def-isoparametric-curved-cell-map]]: neighboring cell maps agree under the prescribed common-facet identification.

## Proof

1.1 Apply [F1] to the finite request. Its output is a conforming affine triangulation, so each interior edge is represented by the same complete reference segment from both incident cells; no hanging edge subdivision remains. [F1, given]

2.1 On a common edge, the assumed geometry map has one trace from the shared reference segment. By [F2] the two incident curved-cell parametrizations use that same trace, and injectivity prevents distinct reference interfaces from being identified as overlapping physical interiors. Thus the physical curved interface matches. [F2, given, step 1.1] ∎
