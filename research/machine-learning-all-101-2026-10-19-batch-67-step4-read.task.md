# Step 4 batch reviewer — batch **67**, run `machine-learning-all-101-2026-10-19`

You are the only reviewer for batch **67**. Step-5 owning group: **v**.
Return `group: "v"` and `batches: ["67"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 67 | `anderson-reverse-time-diffusion` | A | forward-ito-sde-well-posedness, gaussian-smoothing-densities-scores-and-endpoint-limits |
| 67 | `anderson-reverse-time-diffusion-examples` | B | anderson-reverse-time-diffusion |

## Your content, in full

### `anderson-reverse-time-diffusion` — Anderson reverse-time diffusion

- `def-reversed-transition-kernels-for-diffusions` · definition — Bayes-reversed transition kernels for a diffusion
- `lem-continuous-local-martingale-quadratic-variation` · lemma — Quadratic variation of a continuous local martingale
- `lem-density-translation-factorization` · lemma — A translated conditional density factorizes after subtraction
- `lem-elliptic-local-martingale-brownian-representation` · lemma — An elliptic local martingale has a Brownian driver
- `lem-normalized-parabolic-bellman-bounded-weak-solution` · lemma — A normalized parabolic Bellman equation has a bounded weak solution
- `lem-parabolic-bellman-barrier-with-lebesgue-height-bound` · lemma — A parabolic Bellman barrier with a Lebesgue height bound
- `lem-stopped-uniformly-elliptic-semimartingale-occupation-absolute-continuity` · lemma — Stopped occupation absolute continuity for uniformly elliptic Ito processes
- `lem-forward-density-duality-identifies-reverse-process` · lemma — Forward density duality identifies an auxiliary reverse process
- `lem-forward-kolmogorov-duality-gives-reversed-martingales` · lemma — Forward Kolmogorov duality gives reversed martingales
- `lem-reversed-kernels-and-generator-identity` · lemma — Reversed kernels, generator, and martingale problem
- `thm-anderson-reverse-time-diffusion` · theorem — Anderson's bounded-start reverse-time diffusion theorem
- `def-bayes-reversed-gaussian-smoothing-kernels` · definition — Bayes-reversed Gaussian smoothing kernels
- `lem-predictable-elliptic-martingale-brownian-reconstruction` · lemma — Brownian reconstruction with a predictable elliptic coefficient
- `thm-markov-diffusion-reversal-by-bayes-kernels` · theorem — Reverse-time SDE for an unbounded-start Markov diffusion
- `lem-reversed-smoothing-generator-and-martingale` · lemma — Generator and martingale problem for reversed Gaussian smoothing
- `thm-gaussian-smoothing-reversal-on-truncated-time-interval` · theorem — Reverse Gaussian smoothing on a truncated time interval

### `anderson-reverse-time-diffusion-examples` — Anderson reverse-time diffusion — Examples

- `cex-state-dependent-diffusion-score-only-reversal` · counterexample — State-dependent diffusion needs a divergence correction
- `ex-bounded-start-anderson-reversal` · example — Bounded-start Brownian reversal under Anderson's hypotheses
- `ex-stationary-ornstein-uhlenbeck-reversal` · example — A stationary Ornstein–Uhlenbeck diffusion reverses to itself

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `anderson-reverse-time-diffusion` requires `gaussian-smoothing-densities-scores-and-endpoint-limits`
- `score-sdes-and-reverse-time-generation` requires `anderson-reverse-time-diffusion`
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
