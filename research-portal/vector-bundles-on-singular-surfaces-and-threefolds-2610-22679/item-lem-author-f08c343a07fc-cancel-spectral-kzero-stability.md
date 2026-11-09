---
title: Spectral K-zero equality gives an actual projective stabilization
status: draft
research_item: lem-author-f08c343a07fc-cancel-spectral-kzero-stability
dependency_level: 12
---

## Prerequisites

- [def-vector-bundle-classes](item-def-vector-bundle-classes)
- [lem-k-zero-stable-equivalence](item-lem-k-zero-stable-equivalence)
- [lem-author-f08c343a07fc-cancel-module-stabilization](item-lem-author-f08c343a07fc-cancel-module-stabilization)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume AC and the suitable universes used for the article's perfect K-theory construction. Let $A$ be a commutative unital noetherian ring, put $X=\operatorname{Spec}A$, and let $E,F$ be vector bundles on $X$. Equality $[E]=[F]$ in the article's spectral $K_0(X)$ is equivalent to an isomorphism of $A$-modules $\Gamma(X,E)\oplus A^N\cong\Gamma(X,F)\oplus A^N$ for some integer $N\geq0$. This is the bundle/perfect K-zero interface, without a passage through coherent-sheaf G-theory.

## Facts & Assumptions

**Given:** AC, the suitable universes of the supplied perfect K-theory construction, a commutative unital noetherian ring $A$, $X=\operatorname{Spec}A$, and vector bundles $E,F$ on $X$.

**Goal:** Establish the stated conclusion.

[A1] AC is used through the supplied affine spectral comparison, stable-equivalence result and bundle–module equivalence. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] In the stated universes, for an affine scheme the spectral group identifies with vector-bundle $K^0$ and preserves the classes of bundles concentrated in degree zero. [def-vector-bundle-classes](item-def-vector-bundle-classes)

[F2] Equality in $K^0$ is equivalent to stabilization by the same finite free bundle. [lem-k-zero-stable-equivalence](item-lem-k-zero-stable-equivalence)

[F3] Stabilization is carried to and from modules. [lem-author-f08c343a07fc-cancel-module-stabilization](item-lem-author-f08c343a07fc-cancel-module-stabilization)

## Proof

1.1 Suppose $[E]=[F]$ in spectral $K_0(X)$. The ring hypotheses make $X$ noetherian affine, and $E,F$ are vector bundles, so all three supplied interfaces apply under AC and the stated universes. By [F1] their classes agree in $K^0(X)$. By [F2] there is an integer $N\geq0$ with $E\oplus\mathcal O_X^N\cong F\oplus\mathcal O_X^N$. Applying [F3] gives $\Gamma(X,E)\oplus A^N\cong\Gamma(X,F)\oplus A^N$. [A1, F1, F2, F3, given]

2.1 Conversely, suppose the displayed module isomorphism holds for an integer $N\geq0$. By [F3] it gives $E\oplus\mathcal O_X^N\cong F\oplus\mathcal O_X^N$. By [F2] the bundle classes agree in $K^0(X)$, and [F1] identifies them with the given spectral classes. Thus $[E]=[F]$ in spectral $K_0(X)$, proving the equivalence together with step 1.1. [A1, F1, F2, F3, step 1.1] ∎
