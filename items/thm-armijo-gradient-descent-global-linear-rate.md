---
id: thm-armijo-gradient-descent-global-linear-rate
kind: theorem
title: "Armijo gradient descent has an explicit global linear rate"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - alg-gradient-descent
  - lem-armijo-backtracking-terminates-for-strict-descent-directions
  - lem-geometric-sequence-null
  - lem-hessian-lower-bound-strong-convexity-gradient-gap
  - def-hessian-and-euclidean-critical-point
  - def-jacobian-matrix-and-gradient
  - thm-multivariable-taylor-formula-with-lagrange-remainder
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

Let $U\subseteq\mathbb R^d$ be open and convex, and let $f\in C^2(U,\mathbb R)$ have an attained global minimum $f^*=f(x^*)$ at $x^*\in U$. Fix $x_0\in U$ and suppose $K:=\{y\in U:f(y)\le f(x_0)\}$ is compact. Let $V\subseteq U$ be convex and open, contain $K$ and every backtracking trial segment under consideration, and satisfy

$$mI\preceq H_f(y)\preceq MI\qquad(y\in V)$$

for $0<m\le M$. Run [[alg-gradient-descent]] in backtracking mode with Armijo parameter $a\in(0,1/2)$ and shrink factor $b\in(0,1)$. For every accepted update at a nonstationary iterate $x_k$, the accepted step satisfies

$$t_k\ge\tau:=\min\left\{1,\frac{2b(1-a)}{M}\right\},$$

and

$$f(x_{k+1})-f^*\le(1-2am\tau)(f(x_k)-f^*).$$

Consequently, for every generated $k\ge1$,

$$f(x_k)-f^*\le(1-2am\tau)^k(f(x_0)-f^*).$$

The factor lies in $(0,1)$. If the algorithm's caller-stop predicate fires, no later iterate is asserted. These are objective-gap bounds, not iterate-error bounds.

## Facts & Assumptions

**Given:** The hypotheses of the Statement and a generated nonstationary iterate $x\in K$ whose backtracking line search is reached.

[F1] [[alg-gradient-descent]]: in backtracking mode it uses $p=-\nabla f(x)$, starts at $t=1$, repeatedly multiplies a rejected step by its factor in $(0,1)$, and accepts the Armijo inequality.

[F2] [[lem-armijo-backtracking-terminates-for-strict-descent-directions]]: on an open domain, a differentiable objective and a strict descent direction make this backtracking loop accept after finitely many reductions.

[F3] [[lem-geometric-sequence-null]]: if $0<b<1$, then $b^j\to0$ as $j\to\infty$.

[F4] [[lem-hessian-lower-bound-strong-convexity-gradient-gap]]: the Hessian lower bound implies $\|\nabla f(x)\|_2^2\ge2m(f(x)-f^*)$ on the convex neighborhood containing $x$ and $x^*$.

[F5] [[thm-multivariable-taylor-formula-with-lagrange-remainder]]: a $C^2$ function on a segment has its second-order Taylor remainder given by a Hessian quadratic form at an interior point of that segment.

[F6] [[def-hessian-and-euclidean-critical-point]] and [[def-jacobian-matrix-and-gradient]]: the Hessian is the matrix of second partial derivatives and the gradient is the vector of first partial derivatives.

## Proof
1.1 At a nonstationary iterate, $g:=\nabla f(x)\ne0$, so [F1] uses the strict descent direction $p=-g$ and [F2] guarantees finite acceptance. Let $T:=2(1-a)/M$. If $T\ge1$, the initial trial $t=1$ satisfies $t\le T$. If $T<1$, [F3] gives an index $j$ with $b^j\le T$; choose the least such $j$, so $b^{j-1}>T$ and $b^j>bT$. [F1, F2, F3, F6, given, choose]

2.1 For any trial $0<t\le T$ on the assumed segment, [F5] and $H_f\preceq MI$ give $f(x-tg)\le f(x)-t\|g\|_2^2+(M/2)t^2\|g\|_2^2\le f(x)-at\|g\|_2^2$. Thus the initial trial is accepted when $T\ge1$; when $T<1$, the candidate $b^j$ from step 1.1 passes, so the actual accepted step is at least $b^j>bT$. Both cases give $t_k\ge\min\{1,bT\}=\tau$. [F1, F5, step 1.1, algebra]

3.1 Armijo acceptance and step 2.1 imply $f(x_{k+1})\le f(x_k)-a\tau\|\nabla f(x_k)\|_2^2$. Apply [F4] to obtain $f(x_{k+1})-f^*\le(1-2am\tau)(f(x_k)-f^*)$. The factor is positive because $\tau\le2b(1-a)/M$ gives $2am\tau\le4ab(1-a)m/M<1$, and it is below one because $a,m,\tau>0$. [F1, F4, step 2.1, given, algebra]

4.1 Every accepted step decreases $f$, so all generated iterates remain in $K$. Repeatedly apply step 3.1 along the generated updates; induction gives the asserted $k$-step bound, and a stopping status creates no later iterate. [F1, step 3.1, given, algebra, discharge-induction] ∎
