---
id: def-regularized-conservative-sph-system
kind: definition
title: "Fixed-width regularized conservative SPH particle system"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-scaled-symmetric-compact-kernel-family, def-euclidean-inner-product]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: not-applicable
axiom_use: "No choice principle is used in this definition."
verification:
  precheck: n/a
sources:
  references:
    - title: "Volker Springel, Smoothed Particle Hydrodynamics in Astrophysics, Annual Review of Astronomy and Astrophysics 48 (2010), author full text"
      url: "https://arxiv.org/html/1109.2219"
    - title: "Benjamin Seibold, MIT OpenCourseWare 18.336, Numerical Methods for Partial Differential Equations, Lecture 25: Particle Methods (Spring 2009)"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/ff7d4237c8f958e646cca0702e4dd17b_MIT18_336S09_lec25.pdf"
---

## Definition

Fix d,N≥1, positive masses m_1,…,m_N, ε>0, the kernel W_ε from [[def-scaled-symmetric-compact-kernel-family]], and a pressure map P∈C¹((0,∞)×R,R). Positions q_i and velocities v_i lie in R^d with the Euclidean inner product from [[def-euclidean-inner-product]], and specific internal energies e_i lie in R. Define

$$\rho_i(q)=\sum_{j=1}^Nm_jW_\varepsilon(q_i-q_j),\qquad p_i=P(\rho_i,e_i),\qquad A_i=\frac{p_i}{\rho_i^2}.$$

The state domain is U={ (q,v,e): ρ_i(q)>0 for every i }. On U, the fixed-width semidiscrete system is

$$\dot q_i=v_i,\qquad \dot v_i=-\sum_{j=1}^Nm_j(A_i+A_j)\nabla W_\varepsilon(q_i-q_j),\qquad \dot e_i=A_i\sum_{j=1}^Nm_j(v_i-v_j)\cdot\nabla W_\varepsilon(q_i-q_j).$$

A controlled tube is a compact subset of U on which ρ_i≥ρ_*>0 for every i. The system is semidiscrete: time remains continuous while the spatial state is represented by finitely many particles. It has fixed masses and fixed ε, includes the displayed matched internal-energy equation, and contains no artificial viscosity. No continuum Euler convergence is part of this definition.
