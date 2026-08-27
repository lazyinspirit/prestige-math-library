---
id: def-semiadditive-category
kind: definition
title: "Semiadditive category"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-biproduct, prop-the-empty-biproduct-is-a-zero-object, thm-a-category-with-finite-biproducts-is-enriched-in-commutative-monoids]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Merlin Christ, Tobias Dyckerhoff, and Tashi Walde, Lax Additivity, Definition 2.1"
      url: "https://www.edit.fis.uni-hamburg.de/ws/files/59475679/2402.12251v1.pdf"
pipeline_run: frontier-20
---

## Definition

A category is **semiadditive** when it has all finite biproducts
([[def-biproduct]]). Equivalently, it has a zero object
([[prop-the-empty-biproduct-is-a-zero-object]]) and binary biproducts, and then
each hom-set carries the canonical commutative-monoid structure of
[[thm-a-category-with-finite-biproducts-is-enriched-in-commutative-monoids]].
