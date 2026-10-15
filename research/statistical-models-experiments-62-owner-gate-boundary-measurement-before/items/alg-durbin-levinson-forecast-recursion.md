---
id: alg-durbin-levinson-forecast-recursion
kind: algorithm
title: Durbin–Levinson forecast recursion
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-strict-and-weak-stationarity-for-time-series
  - def-autocovariance-and-sample-autocovariance
justified_by:
  - thm-durbin-levinson-solves-the-prediction-equations
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Dewei Wang, STAT 720 Time Series Analysis, Section 5.5.1"
      url: "https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf"
    - title: "Nicolai Meinshausen, Time Series Analysis: Notes for the course HS 2022, Section 2.7"
      url: "https://www.stat.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf"
---

## Definition

**Input:** An integer $m\ge1$ and the lags $\gamma(0),\ldots,\gamma(m)$ of
the autocovariance function of a weakly stationary real process. Set
$\gamma(-r)=\gamma(r)$. Require every leading covariance matrix
$\Gamma_k=(\gamma(i-j))_{i,j=1}^k$ to be positive definite for $1\le k\le m$.

**Output:** Coefficient vectors $\phi_k=(\phi_{k,1},\ldots,\phi_{k,k})^T$
and error-variance values $\nu_k$ for $1\le k\le m$.

**Instructions:** Set $\nu_0=\gamma(0)$,
$\kappa_1=\gamma(1)/\nu_0$, $\phi_{1,1}=\kappa_1$, and
$\nu_1=\nu_0(1-\kappa_1^2)$. For each $k=2,\ldots,m$, set
$\kappa_k=[\gamma(k)-\sum_{j=1}^{k-1}\phi_{k-1,j}\gamma(k-j)]/\nu_{k-1}$,
$\phi_{k,j}=\phi_{k-1,j}-\kappa_k\phi_{k-1,k-j}$ for $1\le j<k$,
$\phi_{k,k}=\kappa_k$, and $\nu_k=\nu_{k-1}(1-\kappa_k^2)$.
Return all vectors and variances. The positive-definite leading-block
assumption makes each division well-defined; this is proved in
[[thm-durbin-levinson-solves-the-prediction-equations]]. The procedure operates
on covariance input and makes no Gaussian or conditional-expectation claim.
