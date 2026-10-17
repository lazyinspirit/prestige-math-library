---
id: lem-imex-euler-local-branch
kind: lemma
title: "A local IMEX Euler branch from contraction"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-imex-euler-step
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - def-metric-space
  - def-complete-metric-space
  - thm-euclidean-space-complete
  - def-lipschitz-holder-contraction
  - thm-banach-fixed-point
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Uri M. Ascher, Steven J. Ruuth, and Raymond J. Spiteri, Implicit-explicit Runge-Kutta methods for time-dependent partial differential equations"
      url: "https://chaosbook.org/library/AscherANM97.pdf"
      locator: "§2, the diagonally implicit stage equation, PDF pp. 2–4; the contraction argument below is supplied locally."
---

## Statement

Let $d\ge1$, $c\in\mathbb R^d$, $R>0$, $h>0$, and let $b$ be defined on the closed Euclidean ball $\overline B(c,R)$. Suppose $\|b(z)\|_2\le M$ and $\|b(z)-b(w)\|_2\le L\|z-w\|_2$ there, with $hM\le R$ and $hL<1$. Then the IMEX Euler equation $Y=c+h b(Y)$ has exactly one solution in $\overline B(c,R)$. Every $\widetilde Y$ in that ball satisfies
$$\|\widetilde Y-Y\|_2\le\frac{\|\widetilde Y-c-hb(\widetilde Y)\|_2}{1-hL}.$$
In the algorithm [[alg-imex-euler-step]], $c=y+h a(y)$; this is a local branch result and gives no root outside the selected ball.

## Facts & Assumptions

**Given:** $d\ge1$, $c,R,h,b,M,L$ and the bounds in the Statement.

[F1] [[alg-imex-euler-step]]: the implicit update is $Y=c+h b(Y)$ and its unscaled update residual is $\widetilde Y-c-hb(\widetilde Y)$.

[F2] [[thm-euclidean-space-complete]]: $\mathbb R^d$ with the Euclidean metric is complete.

[F3] [[def-complete-metric-space]] and [[def-metric-space]]: a metric space is complete when every Cauchy sequence converges to a point in that space.

[F4] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: the Euclidean norm satisfies $\|u+v\|_2\le\|u\|_2+\|v\|_2$.

[F5] [[def-lipschitz-holder-contraction]]: a map is a contraction with constant $q$ when its output distance is at most $q$ times its input distance, where $0\le q<1$.

[F6] [[thm-banach-fixed-point]]: a contraction from a nonempty complete metric space into itself has a unique fixed point.

## Proof

1.1 The ball is nonempty because it contains $c$. If $(z_n)$ is Cauchy in the ball, it is Cauchy in $\mathbb R^d$, so [F2] gives a limit $z\in\mathbb R^d$. By [F4], $\|z-c\|_2\le\|z-z_n\|_2+\|z_n-c\|_2\le\|z-z_n\|_2+R$; letting $n\to\infty$ gives $\|z-c\|_2\le R$, so $z$ remains in the ball. Thus the ball is a nonempty complete metric space by [F3]. [given, F2, F3, F4, construct]

1.2 Define $T(z):=c+h b(z)$. For every $z$ in the ball, $\|T(z)-c\|_2=h\|b(z)\|_2\le hM\le R$, so $T$ maps the ball into itself; for $z,w$ in the ball, $\|T(z)-T(w)\|_2\le hL\|z-w\|_2$, and $hL<1$ makes $T$ a contraction as in [F5]. [given, F5, algebra]

2.1 Applying [F6] to the complete ball and the contraction from step 1.2 gives a unique fixed point $Y$, which is exactly the unique solution of $Y=c+hb(Y)$ in the ball. [step 1.1, step 1.2, F6]

3.1 For any $\widetilde Y$ in the ball, [F4] and step 2.1 give $\|\widetilde Y-Y\|_2\le\|\widetilde Y-T(\widetilde Y)\|_2+\|T(\widetilde Y)-T(Y)\|_2\le\|\widetilde Y-c-hb(\widetilde Y)\|_2+hL\|\widetilde Y-Y\|_2$. Since $1-hL>0$, rearranging proves the residual bound. [F1, F4, step 1.2, step 2.1, algebra] ∎

