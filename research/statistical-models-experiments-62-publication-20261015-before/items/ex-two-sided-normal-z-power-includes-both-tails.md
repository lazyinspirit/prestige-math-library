---
id: ex-two-sided-normal-z-power-includes-both-tails
kind: example
title: "A two-sided normal z-test retains its lower-tail power"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-axiom-of-choice
  - lem-standard-normal-cdf-quantiles-and-tail-symmetry-for-power
  - prop-known-variance-normal-two-sided-z-test-power
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Example

Let $\alpha=0.05$, $n=4$, and $\delta=\sigma>0$ in the known-variance normal model, with simple null $\mu=\mu_0$ and alternative $\mu=\mu_0+\delta$. The two-sided test rejects for $|Z_n|>z_{0.975}$. Its exact power is
$$1-\Phi(z_{0.975}-2)+\Phi(-z_{0.975}-2).$$
The second term is the lower-tail rejection probability under the positive shift; omitting it would compute only the upper-tail probability.

## Facts & Assumptions

**Given:** AC; $\alpha=0.05$, $n=4$, $\delta=\sigma>0$, the simple null, and the two-sided rejection region in the Example.

[F1] The known-variance two-sided test has exact power $1-\Phi(c_\alpha-\lambda)+\Phi(-c_\alpha-\lambda)$, where $c_\alpha=z_{1-\alpha/2}$ and $\lambda=\sqrt n\,\delta/\sigma$. [[prop-known-variance-normal-two-sided-z-test-power]]

[F2] $0<\Phi(c)<1$ for every finite real $c$, since $\Phi$ is strictly increasing with limits $0$ and $1$ at the two infinite endpoints. [[lem-standard-normal-cdf-quantiles-and-tail-symmetry-for-power]]

## Verification

**Given:** The exact two-sided normal test and parameter values in the Example.

1.1 Here $c_\alpha=z_{1-\alpha/2}=z_{0.975}$ and $\lambda=\sqrt4\,\sigma/\sigma=2$. Substitution into [F1] gives the displayed upper-tail term $1-\Phi(z_{0.975}-2)$ and lower-tail term $\Phi(-z_{0.975}-2)$. [F1, given, algebra]

2.1 Both arguments $z_{0.975}-2$ and $-z_{0.975}-2$ are finite, so [F2] gives $1-\Phi(z_{0.975}-2)>0$ and $\Phi(-z_{0.975}-2)>0$. Thus the displayed power has a positive contribution from each rejection tail. [F2, step 1.1, algebra] ∎