---
id: thm-polynomial-degree-of-a-product-over-a-domain
kind: theorem
title: 'Over an integral domain, degrees add under multiplication of nonzero polynomials'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [prop-polynomial-degree-laws-over-a-commutative-ring, def-zero-divisor-and-integral-domain]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Thomas W. Judson, Abstract Algebra: Theory and Applications, Theorem 17.4'
      url: 'https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/17%3A_Polynomials'
    - title: 'Neil Donaldson, Math 120B Notes, Theorem 22.3'
      url: 'https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf'
pipeline_run: null
---

## Statement

If $R$ is an integral domain and $f,g\in R[x]$ are nonzero, then $fg\ne0$ and

$$ \deg(fg)=\deg f+\deg g,\qquad \operatorname{lc}(fg)=\operatorname{lc}(f)\operatorname{lc}(g). $$

## Facts & Assumptions

**Given:** An integral domain $R$ and nonzero polynomials $f,g\in R[x]$.

[L1] The coefficient of degree $\deg f+\deg g$ in $fg$ is the product of the two leading coefficients, and all higher coefficients vanish ([[prop-polynomial-degree-laws-over-a-commutative-ring]]).

[L2] In an integral domain, a product of two nonzero elements is nonzero ([[def-zero-divisor-and-integral-domain]]).

## Proof

**Proof technique:** direct.

1.1 The leading coefficients of $f$ and $g$ are nonzero, so [L2] makes their product nonzero. [given, L2]

2.1 Fact [L1] identifies that product as the coefficient at degree $\deg f+\deg g$ and makes every higher coefficient zero, so $fg\ne0$, its degree is the sum of the degrees, and its leading coefficient is the product of the leading coefficients. [step 1.1, L1] ∎
