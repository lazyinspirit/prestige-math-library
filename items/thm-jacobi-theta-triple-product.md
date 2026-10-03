---
id: thm-jacobi-theta-triple-product
kind: theorem
title: "Jacobi theta triple product and nonvanishing of the theta constant"
status: draft
origin: pipeline
deps:
  - thm-normal-convergence-of-holomorphic-products
  - def-normal-convergence-of-holomorphic-products
  - thm-weierstrass-m-test-for-complex-function-series
  - thm-weierstrass-convergence-holomorphic-functions
  - thm-liouville-bounded-entire-function
  - thm-zero-order-factorization-holomorphic-function
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-complex-exponential-addition-and-real-extension
  - thm-kernel-and-fibres-of-complex-exponential
  - thm-ratio-test
  - lem-absolute-convergence-implies-convergence
  - thm-absolute-convergence-of-complex-series
  - def-complex-series-power-series-and-absolute-convergence
  - def-unit-disc-upper-half-plane-and-blaschke-factor
  - thm-algebra-of-complex-derivatives
  - thm-chain-rule-for-complex-derivatives
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - lem-integer-part
  - thm-heine-borel-rn
  - thm-extreme-value-metric
  - thm-taylor-expansion-holomorphic-function
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "E. M. Stein and R. Shakarchi, Complex Analysis (Princeton, 2003)"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
      locator: "Ch. 10 §1, Propositions 1.1–1.2, Theorem 1.3 and Corollary 1.4, printed pp. 284–289; entire quotient and c(τ)=c(4τ) proof."
proof_strategy: direct
---

## Statement

For $\tau\in\mathfrak H$, $z\in\mathbb C$ and $Q=e^{\pi i\tau}$,
$$\Theta(z\mid\tau):=\sum_{m\in\mathbb Z}Q^{m^2}e^{2\pi imz}=\prod_{n\ge1}(1-Q^{2n})(1+Q^{2n-1}e^{2\pi iz})(1+Q^{2n-1}e^{-2\pi iz}).$$
The series and product converge locally uniformly in each variable, uniformly on compact products. For fixed $\tau$, $\Theta$ is entire in $z$ with exactly the simple zeros $z=(1+\tau)/2+a+b\tau$, $a,b\in\mathbb Z$. In particular
$$\theta(\tau):=\Theta(0\mid\tau)=\prod_{n\ge1}(1-Q^{2n})(1+Q^{2n-1})^2\ne0.$$
Here $Q^2=q$; these cusp parameters must not be confused.

## Facts & Assumptions

**Given:** $\tau\in\mathfrak H$, $z\in\mathbb C$ and $Q=e^{\pi i\tau}$, so $|Q|=e^{-\pi\operatorname{Im}\tau}<1$ ([[def-unit-disc-upper-half-plane-and-blaschke-factor]]).

[F1] Weierstrass $M$-test ([[thm-weierstrass-m-test-for-complex-function-series]]).

[F2] A locally uniform limit of holomorphic functions is holomorphic ([[thm-weierstrass-convergence-holomorphic-functions]]).

[F3] Normally convergent products of holomorphic functions have holomorphic limits; on a compact set the zeros are exactly those of the finitely many factors that vanish there, and the tail is zero-free ([[thm-normal-convergence-of-holomorphic-products]], [[def-normal-convergence-of-holomorphic-products]]).

[F4] A bounded entire function is constant ([[thm-liouville-bounded-entire-function]]).

[F5] If $f$ is holomorphic near $a$ and vanishes there to order one, then $f=(z-a)g$ with $g$ holomorphic and $g(a)\ne0$ ([[thm-zero-order-factorization-holomorphic-function]]).

[F6] $\ker\exp=2\pi i\mathbb Z$, $\exp(w+w')=\exp w\exp w'$, $\exp(2w)=\exp(w)^2$, $\exp w\ne0$, and $|\exp(x+iy)|=e^x$ for real $x,y$ ([[thm-kernel-and-fibres-of-complex-exponential]], [[thm-complex-exponential-addition-and-real-extension]]).

[F7] $\exp'=\exp$, and the chain rule and algebra of derivatives give $\frac{d}{dz}e^{2\pi imz}=2\pi im\,e^{2\pi imz}$ ([[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-chain-rule-for-complex-derivatives]], [[thm-algebra-of-complex-derivatives]]).

[F8] The ratio test detects convergence of series of positive terms ([[thm-ratio-test]]), and an absolutely convergent complex series converges with every rearrangement having the same sum ([[thm-absolute-convergence-of-complex-series]], [[def-complex-series-power-series-and-absolute-convergence]], [[lem-absolute-convergence-implies-convergence]]).

## Proof

1.1 Let $K$ be a compact subset of the product, so $\operatorname{Im}\tau\ge y_0>0$ and $|\operatorname{Im}z|\le M$ on $K$. Put $r:=e^{-\pi y_0}<1$. Then $|Q|\le r$ and $|Q^{m^2}e^{2\pi imz}|\le r^{m^2}e^{2\pi M|m|}$ for every $(m,z,\tau)$ under consideration; the bounding series converges by [F8], since the ratio of consecutive terms is $r^{2m+1}e^{2\pi M}\to0$. The $M$-test [F1] therefore gives uniform convergence on $K$; each term is entire in $z$ and holomorphic in $\tau$ by [F6] and [F7], so [F2] shows that $\Theta$ is entire in $z$ for fixed $\tau$, holomorphic in $\tau$, and that the series converges locally uniformly in each variable, uniformly on compact products. Termwise index shifts, licensed by absolute convergence [F8], give $\Theta(z+1\mid\tau)=\Theta(z\mid\tau)$, since $e^{2\pi im}=1$, and, using $Q^{m^2}e^{2\pi im\tau}=Q^{(m+1)^2-1}$, also $\Theta(z+\tau\mid\tau)=Q^{-1}e^{-2\pi iz}\Theta(z\mid\tau)$. [F1, F2, F6, F7, F8, given, algebra]

1.2 Put $\Pi(z\mid\tau):=\prod_{n\ge1}(1-Q^{2n})(1+Q^{2n-1}e^{2\pi iz})(1+Q^{2n-1}e^{-2\pi iz})$ and $g_n(z,\tau):=(1-Q^{2n})(1+Q^{2n-1}e^{2\pi iz})(1+Q^{2n-1}e^{-2\pi iz})$. For finite grouped products put $\Pi_0=1$ (the empty product) and $\Pi_N=\prod_{1\le n\le N}g_n$ for $N\ge1$; normal convergence concerns this explicit sequence including its empty prefix. On $K$ as above, with $B:=e^{2\pi M}$, the estimate $|g_n-1|\le(1+r^{2n})(1+Br^{2n-1})^2-1\le C_Kr^{2n-1}$ shows $\sum_n\sup_K|g_n-1|<\infty$, so $\Pi$ is normally convergent and [F3] makes it holomorphic in each variable with the displayed product. The factor $1-Q^{2n}$ never vanishes because $|Q^{2n}|<1$. By [F6], $1+Q^{2n-1}e^{2\pi iz}=0$ is equivalent to $e^{2\pi iz}=-Q^{-(2n-1)}=e^{\pi i(1-(2n-1)\tau)}$, that is to $z\equiv\frac12-\frac{2n-1}{2}\tau\pmod{\mathbb Z}$, and likewise $1+Q^{2n-1}e^{-2\pi iz}=0$ is equivalent to $z\equiv-\frac12+\frac{2n-1}{2}\tau\pmod{\mathbb Z}$. Writing a solution of the first type as $\frac{1+\tau}{2}+a+b\tau$ with $a=k$ and $b=-n\le-1$, and one of the second type with $a=k-1$ and $b=n-1\ge0$, shows that the union of all solutions over $n\ge1$ is exactly the coset $\frac{1+\tau}{2}+\mathbb Z+\tau\mathbb Z$, each of whose points arises from exactly one $n$ and one factor because the representation $a+b\tau$ with $a,b\in\mathbb Z$ is unique ($\operatorname{Im}\tau>0$). At such a solution the derivative of the vanishing factor with respect to $z$ is $\pm2\pi iQ^{2n-1}e^{\pm2\pi iz}\ne0$ by [F6] and [F7], so every zero of $\Pi$ is simple and is a zero of exactly one factor. Finally, cancelling the shifted factors in the normally convergent product, with the reindexings $n\mapsto n+1$ in the second product and $n\mapsto n\pm1$ in the third, gives $\Pi(z+1\mid\tau)=\Pi(z\mid\tau)$ and $\Pi(z+\tau\mid\tau)=\frac{1+Q^{-1}e^{-2\pi iz}}{1+Qe^{2\pi iz}}\Pi(z\mid\tau)=Q^{-1}e^{-2\pi iz}\Pi(z\mid\tau)$. [F3, F6, F7, given, algebra]

2.1 At $z_0:=\frac{1+\tau}{2}$ we have $\Theta(z_0\mid\tau)=\sum_{m\in\mathbb Z}(-1)^mQ^{m^2+m}$; the terms with indices $m$ and $-m-1$ are negatives of each other, and the series is absolutely convergent by [F8], so it sums to $0$. The shift laws of 1.1 then propagate the vanishing to all points of $z_0+\mathbb Z+\tau\mathbb Z$, the multiplier $Q^{-1}e^{-2\pi iz}$ being nonzero by [F6]. By 1.2 that coset is exactly the zero set of $\Pi$, all its zeros are simple, and $\Theta$ is entire in $z$ by 1.1; hence $F_\tau:=\Theta(\cdot\mid\tau)/\Pi(\cdot\mid\tau)$ is holomorphic off the coset and, by the Taylor series of its vanishing numerator and the simple-zero factorisation [F5] of its denominator at each zero, extends holomorphically across it to an entire function. The shift laws of 1.1 and 1.2 give $F_\tau(z+1)=F_\tau(z)$ and $F_\tau(z+\tau)=F_\tau(z)$ off the coset, hence everywhere. Every $z\in\mathbb C$ is $w+m+n\tau$ with $m,n\in\mathbb Z$ and $w$ in the compact parallelogram $\{s+t\tau:0\le s,t\le1\}$ (take $m,n$ the integer parts of the coefficients of $z$ in the basis $1,\tau$), so $z\mapsto F_\tau(z)$ is bounded on $\mathbb C$ by its supremum on that compact set; [F4] gives $F_\tau\equiv c(\tau)$ for a number $c(\tau)$ depending only on $\tau$. [F4, F5, F6, F8, step 1.1, step 1.2, given, algebra]

3.1 Evaluating the constant of 2.1 at $z=\frac14$, where no factor of $\Pi$ vanishes, gives $c(\tau)=\Theta(\frac14\mid\tau)/\Pi(\frac14\mid\tau)$. The series identity is $\Theta(\frac14\mid\tau)=\sum_m Q^{m^2}i^m=\sum_k(-1)^kQ^{4k^2}=\Theta(\frac12\mid4\tau)$: the odd-$m$ terms cancel in the pairs $m\leftrightarrow-m$, and the even ones $m=2k$ contribute $i^{2k}Q^{4k^2}=(-1)^kQ^{4k^2}$, all licensed by [F8]. The product identity is $\Pi(\frac14\mid\tau)=\prod_n(1-Q^{2n})(1+Q^{4n-2})=\prod_k(1-Q^{4k})(1-Q^{8k-4})=\prod_j(1-Q^{8j})(1-Q^{8j-4})^2=\Pi(\frac12\mid4\tau)$, obtained from $\prod_n(1+Q^{4n-2})=\prod_n(1-Q^{8n-4})/\prod_n(1-Q^{4n-2})$ and from splitting $\prod_k(1-Q^{4k})=\prod_j(1-Q^{8j})\prod_j(1-Q^{8j-4})$; all rearrangements are legitimate by normal convergence [F3]. Hence $c(\tau)=c(4\tau)$, and iteration gives $c(\tau)=c(4^k\tau)$ for every $k\ge0$. Writing $Q_k:=Q^{4^k}\to0$, the evaluation of 2.1 at $z=\frac12$ gives $c(4^k\tau)=\Theta(\frac12\mid4^k\tau)/\Pi(\frac12\mid4^k\tau)$ with $\Theta(\frac12\mid4^k\tau)=1+2\sum_{m\ge1}(-1)^mQ_k^{m^2}$ and $\Pi(\frac12\mid4^k\tau)=\prod_n(1-Q_k^{2n})(1-Q_k^{2n-1})^2$. Since $|Q_k|\to0$, $|\Theta(\frac12\mid4^k\tau)-1|\le2|Q_k|/(1-|Q_k|)\to0$, and with $\rho=|Q_k|$, $|\Pi(\frac12\mid4^k\tau)-1|\le\exp\bigl(\rho(2+\rho)/(1-\rho^2)\bigr)-1\to0$ by the elementary product bound $\prod(1+a_n)\le\exp\sum a_n$. Therefore $c(\tau)=\lim_kc(4^k\tau)=1$. [F3, F6, F8, step 2.1, given, algebra]

4.1 By 3.1, $\Theta(z\mid\tau)=\Pi(z\mid\tau)$ for all $z$, so by 2.1 the zeros of $\Theta$ in $z$ are exactly the simple zeros $z=\frac{1+\tau}{2}+a+b\tau$, $a,b\in\mathbb Z$. Moreover $\Theta(0\mid\tau)=\Pi(0\mid\tau)=\prod_n(1-Q^{2n})(1+Q^{2n-1})^2\ne0$, since $|Q^{2n}|<1$ and $|Q^{2n-1}|<1$ make every factor nonzero. This is the zero-free theta constant $\theta(\tau)$, and $Q^2=q$ by the addition law [F6]. [F6, step 2.1, step 3.1, given, algebra] ∎
