---
id: alg-adaptive-cubic-regularization
kind: algorithm
title: "Finite-budget adaptive regularization using cubic models"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-adaptive-cubic-regularization-model
  - cor-hessian-is-symmetric
justified_by:
  - lem-global-cubic-model-minimizer-decrease
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
cubic-model solver $S$. Other inputs are $0<\eta_1<\eta_2<1$,
$\gamma_{up}>1$, $0<\gamma_{down}<1$, $0<\kappa<1$,
$0<\sigma_{min}\le\sigma_0\le\sigma_{max}$, $0<\kappa_\theta<1$,
and the finite inner cap $J\in\mathbb N_0$. On input of the model, $J$,
and $\kappa_\theta$, the solver $S$ returns `no-candidate` or proposes a
vector. A proposed vector is admissible when it passes the model-solution
checks below. The solver may return `no-candidate` if it cannot certify such
a vector within its cap. Exact global minimizers are an admissible special
case; the local criterion also permits inexact steps satisfying the stated
conditions of [[lem-global-cubic-model-minimizer-decrease]].

The output is the last accepted iterate and one of `stationary`,
`target-achieved`, `outer-budget-exhausted`, `model-solver-failure`,
`inconsistent-model-solver`, `domain-exit`, or
`regularization-cap-exhausted`.

For $k=0,1,\ldots,N$, in order:

1. Compute $g_k:=\nabla f(x_k)$. If $g_k=0$, return $(x_k,\texttt{stationary})$.
   If $\|g_k\|_2\le\varepsilon$, return $(x_k,\texttt{target-achieved})$.
   If $k=N$, return $(x_k,\texttt{outer-budget-exhausted})$.
2. Set $B_k:=\nabla^2 f(x_k)$ and form the model
   $m_k(s)=f(x_k)+\langle g_k,s\rangle+\tfrac12s^TB_ks+
   \tfrac{\sigma_k}{3}\|s\|_2^3$ of
   [[def-adaptive-cubic-regularization-model]]. By
   [[cor-hessian-is-symmetric]], $B_k$ is symmetric. Put
   $a_k:=\|g_k\|_2$, $q_k:=g_k^TB_kg_k$, and compute the cubic Cauchy
   step
   $$s_{C,k}:=-t_{C,k}g_k,\qquad t_{C,k}:=\frac{-q_k+\sqrt{q_k^2+4\sigma_ka_k^5}} {2\sigma_ka_k^3}.$$
   Call $S(m_k,J,\kappa_\theta)$. If it returns `no-candidate`, return
   $(x_k,\texttt{model-solver-failure})$. For a proposed $s_k$, recompute
   $\operatorname{pred}_k:=m_k(0)-m_k(s_k)$ and
   $\nabla m_k(s_k):=g_k+B_ks_k+\sigma_k\|s_k\|_2s_k$. Check
   $$g_k^Ts_k+s_k^TB_ks_k+\sigma_k\|s_k\|_2^3=0, \qquad s_k^TB_ks_k+\sigma_k\|s_k\|_2^3\ge0,$$
   $$\|\nabla m_k(s_k)\|_2\le \kappa_\theta\min\{1,\|s_k\|_2\}\|g_k\|_2, \qquad m_k(s_k)\le m_k(s_{C,k}).$$
   If any check fails, or if $s_k=0$ or
   $\operatorname{pred}_k\le0$, return
   $(x_k,\texttt{inconsistent-model-solver})$.
3. If $x_k+s_k\notin U$, return $(x_k,\texttt{domain-exit})$ without
   evaluating $f$ there. Otherwise evaluate $f(x_k+s_k)$ and set
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

The finite cap, solver failure, inconsistent-solver, domain-exit, and
regularization-cap branches are explicit. The model-solution checks include
the two cubic conditions (4.1)–(4.2), residual condition TC.s, and the
Cauchy-model decrease condition of Cartis–Gould–Toint, Part II, §4. The
procedure alone makes no unconditional convergence or evaluation-complexity
claim.
