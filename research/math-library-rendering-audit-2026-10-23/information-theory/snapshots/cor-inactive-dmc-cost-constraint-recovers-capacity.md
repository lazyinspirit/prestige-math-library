---
id: cor-inactive-dmc-cost-constraint-recovers-capacity
kind: corollary
title: An inactive DMC cost constraint recovers ordinary capacity
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 10
deps: [def-cost-constrained-dmc-code-and-capacity, def-finite-dmc-cost-model, thm-cost-constrained-dmc-capacity-formula, thm-discrete-memoryless-channel-capacity-formula]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used; the finite cost bound holds symbol by symbol.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 20 §20.1"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
    - title: "Yury Polyanskiy, MIT 6.441 Information Theory, Chapter 17 §§17.1–17.2"
      url: https://ocw.mit.edu/courses/6-441-information-theory-spring-2016/24fb44b6a101e847c32ffe38bbeeea6e_MIT6_441S16_chapter_17.pdf
---

## Statement

For a finite DMC with letter cost $c$ and budget $\Gamma\ge c_{\max}$, the cost-constrained operational capacity equals the ordinary DMC capacity, with the same average-error convention and in nats.

## Facts & Assumptions

**Given:** A finite DMC, a finite letter cost, and a budget at least the maximum letter cost.

[F1] [[def-finite-dmc-cost-model]] and [[def-cost-constrained-dmc-code-and-capacity]]: each codeword's per-use average cost is an average of the letter costs and the information-capacity constraint is $\mathbb E c(X)\le\Gamma$.

[F2] [[thm-cost-constrained-dmc-capacity-formula]]: the cost-constrained operational capacity equals $\max_{P_X:\mathbb E c(X)\le\Gamma}I(P_X;W)$.

[F3] [[thm-discrete-memoryless-channel-capacity-formula]]: ordinary average-error DMC capacity equals $\max_{P_X}I(P_X;W)$.

## Proof

1.1 Every letter has $c(x)\le c_{\max}\le\Gamma$ by [F1]. Therefore every ordinary code satisfies the block cost constraint, and every input distribution satisfies the one-letter cost constraint. Conversely a cost-feasible code or distribution is still an ordinary one, so the two code classes and feasible input sets coincide. [F1, given, algebra]

2.1 Apply [F2] and [F3] to these identical code and input classes. Their operational capacities agree; both use average error and natural-log nats by their definitions. [F2, F3, step 1.1, given] ∎
