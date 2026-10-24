---
id: def-conformal-nonconformity-score-and-rank-pvalue
kind: definition
title: "Conformal scores and rank p-values"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps:
  - def-exchangeable-random-elements
  - def-statistic-and-estimator
  - def-randomized-procedure-as-a-markov-kernel
  - def-measurable-function-between-measurable-spaces
  - def-borel-sigma-algebra
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  repair: research/machine-learning-all-101-2026-10-19-owner-step4-published-alert-repair/application/receipts/def-conformal-nonconformity-score-and-rank-pvalue.json
  precheck: n/a
sources:
  references:
    - title: "Jing Lei, Max G'Sell, Alessandro Rinaldo, Ryan J. Tibshirani, and Larry Wasserman, Distribution-Free Predictive Inference for Regression, JASA 113(523) (2018), §§2.1–2.2 and Appendix A.1"
      url: "https://arxiv.org/pdf/1604.04173"
    - title: "Glenn Shafer and Vladimir Vovk, A Tutorial on Conformal Prediction, JMLR 9 (2008), §§3.1, 4.1–4.2"
      url: "https://www.jmlr.org/papers/volume9/shafer08a/shafer08a.pdf"
    - title: "Ryan Tibshirani, Conformal Prediction, Advanced Topics in Statistical Learning, Spring 2024, §§1–3"
      url: "https://www.stat.berkeley.edu/~ryantibs/statlearn-s24/lectures/conformal.pdf"
---

## Definition

Let $\mathcal Z=\mathcal X\times\mathcal Y$ be a feature-response measurable
space, let $m\ge0$, and put $n=m+1$. A **split score rule** is a jointly
measurable map $s:\mathcal H\times\mathcal Z\to\mathbb R$, where $H$ is a
training statistic with values in the specified measurable rule space
$(\mathcal H,\mathscr H)$. The measurable-statistic convention is that of
Statistics and estimators. Once $H=h$ is fixed, calibration and test
scores are $R_i=s(h,Z_i)$; the rule does not change when it scores the
calibration or test example.

A **full score assignment** of length $n$ is a measurable map
$A=(A_1,\ldots,A_n):\mathcal Z^n\to\mathbb R^n$ that is
permutation-equivariant:
$$A(\tau_\pi z)=\tau_\pi A(z)\qquad\text{for every }z\in\mathcal Z^n\text{ and permutation }\pi.$$
For a candidate response $y$, append $(x,y)$ as the $n$th example and write
$R_i(y)=A_i(Z_1,\ldots,Z_m,(x,y))$ and $r=R_n(y)$.

For either a split score vector or a full augmented score vector, the
**nonrandomized upper-rank p-value** of the candidate is
$$p(y)=\frac1{m+1}\sum_{i=1}^{m+1}\mathbf1\{R_i(y)\ge R_{m+1}(y)\}.$$
An optional **tie-randomized rank p-value** is defined when a supplied random
variable $U$ has Lebesgue probability law on $[0,1]$ and is independent of the
data and training information:
$$p_U(y)=\frac{\#\{i\le m:R_i(y)>r\}+U\bigl(1+\#\{i\le m:R_i(y)=r\}\bigr)}{m+1}.$$
The added $1$ counts the candidate itself in its tie group. A single such $U$
is shared across a candidate scan. This is an explicit randomization; the
general Markov-kernel definition of a randomized procedure
Randomized procedures as probability kernels does not assert that arbitrary
kernels have a random-seed representation.

Here “uniform on $[0,1]$” means $\mathbb P(U\le u)=u$ for $0\le u\le1$.

Smaller scores are treated as more conforming. The rank formula counts all
ties conservatively in the nonrandomized version; the randomized formula
spreads the candidate uniformly over its entire tie block.

For a split candidate scan at a fixed feature value $x$, the notation in
these formulas is $R_i(y)=s(h,Z_i)$ for $1\le i\le m$ and
$R_n(y)=s(h,(x,y))$, with $r=R_n(y)$. Thus the calibration scores do not
depend on $y$, and the candidate is scored by the same fixed rule.

## Definition references

[[def-statistic-and-estimator]]

[[def-randomized-procedure-as-a-markov-kernel]]

