---
id: alg-na-periodic-incremental-pressure-correction
kind: algorithm
title: "Backward-Euler incremental pressure correction on a periodic staggered grid"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-na-periodic-staggered-grid-stokes-operators
  - lem-na-periodic-grid-pressure-laplacian-zero-mode-and-poincare
justified_by: [thm-na-periodic-pressure-correction-solves-well-defined]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. L. Guermond, P. Minev, and J. Shen, An overview of projection methods for incompressible flows"
      url: "https://people.tamu.edu/~guermond/PUBLICATIONS/guermond_minev_shen_CMAME_2006.pdf"
      locator: "§3.2, printed pp. 6013–6014: the standard incremental pressure-correction predictor and pressure increment."
    - title: "NPTEL, Lecture 5.4: Methods based on Coupling of Pressure and Velocity"
      url: "https://archive.nptel.ac.in/content/storage2/courses/112106061/Module_5/Lecture_5.4.pdf"
      locator: "§§2.3.1–2.3.3, printed pp. 45–47: the pressure projection, pressure update, and staggered grid."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Fix $d\ge1$, $N\ge2$, $h=1/N$, viscosity $\nu>0$, and time step $k>0$.
Given $u^n\in V_h$ with $D_hu^n=0$, a mean-zero
pressure $p^n\in Q_h$, and a force $f^{n+1}\in V_h$ whose components each
have zero discrete mean,
$$h^d\sum_{j\in J_N}f_{i,j}^{n+1}=0\qquad(1\le i\le d),$$
define the next step by the following two solves and update:

1. Find $\widetilde u^{n+1}\in V_h$ satisfying
$$ \frac{\widetilde u^{n+1}-u^n}{k}+\nu A_h\widetilde u^{n+1}+G_hp^n=f^{n+1}. $$

2. Find the unique $\phi^{n+1}\in Q_h$ satisfying
$$ \Delta_h\phi^{n+1}=k^{-1}D_h\widetilde u^{n+1}. $$

3. Set
$$ u^{n+1}=\widetilde u^{n+1}-kG_h\phi^{n+1},\qquad p^{n+1}=p^n+\phi^{n+1}. $$

The pressure is kept in $Q_h$ after every solve; the constant pressure mode
is set to zero. The procedure is only asserted for the periodic staggered
grid and the admissible data stated here. The separate well-definedness
theorem [[thm-na-periodic-pressure-correction-solves-well-defined]] verifies
both solves and the preserved constraints.
