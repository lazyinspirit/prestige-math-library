---
id: thm-na-periodic-discrete-helmholtz-projection
kind: theorem
title: "Mass-orthogonal periodic discrete Helmholtz projection and exact incompressibility"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-na-periodic-staggered-grid-stokes-operators
  - alg-na-periodic-incremental-pressure-correction
  - lem-na-periodic-grid-pressure-laplacian-zero-mode-and-poincare
proof_strategy: direct
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. L. Guermond, P. Minev, and J. Shen, An overview of projection methods for incompressible flows"
      url: "https://people.tamu.edu/~guermond/PUBLICATIONS/guermond_minev_shen_CMAME_2006.pdf"
      locator: "§§2.1–2.2 and §3.1, printed pp. 6011–6013: the Helmholtz decomposition and projection step."
    - title: "NPTEL, Lecture 5.4: Methods based on Coupling of Pressure and Velocity"
      url: "https://archive.nptel.ac.in/content/storage2/courses/112106061/Module_5/Lecture_5.4.pdf"
      locator: "§2.3.1, printed p. 45: pressure projection and exact divergence cancellation."
---

## Statement

On the grid of [[def-na-periodic-staggered-grid-stokes-operators]], let
$\Delta_h^{-1}:Q_h\to Q_h$ be the inverse from
[[lem-na-periodic-grid-pressure-laplacian-zero-mode-and-poincare]]. Define
$$ P_h:=I-G_h\Delta_h^{-1}D_h:V_h\to V_h. $$
Then $P_h$ is the mass-orthogonal projector onto
$Z_h=\ker D_h$. In the backward-Euler algorithm
[[alg-na-periodic-incremental-pressure-correction]], the velocity correction
satisfies $u^{n+1}=P_h\widetilde u^{n+1}$ and
$D_hu^{n+1}=0$ exactly.

## Facts & Assumptions

**Given:** The periodic staggered-grid spaces and operators, their mass
pairings, a mean-zero pressure solve, and the backward-Euler correction.

[F1] $(G_hq,v)_{M_h}=-(q,D_hv)_{Q_h}$, $D_hv$ is mean-zero, and
$\Delta_h$ is invertible on $Q_h$
([[lem-na-periodic-grid-pressure-laplacian-zero-mode-and-poincare]]).

[F2] The backward-Euler algorithm sets
$\Delta_h\phi^{n+1}=k^{-1}D_h\widetilde u^{n+1}$ and
$u^{n+1}=\widetilde u^{n+1}-kG_h\phi^{n+1}$
([[alg-na-periodic-incremental-pressure-correction]]).

## Proof
1.1 For any $v\in V_h$, let $q=\Delta_h^{-1}D_hv\in Q_h$, which is defined by [F1]. Then $$ D_hP_hv=D_hv-D_hG_hq=D_hv-\Delta_hq=0. $$ Thus $P_hv\in Z_h$. If $v\in Z_h$, then $D_hv=0$, so uniqueness of the mean-zero inverse gives $q=0$ and $P_hv=v$. Therefore $P_h$ is a projection with range exactly $Z_h$. [F1, algebra]

2.1 For $v\in V_h$ and $z\in Z_h$, the difference is $v-P_hv=G_h\Delta_h^{-1}D_hv$. By [F1], $$ (z,v-P_hv)_{M_h} =(z,G_h\Delta_h^{-1}D_hv)_{M_h} =-(D_hz,\Delta_h^{-1}D_hv)_{Q_h}=0. $$ Hence the residual $v-P_hv$ is mass-orthogonal to the divergence-free subspace. Together with step 1.1 this makes $P_h$ the mass-orthogonal projector onto $Z_h$. [F1, step 1.1]

3.1 In the algorithm, [F2] and uniqueness of the pressure solve give $\phi^{n+1}=k^{-1}\Delta_h^{-1}D_h\widetilde u^{n+1}$. Substitution into the velocity correction yields $$ u^{n+1}=\widetilde u^{n+1}-G_h\Delta_h^{-1}D_h\widetilde u^{n+1} =P_h\widetilde u^{n+1}. $$ Step 1.1 then gives $D_hu^{n+1}=0$. [F1, F2, step 1.1, algebra] ∎