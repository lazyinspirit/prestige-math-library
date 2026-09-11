# Frontier-22 published manifold-null and normalization audit

Date: 2026-09-11

## Scope and deduplication

This bounded pass completes the remaining six U-C repair audits and follows the
exact manifold-null supplier path used by the weak Whitney theorem.

| Primary published item | SHA-256 |
|---|---|
| `def-c-zero-and-ell-infinity` | `6f2ea3b04dd31677a703be9ff89707897636454b260a13cc6a4d6c93b713030c` |
| `lem-normalizing-a-locally-finite-positive-smooth-family` | `cfc12c6da2aa90b756bfad7d220a09cdd9144aba3ba0cf2471b99a8de6c76a7c` |
| `thm-weak-whitney-proper-embedding-theorem` | `56c511514b209ec78fc40b295073621c01ed5094445f643ded02cc215dc0b687` |
| `prop-the-null-set-definition-is-independent-of-the-smooth-atlas` | `eb45dca5aad3137eb752d575b52c694c3925442e74dd51b69333dc7d5d441981` |
| `prop-every-smooth-manifold-admits-a-countable-smooth-atlas-with-relatively-compact-domains` | `97f9ba586702f01e4e5a27be30c74200e2b2af92fa5984c002c1c8b00714b483` |
| `prop-an-equidimensional-c1-map-sends-null-sets-to-null-sets` | `b853cb934bcc467468af31ed10339aab28eb19c2e9138072e514011c9b549517` |

The complete ledger was searched by all exact IDs and aliases, the complex
supremum-norm mechanism, support/cozero subordination, atlas-relative nullity,
compact-piece Lipschitz extension, countable chart selection, lower-dimensional
image nullity, generic projection and weak Whitney choice propagation. Each
primary target had exactly one U-C row. The direct chain below was then checked
by exact ID before adding any new impact or clear row.

## Restored repaired item

`def-c-zero-and-ell-infinity` previously received an actual repair adding the
real least-upper-bound supplier for the supremum norm. Its current boundedness
definition and nonempty coordinate-modulus set make that repair valid, and the
current file is the repaired hash above. The later complex-scalar concern is a
correct implicit use of adequate published suppliers:

- `rem-real-and-complex-normed-space-convention`, SHA-256
  `83d74ad1a6af72cca9eeb7ecbbc1f59fec124c705139bbb2ddf0a8b3fcee07e4`,
  gives the exact complex norm convention; and
- `lem-complex-conjugation-and-modulus-laws` proves definiteness,
  multiplicativity and the triangle inequality for the modulus.

Coordinatewise addition/scaling and the least-upper-bound property then prove
the displayed supremum norm axioms. Missing direct links to these adequate
interfaces do not create a second defect under the canonical implicit-use
rule. The item returns from U-C to A-R, preserving its genuine LUB repair and
the later audit history.

## Normalization defect

`lem-normalizing-a-locally-finite-positive-smooth-family` concludes that
`(phi_i)` is subordinate to `(supp(g_i))`. Published
`def-smooth-partition-of-unity-subordinate-to-an-open-cover`, SHA-256
`035e7112053d619455ab736311d2efdeda4a81fccdd16b563eb5c807ed890466`,
requires an open cover. Supports are closed in general and need not be open, so
the conclusion is not typed by that definition. The proof also cites an
unproved A1 for smoothness of the reciprocal.

Repair the statement by supplying an open cover `(U_i)` with
`supp(g_i) subset U_i`, and conclude subordination to `(U_i)`. Since `G>0`, the
cozero sets of `g_i/G` and `g_i` agree, hence their supports agree; this gives
the exact support containment. Prove reciprocal smoothness locally from
ordinary reciprocal differentiation, smooth composition and the nonzero range,
or cite an earlier exact supplier once one is exposed. The sum and local
finiteness clauses are otherwise sound. Classification moves U-C to A-P.

## Atlas-null chain

`lem-c1-local-diffeomorphisms-preserve-null-sets-locally`, SHA-256
`d1ef627a4d5a269ef973d79672ff9c64e072ca3835bff0208c5e93b66a25995c`,
is a newly confirmed A-P supplier. Proof 3.1 obtains only compact-local
Lipschitz restrictions, then proof 4.1 asserts that these globalize for every
subset of one whole neighbourhood. It neither installs a countable cover and
the associated choice/null-union hypothesis nor extends the compact-local maps
to the whole Euclidean domains required by
`thm-lipschitz-images-of-null-sets-in-rn-are-null`. It also states the result in
terms of unqualified manifold nullity while it is used to justify that very
atlas-independent term.

Repair it chartwise. Choose nested source and target coordinate cubes around
the fixed point. Bound the derivatives of the coordinate map and inverse on
slightly larger compact cubes, and compose each with the coordinatewise
one-Lipschitz clamp onto its closed inner cube. The resulting global Euclidean
Lipschitz maps agree with the transition and its inverse on the working
neighbourhood, so they preserve elementary Euclidean nullity in both
directions. State this atlas-relative conclusion without presupposing atlas
independence.

`prop-the-null-set-definition-is-independent-of-the-smooth-atlas` has two
additional exact obligations. Its countable subordinate coordinate-ball cover
comes from the already-A-P
`lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it`,
whose Lindelof supplier assumes countable choice. Naming one containing source
chart for each selected ball is another countable selection. Finally, proof
3.1 uses closure of Euclidean null sets under countable unions, whose published
supplier `lem-null-sets-in-rn-closed-under-subsets-and-countable-unions`
explicitly assumes countable choice. Add `AC_omega`, retain the containing-chart
witnesses in the countable refinement, and use the chartwise clamped transition
argument above. Classification moves U-C to A-P.

`prop-every-smooth-manifold-admits-a-countable-smooth-atlas-with-relatively-compact-domains`
directly invokes that same affected cover lemma but does not propagate its
countable-choice condition. Add `AC_omega` and use the repaired all-eligible
coordinate-ball family followed by the published CC-qualified Lindelof theorem.
Classification moves U-C to A-P.

`prop-an-equidimensional-c1-map-sends-null-sets-to-null-sets` inherits both
countable-atlas defects. Independently, proof 2.1 covers the closure of a chart
domain by compact-local Lipschitz pieces even though that closure need not lie
inside the chart domain, and then applies a global-domain Lipschitz theorem to
those restricted maps. Repair under `AC_omega` by a countable all-eligible
family of nested rational cubes inside each coordinate domain, bound the
derivative on each larger cube, clamp onto the inner cube to obtain a global
Lipschitz map, and take the countable null union. Classification moves U-C to
A-P.

## Weak Whitney propagation

`thm-weak-whitney-proper-embedding-theorem` invokes
`thm-every-smooth-manifold-embeds-in-some-finite-dimensional-euclidean-space`,
whose current Statement explicitly assumes `AC_omega`, while the weak Whitney
Statement/Given/dependencies do not. Its generic-projection supplier reaches
the affected atlas-null chain through lower-dimensional image nullity. Add and
declare `AC_omega`, then either repair that chain or repeat the rational-cube
bad-parameter proof already used in the repaired arbitrary-dimensional
embedding theorem. The finite sequence of projections uses only finite
induction, and the bounded-plus-proper-coordinate calculation correctly
preserves properness. Classification moves U-C to A-P.

Active manifold consumers use the repaired arbitrary-dimensional embedding and
local cube calculations rather than these affected clauses, so none of the
five A-P repairs creates a current Step-3 blocker.

## Exact impact candidates

Five previously unclassified direct nodes receive U-P impact dispositions,
without being called independently defective:

- `def-null-subset-of-a-smooth-manifold`, SHA-256
  `f29d5c7af7235dedabb564c86c988bab6c6f66b7bbac7856c1435730473afeba`,
  coherently defines atlas-relative nullity, but its unqualified terminology is
  justified by the affected atlas-independence proposition.
- `prop-a-countable-chart-cover-detects-manifold-null-sets`, SHA-256
  `a73b47946fa47e079705260a28f2409a79d3cf88e2755112353557126c0f8a06`,
  directly uses both affected atlas independence and countable-atlas existence.
- `prop-the-image-of-a-lower-dimensional-c1-manifold-is-null`, SHA-256
  `adc51f4c3586f805d0bf13b4775a831fad3ba0668c296ca3223a441912d3a29b`,
  directly uses the affected equidimensional and countable-atlas propositions.
- `lem-a-generic-linear-projection-preserves-injectivity-and-immersion`,
  SHA-256
  `614f3b0d29eadd28016a27a2772ef7e29633928e0a2eb62e125c5ba1fcfe41d9`,
  uses that lower-dimensional image-null proposition to prove density of good
  directions.
- `prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold`,
  SHA-256
  `c0d754af9edd98f9e4aa2db3c492e9a27fbbac30557c3610db87d5c0f282a053`,
  cites the affected countable-chart detector, although its local contradiction
  is sound once atlas-independent nullity is repaired.

These are exact direct paths, not a blanket transitive-graph inference.

## Bounded clears in the used support chain

- `rem-real-and-complex-normed-space-convention` supplies the coherent complex
  norm convention described above.
- `def-smooth-partition-of-unity-subordinate-to-an-open-cover` correctly
  requires locally finite supports contained in a supplied open cover.
- `thm-a-locally-finite-sum-of-smooth-functions-is-smooth`, SHA-256
  `31e187fee59c4f168b5874a6c208a8101a3c14680f81783003509eaf4cdbcec1`,
  reduces locally to one finite sum; selecting the finite set for one fixed
  point is not family choice.
- `lem-locally-finite-families-of-supports-have-locally-finite-cozero-families`,
  SHA-256
  `fd1f49f0811c84c51fbc4d58de9eafc454e7d457f12763575dc60ffaacef2138`,
  follows immediately from cozero containment in support.
- `lem-a-generic-projection-can-preserve-properness`, SHA-256
  `f77edefb3138826c67ab20eed983deb233e35baa78d20f1d5156a99b59f88a94`,
  assumes a supplied direction outside the two bad images; its injectivity,
  immersion and bounded-perturbation properness calculations are independent
  of the affected existence/density proof.
- `lem-a-c1-map-is-locally-lipschitz-on-compact-coordinate-subsets`, SHA-256
  `751e2d965b0b3c9b3db74a30562595f9e2fcc7c52a9269b2d8c6639b9047980a`,
  is sound pointwise: a compactly contained Euclidean ball, derivative maximum
  and mean-value inequality give the stated local restriction.
- `thm-lipschitz-images-of-null-sets-in-rn-are-null`, SHA-256
  `da9f3c63e96247c4c85c9e25266c921f162ea4f3e077aa0b597812e54f5f9a97`,
  correctly rescales each elementary cube cover in fixed dimension; the older
  U-P occurrence concerned a different Lebesgue-null conversion target.
- `lem-null-sets-in-rn-closed-under-subsets-and-countable-unions`, SHA-256
  `e5097664c94465453ffef04104b456924d94289242e94839762f85d6515e7cc2`,
  explicitly assumes countable choice, allocates geometric budgets and
  enumerates the double family of cubes.
- `thm-second-countable-implies-lindelof`, SHA-256
  `9fc9a6c21f40ac6617c793310874708d04f367f6f7d1599ee4027e3b7403e145`,
  explicitly assumes countable choice and selects one cover member for each
  eligible member of a countable basis.

These nine items receive bounded no-repair-needed dispositions; three move
from U-P and six are new census entries.

## Limits

This pass is limited to the displayed target defects, direct impact paths and
used support clauses. It does not certify the full manifold-null, Whitney,
partition-of-unity or smooth-calculus closure. No external source was newly
consulted, no published item was edited and no independent judge result or
exhaustive-discovery claim is made.
