# Step 7 whole-group reading — group **d**, run `frontier-32`

You are the group Alpha for batches **7**, **16**, **17**: 4 A/B pair(s), 8 page(s), 97 item(s).

Read every owned item and every listed seam before returning the compact
schema-constrained digest. That file, not this conversation, is the handoff
to a fresh Step-8 adjudicator. No judge verdict is supplied here.
In the digest, `pages_read` is exactly the ids under **Your pages** and
`items_read` exactly the ids under **Your content**. External items you
open belong only in `published_dependencies`; never add them to those inventories.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## Read scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**This dispatch is read-only.** Record concerns about owned items and alerts
about other groups in the returned digest; do not repair anything.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 7 | `perron-inversion-and-the-explicit-formula` | A | number-theory | 348.013 | `primitive-dirichlet-l-functions-and-functional-equations-examples` |
| 7 | `perron-inversion-and-the-explicit-formula-examples` | B | number-theory | 348.014 | `perron-inversion-and-the-explicit-formula` |
| 7 | `prime-ideal-decomposition-ramification-and-the-different` | A | number-theory | 365.913 | `number-fields-rings-of-integers-and-discriminants-examples` |
| 7 | `prime-ideal-decomposition-ramification-and-the-different-examples` | B | number-theory | 365.914 | `prime-ideal-decomposition-ramification-and-the-different` |
| 16 | `homomorphisms-between-verma-modules-and-linkage` | A | lie-theory | 510.005 | `verma-modules-and-shapovalov-forms-examples` |
| 16 | `homomorphisms-between-verma-modules-and-linkage-examples` | B | lie-theory | 510.006 | `homomorphisms-between-verma-modules-and-linkage` |
| 17 | `schur-indices-and-fields-of-definition` | A | representation-theory | 510.035 | `brauer-induction-and-elementary-subgroups-examples` |
| 17 | `schur-indices-and-fields-of-definition-examples` | B | representation-theory | 510.036 | `schur-indices-and-fields-of-definition` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `perron-inversion-and-the-explicit-formula` — Perron Inversion and the Explicit Formula (14 item(s))

- `def-starred-summatory-function` · definition
- `lem-perron-kernel` · lemma
- `lem-truncated-perron-kernel` · lemma
- `thm-perron-formula` · theorem
- `thm-truncated-perron-formula` · theorem
- `def-half-weighted-chebyshev-psi` · definition
- `def-riemann-zeta-zero-counting` · definition
- `thm-riemann-von-mangoldt-zero-counting` · theorem
- `cor-zeta-zero-count-unit-interval` · corollary
- `lem-local-logarithmic-derivative-zeta` · lemma
- `lem-logarithmic-derivative-zeta-left-half-plane` · lemma
- `lem-von-mangoldt-explicit-formula-residues` · lemma
- `thm-von-mangoldt-explicit-formula-smoothed` · theorem
- `thm-von-mangoldt-explicit-formula-truncated` · theorem

### `perron-inversion-and-the-explicit-formula-examples` — Perron Inversion and the Explicit Formula — Examples (7 item(s))

- `ex-perron-kernel-at-and-away-from-the-jump` · example
- `ex-perron-formula-for-a-finite-dirichlet-polynomial` · example
- `ex-von-mangoldt-residue-table` · example
- `ex-smoothed-versus-sharp-explicit-formula` · example
- `ex-selecting-an-admissible-contour-height` · example
- `cex-an-unordered-infinite-zero-sum-is-not-a-formula` · counterexample
- `cex-right-continuous-psi-has-the-wrong-perron-endpoint` · counterexample

### `prime-ideal-decomposition-ramification-and-the-different` — Prime Ideal Decomposition Ramification and the Different (24 item(s))

- `def-absolute-norm-of-an-ideal` · definition
- `lem-nonzero-number-field-ideal-has-finite-quotient` · lemma
- `thm-number-field-integral-ideal-factorisation-in-zf` · theorem
- `thm-principal-ideal-norm-is-absolute-field-norm` · theorem
- `thm-ideal-norm-is-multiplicative` · theorem
- `cor-norm-of-a-prime-ideal` · corollary
- `def-prime-above-and-residue-degree` · definition
- `def-ramification-index` · definition
- `thm-fundamental-identity-for-primes-in-number-fields` · theorem
- `def-split-inert-ramified-and-unramified-prime` · definition
- `thm-ramification-and-residue-degrees-in-towers` · theorem
- `thm-dedekind-kummer-prime-factorisation` · theorem
- `cor-eisenstein-prime-is-totally-ramified` · corollary
- `thm-ramified-primes-and-the-number-field-discriminant` · theorem
- `cor-only-finitely-many-primes-ramify` · corollary
- `def-trace-dual-and-codifferent-of-a-number-field` · definition
- `lem-codifferent-is-a-fractional-ideal` · lemma
- `def-different-of-a-number-field` · definition
- `thm-different-of-a-monogenic-number-field` · theorem
- `thm-discriminant-is-the-norm-of-the-different` · theorem
- `thm-prime-support-of-the-different-is-ramification` · theorem
- `def-tame-and-wild-ramification` · definition
- `thm-different-exponent-in-tame-and-wild-ramification` · theorem
- `cor-discriminant-valuation-from-different-exponents` · corollary

### `prime-ideal-decomposition-ramification-and-the-different-examples` — Prime Ideal Decomposition Ramification and the Different — Examples (8 item(s))

- `ex-prime-factorization-in-quadratic-fields` · example
- `ex-dedekind-kummer-in-a-cubic-field` · example
- `cex-dedekind-kummer-without-the-index-hypothesis` · counterexample
- `ex-eisenstein-total-ramification` · example
- `ex-quadratic-field-codifferent` · example
- `ex-cyclotomic-different-preview` · example
- `ex-tame-different-exponent` · example
- `ex-wild-different-exponent` · example

### `homomorphisms-between-verma-modules-and-linkage` — Homomorphisms Between Verma Modules and Linkage (20 item(s))

- `prop-verma-homomorphisms-are-singular-vectors` · proposition — Verma homomorphisms and singular vectors
- `lem-enveloping-algebra-of-the-negative-nilpotent-lie-algebra-is-a-domain` · lemma — The enveloping algebra of the negative nilpotent Lie algebra is a domain
- `lem-a-nonzero-verma-homomorphism-is-injective` · lemma — A nonzero homomorphism between Verma modules is injective
- `lem-every-verma-module-contains-a-simple-verma-submodule` · lemma — Every Verma module contains a simple Verma submodule
- `lem-homomorphisms-from-a-simple-verma-module-have-dimension-at-most-one` · lemma — Homomorphisms from a simple Verma module have dimension at most one
- `thm-verma-homomorphism-spaces-have-dimension-at-most-one` · theorem — Homomorphism spaces between Verma modules have dimension at most one
- `lem-simple-root-singular-vector-in-a-verma-module` · lemma — The simple-root singular vector in a Verma module
- `prop-simple-reflection-embedding-of-verma-modules` · proposition — Simple-reflection embeddings of Verma modules
- `thm-verma-embedding-for-an-arbitrary-positive-root` · theorem — Verma embedding for an arbitrary positive root
- `def-strong-linkage-order-on-weights` · definition — The strong linkage order on weights
- `lem-a-verma-composition-factor-has-the-same-central-character` · lemma — A Verma composition factor has the same central character
- `prop-verma-composition-multiplicities-are-finite` · proposition — Verma composition multiplicities are finite
- `def-jantzen-deformation-and-filtration-of-a-verma-module` · definition — The Jantzen deformation and filtration of a Verma module
- `lem-first-jantzen-filtration-term-is-the-verma-maximal-submodule` · lemma — The first Jantzen filtration term is the maximal Verma submodule
- `thm-jantzen-sum-formula-for-a-verma-module` · theorem — The Jantzen sum formula for a Verma module
- `thm-strong-linkage-principle-for-verma-modules` · theorem — The strong linkage principle for Verma modules
- `lem-verma-embedding-implies-strong-linkage` · lemma — A Verma embedding implies strong linkage
- `thm-bgg-verma-homomorphism-criterion` · theorem — The BGG criterion for homomorphisms between Verma modules
- `cor-generic-verma-modules-are-simple` · corollary — Generic Verma modules are simple
- `cor-antidominant-verma-modules-are-simple` · corollary — Antidominant regular Verma modules are simple

### `homomorphisms-between-verma-modules-and-linkage-examples` — Homomorphisms Between Verma Modules and Linkage — Examples (5 item(s))

- `ex-sl2-verma-embedding-chain` · example — The sl2 Verma embedding chain
- `ex-a2-regular-dominant-verma-embedding-poset` · example — The A2 regular integral-dominant Verma embedding poset
- `ex-a2-singular-dot-orbit-collapses` · example — A singular A2 dot orbit collapses
- `cex-equal-central-character-does-not-give-every-verma-embedding-direction` · counterexample — Equal central character does not give every Verma embedding direction
- `cex-nonintegral-reflection-does-not-produce-a-singular-power` · counterexample — A nonintegral reflection does not produce a singular power

### `schur-indices-and-fields-of-definition` — Schur Indices and Fields of Definition (15 item(s))

- `def-character-field-and-field-of-definition` · definition
- `def-galois-conjugate-representation` · definition
- `lem-base-change-of-intertwiner-spaces` · lemma
- `lem-galois-conjugates-have-equal-scalar-extension-multiplicity` · lemma
- `thm-scalar-extension-of-an-irreducible-finite-group-representation` · theorem
- `lem-character-field-is-the-stabilizer-fixed-field` · lemma
- `def-endomorphism-division-algebra-of-an-irreducible` · definition
- `thm-absolute-irreducibility-via-the-endomorphism-division-algebra` · theorem
- `def-schur-index-of-an-irreducible-character` · definition
- `lem-schur-index-is-independent-of-the-chosen-splitting-field` · lemma
- `thm-character-of-an-irreducible-over-a-nonsplitting-field` · theorem
- `cor-schur-index-divides-the-representation-degree` · corollary
- `def-index-of-a-central-division-algebra` · definition
- `thm-schur-index-equals-division-algebra-index` · theorem
- `thm-schur-index-as-minimal-realization-multiplicity` · theorem

### `schur-indices-and-fields-of-definition-examples` — Schur Indices and Fields of Definition — Examples (4 item(s))

- `ex-galois-conjugate-characters-of-c3` · example
- `ex-s3-is-split-over-the-rationals` · example
- `ex-quaternion-character-has-schur-index-two` · example
- `ex-trivial-character-has-schur-index-one` · example

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 7 — group reading digest, `frontier-32`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-8 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Inventory boundary: `pages_read` must contain exactly the ids under **Your
pages**, and `items_read` exactly the ids under **Your content**, with no extras.
Opening a published dependency does not expand either inventory; record its item
only under `published_dependencies`.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.
