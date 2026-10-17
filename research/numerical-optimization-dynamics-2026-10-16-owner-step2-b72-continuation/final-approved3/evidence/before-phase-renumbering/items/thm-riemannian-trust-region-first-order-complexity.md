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

Let $1\le r\le n$, and let $M$ be a compact real Stiefel manifold
$\operatorname{St}(n,r)$, a compact real Grassmannian $\operatorname{Gr}(r,n)$,
or a compact complex Grassmannian $\operatorname{Gr}_{\mathbb C}(r,n)$. Let
$f:M\to\mathbb R$ be of class $C^2$ and take $x_0\in M$; set
$f_{\inf}=\min_M f$, whose existence is proved below. Equip each tangent or
horizontal space with its real Frobenius inner product. For each self-adjoint
real-linear model operator $B_x$, define
$$\|B_x\|_{\rm op}:=\sup_{s\ne0}\frac{\|B_xs\|}{\|s\|},$$
with value $0$ on a zero tangent space, and assume $\|B_x\|_{\rm op}\le M_B$
for some $M_B\ge0$. Assume the pullback gradients of the chosen first-order
retraction are uniformly $L_R$-Lipschitz on every trial ball of radius at most
$\Delta_{\max}$, for some $L_R\ge0$. Run
[[alg-riemannian-trust-region]] with fixed
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
constants fixed. Such a finite cap suffices to return either stationary or target-achieved
status, in both cases with gradient norm at most $\varepsilon$; a smaller cap may return outer-budget-exhausted first. The constants
and proof count accepted and rejected outer trials; they do not bound inner subproblem
operations.

## Facts & Assumptions

**Given:** Compact search manifold, $C^2$ objective with the pointwise gradient convention of [[alg-riemannian-trust-region]], uniform pullback-gradient Lipschitz and self-adjoint real-linear model-operator bounds, and the trust-region parameter ranges and subproblem safeguards in the Statement.

[F1] The finite-budget Riemannian method uses the $\eta_1,\eta_2$ ratio thresholds, $\gamma_{\rm dec},\gamma_{\rm inc}$ radius branches, and the $\theta_C$ Cauchy-decrease safeguard ([[alg-riemannian-trust-region]]).

[F2] At sufficiently small radius, the pullback actual-to-predicted ratio is at least $\eta_2$ ([[lem-riemannian-trust-region-ratio-accuracy-for-small-radii]]).

[F3] In orthonormal real coordinates, the Cauchy step decrease is at least $\tfrac12\|g\|\min\{\Delta,\|g\|/\|B_x\|_{\rm op}\}$, with the zero-operator convention ([[lem-trust-region-cauchy-decrease]]).

[F4] The real and complex Stiefel frame sets are nonempty compact metric subspaces of finite-dimensional real coordinate spaces, and the quotient maps to the Grassmannians are continuous and onto ([[prop-stiefel-grassmann-are-compact]], [[prop-complex-stiefel-grassmann-are-compact]]). A continuous real-valued function on a nonempty compact metric space attains its minimum ([[thm-extreme-value-metric]]).

[F5] The natural logarithm is increasing and obeys product and quotient laws ([[def-natural-logarithm]], [[thm-natural-logarithm-laws]]).

[F6] For $y\ge1$, $0\le\log y\le y$ ([[lem-natural-logarithm-bounded-by-argument]]).

[F7] Every real number is exceeded by an integer ([[thm-of-archimedean]]).

[F8] If $0<q<1$, then $q^j\to0$ ([[lem-geometric-sequence-null]]).

## Proof

**Proof technique:** establish an attained lower bound, derive a radius floor,
then count accepted decreases and rejected contractions.

1.1 If $M=\operatorname{St}(n,r)$, the real-coordinate Stiefel set is a nonempty compact metric space by [F4], so [F4] gives an attained minimum of $f$. If $M$ is either Grassmannian, let $q$ be its continuous surjective quotient map from the corresponding real or complex Stiefel set. Then $f\circ q$ is continuous on that nonempty compact metric frame set and attains its minimum by [F4]. Surjectivity makes this the minimum of $f$ on $M$. Thus $f_{\inf}$ is finite and attained in every case. [F4, given, cases]

1.2 The pointwise gradient convention requires only differentiability. In an orthonormal real tangent basis $e_i$, write $v=\sum_i v_i e_i$ and $G=\sum_i df_x(e_i)e_i$. Then $\langle G,v\rangle=\sum_i df_x(e_i)v_i=df_x(v)$ by linearity, and if $H$ has the same pairing with every $v$, taking $v=G-H$ gives $\|G-H\|^2=0$, hence $G=H$. The zero tangent space has $G=0$. Thus the gradient is well-defined for a $C^2$ objective. First-order retraction differentiation identifies it with the pullback gradient at zero, as in [F2]; all subsequent estimates require only the stated pullback Lipschitz bound and the continuity used in step 1.1. [F1, F2, given, step 1.1, algebra]

2.1 Fix $0<\varepsilon\le1$ and write $\bar\delta_\varepsilon=\min\{c_\delta\varepsilon,\Delta_{\max}\}$. Whenever $\|g_k\|>\varepsilon$ and $\Delta_k\le\bar\delta_\varepsilon$, the hypotheses of [F2] hold because $\Delta_k\le c_\delta\|g_k\|$. Thus $\rho_k\ge\eta_2>\eta_1$, and [F1] forbids rejection. Therefore every radius before target is at least $$r_\varepsilon=\min\{\Delta_0,\gamma_{\rm dec}\bar\delta_\varepsilon\}>0.$$ Indeed the initial radius has this bound; an accepted update does not shrink it, and a rejected update starts above $\bar\delta_\varepsilon$ and leaves a radius above $\gamma_{\rm dec}\bar\delta_\varepsilon$. Induction proves the claim. [F1, F2, given, induction, algebra]

3.1 Choose orthonormal real coordinates on each finite-dimensional tangent or horizontal space. In those coordinates [F3] applies and the matrix norm of $B_x$ is $\|B_x\|_{\rm op}$. If $\|g_k\|>\varepsilon$, then $$r_\varepsilon\ge c_R\varepsilon,\qquad \min\{\Delta_k,\|g_k\|/\|B_{x_k}\|_{\rm op}\}\ge c_P\varepsilon,$$ with the stated infinite-ratio convention when $M_B=0$. The first inequality follows from $\varepsilon\le1$ and the definitions of $r_\varepsilon,c_R$; the second follows from $\Delta_k\ge r_\varepsilon$, $\|g_k\|>\varepsilon$, and $\|B_{x_k}\|_{\rm op}\le M_B$. By [F1] and [F3], the selected step has predicted decrease at least the Cauchy fraction, hence at least $\tfrac12\theta_Cc_P\varepsilon^2$. Every accepted step has $\rho_k\ge\eta_1$, so its actual decrease is at least $c_S\varepsilon^2$. Run the update rule without applying the outer cap. If the target were never reached and only finitely many steps were accepted, the resulting infinite block of rejections would keep the point fixed and force its radius to zero by [F8], contradicting the radius floor in step 2.1. Thus the uncapped process must have infinitely many accepted steps unless it reaches the target. By [F7], choose an integer $m>(f(x_0)-f_{\inf})/(c_S\varepsilon^2)$. After $m$ accepted steps the objective would be below $f_{\inf}$, a contradiction. Thus the target is reached after finitely many accepted steps. Summing their decreases and using step 1.1 gives $$N_s\le\frac{f(x_0)-f_{\inf}}{c_S\varepsilon^2}.$$ [F1, F3, F7, F8, given, step 1.1, step 2.1, choose, assume-contra, discharge-contradiction, algebra]

3.2 If the initial point already meets the target, then $N_s=N_u=0$ and the bounds hold. Otherwise let $\Delta_T$ be the radius after the accepted step that first reaches the target. Each rejected trial multiplies the radius by $\gamma_{\rm dec}$, and each accepted update multiplies it by a factor $q_j\in[1,\gamma_{\rm inc}]$. Hence $$\Delta_T=\Delta_0\gamma_{\rm dec}^{N_u}\prod_{j=1}^{N_s}q_j, \qquad \Delta_T\ge r_\varepsilon$$ by step 2.1. Taking logarithms using [F5], then rearranging and using $\log q_j\le\log\gamma_{\rm inc}$, gives $$N_u|\log\gamma_{\rm dec}| =\log(\Delta_0/\Delta_T)+\sum_{j=1}^{N_s}\log q_j \le\log(\Delta_0/r_\varepsilon)+N_s\log\gamma_{\rm inc}.$$ This is the asserted rejected-trial bound. [F1, F5, given, step 2.1, algebra]

4.1 By step 1.1, $f_{\inf}$ is finite. The definitions give $r_\varepsilon\ge c_R\varepsilon$, so [F5] gives $$\log(\Delta_0/r_\varepsilon) \le \log(\Delta_0/(c_R\varepsilon)) =\log(\Delta_0/c_R)+\log(1/\varepsilon).$$ By [F6], $\log(1/\varepsilon)\le1/\varepsilon\le1/\varepsilon^2$ for $0<\varepsilon\le1$. Thus this radius term is $O(\varepsilon^{-2})$; step 3.1 gives the same order for $N_s$, and step 3.2 gives it for $N_u$. A finite integer outer cap at least the resulting trial bound therefore suffices to return stationary or target-achieved. The algorithm tests zero gradient first, so stationary is possible; either return has gradient norm at most $\varepsilon$. [F1, F5, F6, given, step 1.1, step 2.1, step 3.1, step 3.2, algebra] ∎