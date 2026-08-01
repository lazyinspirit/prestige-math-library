---
id: cor-second-derivative-characterises-convexity
kind: corollary
title: "A twice-differentiable function on an open interval is convex if and only if its second derivative is nonnegative"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-differentiable-convex-functions-and-monotone-derivatives, thm-monotonicity-from-the-derivative, def-higher-derivatives-and-smoothness]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "R. Gardner, Convex Functions, Notes 6.6"
      url: "https://faculty.etsu.edu/gardnerr/5210/notes/6-6.pdf"
pipeline_run: null
---

## Statement

If $f:I\to\mathbb R$ is twice differentiable on an open interval, then $f$ is convex if and only if $f''(x)\ge0$ for every $x\in I$.

## Facts & Assumptions

**Given:** A twice differentiable $f:I\to\mathbb R$ on an open interval $I$.

[L1] A differentiable function on an open interval is convex if and only if its derivative is nondecreasing ([[thm-differentiable-convex-functions-and-monotone-derivatives]]).

[L2] If a differentiable real function has nonnegative derivative on an interval, then it is nondecreasing on that interval ([[thm-monotonicity-from-the-derivative]]).

## Proof

**Proof technique:** cases.

1.1 Assume $f$ is convex. By [L1], $f'$ is nondecreasing; its difference quotients on either side of a point are nonnegative, and their common limit $f''(x)$ is therefore nonnegative. [assume-case forward, L1, L2]

1.2 Assume $f''\ge0$ on $I$. Applying [L2] to $f'$ shows that $f'$ is nondecreasing. [assume-case reverse, L2, algebra]

2.1 By [L1], the conclusion of step 1.2 makes $f$ convex, while step 1.1 proves the reverse implication. [step 1.1, step 1.2, cases-exhaustive] ∎
