---
id: ex-finite-blaschke-products
kind: example
title: "Finite Blaschke products"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-blaschke-product, thm-blaschke-product-boundary-values-and-zeros, def-unit-disc-upper-half-plane-and-blaschke-factor, thm-local-maximum-modulus-principle, lem-complex-conjugation-and-modulus-laws, def-complex-conjugate-real-imaginary-part-and-modulus]
proof_strategy: direct
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
    - title: "R. K. Srivastava, Lecture Notes on Hardy Spaces (MA650, IIT Guwahati), §5.8"
      url: "https://fac.iitg.ac.in/rksri/MA650%20Advanced%20Hardy%20Spaces%20Notes.pdf"
      locator: "Blaschke Product, printed pp. 35-37: the factor $b_\\lambda$ and its basic properties, including the finite products."
    - title: "J. B. Garnett, Bounded Analytic Functions, revised first edition, Chapter II §2"
      url: "https://dokumen.pub/bounded-analytic-functions-0387336214-9780387336213.html"
      locator: "Blaschke products, printed pp. 51-53: finite Blaschke products, their zeros and boundary values."
---

## Example

For $a_1,\dots,a_N\in\mathbb D$ let $B(z)=\prod_{j=1}^N b_{a_j}(z)$ be the
finite Blaschke product of the normalized factors $b_a$ of
[[def-blaschke-product]]. Then $B$ is a rational function holomorphic on an
open neighbourhood of $\overline{\mathbb D}$, $|B(\zeta)|=1$ for every
$\zeta\in\mathbb T$, $B(0)=\prod_{j=1}^N|a_j|$, and the zeros of $B$ in
$\mathbb D$ are exactly $a_1,\dots,a_N$ with multiplicity; in particular
$|B(z)|<1$ for every $z\in\mathbb D$ when $N\ge1$ (a nonconstant finite
Blaschke product has no interior point of modulus one).

For $a_1=1/2$, $a_2=-1/2$ one computes $b_{1/2}(z)=\frac{1/2-z}{1-z/2}$ and
$b_{-1/2}(z)=\frac{1/2+z}{1+z/2}$ (the normalization $\overline a/|a|$ of the
second factor is $-1$), so
$$B(z)=b_{1/2}(z)\,b_{-1/2}(z)=\frac{1/4-z^2}{1-z^2/4},$$
with $B(0)=1/4$ and $B(1)=B(-1)=-1$ (the latter values illustrate $|B|=1$ on
the boundary).

## Facts & Assumptions

**Given:** Points $a_1,\dots,a_N\in\mathbb D$ and the finite product $B=\prod_{j=1}^N b_{a_j}$ of normalized Blaschke factors.

[F1] Each normalized factor is $b_a=\frac{\overline a}{|a|}\varphi_a$ for $a\ne0$ and $b_0(z)=z$, with $\varphi_a(z)=\frac{a-z}{1-\overline az}$ holomorphic on a neighbourhood of $\overline{\mathbb D}$; $|b_a(z)|\le1$ on $\mathbb D$, $|b_a(\zeta)|=1$ on $\mathbb T$, $b_a(0)=|a|$, and $b_a$ has the unique zero $a$ in $\mathbb D$ ([[def-blaschke-product]], [[def-unit-disc-upper-half-plane-and-blaschke-factor]], [[thm-blaschke-product-boundary-values-and-zeros]]).

[F2] If a holomorphic function on a domain has a local maximum of its modulus at an interior point, it is constant there; equivalently $|f|$ attains no strict interior maximum unless $f$ is constant ([[thm-local-maximum-modulus-principle]]).

[F3] For $|\zeta|=1$ one has $|a_j-\zeta|=|1-\overline{a_j}\zeta|$, and moduli multiply over finite products ([[lem-complex-conjugation-and-modulus-laws]], [[def-complex-conjugate-real-imaginary-part-and-modulus]]).



## Verification

1.1 Rationality and holomorphy near the closed disc. Each factor $b_a$ is a quotient of the linear functions $a-z$ and $1-\overline az$ times the constant $\overline a/|a|$ (with $b_0(z)=z$), and its denominator is zero-free on $\overline{\mathbb D}$ because $|\overline az|\le|a|<1$. Hence each $b_{a_j}$ is holomorphic on a neighbourhood of $\overline{\mathbb D}$, and the finite product $B$ is a rational function holomorphic on such a neighbourhood. [F1, algebra]

1.2 Boundary modulus and value at the origin. By [F1] and [F3], $|B(\zeta)|=\prod_j|b_{a_j}(\zeta)|=1$ for $\zeta\in\mathbb T$, and $B(0)=\prod_jb_{a_j}(0)=\prod_j|a_j|$. [F1, F3, algebra]

1.3 Zeros. The zeros of a finite product are the union of the zeros of its factors with multiplicity; by [F1] the zero of $b_{a_j}$ in $\mathbb D$ is exactly $a_j$, and $b_{a_j}$ has no other zero in $\mathbb D$. Hence the zeros of $B$ in $\mathbb D$ are exactly $a_1,\dots,a_N$ with multiplicity. [F1, algebra]

2.1 Strict decrease of the modulus when $N\ge1$. Assume $N\ge1$ and suppose $|B(z_0)|=1$ for some $z_0\in\mathbb D$. Since $|B|\le\prod_j\sup_{\mathbb D}|b_{a_j}|\le1$ on $\mathbb D$, $|B|$ has at $z_0$ a maximum equal to $1$, so $B$ is constant by [F2]; a constant value of modulus $1$ would give $|B(0)|=1$, but $|B(0)|=\prod_j|a_j|<1$ because $N\ge1$ and every $|a_j|<1$, a contradiction. Hence $|B(z)|<1$ for every $z\in\mathbb D$ whenever $N\ge1$. [step 1.2, F1, F2, algebra]

3.1 The explicit case $a_1=1/2$, $a_2=-1/2$. Here $\overline{(1/2)}/|1/2|=1$, so $b_{1/2}(z)=\varphi_{1/2}(z)=\frac{1/2-z}{1-z/2}$, while $\overline{(-1/2)}/|-1/2|=-1$, so $b_{-1/2}(z)=-\frac{-1/2-z}{1+z/2}=\frac{1/2+z}{1+z/2}$. Multiplying and expanding $(1/2-z)(1/2+z)=1/4-z^2$ and $(1-z/2)(1+z/2)=1-z^2/4$ gives $B(z)=\frac{1/4-z^2}{1-z^2/4}$, whence $B(0)=1/4$, $B(1)=\frac{-3/4}{3/4}=-1$ and $B(-1)=-1$, in agreement with $|B(1)|=|B(-1)|=1$. [F1, algebra] ∎
