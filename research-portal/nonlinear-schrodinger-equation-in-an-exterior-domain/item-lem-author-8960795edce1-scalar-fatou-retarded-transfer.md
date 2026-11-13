---
title: Scalar Banach-function retarded estimates by Fatou approximation
status: draft
research_item: lem-author-8960795edce1-scalar-fatou-retarded-transfer
dependency_level: 0
---

## Prerequisites

- [math:def-hilbert-space](https://alphabetamath.cc/item/def-hilbert-space)
- [math:def-banach-space](https://alphabetamath.cc/item/def-banach-space)
- [math:def-l-p-space-as-a-quotient-by-null-functions](https://alphabetamath.cc/item/def-l-p-space-as-a-quotient-by-null-functions)
- [math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function)
- [math:def-bochner-integrable-function](https://alphabetamath.cc/item/def-bochner-integrable-function)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-strongly-continuous-one-parameter-unitary-group](https://alphabetamath.cc/item/def-strongly-continuous-one-parameter-unitary-group)
- [math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion)
- [math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality)
- [math:thm-bounded-linear-maps-commute-with-bochner-integration](https://alphabetamath.cc/item/thm-bounded-linear-maps-commute-with-bochner-integration)
- [math:thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces)
- [math:thm-tonelli-theorem-for-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-tonelli-theorem-for-sigma-finite-product-spaces)
- [math:thm-minkowski-integral-inequality](https://alphabetamath.cc/item/thm-minkowski-integral-inequality)
- [math:thm-fatou-lemma](https://alphabetamath.cc/item/thm-fatou-lemma)


## Statement

Assume Countable Choice. Fix $0<T<\infty$. All scalar functions and vector spaces below are over $\mathbb C$. Let $(X,\mu)$ be sigma-finite, choose $A_n\uparrow X$ of finite measure, and suppose the Hilbert space $H$ is continuously and injectively realized as scalar classes in $L^1_{\mathrm{loc},A}(X)$: for each $n$ its restriction $J_n:H\to L^1(A_n)$ is bounded, the restrictions agree, and together they separate points of $H$. Let $W$ be a strongly continuous unitary group on $H$.

Let $Y$ be a Banach space of measurable scalar classes with these explicit properties: its norm is a lattice norm, meaning that $|u|\le|v|$ almost everywhere and $v\in Y$ imply $u\in Y$ and $\|u\|_Y\le\|v\|_Y$; for every $n$, $\int_{A_n}|y|\le b_n\|y\|_Y$; if $y_j\to y$ almost everywhere, then $\|y\|_Y\le\liminf_j\|y_j\|_Y$, with norm infinity outside $Y$; for every jointly measurable scalar $G(z,x)$, with time or time-pair parameter $z$, the extended norm $z\mapsto\|G(z,\cdot)\|_Y$ is measurable; and for jointly measurable scalar $K(r,x)$ with $\int\|K(r,\cdot)\|_Y\,dr<\infty$, the spatial integral triangle property $\|\int K(r,\cdot)\,dr\|_Y\le\int\|K(r,\cdot)\|_Y\,dr$ holds. These are local-integrability, lattice, sequential Fatou, section-measurability and integral-triangle hypotheses; they do not assert Bochner measurability into $Y$. Local integrability and scalar Tonelli ensure that the scalar integral in this property actually exists almost everywhere.

Here scalar $L^a$ spaces, including $L^1(A_n)$ and scalar time $L^p$, consist of almost-everywhere equivalence classes of measurable complex functions; for $1\le a<\infty$ their norm is $(\int |u|^a)^{1/a}$. The notation $L^1_{\mathrm{loc},A}(X)$ means measurable scalar classes whose restrictions belong to $L^1(A_n)$ for every $n$. In the forcing space $L^1(0,T;H)$, a representative is a strongly measurable function $f:(0,T)\to H$, meaning a norm almost-everywhere limit of measurable $H$-valued simple functions, with $\int_0^T\|f(r)\|_H\,dr<\infty$. Two such representatives define the same forcing class exactly when they agree in $H$ for almost every $r$; its norm is $\|[f]\|_{L^1_tH}=\int_0^T\|f(r)\|_H\,dr$. Bochner integrability has its norm-limit-of-integrable-simple-functions meaning. The Bochner integrability criterion therefore supplies integrable simple approximants converging in this forcing norm. The norm and integral do not depend on the representative: the norm functions agree almost everywhere, and the Bochner norm inequality makes the integral of an almost-everywhere-zero difference zero.

For a jointly measurable scalar representative $u(t,x)$, the scalar mixed norm is $\|u\|_{L^p_tY}=(\int_0^T\|u(t,\cdot)\|_Y^p\,dt)^{1/p}$, allowing the value infinity before membership is established; scalar representatives are identified almost everywhere on $(0,T)\times X$. The notation $C_tH$ means $C([0,T];H)$ with norm $\sup_{0\le t\le T}\|u(t)\|_H$.

Suppose $1\le p<\infty$ and the actual scalar orbits satisfy $\|W(\cdot)h\|_{L^p_tY}\le C_T\|h\|_H$ on $(0,T)$, with the scalar mixed-norm convention. Then for every $f\in L^1(0,T;H)$ the continuous $H$-valued Bochner solution $Df(t)=\int_0^tW(t-r)f(r)\,dr$ has a jointly measurable scalar representative and $\|Df\|_{C_tH}+\|Df\|_{L^p_tY}\le(1+C_T)\|f\|_{L^1_tH}$.

## Statement references

[math:def-hilbert-space](https://alphabetamath.cc/item/def-hilbert-space)

[math:def-banach-space](https://alphabetamath.cc/item/def-banach-space)

[math:def-l-p-space-as-a-quotient-by-null-functions](https://alphabetamath.cc/item/def-l-p-space-as-a-quotient-by-null-functions)

[math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function)

[math:def-bochner-integrable-function](https://alphabetamath.cc/item/def-bochner-integrable-function)

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[math:def-strongly-continuous-one-parameter-unitary-group](https://alphabetamath.cc/item/def-strongly-continuous-one-parameter-unitary-group)

[math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion)

[math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality)

[math:thm-bounded-linear-maps-commute-with-bochner-integration](https://alphabetamath.cc/item/thm-bounded-linear-maps-commute-with-bochner-integration)

[math:thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces)

[math:thm-tonelli-theorem-for-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-tonelli-theorem-for-sigma-finite-product-spaces)

[math:thm-minkowski-integral-inequality](https://alphabetamath.cc/item/thm-minkowski-integral-inequality)

[math:thm-fatou-lemma](https://alphabetamath.cc/item/thm-fatou-lemma)

## Facts & Assumptions



[F1] Unitarity and strong continuity have the meaning of [math:def-strongly-continuous-one-parameter-unitary-group](https://alphabetamath.cc/item/def-strongly-continuous-one-parameter-unitary-group). Bochner existence, simple $L^1$ approximation, the norm bound and bounded-map interchange are [math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion), [math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality) and [math:thm-bounded-linear-maps-commute-with-bochner-integration](https://alphabetamath.cc/item/thm-bounded-linear-maps-commute-with-bochner-integration).

[F2] Scalar integration on sigma-finite products is governed by [math:thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces) and [math:thm-tonelli-theorem-for-sigma-finite-product-spaces](https://alphabetamath.cc/item/thm-tonelli-theorem-for-sigma-finite-product-spaces). Finite-exponent time Minkowski is [math:thm-minkowski-integral-inequality](https://alphabetamath.cc/item/thm-minkowski-integral-inequality).

[F3] Scalar Fatou is [math:thm-fatou-lemma](https://alphabetamath.cc/item/thm-fatou-lemma). We use the sequential Fatou and local-integrability axioms of $Y$ as actual hypotheses, and [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) for countable approximation choices.

[F4] The Hilbert and Banach structures use [math:def-hilbert-space](https://alphabetamath.cc/item/def-hilbert-space) and [math:def-banach-space](https://alphabetamath.cc/item/def-banach-space), over the common complex scalar field specified in the Statement. Scalar spaces use the almost-everywhere quotient convention of [math:def-l-p-space-as-a-quotient-by-null-functions](https://alphabetamath.cc/item/def-l-p-space-as-a-quotient-by-null-functions).

[F5] Strong measurability and Bochner integrability are [math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function) and [math:def-bochner-integrable-function](https://alphabetamath.cc/item/def-bochner-integrable-function). The forcing quotient and norm are defined inline in the Statement. By [math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion), every forcing representative is Bochner integrable and has integrable simple approximants converging in that norm; [math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality) makes its integral invariant under changes on time-null sets.

## Proof

**Given:** The scalar local realizations of $H$, the declared Banach-function-space axioms, the homogeneous mixed estimate and $L^1(H)$ forcing. A mixed norm here is the scalar $L^p$ norm of the section norms.

**Goal:** Identify the scalar limit with the continuous $H$ solution and prove its mixed estimate without a nonseparable Bochner integration claim.

1.1 By the forcing convention and [F5], choose a strongly measurable representative of $f$, with integrable norm and integrable simple approximants. All integrals below are independent of this choice by [F5]. The function $W(-r)f(r)$ is strongly measurable by pointwise simple approximation of $f$ and continuous orbit approximation for each of its finitely many values. It has integrable norm $\|f(r)\|_H$. Thus $G(t)=\int_0^tW(-r)f(r)\,dr$ is continuous, since increments have norm bounded by the integral of $\|f\|_H$ over the increment interval. The function $Df(t)=W(t)G(t)$ is continuous and has $C_tH$ norm at most $\|f\|_1$. A continuous $H$ path has a jointly measurable scalar representative: approximate it uniformly in $H$ by finite interval-step paths, restrict using each bounded $J_n$, and pass to a common almost-everywhere limit on the countable product exhaustion. To justify that last passage choose errors summable in the uniform $H$ norm; their product $L^1$ errors on each $A_n$ are summable, so Tonelli gives almost-everywhere convergence there. The limits agree on overlaps and represent the path in local $L^1$ for almost every time. This construction also supplies measurable orbit representatives with Borel time parameter, allowing the shifts $t-r$. [F1, F2, F3, F4, F5, given]

1.2 For a simple forcing $f(r)=\sum_{j=1}^N\mathbf1_{E_j}(r)h_j$, use those representatives to form the measurable kernel $K(r,t,x)=\mathbf1_{0<r<t<T}W(t-r)f(r)(x)$. On each finite spatial piece, its absolute triple integral is finite: $\|J_nW(t-r)h_j\|_{L^1(A_n)}\le\|J_n\|\|h_j\|_H$ by unitarity. Scalar Fubini and bounded-map interchange show that $\int_0^tK(r,t,x)\,dr$ is the local scalar representative of the $H$ integral for almost every $(t,x)$. The $Y$ integral-triangle property and then time Minkowski give $\|Df\|_{L^p_tY}\le\int_0^T\|\mathbf1_{t>r}W(t-r)f(r)\|_{L^p_tY}\,dr\le C_T\|f\|_{L^1_tH}$. The last inequality is the original homogeneous bound restricted after the translation $\tau=t-r$ to $(0,T-r)$; the section norms and all scalar integrals here are measurable by the stated axioms and [F2]. [F1, F2, given]

2.1 Using [F5] and Countable Choice, choose integrable simple $f_j\to f$ with $\|f_j-f\|_{L^1(H)}\le2^{-j}$. Step 1.1 gives uniform $H$ convergence $Df_j\to Df$, hence product $L^1((0,T)\times A_n)$ convergence with summable errors for every $n$. Use the measurable representative of $Df$ constructed there; Tonelli applied to the error series shows $Df_j(t,x)\to Df(t,x)$ outside a single product-null set in the countable exhaustion. Fubini then gives spatial almost-everywhere convergence for almost every $t$. The sequential Fatou hypothesis yields $\|Df(t)\|_Y\le\liminf_j\|Df_j(t)\|_Y$, and scalar Fatou applied to the $p$th powers proves $\|Df\|_{L^p_tY}\le\liminf_j\|Df_j\|_{L^p_tY}\le C_T\|f\|_1$. [F1, F2, F3, F5, step 1.1, step 1.2]

3.1 For completeness, the assumed spatial integral property has a well-defined left side: local-integrability bounds give $\int\int_{A_n}|K(r,x)|\,d\mu\,dr\le b_n\int\|K(r,\cdot)\|_Y\,dr<\infty$, so Tonelli implies absolute scalar integrability for almost every $x$ on every $A_n$. The mixed-norm limit has already been identified with the actual $H$ solution in step 2.1, rather than postulated. Combining that estimate with step 1.1 proves the asserted sum estimate. [F1, F2, F3, step 1.1, step 2.1] ∎
