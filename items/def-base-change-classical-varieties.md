---
id: def-base-change-classical-varieties
kind: definition
title: Base change of classical varieties when the pullback exists
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-pullbacks-and-pushouts]
sources:
  scraped: []
  references:
    - title: J. S. Milne, Algebraic Geometry, §5i Fibred products and Notes 5.32
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
verification:
  precheck: n/a
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-09
    scope: "Owner-authorized local definition/dependency repair; no independent judge or owner audit"
    delegated_by: owner
---

## Definition

Fix a category $\mathcal C$ of classical algebraic objects with its specified
morphisms. For morphisms $f:X\to S$ and $g:T\to S$ in $\mathcal C$, a
**classical base change**, when it exists, is the pullback of
[[def-pullbacks-and-pushouts]] in $\mathcal C$: an object $X\times_ST$ with
morphisms to $X,T$ commuting over $S$, universal among all commuting pairs
from objects of that same category. This is a conditional definition and
uses no product-existence theorem. A closed
equalizer locus in an already-constructed product is only a candidate until
both its algebraic-set structure and this universal property have been checked
in the chosen category. In particular, an affine-variety product theorem does
not by itself construct a reducible equalizer in the larger algebraic-set
category. In a category allowing reducible or empty algebraic sets, a base
change can have either feature; in a category restricted to nonempty
irreducible varieties, any pullback must itself meet that restriction and
its existence must be checked there. No assertion of arbitrary classical
or scheme fibre-product existence is made.
