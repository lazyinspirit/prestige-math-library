---
id: ex-polynomial-arithmetic-by-convolution
kind: example
title: 'Polynomial addition and multiplication computed from coefficient convolution'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-polynomial-ring-over-a-commutative-ring, thm-int-comm-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Thomas W. Judson, Abstract Algebra: Theory and Applications, Chapter 17.1'
      url: 'https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/17%3A_Polynomials'
pipeline_run: null
---

## Example

In $\mathbb Z[x]$, let $f=1+2x+3x^2$ and $g=2-x$. Then

$$ f+g=3+x+3x^2,\qquad fg=2+3x+4x^2-3x^3. $$

## Facts & Assumptions

**Given:** The integer polynomials $f=1+2x+3x^2$ and $g=2-x$.

[L1] Polynomial addition is coefficientwise, and the coefficient of $x^n$ in a product is the finite convolution sum $\sum_{i+j=n}a_i b_j$ ([[def-polynomial-ring-over-a-commutative-ring]]).

[L2] The integers form a commutative ring ([[thm-int-comm-ring]]).

## Verification

**Proof technique:** direct.

1.1 Coefficientwise addition over the commutative ring [L2] gives the coefficients $(1+2,2-1,3+0)=(3,1,3)$. [given, L1, L2, algebra]

2.1 Convolution gives coefficients $2$, $-1+4=3$, $-2+6=4$, and $-3$ in degrees $0,1,2,3$, respectively, proving the displayed product. [given, L1, L2, algebra] ∎
