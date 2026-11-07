---
id: thm-weyl-criterion-on-the-k-torus
kind: theorem
title: Weyl character criterion for equidistribution on the k-torus
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-uniform-distribution-mod-one-in-k-dimensions
  - lem-trigonometric-polynomials-dense-on-the-k-torus
  - thm-riemann-fubini-on-product-rectangles
  - thm-heine-borel-rn
  - thm-heine-cantor-metric
  - thm-multidimensional-integral-properties
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Vitaly Bergelson and Joel Moreira, Metric uniform distribution on analytic curves
      url: https://link.springer.com/content/pdf/10.1007/s40687-026-00647-6.pdf
      locator: "Theorem 1.2, §1: Z^k character form of Weyl’s criterion"
    - title: Vitaly Bergelson and Joel Moreira, Metric uniform distribution on analytic curves (arXiv v2 author preprint)
      url: https://arxiv.org/pdf/2509.06909v2
      locator: "arXiv:2509.06909v2, Theorem 1.2, §1: Z^k character form of Weyl’s criterion; full relevant passage inspected"
    - title: L. Kuipers and H. Niederreiter, Uniform Distribution of Sequences
      url: https://web.maths.unsw.edu.au/~josefdick/preprints/KuipersNied_book.pdf
      locator: "Chapter 1, §2, Theorem 2.1 and complete proof, printed pp. 7–8; Chapter 4, §1, Theorem 1.3 and Corollary 1.2, printed pp. 227–228"
---

## Statement

Let $k\ge1$ and let $x_n\in\mathbb R^k$ for $n\ge1$. Then $(x_n)$ is uniformly distributed modulo one in $\mathbb T^k$ if and only if for every nonzero $h\in\mathbb Z^k$,

$$\frac1N\sum_{n=1}^N e(h\cdot x_n)\longrightarrow0\qquad(N\to\infty),$$

where $e(t)=\exp(2\pi i t)$ and the character $e(h\cdot x_n)$ is independent of the chosen representative of $x_n$ modulo $\mathbb Z^k$.

## Statement references

[[def-uniform-distribution-mod-one-in-k-dimensions]]

[Bergelson–Moreira, Theorem 1.2](https://link.springer.com/content/pdf/10.1007/s40687-026-00647-6.pdf)

[Kuipers–Niederreiter, Chapter 1, §2 and Chapter 4, §1](https://web.maths.unsw.edu.au/~josefdick/preprints/KuipersNied_book.pdf)

[Bergelson–Moreira, arXiv:2509.06909v2](https://arxiv.org/pdf/2509.06909v2)

## Facts & Assumptions

**Given:** An integer $k\ge1$ and a sequence $(x_n)_{n\ge1}$ in $\mathbb R^k$.

[F1] Uniform distribution modulo one in $k$ dimensions means convergence of all half-open box frequencies to their product volumes ([[def-uniform-distribution-mod-one-in-k-dimensions]]).

[F2] Continuous functions on $\mathbb T^k$ are uniformly approximated by finite sums of the characters $e(h\cdot x)$ ([[lem-trigonometric-polynomials-dense-on-the-k-torus]]).

[F3] For a continuous real-valued function on a product rectangle, iterated Riemann integration agrees with the multiple Riemann integral ([[thm-riemann-fubini-on-product-rectangles]]). Define the Riemann integral of a continuous complex-valued function componentwise and apply this result separately to its real and imaginary parts.

[F4] The cube $[0,1]^k$ is compact by Heine–Borel ([[thm-heine-borel-rn]]), and a continuous function on it is uniformly continuous ([[thm-heine-cantor-metric]]).

[F5] The multiple Riemann integral is linear and monotone on real-valued integrable functions on a rectangle; by components it is linear for complex integrable functions, and $|\int q|\le\int|q|$ for continuous complex $q$ (multiply $\int q$ by a unit scalar making it real and apply real monotonicity to its real part) ([[thm-multidimensional-integral-properties]]).

## Proof

1.1 Suppose first that $(x_n)$ is uniformly distributed. Let $G:\mathbb T^k\to\mathbb C$ be continuous. By [F4], its periodic lift to $[0,1]^k$ is uniformly continuous. Partition $[0,1)^k$ into finitely many half-open boxes of mesh at most $1/m$ and on each box take the value of $G$ at its lower corner. For sufficiently large $m$ this step function differs uniformly from $G$ by less than any prescribed $\varepsilon>0$. By [F1], its empirical averages converge to the finite sum of its values times the box volumes, which is its componentwise complex Riemann integral by [F5]. Both the empirical-average error and the complex integral error for $G$ are at most $\varepsilon$, the latter by [F5]; since $\varepsilon$ is arbitrary, the empirical averages of $G$ converge to its Riemann integral. [given, F1, F4, F5, choose, algebra]

1.2 Conversely, assume all nonzero character averages tend to zero. For any trigonometric polynomial $P(x)=\sum_{h\in H}c_he(h\cdot x)$, its empirical averages tend to $c_0$ (taking $c_0=0$ if absent). By applying [F3] separately to real and imaginary parts, each nonzero character has integral $\int_{[0,1]^k}e(h\cdot x)\,dx=\prod_{j=1}^k\int_0^1e(h_jt)\,dt=0$, since some integer coordinate $h_j$ is nonzero and $\int_0^1e(h_jt)\,dt=[e(h_jt)/(2\pi i h_j)]_0^1=0$; the constant character has integral $1$. By linearity [F5], the componentwise complex Riemann integral of $P$ is $c_0$. [given, F3, F5, algebra]

1.3 Fix a half-open box $B=\prod_j[u_j,v_j)$. If any side has length zero, $B$ is empty and its frequency and product volume are both zero, proving this case. Otherwise omit every side of length one, whose factor is identically one. If any sides remain, choose a common $\delta>0$ below $\frac12\min_j\{v_j-u_j,1-(v_j-u_j)\}$ over those sides. For a remaining side of length $L=v_j-u_j\in(0,1)$ define the continuous periodic ramp $r_{a,\ell,\delta}(t)$ by setting $s=\{t-a\}$, taking $r=\min\{1,s/\delta,(\ell-s)/\delta\}$ when $0<s<\ell$, and taking $r=0$ otherwise. Then $\ell_{j,\delta}=r_{u_j,L,\delta}$ and $u_{j,\delta}=1-r_{v_j,1-L,\delta}$ satisfy $0\le\ell_{j,\delta}\le\mathbf1_{[u_j,v_j)}\le u_{j,\delta}\le1$ on the circle and agree with the indicator outside the $\delta$-neighbourhoods of its two endpoints; hence each ramp integral differs from $L$ by at most $4\delta$. [given, construct, choose, algebra]

2.1 For $h\ne0$, step 1.2's componentwise product calculation gives $\int_{[0,1]^k}e(h\cdot x)\,dx=0$. Applying step 1.1 to this character proves the required Fourier limit. [step 1.1, step 1.2]

2.2 Given a continuous $G$ and $\varepsilon>0$, choose $P$ by [F2] with $\|G-P\|_\infty<\varepsilon$. The empirical-average error is at most $\varepsilon$, and [F5] bounds the complex integral error by $\varepsilon$; step 1.2 then implies that the averages of $G$ converge to its Riemann integral. [F2, F5, step 1.2, choose, algebra]

2.3 Set $L_\delta(x)=\prod_j\ell_{j,\delta}(x_j)$ and $U_\delta(x)=\prod_j u_{j,\delta}(x_j)$, using the constant factor $1$ for full sides and interpreting an empty product as $1$. Then $L_\delta\le\mathbf1_B\le U_\delta$. By [F3] and [F5], their integrals factor into the one-dimensional ramp integrals, so both tend to $\prod_j(v_j-u_j)$ as $\delta\downarrow0$. [F3, F5, step 1.3, algebra]

3.1 By step 2.2, the empirical averages of $L_\delta$ and $U_\delta$ tend to their integrals. Squeezing the empirical frequency of $B$ between these averages and then letting $\delta\downarrow0$ gives its limit as $\prod_j(v_j-u_j)$. Since $B$ was arbitrary, [F1] gives uniform distribution. [F1, step 2.2, step 2.3, algebra] ∎
