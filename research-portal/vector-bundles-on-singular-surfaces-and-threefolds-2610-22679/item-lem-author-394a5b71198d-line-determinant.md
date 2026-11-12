---
title: Determinants detect vanishing of the rank-one exterior-dual class
status: published
research_item: lem-author-394a5b71198d-line-determinant
dependency_level: 16
---

## Prerequisites

- [lem-author-394a5b71198d-exterior-dual-interface](item-lem-author-394a5b71198d-exterior-dual-interface)
- [lem-k-zero-stable-equivalence](item-lem-k-zero-stable-equivalence)
- [def-vector-bundle-classes](item-def-vector-bundle-classes)
- [def-exterior-determinant-bundles](item-def-exterior-determinant-bundles)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)


## Statement
Assume AC. For a line bundle $L$ on a noetherian affine scheme, $\varepsilon(L)=1-[L^\vee]$ in the article\'s perfect $K_0$, and $\varepsilon(L)=0$ if and only if $L\cong\mathcal O_X$. Thus the rank-one vanishing criterion uses the actual line bundle, not an abstract identification of its target groups.

## Facts & Assumptions

**Given:** The hypotheses and data in the statement, with AC and the article's fixed universes wherever perfect K-theory is used.

**Goal:** Establish the asserted conclusion.

[A1] AC is assumed through the exterior-dual construction in [F1], the affine K-zero comparison and stabilization in [F2], and the affine dual interface in [F4]. The fixed universe bounds for perfect K-theory are those in [F2]; the local basis calculations below make no additional choice assumption. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F1] For rank one the exterior-dual sum has only its degree-zero and degree-one terms. [lem-author-394a5b71198d-exterior-dual-interface](item-lem-author-394a5b71198d-exterior-dual-interface)

[F2] The affine perfect/bundle comparison identifies object classes and the unit $1=[\mathcal O_X]$, and equality in the bundle group is equivalent to a common finite free stabilization. [def-vector-bundle-classes](item-def-vector-bundle-classes), [lem-k-zero-stable-equivalence](item-lem-k-zero-stable-equivalence)

[F3] Exterior powers are functorial for bundle maps, and determinant is the top exterior power, with the increasing-wedge local bases and the empty-wedge convention in degree zero. [def-exterior-determinant-bundles](item-def-exterior-determinant-bundles)

[F4] The dual is $E^\vee=\mathcal Hom_{\mathcal O_X}(E,\mathcal O_X)$. Its sections on an open $U$ are the $\mathcal O_U$-linear morphisms $E|_U\to\mathcal O_U$, with restriction of morphisms. Duals of finite locally free sheaves are finite locally free of the same rank: on a line-bundle chart with basis $e$, the functional $e^\vee(ae)=a$ is a dual basis. In particular $\mathcal O_X^\vee\cong\mathcal O_X$ by evaluation at $1$. [lem-affine-bundle-module-interface](item-lem-affine-bundle-module-interface)

## Proof

1.1 By [F4], $L^\vee$ is a line bundle. By [F1], vanishing is exactly $[L^\vee]=[\mathcal O_X]$. By [F2] this yields $L^\vee\oplus\mathcal O_X^N\cong\mathcal O_X^{N+1}$ for some $N\geq0$. Apply the functor $\Lambda^{N+1}$ to this actual isomorphism. The map $\ell\mapsto\ell\wedge e_1\wedge\cdots\wedge e_N$, with $e_1,\ldots,e_N$ the standard basis of the trivial summand, identifies $L^\vee$ with $\det(L^\vee\oplus\mathcal O_X^N)$ by [F3]: it sends a local generator to the top-wedge basis and commutes with restrictions, so its local inverses glue. The standard top wedge similarly identifies $\det(\mathcal O_X^{N+1})$ with $\mathcal O_X$. For $N=0$ use the empty wedge. Hence $L^\vee\cong\mathcal O_X$. The evaluation morphism $L\to(L^\vee)^\vee$, $s\mapsto(\varphi\mapsto\varphi(s))$, commutes with restrictions by [F4]. On a chart with basis $e$ and dual basis $e^\vee$ it sends $e$ to the functional taking $e^\vee$ to $1$, hence is an isomorphism there; its local inverses agree and glue. Dualizing the isomorphism $L^\vee\cong\mathcal O_X$ and using $\mathcal O_X^\vee\cong\mathcal O_X$ now gives $L\cong\mathcal O_X$. [A1, F1, F2, F3, F4, construct]

2.1 Conversely, if $L$ is trivial, dualizing a trivialization and using [F4] gives $L^\vee\cong\mathcal O_X$. By [F1] and the object-class and unit conventions in [F2], the two terms of $1-[L^\vee]$ cancel. Together with step 1.1 this proves the equivalence with the precise spectral class. [F1, F2, F4, step 1.1, algebra] ∎
