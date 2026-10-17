---
id: prop-embedded-pair-estimator-asymptotics
kind: proposition
title: "A nonzero leading defect makes the embedded difference asymptotically match the low-order defect"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-embedded-runge-kutta-pair-and-error-estimator
  - def-heun-euler-embedded-runge-kutta-pair
  - thm-cauchy-schwarz-and-the-euclidean-norm
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Ernst Hairer, course notes, Chapter III: Équations Différentielles Ordinaires, §III.2"
      url: "https://www.unige.ch/~hairer/poly/chap3.pdf"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Chapter 6"
      url: "https://fncbook.com/adaptive-rk/"
---

## Statement

Fix one initial value problem and initial state. Let $D_p(h):=\widehat Y(h)-y(t+h)$ be the low member's one-step defect and $D_{p+1}(h):=Y(h)-y(t+h)$ the high member's defect, using the same exact initial state and step start. Suppose, as $h\downarrow0$,
$$D_p(h)=a h^{p+1}+O(h^{p+2}),\qquad D_{p+1}(h)=O(h^{p+2})$$
for a fixed vector $a\in\mathbb R^d$. Here $O(h^r)$ for a vector means a remainder whose Euclidean norm is at most $C h^r$ for all sufficiently small positive $h$. Then $\widehat Y(h)-Y(h)=a h^{p+1}+O(h^{p+2})$. If $a\ne0$, the estimator satisfies $E(h)/\|D_p(h)\|_2\to1$. If $a=0$, these hypotheses do not imply that this ratio tends to one or that the estimator is nonzero; the Euler–Heun pair on $y\prime=t^2$, $y(0)=0$, has ratio $3/2$ as computed below.

## Facts & Assumptions

**Given:** The two outputs and Euclidean estimator in [[def-embedded-runge-kutta-pair-and-error-estimator]], with the two displayed defect expansions.

[F1] [[def-embedded-runge-kutta-pair-and-error-estimator]]: $E(h)=\|\widehat Y(h)-Y(h)\|_2$.

[F2] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: the Euclidean norm is continuous and satisfies $|\|u\|_2-\|v\|_2|\le\|u-v\|_2$.

[F3] [[def-heun-euler-embedded-runge-kutta-pair]]: Heun and Euler use the two shared stages $K_1=f(t,y)$ and $K_2=f(t+h,y+hK_1)$, with outputs $Y_E=y+hK_1$ and $Y_H=y+\frac h2(K_1+K_2)$.

## Proof

1.1 Subtracting the two defect identities cancels the common exact value: $\widehat Y-Y=D_p-D_{p+1}=a h^{p+1}+O(h^{p+2})$. Thus there is a vector remainder $r(h)=O(h^{p+2})$ with $\widehat Y-Y=h^{p+1}(a+h r_1(h))$, where $r_1$ is bounded for all sufficiently small positive $h$. [given, F1, algebra]

2.1 By [F2], $|E(h)/h^{p+1}-\|a\|_2|\le h\|r_1(h)\|_2\to0$. If $a\ne0$, the same argument gives $\|D_p(h)\|_2/h^{p+1}\to\|a\|_2>0$; dividing the two positive limits proves $E(h)/\|D_p(h)\|_2\to1$. If $a=0$, the expansions give only $D_p=O(h^{p+2})$ and $E=O(h^{p+2})$, with no lower bound. To verify that the ratio-one conclusion can fail for an actual embedded Runge–Kutta pair, use the Heun–Euler pair [F3] on $y\prime=t^2$, $y(0)=0$: $K_1=0$, $K_2=h^2$, $Y_E=0$, $Y_H=h^3/2$, and the exact endpoint is $h^3/3$. Thus $D_1=-h^3/3$, the estimator is $h^3/2$, and their norm ratio is $3/2$, while the $h^2$ coefficient is zero. Conversely, for the zero field with zero initial state, both outputs and the estimator vanish identically, so no positive lower bound for the estimator follows either. [F1, F2, F3, step 1.1, algebra] ∎
