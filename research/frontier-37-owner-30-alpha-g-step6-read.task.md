# Step 6 Alpha group reader — read-only digest — group **g**, run `frontier-37-owner-30`

- You are the read-only Step 6 Alpha group reader for batches **5**, **15**, **23**: 3 A/B pair(s), 6 page(s), 83 item(s).

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
| 5 | `cartier-and-weil-divisors-line-bundles-and-picard-groups` | A | scheme-theory | 366.079 | `quasi-coherent-and-coherent-sheaves-and-vector-bundles`, `proj-projective-schemes-twisting-sheaves-and-ampleness`, `valuation-rings-and-discrete-valuation-rings`, `dedekind-domains-and-ideal-classes`, `krull-dimension-and-height-theorems` |
| 5 | `cartier-and-weil-divisors-line-bundles-and-picard-groups-examples` | B | scheme-theory | 366.08 | `cartier-and-weil-divisors-line-bundles-and-picard-groups`, `normalization-finiteness-for-affine-domains` |
| 15 | `complete-reducibility-for-compact-groups` | A | representation-theory | 510.071 | `haar-measure-existence-and-uniqueness`, `the-modular-function-and-l1-group-algebras`, `unitary-representations-positive-type-and-gns`, `banach-valued-integration-and-the-radon-nikodym-property`, `compact-operators-and-riesz-schauder-theory`, `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators`, `maschkes-theorem-and-complete-reducibility` |
| 15 | `complete-reducibility-for-compact-groups-examples` | B | representation-theory | 510.072 | `complete-reducibility-for-compact-groups`, `decomposition-inertia-and-frobenius` |
| 23 | `integral-specht-modules-and-modular-simple-modules` | A | representation-theory | 809 | `specht-modules-and-the-irreducibles-of-the-symmetric-group`, `modular-representations-and-projective-covers`, `brauer-characters-and-decomposition-matrices` |
| 23 | `integral-specht-modules-and-modular-simple-modules-examples` | B | representation-theory | 811 | `integral-specht-modules-and-modular-simple-modules` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `cartier-and-weil-divisors-line-bundles-and-picard-groups` — Cartier and Weil Divisors Line Bundles and Picard Groups (37 item(s))

- `def-sheaf-total-quotient-rings` · definition — Sheaf total quotient rings
- `def-cartier-divisor` · definition — Cartier divisor
- `lem-cartier-divisor-local-equation-equivalence` · lemma — Cartier divisor local equation equivalence
- `def-principal-cartier-divisor` · definition — Principal cartier divisor
- `def-linear-equivalence-cartier-divisors` · definition — Linear equivalence cartier divisors
- `def-effective-cartier-divisor` · definition — Effective cartier divisor
- `thm-effective-cartier-divisor-closed-immersion` · theorem — Effective cartier divisor closed immersion
- `def-picard-group-scheme` · definition — Picard group of a scheme
- `def-invertible-sheaf-of-cartier-divisor` · definition — Invertible sheaf of cartier divisor
- `lem-cartier-divisor-sheaf-invertible` · lemma — Cartier divisor sheaf invertible
- `lem-cartier-divisor-addition-tensor` · lemma — Cartier divisor addition tensor
- `def-rational-section-line-bundle` · definition — Rational section line bundle
- `thm-line-bundle-rational-section-cartier-divisor` · theorem — Line bundle rational section cartier divisor
- `thm-cartier-divisors-mod-principal-to-picard` · theorem — Cartier divisors mod principal to picard
- `lem-global-section-effective-divisor` · lemma — Global section effective divisor
- `def-weil-divisor-normal-noetherian-scheme` · definition — Weil divisor normal noetherian scheme
- `def-order-codimension-one-rational-function` · definition — Order codimension one rational function
- `lem-principal-weil-divisor-locally-finite` · lemma — Principal weil divisor locally finite
- `def-principal-weil-divisor-and-class-group` · definition — Principal weil divisor and class group
- `thm-cartier-to-weil-divisor-normal-scheme` · theorem — Cartier to weil divisor normal scheme
- `lem-cartier-to-weil-respects-principal-and-addition` · lemma — Cartier to weil respects principal and addition
- `lem-cartier-to-weil-injective-normal` · lemma — Cartier to weil injective normal
- `def-locally-factorial-scheme` · definition — Locally factorial scheme
- `thm-cartier-weil-isomorphism-locally-factorial` · theorem — Cartier weil isomorphism locally factorial
- `def-pullback-cartier-divisor` · definition — Pullback cartier divisor
- `lem-pullback-cartier-divisor-line-bundle` · lemma — Pullback cartier divisor line bundle
- `def-degree-divisor-proper-curve` · definition — Degree divisor proper curve
- `lem-proper-normal-curve-rational-function-map` · lemma — Proper normal curve rational function map
- `lem-finite-flat-curve-fibre-degree` · lemma — Finite flat curve fibre degree
- `thm-principal-divisor-degree-zero-proper-curve` · theorem — Principal divisors on a normal proper curve have degree zero
- `cor-degree-descends-picard-curve` · corollary — Degree descends picard curve
- `def-divisor-support-positive-negative-parts` · definition — Divisor support positive negative parts
- `lem-effective-cartier-divisor-exact-sequence` · lemma — Effective cartier divisor exact sequence
- `cor-twist-exact-sequence-effective-divisor` · corollary — Twist exact sequence effective divisor
- `rem-weil-pullback-not-automatic` · remark — Weil pullback not automatic
- `rem-regular-locally-noetherian-locally-factorial` · remark — Regular locally noetherian locally factorial
- `lem-noetherian-open-subsets-are-quasi-compact` · lemma — Noetherian open subsets are quasi-compact

### `cartier-and-weil-divisors-line-bundles-and-picard-groups-examples` — Cartier and Weil Divisors Line Bundles and Picard Groups — Examples (10 item(s))

- `ex-divisor-rational-function-projective-line` · example — Divisor rational function projective line
- `ex-picard-projective-line-preview` · example — Picard projective line preview
- `ex-effective-cartier-empty-divisor` · example — The unit equation defines the empty effective Cartier divisor
- `cex-zero-divisor-equation-not-cartier` · counterexample — A locally principal subscheme need not be an effective Cartier divisor
- `ex-cartier-divisor-hyperplane-projective-space` · example — Cartier divisor hyperplane projective space
- `ex-divisor-cusp-normalization-pullback` · example — Divisor cusp normalization pullback
- `cex-weil-divisor-not-cartier-singular-cone` · counterexample — Weil divisor not cartier singular cone
- `cex-pullback-weil-divisor-undefined` · counterexample — Pulling back the equation of a Weil divisor can give zero
- `ex-principal-divisor-degree-zero-p1` · example — Principal divisor degree zero p1
- `ex-effective-divisor-thickened-points-curve` · example — An effective divisor on a curve is a finite thickened subscheme of degree deg

### `complete-reducibility-for-compact-groups` — Complete Reducibility for Compact Groups (14 item(s))

- `def-averaged-hermitian-form-for-a-compact-group` · definition — Averaged Hermitian form for a compact group
- `lem-unitary-invariant-subspaces-have-invariant-orthogonal-complements` · lemma — Invariant orthogonal complements in unitary representations
- `lem-averaging-makes-a-finite-dimensional-representation-unitary` · lemma — Averaging unitarizes a finite-dimensional compact-group representation
- `thm-finite-dimensional-compact-group-representations-are-completely-reducible` · theorem — Complete reducibility of finite-dimensional compact-group representations
- `def-haar-averaging-operator-on-hom-spaces` · definition — Haar averaging of bounded operators as a weak operator integral
- `lem-haar-averaging-projects-onto-the-intertwiner-space` · lemma — Haar averaging projects contractively onto bounded intertwiners
- `lem-compact-convolution-operators-are-hilbert-schmidt` · lemma — L² convolution on a compact group is Hilbert–Schmidt
- `lem-conjugation-orbits-of-finite-rank-operators-are-norm-continuous` · lemma — Finite-rank conjugation orbits are operator-norm continuous
- `lem-a-rank-one-haar-average-is-a-nonzero-compact-intertwiner` · lemma — A positive rank-one Haar average is a nonzero compact intertwiner
- `lem-a-compact-scalar-identity-forces-finite-dimension` · lemma — A nonzero compact scalar identity forces finite dimension
- `thm-continuous-irreducible-unitary-representations-of-compact-groups-are-finite-dimensional` · theorem — Irreducible unitary representations of compact groups are finite dimensional
- `thm-schur-orthogonality-for-compact-groups` · theorem — Schur orthogonality for general compact groups
- `def-compact-group-isotypic-projection` · definition — Compact-group isotypic projection
- `thm-isotypic-projections-are-mutually-orthogonal-equivariant-projections` · theorem — Isotypic projections are mutually orthogonal equivariant projections

### `complete-reducibility-for-compact-groups-examples` — Complete Reducibility for Compact Groups — Examples (4 item(s))

- `ex-averaging-a-form-for-a-circle-representation` · example — A circle representation with an averaged orthogonal weight form
- `ex-isotypic-projections-for-a-finite-group-as-a-compact-group` · example — Isotypic Haar projections specialize to finite character sums
- `ex-compact-group-with-no-faithful-finite-dimensional-representation` · example — A compact group with no faithful finite-dimensional representation
- `cex-haar-averaging-does-not-produce-a-finite-measure-for-a-noncompact-group` · counterexample — No normalized translation-invariant Haar measure on the real line

### `integral-specht-modules-and-modular-simple-modules` — Integral Specht Modules and Modular Simple Modules (14 item(s))

- `def-integral-specht-lattice-and-base-change` · definition — Integral Specht lattice and base change
- `def-integral-tabloid-bilinear-form-and-specht-gram-matrix` · definition — Integral tabloid form and Specht Gram matrix
- `def-modular-specht-form-and-radical-quotient` · definition — Modular Specht form and radical quotient
- `lem-field-antisymmetrizer-image-and-dominance` · lemma — Field antisymmetrizers have rank-one own-shape image and detect dominance
- `thm-james-submodule-theorem-over-an-arbitrary-field` · theorem — James submodule theorem over every field
- `def-p-regular-and-p-restricted-partitions` · definition — p-regular and p-restricted partitions
- `lem-specht-gram-gcd-detects-p-regularity` · lemma — Specht Gram gcd detects p-regularity
- `thm-specht-radical-quotient-is-nonzero-exactly-for-p-regular-partitions` · theorem — Nonzero modular Specht quotient criterion
- `lem-nonzero-maps-between-specht-quotients-force-dominance` · lemma — Nonzero maps into tabloid quotients force dominance
- `thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads` · theorem — Modular simple modules of the symmetric group
- `thm-symmetric-group-decomposition-matrix-is-dominance-unitriangular` · theorem — Dominance unitriangularity of the symmetric-group decomposition matrix
- `lem-conjugate-specht-sign-duality-over-fields` · lemma — Conjugate Specht modules are sign-twisted duals over every field
- `prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality` · proposition — p-regular and p-restricted labels under transpose and sign
- `rem-general-modular-decomposition-numbers-are-not-determined-by-triangularity` · remark — Triangularity does not compute every modular decomposition number

### `integral-specht-modules-and-modular-simple-modules-examples` — Integral Specht Modules and Modular Simple Modules — Examples (4 item(s))

- `ex-specht-form-rank-for-shape-two-two-in-small-characteristics` · example — Specht Gram rank for shape (2,2)
- `ex-decomposition-matrices-of-s3-in-characteristics-two-and-three` · example — Decomposition matrices of S3 at p=2 and p=3
- `cex-p-regular-and-p-restricted-are-not-the-same-label` · counterexample — p-regular and p-restricted labels differ
- `cex-a-modular-specht-module-need-not-be-simple-or-have-nonzero-form-head` · counterexample — Modular Specht modules need not be simple, and form heads can vanish

## Your seams

Another group's pages depend on yours:

- `smooth-proper-curves-divisors-genus-and-ramification` (group h) requires your `cartier-and-weil-divisors-line-bundles-and-picard-groups`
- `riemann-roch-for-curves-via-euler-characteristics` (group i) requires your `cartier-and-weil-divisors-line-bundles-and-picard-groups`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

---

# Step 6 Alpha group reader — read-only digest, `frontier-37-owner-30`

- **Role and scope:** You are the Step 6 Alpha group reader for the assigned group in the generated group header. Read every assigned page and item, its cited published dependencies, and every listed cross-group seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned group: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the group.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-7 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the group's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-group findings correctly:** Put a finding about another group's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
