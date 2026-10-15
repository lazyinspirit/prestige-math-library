---
id: cex-smc-time-bound-fails-with-varying-proposals
kind: counterexample
title: "Proposal mixing ratios alone do not bound SMC asymptotic variance over time"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 6
deps:
  - def-smc-clt-function-classes-and-variance-recursions
  - lem-smc-multinomial-variance-unrolls
proof_strategy: direct
axiom_use: "The finite-state model and variance calculations use no choice; the variance recursion is inherited from the SMC supplier."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "Nicolas Chopin, Central Limit Theorem for Sequential Monte Carlo Methods and its Application to Bayesian Inference, Theorem 5 and Appendix A.4"
      url: "https://arxiv.org/pdf/math/0508594"
---

## Statement refuted

Uniform bounds on the true transition density ratios $g(x\mid x')/g(x\mid x'')$ and proposal density ratios $q_t(x\mid x')/q_t(x\mid x'')$, together with a likelihood bounded above and away from zero and a bounded test oscillation, suffice by themselves to keep the SIR asymptotic variance $V_t(\phi)$ bounded uniformly in time.

## Facts & Assumptions

**Given:** The finite-horizon SMC variance recursion, density-ratio conventions, and SIR target/proposal setup in the cited definition.

[F1] [[def-smc-clt-function-classes-and-variance-recursions]]: $E_t h(x_{0:t-1})=\int k_t(x_{0:t-1},dx_t)\upsilon_t(x_{0:t})h(x_{0:t})$ and $V_t$ is the weighted-estimator asymptotic covariance.

[F2] [[lem-smc-multinomial-variance-unrolls]]: For multinomial SIR, $V_t(\phi)$ is the sum of the proposal expectations of $\upsilon_k^2(E_{k+1:t}(\phi-\pi_t\phi))^2$ over $0\le k\le t$.

## Counterexample

**Given:** Let $\mathsf X=\{0,1\}$ with counting measure, an initial state $X_0=0$, and a one-point observation space with likelihood density $f(\ast\mid x)=1$. Let the true transition density be $g(x\mid x')=1/2$ for both $x=0,1$ and all $x'$. For $t\ge1$, let the proposal be independent of the preceding state, with $q_t(1\mid x')=\epsilon_t=2^{-t-2}$ and $q_t(0\mid x')=1-\epsilon_t$. Use $\phi(x_{0:t})=\mathbf1_{\{x_t=1\}}$.

1.1 For every pair of preceding states, both $g(x\mid x')/g(x\mid x'')$ and $q_t(x\mid x')/q_t(x\mid x'')$ equal $1$. The likelihood satisfies $0<1\le f(\ast\mid x)\le1$, and $\Delta\phi=1$. The filtering target at every $t\ge1$ has last-state law $\pi_t(X_t=1)=1/2$, while the proposal last-state law is $q_t$. Its normalized incremental Radon–Nikodym weight is $\upsilon_t(1)=1/(2\epsilon_t)$ and $\upsilon_t(0)=1/(2(1-\epsilon_t))$. [F1, given, algebra]

1.2 For every preceding path, the forward image of the centered test is $E_t(\phi-1/2)=\sum_{x=0}^1q_t(x\mid x_{t-1})\upsilon_t(x)(\mathbf1_{\{x=1\}}-1/2)=\sum_{x=0}^1g(x\mid x_{t-1})(\mathbf1_{\{x=1\}}-1/2)=0.$ Consequently $E_{k+1:t}(\phi-\pi_t\phi)=0$ for every $k<t$, so all earlier-time terms in [F2] vanish. [F1, F2, step 1.1, algebra]

2.1 The remaining $k=t$ term in [F2] is $V_t(\phi)=\epsilon_t\left(\frac1{2\epsilon_t}\right)^2\frac14+(1-\epsilon_t)\left(\frac1{2(1-\epsilon_t)}\right)^2\frac14=\frac1{16\epsilon_t}+\frac1{16(1-\epsilon_t)}.$ Since $\epsilon_t=2^{-t-2}\downarrow0$, $V_t(\phi)\to\infty$ despite all the stated ratio, likelihood, and oscillation bounds. Thus those conditions alone do not imply the claimed time-uniform variance bound. [F2, step 1.1, step 1.2, algebra] ∎
