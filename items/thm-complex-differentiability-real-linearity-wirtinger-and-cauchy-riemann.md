---
id: thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann
kind: theorem
title: "Complex differentiability is equivalent to real total differentiability together with a complex-linear derivative, with $\\partial_{\\bar z}f=0$, or with the Cauchy–Riemann equations"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complex-differentiability-holomorphic-and-entire, def-wirtinger-derivatives,
       def-total-derivative-in-euclidean-space, def-euclidean-linear-map,
       lem-euclidean-linear-maps-have-matrices-and-are-bounded,
       def-jacobian-matrix-and-gradient,
       thm-total-derivative-computes-directional-and-partial-derivatives,
       thm-complex-numbers-are-the-real-coordinate-plane,
       lem-complex-conjugation-and-modulus-laws]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Propositions 2.1.4 and 2.2.6"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "J. Orloff, MIT 18.04 Topic 2, §§2.7–2.8"
      url: "https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/330e301bd727c7bdaa679cf44cb75fe3_MIT18_04S18_topic2.pdf"
pipeline_run: null
---

## Statement

Let $U\subseteq\mathbb C$ be open, let $a\in U$, and write $f=u+iv:U\to\mathbb C$. The following are equivalent:

1. $f$ is complex differentiable at $a$.
2. Under $\mathbb C\cong\mathbb R^2$, the map $f$ is real totally differentiable at $a$ and $Df(a)$ is multiplication by a complex number.
3. The map $f$ is real totally differentiable at $a$ and $\partial_{\bar z}f(a)=0$.
4. The map $f$ is real totally differentiable at $a$ and satisfies the Cauchy–Riemann equations

$$ u_x(a)=v_y(a),\qquad u_y(a)=-v_x(a). $$

When these conditions hold,

$$ f'(a)=u_x(a)+iv_x(a)=v_y(a)-iu_y(a)=\partial_zf(a). $$

## Facts & Assumptions
**Given:** An open set $U\subseteq\mathbb C$, a point $a\in U$, and a map $f=u+iv:U\to\mathbb C$.

[F1] Complex differentiability at $a$ is existence of the limit $(f(a+h)-f(a))/h$ as $h\to0$ through nonzero increments with $a+h\in U$ ([[def-complex-differentiability-holomorphic-and-entire]]).

[F2] Real total differentiability at $a$ means that for some real-linear $L$, $f(a+h)=f(a)+Lh+r(h)$ with $\|r(h)\|_2/\|h\|_2\to0$ ([[def-total-derivative-in-euclidean-space]], [[def-euclidean-linear-map]]).

[L1] If a map is totally differentiable at $a$, then its directional derivatives exist and equal $Df(a)v$; its partial derivatives are the columns of its Jacobian matrix ([[thm-total-derivative-computes-directional-and-partial-derivatives]], [[def-jacobian-matrix-and-gradient]]).

[L2] Every real-linear map between Euclidean spaces has a unique matrix and is bounded by a constant times the Euclidean norm ([[lem-euclidean-linear-maps-have-matrices-and-are-bounded]]).

[L3] Under $\Phi(a+bi)=(a,b)$, complex multiplication satisfies $(a+bi)(x+iy)=(ax-by)+i(bx+ay)$ ([[thm-complex-numbers-are-the-real-coordinate-plane]]).

[F3] For a real-differentiable $f$, $Df(h)=(\partial_zf)h+(\partial_{\bar z}f)\bar h$, with $\partial_{\bar z}f=\frac12(u_x-v_y)+\frac{i}{2}(v_x+u_y)$ ([[def-wirtinger-derivatives]]).

[L4] For complex numbers, $|zw|=|z||w|$ and $|z|=0$ if and only if $z=0$ ([[lem-complex-conjugation-and-modulus-laws]]).

## Proof

**Proof technique:** direct.

1.1 Assume condition 1 and write $L=f'(a)$. For $h\ne0$ put $r(h)=f(a+h)-f(a)-Lh$; then $|r(h)|/|h|=|(f(a+h)-f(a))/h-L|\to0$. [F1, L4, given, algebra]

1.2 Conversely assume condition 2, so $f(a+h)-f(a)=Lh+r(h)$ with $|r(h)|/|h|\to0$. For nonzero $h$, division by $h$ gives $(f(a+h)-f(a))/h=L+r(h)/h$, and $|r(h)/h|=|r(h)|/|h|\to0$; hence condition 1 holds with $f'(a)=L$. [F1, F2, L4, given, algebra]

1.3 Write the matrix of $Df(a)$ as $\begin{pmatrix}u_x&u_y\\v_x&v_y\end{pmatrix}$ by [L1]. By [L3], it is multiplication by $\alpha+i\beta$ exactly when it is $\begin{pmatrix}\alpha&-\beta\\\beta&\alpha\end{pmatrix}$. [L1, L2, L3]

1.4 By [F3], $\partial_{\bar z}f(a)=0$ exactly when both $u_x-v_y=0$ and $v_x+u_y=0$. Hence condition 3 is equivalent to condition 4. [F3, algebra]

2.1 The map $h\mapsto Lh$ is real-linear by the coordinate formula [L3], so step 1.1 is the remainder condition [F2]. Thus condition 2 holds. [step 1.1, F2, L2, L3]

2.2 Therefore condition 2 is equivalent to condition 4: equality with the multiplication matrix is exactly $u_x=v_y$ and $u_y=-v_x$. In that case $\alpha=u_x=v_y$, $\beta=v_x=-u_y$, so the multiplier is $u_x+iv_x=v_y-iu_y$. [step 1.3, algebra]

3.1 Under the equivalent conditions, [F3] and the Cauchy–Riemann equations give $\partial_zf(a)=u_x+iv_x$, while steps 1.2 and 2.2 identify the same number with $f'(a)$. Thus all four conditions are equivalent and the displayed derivative formulas hold. [step 1.2, step 2.2, step 1.4, F3] ∎
