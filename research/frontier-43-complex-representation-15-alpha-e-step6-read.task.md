# Step 6 Alpha group reader — read-only digest — group **e**, run `frontier-43-complex-representation-15`

- You are the read-only Step 6 Alpha group reader for batches **12**, **13**, **14**: 3 A/B pair(s), 6 page(s), 63 item(s).

- Read every owned item and every listed seam before returning the compact
  schema-constrained digest. That file, not this conversation, is the handoff
  to a fresh Step-7 adjudicator. No judge verdict is supplied here.
- Read items in dependency order across the group: suppliers before their
  direct and indirect consumers, including prerequisites outside the group.
- In the digest, `pages_read` is exactly the ids under **Your pages** and
  `items_read` exactly the ids under **Your content**. External items you
  open belong only in `published_dependencies`; never add them to those inventories.
- Everything below is derived from disk by `tools/step7-scope.mjs`; no line
  of it is a judgement about mathematics.

## Read scope

- **Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

- **This dispatch is read-only.** Record concerns about owned items and alerts
  about other groups in the returned digest; do not repair anything.

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

---

# Step 6 Alpha group reader — read-only digest, `frontier-43-complex-representation-15`

- **Role and scope:** You are the Step 6 Alpha group reader for the assigned group in the generated group header. Read every assigned page and item, its cited published dependencies, and every listed cross-group seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned group: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the group.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-7 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the group's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-group findings correctly:** Put a finding about another group's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
