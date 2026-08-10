---
id: def-polynomial-degree-leading-coefficient-and-monic
kind: definition
title: 'Degree, leading coefficient and monic polynomial, with the zero polynomial having no degree'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-polynomial-ring-over-a-commutative-ring]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'Thomas W. Judson, Abstract Algebra: Theory and Applications, Chapter 17.1'
      url: 'https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/17%3A_Polynomials'
    - title: 'Neil Donaldson, Math 120B Notes, Section 22'
      url: 'https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf'
pipeline_run: null
---

## Definition

Let $0\ne f=\sum_i a_i x^i\in R[x]$. Its **degree** is the largest natural number $n$ for which $a_n\ne0$, and its **leading coefficient** is $a_n$:

$$ \deg f:=\max\{i\in\mathbb N:a_i\ne0\},\qquad \operatorname{lc}(f):=a_{\deg f}. $$

The maximum exists because the nonempty support is finite. The polynomial $f$ is **monic** when $\operatorname{lc}(f)=1_R$. The zero polynomial has no degree and no leading coefficient. Accordingly, every degree statement below explicitly separates the zero polynomial rather than assigning it a formal degree.
