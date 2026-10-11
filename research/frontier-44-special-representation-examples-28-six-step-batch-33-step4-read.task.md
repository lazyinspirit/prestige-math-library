# Step 4 batch reviewer — batch **33**, run `frontier-44-special-representation-examples-28-six-step`

You are the only reviewer for batch **33**. Step-5 owning group: **a**.
Return `group: "a"` and `batches: ["33"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 33 | `complex-algebraic-stratified-topology` | A | analytic-constructible-sheaf-foundations, blowups-exceptional-divisors-and-strict-transforms, classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface, constructible-incidence-and-cochain-models, dimension-constructible-images-and-dimensions-of-fibres, euclidean-ordinary-differential-equations-with-smooth-dependence, finite-proper-and-projective-morphisms, holomorphic-inverse-and-weierstrass-preparation, integral-extensions-and-going-up, krull-dimension-and-height-theorems, local-coefficients-twisted-homology-and-duality, noether-normalisation-and-nullstellensatz, products-segre-and-veronese-embeddings-and-grassmannians, rank-theorems-and-embedded-submanifolds, relations-functions-and-quotients, relative-smooth-triangulation-and-bundle-fitting, riemann-surfaces-branched-maps-and-differentials, simple-homotopy-whitehead-groups-and-torsion, simplicial-complexes-and-simplicial-homology, simplicial-subdivision-and-simplicial-approximation, smooth-partitions-of-unity-and-exhaustions, whitney-embedding-tubular-neighbourhoods-and-approximation, zariski-tangent-spaces-regular-points-smoothness-and-bertini |
| 33 | `complex-algebraic-stratified-topology-examples` | B | complex-algebraic-stratified-topology, simplicial-complexes-and-simplicial-homology |

## Your content, in full

### `complex-algebraic-stratified-topology` — Complex Algebraic Stratified Topology

- `def-finite-complex-algebraic-whitney-stratification-and-control-data` · definition — Finite complex algebraic Whitney stratification and control data
- `lem-generic-complex-algebraic-whitney-regularity` · lemma — Generic complex algebraic Whitney regularity
- `thm-complex-algebraic-varieties-and-maps-admit-compatible-finite-stratifications` · theorem — Complex algebraic varieties and maps admit compatible finite stratifications
- `lem-whitney-normal-tubes-have-submersive-radius-and-bounded-stratumwise-lifts` · lemma — Whitney normal tubes have submersive radius and bounded stratumwise lifts
- `lem-relative-tubular-neighborhoods-preserve-a-chain-of-submersions` · lemma — Relative tubular neighborhoods preserve a chain of submersions
- `lem-whitney-stratifications-admit-compatible-control-data` · lemma — Whitney stratifications admit compatible control data
- `lem-controlled-stratified-submersions-have-continuous-local-trivializations` · lemma — Controlled stratified submersions have continuous local trivializations
- `thm-algebraic-whitney-strata-have-controlled-local-conical-neighborhoods` · theorem — Algebraic Whitney strata have controlled local conical neighborhoods
- `lem-compact-controlled-whitney-spaces-admit-commuting-radial-collars` · lemma — Compact controlled Whitney spaces admit commuting radial collars
- `lem-finite-simplicial-maps-have-explicit-compatible-triangulated-mapping-cylinders` · lemma — Finite simplicial maps have explicit compatible triangulated mapping cylinders
- `lem-compact-semialgebraic-families-admit-compatible-finite-triangulations` · lemma — Compact controlled Whitney spaces admit compatible finite triangulations
- `lem-finite-simplicial-open-stars-have-explicit-conical-product-charts` · lemma — Finite simplicial open stars have explicit conical product charts
- `lem-finite-cell-local-system-cohomology-is-finite-and-commutes-with-field-extension` · lemma — Finite cell local system cohomology is finite and commutes with field extension
- `thm-constructible-sheaves-admit-finite-stratified-triangulations-and-finite-local-cohomology` · theorem — Algebraically constructible sheaves have finite compatible stratified and local cochain models
- `lem-complex-algebraic-stratifications-have-finite-conical-cochain-models` · lemma — Complex algebraic constructible complexes have finite conical cochain models

### `complex-algebraic-stratified-topology-examples` — Complex Algebraic Stratified Topology Examples

- `ex-a-noncompact-algebraic-line-needs-a-deleted-boundary-triangulation` · example — A noncompact algebraic line needs a deleted boundary triangulation

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `complex-algebraic-stratified-topology` requires `analytic-constructible-sheaf-foundations`
- `complex-algebraic-stratified-topology` requires `constructible-incidence-and-cochain-models`
- `complex-algebraic-stratified-topology` requires `relative-smooth-triangulation-and-bundle-fitting`
- `affine-perverse-vanishing-and-universal-hyperplanes` requires `complex-algebraic-stratified-topology`
- `proper-hyperresolutions-and-mixed-hodge-restriction-images` requires `complex-algebraic-stratified-topology`
- `analytic-derived-six-operations-and-duality` requires `complex-algebraic-stratified-topology`
- `equivariant-constructible-perverse-foundations` requires `complex-algebraic-stratified-topology`
- `quiver-full-flag-projective-semisimplicity` requires `complex-algebraic-stratified-topology`
---

# Step 4 Alpha batch reviewer — read-only digest, `frontier-44-special-representation-examples-28-six-step`

- **Role and scope:** You are the Step 4 Alpha batch reviewer for the single assigned batch in the generated batch header. Read every assigned page and item, its cited published dependencies, and every listed cross-batch seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned batch: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the batch.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-5 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the batch's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-batch findings correctly:** Put a finding about another batch's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
- **Identity:** `group` is the Step-5 owning group named in your header; `batches` is exactly a one-element array containing your assigned batch number. A digest from another batch cannot cover yours.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
