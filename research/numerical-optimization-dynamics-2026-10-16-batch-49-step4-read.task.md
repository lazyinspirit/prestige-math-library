# Step 4 batch reviewer — batch **49**, run `numerical-optimization-dynamics-2026-10-16`

You are the only reviewer for batch **49**. Step-5 owning group: **r**.
Return `group: "r"` and `batches: ["49"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 49 | `sylvester-and-lyapunov-matrix-equations` | A | computed-schur-decompositions-and-nonnormal-spectra, strongly-continuous-semigroups-and-hille-yosida |
| 49 | `sylvester-and-lyapunov-matrix-equations-examples` | B | sylvester-and-lyapunov-matrix-equations |

## Your content, in full

### `sylvester-and-lyapunov-matrix-equations` — Sylvester and lyapunov matrix equations

- `lem-sylvester-vectorization-isometry-and-kronecker-identity` · lemma — Column vectorization is an isometry and represents the Sylvester map by a Kronecker sum
- `lem-small-block-determinant-separation-lower-bound` · lemma — A determinant and Frobenius norm give a certified lower bound for small-block separation
- `def-hurwitz-matrix-and-continuous-lyapunov-equation` · definition — Hurwitz matrices and the continuous Lyapunov equation
- `lem-adjugate-inverse-formula-over-a-field` · lemma — The adjugate gives an explicit inverse formula over a field
- `def-sylvester-operator-and-separation-number` · definition — Sylvester operator and Frobenius separation number
- `lem-hurwitz-matrix-exponential-decay-bound` · lemma — A Hurwitz matrix exponential has a polynomial-exponential decay bound
- `lem-hurwitz-negative-shift-matrix-invertible` · lemma — A negative-real-part shift of a Hurwitz matrix is invertible
- `lem-sylvester-separation-controls-the-frobenius-error` · lemma — Positive Sylvester separation bounds the inverse operator norm
- `thm-sylvester-unique-solvability-spectral-separation` · theorem — A Sylvester equation is uniquely solvable exactly when the spectra are disjoint
- `thm-continuous-lyapunov-integral-and-positivity` · theorem — The Hurwitz Lyapunov integral is the unique solution and has the stated positivity
- `alg-low-rank-alternating-direction-implicit-lyapunov` · algorithm — Low-rank ADI for a continuous Lyapunov equation
- `thm-sylvester-residual-to-forward-error-bound` · theorem — Sylvester separation converts a residual into a forward error bound
- `thm-low-rank-adi-exact-residual-factor-identity` · theorem — Low-rank ADI has an exact residual factor identity
- `thm-low-rank-adi-conditional-convergence-bound` · theorem — A proved rational shift bound implies low-rank ADI convergence
- `alg-bartels-stewart-sylvester-equation` · algorithm — Finite-budget Bartels-Stewart solve for a Sylvester equation
- `thm-bartels-stewart-sylvester-exact-correctness` · theorem — Successful certified Bartels-Stewart substitution returns the exact Sylvester solution
- `thm-bartels-stewart-dense-operation-count` · theorem — Linearly budgeted dense Bartels-Stewart work with explicit controller costs
- `thm-bartels-stewart-finite-status-and-local-pivot-uniqueness` · theorem — Finite Bartels–Stewart statuses and successful-pivot uniqueness
- `thm-low-rank-adi-finite-status-and-well-definedness` · theorem — Finite ADI shifts have well-defined solves and explicit statuses

### `sylvester-and-lyapunov-matrix-equations-examples` — Sylvester and lyapunov matrix equations — Examples

- `ex-stable-linear-noise-lyapunov-covariance` · example — A stable linear noise covariance balance has a positive solution
- `ex-nearly-colliding-sylvester-eigenvalue-sums` · example — Nearly colliding eigenvalue sums make a Sylvester solve sensitive
- `ex-low-rank-adi-residual-certificate` · example — One low-rank ADI step gives an exact residual certificate

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `sylvester-and-lyapunov-matrix-equations` requires `computed-schur-decompositions-and-nonnormal-spectra`
- `matrix-functions-and-scaling-squaring` requires `sylvester-and-lyapunov-matrix-equations`
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
