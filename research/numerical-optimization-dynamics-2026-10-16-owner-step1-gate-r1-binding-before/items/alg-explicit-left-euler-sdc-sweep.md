---
id: alg-explicit-left-euler-sdc-sweep
kind: algorithm
title: Finite explicit-left-Euler spectral deferred-correction sweep
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-collocation-quadrature-tableau
  - lem-collocation-quadrature-matrix-well-defined
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Mathew F. Causley and David C. Seal, On the convergence of spectral deferred correction methods, Communications in Applied Mathematics and Computational Science 14 (2019), §3
      url: https://arxiv.org/pdf/1706.06245
    - title: Ernst Hairer, Syvert P. Nørsett, and Gerhard Wanner, Solving Ordinary Differential Equations I, 2nd ed., Chapter II §II.7
      url: https://moodle.utc.fr/file.php/336/Hairer_Noersett_Wanner._Solving_ordinary_differential_equations_vol.1._Nonstiff_problems_2ed._revised_Springer_2008_ISBN_3540566708_593s_MNd_.pdf
---

## Definition

Fix the nodes, matrices $Q,b$, and interpolant of [[def-collocation-quadrature-tableau]]. Let $c_0=0$, $\Delta c_j=c_j-c_{j-1}$, and let $F_j^k=f(t+c_jh,U_j^k)$ for the current stage vector $U^k$. The left-Euler node-subinterval preconditioner has fixed initial column $a_i=c_1$ and stage block
$$ (Q_\Delta)_{ij}=\begin{cases}\Delta c_{j+1},&j<i,\\0,&j\ge i.\end{cases} $$
It is strictly lower triangular. In augmented notation, set $\widehat Q=(0\mid Q)$ and $\widehat Q_\Delta=(a\mid Q_\Delta)$, where the initial derivative $F_0=f(t,u)$ is fixed through all sweeps. One sweep is
$$U^{k+1}=\mathbf1u+h\widehat Q_\Delta(F_0,F(U^{k+1}))+h(\widehat Q-\widehat Q_\Delta)(F_0,F(U^k)).$$
The fixed initial-column contributions cancel. Thus the exact operational stage update is the forward recursion
$$U_i^{k+1}=u+h\sum_{j<i}(Q_\Delta)_{ij}F_j^{k+1}+h\sum_{j=1}^M(Q_{ij}-(Q_\Delta)_{ij})F_j^k,\quad i=1,\ldots,M.$$
After a sweep compute its update residual $r_k=\|U^{k+1}-U^k\|_{\infty,2}$, where $\|V\|_{\infty,2}=\max_i\|V_i\|_2$. If the stage field is $L$-Lipschitz on a supplied closed invariant stage set and
$$ a:=hL\|Q_\Delta\|_\infty<1,\qquad q:=\frac{hL\|Q-Q_\Delta\|_\infty}{1-a}<1,$$
then the residual test $r_k\le(1-q)\,\mathrm{tol}$ returns $U^k$ with status `residual-tolerance-met`; the separate stage-error theorem establishes what this status certifies. The endpoint for an accepted stage vector is $u+h\sum_jb_jF_j^k$.

The inputs are $t,u,h>0$, the vector field and admissible stage domain, distinct ordered nodes, a constant initial predictor $U^0=\mathbf1u$ (or another declared predictor), a Lipschitz bound $L$, tolerance $\mathrm{tol}>0$, and an integer sweep budget $K\ge0$. Reject repeated or unordered nodes as `invalid-node-data`; reject a stage outside the IVP domain as `inadmissible-stage`; if the displayed contraction inequalities are not certified, return `contraction-not-certified`; if the tolerance is not reached in at most $K$ sweeps, return `iteration-budget-exhausted` and no accepted endpoint. These statuses never assert convergence.

With the constant predictor, setup forms $Q,b,Q_\Delta$ once. Evaluating $F(U^0)$ costs $M$ right-hand-side calls, each outer sweep costs $M$ new calls, and the old stage values $F(U^k)$ are stored and reused; $K$ sweeps therefore use $M(K+1)$ stage calls. Matrix setup stores $O(M^2)$ coefficients; each sweep uses $O(M^2d)$ scalar arithmetic in addition to its right-hand-side calls. The claims use exact real arithmetic and give no floating-point roundoff guarantee.
