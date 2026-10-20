---
id: alg-split-conformal-prediction-set
kind: algorithm
title: "Split conformal prediction set"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 6
deps:
  - def-conformal-nonconformity-score-and-rank-pvalue
  - def-statistic-and-estimator
  - lem-finite-order-statistic-and-rank-maps-are-measurable
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  repair: research/machine-learning-all-101-2026-10-19-owner-step4-published-alert-repair/application/receipts/alg-split-conformal-prediction-set.json
  precheck: n/a
sources:
  references:
    - title: "Jing Lei et al., Distribution-Free Predictive Inference for Regression, JASA 113(523) (2018), §2.2 and Appendix A.1"
      url: "https://arxiv.org/pdf/1604.04173"
    - title: "Ryan Tibshirani, Conformal Prediction, Advanced Topics in Statistical Learning, Spring 2024, §2"
      url: "https://www.stat.berkeley.edu/~ryantibs/statlearn-s24/lectures/conformal.pdf"
---

## Definition

Let $m\ge0$ calibration examples $Z_i=(X_i,Y_i)$ be scored by one fixed,
measurable score rule $s_H$ obtained from the training statistic $H$, and let
$0<\alpha<1$. Set
$$n=m+1,\qquad k=\lceil(m+1)(1-\alpha)\rceil.$$
Compute $R_i=s_H(Z_i)$ for $1\le i\le m$. Sort calibration observations by
the ordered keys $(R_i,i)$, so ties are broken by the fixed index order. If
$k\le m$, let $q$ be the score component of the $k$th ordered pair; if
$k=m+1$, set $q=+\infty$. For a feature value $x$, return
$$C(x)=\{y\in\mathcal Y:s_H(x,y)\le q\}.$$

The optional tie-randomized version uses one independent $U$ with Lebesgue
probability law on $[0,1]$, shared across the candidate scan, and returns
$$C_U(x)=\{y\in\mathcal Y:p_U(y)>\alpha\},$$
where $p_U$ is the score-rank formula in
Conformal scores and rank p-values. The candidate score is
included in its tie group. The score maps must be jointly measurable in the
training, calibration, feature, and response variables; then membership in
each returned set is a measurable event by
Finite order statistics and rank maps are measurable.

## Definition references

[[def-conformal-nonconformity-score-and-rank-pvalue]]

[[lem-finite-order-statistic-and-rank-maps-are-measurable]]

