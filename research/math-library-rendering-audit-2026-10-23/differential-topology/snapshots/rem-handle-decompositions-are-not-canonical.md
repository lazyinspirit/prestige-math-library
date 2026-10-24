---
id: rem-handle-decompositions-are-not-canonical
kind: remark
title: "Handle decompositions are not canonical"
status: published
origin: pipeline
dependency_level: 8
deps: [thm-morse-functions-and-handle-decompositions-correspond, thm-handle-duality-from-negating-a-morse-function, thm-morse-rearrangement-by-index, thm-self-indexing-morse-function-existence, lem-handles-of-equal-index-can-be-attached-on-one-level, prop-connected-cobordisms-admit-presentations-without-superfluous-zero-handles, prop-dual-elimination-of-top-index-handles, lem-product-cobordisms-have-critical-point-free-presentations, def-attaching-a-smooth-handle-with-corner-rounding]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "C. T. C. Wall, Differential Topology (Cambridge Studies in Advanced Mathematics 156), Sections 5.1-5.4, printed pp. 129-148"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/Wall.pdf"
    - title: "John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow), Sections 2-4, printed pp. 10-48"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
---

## Remark

Handle decompositions are not canonical: different Morse functions,
gradient-like fields, orderings of equal-index handles and choices of attaching
data on the same triad can give different presentations of the same diffeomorphism
type. Rearranging critical values, grouping equal-index handles, dualizing, and
eliminating endpoint handles all change the presentation while preserving the
underlying manifold. Consequently no invariant may be read from a presentation
without an invariance argument, and the elementary moves that compare
presentations (slides, cancellation, introduction of complementary pairs) are
not constructed on this page.

The non-canonicity is exhibited piece by piece by the items of this page. The
correspondence between Morse functions and presentations,
[[thm-morse-functions-and-handle-decompositions-correspond]], produces a
presentation from any adapted excellent Morse function, and different
functions, fields and admissible attaching embeddings can give different presentations of the
same $W$. Negating the function replaces every presentation by its dual,
[[thm-handle-duality-from-negating-a-morse-function]], reversing the order of
the handles and exchanging attaching and belt spheres. Rearranging the critical
levels by index, [[thm-morse-rearrangement-by-index]], and passing to a
self-indexed function, [[thm-self-indexing-morse-function-existence]], changes
the order in which the handles are attached and groups the handles of one index
at a single level, without changing $W$; reordering equal-index handles and
replacing an attaching embedding by an isotopic one is covered by
[[lem-handles-of-equal-index-can-be-attached-on-one-level]]. The two endpoint
eliminations, [[prop-connected-cobordisms-admit-presentations-without-superfluous-zero-handles]]
and [[prop-dual-elimination-of-top-index-handles]], delete or retain handles of
extreme index according to the incoming and outgoing boundary, so even the
number of handles in a presentation depends on the boundary data. Finally the
empty presentation of a product,
[[lem-product-cobordisms-have-critical-point-free-presentations|the product
presentation]], and the corner-rounding conventions of
[[def-attaching-a-smooth-handle-with-corner-rounding]] show that the attaching
data themselves are a choice: the framing and the rounding of a handle are part
of its presentation. Compatible changes of rounding preserve the diffeomorphism
type; changing a framing is different attaching data and can change that type.

The consequence recorded here is a warning, not a theorem: whenever an
invariant is computed from a presentation — a matrix, a chain complex, a
torsion class — its definition must be accompanied by invariance under the
moves that compare presentations. The construction of those elementary moves
(handle slides, cancellation of complementary pairs, introduction of a
cancelling pair, and the addition of handles) is not carried out on this page;
it belongs to the later development of handle calculus, and this remark only
records that such a calculus is necessary before any presentation-dependent
quantity can be called an invariant of the manifold. No new proof is given
here.
