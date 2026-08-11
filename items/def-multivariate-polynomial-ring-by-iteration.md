---
id: def-multivariate-polynomial-ring-by-iteration
kind: definition
title: 'Polynomial rings in finitely many commuting indeterminates by iteration'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-polynomial-ring-over-a-commutative-ring, thm-polynomial-ring-is-a-commutative-ring]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'Thomas W. Judson, Abstract Algebra: Theory and Applications, Chapter 17.1'
      url: 'https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/17%3A_Polynomials'
    - title: 'Neil Donaldson, Math 120B Notes, Section 22, More general constructions'
      url: 'https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf'
pipeline_run: null
---

## Definition

Let $R$ be a commutative ring. Define polynomial rings in finitely many commuting indeterminates recursively by

$$ R[x_1,\ldots,x_0]:=R,\qquad R[x_1,\ldots,x_{n+1}]:=R[x_1,\ldots,x_n][x_{n+1}]. $$

At each stage the coefficient ring embeds as the constant polynomials ([[thm-polynomial-ring-is-a-commutative-ring]]), so all preceding indeterminates remain present. The new indeterminate commutes with every coefficient by the commutativity built into [[def-polynomial-ring-over-a-commutative-ring]], and consequently all $x_i$ commute. This iterated ring is denoted $R[x_1,\ldots,x_n]$.
