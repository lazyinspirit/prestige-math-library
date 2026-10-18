# Step 4 batch reviewer — batch **19**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **19**. Step-5 owning group: **r**.
Return `group: "r"` and `batches: ["19"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 19 | `relay-and-interference-channel-bounds` | A | multiuser-channel-networks |
| 19 | `relay-and-interference-channel-bounds-examples` | B | relay-and-interference-channel-bounds |

## Your content, in full

### `relay-and-interference-channel-bounds` — Relay and Interference Channel Bounds

- `lem-finite-or-euclidean-likelihood-ratio-network-coding` · lemma — Likelihood-ratio network coding for finite or Euclidean multicast networks
- `lem-complex-gaussian-interference-entropy-estimates` · lemma — Entropy estimates for complex Gaussian interference converses
- `lem-gaussian-superposition-nonunique-han-kobayashi-region` · lemma — Gaussian superposition Han–Kobayashi region with nonunique decoding and rate moving
- `def-finite-discrete-memoryless-network-and-code` · definition — Finite discrete memoryless networks and causal codes
- `def-real-gaussian-multicast-relay-network` · definition — Real scalar Gaussian multicast relay network and power constraints
- `def-real-two-user-gaussian-interference-channel` · definition — Real and complex two-user Gaussian interference channels
- `lem-real-vector-gaussian-maximum-differential-entropy` · lemma — Gaussian maximizes differential entropy at fixed positive-definite covariance
- `def-finite-discrete-memoryless-relay-channel-and-causal-code` · definition — Finite discrete memoryless relay channel and causal code
- `def-finite-two-user-interference-channel-and-strong-regime` · definition — Finite two-user interference channel and strong-interference regime
- `def-finite-two-way-relay-channel-and-causal-code` · definition — Finite two-way relay channel and causal code
- `lem-bounded-density-finite-second-moment-has-finite-differential-entropy` · lemma — Bounded densities with finite second moments have finite differential entropy
- `lem-complex-scalar-gaussian-maximum-differential-entropy` · lemma — Circular complex Gaussian maximizes differential entropy at fixed second moment
- `lem-finite-joint-iid-strong-typicality` · lemma — Joint strong typicality for a finite IID source
- `thm-real-gaussian-multicast-noisy-network-coding-inner-bound` · theorem — Noise-level noisy-network-coding inner bound for real Gaussian multicast networks
- `def-finite-directed-information-and-causal-conditioning` · definition — Finite directed information and causal conditioning
- `lem-finite-conditional-codebook-covering` · lemma — Conditional random-codebook covering for finite alphabets
- `lem-finite-conditional-typicality-packing` · lemma — Conditional joint-typicality packing bound for finite alphabets
- `lem-scalar-gaussian-channel-mutual-information-power-bound` · lemma — Power bound for real and complex scalar Gaussian channels
- `lem-real-gaussian-han-kobayashi-inner-region` · lemma — Gaussian Han-Kobayashi inner region for a fixed private-power split
- `lem-real-gaussian-multiple-access-random-coding-region` · lemma — Random coding achieves the finite-dimensional Gaussian multiple-access region
- `thm-finite-relay-decode-forward-inner-bound` · theorem — Decode-forward inner bound for a finite relay channel
- `lem-finite-conditional-channel-mutual-information-concave-input-law` · lemma — Conditional mutual information is concave in the channel input law
- `lem-finite-directed-information-feedback-decomposition` · lemma — Mutual information splits into directed information and feedback
- `lem-finite-strong-interference-block-lift` · lemma — Strong-interference information inequalities tensorize over product code inputs
- `thm-finite-multisource-multicast-noisy-network-coding-inner-bound` · theorem — Noisy network coding inner bound for finite multicast networks
- `cor-finite-relay-compress-forward-noisy-network-coding-bound` · corollary — Compress-forward and noisy-network-coding bounds for a finite relay channel
- `cor-finite-two-way-relay-noisy-network-coding-region` · corollary — Noisy-network-coding inner region for the finite two-way relay channel
- `lem-standard-borel-conditional-mutual-information-chain-rule-and-data-processing` · lemma — Conditional mutual-information chain rule and data processing for standard-Borel variables
- `lem-standard-borel-memoryless-channel-mutual-information-tensorization` · lemma — Mutual information tensorizes over a memoryless vector channel
- `lem-real-gaussian-interference-genie-outer-region` · lemma — Genie-aided outer bounds for the two-user Gaussian interference channel
- `thm-finite-relay-cut-set-outer-bound` · theorem — Cut-set outer bound for causal and full-feedback relay channels
- `thm-real-gaussian-multicast-noisy-network-coding-cut-dependent-gap` · theorem — Cut-dependent Gaussian multicast gap to the cut-set bound
- `thm-real-gaussian-strong-interference-capacity-region` · theorem — Exact strong-interference region for the two-user Gaussian interference channel
- `thm-finite-full-feedback-relay-capacity` · theorem — Capacity of a finite relay channel with output feedback to source and relay
- `thm-finite-strong-interference-channel-capacity` · theorem — Capacity region of a finite two-user interference channel under strong interference
- `thm-real-gaussian-interference-channel-within-one-bit` · theorem — The two-user Gaussian interference capacity region to within one bit

### `relay-and-interference-channel-bounds-examples` — Relay and Interference Channel Bounds — Examples

- `ex-real-gaussian-relay-fixed-quantizer-gap` · example — A two-hop Gaussian relay with a half-bit quantization penalty
- `ex-real-gaussian-strong-interference-region` · example — A numerical asymmetric Gaussian channel in the strong regime
- `cex-strong-interference-formula-fails-outside-regime` · counterexample — Outside the strong regime, the MAC intersection can be too small
- `ex-binary-additive-strong-interference-capacity` · example — The binary additive interference channel in the strong regime

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `relay-and-interference-channel-bounds` requires `multiuser-channel-networks`
---

# Step 4 Alpha batch reviewer — read-only digest, `non-ml-math-remaining-81-2026-10-18`

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
