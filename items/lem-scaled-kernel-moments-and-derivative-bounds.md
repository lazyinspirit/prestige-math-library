---
id: lem-scaled-kernel-moments-and-derivative-bounds
kind: lemma
title: "Scaling identities for kernel moments and derivatives"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-scaled-symmetric-compact-kernel-family, lem-symmetric-kernel-moment-cancellation, cor-change-of-variables-for-compactly-supported-functions, thm-continuous-functions-on-compact-jordan-sets-are-integrable, thm-chain-rule-for-total-derivatives]
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

For the scaled kernels of [[def-scaled-symmetric-compact-kernel-family]] and every ε>0, supp W_ε⊂\overline B(0,Rε), ∫W_ε=1, ∫zW_ε(z)dz=0, and ∫|z|²W_ε(z)dz=ε²m₂. Pointwise, ∇W_ε(z)=ε^(−d−1)∇W(z/ε) and D²W_ε(z)=ε^(−d−2)D²W(z/ε); consequently their sup norms equal ε^(−d−1)M₁ and ε^(−d−2)M₂.

## Facts & Assumptions

**Given:** The admissible kernel W and a scale ε>0.

[F1] [[def-scaled-symmetric-compact-kernel-family]]: W_ε(z)=ε^(−d)W(z/ε), supp W⊂\overline B(0,R), and the constants M₁, M₂, m₂ are finite.

[F2] [[lem-symmetric-kernel-moment-cancellation]]: ∫zW(z)dz=0.

[F3] [[cor-change-of-variables-for-compactly-supported-functions]]: let U⊂R^d be open and T:U→R^d be injective C¹ with invertible derivative. If f:R^d→R is compactly supported Riemann integrable with supp(f)⊂T(U), then ∫_{R^d}f(y)dy=∫_{R^d}h(x)dx, where h(x)=f(T(x))|det DT(x)| on U and h=0 outside U. Here U=R^d and T(u)=εu is onto R^d for ε>0.

[F4] [[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]: continuous real integrands on compact Jordan boxes are Riemann integrable.

[F5] [[thm-chain-rule-for-total-derivatives]]: derivatives of compositions with the affine scaling map are given by the chain rule.

## Proof

1.1 If W_ε(z)≠0 then z/ε∈supp W, so |z|≤Rε. The chain rule in [F5] applied to ε^(−d)W(z/ε) gives the displayed pointwise first and second derivative formulas; taking suprema and substituting u=z/ε gives the claimed derivative sup norms. [F1, F5, algebra]

2.1 The functions W_ε, zW_ε, and |z|²W_ε are continuous and compactly supported, hence integrable on a bounding box by [F4]. In the integrals, the affine substitution z=εu has Jacobian determinant ε^d. Thus ∫W_ε=∫W=1, ∫zW_ε(z)dz=ε∫uW(u)du=0 by [F2], and ∫|z|²W_ε(z)dz=ε²∫|u|²W(u)du=ε²m₂. [F1, F2, F3, F4] ∎
