---
id: thm-volume-of-a-solid-of-revolution-by-discs
kind: theorem
title: 'The disc formula for the volume of a solid of revolution'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-solid-of-revolution-about-a-coordinate-axis, thm-solid-between-continuous-graphs-fubini-formula, cor-cavalieri-principle-for-jordan-content, cor-disc-jordan-content-is-pi-r-squared, lem-algebra-of-continuous-real-maps-on-a-space, thm-continuous-inverse, thm-nth-roots-exist]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sigurd Angenent, Math 221 lecture notes, Chapter 8 §3.4"
      url: "https://people.math.wisc.edu/~angenent/Free-Lecture-Notes/free221.pdf"
pipeline_run: null
---

## Statement

Let $a\le b$ and let $f:[a,b]\to[0,\infty)$ be continuous, and form $S_x(f)$ as in [[def-solid-of-revolution-about-a-coordinate-axis]]. The solid of revolution is compact and Jordan measurable and has volume $\pi\int_a^b f(x)^2\,dx$.

## Facts & Assumptions

**Given:** The interval $[a,b]$, the continuous nonnegative profile $f$, and the solid $S_x(f)$.

[F1] A solid between continuous graphs over a compact Jordan base is compact and Jordan measurable ([[thm-solid-between-continuous-graphs-fubini-formula]]).

[F2] A closed disc of radius $r\ge0$ has Jordan content $\pi r^2$ ([[cor-disc-jordan-content-is-pi-r-squared]]).

[F3] If a bounded Jordan set has Jordan-measurable sections outside a content-zero parameter set, then its completed sectional-content function is integrable and its integral is the set's content ([[cor-cavalieri-principle-for-jordan-content]]).

[F4] Finite sums and products of continuous real-valued maps on a topological space are continuous ([[lem-algebra-of-continuous-real-maps-on-a-space]]).

[F5] The inverse of a continuous injective real function on an interval is continuous on its image ([[thm-continuous-inverse]]).

[F6] Every nonnegative real has a unique nonnegative square root ([[thm-nth-roots-exist]]).

## Proof

**Proof technique:** direct.

1.1 First apply [F1] over the compact interval $[a,b]$ to the graphs $-f$ and $f$, obtaining the compact Jordan base $D=\{(x,y):a\le x\le b,\ |y|\le f(x)\}$. By [F4], $(x,y)\mapsto f(x)^2-y^2$ is continuous and nonnegative on $D$; [F5] and [F6] make its nonnegative square root $\rho$ continuous. A second application of [F1] to the graphs $-\rho$ and $\rho$ identifies their solid with $S_x(f)$, so $S_x(f)$ is compact and Jordan measurable. [given, F1, F4, F5, F6, construct]

2.1 For each $x\in[a,b]$, the section of $S_x(f)$ perpendicular to the $x$-axis is the closed disc $y^2+z^2\le f(x)^2$, and [F2] gives it content $\pi f(x)^2$, including when $f(x)=0$. [step 1.1, F2]

3.1 The sectional-content function $x\mapsto\pi f(x)^2$ is continuous, so [F3] gives $\operatorname{cont}(S_x(f))=\int_a^b\pi f(x)^2\,dx$. If $a=b$ or $f$ is identically zero, the same formula gives zero. [step 2.1, F3] ∎

## Remarks

The corresponding formula about the $y$-axis is obtained by permuting coordinates when the sections perpendicular to that axis are discs.
