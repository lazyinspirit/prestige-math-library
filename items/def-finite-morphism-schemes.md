---
id: def-finite-morphism-schemes
kind: definition
title: Finite morphisms of schemes
status: published
origin: pipeline
deps:
  - def-affine-morphism-schemes
  - def-finite-type-and-module-finite-algebras
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: Stacks Project, Morphisms of Schemes §29.45
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
    - title: Vakil, The Rising Sea §§8.3, 11.3, 17.4
      url: https://math.stanford.edu/~vakil/216blog/FOAGoct2111public.pdf
---

## Definition

A morphism of schemes $f:X\to S$ is **finite** if, for every affine open
$U=\operatorname{Spec}A\subseteq S$, its inverse image is affine,
$f^{-1}(U)=\operatorname{Spec}B$, and the induced $A$-algebra $B$ is
module-finite over $A$ in the sense of
[[def-finite-type-and-module-finite-algebras]]. The affineness language agrees
with [[def-affine-morphism-schemes]]. The zero ring is allowed, so an empty
inverse image satisfies the condition.
