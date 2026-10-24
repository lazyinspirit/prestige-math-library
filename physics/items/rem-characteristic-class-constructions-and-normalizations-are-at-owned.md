---
id: rem-characteristic-class-constructions-and-normalizations-are-at-owned
kind: remark
title: "Characteristic-class constructions and normalizations are owned by algebraic topology"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-stiefel-whitney-classes-from-the-projective-bundle-relation, def-pontryagin-classes-by-complexification, def-thom-class-by-fiberwise-normalization, thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes, def-stiefel-whitney-number-of-a-closed-manifold, def-pontryagin-number-of-a-closed-oriented-manifold]
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (original pagination; chapters 16-18 of the re-typeset scan)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "Chapters 8-16, printed pp. 87-198: the universal constructions and normalizations"
    - title: "Tom Weston, An Introduction to Cobordism Theory"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "Sections 9-17, printed pp. 15-34: the same constructions in the cobordism normalization"
dependency_level: 0
---

## Interface

The Stiefel-Whitney, Chern, Pontryagin and Euler classes, the Thom class, and
the universal Whitney-sum and naturality identities used on this page are
constructed and proved on the algebraic-topology pages
stiefel-whitney-and-euler-classes-by-universal-constructions,
chern-and-pontryagin-classes-by-splitting-and-complexification and
leray-hirsch-thom-isomorphism-and-gysin-sequences. This page does not
construct them again: it cites the exact item ids, in particular
[[def-stiefel-whitney-classes-from-the-projective-bundle-relation]],
[[def-pontryagin-classes-by-complexification]],
[[def-thom-class-by-fiberwise-normalization]] and
[[thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes]], and
uses the published normalization conventions: the complexification convention
$p_i(E)=(-1)^ic_{2i}(E_{\mathbb C})$ for Pontryagin classes and the sign
carried by the Euler class under orientation reversal. It never appeals to
differential-form representatives. The Stiefel-Whitney and Pontryagin numbers
[[def-stiefel-whitney-number-of-a-closed-manifold]],
[[def-pontryagin-number-of-a-closed-oriented-manifold]] are the published
evaluations on fundamental classes; this page adds their evaluations and boundary/product computations, as well as the Pontryagin-Thom and bordism-detection arguments. No
choice principle is used beyond the AC inherited from those pages, and this
remark is not a proof input to any item.
