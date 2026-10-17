---
id: ex-analytic-and-nonsmooth-chebyshev-coefficient-decay
kind: example
title: "Analytic and nonsmooth data have geometric and algebraic Chebyshev coefficient decay"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: spectral-collocation-and-galerkin-methods-examples
dependency_level: 2
deps: [def-chebyshev-polynomials-first-and-second-kind, def-chebyshev-arcsine-weighted-l2-pairing, lem-chebyshev-polynomials-orthogonal-in-arcsine-weight, thm-chebyshev-multiple-angle-identities, thm-sine-and-cosine-addition-formulas, thm-sine-and-cosine-subtraction-formulas, thm-sine-and-cosine-derivatives, thm-ftc-second-part, thm-quarter-turn-values-and-shift-formulas, thm-sine-cosine-signs-monotonicity-and-ranges, cor-trigonometric-parity-and-pythagorean-identity, ex-complex-geometric-power-series, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, def-complex-differentiability-holomorphic-and-entire, thm-complex-numbers-form-a-field, def-derivative]
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

[F3] [[ex-complex-geometric-power-series]]: for a complex $z$ with $|z|<1$, $\sum_{n\ge0}z^n=1/(1-z)$.

[F4] [[def-complex-differentiability-holomorphic-and-entire]]: a complex function is holomorphic on an open set when it is complex differentiable at every point there; [[thm-complex-numbers-form-a-field]] supplies the complex field operations.

[F5] [[thm-sine-and-cosine-addition-formulas]]: $2\cos u\cos v=\cos(u+v)+\cos(u-v)$.

[F6] [[thm-sine-and-cosine-derivatives]] and [[thm-ftc-second-part]]: cosine has antiderivative $\sin(k\theta)/k$ for every nonzero integer $k$.

[F7] [[thm-quarter-turn-values-and-shift-formulas]] and [[thm-sine-cosine-signs-monotonicity-and-ranges]]: $\sin(k\pi)=0$, $\sin((2m+1)\pi/2)=(-1)^m$, $\cos(k\pi)=(-1)^k$, and cosine is nonnegative on $[0,\pi/2]$ and nonpositive on $[\pi/2,\pi]$.

[F8] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]: $e^{i\theta}=\cos\theta+i\sin\theta$ and $|e^{i\theta}|=1$ for real $\theta$.

[F9] [[thm-sine-and-cosine-subtraction-formulas]]: $\cos(u-v)=\cos u\cos v+\sin u\sin v$.

[F10] [[cor-trigonometric-parity-and-pythagorean-identity]]: $\sin^2\theta+\cos^2\theta=1$.

[F11] [[def-derivative]]: differentiability at a point is the existence of the two-sided difference-quotient limit.

## Proof

1.1 The set $\Omega=\{z\in\mathbb C:|z|<3/2\}$ is an open neighborhood of $[-1,1]$ and omits $2$. For $z,z_0\in\Omega$ with $z\ne z_0$, $\frac{f_a(z)-f_a(z_0)}{z-z_0}=\frac1{(2-z)(2-z_0)}\longrightarrow\frac1{(2-z_0)^2}\quad(z\to z_0).$ Thus [F4] makes $f_a$ holomorphic on a neighborhood of the interval. [given, F4, F11, algebra]

1.2 The function $f_s(x)=|x|$ is not differentiable at $0$: for $h>0$ its difference quotient is $1$, while for $h<0$ it is $-1$, so the two-sided limit in [F11] does not exist. By [F7], $|\cos\theta|=\cos\theta$ on $[0,\pi/2]$ and $|\cos\theta|=-\cos\theta$ on $[\pi/2,\pi]$. The subtraction identity [F9] gives $\cos(n(\pi-\theta))=(-1)^n\cos(n\theta)$, so reflection makes each odd coefficient integral its own negative. Therefore $a_0(f_s)=\frac1\pi\int_0^\pi|\cos\theta|\,d\theta=\frac2\pi.$ For odd $n$, that reflection makes $a_n(f_s)=0$. [given, F6, F7, F9, F11, algebra]

2.1 Put $q=2-\sqrt3$. Then $0<q<1$, $q^{-1}=2+\sqrt3$, $q+q^{-1}=4$, and $1-q^2=2\sqrt3q$. By [F8], $z=qe^{i\theta}=q(\cos\theta+i\sin\theta)$ has modulus $q<1$, so [F3] gives $\sum_{n\ge1}z^n=z/(1-z)$. Multiplying numerator and denominator by $1-q\cos\theta+iq\sin\theta$ and using [F10] yields $1+2\sum_{n\ge1}q^n\cos(n\theta)=1+2\operatorname{Re}\frac{z}{1-z}=\frac{1-q^2}{1-2q\cos\theta+q^2}=\frac{\sqrt3}{2-\cos\theta}.$ The real-part identity follows by direct expansion: $\operatorname{Re}(z/(1-z))=(q\cos\theta-q^2)/(1-2q\cos\theta+q^2)$; the denominator is nonzero because $|z|<1$. Also $1-2q\cos\theta+q^2=2q(2-\cos\theta)$. The tail is bounded uniformly by $2\sum_{n>m}q^n$, which tends to zero by [F3]. Dividing the displayed identity by $\sqrt3$ gives $f_a(\cos\theta)=\frac1{\sqrt3}(1+2\sum_{n\ge1}q^n\cos(n\theta))$. By [F1]–[F2], this is its Chebyshev expansion and yields the stated coefficients. [F1, F2, F3, F8, F10, step 1.1, algebra]

3.1 For $m\ge1$, symmetry about $\pi/2$ and [F5] give $\int_0^\pi|\cos\theta|\cos(2m\theta)\,d\theta=2\int_0^{\pi/2}\cos\theta\cos(2m\theta)\,d\theta=\frac{2(-1)^{m-1}}{4m^2-1},$ where the last equality follows by integrating $\frac12[\cos((2m+1)\theta)+\cos((2m-1)\theta)]$ using [F6]–[F7]. Multiplying by $2/\pi$ gives $a_{2m}(f_s)=4(-1)^{m-1}/(\pi(4m^2-1))$. This coefficient magnitude is asymptotic to $1/(\pi m^2)$. [given, F5, F6, F7, algebra] ∎

