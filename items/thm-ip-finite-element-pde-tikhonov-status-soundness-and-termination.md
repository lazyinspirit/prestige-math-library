---
id: thm-ip-finite-element-pde-tikhonov-status-soundness-and-termination
kind: theorem
title: Finite-element PDE Tikhonov statuses are sound and terminate
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - alg-ip-finite-element-pde-tikhonov
  - prop-ip-discrete-adjoint-gradient-and-residual-status
  - def-ip-pde-solver-admissibility-contract
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the finite termination claim is conditional on the model's supplied finite-return routines."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Michael Hinze, A Variational Discretization Concept in Control Constrained Optimization: The Linear-Quadratic Case"
      url: "https://www.math.uni-hamburg.de/home/hinze/Psfiles/COAP0204.pdf"
    - title: "Fernando Gaspoz, Christian Kreuzer, Andreas Veeser, and Winnifried Wollner, A Posteriori Error Analysis for Optimization with PDE Constraints"
      url: "https://arxiv.org/pdf/2503.13170"
verification:
  precheck: pass
---

## Statement

For any finite-element PDE model satisfying its solver and admissibility contract, the finite-budget Tikhonov algorithm returns after finitely many operations one of `converged`, `discrepancy-stopped`, `linear-solve-failed`, `inadmissible`, or `budget-exhausted`. A `converged` return satisfies the exact discrete projected-gradient bound $\|G_L(q)\|_2\le\tau_g$; a `discrepancy-stopped` return satisfies $\|F_h(q)-y^\delta\|_{Y_h}\le\kappa\delta$. Every accepted safeguarded step has nonincreasing exact discrete objective $\Phi_h$. `inadmissible` and `linear-solve-failed` are returned only on the corresponding failed predicate or solver-certificate checks. `budget-exhausted` asserts no optimizer or continuous-model accuracy.

## Statement references

[[alg-ip-finite-element-pde-tikhonov|Finite-budget finite-element PDE Tikhonov inversion]]

[[prop-ip-discrete-adjoint-gradient-and-residual-status|Gradient and discrepancy certificate inequalities]]

[[def-ip-pde-solver-admissibility-contract|Finite solver and objective-interval return contract]]

[Michael Hinze, *A Variational Discretization Concept in Control Constrained Optimization: The Linear-Quadratic Case*](https://www.math.uni-hamburg.de/home/hinze/Psfiles/COAP0204.pdf)

[Fernando Gaspoz, Christian Kreuzer, Andreas Veeser, and Winnifried Wollner, *A Posteriori Error Analysis for Optimization with PDE Constraints*](https://arxiv.org/pdf/2503.13170)

## Facts & Assumptions

**Given:** The finite budgets, a current coefficient in the admissible set, finite solver and objective-evaluation routines, valid residual/error certificates, and the exact algorithm instructions in the Statement references.

[A1] The admissibility predicate decides in finite time; projection failure means its call budget is exhausted; objective evaluation fails only on a required state/adjoint solve-contract failure or its call-budget exhaustion; and all routines return in their declared finite budgets ([[def-ip-pde-solver-admissibility-contract]]).

[F1] The algorithm performs at most $N_{\rm iter}+1$ outer validations and at most $N_{\rm iter}N_{\rm backtrack}$ candidate trials, subject to the global finite solve/evaluation budget ([[alg-ip-finite-element-pde-tikhonov]]).

[F2] The solver's gradient-error certificate bounds the exact discrete projected-gradient residual, and its forward-error certificate bounds the exact discrete data residual ([[prop-ip-discrete-adjoint-gradient-and-residual-status]]).

[F3] A returned objective interval $[\ell_h(q),u_h(q)]$ contains the exact value $\Phi_h(q)$ ([[def-ip-pde-solver-admissibility-contract]]).

## Proof

1.1 Consider any accepted line-search trial $q_j$. By [F3], $\Phi_h(q_j)\le u_h(q_j)$ and $\ell_h(q)\le\Phi_h(q)$. The algorithm accepts only when $u_h(q_j)\le\ell_h(q)$, so $\Phi_h(q_j)\le\Phi_h(q)$. Every accepted update therefore makes the exact discrete objective nonincreasing. [F1, F3, given, algebra]

1.2 If the algorithm returns `converged`, its checked inequality is $\|\widetilde G_L(q)\|_2+\varepsilon_g\le\tau_g$. By [F2], $\|G_L(q)\|_2\le\|\widetilde G_L(q)\|_2+\varepsilon_g$, hence $\|G_L(q)\|_2\le\tau_g$. If it returns `discrepancy-stopped`, its checked inequality is $\|\widetilde F_h-y^\delta\|+\varepsilon_F\le\kappa\delta$; [F2] gives $\|F_h(q)-y^\delta\|\le\kappa\delta$. [F2, given, algebra]

1.3 The outer counter ranges only over $0,\ldots,N_{\rm iter}$, each line-search counter over $0,\ldots,N_{\rm backtrack}-1$, and all solver or objective evaluations return within a finite budget or report failure by [A1]. Therefore each loop either returns one of its named statuses, takes a bounded next step, or exhausts a finite budget. The algorithm cannot run indefinitely. [A1, F1, given]

1.4 By its initial and per-iterate branches, `inadmissible` is returned only when the coefficient is outside $Q_h$ or the declared admissibility predicate is false. By its solve-validation branch, `linear-solve-failed` is returned only when a required solver fails or its residual/error certificate is missing or invalid. A `budget-exhausted` return follows a depleted global or routine-call budget, a failed finite backtracking search, or the outer-iteration limit; none of these branches claims a minimizer. [A1, F1, given]

2.1 Steps 1.1–1.4 establish the stated objective decrease, status bounds, status meanings, and finite termination. The proof refers only to the discrete objective named by the model contract, so it supplies no mesh-convergence or true-parameter conclusion. [step 1.1, step 1.2, step 1.3, step 1.4, given] ∎
