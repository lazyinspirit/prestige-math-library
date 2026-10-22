---
id: def-cdr-satellite-concordance-categories
kind: definition
title: "Exotic and localized homology concordance classes"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-locally-flat-proper-surface-and-concordance-collars
  - def-locally-flat-topological-knot-concordance
  - def-smooth-knot-concordance
justified_by:
  []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  scraped: []
  references:
    - title: "Tim D. Cochran, Christopher W. Davis, and Arunima Ray, “Injectivity of satellite operators in knot concordance”"
      url: "https://arxiv.org/pdf/1205.5058v3"
      locator: "§1, category conventions"
    - title: "Tim D. Cochran, Bridget D. Franklin, Matthew Hedden, and Peter D. Horn, “Knot concordance and homology cobordism”"
      url: "https://arxiv.org/pdf/1102.5730"
      locator: "§1, localized concordance convention"
---

## Definition

Let knots be smooth oriented knots in the standard oriented S³ and let I=[0,1]. Let C_sm be their smooth concordance classes, where equivalence is witnessed by a smooth proper annulus in S³×I. Let C_top be their locally flat topological concordance classes in that product. Let C_ex be their exotic-smooth concordance classes: equivalence is witnessed by a smooth proper annulus in a compact smooth oriented 4-manifold W together with an orientation-preserving homeomorphism of pairs (W,∂W)≅(S³×I,S³×{0,1}) matching the endpoint knots. The annulus is oriented so that its boundary is −K₀ at the lower end and K₁ at the upper end, and it has product collars at both ends agreeing with the ambient boundary collars. For a nonzero integer n set R_n=Z[1/|n|]. Let C^{1/n} be the classes under equivalence witnessed by a smooth proper annulus in a compact smooth oriented 4-manifold W with boundary the two standard endpoint 3-spheres such that each boundary inclusion induces an isomorphism H_i(S³;R_n)→H_i(W;R_n) for every i. The annulus is oriented so that its boundary is −K₀ at the lower end and K₁ at the upper end, with product collars at both ends agreeing with the ambient boundary collars. A knot is pseudo-slice if it bounds a smooth proper disk in a compact smooth oriented 4-manifold homeomorphic to B⁴, with its oriented boundary identified with the standard oriented S³. A knot is Z[1/|n|]-slice if it bounds a smooth proper disk in a compact smooth oriented 4-manifold B with its oriented boundary identified with the standard oriented S³ and with H_i(B;R_n)≅H_i(B⁴;R_n) for every i; such a B is an R_n-homology 4-ball. These are sets of equivalence classes; this definition alone asserts no group structure.

## Definition references

[[def-smooth-knot-concordance|Smooth concordance in the standard product]]

[[def-locally-flat-topological-knot-concordance|Locally flat topological concordance in the standard product]]

[[def-locally-flat-proper-surface-and-concordance-collars|Proper annuli, local flatness, and product collars]]

[CDR, §1](https://arxiv.org/pdf/1205.5058v3)

[CFHH, §1](https://arxiv.org/pdf/1102.5730)
