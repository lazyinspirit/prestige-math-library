---
title: Bochner variation of constants for real evolution
status: published
research_item: lem-author-9e2ffff7db46-bochner-variation-of-constants
dependency_level: 3
---

## Prerequisites

- [lem-author-9e2ffff7db46-free-continuous-convolution](item-lem-author-9e2ffff7db46-free-continuous-convolution)
- [lem-author-9e2ffff7db46-global-real-evolution](item-lem-author-9e2ffff7db46-global-real-evolution)
- [math:def-bochner-integrable-function](https://alphabetamath.cc/item/def-bochner-integrable-function)
- [math:thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces)
- [math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion)
- [physics:thm-bochner-dominated-convergence](https://alphabetamath.cc/physics/item/thm-bochner-dominated-convergence)
- [math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality)
- [physics:thm-bounded-linear-maps-commute-with-bochner-integration](https://alphabetamath.cc/physics/item/thm-bounded-linear-maps-commute-with-bochner-integration)
- [math:lem-linearity-of-the-bochner-integral](https://alphabetamath.cc/item/lem-linearity-of-the-bochner-integral)
- [math:thm-tonelli-theorem-for-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-tonelli-theorem-for-sigma-finite-product-spaces)


## Statement

Let $S(t,r)$ be the evolution of [lem-author-9e2ffff7db46-global-real-evolution](item-lem-author-9e2ffff7db46-global-real-evolution) and use the Bochner integration conventions of [lem-author-9e2ffff7db46-free-continuous-convolution](item-lem-author-9e2ffff7db46-free-continuous-convolution). For every strongly measurable $f$ with $\int_0^T\|f(s)\|\,ds<\infty$, the oriented integral $F_r f(t)=\int_r^t S(t,s)f(s)\,ds$ exists in the real Banach space $E$, belongs to $C([0,T];E)$, and has norm at most $C_0\|f\|_1$. The unique forced solution is $u(t)=S(t,r)x+F_r f(t)$, and it satisfies $u(t)=W(t-r)x+\int_r^tW(t-s)(P(s)u(s)+f(s))\,ds$. The integral is the Bochner integral of [math:def-bochner-integrable-function](https://alphabetamath.cc/item/def-bochner-integrable-function). The exchange of triangular time integrals follows from scalar [math:thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces) and Bochner simple approximation as proved below. In particular a physical forcing $-if$ contributes $\int_r^tS(t,s)(-if(s))\,ds$; real linearity alone does not identify this with $-iF_rf(t)$.

## Facts & Assumptions

**Given:** The bounded jointly strongly continuous real evolution, the finite time interval, and $L^1(E)$ forcing.

**Goal:** Prove the forced formula, including integrability and the interchange used to verify its Volterra identity.

[F1] [lem-author-9e2ffff7db46-global-real-evolution](item-lem-author-9e2ffff7db46-global-real-evolution) gives joint strong continuity, the Volterra equation, global uniqueness and $\|S(t,s)\|\le C_0$.

[F2] [lem-author-9e2ffff7db46-free-continuous-convolution](item-lem-author-9e2ffff7db46-free-continuous-convolution) fixes the real Banach space, complete finite Lebesgue time measure, Countable Choice hypothesis, oriented indicator $a_{r,t}$ and free integral $D_r$, and supplies its grid-simple approximation construction. Bochner integrability means simple $L^1$ approximation as in [math:def-bochner-integrable-function](https://alphabetamath.cc/item/def-bochner-integrable-function); strongly measurable functions with integrable norm are Bochner integrable by [math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion). Under the inherited Countable Choice, [physics:thm-bochner-dominated-convergence](https://alphabetamath.cc/physics/item/thm-bochner-dominated-convergence) applies to norm-dominated, almost-everywhere convergent sequences. The general integral norm bound is [math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality). Bounded real-linear maps commute with general Bochner integrals by [physics:thm-bounded-linear-maps-commute-with-bochner-integration](https://alphabetamath.cc/physics/item/thm-bounded-linear-maps-commute-with-bochner-integration), applied to real Banach spaces.

[F3] Scalar Fubini for $L^1$ functions on the product of the two finite Lebesgue intervals is [math:thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces).

[F4] [math:lem-linearity-of-the-bochner-integral](https://alphabetamath.cc/item/lem-linearity-of-the-bochner-integral) supplies additivity, subtraction and real homogeneity for general Bochner integrals. [math:thm-tonelli-theorem-for-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-tonelli-theorem-for-sigma-finite-product-spaces) applies to nonnegative measurable norm errors on the finite time square, and to their sums using counting measure on $\mathbb N$. The finite time measures are sigma-finite by [F2], as is counting measure.

## Proof

**Given:** The bounded jointly strongly continuous real evolution, the finite time interval, and $L^1(E)$ forcing.

**Goal:** Prove the forced formula, including integrability and the interchange used to verify its Volterra identity.

1.1 For each fixed vector $z$, $(t,s)\mapsto S(t,s)z$ is continuous on the compact square and thus admits uniformly convergent grid-simple approximations, just as in [F2]. Composing with a pointwise simple approximation to $f(s)$ proves joint strong measurability of $S(t,s)f(s)$. The bound $C_0\|f(s)\|$ proves integrability on each time section. With the oriented indicator $a_{r,t}(s)$ from [F2], the integrands converge almost everywhere as $t_n\to t$ by [F1] and are dominated by that bound. Bochner dominated convergence in [F2] proves continuity; its norm inequality gives the uniform $C_0\|f\|_1$ estimate. [F1, F2, given]

1.2 Here is the needed vector version of [F3]. For a strongly measurable kernel $H$ on the square with integrable norm, [F2] and the Bochner definition give integrable finite-valued simple functions $H_n$ with $\int\|H_n-H\|\le 2^{-n}$. Each $H_n$ has the form $\sum_j z_j\mathbf1_{A_j}$, so [F3] on each scalar indicator and real linearity in [F4] give equality of its two iterated vector integrals and its product integral. Its section-integral functions are strongly measurable, since they are finite sums of fixed vectors times measurable scalar section measures, each of which admits scalar simple approximations. By Tonelli in [F4], the sum of the norm errors has finite product integral; for almost every outer variable the corresponding inner $L^1$ errors are summable, and the simple sections converge pointwise to $H$ off an inner null set. Thus those sections of $H$ are strongly measurable and have integrable norm, and [F2] makes their Bochner integrals exist. The norm inequality in [F2] shows convergence of the section integrals. Their norms are bounded by the integrable outer function $\int\|H\|+\sum_n\int\|H_n-H\|$, where these integrals are over the inner variable; its integrability follows from [F3] and [F4]. Bochner dominated convergence in [F2] therefore passes the outer vector integrals to the limit. The product vector integrals also converge by the norm inequality and real linearity. Repeat with the variables reversed to obtain both orders; assigning zero on the exceptional outer sets does not change the integrals. [F2, F3, F4, given]

2.1 For $r\le t$, insert $S(t,s)=W(t-s)+\int_s^tW(t-\rho)P(\rho)S(\rho,s)\,d\rho$ into $F_rf(t)$. The kernel on $r\le s\le\rho\le t$ is strongly measurable by the same grid-simple argument and norm-continuity of $P$, with bound $MKC_0\|f(s)\|$. Its product norm integral is at most $MKC_0 T\|f\|_1$, so step 1.2 applies. Commuting the bounded real-linear map $W(t-\rho)P(\rho)$ with the inner integral by [F2], and using real linearity in [F4], gives $F_rf(t)=D_rf(t)+\int_r^tW(t-\rho)P(\rho)F_rf(\rho)\,d\rho$. For $t<r$, write both oriented integrals with minus signs: the double integral has two minus signs and region $t\le\rho\le s\le r$. Reversing that region gives exactly the same displayed oriented identity; its absolute majorant is unchanged. [F1, F2, F4, step 1.1, step 1.2]

3.1 By real linearity in [F4], add the unforced Volterra equation for $S(t,r)x$ to the identity in step 2.1. The sum satisfies the forced Volterra equation and the correct value $x$ at $r$. Global uniqueness from [F1] identifies it with the solution there. The norm estimate follows from step 1.1 and the homogeneous bound in [F1]. Since all bounded maps were used as real-linear maps, none of the integral identities permits moving a complex scalar through $S$. This proves the final forcing assertion and completes the proof. [F1, F2, F4, step 1.1, step 2.1] ∎
