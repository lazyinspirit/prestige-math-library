# Owner terminal decision: rank-zero Thom Euler definition

Run: `phase-2-remaining-27`

Item: `def-thom-euler-class-of-an-oriented-vector-bundle`

Decision: **accepted after review; no further item edit**.

The current Terra rejection proposes `o=0` over a nonzero coefficient ring as
a counterexample to the rank-zero clause. That class is outside the hypothesis:
the supplied orientation is a section whose value generates the free rank-one
orientation stalk on every fiber. For a rank-zero bundle the stalk is `R`, so
its value must be a unit. The current item already states the standard-unit
specialization separately and, for an arbitrary supplied rank-zero orientation
`o`, states `u=o` and `e_Th(0_B,o)=o`. Thus the standard orientation gives `1`
and the reversed integral orientation gives `-1`; the rejected witness `0` is
not an orientation unless the coefficient ring is the zero ring, where `0=1`
and the formula remains consistent.

This adopts the independent final-adjudicator analysis in
`research/phase-2-remaining-27-step7-fa-b-item-d7624f96c53e19bb-evidence.md`.
That review read the complete current item and its suppliers and verified the
normalization, Euler composite, orientation dependence, and pullback argument
against Allen Hatcher, *Vector Bundles and K-Theory*, printed pp. 88 and 91:
https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf

The item bytes are intentionally unchanged. Focused prosecheck passed with no
errors or warnings, and the item-local final-adjudicator dispatch completed
successfully as `gpt-6-astra` at medium effort.
