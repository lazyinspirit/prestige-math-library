# Local mathematical repairs — 2026-09-08

The engine remains paused. These are source-backed scaffold repairs, not
publication approval or a certificate for every transitive published proof.
Published items and pages are unchanged.

## PDE-2D: surface-null edge cutoffs

Target: `lem-surface-null-edges-admit-small-gradient-cutoffs`.
The following supplies the missing local proof rather than attributing it to
Hunter's brief statement about piecewise smooth boundaries. Hunter §1.10
supplies the graph surface-density convention; §1.12 states the extension
but does not prove this cutoff lemma.
[Author-hosted notes](https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf).

Assume the scaffold's finite compact regular patch presentation in dimension
`n >= 2`, and its compact edge set `E`. Work on finitely many smaller parameter
boxes with closures inside the chart domains. Each chart map is Lipschitz on
its box, by its bounded derivative and the segment integral. Its surface
density is continuous and positive, hence bounded below on that closure.
Thus each preimage of `E` has `(n-1)`-dimensional Lebesgue measure zero.

Fix positive `delta` and `a`. The earlier cubic outer-measure lemma covers
those preimages by open parameter cubes of arbitrarily small side length
whose total `(n-1)`st powers are arbitrarily small. Refine within the chart
boxes. The Lipschitz bounds convert these to a cover of `E` by ambient balls
`B(c_j,r_j)` with centers in `E`, radii below `delta`, and
`sum r_j^(n-1) < a`. To avoid an unnecessary infinite selection, first use
compactness on the relative-open chart covers to retain finitely many cubes,
then choose a point of `E` in each retained nonempty cube image. Twice the
Lipschitz diameter is a valid ball radius. The finite choice and fixed chart
constants do not obstruct making the total smaller than any prescribed `a`.

Take a fixed smooth bump `b`, between zero and one, equal to one on the unit
ball and supported in the ball of radius two. This is the earlier scaled-bump
lemma, not a new analytic prerequisite. Set
`b_j(x)=b((x-c_j)/r_j)` and `eta=1-product_j(1-b_j)`.
Then `eta` is smooth, lies between zero and one, and equals one on a
neighbourhood of `E`. Its support lies within distance `2 delta` of `E`.
The finite product rule gives `|D eta| <= sum_j |D b_j|`. Linear change of
variables yields

`integral |D b_j| = r_j^(n-1) integral |D b|`.

Write `K=max(1,integral |D b|)`. Choosing `delta < epsilon/4` and
`a < epsilon/(2K)` proves `integral |D eta| < epsilon` and the required
support bound. Moreover the support volume is at most
`2^n volume(B_1) sum r_j^n <= 2^n volume(B_1) delta a`, which tends to zero
with these choices. The empty-edge case uses `eta=0`.

No Hausdorff measure, capacity, general Stokes theorem or finite-perimeter
theory is used. The four existing dependencies suffice: chart surface measure,
cubic null covers, scaled bumps and linear change of variables.

For the piecewise divergence theorem, apply the already scaffolded local
graph identity and finite partition to `(1-eta)F`, whose boundary support
avoids `E`. The bulk cutoff error is bounded by
`||F||_infinity integral |D eta|`; the omitted divergence term tends to zero
by the support-volume bound and bounded `div F`. The flux terms converge by
dominated convergence on the finitely many finite-area faces, since every
point off `E` eventually lies outside the support. Internal faces in a
specified gluing cancel by their opposite normals. This proves the precise
finite-face version, without pretending that boxes decompose into globally
smooth domains. It closes the local cutoff/extension argument; it does not
repair unrelated published change-of-variables proofs.

## AT-24: subdivision comparison ownership

Hatcher §2.1, printed pp.120–123, distinguishes geometric subdivision, linear
chains and general singular chains. The complete cone-boundary and chain-map
calculations were read in the author-hosted full text.
[Hatcher](https://pi.math.cornell.edu/~hatcher/AT/AT.pdf).

AT-24 constructs geometric subdivision and its oriented simplicial recursion.
It must not claim a comparison theorem appears on that page when none does.
The later AT-3 definition/theorem pair
`def-barycentric-subdivision-chain-operator` /
`thm-barycentric-subdivision-is-a-chain-map` owns the chain-model comparison:
construct the augmented ordered affine chain model, verify its cone identity,
and compare the signed characteristic-simplex subdivisions by induction.
Then push forward the standard-simplex chains to define the singular operator.
Do not identify oriented simplicial chains with the free group on all ordered
singular simplices, or omit the permutation/sign convention. If the chosen
characteristic maps do not give literal equality, prove the specified chain
homotopy instead; homology agreement does not imply chain equality.

This is an explicit later proof obligation, not an early prerequisite.
The corresponding published AT-3 proof is unchanged and its amendment remains
Phase 3. The false forward obligation on AT-24 is removed without discarding
the comparison mathematics or adding a duplicate singular-chain theory.

## Remaining work

Validation: batch 10's 43-item manifest passes content policy with zero errors
or warnings; `git diff --check` passes. The run-sync audit still reports
142 Phase-2 pairs, 20 active pairs and 430 proposed items, with zero metadata
drift, missing item IDs, undeclared item homes, external pending/draft item
suppliers or recorded-result paths. Its nonzero exit remains the previously
ledgered inherited page-prerequisite chains, not a new local regression.
`state.json` confirms `paused: true`; `items/` and `library/` have no diff.

These two dispositions do not close all batch objections. Quantitative
hyperbolic constants, planar-diagram setup, general-cardinal Erdős–Rado
ownership/proof, other incomplete full-source reads, and inherited published
proof defects retain their existing open status. No source receipt is stamped
as a complete read solely because a PDF fetched successfully.
