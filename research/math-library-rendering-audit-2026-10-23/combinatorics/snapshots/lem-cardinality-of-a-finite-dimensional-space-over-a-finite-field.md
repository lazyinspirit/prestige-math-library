---
id: lem-cardinality-of-a-finite-dimensional-space-over-a-finite-field
kind: lemma
title: "A $d$-dimensional vector space over a field with $q$ elements has exactly $q^{d}$ elements"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-vector-space, def-dimension, def-linear-basis, thm-unique-coordinates-with-respect-to-an-ordered-basis, thm-cardinality-of-a-set-of-functions, def-nat-power, def-finite-cardinality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §2.3.2"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
pipeline_run: null
---

## Statement

Let $F$ be a finite field with $q$ elements, and let $V$ be a $d$-dimensional
$F$-vector space. Then

$$\lvert V\rvert=q^d.$$

## Facts & Assumptions

**Given:** a finite field $F$ with $q$ elements, and a $d$-dimensional vector space $V$ over $F$.

[F1] Choosing an ordered basis of length $d$ gives a unique coordinate vector in $F^d$ for every element of $V$ ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]).

[F2] The set of functions from a $d$-element set to a $q$-element set has cardinality $q^d$ ([[thm-cardinality-of-a-set-of-functions]], [[def-nat-power]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], an ordered basis of $V$ identifies $V$ bijectively with $F^d$. [F1]

2.1 Since $F$ has $q$ elements, [F2] gives $\lvert F^d\rvert=q^d$. Transporting cardinality along the bijection of step 1.1 gives $\lvert V\rvert=q^d$. [F2, step 1.1] ∎

## Remarks

- The boundary case $d=0$ is included: the zero-dimensional vector space has one element and $q^0=1$.
