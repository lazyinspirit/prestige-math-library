# Frontier-22 published dual and Hom bundle audit

Date: 2026-09-11

## Scope and deduplication

This bounded pass reads the active dual/Hom construction, its direct published
consumer and eight exact algebraic, bundle and gluing interfaces:

| Published item | SHA-256 |
|---|---|
| `thm-dual-and-hom-transition-functions-define-smooth-bundles` | `80355b5cb38eee77967392f22daa387f85b7a170f922ac2e6921a59dd9e93d17` |
| `prop-sections-of-hom-are-the-same-as-smooth-fibrewise-linear-maps` | `f037212587f305354ff1c8ee4bd830394b85e00c220638ade807e6b8a7304603` |
| `def-dual-and-hom-vector-bundles` | `4eb76bec2e73b5e64710bed1c04a2fbe9f5aea221192f2780b34f270ae416b16` |
| `def-vector-bundle-chart-and-transition-function` | `acadbe38fac6f7913501aa1c7adb562be9365749020b93e6173495be20327ddd` |
| `def-transpose-of-a-linear-map` | `6dd14b9eb9b5302a9def459d3d345876b18507bcbc081761b23ac1ec6f8882fd` |
| `thm-matrix-of-transpose-is-the-transposed-matrix` | `51372a5b6e39864458d20c65796958e871255102f2589af9304c41ad037dc989` |
| `thm-real-square-matrix-invertible-iff-determinant-nonzero` | `8fa9f52caeb3332d10917999b5ff7c3b4717dd2c4c3ced64496c9a491a3f1f4b` |
| `thm-vector-bundle-construction-from-a-smooth-cocycle` | `2713c900ce513b24100a9d1b19c7d9b7dfca875edc8f725443a52c439bebadb8` |
| `lem-vector-bundle-transition-functions-satisfy-the-cocycle-identities` | `c0fe311000d1d5021929fb1cdaef4c97f2163eb70ef7bd4f24b9a522ddc77666` |
| `lem-matrix-inversion-preserves-ck-regularity` | `608a8bb3bf9a62df8fdc5314007e87145cbe556cecb70ea7ef95a908fd3ffe8e` |

All ten files have empty or absent alias lists. Before classification, the
complete canonical ledger was searched by every exact ID and by dual bundle,
Hom bundle, inverse-transpose transition, smooth matrix inversion, cocycle
gluing, supplied countable trivializing cover and second-countability
mechanisms. None had a classification row or earlier item-specific finding.

## Confirmed published gap

`thm-dual-and-hom-transition-functions-define-smooth-bundles`, proof 2.1,
correctly derives the fibre-coordinate formulas
`(g_(beta alpha)^(-1))^T` and
`B -> h_(beta alpha) B g_(beta alpha)^(-1)`. Smooth inversion is also a
correct implicit use of the adequate published
`lem-matrix-inversion-preserves-ck-regularity` for positive rank, with the
rank-zero map uniquely constant. The original transition cocycle identities
give the induced dual and Hom cocycles by finite matrix algebra.

The last sentence nevertheless does not prove its full conclusion. It says
that smooth compatible overlap formulas “define smooth bundle atlases” on the
fibrewise unions, but constructs neither their topology nor the
second-countable smooth total spaces required by the published manifold and
bundle definitions. The adequate published gluing result
`thm-vector-bundle-construction-from-a-smooth-cocycle` requires a **supplied
countable** open cover. The hypotheses here provide arbitrary trivializing
covers for `E` and `F`, with no countable subcover or choice hypothesis.
Under the library's explicit ZF convention, extracting countable subcovers
from the second-countable base uses the published, countable-choice-qualified
`thm-second-countable-implies-lindelof`. Compatibility of arbitrary local
charts alone does not establish second countability of the new total spaces.

This is a proof/prerequisite gap; no independence or necessity claim is made.
One repair is to add `def-countable-choice`, take countable subcovers of the
common refinement of the `E` and `F` trivializing covers, check the induced
cocycles, and apply `thm-vector-bundle-construction-from-a-smooth-cocycle`.
Declare `lem-matrix-inversion-preserves-ck-regularity` for the smooth inverse
matrices and identify the quotient cocycle fibres with the stated fibrewise
sets.

A subsequent active-frontier audit supplied a complete choice-free alternative
in `research/phase-2-next-20-hom-bundle-local-repair-plan.md`. For positive
source rank `r`, let `D` be the subspace of `E^r times F^r` consisting of a
common-base-point source frame and arbitrary image tuple. Finite products of
one supplied countable basis of each total space give `D` a countable basis.
The surjection `q:D -> Hom(E,F)` sends a frame/image tuple to its unique linear
map. In common local trivializations it is
`(p,C,V) -> (p,V C^(-1))`, an open quotient after a homeomorphism and coordinate
projection. Images of the countable `D`-basis form a countable basis of the
quotient. These quotient charts are Hausdorff and have the correct smooth
conjugation changes; zero ranks are separate canonical bundles. This route
needs no simultaneous frame selection or choice axiom. It can be inlined in
the published theorem using existing elementary topology, bundle and smooth-
matrix interfaces. All suppliers needed by either repair route are published,
so no new Phase-2 pair is needed.

`prop-sections-of-hom-are-the-same-as-smooth-fibrewise-linear-maps` directly
uses the affected smooth Hom-bundle existence clause. Its local matrix
bijection and smoothness comparison are sound, and no separate defect was
found. It remains a U-P direct impact candidate until the supplier's repaired
choice contract is propagated or a choice-free construction is supplied.

The same clause was live in the draft definitions of a connection and dual
connection, the draft difference-of-connections proposition and the draft
finite tensor-product lemma. After the live Step-5b lead exited, the authorized
choice-free construction above was installed in all four drafts. All four now
route through the local construction rather than cite the affected published
existence clause. The exact 62 post-5a affected consumers were read in full and
their unchanged local matrix, pairing, currying, transport and coordinate uses
were reconciled. The requested focused and global checks passed. Thus the
published A-P gap remains open, but there is no unresolved current-frontier
mathematical prerequisite. Draft IDs are not entered in the published-item
index, and a draft repair does not close this published finding. Completion
evidence: `research/phase-2-next-20-hom-bundle-repair-completion.md`.

## Bounded clears

The remaining eight published targets are clear in the inspected scopes.
The fibrewise dual/Hom definition deliberately defers smooth structure to the
following theorem. Bundle charts and transition orientations are coherent.
Algebraic transpose and its matrix formula give the inverse-transpose law.
The determinant/RREF theorem correctly characterizes positive-size real
invertibility. Matrix inversion has the complete adjugate, determinant and
reciprocal regularity proof. Original bundle transitions satisfy the identity
and triple-overlap laws. Finally, the cocycle construction is sound under its
stated supplied-countable-cover hypothesis: the saturated quotient charts are
homeomorphisms, their overlaps are smooth, and the countable product-chart
bases make the quotient total space second countable.

Classification: one new A-P target, one new U-P direct impact candidate and
eight new bounded no-repair-needed dispositions.

## Limits

This pass certifies only the ten complete targets and the exact lower
interfaces above. It does not certify every dual, tensor or connection
consumer, nor prove that countable choice is logically necessary for every
possible construction. No external source was newly consulted, no published
item was edited, and no independent judgment or exhaustive discovery claim is
made.
