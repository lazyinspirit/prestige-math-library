---
id: alg-full-conformal-prediction-set
kind: algorithm
title: "Full conformal prediction set"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 6
deps:
  - def-conformal-nonconformity-score-and-rank-pvalue
  - lem-finite-order-statistic-and-rank-maps-are-measurable
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Jing Lei et al., Distribution-Free Predictive Inference for Regression, JASA 113(523) (2018), §2.1 and Appendix A.1"
      url: "https://arxiv.org/pdf/1604.04173"
    - title: "Glenn Shafer and Vladimir Vovk, A Tutorial on Conformal Prediction, JMLR 9 (2008), §§4.1–4.2"
      url: "https://www.jmlr.org/papers/volume9/shafer08a/shafer08a.pdf"
    - title: "Ryan Tibshirani, Conformal Prediction, Advanced Topics in Statistical Learning, Spring 2024, §3"
      url: "https://www.stat.berkeley.edu/~ryantibs/statlearn-s24/lectures/conformal.pdf"
---

## Definition

Let $m\ge0$ observed examples $Z_1,\ldots,Z_m$ and $0<\alpha<1$ be given.
For each candidate $(x,y)$, append it to the examples and apply a measurable,
permutation-equivariant full score assignment of length $m+1$ from
[[def-conformal-nonconformity-score-and-rank-pvalue]], obtaining
$R_1(y),\ldots,R_{m+1}(y)$. Compute
$$p(y)=\frac1{m+1}\sum_{i=1}^{m+1}\mathbf1\{R_i(y)\ge R_{m+1}(y)\}$$
and return
$$C(x)=\{y\in\mathcal Y:p(y)>\alpha\}.$$

An optional exact-randomized version uses one independent $U$ with Lebesgue
probability law on $[0,1]$, shared across the candidate scan, and returns
$C_U(x)=\{y:p_U(y)>\alpha\}$. The full score map must be jointly measurable
in the observed examples, $x$, and $y$; the membership event is measurable by
[[lem-finite-order-statistic-and-rank-maps-are-measurable]].
