---
id: lem-cardinal-basis-degree-and-values
kind: lemma
title: "Cardinal interpolation functions are polynomials of the stated degrees"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - def-cardinal-polynomial-interpolation
  - lem-finite-coefficient-vector-has-polynomial-representative
  - lem-product-of-linear-factors-is-monic-polynomial
  - def-real-polynomial-degree-leading-coefficient-and-monic
  - def-finite-sum
  - lem-finite-sum-laws
  - thm-reals-field
  - thm-reals-ordered-field
  - lem-of-no-zero-divisors
  - lem-finite-product-of-nonzero-reals-is-nonzero
  - lem-finite-product-of-quotients
  - lem-finite-double-sum-interchange
  - lem-of-zero-mult
  - thm-induction-principle
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  scraped: []
  references:
    - title: "Mark Embree, Lecture Notes on Numerical Analysis, lecture 1"
      url: "https://personal.math.vt.edu/embree/math5466/nanotes.pdf"
    - title: "Jean-Paul Berrut and Lloyd N. Trefethen, Barycentric Lagrange Interpolation"
      url: "https://math.pku.edu.cn/teachers/litj/notes/numer_anal/SIAMRev_46_501_Trefethen_Barycentric.pdf"
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
---

## Statement

Let $n\in\mathbb N$, let $x_0<\cdots<x_n$ be real nodes, and let $y_0,\ldots,y_n\in\mathbb R$. Each cardinal function $\ell_j$ of [[def-cardinal-polynomial-interpolation]] is the evaluation of a formal polynomial of degree $n$. The node function $\omega_n$ is the evaluation of a monic formal polynomial of degree $n+1$, and $\omega_n(x)\ne0$ whenever $x$ differs from every node. The function $I_n y$ is the evaluation of a formal polynomial of degree at most $n$. At every pair $i,j\in\{0,\ldots,n\}$, $\ell_j(x_i)=1$ if $i=j$ and $0$ otherwise.

## Facts & Assumptions

**Given:** Ordered real nodes and real interpolation data.

[F1] [[def-cardinal-polynomial-interpolation]]: $\omega_n(X)=\prod_{k=0}^{n}(X-x_k)$, $w_j=(\prod_{k\ne j}(x_j-x_k))^{-1}$, $\ell_j(X)=\prod_{k\ne j}(X-x_k)/(x_j-x_k)$, and $I_n y=\sum_j y_j\ell_j$.

[F2] [[lem-product-of-linear-factors-is-monic-polynomial]]: a product of $s$ factors $X-r_k$ has a formal polynomial representative of degree $s$ and leading coefficient $1$.

[F3] [[lem-finite-coefficient-vector-has-polynomial-representative]]: every real coefficient vector through index $n$ represents a formal polynomial of degree at most $n$, and a nonzero final coefficient is its leading coefficient.

[F4] [[def-real-polynomial-degree-leading-coefficient-and-monic]]: a formal polynomial is its finite coefficient list and its evaluation function is the corresponding finite sum.

[F5] [[thm-reals-field]], [[thm-reals-ordered-field]], and [[lem-of-no-zero-divisors]]: ordered distinct nodes give nonzero differences, a nonzero real has an inverse, and a product of two nonzero reals is nonzero.

[F6] [[lem-finite-product-of-nonzero-reals-is-nonzero]]: a finite product of nonzero real factors is nonzero, including the empty product.

[F7] [[lem-finite-product-of-quotients]]: a finite product of quotients with nonzero denominators is the quotient of the corresponding products.

[F8] [[lem-finite-sum-laws]]: multiplying every term of a finite real sum by the same scalar multiplies the sum by that scalar.

[F9] [[lem-finite-double-sum-interchange]]: the order of two finite sums over the same finite square index set may be interchanged.

[F10] [[lem-finite-sum-laws]]: a finite product splits into its prefix product times its suffix product.

[F11] [[lem-of-zero-mult]]: multiplying zero by any real gives zero.

[F12] [[def-finite-sum]]: a finite product has empty value $1$ and extends by multiplying the next factor.

[F13] [[thm-induction-principle]]: induction on the natural-number list length is valid.

## Proof

**Proof technique:** direct.

1.1 For $k\ne j$, strict ordering of the nodes gives $x_j-x_k\ne0$. The denominator product in $w_j$ is nonzero by [F6], so its inverse $w_j$ exists and is nonzero by [F5]. List the omitted-node indices in increasing order and put $P_j(X)=\prod_{k\ne j}(X-x_k)$; [F2] makes this a monic formal polynomial of degree $n$. For an arbitrary real $x$, apply [F7] to the real numerators $x-x_k$ and denominators $x_j-x_k$ in that list. It gives $\ell_j(x)=P_j(x)/\prod_{k\ne j}(x_j-x_k)=w_jP_j(x)$, also when $n=0$ by the empty-product convention. Scale the coefficient list $(a_0,\ldots,a_n)$ of $P_j$ by $w_j$; the resulting vector has final coefficient $w_j\ne0$. By [F3] and [F4] it represents a formal polynomial of degree $n$, and [F8] gives its evaluation $w_jP_j(x)=\ell_j(x)$ for every real $x$. [given, F1, F2, F3, F4, F5, F6, F7, F8, algebra]

1.2 If $i=j$, each factor in $\ell_j(x_i)$ is $d/d=1$ for a nonzero difference $d=x_j-x_k$. Induction [F13] on the list length shows their product is $1$: the empty product is $1$, and appending a factor $1$ leaves it unchanged by [F12] and the field identity [F5]. This includes the empty list. If $i\ne j$, the omitted-node list contains $x_i$: its index is $i$ when $i<j$ and $i-1$ when $i>j$. The corresponding quotient factor is $0$ because its numerator is $x_i-x_i=0$, its denominator is nonzero, and [F11] gives $0$ times its inverse equal to $0$. Splitting the finite product before and after that factor by [F10] writes $\ell_j(x_i)$ as a prefix product times $0$ times a suffix product, which is $0$ by commutativity [F5] and [F11]. [given, F1, F5, F10, F11, F12, F13, algebra]

1.3 The product lemma [F2] applied to $x_0,\ldots,x_n$ gives a monic polynomial of degree $n+1$ evaluating to $\omega_n$, with degree and leading coefficient understood from the formal list [F4]. [given, F1, F2, F4]

1.4 If $x$ differs from every node, each factor $x-x_j$ is nonzero by [F5], so the product lemma [F6] gives $\omega_n(x)\ne0$. [given, F1, F5, F6]

2.1 For each $j$, let $(a_{j,0},\ldots,a_{j,n})$ be the coefficient vector of the degree-$n$ representative from step 1.1. Define $b_k=\sum_{j<n+1}y_ja_{j,k}$ for $k<n+1$. For every real $x$, finite-sum scaling [F8], field distributivity, and double-sum interchange [F9] give $$\sum_{k<n+1}b_kx^k=\sum_{k<n+1}\sum_{j<n+1}y_ja_{j,k}x^k=\sum_{j<n+1}y_j\sum_{k<n+1}a_{j,k}x^k=\sum_{j<n+1}y_j\ell_j(x)=I_ny(x).$$ The vector $(b_0,\ldots,b_n)$ therefore gives, by [F3], a formal polynomial of degree at most $n$ evaluating to $I_ny$. [given, F1, F3, F8, F9, step 1.1, algebra, construct] ∎
