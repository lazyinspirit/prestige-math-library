---
title: Continuous free convolution on a finite time interval
status: published
research_item: lem-author-9e2ffff7db46-free-continuous-convolution
dependency_level: 0
---

## Prerequisites

- [math:def-banach-space](https://alphabetamath.cc/item/def-banach-space)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-strongly-continuous-semigroup](https://alphabetamath.cc/item/def-strongly-continuous-semigroup)
- [math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function)
- [math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion)
- [math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality)
- [math:lem-linearity-of-the-bochner-integral](https://alphabetamath.cc/item/lem-linearity-of-the-bochner-integral)
- [physics:thm-bochner-dominated-convergence](https://alphabetamath.cc/physics/item/thm-bochner-dominated-convergence)
- [physics:thm-bounded-linear-maps-commute-with-bochner-integration](https://alphabetamath.cc/physics/item/thm-bounded-linear-maps-commute-with-bochner-integration)
- [math:thm-lebesgue-measure-is-a-complete-measure](https://alphabetamath.cc/item/thm-lebesgue-measure-is-a-complete-measure)
- [math:thm-lebesgue-measure-of-a-box-of-every-kind](https://alphabetamath.cc/item/thm-lebesgue-measure-of-a-box-of-every-kind)
- [math:def-bochner-integrable-function](https://alphabetamath.cc/item/def-bochner-integrable-function)
- [math:cor-archimedean-reciprocal](https://alphabetamath.cc/item/cor-archimedean-reciprocal)


## Statement

Assume Countable Choice. Let $E$ be a complex Banach space regarded as a real Banach space, let $0<T<\infty$, and let $W(t)$ be a strongly continuous group of bounded real-linear operators on $E$. Suppose $M=\sup_{|t|\le T}\|W(t)\|<\infty$.

All time measurability, almost-everywhere assertions and integrals use one-dimensional Lebesgue measure restricted to $[0,T]$: explicitly, $\mathcal A_T=\{A\cap[0,T]:A\in\mathcal L(\mathbb R)\}$ and $\mu_T(B)=\lambda_1(B)$ for $B\in\mathcal A_T$. Write $ds=d\mu_T(s)$. Functions initially defined on $(0,T)$ are extended by zero at the two endpoints.

For $f\in L^1(0,T;E)$, meaning a strongly measurable function with $\|f\|_{L^1}=\int_0^T\|f(s)\|\,ds<\infty$, and $r\in[0,T]$, put $D_rf(t)=\int_r^tW(t-s)f(s)\,ds$, where the integrals are Bochner integrals in the real Banach space $E$ and $\int_r^t=-\int_t^r$ if $t<r$. Then $D_rf\in C([0,T];E)$, $D_rf(r)=0$, and $\|D_rf\|_C\le M\|f\|_{L^1}$, where $\|v\|_C=\sup_{t\in[0,T]}\|v(t)\|$.

For every $x\in E$, the orbit $t\mapsto W(t-r)x$ is continuous on $[0,T]$ with supremum norm at most $M\|x\|$. The free forcing operator is real-linear, and bounded real-linear maps commute with its defining integrals.

## Statement references

[math:def-banach-space](https://alphabetamath.cc/item/def-banach-space)

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[math:def-strongly-continuous-semigroup](https://alphabetamath.cc/item/def-strongly-continuous-semigroup)

[math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function)

[math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion)

[math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality)

[math:lem-linearity-of-the-bochner-integral](https://alphabetamath.cc/item/lem-linearity-of-the-bochner-integral)

[physics:thm-bochner-dominated-convergence](https://alphabetamath.cc/physics/item/thm-bochner-dominated-convergence)

[physics:thm-bounded-linear-maps-commute-with-bochner-integration](https://alphabetamath.cc/physics/item/thm-bounded-linear-maps-commute-with-bochner-integration)

[math:thm-lebesgue-measure-is-a-complete-measure](https://alphabetamath.cc/item/thm-lebesgue-measure-is-a-complete-measure)

[math:thm-lebesgue-measure-of-a-box-of-every-kind](https://alphabetamath.cc/item/thm-lebesgue-measure-of-a-box-of-every-kind)

[math:def-bochner-integrable-function](https://alphabetamath.cc/item/def-bochner-integrable-function)

[math:cor-archimedean-reciprocal](https://alphabetamath.cc/item/cor-archimedean-reciprocal)

## Facts & Assumptions

**Given:** The group on the realification of $E$, the bound $M$, the base time $r\in[0,T]$, an arbitrary $x\in E$, and strongly measurable integrable-norm $f$, with the Lebesgue time measure specified in the Statement. All operator linearity is over $\mathbb R$.

**Goal:** Establish the continuous free forcing operator and its norm for either time orientation.

[F1] Strong continuity and the group law have the meaning of [math:def-strongly-continuous-semigroup](https://alphabetamath.cc/item/def-strongly-continuous-semigroup) on the real Banach space of [math:def-banach-space](https://alphabetamath.cc/item/def-banach-space). Strong measurability is the simple-approximation convention [math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function).

[F2] Bochner integrability and the integral are defined by norm limits of integrable-simple approximations in [math:def-bochner-integrable-function](https://alphabetamath.cc/item/def-bochner-integrable-function), including restriction to measurable sets by indicators. Strong measurability plus integrable norm gives Bochner existence ([math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion)); the norm inequality and real linearity are [math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality) and [math:lem-linearity-of-the-bochner-integral](https://alphabetamath.cc/item/lem-linearity-of-the-bochner-integral).

[F3] Bochner dominated convergence under [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) is [physics:thm-bochner-dominated-convergence](https://alphabetamath.cc/physics/item/thm-bochner-dominated-convergence). Bounded real-linear operators commute with integrals by [physics:thm-bounded-linear-maps-commute-with-bochner-integration](https://alphabetamath.cc/physics/item/thm-bounded-linear-maps-commute-with-bochner-integration), applied over the real field.

[F4] Under the assumed Countable Choice, [math:thm-lebesgue-measure-is-a-complete-measure](https://alphabetamath.cc/item/thm-lebesgue-measure-is-a-complete-measure) supplies the complete measure $(\mathbb R,\mathcal L(\mathbb R),\lambda_1)$. Applying [math:thm-lebesgue-measure-of-a-box-of-every-kind](https://alphabetamath.cc/item/thm-lebesgue-measure-of-a-box-of-every-kind) with $n=1$ makes every interval used here measurable with its length as measure; in particular each singleton is null. Each member of $\mathcal A_T$ is Lebesgue measurable. Complements relative to $[0,T]$ and countable unions stay in $\mathcal A_T$, and the empty-set and disjoint-countable-additivity identities for $\mu_T$ are inherited directly from $\lambda_1$. Hence $( [0,T],\mathcal A_T,\mu_T)$ is a measure space; it is complete because every subset of a $\mu_T$-null set is Lebesgue measurable and contained in $[0,T]$.

[F5] Applying [math:cor-archimedean-reciprocal](https://alphabetamath.cc/item/cor-archimedean-reciprocal) in $\mathbb R$ to $\delta/T>0$ shows that for every $\delta>0$ there is an integer $N\ge1$ with $T/N<\delta$. Thus equal subdivisions of $[0,T]$ have arbitrarily small mesh.

## Proof

**Given:** The group on the realification of $E$, the bound $M$, the base time $r\in[0,T]$, an arbitrary $x\in E$, and strongly measurable integrable-norm $f$, with the Lebesgue time measure specified in the Statement. All operator linearity is over $\mathbb R$.

**Goal:** Establish the continuous free forcing operator and its norm for either time orientation.

1.1 Fix $t\in[0,T]$ and let $f_n$ be measurable simple functions converging to $f$ outside a measurable null set. The group law and real linearity give, for $s,s'\in[0,T]$ and $z\in E$, $\|W(t-s)z-W(t-s')z\|=\|W(t-s')(W(s'-s)z-z)\|\le M\|W(s'-s)z-z\|$. For each $n\ge1$, strong continuity at zero, applied to the finitely many values $z$ of $f_n$, gives a common $\delta_n>0$ such that $\|W(h)z-z\|<1/(n(M+1))$ for every such $z$ whenever $|h|<\delta_n$. By [F5] choose $N_n\ge1$ with $T/N_n<\delta_n$; Countable Choice permits these choices simultaneously in $n$. Partition $[0,T]$ into $N_n$ equal half-open intervals, including $T$ in the last interval, and let $q_n(s)$ be the left endpoint of its interval. Define $h_n(s)=W(t-q_n(s))f_n(s)$. This is a measurable simple function: its finitely many level pieces are intersections of subdivision intervals, measurable by [F4], with the measurable level sets of $f_n$. The displayed group estimate gives $\|h_n(s)-W(t-s)f_n(s)\|<1/n$ everywhere. Hence off the exceptional null set, $\|h_n(s)-W(t-s)f(s)\|\le 1/n+M\|f_n(s)-f(s)\|\to0$. This proves strong measurability of $s\mapsto W(t-s)f(s)$ with an explicit uniform partition estimate. Its norm is at most $M\|f(s)\|$, so [F2] supplies its Bochner integral and its restriction to either oriented interval. [F1, F2, F3, F4, F5, given, construct]

2.1 Write the oriented integral over $[0,T]$ with scalar multiplier $a_{r,t}(s)=\mathbf1_{(r,t)}(s)$ when $t\ge r$ and $a_{r,t}(s)=-\mathbf1_{(t,r)}(s)$ otherwise. These indicators are measurable by [F4], and multiplication by them preserves the simple approximations in step 1.1. If $t_n\to t$ in $[0,T]$, then $a_{r,t_n}(s)W(t_n-s)f(s)\to a_{r,t}(s)W(t-s)f(s)$ for almost every $s$: the indicators are eventually constant away from $r,t$, strong continuity handles the orbit, and those endpoints are null by [F4]. The dominating function is $M\|f(s)\|$. Dominated convergence proves continuity of $D_rf$, including at $r$, where its defining integral is zero. The norm inequality gives $\|D_rf(t)\|\le M\int_{\min(r,t)}^{\max(r,t)}\|f(s)\|\,ds$. [F1, F2, F3, F4, step 1.1]

3.1 For the arbitrary vector $x\in E$, the orbit assertion follows directly from [F1] and the assumed bound. The integral assertions about additivity, real scalar multiplication and bounded real-linear maps follow from [F2] and [F3], with the same oriented sign. Taking the supremum of the estimate in step 2.1 proves the stated $C$-norm bound. The norm inequality also shows that changing $f$ on a measurable null set does not change $D_rf$, so the forcing map is well defined on $L^1(0,T;E)$. [F1, F2, F3, step 2.1] ∎
