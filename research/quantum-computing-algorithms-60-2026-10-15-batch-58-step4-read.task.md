# Step 4 batch reviewer — batch **58**, run `quantum-computing-algorithms-60-2026-10-15`

You are the only reviewer for batch **58**. Step-5 owning group: **l**.
Return `group: "l"` and `batches: ["58"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 58 | `algorithm-composition-precision-and-dequantization` | A | uniform-circuit-families-promise-problems-and-complexity, state-preparation-isometry-synthesis-and-limits, channels-kraus-choi-and-stinespring-representations, trace-distance-fidelity-and-information-limits, circuit-syntax-denotational-semantics-and-measurement, finite-probability-spaces-and-random-variables, approximate-universality-and-solovay-kitaev, measurements-povms-and-instruments |
| 58 | `algorithm-composition-precision-and-dequantization-examples` | B | algorithm-composition-precision-and-dequantization |

## Your content, in full

### `algorithm-composition-precision-and-dequantization` — Algorithm Composition, Precision Budgets, and Dequantization

- `def-qa-34-threshold-band-svd-target` · definition — Threshold-band singular-value approximation
- `thm-qa-34-best-frobenius-rank-k-approximation` · theorem — Truncated singular values give the best Frobenius rank-k approximation
- `thm-qa-34-product-state-error-bound` · theorem — Tensor-product state errors add under trace distance
- `def-qa-34-end-to-end-error-contract` · definition — End-to-end channel and output error contract
- `thm-qa-34-channel-hybrid-bound` · theorem — Hybrid bound for a composed channel circuit
- `thm-qa-34-tensor-error-bound` · theorem — Tensor-product channel error bound
- `alg-qa-34-error-budget-allocation` · algorithm — Allocate local error budgets through a pipeline
- `def-qa-34-output-and-cost-types` · definition — Classical output, quantum-state output, and access costs
- `def-qa-34-heralded-verification-contract` · definition — Heralded success and conditional verification contract
- `def-qa-34-l2-sample-query-access` · definition — ℓ2 sample/query access to vectors and matrices
- `thm-qa-34-classical-output-writing-lower-bound` · theorem — Writing an N-bit output costs at least N bit operations
- `alg-qa-34-modfkv-low-rank-description` · algorithm — ModFKV low-rank description procedure
- `alg-qa-34-rejection-sampler-linear-combination` · algorithm — Finite rejection sampler for a linear combination
- `lem-qa-34-modfkv-sampling-gram-bound` · lemma — Two-stage ℓ2 sampling controls Gram matrices
- `lem-qa-34-normalized-vector-distribution-tv-bound` · lemma — Squared-vector distributions are close in total variation
- `prop-qa-34-sample-inner-product-estimator` · proposition — Estimate an inner product from ℓ2-sampling access
- `thm-qa-34-adaptive-failure-union-bound` · theorem — Adaptive conditional failure budgets compose by a union bound
- `thm-qa-34-error-budget-allocation-correctness` · theorem — Allocated local errors meet the global budget
- `thm-qa-34-linear-combination-sampler-correct-and-cost` · theorem — Correctness and cost of the linear-combination sampler
- `lem-qa-34-exponential-gram-concentration` · lemma — Exponential Frobenius concentration for normalized Gram sampling
- `lem-qa-34-two-sketch-threshold-band-bound` · lemma — A deterministic threshold-band bound for two Gram sketches
- `thm-qa-34-modfkv-low-rank-approximation` · theorem — ModFKV low-rank approximation supplier
- `thm-qa-34-tang-recommendation-sampler` · theorem — Tang's conditional recommendation sampler
- `rem-qa-34-dequantization-scope` · remark — Dequantization is relative to the input access and output task

### `algorithm-composition-precision-and-dequantization-examples` — Algorithm Composition, Precision Budgets, and Dequantization — Examples

- `ex-qa-34-three-stage-budget` · example — A three-stage precision budget
- `cex-qa-34-state-output-not-amplitude-list` · counterexample — Quantum-state output does not mean an amplitude list was written
- `ex-qa-34-heralded-success-branch` · example — Heralded success and the zero-success branch
- `cex-qa-34-tang-without-sampling-access` · counterexample — Entry queries alone do not provide Tang's sampling access

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `algorithm-composition-precision-and-dequantization` requires `uniform-circuit-families-promise-problems-and-complexity`
- `algorithm-composition-precision-and-dequantization` requires `state-preparation-isometry-synthesis-and-limits`
- `algorithm-composition-precision-and-dequantization` requires `channels-kraus-choi-and-stinespring-representations`
- `algorithm-composition-precision-and-dequantization` requires `trace-distance-fidelity-and-information-limits`
- `algorithm-composition-precision-and-dequantization` requires `circuit-syntax-denotational-semantics-and-measurement`
- `algorithm-composition-precision-and-dequantization` requires `approximate-universality-and-solovay-kitaev`
- `algorithm-composition-precision-and-dequantization` requires `measurements-povms-and-instruments`
---

# Step 4 Alpha batch reviewer — read-only digest, `quantum-computing-algorithms-60-2026-10-15`

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
