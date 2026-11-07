---
id: lem-continuous-torus-orthogonality-for-integer-frequencies
kind: lemma
title: "Continuous Torus Orthogonality for Integer Frequencies"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-exponential-character-e
  - def-complex-exponential
  - thm-complex-numbers-form-a-field
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-kernel-and-fibres-of-complex-exponential
  - thm-sine-and-cosine-derivatives
  - thm-chain-rule-for-total-derivatives
  - thm-riemann-stieltjes-fundamental-theorems-for-c1-integrators
  - cor-repeated-riemann-integrals-on-rectangles
  - cor-riemann-integral-of-a-product-function
  - thm-multidimensional-integral-properties
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean Bourgain, Ciprian Demeter, and Larry Guth, Proof of the main conjecture in Vinogradov’s mean value theorem for degrees higher than three"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf"
      locator: "§1, p. 633: analytic representation of the Vinogradov mean value by integration over the unit cube"
    - title: "N. Assing, The Circle Method and Waring’s Problem (2022 lecture notes)"
      url: "https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf"
      locator: "§8.2, printed pp. 77–78: continuous character orthogonality and the Vinogradov-system count"
---

## Statement

For an integer $r\ge1$, let $\mathbb T^r=\mathbb R^r/\mathbb Z^r$ and represent its normalized integral by the coordinatewise Riemann integral over $[0,1]^r$. For every $m=(m_1,\ldots,m_r)\in\mathbb Z^r$,
$$\int_{[0,1]^r}\exp\!\left(2\pi i\sum_{j=1}^r m_jx_j\right)\,dx_1\cdots dx_r=\begin{cases}1,&m_1=\cdots=m_r=0,\\0,&\text{otherwise.}\end{cases}$$
For a complex-valued integrand, the Riemann integral means the integral of its real part plus $i$ times the integral of its imaginary part.

## Statement references

[Bourgain–Demeter–Guth, §1](https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf)

[Assing, §8.2](https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf)

## Facts & Assumptions

**Given:** An integer $r\ge1$ and a frequency vector $m\in\mathbb Z^r$.

[F1] $e(t)=\exp(2\pi i t)$ for real $t$ ([[def-exponential-character-e]]).

[F2] $\exp(z+w)=\exp z\exp w$ and $\exp(x+iy)=e^x(\cos y+i\sin y)$ ([[thm-complex-exponential-addition-and-real-extension]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F3] $\exp z=1$ exactly when $z\in2\pi i\mathbb Z$ ([[thm-kernel-and-fibres-of-complex-exponential]]).

[F4] $(\sin t)'=\cos t$, $(\cos t)'=-\sin t$, $\sin0=0$, and $\cos0=1$ ([[thm-sine-and-cosine-derivatives]]).

[F5] For differentiable real maps, the derivative of a composition is the composition of the derivatives ([[thm-chain-rule-for-total-derivatives]]).

[F6] If $G$ is continuously differentiable on an interval containing $[a,b]$, then $\int_a^bG'(t)\,dt=G(b)-G(a)$, using the ordinary Riemann integral (the integrator $\alpha(t)=t$ has derivative $1$) ([[thm-riemann-stieltjes-fundamental-theorems-for-c1-integrators]]).

[F7] Repeated Riemann integration on a rectangle agrees in every coordinate order with the multiple integral; a product of continuous real functions on product rectangles integrates as the product of the integrals, and the integral is linear ([[cor-repeated-riemann-integrals-on-rectangles]], [[cor-riemann-integral-of-a-product-function]], [[thm-multidimensional-integral-properties]]).

[F8] The complex exponential is defined by its power series, with $\exp 0=1$ ([[def-complex-exponential]]).

[F9] Complex numbers have unique real and imaginary coordinates, so equality of complex numbers implies equality of both coordinates ([[thm-complex-numbers-form-a-field]]).

## Proof

**Given:** The integer $r$, the vector $m$, and the suppliers [F1]–[F7].

1.1 For an integer $q$, if $q=0$ then [F1] and [F8] give $e(qt)=1$, so $\int_0^1e(qt)\,dt=1$. If $q\ne0$, define $G_1(t)=\sin(2\pi qt)/(2\pi q)$ and $G_2(t)=-\cos(2\pi qt)/(2\pi q)$. By [F4]–[F5], $G_1'(t)=\cos(2\pi qt)$ and $G_2'(t)=\sin(2\pi qt)$. Also [F2]–[F3] give $e(q)=1$, and [F9] then gives $\sin(2\pi q)=0$ and $\cos(2\pi q)=1$. Applying [F6] to $G_1$ and $G_2$ therefore shows that both the cosine and sine integrals on $[0,1]$ are zero, hence $\int_0^1e(qt)\,dt=0$. [given, F1, F2, F3, F4, F5, F6, F8, F9, algebra]

2.1 Repeated use of [F2] gives $\exp(2\pi i\sum_jm_jx_j)=\prod_j e(m_jx_j)$. Expanding each factor into its real and imaginary parts, applying the real product-integral rule in [F7] to each of the finitely many terms, and recombining by linearity shows that the integral over $[0,1]^r$ is $\prod_{j=1}^r\int_0^1e(m_jx_j)\,dx_j$. Step 1.1 makes this product $1$ exactly when every $m_j=0$ and $0$ otherwise. [given, F2, F7, step 1.1, algebra] ∎
