---
id: lem-wolfe-step-lower-bound-from-the-descent-angle
kind: lemma
title: "A Wolfe step has a lower bound from its descent angle"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-wolfe-and-strong-wolfe-conditions
  - def-c-one-map-and-local-inverse
  - def-jacobian-matrix-and-gradient
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 3 §3.2, proof of Theorem 3.2, printed pp. 38–39 / PDF pp. 56–57: Wolfe curvature and Lipschitz-gradient step-length estimate."
---

## Statement

Let $D\subseteq\mathbb R^n$ be open, $f:D\to\mathbb R$ be $C^1$, and
$x,p\in\mathbb R^n$ satisfy $x\in D$, $p\ne0$, and
$g^Tp<0$, where $g:=\nabla f(x)$. Let $t>0$ with $x+tp\in D$, and suppose
there are a set $N\subseteq D$ containing $x+[0,t]p$ and a constant $L>0$
such that
$$
\|\nabla f(u)-\nabla f(v)\|_2\le L\|u-v\|_2\qquad(u,v\in N).
$$
If $t$ satisfies the Wolfe conditions of
[[def-wolfe-and-strong-wolfe-conditions]] with $0<c_1<c_2<1/2$, then its
descent angle $\theta$ satisfies
$$
t\ge\frac{1-c_2}{L}\frac{\cos\theta\,\|g\|_2}{\|p\|_2}.
$$

## Facts & Assumptions

**Given:** $D,f,x,p,t,L,c_1,c_2$ and the segment and Wolfe hypotheses in the Statement.

[F1] [[def-wolfe-and-strong-wolfe-conditions]]: Wolfe curvature gives $\langle\nabla f(x+tp),p\rangle\ge c_2\langle\nabla f(x),p\rangle$; $\cos\theta=-\langle\nabla f(x),p\rangle/(\|\nabla f(x)\|_2\|p\|_2)$.

[F2] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: for Euclidean vectors $u,v$, $|\langle u,v\rangle|\le\|u\|_2\|v\|_2$.

## Proof

**Given:** The hypotheses and notation in the Statement.

1.1 Put $g_+:=\nabla f(x+tp)$. By [F1], $(g_+-g)^Tp\ge(c_2-1)g^Tp=(1-c_2)|g^Tp|$. [given, F1, algebra]

2.1 The Lipschitz bound gives $\|g_+-g\|_2\le Lt\|p\|_2$. Applying [F2] to $g_+-g$ and $p$ yields $(g_+-g)^Tp\le Lt\|p\|_2^2$. Combine this with step 1.1 and use $|g^Tp|=\cos\theta\|g\|_2\|p\|_2$. [given, F2, step 1.1, algebra]

3.1 Since $L>0$ and $p\ne0$, divide the resulting inequality by $L\|p\|_2^2$ to obtain the asserted lower bound. [step 2.1, algebra] ∎
