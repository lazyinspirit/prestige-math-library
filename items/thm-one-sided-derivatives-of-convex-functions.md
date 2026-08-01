---
id: thm-one-sided-derivatives-of-convex-functions
kind: theorem
title: "A convex function on an open interval has finite left and right derivatives everywhere, with $f'_-(u)\\le f'_+(u)\\le (f(v)-f(u))/(v-u)\\le f'_-(v)\\le f'_+(v)$ for $u<v$"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-three-slope-inequality-for-convex-functions, thm-convex-functions-are-locally-lipschitz-and-continuous, def-one-sided-derivatives-of-real-functions, thm-monotone-one-sided-limits-exist]
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

If $f:I\to\mathbb R$ is convex on an open interval, then $f'_-(c)$ and $f'_+(c)$ are finite for every $c\in I$. Moreover, for $u<v$ in $I$,

$$f'_-(u)\le f'_+(u)\le\frac{f(v)-f(u)}{v-u}\le f'_-(v)\le f'_+(v).$$

## Facts & Assumptions

**Given:** A convex $f:I\to\mathbb R$ on an open interval and $u<v$ in $I$.

[L1] For a convex function and three ordered points, the three secant slopes satisfy $s(x,y)\le s(x,z)\le s(y,z)$ ([[lem-three-slope-inequality-for-convex-functions]]).

[L2] The left and right derivatives are the one-sided limits of the difference quotient ([[def-one-sided-derivatives-of-real-functions]]).

[L3] A nondecreasing function on an interval has every well-posed one-sided limit, given by the corresponding supremum or infimum ([[thm-monotone-one-sided-limits-exist]]).

## Proof

**Proof technique:** direct.

1.1 For fixed $c\in I$, the functions $x\mapsto s(x,c)$ on $x<c$ and $x\mapsto s(c,x)$ on $x>c$ are nondecreasing by [L1]; choosing points on both sides of $c$, [L1] bounds each near $c$ between two fixed finite outer secant slopes. [L1, L2]

2.1 The monotone one-sided-limit theorem [L3] therefore supplies finite one-sided limits of these two slope functions at $c$, and [L2] identifies them respectively with $f'_-(c)$ and $f'_+(c)$. [step 1.1, L2, L3]

3.1 Apply [L1] to $x<u<v$ and let $x\to u^-$, then to $u<v<z$ and let $z\to v^+$; together with $s(u,v)\le f'_-(v)$ and $f'_+(u)\le s(u,v)$ obtained in the same way, this gives the displayed chain. [step 1.1, step 2.1, L1] ∎
