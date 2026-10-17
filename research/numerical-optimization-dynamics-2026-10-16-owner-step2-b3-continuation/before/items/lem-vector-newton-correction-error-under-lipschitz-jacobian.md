---
id: lem-vector-newton-correction-error-under-lipschitz-jacobian
kind: lemma
title: "Vector Newton remainder under a Lipschitz Jacobian"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-c-one-map-and-local-inverse
  - def-jacobian-matrix-and-gradient
  - thm-chain-rule-for-total-derivatives
  - thm-total-derivative-computes-directional-and-partial-derivatives
  - def-vector-valued-derivative-and-integral
  - cor-vector-valued-ftc-and-lipschitz-bound
  - thm-norm-inequality-for-the-vector-valued-integral
  - thm-linearity-of-the-integral
  - thm-monotonicity-of-the-integral
  - thm-continuous-implies-integrable
  - thm-newton-leibniz-with-interior-derivative
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "E. Hairer and G. Wanner, Solving Ordinary Differential Equations II, Chapter VI: Iterative Methods—Nonlinear Equations"
      url: "https://www.unige.ch/~hairer/poly/chap6.pdf"
      locator: "§VI.3, printed pp. 139–140 / PDF pp. 5–6: Taylor error identity in the local Newton convergence argument"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, version 1.0"
      url: "https://fncbook.github.io/v1.0/nonlineqn/newtonsys.html"
      locator: "Chapter 4.5.2, equation (90): vector Taylor linear model"
---

## Statement

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be open, let $F:U\to\mathbb R^n$ be
$C^1$, and write $J(x)=DF(x)$ as a matrix in the standard basis. The matrix
of $DF(x)$ agrees with the Jacobian matrix by
[[thm-total-derivative-computes-directional-and-partial-derivatives]]. For a
matrix $A$ let
$\|A\|_{\rm op}:=\sup_{\|v\|_2=1}\|Av\|_2$. Let $K\subseteq U$ be convex,
let $x_*,x\in K$, and suppose for some $L\ge0$ that
$$\|J(y)-J(z)\|_{\rm op}\le L\|y-z\|_2\qquad(y,z\in K).$$
Then
$$\|F(x)-F(x_*)-J(x)(x-x_*)\|_2\le\frac{L}{2}\|x-x_*\|_2^2.$$

## Facts & Assumptions

**Given:** The open set $U$, the $C^1$ map $F$, the convex set $K$, the points
$x_*,x\in K$, the Jacobian $J$, and the Lipschitz bound with constant $L$.

[F1] [[def-c-one-map-and-local-inverse]]: a $C^1$ map is totally differentiable at every point, and its derivative-matrix entries are continuous.

[F2] [[def-jacobian-matrix-and-gradient]]: the Jacobian matrix has entries $\partial_jF_i$ in the standard basis; [[thm-total-derivative-computes-directional-and-partial-derivatives]] identifies this matrix with the matrix of $DF$.

[F3] [[thm-chain-rule-for-total-derivatives]]: the derivative of a composition is the composition of the derivatives.

[F4] [[def-vector-valued-derivative-and-integral]]: vector derivatives and integrals are componentwise; a vector-valued function is integrable when its components are integrable, and its integral is their vector of integrals.

[F5] [[thm-continuous-implies-integrable]]: every continuous real-valued function on a compact interval is Riemann integrable.

[F6] [[cor-vector-valued-ftc-and-lipschitz-bound]]: if a vector-valued function is differentiable on the closed interval and its vector derivative is integrable, then the integral of the derivative is the endpoint increment.

[F7] [[thm-linearity-of-the-integral]] and [F4]: the vector-valued integral is linear, by componentwise scalar linearity.

[F8] [[thm-norm-inequality-for-the-vector-valued-integral]]: for an integrable vector-valued $g$ on $[a,b]$, $\|\int_a^b g\|_2\le\int_a^b\|g\|_2$.

[F9] [[thm-monotonicity-of-the-integral]]: pointwise order between integrable real functions on $[a,b]$ implies the same order between their integrals.

[F10] [[thm-newton-leibniz-with-interior-derivative]]: if $H'=h$ on a closed interval and $h$ is integrable, then $\int h=H(1)-H(0)$ on $[0,1]$; in particular $\int_0^1c\,dt=c$ for a constant $c$ and $\int_0^1(1-t)\,dt=1/2$.

## Proof

**Given:** The data in the Statement.

1.1 Put $e:=x-x_*$ and $g(t):=F(x_*+te)$ for $0\le t\le1$. Convexity keeps the segment in $K\subseteq U$; openness of $U$ gives an open parameter interval containing $[0,1]$ on which $g$ is defined. The chain rule gives $g'(t)=J(x_*+te)e$, continuous because $J$ is Lipschitz on $K$, so its coordinates are integrable by [F4] and [F5]. [given, F1, F2, F3, F4, F5, construct]

2.1 Applying [F6] to $g$ yields $F(x)-F(x_*)=\int_0^1J(x_*+te)e\,dt$. Also $\int_0^1J(x)e\,dt=J(x)e$, by [F4], [F7], and [F10] applied coordinatewise to the constant vector. [step 1.1, F4, F6, F7, F10]

3.1 By linearity, $J(x)e-[F(x)-F(x_*)]=\int_0^1[J(x)-J(x_*+te)]e\,dt$. The vector integrand has continuous coordinates, so it is integrable by [F4] and [F5]. The norm inequality [F8], the operator-norm definition, and the Lipschitz hypothesis give $\|J(x)e-[F(x)-F(x_*)]\|_2\le\int_0^1L(1-t)\|e\|_2^2\,dt=\frac{L}{2}\|e\|_2^2$, because $\|x-(x_*+te)\|_2=(1-t)\|e\|_2$ and [F9] preserves the pointwise bound under integration. [step 2.1, F4, F5, F8, F9, F10, algebra] ∎
