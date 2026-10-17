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
  - def-induced-matrix-p-norm
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
      locator: "§§4–5.1 and Corollary 5.3: Lipschitz-Hessian complexity and the O(ε⁻³ᐟ²) bound for first-order accuracy."
    - title: "Yurii Nesterov and Boris T. Polyak, Cubic regularization of a Newton scheme and its global performance"
      url: "https://webdoc.sub.gwdg.de/ebook/serien/e/CORE/dp2003-41.pdf"
      locator: "§2, Lemma 1 and equations (2.4)–(2.7), printed pp. 3–5 / PDF pp. 3–5: cubic model, Lipschitz-Hessian remainder, global-model stationarity, and model decrease; §§3–4: global behavior."
---

## Statement

Let $f:\mathbb R^n\to\mathbb R$ be $C^2$, bounded below by $f_{inf}$, and
have an $L$-Lipschitz Hessian on every trial segment in induced Euclidean
matrix norm. Run [[alg-adaptive-cubic-regularization]] with exact Hessians,
and suppose every model call returns an exact global minimizer. Let
$0<\eta_1<\eta_2<1$, $\gamma_{up}>1$, $0<\gamma_{down}<1$,
$0<\kappa<1$, and $0<\sigma_{min}\le\sigma_k\le\sigma_{max}$ with
$\sigma_{max}\ge3L$. For any target $0<\varepsilon\le1$, the process
reaches an iterate with $\|\nabla f(x_k)\|_2\le\varepsilon$. Let
$R\in\mathbb N_0$ satisfy $\gamma_{up}^R\sigma_{min}\ge3L$ (take $R=0$
if $\sigma_{min}\ge3L$), and put
$$C_g:=\sigma_{max}+\sqrt n\,L,\qquad
c:=\frac{\eta_1\sigma_{min}}{6C_g^{3/2}}.$$
Then the numbers of accepted steps $N_s$ and rejected trials $N_u$ through
the first target iterate obey
$$N_s\le [f(x_0)-f_{inf}]c^{-1}\varepsilon^{-3/2}+1,\qquad
N_u\le R N_s.$$
Thus the number of trials and each of the function, gradient, and Hessian
evaluation counts are $O(\varepsilon^{-3/2})$. A finite outer cap at least
the resulting trial count suffices for the algorithm to return
`target-achieved`.

## Facts & Assumptions

**Given:** The smoothness, lower-bound, exact-solver, and weight assumptions
of the Statement and the ARC update rules.

[F1] [[alg-adaptive-cubic-regularization]]: a trial is accepted exactly
when $\rho_k\ge\eta_1$; rejected trials leave $x_k$ unchanged and increase
$\sigma_k$ by the capped factor $\gamma_{up}$.

[F2] [[lem-global-cubic-model-minimizer-decrease]]: if $g_k\ne0$ and
$s_k$ is a global minimizer of the cubic model, then
$$g_k+B_ks_k+\sigma_k\|s_k\|_2s_k=0,\qquad
m_k(0)-m_k(s_k)\ge\tfrac{\sigma_k}{6}\|s_k\|_2^3>0.$$

[F3] [[lem-adaptive-cubic-unsuccessful-iteration-count]]: with an
$L$-Lipschitz Hessian, exact global model steps, $\sigma_{max}\ge3L$, and
the stated regularization updates, every block of rejected trials has length
at most $R$.

[F4] [[cor-mean-value-theorem]]: a scalar function continuous on a closed
interval and differentiable in its interior has an interior point where its
derivative equals its endpoint difference divided by the interval length.

[A1] $\|\nabla^2f(u)-\nabla^2f(v)\|_2\le L\|u-v\|_2$ along every trial
segment.

[A2] The solver returns an exact global model minimizer at every trial, and
all weights remain in $[\sigma_{min},\sigma_{max}]$.

[A3] The objective obeys $f(x)\ge f_{inf}$ at every iterate.

## Proof

**Given:** The hypotheses in the Statement.

1.1 Consider a nonstationary accepted trial from $x_k$ with step $s_k$.
For each coordinate $i$, let $e_i$ be the $i$th standard basis vector and
define
$$r_i(t):=e_i^T\big(\nabla f(x_k+ts_k)-g_k-tB_ks_k\big),\qquad
0\le t\le1.$$
Then $r_i(0)=0$ and
$$r_i'(t)=e_i^T\big(\nabla^2f(x_k+ts_k)-B_k\big)s_k.$$
By [A1] and $B_k=\nabla^2f(x_k)$,
$|r_i'(t)|\le Lt\|s_k\|_2^2$. Applying [F4] on $[0,1]$ gives
$|r_i(1)|\le L\|s_k\|_2^2$. Thus the vector remainder $r$ has
$\|r\|_2\le\sqrt n L\|s_k\|_2^2$. The stationarity equation in [F2]
now yields
$$\|\nabla f(x_{k+1})\|_2
=\|g_k+B_ks_k+r\|_2
\le(\sigma_k+\sqrt n L)\|s_k\|_2^2
\le C_g\|s_k\|_2^2.$$
[given, A1, A2, F2, F4, algebra]

1.2 If an accepted trial is nonterminal, then both
$\|\nabla f(x_k)\|_2>\varepsilon$ and
$\|\nabla f(x_{k+1})\|_2>\varepsilon$. Step 1.1 therefore implies
$\|s_k\|_2>(\varepsilon/C_g)^{1/2}$. By [F2], its predicted reduction
exceeds
$$\frac{\sigma_{min}}6(\varepsilon/C_g)^{3/2}.$$
Since acceptance means $\rho_k\ge\eta_1$, the actual decrease exceeds
$c\varepsilon^{3/2}$. Summing over nonterminal accepted trials and using
[A3] bounds their number by
$[f(x_0)-f_{inf}]/(c\varepsilon^{3/2})$. There can be at most one further
accepted trial, namely the terminal trial that first reaches the target.
[given, A2, A3, F1, F2, step 1.1, algebra]

2.1 Every block of rejected trials is followed by an accepted trial, because
[F3] bounds the block and the exact model solver succeeds at the next trial.
There is no rejected block after the terminal accepted trial. Hence
$N_u\le R N_s$. Combining this with step 1.2 gives
$$N_s+N_u\le(R+1)\left(\frac{f(x_0)-f_{inf}}
{c\varepsilon^{3/2}}+1\right)=O(\varepsilon^{-3/2}).$$
Each trial evaluates at most one new objective value, gradient, and Hessian;
the final target check adds at most one gradient evaluation. The same order
therefore bounds all three evaluation counts. Choosing a finite outer cap at
least this number prevents budget exhaustion before target attainment.
[given, A2, F1, F3, step 1.2, algebra] ∎
