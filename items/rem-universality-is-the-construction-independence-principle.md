---
id: rem-universality-is-the-construction-independence-principle
kind: remark
title: "Universality is the construction-independence principle"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-derived-functors-are-universal-delta-functors, cor-a-morphism-between-universal-delta-functors-is-determined-in-degree-zero, def-balanced-derived-bifunctor]
verification:
  audited: 2026-09-05
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
    - title: "Alexandre Grothendieck, Some aspects of homological algebra (Barr translation)"
      url: "https://ncatlab.org/nlab/files/BarrTranslOf-GrothedieckTohoku.pdf"
pipeline_run: frontier-30
---

## Remark

Universality is what turns a higher-degree construction into an invariant of
its degree-zero functor. By
[[thm-derived-functors-are-universal-delta-functors]], derived functors have
that property once their delta-functor structure has been built; by
[[cor-a-morphism-between-universal-delta-functors-is-determined-in-degree-zero]],
any later comparison is forced as soon as degree zero is understood.

That is the principle used on later balance pages such as
[[def-balanced-derived-bifunctor]]: first construct a degree-zero agreement
between two candidate models, then use universality to conclude that every
higher comparison is forced. Universality does not replace the earlier need to
define the constructions honestly.
