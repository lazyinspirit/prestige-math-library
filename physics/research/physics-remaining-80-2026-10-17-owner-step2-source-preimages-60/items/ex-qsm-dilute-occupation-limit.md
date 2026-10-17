---
id: ex-qsm-dilute-occupation-limit
kind: example
title: "Quantum occupation fluctuations and the classical approximation boundary"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - pthm-qsm-dilute-occupation-limit
  - lem-qsm-models-diagonal-occupation-trace
dependency_roles:
  pthm-qsm-dilute-occupation-limit: physical-result
  lem-qsm-models-diagonal-occupation-trace: mathematical-premise
physical_scope: "A one-mode exact comparison of Bose, Fermi, and first-order classical occupations at q=1/2, with no empirical interpretation."
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "David Tong, Statistical Physics, §§3.5–3.6, Bose and Fermi occupations"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
---

## Example

Take one dimensionless mode with fugacity $q=1/2$. The first-order dilute approximation assigns occupation $q=1/2$ and Poisson variance $q=1/2$. The exact Bose law is geometric and the exact Fermi law is Bernoulli. This is a declared calculation illustrating both quantum corrections and why a small-error conclusion needs a small-fugacity condition.

## Verification

**Given:** $q=1/2$; the exact occupation and variance formulas of [[pthm-qsm-dilute-occupation-limit]] and [[lem-qsm-models-diagonal-occupation-trace]].

[F1] [[pthm-qsm-dilute-occupation-limit]], Statement: Bose and Fermi mode means are $q/(1-q)$ and $q/(1+q)$, with explicit errors relative to $q$.

[F2] [[lem-qsm-models-diagonal-occupation-trace]], Statement: the one-mode Bose and Fermi variances are $q/(1-q)^2$ and $q/(1+q)^2$.

1.1 Substitution of $q=1/2$ gives $\bar n_B=1$, $\bar n_F=1/3$, while the first-order value is $1/2$. Thus the Bose error is $1/2$ and the Fermi error magnitude is $1/6$. [given, F1, algebra]

2.1 The exact variances are $2$ for bosons and $2/9$ for fermions, while the Poisson approximation has variance $1/2$. These are finite exact model values; since $q$ is not near zero, no small-error claim follows from this example. [given, F2, algebra] ∎
