---
id: thm-riemannian-trust-region-first-order-complexity
kind: theorem
title: Riemannian trust regions reach an epsilon-gradient iterate
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 8
deps:
  - alg-riemannian-trust-region
  - lem-riemannian-trust-region-ratio-accuracy-for-small-radii
  - lem-trust-region-cauchy-decrease
  - prop-stiefel-grassmann-are-compact
  - prop-complex-stiefel-grassmann-are-compact
  - thm-extreme-value-metric
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - lem-natural-logarithm-bounded-by-argument
  - thm-of-archimedean
  - lem-geometric-sequence-null
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

## Statement

Let $M$ be a compact real Stiefel manifold or real Grassmannian, or a compact
complex Grassmannian, let $f:M\to\mathbb R$ be smooth, and set
$f_{\inf}=\min_M f$. Assume the pullback
gradients of the chosen first-order retraction are uniformly $L_R$-Lipschitz
on every trial ball, and each self-adjoint real-linear model operator satisfies
$\|B_x\|\le M_B$. Run [[alg-riemannian-trust-region]] with fixed
$0<\eta_1<\eta_2<1$, $0<\gamma_{\rm dec}<1<\gamma_{\rm inc}$,
$0<\theta_C\le1$, $0<\Delta_0\le\Delta_{\max}$, and target
$0<\varepsilon\le1$. Assume every model and objective evaluation on a valid
trial is available. The counts concern the uncapped trial sequence up to its
first target iterate; for the finite-cap implementation, choose an outer cap
at least the resulting total-trial bound.

Using $+\infty$ for reciprocals of zero, define
$$c_\delta=\min\left\{\frac1{2M_B}, \frac{\theta_C(1-\eta_2)}{2(L_R+M_B)}\right\},\qquad c_R=\min\{\Delta_0,\gamma_{\rm dec}\min\{c_\delta,\Delta_{\max}\}\},$$
$$c_P=\min\{c_R,1/M_B\},\qquad c_S=\tfrac12\eta_1\theta_Cc_P>0,\qquad r_\varepsilon=\min\{\Delta_0,\gamma_{\rm dec}\min\{c_\delta\varepsilon,\Delta_{\max}\}\}.$$
Then the number $N_s$ of accepted steps and $N_u$ of rejected trials before
the first iterate with $\|\operatorname{grad}f(x_k)\|\le\varepsilon$ obey
$$N_s\le\frac{f(x_0)-f_{\inf}}{c_S\varepsilon^2},\qquad N_u\le \frac{\log(\Delta_0/r_\varepsilon)+N_s\log\gamma_{\rm inc}} {|\log\gamma_{\rm dec}|}.$$
Consequently accepted steps and total trials $N_s+N_u$ are
$O(\varepsilon^{-2})$ as $\varepsilon\downarrow0$, with all displayed
constants fixed. Such a finite cap suffices to return the target-achieved
status; a smaller cap may return outer-budget-exhausted first. The constants
and proof count accepted and rejected outer trials; they do not bound inner subproblem
operations.

## Facts & Assumptions

**Given:** Compact search manifold, smooth objective, uniform pullback-gradient Lipschitz and self-adjoint real-linear model-operator bounds, and the trust-region parameter ranges and subproblem safeguards in the Statement.

[F1] The finite-budget Riemannian method uses the $\eta_1,\eta_2$ ratio thresholds, $\gamma_{\rm dec},\gamma_{\rm inc}$ radius branches, and the $\theta_C$ Cauchy-decrease safeguard ([[alg-riemannian-trust-region]]).

[F2] At sufficiently small radius, the pullback actual-to-predicted ratio is at least $\eta_2$ ([[lem-riemannian-trust-region-ratio-accuracy-for-small-radii]]).

[F3] The Cauchy step decrease is at least $\tfrac12\|g\|\min\{\Delta,\|g\|/\|B\|\}$, with the zero-operator convention ([[lem-trust-region-cauchy-decrease]]).

[F4] The objective attains a finite minimum on a compact real or complex Stiefel/Grassmann manifold ([[prop-stiefel-grassmann-are-compact]], [[prop-complex-stiefel-grassmann-are-compact]], [[thm-extreme-value-metric]]).

[F5] The natural logarithm is increasing and obeys product and quotient laws ([[def-natural-logarithm]], [[thm-natural-logarithm-laws]]).

[F6] For $y\ge1$, $0\le\log y\le y$ ([[lem-natural-logarithm-bounded-by-argument]]).

[F7] Every real number is exceeded by an integer ([[thm-of-archimedean]]).

[F8] If $0<q<1$, then $q^j\to0$ ([[lem-geometric-sequence-null]]).

## Proof

**Proof technique:** derive a radius floor from small-radius rejection accuracy, then count successful decreases and rejected contractions.

1.1 Fix $0<\varepsilon\le1$ and write $\bar\delta_\varepsilon=\min\{c_\delta\varepsilon,\Delta_{\max}\}$. Whenever $\|g_k\|>\varepsilon$ and $\Delta_k\le\bar\delta_\varepsilon$, the hypotheses of [F2] hold because $\Delta_k\le c_\delta\|g_k\|$. Thus $\rho_k\ge\eta_2>\eta_1$, and [F1] forbids rejection. Therefore every radius before target is at least $$r_\varepsilon=\min\{\Delta_0,\gamma_{\rm dec}\bar\delta_\varepsilon\}>0.$$ Indeed the initial radius has this bound; an accepted update does not shrink it, and a rejected update starts above $\bar\delta_\varepsilon$ and leaves a radius above $\gamma_{\rm dec}\bar\delta_\varepsilon$. Induction proves the claim. [F1, F2, given, induction, algebra]

2.1 If the target were never reached in the uncapped process, an infinite block of rejections would multiply a fixed radius by $\gamma_{\rm dec}^j\to0$ by [F8], eventually contradicting step 1.1. Hence there would be infinitely many accepted steps. For every such step, $\|g_k\|>\varepsilon$ and $$r_\varepsilon\ge c_R\varepsilon,\qquad \min\{\Delta_k,\|g_k\|/M_B\}\ge c_P\varepsilon.$$ Since $\varepsilon\le1$, $\Delta_0\ge\varepsilon\Delta_0$ and $\min\{c_\delta\varepsilon,\Delta_{\max}\}\ge \varepsilon\min\{c_\delta,\Delta_{\max}\}$. Taking the minimum of these lower bounds gives $r_\varepsilon\ge c_R\varepsilon$. Also $\|g_k\|/M_B>\varepsilon/M_B$ and $\Delta_k\ge r_\varepsilon$, so $\min\{\Delta_k,\|g_k\|/M_B\}\ge c_P\varepsilon$, with the zero-denominator convention when $M_B=0$. By [F1] and [F3], the predicted decrease is at least $\tfrac12\theta_Cc_P\varepsilon^2$. Since an accepted step has $\rho_k\ge\eta_1$, its actual decrease is at least $c_S\varepsilon^2$. Choose by [F7] an integer $m>(f(x_0)-f_{\inf})/(c_S\varepsilon^2)$. After $m$ accepted steps the objective would be below $f_{\inf}$, a contradiction. Thus the target is reached after finitely many accepted steps, and summing their decreases gives $N_s\le(f(x_0)-f_{\inf})/(c_S\varepsilon^2)$. [F1, F3, F7, F8, given, step 1.1, choose, assume-contra, discharge-contradiction, algebra]

2.2 If the initial point already meets the target, then $N_s=N_u=0$ and the bounds hold. Otherwise let $\Delta_T$ be the radius after the accepted step that first reaches the target. Each rejected trial multiplies the radius by $\gamma_{\rm dec}$, and each accepted update multiplies it by a factor $q_j\in[1,\gamma_{\rm inc}]$. Hence $$\Delta_T=\Delta_0\gamma_{\rm dec}^{N_u}\prod_{j=1}^{N_s}q_j, \qquad \Delta_T\ge r_\varepsilon$$ by step 1.1. Taking logarithms using [F5], then rearranging and using $\log q_j\le\log\gamma_{\rm inc}$, gives $$N_u|\log\gamma_{\rm dec}| =\log(\Delta_0/\Delta_T)+\sum_{j=1}^{N_s}\log q_j \le\log(\Delta_0/r_\varepsilon)+N_s\log\gamma_{\rm inc}.$$ This is the asserted rejected-trial bound. [F1, F5, given, step 1.1, algebra]

3.1 By [F4], compactness and continuity give the finite lower bound $f_{\inf}=\min_M f$. The definitions imply $r_\varepsilon\ge c_R\varepsilon$, so [F5] gives $$\log(\Delta_0/r_\varepsilon)\le \log(\Delta_0/(c_R\varepsilon)) =\log(\Delta_0/c_R)+\log(1/\varepsilon).$$ By [F6], $\log(1/\varepsilon)\le1/\varepsilon\le1/\varepsilon^2$ for $0<\varepsilon\le1$. Thus this radius term is $O(\varepsilon^{-2})$; the successful-step estimate above gives the same order for $N_s$, and step 2.2 gives it for $N_u$. Choosing an integer outer cap no smaller than the resulting trial bound therefore suffices. [F4, F5, F6, given, step 2.1, step 2.2, algebra] ∎
