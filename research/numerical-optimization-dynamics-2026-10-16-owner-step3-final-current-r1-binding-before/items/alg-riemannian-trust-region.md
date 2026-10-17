---
id: alg-riemannian-trust-region
kind: algorithm
title: Finite-budget Riemannian trust-region method
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - def-stiefel-grassmann-optimization-conventions
  - def-complex-stiefel-grassmann-optimization-conventions
  - def-riemannian-gradient-of-a-smooth-function
  - def-stiefel-qr-polar-retractions
  - thm-stiefel-retractions-are-first-order
  - def-complex-grassmann-polar-retraction
  - thm-complex-grassmann-polar-retraction-is-first-order
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
  - title: "P.-A. Absil, R. Mahony, and R. Sepulchre, Optimization Algorithms on Matrix Manifolds, Chapter 7 (2008)"
    url: "https://assets.press.princeton.edu/chapters/absil/Absil_Chap7.pdf"
    locator: "Complete 32-page chapter, §§7.2–7.4.1: Riemannian pullback models, ratio/radius branches, Cauchy decrease and first-order analysis."
  - title: "Nicolas Boumal, P.-A. Absil, and Coralia Cartis, Global rates of convergence for nonconvex optimization on manifolds (2018), arXiv v2"
    url: "https://arxiv.org/pdf/1605.08101"
    locator: "Complete 33-page PDF, §§3.1–3.4 and Appendices B–C: pullback regularity, model decrease, radius bounds and O(epsilon^-2) counts."
  - title: "Nicolas Boumal, An Introduction to Optimization on Smooth Manifolds (2023 prepublication)"
    url: "https://www.nicolasboumal.net/book/IntroOptimManifolds_Boumal_2023.pdf"
    locator: "Complete 367-page book, §§6.4–6.5: Riemannian trust-region subproblems and model conditions."
verification:
  precheck: n/a
---

## Definition

Let $1\le r\le n$. Let $M$ be a real Stiefel manifold
$\operatorname{St}(n,r)$, a real Grassmannian $\operatorname{Gr}(r,n)$, or a
complex Grassmannian $\operatorname{Gr}_{\mathbb C}(r,n)$, with each tangent
space regarded as a real inner-product space under the corresponding
Frobenius metric. On a real Stiefel manifold or real Grassmannian choose the
induced map of either the real QR or real polar formula from
[[def-stiefel-qr-polar-retractions]]; on a complex Grassmannian choose the
complex polar map from [[def-complex-grassmann-polar-retraction]]. Denote the
chosen map by $R$. Let $f:M\to\mathbb R$ be of class $C^2$ and take an initial point
$x_0\in M$. For this regularity, $\operatorname{grad}f(x)$ denotes the
pointwise metric dual of $df_x$: in any orthonormal real basis $e_i$ of
$T_xM$, it is $\sum_i df_x(e_i)e_i$ (the empty sum is zero). This
convention agrees with [[def-riemannian-gradient-of-a-smooth-function]]
when $f$ is smooth; no infinitely differentiable gradient field is required.

Fix $0<\eta_1<\eta_2<1$, $0<\gamma_{\rm dec}<1<\gamma_{\rm inc}$,
$0<\theta_C\le1$, a declared model-operator bound $M_B\ge0$, a maximum
radius $\Delta_{\max}>0$, an initial radius $0<\Delta_0\le\Delta_{\max}$,
target $\varepsilon\ge0$, and finite outer cap $N\in\mathbb N_0$. Each
self-adjoint real-linear model operator $B_x$ on the Stiefel tangent or
Grassmann horizontal space must satisfy $\|B_x\|_{\rm op}\le M_B$, where
$$\|B_x\|_{\rm op}:=\sup_{s\ne0}\frac{\|B_xs\|}{\|s\|},$$
with $\|B_x\|_{\rm op}=0$ when the tangent space is $\{0\}$. Supply a
subproblem routine $S$ with a finite operation cap $J_S\in\mathbb N_0$; on
input of the current model $m_k$, radius $\Delta_k$, and tangent or horizontal
space, it terminates within that cap and returns either a vector in that space
or `failure`. No quality guarantee is required because the returned vector is
checked below.

Starting with $x_0$ and $\Delta_0$, process $k=0,\ldots,N$ in order:

1. Set $g_k=\operatorname{grad}f(x_k)$. Return $(x_k,\texttt{stationary})$ if
   $g_k=0$, $(x_k,\texttt{target-achieved})$ if $\|g_k\|\le\varepsilon$, and
   $(x_k,\texttt{outer-budget-exhausted})$ if $k=N$.
2. Form the real pullback quadratic model
   $$m_k(s)=f(x_k)+\langle g_k,s\rangle+\tfrac12\langle s,B_{x_k}s\rangle.$$
   With $c_k=\langle g_k,B_{x_k}g_k\rangle$, set
   $$\tau_k=\begin{cases}\Delta_k/\|g_k\|,&c_k\le0,\\ \min\{\|g_k\|^2/c_k,\Delta_k/\|g_k\|\},&c_k>0,\end{cases} \qquad p_C=-\tau_k g_k,$$
   and set $P_C=m_k(0)-m_k(p_C)$.
3. Call $S$ on $(m_k,\Delta_k)$ in the current tangent or horizontal space. If
   it returned a vector $q$ with $\|q\|\le\Delta_k$ and
   $m_k(0)-m_k(q)\ge\theta_C P_C$, set $p_k=q$; otherwise set $p_k=p_C$. If
   $\Delta_k\le\|g_k\|/(2M_B)$, replace the candidate by $p_k=p_C$, interpreting
   that threshold as $+\infty$ when $M_B=0$. Set
   $P_k=m_k(0)-m_k(p_k)$.
4. If $P_k\le0$, return $(x_k,\texttt{model-evaluation-failure})$. Otherwise
   evaluate $y_k=R_{x_k}(p_k)$; if the selected retraction is unavailable,
   return $(x_k,\texttt{model-evaluation-failure})$. If $f(y_k)$ cannot be
   evaluated, return the same status. Otherwise set
   $\rho_k=(f(x_k)-f(y_k))/P_k$.
5. If $\rho_k<\eta_1$, reject and set
   $(x_{k+1},\Delta_{k+1})=(x_k,\gamma_{\rm dec}\Delta_k)$. Otherwise accept
   and set $x_{k+1}=y_k$. If also $\rho_k\ge\eta_2$ and $\|p_k\|=\Delta_k$,
   set $\Delta_{k+1}=\min\{\gamma_{\rm inc}\Delta_k,\Delta_{\max}\}$; in every
   other accepted case set $\Delta_{k+1}=\Delta_k$.

Return the last accepted point with the corresponding stop status. A failed
finite subproblem call, infeasible candidate, or candidate that misses the
fraction-of-Cauchy test uses $p_C$.
