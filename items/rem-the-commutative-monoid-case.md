---
id: rem-the-commutative-monoid-case
kind: remark
title: "The commutative-monoid enrichment of a semiadditive category remains only a sourced remark here"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-a-category-with-finite-biproducts-is-enriched-in-commutative-monoids, def-semiadditive-category]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Chapter VIII.2"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
    - title: "Peter Freyd, Abelian Categories, Exercise 2A.2"
      url: "https://www.tac.mta.ca/tac/reprints/articles/3/tr3.pdf"
---

## Remark

Every semiadditive category is enriched in commutative monoids. The
already-published theorem
[[thm-a-category-with-finite-biproducts-is-enriched-in-commutative-monoids]]
proves this implication, and [[def-semiadditive-category]] records the
underlying ordinary notion. The converse needs the additional existence of a
zero object and finite biproducts: enrichment in commutative monoids alone only
supplies commutative-monoid homs and bilinear composition.

This page keeps that comparison as a remark rather than promoting it to a local
theorem, because the present batch's harvested enriched-category sources are
Kelly, Riehl, Cruttwell, and the enriched-adjunction appendix, and none of
those sources was harvested here as the direct carrier for the full
semiadditive/$\mathbf{CMon}$ equivalence.
