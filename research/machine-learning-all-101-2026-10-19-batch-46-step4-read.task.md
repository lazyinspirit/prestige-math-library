# Step 4 batch reviewer — batch **46**, run `machine-learning-all-101-2026-10-19`

You are the only reviewer for batch **46**. Step-5 owning group: **o**.
Return `group: "o"` and `batches: ["46"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 46 | `marchenko-pastur-law-and-edge-bounds` | A | the-spectral-theorem-and-singular-value-decomposition, weak-convergence-tightness-and-representation, robust-influence-and-breakdown |
| 46 | `marchenko-pastur-law-and-edge-bounds-examples` | B | marchenko-pastur-law-and-edge-bounds |

## Your content, in full

### `marchenko-pastur-law-and-edge-bounds` — Marchenko–Pastur law and sample-covariance edge bounds

- `def-sample-covariance-empirical-spectral-distribution` · definition — Sample covariance matrices and their empirical spectral distributions
- `def-stieltjes-transform-of-a-real-probability-measure` · definition — Stieltjes transform of a probability measure on the real line
- `def-marchenko-pastur-measure` · definition — Marchenko–Pastur measure with aspect ratio gamma
- `lem-fourth-moment-quadratic-form-resolvent-bound` · lemma — Fourth-moment bound for a centered quadratic form of an independent vector
- `lem-rank-one-resolvent-update-and-trace-bound` · lemma — Rank-one resolvent update and trace bound for a positive semidefinite matrix
- `lem-uniform-row-partial-sums-of-nested-finite-variance-array` · lemma — Uniform row partial sums of a nested finite-variance array
- `lem-fixed-degree-covariance-trace-and-edge-witnesses` · lemma — Fixed-degree covariance trace moments and independent edge witnesses
- `lem-sample-covariance-empirical-law-is-a-probability-measure` · lemma — The empirical spectral distribution of a sample covariance matrix is a probability measure
- `lem-adapted-resolvent-trace-concentration` · lemma — Adapted resolvent-trace martingale concentration for independent columns
- `lem-marchenko-pastur-formula-defines-a-finite-measure` · lemma — The Marchenko–Pastur formula defines a probability law with the fixed-point transform
- `lem-stieltjes-transform-inversion-and-uniqueness-on-the-real-line` · lemma — Stieltjes inversion and uniqueness for probability measures on the real line
- `lem-nested-iid-fourth-moment-truncation-and-diagonal-control` · lemma — Nested iid fourth-moment truncation and uniform diagonal control
- `thm-marchenko-pastur-law-for-sample-covariance` · theorem — Almost-sure Marchenko–Pastur law for finite-fourth-moment sample covariance matrices
- `lem-nonbacktracking-covariance-high-moment-bound` · lemma — Nonbacktracking covariance high moments and an independent coarse norm bound
- `lem-largest-sample-covariance-eigenvalue-lower-bound` · lemma — Independent lower bound for the largest sample-covariance eigenvalue
- `lem-sample-covariance-spectrum-confinement` · lemma — Finite-fourth-moment covariance spectral confinement
- `lem-largest-sample-covariance-eigenvalue-upper-bound` · lemma — Finite-fourth-moment upper bound for the largest sample-covariance eigenvalue
- `thm-bai-yin-smallest-singular-value-limits` · theorem — Bai–Yin lower singular-value limits and full rank away from aspect one
- `thm-largest-eigenvalue-sample-covariance-edge` · theorem — Almost-sure limit of the largest sample-covariance eigenvalue
- `thm-smallest-positive-eigenvalue-sample-covariance-edge` · theorem — Almost-sure limit and structural-zero count at the lower sample-covariance edge

### `marchenko-pastur-law-and-edge-bounds-examples` — Marchenko–Pastur law and sample-covariance edge bounds — Examples

- `ex-marchenko-pastur-law-and-edges-at-aspect-one-quarter` · example — Marchenko–Pastur law and edges below aspect one
- `ex-marchenko-pastur-law-and-edges-at-aspect-four` · example — Structural zeros and the positive edge above aspect one
- `ex-marchenko-pastur-law-and-closing-edge-at-aspect-one` · example — The Marchenko–Pastur support and closing lower edge at aspect one

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `sample-covariance-resolvent-limits` requires `marchenko-pastur-law-and-edge-bounds`
---

# Step 4 Alpha batch reviewer — read-only digest, `machine-learning-all-101-2026-10-19`

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
