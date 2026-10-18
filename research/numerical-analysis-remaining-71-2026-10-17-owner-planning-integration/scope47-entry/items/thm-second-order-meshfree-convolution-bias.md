---
id: thm-second-order-meshfree-convolution-bias
kind: theorem
title: "Second-order convolution bias for an interior C² field"
status: draft
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
sources:
  references:
    - title: "Volker Springel, Smoothed Particle Hydrodynamics in Astrophysics, Annual Review of Astronomy and Astrophysics 48 (2010), author full text"
      url: "https://arxiv.org/html/1109.2219"
    - title: "Benjamin Seibold, MIT OpenCourseWare 18.336, Numerical Methods for Partial Differential Equations, Lecture 25: Particle Methods (Spring 2009)"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/ff7d4237c8f958e646cca0702e4dd17b_MIT18_336S09_lec25.pdf"
---

## Statement

Let f∈C²(R^d) have bounded Hessian and define S_εf(x)=∫f(x−z)W_ε(z)dz. Then for every ε>0 and x∈R^d,

$$|S_\varepsilon f(x)-f(x)|\le \frac{m_2}{2}\varepsilon^2\|D^2f\|_\infty.$$

## Facts & Assumptions

**Given:** The kernel family, a C² function f with bounded Hessian, and ε>0.

[F1] [[lem-scaled-kernel-moments-and-derivative-bounds]] and [[def-scaled-symmetric-compact-kernel-family]]: ∫W_ε=1, ∫zW_ε=0, and ∫|z|²W_ε=ε²m₂; the kernel definition gives W_ε≥0.

[F2] [[thm-multivariable-taylor-formula-with-lagrange-remainder]]: for a C² function along a line segment, the degree-one Taylor formula has a second-derivative remainder at an interior point of that segment.

[F3] [[thm-multidimensional-integral-properties]]: on a bounding rectangle, integration is linear and satisfies the absolute-value estimate and monotonicity.

## Proof

1.1 For each x,z apply [F2] with increment −z. It gives f(x−z)=f(x)−∇f(x)·z+R(x,z), where |R(x,z)|≤(1/2)||D²f||∞|z|². [given, F2]

2.1 Integrate this identity against the nonnegative W_ε. Linearity in [F3] and [F1] make the constant term integrate to f(x) and the linear term zero. The absolute-value estimate and monotonicity in [F3], together with W_ε≥0, bound the remainder by (1/2)||D²f||∞∫|z|²W_ε=(m₂/2)ε²||D²f||∞. [F1, F3, step 1.1] ∎
