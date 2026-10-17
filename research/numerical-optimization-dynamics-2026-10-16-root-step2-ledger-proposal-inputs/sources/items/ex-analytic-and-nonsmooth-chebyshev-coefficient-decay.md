---
id: ex-analytic-and-nonsmooth-chebyshev-coefficient-decay
kind: example
title: "Analytic and nonsmooth data have geometric and algebraic Chebyshev coefficient decay"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: spectral-collocation-and-galerkin-methods-examples
dependency_level: 2
deps: [def-chebyshev-polynomials-first-and-second-kind, def-chebyshev-arcsine-weighted-l2-pairing, lem-chebyshev-polynomials-orthogonal-in-arcsine-weight, thm-chebyshev-multiple-angle-identities, thm-sine-and-cosine-addition-formulas, thm-sine-and-cosine-subtraction-formulas, thm-sine-and-cosine-derivatives, thm-ftc-second-part, thm-quarter-turn-values-and-shift-formulas, thm-sine-cosine-signs-monotonicity-and-ranges, cor-trigonometric-parity-and-pythagorean-identity, lem-geometric-sequence-null, lem-complex-conjugation-and-modulus-laws, lem-uniform-integral-error-bound, thm-continuous-implies-integrable, thm-linearity-of-the-integral, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, def-complex-differentiability-holomorphic-and-entire, thm-complex-numbers-form-a-field, def-derivative]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Jie Shen and Tao Tang, Spectral and High-Order Methods with Applications, §1.8"
      url: "https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf"
      locator: "Printed pp. 61–67 / PDF pp. 67–73; Chebyshev coefficient and analytic approximation context."
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods for Ordinary and Partial Differential Equations, Ch. 8"
      url: "https://www.math.hmc.edu/~dyong/math165/trefethenbook.pdf"
      locator: "Chapter 8, printed pp. 259–264 (complete book PDF); Chebyshev series, coefficient decay and interpolation."
generation:
  role: example
---

## Example

For a continuous $f$ on $[-1,1]$, define its Chebyshev coefficients by
$$
a_0(f)=\frac1\pi\int_0^\pi f(\cos\theta)\,d\theta,\qquad
a_n(f)=\frac2\pi\int_0^\pi f(\cos\theta)\cos(n\theta)\,d\theta\quad(n\ge1).
$$
For the analytic function $f_a(x)=1/(2-x)$, these coefficients are $a_0=1/\sqrt3$ and $a_n=2(2-\sqrt3)^n/\sqrt3$ for $n\ge1$, a geometric decay. For the nonsmooth function $f_s(x)=|x|$, they are $a_0=2/\pi$, $a_{2m}=4(-1)^{m-1}/(\pi(4m^2-1))$ for $m\ge1$, and $a_{2m+1}=0$; the nonzero coefficients decay algebraically like $m^{-2}$.

## Facts & Assumptions

**Given:** The coefficient convention above and the two functions $f_a$ and $f_s$.

[F1] [[def-chebyshev-polynomials-first-and-second-kind]] and [[thm-chebyshev-multiple-angle-identities]]: $T_n(\cos\theta)=\cos(n\theta)$.

[F2] [[def-chebyshev-arcsine-weighted-l2-pairing]] and [[lem-chebyshev-polynomials-orthogonal-in-arcsine-weight]]: $\langle T_0,T_0\rangle_C=\pi$, $\langle T_n,T_n\rangle_C=\pi/2$ for $n\ge1$, and distinct modes are orthogonal.

[F3] [[lem-geometric-sequence-null]]: $q^{m+1}\to0$ for a real $q$ with $0<q<1$; [[lem-complex-conjugation-and-modulus-laws]] gives complex modulus multiplicativity and the triangle inequality.

[F4] [[def-complex-differentiability-holomorphic-and-entire]]: a complex function is holomorphic on an open set when it is complex differentiable at every point there; [[thm-complex-numbers-form-a-field]] supplies the complex field operations.

[F5] [[thm-sine-and-cosine-addition-formulas]]: $2\cos u\cos v=\cos(u+v)+\cos(u-v)$.

[F6] [[thm-sine-and-cosine-derivatives]] and [[thm-ftc-second-part]]: cosine has antiderivative $\sin(k\theta)/k$ for every nonzero integer $k$.

[F7] [[thm-quarter-turn-values-and-shift-formulas]] and [[thm-sine-cosine-signs-monotonicity-and-ranges]]: $\sin(k\pi)=0$, $\sin((2m+1)\pi/2)=(-1)^m$, $\cos(k\pi)=(-1)^k$, and cosine is nonnegative on $[0,\pi/2]$ and nonpositive on $[\pi/2,\pi]$.

[F8] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]: $e^{i\theta}=\cos\theta+i\sin\theta$ and $|e^{i\theta}|=1$ for real $\theta$.

[F9] [[thm-sine-and-cosine-subtraction-formulas]]: $\cos(u-v)=\cos u\cos v+\sin u\sin v$.

[F10] [[cor-trigonometric-parity-and-pythagorean-identity]]: $\sin^2\theta+\cos^2\theta=1$.

[F11] [[def-derivative]]: differentiability at a point is the existence of the two-sided difference-quotient limit.

[F12] [[thm-continuous-implies-integrable]] and [[thm-linearity-of-the-integral]]: continuous functions on a compact interval are Riemann integrable, and finite linear combinations may be integrated termwise.

[F13] [[lem-uniform-integral-error-bound]]: integrable functions uniformly within $\eta$ on $[0,\pi]$ have integrals differing by at most $\pi\eta$.

## Proof

1.1 The set $\Omega=\{z\in\mathbb C:|z|<3/2\}$ is an open neighborhood of $[-1,1]$ and omits $2$. For $z,z_0\in\Omega$ with $z\ne z_0$, $\frac{f_a(z)-f_a(z_0)}{z-z_0}=\frac1{(2-z)(2-z_0)}\longrightarrow\frac1{(2-z_0)^2}\quad(z\to z_0).$ Thus [F4] makes $f_a$ holomorphic on a neighborhood of the interval. [given, F4, F11, algebra]

1.2 The function $f_s(x)=|x|$ is not differentiable at $0$: for $h>0$ its difference quotient is $1$, while for $h<0$ it is $-1$, so the two-sided limit in [F11] does not exist. By [F7], $|\cos\theta|=\cos\theta$ on $[0,\pi/2]$ and $|\cos\theta|=-\cos\theta$ on $[\pi/2,\pi]$. The subtraction identity [F9] gives $\cos(n(\pi-\theta))=(-1)^n\cos(n\theta)$, so reflection makes each odd coefficient integral its own negative. Therefore $a_0(f_s)=\frac1\pi\int_0^\pi|\cos\theta|\,d\theta=\frac2\pi.$ For odd $n$, that reflection makes $a_n(f_s)=0$. [given, F6, F7, F9, F11, algebra]

1.3 Put $q=2-\sqrt3$. Then $0<q<1$, $q^{-1}=2+\sqrt3$, $q+q^{-1}=4$, and $1-q^2=2\sqrt3q$. By [F8], $z=qe^{i\theta}$ has modulus $q$. For $m\ge1$, put $S_m(z)=\sum_{n=1}^m z^n$. Multiplying the finite sum by $1-z$ cancels consecutive terms and gives $(1-z)S_m=z-z^{m+1}$. The triangle inequality in [F3] gives $|1-z|\ge1-q>0$, so $$\left|S_m(z)-\frac z{1-z}\right|=\frac{|z|^{m+1}}{|1-z|}\le\frac{q^{m+1}}{1-q}.$$ Induction using the addition formulas in [F5] and Euler's identity in [F8] gives $z^n=q^n(\cos(n\theta)+i\sin(n\theta))$. Thus $C_m(\theta):=1+2\sum_{n=1}^m q^n\cos(n\theta)$ differs from $1+2\operatorname{Re}(z/(1-z))$ by at most $2q^{m+1}/(1-q)$, uniformly for $\theta\in[0,\pi]$. [F3, F4, F5, F8, algebra, induction]

2.1 Multiplying numerator and denominator by $1-q\cos\theta+iq\sin\theta$ and using [F10] gives $$\operatorname{Re}\frac z{1-z}=\frac{q\cos\theta-q^2}{1-2q\cos\theta+q^2}.$$ Hence $$1+2\operatorname{Re}\frac z{1-z}=\frac{1-q^2}{1-2q\cos\theta+q^2}=\frac{\sqrt3}{2-\cos\theta},$$ because the denominator equals $2q(2-\cos\theta)$. By step 1.3, the continuous functions $C_m/\sqrt3$ satisfy $$\sup_{0\le\theta\le\pi}\left|\frac{C_m(\theta)}{\sqrt3}-f_a(\cos\theta)\right|\le\eta_m:=\frac{2q^{m+1}}{\sqrt3(1-q)}\longrightarrow0$$ by [F3]. This also establishes the claimed convergent Chebyshev expansion through [F1]. [F1, F3, F4, F8, F10, step 1.3, algebra]

3.1 Fix a coefficient index $n\ge0$. By [F12], $f_a(\cos\theta)$, $C_m/\sqrt3$, and their products with $\cos(n\theta)$ are integrable. Since $|\cos(n\theta)|\le1$ by [F7], [F13] bounds the corresponding coefficient differences by $\eta_m$ for index zero and by $2\eta_m$ for positive indices. For every $m\ge n$, finite integration and orthogonality [F2] give the coefficients of $C_m/\sqrt3$ as $1/\sqrt3$ at zero and $2q^n/\sqrt3$ at each $1\le n\le m$. Letting $m\to\infty$ therefore yields exactly the asserted coefficients of $f_a$; no interchange of an unbounded infinite sum and integral is assumed. [F1, F2, F7, F12, F13, step 2.1, algebra]

4.1 For $m\ge1$, symmetry about $\pi/2$ and [F5] give $\int_0^\pi|\cos\theta|\cos(2m\theta)\,d\theta=2\int_0^{\pi/2}\cos\theta\cos(2m\theta)\,d\theta=\frac{2(-1)^{m-1}}{4m^2-1},$ where the last equality follows by integrating $\frac12[\cos((2m+1)\theta)+\cos((2m-1)\theta)]$ using [F6]–[F7]. Multiplying by $2/\pi$ gives $a_{2m}(f_s)=4(-1)^{m-1}/(\pi(4m^2-1))$. This coefficient magnitude is asymptotic to $1/(\pi m^2)$. [given, F5, F6, F7, algebra] ∎
