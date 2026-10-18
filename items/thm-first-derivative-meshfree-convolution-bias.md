---
id: thm-first-derivative-meshfree-convolution-bias
kind: theorem
title: "Second-order bias for the kernel particle gradient"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-scaled-symmetric-compact-kernel-family, lem-scaled-kernel-moments-and-derivative-bounds, lem-compact-kernel-derivative-moment-identities, thm-multivariable-taylor-formula-with-lagrange-remainder, cor-change-of-variables-for-compactly-supported-functions, thm-continuous-functions-on-compact-jordan-sets-are-integrable, thm-multidimensional-integral-properties, thm-cauchy-schwarz-and-the-euclidean-norm]
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

Let f∈C³(R^d) have bounded third derivative and define D_εf(x)=∫f(y)∇W_ε(x−y)dy. Then for every ε>0 and x∈R^d,

$$|D_\varepsilon f(x)-\nabla f(x)|\le \frac{m_3}{6}\varepsilon^2\|D^3f\|_\infty,$$

where ||D³f||∞ is the supremum of the operator norm of the trilinear derivative.

## Facts & Assumptions

**Given:** The kernel W, ε>0, and f∈C³ with bounded third derivative.

[F1] [[lem-scaled-kernel-moments-and-derivative-bounds]]: W_ε(z)=ε^(−d)W(z/ε), so ∇W_ε(z)=ε^(−d−1)∇W(z/ε).

[F2] [[lem-compact-kernel-derivative-moment-identities]]: ∫∇W=0, ∫z_j∂_kW=−δ_jk, ∫z_jz_l∂_kW=0, and ∫|z|³|∇W|=m₃.

[F3] [[thm-multivariable-taylor-formula-with-lagrange-remainder]]: a C³ function has a degree-two Taylor expansion on each line segment with the third derivative remainder at an interior point.

[F4] [[cor-change-of-variables-for-compactly-supported-functions]]: let U⊂R^d be open and T:U→R^d be injective C¹ with invertible derivative. If g:R^d→R is compactly supported Riemann integrable with supp(g)⊂T(U), then ∫_{R^d}g(y)dy=∫_{R^d}h(u)du, where h(u)=g(T(u))|det DT(u)| on U and h=0 outside U. Apply this scalar identity componentwise to the compactly supported vector integrand, with U=R^d and the onto map T(u)=x−εu.

[F5] [[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]: a continuous real integrand on a compact Jordan box is Riemann integrable.

[F6] [[thm-multidimensional-integral-properties]]: on a bounding rectangle, integration is linear and monotone.

[F7] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: the Euclidean inner product satisfies Cauchy-Schwarz and the Euclidean norm satisfies its norm axioms.

## Proof

1.1 The scalar components of f(y)∇W_ε(x−y) are continuous and compactly supported, so [F5] makes them Riemann integrable on a bounding box. Apply [F4] with y=x−εu, whose absolute Jacobian determinant is ε^d, and use [F1] to obtain D_εf(x)=ε^(−1)∫f(x−εu)∇W(u)du. [F1, F4, F5]

1.2 For each x,u, [F3] gives f(x−εu)=f(x)−ε∇f(x)·u+(ε²/2)D²f(x)[u,u]+R(x,u), with |R(x,u)|≤(ε³/6)||D³f||∞|u|³. [given, F3]

2.1 Integrate the expansion of step 1.2 against ε^(−1)∇W(u). Linearity [F6] and [F2] make the constant and quadratic terms vanish; the linear term in coordinate k equals −Σ_j∂_jf(x)∫u_j∂_kW(u)du=∂_kf(x). Thus the integrated polynomial part is ∇f(x). [F2, F6, step 1.2, algebra]

3.1 Put G(u)=R(x,u)∇W(u), a continuous compactly supported vector function, and v=∫G componentwise. If v≠0 set a=v/||v||₂; then ||a||₂=1 and ||v||₂=∫⟨a,G(u)⟩≤∫|⟨a,G(u)⟩|≤∫||G(u)||₂ by linearity, monotonicity, and [F7]. If v=0 the same upper bound is immediate. The pointwise remainder estimate in step 1.2 and [F2] therefore give ||v||₂≤(ε³/6)||D³f||∞∫|u|³|∇W(u)|du=(ε³m₃/6)||D³f||∞. Multiplication by ε^(−1) from step 1.1 proves the stated bound. [F2, F5, F6, F7, step 1.1, step 1.2, algebra] ∎

