---
id: alg-split-conformal-set-for-classification
kind: algorithm
title: "Split conformal prediction set for classification"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-conformal-nonconformity-score-and-rank-pvalue
  - def-statistic-and-estimator
  - alg-split-conformal-prediction-set
  - lem-finite-order-statistic-and-rank-maps-are-measurable
  - def-independent-sigma-algebras-and-events
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Jing Lei, Max G'Sell, Alessandro Rinaldo, Ryan J. Tibshirani, and Larry Wasserman, Distribution-Free Predictive Inference for Regression, JASA 113(523) (2018), Section 2.2 and Appendix A.1"
      url: "https://arxiv.org/pdf/1604.04173"
    - title: "Ryan Tibshirani, Conformal Prediction, Advanced Topics in Statistical Learning, Spring 2024, Sections 1.2–2"
      url: "https://www.stat.berkeley.edu/~ryantibs/statlearn-s24/lectures/conformal.pdf"
---

## Definition

Let $K\ge2$, let the feature space be a measurable space $\mathcal X$, and
let the label set be $\mathcal Y=\{1,\ldots,K\}$ with all subsets measurable.
Let $H$ be a training statistic valued in a measurable rule space $\mathcal H$,
and let $s:\mathcal H\times\mathcal X\times\mathcal Y\to\mathbb R$ be a
jointly measurable score rule. The rule is fixed after training and is used
unchanged on calibration and test examples. Given $m\ge0$ calibration examples
$(X_i,Y_i)$ and $0<\alpha<1$, compute
$$R_i=s(H,X_i,Y_i),\qquad k=\left\lceil(m+1)(1-\alpha)\right\rceil.$$
If $k\le m$, sort the calibration scores by the ordered keys $(R_i,i)$ and let
$q$ be the score value at position $k$. If $k=m+1$, set $q=+\infty$. For a
feature value $x$, return the prediction set
$$
C(x)=\{y\in\mathcal Y:s(H,x,y)\le q\}.
$$
For the optional tie-randomized version, use one random variable $U$ that is
uniform on $[0,1]$ and independent of the training information and all
calibration and test examples, shared across the candidate-label scan. For
$r_y=s(H,x,y)$, define
$$p_U(y)=\frac{\#\{i\le m:R_i>r_y\}+U\bigl(1+\#\{i\le m:R_i=r_y\}\bigr)}{m+1},\qquad C_U(x)=\{y\in\mathcal Y:p_U(y)>\alpha\}.$$
The candidate is included in its own tie group. The algorithm defines these
sets; any coverage claim requires separate distributional hypotheses.

## Definition references

[[def-statistic-and-estimator]]: a training statistic is a measurable map into its stated measurable rule space.

[[def-conformal-nonconformity-score-and-rank-pvalue]]: fixes the split-score convention, upper-rank formula, tie randomization, and independent uniform input.

[[alg-split-conformal-prediction-set]]: supplies the general split-conformal quantile construction, including the $+\infty$ sentinel.

[[lem-finite-order-statistic-and-rank-maps-are-measurable]]: gives measurability of the finite score order statistic and rank maps.

[[def-independent-sigma-algebras-and-events]]: defines independence of the optional uniform variable from the data.

[Lei et al., full paper, Section 2.2 and Appendix A.1](https://arxiv.org/pdf/1604.04173): gives the split-conformal order-statistic construction and its finite-sample exchangeable-rank argument for regression.

[Tibshirani, full lecture notes, Sections 1.2–2](https://www.stat.berkeley.edu/~ryantibs/statlearn-s24/lectures/conformal.pdf): derives the adjusted rank, split calibration score, sentinel convention, and optional exact tie randomization.
