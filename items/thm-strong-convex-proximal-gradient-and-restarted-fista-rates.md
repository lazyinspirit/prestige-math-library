---
id: thm-strong-convex-proximal-gradient-and-restarted-fista-rates
kind: theorem
title: "Strong convexity gives linear proximal-gradient and restarted-FISTA rates"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps:
  - def-strong-convex-composite-objective
  - alg-proximal-gradient-and-fista
  - thm-fista-o1k2-objective-bound
  - lem-proximal-gradient-one-step-estimate
  - thm-proximal-operator-existence-resolvent-firm-nonexpansive
  - def-extended-real-epsilon-subdifferential
  - thm-differentiable-convex-functions-and-gradient-inequality
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Amir Beck, First-Order Methods in Optimization, SIAM, 2017, §§10.6–10.7"
      url: "https://epubs.siam.org/doi/book/10.1137/1.9781611974997"
    - title: "Mark Schmidt, Nicolas Le Roux, and Francis Bach, Convergence Rates of Inexact Proximal-Gradient Methods for Convex Optimization, Proposition 3 and Appendix §6.3"
      url: "https://arxiv.org/pdf/1109.2415"
---

## Statement

Assume the exact algorithm hypotheses of [[alg-proximal-gradient-and-fista]], that $F=f+g$ is $\mu$-strongly convex for $\mu>0$ under [[def-strong-convex-composite-objective]], that a minimizer $x_*$ exists, and that $F(x_0)<+\infty$. For each mode, let $(x_k)_{k\ge0}$ denote the sequence whose finite prefixes are its executions with arbitrary finite budgets, using the same initial point and, for restart, the same period. Exact proximal points are unique, so these prefixes agree whenever their budgets overlap. A run with budget $N$ satisfies the bounds below for $0\le k\le N$ and $0\le jm\le N$, respectively. Exact proximal gradient satisfies
$$F(x_k)-F(x_*)\le q^k(F(x_0)-F(x_*)),\qquad q=\frac1{1+\mu/(4L)}<1.$$
For fixed-period restarted FISTA with $m=\lceil\sqrt{8L/\mu}\rceil$ updates per full block, the restart-point gaps obey
$$F(x_{jm})-F(x_*)\le2^{-j}(F(x_0)-F(x_*)),\qquad j\ge0.$$

## Facts & Assumptions

**Given:** The exact algorithms, $\mu$-strongly convex objective, minimizer and finite starting objective in the Statement.

[F1] [[def-strong-convex-composite-objective]]: for finite-domain points, $F((1-\theta)x+\theta y)\le(1-\theta)F(x)+\theta F(y)-(\mu/2)\theta(1-\theta)\|x-y\|_2^2$.

[F2] [[thm-proximal-operator-existence-resolvent-firm-nonexpansive]]: an exact step $x^+=T_L(x)$ has $p=L(x-x^+)-\nabla f(x)\in\partial g(x^+)$.

[F3] [[thm-differentiable-convex-functions-and-gradient-inequality]]: $\nabla f(x^+)\in\partial f(x^+)$ and convexity gives the gradient lower bound.

[F4] [[lem-proximal-gradient-one-step-estimate]]: at a finite iterate $x$ with $z=x$, exact proximal gradient gives $F(x)\ge F(x^+)+L\|x^+-x\|_2^2/2$; both objective values are finite.

[F5] [[thm-fista-o1k2-objective-bound]]: $m$ exact FISTA updates from a point $w$ have gap at most $2L\|w-x_*\|_2^2/(m+1)^2$.

[F6] [[def-extended-real-epsilon-subdifferential]]: $r\in\partial F(x)$ means $F(z)\ge F(x)+\langle r,z-x\rangle$ for every $z$.

[F7] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: the Euclidean norm satisfies $\|a+b\|_2\le\|a\|_2+\|b\|_2$.

## Proof

1.1 If $r\in\partial F(x)$ and $z\in\operatorname{dom}F$, [F6] gives the subgradient lower bound at $(1-\theta)x+\theta z$, while [F1] gives the strong-convexity upper bound there. Combine them, divide by $\theta>0$, and let $\theta\downarrow0$. This gives $$F(z)\ge F(x)+\langle r,z-x\rangle+\frac\mu2\|z-x\|_2^2.$$ Taking $z=x_*$ and maximizing the right-hand upper bound $\langle r,x-x_*\rangle-(\mu/2)\|x-x_*\|^2$ by completing the square yields $F(x)-F(x_*)\le\|r\|_2^2/(2\mu)$. [F1, F6, given, algebra]

1.2 Strong convexity and minimality imply $F(w)-F(x_*)\ge(\mu/2)\|w-x_*\|_2^2$ for every finite $w$: apply [F1] to $(x_*,w)$, use $F(x_*)\le F((1-\theta)x_*+\theta w)$, divide by $\theta$, and let $\theta\downarrow0$. [F1, given, algebra]

2.1 For an exact step $x^+=T_L(x)$, [F2] gives $p=L(x-x^+)-\nabla f(x)\in\partial g(x^+)$. Adding the gradient inequality [F3] shows $r=p+\nabla f(x^+)\in\partial F(x^+)$ by [F6]. If $d=x^+-x$, [F7] and Lipschitz continuity give $\|r\|_2\le L\|d\|_2+L\|d\|_2=2L\|d\|_2$. Step 1.1 therefore yields $F(x^+)-F(x_*)\le(2L^2/\mu)\|d\|_2^2$. [F2, F3, F6, F7, step 1.1, given, algebra]

3.1 By [F4], $F(x)-F(x^+)\ge(L/2)\|d\|_2^2$. Combining with step 2.1 gives $F(x)-F(x_*)\ge(1+\mu/(4L))(F(x^+)-F(x_*))$. Apply this at every proximal-gradient step and induct to obtain the stated factor $q^k$. [F4, step 2.1, given, induction, algebra]

4.1 Apply [F5] to one FISTA block starting at a restart point $w$. Step 1.2 gives $\|w-x_*\|_2^2\le2(F(w)-F(x_*))/\mu$, so the block-end gap is at most $4L(F(w)-F(x_*))/(\mu(m+1)^2)$. Since $m+1\ge\sqrt{8L/\mu}$, this factor is at most $1/2$. Each completed restart starts the next block at its last iterate; induction over blocks proves the stated restart-point bound. [F5, step 1.2, given, induction, algebra] ∎
