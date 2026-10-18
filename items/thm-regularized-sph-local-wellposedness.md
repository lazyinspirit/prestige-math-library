---
id: thm-regularized-sph-local-wellposedness
kind: theorem
title: "Local well-posedness of the regularized finite-particle SPH system"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [def-regularized-conservative-sph-system, lem-regularized-sph-vector-field-lipschitz-on-positive-density-tube, thm-picard-lindelof-local-existence-and-uniqueness, thm-heine-borel-rn, thm-extreme-value-metric]
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

For the system of [[def-regularized-conservative-sph-system]], U={z:ρ_i(q)>0 for every i} is open and its finite-dimensional vector field F is continuous and locally Lipschitz on U. From each initial state z₀∈U there is a unique local C¹ solution.

## Facts & Assumptions

**Given:** Fixed finite N, positive masses, W∈C², P∈C¹, and an initial state with every ρ_i>0.

[F1] [[def-regularized-conservative-sph-system]]: each ρ_i is a finite sum of W_ε evaluated at position differences, and F consists of finite sums of W_ε, ∇W_ε and the smooth ratio P(ρ,e)/ρ² on the set ρ_i>0.

[F2] [[lem-regularized-sph-vector-field-lipschitz-on-positive-density-tube]]: on every compact convex positive-density tube, F has an explicit finite state-Lipschitz constant.

[F3] [[thm-picard-lindelof-local-existence-and-uniqueness]]: a continuous vector field locally Lipschitz in state on an open time-state domain has a unique local solution through every initial point.

[F4] [[thm-heine-borel-rn]]: nondegenerate closed boxes in finite-dimensional state space are compact. [[thm-extreme-value-metric]]: continuous real-valued functions on a nonempty compact metric space attain their minima.

## Proof

1.1 Each ρ_i is continuous by [F1], so U is open as the finite intersection of the inverse images of (0,∞). On U, denominators ρ_i² are nonzero, P is C¹, W_ε is C², and the finite sums defining F are continuous. [F1, algebra]

2.1 Fix z₀∈U. Since U is open, choose a nonempty nondegenerate closed box K about z₀ small enough to lie in U. It is convex and compact by [F4]. Each ρ_i is continuous and positive on K, so [F4] gives a positive minimum for each; taking the minimum over finitely many i gives a positive lower density bound on K. [F2] makes F Lipschitz there. Regard F as time-independent on R×U and apply [F3] to obtain a unique local C¹ solution. No choice principle is used. [F2, F3, F4, step 1.1, construct] ∎
