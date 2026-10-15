---
id: thm-newton-local-quadratic-convergence-under-lipschitz-hessian
kind: theorem
title: "Newton's method has local quadratic convergence under a Lipschitz Hessian"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - alg-damped-newton
  - cor-hessian-is-symmetric
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - def-hessian-and-euclidean-critical-point
  - thm-chain-rule-for-total-derivatives
  - thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-continuous-implies-integrable
  - thm-multivariable-taylor-formula-with-lagrange-remainder
  - thm-monotonicity-of-the-integral
  - thm-newton-leibniz-with-interior-derivative
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Stephen Boyd and Lieven Vandenberghe, Convex Optimization"
      url: "https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf"
      locator: "Chapter 9 §9.5.3, PDF pp. 498–505; the local claim is proved under the BCS-20 hypotheses"
---

## Statement

Let $d\ge1$, let $U\subseteq\mathbb R^d$ be open, and let
$f:U\to\mathbb R$ be $C^2$.
Use the Hessian convention of [[def-hessian-and-euclidean-critical-point]].
Suppose $x^*\in U$ is an interior critical point,
$H(x^*):=\nabla^2f(x^*)$
is positive definite, and for some $R>0$, $K\ge0$ the ball $B(x^*,R)$ lies
in $U$ and
$$\|H(x)-H(y)\|_{\rm op}\le K\|x-y\| \qquad(x,y\in B(x^*,R)).$$
Fix any Newton-decrement tolerance $\varepsilon>0$ and the Armijo parameters
$0<\alpha<1/2$ and $0<\beta<1$ in [[alg-damped-newton]]. There are
$\rho>0$ and $C<\infty$ such that every generated iterate from a start
$x_0\in B(x^*,\rho)$ remains in this ball. At each generated nonstationary
iterate $x_k$ for which the algorithm's decrement test satisfies
$\lambda_k^2/2>\varepsilon$ and a Newton update is therefore attempted, the
line search accepts the full step $t_k=1$ and
$$\|x_{k+1}-x^*\|\le C\|x_k-x^*\|^2.$$
If the decrement test stops the procedure, no next iterate or update bound is
asserted at that point.
Here $\lambda_k^2=\nabla f(x_k)^TH(x_k)^{-1}\nabla f(x_k)$ is the decrement
computed by [[alg-damped-newton]].
This is a local statement; it supplies no global optimum or convergence
claim for a nonconvex objective.

## Facts & Assumptions


**Given:** The positive integer $d$, tolerance $\varepsilon>0$, and
$U,f,x^*,R,K,\alpha,\beta$ as in the Statement. The operator norm
is $\|A\|_{\rm op}:=\sup_{\|v\|=1}\|Av\|$.

[F1] [[alg-damped-newton]]: at a nonstationary point with positive-definite
Hessian it computes $p=-H(x)^{-1}\nabla f(x)$ and
$\lambda^2=\nabla f(x)^TH(x)^{-1}\nabla f(x)$; it stops before line search if
$\lambda^2/2\le\varepsilon$, and otherwise accepts $t=1$ whenever the
Armijo inequality holds.

[F2] [[cor-hessian-is-symmetric]]: the Hessian of a $C^2$ real scalar field
is symmetric.

[F3] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: a
symmetric real matrix has an orthonormal eigenbasis.

[F4] [[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]]:
a symmetric positive-definite Hessian has an invertible Cholesky factor.

[F5] [[thm-chain-rule-for-total-derivatives]]: differentiating each gradient
coordinate along a line composes its total derivative with the line direction.

[F6] [[thm-continuous-implies-integrable]]: a continuous real function on a
compact interval is Riemann integrable.

[F7] [[thm-newton-leibniz-with-interior-derivative]]: a continuous scalar
function on a closed interval whose interior derivative has a continuous
integrable extension has derivative integral equal to its endpoint
increment.

[F8] [[thm-multivariable-taylor-formula-with-lagrange-remainder]]: for
$f\in C^2$ on a convex open set and a segment $x+[0,1]p$ in it, the
order-one Taylor formula has a second-order Hessian remainder at
$x+\theta p$ for some $\theta\in(0,1)$.

[F9] [[def-hessian-and-euclidean-critical-point]]: $H_f(x)$ is the matrix of
second partial derivatives, and a critical point has $\nabla f(x)=0$.

[F10] [[thm-cauchy-schwarz-and-the-euclidean-norm]]:
$|\langle u,v\rangle|\le\|u\|\|v\|$ in $\mathbb R^d$.

[F11] [[thm-monotonicity-of-the-integral]]: pointwise bounds on an integrable
real function on $[0,1]$ pass to its integral.

## Proof

1.1 By [F2]–[F3], $H(x^*)$ has an orthonormal eigenbasis with positive eigenvalues. Let $\lambda>0$ be its smallest eigenvalue. Choose $r<R/2$ with $Kr\le\lambda/2$. For $\|x-x^*\|\le r$ and any vector $v$, $$v^TH(x)v\ge v^TH(x^*)v-\|H(x)-H(x^*)\|_{\rm op}\|v\|^2 \ge\frac\lambda2\|v\|^2.$$ Thus $H(x)$ is positive definite there and [F4] makes each Newton solve well-defined. [F2, F3, F4, F9, F10, given, choose, algebra]

2.1 Put $M_0:=\|H(x^*)\|_{\rm op}+Kr$, $M:=\sqrt d\,M_0$, and $m:=\lambda/2$. Along the segment $x^*+te$, where $e=x-x^*$ and $\|e\|\le r$, apply [F5] to each coordinate of the gradient map $t\mapsto\nabla f(x^*+te)$. Its derivative is the corresponding coordinate of $H(x^*+te)e$; the integrand is continuous and hence integrable by [F6]. Newton–Leibniz [F7] and $\nabla f(x^*)=0$ give $$\nabla f(x)=\int_0^1H(x^*+te)e\,dt.$$ For every $t\in[0,1]$, $\|H(x^*+te)\|_{\rm op}\le M_0$, so each coordinate of $H(x^*+te)e$ is bounded in absolute value by $M_0\|e\|$. Apply [F11] to each coordinate integral; this gives $|\nabla f(x)_i|\le M_0\|e\|$ and hence $\|\nabla f(x)\|\le M\|e\|$. Each coordinate of $(H(x)-H(x^*+te))e$ is bounded in absolute value by $K(1-t)\|e\|^2$, using the operator-norm Lipschitz bound and [F10]. Applying [F11] to these coordinate integrals gives $$\|H(x)e-\nabla f(x)\| \le\frac{\sqrt d\,K}{2}\|e\|^2.$$ [F5, F6, F7, F9, F10, F11, given, step 1.1, algebra]

3.1 Let $p=-H(x)^{-1}\nabla f(x)$ be the Newton direction and $e_+:=x+p-x^*$. Since $e_+=H(x)^{-1}(H(x)e-\nabla f(x))$ and $\|H(x)^{-1}\|_{\rm op}\le1/m=2/\lambda$ by step 1.1 and the orthonormal eigenbasis in [F3], step 2.1 gives $$\|e_+\|\le C\|e\|^2,\qquad C:=\sqrt d\,K/\lambda.$$ Also $\|p\|\le D\|e\|$ with $D:=M/m=2M/\lambda$, because $\|p\|\le m^{-1}\|\nabla f(x)\|$. [F1, F3, F9, step 1.1, step 2.1, algebra]

4.1 Choose $\rho\le r/(1+D)$ and, if $K>0$, also choose $D\rho\le(1/2-\alpha)\lambda/K$; decrease $\rho$ further so $C\rho\le1/2$. For $x\in B(x^*,\rho)$ the segment from $x$ to $x+p$ lies in $B(x^*,r)$. If $\nabla f(x)=0$, step 3.1 gives $\|e\|\le C\|e\|^2$, so the choice $C\rho\le1/2$ forces $e=0$. [given, step 3.1, choose, algebra]

5.1 Whenever a nonzero Newton direction is sent to line search, apply [F8] with $k=1$ on the segment $x+[0,1]p$. For some $\theta\in(0,1)$, $$f(x+p)=f(x)+\langle\nabla f(x),p\rangle +\frac12p^TH(x+\theta p)p.$$ Write $A:=p^TH(x)p\ge m\|p\|^2$ by step 1.1. Since $\nabla f(x)=-H(x)p$ and $H$ is $K$-Lipschitz, $$f(x+p)-f(x)-\alpha\langle\nabla f(x),p\rangle \le-(1/2-\alpha)A+\frac K2\|p\|^3\le0$$ by the choice of $\rho$ in step 4.1. If $K=0$, the same inequality holds with its cubic term zero. Therefore the full step passes the Armijo test and [F1] accepts $t=1$. This is conditional on the decrement test not stopping before line search. [F1, F2, F8, F10, step 1.1, step 4.1, algebra]

6.1 At any generated iterate in $B(x^*,\rho)$, a nonstationary point has a positive-definite Hessian by step 1.1, so the unavailable-solve status cannot occur. If its decrement test stops the method, no update is attempted. Otherwise step 5.1 gives a unit step, and steps 3.1 and 5.1 give the quadratic bound and $\|e_+\|\le C\rho\|e\|\le\|e\|/2$, so the next generated iterate remains in the ball. If an iterate is stationary, step 4.1 shows it is $x^*$. Induction over generated iterates proves the local statement, with the rate asserted exactly for updates the algorithm attempts. No claim outside this neighborhood follows. [step 1.1, step 3.1, step 4.1, step 5.1, given, discharge-induction] ∎
