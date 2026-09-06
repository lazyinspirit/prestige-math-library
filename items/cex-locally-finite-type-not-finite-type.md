---
id: cex-locally-finite-type-not-finite-type
kind: counterexample
title: "An infinite disjoint union is locally but not globally finite type"
status: published
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-locally-finite-type-and-finite-type-morphism, def-quasi-compact-and-quasi-separated-morphism]
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Definition 15.1"
      url: "https://stacks.math.columbia.edu/tag/01T2"
---
## Statement refuted

Every locally finite-type morphism is finite type.

## Facts & Assumptions

**Given:** A field $k$.

[F1] A finite-type morphism is locally of finite type and quasi-compact
[[def-locally-finite-type-and-finite-type-morphism]].

## Counterexample

**Proof technique:** direct.

1.1 Let $X=\coprod_{m\geq1}\mathbf A^1_k$ and map it to $\operatorname{Spec}k$. Each component is an affine finite-type chart, so the map is locally of finite type. [given]

2.1 The inverse image of the one-point base is covered by the open components, and no finite subfamily covers $X$. Thus the map is not quasi-compact; by [F1] it is not finite type. [F1, step 1.1] ∎
