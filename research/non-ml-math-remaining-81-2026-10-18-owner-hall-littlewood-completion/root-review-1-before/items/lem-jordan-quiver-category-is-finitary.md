---
id: lem-jordan-quiver-category-is-finitary
kind: lemma
title: "The nilpotent Jordan-quiver category over a finite field is finitary"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-jordan-quiver-nilpotent-representation-category
  - def-hall-finitary-abelian-category
  - def-abelian-category
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2, §2.1"
      url: "https://arxiv.org/pdf/math/0611617v2"
    - title: "Matthew B. Young, Degenerate versions of Green’s theorem for Hall modules, arXiv:1810.08238v2, §2.1"
      url: "https://arxiv.org/pdf/1810.08238v2"
verification:
  precheck: pass
---

## Statement

For every finite field $k$, the small category $\mathcal J_k$ of
[[def-jordan-quiver-nilpotent-representation-category]] is abelian, and its Hom sets and Yoneda $\operatorname{Ext}^1$ sets are finite.
Thus it satisfies the finitary hypotheses of
[[def-hall-finitary-abelian-category]].

## Facts & Assumptions

**Given:** A finite field $k$ and the category $\mathcal J_k$.

[F1] Objects are finite-dimensional vector spaces with nilpotent endomorphisms;
morphisms are the intertwining linear maps $f$ satisfying $fx=x'f$
([[def-jordan-quiver-nilpotent-representation-category]]).

[F2] Finitary means that the category is small or is supplied with a small
skeleton and that Hom and Yoneda $\operatorname{Ext}^1$ sets are finite
([[def-hall-finitary-abelian-category]]).

[F3] An abelian category is additive, has kernels and cokernels, and its
canonical coimage-to-image maps are isomorphisms ([[def-abelian-category]]).

## Proof

**Proof technique:** direct.

1.1 Fix a morphism $f$ intertwining two nilpotent endomorphisms: $\ker f$ and $\operatorname{im}f$ are invariant under the induced endomorphisms, and the endomorphism induced on $\operatorname{coker}f$ remains nilpotent. Finite direct sums and the zero object also remain in the category. Choose bases to identify each kernel, image, and cokernel vector space with a standard $k^d$; transporting the maps along these isomorphisms gives kernels and cokernels in the small model. Their universal properties are preserved by isomorphism. The usual coimage-to-image isomorphism is an intertwiner because the original map commutes with the endomorphisms. This verifies the abelian-category clauses in [F3], using only a finite basis choice for the single map (f). [F1, F3, algebra]

1.2 By [F1], $\mathcal J_k$ uses the standard spaces $k^n$ and their nilpotent matrices. For each $n$, there are finitely many such matrices because $k$ is finite, so their union over $n$ is a set and the category is small. Every finite-dimensional vector space is isomorphic to a standard $k^n$, and each Hom set is a subset of the finite set of linear maps between two finite vector spaces. Thus Hom sets are finite. [F1, F2, algebra]

1.3 Fix objects $(k^m,x_M)$ and $(k^n,x_N)$. In any short exact sequence $0\to M\to E\to N\to0$, the middle vector-space dimension is $m+n$. After representing the middle space by $k^{m+n}$, there are only finitely many choices for its nilpotent matrix and for the two endpoint maps, because $k$ is finite. The set of such short exact sequences is finite, so its quotient by Yoneda equivalence is finite. [F1, F2, algebra]

2.1 The small model is abelian by step 1.1 and small by step 1.2, and the Hom and Yoneda extension sets are finite by steps 1.2 and 1.3. These are exactly the finitary conditions in [F2]. [F2, step 1.1, step 1.2, step 1.3] ∎