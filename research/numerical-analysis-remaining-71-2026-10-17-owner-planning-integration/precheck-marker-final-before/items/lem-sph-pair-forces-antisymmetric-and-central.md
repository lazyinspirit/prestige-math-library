---
id: lem-sph-pair-forces-antisymmetric-and-central
kind: lemma
title: "SPH pressure forces are equal-opposite and central"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps: [def-regularized-conservative-sph-system, def-scaled-symmetric-compact-kernel-family]
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

For the system in [[def-regularized-conservative-sph-system]], set g_ij=∇W_ε(q_i−q_j) and define the force contribution F_ij=−m_im_j(A_i+A_j)g_ij. Radial evenness gives g_ji=−g_ij and g_ii=0, so for i≠j, F_ji=−F_ij; also F_ij is parallel to q_i−q_j (the zero vector is allowed).

## Facts & Assumptions

**Given:** A state in the positive-density domain, positive masses, and a radial C² kernel.

[F1] [[def-regularized-conservative-sph-system]]: A_i=p_i/ρ_i² and the acceleration sum is −Σ_jm_j(A_i+A_j)∇W_ε(q_i−q_j).

[F2] [[def-scaled-symmetric-compact-kernel-family]]: W_ε is differentiable and radial, hence even.

## Proof

1.1 Since W_ε(−r)=W_ε(r), differentiating the identity in r gives ∇W_ε(−r)=−∇W_ε(r). The scalar coefficient m_im_j(A_i+A_j) is symmetric in i,j, so F_ji=−F_ij. [F1, F2, algebra]

2.1 If r≠0 and u·r=0, then |r+tu|²=|r|²+t²|u|², so the derivative at t=0 of W_ε(r+tu), which is w_ε(|r+tu|), is zero. Thus ∇W_ε(r) is orthogonal to every u orthogonal to r and lies in span(r). At r=0, differentiable evenness gives ∇W_ε(0)=0. Hence each F_ij is central. [F2, algebra] ∎
