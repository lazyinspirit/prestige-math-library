---
id: ex-relu-kink-does-not-have-classical-ad-gradient
kind: example
title: "A ReLU kink has no classical backpropagated derivative"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [alg-backpropagation-through-shared-parameter-recurrence, def-finite-straight-line-computational-program, alg-forward-mode-automatic-differentiation, alg-reverse-mode-automatic-differentiation]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Let $r(u)=\max\{0,u\}$, with $r(0)=0$, and consider the one-step scalar objective $J(\theta)=r(\theta)$ represented by initial state $h_0(\theta)=\theta$, transition $h_1=r(h_0)$, and loss $\ell(\theta,h_1)=h_1$. The ReLU transition is $C^1$ on each of the open regions $u<0$ and $u>0$, with its value specified at $u=0$. At $\theta=0$, $J$ has no classical derivative, and the stated forward-, reverse-, and recurrence-backpropagation procedures return NONDIFFERENTIABLE with no tangent or gradient rather than selecting a subgradient.

## Facts & Assumptions

**Given:** The one-step graph at $\theta=0$ with ReLU transition $r(u)=\max\{0,u\}$.

[F1] [[def-finite-straight-line-computational-program]]: for a piecewise-$C^1$ primitive, a branch-boundary input returns NONDIFFERENTIABLE; the definition does not silently choose a subgradient or generalized derivative.

[F2] [[alg-backpropagation-through-shared-parameter-recurrence]]: on a piecewise-$C^1$ map the recurrence procedure uses a derivative only on a unique strict active branch and returns NONDIFFERENTIABLE at a boundary.

[F3] [[alg-forward-mode-automatic-differentiation]]: a forward-mode input on a branch boundary returns NONDIFFERENTIABLE and no tangent.

[F4] [[alg-reverse-mode-automatic-differentiation]]: a reverse-mode input on a branch boundary returns NONDIFFERENTIABLE and no gradient.

## Verification

1.1 Since $J(0)=0$, for every $h<0$ the difference quotient $(J(h)-J(0))/h$ equals $0$, while for every $h>0$ it equals $1$. The two one-sided limits differ, so $J$ is not differentiable at $0$. [given, choose, algebra]

1.2 The executed ReLU primitive receives $h_0=0$, the boundary between its $u<0$ and $u>0$ branches. By [F1] this input has no selected strict branch. [F1, given]

2.1 At that boundary, the recurrence procedure in [F2] and the forward procedure in [F3] both return NONDIFFERENTIABLE and no derivative value. [F2, F3, step 1.2]

2.2 The reverse procedure in [F4] also returns NONDIFFERENTIABLE and no gradient at this boundary. [F4, step 1.2]

3.1 This boundary status agrees with step 1.1: there is no classical derivative for these procedures to propagate, and their specified output does not invent one. [step 1.1, step 2.1, step 2.2] ∎
