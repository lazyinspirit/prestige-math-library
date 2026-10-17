---
id: alg-fem-control-proximal-gradient-certified-residual
kind: algorithm
title: Finite-budget projected-gradient loop with state-adjoint residual certificates
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - alg-proximal-gradient-and-fista
  - def-linear-elliptic-pde-constrained-control-problem
  - lem-fem-control-gradient-residual-bound
  - lem-p0-box-projection-is-clipped-cell-average
  - thm-linear-elliptic-reduced-control-gradient-and-hessian
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Michael Hinze, A Variational Discretization Concept in Control Constrained Optimization
      url: "https://www.math.uni-hamburg.de/home/hinze/Psfiles/COAP0204.pdf"
      locator: "§§1–3, printed pp. 2–7: reduced-gradient and finite-element control discretization context; this carrier adds a residual certificate."
---

## Definition

Let $U_h\subset U=L^2(E)$ be the finite-dimensional space of cellwise-constant controls on a finite affine mesh, and let $Q_h=U_h\cap Q_{ad}$ be nonempty with bounds constant on each control cell. The target is the **exact continuous reduced objective** $\widehat J$ of [[def-linear-elliptic-pde-constrained-control-problem]], restricted to $Q_h$; write $Ju(q)=c+Sq$ and $g(q)=\nabla\widehat J(q)=B^*p(q)+\alpha q$. Choose a certified $L_h\ge\|S|_{U_h}\|^2+\alpha>0$. Given a finite budget $N\ge1$, tolerance $\tau\ge0$, and initial $q_0\in Q_h$, repeat for $k=0,\ldots,N-1$:

An additional input is a residual-evaluation routine $\mathcal C$. For every queried $q_k$, it must return in finite time either a valid tuple $(\tilde u_k,\tilde p_k,\varepsilon_{u,k},\varepsilon_{p,k})$ or `failure`. A valid tuple has $\tilde u_k,\tilde p_k\in V_h$, nonnegative finite bounds that dominate the complete primal and adjoint first-Strang right-hand sides, and an adjoint load defect that includes the state-error contribution $\|J\|^2\varepsilon_{u,k}$. The finite-return condition is part of the algorithm's admissible input contract.

1. Call $\mathcal C(q_k)$. If it returns `failure` or no valid bounds, return $(q_k,\texttt{inconclusive},+\infty)$. Otherwise use its conforming finite-element state and adjoint approximations $\tilde u_k,\tilde p_k$ and complete Strang bounds $\varepsilon_{u,k},\varepsilon_{p,k}$, including form, geometry, quadrature, and load defects. Set $\delta_k=\|B\|\varepsilon_{p,k}$ and $\tilde g_k=B^*\tilde p_k+\alpha q_k$.
2. Set $\tilde q_{k+1}=P_{Q_h}(q_k-\tilde g_k/L_h)$, using the clipped-cell-average projection of [[lem-p0-box-projection-is-clipped-cell-average]], and set $\tilde\rho_k=\|q_k-\tilde q_{k+1}\|_U$.
3. If $\tilde\rho_k+\delta_k/L_h\le\tau$, return $(q_k,\texttt{certified},\tilde\rho_k+\delta_k/L_h)$.
4. Otherwise set $q_{k+1}=\tilde q_{k+1}$ and continue.

If all $N$ evaluations finish without that test, return the last evaluated iterate $(q_{N-1},\texttt{budget-exhausted},\tilde\rho_{N-1}+\delta_{N-1}/L_h)$. The routine's finite-return contract ensures that an unavailable residual bound is reported as `failure` rather than left pending. The reported number certifies a projected-gradient residual for the exact continuous PDE objective restricted to $Q_h$; it is not a continuous-control discretization error bound.
