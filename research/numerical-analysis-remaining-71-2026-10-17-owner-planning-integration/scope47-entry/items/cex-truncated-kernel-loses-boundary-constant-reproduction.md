---
id: cex-truncated-kernel-loses-boundary-constant-reproduction
kind: counterexample
title: "A normalized kernel loses constant reproduction when truncated at a boundary"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-scaled-symmetric-compact-kernel-family, thm-change-of-variables-for-compact-jordan-sets, thm-continuous-functions-on-compact-jordan-sets-are-integrable]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
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
generation:
  role: counterexample
---

## Statement refuted

The claim that every normalized symmetric kernel preserves constants after truncation to a domain, even at a boundary point, is false.

## Facts & Assumptions

**Given:** In one dimension define W(s)=(35/32)(1−s²)³ for |s|≤1 and W(s)=0 otherwise, set W_ε(s)=ε^(−1)W(s/ε), take Ω=[0,∞), and define T_εf(x)=∫_0^∞f(y)W_ε(x−y)dy.

[F1] [[def-scaled-symmetric-compact-kernel-family]]: an admissible kernel is nonnegative, even, normalized and compactly supported.

[F2] [[thm-change-of-variables-for-compact-jordan-sets]]: if T is injective C¹ with invertible derivative on an open set containing compact Jordan K, then ∫_{T(K)}f(y)dy=∫_Kf(T(s))|det DT(s)|ds for Riemann-integrable f.

[F3] [[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]: a continuous real function on a compact interval is Riemann integrable.

## Counterexample

1.1 The displayed W is nonnegative, even, supported on [−1,1], and C² at ±1 because its value and first two inside derivatives vanish there. [F3] makes it integrable on [−1,1], and its integral is (35/32)·2(1−1+3/5−1/7)=1, so it satisfies [F1]. [given, F1, F3, algebra]

1.2 At x=0, evenness and support reduce T_ε1(0) to ∫_0^εW_ε(y)dy. Apply [F2] on K=[0,1] with T(s)=εs; since W_ε(εs)=ε^(−1)W(s), this equals ∫_0^1W(s)ds. By [F1], W is even and normalized, so the half-interval integral is (1/2)∫_{−1}^1W(s)ds=1/2. [F1, F2, F3, algebra]

2.1 The truncated value 1/2 differs from the constant 1, so the claimed boundary reproduction fails. [step 1.2] ∎
