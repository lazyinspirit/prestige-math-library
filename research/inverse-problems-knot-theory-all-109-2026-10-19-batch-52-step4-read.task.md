# Step 4 batch reviewer — batch **52**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **52**. Step-5 owning group: **r**.
Return `group: "r"` and `batches: ["52"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 52 | `open-frontiers-in-learned-inverse-problems` | A | learned-reconstruction-targets-and-risk, neural-operator-eit-inverse-map, unrolled-inverse-solvers-and-generalization, plug-and-play-mmse-regularization, score-diffusion-inverse-solvers, inverse-problem-benchmarking-and-shift, statistical-inverse-model-misspecification, losses-risk-and-decision-rules |
| 52 | `open-frontiers-in-learned-inverse-problems-examples` | B | open-frontiers-in-learned-inverse-problems |

## Your content, in full

### `open-frontiers-in-learned-inverse-problems` — Open frontiers in calibrated and robust learned inversion

- `op-ip-calibration-under-score-and-solver-error` · open-problem — Coverage error under score, forward-solver, and finite-time error
- `op-ip-neural-operator-sample-complexity-for-inverse-maps` · open-problem — Joint sample and mesh rates for neural inverse maps

### `open-frontiers-in-learned-inverse-problems-examples` — Open frontiers in calibrated and robust learned inversion — Examples and Counterexamples

- `ex-ip-score-coverage-baseline-gaussian-sequence` · example — Exact Gaussian credible-ball coverage with a score-error budget of zero
- `ex-ip-score-coverage-unbounded-truth-prior-bias` · example — A proper Gaussian prior gives nonuniform finite-sample coverage on an unbounded truth class
- `ex-ip-operator-shift-stable-scalar-risk` · example — A scalar inverse with a conditioning-dependent shift modulus
- `ex-ip-operator-shift-vanishing-singular-value` · example — Small absolute operator error does not give a uniform inverse bound without conditioning
- `ex-ip-diffusion-two-mode-finite-sample-weights` · example — Exact iid samples estimate two-mode posterior weights
- `ex-ip-diffusion-finite-budget-misses-rare-mode` · example — No fixed sample budget uniformly protects arbitrarily rare modes
- `ex-ip-neural-inverse-mesh-truncation-modulus` · example — A diagonal inverse has an explicit Fourier truncation error
- `ex-ip-neural-inverse-finite-samples-need-class-control` · example — Finite samples cannot identify every Lipschitz inverse map uniformly
- `ex-ip-integrated-score-error-misses-euler-grid-times` · example — Integrated score error can miss every Euler evaluation
- `ex-ip-robust-ellipsoid-minimax-shift-rate` · example — Worst-law ellipsoid recovery has no training-size rate
- `ex-ip-ideal-score-error-allows-unbounded-euler-wasserstein` · example — Ideal-marginal score error allows unbounded finite-Euler Wasserstein error
- `ex-ip-coordinate-free-fno-inverse-risk-obstruction` · example — Coordinate-free Fourier inverse maps have an odd-mesh risk floor

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `open-frontiers-in-learned-inverse-problems` requires `learned-reconstruction-targets-and-risk`
- `open-frontiers-in-learned-inverse-problems` requires `neural-operator-eit-inverse-map`
- `open-frontiers-in-learned-inverse-problems` requires `unrolled-inverse-solvers-and-generalization`
- `open-frontiers-in-learned-inverse-problems` requires `plug-and-play-mmse-regularization`
- `open-frontiers-in-learned-inverse-problems` requires `score-diffusion-inverse-solvers`
- `open-frontiers-in-learned-inverse-problems` requires `inverse-problem-benchmarking-and-shift`
- `open-frontiers-in-learned-inverse-problems` requires `statistical-inverse-model-misspecification`
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
