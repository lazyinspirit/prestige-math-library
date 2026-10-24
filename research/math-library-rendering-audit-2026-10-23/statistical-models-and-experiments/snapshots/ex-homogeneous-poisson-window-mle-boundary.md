---
id: ex-homogeneous-poisson-window-mle-boundary
kind: example
title: "Homogeneous Poisson rate estimation at positive-count and zero-count boundaries"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 6
deps:
  - def-finite-window-spatial-observation
  - prop-homogeneous-poisson-window-mle
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Adrian Baddeley, Spatial Point Processes and their Applications, complete lecture notes"
      url: "https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf"
      locator: "Lecture 4, Example 4.12, PDF p. 70: the homogeneous finite-window Poisson MLE."
    - title: "Günter Last and Mathew Penrose, Lectures on the Poisson Process, author-hosted 2017 version"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
      locator: "Chapter 3, Proposition 3.8, PDF p. 34: finite Poisson count and locations."
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Example

Take $W=[0,2]^2$, so $|W|=4$, and fit the homogeneous model
$\lambda_\rho(x)=\rho$. For an observation with three points, the likelihood
is maximized at $\widehat\rho=3/4$. For an empty observation the likelihood
increases as $\rho$ decreases to zero; the boundary value is attained only
when $\rho=0$ is included in the parameter space.

## Facts & Assumptions

**Given:** $W=[0,2]^2$, $|W|=4$, homogeneous rate $\rho$, and the two
observed counts $n=3$ and $n=0$.

[F1] For $|W|>0$, a positive observed count $n$ has unique MLE $n/|W|$; at
zero count the supremum is the rate-zero boundary and is attained exactly
when zero is admitted. ([[prop-homogeneous-poisson-window-mle]])

## Verification

**Given:** $W=[0,2]^2$, $|W|=4$, homogeneous rate $\rho$, and the two
observed counts $n=3$ and $n=0$.

[F1] For $|W|>0$, a positive observed count $n$ has unique MLE $n/|W|$; at
zero count the supremum is the rate-zero boundary and is attained exactly
when zero is admitted. ([[prop-homogeneous-poisson-window-mle]])



1.1 For $n=3$, [F1] gives $\widehat\rho=n/|W|=3/4$. The log likelihood up to a constant is $3\log\rho-4\rho$, and the proposition proves this rate is the unique maximizer. [given, F1, algebra]

2.1 For $n=0$, that log likelihood reduces to $-4\rho$ for $\rho>0$; it tends to $0$ as $\rho\downarrow0$ and is strictly smaller at every positive rate. The normalized likelihood at $\rho=0$ is positive for the empty configuration, so the maximum is attained at zero if the parameter space contains zero, while on $(0,\infty)$ only the boundary supremum exists. [given, F1, algebra] ∎