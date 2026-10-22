---
id: alg-ip-finite-element-pde-tikhonov
kind: algorithm
title: Finite-budget finite-element PDE Tikhonov inversion
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-ip-pde-solver-admissibility-contract
  - lem-ip-finite-element-reduced-gradient-from-discrete-adjoint
  - def-ip-nonlinear-tikhonov-functional
  - prop-ip-discrete-adjoint-gradient-and-residual-status
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Michael Hinze, A Variational Discretization Concept in Control Constrained Optimization: The Linear-Quadratic Case"
      url: "https://www.math.uni-hamburg.de/home/hinze/Psfiles/COAP0204.pdf"
    - title: "Fernando Gaspoz, Christian Kreuzer, Andreas Veeser, and Winnifried Wollner, A Posteriori Error Analysis for Optimization with PDE Constraints"
      url: "https://arxiv.org/pdf/2503.13170"
    - title: "Hannes Meinlschmidt, Optimization with Partial Differential Equations, complete lecture notes"
      url: "https://hannes.meinlschmidt.eu/lecture_notes/pde_opt.pdf"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  precheck: n/a
---

## Definition

Assume a finite-element PDE model satisfying the admissibility and certificate contract, with nonempty closed convex coefficient set $Q_h$, discrete Tikhonov objective $\Phi_h$ using reference coefficient $q_0$, a state/adjoint solve routine, an exact projection routine, an objective interval routine, and finite solve and evaluation budgets. Let the input be an initial coefficient $q_{\rm init}\in Q_h$, data $y^\delta\in Y_h$, noise bound $\delta\ge0$, penalty $\alpha>0$, state and adjoint residual tolerances $\tau_u,\tau_p\ge0$, discrepancy factor $\kappa\ge1$, stationarity tolerance $\tau_g\ge0$, scaling parameter $L>0$, and positive integer budgets $N_{\rm iter}$, $N_{\rm solve}$, $N_{\rm eval}$, and $N_{\rm backtrack}$. The global budget $N_{\rm solve}$ counts state and adjoint solves; $N_{\rm eval}$ counts exact projections and objective-interval evaluations. The scaling parameter $L$ is only a positive step-size scale; it is not assumed to be a Lipschitz constant. The algorithm returns a coefficient, one status from `converged`, `discrepancy-stopped`, `linear-solve-failed`, `inadmissible`, or `budget-exhausted`, and any diagnostics certified at that coefficient.

1. If $q_{\rm init}\notin Q_h$ or the model's exact admissibility predicate is false at $q_{\rm init}$, return status `inadmissible` without solving a PDE. Otherwise set $q:=q_{\rm init}$.

2. For $k=0,\ldots,N_{\rm iter}$, first check the finite-time admissibility predicate, which includes membership in $Q_h$. If it is false, return `inadmissible`. If no global solve or evaluation budget remains, return `budget-exhausted`.

3. Call the state/adjoint solver at $q$ with tolerances $\tau_u,\tau_p$ and the remaining solve budget. If it returns `failure`, if either certified residual bound exceeds its declared tolerance, or if any required state/adjoint error estimate or derivative bound is missing or invalid, return `linear-solve-failed`. Otherwise receive $\widetilde g_h$, $\widetilde F_h$, $\eta_u,\eta_p,P,L_{J,u},L_{R,u},M_q,L_{G,u}$ and set $\varepsilon_g=(L_{J,u}+L_{R,u}P)\eta_u+M_q\eta_p$ and $\varepsilon_F=L_{G,u}\eta_u$.

4. Use the exact projection routine to compute $P_{Q_h}(q-\widetilde g_h/L)$. If the routine fails or the evaluation budget is exhausted, return `budget-exhausted`. Set $\widetilde\rho:=L\|q-P_{Q_h}(q-\widetilde g_h/L)\|_2$. If $\widetilde\rho+\varepsilon_g\le\tau_g$, return `converged` with stationarity upper bound $\widetilde\rho+\varepsilon_g$. This status means only that the exact projected-gradient residual of the discrete objective is within tolerance; it is not a claim that an iterate sequence converges or that $q$ is a global minimizer.

5. Compute $d^+:=\|\widetilde F_h-y^\delta\|_{Y_h}+\varepsilon_F$. If $d^+\le\kappa\delta$, return `discrepancy-stopped` with data-residual upper bound $d^+$. This status certifies only the discrete model's data discrepancy.

6. If $k=N_{\rm iter}$, return `budget-exhausted` at the current coefficient with its current diagnostics. Otherwise, evaluate the current objective using its certified interval $[\ell_h(q),u_h(q)]$. If the evaluation fails because a required state or adjoint solve fails its contract, return `linear-solve-failed`; if the global solve or evaluation budget is exhausted, return `budget-exhausted`.

7. For $j=0,\ldots,N_{\rm backtrack}-1$, set $t_j=2^{-j}/L$ and use the exact projection routine to compute $q_j=P_{Q_h}(q-t_j\widetilde g_h)$. If projection fails or the evaluation budget is exhausted, return `budget-exhausted`. Reject this trial and continue to the next $j$ if $q_j=q$ or its admissibility predicate is false. Otherwise evaluate a certified interval $[\ell_h(q_j),u_h(q_j)]$. If evaluation fails because a required state or adjoint solve fails its contract, return `linear-solve-failed`; if the global solve or evaluation budget is exhausted, return `budget-exhausted`. Accept the first trial with $u_h(q_j)\le\ell_h(q)$, set $q:=q_j$, and continue to the next outer iteration.

8. If no trial is accepted within the backtracking budget, return `budget-exhausted` at the current coefficient.

The global solve budget counts all primal and adjoint solves used both at iterates and in objective trials. The evaluation budget counts every projection and objective-interval call. Any continuous-to-discrete mesh bound is reported separately by the model contract and is never inferred from the algebraic state or adjoint residuals.

## Definition references

[[def-ip-pde-solver-admissibility-contract|Finite-element PDE model, adjoint, and error-certificate contract]]

[[lem-ip-finite-element-reduced-gradient-from-discrete-adjoint|Exact finite-element reduced gradient]]

[[def-ip-nonlinear-tikhonov-functional|Nonlinear Tikhonov objective]]

[[prop-ip-discrete-adjoint-gradient-and-residual-status|Sound finite statuses from certified discrete gradients and data residuals]]

[[thm-discrete-adjoint-gradient-recursion|Exact discrete gradient for finite state-step models]]

[[lem-fem-control-gradient-residual-bound|Model-specific finite-element state and adjoint error certificate]]

[Michael Hinze, *A Variational Discretization Concept in Control Constrained Optimization: The Linear-Quadratic Case*](https://www.math.uni-hamburg.de/home/hinze/Psfiles/COAP0204.pdf)

[Fernando Gaspoz, Christian Kreuzer, Andreas Veeser, and Winnifried Wollner, *A Posteriori Error Analysis for Optimization with PDE Constraints*](https://arxiv.org/pdf/2503.13170)

[Hannes Meinlschmidt, *Optimization with Partial Differential Equations*, complete lecture notes](https://hannes.meinlschmidt.eu/lecture_notes/pde_opt.pdf)
