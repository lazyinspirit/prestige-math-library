# Published HG planar filling audit — 2026-09-11

This bounded audit continues the active HG route below the cone/minsize batch.
It reads the complete current bodies of the eight classified items below,
including the finite planar surgery, literal relator folding, coarse disk
thickening, affine boundary crossing and final linear-area calculation. It does
not certify every group, topology or real-area dependency and does not claim a
full HG-package audit. No published item was edited.

## Deduplication and artifacts

The whole canonical ledger was searched by all eight exact IDs and aliases,
the edge-refinement, singular-diagram, polygonal-disk, boundary-crossing,
complete-occurrence folding, thickening-count and linear-relator mechanisms,
and all immediate supplier IDs. None had a classification row or alias. Older
plan prose mentions only the top theorem while it was planned/unpublished and
contains no published defect finding; the current row reconciles that mention
without copying operational history.

Current SHA-256 values are:

- `def-bounded-edge-coarse-triangular-filling`:
  `a72078426f982ec64e8ba677adec0d6051b5fcfb4301df86552ec678e7350893`;
- `def-singular-planar-labelled-relator-diagram`:
  `c4b48ed5a0fd2559976f79048059b4a828329992648b091afe33a37eb00f3845`;
- `lem-finite-polygonal-disk-and-collar-surgery`:
  `3d3fd526a51619e3f0498672d28a528c9159fb2ef5288368b0a1e4172a40dc72`;
- `lem-polygonal-boundary-crossing-for-affine-disk-maps`:
  `c6ca8dddba92756a65e371621f964c704d9416d495c2b659308dc0cce12e1019`;
- `lem-relator-expressions-give-controlled-singular-planar-diagrams`:
  `d13416fbb43cf170fbb64965e2aff4831f88b2bdb8ebd8aed7921b178bc3d4e3`;
- `lem-singular-planar-diagrams-have-controlled-coarse-disk-thickenings`:
  `4b6eebd68d90ab07bbbf5d6269d71b5f6844bcc188ad764049159277626c4448`;
- `lem-relator-disks-give-area-controlled-coarse-fillings`:
  `fe71852727f3ea44a978cd546e5f281fa9d0c7ddf96b7f5f9519da7d7af5aede`;
- `thm-linear-relator-area-implies-slim-geodesic-triangles`:
  `a227ea19ead8c0396e9878ab2af72f25123b78d74a77fca732e858243cc0bd3e`.

## Definitions and finite planar interfaces

The coarse-filling definition distinguishes exact boundary lists from
repetition refinements, retains corner occurrences on marked arcs and treats a
length-zero loop as a singleton list. It requires only a vertex map, so no
continuous filling into the target metric space is imported. The singular
diagram definition likewise distinguishes edge occurrences, shores, loop germs,
thin edges and bridges and fixes the outer-walk orientation. These conventions
match every later use.

The finite polygonal surgery lemma gives the required local disk and band
models. Its parity argument separates a simple polygon; finite diagonal
induction and matching convex fans give prescribed-boundary PL disk
extensions. Disjoint vertex disks and edge bands form a compact planar surface
whose unique outer boundary and finitely many inner boundaries are identified
by the local two-sided charts; filling the inner circles yields a disk. Loops
retain two attachment germs. No ambient-plane extension is asserted.

The affine crossing lemma uses oriented triangle crossing counts, with internal
edges cancelling and degenerate triangles contributing zero. Coordinate
clamping deforms the three boundary arcs outside the test point to the square
boundary, whose nonzero winding/crossing count forces coverage. Generic points
are dense off the finitely many supporting lines, and the finite union of
closed image triangles closes the argument. Polygonal subdivision gives union
area at most the sum of triangle areas, hence `h^2<=Nr^2`.

## Literal folding, thickening and final bound

The relator-expression lemma operates on complete labelled occurrences. Its
two disk charts fold a distinct inverse pair without a doubled-slit boundary;
loop and equal-endpoint cases complete the auxiliary collapse before assigning
new labelled data. The circle case deletes whole edges and whole faces, and a
terminal spur has both exterior shores. Face peeling preserves contractibility.
Restoring the literal unreduced word adds only terminal spurs. Occupied edges
are counted by incidence, while every thin bridge occurs twice on the outer
walk, giving `E<=I+n/2<=Lm+n` independently of conjugator lengths.

The thickening lemma gives compatible vertex-disk, edge-band and face-cap fans.
The counts are `8E`, `8E` and `4I`, including loops, monogons and bigons; the
isolated zero-edge case adds four triangles. Cap edges span at most one relator
length, band edges at most one, so the edge bound is `max(1,L)` and the boundary
is exactly a repetition refinement.

The coarse-filling theorem chooses a minimum-length relator expression by
well-ordering, applies those two constructions and obtains
`N<=20(L+1)(m+n+1)`. For an arbitrary geodesic triangle, fixed choices of one
incident endpoint at each corner make the three side paths consistent; after
partial-edge cancellation they are whole-edge paths of total length at most
`P+6` and their finite vertex sets are within three of the original sides.

Finally, the linear-area theorem substitutes `m<=Kn` and `n<=P+6` into that
count, applies the separately cleared square-root minsize lemma and obtains the
printed `A(K,L)` and `B(L)`. Its explicit epsilon bound makes the profile
sublinear, and the separately cleared AC-qualified cone criterion supplies a
finite slimness constant. Zero constants and `P=0` are included.

## Disposition

All eight items receive bounded no-repair-needed dispositions in the exact
active route. They create no live HG blocker or new Phase-2 pair. This remains
a bounded clause audit rather than exhaustive certification of every lower
supplier.
