---
id: ex-singular-history-covariance-unique-predictor-class
kind: example
title: A singular history covariance can have nonunique coefficients
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - def-best-linear-forecast-from-a-finite-history
  - thm-finite-history-best-linear-predictor-exists-uniquely
  - def-strict-and-weak-stationarity-for-time-series
  - def-finite-probability-space-and-event
  - def-finite-real-random-variable-and-distribution
  - def-expectation-on-a-finite-probability-space
  - def-variance-and-covariance
  - thm-normal-equations-for-best-affine-l2-prediction
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
    - title: "Dewei Wang, STAT 720 Time Series Analysis, Section 5.2"
      url: "https://people.stat.sc.edu/wang528/Stat%20720/STAT720%20Notes.pdf"
    - title: "Nicolai Meinshausen, Time Series Analysis: Notes for the course HS 2022, Section 2.7"
      url: "https://www.stat.ethz.ch/~nicolai/timeseries/TimeSeries2022b.pdf"
---

## Example

Let $\Omega=\{-1,1\}$ have equal probability, let $Z(\omega)=\omega$, and
set $X_t=Z$ for every $t\in\mathbb Z$. For $n=2$ and $h=1$, the history
covariance matrix is singular and the normal equations have multiple
coefficient vectors, but they all give the unique predictor class $[Z]$.

## Facts & Assumptions

**Given:** The two-point uniform probability space, $Z(\omega)=\omega$,
$X_t=Z$ for all integer $t$, and the prediction target $X_3$ with history
$X_1,X_2$.

[F1] A real random variable on a finite probability space is a map from
outcomes to $\mathbb R$; event probabilities and expectations are the
corresponding finite weighted sums. [[def-finite-probability-space-and-event]]
[[def-finite-real-random-variable-and-distribution]]
[[def-expectation-on-a-finite-probability-space]]

[F2] Variance and covariance are expectations of centered products.
[[def-variance-and-covariance]]

[F3] A process is weakly stationary when its second moments are finite, its mean
is constant, and its covariance depends only on the lag. [[def-strict-and-weak-stationarity-for-time-series]]

[F4] Finite affine $L^2$ projection gives a unique minimizing class, and its
covariance normal equations may have multiple coefficient solutions that
represent that same class. [[thm-normal-equations-for-best-affine-l2-prediction]]

## Verification

1.1 Each outcome has weight $1/2$, so [F1] gives $\mathbb E[Z]=0$ and $\mathbb E[Z^2]=1$. Every $X_t=Z$ is square-integrable with mean zero, and every finite-dimensional law is shift-invariant because each coordinate is the same $Z$; hence $X$ is weakly stationary. [given, F1, F3]

2.1 The reversed history is $(Y_1,Y_2)=(X_2,X_1)=(Z,Z)$ and the target is $X_3=Z$. Direct covariance calculation gives $\Gamma=\begin{pmatrix}1&1\\1&1\end{pmatrix}$ and $\gamma_h=(1,1)^T$; by [F4] the normal equations reduce to $a_1+a_2=1$, so the matrix is singular and has solutions $(1,0)^T$ and $(0,1)^T$. [given, F2, F4, step 1.1, algebra]

3.1 The intercept is zero because every variable has mean zero; either displayed solution gives forecast $a_1Z+a_2Z=Z$ and zero error, so they represent the same unique minimizing class by [F4]. [F2, F4, step 2.1] ∎