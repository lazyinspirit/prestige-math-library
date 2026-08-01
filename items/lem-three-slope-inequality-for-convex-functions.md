---
id: lem-three-slope-inequality-for-convex-functions
kind: lemma
title: "For a convex function and $x<y<z$, the three secant slopes satisfy $s(x,y)\\le s(x,z)\\le s(y,z)$"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-convex-concave-and-midpoint-convex-functions]
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

Let $f:I\to\mathbb R$ be convex on an interval and, for distinct $a,b\in I$, write $s(a,b):=(f(b)-f(a))/(b-a)$. If $x<y<z$ lie in $I$, then

$$s(x,y)\le s(x,z)\le s(y,z).$$

## Facts & Assumptions

**Given:** A convex $f:I\to\mathbb R$ and $x<y<z$ in $I$.

[L1] A function is convex when the convex-combination inequality holds for every weight in $[0,1]$ ([[def-convex-concave-and-midpoint-convex-functions]]).

## Proof

**Proof technique:** direct.

1.1 Put $\lambda=(z-y)/(z-x)\in(0,1)$; then $y=\lambda x+(1-\lambda)z$, so convexity gives $f(y)\le\lambda f(x)+(1-\lambda)f(z)$. [L1]

2.1 Multiplying this inequality by the positive number $z-x$ and rearranging gives $(z-y)(f(y)-f(x))\le(y-x)(f(z)-f(y))$. [step 1.1, algebra]

3.1 Dividing step 2.1 successively by the positive products $(y-x)(z-x)$ and $(z-y)(z-x)$ gives $s(x,y)\le s(x,z)\le s(y,z)$. [step 1.1, step 2.1] ∎
