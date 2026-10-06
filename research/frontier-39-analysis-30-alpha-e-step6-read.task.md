# Step 6 Alpha group reader — read-only digest — group **e**, run `frontier-39-analysis-30`

- You are the read-only Step 6 Alpha group reader for batches **8**, **18**, **25**: 3 A/B pair(s), 6 page(s), 90 item(s).

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
| 8 | `muckenhoupt-weights-and-weighted-estimates` | A | fourier-analysis | 458.02613 | `calderon-zygmund-decomposition-and-singular-integrals`, `the-lp-spaces-holder-minkowski-and-riesz-fischer`, `the-maximal-function-and-lebesgue-differentiation`, `radon-measures-and-the-riesz-markov-kakutani-theorem` |
| 8 | `muckenhoupt-weights-and-weighted-estimates-examples` | B | fourier-analysis | 458.02614 | `muckenhoupt-weights-and-weighted-estimates` |
| 18 | `analytic-semigroups-and-linear-evolution-equations` | A | pde | 458.045 | `strongly-continuous-semigroups-and-hille-yosida` |
| 18 | `analytic-semigroups-and-linear-evolution-equations-examples` | B | pde | 458.046 | `analytic-semigroups-and-linear-evolution-equations`, `smooth-approximation-and-sobolev-extension` |
| 25 | `lie-algebra-cohomology-and-kostants-nilradical-theorem` | A | lie-theory | 510.021 | `harish-chandra-isomorphism-casimir-and-central-characters`, `the-bgg-resolution`, `semisimple-lie-algebras-cohomology-and-levi-theory`, `derived-functors`, `ext-and-balanced-resolutions`, `spectral-sequences`, `double-complexes-exact-couples-and-convergence`, `compact-lie-groups-maximal-tori-and-peter-weyl-theory`, `sheaf-cohomology-cech-cohomology-and-comparison` |
| 25 | `lie-algebra-cohomology-and-kostants-nilradical-theorem-examples` | B | lie-theory | 510.022 | `lie-algebra-cohomology-and-kostants-nilradical-theorem` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `muckenhoupt-weights-and-weighted-estimates` — Muckenhoupt Weights and Weighted Estimates (31 item(s))

- `def-weight-and-weighted-lp-space` · definition — Weights, their associated measures, and the spaces L^p(w)
- `def-axis-parallel-cube-averages-and-cube-maximal-functions` · definition — Axis-parallel cubes, their averages, and cube maximal functions
- `lem-ball-and-cube-maximal-functions-are-comparable` · lemma — Ball and cube maximal functions are pointwise comparable
- `def-muckenhoupt-a-p-and-a-one-weights` · definition — Muckenhoupt A_p and A_1 weights
- `lem-a-one-cube-average-and-maximal-function-forms-agree` · lemma — The two defining forms of A_1 agree
- `lem-a-p-dual-weight-and-nesting-properties` · lemma — Duality and nesting of the A_p classes
- `lem-a-p-weighted-average-comparison-and-density-to-mass` · lemma — Weighted average comparison and the density-to-mass estimate for A_p weights
- `lem-a-p-weights-are-doubling` · lemma — A_p weights are doubling
- `lem-maximal-dyadic-subcubes-of-a-cube-at-a-height` · lemma — Maximal dyadic subcubes of a cube at a height
- `lem-a-p-distribution-decay-from-maximal-cubes` · lemma — Distribution decay from maximal cubes for A_p weights
- `thm-reverse-holder-self-improvement-for-a-p-weights` · theorem — Reverse Holder self-improvement for A_p weights
- `cor-a-p-classes-are-open-in-the-exponent` · corollary — The A_p classes are open in the exponent
- `def-muckenhoupt-a-infinity-class` · definition — The Muckenhoupt A_infinity class
- `lem-weighted-maximal-weak-bound-for-a-one` · lemma — Weighted weak (1,1) bound for the maximal function under A_1
- `def-weighted-maximal-function-relative-to-a-doubling-weight` · definition — The weighted maximal function of a doubling weight
- `lem-weighted-maximal-function-is-weak-type-one-one` · lemma — The weighted maximal function of a doubling weight is weak (1,1)
- `thm-hardy-littlewood-maximal-operator-characterises-a-p` · theorem — The Hardy-Littlewood maximal operator characterises A_p
- `lem-a-infinity-weights-satisfy-power-decay` · lemma — A_infinity weights satisfy power decay
- `lem-power-decay-weights-are-doubling` · lemma — Power decay implies doubling
- `lem-differentiation-of-l-one-functions-for-a-doubling-weight` · lemma — Differentiation of L-one functions for a doubling weight
- `lem-reverse-holder-from-a-distribution-estimate` · lemma — Reverse Holder from a distribution estimate for a doubling weight
- `lem-power-decay-implies-a-p-membership` · lemma — Power decay implies membership in some A_p
- `thm-a-infinity-power-decay-characterisation` · theorem — The A_infinity power-decay characterisation
- `lem-maximal-dyadic-cubes-covering-a-proper-open-set` · lemma — Maximal dyadic cubes covering a proper open set
- `lem-annulus-far-field-estimates-for-the-maximal-function` · lemma — Dyadic annulus far-field estimates for the maximal function
- `lem-kernel-tail-integrals-of-weighted-l-p-functions-are-finite` · lemma — Kernel tail integrals of weighted L-p functions are finite
- `lem-unweighted-good-lambda-local-estimate-for-maximal-truncations` · lemma — Unweighted local good-lambda estimate for maximal truncations
- `lem-weighted-good-lambda-inequality-for-maximal-truncations` · lemma — Weighted good-lambda inequality for maximal truncations
- `thm-calderon-zygmund-operators-are-bounded-on-weighted-lp` · theorem — Weighted L-p bounds for standard Calderon-Zygmund maximal truncations
- `cor-hilbert-and-riesz-transforms-are-bounded-on-weighted-lp` · corollary — Hilbert and Riesz transforms are bounded on weighted L-p
- `rem-weighted-endpoints-are-not-obtained-by-setting-p-equal-one` · remark — Weighted endpoints are not obtained by setting p equal to one

### `muckenhoupt-weights-and-weighted-estimates-examples` — Muckenhoupt Weights and Weighted Estimates — Examples (5 item(s))

- `ex-power-weight-a-p-range` · example — The A_p range of a power weight
- `cex-power-weight-fails-at-both-a-p-endpoints` · counterexample — A power weight fails at both A_p endpoints
- `ex-a-one-power-weight-range` · example — The A_1 range of a power weight
- `rem-a-doubling-weight-need-not-be-a-p` · remark — A doubling weight need not lie in A_p
- `ex-weighted-norm-of-an-interval-indicator` · example — Weighted norm of an interval indicator

### `analytic-semigroups-and-linear-evolution-equations` — Analytic Semigroups and Linear Evolution Equations (27 item(s))

- `lem-resolvent-identity-and-holomorphy-for-closed-operators` · lemma — Resolvent identity and holomorphy for a closed operator
- `lem-banach-valued-cauchy-theorem-on-star-shaped-domains` · lemma — Primitive and Cauchy theorem for Banach-valued holomorphic maps on star-shaped domains
- `thm-cauchy-integral-formula-and-cauchy-estimates-for-banach-valued-holomorphic-functions` · theorem — Cauchy integral formula and Cauchy estimates for Banach-valued holomorphic functions
- `lem-power-series-coefficients-are-determined-by-real-values` · lemma — Banach-valued power series are determined by their real values
- `lem-taylor-expansion-with-integral-remainder-for-banach-valued-curves` · lemma — Taylor expansion with integral remainder for Banach-valued curves
- `lem-generator-of-the-contour-semigroup-is-the-sectorial-operator` · lemma — The generator of the contour semigroup is the sectorial operator
- `def-complex-sector-and-bounded-analytic-semigroup` · definition — Complex sector and bounded analytic semigroup
- `def-sectorial-operator-with-the-semigroup-sign-convention` · definition — Sectorial operator with the semigroup sign convention
- `lem-contour-definition-of-an-analytic-semigroup` · lemma — The Dunford contour integral defines a bounded holomorphic family on the sector
- `lem-dunford-contour-construction-satisfies-the-semigroup-law` · lemma — The Dunford contour construction satisfies the semigroup law and strong continuity at the vertex
- `lem-cauchy-estimates-for-an-analytic-semigroup-give-generator-power-bounds` · lemma — Cauchy estimates for an analytic semigroup give generator power bounds
- `thm-analytic-semigroup-smoothing-estimates` · theorem — Smoothing estimates for the semigroup generated by a sectorial operator
- `cor-analytic-semigroups-are-operator-norm-differentiable-away-from-zero` · corollary — Analytic semigroups are operator-norm differentiable away from zero
- `thm-sectorial-resolvent-characterisation-of-bounded-analytic-semigroups` · theorem — Sectorial resolvent characterisation of bounded analytic semigroups
- `thm-self-adjoint-nonpositive-operators-generate-bounded-analytic-semigroups` · theorem — Self-adjoint nonpositive operators generate bounded analytic semigroups
- `cor-spectral-gap-gives-exponential-decay-of-a-self-adjoint-parabolic-semigroup` · corollary — Quadratic spectral bounds control a self-adjoint parabolic semigroup
- `cor-dirichlet-laplacian-generates-an-analytic-heat-semigroup` · corollary — The Dirichlet Laplacian generates an analytic heat semigroup
- `def-closed-sectorial-form-and-its-associated-operator` · definition — Closed sectorial form and its associated operator
- `lem-sectorial-form-angle-controls-the-numerical-range-of-its-operator` · lemma — The sectorial form angle controls the numerical range of its operator
- `lem-coercive-sectorial-form-resolvents-define-a-closed-m-sectorial-operator` · lemma — Coercive sectorial forms define closed densely defined sectorial operators
- `thm-form-generated-sectorial-elliptic-semigroups` · theorem — Form-generated sectorial elliptic semigroups
- `lem-analytic-duhamel-cancellation-removes-the-generator-singularity` · lemma — Analytic Duhamel cancellation removes the generator singularity
- `lem-classical-parabolic-solution-at-time-zero-needs-the-compatibility-ax-plus-f-zero` · lemma — Compatibility at time zero for a classical parabolic solution
- `thm-classical-regularity-for-holder-continuous-forcing-under-compatibility` · theorem — Classical regularity for Holder-continuous forcing under initial compatibility
- `cor-abstract-parabolic-smoothing` · corollary — Abstract parabolic smoothing for mild solutions
- `rem-abstract-generator-domain-smoothing-becomes-spatial-regularity-only-after-domain-identification` · remark — Abstract generator-domain smoothing becomes spatial regularity only after domain identification
- `rem-real-banach-spaces-require-complexification-for-analyticity` · remark — Real Banach spaces require complexification for analyticity

### `analytic-semigroups-and-linear-evolution-equations-examples` — Analytic Semigroups and Linear Evolution Equations — Examples (9 item(s))

- `ex-analytic-semigroup-generated-by-a-bounded-operator` · example — The analytic semigroup generated by a bounded operator
- `ex-analytic-dirichlet-heat-semigroup` · example — The analytic Dirichlet heat semigroup
- `ex-sectorial-multiplication-operator` · example — The sectorial multiplication operator
- `cex-the-translation-semigroup-is-not-analytic` · counterexample — The translation semigroup is not analytic
- `cex-an-analytic-semigroup-need-not-be-norm-continuous-at-zero` · counterexample — An analytic semigroup need not be norm continuous at zero
- `cex-sector-angle-changes-under-the-sign-convention` · counterexample — The sector changes under the sign convention
- `ex-sectorial-nonselfadjoint-multiplication-generator` · example — A sectorial nonselfadjoint multiplication generator
- `cex-a-time-discontinuous-forcing-can-block-classical-regularity-at-its-jump` · counterexample — A time-discontinuous forcing blocks classical regularity at its jump
- `ex-abstract-smoothing-does-not-imply-a-spatial-derivative-without-a-pde-realisation` · example — Abstract smoothing does not imply a spatial derivative without a PDE realisation

### `lie-algebra-cohomology-and-kostants-nilradical-theorem` — Lie Algebra Cohomology and Kostants Nilradical Theorem (13 item(s))

- `prop-lie-algebra-cohomology-is-derived-invariants` · proposition — Chevalley–Eilenberg cohomology computes Ext of the trivial module
- `prop-h-zero-is-the-invariant-subspace` · proposition — Degree-zero Lie algebra cohomology is the invariant subspace
- `prop-a-normalizer-acts-on-lie-algebra-cohomology` · proposition — The normalizer acts on Lie algebra cohomology
- `lem-central-actions-on-nilradical-cohomology-factor-through-harish-chandra` · lemma — Central actions on nilradical cohomology factor through the Harish–Chandra projection
- `thm-casselman-osborne-nilradical-cohomology-constraint` · theorem — The Casselman–Osborne constraint on weights of nilradical cohomology
- `def-inversion-set-of-a-weyl-group-element` · definition — The inversion set of a Weyl group element
- `lem-extremal-weight-cochain-for-a-weyl-element-is-closed` · lemma — The extremal weight cochain of a Weyl element is closed and unique
- `lem-kostant-laplacian-is-scalar-on-weight-components` · lemma — The Chevalley–Eilenberg Laplacian is scalar on weight components
- `lem-each-kostant-extremal-harmonic-space-is-one-dimensional` · lemma — Each extremal harmonic space is one-dimensional
- `thm-kostant-nilradical-cohomology-theorem` · theorem — Kostant's nilradical cohomology theorem
- `cor-kostant-cohomology-in-degrees-zero-and-top` · corollary — Kostant cohomology in degrees zero and top
- `cor-kostant-euler-character-recovers-the-weyl-numerator` · corollary — The Kostant Euler character recovers the Weyl numerator
- `prop-kostant-n-cohomology-and-the-bgg-resolution-give-the-same-euler-class` · proposition — Kostant cohomology and BGG characters give the same Weyl numerator

### `lie-algebra-cohomology-and-kostants-nilradical-theorem-examples` — Lie Algebra Cohomology and Kostants Nilradical Theorem — Examples (5 item(s))

- `ex-kostant-n-cohomology-for-sl2` · example — Kostant cohomology for sl2
- `ex-kostant-n-cohomology-for-the-trivial-sl3-module` · example — Kostant cohomology for the trivial sl3 module
- `ex-degree-one-kostant-classes-correspond-to-simple-reflections` · example — Degree-one Kostant classes correspond to simple reflections
- `cex-whitehead-vanishing-does-not-apply-to-the-nilpotent-radical` · counterexample — Whitehead vanishing does not apply to the nilpotent radical
- `cex-omitting-the-exterior-root-weight-shifts-gives-the-wrong-dot-weight` · counterexample — Omitting the exterior root-weight shifts gives the wrong dot weight

## Your seams

Your pages depend on another group's:

- `analytic-semigroups-and-linear-evolution-equations` requires `strongly-continuous-semigroups-and-hille-yosida` (group j, batch 17)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

---

# Step 6 Alpha group reader — read-only digest, `frontier-39-analysis-30`

- **Role and scope:** You are the Step 6 Alpha group reader for the assigned group in the generated group header. Read every assigned page and item, its cited published dependencies, and every listed cross-group seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned group: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the group.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-7 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the group's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-group findings correctly:** Put a finding about another group's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
