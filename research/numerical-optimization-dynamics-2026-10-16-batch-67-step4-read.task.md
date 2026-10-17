# Step 4 batch reviewer — batch **67**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **67**. Step-5 owning group: **s**.
Return `group: "s"` and `batches: ["67"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 67 | `restarted-and-block-eigensolvers` | A | eigenvalue-iterations-and-the-qr-algorithm, krylov-subspaces-arnoldi-and-gmres, computed-schur-decompositions-and-nonnormal-spectra, krylov-methods-and-lanczos-convergence, generalized-eigenvalue-pencils-and-qz-methods, preconditioner-algorithms-and-residual-metrics |
| 67 | `restarted-and-block-eigensolvers-examples` | B | restarted-and-block-eigensolvers |

## Your content, in full

### `restarted-and-block-eigensolvers` — Restarted and block eigensolvers

- `alg-thick-and-implicitly-restarted-arnoldi-with-locking` · algorithm — Finite-budget thick and implicitly restarted Arnoldi with residual acceptance and locking
- `thm-implicit-restart-polynomial-subspace-and-residual-identity` · theorem — Exact implicit Arnoldi restart applies its shift polynomial and preserves an Arnoldi residual identity
- `alg-block-lobpcg-with-rank-loss-status` · algorithm — Finite-budget block LOBPCG for a Hermitian-definite pencil with explicit rank-loss status
- `thm-finite-budget-restarted-and-block-procedures-return-a-status` · theorem — Finite-budget restarted Arnoldi and block LOBPCG return a status under finite-return primitives
- `lem-generalized-ritz-values-monotone-under-nested-subspaces` · lemma — Generalized Ritz values obey min-max bounds and are monotone under trial-space inclusion
- `lem-block-principal-angle-squared-ritz-enclosure` · lemma — A principal-angle bound encloses the largest selected generalized Ritz value across a spectral gap
- `thm-lobpcg-selected-ritz-values-do-not-increase` · theorem — A successful LOBPCG Rayleigh-Ritz update cannot increase the selected Ritz values
- `alg-shift-invert-and-harmonic-ritz-extraction` · algorithm — Shift-invert and harmonic Ritz extraction with solve and pencil status
- `thm-finite-budget-shift-invert-and-harmonic-procedures-return-a-status` · theorem — Finite-budget shift-invert and harmonic extraction return a status under finite-return primitives
- `thm-shift-invert-map-and-inexact-solve-residual-transfer` · theorem — Shift-invert maps eigenvalues exactly and transfers an inexact solve residual to the original eigenpair

### `restarted-and-block-eigensolvers-examples` — Restarted and block eigensolvers — Examples

- `ex-implicit-restart-shift-can-suppress-wanted-component` · example — A shift near the wanted eigenvalue suppresses its component under repeated implicit restarts
- `ex-clustered-vibration-modes-with-block-lobpcg` · example — A two-vector LOBPCG block resolves a clustered pair in one finite Rayleigh-Ritz update
- `ex-interior-vibration-mode-shift-invert` · example — Shift-invert isolates an interior vibration mode and records solve error

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `restarted-and-block-eigensolvers` requires `computed-schur-decompositions-and-nonnormal-spectra`
- `restarted-and-block-eigensolvers` requires `krylov-methods-and-lanczos-convergence`
- `restarted-and-block-eigensolvers` requires `generalized-eigenvalue-pencils-and-qz-methods`
- `restarted-and-block-eigensolvers` requires `preconditioner-algorithms-and-residual-metrics`
- `gaussian-quadrature` requires `restarted-and-block-eigensolvers`
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
