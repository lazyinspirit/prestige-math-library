---
id: lem-trigonometric-polynomials-dense-on-the-k-torus
kind: lemma
title: Trigonometric polynomials are uniformly dense on the k-torus
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-dirichlet-and-fejer-kernels
  - lem-fejer-kernel-is-a-positive-approximate-identity
  - thm-riemann-fubini-on-product-rectangles
  - thm-multidimensional-integral-properties
  - thm-heine-borel-rn
  - thm-heine-cantor-metric
  - thm-extreme-value-metric
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: L. Kuipers and H. Niederreiter, Uniform Distribution of Sequences
      url: https://web.maths.unsw.edu.au/~josefdick/preprints/KuipersNied_book.pdf
      locator: "Chapter 1, §2, proof of Theorem 2.1 by trigonometric approximation, printed pp. 7–8"
    - title: Vitaly Bergelson and Joel Moreira, Metric uniform distribution on analytic curves
      url: https://link.springer.com/content/pdf/10.1007/s40687-026-00647-6.pdf
      locator: "Theorem 1.2, §1, character test functions in Weyl’s criterion"
    - title: Vitaly Bergelson and Joel Moreira, Metric uniform distribution on analytic curves (arXiv v2 author preprint)
      url: https://arxiv.org/pdf/2509.06909v2
      locator: "arXiv:2509.06909v2, Theorem 1.2, §1, character test functions in Weyl’s criterion; full relevant passage inspected"
---

## Statement

Let $k\ge1$, write $\mathbb T^k=(\mathbb R/\mathbb Z)^k$, and let $F:\mathbb T^k\to\mathbb C$ be continuous. For every $\varepsilon>0$ there are a finite set $H\subseteq\mathbb Z^k$ and coefficients $c_h\in\mathbb C$ such that

$$\sup_{x\in\mathbb T^k}\left|F(x)-\sum_{h\in H}c_h e(h\cdot x)\right|<\varepsilon,$$

where $e(t)=\exp(2\pi i t)$ and $h\cdot x$ is read using any representative of $x$ modulo $\mathbb Z^k$.

## Statement references

[Kuipers–Niederreiter, Chapter 1, §2](https://web.maths.unsw.edu.au/~josefdick/preprints/KuipersNied_book.pdf)

## Facts & Assumptions

**Given:** An integer $k\ge1$, a continuous function $F:\mathbb T^k\to\mathbb C$, and $\varepsilon>0$.

[F1] The Fejér kernel is a finite trigonometric polynomial: $F_N(t)=\frac1{N+1}\sum_{r=0}^N D_r(t)$ and each $D_r$ is a finite sum of characters ([[def-dirichlet-and-fejer-kernels]]).

[F2] For every $N$, $F_N$ is nonnegative with integral $1$ over one period, and its mass on $[\delta,1-\delta]$ tends to zero for each $0<\delta\le1/2$ ([[lem-fejer-kernel-is-a-positive-approximate-identity]]).

[F3] A continuous real-valued function on a product rectangle has equal iterated Riemann integrals in either coordinate order and its multiple integral equals them ([[thm-riemann-fubini-on-product-rectangles]]). For a continuous complex-valued function, define its Riemann integral componentwise and apply this result separately to its real and imaginary parts.

[F4] A closed bounded box in Euclidean space is compact ([[thm-heine-borel-rn]]).

[F5] A continuous map on a compact metric space is uniformly continuous ([[thm-heine-cantor-metric]]).

[F6] A continuous real-valued function on a compact metric space is bounded ([[thm-extreme-value-metric]]).

[F7] The Riemann integral is linear and monotone on real-valued integrable functions on a rectangle; by components it is linear for continuous complex-valued functions, and $|\int q|\le\int|q|$ for continuous complex $q$ (multiply $\int q$ by a unit scalar making it real and apply real monotonicity to its real part) ([[thm-multidimensional-integral-properties]]).

## Proof

1.1 Lift $F$ to its continuous periodic function on $[0,1]^k$. This box is compact by [F4], so [F5] gives a radius $\rho>0$ such that changing a point by less than $\rho$ changes $F$ by less than $\varepsilon/(4k)$. Choose $0<\delta<\min\{\rho,1/2\}$. If each coordinate of $t$ is within $\delta$ of an integer, change coordinates from $x$ to $x-t$ modulo one one at a time. In a coordinate without a wrap, the representatives differ by less than $\rho$; in a wrapped coordinate, each representative is within $\rho$ of its corresponding opposite endpoint, where the two face values agree by periodicity. Each coordinate change therefore changes $F$ by less than $\varepsilon/(2k)$, and $|F(x-t)-F(x)|<\varepsilon/2$. [given, F4, F5, choose]

1.2 For $N\ge0$ put $K_N(t)=\prod_{j=1}^kF_N(t_j)$. By [F2], repeated use of [F3] to factor integrals of products in separate coordinates, and linearity [F7], $K_N\ge0$, its integral over $[0,1]^k$ is $1$, and its integral outside the set where every coordinate is within $\delta$ of an integer is at most $k\int_\delta^{1-\delta}F_N(t)\,dt$, which tends to zero. [F2, F3, F7, algebra]

2.1 Define $P_N(x)=\int_{[0,1]^k}F(x-t)K_N(t)\,dt$. Subtracting $F(x)$ inside the integral, the near part has modulus at most $\varepsilon/2$ by step 1.1 and positivity, using the complex integral bound in [F7]; the far part has modulus at most $2\|F\|_\infty$ times the tail mass from step 1.2. The norm is finite by [F6] applied to $|F|$. Thus for all sufficiently large $N$, $\|P_N-F\|_\infty<\varepsilon$. [F6, F7, step 1.1, step 1.2, algebra]

3.1 By [F1], the product $K_N$ is a finite sum $\sum_{h\in H_N}d_h e(h\cdot t)$. For each continuous $1$-periodic one-variable function $H$ and shift $x_j$, put $r=\{x_j\}$; splitting at the wrap and using periodicity gives $\int_{x_j-1}^{x_j}H(u)\,du=\int_{r-1}^{r}H(u)\,du=\int_{r}^{1}H(u)\,du+\int_0^rH(u)\,du=\int_0^1H(u)\,du$. Apply this coordinate by coordinate to $F(u)e(-h\cdot u)$, which is periodic in each coordinate because $h\in\mathbb Z^k$. Substitution into $P_N$ therefore gives $P_N(x)=\sum_{h\in H_N}d_h e(h\cdot x)\int_{[0,1]^k}F(u)e(-h\cdot u)\,du$; for these complex integrands apply [F3] separately to real and imaginary parts and use [F7] for linearity. Hence $P_N$ is a trigonometric polynomial, and step 2.1 supplies one within $\varepsilon$ of $F$. [F1, F3, F7, step 2.1, algebra] ∎
