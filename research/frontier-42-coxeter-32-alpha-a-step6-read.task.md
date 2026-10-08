# Step 6 Alpha group reader — read-only digest — group **a**, run `frontier-42-coxeter-32`

- You are the read-only Step 6 Alpha group reader for batches **1**, **3**: 2 A/B pair(s), 4 page(s), 24 item(s).

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
| 1 | `tensor-coherence-and-algebraic-descent` | A | hopf-hecke-algebras | 1688 | `tensor-products-of-modules`, `modules-and-module-homomorphisms`, `ideals-and-quotient-rings`, `dual-spaces-bilinear-forms-and-inertia`, `linear-independence-bases-and-dimension`, `linear-maps-rank-nullity-and-quotient-spaces`, `chain-conditions-and-semisimple-modules`, `relations-functions-and-quotients` |
| 1 | `tensor-coherence-and-algebraic-descent-examples` | B | hopf-hecke-algebras | 1689 | `tensor-coherence-and-algebraic-descent` |
| 3 | `generic-coxeter-hecke-algebras-and-the-standard-basis` | A | hopf-hecke-algebras | 1710 | `tensor-coherence-and-algebraic-descent`, `coxeter-presentations-exchange-and-reduced-word-theorems`, `polynomial-rings-and-roots` |
| 3 | `generic-coxeter-hecke-algebras-and-the-standard-basis-examples` | B | hopf-hecke-algebras | 1711 | `generic-coxeter-hecke-algebras-and-the-standard-basis`, `the-group-algebra-and-representations` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `tensor-coherence-and-algebraic-descent` — Tensor Coherence and Algebraic Descent (10 item(s))

- `def-hh-scalar-and-tensor-conventions` · definition — Scalars, tensor powers, the empty tensor, opposite algebras and finite sums
- `lem-hh-tensor-coherence-on-elementary-tensors` · lemma — Associator naturality, pentagon, unit triangle and symmetry hexagons on elementary tensors
- `lem-hh-tensor-injections-quotients-and-kernels-over-a-field` · lemma — Tensoring injections and the kernel of a tensor product of quotient maps over a field
- `lem-hh-coefficient-extension-and-finite-tensor-separation` · lemma — Coefficient separation for an independent family of vectors, with the exact Choice boundary
- `lem-hh-finite-tensor-duality-and-canonical-coevaluation` · lemma — Finite tensor duality and basis-independent coevaluation
- `lem-hh-free-associative-ring-and-relations-descent` · lemma — The free associative R-algebra on a set and descent of relations
- `lem-hh-universal-presentations-and-base-change` · lemma — Presentation base change and transport of explicit bases to commutative specializations
- `lem-hh-finite-polynomial-and-localization-constructions` · lemma — Multivariate polynomial and Laurent rings over commutative rings, domains and fraction fields
- `lem-hh-finite-matrix-and-module-preliminaries` · lemma — Finite matrix and module preliminaries: right inverses, rank invariance, finite length and nilpotent trace
- `lem-hh-regular-module-detects-linear-and-tensor-identities` · lemma — The left regular module and its tensor powers detect linear and tensor identities

### `tensor-coherence-and-algebraic-descent-examples` — Tensor Coherence and Algebraic Descent — Examples (5 item(s))

- `ex-hh-elementary-tensor-presentations-and-invariant-contractions` · example — Many finite presentations of one tensor and the invariant contraction
- `ex-hh-pentagon-on-four-named-vectors` · example — The pentagon on four named vectors in $k^2$
- `ex-hh-tensor-quotient-by-a-one-dimensional-subspace` · example — The tensor quotient by a one-dimensional subspace and its kernel
- `ex-hh-finite-coevaluation-in-two-bases` · example — Finite coevaluation computed in two bases
- `cex-hh-infinite-dimensional-tensor-dual-identification-fails` · counterexample — An infinite-dimensional tensor-dual functional outside the image

### `generic-coxeter-hecke-algebras-and-the-standard-basis` — Generic Coxeter Hecke Algebras and the Standard Basis (5 item(s))

- `def-hh-universal-coxeter-hecke-parameters-and-presentation` · definition — Universal parameters, the generic Coxeter Hecke algebra and generator conjugacy
- `lem-hh-reduced-word-independence-and-length-multiplication` · lemma — Reduced-word independence of T_w and the length-multiplication rules
- `lem-hh-commuting-left-right-hecke-length-operators` · lemma — The commuting left and right length operators and their Hecke relations
- `thm-hh-generic-coxeter-hecke-standard-basis` · theorem — The generic Coxeter Hecke algebra is free with standard basis {T_w}, and its basis survives base change
- `lem-hh-hecke-anti-involution-bar-and-normalization` · lemma — The reversal anti-involution, the bar operator and the multiplicative normalization

### `generic-coxeter-hecke-algebras-and-the-standard-basis-examples` — Generic Coxeter Hecke Algebras and the Standard Basis — Examples (4 item(s))

- `ex-hh-rank-one-hecke-multiplication-in-both-normalizations` · example — The rank-one Hecke algebra in both normalizations
- `ex-hh-s3-hecke-multiplication-table-in-both-normalizations` · example — The complete S3 multiplication table in both normalizations
- `ex-hh-unequal-parameter-dihedral-consistency` · example — Unequal parameters in the dihedral cases: the odd-edge obstruction and the even-edge freedom
- `ex-hh-hecke-specialization-at-v-equals-one` · example — Specialization of the generic Hecke algebra to the group ring

## Your seams

Your pages depend on another group's:

- `generic-coxeter-hecke-algebras-and-the-standard-basis` requires `coxeter-presentations-exchange-and-reduced-word-theorems` (group b, batch 2)

Another group's pages depend on yours:

- `coxeter-presentations-exchange-and-reduced-word-theorems` (group b) requires your `tensor-coherence-and-algebraic-descent`
- `coxeter-artin-and-hecke-interfaces` (group i) requires your `generic-coxeter-hecke-algebras-and-the-standard-basis`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

---

# Step 6 Alpha group reader — read-only digest, `frontier-42-coxeter-32`

- **Role and scope:** You are the Step 6 Alpha group reader for the assigned group in the generated group header. Read every assigned page and item, its cited published dependencies, and every listed cross-group seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned group: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the group.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-7 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the group's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-group findings correctly:** Put a finding about another group's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
