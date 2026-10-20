---
id: ex-nonconvex-gd-path-lower-bound-with-unbounded-objective
kind: example
title: "A gradient-descent path can be bounded below when the objective is not"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - thm-smooth-bounded-below-gd-stationarity
  - alg-gradient-descent
  - def-total-derivative-in-euclidean-space
  - def-directional-and-partial-derivatives
  - def-jacobian-matrix-and-gradient
  - def-euclidean-inner-product
  - lem-geometric-sequence-null
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Let $F(x,y)=x^2-y^2$ on $\mathbb R^2$, start gradient descent at $w_0=(1,0)$, and use the fixed step $\alpha=1/4$. The gradient is $(2x,-2y)$ and is globally $2$-Lipschitz. The iterates are $w_t=(2^{-t},0)$, so $F(w_t)=4^{-t}\ge0$ and $w_t\to(0,0)$, even though $F$ is unbounded below on $\mathbb R^2$. The limit is stationary but is neither a local minimum nor a local maximum.

## Facts & Assumptions

**Given:** $F(x,y)=x^2-y^2$, $w_0=(1,0)$, and fixed step $\alpha=1/4$.

[F1] [[def-total-derivative-in-euclidean-space]]: a derivative is a linear map whose remainder is at most $\varepsilon\|h\|_2$ for all sufficiently small increments, for every $\varepsilon>0$.

[F2] [[def-directional-and-partial-derivatives]]: a coordinate partial derivative is the limit of the difference quotient in that coordinate direction.

[F3] [[def-jacobian-matrix-and-gradient]]: for a scalar function, the gradient vector consists of its coordinate partial derivatives.

[F4] [[def-euclidean-inner-product]]: $\|(u,v)\|_2^2=u^2+v^2$ on $\mathbb R^2$.

[F5] [[alg-gradient-descent]]: in fixed-step mode the update is $w_{t+1}=w_t-\alpha\nabla F(w_t)$.

[F6] [[thm-smooth-bounded-below-gd-stationarity]]: a continuously differentiable objective on $\mathbb R^n$ with globally $L$-Lipschitz gradient for $L>0$, fixed $0<\alpha\le1/L$, and a lower bound along its iterates has gradient norms tending to zero along those iterates.

[F7] [[lem-geometric-sequence-null]]: if $|r|<1$, then $r^t\to0$.

## Verification

1.1 For $z=(x,y)$ and $v=(h,k)$, expansion gives $F(z+v)-F(z)-(2xh-2yk)=h^2-k^2$, whose absolute value is at most $h^2+k^2=\|v\|_2^2$. For every $\varepsilon>0$, this is at most $\varepsilon\|v\|_2$ when $\|v\|_2<\varepsilon$, so [F1] gives the total derivative. The coordinate difference quotients are $2x+h$ and $-2y-k$, so [F2, F3] give $\nabla F(x,y)=(2x,-2y)$. Therefore $\|\nabla F(z)-\nabla F(z')\|_2^2=4\|z-z'\|_2^2$, so $F$ is continuously differentiable and its gradient is globally $2$-Lipschitz. [given, F1, F2, F3, F4, algebra]

2.1 By [F5] and the gradient formula in step 1.1, $w_{t+1}=(x_t/2,3y_t/2)$. Starting from $(1,0)$, induction gives $y_t=0$ and $x_t=2^{-t}$ for every $t\ge0$. [given, F5, step 1.1, algebra, induction]

3.1 Step 2.1 gives $F(w_t)=4^{-t}\ge0$ and $w_t\to(0,0)$ by [F7], while $F(0,s)=-s^2$ is unbounded below as $|s|\to\infty$. The gradient at the limit is zero, but $F(h,0)=h^2>F(0,0)$ and $F(0,h)=-h^2<F(0,0)$ for every $h\ne0$, so the limit is neither a local minimum nor a local maximum. Finally $\alpha=1/4\le1/2=1/L$ and the iterates have lower bound $0$, so [F6] applies and gives vanishing gradient norms along this path. [given, F6, step 1.1, step 2.1, F7, algebra] ∎
