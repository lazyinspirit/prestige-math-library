---
id: thm-forecast-normal-equations-and-error
kind: theorem
title: Finite-history forecast equations and error variance
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-best-linear-forecast-from-a-finite-history
  - thm-finite-history-best-linear-predictor-exists-uniquely
  - def-strict-and-weak-stationarity-for-time-series
  - def-autocovariance-and-sample-autocovariance
  - def-moments-variance-and-covariance
  - lem-variance-and-covariance-identities-for-random-variables
  - thm-normal-equations-for-best-affine-l2-prediction
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Dewei Wang, STAT 720 Time Series Analysis, Section 5.2"
      url: "https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf"
    - title: "Nicolai Meinshausen, Time Series Analysis: Notes for the course HS 2022, Section 2.7"
      url: "https://www.stat.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf"
---

## Statement

Let $X=(X_t)_{t\in\mathbb Z}$ be a weakly stationary real process with mean
$\mu$ and autocovariance $\gamma$, and let $n,h\ge1$. Define
$Y_i:=X_{n+1-i}$, $\Gamma_{ij}:=\gamma(i-j)$, and
$\gamma_h:=(\gamma(h),\gamma(h+1),\ldots,\gamma(h+n-1))^T$. If $\Gamma$ is
nonsingular, the unique forecast coefficients satisfy $a=\Gamma^{-1}\gamma_h$,
the best linear forecast is $\widehat X_{n+h}=\mu+\sum_{i=1}^n a_i(Y_i-\mu)$,
and its error variance is $\operatorname{Var}(X_{n+h}-\widehat X_{n+h})=\gamma(0)-a^T\gamma_h$.

## Facts & Assumptions

**Given:** A weakly stationary real process $X$ on $\mathbb Z$, its common mean
$\mu$, its autocovariance $\gamma$, and integers $n,h\ge1$.

[F1] The finite-history affine minimization has a unique almost-sure class for
every weakly stationary process, including singular history covariance.
[[thm-finite-history-best-linear-predictor-exists-uniquely]]

[F2] The affine $L^2$ projection theorem gives an affine representative whose
coefficients satisfy the intercept and covariance normal equations.
[[thm-normal-equations-for-best-affine-l2-prediction]]

[F3] Weak stationarity means finite second moments, a time-independent mean,
and covariance depending only on the lag. [[def-strict-and-weak-stationarity-for-time-series]]

[F4] The ACVF convention is $\gamma(k)=\operatorname{Cov}(X_{t+k},X_t)$ for
integer $k$. [[def-autocovariance-and-sample-autocovariance]]

[F5] Covariance is symmetric and bilinear on finite linear combinations of
square-integrable real random variables. [[lem-variance-and-covariance-identities-for-random-variables]]

[F6] Variance is the expectation of the centered square, so a mean-zero
forecast error has variance equal to its mean-square error.
[[def-moments-variance-and-covariance]]

## Proof

1.1 Since weak stationarity gives $X_{n+h},Y_1,\ldots,Y_n\in L^2$, [F1] supplies a unique minimizing class and [F2] an affine representative with coefficients satisfying the normal equations. Every variable has mean $\mu$ by [F3], so the intercept is $a_0=\mu(1-\sum_i a_i)$ and the representative is $\mu+\sum_i a_i(Y_i-\mu)$. [given, F1, F2, F3]

2.1 For each $i,j$, the lag difference between $Y_i$ and $Y_j$ is $j-i$; covariance symmetry in [F5] gives $\gamma(j-i)=\gamma(i-j)$, so $\operatorname{Cov}(Y_i,Y_j)=\Gamma_{ij}$. The lag from $Y_i=X_{n+1-i}$ to $X_{n+h}$ is $h+i-1$, so $\operatorname{Cov}(X_{n+h},Y_i)=\gamma(h+i-1)$. Rewriting step 1.1's equations gives $\Gamma a=\gamma_h$. [given, F3, F4, F5, step 1.1]

3.1 Under the statement's nonsingularity hypothesis, $\Gamma a=\gamma_h$ has the unique solution $a=\Gamma^{-1}\gamma_h$. [given, step 2.1, algebra]

4.1 Put $U=X_{n+h}-\mu$ and $Z_i=Y_i-\mu$; the intercept equation makes the error mean zero, and stationarity gives $\mathbb E[UZ_i]=\gamma(h+i-1)$ and $\mathbb E[Z_iZ_j]=\Gamma_{ij}$. Expanding gives $\mathbb E[(U-a^TZ)^2]=\gamma(0)-2a^T\gamma_h+a^T\Gamma a=\gamma(0)-a^T\gamma_h$ because $\Gamma a=\gamma_h$. By [F6] this is the error variance. [F2, F3, F4, F5, F6, step 1.1, step 2.1, step 3.1, algebra] ∎