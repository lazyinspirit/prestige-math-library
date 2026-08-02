---
id: def-prime-and-maximal-ideals
kind: definition
title: 'Prime ideals and maximal ideals in a commutative ring'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-left-right-and-two-sided-ideal, def-commutative-ring, def-maximal-element]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Ernst, An Inquiry-Based Approach to Abstract Algebra, Maximal and Prime Ideals"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/An_Inquiry-Based_Approach_to_Abstract_Algebra_%28Ernst%29/08%3A_An_Introduction_to_Rings/8.04%3A_Maximal_and_Prime_Ideals"
pipeline_run: null
---

## Definition

Prime ideals and maximal ideals in a commutative ring.

Let $R$ be a commutative ring. A proper ideal $P\subsetneq R$ is **prime** when
$ab\in P$ implies $a\in P$ or $b\in P$. A proper ideal $M\subsetneq R$ is
**maximal** when there is no proper ideal strictly between $M$ and $R$; equivalently,
it is a maximal element of the poset of proper ideals ordered by inclusion.
