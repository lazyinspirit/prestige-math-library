---
id: "def-geometrically-reduced-integral-connected-fibre"
kind: "definition"
title: "Geometric properties of fibres"
status: published
origin: "pipeline"
deps: ["def-geometric-fibre", "lem-geometric-fibre-choice-independent", "def-integral-scheme", "def-connected-space", "def-reduction-of-scheme"]
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Vakil 10.4.3 and table preceding 10.4.K"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGmar3111public.pdf"
---

## Definition

For a morphism $X\to S$ and $s\in S$, call $X_s$ **geometrically reduced**, **geometrically irreducible**, **geometrically integral**, or **geometrically connected** when the chosen algebraic-closure fibre of [[def-geometric-fibre]] has the corresponding property. Reduced means all local rings have no nonzero nilpotents, equivalently its reduction from [[def-reduction-of-scheme]] is itself. Irreducible here requires a nonempty space not expressible as a union of two proper closed subsets. Integral means reduced and irreducible, with nonemptiness, as in [[def-integral-scheme]]. Connected means no separation into two nonempty disjoint open subsets, as in [[def-connected-space]]. Thus an empty geometric fibre is reduced and connected, but neither irreducible nor integral.

Under Choice, [[lem-geometric-fibre-choice-independent]] makes these tests independent of the choice of algebraic closure. This page uses these closure tests as its convention; an equivalence with tests over every extension field is not needed in the proofs here.
