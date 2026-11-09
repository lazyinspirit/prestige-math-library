---
title: The reduced universal bundle calculation identifies the second projection
status: draft
research_item: lem-author-e216acade157-bundle-calculation
dependency_level: 25
---

PDF p. 11: Proposition 5.5; pp. 11–12

## Prerequisites

- [lem-author-e216acade157-split-determinant-fiber](item-lem-author-e216acade157-split-determinant-fiber)
- [lem-flag-tower-line-quotients](item-lem-flag-tower-line-quotients)
- [lem-flag-tower-cohomology-detection](item-lem-flag-tower-cohomology-detection)
- [prop-filtration-product-projection](item-prop-filtration-product-projection)
- [prop-chern-whitney-identities](item-prop-chern-whitney-identities)
- [lem-author-3cde9692a7e9-actual-total-cartan](item-lem-author-3cde9692a7e9-actual-total-cartan)
- [prop-first-chern-determinant](item-prop-first-chern-determinant)
- [lem-reduced-bundle-class-identities](item-lem-reduced-bundle-class-identities)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement
Assume the Axiom of Choice and the compatible site-size and universe bounds required by the supplied perfect K-theory, motivic and derived-section constructions. For a vector bundle $V$ of locally constant rank $n$ on a noetherian finite-dimensional field-scheme $Y$, let $v=[V]-n\in\pi_0S(Y)$ and $\widetilde\delta(V)=r(v)\in\pi_0T(Y)$. Its underlying perfect class is $\delta(V)=[V]-[\det V]-(n-1)$. For the actual second stage projection $Q:T\to A=\Omega^\infty(\mathbb Z(2)_{\rm mot}[4])$ and actual second Chern map $C_2:\Omega^\infty K\to A$,
$$Q(\widetilde\delta(V))=-c_2(V)=-c_2(\delta(V)).$$
The assertion holds for actual universal bundles on finite Grassmannians over $Y$, naturally under their transition maps.

## Facts & Assumptions
[A1] Assume the Axiom of Choice as formulated in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) and the compatible site-size and universe bounds in the Statement. They are inherited through the determinant-fiber, first-Chern and flag constructions in [F1]–[F2] at steps 1.1–2.1 and the actual perfect Cartan comparison in [F3] at step 3.1.

[F1] [lem-author-e216acade157-split-determinant-fiber](item-lem-author-e216acade157-split-determinant-fiber) supplies the determinant retraction $r:S\to T$ for $S=\Omega^\infty\operatorname{Fil}^1K$ and $T=\Omega^\infty\operatorname{Fil}^2K$, and injectivity of $\pi_0T\to K_0$. [prop-filtration-product-projection](item-prop-filtration-product-projection) supplies the actual stage product and its projection square on every qcqs field-scheme; only this stage-level assertion is used, without the additional hypotheses of its image-group square. The line lift $\kappa(L)$ has first projection $c_1(L)$ by that section and [prop-first-chern-determinant](item-prop-first-chern-determinant).

[F2] [lem-flag-tower-line-quotients](item-lem-flag-tower-line-quotients) gives a flag pullback with a filtration by line quotients; [lem-flag-tower-cohomology-detection](item-lem-flag-tower-cohomology-detection) detects equality in every motivic bidegree on this tower. It does not assert that the filtration splits globally. [prop-chern-whitney-identities](item-prop-chern-whitney-identities) identifies its Chern roots.

[F3] [lem-author-3cde9692a7e9-actual-total-cartan](item-lem-author-3cde9692a7e9-actual-total-cartan) supplies actual perfect Cartan in this noetherian finite-dimensional scope. [lem-reduced-bundle-class-identities](item-lem-reduced-bundle-class-identities) supplies the reduced-class ring identities on every qcqs scheme over any field under Choice and its size bounds. On each constant-rank component of the flag tower, apply those identities to partial direct sums of the line quotients. The exact flag sequences identify the final direct-sum class with the pulled-back bundle class. A noetherian scheme is qcqs, and these finite projective-bundle towers and finite Grassmannians remain noetherian and finite-dimensional. The calculation below spells out both the ring expansion and its actual stage lifts.

## Proof
**Given:** $Y,V$ as stated, with the actual maps and finite clopen rank decomposition.

**Goal:** Compute both actual operations on the reduced determinant-trivial class.

1.1 The expression for $\delta(V)$ follows from the formula for $r$. It has rank zero and its determinant is canonically trivial. Under [A1], construct the detecting flag tower in [F2] on each constant-rank clopen stratum. On one such tower put $l_s=[L_s]$, $D_s=\bigotimes_{i\leq s}L_i$ and $R_s=\sum_{i\leq s}l_i-[D_s]-(s-1)$. Exact flag sequences give these perfect $K_0$ class equalities without globally split sequences. For $s\geq2$, the line-product identity in [F3], or direct distributivity, gives $([L_s]-1)([D_{s-1}]-1)=[D_s]-[L_s]-[D_{s-1}]+1$, hence $R_s=R_{s-1}-([L_s]-1)([D_{s-1}]-1)$ and $R_1=0$. Define $\widetilde R_s=r(\sum_{i\leq s}\kappa(L_i))$. Its argument has underlying class $\sum_{i\leq s}l_i-s$ and determinant $D_s$, so $\widetilde R_s$ has underlying class $R_s$. Let $P_s$ be the actual second-stage product of $\kappa(L_s)$ and $\kappa(D_{s-1})$. Its underlying class is the product in the recursion. Injectivity of the second-stage augmentation in [F1] gives $\widetilde R_1=0$ and $\widetilde R_s=\widetilde R_{s-1}-P_s$. At $s=n$ the same injectivity identifies $\widetilde R_n$ with the pullback of $\widetilde\delta(V)$. This comparison uses no additivity of $r$. [F1, F2, F3, A1, algebra]

2.1 Write $x_i=c_1(L_i)$. The multiplicative projection square and additivity of the actual second-stage map give by induction $Q(\widetilde\delta(V))=-\sum_{s=2}^n x_s\Big(\sum_{i<s}x_i\Big)=-\sum_{i<j}x_ix_j=-c_2(V).$ For rank two this is exactly $([L_1]-1)([L_2]-1)=-\delta(V)$; the displayed recursion is the full rank induction. Additivity of line $c_1$ identifies $c_1(D_{s-1})$ with the indicated sum. Rank zero and rank one give zero. Detection in [F2] descends the equality; finite clopen reduction handles varying rank. [F1, F2, step 1.1, A1]

3.1 Put $a=c_1(V)=c_1(\det V)$. Actual perfect Cartan gives $c_t(\delta(V))=c_t(V)(1+at)^{-1},$ since a trivial virtual rank has Chern series one. Its $t^2$ coefficient is $c_2(V)-a^2+a^2=c_2(V)$. This uses actual perfect Cartan, not a global bundle presentation of arbitrary classes. All constructions commute with pullback, so they apply to the actual universal bundles on each finite Grassmannian. [F3, step 1.1, step 2.1, A1] ∎
