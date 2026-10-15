---
id: thm-smc-time-uniform-variance-bound-under-uniform-incremental-weights
kind: theorem
title: "Time-uniform SMC asymptotic variance under uniform weight and operator bounds"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-smc-clt-function-classes-and-variance-recursions
  - lem-smc-multinomial-variance-unrolls
  - lem-smc-backward-operator-oscillation-bound
proof_strategy: direct
axiom_use: "AC is inherited through the finite-horizon SMC flow; the variance estimate is an algebraic geometric-series bound."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Nicolas Chopin, Central Limit Theorem for Sequential Monte Carlo Methods and its Application to Bayesian Inference, §3.3 and Appendix A.4"
      url: "https://arxiv.org/pdf/math/0508594"
    - title: "Hans R. Künsch, Recursive Monte Carlo Filters: Algorithms and Theoretical Analysis, §4.3.1"
      url: "https://arxiv.org/pdf/math/0602211"
    - title: "Arnaud Doucet and Adam M. Johansen, A Tutorial on Particle Filtering and Smoothing: Fifteen Years Later, §3.6"
      url: "https://www.stats.ox.ac.uk/~doucet/doucet_johansen_tutorialPF2011.pdf"
---

## Statement

Use multinomial offspring resampling at every time and the variance $V_t$ in [[def-smc-clt-function-classes-and-variance-recursions]]. Assume there is a constant $B<\infty$ such that $\upsilon_s\le B$ $\widetilde\pi_s$-almost everywhere for every $s\ge0$. Assume also that the forward operators satisfy the uniform oscillation condition of [[lem-smc-backward-operator-oscillation-bound]] with one $\beta\in[0,1)$ for all times. Then every bounded real test $\phi$ with $\Delta\phi=\sup\phi-\inf\phi<\infty$ satisfies
$$V_t(\phi)\le\frac{B^2(\Delta\phi)^2}{1-\beta^2}\qquad(t\ge0).$$
This is a bound on the fixed-horizon CLT variance, uniform in the time index; it is not a finite-particle error bound.

## Facts & Assumptions

**Given:** The multinomial SMC flow, the uniform incremental-weight bound $B$, and the uniform forward-operator oscillation coefficient $\beta<1$.

[A1] [[def-axiom-of-choice]]: AC is inherited through the finite-horizon SMC path-law and Radon–Nikodym construction.

[F1] [[def-smc-clt-function-classes-and-variance-recursions]]: $V_t$ is the weighted-estimator covariance, $\upsilon_s$ is the normalized incremental Radon–Nikodym weight, and $\Phi_s,\Psi_s$ are the recursive moment classes.

[F2] [[lem-smc-multinomial-variance-unrolls]]: $V_t(\phi)$ is the sum over $k=0,\ldots,t$ of $\widetilde\pi_k[\upsilon_k^2(E_{k+1:t}(\phi-\pi_t\phi))^2]$.

[F3] [[lem-smc-backward-operator-oscillation-bound]]: $\|E_{k+1:t}(\phi-\pi_t\phi)\|_\infty\le\beta^{t-k}\Delta\phi$.

## Proof

**Given:** The hypotheses in the Statement.

1.1 Uniformly bounded weights and bounded $\phi$ imply $\phi\in\Psi_s$ at each finite time: every weighted proposal moment is finite, the initial weighted moment is finite because $\upsilon_0\le B$, the target moments are finite, and every forward image of a bounded test is bounded by $B$ times its sup norm. The constant test also belongs to each $\Psi_s$. Thus the unrolling formula [F2] applies. By [F2],
$$V_t(\phi)=\sum_{k=0}^t\widetilde\pi_k\!\left[\upsilon_k^2\left(E_{k+1:t}(\phi-\pi_t\phi)\right)^2\right].$$
The summands are nonnegative and finite because $\upsilon_k\le B$ almost everywhere and $\phi$ is bounded. [A1, F1, F2, given]

2.1 For each $k$, [F3] bounds its summand by $B^2\beta^{2(t-k)}(\Delta\phi)^2$. Therefore
$$V_t(\phi)\le B^2(\Delta\phi)^2\sum_{j=0}^t\beta^{2j}\le\frac{B^2(\Delta\phi)^2}{1-\beta^2},$$
which is independent of $t$. [F1, F3, step 1.1, algebra] ∎

## Remarks

The extra uniform bound on incremental weights and the explicit backward-operator contraction are stated hypotheses. The density-ratio and likelihood bounds in the BCS-42 design do not, by themselves, imply a uniform incremental-weight bound when the proposal kernels vary with time; the assigned B page gives a finite-state counterexample. That source-scope discrepancy is recorded for owner reconciliation.
