---
id: cex-repeated-unit-root-causes-linear-parasitic-growth
kind: counterexample
title: "A repeated unit root causes a linearly growing parasitic mode"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - def-linear-multistep-method-consistency-order-and-root-condition
  - lem-linear-multistep-order-conditions-from-taylor
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
dependency_level: 2
---

## Statement refuted

Every consistent two-step linear multistep method is zero-stable.

## Facts & Assumptions

**Given:** The method and consistency conventions of [[def-linear-multistep-method-consistency-order-and-root-condition]].

[F1] [[lem-linear-multistep-order-conditions-from-taylor]] says consistency is equivalent to $\rho(1)=0$ and $\rho'(1)=\sigma(1)$.

## Counterexample

Take $\rho(\zeta)=(\zeta-1)^2$ and $\sigma(\zeta)=0$, so the recurrence is $Y_{n+2}-2Y_{n+1}+Y_n=0$. This is a consistent first-order two-step method, but its double unit root is not zero-stable.

1.1 Here $\rho(1)=0$ and $\rho'(1)=0=\sigma(1)$, so [F1] proves consistency. [F1, algebra]

1.2 The characteristic polynomial has a root $1$ of multiplicity two, so it violates the root condition in [[def-linear-multistep-method-consistency-order-and-root-condition]]. [given, algebra]

1.3 Apply the recurrence to $y'=0$, whose exact solution is $y=0$, with $Y_0=0$ and $Y_1=h$. The sequence $Y_n=nh$ satisfies the recurrence because its second difference is zero. [given, construct]

2.1 On the grid $h=T/N$, the starting error is $h\to0$, but $|Y_N-y(T)|=Nh=T$. Thus convergence fails even for starting errors of order $h$, and the proposed claim is false. [step 1.3, algebra] ∎
