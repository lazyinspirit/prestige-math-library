---
id: ex-nonsmooth-exchange-correlation-functional-breaks-c2
kind: example
title: "A cusp in a chosen exchange-correlation term violates the C2 hypothesis"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-finite-basis-projector-energy-model
  - def-rank-r-orthogonal-projector-domain
  - thm-chain-rule-for-total-derivatives
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

With $H=\operatorname{diag}(1,-1)$ on $\mathbb C^2$ and $r=1$, consider the
candidate term $E_{xc}(P)=|\operatorname{tr}(HP)|$. Along the rank-one
projectors $P_\theta=u_\theta u_\theta^*$, where
$u_\theta=(\cos\theta,\sin\theta)$, its value is $|\cos(2\theta)|$ and has a
cusp at $\theta=\pi/4$. This candidate is not $C^1$ on a neighborhood of the
projector domain and so is outside the $C^2$ finite-basis model hypothesis.

## Facts & Assumptions

**Given:** $H=\operatorname{diag}(1,-1)$, $r=1$, and the candidate functional $E_{xc}(P)=|\operatorname{tr}(HP)|$.

[F1] The model's exchange-correlation term must be real and $C^2$ on a neighborhood of $\mathcal P_r$ ([[def-finite-basis-projector-energy-model]]).

[F2] A rank-one projector is $uu^*$ for a unit vector $u$ ([[def-rank-r-orthogonal-projector-domain]]).

[F3] The composition of totally differentiable maps is totally differentiable ([[thm-chain-rule-for-total-derivatives]]).

## Verification

1.1 For every $\theta$, $u_\theta^*u_\theta=1$, so [F2] gives $P_\theta\in\mathcal P_1$. Multiplication yields $\operatorname{tr}(HP_\theta)=\cos^2\theta-\sin^2\theta=\cos(2\theta)$. [F2, given, algebra]

2.1 Near $\theta=\pi/4$, the left branch of $|\cos(2\theta)|$ has derivative $-2$ at $\pi/4$, while the right branch has derivative $2$. The restriction is not differentiable there; by [F3], a $C^2$ ambient functional composed with the smooth curve $P_\theta$ would be differentiable. Hence the candidate cannot satisfy the $C^2$ requirement in [F1]. [F1, F3, step 1.1, algebra] ∎

