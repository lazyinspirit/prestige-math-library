---
id: ex-two-particle-sph-force-pair
kind: example
title: "Two SPH particles receive equal and opposite pressure forces"
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
  role: example
---

## Example

For N=2 in [[def-regularized-conservative-sph-system]], write F_12 for the contribution of particle 2 to m_1v̇_1 and F_21 for the contribution of particle 1 to m_2v̇_2. These pair contributions are equal and opposite and act along the particle separation line.

## Facts & Assumptions

**Given:** Two positions q_1,q_2 in R^d with positive masses and positive SPH densities.

[F1] [[def-regularized-conservative-sph-system]]: F_12=−m_1m_2(A_1+A_2)∇W_ε(q_1−q_2).

[F2] [[lem-sph-pair-forces-antisymmetric-and-central]]: F_21=−F_12 and F_12 is parallel to q_1−q_2.

## Verification

1.1 The two-particle acceleration equations contain precisely F_12 in the first momentum equation and F_21 in the second, by [F1]. [F1, given]

2.1 Applying [F2] gives F_12+F_21=0 and makes each force a scalar multiple of q_1−q_2; hence the pair exerts no net force or torque. [F2, step 1.1] ∎
