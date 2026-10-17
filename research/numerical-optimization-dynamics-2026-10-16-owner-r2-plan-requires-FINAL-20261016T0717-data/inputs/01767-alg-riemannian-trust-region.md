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
  - thm-stiefel-grassmann-tangent-projections
  - thm-complex-stiefel-grassmann-tangent-projections
  - prop-stiefel-grassmann-riemannian-gradient-formulas
  - prop-complex-grassmann-projector-energy-gradient
  - def-stiefel-qr-polar-retractions
  - thm-stiefel-retractions-are-first-order
  - def-complex-grassmann-polar-retraction
  - thm-complex-grassmann-polar-retraction-is-first-order
  - def-trust-region-quadratic-model-and-ratio
  - alg-trust-region-cauchy-step
  - lem-trust-region-cauchy-decrease
  - alg-trust-region-method
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
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

Let $M$ be a real Stiefel manifold $\operatorname{St}(n,r)$, a real
Grassmannian $\operatorname{Gr}(r,n)$, or a complex Grassmannian
$\operatorname{Gr}_{\mathbb C}(r,n)$, treating each tangent space as a real
inner-product space. Let $f:M\to\mathbb R$ be smooth and choose a QR or polar
retraction $R$ from the corresponding real or complex definition. Fix
$0<\eta_1<\eta_2<1$, $0<\gamma_{\rm dec}<1<\gamma_{\rm inc}$,
$0<\theta_C\le1$, a declared model-operator bound $M_B\ge0$, a maximum radius
$\Delta_{\max}>0$, an initial radius $0<\Delta_0\le\Delta_{\max}$, target
$\varepsilon\ge0$, and finite outer cap $N\in\mathbb N_0$. Each self-adjoint
real-linear model operator $B_x$ on the Stiefel tangent or Grassmann horizontal space must
satisfy $\|B_x\|\le M_B$. The subproblem routine $S$ has a finite budget and
returns a candidate tangent vector or failure.

Starting at $x_0$, for $k=0,\ldots,N$ in order:

1. Set $g_k=\operatorname{grad}f(x_k)$. Return (x_k, stationary) if
   $g_k=0$, (x_k, target-achieved) if $\|g_k\|\le\varepsilon$, and
   (x_k, outer-budget-exhausted) if $k=N$.
2. Form the pullback quadratic model
   $$m_k(s)=f(x_k)+\langle g_k,s\rangle+\tfrac12\langle s,B_{x_k}s\rangle.$$
   With $c_k=\langle g_k,B_{x_k}g_k\rangle$, set
   $$\tau_k=\begin{cases}\Delta_k/\|g_k\|,&c_k\le0,\\ \min\{\|g_k\|^2/c_k,\Delta_k/\|g_k\|\},&c_k>0,\end{cases} \qquad p_C=-\tau_k g_k.$$
   This is the coordinate-free negative-gradient segment minimizer of
   [[alg-trust-region-cauchy-step]]. Set
   $P_C=m_k(0)-m_k(p_C)>0$.
3. Query $S$. Use its candidate $q$ only if it returned a vector,
   $\|q\|\le\Delta_k$, and
   $m_k(0)-m_k(q)\ge\theta_C P_C$; otherwise use $p_C$. If
   $\Delta_k\le\|g_k\|/(2M_B)$, replace the candidate by $p_C$, interpreting
   that threshold as $+\infty$ when $M_B=0$. Set
   $P_k=m_k(0)-m_k(p_k)$.
4. Form $y_k=R_{x_k}(p_k)$ and
   $\rho_k=(f(x_k)-f(y_k))/P_k$. If the trial objective cannot be evaluated,
   return (x_k, model-evaluation-failure).
5. If $\rho_k<\eta_1$, reject and set
   $(x_{k+1},\Delta_{k+1})=(x_k,\gamma_{\rm dec}\Delta_k)$. Otherwise accept
   and set $x_{k+1}=y_k$. If also $\rho_k\ge\eta_2$ and $\|p_k\|=\Delta_k$,
   set $\Delta_{k+1}=\min\{\gamma_{\rm inc}\Delta_k,\Delta_{\max}\}$; in every
   other accepted case set $\Delta_{k+1}=\Delta_k$.

Return the last accepted point with the corresponding stop status. A failed
finite subproblem call falls back to the Cauchy step; the outer cap remains a
possible stop and finite budget alone implies no convergence.

## Facts & Assumptions

**Given:** The smooth objective, current tangent gradient, self-adjoint real-linear model operator with bound $M_B$, radius and finite budgets, and selected retraction.

[F1] A trust-region model has predicted decrease $m(0)-m(p)$ and an actual-to-predicted ratio only when the predicted decrease is positive ([[def-trust-region-quadratic-model-and-ratio]]).

[F2] The Cauchy step has predicted decrease at least $\tfrac12\|g\|\min\{\Delta,\|g\|/\|B\|\}$, with the zero-matrix convention ([[lem-trust-region-cauchy-decrease]]).

[F3] The real Stiefel and Grassmann gradients and the complex projector-energy gradient lie in their model tangent or horizontal spaces ([[prop-stiefel-grassmann-riemannian-gradient-formulas]], [[prop-complex-grassmann-projector-energy-gradient]]).

[F4] A valid tangent step is mapped to a Stiefel or Grassmann point by the selected real or complex retraction ([[def-stiefel-qr-polar-retractions]], [[def-complex-grassmann-polar-retraction]]).

[F5] The current Euclidean supplier algorithm uses the same Cauchy-fraction, small-radius safeguard, ratio thresholds and radius-update branches stated here ([[alg-trust-region-method]]).

## Proof

**Proof technique:** verify positive predicted reduction, defined trial ratios, and the finite outer status branches.

1.1 For a nonstationary iterate, [F3] places $g_k$ in the stated model space. The Cauchy step has $P_C>0$ by [F2]. A qualifying solver candidate has predicted decrease at least $\theta_C P_C$; either fallback selects $p_C$, whose decrease is at least $\theta_C P_C$ because $\theta_C\le1$. The small-radius safeguard also selects $p_C$. Hence $P_k\ge\theta_C P_C>0$ in every trial that proceeds, and [F1] makes the ratio denominator positive. [F1, F2, F3, given, cases, algebra]

1.2 Initially $\Delta_0\le\Delta_{\max}$. A rejection multiplies a positive radius by $\gamma_{\rm dec}\in(0,1)$; an accepted non-growth branch preserves it; and a growth branch replaces it by $\min\{\gamma_{\rm inc}\Delta_k,\Delta_{\max}\}$. Thus every radius stays positive and at most $\Delta_{\max}$, while each accepted radius ratio lies in $[1,\gamma_{\rm inc}]$. [F5, given, cases, induction, algebra]

2.1 By [F4], every valid tangent step yields a defined trial point on $M$. A failed, infeasible or insufficient-decrease solver candidate uses the Cauchy fallback; stationary, target, outer-cap and evaluation-failure branches have explicit statuses. In the remaining branch the ratio is defined by step 1.1, and [F5] supplies the same reject/accept and radius-update cases as the stated OPT3 interface. [F4, F5, given, step 1.1, cases]

3.1 A rejected trial leaves the point unchanged. An accepted trial has $\rho_k\ge\eta_1>0$ and $P_k>0$, so $f(x_{k+1})=f(x_k)-\rho_kP_k<f(x_k)$. The outer loop is capped at $N$ trials and returns its last accepted point if no earlier status applies. [given, step 1.1, step 2.1, step 1.2, algebra] ∎
