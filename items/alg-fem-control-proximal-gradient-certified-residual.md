---
id: alg-fem-control-proximal-gradient-certified-residual
kind: algorithm
title: Finite-budget projected-gradient loop with state-adjoint residual certificates
status: published
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

Assume Countable Choice. Let $E\subset\mathbb R^d$, $d\ge2$, be a bounded polyhedral open control domain with a finite matching affine simplicial mesh as used in [[lem-p0-box-projection-is-clipped-cell-average]]. Let $U_h\subset U=L^2(E)$ be the finite-dimensional space of cellwise-constant controls on this mesh, and let $Q_h=U_h\cap Q_{ad}$ be nonempty with bounds constant on each control cell. The target is the **exact continuous reduced objective** $\widehat J$ of [[def-linear-elliptic-pde-constrained-control-problem]], restricted to $Q_h$; write $Ju(q)=c+Sq$ and $g(q)=\nabla\widehat J(q)=B^*p(q)+\alpha q$. Choose finite certified bounds $\beta_B\ge\|B\|$ and $L_h\ge\|S|_{U_h}\|^2+\alpha>0$. Given a finite budget $N\ge1$, tolerance $\tau\ge0$, and initial $q_0\in Q_h$, repeat for $k=0,\ldots,N-1$:

Fix a finite-dimensional conforming state space $V_h\subset V$ and the discrete primal and transposed adjoint equations satisfying the first-Strang hypotheses in [[lem-fem-control-gradient-residual-bound]] at each queried control. An additional input is a residual-evaluation routine $\mathcal C$. For every queried $q_k$, it must return in finite time either a valid tuple $(\tilde u_k,\tilde p_k,\varepsilon_{u,k},\varepsilon_{p,k})$ or `failure`. A valid tuple has $\tilde u_k,\tilde p_k\in V_h$ solving the specified discrete primal and transposed adjoint equations, with the adjoint right-hand side formed using $\tilde u_k$, and nonnegative finite bounds that dominate the complete primal and adjoint first-Strang right-hand sides. Those bounds retain all form, geometry, quadrature, and load defects, including the adjoint load contribution $\|J\|^2\varepsilon_{u,k}$ from the state error. The finite-return condition is part of the algorithm's admissible input contract; if the backend cannot certify the equations and bounds, it returns `failure`.

A second input is a projection-evaluation routine $\mathcal P$. Write $q_{k,K}:=q_k|_K$. For every queried $(q_k,\tilde p_k,L_h)$ it must return in finite time either `failure` or finite real cell values $z_{k,K}$ and a finite real $r_k\ge0$ satisfying
$$z_{k,K}=\operatorname{clip}_{[q_a|_K,q_b|_K]}\left(q_{k,K}-\frac{\alpha q_{k,K}+|K|^{-1}\int_K B^*\tilde p_k}{L_h}\right),\qquad r_k^2=\sum_{K\in\mathcal T_h}|K|\,|q_{k,K}-z_{k,K}|^2.$$
Thus the returned cellwise function is exactly $P_{Q_h}(q_k-\tilde g_k/L_h)$ and $r_k$ is its exact step norm by [[lem-p0-box-projection-is-clipped-cell-average]]. Computing the required cell averages, clipped values and norm is part of this finite-return backend contract; it is not inferred from boundedness of $B$, and no finite representation of the entire function $B^*\tilde p_k$ is assumed. Unavailable exact values must be reported as `failure`, not left pending.

1. Call $\mathcal C(q_k)$. If it returns `failure` or no valid bounds, return $(q_k,\texttt{inconclusive},+\infty)$. Otherwise use its conforming finite-element state and adjoint approximations $\tilde u_k,\tilde p_k$ and complete Strang bounds $\varepsilon_{u,k},\varepsilon_{p,k}$. Set $\delta_k=\beta_B\varepsilon_{p,k}$ and $\tilde g_k=B^*\tilde p_k+\alpha q_k$.
2. Call $\mathcal P(q_k,\tilde p_k,L_h)$. If it returns `failure` or no valid cell values and norm, return $(q_k,\texttt{inconclusive},+\infty)$. Otherwise set $\tilde q_{k+1}|_K=z_{k,K}$ and $\tilde\rho_k=r_k$ from its valid return.
3. If $\tilde\rho_k+\delta_k/L_h\le\tau$, return $(q_k,\texttt{certified},\tilde\rho_k+\delta_k/L_h)$.
4. Otherwise set $q_{k+1}=\tilde q_{k+1}$ and continue.

If all $N$ iterations finish without that test, return the last evaluated iterate $(q_{N-1},\texttt{budget-exhausted},\tilde\rho_{N-1}+\delta_{N-1}/L_h)$. Both routines' finite-return contracts ensure that an unavailable state/adjoint bound or projection/residual value is reported as `failure` rather than left pending. The reported number certifies a projected-gradient residual for the exact continuous PDE objective restricted to $Q_h$; it is not a continuous-control discretization error bound.
