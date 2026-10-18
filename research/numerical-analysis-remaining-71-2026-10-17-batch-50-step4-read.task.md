# Step 4 batch reviewer — batch **50**, run `numerical-analysis-remaining-71-2026-10-17`

You are the only reviewer for batch **50**. Step-5 owning group: **q**.
Return `group: "q"` and `batches: ["50"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 50 | `substructuring-feti-dp-and-bddc-preconditioners` | A | overlapping-schwarz-and-stable-subspace-decompositions |
| 50 | `substructuring-feti-dp-and-bddc-preconditioners-examples` | B | substructuring-feti-dp-and-bddc-preconditioners |

## Your content, in full

### `substructuring-feti-dp-and-bddc-preconditioners` — Substructuring, FETI-DP and BDDC

- `def-pe26-scalar-substructuring-model` · definition — Scalar finite-element substructuring model
- `lem-pe26-preconditioned-operator-norm-bound` · lemma — Eigenvalue bounds from a left-inverse preconditioner
- `thm-pe26-local-energy-kernel-and-interior-spd` · theorem — Floating local kernels and positive interior blocks
- `def-pe26-primal-interface-spaces-and-jumps` · definition — Primal interface spaces and jump convention
- `def-pe26-discrete-harmonic-extension-and-schur-complement` · definition — Discrete harmonic extension and interface Schur complement
- `thm-pe26-primal-constraints-remove-floating-kernels` · theorem — Primal constraints remove local floating kernels
- `thm-pe26-harmonic-extension-minimizes-energy` · theorem — Discrete harmonic extension minimizes energy
- `thm-pe26-static-condensation-is-exact-interface-solve` · theorem — Static condensation is the exact interface problem
- `def-pe26-scaled-averaging-and-bddc-preconditioner` · definition — Coefficient-scaled averaging and BDDC
- `lem-pe26-discrete-trace-schur-equivalence` · lemma — Discrete Schur energy and the fractional trace norm
- `prop-pe26-bddc-constrained-local-minimization` · proposition — BDDC is the constrained partial-energy minimizer
- `def-pe26-feti-dp-dual-system-and-preconditioner` · definition — FETI-DP dual system and preconditioner
- `lem-pe26-log-edge-cutoff-and-discrete-sobolev` · lemma — Two-dimensional logarithmic edge cutoff estimates
- `prop-pe26-feti-dp-is-dual-schur-complement` · proposition — FETI-DP is the exact dual Schur system
- `lem-pe26-complementary-primal-dual-spectrum` · lemma — Complementary primal and dual projections share nonunit spectrum
- `lem-pe26-scaled-averaging-energy-bound` · lemma — Two-dimensional scaled averaging energy bound
- `rem-pe26-conditioning-and-work-are-separate` · remark — Conditioning and solver work are separate claims
- `thm-pe26-nontrivial-spectrum-bddc-feti-dp` · theorem — BDDC and FETI-DP have matching nontrivial spectra
- `thm-pe26-condition-number-2d-polylogarithmic` · theorem — The two-dimensional BDDC and FETI-DP polylogarithmic bound

### `substructuring-feti-dp-and-bddc-preconditioners-examples` — Substructuring, FETI-DP and BDDC — Examples

- `ex-pe26-missing-primal-corner` · example — A floating component without a constant-detecting primal constraint remains singular
- `ex-pe26-two-floating-poisson-subdomains` · example — Two floating Poisson subdomains and primal anchoring
- `ex-pe26-matching-primal-dual-spectrum` · example — A finite-dimensional BDDC/FETI-DP spectral match
- `ex-pe26-coarse-solve-work-bottleneck` · example — A dense coarse solve can dominate local work

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `substructuring-feti-dp-and-bddc-preconditioners` requires `overlapping-schwarz-and-stable-subspace-decompositions`
---

# Step 4 Alpha batch reviewer — read-only digest, `numerical-analysis-remaining-71-2026-10-17`

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
