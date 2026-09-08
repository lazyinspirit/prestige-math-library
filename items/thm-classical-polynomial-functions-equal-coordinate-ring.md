---
id: "thm-classical-polynomial-functions-equal-coordinate-ring"
kind: "theorem"
title: "Polynomial functions on an affine algebraic set are its coordinate ring"
status: "draft"
origin: "pipeline"
deps: ["def-classical-affine-coordinate-ring", "thm-first-isomorphism-theorem-rings", "thm-universal-property-of-a-polynomial-ring"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, §2i p. 48"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
proof_strategy: direct
---

## Statement

Evaluation induces an isomorphism of $k$-algebras from $k[X]$ to the algebra of polynomial functions $X\to k$, including $X=\varnothing$.

## Facts & Assumptions

**Given:** An affine algebraic set $X\subseteq k^n$ over an algebraically closed field $k$.

[F1] The coordinate ring is $R/I(X)$ ([[def-classical-affine-coordinate-ring]]).

[F2] Evaluation is a unital homomorphism determined by coordinates ([[thm-universal-property-of-a-polynomial-ring]]).

[F3] A ring modulo the kernel maps isomorphically onto the image ([[thm-first-isomorphism-theorem-rings]]).

## Proof

**Proof technique:** direct.

1.1 Give all functions $X\to k$ pointwise operations. Evaluating a polynomial at each point defines a unital $k$-algebra homomorphism $e:R\to k^X$, by iterated polynomial evaluation, since sums and products evaluate to sums and products. Its image is exactly the polynomial functions. Its kernel consists exactly of the polynomials vanishing on every point, namely $I(X)$. [F1, F2, given, algebra]

2.1 F3 gives $R/I(X)\cong\operatorname{im}e$ by $[f]\mapsto(a\mapsto f(a))$, and constants show it is an isomorphism over $k$. When $X$ is empty there is one function, its function algebra is the zero ring, and $\ker e=R$; the same quotient identification applies. [F3, step 1.1] ∎


## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, §2i p. 48. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
