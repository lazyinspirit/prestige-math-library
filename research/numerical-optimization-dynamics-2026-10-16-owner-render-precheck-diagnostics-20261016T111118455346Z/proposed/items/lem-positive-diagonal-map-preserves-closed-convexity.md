---
id: lem-positive-diagonal-map-preserves-closed-convexity
kind: lemma
title: Positive diagonal maps preserve closed convex sets
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-convex-subset-of-euclidean-space
  - def-metric-topology
  - def-metric-space
  - def-metric-ball
  - def-euclidean-inner-product
  - def-finite-sum
  - def-integer-power
  - thm-of-square-roots
  - def-ordered-field
  - lem-finite-sum-laws
  - lem-of-square-positive
  - lem-of-square-monotone
  - lem-of-inverse-positive
  - lem-of-sign-rules
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sébastien Bubeck, Convex Optimization: Algorithms and Complexity, complete monograph"
      url: https://arxiv.org/pdf/1405.4980
      locator: Section 6.3, finite-dimensional convex optimization context; this elementary set-transform claim is proved locally.
---

## Statement

Let d>=1, let C be a nonempty closed convex subset of R^d, and let D=diag(d_1,...,d_d) with every d_j>0. Then DC={Dx:x in C} is nonempty, closed, and convex.

## Facts & Assumptions

**Given:** d>=1, C and D as in the Statement.

[F1] [[def-convex-subset-of-euclidean-space]]: convexity means every segment between two points of C lies in C.

[F2] [[def-metric-topology]]: C is closed exactly when its complement is open; an open set contains a positive-radius ball around each of its points.

[F3] [[def-metric-ball]]: B(x,r)={y:||y-x||_2<r}.

[F4] [[def-euclidean-inner-product]]: ||z||_2^2=sum_{j=1}^d z_j^2.

[F5] [[def-finite-sum]]: finite sums are well-defined and obey their finite-sum algebra.

[F6] [[thm-of-square-roots]]: a nonnegative real has a unique nonnegative square root.

[F7] [[lem-finite-sum-laws]]: finite sums are additive, obey scaling and splitting, preserve nonnegativity, are monotone termwise, and each nonnegative term is at most the sum.

[F8] [[lem-of-square-positive]]: a nonzero square is positive; a zero square is zero.

[F9] [[lem-of-inverse-positive]]: the inverse of a positive real is positive; [[def-integer-power]] defines the negative powers used here.

[F10] [[lem-of-square-monotone]]: if $0\le a,b$, then $a\le b$ exactly when $a^2\le b^2$.

[F11] [[def-ordered-field]]: positive elements are closed under addition, so together with recursive [[def-finite-sum]] every nonempty finite sum of positive terms is positive; [[lem-of-sign-rules]] says multiplication by a positive element preserves order.

## Proof

**Given:** The objects in the Statement.

1.1 Choose x_0 in C. Then Dx_0 in DC, so DC is nonempty. If x,y in C and t in [0,1], then by linearity D((1-t)x+ty)=(1-t)Dx+tDy; [F1] puts the left side in DC, so DC is convex. [F1, given, choose, algebra]

1.2 Fix $z\notin DC$. Since each $d_j>0$, its inverse is positive by [F9], and its square is positive by [F8]; the definition of integer powers identifies this square with $d_j^{-2}$. Thus $\sum_jd_j^{-2}>0$ by [F11], and $M=\sqrt{\sum_jd_j^{-2}}$ exists by [F6] and is positive. The inverse image $x=D^{-1}z$ is not in $C$. Since $C$ is closed, [F2] supplies $r>0$ with $B(x,r)$ disjoint from $C$. For every $q\in\mathbb R^d$, $$\|D^{-1}q\|_2^2=\sum_jd_j^{-2}q_j^2 \le\left(\sum_jd_j^{-2}\right)\left(\sum_jq_j^2\right) =M^2\|q\|_2^2.$$ Indeed each $q_j^2$ is nonnegative, is at most its finite sum by [F7], and multiplication by $d_j^{-2}>0$ preserves that inequality; summing uses [F7]. Both norms and $M\|q\|_2$ are nonnegative, so [F10] yields $\|D^{-1}q\|_2\le M\|q\|_2$. [F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, given, choose, algebra]

2.1 If ||w-z||_2<r/M, then step 1.2 gives ||D^{-1}w-x||_2<r, hence D^{-1}w notin C and w notin DC. Therefore B(z,r/M) lies in the complement of DC. Every point outside DC has such a ball, so [F2] makes DC closed; step 1.1 already proved DC nonempty and convex. [F2, F3, step 1.1, step 1.2, algebra] ∎

