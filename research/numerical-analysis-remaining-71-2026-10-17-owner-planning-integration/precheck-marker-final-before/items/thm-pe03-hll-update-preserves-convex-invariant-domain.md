---
id: thm-pe03-hll-update-preserves-convex-invariant-domain
kind: theorem
title: First-order HLL update preserves a convex invariant domain under admissible fan averages
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps: [def-pe03-convex-invariant-domain, def-pe03-first-order-hll-finite-volume-update, lem-pe03-hll-half-cell-riemann-averages]
proof_strategy: direct
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "J.-L. Guermond and B. Popov, Invariant Domains and First-Order Continuous Finite Element Approximation for Hyperbolic Systems"
      url: "https://people.tamu.edu/~guermond/PUBLICATIONS/guermond_popov_sinum_hyperbolic_systems_2016.pdf"
      locator: "§2.2, convex invariant domains and Riemann averages, PDF pp. 3–4; complete article read"
    - title: "D. I. Ketcheson, R. J. LeVeque, and M. J. del Razo, Riemann Problems and Jupyter Solutions"
      url: "https://www.clawpack.org/riemann_book/html/Shallow_water_approximate.html"
      locator: "Part II, HLL solver derivation and finite-volume use, complete chapter inspected"
---

## Statement

Let $K$ be a convex set in the state domain, and consider a periodic uniform
mesh and one first-order HLL update as defined in
[[def-pe03-first-order-hll-finite-volume-update]]. Assume every cell mean
$U_i\in K$. At every face impose the **HLL fan-average hypothesis** that the
two adjacent half-cell averages $A^-,A^+$ from
[[lem-pe03-hll-half-cell-riemann-averages]] lie in $K$, with that lemma's local
CFL bounds. Then every updated mean $U_i^+$ belongs to $K$. A sufficient
condition for the fan-average hypothesis is that every HLL intermediate state
$U_*\in K$, because the stated CFL makes each half-cell average a convex
combination of a cell state and $U_*$. The result does not assert a bound on
exact nonlinear wave speeds.

## Facts & Assumptions

**Given:** A convex $K$, cell means in $K$, and the HLL half-cell fan-average hypothesis with its local CFL bounds. Prove one update remains in $K$.

[F1] [[def-pe03-convex-invariant-domain]]: convexity means every segment between two members of $K$ lies in $K$.

[F2] [[lem-pe03-hll-half-cell-riemann-averages]]: each $U_i^+$ is the mean of the right half-cell HLL average at the left face and the left half-cell HLL average at the right face.

## Proof

1.1 At each face, the stated HLL fan-average hypothesis gives $A^-,A^+\in K$. In the sufficient intermediate-state case, the CFL bounds make the coefficients in each formula of [F2] nonnegative and sum to one, so convexity and $U_L,U_R,U_*\in K$ give the same conclusion. [given, F1, F2, algebra]

2.1 By [F2], $U_i^+=\tfrac12(A^+_{i-1/2}+A^-_{i+1/2})$. This is a convex combination of two members of $K$, so $U_i^+\in K$ for every cell. The argument is one-step and uses only the supplied HLL speeds and the explicit CFL bounds. [given, F1, F2, algebra] ∎

