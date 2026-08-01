---
id: thm-convex-functions-are-differentiable-off-a-countable-set
kind: theorem
title: "A convex function on an open interval is differentiable except at at most countably many points"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-one-sided-derivatives-of-convex-functions, thm-convex-functions-are-locally-lipschitz-and-continuous, thm-froda, def-monotone-function]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Gardner, Convex Functions, Notes 6.6"
      url: "https://faculty.etsu.edu/gardnerr/5210/notes/6-6.pdf"
pipeline_run: null
---

## Statement

If $f:I\to\mathbb R$ is convex on an open interval, then the set of points at which $f$ is not differentiable is at most countable.

## Facts & Assumptions

**Given:** A convex $f:I\to\mathbb R$ on an open interval.

[L1] A convex function on an open interval has finite left and right derivatives everywhere, and for $u<v$ they satisfy the ordered one-sided-derivative chain ([[thm-one-sided-derivatives-of-convex-functions]]).

[L2] The discontinuity set of a monotone real function on an interval is **at most countable** ([[thm-froda]]).

[L3] A convex real function is continuous throughout an open interval on which it is convex ([[thm-convex-functions-are-locally-lipschitz-and-continuous]]).

## Proof

**Proof technique:** direct.

1.1 Put $g(c):=f'_+(c)$. The order chain in [L1] gives $g(u)\le g(v)$ whenever $u<v$, so $g$ is nondecreasing. [L1]

1.2 For $u<c$, [L1] gives $g(u)\le f'_-(c)$. Conversely, if $a<u<c$, [L1] gives $s(a,u)\le f'_-(u)\le g(u)$. Letting $u\to c^-$, continuity from [L3] gives $\lim_{u\to c^-}s(a,u)=s(a,c)$; then letting $a\to c^-$ gives $\lim_{u\to c^-}g(u)=f'_-(c)$. Since $g(c)=f'_+(c)$, nondifferentiability of $f$ at $c$ makes $g$ discontinuous there. [L1, L3, algebra]

2.1 Froda's theorem makes the discontinuity set of $g$ at most countable, and step 1.2 places every nondifferentiability point of $f$ in that set. [L2, step 1.1, step 1.2] ∎
