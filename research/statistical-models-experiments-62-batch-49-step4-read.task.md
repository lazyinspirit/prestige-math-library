# Step 4 batch reviewer — batch **49**, run `statistical-models-experiments-62`

You are the only reviewer for batch **49**. Step-5 owning group: **q**.
Return `group: "q"` and `batches: ["49"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 49 | `spatial-point-process-summaries-and-palm-laws` | A | poisson-and-cox-point-process-models, measures-and-their-basic-properties, stationary-markov-chains-and-ergodic-limits |
| 49 | `spatial-point-process-summaries-and-palm-laws-examples` | B | spatial-point-process-summaries-and-palm-laws |

## Your content, in full

### `spatial-point-process-summaries-and-palm-laws` — Spatial summaries and Palm laws

- `lem-convex-windows-admit-rectangle-approximations-and-are-folner` · lemma — Compact convex windows admit rectangle approximations and have negligible translated boundary
- `lem-translation-invariant-locally-finite-borel-measure-on-rd` · lemma — A locally finite translation-invariant Borel measure on $\mathbb R^d$ is a multiple of Lebesgue measure
- `thm-choice-free-l1-mean-limit-for-stationary-sequences` · theorem — An integrable stationary sequence has an L1 Cesaro limit
- `def-spatial-recentering-action` · definition — Recentering a point configuration at a spatial location
- `def-stationary-point-process-and-intensity` · definition — Stationarity, finite intensity, and spatial ergodicity
- `lem-joint-measurability-of-spatial-recentering` · lemma — The spatial recentering action is jointly measurable
- `def-full-palm-distribution` · definition — The full Palm distribution defined by the refined Campbell identity
- `def-second-factorial-and-reduced-moment-measures` · definition — Second factorial and reduced second factorial moment measures
- `thm-poisson-mecke-identity` · theorem — Mecke identity for locally finite Poisson point processes
- `thm-stationary-point-process-intensity-measure-is-rho-lebesgue` · theorem — A stationary point process of finite intensity has mean measure rho times Lebesgue measure
- `thm-refined-campbell-formula-and-palm-law-existence` · theorem — Existence and uniqueness of the full Palm law and the refined Campbell identity
- `thm-second-factorial-and-reduced-measures-are-locally-finite` · theorem — Factorial and reduced factorial moment measures are well-defined and locally finite
- `thm-stationary-point-process-counts-converge-to-spatial-intensity` · theorem — Spatial ergodic limit for counts in dilates of a convex window
- `thm-reduced-second-factorial-moment-palm-identity` · theorem — The reduced second factorial moment measure is the Palm expectation after one-occurrence deletion
- `def-pair-correlation-and-ripleys-k-function` · definition — Pair-correlation density and Ripley K-function
- `alg-border-corrected-ripleys-k-estimator` · algorithm — Border-corrected estimator for Ripley K
- `thm-homogeneous-poisson-ripleys-k-is-ball-volume` · theorem — Ripley K for a homogeneous Poisson process is Euclidean ball volume
- `thm-pair-correlation-integrates-to-ripleys-k` · theorem — A pair-correlation density integrates to Ripley K

### `spatial-point-process-summaries-and-palm-laws-examples` — Spatial summaries and Palm laws — Examples

- `ex-uniformly-translated-lattice-palm-and-multiplicities` · example — A translated lattice exposes recentering, atomic pair measures, and one-occurrence deletion
- `ex-window-edge-border-estimator` · example — A finite window makes the border correction weight visible

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `spatial-point-process-summaries-and-palm-laws` requires `poisson-and-cox-point-process-models`
---

# Step 4 Alpha batch reviewer — read-only digest, `statistical-models-experiments-62`

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
