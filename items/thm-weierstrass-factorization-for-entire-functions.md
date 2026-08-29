---
id: thm-weierstrass-factorization-for-entire-functions
kind: theorem
title: "Weierstrass factorization for entire functions"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-weierstrass-product-theorem-on-the-complex-plane, def-weierstrass-elementary-factor, thm-zero-order-factorization-holomorphic-function, thm-holomorphic-logarithms-homologically-simply-connected-domains, prop-star-shaped-plane-domains-are-homologically-simply-connected]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 5 The Weierstrass product theorem"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Statement

Let $f$ be an entire function, not identically zero, and let $m$ be the order
of its zero at $0$. If $f$ has infinitely many nonzero zeros, let
$(a_n)_{n\ge1}$ list them with multiplicity and without finite accumulation
point. Then there is an entire function $g$ such that

$$f(z)=z^m e^{g(z)}\prod_{n\ge1}E_{p_n}(z/a_n)$$

for suitable integers $p_n\ge0$.

If $f$ has finitely many nonzero zeros $a_1,\dots,a_N$, the corresponding
conclusion is

$$f(z)=z^m e^{g(z)}\prod_{j=1}^N E_0(z/a_j),$$

where the product is $1$ when $N=0$.

## Facts & Assumptions

**Given:** A nonzero entire function $f$.

[F1] The zero at $0$ has finite order $m$, and locally one can factor off
$(z-a)^m$ from a holomorphic function according to its zero multiplicity
([[thm-zero-order-factorization-holomorphic-function]]).

[F2] The Weierstrass product theorem constructs an entire product with any
prescribed discrete zero divisor on $\mathbb C$
([[thm-weierstrass-product-theorem-on-the-complex-plane]]).

[F3] The plane $\mathbb C$ is star-shaped and therefore homologically simply
connected ([[prop-star-shaped-plane-domains-are-homologically-simply-connected]]).

[F4] A nowhere-zero holomorphic function on a homologically simply connected
domain has a holomorphic logarithm
([[thm-holomorphic-logarithms-homologically-simply-connected-domains]]).

[F5] The elementary factor $E_0(w)=1-w$ has its unique zero at $w=1$.
([[def-weierstrass-elementary-factor]])

## Proof

**Proof technique:** direct.

1.1 Let $m$ be the order of the zero of $f$ at $0$, with $m=0$ if $f(0)\ne0$. If the nonzero zero multiset is infinite, [F2] gives an entire function $P(z)=z^m\prod_{n\ge1}E_{p_n}(z/a_n)$ with exactly the same zeros as $f$, counted with multiplicity. If it is finite, list it as $a_1,\dots,a_N$ and put $P(z)=z^m\prod_{j=1}^NE_0(z/a_j)$, with the empty product equal to $1$; [F5] gives the same zero-divisor conclusion. [F1, F2, F5, given, construct, cases]

2.1 The quotient $h=f/P$ is holomorphic on $\mathbb C$: away from the common zeros this is immediate, and at each zero the matching multiplicities from step 1.1 and [F1] remove the singularity. Moreover $h$ has no zero anywhere, because every zero of $f$ was already cancelled by $P$. [F1, F2, step 1.1, algebra]

3.1 By [F3], the whole plane is homologically simply connected, so [F4] gives an entire function $g$ with $e^{g}=h$. Substituting the definition of $h$ from step 2.1 yields the required infinite or finite factorization of $f$. [F3, F4, step 2.1, algebra] ∎
