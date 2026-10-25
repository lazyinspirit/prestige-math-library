---
id: "lem-classical-regular-functions-locality-and-gluing"
kind: "lemma"
title: "Classical regular functions satisfy locality and unique gluing"
status: published
origin: "pipeline"
deps: ["def-classical-regular-function-on-open-set"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, Proposition 3.9, p. 61"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
proof_strategy: direct
---

## Statement

Regular functions on opens in an affine algebraic set form unital $k$-algebras, have restriction homomorphisms, and glue uniquely from every compatible open cover. Regularity can be checked on an open cover.

## Facts & Assumptions

**Given:** An open $U$ in an affine algebraic set $X$ over algebraically closed $k$. For gluing, an open cover $U=\bigcup_iU_i$ and regular functions $s_i$ agreeing on overlaps.

[F1] Regularity means having a quotient expression near each point ([[def-classical-regular-function-on-open-set]]).

## Proof

**Proof technique:** direct.

1.1 Near a given point, intersect the neighbourhoods on which $s=g/h$ and $t=a/b$ with $h,b$ nowhere zero. Then $s+t=(gb+ah)/(hb)$, $st=ga/(hb)$, and $-s=-g/h$ on this intersection; the denominators are nonzero there. Constants are $c/1$. Pointwise ring laws therefore give a $k$-algebra, including the zero function algebra on the empty open. [F1, given, algebra]

2.1 Restricting a quotient expression to its intersection with a smaller open preserves regularity. Pointwise sums, products and constants restrict to themselves, so restriction is a unital algebra homomorphism; iterated restrictions agree. [F1, step 1.1]

3.1 Given $U=\bigcup_i U_i$ and regular $s_i$ with equal restrictions on every overlap, the union of their function graphs is a function $s:U\to k$: for a fixed point all available values coincide. On $U_i$ it equals $s_i$, hence near each point it has the quotient expression of that section. Thus it is regular. A function with these restrictions must have that same value at every point, proving uniqueness. For the empty cover of the empty open its graph is empty. [F1, given] ∎


## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, Proposition 3.9, p. 61. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
