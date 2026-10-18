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
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
  - title: M. F. Atiyah, K-Theory, §§1.3–1.4 and 2.4 (complex source; real arguments
      supplied locally)
    url: https://www.maths.ed.ac.uk/~v1ranick/papers/atiyahk.pdf
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
---

## Definition

For a compact Hausdorff space $X$, use the direct-sum monoid of finite-rank bundles whose rank is locally constant and finite-valued. Equivalently, such a bundle is specified by a finite clopen decomposition of $X$ into rank strata and a fixed-rank bundle on each stratum. For real bundles the fixed-rank pieces use the charts of [[def-real-and-complex-topological-vector-bundle]]; a right-$\mathbb H$ bundle uses local charts with right-$\mathbb H$-linear transition maps. Let $KO^0(X)$ be the group completion of the real-bundle monoid and $KSp^0(X)$ the group completion of the right-$\mathbb H$-bundle monoid. This permits ranks to vary between connected components. In particular these definitions apply to finite CW complexes. A group-completion element is $[E]-[F]$; equality means that a bundle $G$ exists with $E\oplus F'\oplus G\cong E'\oplus F\oplus G$ for the two differences concerned.

Pullback defines contravariant maps. Real tensor product makes $KO^0(X)$ a commutative ring with unit $[\mathbb R]$. Tensoring a real bundle with a right-$\mathbb H$ bundle over $\mathbb R$ gives a $KO^0(X)$-module structure on $KSp^0(X)$. No internal quaternionic tensor product is asserted.
