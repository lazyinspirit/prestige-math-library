---
id: thm-na-periodic-pressure-correction-solves-well-defined
kind: theorem
title: "Well-definedness of the periodic pressure-correction solves"
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-na-periodic-staggered-grid-stokes-operators
  - alg-na-periodic-incremental-pressure-correction
  - alg-na-bdf2-incremental-and-rotational-pressure-correction
  - lem-na-periodic-grid-pressure-laplacian-zero-mode-and-poincare
  - thm-rank-nullity
proof_strategy: direct
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. L. Guermond, P. Minev, and J. Shen, An overview of projection methods
        for incompressible flows"
      url: "https://people.tamu.edu/~guermond/PUBLICATIONS/guermond_minev_shen_CMAME_\
        2006.pdf"
      locator: "§§3.2–3.3, printed pp. 6013–6015: standard and rotational
        pressure-correction solve structure."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

On the periodic staggered grid of
[[def-na-periodic-staggered-grid-stokes-operators]], every admissible backward-
Euler step of [[alg-na-periodic-incremental-pressure-correction]] and every
admissible BDF2 step of
[[alg-na-bdf2-incremental-and-rotational-pressure-correction]] has a unique
predictor, a unique mean-zero pressure increment, and a unique updated pair.
Both algorithms preserve the zero-mean pressure gauge and exact discrete
incompressibility.

## Facts & Assumptions

**Given:** $d\ge1$, $N\ge2$, $h=1/N$, $\nu>0$, $k>0$, admissible
mean-zero data, and either stated pressure-correction algorithm.

[F1] In the backward-Euler algorithm the predictor matrix is
$I+k\nu A_h$; in BDF2 it is $(3/(2k))I+\nu A_h$. The right-hand sides and
pressure updates are exactly those in the two algorithm definitions
([[alg-na-periodic-incremental-pressure-correction]],
[[alg-na-bdf2-incremental-and-rotational-pressure-correction]]).

[F2] The periodic componentwise Laplacian and the seminorm satisfy
$(A_hv,v)_{M_h}=h^{d-2}\sum_{i,\ell,j}|v_{i,j+e_\ell}-v_{i,j}|^2\ge0$ by finite
periodic reindexing ([[def-na-periodic-staggered-grid-stokes-operators]]).

[F3] $D_hv$ has zero mean and $\Delta_h:Q_h\to Q_h$ is bijective
([[lem-na-periodic-grid-pressure-laplacian-zero-mode-and-poincare]]).

[F4] A linear endomorphism of a finite-dimensional space with zero kernel is
invertible by rank-nullity ([[thm-rank-nullity]]); $V_h$ is finite-dimensional
because it is a finite face-array space.

## Proof
1.1 For any nonzero $v\in V_h$, the componentwise Laplacian definition and finite periodic reindexing give $$ (A_hv,v)_{M_h}=h^{d-2}\sum_{i,\ell,j}|v_{i,j+e_\ell}-v_{i,j}|^2\ge0. $$ Therefore $( (I+k\nu A_h)v,v)_{M_h}=\|v\|_{M_h}^2+k\nu(A_hv,v)_{M_h}>0$. The predictor matrix has zero kernel and is invertible by [F4], so the backward-Euler predictor has a unique solution. [given, F1, F2, F4, algebra]

2.1 Similarly, $( ((3/(2k))I+\nu A_h)v,v)_{M_h} =(3/(2k))\|v\|_{M_h}^2+\nu(A_hv,v)_{M_h}>0$. The BDF2 predictor matrix has zero kernel and is invertible by [F4], so its predictor is unique for either pressure-update branch. [given, F1, F2, F4, step 1.1, algebra]

3.1 For either predictor, summing $D_h\widetilde u$ over all cells cancels the two occurrences of each periodic face value. Hence the right-hand side of the corresponding pressure-increment equation has zero mean. By [F3], there is exactly one mean-zero $\phi^{n+1}$ solving that equation. [F1, F3, step 1.1, step 2.1]

4.1 The velocity and pressure updates are explicit after the unique predictor and pressure increment. Since $D_hG_h=\Delta_h$, the corrected divergence is $D_h\widetilde u-k\Delta_h\phi=0$ in backward Euler and $D_h\widetilde u-(2k/3)\Delta_h\phi=0$ in BDF2. The BDF2 rotational pressure correction subtracts $\nu D_h\widetilde u$, which has zero mean by compatibility; thus both pressure updates stay in $Q_h$. [F1, F2, F3, step 3.1, algebra] ∎
