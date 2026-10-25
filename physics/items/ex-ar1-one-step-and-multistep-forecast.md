---
id: ex-ar1-one-step-and-multistep-forecast
kind: example
title: One-step and multistep forecasts for a causal AR(1)
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-best-linear-forecast-from-a-finite-history
  - def-strict-and-weak-stationarity-for-time-series
  - def-moments-variance-and-covariance
  - lem-variance-and-covariance-identities-for-random-variables
  - cor-cauchy-schwarz-for-random-variables
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Dewei Wang, STAT 720 Time Series Analysis, Sections 5.2 and 5.5.1"
      url: "https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf"
    - title: "Nicolai Meinshausen, Time Series Analysis: Notes for the course HS 2022, Section 2.7"
      url: "https://www.stat.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf"
---

## Example

Let $|\phi|<1$, $\sigma^2>0$, and let $(\epsilon_t)_{t\in\mathbb Z}$ be
centered, square-integrable white noise: $\mathbb E[\epsilon_t^2]=\sigma^2$
and $\operatorname{Cov}(\epsilon_s,\epsilon_t)=0$ for $s\ne t$. Suppose a
weakly stationary process has the causal $L^2$ representation
$X_t-\mu=\sum_{j=0}^{\infty}\phi^j\epsilon_{t-j}$ and hence satisfies
$X_t-\mu=\phi(X_{t-1}-\mu)+\epsilon_t$. For every $n,h\ge1$, its forecast
is $\widehat X_{n+h}=\mu+\phi^h(X_n-\mu)$ and its error variance is
$\sigma^2\sum_{j=0}^{h-1}\phi^{2j}$.

## Facts & Assumptions

**Given:** The weakly stationary causal AR(1) representation and the centered,
finite-variance, pairwise uncorrelated innovations specified above.

[F1] Weak stationarity gives square-integrability of every coordinate and a
common mean. [[def-strict-and-weak-stationarity-for-time-series]]

[F2] The finite-history best linear forecast is the unique class minimizing
squared $L^2$ error over the affine span of the observed history.
[[def-best-linear-forecast-from-a-finite-history]]

[F3] Variance and covariance are centered second moments and covariance is
bilinear on finite sums. [[def-moments-variance-and-covariance]]
[[lem-variance-and-covariance-identities-for-random-variables]]

[F4] Cauchy–Schwarz bounds the absolute expectation of a product of two
square-integrable variables by the product of their $L^2$ norms.
[[cor-cauchy-schwarz-for-random-variables]]

## Verification

1.1 Reindexing the convergent causal series gives $X_t-\mu=\phi(X_{t-1}-\mu)+\epsilon_t$; repeating this identity gives $X_{n+h}-\mu=\phi^h(X_n-\mu)+R_h$, where $R_h=\sum_{r=0}^{h-1}\phi^r\epsilon_{n+h-r}$. Every innovation in $R_h$ has index greater than $n$, while the causal series for each $X_j-\mu$, $1\le j\le n$, uses only indices at most $j$. [given, algebra]

2.1 For each $j\le n$, every finite partial sum for $X_j-\mu$ uses innovation indices at most $j$, so its covariance with each future term of $R_h$ is zero by the uncorrelated-noise assumption; [F4] passes this covariance identity to the $L^2$ limit. Thus $\operatorname{Cov}(R_h,X_j)=0$ and $\mathbb E[R_h]=0$, making the residual orthogonal to the constant and every history variable. [given, F1, F3, F4, step 1.1]

3.1 Let $H=\mu+\phi^h(X_n-\mu)$ and let any competing affine forecast $Z$ be in the history span; then $D:=H-Z$ is also in that span. Step 2.1 gives $\mathbb E[R_h]=0$ and $\operatorname{Cov}(R_h,X_j)=0$ for every $j$; bilinearity [F3] gives $\operatorname{Cov}(R_h,D)=0$, hence $\mathbb E[R_hD]=0$. Since $X_{n+h}-Z=R_h+D$, expansion yields $\mathbb E[(X_{n+h}-Z)^2]=\mathbb E[R_h^2]+\mathbb E[D^2]\ge\mathbb E[R_h^2]$, with equality exactly when $D=0$ as an $L^2$ class. Thus $H$ is the unique best class by [F2]. The innovations in $R_h$ are pairwise uncorrelated, so [F3] gives $\operatorname{Var}(R_h)=\sigma^2\sum_{r=0}^{h-1}\phi^{2r}$. This proves both formulas without Gaussian or independent innovations. [F2, F3, step 1.1, step 2.1, algebra] ∎