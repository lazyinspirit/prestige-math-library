# Step 4 batch reviewer — batch **54**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **54**. Step-5 owning group: **g**.
Return `group: "g"` and `batches: ["54"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 54 | `geometric-numerical-integration` | A | hamiltonian-mechanics-and-completely-integrable-systems, symplectic-manifolds-moser-stability-and-darboux-weinstein-theory, runge-kutta-methods-and-order, hamiltonian-monte-carlo-and-leapfrog |
| 54 | `geometric-numerical-integration-examples` | B | geometric-numerical-integration |

## Your content, in full

### `geometric-numerical-integration` — Geometric numerical integration

- `def-local-leapfrog-domain-on-an-open-configuration-set` · definition — Local domain restriction for kick, drift, and leapfrog maps
- `lem-local-hamiltonian-flow-preserves-symplectic-matrix` · lemma — A smooth local Hamiltonian flow preserves the canonical symplectic matrix
- `alg-local-symplectic-euler-step` · algorithm — Local kick-then-drift symplectic Euler step
- `alg-implicit-midpoint-hamiltonian-step` · algorithm — Local implicit midpoint step for a Hamiltonian vector field
- `lem-canonical-kick-and-drift-shears-have-symplectic-jacobians` · lemma — Canonical kick and drift shears satisfy the symplectic Jacobian identity
- `prop-local-leapfrog-and-symplectic-euler-are-symplectic` · proposition — Local leapfrog and kick-then-drift symplectic Euler are symplectic
- `thm-local-symplectic-euler-and-leapfrog-trajectory-errors` · theorem — Local and finite-time trajectory error for symplectic Euler and leapfrog
- `thm-implicit-midpoint-branch-symplectic-order-and-error` · theorem — The admitted implicit midpoint branch is symplectic and second order
- `lem-finite-modified-hamiltonian-exists` · lemma — A finite formal logarithm has Hamiltonian coefficients on a star-shaped domain
- `lem-truncated-modified-flow-matches-map` · lemma — A fixed finite modified flow matches its method map to the stated Taylor order
- `lem-finite-modified-hamiltonian-close-to-original` · lemma — A fixed finite modified Hamiltonian is close to the original energy
- `lem-one-step-modified-energy-defect` · lemma — The finite modified Hamiltonian has a bounded one-step defect
- `thm-finite-order-modified-energy-bound` · theorem — Finite-order modified energy control on a compact tube

### `geometric-numerical-integration-examples` — Geometric numerical integration — Examples

- `ex-backward-euler-is-a-stable-but-not-symplectic` · example — Backward Euler is A-stable but not symplectic
- `ex-stoermer-verlet-bounded-harmonic-oscillator-energy` · example — Störmer–Verlet has bounded oscillatory energy error on the harmonic oscillator
- `ex-symplectic-euler-harmonic-oscillator` · example — Kick-then-drift symplectic Euler on the harmonic oscillator

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `geometric-numerical-integration` requires `runge-kutta-methods-and-order`
- `constrained-dynamics-shake-and-rattle` requires `geometric-numerical-integration`
- `interacting-particle-mean-field-and-vortex-blob-error` requires `geometric-numerical-integration`
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
