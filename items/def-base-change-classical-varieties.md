---
id: def-base-change-classical-varieties
kind: definition
title: Base change of classical varieties when the pullback exists
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-product-varieties-universal-property, thm-affine-variety-product-coordinate-ring, cor-projective-variety-product-exists]
sources:
  scraped: []
  references:
    - title: J. S. Milne, Algebraic Geometry, §5i Fibred products and Notes 5.32
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Definition

For maps $f:X\to S$ and $g:T\to S$, a **classical base change** in a fixed
classical category is an object $X\times_ST$ with maps to $X,T$ commuting
over $S$, universal among all commuting pairs in that same category. A closed
equalizer locus in an already-constructed product is only a candidate until
both its algebraic-set structure and this universal property have been checked
in the chosen category. In particular, an affine-variety product theorem does
not by itself construct a reducible equalizer in the larger algebraic-set
category. A constructed base change need not be a variety: it can be reducible
or empty. This is not a definition of arbitrary classical or scheme fibre
products.
