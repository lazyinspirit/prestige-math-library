# Step 4 batch reviewer — batch **30**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **30**. Step-5 owning group: **j**.
Return `group: "j"` and `batches: ["30"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 30 | `banach-range-invariance-and-eit-rates` | A | nonlinear-inverse-problems-and-tangential-cone-conditions, variational-source-conditions-and-bregman-rates, fredholm-elliptic-problems-and-the-elliptic-spectrum, volume-integral-scattering-and-partial-wave-error, littlewood-paley-theory-and-square-functions |
| 30 | `banach-range-invariance-and-eit-rates-examples` | B | banach-range-invariance-and-eit-rates |

## Your content, in full

### `banach-range-invariance-and-eit-rates` — Banach range invariance and EIT rates

- `lem-ip-collared-sobolev-besov-source-functional-cutoff` · lemma — Besov smoothness gives the exact collared Sobolev penalty a cutoff source bound
- `lem-ip-positive-sobolev-cgo-remainders-by-shifted-lattice` · lemma — Positive-Sobolev CGO remainders from a shifted Fourier lattice
- `lem-ip-sharp-weighted-modulated-cgo-remainder-absorption` · lemma — Sharp weighted absorption of modulated CGO remainders
- `lem-ip-calderon-boundary-trace-quotient-identification` · lemma — Boundary trace quotient and chart norm equivalence
- `lem-ip-centered-neumann-sequence-map-and-differentiability` · lemma — Centered Neumann voltage sequences on the three-dimensional ball
- `lem-ip-logarithmic-index-conjugate-and-parameter-rates` · lemma — Logarithmic source indices and their admissible parameter scales
- `lem-ip-collared-liouville-potential-and-hone-recovery` · lemma — Collared Sobolev conductivities have regular Liouville potentials and H1 recovery
- `lem-ip-logarithmic-endpoint-under-effective-noise-control` · lemma — A logarithmic endpoint rate with explicit effective noise and tolerance control
- `lem-ip-centered-ntd-cgo-identity-and-modulated-remainder` · lemma — Centered NtD data control the exact CGO identity with its modulation factor
- `lem-ip-geometric-logarithmic-frozen-stopping-schedule` · lemma — Geometric parameters satisfy the logarithmic frozen stopping and growth conditions
- `def-ip-differential-range-invariance` · definition — Differential range invariance for Banach-space maps
- `lem-ip-sharp-centered-eit-hone-logarithmic-stability` · lemma — H1 logarithmic stability from centered three-dimensional NtD data
- `def-ip-relaxed-range-invariance-objective` · definition — Joint and frozen-Newton objectives for range-invariant relaxations
- `lem-ip-joint-range-invariance-vsc-estimate` · lemma — The joint relaxed objective controls Bregman and range errors
- `lem-ip-frozen-newton-one-step-error-recursion` · lemma — A frozen Newton step yields a controlled error inequality
- `lem-ip-eit-centered-range-invariance-vsc-and-frozen-compatibility` · lemma — The full collared EIT class satisfies the centered range and source interfaces
- `thm-ip-joint-regularization-rate-under-range-invariance` · theorem — Joint regularization rates under differential range invariance
- `thm-ip-frozen-newton-rate-under-range-invariance` · theorem — Frozen Newton rates under differential range invariance
- `rem-ip-eit-conductivity-rate-source-reconciliation` · remark — Source corrections for three-dimensional EIT rates

### `banach-range-invariance-and-eit-rates-examples` — Banach range invariance and EIT rates — Examples and Counterexamples

- `ex-ip-partial-observation-range-invariance-without-tcc` · example — Range invariance can hold when the tangential cone condition fails
- `ex-ip-relaxed-variable-requires-penalty` · example — An added variable is not identifiable without a penalty

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `banach-range-invariance-and-eit-rates` requires `nonlinear-inverse-problems-and-tangential-cone-conditions`
- `banach-range-invariance-and-eit-rates` requires `variational-source-conditions-and-bregman-rates`
- `eit-logarithmic-stability-and-conductivity-classes` requires `banach-range-invariance-and-eit-rates`
---

# Step 4 Alpha batch reviewer — read-only digest, `inverse-problems-knot-theory-all-109-2026-10-19`

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
