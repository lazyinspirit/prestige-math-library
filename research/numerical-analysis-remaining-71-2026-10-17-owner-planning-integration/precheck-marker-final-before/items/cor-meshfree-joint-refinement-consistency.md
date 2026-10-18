---
id: cor-meshfree-joint-refinement-consistency
kind: corollary
title: "Joint fill-distance and kernel-width refinement for value and derivative consistency"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [def-meshfree-cell-quadrature-and-fill-radius, thm-second-order-meshfree-convolution-bias, thm-first-derivative-meshfree-convolution-bias, thm-meshfree-particle-kernel-quadrature-error]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
axiom_use: "No choice principle is used."
verification:
  precheck: pending
sources:
  references:
    - title: "Volker Springel, Smoothed Particle Hydrodynamics in Astrophysics, Annual Review of Astronomy and Astrophysics 48 (2010), author full text"
      url: "https://arxiv.org/html/1109.2219"
    - title: "Benjamin Seibold, MIT OpenCourseWare 18.336, Numerical Methods for Partial Differential Equations, Lecture 25: Particle Methods (Spring 2009)"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/ff7d4237c8f958e646cca0702e4dd17b_MIT18_336S09_lec25.pdf"
---

## Statement

Assume the hypotheses of [[thm-meshfree-particle-kernel-quadrature-error]] and let f∈C³(R^d) have bounded derivatives. There are constants C₀,C₁, independent of ε,h and the interior point x, such that

$$|Q^0_{\varepsilon,h}f(x)-f(x)|\le C_0\varepsilon^2\|D^2f\|_\infty+C_1h\bigl(\|\nabla f\|_\infty+\varepsilon^{-1}\|f\|_\infty\bigr),$$

$$|Q^1_{\varepsilon,h}f(x)-\nabla f(x)|\le C_0\varepsilon^2\|D^3f\|_\infty+C_1h\bigl(\varepsilon^{-1}\|\nabla f\|_\infty+\varepsilon^{-2}\|f\|_\infty\bigr).$$

Thus ε→0 and h/ε²→0 suffice for both value and derivative errors to vanish uniformly at interior points. Constants depend only on the fixed kernel, dimension, and cell regularity.

## Facts & Assumptions

**Given:** An admissible kernel, a cell rule with the fill-radius and local-volume bounds of [[def-meshfree-cell-quadrature-and-fill-radius]], h≤ε≤1, an interior point, and f∈C³ with bounded f and derivatives through order three.

[F1] [[thm-second-order-meshfree-convolution-bias]]: |S_εf−f|≤(m₂/2)ε²||D²f||∞.

[F2] [[thm-first-derivative-meshfree-convolution-bias]]: |D_εf−∇f|≤(m₃/6)ε²||D³f||∞.

[F3] [[thm-meshfree-particle-kernel-quadrature-error]]: the value and derivative quadrature errors are bounded by the two displayed h-terms.

## Proof

1.1 Add and subtract S_εf(x): |Q⁰_{ε,h}f−f|≤|Q⁰_{ε,h}f−S_εf|+|S_εf−f|. Apply [F1] and the first bound in [F3] to obtain the first inequality after increasing constants. [F1, F3, algebra]

1.2 Add and subtract D_εf(x): |Q¹_{ε,h}f−∇f|≤|Q¹_{ε,h}f−D_εf|+|D_εf−∇f|. Apply [F2] and the second bound in [F3] to obtain the second inequality. [F2, F3, algebra]

2.1 If ε→0 and h/ε²→0, then ε²→0, h/ε²→0, and h/ε≤h/ε² because ε≤1. Every term on the right sides of steps 1.1 and 1.2 therefore tends to zero uniformly at the stated interior points. [step 1.1, step 1.2, given, algebra] ∎
