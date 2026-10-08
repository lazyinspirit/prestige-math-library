# Step 7 adjudication — group **e**, run `frontier-43-complex-representation-15`

You are the group Alpha for batches **12**, **13**, **14**: 3 A/B pair(s), 6 page(s), 63 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

**No step-6 digest exists for this group.** The reading half did not run or did
not produce one, so you are meeting this mathematics for the first time with the
rejections already in front of you. Read the pages before the verdicts anyway —
the order matters more than where the notes came from.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-43-complex-representation-15-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 12 | `extremal-length-and-planar-quasiconformality` | A | complex-analysis | 1618 | `logarithmic-potential-capacity-and-riesz-decomposition`, `simply-connected-plane-domains`, `classification-of-compact-connected-surfaces`, `hurewicz-whitehead-freudenthal-and-cw-approximation`, `geodesics-the-exponential-map-completeness-and-hopf-rinow`, `the-dbar-complex-and-integral-solutions`, `the-direct-method-and-euler-lagrange-equations`, `the-de-rham-theorem-and-degree` |
| 12 | `extremal-length-and-planar-quasiconformality-examples` | B | complex-analysis | 1619 | `extremal-length-and-planar-quasiconformality`, `the-de-rham-theorem-and-degree` |
| 13 | `beltrami-equation-and-measurable-riemann-mapping` | A | complex-analysis | 1620 | `extremal-length-and-planar-quasiconformality`, `hyperbolic-riemann-surfaces-and-uniformization` |
| 13 | `beltrami-equation-and-measurable-riemann-mapping-examples` | B | complex-analysis | 1621 | `beltrami-equation-and-measurable-riemann-mapping` |
| 14 | `quasisymmetry-welding-and-conformal-removability` | A | complex-analysis | 1622 | `hausdorff-measure-and-hausdorff-dimension`, `beltrami-equation-and-measurable-riemann-mapping` |
| 14 | `quasisymmetry-welding-and-conformal-removability-examples` | B | complex-analysis | 1623 | `quasisymmetry-welding-and-conformal-removability`, `riemann-surfaces-branched-maps-and-differentials` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `extremal-length-and-planar-quasiconformality` — Extremal Length and Planar Quasiconformality (17 item(s))

- `def-acl-sobolev-quasiconformal-homeomorphism` · definition — The ACL and Sobolev analytic definition of quasiconformality
- `def-extremal-length-and-curve-family-modulus` · definition — Extremal length and the curve-family modulus of a path family
- `def-beltrami-coefficient-and-maximal-dilatation` · definition — The Beltrami coefficient and the maximal dilatation
- `lem-rho-length-and-extremal-length-are-well-defined` · lemma — The rho-length and the extremal length are well defined
- `def-geometric-quasiconformal-homeomorphism` · definition — Orientation-preserving homeomorphisms and the geometric definition of quasiconformality
- `thm-extremal-length-conformal-invariance-and-monotonicity` · theorem — Conformal invariance, monotonicity, and the series and parallel laws for extremal length
- `thm-modulus-rectangle-and-annulus` · theorem — Extremal length of the rectangle and of the round annulus
- `thm-round-annulus-conformal-parameter-is-complete-invariant` · theorem — The conformal parameter of a round annulus is a complete invariant
- `lem-riemann-maps-of-jordan-domains-extend-homeomorphically` · lemma — Riemann maps of Jordan domains extend to homeomorphisms of the closures
- `lem-analytic-quasiconformality-implies-quadrilateral-modulus-bounds` · lemma — Analytic quasiconformality gives both quadrilateral modulus bounds
- `thm-geometric-and-analytic-quasiconformality-equivalent` · theorem — The geometric and analytic definitions of quasiconformality agree
- `lem-inverse-of-a-quasiconformal-map-is-quasiconformal` · lemma — The inverse of a quasiconformal map is quasiconformal with the same dilatation
- `lem-analytic-quasiconformality-implies-modulus-distortion` · lemma — An analytically quasiconformal homeomorphism distorts quadrilateral moduli by at most K
- `thm-composition-and-inverse-quasiconformal` · theorem — Composition and inversion of quasiconformal maps and their Beltrami coefficients
- `thm-one-quasiconformal-is-conformal` · theorem — Every 1-quasiconformal homeomorphism is conformal
- `thm-normalized-quasiconformal-compactness` · theorem — Compactness of the normalized K-quasiconformal self-maps of the sphere
- `lem-circular-dilatation-quasisymmetry-and-analytic-quasiconformality` · lemma — Circular dilatation, quasisymmetry and the analytic definition

### `extremal-length-and-planar-quasiconformality-examples` — Extremal Length and Planar Quasiconformality: Examples and Counterexamples (8 item(s))

- `ex-extremal-length-of-rectangle-and-annulus` · example — Extremal length of a rectangle and of a round annulus by hand
- `ex-punctured-disc-versus-finite-annulus-modulus` · example — The punctured disc has infinite conformal parameter, unlike every finite annulus
- `ex-affine-quasiconformal-ellipse-map` · example — The affine ellipse map and its Beltrami coefficient
- `ex-radial-stretch-quasiconformal-map` · example — The radial stretch is quasiconformal with K equal to max of alpha and one over alpha
- `ex-quasiconformal-composition-dilatation-bound` · example — Composition of two affine quasiconformal maps and the multiplicative dilatation bound
- `ex-modulus-obstruction-to-quasiconformal-equivalence` · example — A modulus obstruction to quasiconformal equivalence of round annuli
- `ex-beltrami-coefficient-of-an-inverse-map` · example — The Beltrami coefficient of the inverse of an affine quasiconformal map
- `cex-orientation-reversing-homeomorphism-is-quasiconformal` · counterexample — An orientation-reversing homeomorphism need not be quasiconformal

### `beltrami-equation-and-measurable-riemann-mapping` — The Beltrami Equation and Measurable Riemann Mapping (11 item(s))

- `def-measurable-beltrami-coefficient` · definition — Measurable Beltrami coefficients and measurable conformal structures
- `lem-local-postcomposition-chain-rule-for-w-one-two` · lemma — A local Sobolev chain rule for C^1 postcomposition
- `def-weak-solution-beltrami-equation` · definition — Weak solutions of the Beltrami equation
- `lem-local-holder-cauchy-transform-estimate` · lemma — The fixed-support Cauchy transform and its Hölder bounds
- `lem-nondegenerate-local-holder-beltrami-coordinates` · lemma — Nondegenerate local Hölder coordinates for a Hölder coefficient
- `lem-weak-beltrami-factorization-in-holder-coordinates` · lemma — Weak solutions factor holomorphically in Hölder coordinates
- `lem-smooth-beltrami-coefficients-admit-quasiconformal-solutions` · lemma — Smooth Beltrami coefficients admit quasiconformal solutions
- `lem-area-and-l2-derivative-bounds-for-quasiconformal-maps` · lemma — Area and $L^2$ derivative bounds for quasiconformal homeomorphisms
- `thm-measurable-riemann-mapping-sphere` · theorem — The measurable Riemann mapping theorem on the sphere
- `cor-local-integrability-beltrami-structures` · corollary — Local integrability of measurable conformal structures
- `thm-holder-regularity-beltrami-solutions` · theorem — Hölder regularity and nonvanishing Jacobian of the normalized Beltrami solution

### `beltrami-equation-and-measurable-riemann-mapping-examples` — The Beltrami Equation and Measurable Riemann Mapping: Examples and Counterexamples (5 item(s))

- `ex-constant-coefficients-and-affine-solutions` · example — Constant coefficients and their affine solutions
- `ex-piecewise-affine-approximations` · example — Piecewise-affine approximation of a measurable coefficient
- `ex-normalization-by-mobius-maps` · example — Normalization of a solution by a Möbius postcomposition
- `ex-pullback-of-a-measurable-ellipse-field` · example — Pullback of a measurable ellipse field under biholomorphic maps
- `cex-uniqueness-of-beltrami-solutions-without-normalization` · counterexample — Uniqueness of Beltrami solutions fails without the three-point normalization

### `quasisymmetry-welding-and-conformal-removability` — Quasisymmetry, Welding, and Conformal Removability (16 item(s))

- `def-quasisymmetric-circle-homeomorphism` · definition — Quasisymmetric homeomorphisms of the line and circle
- `lem-quasiconformal-local-jacobian-energy-bound` · lemma — A local Jacobian and energy bound for quasiconformal homeomorphisms
- `lem-smooth-arcs-and-circles-are-removable-for-quasiconformal-maps` · lemma — Compact subsets of lines and round circles are removable for quasiconformal maps
- `lem-ahlfors-extension-of-line-quasisymmetric-maps` · lemma — The Ahlfors-Beurling extension formula for quasisymmetric maps of the line
- `thm-beurling-ahlfors-extension` · theorem — The Beurling–Ahlfors extension theorem for circles and lines
- `def-quasicircle` · definition — Quasicircles, quasidisks, quasiarcs, and quasilines
- `thm-quasicircle-characterizations` · theorem — Bounded turning, quasiconformal images of the circle, and quasiconformal reflections
- `def-conformal-removable-compact-set` · definition — Conformal removability of compact sets
- `lem-zero-length-sets-are-removable-for-continuous-analytic-functions` · lemma — Compact sets of finite length are removable for continuous analytic functions
- `lem-round-circles-are-conformally-removable` · lemma — Round circles and straight lines are conformally removable
- `lem-positive-area-compact-sets-are-not-conformally-removable` · lemma — Compact sets of positive area are not conformally removable
- `lem-conformal-removability-is-quasiconformally-invariant` · lemma — Conformal removability is invariant under quasiconformal maps
- `thm-zero-length-sets-and-quasicircles-are-conformally-removable` · theorem — Zero-length compact sets and quasicircles are conformally removable
- `def-conformal-welding-of-a-jordan-curve` · definition — The welding homeomorphism of a Jordan curve
- `thm-quasiconformal-welding-existence` · theorem — Every quasisymmetric circle homeomorphism is a conformal welding
- `thm-welding-uniqueness-under-removability` · theorem — Welding uniqueness for conformally removable curves

### `quasisymmetry-welding-and-conformal-removability-examples` — Quasisymmetry, Welding, and Conformal Removability: Examples and Counterexamples (6 item(s))

- `ex-quasisymmetric-power-map-on-the-circle` · example — Power maps, endpoint distortion, and a non-Möbius quasisymmetric circle map
- `ex-snowflake-quasicircle` · example — The Koch snowflake is a non-rectifiable quasicircle
- `ex-conformal-welding-of-the-round-circle` · example — The identity welding of the round circle
- `ex-mobius-ambiguity-in-conformal-welding` · example — The Möbius ambiguity in conformal welding
- `cex-every-compact-set-is-conformally-removable` · counterexample — Not every compact set is conformally removable
- `ex-single-point-conformal-removability` · example — A single point is conformally removable

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/frontier-43-complex-representation-15-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-7 closure recovery, `frontier-43-complex-representation-15`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/step7-workflow.mjs`, `briefs/step7-adjudicator.md`
and `briefs/step7-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.
