---
id: lem-regularized-sph-vector-field-lipschitz-on-positive-density-tube
kind: lemma
title: "Explicit local Lipschitz bound for the regularized SPH vector field"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-regularized-conservative-sph-system, lem-scaled-kernel-moments-and-derivative-bounds, thm-mean-value-inequality]
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

Let K be a compact convex subset of the positive-density domain of [[def-regularized-conservative-sph-system]]. Use ||z||#=max_i{|q_i|,|v_i|,|e_i|}, M=Σ_im_i, V=sup_{z∈K}max_i|v_i|, K₁=||∇W_ε||∞, K₂=||D²W_ε||∞, and a(ρ,e)=P(ρ,e)/ρ². Define A₀=max_{z∈K,,i}|a(ρ_i(q),e_i)|, A_ρ=max_{z∈K,,i}|∂_ρa(ρ_i(q),e_i)|, A_e=max_{z∈K,,i}|∂_ea(ρ_i(q),e_i)|, and A₁=2MK₁A_ρ+A_e. These maxima are finite by compactness, positivity of the densities, and continuity. Then the full state vector field F is Lipschitz on K with constant

$$L=\max\{1,\ M(2K_1A_1+4A_0K_2),\ 2MVA_1K_1+2MA_0K_1+4MA_0VK_2\}.$$

## Facts & Assumptions

**Given:** A compact convex positive-density tube K, the fixed finite masses, a C¹ pressure map P, and a C² kernel W_ε.

[F1] [[def-regularized-conservative-sph-system]]: ρ_i=Σ_jm_jW_ε(q_i−q_j), A_i=a(ρ_i,e_i), and the q, v and e components of F are the displayed finite sums.

[F2] [[lem-scaled-kernel-moments-and-derivative-bounds]]: ||∇W_ε||∞=K₁ and ||D²W_ε||∞=K₂ are finite for fixed ε.

[F3] [[thm-mean-value-inequality]]: a C¹ map on a line segment changes by at most the supremum derivative norm times the segment length.

## Proof

1.1 Let z,z′∈K, δ=||z−z′||#, and z(s)=(1−s)z+sz′ for 0≤s≤1; convexity keeps this segment in K. Differentiating ρ_i(q(s)) gives Σ_jm_j∇W_ε(q_i(s)−q_j(s))·(q_i′−q_i−q_j′+q_j), whose absolute value is at most 2MK₁δ by [F1] and [F2]. Along the same segment, A_i(s)=a(ρ_i(q(s)),e_i(s)) has derivative bounded by 2MK₁A_ρδ+A_eδ=A₁δ, by the chain rule and [F3]. The one-dimensional mean value inequality on s∈[0,1] yields |A_i−A_i′|≤A₁δ. [F1, F2, F3, algebra]

2.1 For the acceleration component, subtract its two finite sums. The coefficient difference contributes at most 2MA₁K₁δ, and the kernel-gradient difference at most 4MA₀K₂δ because |(q_i−q_j)−(q_i′−q_j′)|≤2δ. Thus |v̇_i−v̇_i′|≤M(2A₁K₁+4A₀K₂)δ. [F1, F2, step 1.1, algebra]

3.1 For ė_i, the coefficient difference contributes at most 2MVA₁K₁δ; the relative-velocity difference at most 2MA₀K₁δ; and the kernel-gradient difference at most 4MA₀VK₂δ. Also |q̇_i−q̇_i′|≤δ. Taking the maximum of the three component bounds gives the stated L. [F1, F2, step 1.1, algebra] ∎
