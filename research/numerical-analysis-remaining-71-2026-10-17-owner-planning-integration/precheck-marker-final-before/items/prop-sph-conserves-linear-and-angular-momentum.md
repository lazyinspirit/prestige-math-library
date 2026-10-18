---
id: prop-sph-conserves-linear-and-angular-momentum
kind: proposition
title: "Linear and angular momentum are conserved by semidiscrete SPH"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-regularized-conservative-sph-system, lem-sph-pair-forces-antisymmetric-and-central]
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

Every C¹ solution of [[def-regularized-conservative-sph-system]] conserves total linear momentum P=Σ_im_iv_i and the antisymmetric angular-momentum tensor J=Σ_im_i(q_i⊗v_i−v_i⊗q_i), where (a⊗b)_kl=a_kb_l.

## Facts & Assumptions

**Given:** A C¹ trajectory solving the fixed-width SPH system.

[F1] [[def-regularized-conservative-sph-system]]: q̇_i=v_i and v̇_i=−Σ_jm_j(A_i+A_j)∇W_ε(q_i−q_j).

[F2] [[lem-sph-pair-forces-antisymmetric-and-central]]: F_ij=−m_im_j(A_i+A_j)∇W_ε(q_i−q_j); F_ji=−F_ij, F_ij is parallel to q_i−q_j, and ∇W_ε(0)=0.

## Proof

1.1 Differentiate P. The self terms vanish because ∇W_ε(0)=0 by [F2], and grouping the remaining terms by unordered pairs gives Ṗ=Σ_{i<j}(F_ij+F_ji)=0. [F1, F2, algebra]

2.1 Differentiate J; the terms v_i⊗v_i cancel, leaving Σ_i(q_i⊗m_iq̈_i−m_iq̈_i⊗q_i). Grouping each pair gives (q_i−q_j)⊗F_ij−F_ij⊗(q_i−q_j)=0 because [F2] makes F_ij parallel to q_i−q_j. Thus J̇=0, proving both invariants. [F1, F2, algebra] ∎
