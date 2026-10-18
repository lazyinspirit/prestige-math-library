---
id: cex-na-centered-hjb-update-is-not-monotone
kind: counterexample
title: A centered HJB update can fail monotonicity
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: [def-na-periodic-grid-and-tensor-multilinear-interpolation, def-na-first-order-hjb-cauchy-problem, alg-na-upwind-hjb-grid-step]
justified_by: []
aliases: []
dependency_level: 4
proof_strategy: direct
axiom_base: All computations are on a finite periodic grid; no choice principle is used.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Hung Vinh Tran, Hamilton–Jacobi Equations: Theory and Applications, 2020 author manuscript"
      url: https://people.math.wisc.edu/~htran24/HJ-equations-Tran-AMS.pdf
      locator: "Chapter 3 §4, monotone finite-difference schemes and the role of positive stencil weights, printed pp. 100–103."
    - title: "Endre Süli, B6.1 Numerical Solution of Partial Differential Equations"
      url: https://people.maths.ox.ac.uk/suli/nspdes.pdf
      locator: "§§6.5–6.6, centered versus upwind treatment of advection stencils, PDF pp. 97–104."
verification:
  precheck: pass
---

## Statement

On a periodic one-dimensional grid with $N\ge3$, $h=1/N$, and controls
$A=\{-1,1\}$, replace the upwind derivative in the HJB equation
$u_t=\min_{a\in A}a u_x$ by the centered derivative and define
$$S_c(V)_i=V_i+\tau\min_{a\in\{-1,1\}} a\frac{V_{i+1}-V_{i-1}}{2h}.$$
This map is not order-preserving: there are arrays $U\le V$ with
$S_c(U)_i>S_c(V)_i$.

## Facts & Assumptions

**Given:** The central update above, a periodic grid with $N\ge3$, and
positive $\tau,h$.

[F1] For the HJB sign convention, the controlled update is a minimum of the
action rows $V_i+\tau a D V_i$ ([[def-na-first-order-hjb-cauchy-problem]]).

[F2] The monotone upwind alternative uses nonnegative row weights under its
CFL condition ([[alg-na-upwind-hjb-grid-step]]).

## Proof

1.1 Fix a node $i$. Let $U_j=0$ for every index and let $V_{i-1}=1$ with all other entries zero. Since $N\ge3$, the two neighbors are distinct; hence $U\le V$, while $$S_c(U)_i=0,\qquad \frac{V_{i+1}-V_{i-1}}{2h}=-\frac1{2h},\qquad S_c(V)_i=0+\tau\min\left\{-\frac1{2h},\frac1{2h}\right\} =-\frac{\tau}{2h}<0.$$ Thus $S_c(U)_i>S_c(V)_i$ despite $U\le V$, which disproves monotonicity. [F1, given, algebra]

2.1 For the same arrays, if $0<\tau/h\le1$, the upwind update at $i$ has the unchanged zero row for action $a=1$ and a nonnegative row value $\tau/h$ for action $a=-1$, so its action minimum is zero. This finite contrast is consistent with the nonnegative CFL weights in [F2]. [F2, step 1.1, algebra] ∎