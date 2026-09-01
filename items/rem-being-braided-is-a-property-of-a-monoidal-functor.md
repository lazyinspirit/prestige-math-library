---
id: rem-being-braided-is-a-property-of-a-monoidal-functor
kind: remark
title: "Being braided is a property of a strong monoidal functor"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-braided-monoidal-functor]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Remark 8.1.8"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Remark

For a fixed strong monoidal functor, no extra coherence map has to be chosen in
order to make it braided: one merely checks whether the already chosen tensor
constraint satisfies the compatibility equation from
[[def-braided-monoidal-functor]]. In that sense, braidedness is a property of a
strong monoidal functor rather than a second layer of structure.
