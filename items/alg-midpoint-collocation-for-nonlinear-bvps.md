---
id: alg-midpoint-collocation-for-nonlinear-bvps
kind: algorithm
title: "Finite-budget implicit-midpoint collocation for a nonlinear BVP"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-midpoint-collocation-residual-for-bvps, alg-finite-budget-newton-for-vector-residuals]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "T. A. Driscoll and R. J. Braun, Fundamentals of Numerical Computation, Chapter 10"
      url: "https://fncbook.com/nonlinear/"

verification:
  precheck: pending
---

## Definition

Fix a uniform mesh and the open nodal domain $D_h$ and normalized residual $G_h$ from [[def-midpoint-collocation-residual-for-bvps]]. If $f$ and $B$ are $C^1$ on the required domains (total differentiability with continuous derivative entries), then $G_h$ is a $C^1$ square map from the open subset $D_h\subseteq\mathbb R^{d(N+1)}$ into $\mathbb R^{d(N+1)}$. Given an initial node vector $Y_0\in D_h$, tolerance $\tau\ge0$, and correction budget $M\in\mathbb N_0$, apply [[alg-finite-budget-newton-for-vector-residuals]] to $G_h$ using its exact Jacobian. Return the last node vector and its root, singular-jacobian, invalid-trial, or iteration-budget-exhausted status as defined by that procedure. A root status means only that $\|G_h(Y)\|\le\tau$; it is not a branch, convergence, or error certificate.
