---
id: alg-na-bdf2-incremental-and-rotational-pressure-correction
kind: algorithm
title: "BDF2 standard and rotational incremental pressure-correction variants"
status: published
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
      locator: "§§3.2–3.3, printed pp. 6013–6015: standard BDF2 incremental and rotational incremental pressure-correction formulas."
    - title: "NPTEL, Lecture 5.4: Methods based on Coupling of Pressure and Velocity"
      url: "https://archive.nptel.ac.in/content/storage2/courses/112106061/Module_5/Lecture_5.4.pdf"
      locator: "PDF pp. 5–10 (slides 5–10), equations (5.4.4)–(5.4.10): fractional-step projection, staggered cell/face placement, and centred differences; local estimates are proved here."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Fix $d\ge1$, $N\ge2$, $h=1/N$, $\nu>0$, $k>0$, and a step $n\ge1$. Supply
$u^{n-1},u^n\in V_h$ with zero discrete divergence, a mean-zero
$p^n\in Q_h$, and $f^{n+1}\in V_h$ whose components each have zero discrete
mean,
$$h^d\sum_{j\in J_N}f_{i,j}^{n+1}=0\qquad(1\le i\le d).$$
Compute a predictor
$\widetilde u^{n+1}\in V_h$ from
$$ \frac{3\widetilde u^{n+1}-4u^n+u^{n-1}}{2k} +\nu A_h\widetilde u^{n+1}+G_hp^n=f^{n+1}, $$
then solve for the unique mean-zero $\phi^{n+1}\in Q_h$ from
$$ \Delta_h\phi^{n+1}=\frac{3}{2k}D_h\widetilde u^{n+1}. $$
Set $u^{n+1}=\widetilde u^{n+1}-(2k/3)G_h\phi^{n+1}$. Choose exactly one
pressure update:

- **Standard incremental:** $p^{n+1}=p^n+\phi^{n+1}$.
- **Rotational incremental:** $p^{n+1}=p^n+\phi^{n+1}-\nu D_h\widetilde u^{n+1}$.

In both branches the pressure is gauged in $Q_h$. Initial values $u^0,u^1,p^1$
are supplied by the caller; no initialization accuracy, stability, or
convergence rate is asserted here. The separate well-definedness theorem
[[thm-na-periodic-pressure-correction-solves-well-defined]] verifies the
predictor and pressure solves for either branch.
