---
id: def-simple-ordinary-and-universal-kriging
kind: definition
title: "Simple, ordinary, and universal kriging"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-random-field-stationarity-covariance-and-variogram
  - def-moments-variance-and-covariance
  - thm-order-two-field-variogram-is-conditionally-negative-definite
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Evgeny Spodarev, Spatial Statistics: Lecture Notes (2024), Sections 3.1–3.2"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.110/lehre/ss24/SpatialStatistics_2024.pdf"
    - title: "Dennis Sun, Stats 253 Lecture 5: Prediction and Kriging (Stanford University)"
      url: "https://web.stanford.edu/class/stats253/lectures/lect5.pdf"
---

## Definition

Let $X=(X(s))_{s\in T}$ be a real random field in the sense of
[[def-random-field-stationarity-covariance-and-variogram]], and suppose the
finite vector of field values considered below is square-integrable. Choose
$n\ge1$ observation sites $s_1,\ldots,s_n$ and a target site $s_0$. Write
$Z=(X(s_1),\ldots,X(s_n))^\top$, $Y=X(s_0)$,
$\Sigma=\operatorname{Cov}(Z,Z)$, $c_0=\operatorname{Cov}(Z,Y)$, and
$v_0=\operatorname{Var}(Y)$. A positive-definite matrix $\Sigma$ means
$u^\top\Sigma u>0$ for every nonzero $u\in\mathbb R^n$.

If the mean vector $m=\mathbb E Z$ and target mean $m_0=\mathbb E Y$ are
known, a **simple-kriging linear predictor** with weight vector
$\lambda\in\mathbb R^n$ is
$$\widehat Y_{\mathrm{SK}}(\lambda)=m_0+\lambda^\top(Z-m).$$
Its mean-square prediction error is
$\mathbb E[(Y-\widehat Y_{\mathrm{SK}}(\lambda))^2]$.

For an **ordinary-kriging model**, the mean is an unknown common constant
$\theta$: $\mathbb E Z=\theta\mathbf 1_n$ and $\mathbb E Y=\theta$.
The predictor is $\widehat Y_{\mathrm{OK}}(\lambda)=\lambda^\top Z$.
The admissible ordinary weights satisfy $\mathbf 1_n^\top\lambda=1$.

For a **universal-kriging model**, fix a trend map
$p:T\to\mathbb R^q$, where $q\ge1$, and an unrestricted coefficient vector
$\beta\in\mathbb R^q$. Define the finite-site design matrix
$P\in\mathbb R^{n\times q}$ by row $i$ equal to $p(s_i)^\top$, and put
$p_0=p(s_0)$. The model means are $\mathbb E Z=P\beta$ and
$\mathbb E Y=p_0^\top\beta$. The predictor is
$\widehat Y_{\mathrm{UK}}(\lambda)=\lambda^\top Z$; its unbiasedness for
every $\beta\in\mathbb R^q$ is expressed by $P^\top\lambda=p_0$.
Ordinary kriging is the special case $q=1$, $P=\mathbf 1_n$, and $p_0=1$.

The covariance-based optimality statements on this page use the actual
finite covariance matrix and vector. In particular, the inverse formula for
simple kriging is not asserted when $\Sigma$ is singular.

## Remarks

The covariance formulations above require finite second moments. A variogram
formulation has a separate hypothesis: for an order-two intrinsically
stationary field indexed by all of $\mathbb R^d$, its variogram $\gamma$
is conditionally negative definite over real coefficients, meaning
$\sum_{i,j}a_i a_j\gamma(s_i-s_j)\le0$ whenever $\sum_i a_i=0$
([[thm-order-two-field-variogram-is-conditionally-negative-definite]]).
This non-strict inequality does not by itself assert invertibility of a
variogram augmented system; any such system needs its own full-rank and
invertibility conditions. The theorem on this page proves the covariance
systems.

The optimality claims are oracle claims for fixed mean and covariance
quantities. Replacing those quantities by estimates defines a different
procedure; no optimality or coverage guarantee for that plug-in procedure is
asserted here.
