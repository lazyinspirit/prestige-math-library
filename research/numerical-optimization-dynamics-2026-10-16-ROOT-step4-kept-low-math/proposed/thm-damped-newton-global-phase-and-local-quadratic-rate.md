---
id: thm-damped-newton-global-phase-and-local-quadratic-rate
kind: theorem
title: "Damped Newton reaches its local quadratic phase in finitely many continued updates"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - alg-damped-newton
  - thm-newton-local-quadratic-convergence-under-lipschitz-hessian
  - lem-geometric-sequence-null
  - lem-hessian-lower-bound-strong-convexity-gradient-gap
  - def-hessian-and-euclidean-critical-point
  - def-jacobian-matrix-and-gradient
  - thm-multivariable-taylor-formula-with-lagrange-remainder
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - cor-hessian-is-symmetric
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
    - title: "Philip E. Gill and Margaret H. Wright, Math 171B Numerical Optimization Class Notes"
      url: "https://mathweb.ucsd.edu/~njw/Teaching/Math171B/notes171B.pdf"
---

## Statement

Let $U\subseteq\mathbb R^d$ be open and convex, let $f\in C^2(U,\mathbb R)$ have an attained global minimum $f^*=f(x^*)$ at $x^*\in U$, and fix $x_0\in U$. Suppose $K:=\{y\in U:f(y)\le f(x_0)\}$ is compact and is contained in a convex open $V\subseteq U$ that contains every Newton backtracking trial segment under consideration. For constants $0<m\le M$, assume

$$m\|v\|_2^2\le v^TH_f(y)v\le M\|v\|_2^2\qquad(y\in V,\ v\in\mathbb R^d).$$

Assume also that there are $R>0$ and $L_H\ge0$ with $B(x^*,R)\subseteq V$ and $\|H_f(y)-H_f(z)\|_{\mathrm{op}}\le L_H\|y-z\|_2$ for $y,z\in B(x^*,R)$, where $\|A\|_{\mathrm{op}}:=\sup_{\|v\|_2=1}\|Av\|_2$ for $d\ge1$, and the unique operator on $\mathbb R^0$ has norm zero. For $d\ge1$, run [[alg-damped-newton]] with $a\in(0,1/2)$, $b\in(0,1)$, and positive decrement tolerance $\varepsilon$, and let $\rho>0$ and $C<\infty$ be constants furnished by [[thm-newton-local-quadratic-convergence-under-lipschitz-hessian]] for these data. For $d=0$, interpret the procedure as the immediate return $(x_0,\texttt{stationary})$, and set $\rho=R$ and $C=0$. In either case set

$$\tau_N:=\min\left\{1,\frac{2b(1-a)m}{M}\right\},\qquad q_N:=1-\frac{2am\tau_N}{M}.$$

For every accepted update before entry into $B(x^*,\rho)$,

$$f(x_{k+1})-f^*\le q_N(f(x_k)-f^*),\qquad 0<q_N<1.$$

Thus, after finitely many such updates the method either has stopped at its stationary or positive decrement test or has entered $B(x^*,\rho)$. More explicitly, if $\varepsilon<m^2\rho^2/(2M)$, the decrement test cannot stop outside that ball, so the method reaches it after finitely many accepted updates. Once in this ball, every later attempted update has step $t_k=1$ and satisfies

$$\|x_{k+1}-x^*\|_2\le C\|x_k-x^*\|_2^2.$$

The last assertion is conditional on the decrement test not stopping first. No post-stop iterate or update is asserted. This is a strongly convex objective result; it does not apply to arbitrary vector roots or indefinite Hessians.

## Facts & Assumptions

**Given:** The hypotheses of the Statement, a generated iterate $x\in K$, and the canonical damped-Newton line-search parameters and decrement test.

[F1] [[alg-damped-newton]]: when $H_f(x)$ is positive definite it computes $p=-H_f(x)^{-1}\nabla f(x)$ and $\lambda^2=\nabla f(x)^TH_f(x)^{-1}\nabla f(x)$; if $\lambda^2/2\le\varepsilon$ it stops before line search, and otherwise it backtracks from $t=1$ using the Armijo condition with parameter $a$ and factor $b$.

[F2] [[thm-newton-local-quadratic-convergence-under-lipschitz-hessian]]: for a $C^2$ objective with a positive-definite critical Hessian and a Lipschitz Hessian on a ball, every generated iterate from a sufficiently small ball remains there; each attempted update whose decrement test does not stop has unit step and a quadratic error bound.

[F3] [[lem-hessian-lower-bound-strong-convexity-gradient-gap]]: the Hessian lower bound gives $f(x)-f^*\ge m\|x-x^*\|_2^2/2$ and $\|\nabla f(x)\|_2^2\ge2m(f(x)-f^*)$.

[F4] [[thm-multivariable-taylor-formula-with-lagrange-remainder]]: on a segment in the convex domain, the second-order remainder is a Hessian quadratic form at an interior point.

[F5] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a real symmetric Hessian has an orthonormal eigenbasis, so $mI\preceq H\preceq MI$ implies $M^{-1}I\preceq H^{-1}\preceq m^{-1}I$.

[F6] [[cor-hessian-is-symmetric]] and [[def-hessian-and-euclidean-critical-point]]: the Hessian of a $C^2$ real scalar objective is symmetric and uses the second-partial convention.

[F7] [[def-jacobian-matrix-and-gradient]]: $\nabla f$ is the vector of first partial derivatives.

[F8] [[lem-geometric-sequence-null]]: if $0<q_N<1$, then $q_N^k\to0$.

## Proof
1.1 If $d=0$, then $U=\{x^*\}=\{x_0\}$, $f(x_0)=f^*$, and the gradient is the unique zero vector. The stated extension returns `stationary` immediately; $x_0\in B(x^*,R)$, so all update assertions are vacuous. The scalar constants still satisfy $0<q_N<1$: $0<2am\tau_N/M\le4ab(1-a)(m/M)^2<1$. For the remaining proof assume $d\ge1$. At a nonstationary iterate, $H:=H_f(x)$ is symmetric positive definite by [F6] and the lower bound. Put $g:=\nabla f(x)$ and $p:=-H^{-1}g$. The Newton decrement is $\lambda^2=g^TH^{-1}g=p^THp$, and [F5] gives $\lambda^2\ge\|g\|_2^2/M$ and $\lambda^2\ge m\|p\|_2^2$. [F1, F5, F6, F7, given, algebra]

2.1 Set $T_N:=2m(1-a)/M$. For any trial $0<t\le T_N$, [F4] and $H_f\preceq MI$ on its segment give $f(x+tp)\le f(x)-t\lambda^2+(M/2)t^2\|p\|_2^2\le f(x)-at\lambda^2$, where the last inequality uses $\lambda^2\ge m\|p\|_2^2$. If $T_N\ge1$, trial $t=1$ passes. If $T_N<1$, [F8] gives a least $j$ with $b^j\le T_N$; then $b^j>bT_N$ and that candidate passes, so the first accepted step is at least $\tau_N$. [F1, F4, F8, step 1.1, algebra, choose]

3.1 For any accepted update before the local ball, $\lambda^2\ge\|g\|_2^2/M$ by step 1.1 and $t\ge\tau_N$ by step 2.1. Armijo acceptance and [F3] therefore give $f(x_+)-f^*\le f(x)-f^*-(a\tau_N/M)\|g\|_2^2\le(1-2am\tau_N/M)(f(x)-f^*)$. The coefficient is positive because $\tau_N\le2b(1-a)m/M$ implies $2am\tau_N/M\le4ab(1-a)(m/M)^2<1$; it is less than one because all factors in the subtracted term are positive. [F1, F3, step 1.1, step 2.1, algebra]

4.1 If $x$ lies outside $B(x^*,\rho)$, [F3] gives $f(x)-f^*\ge m\rho^2/2$. Step 1.1 then gives $\lambda^2/2\ge\|g\|_2^2/(2M)\ge(m/M)(f(x)-f^*)\ge m^2\rho^2/(2M)$. Thus if $\varepsilon<m^2\rho^2/(2M)$ the decrement test cannot stop outside the ball. Repeating step 3.1 gives a gap bounded by $q_N^k(f(x_0)-f^*)$; choose $N$ with $q_N^N(f(x_0)-f^*)<m\rho^2/2$, which exists by [F8]. If no earlier stop occurs, [F3] places the $N$th generated iterate inside $B(x^*,\rho)$. For larger tolerances the method may stop before this finite entry, and no post-stop sequence is asserted. [F1, F3, F5, F8, step 1.1, step 3.1, given, choose]

5.1 Starting the canonical local theorem [F2] at the first generated iterate in $B(x^*,\rho)$ shows that every later generated iterate remains in that ball. Whenever its decrement test does not stop, [F2] gives $t_k=1$ and $\|x_{k+1}-x^*\|_2\le C\|x_k-x^*\|_2^2$. If the decrement test stops, the algorithm returns there and no later update is asserted. [F1, F2, step 4.1] ∎
