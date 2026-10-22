# A finite-family controlled Whitney operation in a smooth five-manifold

This is a new finite operation for the smooth six-dimensional handle stages.
It is not obtained by rereading a repaired provider's proof. The retained
Statements consulted are:

- `lem-opposite-local-signs-give-the-compatible-whitney-circle-framing`,
  providing the adjustable rank-(a−1), rank-(b−1) boundary splitting for a
  supplied clean bigon, under Countable Choice;
- `thm-whitney-move-removes-a-cancelling-pair-of-intersections`, providing
  the compact local move from an actual clean admissibly framed bigon,
  under Countable Choice.

For the category interface only, the retained Definition of
`def-whitney-disk-and-clean-framed-whitney-disk` makes the disk a smooth
cornered map with local smooth extensions and its extended normal frame
smooth. The Statement of
`lem-a-clean-framed-whitney-bigon-has-an-adapted-tube` (Countable Choice)
gives the arbitrarily thin adapted product tube for those actual smooth
data. Thus this operation remains in DIFF, including its local tube and
Whitney move. These Definitions/Statements alone were consulted; no proof
or provider verification was read.

The existing general-position clean-disk Statement excludes codimension two
and is not used. The borderline theorem's Statement establishes why a
complement-injection hypothesis is necessary, but its absent control clause
is not inferred. The clean disk and framing are constructed below instead.

## Exact data

Let X be a smooth five-manifold, containing finite disjoint embedded oriented
two-spheres A_i and finite disjoint embedded three-spheres B_j with oriented
normal two-plane bundles. All intersections are transverse. Suppose

π₁(X−⋃B_j) → π₁(X)

is injective in the component under consideration. Let p,q∈A_i∩B_j be a
pair of opposite signs with an actual Whitney circle γ, formed by embedded
arcs in A_i and B_j whose interiors avoid every other intersection with the
finite sphere families. Supply a nullhomotopy of γ in X. A_i and B_j need
not have trivial fundamental group for this operation; the spheres are the
handle application. Suppose all these objects, and the complement contraction
used below, lie in a specified open control neighborhood X⁺.

The needed injection must hold in X⁺, not only in X. The preceding
`trivial-two-handle-belt-complement.md` proves it when X⁺ is obtained from an
open original level by two-handle surgeries whose attaching loops have actual
nullhomotopies inside that open level. The full nullhomotopies and tubes must
be present there. These are substantive inputs.

## Construct the clean disk before invoking the local move

Push the B_j arc slightly in its normal two-plane bundle, and adjust the
ends and the A_i arc in their standard transverse corner charts, to obtain
a loop γ′ in X⁺−⋃B_j. An oriented two-plane bundle on an interval is
trivial; nonzero normal endpoint vectors are joined in its punctured plane.
Thus this push-off exists without a global normal trivialization. It is
homotopic to γ in X⁺ by scaling that normal displacement to zero.
Consequently γ′ is nullhomotopic in X⁺. Complement injection now supplies
an actual nullhomotopy of γ′ entirely in X⁺−⋃B_j. A meridian obstruction
has not been dismissed by a dimension count: it is removed by this precise
group-theoretic input.

Attach the thin push-off annulus back to the original Whitney circle,
using the two transverse coordinate-plane corner models. This gives a disk
map with an embedded clean boundary collar: its boundary is γ, its interior
collar avoids all the A- and B-sheets, and the only boundary-sheet contacts
are the designated arcs. Along each arc one chooses the inward collar on
the side prescribed by the bigon model. Opposite corner signs give the
compatible two ends; the adjustable boundary splitting in the retained
framing contract uses exactly those corner choices. Since the arc interiors
avoid the other intersection points, the collar is also disjoint from every
other sheet of both finite families. All of this is contained in X⁺.

Smooth the remaining disk map relative to a smaller fixed collar and put
its interior in general position in the complement X⁺−⋃B_j. Relative
general position can be implemented on finitely many interior coordinate
patches, leaving the fixed compact collar untouched. The disk's self-double
dimension is 2+2−5=−1, and its dimension of intersection with any of the
two-dimensional A-sheets is also −1. It is therefore an embedded disk with
interior disjoint from every A_i, while remaining in the open complement
of every B_j. Its image is compact. These negative dimension counts are
used only after the contraction has been obtained in the B-complement;
they are not used to push a disk off a codimension-two B-sheet.

This is an actual clean embedded Whitney bigon W, relative to its protected
corner collars and avoiding the whole finite family except along its two
specified sheet arcs. Compactness permits the final perturbations and the
eventual tube to remain inside X⁺.

## Correct the rank-three normal framing

The retained opposite-sign contract gives an admissible orthogonal boundary
splitting of νW of ranks one and two, with fixed corner collars. The
oriented rank-three disk-normal bundle is trivial over the disk. Relative
to any global oriented normal frame, the chosen full boundary frame has
an obstruction in π₁(SO(3))=Z/2. Rotating the rank-two summand along an
arc away from the corner collars changes this obstruction by the image of
π₁(SO(2))→π₁(SO(3)). This map is onto: a full planar 2π rotation lifts
in the unit-quaternion double cover of SO(3) to a path from 1 to −1, so
represents the nontrivial element. A zero or one full rotation of that
rank-two summand therefore kills the obstruction.

This changes only the adjustable frame, not the clean disk or its sheets,
and leaves its corner values fixed. The corrected full boundary frame
extends over W because its loop class is zero. Thus W has an actual
admissible extended disk-normal frame. No assertion that every prescribed
frame extends is made. This supplies the codimension-two framing step,
rather than invoking the retained framing-correction lemma whose Statement
requires both sheet dimensions at least three.

Apply the retained local Whitney-move contract to this framed bigon. Choose
its supporting tube inside X⁺ and disjoint from the other sheets; compactness
and the clean-disk construction permit that choice. It changes A_i only in
the designated sheet patch, removes p and q, and creates no intersection
with any B_j or other A-sheet. The other A_i remain fixed. The resulting
operation is therefore valid for the finite family and can be repeated
over its finite collection of algebraically paired intersections.

If X⁺ projects into a control set of diameter η, the entire operation has
projected track diameter at most η. This is the claimed control mechanism:
the open neighborhood must already contain the actual complement contraction,
corner collars and disk. Global nullhomotopy plus a small initial Whitney
circle alone does not imply the needed controlled contraction. The operation
is available under Countable Choice, using the retained contracts and finitely
many relative smooth approximations and frame selections.
