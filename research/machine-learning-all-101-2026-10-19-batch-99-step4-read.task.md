# Step 4 batch reviewer — batch **99**, run `machine-learning-all-101-2026-10-19`

You are the only reviewer for batch **99**. Step-5 owning group: **ag**.
Return `group: "ag"` and `batches: ["99"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 99 | `verifiable-generation-and-test-time-sampling` | A | dominated-experiments-likelihood-and-sufficiency, offline-reinforcement-learning-and-off-policy-evaluation, policy-gradients-reinforce-and-actor-critic |
| 99 | `verifiable-generation-and-test-time-sampling-examples` | B | verifiable-generation-and-test-time-sampling |

## Your content, in full

### `verifiable-generation-and-test-time-sampling` — Verifiable generation, group-relative updates, and test-time sampling

- `def-verifier-and-generation-protocol` · definition — Finite truncated response spaces, correctness predicates, and verifiers
- `alg-budgeted-verifier-guided-generation` · algorithm — Budgeted verifier-guided generation and best-of-N sampling
- `lem-budgeted-verifier-generation-termination-and-calls` · lemma — Budgeted verifier generation terminates with bounded response and selection calls
- `thm-independent-generation-success-and-verifier-error` · theorem — Independent generation success and verifier false-acceptance bounds
- `lem-finite-response-likelihood-ratio-change-of-measure` · lemma — Finite response likelihood ratios change measure by cancellation
- `alg-finite-group-relative-policy-update` · algorithm — Finite-budget group-relative policy update
- `lem-finite-group-relative-update-termination-and-calls` · lemma — Finite group-relative updates preserve admissibility and have bounded oracle calls
- `lem-finite-response-score-gradient-identities` · lemma — Finite-response score mean and reward-gradient identities
- `thm-group-centered-score-estimator-factor` · theorem — The group-centered score estimator has factor one minus one over G
- `rem-reasoning-training-evidence-and-evaluation-targets` · remark — Reasoning-training evidence and evaluation targets

### `verifiable-generation-and-test-time-sampling-examples` — Verifiable generation, group-relative updates, and test-time sampling — Examples

- `ex-equal-group-rewards-zero-advantages` · example — Equal group rewards set every normalized advantage to zero
- `ex-perfect-and-false-positive-verifiers` · example — Perfect and false-positive verifiers have different rejection outcomes
- `ex-repeated-dependent-copies-no-sampling-gain` · example — Repeated dependent copies do not increase success probability
- `ex-pass-at-one-oracle-pass-n-verifier-selected-accuracy` · example — Pass-at-one, oracle pass-at-N, and verifier-selected accuracy differ

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `verifiable-generation-and-test-time-sampling` requires `offline-reinforcement-learning-and-off-policy-evaluation`
- `verifiable-generation-and-test-time-sampling` requires `policy-gradients-reinforce-and-actor-critic`
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
