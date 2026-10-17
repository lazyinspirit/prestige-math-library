---
id: lem-bfgs-hessian-bounds-control-gradient-and-taylor-remainder
kind: lemma
title: "Uniform Hessian bounds control gradient changes and Taylor remainders"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-jacobian-matrix-and-gradient
  - def-hessian-and-euclidean-critical-point
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-continuous-partial-derivatives-imply-total-differentiability
  - thm-chain-rule-for-total-derivatives
  - cor-vector-valued-ftc-and-lipschitz-bound
  - cor-mean-value-theorem
  - thm-clairaut-schwarz-mixed-partials
proof_strategy: direct
axiom_use: "None beyond classical real analysis and finite-dimensional linear algebra supplied by the listed dependencies; no choice principle is used."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, 2nd ed."
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 6 §6.4, Assumptions 6.1–6.2 and the strong-convexity/Taylor estimates used in the global and local BFGS analyses, printed pp. 153–160 / PDF pp. 171–178."
    - title: "Manuel Carreira-Perpiñán, Lecture Notes on Numerical Optimization"
      url: "https://faculty.ucmerced.edu/mcarreira-perpinan/teaching/EECS260/lecture-notes.pdf"
      locator: "§6, Hessian bounds, Taylor estimates and BFGS convergence hypotheses, printed pp. 21–23 / PDF pp. 22–24."
---

## Statement

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open, and let $f:U\to\mathbb R$ have continuous first and second partial derivatives. Put $g(x):=\nabla f(x)$ and $G(x):=\nabla^2 f(x)$, using the conventions of [[def-jacobian-matrix-and-gradient]] and [[def-hessian-and-euclidean-critical-point]]. Let $K\subseteq U$ be convex. Suppose that for every $x\in K$, $G(x)$ is symmetric and, for constants $0<\mu\le\Lambda<\infty$,
$$ \mu\|w\|_2^2\le w^TG(x)w\quad(w\in\mathbb R^n),\qquad \|G(x)\|_2\le\Lambda, $$
where $\|A\|_2:=\sup_{\|w\|_2=1}\|Aw\|_2$. Then for all $u,v\in K$, with $d:=u-v$,
$$ \|g(u)-g(v)\|_2\le\Lambda\|d\|_2, \qquad (g(u)-g(v))^Td\ge\mu\|d\|_2^2, $$
and
$$ \frac\mu2\|d\|_2^2\le f(u)-f(v)-g(v)^Td\le\frac\Lambda2\|d\|_2^2. $$
Separately, let $W\subseteq U$ be convex, let $x_*\in W$, and suppose $G$ is $L_G$-Lipschitz on $W$ in operator norm. Then for all $u,v\in W$, with $d:=u-v$,
$$ \|g(u)-g(v)-G(x_*)d\|_2 \le L_G\max\{\|u-x_*\|_2,\|v-x_*\|_2\}\,\|d\|_2. $$

## Facts & Assumptions

**Given:** The open domain, convex set, continuous partial-derivative assumptions, Hessian bounds and notation in the Statement.

[F1] [[def-hessian-and-euclidean-critical-point]] and [[def-jacobian-matrix-and-gradient]]: $G(x)$ is the Hessian matrix of second partial derivatives and $g(x)$ is the gradient vector of first partial derivatives.

[F2] [[def-euclidean-inner-product]] and [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $w^Tz$ is the Euclidean inner product and $|w^Tz|\le\|w\|_2\|z\|_2$.

[F3] [[thm-continuous-partial-derivatives-imply-total-differentiability]]: continuous partial derivatives make a map totally differentiable with derivative matrix equal to its Jacobian.

[F4] [[thm-chain-rule-for-total-derivatives]]: the derivative of a composition is the composition of its total derivatives.

[F5] [[cor-vector-valued-ftc-and-lipschitz-bound]]: if a vector-valued function is continuous on $[a,b]$, differentiable on $(a,b)$, and its derivative norm is at most $M$, then its endpoint difference has norm at most $M(b-a)$.

[F6] [[cor-mean-value-theorem]]: for a real function continuous on $[a,b]$ and differentiable on $(a,b)$, some $c\in(a,b)$ satisfies $h(b)-h(a)=h'(c)(b-a)$.

[F7] [[thm-clairaut-schwarz-mixed-partials]]: because $f$ is $C^2$ on the open set $U$, its mixed second partial derivatives commute. Under [F1], this identifies the Jacobian of $g=\nabla f$ with the Hessian matrix $G$ at every point of $U$.

## Proof


**Given:** The hypotheses and notation in the Statement. Fix $u,v\in K$, put $d:=u-v$, and define $z(t):=v+td$ for $0\le t\le1$.

1.1 Convexity gives $z(t)\in K$. For each point of the compact segment, openness gives a neighborhood on which the path remains in $U$; a finite subcover supplies an open interval containing $[0,1]$ on which the composition is defined. By [F3], $g$ is differentiable along the segment with derivative matrix its Jacobian; [F7] identifies that Jacobian with $G$. The chain rule [F4] then gives $(g\circ z)'(t)=G(z(t))d$, while $\phi(t):=f(z(t))$ satisfies $\phi'(t)=g(z(t))^Td$ and $\phi''(t)=d^TG(z(t))d$. [given, F1, F3, F4, F7, construct]

2.1 The operator-norm bound gives $\|G(z(t))d\|_2\le\Lambda\|d\|_2$. Apply [F5] to the vector path $t\mapsto g(z(t))$ on $[0,1]$ to get $\|g(u)-g(v)\|_2\le\Lambda\|d\|_2$. [given, F5, step 1.1, algebra]

2.2 Put $q(t):=g(z(t))^Td$. By step 1.1, $q'(t)=d^TG(z(t))d\ge\mu\|d\|_2^2$. Applying [F6] to $q$ on $[0,1]$ gives $q(1)-q(0)=q'(c)$ for some $c\in(0,1)$, and hence $(g(u)-g(v))^Td\ge\mu\|d\|_2^2$. [given, F6, step 1.1, algebra]

2.3 Define $\psi(t):=\phi(t)-\phi(0)-t\phi'(0)-\frac\mu2t^2\|d\|_2^2$. Then $\psi(0)=\psi'(0)=0$ and $\psi''(t)=d^TG(z(t))d-\mu\|d\|_2^2\ge0$. For each $t\in(0,1]$, [F6] applied to $\psi'$ on $[0,t]$ gives $\psi'(t)-\psi'(0)=t\psi''(c_t)\ge0$; continuity handles $t=0$. A second application of [F6], now to $\psi$ on $[0,1]$, gives $\psi(1)-\psi(0)=\psi'(c)\ge0$. Thus $f(u)-f(v)-g(v)^Td\ge\frac\mu2\|d\|_2^2$. [given, F6, step 1.1, algebra, choose]

3.1 Since $|d^TG(z(t))d|\le\|d\|_2\|G(z(t))d\|_2\le\Lambda\|d\|_2^2$ by [F2], define $\chi(t):=\phi(0)+t\phi'(0)+\frac\Lambda2t^2\|d\|_2^2-\phi(t)$. Then $\chi(0)=\chi'(0)=0$ and $\chi''(t)=\Lambda\|d\|_2^2-d^TG(z(t))d\ge0$. Applying [F6] first to $\chi'$ on $[0,t]$ and then to $\chi$ on $[0,1]$ as in step 2.3 gives $\chi(1)\ge0$, proving the upper Taylor bound. [given, F2, F6, step 1.1, step 2.3, algebra, choose]

4.1 Under the additional hypotheses on $W$, the path $q(t):=g(v+td)-g(v)-tG(x_*)d$ has derivative $q'(t)=(G(v+td)-G(x_*))d$ by the chain rule and the Jacobian identity [F7]. Convexity and the triangle inequality give $\|v+td-x_*\|_2\le(1-t)\|v-x_*\|_2+t\|u-x_*\|_2\le\max\{\|u-x_*\|_2,\|v-x_*\|_2\}$. Therefore $\|q'(t)\|_2\le L_G\max\{\|u-x_*\|_2,\|v-x_*\|_2\}\|d\|_2$. Applying [F5] to $q$ proves the last estimate in the Statement. [given, F3, F4, F5, F7, algebra] ∎

