---
title: Spectral K-zero equality gives an actual projective stabilization
status: published
research_item: lem-author-f08c343a07fc-cancel-spectral-kzero-stability
dependency_level: 14
---

## Prerequisites

- [def-vector-bundle-classes](item-def-vector-bundle-classes)
- [lem-k-zero-stable-equivalence](item-lem-k-zero-stable-equivalence)
- [lem-author-f08c343a07fc-cancel-module-stabilization](item-lem-author-f08c343a07fc-cancel-module-stabilization)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-noetherian-ring-and-module](https://alphabetamath.cc/item/def-noetherian-ring-and-module)
- [math:def-section-restriction-and-global-section](https://alphabetamath.cc/item/def-section-restriction-and-global-section)
- [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)
- [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme)
- [math:thm-affine-schemes-quasi-separated](https://alphabetamath.cc/item/thm-affine-schemes-quasi-separated)


## Statement
Assume AC and the suitable universes used for the article's perfect K-theory construction. Let $A$ be a commutative unital noetherian ring, put $X=\operatorname{Spec}A$, and let $E,F$ be vector bundles on $X$. Equality $[E]=[F]$ in the article's spectral $K_0(X)$ is equivalent to an isomorphism of $A$-modules $\Gamma(X,E)\oplus A^N\cong\Gamma(X,F)\oplus A^N$ for some integer $N\geq0$. This is the bundle/perfect K-zero interface, without a passage through coherent-sheaf G-theory.

## Facts & Assumptions

**Given:** AC, the suitable universes of the supplied perfect K-theory construction, a commutative unital noetherian ring $A$, $X=\operatorname{Spec}A$, and vector bundles $E,F$ on $X$.

**Goal:** Establish the stated conclusion.

[A1] AC is used through the supplied affine spectral comparison, stable-equivalence result and bundle–module equivalence. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] In the stated universes, for an affine scheme the spectral group identifies with vector-bundle $K^0$ and preserves the classes of bundles concentrated in degree zero. [def-vector-bundle-classes](item-def-vector-bundle-classes)

[F2] Equality in $K^0$ is equivalent to stabilization by the same finite free bundle. [lem-k-zero-stable-equivalence](item-lem-k-zero-stable-equivalence)

[F3] For vector bundles on an affine scheme under AC, bundle stabilization is equivalent to the displayed module stabilization; finite direct sums and the free modules $A^N$ correspond to the sheaf sums and $\mathcal O_X^N$, including zero summands. [lem-author-f08c343a07fc-cancel-module-stabilization](item-lem-author-f08c343a07fc-cancel-module-stabilization)

[F4] A commutative ring is noetherian when every ideal is finitely generated. A scheme is noetherian exactly when it has a finite affine open cover by spectra of noetherian rings. [math:def-noetherian-ring-and-module](https://alphabetamath.cc/item/def-noetherian-ring-and-module) [math:def-locally-noetherian-and-noetherian-scheme](https://alphabetamath.cc/item/def-locally-noetherian-and-noetherian-scheme)

[F5] For a sheaf $G$ on $X$, $\Gamma(X,G)=G(X)$ denotes its global sections; for a module sheaf these carry the section-module structure used in [F3]. [math:def-section-restriction-and-global-section](https://alphabetamath.cc/item/def-section-restriction-and-global-section) [lem-author-f08c343a07fc-cancel-module-stabilization](item-lem-author-f08c343a07fc-cancel-module-stabilization)

[F6] A scheme is qcqs when it is quasi-compact and intersections of affine opens are quasi-compact. Every affine scheme is quasi-separated. The quasi-compactness already included in [F4] therefore makes this $X$ qcqs. [math:def-quasi-compact-and-quasi-separated-scheme](https://alphabetamath.cc/item/def-quasi-compact-and-quasi-separated-scheme) [math:thm-affine-schemes-quasi-separated](https://alphabetamath.cc/item/thm-affine-schemes-quasi-separated)

## Proof

1.1 Suppose $[E]=[F]$ in spectral $K_0(X)$. The single affine open $X=\operatorname{Spec}A$ covers $X$ and is the spectrum of a noetherian ring, so [F4] makes $X$ a noetherian affine scheme. By [F4], $X$ is quasi-compact, and by [F6] it is quasi-separated, hence qcqs as required by [F1]. The given $E,F$ are vector bundles, so all three supplied interfaces apply under AC and the stated universes, with global sections interpreted by [F5]. By [F1] their classes agree in $K^0(X)$. By [F2] there is an integer $N\geq0$ with $E\oplus\mathcal O_X^N\cong F\oplus\mathcal O_X^N$. Applying [F3] gives $\Gamma(X,E)\oplus A^N\cong\Gamma(X,F)\oplus A^N$. [A1, F1, F2, F3, F4, F5, F6, given]

2.1 Conversely, suppose the displayed module isomorphism holds for an integer $N\geq0$. With the hypotheses checked in step 1.1 and the notation of [F5], [F3] gives $E\oplus\mathcal O_X^N\cong F\oplus\mathcal O_X^N$. By [F2] the bundle classes agree in $K^0(X)$, and [F1] identifies them with the given spectral classes. Thus $[E]=[F]$ in spectral $K_0(X)$, proving the equivalence together with step 1.1. [A1, F1, F2, F3, F5, step 1.1] ∎
