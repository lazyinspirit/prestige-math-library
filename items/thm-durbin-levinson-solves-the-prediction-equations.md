---
id: thm-durbin-levinson-solves-the-prediction-equations
kind: theorem
title: Durbin–Levinson solves the successive prediction equations
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - alg-durbin-levinson-forecast-recursion
  - thm-forecast-normal-equations-and-error
  - def-strict-and-weak-stationarity-for-time-series
  - def-autocovariance-and-sample-autocovariance
  - lem-variance-and-covariance-identities-for-random-variables
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Dewei Wang, STAT 720 Time Series Analysis, Section 5.5.1"
      url: "https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf"
    - title: "Nicolai Meinshausen, Time Series Analysis: Notes for the course HS 2022, Section 2.7"
      url: "https://www.stat.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf"
---

## Statement

Let $X$ be weakly stationary with mean $\mu$ and ACVF $\gamma$, and suppose
$\Gamma_k=(\gamma(i-j))_{i,j=1}^k$ is positive definite for $1\le k\le m$.
For each $k\le m$, let $\phi_k,\nu_k$ be the outputs of
[[alg-durbin-levinson-forecast-recursion]] and put
$r_k=(\gamma(1),\ldots,\gamma(k))^T$. Then $\phi_k$ is the unique solution
of $\Gamma_k\phi_k=r_k$, and
$\nu_k=\operatorname{Var}(X_{t+1}-\mu-\sum_{j=1}^k\phi_{k,j}(X_{t+1-j}-\mu))=\gamma(0)-r_k^T\phi_k$.

## Facts & Assumptions

**Given:** A weakly stationary real process $X$, its mean $\mu$ and ACVF
$\gamma$, an integer $m\ge1$, and positive-definite matrices $\Gamma_k$ for
$1\le k\le m$.

[F1] The procedure takes ACVF lags, requires positive-definite leading
covariance blocks, and defines $\kappa_k$, $\phi_k$ and $\nu_k$ by its stated
initialization and updates. [[alg-durbin-levinson-forecast-recursion]]

[F2] When a finite stationary history covariance matrix is nonsingular, the
forecast coefficients solve the covariance normal equations and its error
variance is $\gamma(0)-r_k^T\phi_k$. [[thm-forecast-normal-equations-and-error]]

[F3] The population ACVF is $\gamma(r)=\operatorname{Cov}(X_{t+r},X_t)$ for
every integer lag. [[def-autocovariance-and-sample-autocovariance]]

[F4] Covariance is symmetric and bilinear on finite linear combinations.
[[lem-variance-and-covariance-identities-for-random-variables]]

## Proof

1.1 For $k=1$, positive definiteness of $\Gamma_1=[\gamma(0)]$ gives $\gamma(0)>0$. The algorithm sets $\phi_{1,1}=\gamma(1)/\gamma(0)$, so $\Gamma_1\phi_1=r_1$, and [F2] gives error variance $\gamma(0)-\gamma(1)^2/\gamma(0)=\nu_1$, including the zero-error case. [given, F1, F2]

1.2 For the induction step fix $2\le k\le m$ and assume the claim at order $k-1$. Write $r=(\gamma(1),\ldots,\gamma(k-1))^T$; covariance symmetry gives $\Gamma_k=\begin{pmatrix}\gamma(0)&r^T\\r&\Gamma_{k-1}\end{pmatrix}$. The induction hypothesis gives $\phi_{k-1}=\Gamma_{k-1}^{-1}r$ and $\nu_{k-1}=\gamma(0)-r^T\Gamma_{k-1}^{-1}r$. The positive quadratic form of $\Gamma_k$ at $(1,-\Gamma_{k-1}^{-1}r)^T$ equals this value, so $\nu_{k-1}>0$ and the order-$k$ division is valid. [given, F1]

2.1 Set $T=\sum_{j=1}^{k-1}\phi_{k-1,j}\gamma(k-j)$ and $\kappa_k=(\gamma(k)-T)/\nu_{k-1}$. For $i<k$, the new coefficient rule gives $(\Gamma_k\phi_k)_i=\sum_{j=1}^{k-1}\gamma(i-j)\phi_{k-1,j}-\kappa_k\sum_{j=1}^{k-1}\gamma(i-j)\phi_{k-1,k-j}+\kappa_k\gamma(i-k)$. The first sum is $\gamma(i)$ by the old system; reindexing the second by $\ell=k-j$ gives its row $k-i$, namely $\gamma(k-i)$. Since $\gamma(i-k)=\gamma(k-i)$, these last terms cancel and $(\Gamma_k\phi_k)_i=\gamma(i)$. [F1, F3, F4, step 1.2]

3.1 Let $S=r^T\phi_{k-1}=\gamma(0)-\nu_{k-1}$. Reindexing the last row gives $\sum_{j=1}^{k-1}\gamma(k-j)\phi_{k-1,j}-\kappa_k\sum_{j=1}^{k-1}\gamma(k-j)\phi_{k-1,k-j}+\kappa_k\gamma(0)=T+\kappa_k(\gamma(0)-S)=T+\kappa_k\nu_{k-1}=\gamma(k)$. Thus $\Gamma_k\phi_k=r_k$, and positive definiteness makes the solution unique. [F1, step 1.2, step 2.1, algebra]

4.1 Reindexing the new vector gives $r_k^T\phi_k=S-\kappa_kT+\kappa_k\gamma(k)=S+\kappa_k^2\nu_{k-1}$ by the definition of $\kappa_k$. Therefore $\gamma(0)-r_k^T\phi_k=\nu_{k-1}(1-\kappa_k^2)=\nu_k$. The forecast theorem [F2] identifies this with the one-step projection-error variance, completing the induction through $k=m$. [F1, F2, step 1.2, step 3.1, algebra] ∎