---
id: lem-nonlinear-residual-linearization-error-under-lipschitz-jacobian
kind: lemma
title: "Rectangular residual linearization error under a Lipschitz Jacobian"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - cor-vector-valued-ftc-and-lipschitz-bound
  - def-c-one-map-and-local-inverse
  - def-euclidean-inner-product
  - def-induced-matrix-p-norm
  - def-jacobian-matrix-and-gradient
  - def-vector-valued-derivative-and-integral
  - thm-chain-rule-for-total-derivatives
  - thm-algebra-of-derivatives
  - thm-continuous-implies-integrable
  - thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized
  - thm-monotonicity-of-the-integral
  - thm-newton-leibniz-with-interior-derivative
  - thm-norm-inequality-for-the-vector-valued-integral
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, second edition"
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 10, §10.3, printed p. 256 / PDF p. 275: the integral Taylor identity used in the Gauss–Newton local analysis."
    - title: "David Bindel, CS 4220: Numerical Analysis, Gauss-Newton and nonlinear least squares"
      url: "https://www.cs.cornell.edu/courses/cs4220/2026sp/lec/2026-04-10.html"
      locator: "Section An actual bound for Gauss-Newton: the vector integral identity and Lipschitz-Jacobian remainder estimate."
---

## Statement

Let $U\subseteq\mathbb R^n$ be open, let $r:U\to\mathbb R^m$ be $C^1$ with
$m,n\ge1$, and let $J(x)=Dr(x)\in\mathbb R^{m\times n}$. Let $K\subseteq U$
be convex and let $x_*,x\in K$. Suppose $L\ge0$ and
$\|J(y)-J(z)\|_2\le L\|y-z\|_2$ for all $y,z\in K$, where the matrix norm is
the Euclidean induced operator norm of [[def-induced-matrix-p-norm]]. Then
$$\|r(x)-r(x_*)-J(x)(x-x_*)\|_2\le\tfrac L2\|x-x_*\|_2^2.$$
The dimensions $m$ and $n$ need not be equal.

## Facts & Assumptions

**Given:** The open set $U$, the $C^1$ residual $r:U\to\mathbb R^m$, the convex set $K\subseteq U$, the points $x_*,x\in K$, and the Jacobian Lipschitz bound in the Statement.

[F1] [[def-c-one-map-and-local-inverse]]: $C^1$ means total differentiability at every point and continuity of the derivative-matrix entries.

[F2] [[def-jacobian-matrix-and-gradient]]: the Jacobian entries are $J_{ij}=\partial_j r_i$ in the standard basis.

[F3] [[thm-chain-rule-for-total-derivatives]]: the derivative of a composition is the composition of the derivatives.

[F4] [[def-vector-valued-derivative-and-integral]]: vector derivatives and integrals are componentwise; vector integration is linear.

[F5] [[thm-continuous-implies-integrable]]: a continuous scalar function on a closed bounded interval is Riemann integrable.

[F6] [[cor-vector-valued-ftc-and-lipschitz-bound]]: a vector function differentiable on a closed interval with integrable derivative has endpoint difference equal to the integral of its derivative.

[F7] [[thm-norm-inequality-for-the-vector-valued-integral]]: for an integrable vector function, the norm of its integral is at most the integral of its norm.

[F8] [[def-euclidean-inner-product]]: the Euclidean norm is induced by the standard dot product and $\|v\|_2^2=\langle v,v\rangle$.

[F9] [[def-induced-matrix-p-norm]]: at $p=2$, $\|A\|_2$ is the matrix norm induced by the Euclidean vector norm.

[F10] [[thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized]]: $\|Av\|_2\le\|A\|_2\|v\|_2$ for this induced norm.

[F11] [[thm-monotonicity-of-the-integral]]: pointwise bounds between integrable real functions pass to their integrals.

[F12] [[thm-algebra-of-derivatives]] and [[thm-newton-leibniz-with-interior-derivative]]: the product rule gives $(tc)\prime=c$ for a constant vector coordinate $c$, and $(t-t^2/2)\prime=1-t$; Newton-Leibniz gives the constant-vector integral and $\int_0^1(1-t)\,dt=1/2$.





## Proof

1.1 Put $e:=x-x_*$ and $g(t):=r(x_*+te)$ for $0\le t\le1$. Convexity gives $x_*+te\in K\subseteq U$; openness supplies the local parameter neighborhoods needed for the derivative at each point, one-sided at the endpoints. The chain rule [F3] gives $g'(t)=J(x_*+te)e$. The Jacobian Lipschitz bound makes this derivative continuous, so its components are integrable by [F4] and [F5]. [given, F1, F2, F3, F4, F5, F8, F9, construct]

2.1 By [F6], $r(x)-r(x_*)=\int_0^1J(x_*+te)e\,dt$. For each coordinate, [F12] gives the antiderivative $t\mapsto t(J(x)e)_i$, so the constant vector function with value $J(x)e$ has integral $J(x)e$. Linearity [F4] therefore gives $r(x)-r(x_*)-J(x)e=\int_0^1[J(x_*+te)-J(x)]e\,dt$. [step 1.1, F4, F6, F12]

3.1 For $0\le t\le1$, the integrand in step 2.1 has norm at most $L(1-t)\|e\|_2^2$ by [F9], [F10], and the Lipschitz hypothesis. The norm inequality [F7] and integral monotonicity [F11] bound the norm of the integral by $L\|e\|_2^2\int_0^1(1-t)\,dt=(L/2)\|e\|_2^2$ using [F12]. This proves the Statement for every $m,n\ge1$. [step 2.1, F7, F9, F10, F11, F12, algebra] ∎
