---
id: thm-sine-has-its-weierstrass-product
kind: theorem
title: "The Weierstrass product for sine"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-hadamard-factorization-for-finite-order-entire-functions, def-order-of-an-entire-function, thm-complex-sine-and-cosine-zero-sets, def-complex-trigonometric-and-hyperbolic-functions, thm-complex-trigonometric-and-hyperbolic-power-series]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 5 The Weierstrass product theorem"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "Matthias Weber, Complex Analysis, Ch. 3 §3.4"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
---

## Statement

For every complex number $z$,

$$\sin(\pi z)=\pi z\prod_{n\ge1}\left(1-\frac{z^2}{n^2}\right),$$

with locally uniform convergence on $\mathbb C$.

## Facts & Assumptions

**Given:** The entire function $f(z)=\sin(\pi z)$.

[F1] The zeros of complex sine are exactly the integer multiples of $\pi$, so the zeros of $f(z)=\sin(\pi z)$ are exactly the integers, with $0$ simple and the nonzero zeros occurring in the pairs $\pm n$ ([[thm-complex-sine-and-cosine-zero-sets]]).

[F2] Hadamard factorization applies to finite-order entire functions ([[thm-hadamard-factorization-for-finite-order-entire-functions]]).

[F3] The order of an entire function is computed from the growth of its maximum modulus ([[def-order-of-an-entire-function]]).

[F4] Complex sine is defined from the exponential, and its entire power series is $$\sin z=\sum_{k\ge0}\frac{(-1)^kz^{2k+1}}{(2k+1)!}$$ ([[def-complex-trigonometric-and-hyperbolic-functions]], [[thm-complex-trigonometric-and-hyperbolic-power-series]]).

## Proof

**Proof technique:** direct.

1.1 For $z=x+iy$, [F4] gives $\sin(\pi z)=(e^{i\pi z}-e^{-i\pi z})/(2i)$, so $|\sin(\pi z)|\le\frac12(e^{-\pi y}+e^{\pi y})\le e^{\pi|z|}$. Along the imaginary axis one has $|\sin(\pi ir)|=(e^{\pi r}-e^{-\pi r})/2$ for $r>0$. Therefore [F3] makes $f(z)=\sin(\pi z)$ an entire function of order $1$. [F3, F4, given, algebra]

2.1 By [F1], the zero at $0$ has order $1$ and the nonzero zeros are exactly $\pm1,\pm2,\dots$. Applying [F2] with $\rho=1$ yields a polynomial $Q$ of degree at most $1$ such that $\sin(\pi z)=ze^{Q(z)}\prod_{n\ge1}E_1(z/n)E_1(-z/n)$. Since $E_1(w)E_1(-w)=(1-w)e^w(1+w)e^{-w}=1-w^2$, this becomes $\sin(\pi z)=ze^{Q(z)}\prod_{n\ge1}(1-z^2/n^2)$. [F1, F2, step 1.1, algebra]

3.1 By [F4], the function $\sin(\pi z)$ is odd, while $\prod_{n\ge1}(1-z^2/n^2)$ is even. Therefore the quotient $$e^{Q(z)}=\frac{\sin(\pi z)}{z\prod_{n\ge1}(1-z^2/n^2)}$$ is even. Writing $Q(z)=az+b$, this means $e^{az+b}=e^{-az+b}$ for every $z$, so $e^{2az}=1$ on $\mathbb C$. Therefore $a=0$, and $Q$ is constant. [F4, step 2.1, algebra]

4.1 Dividing the power series in [F4] by $\pi z$ gives $\sin(\pi z)/(\pi z)=1-\pi^2z^2/6+O(z^4)$. Step 2.1 with step 3.1 gives $\sin(\pi z)/z=e^b\prod_{n\ge1}(1-z^2/n^2)$, and substituting $z=0$ shows $e^b=\pi$. Therefore $\sin(\pi z)=\pi z\prod_{n\ge1}(1-z^2/n^2)$. The convergence is locally uniform because step 2.1 is a normally convergent canonical-product factorization. [F4, step 2.1, step 3.1, algebra] ∎
