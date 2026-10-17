---
id: lem-rosenbrock-euler-jacobian-approximation-defect
title: "The one-stage update has an explicit Jacobian-approximation defect"
kind: lemma
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-rosenbrock-euler-step-map
  - lem-rosenbrock-shifted-inverse-perturbation
proof_strategy: direct
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "WIAS Berlin, Numerical Methods for Stiff Ordinary Differential Equations, §2.4 Rosenbrock Methods"
      url: "https://www.wias-berlin.de/people/john/LEHRE/NUMERIK_II_24_25/ode_2.pdf"
      locator: "§2.4, Remark 2.39, printed p. 47: order and stability limits for approximate Jacobians"
    - title: "Joachim Rang and Lutz Angermann, New Rosenbrock methods of order 3 for PDAEs of index 2"
      url: "https://dml.cz/bitstream/handle/10338.dmlcz/700435/Equadiff_11-2005-2_46.pdf"
      locator: "§2, printed pp. 386–387: exact-J and arbitrary-W order conditions"
---

## Statement

Use the one-stage map of [[def-rosenbrock-euler-step-map]] with the same $t,y,h,\gamma,f$ but matrices $J$ and $\widetilde J$. If $I_d-\gamma hJ$ and $I_d-\gamma h\widetilde J$ are invertible, with inverse norms bounded by $K$ and $\widetilde K$, then
$$\|\Phi_{\gamma,h}^{\widetilde J}(t,y)-\Phi_{\gamma,h}^{J}(t,y)\|_2\le\gamma h^2K\widetilde K\|\widetilde J-J\|_2\,\|f(t,y)\|_2.$$
This is a one-step perturbation bound; it alone gives no uniform stability or convergence claim for a sequence of approximate Jacobians.

## Facts & Assumptions

**Given:** The one-stage maps and inverse bounds of the Statement.

[F1] [[def-rosenbrock-euler-step-map]]: $\Phi_{\gamma,h}^{J}(t,y)=y+h(I_d-\gamma hJ)^{-1}f(t,y)$ when the shifted matrix is invertible.

[F2] [[lem-rosenbrock-shifted-inverse-perturbation]]: the two shifted inverses differ in norm by at most $\gamma hK\widetilde K\|\widetilde J-J\|_2$.

## Proof

**Given:** The data in the Statement.

1.1 Subtract the two update formulas in [F1]. The common $y$ cancels, leaving $h[(I_d-\gamma h\widetilde J)^{-1}-(I_d-\gamma hJ)^{-1}]f(t,y)$. [F1, algebra]

2.1 Apply [F2] to the matrix difference in step 1.1 and the induced-norm inequality to its product with $f(t,y)$. Multiplication by the outer $h$ gives the stated $\gamma h^2K\widetilde K\|\widetilde J-J\|_2\|f(t,y)\|_2$ bound. [step 1.1, F2, algebra] ∎
