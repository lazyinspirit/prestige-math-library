---
id: def-lattice-covariance-and-variogram-estimators
kind: definition
title: "Lagged lattice covariance and variogram estimators"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-integers
  - def-probability-measure
  - def-random-element-and-real-random-variable
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-moments-variance-and-covariance
  - def-convergence-in-lp-for-random-variables
  - def-random-field-stationarity-covariance-and-variogram
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Evgeny Spodarev, Spatial Statistics: Lecture Notes (2024), Section 2.2"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.110/mitarbeiter/spodarev/publications/scripts/SpatialStatistics_2024.pdf"
    - title: "Dennis Sun, Stanford Stats 253 Lecture 6: Covariance Estimation (2014), pp. 8–15"
      url: "https://web.stanford.edu/class/stats253/lectures_2014/lect6.pdf"
verification:
  precheck: n/a
---

## Definition

Let $d\ge1$, let $(Y_j)_{j\in\mathbb Z^d}$ be a real random field
([[def-random-field-stationarity-covariance-and-variogram]]) whose coordinates
are square-integrable real random variables on one probability space ([[def-probability-measure]],
[[def-random-element-and-real-random-variable]],
[[def-moments-variance-and-covariance]], [[def-integers]]), and let
$V_n\subset\mathbb Z^d$ be
nonempty finite observation windows. Write $M_n:=|V_n|$ and
$$\bar Y_n:=\frac1{M_n}\sum_{j\in V_n}Y_j.$$
For a fixed lag $h\in\mathbb Z^d$, let
$$P_n(h):=\{j\in V_n:j+h\in V_n\},\qquad N_n(h):=|P_n(h)|.$$
Only indices $n$ with $N_n(h)>0$ are admissible for this lag.

When the field is wide stationary in the sense of
[[def-random-field-stationarity-covariance-and-variogram]], write its constant
mean as $\mu$ and its displacement covariance as
$C(h):=\operatorname{Cov}(Y_{j+h},Y_j)$, which is independent of $j$ by
wide stationarity and agrees with the supplier convention by covariance
symmetry. Define the **pair-count-normalized
raw-product covariance estimator** by
$$\widehat C_n(h):=\frac1{N_n(h)}\sum_{j\in P_n(h)}Y_jY_{j+h}-\bar Y_n^{\,2}.$$
This convention subtracts the square of the one global sample mean from the
pair-count-normalized raw product average; it is not the average of pairwise
sample-centered products.

For the second-moment component of order-two intrinsic stationarity in
[[def-random-field-stationarity-covariance-and-variogram]], suppose the increments
have finite second moments and
$\gamma(h):=\frac12\mathbb E[(Y_{j+h}-Y_j)^2]$
is independent of $j$; define the empirical **semivariogram** by
$$\widehat\gamma_n(h):=\frac1{2N_n(h)}\sum_{j\in P_n(h)}(Y_{j+h}-Y_j)^2.$$
