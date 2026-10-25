---
id: thm-na-periodic-discrete-helmholtz-projection
kind: theorem
title: "Mass-orthogonal periodic discrete Helmholtz projection and exact
  incompressibility"
status: published
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
    - title: "J. L. Guermond, P. Minev, and J. Shen, An overview of projection methods
        for incompressible flows"
      url: "https://people.tamu.edu/~guermond/PUBLICATIONS/guermond_minev_shen_CMAME_\
        2006.pdf"
      locator: "§§2.1–2.2 and §3.1, printed pp. 6011–6013: the Helmholtz decomposition
        and projection step."
    - title: "NPTEL, Lecture 5.4: Methods based on Coupling of Pressure and Velocity"
      url: "https://archive.nptel.ac.in/content/storage2/courses/112106061/Module_5/L\
        ecture_5.4.pdf"
      locator: "§2.3.1, printed p. 45: pressure projection and exact divergence
        cancellation."
verification:
  precheck: pass
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

[F1] $D_hv$ is mean-zero, and
$\Delta_h$ is invertible on $Q_h$
([[lem-na-periodic-grid-pressure-laplacian-zero-mode-and-poincare]]).

[F2] The backward-Euler algorithm sets
$\Delta_h\phi^{n+1}=k^{-1}D_h\widetilde u^{n+1}$ and
$u^{n+1}=\widetilde u^{n+1}-kG_h\phi^{n+1}$
([[alg-na-periodic-incremental-pressure-correction]]).

[F3] The forward gradient, backward divergence, and mass pairings are the explicit finite-array formulas in [[def-na-periodic-staggered-grid-stokes-operators]].

## Proof
1.1 For any $v\in V_h$, let $q=\Delta_h^{-1}D_hv\in Q_h$, which is defined by [F1]. Then $$ D_hP_hv=D_hv-D_hG_hq=D_hv-\Delta_hq=0. $$ Thus $P_hv\in Z_h$. If $v\in Z_h$, then $D_hv=0$, so uniqueness of the mean-zero inverse gives $q=0$ and $P_hv=v$. Therefore $P_h$ is a projection with range exactly $Z_h$. [F1, algebra]

2.1 For $v\in V_h$ and $z\in Z_h$, put $q=\Delta_h^{-1}D_hv\in Q_h$, so $v-P_hv=G_hq$. Reindexing the periodic sums in [F3] gives $$ (z,v-P_hv)_{M_h}=h^{d-1}\sum_{i,j}z_{i,j}(q_{j+e_i}-q_j)=-h^{d-1}\sum_jq_j\sum_i(z_{i,j}-z_{i,j-e_i})=-(q,D_hz)_{Q_h}=0. $$ Hence the residual $v-P_hv$ is mass-orthogonal to the divergence-free subspace. Together with step 1.1 this makes $P_h$ the mass-orthogonal projector onto $Z_h$. [F1, F3, step 1.1, algebra]

3.1 In the algorithm, [F2] and uniqueness of the pressure solve give $\phi^{n+1}=k^{-1}\Delta_h^{-1}D_h\widetilde u^{n+1}$. Substitution into the velocity correction yields $$ u^{n+1}=\widetilde u^{n+1}-G_h\Delta_h^{-1}D_h\widetilde u^{n+1} =P_h\widetilde u^{n+1}. $$ Step 1.1 then gives $D_hu^{n+1}=0$. [F1, F2, step 1.1, algebra] ∎
