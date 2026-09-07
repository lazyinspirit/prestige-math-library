---
id: "fs-vanishing-positive-hausdorff-measures-implies-countability"
kind: "false-statement"
title: "Vanishing at all positive exponents forces countability"
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

Assume the Axiom of Countable Choice. The assertion “if $\mathcal H^s(A)=0$ for every finite $s>0$, then $A$ is countable” is false.

## Facts & Assumptions

**Given:** The objects, conventions, and hypotheses in the statement above.

[F1] Under the standing Countable Choice hypothesis, the square-position binary digit set is uncountable and has $\mathcal H^t=0$ for every finite $t>0$. [[cex-uncountable-zero-dimensional-binary-digit-set]]

## Refutation

1.1 Take the square-position binary digit set $A_S$. The cited result gives $\mathcal H^s(A_S)=0$ simultaneously for every finite $s>0$, as required by the antecedent. [F1]

2.1 That result also establishes that $A_S$ is uncountable, refuting the conclusion. The quantifier excludes exponent zero, so there is no assertion that its counting measure vanishes. [F1, step 1.1] ∎
