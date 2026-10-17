---
id: thm-hermite-interpolant-double-node-remainder
kind: theorem
title: Double-node Hermite interpolation has the stated pointwise remainder
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-cardinal-polynomial-interpolation
  - lem-cardinal-basis-degree-and-values
  - thm-cardinal-polynomial-interpolant-exists-uniquely
  - lem-polynomial-highest-derivative
  - def-higher-derivatives-and-smoothness
  - lem-higher-order-rolle
  - thm-algebra-of-derivatives
  - thm-algebra-of-continuous-functions
  - def-real-polynomial-degree-leading-coefficient-and-monic
  - def-polynomial-ring-over-a-commutative-ring
  - prop-polynomial-degree-laws-over-a-commutative-ring
  - lem-product-of-linear-factors-is-monic-polynomial
  - def-factorial-and-falling-factorial
  - lem-nat-finite-sum-laws-and-the-canonical-embedding
  - thm-reals-field
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "John A. Gubner, Gaussian Quadrature and the Eigenvalue Problem, §§2–5, 2020"
      url: "https://gubner.ece.wisc.edu/gaussquad.pdf"
    - title: "MATH 373 Lecture Notes, Lecture 14: Gaussian Quadrature, §§10.2–10.5"
      url: "https://sites.math.rutgers.edu/~falk/math373/lecture14.pdf"
    - title: "Walter Gautschi, The Interplay Between Classical Analysis and (Numerical) Linear Algebra, §2.1"
      url: "https://web.stanford.edu/class/cme335/Golub.pdf"
---

## Statement

Let $m\ge1$, let $a<b$, let $x_1<\cdots<x_m$ lie in $(a,b)$, and let
$f\in C^{2m}([a,b],\mathbb R)$. Let $\ell_i$ be the Lagrange cardinal
polynomials for these nodes as in
[[def-cardinal-polynomial-interpolation]]. Define
$$ H(t):=\sum_{i=1}^{m}\left[f(x_i)\bigl(1-2\ell_i'(x_i)(t-x_i)\bigr)+f'(x_i)(t-x_i)\right]\ell_i(t)^2. $$
Then $H$ has degree at most $2m-1$, and $H(x_i)=f(x_i)$ and
$H'(x_i)=f'(x_i)$ for every $i$. If $x\in[a,b]$ is not a node, there is
$\xi_x\in(a,b)$ such that
$$ f(x)-H(x)=\frac{f^{(2m)}(\xi_x)}{(2m)!_{\mathbb R}}\prod_{i=1}^{m}(x-x_i)^2, $$
where $(2m)!_{\mathbb R}:=\prod_{j=1}^{2m}j$.
At a node the interpolation error and the displayed node product are both
zero.

## Facts & Assumptions

**Given:** Distinct interior nodes $x_1<\cdots<x_m$, $f\in C^{2m}([a,b])$, and a query $x\in[a,b]$.

[F1] [[def-cardinal-polynomial-interpolation]] and [[lem-cardinal-basis-degree-and-values]]: $\ell_i$ is a polynomial of degree at most $m-1$, $\ell_i(x_j)=1$ when $i=j$ and $0$ otherwise, and the node product $\omega(t)=\prod_i(t-x_i)$ is nonzero off the nodes.

[F2] [[def-higher-derivatives-and-smoothness]]: all derivatives of $f$ through order $2m$ exist on $[a,b]$ and are continuous there.

[F3] [[thm-algebra-of-derivatives]]: finite sums, scalar multiples and products obey the derivative rules on the interval.

[F4] [[thm-algebra-of-continuous-functions]]: polynomials and their finite sums and products are continuous.

[F5] [[lem-higher-order-rolle]]: a function with $n+1$ distinct ordered zeros, continuous on their closed span and $n$-times differentiable in its interior, has an $n$th-derivative zero between the extreme zeros.

[F6] [[lem-product-of-linear-factors-is-monic-polynomial]]: the product of $2m$ monic linear factors is monic of degree $2m$.

[F7] [[lem-polynomial-highest-derivative]]: a polynomial of degree at most $2m$ has constant $2m$th derivative equal to $(2m)!_{\mathbb R}$ times its coefficient of $X^{2m}$.

[F8] [[prop-polynomial-degree-laws-over-a-commutative-ring]] and [[thm-reals-field]]: sums and products of the displayed polynomial factors have the stated degree bounds and coefficient arithmetic.

[F9] [[def-factorial-and-falling-factorial]] and [[lem-nat-finite-sum-laws-and-the-canonical-embedding]]: $(2m)!_{\mathbb R}=\prod_{j=1}^{2m}j\ne0$.

## Proof

1.1 For each $i$, set $h_i(t)=\bigl(1-2\ell_i'(x_i)(t-x_i)\bigr)\ell_i(t)^2,\qquad k_i(t)=(t-x_i)\ell_i(t)^2.$ At $x_i$, $\ell_i(x_i)=1$, so $h_i(x_i)=1$, $h_i'(x_i)=0$, $k_i(x_i)=0$, and $k_i'(x_i)=1$ by the product rule [F3]. At $x_j$ with $j\ne i$, $\ell_i(x_j)=0$, so both $\ell_i^2$ and its derivative vanish there; hence $h_i(x_j)=h_i'(x_j)=k_i(x_j)=k_i'(x_j)=0$. Therefore the displayed sum defining $H$ satisfies every value and first-derivative condition. [F1, F3, algebra]

1.2 Each $\ell_i$ has degree at most $m-1$ by [F1]. Thus $\ell_i^2$ has degree at most $2m-2$, and multiplication by an affine polynomial gives degree at most $2m-1$ by [F8]. The finite sum $H$ also has degree at most $2m-1$. [F1, F8, construct]

2.1 Suppose $x$ is not a node. By [F1], $\omega(x)^2\ne0$, so put $c=(f(x)-H(x))/\omega(x)^2$ and define $g(t)=f(t)-H(t)-c\omega(t)^2$. At every node, step 1.1 and $\omega(x_i)=0$ give $g(x_i)=0$ and $g'(x_i)=0$, since $(\omega^2)'=2\omega\omega'$ by [F3]; by the choice of $c$, also $g(x)=0$. [F1, F3, step 1.1, construct, algebra]

3.1 Sort the $m$ nodes and $x$ as $z_0<\cdots<z_m$. Rolle's theorem on each consecutive interval gives a zero of $g'$ strictly between its endpoints; these $m$ zeros are distinct and are not nodes. Along with $g'(x_i)=0$ at the $m$ nodes from step 2.1, this gives $2m$ distinct ordered zeros of $g'$. [F2, F3, F4, step 2.1, choose]

4.1 The function $g'$ is continuous on the closed span of those zeros and is $(2m-1)$-times differentiable on its interior by [F2]–[F4]. Apply [F5] to those $2m$ zeros. There is $\xi_x\in(a,b)$ with $g^{(2m)}(\xi_x)=0$. [F2, F3, F4, F5, step 3.1]

5.1 By step 1.2, $H^{(2m)}=0$. By [F6], $\omega^2$ is monic of degree $2m$, so [F7] gives $(\omega^2)^{(2m)}=(2m)!_{\mathbb R}$. Differentiating the definition of $g$ in step 2.1 at $\xi_x$ therefore gives $0=f^{(2m)}(\xi_x)-c(2m)!_{\mathbb R}$. [F6, F7, step 1.2, step 2.1, step 4.1, algebra]

6.1 By [F9], $(2m)!_{\mathbb R}\ne0$, so step 5.1 gives $c=f^{(2m)}(\xi_x)/(2m)!_{\mathbb R}$. Substituting this into the definition of $c$ in step 2.1 proves the remainder formula. At a node, step 1.1 gives zero interpolation error and $\omega=0$. [F1, F9, step 1.1, step 2.1, step 5.1, algebra] ∎
