---
id: alg-explicit-left-euler-sdc-sweep
kind: algorithm
title: Finite explicit-left-Euler spectral deferred-correction sweep
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-first-order-ode-initial-value-problem-and-solution
  - def-collocation-quadrature-tableau
  - lem-collocation-quadrature-matrix-well-defined
justified_by:
  - lem-sdc-sweep-work-and-storage-bound
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

Let $D\subseteq\mathbb R\times\mathbb R^d$ be the open time-state domain of an IVP $y'=f(t,y)$, with $d\ge1$. The inputs are a time $t\in\mathbb R$, an initial state $u\in\mathbb R^d$ with $(t,u)\in D$, a step $h>0$, an integer $M\ge1$, distinct ordered nodes $0\le c_1<\cdots<c_M\le1$, a predictor (default $U^0=\mathbf1u$), a Lipschitz bound $L\ge0$, a tolerance $\mathrm{tol}>0$, an integer sweep budget $K\ge0$, and a supplied stage set $\mathcal C$. A stage vector $U$ is admissible only when $(t+c_jh,U_j)\in D$ for every $j$.

After validating the node data, form the collocation tableau $Q,b$ of [[def-collocation-quadrature-tableau]]. Let $c_0=0$, $\Delta c_j=c_j-c_{j-1}$, and define the left-Euler node-subinterval preconditioner by its initial column $a_i=c_1$ and stage block
$$ (Q_\Delta)_{ij}=\begin{cases}\Delta c_{j+1},&j<i,\\0,&j\ge i.\end{cases} $$
The stage block is strictly lower triangular. In augmented notation, set $\widehat Q=(0\mid Q)$, $\widehat Q_\Delta=(a\mid Q_\Delta)$, and $\widehat F(U)=(f(t,u),F(U))$. One sweep is
$$U^{k+1}=\mathbf1u+h\widehat Q_\Delta\widehat F(U^{k+1})+h(\widehat Q-\widehat Q_\Delta)\widehat F(U^k).$$
The fixed initial-column contributions cancel, so the procedure below does not evaluate $F_0=f(t,u)$. For a stage vector $U$, write $F_j(U)=f(t+c_jh,U_j)$. Since $Q_\Delta$ is strictly lower triangular, for fixed previous stages $U^k$ the unique new stages are computed in increasing $i$ by the forward recursion
$$U_i^{k+1}=u+h\sum_{j<i}(Q_\Delta)_{ij}F_j(U^{k+1})+h\sum_{j=1}^M(Q_{ij}-(Q_\Delta)_{ij})F_j(U^k),\quad i=1,\ldots,M.$$

Use $\|V\|_{\infty,2}=\max_i\|V_i\|_2$ and $\|A\|_\infty=\max_i\sum_j|A_{ij}|$. The supplied set $\mathcal C$ must be a nonempty closed product ball of admissible stage vectors, contain the predictor, be invariant under each inner stage map and outer sweep, and have an $L$-Lipschitz stage field $F(U)=(F_j(U))_{j=1}^M$ in this norm. After forming $Q_\Delta$, compute $a=hL\|Q_\Delta\|_\infty$. If $a\ge1$, return `contraction-not-certified` with no accepted endpoint. For $a<1$, compute $q=hL\|Q-Q_\Delta\|_\infty/(1-a)$; if $q\ge1$ or invariance is not certified, return `contraction-not-certified` with no accepted endpoint. The exact procedure is:

1. Reject repeated, unordered, or out-of-range nodes as `invalid-node-data` before forming the tableau.
2. Form $Q,b,Q_\Delta$ from the valid nodes and apply the contraction and invariance checks described above.
3. If the predictor is outside $\mathcal C$ or any required stage evaluation $(t+c_jh,U_j)$ lies outside $D$, return `inadmissible-stage` and no accepted endpoint.
4. Evaluate and store all $M$ values $F_j(U^0)$ once.
5. If $K=0$, return `iteration-budget-exhausted` and no accepted endpoint; no residual test has been performed.
6. For $k=0,1,\ldots,K-1$, compute $U^{k+1}$ in increasing stage order using the displayed recursion, reusing the stored $F(U^k)$ and evaluating each new $F_j(U^{k+1})$ once. If a new stage is outside $D$, return `inadmissible-stage` and no accepted endpoint. Then compute $r_k=\|U^{k+1}-U^k\|_{\infty,2}$. If $r_k\le(1-q)\,\mathrm{tol}$, return status `residual-tolerance-met`, the stage vector $U^k$, and endpoint $u+h\sum_{j=1}^M b_jF_j(U^k)$. If this is the $K$th sweep and the test failed, return `iteration-budget-exhausted` and no accepted endpoint; otherwise use $U^{k+1}$ and its stored field values as the next iterate.

These statuses report only the stated branch outcome; they do not assert convergence when a check fails.

Form $Q,b,Q_\Delta$ once per invocation and retain their coefficients through the sweep loop. Retain the old and current stage vectors and their field values while computing a sweep and testing its residual. On continuation, reuse these buffers for the next sweep; on acceptance, use the retained $U^k$ and $F(U^k)$ for the returned stage vector and endpoint in step 6. Perform the displayed operations in exact real arithmetic.
