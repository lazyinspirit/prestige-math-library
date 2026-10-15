---
id: ex-mlmc-finite-level-telescoping-and-bias
kind: example
title: "A three-level telescoping estimator and its remaining bias"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-mlmc-hierarchy-and-coupled-corrections
  - lem-mlmc-estimator-moments-and-mse
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Michael B. Giles, Multilevel Monte Carlo Path Simulation, §2"
      url: "https://people.maths.ox.ac.uk/gilesm/files/opre.pdf"
---

## Example

Take $T=1$, $M=2$, $L=2$, target $P=0$, and deterministic level values $P_\ell=2^{-\ell}$. Every correction sample is constant, so sample counts do not change the estimate. The three levels make the telescoping identity and the remaining finest-level bias explicit.

## Facts & Assumptions

**Given:** The deterministic target and level values above, with any positive integer sample counts $N_0,N_1,N_2$.

[F1] [[def-mlmc-hierarchy-and-coupled-corrections]]: $\Delta_0=P_0$ and $\Delta_\ell=P_\ell^{\mathrm f}-P_{\ell-1}^{\mathrm c}$ for $\ell\ge1$, with an estimator equal to the sum of level sample means.

[F2] [[lem-mlmc-estimator-moments-and-mse]]: the estimator mean is $\mathbb E P_L$ and its MSE is its sampling variance plus the squared difference between $\mathbb E P_L$ and the target mean.

## Verification

1.1 Since each level is deterministic, [F1] gives $\Delta_0=1$, $\Delta_1=\frac12-1=-\frac12$, and $\Delta_2=\frac14-\frac12=-\frac14$. [F1, given, algebra]

2.1 Each sample mean equals its constant correction, so $\widehat\mu_{2,\mathbf N}=1-\frac12-\frac14=\frac14=\mathbb E P_2$. Its sampling variance is zero, while [F2] gives MSE $(\frac14-0)^2=\frac1{16}$. [F1, F2, step 1.1, algebra] ∎
