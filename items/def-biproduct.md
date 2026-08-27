---
id: def-biproduct
kind: definition
title: "Biproduct"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-canonical-morphism-from-a-finite-coproduct-to-a-finite-product]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-08-27
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.3: Preadditive and additive categories"
      url: "https://stacks.math.columbia.edu/tag/09SE"
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.2"
      url: "https://link.springer.com/book/10.1007/978-1-4757-4721-8"
pipeline_run: frontier-20
---

## Definition

A finite family $(A_i)_{i\in I}$ in a category with zero morphisms has a
**biproduct** when both its coproduct and its product exist and the canonical morphism from the
coproduct to the product is an isomorphism
([[def-canonical-morphism-from-a-finite-coproduct-to-a-finite-product]]).

When this happens, either object may be written

$$\bigoplus_{i\in I}A_i,$$

since the canonical comparison identifies them uniquely. For two objects one
writes $A\oplus B$, and for the empty family one speaks of the **empty
biproduct**.

Transporting the product structure across the canonical comparison to the
coproduct object makes that comparison the identity. The resulting common
object, injections, and projections form the associated **biproduct diagram**;
this is the convention used whenever both kinds of structure maps are written
on one displayed object.
