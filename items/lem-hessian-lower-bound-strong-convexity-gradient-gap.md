---
id: lem-hessian-lower-bound-strong-convexity-gradient-gap
kind: lemma
title: "A Hessian lower bound gives strong convexity and gradient-gap bounds"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-hessian-and-euclidean-critical-point
  - def-jacobian-matrix-and-gradient
  - def-directional-and-partial-derivatives
  - thm-hessian-characterises-convexity
  - thm-multivariable-taylor-formula-with-lagrange-remainder
  - thm-cauchy-schwarz-and-the-euclidean-norm
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
    - title: "Philip E. Gill and Margaret H. Wright, Math 171B Numerical Optimization Class Notes"
      url: "https://mathweb.ucsd.edu/~njw/Teaching/Math171B/notes171B.pdf"
---

## Statement

Let $U\subseteq\mathbb R^d$ be open and convex, let $f\in C^2(U,\mathbb R)$, and fix $\mu>0$. Suppose $v^TH_f(z)v\ge\mu\|v\|_2^2$ for every $z\in U$ and $v\in\mathbb R^d$. Then for every $x,y\in U$,

$$f(y)\ge f(x)+\langle\nabla f(x),y-x\rangle+\frac\mu2\|y-x\|_2^2,$$

and

$$\langle\nabla f(y)-\nabla f(x),y-x\rangle\ge\mu\|y-x\|_2^2.$$

If $x^*\in U$ is a global minimizer and $f^*:=f(x^*)$, it is unique and every $x\in U$ satisfies

$$f(x)-f^*\ge\frac\mu2\|x-x^*\|_2^2,\qquad \|\nabla f(x)\|_2^2\ge2\mu(f(x)-f^*).$$

Here $H_f$ is the matrix of second partial derivatives and $\nabla f$ is the vector of first partial derivatives, as in [[def-hessian-and-euclidean-critical-point]] and [[def-jacobian-matrix-and-gradient]].

## Facts & Assumptions

**Given:** An open convex $U\subseteq\mathbb R^d$, $f\in C^2(U,\mathbb R)$, $\mu>0$, and $v^TH_f(z)v\ge\mu\|v\|_2^2$ for every $z\in U$ and $v\in\mathbb R^d$.

[F1] [[thm-multivariable-taylor-formula-with-lagrange-remainder]]: for a $C^2$ function on an open convex set and a segment in that set, the first-order Taylor formula has a second-order Hessian remainder at a point on the segment.

[F2] [[thm-hessian-characterises-convexity]]: a $C^2$ function on an open convex set is convex if and only if its Hessian is positive semidefinite everywhere.

[F3] [[def-hessian-and-euclidean-critical-point]] and [[def-jacobian-matrix-and-gradient]]: $H_f$ is the matrix of second partial derivatives; $\nabla f$ has the first partial derivatives as its standard coordinates.

[F4] [[def-directional-and-partial-derivatives]]: the derivative of $t\mapsto f(a+tv)$ at $0$ is the directional derivative $D_vf(a)$; for a standard basis vector it is the corresponding partial derivative.

[F5] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|\langle u,v\rangle|\le\|u\|_2\|v\|_2$.

## Proof
1.1 For any $x,y\in U$, convexity keeps the segment from $x$ to $y$ in $U$. Applying [F1] with Taylor order one gives $f(y)=f(x)+\langle\nabla f(x),y-x\rangle+\frac12(y-x)^TH_f(x+\theta(y-x))(y-x)$ for some $\theta\in(0,1)$. The Hessian hypothesis makes the last term at least $\mu\|y-x\|_2^2/2$, proving the first inequality. Since $H_f\succeq\mu I\succeq0$, [F2] also makes $f$ convex on $U$. [F1, F2, F3, given]

1.2 Let $x^*$ be an interior minimizer. For each standard basis vector $e_j$, openness gives an interval around $0$ on which $x^*+te_j\in U$. The one-variable function $t\mapsto f(x^*+te_j)$ has a minimum at $0$, so its derivative there is $0$; [F4] identifies this derivative with $\partial_j f(x^*)$. Thus every coordinate of $\nabla f(x^*)$ is zero. [F3, F4, given]

2.1 Apply the first inequality from step 1.1 once to $(x,y)$ and once to $(y,x)$, and add. The function-value terms cancel, leaving $\langle\nabla f(y)-\nabla f(x),y-x\rangle\ge\mu\|y-x\|_2^2$. [step 1.1, algebra]

2.2 Apply step 1.1 with $x=x^*$ and $y=x$. Using $\nabla f(x^*)=0$ gives $f(x)-f^*\ge\mu\|x-x^*\|_2^2/2$. This also proves uniqueness, because equality of the minimum values forces $x=x^*$. [step 1.1, step 1.2]

3.1 Apply step 1.1 with the ordered pair $(x,x^*)$ and write $d:=x-x^*$. Rearrangement gives $f(x)-f^*\le\langle\nabla f(x),d\rangle-\mu\|d\|_2^2/2$. By [F5] and completing the square, the right-hand side is at most $\|\nabla f(x)\|_2^2/(2\mu)$, since $0\le(\|\nabla f(x)\|_2-\mu\|d\|_2)^2$. This is the gradient-gap inequality. [F5, step 1.1, algebra] ∎
