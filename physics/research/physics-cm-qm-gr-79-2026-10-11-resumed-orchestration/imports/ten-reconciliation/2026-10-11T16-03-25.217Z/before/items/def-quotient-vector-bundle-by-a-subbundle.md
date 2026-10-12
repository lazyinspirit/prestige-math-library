---
id: def-quotient-vector-bundle-by-a-subbundle
kind: definition
title: "Quotient vector bundles by a subbundle"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-vector-subbundle]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-31
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---
## Definition

Let $S\subseteq E$ be a smooth vector subbundle of a smooth vector bundle
$E\to M$. The **quotient bundle set** $E/S\to M$ has fibre

$$(E/S)_p:=E_p/S_p$$

over each $p\in M$.

Its total space is the disjoint union of these fibrewise quotients. The next
theorem shows that this fibrewise construction carries a natural smooth
vector-bundle structure.
