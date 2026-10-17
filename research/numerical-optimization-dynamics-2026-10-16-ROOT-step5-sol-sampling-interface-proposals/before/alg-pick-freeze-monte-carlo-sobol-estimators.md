---
id: alg-pick-freeze-monte-carlo-sobol-estimators
kind: algorithm
title: Pick-freeze Monte Carlo estimators for Sobol indices
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps: [def-first-and-total-sobol-indices, thm-pick-freeze-sobol-covariance-identities]
forward_refs: [ex-ratio-pick-freeze-index-estimator-is-biased]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Andrea Saltelli, Making Best Use of Model Evaluations to Compute Sensitivity Indices, §2
      url: https://www.andreasaltelli.eu/file/repository/Making_best_use.pdf
    - title: Art B. Owen, Variance Components and Generalized Sobol' Indices, §2.1
      url: https://arxiv.org/pdf/1205.1774
---

## Definition

**Input:** a finite product probability law $\mu$, an evaluator $f\in L^2(\mu)$,
and a sample size $n\ge2$. Draw $n$ independent rows. In each row draw six
mutually independent vectors $X,X',U,V,W,W'$ with law $\mu$. Reuse $Y=f(X)$;
for each $i\in[d]$, evaluate the hybrids
$$X^{[i]}=(X_i,X'_{-i}),\qquad \widetilde X^{[i]}=(X_{-i},X'_i),$$
and form
$$N_i=f(X)f(X^{[i]})-f(U)f(V),\quad T_i=\tfrac12(f(X)-f(\widetilde X^{[i]}))^2,\quad D=\tfrac12(f(W)-f(W'))^2.$$
For the $n$ rows, compute their sample means $\bar N_i,\bar T_i,\bar D$ and
the empirical sample covariance matrix $\widehat\Sigma$ of
$$Z=(N_1,\ldots,N_d,T_1,\ldots,T_d,D).$$
Explicitly, for row vectors $Z_r$ and their mean $\bar Z$, compute
$$\widehat\Sigma=\frac1{n-1}\sum_{r=1}^n(Z_r-\bar Z)(Z_r-\bar Z)^{\mathsf T}.$$
If $\bar D=0$, return status `zero-empirical-variance` and no normalized index.
If $\bar D>0$, return the raw ratios $\widehat S_i=\bar N_i/\bar D$ and
$\widehat S_{T_i}=\bar T_i/\bar D$. Also return the formal first-order plug-in
matrix $\widehat J\widehat\Sigma\widehat J^{\mathsf T}/n$, where
$\widehat J$ is the derivative of the vector ratio map evaluated at
$(\bar N_1,\ldots,\bar N_d,\bar T_1,\ldots,\bar T_d,\bar D)$.
No clipping is applied to a negative finite-sample ratio. The $L^2$ input
assumption alone does not guarantee a finite population covariance of $Z$
or a valid MCSE interpretation of this matrix.

## Remarks

[[thm-pick-freeze-sobol-covariance-identities]] makes each numerator and the
denominator unbiased for its corresponding variance quantity. The ratios are
not asserted unbiased; [[ex-ratio-pick-freeze-index-estimator-is-biased]] gives
an explicit finite-sample bias witness.
Under AC, $f\in L^4(\mu)$ and positive output variance,
[[thm-pick-freeze-sobol-ratio-joint-clt-and-mcse]] establishes the joint CLT
and the plug-in matrix's asymptotic MCSE interpretation. The empirical matrix
formula above is still computed for $L^2$ inputs without these extra assumptions.
