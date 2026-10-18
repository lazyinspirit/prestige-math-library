---
id: lem-regularized-sph-vector-field-lipschitz-on-positive-density-tube
kind: lemma
title: "Explicit local Lipschitz bound for the regularized SPH vector field"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-regularized-conservative-sph-system, lem-scaled-kernel-moments-and-derivative-bounds, thm-mean-value-inequality, thm-extreme-value-metric, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, thm-cauchy-schwarz-and-the-euclidean-norm]
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

Let K be a nonempty compact convex subset of the positive-density domain of [[def-regularized-conservative-sph-system]]. Use ||z||#=max_i{|q_i|,|v_i|,|e_i|}, M=Σ_im_i, V=sup_{z∈K}max_i|v_i|, K₁=||∇W_ε||∞, K₂=||D²W_ε||∞, and a(ρ,e)=P(ρ,e)/ρ². Define A₀=max_{z∈K,1≤i≤N}|a(ρ_i(q),e_i)|, A_ρ=max_{z∈K,1≤i≤N}|∂_ρa(ρ_i(q),e_i)|, A_e=max_{z∈K,1≤i≤N}|∂_ea(ρ_i(q),e_i)|, and A_Lip=2MK₁A_ρ+A_e. By [[thm-extreme-value-metric]], these maxima are finite and attained, since K is nonempty compact and the functions involved are continuous. Then the full state vector field F is Lipschitz on K with constant

$$L=\max\{1,\ M(2K_1A_{\mathrm{Lip}}+4A_0K_2),\ 2MVA_{\mathrm{Lip}}K_1+2MA_0K_1+4MA_0VK_2\}.$$

## Facts & Assumptions

**Given:** A nonempty compact convex positive-density tube K, the fixed finite masses, a C¹ pressure map P, and a C² kernel W_ε.

[F1] [[def-regularized-conservative-sph-system]]: ρ_i=Σ_jm_jW_ε(q_i−q_j), A_i=a(ρ_i,e_i), and the q, v and e components of F are the displayed finite sums.

[F2] [[lem-scaled-kernel-moments-and-derivative-bounds]]: ||∇W_ε||∞=K₁ and ||D²W_ε||∞=K₂ are finite for fixed ε.

[F3] [[thm-mean-value-inequality]]: a C¹ map on a line segment changes by at most the supremum derivative norm times the segment length.

[F4] [[thm-extreme-value-metric]]: continuous real-valued functions on a nonempty compact metric space are bounded and attain their maxima and minima.

[F5] [[thm-chain-rule-for-total-derivatives]]: derivatives of the density and pressure-coefficient compositions are given by the chain rule.

[F6] [[thm-algebra-of-derivatives]]: derivatives distribute over finite sums, coordinatewise.

[F7] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: Euclidean inner products satisfy Cauchy-Schwarz.

## Proof

1.1 Let z,z′∈K, δ=||z−z′||#, and z(s)=(1−s)z+sz′ for 0≤s≤1; convexity keeps this segment in K. Differentiating ρ_i(q(s)) using [F5] and the finite-sum rule [F6] gives Σ_jm_j∇W_ε(q_i(s)−q_j(s))·(q_i′−q_i−q_j′+q_j), whose absolute value is at most 2MK₁δ by [F1], [F2], and Cauchy-Schwarz [F7]. Along the same segment, A_i(s)=a(ρ_i(q(s)),e_i(s)) has derivative bounded by 2MK₁A_ρδ+A_eδ=A_Lipδ, by [F5]. The one-dimensional mean value inequality [F3] on s∈[0,1] yields |A_i−A_i′|≤A_Lipδ. [F1, F2, F3, F5, F6, F7, algebra, F4]

2.1 For the acceleration component, subtract its two finite sums. The coefficient difference contributes at most 2MA_LipK₁δ, and the kernel-gradient difference at most 4MA₀K₂δ because the triangle inequality [F7] gives |(q_i−q_j)−(q_i′−q_j′)|≤2δ and [F3] bounds the change in ∇W_ε by K₂ times its argument change. Thus |v̇_i−v̇_i′|≤M(2A_LipK₁+4A₀K₂)δ. [F1, F2, F3, F7, step 1.1, algebra]

3.1 For ė_i, the coefficient difference contributes at most 2MVA_LipK₁δ; the relative-velocity difference at most 2MA₀K₁δ by the triangle inequality [F7]; and the kernel-gradient difference at most 4MA₀VK₂δ by [F3]. Also |q̇_i−q̇_i′|≤δ. Taking the maximum of the three component bounds gives the stated L. [F1, F2, F3, F7, step 1.1, algebra] ∎
