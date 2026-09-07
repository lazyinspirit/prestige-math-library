---
id: "fs-zero-hausdorff-dimension-implies-countability"
kind: "false-statement"
title: "Dimension zero forces countability"
deps: ["cex-uncountable-zero-dimensional-binary-digit-set"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: Bishop–Peres Example 1.4.2, square-position specialisation
      url: https://commack.math.stonybrook.edu/~bishop/fractalbook.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
status: "draft"
origin: "pipeline"
---

## Statement

Assume the Axiom of Countable Choice. The assertion “every set of Hausdorff dimension zero is countable” is false.

## Facts & Assumptions

**Given:** The objects, conventions, and hypotheses in the statement above.

[F1] Under the standing Countable Choice hypothesis, the square-position binary digit set is compact and uncountable with Hausdorff dimension zero. [[cex-uncountable-zero-dimensional-binary-digit-set]]

## Refutation

1.1 Let $S=\{k^2:k\ge1\}$ and use the set $A_S$ of the cited counterexample. It has Hausdorff dimension zero. [F1]

2.1 The same set is uncountable. Thus it satisfies the hypothesis but not the conclusion of the asserted implication. [F1, step 1.1] ∎
