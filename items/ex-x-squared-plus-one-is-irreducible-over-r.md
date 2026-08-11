---
id: ex-x-squared-plus-one-is-irreducible-over-r
kind: example
title: 'The polynomial $x^2+1$ is irreducible over $\mathbb R$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-quadratic-and-cubic-irreducibility-test, thm-reals-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'Thomas W. Judson, Abstract Algebra: Theory and Applications, examples after Theorem 17.8'
      url: 'https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/17%3A_Polynomials'
pipeline_run: null
---

## Example

The polynomial $x^2+1$ is irreducible in $\mathbb R[x]$.

## Facts & Assumptions

**Given:** The polynomial $f=x^2+1\in\mathbb R[x]$.

[L1] A quadratic over a field is irreducible exactly when it has no root in that field ([[thm-quadratic-and-cubic-irreducibility-test]]).

[L2] The real numbers form an ordered field, so every square is nonnegative and $1>0$ ([[thm-reals-ordered-field]]).

## Verification

**Proof technique:** direct.

1.1 For every real $a$, [L2] gives $a^2\ge0$ and hence $a^2+1>0$. [given, L2, algebra]

2.1 Thus $f$ has no real root, and [L1] makes it irreducible in $\mathbb R[x]$. [step 1.1, L1] ∎
