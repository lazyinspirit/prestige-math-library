---
id: cor-convex-differentiable-functions-have-continuous-derivatives
kind: corollary
title: "A differentiable convex function on an open interval has a continuous derivative"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-differentiable-convex-functions-and-monotone-derivatives, cor-injective-or-monotone-derivative-is-continuous]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
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

If $f:I\to\mathbb R$ is differentiable and convex on an open interval, then $f'$ is continuous on $I$.

## Facts & Assumptions

**Given:** A differentiable convex $f:I\to\mathbb R$ on an open interval.

[L1] A differentiable function on an open interval is convex if and only if its derivative is nondecreasing ([[thm-differentiable-convex-functions-and-monotone-derivatives]]).

[L2] If $f'$ is injective, or if $f'$ is monotone, then $f'$ is continuous ([[cor-injective-or-monotone-derivative-is-continuous]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $f'$ is nondecreasing on $I$. [L1, L2]

2.1 Thus $f'$ is monotone, so [L2] gives continuity of $f'$. [step 1.1, L2, algebra]

3.1 The conclusion holds at every point of the open interval $I$. [step 1.1, step 2.1] ∎
