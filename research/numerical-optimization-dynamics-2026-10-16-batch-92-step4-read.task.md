# Step 4 batch reviewer — batch **92**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **92**. Step-5 owning group: **ad**.
Return `group: "ad"` and `batches: ["92"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 92 | `finite-basis-projector-energies-and-variational-electronic-structure` | A | matrix-differentiation-and-first-order-spectral-perturbation, the-spectral-theorem-and-singular-value-decomposition, finite-element-eigenvalue-approximation, trust-region-and-cubic-regularization-methods, riemannian-optimization-on-stiefel-and-grassmann-manifolds |
| 92 | `finite-basis-projector-energies-and-variational-electronic-structure-examples` | B | finite-basis-projector-energies-and-variational-electronic-structure |

## Your content, in full

### `finite-basis-projector-energies-and-variational-electronic-structure` — Finite basis projector energies and variational electronic structure

- `def-rank-r-orthogonal-projector-domain` · definition — Rank-r orthogonal projector domain
- `def-finite-temperature-density-matrix-free-energy` · definition — Fixed-particle finite-temperature density-matrix free energy
- `lem-complex-hermitian-eigenvalues-lipschitz` · lemma — Ordered eigenvalues of Hermitian matrices are operator-norm Lipschitz
- `thm-nested-finite-basis-infimum-monotonicity` · theorem — Nested finite-basis infima decrease to the infimum over their union
- `lem-hermitian-idempotent-trace-equals-rank` · lemma — A Hermitian idempotent has trace equal to its rank
- `def-finite-basis-projector-energy-model` · definition — Finite-basis projector energy model
- `lem-finite-temperature-density-domain-compact` · lemma — The fixed-particle density-matrix domain is nonempty and compact
- `lem-finite-temperature-entropy-continuous-at-endpoints` · lemma — The finite-temperature trace entropy is continuous at occupation endpoints
- `prop-interior-entropy-trace-derivative` · proposition — The finite-temperature matrix entropy has its interior trace derivative
- `lem-rank-r-projector-grassmann-chart-and-tangent` · lemma — Graph charts and tangent directions for complex rank-r projectors
- `lem-finite-projector-domain-compact` · lemma — The finite rank-r projector domain is nonempty and compact
- `prop-finite-projector-energy-reality-and-gradient` · proposition — The finite projector energy is real and has the stated Frobenius gradient
- `thm-finite-temperature-free-energy-attains-minimum` · theorem — The finite-temperature free energy attains a minimum on the density domain
- `lem-finite-temperature-minimizer-is-interior` · lemma — A finite-temperature minimizer has strictly interior occupations
- `lem-complex-projector-tangent-commutator-curves` · lemma — Complex projector tangents are skew-Hermitian commutator directions
- `thm-finite-projector-energy-attains-minimum` · theorem — A finite-basis projector energy attains a global minimum
- `thm-finite-temperature-fermi-dirac-stationarity` · theorem — Interior finite-temperature stationarity gives Fermi-Dirac occupations
- `thm-finite-projector-commutator-stationarity` · theorem — Projector-energy stationarity is equivalent to Fock commutation
- `thm-positive-tangent-hessian-implies-strict-projector-minimum` · theorem — A positive tangent Hessian gives a strict local projector minimum

### `finite-basis-projector-energies-and-variational-electronic-structure-examples` — Finite basis projector energies and variational electronic structure — Examples

- `ex-incomplete-ci-trial-energy-exceeds-finite-ground-energy` · example — An incomplete finite trial space can lie strictly above the Hamiltonian ground energy
- `ex-nested-trial-spaces-may-have-equal-energies` · example — Nested trial spaces give nonincreasing energies, sometimes with equality
- `ex-zero-ritz-residual-does-not-identify-ground-state` · example — A zero Ritz residual can belong to an excited eigenstate
- `ex-overlap-whitening-can-amplify-coefficient-errors` · example — An ill-conditioned overlap preserves exact Ritz values but amplifies coordinate errors
- `ex-nonsmooth-exchange-correlation-functional-breaks-c2` · example — A cusp in a chosen exchange-correlation term violates the C2 hypothesis
- `ex-two-level-nonlinear-projector-stationary-maximum` · example — A two-level nonlinear projector model has a stationary strict maximum
- `ex-finite-basis-projector-optimization-on-grassmann` · example — Complex finite-basis PC-VAR optimization on Grassmann

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `finite-basis-projector-energies-and-variational-electronic-structure` requires `finite-element-eigenvalue-approximation`
- `finite-basis-projector-energies-and-variational-electronic-structure` requires `trust-region-and-cubic-regularization-methods`
- `finite-basis-projector-energies-and-variational-electronic-structure` requires `riemannian-optimization-on-stiefel-and-grassmann-manifolds`
- `self-consistent-projector-iterations-and-certified-mixing` requires `finite-basis-projector-energies-and-variational-electronic-structure`
---

# Step 4 Alpha batch reviewer — read-only digest, `numerical-optimization-dynamics-2026-10-16`

- **Role and scope:** You are the Step 4 Alpha batch reviewer for the single assigned batch in the generated batch header. Read every assigned page and item, its cited published dependencies, and every listed cross-batch seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned batch: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the batch.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-5 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the batch's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-batch findings correctly:** Put a finding about another batch's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
- **Published supplier findings:** Preserve each exact outside published-supplier finding in `alerts`. It has no in-run producer batch. The owner records a separate evidence-bound route after focused published repair; do not delete the alert, rewrite your digest, fabricate ownership, or claim the repair yourself.
- **Identity:** `group` is the Step-5 owning group named in your header; `batches` is exactly a one-element array containing your assigned batch number. A digest from another batch cannot cover yours.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
