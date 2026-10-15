---
id: cex-lattice-sample-covariance-not-positive-definite
kind: counterexample
title: "A pair-count lattice sample covariance need not be positive definite"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-lattice-covariance-and-variogram-estimators
  - def-positive-definite-function-on-an-abelian-group
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
---

## Statement refuted

For every finite scalar lattice sample, whenever the pair-count estimator from
[[def-lattice-covariance-and-variogram-estimators]] is defined at all pairwise
lags in a finite set of sites, the matrix of estimated lagged covariances on
those sites is positive semidefinite.

## Facts & Assumptions

**Given:** A finite scalar data vector on $V=\{0,1,2\}\subset\mathbb Z$ and
the estimator from [[def-lattice-covariance-and-variogram-estimators]].

[F1] [[def-lattice-covariance-and-variogram-estimators]]: for available lag
$h$, $\widehat C(h)$ is the pair-count average of $Y_jY_{j+h}$ minus the
squared global sample mean.

[F2] [[def-positive-definite-function-on-an-abelian-group]]: every finite
quadratic form of a positive-definite covariance function must be nonnegative.

## Counterexample

1.1 Take the data $(y_0,y_1,y_2)=(1,2,3)$ on $V=\{0,1,2\}$. Its mean is $\bar y=2$. By [F1], the lag-zero estimator is $\widehat C(0)=\frac{1^2+2^2+3^2}{3}-2^2=\frac23,$ and the lag-two estimate, based on the single pair $(0,2)$, is $\widehat C(2)=1\cdot3-2^2=-1.$ The negative-lag estimate equals $\widehat C(-2)=\widehat C(2)$ because the reverse pair has the same product. [F1, given, algebra]

2.1 At the two sites $0$ and $2$, all pairwise lag estimates are defined and the estimated covariance matrix is $\begin{pmatrix}2/3&-1\\-1&2/3\end{pmatrix}.$ Its quadratic form at $v=(1,1)^T$ equals $v^T\begin{pmatrix}2/3&-1\\-1&2/3\end{pmatrix}v=-2/3<0$. This contradicts the necessary nonnegative quadratic-form condition [F2], so the stated universal claim is false. [F1, F2, step 1.1, algebra] ∎
