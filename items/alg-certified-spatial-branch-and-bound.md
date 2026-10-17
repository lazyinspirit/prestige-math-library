---
id: alg-certified-spatial-branch-and-bound
kind: algorithm
title: Finite-budget certified spatial branch and bound
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: global-optimization-and-certified-branch-and-bound
dependency_level: 2
deps: [def-spatial-global-optimization-problem, def-spatial-box-bound-certificate]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Arnold Neumaier, Complete Search in Continuous Global Optimization and Constraint Satisfaction, §12"
      url: "https://optimization-online.org/wp-content/uploads/2003/10/765.pdf"
    - title: "Thomas Hübner, Akshay Gupte, and Steffen Rebennack, Spatial branch-and-bound for nonconvex separable piecewise linear optimization, §§2 and 4"
      url: "https://optimization-online.org/wp-content/uploads/2024/05/Spatial-branch-and-bound-Piecewise-Linear-IJOC-revisions.pdf"
---

## Definition

Input a compact-box instance $(D_0,C,f)$ from [[def-spatial-global-optimization-problem]], a tolerance $\varepsilon>0$, a positive integer node budget $N$, and a deterministic box-report oracle implementing [[def-spatial-box-bound-certificate]]. Every oracle call must finish in finite time or return an unavailable status. The budget counts each oracle call, including the root and both children after every split. The oracle may request higher precision on a repeated box; each such refinement is another counted call.

Initialize a leaf ledger with the root box $D_0$, no incumbent ($U=+\infty$), and zero calls. Evaluate the root first. Before every oracle call, if the call counter is already $N$, return the complete current ledger with budget-exhausted; otherwise call the oracle and increment the counter by one. Store every returned field. A feasible witness $(x,U_x)$ updates the incumbent upper bound to $U=\min U_x$. An empty-box proof marks that leaf empty; retain the leaf and its proof in the ledger, but exclude it from lower-bound comparisons, closure tests, and split candidates. For constraints $g_i(x)\le0$, a sound interval lower bound $\underline g_i(B)>0$ is an empty-box proof. Store every valid lower bound $\ell_B$ even if the leaf is later closed. Every evaluated leaf not certified empty requires a finite lower bound; if that field is missing, non-finite, or unavailable, return inconclusive. A certified-empty leaf requires no lower bound.

Whenever all current leaves have been evaluated, first return infeasible if they are all certified empty. Otherwise put $L=\min\{\ell_B:B\text{ is not certified empty}\}$. If $U<+\infty$, $L$ is finite, and $U-L\le\varepsilon$, return a feasible witness and the epsilon-global certificate $(L,U)$. Mark any leaf not certified empty with $\ell_B\ge U-\varepsilon$ closed while retaining its lower bound.

If no certificate is returned and no pending child awaits evaluation, split the nonclosed leaf not certified empty with least lower bound; ties use creation order. In a box with positive widths, bisect a longest coordinate at its exact midpoint, using the least coordinate index among ties. Replace the parent by its two closed subboxes, which cover it. Create and evaluate the child with the lower half of the split coordinate first, then the upper-half child. Pending children are evaluated in that order before the next all-leaves check or split. In the unconstrained mode, the oracle returns the exact midpoint as a feasible witness and exact objective value; the termination theorem uses this mode. For a zero-width singleton that has not been certified, request a deterministic higher-precision report for that same point; each refinement consumes one call. If refinement is unavailable, return inconclusive. When no certificate or infeasibility result has been established and another oracle call is needed after $N$ calls, the pre-call guard returns the complete current ledger with no optimality claim. This finite-budget procedure is global-search bookkeeping: a local stationary point or a solver tolerance is not a lower-bound certificate.

