---
id: "fs-hausdorff-dimension-of-union-is-the-sum"
kind: "false-statement"
title: "Dimensions add under unions"
deps: ["thm-hausdorff-dimension-is-countably-stable", "cor-euclidean-hausdorff-dimension"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: Bishop–Peres §1.1 p.3 countable stability; Proposition 1.2.6
      url: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
status: "draft"
origin: "pipeline"
---

## Statement

Assume the Axiom of Countable Choice. The assertion $\dim_H(A\cup B)=\dim_H A+\dim_H B$ for all subsets of a metric space is false, even for disjoint compact subsets of the line.

## Facts & Assumptions

**Given:** The objects, conventions, and hypotheses in the statement above.

[F1] Under the standing Countable Choice hypothesis, the dimension of a countable union is the supremum of the component dimensions. [[thm-hausdorff-dimension-is-countably-stable]]

[F2] Under the standing Countable Choice hypothesis, a positive-length subset of the line has dimension one. [[cor-euclidean-hausdorff-dimension]]

## Refutation

1.1 Let $A=[0,1]$ and $B=[2,3]$. They are disjoint compact intervals, each with positive length, so $\dim_H A=\dim_H B=1$. [F2]

2.1 Countable stability applied to these two sets and empty remaining terms gives $\dim_H(A\cup B)=\max(1,1)=1$. This differs from $1+1=2$, refuting the asserted sum rule. [F1, step 1.1] ∎
