---
title: Strongly continuous shifted orbits in finite Bochner norms
status: draft
research_item: lem-author-8960795edce1-shifted-bochner-orbits
dependency_level: 0
---

## Prerequisites

- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-strongly-continuous-one-parameter-unitary-group](https://alphabetamath.cc/item/def-strongly-continuous-one-parameter-unitary-group)
- [physics:lem-pe12-bochner-lp-mollification](https://alphabetamath.cc/physics/item/lem-pe12-bochner-lp-mollification)
- [physics:thm-pe12-bochner-lp-completeness](https://alphabetamath.cc/physics/item/thm-pe12-bochner-lp-completeness)
- [math:lem-complex-norm-realification-is-a-real-norm](https://alphabetamath.cc/item/lem-complex-norm-realification-is-a-real-norm)
- [math:thm-bochner-dominated-convergence](https://alphabetamath.cc/item/thm-bochner-dominated-convergence)
- [math:def-hilbert-space](https://alphabetamath.cc/item/def-hilbert-space)
- [math:def-banach-space](https://alphabetamath.cc/item/def-banach-space)
- [math:def-bounded-linear-operator](https://alphabetamath.cc/item/def-bounded-linear-operator)
- [math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function)
- [math:thm-lebesgue-outer-measure-and-measurability-are-translation-invariant](https://alphabetamath.cc/item/thm-lebesgue-outer-measure-and-measurability-are-translation-invariant)
- [math:def-integral-of-a-nonnegative-simple-function](https://alphabetamath.cc/item/def-integral-of-a-nonnegative-simple-function)
- [math:def-nonnegative-lebesgue-integral](https://alphabetamath.cc/item/def-nonnegative-lebesgue-integral)


## Statement

Assume Countable Choice. Fix $0<T<\infty$ and $1\le p<\infty$. Let $H$ be an abstract complex Hilbert space with a strongly continuous unitary group $W$, and let $Y$ be a complex Banach space. Suppose the actual orbit map $h\mapsto W(\cdot)h$ defines a bounded complex-linear map from $H$ into the Bochner space $B_2=L^p(0,T;Y)$, with bound $C_T\ge0$. No scalar-function realization of arbitrary vectors of $H$ is assumed. Set $B_1=L^1(0,T;H)$. Here $L^q(0,T;X)$ denotes almost-everywhere classes of strongly measurable $X$-valued functions with norm $(\int_0^T\|f(t)\|_X^q\,dt)^{1/q}$ for $1\le q<\infty$.

Both $B_1$ and $B_2$ are Banach spaces. For every $h\in H$ and every $r\in[0,T]$, define the truncated row $R_rh(t)=\mathbf1_{r<t<T}W(t-r)h$ for $0<t<T$. Its $B_1$ value is this cutoff $H$-valued orbit; its $B_2$ value is the restriction to $(0,T)$ of the translate by $r$ of the zero extension of the given $Y$-valued orbit class. Then $\|R_rh\|_{B_1}=(T-r)\|h\|_H\le T\|h\|_H$ and $\|R_rh\|_{B_2}\le C_T\|h\|_H$. For each fixed $h$, the maps $[0,T]\ni r\mapsto R_rh$ are norm-continuous in both spaces, including one-sided continuity at the endpoints.

Interval-step functions are dense in $L^1(0,T;H)$: the interval averages on partitions with maximum cell length tending to zero converge in that norm. For $0<r<T$ and $h\ne0$, the $H$-valued row has a jump at $t=r$ and has no continuous representative; no assertion of row membership in $C([0,T];H)$ is made.

## Statement references

[math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[math:def-strongly-continuous-one-parameter-unitary-group](https://alphabetamath.cc/item/def-strongly-continuous-one-parameter-unitary-group)

[Time translations and mollification in Bochner $L^p$](https://alphabetamath.cc/physics/item/lem-pe12-bochner-lp-mollification)

[Bochner $L^p$ is complete for a Banach value space](https://alphabetamath.cc/physics/item/thm-pe12-bochner-lp-completeness)

[math:lem-complex-norm-realification-is-a-real-norm](https://alphabetamath.cc/item/lem-complex-norm-realification-is-a-real-norm)

[math:thm-bochner-dominated-convergence](https://alphabetamath.cc/item/thm-bochner-dominated-convergence)

[math:def-hilbert-space](https://alphabetamath.cc/item/def-hilbert-space)

[math:def-banach-space](https://alphabetamath.cc/item/def-banach-space)

[math:def-bounded-linear-operator](https://alphabetamath.cc/item/def-bounded-linear-operator)

[math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function)

[math:thm-lebesgue-outer-measure-and-measurability-are-translation-invariant](https://alphabetamath.cc/item/thm-lebesgue-outer-measure-and-measurability-are-translation-invariant)

[math:def-integral-of-a-nonnegative-simple-function](https://alphabetamath.cc/item/def-integral-of-a-nonnegative-simple-function)

[math:def-nonnegative-lebesgue-integral](https://alphabetamath.cc/item/def-nonnegative-lebesgue-integral)

## Facts & Assumptions

[F1] A strongly continuous unitary group has continuous orbits, the group law, and $\|W(t)h\|_H=\|h\|_H$ ([math:def-strongly-continuous-one-parameter-unitary-group](https://alphabetamath.cc/item/def-strongly-continuous-one-parameter-unitary-group)).

[F2] Finite-exponent Bochner completeness is [Bochner $L^p$ is complete for a Banach value space](https://alphabetamath.cc/physics/item/thm-pe12-bochner-lp-completeness), and local time translation continuity and convergence of interval averages are [Time translations and mollification in Bochner $L^p$](https://alphabetamath.cc/physics/item/lem-pe12-bochner-lp-mollification), under [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice). Their statements concern real Banach value spaces. Realification preserves the set, addition, norm and metric by [math:lem-complex-norm-realification-is-a-real-norm](https://alphabetamath.cc/item/lem-complex-norm-realification-is-a-real-norm), so strong measurability, norm continuity and completeness transfer unchanged to the complex spaces used here. Countable Choice is spent in these suppliers and in [F3].

[F3] Norm dominated convergence for strongly measurable Banach-valued functions is [math:thm-bochner-dominated-convergence](https://alphabetamath.cc/item/thm-bochner-dominated-convergence).

[F4] The spaces and the complex-linear orbit bound use [math:def-hilbert-space](https://alphabetamath.cc/item/def-hilbert-space), [math:def-banach-space](https://alphabetamath.cc/item/def-banach-space) and [math:def-bounded-linear-operator](https://alphabetamath.cc/item/def-bounded-linear-operator). Strong measurability means almost-everywhere pointwise norm approximation by finite-valued measurable simple functions ([math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function)).

[F5] Translations of subsets of $\mathbb R$ preserve Lebesgue measurability and measure, hence also null sets ([math:thm-lebesgue-outer-measure-and-measurability-are-translation-invariant](https://alphabetamath.cc/item/thm-lebesgue-outer-measure-and-measurability-are-translation-invariant)). The integral of a nonnegative simple function is the sum of its values times the measures of its level sets ([math:def-integral-of-a-nonnegative-simple-function](https://alphabetamath.cc/item/def-integral-of-a-nonnegative-simple-function)); the nonnegative integral is the supremum over simple minorants ([math:def-nonnegative-lebesgue-integral](https://alphabetamath.cc/item/def-nonnegative-lebesgue-integral)).

## Proof

**Given:** Countable Choice, the complex spaces and orbit estimate, $0<T<\infty$, $1\le p<\infty$, and parameters in $[0,T]$.

**Goal:** Establish completeness, the two uniform row bounds, parameter continuity and density of interval-step forcings.

1.1 Fix $h\in H$ and $r\in[0,T]$. Uniform approximation of the continuous orbit on $[0,T]$ by finitely many sampled values on increasingly fine interval partitions, followed by the measurable cutoff, proves strong measurability of $R_rh$ by [F4]. Unitarity gives $\|R_rh\|_{B_1}=(T-r)\|h\|_H\le T\|h\|_H$. If $r_n\in[0,T]$ tends to $r$, then $R_{r_n}h(t)\to R_rh(t)$ in $H$ for every $t\in(0,T)\setminus\{r\}$ by orbit continuity and eventual agreement of the cutoffs. Each row is bounded in norm by the integrable constant $\|h\|_H$. Thus [F3] gives $\|R_{r_n}h-R_rh\|_{B_1}\to0$, also for $r=0,T$. [F1, F3, F4, given]

1.2 Write $A_h$ for the zero extension to $\mathbb R$ of a strongly measurable representative of the given $Y$-valued orbit. For any real $a$, translated simple approximants converge outside the translated exceptional null set, so [F4] and [F5] prove strong measurability of $A_h(\cdot-a)$ and independence from the chosen representative. For a nonnegative scalar simple function $s$, translating its level sets preserves each measure, whence $\int_{\mathbb R}s(t-a)\,dt=\int_{\mathbb R}s(t)\,dt$. Translation bijects the simple minorants of a nonnegative measurable $g$ with those of $g(\cdot-a)$, so taking suprema proves the same identity for $g$ by [F5]. Apply it to $g(t)=\|A_h(t)\|_Y^p$: whole-line translation preserves its Bochner $L^p$ norm. Since $0\le r\le T$, for $0<t<T$ one has $0<t-r<T$ exactly when $r<t<T$. Consequently the specified $B_2$ row is $A_h(\cdot-r)|_{(0,T)}$; restriction decreases the norm by the simple-minorant definition in [F5], so $\|R_rh\|_{B_2}\le\|A_h\|_{L^p(\mathbb R;Y)}\le C_T\|h\|_H$. [F4, F5, given]

2.1 Regard $A_h$ as a function on $(-2T,3T)$ and recenter this interval to $(0,5T)$. The local translation theorem [F2], applied after realification, gives $\|A_h(\cdot-\delta)-A_h\|_{L^p([-T,T];Y)}\to0$ as $\delta\to0$, since $[-T,T]$ is compactly contained in $(-2T,3T)$. For $r_n,r\in[0,T]$ and $\delta_n=r_n-r$, the change of variable $u=t-r$, justified by step 1.2, gives $\|R_{r_n}h-R_rh\|_{B_2}^p=\int_{-r}^{T-r}\|A_h(u-\delta_n)-A_h(u)\|_Y^p\,du$. This is bounded by the corresponding integral over $[-T,T]$ and tends to zero. This proves parameter continuity in $B_2$ without requiring pointwise $Y$ values at exceptional times. [F2, F5, step 1.2, given]

3.1 By [F4], $H$ and $Y$ are complete; apply the real Bochner completeness theorem in [F2] to their realifications to obtain completeness of $B_1$ and $B_2$ in the unchanged metrics. Apply the interval-average assertion of [F2] with exponent one and value space the realification of $H$: the resulting interval-step functions converge to any prescribed $f\in L^1(0,T;H)$, proving density. For $0<r<T$ and $h\ne0$, the left limit of the row at $r$ is $0$ and the right limit is $W(0)h=h$. A continuous representative agreeing almost everywhere would agree with the continuous row on each of $(0,r)$ and $(r,T)$, because a nonzero continuous difference persists on an interval of positive measure. Its two limits at $r$ would then disagree. This proves the claimed failure of continuous representability and completes the stated claims. [F1, F2, F4, step 1.1, step 1.2, step 2.1] ∎
