---
id: prop-a-natural-isomorphism-of-exact-functors-respects-triangles-under-the-translation-compatibility
kind: proposition
title: "A translation-compatible natural isomorphism of exact functors respects triangles"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-exact-functor-between-triangulated-categories, def-natural-isomorphism, def-morphism-and-isomorphism-of-triangles]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "The Stacks Project, Definition 13.3.3"
      url: "https://stacks.math.columbia.edu/tag/05QK"
---

## Statement

If $\eta:(F,\xi)\Rightarrow(G,\zeta)$ is a natural isomorphism satisfying
$\zeta_X\eta_{X[1]}=\eta_X[1]\xi_X$, then its components form an isomorphism
between the image triangles of every distinguished triangle.

## Facts & Assumptions

**Given:** Exact functors and a translation-compatible natural isomorphism $\eta$.

## Proof

1.1 Naturality at the first two maps gives the first two commuting squares of the image triangles. [given]

2.1 The translation-compatibility equation, followed by naturality at the final map, gives the square into $F(X)[1]$; componentwise invertibility makes the resulting morphism an isomorphism of triangles. [step 1.1, given] ∎
