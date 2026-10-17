---
id: thm-adaptive-cubic-regularization-epsilon-complexity
kind: theorem
title: "Adaptive cubic regularization reaches first-order accuracy in O(ε⁻³ᐟ²) evaluations"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - alg-adaptive-cubic-regularization
  - def-adaptive-cubic-regularization-model
  - def-hessian-and-euclidean-critical-point
  - cor-hessian-is-symmetric
  - def-euclidean-inner-product
  - def-induced-matrix-p-norm
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized
  - lem-global-cubic-model-minimizer-decrease
  - lem-adaptive-cubic-unsuccessful-iteration-count
  - cor-mean-value-theorem
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Coralia Cartis, Nicholas I. M. Gould, and Philippe L. Toint, Adaptive cubic overestimation methods for unconstrained optimization. Part II: worst-case iteration complexity (author preprint)"
      url: "https://perso.unamur.be/~phtoint/pubs/TR07-05b.pdf"
      locator: "§§4–5.1 and Corollary 5.3: Lipschitz-Hessian complexity and the O(ε⁻³ᐟ²) bound for first-order accuracy under inexact model conditions."
    - title: "Yurii Nesterov and Boris T. Polyak, Cubic regularization of a Newton scheme and its global performance"
      url: "https://webdoc.sub.gwdg.de/ebook/serien/e/CORE/dp2003-41.pdf"
      locator: "§2, Lemma 1 and equations (2.4)–(2.7), printed pp. 3–5 / PDF pp. 3–5: cubic model, Lipschitz-Hessian remainder, global-model stationarity, and model decrease; §§3–4: global behavior."
---

## Statement

Let $n\ge1$, and let $f:\mathbb R^n\to\mathbb R$ be $C^2$ and bounded
below by $f_{inf}$.
Run [[alg-adaptive-cubic-regularization]] with exact Hessians and parameters
$0<\eta_1<\eta_2<1$, $\gamma_{up}>1$, $0<\gamma_{down}<1$,
$0<\kappa<1$, $0<\kappa_\theta<1$, and
$0<\sigma_{min}\le\sigma_k\le\sigma_{max}$ with $\sigma_{max}\ge3L$.
Suppose the Hessian is $L$-Lipschitz on every trial segment, and let
$0<\varepsilon\le1$. Let $R\in\mathbb N_0$ satisfy
$\gamma_{up}^R\sigma_{min}\ge3L$ (take $R=0$ if
$\sigma_{min}\ge3L$).

For the counts below, use the trajectory that follows the trial,
acceptance/rejection, and regularization-update rules of
[[alg-adaptive-cubic-regularization]] with its finite outer-cap return
omitted. The finite-cap conclusion then reinstates that return.

The algorithm has two complexity guarantees.

1. **Exact model minimizers.** If every solver call returns an exact global
   minimizer, define
   $$C_g:=\sigma_{max}+\sqrt n\,L,\qquad c_g:=\frac{\eta_1\sigma_{min}}{6C_g^{3/2}}.$$
   Through the first iterate with gradient norm at most $\varepsilon$, the
   numbers $N_s$ of accepted steps and $N_u$ of rejected trials satisfy
   $$N_s\le [f(x_0)-f_{inf}]c_g^{-1}\varepsilon^{-3/2}+1,\qquad N_u\le R N_s.$$

2. **Admissible inexact model steps.** Suppose each solver-success candidate
   passes the cubic solution, residual, and Cauchy-decrease checks in
   [[alg-adaptive-cubic-regularization]], and $\nabla f$ is $K$-Lipschitz
   on every trial segment. If the solver succeeds at every nonterminal
   trial, define
   $$D_g:=\frac{\sigma_{max}+\sqrt n\,L+\kappa_\theta K} {1-\kappa_\theta},\qquad c_a:=\frac{\eta_1\sigma_{min}}{6D_g^{3/2}}.$$
   Then the same counts satisfy
   $$N_s\le [f(x_0)-f_{inf}]c_a^{-1}\varepsilon^{-3/2}+1,\qquad N_u\le R N_s.$$

In either case the uncapped process reaches a stationary or target-achieved
iterate with gradient norm at most $\varepsilon$. For the finite-cap
algorithm, an outer cap at least
$$(R+1)\left(\frac{f(x_0)-f_{inf}}{c\,\varepsilon^{3/2}}+1\right)$$
suffices, where $c=c_g$ in case 1 and $c=c_a$ in case 2. The resulting
number of outer trials, and their function, gradient, and Hessian evaluation
counts, are $O(\varepsilon^{-3/2})$. These counts do not bound the internal
work of the model solver.

## Facts & Assumptions

**Given:** The smoothness, lower-bound, solver, and weight assumptions of the Statement and the ARC update rules.

[F1] [[alg-adaptive-cubic-regularization]]: a trial is accepted exactly when $\rho_k\ge\eta_1$; rejected trials leave $x_k$ unchanged and increase $\sigma_k$ by the capped factor $\gamma_{up}$. A solver-success candidate passes the two cubic solution conditions and residual bound in its Definition.

[F2] [[lem-global-cubic-model-minimizer-decrease]]: every global model minimizer has zero cubic-model gradient and model decrease at least $\sigma_k\|s_k\|_2^3/6$ when $g_k\ne0$; every candidate satisfying the two cubic solution conditions has the same decrease bound.

[F3] [[lem-adaptive-cubic-unsuccessful-iteration-count]]: with an $L$-Lipschitz Hessian, exact Hessians, solver candidates satisfying the cubic decrease conditions, $\sigma_{max}\ge3L$, and the stated regularization updates, every block of rejected trials has length at most $R$.

[F4] [[cor-hessian-is-symmetric]]: the Hessian of a $C^2$ scalar field is symmetric.

[F5] [[cor-mean-value-theorem]]: a scalar function continuous on a closed interval and differentiable in its interior has an interior point where its derivative equals its endpoint slope.

[F6] [[thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized]]: $\|Av\|_2\le\|A\|_2\|v\|_2$.

[F7] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|u^Tv|\le\|u\|_2\|v\|_2$.

[F8] [[def-euclidean-inner-product]]: each standard coordinate vector has Euclidean norm $1$, and the Euclidean norm is induced by the standard inner product.

[A1] The Hessian is $L$-Lipschitz on every trial segment.

[A2] The objective satisfies $f(x)\ge f_{inf}$ for all $x$.

[A3] The weights remain in $[\sigma_{min},\sigma_{max}]$ and $\sigma_{max}\ge3L$.

## Proof

**Given:** The hypotheses in the Statement.

1.1 On any trial segment, put $s=s_k$ and, for each coordinate $i$, let $e_i$ be its standard basis vector and $$r_i(t):=e_i^T\big(\nabla f(x_k+ts)-g_k-tB_ks\big), \qquad 0\le t\le1.$$ Since $B_k=\nabla^2f(x_k)$ by the algorithm and [F4] confirms its symmetry, $r_i(0)=0$ and $$r_i'(t)=e_i^T\big(\nabla^2f(x_k+ts)-B_k\big)s.$$ By [A1], [F6], [F7], and [F8], $|r_i'(t)|\le Lt\|s\|_2^2$. Applying [F5] to $r_i$ on $[0,1]$ gives $|r_i(1)|\le L\|s\|_2^2$. Consequently, $$\|\nabla f(x_k+s)-g_k-B_ks\|_2\le\sqrt n L\|s\|_2^2.$$ [given, A1, F4, F5, F6, F7, algebra]

2.1 In case 1, at a nonstationary accepted trial, the exact model-minimizer condition in [F2] and step 1.1 yield $$\|\nabla f(x_{k+1})\|_2 \le(\sigma_k+\sqrt n L)\|s_k\|_2^2 \le C_g\|s_k\|_2^2.$$ If the accepted trial is nonterminal, then $\|\nabla f(x_{k+1})\|_2>\varepsilon$, so $\|s_k\|_2>(\varepsilon/C_g)^{1/2}$. By [F2], its predicted reduction is greater than $\sigma_{min}(\varepsilon/C_g)^{3/2}/6$. Acceptance therefore decreases $f$ by more than $c_g\varepsilon^{3/2}$. Summing over nonterminal accepted trials and using [A2] bounds their number by $[f(x_0)-f_{inf}]/(c_g\varepsilon^{3/2})$. At most one further accepted trial reaches the first iterate with gradient norm at most $\varepsilon$. [given, A1, A2, F1, F2, F5, step 1.1, algebra]

2.2 In case 2, let $s=s_k$, $r=\|s\|_2$, $g=g_k$, and $g^+=\nabla f(x_k+s)$. The candidate residual check in [F1] gives $$\|g+B_ks+\sigma_k r s\|_2 \le\kappa_\theta\min\{1,r\}\|g\|_2.$$ Step 1.1 and the triangle inequality therefore imply $$\|g^+\|_2\le(\sigma_{max}+\sqrt n L)r^2 +\kappa_\theta\min\{1,r\}\|g\|_2.$$ By the $K$-Lipschitz gradient assumption, $\|g\|_2\le\|g^+\|_2+Kr$. Substitution and $r\min\{1,r\}\le r^2$ give $$(1-\kappa_\theta\min\{1,r\})\|g^+\|_2 \le(\sigma_{max}+\sqrt n L+\kappa_\theta K)r^2.$$ Since $1-\kappa_\theta\min\{1,r\}\ge1-\kappa_\theta>0$, $\|g^+\|_2\le D_g r^2$. [given, A1, F1, F5, F6, F7, step 1.1, algebra]

3.1 By [F3], every block of rejected trials has length at most $R$. There is no rejected block after the first stationary or target-achieved iterate, so $N_u\le R N_s$. In case 1 this gives $$N_s+N_u\le(R+1)\left(\frac{f(x_0)-f_{inf}} {c_g\varepsilon^{3/2}}+1\right).$$ [given, F1, F3, step 2.1, algebra]

3.2 If an accepted trial in case 2 is nonterminal, then $\|g^+\|_2>\varepsilon$, so $r>(\varepsilon/D_g)^{1/2}$. The second decrease conclusion of [F2] gives predicted reduction greater than $\sigma_{min}(\varepsilon/D_g)^{3/2}/6$. Acceptance thus decreases $f$ by more than $c_a\varepsilon^{3/2}$. Summing over nonterminal accepted trials and using [A2] bounds their number by $[f(x_0)-f_{inf}]/(c_a\varepsilon^{3/2})$; at most one further accepted trial reaches the first iterate with gradient norm at most $\varepsilon$. [given, A1, A2, F1, F2, step 2.2, algebra]

4.1 The rejection count [F3] applies in case 2 as well, so $N_u\le RN_s$ and $$N_s+N_u\le(R+1)\left(\frac{f(x_0)-f_{inf}} {c_a\varepsilon^{3/2}}+1\right).$$ Both trial bounds are $O(\varepsilon^{-3/2})$ for fixed constants. Each outer trial evaluates at most one objective, gradient, and Hessian; an additional terminal gradient check changes the count by at most one. Taking the cap $N$ at least the corresponding bound prevents budget exhaustion before a stationary or target-achieved iterate. [given, F1, F3, step 3.2, algebra] ∎

