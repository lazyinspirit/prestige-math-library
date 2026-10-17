---
id: thm-fem-control-active-set-box-quadratic-solve-sound-finite
kind: theorem
title: The exhaustive box quadratic solve returns the unique minimizer in finite time
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - alg-fem-control-active-set-box-quadratic-solve
  - thm-euclidean-semicontinuous-extreme-value-theorem
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Eduardo Casas and Fredi Tröltzsch, Error estimates for linear-quadratic elliptic control problems
      url: "https://depositonce.tu-berlin.de/bitstreams/f510d18c-727d-4bc0-b10a-e30c36bd82af/download"
      locator: "§1.1, printed pp. 3–5: box variational inequality and strict convexity of the regularized objective."
    - title: Hannes Meinlschmidt, Optimization with Partial Differential Equations, FAU lecture notes
      url: "https://hannes.meinlschmidt.eu/lecture_notes/pde_opt.pdf"
      locator: "§2, printed pp. 5–7: finite-dimensional attainment by compactness and direct minimization."
---

## Statement

For a nonempty box $[\ell,u]\subset\mathbb R^n$ and positive-definite $H$, the exact algorithm of [[alg-fem-control-active-set-box-quadratic-solve]] returns the unique minimizer of $\phi(x)=\frac12x^THx+c^Tx$ after at most $3^n$ status checks.

## Facts & Assumptions
**Given:** A finite-dimensional nonempty box, a symmetric positive-definite Hessian, and exact arithmetic for the stated algorithm.

[F1] The algorithm enumerates all status vectors and retains precisely candidates with coordinates fixed at their assigned lower or upper bounds, free coordinates strictly between their bounds, and the lower/free/upper gradient signs stated in its definition ([[alg-fem-control-active-set-box-quadratic-solve]]).

[F2] The Euclidean extreme-value theorem gives a minimizer of a continuous function on a compact box ([[thm-euclidean-semicontinuous-extreme-value-theorem]]).


[A1] The box is nonempty and all arithmetic and comparisons in the algorithm are exact.

## Proof

1.1 The box is compact and $\phi$ is continuous, so [F2] supplies a minimizer $x_*$. If $\ell_i<u_i$ and $x_{*,i}=\ell_i$, the feasible right derivative is $g_i\ge0$; if $x_{*,i}=u_i$, the feasible left derivative gives $g_i\le0$; and if $\ell_i<x_{*,i}<u_i$, both signs of perturbation are feasible, so $g_i=0$. For a fixed coordinate with $\ell_i=u_i$, assign lower status if $g_i\ge0$ and upper status if $g_i\le0$ (either if $g_i=0$). [A1, F2, given, algebra]

2.1 Assign each nonfixed coordinate of $x_*$ its lower, upper, or free status according as it is at the lower bound, at the upper bound, or strictly between them; assign fixed coordinates as in step 1.1. Every nonempty principal block $H_{FF}$ is positive definite: for $0\ne y\in\mathbb R^F$, extend $y$ by zeros to $x\in\mathbb R^n$ to get $y^TH_{FF}y=x^THx>0$. Hence $H_{FF}$ is nonsingular; if $F=\varnothing$, its system is vacuous. The free subsystem has the unique solution $x_{*,F}$ by its zero free gradient. Thus the algorithm recovers $x_*$, whose free coordinates are strictly interior by their assignment and whose gradient signs hold by step 1.1. It is retained by [F1], so the algorithm terminates within $3^n$ checks. [F1, step 1.1, given, algebra]

3.1 Let $x$ be a retained candidate and $g=Hx+c$. For any feasible $y$, the checked coordinate signs give $g_i(y_i-x_i)\ge0$ on lower-active coordinates, the same inequality on upper-active coordinates, and zero on free coordinates; hence $g^T(y-x)\ge0$. The exact expansion $\phi(y)-\phi(x)=g^T(y-x)+\tfrac12(y-x)^TH(y-x)$ is nonnegative, and is strictly positive when $y\ne x$ because $H$ is positive definite. Thus every retained candidate is the unique minimizer, so the first one returned by the algorithm is. [F1, step 2.1, given, algebra] ∎
