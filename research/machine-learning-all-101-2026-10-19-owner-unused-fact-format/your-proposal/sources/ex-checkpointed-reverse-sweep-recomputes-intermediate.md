---
id: ex-checkpointed-reverse-sweep-recomputes-intermediate
kind: example
title: "Checkpointed reverse sweep recomputes an intermediate"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: [def-finite-straight-line-computational-program, alg-checkpointed-reverse-schedules, thm-checkpointed-reverse-schedules-preserve-adjoints-and-cost-bounds, thm-chain-rule-for-total-derivatives, thm-chain-sum-product-and-composition-rules-for-banach-derivatives, thm-sine-and-cosine-derivatives, thm-total-differentiability-gives-a-local-linear-bound-and-continuity]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

For $x\in\mathbb R$, take the two-transition real-arithmetic computation $x_1=F_1(x)=x^2$, $x_2=F_2(x_1)=\sin(x_1)$, with scalar output $f(x)=x_2$. Both transitions are $C^1$ on $\mathbb R$. Run the uniform-block checkpoint schedule with $T=2$ and one saved-state slot $m=1$. The schedule stores the initial state, recomputes $x_1$ when reversing $F_2$, and returns the same derivative as an uncheckpointed reverse pass: $f'(x)=2x\cos(x^2)$.

## Facts & Assumptions

**Given:** The two $C^1$ transitions, initial state $x$, and uniform-block schedule with $T=2$ and $m=1$.

[F1] [[alg-checkpointed-reverse-schedules]]: uniform-block mode saves its scheduled checkpoints, restores a block start, replays the transitions needed to reach each step, records that step's local tape, and reverses the step.

[F2] [[thm-checkpointed-reverse-schedules-preserve-adjoints-and-cost-bounds]]: when deterministic replays stay in the declared domains, uniform-block checkpointing returns the same terminal value and initial-state cotangent as the uncheckpointed reverse sweep.

[F3] [[thm-chain-rule-for-total-derivatives]]: the derivative of a composition of totally differentiable maps is the ordered composition of their total derivatives.

[F4] [[thm-chain-sum-product-and-composition-rules-for-banach-derivatives]]: on the real Banach space $\mathbb R$, multiplication $(a,b)\mapsto ab$ is bounded bilinear because $|ab|\le |a||b|$, and the identity map has Fréchet derivative $1$. Applying the bounded-bilinear product rule to two identity maps gives $D(x\mapsto x^2)=2x$, a continuous derivative.

[F5] [[thm-sine-and-cosine-derivatives]]: on $\mathbb R$, $D(\sin u)=\cos u$ and $D(\cos u)=-\sin u$ for every $u\in\mathbb R$; these one-dimensional derivatives are total derivatives.

[F6] [[thm-total-differentiability-gives-a-local-linear-bound-and-continuity]]: a totally differentiable map on $\mathbb R$ is continuous; in particular, $\cos$ is continuous because it is differentiable by [F5], so $u\mapsto\sin u$ is $C^1$.

## Verification

1.1 Here $q=\lceil T/m\rceil=2$, so the uniform-block schedule stores only $x_0=x$ and has one block $[0,2]$. In the reverse pass it first restores $x_0$ and replays $F_1$, obtaining $x_1=x^2$ before recording the local tape for $F_2$; it then restores $x_0$ again to process $F_1$. Both transitions are defined on all of $\mathbb R$, so every replay stays in its declared domain. [F1, given, construct, algebra]

2.1 Starting with output cotangent $\bar x_2=1$, the local derivative of $F_2$ gives $\bar x_1=\cos(x^2)$ by [F5], and the local derivative of $F_1$ gives $\bar x_0=2x\cos(x^2)$ by [F4]. This includes $x=0$, where the derivative is $0$, and $x=1$, where it is $2\cos(1)$. [F1, F4, F5, step 1.1, algebra]

3.1 The deterministic replay preserves the local inputs and reverse rules, so [F2] identifies the returned cotangent with the uncheckpointed derivative; [F3] gives $f'(x)=F_2'(F_1(x))F_1'(x)=\cos(x^2)\,2x$, the same value. The example shows a recomputation trade-off and asserts no schedule optimality. [F2, F3, step 2.1, algebra, F6] ∎
