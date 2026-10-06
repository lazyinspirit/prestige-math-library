---
id: rem-elementary-moves-do-not-constitute-full-cerf-theory-here
kind: remark
title: Elementary moves do not constitute full Cerf theory here
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 9
deps:
- def-geometric-cancelling-handle-pair
- thm-handle-cancellation
- thm-creation-of-a-cancelling-handle-pair
- def-handle-slide-of-one-k-handle-over-another
- lem-handle-slides-preserve-the-relative-diffeomorphism-type
- lem-algebraic-cancellation-does-not-yet-give-geometric-cancellation
- prop-morse-cancellation-criterion-via-a-unique-connecting-orbit
justified_by: []
forward_refs:
- thm-high-dimensional-whitney-trick
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
  - title: C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156; complete PDF)
    url: https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf
    locator: §5.4, printed pp. 143-148 (the elementary modifications only), with §§5.5-5.6 deferred
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow; scanned edition
      with text layer)
    url: https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: §§4-6, printed pp. 37-79 (rearrangement, cancellation and the second cancellation hypothesis)
verification:
  precheck: pass
---

## Remarks

This page records only the elementary moves: introduction and cancellation of a complementary pair of consecutive indices (birth and death), handle slides (handle additions), and the elementary matrix operations they induce on the attaching-belt intersection matrix. It does not construct a one-parameter family of Morse functions, does not assert that any two Morse functions or handle presentations of a cobordism are connected by finitely many of these moves, and does not develop Cerf theory, pseudo-isotopy or the classification of one-parameter families. The removal of excess geometric intersections by ambient isotopy (the Whitney trick) is likewise not available here: the cancellation theorem is proved only under its exact single-transverse-intersection hypothesis.

This remark fixes the proof boundary of the page and is not an existence or classification statement, with no separate proof. The excess-intersection step is deferred, as recorded in the coverage of this pair, to [[thm-high-dimensional-whitney-trick|the Whitney trick and surgery below the middle dimension]], because the cancellation theorem and its local model are proved here only under the exact single-transverse-intersection hypothesis.
