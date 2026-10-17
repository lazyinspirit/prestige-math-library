---
id: thm-exact-line-search-gradient-descent-global-contraction
kind: theorem
title: "Exact gradient line search has a global objective-gap contraction"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - alg-exact-gradient-line-search-step
  - def-hessian-and-euclidean-critical-point
  - def-jacobian-matrix-and-gradient
  - def-directional-and-partial-derivatives
  - thm-continuous-partial-derivatives-imply-total-differentiability
  - thm-chain-rule-for-total-derivatives
  - thm-hessian-characterises-convexity
  - thm-multivariable-taylor-formula-with-lagrange-remainder
  - lem-hessian-lower-bound-strong-convexity-gradient-gap
  - thm-compact-subset-is-closed-and-bounded
  - thm-heine-borel-rn
  - thm-metric-continuity-characterisations
  - thm-extreme-value-metric
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - cor-mean-value-theorem
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

Let $U\subseteq\mathbb R^d$ be open and convex, let $f\in C^2(U,\mathbb R)$ have an attained global minimum $f^*=f(x^*)$ at $x^*\in U$, and fix $x_0\in U$. Suppose the initial sublevel set $K:=\{y\in U:f(y)\le f(x_0)\}$ is compact and is contained in a convex open set $V\subseteq U$ on which

$$mI\preceq H_f(y)\preceq MI\qquad(y\in V)$$

for constants $0<m\le M$. For every current iterate $x\in K$, the oracle [[alg-exact-gradient-line-search-step]] is well-defined. If $g:=\nabla f(x)\ne0$ and $x_+$ is its returned point, then

$$f(x_+)-f^*\le\left(1-\frac mM\right)(f(x)-f^*).$$

If $g=0$, the oracle returns the unique minimizer $x=x^*$. Repeated exact steps from $x_0$ therefore satisfy

$$f(x_k)-f^*\le\left(1-\frac mM\right)^k(f(x_0)-f^*)$$

for every generated $k\ge1$. When $m=M$, the factor is zero for $k\ge1$; no $0^0$ convention is used. This is an objective-gap statement and does not identify an iterate-error bound without an additional curvature estimate.

## Facts & Assumptions

**Given:** $U,f,x^*,x_0,K,V,m,M$ as in the Statement, and a current $x\in K$.

[F1] [[alg-exact-gradient-line-search-step]]: if $g\ne0$, it returns the unique global minimizer of $t\mapsto f(x-tg)$ over feasible $t\ge0$; if $g=0$, it returns the stationary point.

[F2] [[def-hessian-and-euclidean-critical-point]] and [[def-jacobian-matrix-and-gradient]]: $H_f$ is the Hessian matrix and $\nabla f$ is the vector of standard-coordinate partial derivatives.

[F3] [[thm-continuous-partial-derivatives-imply-total-differentiability]] and [[thm-chain-rule-for-total-derivatives]]: a $C^1$ scalar field is totally differentiable with Jacobian derivative, and its composition with a differentiable line has the chain-rule derivative.

[F4] [[thm-hessian-characterises-convexity]]: a $C^2$ function with positive-semidefinite Hessian on a convex open set is convex there.

[F5] [[thm-multivariable-taylor-formula-with-lagrange-remainder]]: along a segment in a convex open domain, the second-order Taylor remainder is the Hessian quadratic form at a point on that segment.

[F6] [[lem-hessian-lower-bound-strong-convexity-gradient-gap]]: applied to the restriction of $f$ to $V$, the lower Hessian bound gives the strong-convexity inequality, uniqueness of an attained minimizer, and $\|\nabla f(x)\|_2^2\ge2m(f(x)-f^*)$ for points of $V$.

[F7] [[thm-compact-subset-is-closed-and-bounded]]: a compact subset of a metric space is closed and bounded.

[F8] [[thm-metric-continuity-characterisations]]: a continuous map between metric spaces has closed preimages of closed sets; this implication uses no choice principle.

[F9] [[thm-heine-borel-rn]]: a closed and bounded subset of Euclidean space is compact.

[F10] [[thm-extreme-value-metric]]: a continuous real-valued function on a nonempty compact metric space attains its minimum.

[F11] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: the Euclidean norm satisfies the triangle inequality and Cauchy–Schwarz.

[F12] [[cor-mean-value-theorem]]: for a differentiable scalar function on an interval, its endpoint increment is its derivative at an interior point times the interval length.

## Proof
1.1 If $g=0$, [F6] gives $0\ge2m(f(x)-f^*)$; since $f(x)\ge f^*$ and $m>0$, $f(x)=f^*$, and uniqueness gives $x=x^*$. Now assume $g\ne0$ and put $r(t):=x-tg$ for $t\ge0$. [F3] gives $\phi'(0)=-\|g\|_2^2<0$ for $\phi(t):=f(r(t))$. Openness of $U$ and this strict derivative provide a sufficiently small $t>0$ with $r(t)\in U$ and $f(r(t))<f(x)\le f(x_0)$, so $S:=\{t\ge0:r(t)\in K\}$ is nonempty. [F2, F3, F6, given, choose]

2.1 By [F4], $f$ is convex on $V$, so its sublevel set $K$ is convex because $K\subset V$. By [F7], $K$ is closed and bounded. The affine map $r$ is continuous since $\|r(s)-r(t)\|_2=|s-t|\|g\|_2$, so [F8] makes $S=r^{-1}(K)\cap[0,\infty)$ closed. Boundedness gives $c\in\mathbb R^d$ and $R_0>0$ with $K\subset B(c,R_0)$; hence $\|y\|_2\le\|c\|_2+R_0=:R$ on $K$. For $t\in S$, the triangle inequality [F11] yields $t\|g\|_2=\|x-r(t)\|_2\le\|x\|_2+R$. Thus $S$ is bounded and compact by [F9]. [F4, F7, F8, F9, F11, step 1.1]

3.1 The continuous restriction of $\phi$ to the nonempty compact set $S$ attains a minimum $t_*\in S$ by [F10]. Since $0\in S$, we have $f(r(t_*))\le f(x)$. Every feasible ray parameter $t$ with $r(t)\in U$ but $t\notin S$ has $f(r(t))>f(x_0)\ge f(x)\ge f(r(t_*))$, so $t_*$ is a global feasible-ray minimizer. If two distinct parameters minimized, their endpoints $y_1,y_2$ would be distinct because $g\ne0$; their midpoint $z$ lies in $K$ by step 2.1. Apply the strong-convexity inequality [F6] from $z$ to each endpoint and add: $f(z)\le(f(y_1)+f(y_2))/2-m\|y_1-y_2\|_2^2/8$, strictly below their common minimum. Thus the minimizer is unique and the output specified by [F1] is well-defined. [F1, F6, F10, given, step 2.1, algebra]

4.1 The small step in step 1.1 strictly decreases $f$, so the minimizer from step 3.1 has $t_*>0$. Since $r(t_*)\in K\subset U$ and $U$ is open, $t_*$ is interior to the feasible ray and $\phi'(t_*)=0$. Convexity of $V$ and step 2.1 put the segment $[x,r(t_*)]$ in $V$. By [F2], [F3], and the Hessian bounds, $m\|g\|_2^2\le\phi''(s)=g^TH_f(r(s))g\le M\|g\|_2^2$ on this segment, so $\phi'$ is strictly increasing. The mean-value theorem [F12] applied to $\phi'$ on $[0,t_*]$ gives $\|g\|_2^2=\phi'(t_*)-\phi'(0)=t_*\phi''(s_0)\le t_*M\|g\|_2^2$ for some $s_0\in(0,t_*)$. Since $g\ne0$, division yields $t_*\ge1/M$. [F2, F3, F12, given, step 1.1, step 3.1]

5.1 The candidate $t_0:=1/M$ lies in $[0,t_*]$ by step 4.1, so $r(t_0)$ lies on the segment from $x$ to $r(t_*)$ and belongs to $V$. The lower Hessian bound makes $\phi''(s)>0$ there; since $\phi'(t_*)=0$, $\phi'(s)<0$ for $0\le s<t_*$. Hence $f(r(t_0))\le f(x)\le f(x_0)$ and $r(t_0)\in K$. Taylor's formula [F5] with the upper Hessian bound gives $f(r(t_0))\le f(x)-M^{-1}\|g\|_2^2+(M/(2M^2))\|g\|_2^2=f(x)-\|g\|_2^2/(2M)$. By the minimization proved in step 3.1, $f(x_+)\le f(r(t_0))$. [F5, F6, given, step 3.1, step 4.1]

6.1 Subtract $f^*$ in step 5.1 and use [F6] to get $f(x_+)-f^*\le f(x)-f^*-\|g\|_2^2/(2M)\le(1-m/M)(f(x)-f^*)$. The factor is nonnegative because $m\le M$. Exact steps never increase the objective, so every later iterate remains in $K$; applying the one-step bound successively proves the stated rate for all generated iterates. [F1, F6, given, step 5.1, algebra, discharge-induction] ∎
