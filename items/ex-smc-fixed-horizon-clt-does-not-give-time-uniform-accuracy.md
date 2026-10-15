---
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
id: ex-smc-fixed-horizon-clt-does-not-give-time-uniform-accuracy
kind: example
title: "Fixed-horizon asymptotic variance can grow without mixing"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 8
deps:
  - def-smc-clt-function-classes-and-variance-recursions
  - lem-smc-multinomial-variance-unrolls
  - thm-smc-multinomial-fixed-horizon-clt
proof_strategy: direct
axiom_use: "No choice axiom is used in the finite two-state variance calculation; the fixed-horizon CLT is invoked only through its stated supplier."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Let $\mathsf X=\{0,1\}$ have the uniform target and proposal at time zero. Use identity mutation, unit incremental weights, and multinomial resampling at every time. For each fixed horizon $t$, take $\phi(x_{0:t})=\mathbf1_{\{x_t=1\}}$. Compute the fixed-horizon asymptotic variance and compare its dependence on $t$ with a time-uniform bound.

## Facts & Assumptions

**Given:** The uniform initial law, identity mutation, unit weights, multinomial selection, and terminal indicator in the Example.

[F1] [[def-smc-clt-function-classes-and-variance-recursions]]: With identity mutation and unit weights, $E_sh=h$ and $\pi_s=\pi_0$.

[F2] [[lem-smc-multinomial-variance-unrolls]]: $V_t(\phi)$ is the sum of the proposal expectations of squared backward images of $\phi-\pi_t\phi$ over $k=0,\ldots,t$.

[F3] [[thm-smc-multinomial-fixed-horizon-clt]]: For each fixed horizon and the stated class, the weighted estimate has CLT variance $V_t(\phi)$ and the post-resampling estimate has variance $V_t(\phi)+\operatorname{Var}_{\pi_t}(\phi)$.

## Verification

**Given:** The finite-state identity-mutation filter in the Example and any fixed integer $t\ge0$.

1.1 The identity kernel leaves the uniform law invariant and has incremental weight one. Thus [F1] gives $E_{k+1:t}(\phi-\pi_t\phi)=\phi-1/2$ for every $k\le t$. Since $(\phi-1/2)^2=1/4$ everywhere, each of the $t+1$ summands in [F2] equals $1/4$. Therefore $V_t(\phi)=(t+1)/4$. [F1, F2, given, algebra]

2.1 By [F3], at every fixed $t$ the weighted estimate has a valid CLT with variance $(t+1)/4$, and the post-resampling estimate has variance $(t+2)/4$. Both variance sequences are unbounded as $t$ ranges over the integers. The fixed-horizon theorem therefore supplies no uniform-in-time variance bound or finite-particle accuracy guarantee. [F3, step 1.1, algebra] ∎
