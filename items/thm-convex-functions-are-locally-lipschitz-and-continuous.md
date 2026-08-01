---
id: thm-convex-functions-are-locally-lipschitz-and-continuous
kind: theorem
title: "A convex real function is Lipschitz on every closed bounded subinterval of the interior of its domain, hence continuous throughout the interior"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-three-slope-inequality-for-convex-functions, def-continuity-real, def-lipschitz-holder-contraction]
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

Let $f:I\to\mathbb R$ be convex and let $[a,b]\subseteq\operatorname{int}I$. Then there is $M\ge0$ such that $|f(y)-f(x)|\le M|y-x|$ for all $x,y\in[a,b]$. Thus $f$ is Lipschitz on $[a,b]$ ([[def-lipschitz-holder-contraction]]) and is continuous at every point of $\operatorname{int}I$ ([[def-continuity-real]]).

## Facts & Assumptions

**Given:** A convex function $f:I\to\mathbb R$ and $[a,b]\subseteq\operatorname{int}I$.

[L1] For a convex function and $u<v<w$, the three secant slopes satisfy $s(u,v)\le s(u,w)\le s(v,w)$ ([[lem-three-slope-inequality-for-convex-functions]]).

[L2] A function is **Lipschitz** with **constant** $L$ when $d(f(x),f(y))\le Ld(x,y)$ for all points in its domain ([[def-lipschitz-holder-contraction]]).

## Proof

**Proof technique:** direct.

1.1 Choose $u,v\in I$ with $u<a\le b<v$; then for $a\le x<y\le b$, two applications of the three-slope inequality give $s(u,a)\le s(x,y)\le s(b,v)$. [L1]

2.1 With $M:=\max\{|s(u,a)|,|s(b,v)|\}$, step 1.1 yields $|f(y)-f(x)|\le M|y-x|$ for $x<y$; symmetry gives the same estimate for all $x,y\in[a,b]$, which is the Lipschitz condition. [step 1.1, L2, algebra]

3.1 Given $c\in\operatorname{int}I$, choose such an interval $[a,b]$ containing $c$ in its interior; the estimate in step 2.1 gives the $\varepsilon$--$\delta$ condition at $c$ by taking $\delta=\varepsilon/M$ when $M>0$, and is immediate when $M=0$. [step 1.1, step 2.1] ∎
