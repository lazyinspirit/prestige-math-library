---
id: cex-conservative-sph-can-clump-under-positive-pressure
kind: counterexample
title: "A conservative positive-pressure SPH system can close a particle gap"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps: [def-regularized-conservative-sph-system, lem-sph-pair-forces-antisymmetric-and-central, prop-sph-conserves-linear-and-angular-momentum, prop-sph-matched-internal-energy-conserves-total-energy, thm-regularized-sph-local-wellposedness]
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
generation:
  role: counterexample
---

## Statement refuted

In a conservative SPH system with positive pressure, every adjacent particle gap has nonnegative initial relative acceleration. This is false: a third-particle pressure force can close a neighboring gap even while the semidiscrete invariants remain exact.

## Facts & Assumptions

**Given:** Let d=1, N=3, m_i=1, ε>0, q_1=0, q_2=9ε/10, q_3=13ε/10, and v_i=0 initially. Use W(s)=(35/32)(1−s²)³ for |s|≤1 and zero otherwise, the smooth ideal-gas pressure map P(ρ,e)=(γ−1)ρe with γ>1, and e_i=p_0ρ_i(q)/(γ−1) initially, where p_0>0.

[F1] [[def-regularized-conservative-sph-system]]: A_i=P(ρ_i,e_i)/ρ_i² and the particle acceleration is the symmetric pressure-gradient sum.

[F2] [[lem-sph-pair-forces-antisymmetric-and-central]]: the paired pressure forces are equal-opposite and central.

[F3] [[prop-sph-conserves-linear-and-angular-momentum]]: total linear and angular momenta are constant along solutions.

[F4] [[prop-sph-matched-internal-energy-conserves-total-energy]]: H=Σ_i(|v_i|²/2+e_i) is constant along solutions for unit masses.

[F5] [[thm-regularized-sph-local-wellposedness]]: a unique local solution exists from every positive-density state.

## Counterexample

1.1 The polynomial kernel is nonnegative and even. At s=±1 its value and first two inside derivatives vanish, so extension by zero is C²; its integral is (35/32)·2(1−1+3/5−1/7)=1. Each density is positive because its self term W_ε(0)>0. The chosen internal energies give p_i=(γ−1)ρ_ie_i=p_0ρ_i²>0 and A_i=p_0 at t=0. By [F1] and [F5], a unique local solution exists; pressure positivity persists for a short interval by continuity. [F1, F5, given, algebra]

1.2 For 0<s<1, |W′(s)|=(105/16)s(1−s²)². Direct substitution gives |W′(2/5)|/|W′(9/10)|=28224/3249>2. Also |q_3−q_1|=13ε/10>ε, so the 1–3 kernel-gradient term vanishes. [given, algebra]

2.1 Let r(t)=q_2(t)−q_1(t). From [F1] and step 1.2, the accelerations at t=0 are q̈_1=−2p_0ε^(−2)|W′(9/10)| and q̈_2=2p_0ε^(−2)(|W′(9/10)|−|W′(2/5)|). Therefore r̈(0)=2p_0ε^(−2)(2|W′(9/10)|−|W′(2/5)|)<0. [F1, step 1.2, algebra]

3.1 Since ṙ(0)=0 and r̈ is continuous, ṙ(t)<0 and r(t)<r(0) for all sufficiently small t>0. Thus the adjacent gap closes initially under strictly positive pressure. [F5, step 2.1, algebra]

4.1 The exact pair antisymmetry and matched internal-energy identity apply by [F2] and [F4], so total momentum and H are conserved throughout this same local motion. The example therefore refutes the claimed gap-stability implication while retaining those invariants. [F2, F3, F4, step 1.1, step 3.1] ∎
