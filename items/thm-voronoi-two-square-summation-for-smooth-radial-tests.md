---
id: thm-voronoi-two-square-summation-for-smooth-radial-tests
kind: theorem
title: "Poisson-derived two-square summation for smooth radial tests"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps: [def-gauss-circle-error-term, def-two-square-representation-function, thm-poisson-summation-for-a-full-rank-lattice, def-countable-choice, def-integer-order-bessel-series, lem-bessel-integral-representations-and-scaled-range, lem-voronoi-circle-angular-measure, thm-polar-coordinates-formula-for-lebesgue-measure, def-fourier-transform-on-l-one-of-rn, def-schwartz-space-and-its-seminorms, thm-linearity-of-the-lebesgue-integral-on-l-one, thm-ftc-second-part, thm-algebra-of-derivatives]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Stephen D. Miller and Wilfried Schmid, Summation Formulas, from Poisson and Voronoi to the Present"
      url: "https://arxiv.org/pdf/math/0304187v1"
      locator: "§1, formula (1.7), and §6, the derivation from two-dimensional Poisson summation"
verification:
  precheck: pending
---

## Statement

Assume Countable Choice. For $y=(y_1,y_2)\in\mathbb R^2$ write $|y|^2:=y_1^2+y_2^2$. For $n\ge1$ let $r_2(n):=\#\{(a,b)\in\mathbb Z^2:a^2+b^2=n\}$, and set $r_2(0):=1$ for this formula. For $x\ge0$ put $P(x):=\#\{(a,b)\in\mathbb Z^2:a^2+b^2\le x\}-\pi x=1+\sum_{1\le n\le x}r_2(n)-\pi x$. Let $f:[0,\infty)\to\mathbb C$ be the restriction of a smooth compactly supported function on $\mathbb R$. Then both series below converge absolutely and
$$\sum_{n=0}^{\infty}r_2(n)f(n)=\pi\int_0^{\infty}f(x)\,dx+\pi\sum_{n=1}^{\infty}r_2(n)\int_0^{\infty}f(x)J_0(2\pi\sqrt{nx})\,dx.$$
For the squared-radius circle error $P$ and the same test functions, the equivalent error-transform identity is
$$-\int_0^{\infty}P(x)f'(x)\,dx=\pi\sum_{n=1}^{\infty}r_2(n)\int_0^{\infty}f(x)J_0(2\pi\sqrt{nx})\,dx.$$

## Statement references

[Miller and Schmid, §1, formula (1.7)](https://arxiv.org/pdf/math/0304187v1)

## Facts & Assumptions

**Given:** Countable Choice and a function $f:[0,\infty)\to\mathbb C$ that is the restriction of a smooth compactly supported function on $\mathbb R$.

[A1] [[def-countable-choice]]: Countable Choice is assumed; it is the choice principle in the Poisson summation supplier.

[F1] [[def-two-square-representation-function]]: for every positive integer $n$, $r_2(n)=\#\{(a,b)\in\mathbb Z^2:a^2+b^2=n\}$, with order and signs counted separately.

[F2] [[def-gauss-circle-error-term]]: $P(x)=1+\sum_{1\le n\le x}r_2(n)-\pi x$ for $x\ge0$.

[F3] [[thm-poisson-summation-for-a-full-rank-lattice]]: assuming Countable Choice, for a Schwartz function $G$ and a full-rank lattice $\Lambda$, $\sum_{\lambda\in\Lambda}G(\lambda)=\operatorname{covol}(\Lambda)^{-1}\sum_{\lambda^*\in\Lambda^*}\widehat G(\lambda^*)$ with absolute convergence.

[F4] [[def-integer-order-bessel-series]]: $J_0(t)=\sum_{k=0}^{\infty}(-1)^k(t/2)^{2k}/(k!)^2$.

[F5] [[lem-bessel-integral-representations-and-scaled-range]]: $J_0(t)=\pi^{-1}\int_0^\pi\cos(t\sin\theta)\,d\theta$ for real $t$.

[F6] [[lem-voronoi-circle-angular-measure]]: the polar surface measure on $S^1$ is the pushforward of Lebesgue measure on $[0,2\pi)$ under $\theta\mapsto(\cos\theta,\sin\theta)$.

[F7] [[thm-polar-coordinates-formula-for-lebesgue-measure]]: in $\mathbb R^2$, the integral of a nonnegative Borel function is its iterated radial and unit-circle polar integral with factor $r\,dr$.

[F8] [[def-fourier-transform-on-l-one-of-rn]]: $\widehat G(\xi)=\int_{\mathbb R^2}G(y)e^{-2\pi i y\cdot\xi}\,dy$.

[F9] [[def-schwartz-space-and-its-seminorms]]: every smooth compactly supported function on $\mathbb R^2$ is Schwartz.

[F10] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: the complex Lebesgue integral is linear on integrable functions.

[F11] [[thm-ftc-second-part]]: if a differentiable function has an integrable derivative on a compact interval, the integral of that derivative is the endpoint difference.

[F12] [[thm-algebra-of-derivatives]]: the derivative of $x\mapsto x f(x)$ is $f(x)+x f'(x)$.

## Proof

1.1 Put $G(y):=f(|y|^2)$ on $\mathbb R^2$. The chosen smooth extension of $f$ shows that $G$ is smooth, and its support is compact; hence $G$ is Schwartz by [F9]. For $\xi\ne0$, rotate the angular variable so that $\xi$ points along the first coordinate, and apply the polar measure formula [F7] to the nonnegative and negative parts of the real and imaginary Fourier integrands; [F10] then combines the four integrals. This gives
$$\widehat G(\xi)=\int_0^{\infty}f(r^2)r\,dr\int_0^{2\pi}e^{-2\pi i r|\xi|\cos\theta}\,d\theta.$$
The imaginary angular part cancels under $\theta\mapsto2\pi-\theta$. In the real part, $$\int_0^{2\pi}\cos(t\cos\theta)\,d\theta=2\int_0^\pi\cos(t\cos\theta)\,d\theta=2\int_0^\pi\cos(t\sin\theta)\,d\theta=2\pi J_0(t),$$ where the middle equality follows by shifting $[0,\pi]$ to $[-\pi/2,\pi/2]$ and using evenness, then reflecting $[\pi/2,\pi]$ onto $[0,\pi/2]$; the last equality is [F5]. Substituting $x=r^2$ yields
$$\widehat G(\xi)=\pi\int_0^{\infty}f(x)J_0(2\pi\sqrt{x}|\xi|)\,dx.$$
At $\xi=0$, direct polar integration and $J_0(0)=1$ from [F4] give $\widehat G(0)=\pi\int_0^{\infty}f(x)\,dx$. [A1, F4, F5, F6, F7, F8, F9, F10, given, algebra]

2.1 Apply [F3] to $G$ on $\Lambda=\mathbb Z^2$, whose dual is $\mathbb Z^2$ and whose covolume is $1$. Grouping lattice points by squared length gives $\sum_{y\in\mathbb Z^2}G(y)=\sum_{n\ge0}r_2(n)f(n)$, with the origin contributing $r_2(0)f(0)=f(0)$; grouping the dual sum in the same way and inserting step 1.1 gives the first identity. Absolute convergence follows from [F3]. [A1, F1, F3, step 1.1, given]

3.1 Choose $R>0$ beyond the support of $f$. From [F2] and finite interchange,
$$\int_0^R P(x)f'(x)\,dx=\int_0^R f'(x)\,dx+\sum_{1\le n\le R}r_2(n)\int_n^R f'(x)\,dx-\pi\int_0^R xf'(x)\,dx.$$
Apply [F11] separately to the real and imaginary parts: the first integral is $-f(0)$ and each inner integral is $-f(n)$. By [F12], $(xf(x))'=f(x)+xf'(x)$; integrating this identity with [F11] gives $\int_0^R xf'(x)\,dx=-\int_0^R f(x)\,dx$, since $f(R)=0$. Hence $$-\int_0^{\infty}P(x)f'(x)\,dx=\sum_{n\ge0}r_2(n)f(n)-\pi\int_0^{\infty}f(x)\,dx.$$ Substituting the first identity proves the second. [F2, F10, F11, F12, step 2.1, given, algebra] ∎
