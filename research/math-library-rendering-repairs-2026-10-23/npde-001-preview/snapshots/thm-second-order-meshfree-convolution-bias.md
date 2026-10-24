---
id: thm-second-order-meshfree-convolution-bias
kind: theorem
title: "Second-order convolution bias for an interior C² field"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-scaled-symmetric-compact-kernel-family, lem-symmetric-kernel-moment-cancellation, lem-scaled-kernel-moments-and-derivative-bounds, thm-multivariable-taylor-formula-with-lagrange-remainder, thm-multidimensional-integral-properties]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
axiom_use: "No choice principle is used."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Volker Springel, Smoothed Particle Hydrodynamics in Astrophysics, Annual Review of Astronomy and Astrophysics 48 (2010), author full text"
      url: "https://arxiv.org/html/1109.2219"
    - title: "Benjamin Seibold, MIT OpenCourseWare 18.336, Numerical Methods for Partial Differential Equations, Lecture 25: Particle Methods (Spring 2009)"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/ff7d4237c8f958e646cca0702e4dd17b_MIT18_336S09_lec25.pdf"
---

## Statement

Let $f\in C^2(\mathbb R^d)$ have bounded Hessian and define $S_\varepsilon f(x)=\int f(x-z)W_\varepsilon(z)\,dz$. Then for every $\varepsilon>0$ and $x\in\mathbb R^d$,

$$|S_\varepsilon f(x)-f(x)|\le \frac{m_2}{2}\varepsilon^2\|D^2f\|_\infty.$$

## Facts & Assumptions

**Given:** The kernel family, a $C^2$ function $f$ with bounded Hessian, and $\varepsilon>0$.

[F1] [[lem-scaled-kernel-moments-and-derivative-bounds]] and [[def-scaled-symmetric-compact-kernel-family]]: $\int W_\varepsilon=1$, $\int zW_\varepsilon=0$, and $\int |z|^2W_\varepsilon=\varepsilon^2m_2$; the kernel definition gives $W_\varepsilon\ge0$.

[F2] [[thm-multivariable-taylor-formula-with-lagrange-remainder]]: for a $C^2$ function along a line segment, the degree-one Taylor formula has a second-derivative remainder at an interior point of that segment.

[F3] [[thm-multidimensional-integral-properties]]: on a bounding rectangle, integration is linear and satisfies the absolute-value estimate and monotonicity.

## Proof

1.1 For each $x,z$ apply [F2] with increment $-z$. It gives $f(x-z)=f(x)-\nabla f(x)\cdot z+R(x,z)$, where $|R(x,z)|\le(1/2)\|D^2f\|_\infty|z|^2$. [given, F2]

2.1 Integrate this identity against the nonnegative $W_\varepsilon$. Linearity in [F3] and [F1] make the constant term integrate to $f(x)$ and the linear term zero. The absolute-value estimate and monotonicity in [F3], together with $W_\varepsilon\ge0$, bound the remainder by $(1/2)\|D^2f\|_\infty\int |z|^2W_\varepsilon=(m_2/2)\varepsilon^2\|D^2f\|_\infty$. [F1, F3, step 1.1] ∎
