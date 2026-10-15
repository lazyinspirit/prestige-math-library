---
id: ex-nongaussian-conditional-mean-not-best-affine-predictor
kind: example
title: A finite-history conditional mean can be nonlinear
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-best-linear-forecast-from-a-finite-history
  - thm-forecast-normal-equations-and-error
  - def-strict-and-weak-stationarity-for-time-series
  - def-finite-probability-space-and-event
  - def-finite-real-random-variable-and-distribution
  - def-expectation-on-a-finite-probability-space
  - def-variance-and-covariance
  - def-conditional-expectation-given-a-sigma-algebra
  - def-sigma-algebra-generated-by-a-function
  - lem-conditioning-a-known-variable-and-an-independent-variable
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
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

## Example

Take $\Omega=\{0,1,2\}$ with equal probability and define
$v(0)=-1$, $v(1)=0$, and $v(2)=1$. For every integer $t$, let
$X_t(\omega)=v_{(\omega+t-1)\bmod 3}$. This process is strictly stationary.
For $n=h=1$, the conditional expectation of $X_2$ given $X_1$ is not affine in
$X_1$, whereas the best affine forecast is $-X_1/2$.

## Facts & Assumptions

**Given:** The three-point uniform probability space and the process
$X_t(\omega)=v_{(\omega+t-1)\bmod 3}$ with $v=(-1,0,1)$.

[F1] A real random variable on a finite probability space is a map from
outcomes to $\mathbb R$; probabilities and expectations use finite weighted
sums. [[def-finite-probability-space-and-event]]
[[def-finite-real-random-variable-and-distribution]]
[[def-expectation-on-a-finite-probability-space]]

[F2] Variance and covariance are expectations of centered products.
[[def-variance-and-covariance]]

[F3] Strict stationarity means invariance of every finite-dimensional law under
common integer shifts; weak stationarity has the stated finite-moment and
covariance conditions. [[def-strict-and-weak-stationarity-for-time-series]]

[F4] For a one-variable history with positive variance, the affine forecast
coefficient is covariance divided by history variance, with the intercept
adjusted to the means. [[thm-forecast-normal-equations-and-error]]

[F5] A conditional-expectation version is measurable with respect to the
conditioning sigma-algebra and has the defining event integrals.
[[def-conditional-expectation-given-a-sigma-algebra]]

[F6] A random variable measurable with respect to the conditioning
sigma-algebra is its own conditional expectation. [[lem-conditioning-a-known-variable-and-an-independent-variable]]

## Verification

1.1 A common shift $s$ changes phase $\omega$ to $(\omega+s)\bmod3$, a permutation of the equally weighted outcomes, so every shifted finite coordinate vector has the original law. One-coordinate laws give a common mean, pair laws at each lag give covariance independent of $t$, and boundedness gives finite moments; hence the process is weakly stationary by [F3]. [given, F1, F3]

2.1 The values of $(X_1,X_2)$ at $\omega=0,1,2$ are $(-1,0),(0,1),(1,-1)$; hence both means are zero, $\operatorname{Var}(X_1)=2/3$, and $\operatorname{Cov}(X_2,X_1)=-1/3$. By [F4], the unique best affine forecast from this one-variable history is $(-1/3)/(2/3)X_1=-X_1/2$. [given, F1, F2, F4, step 1.1, algebra]

3.1 Since $X_1:\Omega\to\{-1,0,1\}$ is bijective, $\sigma(X_1)$ is the full event sigma-algebra and $X_2$ is measurable with respect to it. The conditional-expectation definition and known-variable property give $\mathbb E[X_2\mid\sigma(X_1)]=X_2$, whose values $(0,1,-1)$ differ from the affine forecast values $(1/2,0,-1/2)$ at every outcome. [F5, F6, step 2.1] ∎