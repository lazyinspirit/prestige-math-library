---
title: Homogeneous bounds transfer to L1 retarded forcing
status: published
research_item: lem-se-shifted-l1-retarded-transfer
dependency_level: 2
---

## Prerequisites

- [lem-author-8960795edce1-compatible-banach-pairs](item-lem-author-8960795edce1-compatible-banach-pairs)
- [lem-author-8960795edce1-shifted-bochner-orbits](item-lem-author-8960795edce1-shifted-bochner-orbits)
- [lem-author-8960795edce1-abstract-retarded-integration](item-lem-author-8960795edce1-abstract-retarded-integration)
- [lem-author-8960795edce1-scalar-fatou-retarded-transfer](item-lem-author-8960795edce1-scalar-fatou-retarded-transfer)
- [lem-author-8960795edce1-spatial-lq-mixed-norms](item-lem-author-8960795edce1-spatial-lq-mixed-norms)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-strongly-continuous-one-parameter-unitary-group](https://alphabetamath.cc/item/def-strongly-continuous-one-parameter-unitary-group)
- [math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality)
- [math:thm-minkowski-integral-inequality](https://alphabetamath.cc/item/thm-minkowski-integral-inequality)
- [math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals)
- [math:def-hilbert-space](https://alphabetamath.cc/item/def-hilbert-space)
- [math:def-banach-space](https://alphabetamath.cc/item/def-banach-space)
- [math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function)
- [math:def-bochner-integrable-function](https://alphabetamath.cc/item/def-bochner-integrable-function)


## Statement

Assume Countable Choice ([math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)). Let $H$ be a Hilbert space and $W$ a strongly continuous unitary group ([math:def-strongly-continuous-one-parameter-unitary-group](https://alphabetamath.cc/item/def-strongly-continuous-one-parameter-unitary-group)). Fix $0<T<\infty$ and $1\le p<\infty$. Suppose the homogeneous bound $\|W(\cdot)h\|_{L^p(0,T;Y)}\le C_T\|h\|_H$ is given, with one of the following precise norm and compatibility conventions.

**Abstract Bochner convention:** $Y$ is Banach, the orbit is a Bochner $L^p(Y)$ class, and the spaces $L^1_tH$ and $L^p_tY$ are continuously and injectively mapped into a common Hausdorff space of time classes or distributions, agreeing on the truncated homogeneous rows. These identifications must commute with time restriction and time translation when passing to a shorter or translated interval. This is the closed-pair compatibility of [lem-author-8960795edce1-compatible-banach-pairs](item-lem-author-8960795edce1-compatible-banach-pairs)–[lem-author-8960795edce1-abstract-retarded-integration](item-lem-author-8960795edce1-abstract-retarded-integration). It applies, for example, to $H,Y$ continuously embedded in a common Banach value space; it does not assume arbitrary Hilbert vectors are scalar functions.

**Scalar Banach-function convention:** $H$ has continuous injective realization by scalar locally integrable functions on a sigma-finite spatial space, bounded into $L^1$ on a fixed finite-measure exhaustion. The scalar Banach function space $Y$ satisfies the local-integrability, lattice, sequential Fatou, measurable-section-norm and explicit spatial integral-triangle hypotheses in [lem-author-8960795edce1-scalar-fatou-retarded-transfer](item-lem-author-8960795edce1-scalar-fatou-retarded-transfer), and the orbit bound uses its scalar mixed norm. These hypotheses include every $Y=L^q(X)$, $1\le q\le\infty$, by [lem-author-8960795edce1-spatial-lq-mixed-norms](item-lem-author-8960795edce1-spatial-lq-mixed-norms). In particular $H\hookrightarrow L^2(X)$ supplies the required local $L^1$ compatibility by Holder on finite-measure pieces.

Under either convention, for every strongly measurable $f\in L^1(0,T;H)$ the $H$-valued Bochner integral $Df(t)=\int_0^tW(t-r)f(r)\,dr$ belongs to $C([0,T];H)$ and has the specified compatible $L^p_tY$ value, with $\|Df\|_{C_tH}+\|Df\|_{L^p_tY}\le(1+C_T)\|f\|_{L^1_tH}$. The $C_tH$ bound follows from [math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality), while the finite-time mixed bound uses [math:thm-minkowski-integral-inequality](https://alphabetamath.cc/item/thm-minkowski-integral-inequality) in the scalar convention and Bochner norm integration in the abstract convention. The shifted estimate uses $\mathbf1_{t>r}W(t-r)$ and restriction to $(0,T-r)$. The same constant works on every translated interval of length at most $T$, with its correspondingly translated norm. At spatial $L^\infty$ the conclusion is a scalar mixed-norm assertion and makes no claim of strong measurability into that nonseparable Banach space.

## Facts & Assumptions



[F1] [lem-author-8960795edce1-compatible-banach-pairs](item-lem-author-8960795edce1-compatible-banach-pairs) proves that compatible pairs form a closed Banach space and their integrals remain compatible. [lem-author-8960795edce1-shifted-bochner-orbits](item-lem-author-8960795edce1-shifted-bochner-orbits) constructs continuous parameter rows in $L^1_tH$ and Bochner $L^p_tY$, and [lem-author-8960795edce1-abstract-retarded-integration](item-lem-author-8960795edce1-abstract-retarded-integration) identifies their integrals with the separately continuous $H$-valued Duhamel solution. The defining group properties are [math:def-strongly-continuous-one-parameter-unitary-group](https://alphabetamath.cc/item/def-strongly-continuous-one-parameter-unitary-group).

[F2] [lem-author-8960795edce1-scalar-fatou-retarded-transfer](item-lem-author-8960795edce1-scalar-fatou-retarded-transfer) proves the scalar-function estimate by genuine local $L^1$ identification, simple-forcing approximation, spatial integration and Fatou; [lem-author-8960795edce1-spatial-lq-mixed-norms](item-lem-author-8960795edce1-spatial-lq-mixed-norms) verifies the full spatial $L^q$ range including infinity. It uses [math:thm-minkowski-integral-inequality](https://alphabetamath.cc/item/thm-minkowski-integral-inequality) after the spatial triangle property.

[F3] The continuous energy estimate is the Bochner norm inequality [math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality). [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) is the inherited countable approximation assumption.

[F4] The Hilbert and Banach structures have the real or complex conventions of [math:def-hilbert-space](https://alphabetamath.cc/item/def-hilbert-space) and [math:def-banach-space](https://alphabetamath.cc/item/def-banach-space). Strong measurability means almost-everywhere norm approximation by measurable simple functions ([math:def-strongly-measurable-banach-valued-function](https://alphabetamath.cc/item/def-strongly-measurable-banach-valued-function)), and the Bochner integral uses integrable-simple approximation in the norm-integral sense ([math:def-bochner-integrable-function](https://alphabetamath.cc/item/def-bochner-integrable-function)). The finite-exponent Bochner spaces use the explicit almost-everywhere quotient and norm convention in the Statement of [lem-author-8960795edce1-shifted-bochner-orbits](item-lem-author-8960795edce1-shifted-bochner-orbits); the forcing quotient and scalar mixed norm use those in [lem-author-8960795edce1-scalar-fatou-retarded-transfer](item-lem-author-8960795edce1-scalar-fatou-retarded-transfer).

## Proof

**Given:** The unitary group, finite time exponent, homogeneous estimate, and one of the two stated actual compatibility conventions.

**Goal:** Establish the causal $L^1(H)$ forcing estimate with no loss of the abstract Hilbert/Banach case or the scalar $L^\infty$ endpoint.

1.1 In the abstract convention, apply the continuous parameter row construction and the closed-pair integration result [F1]. The $L^p(Y)$ component is bounded by $C_T\|f\|_1$, and its $L^1(H)$ component is identified there with the continuous $H$ solution. The separate $C_tH$ bound is $\|f\|_1$ by [F3]. This proves both membership and the sum estimate without a scalar realization of $H$. [F1, F3, given]

1.2 In the scalar convention, [F2] instead constructs a joint scalar representative of the continuous $H$ solution, proves the simple-forcing estimate, and passes to this same representative by local $L^1$ convergence and Fatou. Its norm estimate is exactly the same sum estimate. For $Y=L^\infty$, its endpoint proof integrates scalar kernels and their essential suprema, so it does not substitute joint scalar measurability for Bochner measurability. [F2, F3, given]

2.1 For a row starting at $r$, its nonzero portion is $W(\tau)h$ with $0<\tau<T-r$. Restricting the homogeneous norm from $(0,T)$ decreases it, giving the same $C_T$. If $I=(a,b)$ has length at most $T$, the changes $s=r-a$ and $\tau=t-a$ reduce the autonomous group formula and both norm conventions to the preceding estimates on a shortened interval. In the scalar convention these are ordinary restrictions and translations of joint representatives. In the abstract convention the stated restriction/translation compatibility supplies exactly these same identifications on the new interval. The same constant therefore holds in the translated norms. This completes all assertions using shifted homogeneous bounds and $L^1$ forcing. ∎ [F1, F2, F3, step 1.1, step 1.2]
