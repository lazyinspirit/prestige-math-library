---
id: lem-symmetric-kernel-moment-cancellation
kind: lemma
title: "Symmetry cancels the first kernel moment"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-scaled-symmetric-compact-kernel-family, cor-change-of-variables-for-compactly-supported-functions, thm-continuous-functions-on-compact-jordan-sets-are-integrable]
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

For the kernel W and its scaled family W_ε of [[def-scaled-symmetric-compact-kernel-family]], the first moment vanishes: ∫zW(z) dz=0 and ∫zW_ε(z) dz=0 for every ε>0.

## Facts & Assumptions

**Given:** The normalized radial compactly supported kernel W and ε>0.

[F1] [[def-scaled-symmetric-compact-kernel-family]]: W(−z)=W(z), W is continuous and compactly supported, and W_ε(z)=ε^(−d)W(z/ε).

[F2] [[cor-change-of-variables-for-compactly-supported-functions]]: let U⊂R^d be open and T:U→R^d be injective C¹ with invertible derivative. If f:R^d→R is compactly supported Riemann integrable with supp(f)⊂T(U), then ∫_{R^d}f(y)dy=∫_{R^d}h(x)dx, where h(x)=f(T(x))|det DT(x)| on U and h=0 outside U. Here U=R^d and the reflection and positive scaling maps are onto R^d.

[F3] [[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]: a continuous real function on a compact Jordan box is Riemann integrable there.

## Proof

1.1 For each coordinate k, g_k(z)=z_kW(z) is continuous and compactly supported by [F1], hence Riemann integrable on a bounding box by [F3]. It satisfies g_k(−z)=−g_k(z). Apply [F2] to T(z)=−z, whose determinant has absolute value one: ∫g_k(z)dz=∫g_k(−z)dz=−∫g_k(z)dz. Hence ∫z_kW(z)dz=0. [F1, F2, F3, algebra]

2.1 For each k, z_kW_ε(z) is continuous and compactly supported, so [F3] makes it integrable on a bounding box. Apply [F2] to T(u)=εu: ∫z_kW_ε(z)dz=ε∫u_kW(u)du=0 by step 1.1. This holds for every k, so both vector first moments vanish. [F1, F2, F3, step 1.1, algebra] ∎
