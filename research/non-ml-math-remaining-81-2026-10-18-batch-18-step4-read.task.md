# Step 4 batch reviewer — batch **18**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **18**. Step-5 owning group: **r**.
Return `group: "r"` and `batches: ["18"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 18 | `multiuser-channel-networks` | A | lossy-source-coding-with-side-information |
| 18 | `multiuser-channel-networks-examples` | B | multiuser-channel-networks |

## Your content, in full

### `multiuser-channel-networks` — Multiuser Channel Networks

- `def-it-real-differential-entropy` · definition — Differential entropy for real densities
- `def-it-two-user-real-awgn-mac-code` · definition — Two-user real AWGN multiple-access channel and no-feedback code
- `def-it-two-user-real-awgn-mac-feedback-code` · definition — Two-user real AWGN MAC with perfect causal output feedback
- `lem-it-finite-gaussian-mixture-entropy-bounds` · lemma — Entropy bounds for finite-power Gaussian convolutions
- `def-it-physically-degraded-dm-broadcast-channel` · definition — Physically degraded two-receiver discrete memoryless broadcast channel
- `def-it-two-user-discrete-memoryless-mac` · definition — Two-user discrete memoryless multiple-access channel
- `lem-it-awgn-feedback-estimation-covariance-update` · lemma — Gaussian feedback estimation-error covariance update
- `def-it-finite-dmc-feedback-code` · definition — Fixed-length finite DMC code with perfect causal output feedback
- `def-it-physically-degraded-dm-broadcast-code` · definition — Private-message code for a physically degraded DM broadcast channel
- `def-it-two-user-discrete-memoryless-mac-code` · definition — No-feedback independent-private-message DM-MAC code
- `def-it-two-user-discrete-memoryless-mac-feedback-code` · definition — Two-user DM-MAC code with perfect causal output feedback
- `lem-it-fano-for-finite-message-density-observations` · lemma — Fano bound for finite messages and density observations
- `lem-it-ozarow-feedback-sum-corner-achievable` · lemma — Ozarow linear feedback scheme achieves the two-user Gaussian sum point
- `def-it-two-correlated-iid-sources-over-dm-mac-code` · definition — Lossless transmission of two correlated IID sources over a DM-MAC
- `lem-it-awgn-feedback-rate-splitting-achievable` · lemma — Rate splitting transfers Ozarow's sum point to lower-correlation corners
- `thm-it-cover-leung-feedback-mac-inner-bound` · theorem — Cover-Leung inner bound for the two-user DM-MAC with feedback
- `thm-it-two-user-real-awgn-mac-capacity-region` · theorem — No-feedback real AWGN MAC capacity region
- `lem-it-cover-elgamal-salehi-conditional-packing` · lemma — Conditional type packing bounds for source-indexed DM-MAC codebooks
- `thm-it-ozarow-awgn-mac-feedback-capacity-region` · theorem — Ozarow capacity region of the two-user real AWGN MAC with feedback
- `thm-it-cover-el-gamal-salehi-correlated-source-mac-sufficient-condition` · theorem — Cover-El Gamal-Salehi sufficient condition for correlated sources over a DM-MAC
- `thm-it-finite-dmc-feedback-does-not-increase-capacity` · theorem — Perfect output feedback does not increase finite DMC capacity
- `thm-it-physically-degraded-dm-broadcast-capacity-region` · theorem — Physically degraded two-user DM broadcast capacity region
- `thm-it-two-user-discrete-memoryless-mac-capacity-region` · theorem — Independent-private-message DM-MAC capacity region

### `multiuser-channel-networks-examples` — Multiuser Channel Networks — Examples

- `ex-it-ozarow-awgn-mac-feedback-rate-region-at-rho` · example — A finite-power Ozarow feedback-region slice
- `ex-it-binary-xor-dm-mac-product-input-region` · example — The binary XOR MAC exposes the independent private-input law
- `ex-it-correlated-source-binary-adder-dm-mac` · example — A correlated binary source is sent uncoded over an adder MAC

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `multiuser-channel-networks` requires `lossy-source-coding-with-side-information`
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
