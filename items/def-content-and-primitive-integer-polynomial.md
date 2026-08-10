---
id: def-content-and-primitive-integer-polynomial
kind: definition
title: 'Content and primitive integer polynomials'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-polynomial-ring-over-a-commutative-ring, prop-polynomial-coefficient-sequences-and-trimmed-lists-agree, thm-int-comm-ring, def-common-divisor-and-gcd]
justified_by: [lem-content-divisibility-characterisation]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'Keith Conrad, Irreducibility Tests in Q[T], Appendix A.1'
      url: 'https://kconrad.math.uconn.edu/blurbs/ringtheory/irredtestsoverQ.pdf'
pipeline_run: null
---

## Definition

Let $0\ne f\in\mathbb Z[x]$. Through the trimmed-list correspondence ([[prop-polynomial-coefficient-sequences-and-trimmed-lists-agree]]), write $f=a_0+a_1x+\cdots+a_nx^n$ with $a_n\ne0$. Its **content** is the iterated nonnegative integer gcd

$$ \operatorname{cont}(f):=\gcd(\cdots\gcd(\gcd(0,a_0),a_1)\cdots,a_n), $$

using the integer gcd of [[def-common-divisor-and-gcd]]. The result is positive because not every coefficient is zero. The polynomial $f$ is **primitive** when $\operatorname{cont}(f)=1$. Set $\operatorname{cont}(0):=0$, but do not call the zero polynomial primitive.

The value does not depend on appending trailing zero coefficients, and [[lem-content-divisibility-characterisation]] proves its universal common-divisor characterization.
