---
id: ex-globally-lipschitz-alignment-model
kind: example
title: A globally Lipschitz alignment model with exact mean trajectory
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-globally-lipschitz-mean-field-kernel
  - def-mean-field-and-weighted-vortex-particle-systems
  - thm-dobrushin-w1-stability-for-characteristic-flows
  - thm-empirical-measures-solve-mean-field-equation-exactly
proof_strategy: direct
axiom_use: No choice principle is used; the particle calculation is explicit and the cited stability estimate is conditional on its supplied characteristic flows.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: François Golse, Mean-Field Limits in Statistical Dynamics, Lecture 1
      url: https://metaphor.ethz.ch/x/2022/fs/401-4820-22L/notes/Mean-Field_Limits_in_Statistical_Dynamics_Golse.pdf
---

## Example

For $a\ge0$ on $\mathbb R^d$, take $K(x,y)=a(y-x)$. For $a>0$, each particle is pulled toward the current mean position; for $a=0$, every particle is stationary. It is globally Lipschitz, and its particle trajectories are explicit.

## Facts & Assumptions

**Given:** $a\ge0$, $N\ge1$, and initial positions $x_i(0)\in\mathbb R^d$.

[F1] A globally Lipschitz interaction kernel uses the two-coordinate bound in [[def-globally-lipschitz-mean-field-kernel]].

[F2] The equal-probability particle system is $\dot x_i=N^{-1}\sum_jK(x_i,x_j)$ ([[def-mean-field-and-weighted-vortex-particle-systems]]).

[F3] The empirical particle measure satisfies the exact weak equation ([[thm-empirical-measures-solve-mean-field-equation-exactly]]).

[F4] General characteristic probability solutions obey the $e^{2Lt}$ stability estimate ([[thm-dobrushin-w1-stability-for-characteristic-flows]]).

## Verification

**Given:** The data in the Example and $K(x,y)=a(y-x)$.

1.1 For all $x,y,x',y'$, $|K(x,y)-K(x',y')|=a|(y-y')-(x-x')|\le a(|x-x'|+|y-y'|)$, so the global Lipschitz constant may be taken as $L=a$ in [F1]. [given, F1, algebra]

2.1 Substitution into [F2] gives $\dot x_i=a(\bar x-x_i)$, where $\bar x=N^{-1}\sum_jx_j$. Summing over $i$ yields $\dot{\bar x}=0$, and hence $x_i(t)=\bar x(0)+e^{-at}(x_i(0)-\bar x(0)).$ For $a>0$, the formula tends to the constant mean as $t\to\infty$; for $a=0$, it equals $x_i(0)$. Thus the empirical measure is an exact weak solution by [F3]; for probability solutions the stability factor is $e^{2at}$ by [F4]. [F2, F3, F4, step 1.1, algebra] ∎
