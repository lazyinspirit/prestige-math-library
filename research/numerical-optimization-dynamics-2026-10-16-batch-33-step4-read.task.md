# Step 4 batch reviewer — batch **33**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **33**. Step-5 owning group: **p**.
Return `group: "p"` and `batches: ["33"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 33 | `computed-schur-decompositions-and-nonnormal-spectra` | A | eigenvalue-iterations-and-the-qr-algorithm, matrix-differentiation-and-first-order-spectral-perturbation, the-spectral-theorem-and-singular-value-decomposition, finite-precision-direct-factorizations, computed-singular-values-and-rank-revealing-factorizations |
| 33 | `computed-schur-decompositions-and-nonnormal-spectra-examples` | B | computed-schur-decompositions-and-nonnormal-spectra |

## Your content, in full

### `computed-schur-decompositions-and-nonnormal-spectra` — Computed schur decompositions and nonnormal spectra

- `def-real-and-complex-schur-forms` · definition — Real and complex Schur forms
- `def-exact-real-2x2-discriminant-sign-predicate` · definition — Exact sign predicate for a real 2x2 characteristic discriminant
- `def-closed-epsilon-pseudospectrum` · definition — Closed epsilon-pseudospectrum in the spectral norm
- `lem-unitary-similarity-error-accumulation` · lemma — Local unitary-similarity perturbations accumulate as a backward perturbation
- `lem-neumann-invertibility-for-finite-matrices` · lemma — A finite matrix within unit distance of the identity is invertible
- `lem-implicit-q-uniqueness-for-unreduced-hessenberg` · lemma — An unreduced Hessenberg similarity is determined by its first unitary column
- `lem-francis-compact-bulge-support-propagation` · lemma — A compact Francis bulge chase preserves Hessenberg form and the initial direction
- `alg-complex-scaled-householder-reflector-step` · algorithm — Scaled complex Householder reflector step with explicit range status
- `lem-complex-scaled-householder-step-termination-and-status` · lemma — The scaled complex Householder wrapper terminates with a unitary representative
- `lem-real-francis-double-shift-polynomial` · lemma — The real Francis double-shift polynomial is real and annihilates its trailing block
- `thm-closed-pseudospectrum-resolvent-perturbation-equivalence` · theorem — Closed pseudospectrum equals the resolvent, singular-value, and perturbation tests
- `thm-bauer-fike-eigenvalue-perturbation-bound` · theorem — Bauer-Fike bounds eigenvalue motion by the eigenvector condition number
- `alg-exact-francis-hessenberg-qr-step` · algorithm — Exact finite Francis single- or double-shift Hessenberg QR step
- `lem-exact-francis-step-termination-and-similarity` · lemma — An exact Francis step terminates with unitary similarity and its stated status
- `lem-francis-double-shift-bulge-chase-matches-explicit-qr` · lemma — Under unreduced hypotheses, the Francis double-shift chase matches explicit shifted QR
- `alg-finite-budget-francis-schur-reduction` · algorithm — Finite-budget computed Francis Schur reduction with explicit statuses
- `thm-computed-francis-schur-backward-error` · theorem — A finite computed Francis similarity sequence has a conditional normwise backward-error bound
- `thm-computed-pseudospectrum-membership-enclosure` · theorem — A certified computed smallest singular value encloses pseudospectrum membership
- `lem-two-sided-scaled-householder-similarity-error` · lemma — Left and right scaled Householder errors give a concrete similarity bound
- `lem-exact-rational-two-by-two-discriminant-sign` · lemma — Rational or dyadic stored real blocks have a finite exact discriminant-sign evaluator
- `thm-finite-budget-francis-schur-termination-and-status` · theorem — Finite Francis procedure terminates with explicit statuses and verifies its Schur pattern on success

### `computed-schur-decompositions-and-nonnormal-spectra-examples` — Computed schur decompositions and nonnormal spectra — Examples

- `ex-jordan-block-epsilon-pseudospectrum` · example — The closed epsilon-pseudospectrum of the two-by-two Jordan block is a disk
- `ex-jordan-eigenvalue-residual-square-root-instability` · example — A Jordan eigenpair residual can be much smaller than its eigenvalue error
- `ex-real-conjugate-pair-schur-block` · example — A real Schur block represents a conjugate eigenvalue pair

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `computed-schur-decompositions-and-nonnormal-spectra` requires `finite-precision-direct-factorizations`
- `computed-schur-decompositions-and-nonnormal-spectra` requires `computed-singular-values-and-rank-revealing-factorizations`
- `generalized-eigenvalue-pencils-and-qz-methods` requires `computed-schur-decompositions-and-nonnormal-spectra`
- `sylvester-and-lyapunov-matrix-equations` requires `computed-schur-decompositions-and-nonnormal-spectra`
- `verified-linear-systems-and-spectral-enclosures` requires `computed-schur-decompositions-and-nonnormal-spectra`
- `restarted-and-block-eigensolvers` requires `computed-schur-decompositions-and-nonnormal-spectra`
- `matrix-functions-and-scaling-squaring` requires `computed-schur-decompositions-and-nonnormal-spectra`
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
