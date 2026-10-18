---
id: def-real-ko-and-ksp-grothendieck-groups
kind: definition
title: Real and quaternionic bundle K-groups
status: draft
origin: pipeline
page: real-clifford-modules-ko-and-abs-orientations
deps:
- def-real-and-complex-topological-vector-bundle
- def-real-quaternion-matrix-algebra-notation
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
  - title: M. F. Atiyah, K-Theory, §§1.3–1.4 and 2.4 (complex source; real arguments
      supplied locally)
    url: https://www.maths.ed.ac.uk/~v1ranick/papers/atiyahk.pdf
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
---

## Definition

For a compact Hausdorff space $X$, let $KO^0(X)$ be the group completion of the direct-sum monoid of finite-rank real vector bundles, and let $KSp^0(X)$ be the corresponding group for finite-rank right-$\mathbb H$ bundles and right-$\mathbb H$-linear maps. Ranks may vary between connected components. In particular these definitions apply to finite CW complexes. A group-completion element is $[E]-[F]$; equality means that a bundle $G$ exists with $E\oplus F'\oplus G\cong E'\oplus F\oplus G$ for the two differences concerned.

Pullback defines contravariant maps. Real tensor product makes $KO^0(X)$ a commutative ring with unit $[\mathbb R]$. Tensoring a real bundle with a right-$\mathbb H$ bundle over $\mathbb R$ gives a $KO^0(X)$-module structure on $KSp^0(X)$. No internal quaternionic tensor product is asserted.
