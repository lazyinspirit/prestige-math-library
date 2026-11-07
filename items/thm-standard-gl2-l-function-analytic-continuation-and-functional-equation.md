---
id: thm-standard-gl2-l-function-analytic-continuation-and-functional-equation
kind: theorem
title: "Analytic Continuation and Functional Equation of the Standard GL2 L-Function"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - def-standard-l-function-of-a-gl2-eigenform
  - thm-hec-ke-euler-product-for-standard-gl2-l-function
  - lem-mellin-transform-of-full-level-holomorphic-cusp-form
  - def-congruence-modular-form-with-nebentypus
  - thm-q-expansion-principle-at-the-cusp
  - def-euler-gamma-function
  - lem-gamma-functional-equation-meromorphic-extension
  - cor-gamma-function-has-no-zeros
  - thm-holomorphic-parameter-riemann-integral
  - thm-weierstrass-convergence-holomorphic-functions
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Chapter 9, Theorem 9.3 and the Mellin transform, printed pp. 101–103."
    - title: "Avi Zeff, The Rankin–Selberg Method, Columbia graduate notes"
      url: "https://www.math.columbia.edu/~avizeff/quals/Rankin-Selberg.pdf"
      locator: "§1, Mellin transforms of modular forms and functional equations, PDF pp. 1–4."
forward_refs: []
---

## Statement

Let $k\ge2$ be even and let $f$ be a normalized full-level holomorphic cusp
Hecke eigenform. Define

$$
\Gamma_{\mathbb C}(w):=2(2\pi)^{-w}\Gamma(w),\qquad
\Lambda(s,f):=\Gamma_{\mathbb C}\!\left(s+\frac{k-1}{2}\right)L(s,f).
$$

Here $\Gamma$ is its meromorphic continuation and positive-real complex powers
use the real logarithm.

Then $L(s,f)$ and $\Lambda(s,f)$ extend to entire functions, and

$$
\Lambda(s,f)=(-1)^{k/2}\Lambda(1-s,f).
$$

On the initial half-plane $\operatorname{Re}s>3/2$, the series is also the
absolutely convergent product
$\prod_p(1-\lambda_f(p)p^{-s}+p^{-2s})^{-1}$.

## Statement references

[[def-standard-l-function-of-a-gl2-eigenform|the standard L-function normalization]]

[[lem-mellin-transform-of-full-level-holomorphic-cusp-form|the Mellin identity]]

[[thm-hec-ke-euler-product-for-standard-gl2-l-function|the Euler product]]

[[def-euler-gamma-function|Euler's Gamma function]]

[[lem-gamma-functional-equation-meromorphic-extension|the meromorphic Gamma continuation]]

## Facts & Assumptions

**Given:** An even weight $k\ge2$, a normalized full-level holomorphic cusp Hecke eigenform $f$, and the initial series $L(s,f)$.

[F1] [[def-standard-l-function-of-a-gl2-eigenform]]: $L(s,f)=\sum_{n\ge1}\lambda_f(n)n^{-s}$ on $\operatorname{Re}s>3/2$.

[F2] [[thm-hec-ke-euler-product-for-standard-gl2-l-function]]: on this half-plane the same function has the absolutely convergent local Euler product with factors $(1-\lambda_f(p)p^{-s}+p^{-2s})^{-1}$.

[F3] [[lem-mellin-transform-of-full-level-holomorphic-cusp-form]]: if $t=s+(k-1)/2$ and $\operatorname{Re}s>3/2$, then $\int_0^\infty f(iy)y^t\,dy/y=(2\pi)^{-t}\Gamma(t)L(s,f)$.

[F4] [[def-congruence-modular-form-with-nebentypus]] and [[thm-q-expansion-principle-at-the-cusp]]: $f(\gamma z)=(cz+d)^kf(z)$ for $\gamma\in SL_2(\mathbb Z)$, and at infinity $f(z)=qG(q)$ with $G$ holomorphic near $q=0$.

[F5] [[def-euler-gamma-function]] and [[lem-gamma-functional-equation-meromorphic-extension]]: $\Gamma$ is Euler's integral on the right half-plane with its meromorphic continuation.

[F6] [[cor-gamma-function-has-no-zeros]]: $1/\Gamma(w)$ extends to an entire function.

[F7] [[thm-holomorphic-parameter-riemann-integral]]: a jointly continuous integrand on a compact real interval, holomorphic in the complex parameter, has a holomorphic parameter integral.

[F8] [[thm-weierstrass-convergence-holomorphic-functions]]: a locally uniform limit of holomorphic functions is holomorphic.

## Proof

**Given:** The form $f$, its full-level transformation law and cusp expansion, and the normalized series.

1.1 Put $c=(k-1)/2$ and
$M_f(s):=\int_0^\infty f(iy)y^{s+c}\,dy/y$, using
$y^{s+c}:=\exp((s+c)\log y)$ with the real logarithm. For $y\ge1$, [F4] gives
$|f(iy)|\le C e^{-2\pi y}$. For $0<y\le1$, the transformation by
$z\mapsto-1/z$ in [F4] gives
$f(iy)=i^{-k}y^{-k}f(i/y)$, hence
$|f(iy)|\le C y^{-k}e^{-2\pi/y}$. If $s$ ranges over a compact set, choose
$B$ with $|\operatorname{Re}(s+c)|\le B$. The absolute integrand is then
bounded on $y\ge1$ by $C e^{-2\pi y}y^{B-1}$ and on $0<y\le1$ by
$C e^{-2\pi/y}y^{-B-k-1}$; both are integrable. These bounds also make the
tails uniform on compact $s$-sets. [F4, given, algebra]

2.1 For $R>1$, the truncated integral
$M_{f,R}(s)=\int_{1/R}^{R}f(iy)y^{s+c}\,dy/y$ is holomorphic by [F7].
The endpoint bounds in step 1.1 make $M_{f,R}\to M_f$ uniformly on each
compact subset of $\mathbb C$ as $R\to\infty$. Therefore [F8] makes $M_f$
entire. [F7, F8, step 1.1, construct]

3.1 On $\operatorname{Re}s>3/2$, [F3] gives
$M_f(s)=(2\pi)^{-s-c}\Gamma(s+c)L(s,f)$, so
$\Lambda(s,f)=2M_f(s)$ there. By [F2] this is the continuation of the
completed L-function whose initial Dirichlet series also has the stated
absolutely convergent Euler product. [F2, F3, step 2.1, algebra]

4.1 In $M_f(s)$ substitute $y=1/u$ and then use [F4]: $M_f(s)=\int_0^\infty f(i/u)u^{-s-c}\,du/u=i^k\int_0^\infty f(iu)u^{k-s-c}\,du/u=i^kM_f(1-s)$. Since $i^k=(-1)^{k/2}$ and $\Lambda=2M_f$ by step 3.1, this is the claimed completed functional equation. [F4, step 3.1, algebra]

5.1 The entire reciprocal in [F6] gives the entire function
$L(s,f)=2M_f(s)(2\pi)^{s+c}/(2\Gamma(s+c))$ on $\mathbb C$. On
$\operatorname{Re}s>3/2$ this agrees with [F1] by step 3.1, so it is the
analytic continuation of the original standard L-series. [F1, F6, step 3.1, algebra] ∎
