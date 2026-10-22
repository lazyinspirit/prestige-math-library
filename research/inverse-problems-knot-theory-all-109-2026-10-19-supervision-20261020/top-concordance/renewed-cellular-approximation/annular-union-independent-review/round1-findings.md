# First independent review: annular-union local candidate

Read the complete frozen `annular-union-collapse-local-construction.md`,
sections 1–8. Sections 1–4 are its historical conditional stage; sections
5–8 are the new actual candidate. The author confirms this is the first
independent review. One focused repair and final changed-passage inspection
remain. No accepted supplier proof or separate Homma-arc construction was
reviewed.

New primary reading: the complete nine mathematical pages of Chernavsky2006
in the durable extracted text; printed pages 4,5,7 additionally inspected
in the rendered primary images. No chapter from another source or omitted
isolated-point import is claimed read. In particular the source's printed
formulas are not treated as automatic acceptance of this eight-sheet variant.

**Verdict: HOLD.** The eight-sheet local extension replacement is plausible
at the stipulated actual flat-chart/parametrization input, and the Cartesian
quotient formula has the correct local fibers. The following are actual
written gaps/incorrect assertions to resolve together.

## 1. The auxiliary separator is put on the wrong side

Section 6 places `pΠ_c` on the negative side of its angle c (after rescaling,
c=−π/4), then asks for a fence S2 arbitrarily close above Π_c whose image
lies in `(c,0)`. This does not follow. Continuity near a separator lying
strictly below c only gives a neighborhood whose image is still below c.
There need not be such a fence approaching Π_c with the displayed target
inequality. The side is not a cosmetic convention: that inequality is used
to keep the second move negative while retaining the prescribed support.

Place `pΠ_c` on the **positive** side of c, in `(c,0)`, and retain its
tangency. Then an actual sufficiently close source fence has image in that
same open target wedge. This is the side used by the primary's step on
printed page 5. Give the continuous trapping fences and the circlewise
one-sided placement, not just a pointwise ray assertion; state the reflected
version too. Keep the two endpoint images on the interior side of the right
half-space, so the finite/dense steps retain `p(R+)⊂R+` and their output
motions fix the left auxiliary disk. The direct cancellation formulas for
old separator images can then be reused.

## 2. Dense-angle normalization and the displayed collapse use different angles

Section 7 proves the full sequential angular condition only on
`[−π/2,π/2]`. Sections 1–3 require it on the left-side intervals
`[π/2,3π/4]` and their negatives. These do not follow from the stated dense
set. Eight initially controlled center rays do not control the intervening
left angles. Thus section 8 cannot yet apply sections 2–3 as written.

There is a concrete missing operation in the primary's Lemma 3.2 (printed
page 4), rather than a reason to assert a full-circle dense argument. Write
the actual **slit-sector** coordinate change. For example let χ be increasing
from `[−π,π]` onto `[−π/2,π/2]`, identity on `[−π/4,π/4]` and affine on
the remaining two intervals. On the formal closed cut sector it gives a
homeomorphism to the closed right sector, with the two ray banks distinct;
the actual slit uses the open angular intervals, with the equatorial point
restored. It is **not** an ambient circle homeomorphism. Define
the appropriate `p1=χ^−1 p2 χ` on the actual slit neighborhood, where p2 is
the restriction of the normalized embedding to the right sector. Verify its
domain, open-embedding property, agreement on D+, and sequential angular
condition needed by the Cartesian collapse. Since the relevant transformed
angles lie strictly inside the normalized sector, the inverse condition
can be obtained by compact subsequences and the forward condition there.

Track the fixed auxiliary disk as well: an ambient angular map may take the
standard negative disk to the auxiliary angle 3π/4 while fixing the entire
right half-space. Its inverse restores the standard disk without changing
the positive image. This is different from the slit-sector map above; do
not identify the two operations. The resulting collapsed chart must address
the actual transformed union, not merely the image of the negative input
under the branched lift.

## 3. Radius shrinking does not meet an arbitrary rapidly vanishing pointwise bound

Section 7 says that shrinking the working radial neighborhood gives each
level displacement below `2^(−ell)` times a prescribed spatial control
function vanishing on E. This is false for such a function as `r²` when the
required change moves a separator by a nonzero limiting angle. At input
radius r, moving through an angle bounded below costs at least a constant
times r, even if the output radius is allowed to change. Shrinking r cannot
make that cost less than a fixed multiple of r².

Use actual feasible compact-uniform error budgets (and their pullbacks by
the current inverse), or specify a control function with a proved adequate
radial modulus. All maps already fix E; compact-uniform convergence of both
products and inverse products can retain this fixation without the false
pointwise estimate. Preserve the larger equatorial buffer by genuine support
cutoffs. Show explicitly that the chosen radii make both successive products
Cauchy on the common domain and their inverses Cauchy on the common image.
The angular tail estimates are a different estimate and can still be used.

In the same passage, make the finite support-containment inference explicit:
the images of the two boundary separators lie in their narrow angular bands,
and a genuinely interior controlled separator labels the intervening local
component. Work over the smaller equatorial compactum with an actual larger
buffer so the component cannot be changed by exiting the chart. This is
what permits the stated dyadic working-interval estimate for the conjugated
supports and its inverse. Merely forward spatial closeness would not do it.

## 4. Restrict the quotient-complement assertion to its actual target

Section 2 asserts globally that w off D− maps onto `R5\E`, but w is identity
when |x|≥1. Points of E with |x|>1 are therefore still in that image. The
removed target is the projected closed equatorial unit disk, not all of
R3×{0}. Alternatively state and use only the local product with |x|<1 around
E0, where the claimed complement description is valid. This correction is
local and does not change the displayed interval fibers or inverse formulas.

## Reusable parts and limits

The fixed-x Cartesian map collapses exactly the stated interval and is
injective on its complement; its interior-sector inverse is as displayed.
With the exact angular input it gives the asserted local continuity on the
negative disk. The branched lift can be taken on the actual full punctured
neighborhood supplied by the flat chart; the chart should not be discarded
when its central wedge is narrowed. The deck-equivariant beta construction
then preserves eight sector translates and agrees with the original positive
extension on the central wedge. The replacement of that extension does not
itself claim agreement on a negative input disk, correctly.

The positive image and auxiliary-disk tracking, actual finite conjugations,
inverse limit, slit-sector conversion, and Cartesian chart must be bound in
that order in the repair. Until then this is not an accepted local union
supplier. No conclusion about isolated-point flattening, meridional caps or
full annular E1 follows even from acceptance of this local operation.
