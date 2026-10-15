---
dependency_level: 5
id: alg-studentized-two-sample-u-permutation-test
kind: algorithm
title: Studentized two-sample U-statistic permutation test
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - def-studentized-two-sample-u-statistic
  - def-two-sample-order-r-u-statistic-and-first-projections
provenance:
  statement: literature-derived
  proof: not-applicable
axiom_use: "The finite enumeration and supplied statistic require no additional choice principle."
sources:
  references:
    - title: "Chung and Romano, Asymptotically Valid and Exact Permutation Tests Based on Two-Sample U-Statistics, Stanford Technical Report 2011-09, Sections 1 and 3"
      url: "https://stacks.stanford.edu/file/dp187pj2131/dp187pj2131_2011-09.pdf"
---

## Definition

**Inputs:** Two samples of sizes $m,n\ge r$, a measurable order-$(r,r)$ kernel symmetric within each group, two supplied nonnegative measurable variance-estimation routines, and a significance level $\alpha\in(0,1)$. Use the U-statistic in [[def-two-sample-order-r-u-statistic-and-first-projections]] and the standard-error pivot $S$ in [[def-studentized-two-sample-u-statistic]], including its value zero when the estimated standard error is zero. Choose the upper alternative statistic $T=S$, lower alternative statistic $T=-S$, or two-sided statistic $T=|S|$. Optionally supply an independent uniform random variable $U\in[0,1]$ for ties.

1. Pool the observations into $z=(X_1,\ldots,X_m,Y_1,\ldots,Y_n)$ and compute $T(z)$.
2. Enumerate all $N!$ coordinate permutations $\pi$ of $N=m+n$. For each permutation, treat its first $m$ observations as the first group and its last $n$ as the second. Recompute the U-statistic **and both variance estimates** from those groups, apply the same zero-denominator rule, and compute $T(z^\pi)$.
3. Return the inclusive p-value $p_{\rm inc}=N!^{-1}\#\{\pi:T(z^\pi)\ge T(z)\}$ and reject when $p_{\rm inc}\le\alpha$. If tie randomization was requested, instead return $p_U=N!^{-1}\{\#\{\pi:T(z^\pi)>T(z)\}+U\#\{\pi:T(z^\pi)=T(z)\}\}$ and reject when $p_U\le\alpha$.

This is complete finite enumeration, with permutations counted with their multiplicities even when observations repeat. It does not define a Monte Carlo approximation using a subset of permutations. No generic weak-null validity is asserted by the procedure alone; that requires the applicable studentization and estimator-consistency theorem.
