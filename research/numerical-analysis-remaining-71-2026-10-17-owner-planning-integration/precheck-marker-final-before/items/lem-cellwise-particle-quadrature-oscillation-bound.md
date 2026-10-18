---
id: lem-cellwise-particle-quadrature-oscillation-bound
kind: lemma
title: "Cellwise oscillation bound for particle quadrature"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-meshfree-cell-quadrature-and-fill-radius]
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

Let g be compactly supported and Lipschitz with constant L_g, meaning |g(y)−g(x)|≤L_g|y−x|, and use the cells and nodes of [[def-meshfree-cell-quadrature-and-fill-radius]]. Define osc_C(g)=sup_{y,z∈C}|g(y)−g(z)| and let J_g={j:C_j∩supp(g)≠∅}. Then

$$\left|\int_\Omega g(y)dy-Q_hg\right|\le\sum_{j\in J_g}V_j\operatorname{osc}_{C_j}(g)\le 2hL_g\sum_{j\in J_g}V_j.$$

## Facts & Assumptions

**Given:** A compactly supported Lipschitz g and a cell particle rule.

[F1] [[def-meshfree-cell-quadrature-and-fill-radius]]: only finitely many cells meet supp(g), their integrals sum to ∫_Ωg, V_j=∫1_{C_j}, and |y−x_j|≤h on C_j.

## Proof

1.1 By the integration-compatible partition in [F1], subtracting Q_hg cell by cell gives ∫_Ωg−Q_hg=Σ_{j∈J_g}∫_{C_j}(g(y)−g(x_j))dy. Taking absolute values and bounding each integrand by osc_{C_j}(g) proves the first inequality. [F1, algebra]

2.1 For y,z∈C_j, [F1] gives |y−x_j|≤h and |z−x_j|≤h, so |y−z|≤2h. Hence |g(y)−g(z)|≤2hL_g and osc_{C_j}(g)≤2hL_g. Substituting this bound in step 1.1 proves the second inequality. [F1, step 1.1, algebra] ∎
