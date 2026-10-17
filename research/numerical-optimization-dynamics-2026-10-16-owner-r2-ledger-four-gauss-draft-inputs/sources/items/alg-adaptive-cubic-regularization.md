---
id: alg-adaptive-cubic-regularization
kind: algorithm
title: "Finite-budget adaptive regularization using cubic models"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-adaptive-cubic-regularization-model
  - lem-global-cubic-model-minimizer-decrease
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Coralia Cartis, Nicholas I. M. Gould, and Philippe L. Toint, Adaptive cubic overestimation methods for unconstrained optimization. Part I: motivation, convergence and numerical results (author preprint)"
      url: "https://perso.unamur.be/~phtoint/pubs/TR07-05a.pdf"
      locator: "§2.1, Algorithm 2.1: model-solve requirement, ratio acceptance, and regularization updates."
    - title: "Coralia Cartis, Nicholas I. M. Gould, and Philippe L. Toint, Adaptive cubic overestimation methods for unconstrained optimization. Part II: worst-case iteration complexity (author preprint)"
      url: "https://perso.unamur.be/~phtoint/pubs/TR07-05b.pdf"
      locator: "§2.1, Algorithm 2.1: ARC trial, acceptance, and regularization-weight update."
---

## Definition

Input an open set $U\subseteq\mathbb R^n$, a twice continuously
differentiable $f:U\to\mathbb R$, an initial point $x_0\in U$, target
$\varepsilon\ge0$, outer trial cap $N\in\mathbb N_0$, and an exact-Hessian
cubic-model solver $S$. On an input model and finite inner cap $J\in\mathbb N$,
$S$ returns either `no-candidate` or a global minimizer of that model; the
solver is permitted to return `no-candidate` if it cannot certify a minimizer
within its cap. Other inputs are $0<\eta_1<\eta_2<1$,
$\gamma_{up}>1$, $0<\gamma_{down}<1$, $0<\kappa<1$,
$0<\sigma_{min}\le\sigma_0\le\sigma_{max}$, and the inner cap $J$.
The output is the last accepted iterate and one of `stationary`,
`target-achieved`, `outer-budget-exhausted`, `model-solver-failure`,
`inconsistent-model-solver`, or `regularization-cap-exhausted`.

For $k=0,1,\ldots,N$, in order:

1. Compute $g_k:=\nabla f(x_k)$. If $g_k=0$, return $(x_k,\texttt{stationary})$.
   If $\|g_k\|_2\le\varepsilon$, return $(x_k,\texttt{target-achieved})$.
   If $k=N$, return $(x_k,\texttt{outer-budget-exhausted})$.
2. Set $B_k:=\nabla^2 f(x_k)$ and form the model
   $m_k(s)=f(x_k)+\langle g_k,s\rangle+\tfrac12s^TB_ks+
   \tfrac{\sigma_k}{3}\|s\|_2^3$ of
   [[def-adaptive-cubic-regularization-model]]. Call $S(m_k,J)$. If it returns
   `no-candidate`, return $(x_k,\texttt{model-solver-failure})$. For a
   returned $s_k$, recompute $\operatorname{pred}_k:=m_k(0)-m_k(s_k)$. If
   $s_k=0$ or $\operatorname{pred}_k\le0$ while $g_k\ne0$, return
   `inconsistent-model-solver`.
3. Evaluate $f(x_k+s_k)$ and set
   $\rho_k:=[f(x_k)-f(x_k+s_k)]/\operatorname{pred}_k$.
   If $\rho_k<\eta_1$, reject the step and keep $x_{k+1}:=x_k$. If
   $\sigma_k=\sigma_{max}$, return
   $(x_k,\texttt{regularization-cap-exhausted})$; otherwise set
   $\sigma_{k+1}:=\min\{\gamma_{up}\sigma_k,\sigma_{max}\}$ and continue.
4. If $\rho_k\ge\eta_1$, accept and set $x_{k+1}:=x_k+s_k$. If
   $\rho_k>\eta_2$ and
   $\|s_k\|_2\ge\kappa\|g_k\|_2/\sigma_k$, set
   $\sigma_{k+1}:=\max\{\sigma_{min},\gamma_{down}\sigma_k\}$;
   otherwise set $\sigma_{k+1}:=\sigma_k$.

The model solver is an explicit subroutine input, not a claim that its finite
budget always succeeds. The global-minimizer decrease estimate is supplied by
[[lem-global-cubic-model-minimizer-decrease]]. This procedure alone makes no
unconditional convergence or evaluation-complexity claim.
