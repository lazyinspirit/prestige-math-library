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
  - def-countable-choice
dependency_roles:
  pthm-qsm-dilute-occupation-limit: physical-result
  lem-qsm-models-diagonal-occupation-trace: mathematical-premise
  def-countable-choice: mathematical-premise
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

Take one dimensionless mode with fugacity $q=1/2$. The first-order dilute term for the mean occupation is $q=1/2$. As an explicit comparison, define the Poisson law by $P_q(n)=e^{-q}q^n/n!$ for $n\in\mathbb N_0$; its mean and variance are both $q$. The exact Bose law is geometric and the exact Fermi law is Bernoulli. This declared calculation illustrates the distinct occupation statistics and why a small-error conclusion needs a small-fugacity condition; the Poisson comparison is not asserted to follow from the linked theorem's mean and log-partition bounds.

## Verification

**Given:** $\mathrm{AC}_\omega$ ([[def-countable-choice]]), $q=1/2$, and the exact occupation and variance formulas of [[pthm-qsm-dilute-occupation-limit]] and [[lem-qsm-models-diagonal-occupation-trace]].

[F1] [[pthm-qsm-dilute-occupation-limit]], Statement: Bose and Fermi mode means are $q/(1-q)$ and $q/(1+q)$, with explicit errors relative to $q$.

[F2] [[lem-qsm-models-diagonal-occupation-trace]], Statement: the one-mode Bose and Fermi variances are $q/(1-q)^2$ and $q/(1+q)^2$.

1.1 Substitution of $q=1/2$ gives $\bar n_B=1$, $\bar n_F=1/3$, while the first-order value is $1/2$. Thus the Bose error is $1/2$ and the Fermi error magnitude is $1/6$. [given, F1, algebra]

2.1 For the comparison law, $\mathbb E N=e^{-q}\sum_{n\ge1}nq^n/n!=q$ and $\mathbb E[N(N-1)]=e^{-q}\sum_{n\ge2}n(n-1)q^n/n!=q^2$, so $\operatorname{Var}(N)=q^2+q-q^2=q=1/2$. The exact variances from [F2] are $q/(1-q)^2=2$ for bosons and $q/(1+q)^2=2/9$ for fermions. These are finite exact model values; since $q$ is not near zero, no small-error claim follows from this example. [given, F2, algebra] ∎
