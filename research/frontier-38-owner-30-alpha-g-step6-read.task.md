# Step 6 Alpha group reader — read-only digest — group **g**, run `frontier-38-owner-30`

- You are the read-only Step 6 Alpha group reader for batches **18**, **20**, **21**: 3 A/B pair(s), 6 page(s), 93 item(s).

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
| 18 | `frobenius-characteristic-and-the-symmetric-group-character-dictionary` | A | representation-theory | 801 | `symmetric-functions-hall-inner-product-and-schur-bases`, `specht-modules-and-the-irreducibles-of-the-symmetric-group`, `characters-and-the-orthogonality-relations`, `the-branching-rule-and-the-young-graph` |
| 18 | `frobenius-characteristic-and-the-symmetric-group-character-dictionary-examples` | B | representation-theory | 802 | `frobenius-characteristic-and-the-symmetric-group-character-dictionary` |
| 20 | `analytic-hardy-spaces-and-canonical-factorisation` | A | complex-analysis | 837 | `the-argument-principle-and-rouche`, `infinite-products-and-weierstrass-factorisation`, `the-radon-nikodym-theorem-and-lebesgue-decomposition`, `complex-lp-spaces-and-test-function-conventions`, `orthonormal-bases-parseval-and-fourier-series`, `harmonic-hardy-classes-and-fatou-boundary-limits`, `probability-spaces-random-variables-and-expectation` |
| 20 | `analytic-hardy-spaces-and-canonical-factorisation-examples` | B | complex-analysis | 838 | `analytic-hardy-spaces-and-canonical-factorisation`, `mittag-leffler-and-runges-theorem` |
| 21 | `level-one-modular-forms-and-the-j-invariant` | A | complex-analysis | 847 | `the-argument-principle-and-rouche`, `infinite-products-and-weierstrass-factorisation`, `the-riemann-zeta-function`, `group-actions-and-cayleys-theorem`, `subspaces-products-and-quotients`, `elliptic-functions-and-complex-tori`, `riemann-surfaces-branched-maps-and-differentials` |
| 21 | `level-one-modular-forms-and-the-j-invariant-examples` | B | complex-analysis | 848 | `level-one-modular-forms-and-the-j-invariant` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `frobenius-characteristic-and-the-symmetric-group-character-dictionary` — Frobenius Characteristic and the Symmetric-Group Character Dictionary (12 item(s))

- `def-graded-ordinary-representation-ring-of-symmetric-groups` · definition — The graded ordinary representation ring of the symmetric groups
- `def-outer-induction-product-for-symmetric-group-characters` · definition — The outer induction product of symmetric-group characters
- `lem-complete-homogeneous-expansion-in-power-sums` · lemma — Complete homogeneous functions expand in power sums with cycle-distribution coefficients
- `def-frobenius-characteristic-map` · definition — The Frobenius characteristic map
- `lem-frobenius-characteristic-is-an-isometry` · lemma — The Frobenius characteristic is an isometry
- `lem-characteristic-of-a-young-permutation-character-is-complete` · lemma — The characteristic of a Young permutation character is complete homogeneous
- `lem-frobenius-characteristic-preserves-outer-products` · lemma — The Frobenius characteristic preserves outer products
- `thm-frobenius-characteristic-is-an-isometric-graded-ring-isomorphism` · theorem — The Frobenius characteristic is an isometric graded ring isomorphism
- `thm-frobenius-characteristic-sends-specht-characters-to-schur-functions` · theorem — The characteristic of a Specht character is a Schur function
- `cor-irreducible-symmetric-group-character-values-are-power-sum-coefficients` · corollary — Irreducible symmetric-group character values are power-sum coefficients
- `prop-sign-twist-corresponds-to-the-omega-involution` · proposition — Sign twist corresponds to the omega involution
- `prop-regular-character-has-characteristic-p-one-to-the-n` · proposition — The regular character has characteristic p_1^n

### `frobenius-characteristic-and-the-symmetric-group-character-dictionary-examples` — Frobenius Characteristic and the Symmetric-Group Character Dictionary — Examples (4 item(s))

- `ex-frobenius-characteristic-dictionary-for-s3` · example — The Frobenius characteristic dictionary for S_3
- `ex-young-permutation-characteristic-for-shape-two-one` · example — The Young permutation characteristic for shape (2,1)
- `ex-sign-twist-conjugates-the-s31-character` · example — Sign twist conjugates the (3,1) character of S_4
- `cex-outer-induction-is-not-the-kronecker-product` · counterexample — Outer induction is not the Kronecker product

### `analytic-hardy-spaces-and-canonical-factorisation` — Analytic Hardy Spaces and Canonical Factorisation (30 item(s))

- `def-analytic-hardy-space-disc` · definition — Analytic Hardy spaces on the unit disc
- `lem-hardy-radial-means-are-monotone` · lemma — Radial p-means of a holomorphic function are nondecreasing
- `thm-hardy-zero-set-blaschke-condition` · theorem — The zero set of a Hardy function satisfies the Blaschke condition
- `def-blaschke-product` · definition — Blaschke factors and Blaschke products
- `thm-blaschke-product-boundary-values-and-zeros` · theorem — Boundary values and zeros of a Blaschke product
- `thm-riesz-factorization-hardy-space` · theorem — F. Riesz factorization of a Hardy-space function
- `thm-fatou-boundary-theorem-analytic-hardy-spaces` · theorem — Fatou boundary theorem for analytic Hardy spaces
- `lem-hardy-log-integrability-of-boundary-values` · lemma — Log-integrability of boundary values (Riesz brothers)
- `lem-poisson-jensen-inequality-hardy-functions` · lemma — The Poisson-Jensen inequality for Hardy functions
- `def-inner-singular-inner-and-outer-functions` · definition — Inner, singular inner and outer functions
- `lem-outer-function-properties` · lemma — Properties of the outer function of a boundary modulus
- `lem-poisson-integral-of-a-singular-circle-measure-has-zero-nontangential-limit` · lemma — Singular circle measures have Poisson integral tending nontangentially to zero almost everywhere
- `lem-finite-positive-circle-measures-have-lebesgue-decomposition-under-countable-choice` · lemma — Finite positive circle measures admit a Lebesgue decomposition under countable choice
- `lem-bounded-holomorphic-disc-functions-have-fatou-limits-under-countable-choice` · lemma — Bounded holomorphic disc functions have Poisson boundary data and Fatou limits under countable choice
- `lem-complex-circle-measures-have-finite-total-variation-under-countable-choice` · lemma — Complex circle measures have finite regular total variation under countable choice
- `lem-finite-complex-circle-measures-are-determined-by-fourier-coefficients` · lemma — Finite complex circle measures are determined by Fourier coefficients and Poisson integrals
- `thm-singular-inner-function-properties` · theorem — Singular inner functions from finite singular measures
- `thm-zero-free-inner-functions-are-singular-inner` · theorem — Zero-free inner functions are singular inner functions
- `thm-inner-outer-factorisation-hardy-space` · theorem — Inner-outer factorization in Hardy spaces
- `lem-nevanlinna-sup-mean-criterion` · lemma — A harmonic majorant of log^+|F| exists exactly when the radial log^+ means are bounded
- `def-nevanlinna-class-on-the-disc` · definition — The Nevanlinna class on the disc
- `thm-nevanlinna-class-is-bounded-quotient-class` · theorem — The Nevanlinna class is a bounded quotient class
- `lem-nevanlinna-blaschke-factorization` · lemma — Blaschke factorization of a Nevanlinna-class function
- `thm-nevanlinna-boundary-values-and-log-integrability` · theorem — Boundary values and log-integrability for the Nevanlinna class
- `def-smirnov-class-on-the-disc` · definition — The Smirnov class on the disc
- `lem-smirnov-class-quotient-characterisation` · lemma — The Smirnov class as a class of quotients with outer denominator
- `thm-smirnov-maximum-principle` · theorem — The Smirnov maximum principle: N+ intersected with Lp is Hp
- `lem-analytic-poisson-integrals-have-vanishing-negative-coefficients` · lemma — Analytic Poisson integrals are exactly the measures with vanishing negative coefficients
- `thm-f-and-m-riesz-theorem` · theorem — The F. and M. Riesz theorem
- `cor-hardy-one-cauchy-representation` · corollary — The H1 boundary measure is an L1 density, and the Cauchy representation

### `analytic-hardy-spaces-and-canonical-factorisation-examples` — Analytic Hardy Spaces and Canonical Factorisation: Examples and Counterexamples (7 item(s))

- `ex-finite-blaschke-products` · example — Finite Blaschke products
- `ex-blaschke-product-with-zeros-accumulating-at-one` · example — An infinite Blaschke product whose zeros accumulate at the boundary
- `ex-singular-inner-function-from-a-point-mass` · example — A singular inner function generated by a point mass
- `ex-outer-function-with-prescribed-boundary-modulus` · example — An outer function with a prescribed power of a vanishing modulus
- `cex-divergent-blaschke-sum` · counterexample — A divergent Blaschke sum: no Hardy function has these zeros
- `ex-factorization-of-a-rational-function` · example — Inner-outer factorization of a rational function with one interior zero
- `ex-boundary-vanishing-and-uniqueness` · example — Boundary vanishing of a Hardy function is confined to a null set

### `level-one-modular-forms-and-the-j-invariant` — Level-One Modular Forms and the j-Invariant (27 item(s))

- `def-modular-group-action-on-the-upper-half-plane` · definition — The modular group and its action on the upper half-plane
- `lem-modular-group-reduction-to-the-standard-domain` · lemma — Reduction of orbits to the standard domain
- `thm-standard-fundamental-domain-for-the-modular-group` · theorem — The standard fundamental domain, boundary identifications and elliptic stabilisers
- `lem-modular-quotient-local-charts` · lemma — Local charts on quotients of the upper half-plane by finite-index subgroups
- `lem-level-one-cusp-chart-and-compactness` · lemma — The compactified quotient and the cusp chart
- `def-compactified-level-one-modular-curve` · definition — The compactified level-one modular curve X(1)
- `thm-q-expansion-principle-at-the-cusp` · theorem — The q-expansion principle at the cusp
- `def-level-one-modular-form-and-cusp-form` · definition — Level-one modular forms and cusp forms
- `lem-lattice-eisenstein-sums-converge` · lemma — Absolute convergence and holomorphy of the lattice Eisenstein sums
- `def-divisor-power-sums-sigma-k` · definition — The divisor power sums sigma_k
- `def-level-one-eisenstein-series` · definition — The level-one Eisenstein series E_k and E_2
- `lem-lipschitz-formula-for-the-lattice-sum` · lemma — The Lipschitz formula for the reciprocal-power sums
- `thm-eisenstein-series-are-modular-forms` · theorem — The Eisenstein series E_k are modular forms with the standard Fourier expansion
- `lem-valence-boundary-arc-computation` · lemma — The boundary-arc computation for the valence formula
- `thm-level-one-valence-formula` · theorem — The valence formula for level-one modular forms
- `cor-zeros-of-e4-and-e6-at-the-elliptic-points` · corollary — The zeros of E_4 and E_6 at the elliptic points
- `cor-dimension-of-level-one-modular-forms` · corollary — The dimension of the space of level-one modular forms
- `lem-e2-transformation-law` · lemma — The transformation law of E_2
- `lem-discriminant-is-a-nonvanishing-cusp-form` · lemma — The modular discriminant is a nonvanishing cusp form
- `def-modular-discriminant-and-j-invariant` · definition — The modular discriminant Delta and the j-invariant
- `thm-ring-of-level-one-modular-forms` · theorem — The ring of level-one modular forms is freely generated by E_4 and E_6
- `thm-j-invariant-classifies-complex-tori` · theorem — The j-invariant classifies complex tori up to biholomorphism
- `thm-j-uniformizes-the-level-one-modular-curve` · theorem — The j-invariant uniformises the level-one modular curve
- `thm-jacobi-theta-triple-product` · theorem — Jacobi theta triple product and nonvanishing of the theta constant
- `lem-jacobi-product-formula-for-the-discriminant` · lemma — Jacobi product formula for the modular discriminant
- `cor-integrality-of-the-j-invariant-fourier-coefficients` · corollary — Integral Fourier coefficients of the j-invariant
- `lem-jacobi-theta-transformation-laws` · lemma — Transformation laws of the Jacobi theta function

### `level-one-modular-forms-and-the-j-invariant-examples` — Level-One Modular Forms and the j-Invariant: Examples and Counterexamples (13 item(s))

- `ex-standard-fundamental-domain-tessellation` · example — The images of the standard domain tile the upper half-plane
- `ex-elliptic-points-of-the-modular-group` · example — The elliptic points of the modular group and their images under j
- `ex-first-fourier-coefficients-of-e4-e6-delta-and-j` · example — The first Fourier coefficients of E_4, E_6, Delta and j
- `ex-no-nonzero-odd-weight-level-one-modular-forms` · example — There are no nonzero level-one modular forms of odd weight
- `ex-square-and-hexagonal-tori-and-their-j-invariants` · example — The square and hexagonal tori have j-invariants 1728 and 0
- `def-principal-congruence-subgroup-gamma-2` · definition — The principal congruence subgroup Gamma(2)
- `lem-gamma-2-is-torsion-free-and-has-no-elliptic-points` · lemma — Gamma(2)/{+-I} is torsion-free
- `def-modular-lambda-function` · definition — The modular lambda function
- `lem-lambda-transformation-laws` · lemma — Transformation laws of the modular lambda function
- `lem-lambda-fibres-are-gamma-2-orbits` · lemma — The fibres of lambda are the Gamma(2)-orbits
- `lem-weierstrass-j-invariant-of-the-legendre-normal-form` · lemma — The j-invariant of the Legendre normal form
- `ex-modular-lambda-biholomorphism-onto-the-slit-plane` · example — lambda maps the standard Gamma(2) domain biholomorphically onto the slit plane
- `fs-level-one-e2-is-a-weight-two-modular-form` · false-statement — FALSE: E_2 is a modular form of weight 2

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 6 Alpha group reader — read-only digest, `frontier-38-owner-30`

- **Role and scope:** You are the Step 6 Alpha group reader for the assigned group in the generated group header. Read every assigned page and item, its cited published dependencies, and every listed cross-group seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned group: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the group.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-7 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the group's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-group findings correctly:** Put a finding about another group's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
