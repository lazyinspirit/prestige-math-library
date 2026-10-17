---
id: lem-adaptive-cubic-unsuccessful-iteration-count
kind: lemma
title: "Cubic regularization bounds consecutive unsuccessful trials"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - alg-adaptive-cubic-regularization
  - def-adaptive-cubic-regularization-model
  - def-hessian-and-euclidean-critical-point
  - cor-hessian-is-symmetric
  - lem-global-cubic-model-minimizer-decrease
  - def-induced-matrix-p-norm
  - thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - cor-mean-value-theorem
  - lem-geometric-sequence-null
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Coralia Cartis, Nicholas I. M. Gould, and Philippe L. Toint, Adaptive cubic overestimation methods for unconstrained optimization. Part II: worst-case iteration complexity (author preprint)"
      url: "https://perso.unamur.be/~phtoint/pubs/TR07-05b.pdf"
      locator: "§2.2, Theorem 2.1 and proof: the unsuccessful-iteration count from multiplicative σ updates."
    - title: "Coralia Cartis, Nicholas I. M. Gould, and Philippe L. Toint, Adaptive cubic overestimation methods for unconstrained optimization. Part I: motivation, convergence and numerical results (author preprint)"
      url: "https://perso.unamur.be/~phtoint/pubs/TR07-05a.pdf"
      locator: "§2.1, Algorithm 2.1: unsuccessful updates increase σ geometrically."
---

## Statement

Suppose $f$ is $C^2$ and its Hessian is $L$-Lipschitz on each trial segment,
meaning
$$\|\nabla^2f(u)-\nabla^2f(v)\|_2\le L\|u-v\|_2.$$
Run [[alg-adaptive-cubic-regularization]] with exact Hessians, and assume each
trial on which a ratio is evaluated uses either an exact global cubic-model
minimizer or a candidate passing the algorithm's cubic solution, residual, and
Cauchy-decrease checks, together with
$0<\sigma_{min}\le\sigma_k\le\sigma_{max}$ and $\sigma_{max}\ge3L$.
Then no ratio-based rejection occurs when $\sigma_k\ge3L$. If
$\gamma_{up}>1$, let $R\in\mathbb N_0$ satisfy
$\gamma_{up}^R\sigma_{min}\ge3L$; such an $R$ exists. Every block of
consecutive ratio-based rejected trials has length at most $R$.

## Facts & Assumptions

**Given:** The smoothness and weight bounds in the Statement, and the update
rules of the ARC procedure.

[F1] [[alg-adaptive-cubic-regularization]]: every ratio trial passes the
model-solution checks; a rejection leaves $x$ fixed and sets
$\sigma^+=\min\{\gamma_{up}\sigma,\sigma_{max}\}$; an accepted step keeps
$\sigma$ or decreases it, with floor $\sigma_{min}$.

[F2] [[def-adaptive-cubic-regularization-model]]:
$m_\sigma(s)=f(x)+\langle g,s\rangle+\tfrac12s^TBs+
\tfrac\sigma3\|s\|_2^3$.

[F3] [[thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized]]:
$\|Av\|_2\le\|A\|_2\|v\|_2$.

[F4] [[thm-cauchy-schwarz-and-the-euclidean-norm]]:
$|u^Tv|\le\|u\|_2\|v\|_2$.

[F5] [[cor-mean-value-theorem]]: for a scalar differentiable function on a
closed interval, its endpoint difference equals its derivative at some
interior point times the interval length.

[F6] [[lem-geometric-sequence-null]]: powers of any real number greater than
$1$ diverge to $+\infty$.

[F7] [[cor-hessian-is-symmetric]]: for $C^2$ $f$, $\nabla^2f(x)$ is
symmetric.

[A1] The Hessian is $L$-Lipschitz on each trial segment.

[A2] Every trial on which a ratio is evaluated uses the exact Hessian and a
candidate passing the two cubic decrease conditions in the algorithm;
ratio-based rejection uses its stated update.

[A3] The weights satisfy $0<\sigma_{min}\le\sigma_k\le\sigma_{max}$,
$\sigma_{max}\ge3L$, and $\gamma_{up}>1$.

[A4] The ARC acceptance threshold satisfies $0<\eta_1<1$.

## Proof

**Given:** The hypotheses in the Statement.

1.1 Fix a trial point $x$ and a solver-success candidate $s$ that reaches the ratio computation. By [F7], $B=\nabla^2f(x)$ is symmetric, so the cubic model is defined. Put $\phi(t):=f(x+ts)$ for $0\le t\le1$. The Hessian Lipschitz assumption gives $$|\phi''(u)-\phi''(v)| =|s^T(\nabla^2f(x+us)-\nabla^2f(x+vs))s| \le L|u-v|\|s\|_2^3,$$ where the bound follows from [A1], [F3], and [F4]. Define $h(t):=\phi(t)-\phi(0)-t\phi'(0)-\tfrac12t^2\phi''(0)$. For $t>0$, [F5] applied to $\phi'$ on $[0,t]$ gives $\phi'(t)-\phi'(0)=t\phi''(u_t)$ for some $u_t\in(0,t)$. Hence $|h'(t)|=t|\phi''(u_t)-\phi''(0)|\le Lt^2\|s\|_2^3$. Applying [F5] to $h$ on $[0,1]$ yields $$|f(x+s)-f(x)-\langle\nabla f(x),s\rangle -\tfrac12s^T\nabla^2f(x)s|\le L\|s\|_2^3.$$ By [F2], when $\sigma\ge3L$ the cubic term dominates this remainder, so $f(x+s)\le m_\sigma(s)$. Since the trial reaches the ratio computation, $g\ne0$ and the algorithm's first two model checks hold; the extended [[lem-global-cubic-model-minimizer-decrease]] then gives $m_\sigma(0)-m_\sigma(s)\ge\sigma\|s\|_2^3/6>0$. Hence $\rho\ge1>\eta_1$; that trial cannot be rejected. [given, A1, A2, A4, F1, F2, F3, F4, F5, F7, algebra]

2.1 If $3L\le\sigma_{min}$, all weights are at least $3L$ and there are no rejections, so take $R=0$. Otherwise, by [F6] choose a finite $R$ with $\gamma_{up}^R\sigma_{min}\ge3L$. At the start of any rejection block, $\sigma\ge\sigma_{min}$. After at most $R$ consecutive rejections, repeated use of [F1] gives $\sigma\ge\min\{\gamma_{up}^R\sigma_{min},\sigma_{max}\}\ge3L$. By step 1.1 the next trial cannot be rejected. Thus the block contains at most $R$ rejections. [given, A3, F1, F6, step 1.1, algebra] ∎

