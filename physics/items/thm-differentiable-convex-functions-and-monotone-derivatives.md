---
id: thm-differentiable-convex-functions-and-monotone-derivatives
kind: theorem
title: "A differentiable function on an open interval is convex if and only if its derivative is nondecreasing"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-one-sided-derivatives-of-convex-functions, thm-supporting-lines-for-convex-functions, thm-monotonicity-from-the-derivative, cor-differentiable-implies-continuous, def-monotone-function]
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

For a differentiable $f:I\to\mathbb R$ on an open interval $I$, $f$ is convex if and only if $f'$ is nondecreasing on $I$.

## Facts & Assumptions

**Given:** A differentiable $f:I\to\mathbb R$ on an open interval $I$.

[L1] For a convex function, the ordered one-sided-derivative chain holds; at a differentiability point its two one-sided derivatives equal the ordinary derivative ([[thm-one-sided-derivatives-of-convex-functions]]).

[L2] If a differentiable real function has nonnegative derivative on an interval, then it is nondecreasing on that interval ([[thm-monotonicity-from-the-derivative]]).

## Proof

**Proof technique:** cases.

1.1 Assume $f$ is convex. For $u<v$, [L1] becomes $f'(u)\le f'(v)$, so $f'$ is nondecreasing. [assume-case forward, L1]

1.2 Assume instead that $f'$ is nondecreasing. For a fixed $c$, the derivative of $g(x)=f(x)-f'(c)x$ is nonpositive on the left of $c$ and nonnegative on the right; apply [L2] to $-g$ on the left and to $g$ on the right to obtain $f(x)\ge f(c)+f'(c)(x-c)$ for every $x\in I$. [assume-case reverse, L2, algebra]

2.1 If $z=\lambda x+(1-\lambda)y$, multiply the supporting inequalities of step 1.2 at $z$ for $x$ and $y$ by $\lambda$ and $1-\lambda$ and add; this gives $f(z)\le\lambda f(x)+(1-\lambda)f(y)$. Thus the two cases prove the equivalence. [step 1.1, step 1.2, cases-exhaustive] ∎
