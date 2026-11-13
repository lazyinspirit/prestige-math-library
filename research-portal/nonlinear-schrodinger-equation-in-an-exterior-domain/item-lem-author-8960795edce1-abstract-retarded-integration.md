---
title: Abstract retarded integration in compatible time spaces
status: published
research_item: lem-author-8960795edce1-abstract-retarded-integration
dependency_level: 1
---

## Prerequisites

- [lem-author-8960795edce1-compatible-banach-pairs](item-lem-author-8960795edce1-compatible-banach-pairs)
- [lem-author-8960795edce1-shifted-bochner-orbits](item-lem-author-8960795edce1-shifted-bochner-orbits)
- [math:thm-bochner-dominated-convergence](https://alphabetamath.cc/item/thm-bochner-dominated-convergence)
- [math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals)
- [math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion)
- [math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality)
- [math:thm-bounded-linear-maps-commute-with-bochner-integration](https://alphabetamath.cc/item/thm-bounded-linear-maps-commute-with-bochner-integration)
- [math:thm-absolute-continuity-of-the-integral](https://alphabetamath.cc/item/thm-absolute-continuity-of-the-integral)


## Statement

Use the spaces and rows of [lem-author-8960795edce1-shifted-bochner-orbits](item-lem-author-8960795edce1-shifted-bochner-orbits). Suppose $B_1=L^1(0,T;H)$ and $B_2=L^p(0,T;Y)$ admit continuous injective linear maps into one Hausdorff topological vector space $\mathcal A$ of time-dependent classes or distributions, and that for every $r,h$ the two specified values of $R_rh$ have the same image there. These are explicit compatibility hypotheses. For example, continuous injections $H,Y\to Z$ into a common Banach space supply $\mathcal A=L^1(0,T;Z)$; the finite interval gives the needed $L^p(Y)\to L^1(Z)$ bound by [math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals). Then for $f\in L^1(0,T;H)$, $Df(t)=\int_0^tW(t-r)f(r)\,dr$ belongs to $C([0,T];H)$ and has a compatible value in $L^p(0,T;Y)$ with $\|Df\|_{C_tH}+\|Df\|_{L^p_tY}\le(1+C_T)\|f\|_{L^1_tH}$. The compatible integral is obtained in the closed pair space of [lem-author-8960795edce1-compatible-banach-pairs](item-lem-author-8960795edce1-compatible-banach-pairs), using [math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion), [math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality) and [math:thm-bounded-linear-maps-commute-with-bochner-integration](https://alphabetamath.cc/item/thm-bounded-linear-maps-commute-with-bochner-integration).

## Facts & Assumptions



[F1] [lem-author-8960795edce1-shifted-bochner-orbits](item-lem-author-8960795edce1-shifted-bochner-orbits) supplies the two complete time spaces, row continuity, row bounds, and density of interval-step forcings.

[F2] [lem-author-8960795edce1-compatible-banach-pairs](item-lem-author-8960795edce1-compatible-banach-pairs) supplies their closed compatible Banach pair space $V$ and compatible coordinate integrals. Bochner integrability and its norm bound are [math:thm-bochner-integrability-criterion](https://alphabetamath.cc/item/thm-bochner-integrability-criterion) and [math:lem-bochner-integral-norm-inequality](https://alphabetamath.cc/item/lem-bochner-integral-norm-inequality); bounded linear maps commute with the integrals by [math:thm-bounded-linear-maps-commute-with-bochner-integration](https://alphabetamath.cc/item/thm-bounded-linear-maps-commute-with-bochner-integration). Dominated convergence in the first coordinate uses [math:thm-bochner-dominated-convergence](https://alphabetamath.cc/item/thm-bochner-dominated-convergence), and the common-Banach-space example uses [math:thm-holder-inequality-for-integrals](https://alphabetamath.cc/item/thm-holder-inequality-for-integrals).

[F3] Absolute continuity of the scalar integral ([math:thm-absolute-continuity-of-the-integral](https://alphabetamath.cc/item/thm-absolute-continuity-of-the-integral)) says that for $g\in L^1(0,T)$ and every $\varepsilon>0$, there is $\delta>0$ such that every measurable $E\subset(0,T)$ of measure less than $\delta$ satisfies $\int_E|g(r)|\,dr<\varepsilon$.

## Proof

**Given:** The row bounds and strong continuity, and the explicit ambient compatibility of their $B_1$ and $B_2$ values.

**Goal:** Construct the retarded bound for arbitrary $L^1(H)$ forcing and identify the compatible value with its continuous $H$ solution.

1.1 Let $Q_rh$ denote the pair of row values in $V$. Its norm is at most $(T+C_T)\|h\|_H$ and $r\mapsto Q_rh$ is continuous, by [F1] and the sum norm. Approximate the strongly measurable $f$ pointwise by finite-valued simple functions. For each of their finitely many values, the corresponding continuous pair-valued orbit is uniformly approximable by finite-valued functions on the compact parameter interval. This proves strong measurability of $r\mapsto Q_rf(r)$. Its integrable norm and [F2] give $U=\int_0^TQ_rf(r)\,dr\in V$, whose second coordinate has norm at most $C_T\|f\|_1$. [F1, F2, given]

1.2 Independently, $r\mapsto W(-r)f(r)$ is strongly measurable by the same simple-approximation argument and has norm $\|f(r)\|_H$. Its primitive $G(t)=\int_0^tW(-r)f(r)\,dr$ satisfies $\|G(t)-G(s)\|\le\int_{\min(s,t)}^{\max(s,t)}\|f(r)\|_H\,dr$ by the Bochner norm inequality in [F2]. The scalar function $g(r)=\|f(r)\|_H$ has a measurable representative in $L^1(0,T)$. Given $\varepsilon>0$, apply [F3] to $g$ and let $\delta>0$ be its small-measure threshold. The interval $E=(\min(s,t),\max(s,t))\subset(0,T)$ has Lebesgue measure $|t-s|$, so $|t-s|<\delta$ gives $\|G(t)-G(s)\|<\varepsilon$. Thus $G$ is continuous on $[0,T]$, including one-sided continuity at the endpoints. Bounded linear maps commute with the Bochner integral by [F2], and the group law gives $Df(t)=W(t)G(t)$. Hence $Df$ is continuous by strong continuity and isometry, and $\|Df\|_C\le\|f\|_1$. [F1, F2, F3, given]

2.1 For an interval-step forcing $f=\mathbf1_{(a,b)}h$, the integral in step 1.1 is the pair-valued integral of the continuous function $Q_rh$ on $[a,b]$. Uniform Riemann-sum approximation on this compact interval converges in $V$, since uniform continuity bounds the norm error by the mesh oscillation times its length. The first coordinates of these sums, evaluated at fixed $t$, are Riemann sums for $\int_a^b\mathbf1_{r<t}W(t-r)h\,dr$. The integrand has at most the single cutoff discontinuity at $r=t$, so these sums converge in $H$ to $Df(t)$. Their norms are uniformly bounded by $(b-a)\|h\|_H$; dominated convergence in the finite $t$ interval gives convergence also in $B_1$. Therefore the first coordinate of $U$ is the class of the continuous function $Df$. Finite sums give the same identification for all interval-step forcings. [F1, F2, step 1.1, step 1.2]

3.1 Approximate arbitrary $f$ by interval-step forcings in $L^1(H)$ using [F1]. The pair-valued integrals converge in $V$ by their norm bound, while the continuous $H$ solutions converge uniformly by step 1.2. The first coordinate therefore remains the $B_1$ class of $Df$, so closed compatibility identifies its second-coordinate value in the common ambient space. The two coordinate estimates yield the asserted sum bound. No Hilbert vector was identified with a scalar function, and no existence of a limit in an unspecified space was assumed. [F1, F2, step 1.1, step 1.2, step 2.1] ∎
