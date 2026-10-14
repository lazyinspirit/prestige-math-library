---
id: thm-heavy-tailed-covariance-bound
kind: theorem
title: Adaptive truncated covariance has a finite matrix-variance operator bound
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
deps:
  - alg-adaptive-truncated-covariance-estimator
  - lem-adaptive-truncated-covariance-estimator-is-total
  - lem-fixed-scale-truncated-covariance-deviation
  - lem-adaptive-covariance-lepski-scale-reduction
  - lem-matrix-variance-intrinsic-dimension-at-least-one
  - def-matrix-variance-of-a-random-vector
  - lem-covariance-median-pilot-exact-block-budget
  - def-countable-choice
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
axiom_use: Countable Choice is inherited through the geometric-median pilot. The
  Lepski selection argument uses a finite index set and no further choice.
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: Stanislav Minsker and Xiaohan Wei, Estimation of the Covariance Structure
        of Heavy-Tailed Distributions, Theorem 2.1 and §4.3
      url: https://arxiv.org/pdf/1708.00502
dependency_level: 5
forward_refs:
  - cex-intrinsic-variance-alone-does-not-control-covariance-pilot
---

## Statement

Assume Countable Choice. Let $X_1,\ldots,X_m\in\mathbb R^p$ be clean iid
observations with mean $\mu$, nonzero covariance $\Sigma$, and finite fourth
central moment. For the matrix variance in
[[def-matrix-variance-of-a-random-vector]], put
$$d=\frac{\sigma_0^2}{\|\Sigma\|^2},\qquad D=\max\left\{d,\left(\frac{\operatorname{tr}\Sigma}{\sigma_0}\right)^2\right\}.$$
Suppose $\beta>1$, $0<\sigma_{\min}\le\sigma_0\le\sigma_{\max}$ and
$$m\ge10^{16}D\beta.$$
The same-sample pilot and original scale/selection rule of
[[alg-adaptive-truncated-covariance-estimator]] then satisfy
$$P\!\left(\|\widehat\Sigma^*-\Sigma\|_{\rm op}>18\sigma_0\sqrt{\frac\beta m}\right)\le5p\log_2\!\left(\frac{2\sigma_{\max}}{\sigma_{\min}}\right)e^{-\beta}.$$
Here $p$ is ambient dimension; it is not the intrinsic ratio $d$. More
precisely, with $L_g=\log_2(2\sigma_{\max}/\sigma_{\min})$ and
$N_+=\lceil L_g\rceil-\lceil\log_2(\sigma_0/\sigma_{\min})\rceil$, the
failure bound is
$$\left[1+\frac{3p+1}{2}N_+\right]e^{-\beta}.$$
The trace-aware sample condition is sufficient, not necessary. All clean
finite-fourth-moment laws remain eligible; no coordinate independence,
kurtosis bound, contamination or replacement guarantee is imposed.
The broader uniform pilot-accuracy formula in
[[lem-fixed-scale-truncated-covariance-deviation]] can be used instead of
this sufficient sample condition whenever it establishes the same
fixed-scale radius for each required scale.

## Facts & Assumptions

**Given:** Countable Choice, the clean iid model, matrix moments, confidence, bracket and sample-size hypothesis in the statement.

[F1] For every scale $\sigma_j\ge\sigma_0$, the fixed-scale proof provides a true-centered concentration event of failure at most $h_p e^{-\beta}$, $h_p=(3p+1)/2$; on it and the common pilot-radius event the error is at most $3\sigma_j\sqrt{\beta/m}$. [[lem-fixed-scale-truncated-covariance-deviation]].

[F2] The common prescribed pilot has radius $11\sqrt{2\operatorname{tr}(\Sigma)\beta/m}$ with failure at most $e^{-\beta}$. [[lem-covariance-median-pilot-exact-block-budget]].

[F3] Simultaneous required-scale radius-three bounds imply radius eighteen for the selected estimate; the exact number of required scales is $N_+$, and a shared pilot event is paid once. [[lem-adaptive-covariance-lepski-scale-reduction]].

[F4] The intrinsic ratio is at least one. [[lem-matrix-variance-intrinsic-dimension-at-least-one]].

## Proof

1.1 Since $D\ge d\ge1$ by [F4], $m\ge9\beta$ and the prescribed $k\le4.5\beta\le m/2$ is admissible. All finite-grid estimates and the selection rule are defined and measurable. Intersect the common pilot event [F2] with the required concentration events [F1]. Their complement has probability at most $[1+h_pN_+]e^{-\beta}$, by the shared-event conclusion of [F3]. On this intersection all required fixed-scale bounds hold, and [F3] gives the error at most $18\sigma_0\sqrt{\beta/m}$. [given, F1, F2, F3, F4, algebra]

2.1 The true grid size is $\lceil L_g\rceil$ and $L_g\ge1$, so $N_+\le\lceil L_g\rceil\le2L_g$. Therefore $1+h_pN_+\le1+(3p+1)L_g\le(3p+2)L_g\le5pL_g$. This proves the unrounded displayed bound by sharper event budgets, rather than the false assertion that the grid has at most $L_g$ elements. The same deterministic argument applies to any separately proved pilot event and fixed-scale interface as stated. [given, F1, F3, step 1.1, algebra] ∎

## Remarks

The former $m\ge Cd\beta$ assertion for this unknown-mean estimator is
false under arbitrary dependence, as proved by
[[cex-intrinsic-variance-alone-does-not-control-covariance-pilot]]. The
separate two-axis example refutes the trace comparison used by the source.
A full known-mean finite-matrix-variance concentration bound, without the
trace-aware sample condition, is retained in
[[lem-oracle-truncated-covariance-and-vector-concentration]].
