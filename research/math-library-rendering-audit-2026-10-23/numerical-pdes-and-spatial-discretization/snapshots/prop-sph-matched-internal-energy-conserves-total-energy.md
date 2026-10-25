---
id: prop-sph-matched-internal-energy-conserves-total-energy
kind: proposition
title: "The matched internal-energy equation conserves total semidiscrete energy"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-regularized-conservative-sph-system, lem-sph-pair-forces-antisymmetric-and-central, thm-algebra-of-derivatives, thm-mean-value-inequality]
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

Every C¹ solution of [[def-regularized-conservative-sph-system]] conserves H=Σ_im_i(|v_i|²/2+e_i). The identity uses exactly the displayed matched internal-energy equation.

## Facts & Assumptions

**Given:** A C¹ trajectory solving the fixed-width system, with A_i=p_i/ρ_i² and g_ij=∇W_ε(q_i−q_j).

[F1] [[def-regularized-conservative-sph-system]]: v̇_i=−Σ_jm_j(A_i+A_j)g_ij and ė_i=A_iΣ_jm_j(v_i−v_j)·g_ij.

[F2] [[lem-sph-pair-forces-antisymmetric-and-central]]: g_ji=−g_ij. The coefficient A_i+A_j is symmetric by commutativity of addition.

[F3] [[thm-algebra-of-derivatives]]: finite sums and coordinatewise products of differentiable scalar functions are differentiated by the sum and product rules.

[F4] [[thm-mean-value-inequality]]: a differentiable scalar function with derivative zero on an interval is constant there.

## Proof

1.1 Differentiate K=Σ_im_i|v_i|²/2 using [F3] coordinatewise and substitute [F1]. Pairing the (i,j) and (j,i) terms using [F2] yields K̇=−Σ_{i<j}m_im_j(A_i+A_j)(v_i−v_j)·g_ij. [F1, F2, F3, algebra]

1.2 Differentiate U=Σ_im_ie_i using [F3] and substitute [F1]. The (i,j) term is m_im_jA_i(v_i−v_j)·g_ij, while the (j,i) term equals m_im_jA_j(v_i−v_j)·g_ij by [F2]. Hence U̇=Σ_{i<j}m_im_j(A_i+A_j)(v_i−v_j)·g_ij. [F1, F2, F3, algebra]

2.1 Steps 1.1 and 1.2 cancel term by term, so Ḣ=K̇+U̇=0. Applying [F4] with derivative bound M=0 on any closed subinterval shows H is constant on each solution interval. [F4, step 1.1, step 1.2, algebra] ∎
