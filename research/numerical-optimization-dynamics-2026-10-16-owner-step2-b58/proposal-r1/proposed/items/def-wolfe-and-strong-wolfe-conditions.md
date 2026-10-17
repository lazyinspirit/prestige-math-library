---
id: def-wolfe-and-strong-wolfe-conditions
kind: definition
title: "Wolfe and strong Wolfe line-search conditions"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-c-one-map-and-local-inverse
  - def-jacobian-matrix-and-gradient
  - def-euclidean-inner-product
  - thm-chain-rule-for-total-derivatives
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 3, §§3.1–3.2, printed pp. 33–40 / PDF pp. 51–58: Wolfe and strong Wolfe inequalities, line-search existence, and Zoutendijk's condition."
---

## Definition

Let $D\subseteq\mathbb R^n$ be open, let $f:D\to\mathbb R$ be $C^1$
([[def-c-one-map-and-local-inverse]]), let $x\in D$, and let
$p\in\mathbb R^n\setminus\{0\}$. Define the open parameter set $S_{x,p}:=\{t\in\mathbb R:x+tp\in D\}$,
which contains $0$, the feasible ray $T_{x,p}:=S_{x,p}\cap[0,\infty)$,
and $\phi(t):=f(x+tp)$ for $t\in S_{x,p}$. At every $t\in S_{x,p}$,
including $0$, the chain rule gives
$\phi'(t)=\langle\nabla f(x+tp),p\rangle$, using the gradient convention
of [[def-jacobian-matrix-and-gradient]] and the Euclidean inner product of
[[def-euclidean-inner-product]]. A direction is a **descent direction** at
$x$ when $\phi'(0)=\langle\nabla f(x),p\rangle<0$.

Assume for the line-search conditions below that $p$ is a descent direction
at $x$.
Fix constants $0<c_1<c_2<1/2$. A feasible step $t>0$ is a **Wolfe step**
when
$$
\phi(t)\le\phi(0)+c_1t\phi'(0),\qquad \phi'(t)\ge c_2\phi'(0).
$$
It is a **strong Wolfe step** when it satisfies the first inequality and
$$
|\phi'(t)|\le c_2|\phi'(0)|.
$$
The first inequality is the Armijo sufficient-decrease condition. The second
Wolfe inequality is the curvature condition. Every strong Wolfe step is a
Wolfe step, because $\phi'(0)<0$ and the strong curvature bound implies
$\phi'(t)\ge-c_2|\phi'(0)|=c_2\phi'(0)$.

For a descent direction define its **descent angle** $\theta\in[0,\pi/2)$ by
$$
\cos\theta:=-\frac{\langle\nabla f(x),p\rangle}{\|\nabla f(x)\|_2\|p\|_2}.
$$
The denominator is nonzero for a descent direction. The Cauchy–Schwarz
inequality ensures $0<\cos\theta\le1$.
