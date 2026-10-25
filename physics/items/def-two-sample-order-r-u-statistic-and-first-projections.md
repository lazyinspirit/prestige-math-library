---
id: def-two-sample-order-r-u-statistic-and-first-projections
kind: definition
title: Two-sample order-r U-statistic and first projections
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-two-sample-u-statistic-parameter
  - def-identically-distributed-and-iid-random-variables
  - def-statistic-and-estimator
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - lem-coordinate-maps-and-permutations-are-measurable-on-finite-products
  - thm-arithmetic-and-lattice-operations-preserve-measurability
justified_by:
  - lem-two-sample-u-statistic-projections-well-defined
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "E. Y. Chung and J. P. Romano, Asymptotically Valid and Exact Permutation Tests Based on Two-Sample U-Statistics, Stanford Technical Report 2011-09, §3"
      url: "https://stacks.stanford.edu/file/dp187pj2131/dp187pj2131_2011-09.pdf"
---

## Definition

Fix $m,n\ge r$ and independent samples $X_1,\ldots,X_m\sim P$ and
$Y_1,\ldots,Y_n\sim Q$, each IID within its group. For a kernel from
[[def-two-sample-u-statistic-parameter]], define

$$U_{m,n}:=\frac{1}{\binom mr\binom nr}\sum_{I\in\binom{\{1,\ldots,m\}}r}\sum_{J\in\binom{\{1,\ldots,n\}}r}h(X_I;Y_J).$$

Here $I,J$ are unordered index subsets, and $h(X_I;Y_J)$ means that the
selected observations are listed in increasing index order in their respective
blocks. Block symmetry makes the value independent of that ordering. Under
$E|h|^2<\infty$ for the $P^{\otimes r}\otimes Q^{\otimes r}$ law, write

$$g_X(X_1):=E[h(X_1,X_2,\ldots,X_r;Y_1,\ldots,Y_r)\mid X_1]-\theta(P,Q;h),$$
$$g_Y(Y_1):=E[h(X_1,\ldots,X_r;Y_1,Y_2,\ldots,Y_r)\mid Y_1]-\theta(P,Q;h).$$

These are the centered **first projections** under $P$ and $Q$; they are
square-integrable equivalence classes, so changes on their respective null sets
do not change any later claim.

## Remarks

The displayed conditional-expectation notation is shorthand for the completed
section-integral versions under the product laws. The corresponding functions
are measurable and square-integrable by
[[lem-two-sample-u-statistic-projections-well-defined]].

The finite sum defining $U_{m,n}$ is a measurable real statistic: the finite
sample-vector coordinate maps are measurable by
[[lem-coordinate-maps-and-permutations-are-measurable-on-finite-products]],
composition with $h$ is measurable, and its finite sum and constant scaling
remain measurable by
[[thm-arithmetic-and-lattice-operations-preserve-measurability]]. This is a
statistic in the sense of [[def-statistic-and-estimator]].
