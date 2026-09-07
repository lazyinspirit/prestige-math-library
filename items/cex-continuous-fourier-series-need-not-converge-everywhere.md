---
id: cex-continuous-fourier-series-need-not-converge-everywhere
kind: counterexample
title: Uniform Fejer convergence can coexist with divergent ordinary partial sums
deps: [cex-continuous-function-with-divergent-fourier-series-at-a-point, thm-fejer-uniform-convergence-for-continuous-periodic-functions]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references: [{title: 'Laugesen, Harmonic Analysis Lecture Notes', url: 'https://arxiv.org/pdf/0903.3845', locator: 'ch. 8, Theorem 8.2 pp. 48–49; published FR-1 Fejer theorem'}]
status: draft
origin: pipeline
proof_strategy: Use the single A-page witness and apply the published uniform Fejer theorem. Refute the inference from uniform Cesaro convergence to ordinary pointwise convergence. Do not repeat the A-page existence claim under a second theorem label.
---

## Statement refuted

Uniform convergence of the Fejer means of a continuous periodic function forces its ordinary Fourier partial sums to converge at every point.

Assume DC. There is a real continuous one-periodic $f$ such that

$$\|\sigma_Nf-f\|_\infty\to0,\qquad \sup_{N\ge0}|S_Nf(0)|=\infty.$$

## Facts & Assumptions

**Given:** DC and the period-one Fourier conventions with normalized Haar measure.

[F1] Assuming DC, for every prescribed $x_0\in\mathbb T$ there exists a real continuous periodic $f$ with $\sup_{N\ge0}|S_Nf(x_0)|=\infty$ ([[cex-continuous-function-with-divergent-fourier-series-at-a-point]]).

[F2] For every continuous one-periodic complex function $f$, $\sup_{x\in\mathbb R}|\sigma_Nf(x)-f(x)|\to0$ ([[thm-fejer-uniform-convergence-for-continuous-periodic-functions]]).

## Counterexample

**Proof technique:** reuse of the continuous witness and uniform Fejer convergence.

1.1 Apply the prescribed-point witness with $x_0=0$. It supplies a real continuous periodic $f$ whose finite partial-sum values at zero form an unbounded sequence. Such an $f$ is nonzero, and this sequence cannot converge to a finite value. [F1, given]

2.1 Regard the same real $f$ as complex-valued. It meets the continuity and periodicity hypotheses of uniform Fejer convergence, so $\|\sigma_Nf-f\|_\infty\to0$. Thus the Cesaro averages $\sigma_Nf=(N+1)^{-1}\sum_{j=0}^NS_jf$ converge uniformly while the ordinary sums at zero diverge unboundedly. Both properties hold for the single function from step 1.1, refuting the claimed implication. [F2, step 1.1] ∎
