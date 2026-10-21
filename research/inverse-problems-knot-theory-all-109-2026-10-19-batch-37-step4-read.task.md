# Step 4 batch reviewer — batch **37**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **37**. Step-5 owning group: **m**.
Return `group: "m"` and `batches: ["37"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 37 | `limited-angle-tomography-and-invisible-singularities` | A | inverse-problems-identifiability-and-stability, radon-transform-and-fourier-slice-reconstruction, tempered-distributions-and-the-fourier-transform |
| 37 | `limited-angle-tomography-and-invisible-singularities-examples` | B | limited-angle-tomography-and-invisible-singularities |

## Your content, in full

### `limited-angle-tomography-and-invisible-singularities` — Limited-angle visibility and instability

- `lem-ip-compact-support-fourier-laplace-is-entire` · lemma — The compact-support Fourier-Laplace transform is entire in each coordinate
- `def-ip-visible-covector-for-limited-angle-data` · definition — Visible covectors for limited-angle data
- `def-ip-schwartz-radon-transform` · definition — Radon transform on Schwartz functions
- `lem-ip-schwartz-radon-well-defined` · lemma — The Radon transform maps Schwartz functions to Schwartz offset data
- `lem-ip-limited-angle-radon-data-is-l2-on-compact-support` · lemma — Restricted Radon data are square-integrable on fixed compact support
- `cor-ip-limited-angle-compact-support-uniqueness` · corollary — Compactly supported smooth functions are unique from any open set of Radon angles
- `prop-ip-limited-angle-data-no-holder-stability` · proposition — Limited-angle inversion has no Hölder modulus on a fixed-support H1 ball
- `lem-ip-fourier-slice-identity-on-schwartz` · lemma — Fourier-slice identity for Schwartz inputs
- `prop-ip-limited-angle-fourier-visibility` · proposition — Limited-angle data sample the visible Fourier wedge and zero frequency
- `op-ip-stable-limited-angle-reconstruction` · open-problem — Sharp deterministic stability for limited-angle reconstruction

### `limited-angle-tomography-and-invisible-singularities-examples` — Limited-angle visibility and instability — Examples and Counterexamples

- `ex-ip-compact-support-limited-angle-uniqueness` · example — A compactly supported bump remains uniquely determined from limited angles
- `ex-ip-high-frequency-limited-angle-instability` · example — Rapid oscillations make limited-angle data smaller than every power
- `ex-ip-invisible-wedge-null-function` · example — A nonzero Schwartz function invisible to a limited-angle Radon transform

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `limited-angle-tomography-and-invisible-singularities` requires `inverse-problems-identifiability-and-stability`
- `limited-angle-tomography-and-invisible-singularities` requires `radon-transform-and-fourier-slice-reconstruction`
- `analytic-double-fibration-and-bolker-visibility` requires `limited-angle-tomography-and-invisible-singularities`
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
