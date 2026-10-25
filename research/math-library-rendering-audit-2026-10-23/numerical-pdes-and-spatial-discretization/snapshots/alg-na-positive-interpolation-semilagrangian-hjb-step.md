---
id: alg-na-positive-interpolation-semilagrangian-hjb-step
kind: algorithm
title: Positive-interpolation semi-Lagrangian update for first-order HJB equations
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
deps: [def-na-first-order-hjb-cauchy-problem, def-na-periodic-grid-and-tensor-multilinear-interpolation, lem-na-multilinear-interpolation-positive-and-second-order-accurate, lem-finite-set-has-max]
justified_by: []
aliases: []
dependency_level: 3
proof_strategy: not-applicable
axiom_base: Each update is a finite array operation; compact-control minimizers exist and only finitely many grid rows are evaluated, so no choice principle is used.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Kristian Debrabant and Espen R. Jakobsen, Semi-Lagrangian schemes for linear and fully non-linear Hamilton-Jacobi-Bellman equations"
      url: https://arxiv.org/pdf/1403.1217
      locator: "§§2–4, positive interpolation and semi-Lagrangian HJB updates, printed pp. 2–5."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Choose integers $N_j\ge3$, a number $M\ge1$ of time steps, and
$\tau=T/M$. Sample $u_0$ at the grid nodes of
[[def-na-periodic-grid-and-tensor-multilinear-interpolation]] and set
$U_i^0=u_0(x_i)$. At each $n=0,\ldots,M-1$, compute
$$U_i^{n+1}=\min_{a\in A_k}\left\{ I_hU^n\bigl(x_i+\tau b_a(x_i,t_n)\bigr)+\tau\ell_a(x_i,t_n) \right\},\qquad t_n=n\tau.$$
The position is evaluated on the torus, so its coordinates wrap modulo one.
The algorithm always uses a finite nonempty set $A_k\subset A$. For a finite
control model take $A_k=A$; for a compact control model, supply finite sets
whose Hamiltonian errors $\eta_k(R)$ from
[[def-na-first-order-hjb-cauchy-problem]] tend to zero on every bounded
momentum set. This is the declared finite-control approximation branch; it
does not presume an unimplemented continuous minimization oracle. Return
$U^M$.

The update is the explicit Euler-footpoint semi-Lagrangian branch specified by
the plan. It defines its footpoint and interpolant locally; no unauthored
characteristic-flow estimate is presumed.
