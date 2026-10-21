# Step 4 batch reviewer — batch **46**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the only reviewer for batch **46**. Step-5 owning group: **p**.
Return `group: "p"` and `batches: ["46"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 46 | `learned-reconstruction-targets-and-risk` | A | inverse-problems-identifiability-and-stability, bayesian-inverse-likelihoods-and-posterior-propriety, posterior-contraction-in-gaussian-sequence-inversion, losses-risk-and-decision-rules, conditional-distributions-and-regular-conditional-probability, posterior-prediction-and-bayesian-decision |
| 46 | `learned-reconstruction-targets-and-risk-examples` | B | learned-reconstruction-targets-and-risk |

## Your content, in full

### `learned-reconstruction-targets-and-risk` — Learned reconstruction targets and risk

- `prop-ip-posterior-mean-is-square-loss-optimal` · proposition — The posterior mean is the unique squared-loss Bayes action in a Hilbert target
- `def-ip-learned-reconstruction-estimator` · definition — Learned inverse estimators and reconstruction targets
- `def-ip-inverse-risk-under-train-and-test-laws` · definition — Inverse reconstruction risk under train and test laws

### `learned-reconstruction-targets-and-risk-examples` — Learned reconstruction targets and risk — Examples and Counterexamples

- `ex-ip-posterior-mean-outside-nonconvex-signal-class` · example — A posterior mean can lie outside a nonconvex signal class
- `ex-ip-train-test-prior-shift-changes-risk` · example — A train/test prior shift changes reconstruction risk
- `ex-ip-calibrated-posterior-sample` · example — An exact posterior sample need not minimize point risk

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `learned-reconstruction-targets-and-risk` requires `inverse-problems-identifiability-and-stability`
- `learned-reconstruction-targets-and-risk` requires `bayesian-inverse-likelihoods-and-posterior-propriety`
- `learned-reconstruction-targets-and-risk` requires `posterior-contraction-in-gaussian-sequence-inversion`
- `neural-operator-eit-inverse-map` requires `learned-reconstruction-targets-and-risk`
- `unrolled-inverse-solvers-and-generalization` requires `learned-reconstruction-targets-and-risk`
- `plug-and-play-mmse-regularization` requires `learned-reconstruction-targets-and-risk`
- `score-diffusion-inverse-solvers` requires `learned-reconstruction-targets-and-risk`
- `inverse-problem-benchmarking-and-shift` requires `learned-reconstruction-targets-and-risk`
- `open-frontiers-in-learned-inverse-problems` requires `learned-reconstruction-targets-and-risk`
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
