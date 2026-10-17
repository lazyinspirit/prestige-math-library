---
id: alg-age-structured-renewal-upwind-finite-volume
kind: algorithm
title: Finite-volume upwind scheme for age renewal transport
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-age-structured-renewal-transport-problem
  - alg-age-structured-positive-birth-quadrature
  - def-uniform-grid-and-difference-operators
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Benoît Perthame, Introduction to Structured Equations in Biology, full lecture notes"
      url: "https://www.math.cmu.edu/cna/LectureNotesFiles/Perthame.pdf"
      locator: "Chapter 2, §2.3, PDF pp. 17–18: finite-volume cell masses, upwind flux, renewal inflow and finite cutoff."
    - title: "MATH 575 lecture notes, §9 Finite difference methods for the transport equation"
      url: "https://ow3.math.rutgers.edu/~falk/math575/lecture16.pdf"
      locator: "Complete five-page PDF; §9, printed pp. 56–57/PDF pp. 1–2: upwind formula, numerical domain of dependence, CFL and stability proof."
---

## Definition

For [[def-age-structured-renewal-transport-problem]], choose a finite cutoff $A>T$, an integer $J\ge1$, and use the uniform grid $a_j=j\Delta a$ with $\Delta a=A/J$ and cells $C_j=[a_{j-1},a_j]$. Given time step $\Delta t=T/N$, initial nonnegative cell masses $M_j^0$, and the values $\mu_j=\mu((a_{j-1}+a_j)/2)$, require the transport-plus-loss CFL

$$\lambda+\Delta t\,\mu_\infty\le1,\qquad \lambda=\Delta t/\Delta a,\quad\mu_\infty=\|\mu\|_\infty.$$

At time $t_k=k\Delta t$, put $u_j^k=M_j^k/\Delta a$. Compute $B_h^k$ with [[alg-age-structured-positive-birth-quadrature]] and set the upwind fluxes $F_0^k=B_h^k$ and $F_j^k=u_j^k$ for $1\le j\le J$. Update, for $1\le j\le J$,

$$M_j^{k+1}=M_j^k-\Delta t(F_j^k-F_{j-1}^k)-\Delta t\,\mu_jM_j^k.$$

The right flux $F_J^k$ is absorbing outflow: its mass $\Delta t F_J^k$ is recorded and discarded, with no inflow from ages above $A$. Invalid grids or a failed quadrature return explicit failure statuses. A `cap-reached` adaptive quadrature estimate may still be used for a finite step, but its status is retained and carries no accuracy claim.
