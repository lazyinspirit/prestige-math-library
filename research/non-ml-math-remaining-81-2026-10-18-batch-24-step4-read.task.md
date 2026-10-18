# Step 4 batch reviewer — batch **24**, run `non-ml-math-remaining-81-2026-10-18`

You are the only reviewer for batch **24**. Step-5 owning group: **t**.
Return `group: "t"` and `batches: ["24"]`.
Read every assigned page and item in dependency order, including cited prerequisites outside the batch.
This is read-only, rejection-blind work. Return findings through the schema-constrained digest.
`pages_read` and `items_read` must match the inventories below exactly.
Record findings on this batch in concerns and findings on another batch in alerts, even within the same Step-5 group.
Record published-supplier findings in alerts unchanged; they go to the published owner through an evidence-bound repair route, never a fabricated run batch.

## Your pages

| batch | page | kind | requires |
|---|---|---|---|
| 24 | `quantum-channel-capacities-and-entanglement-assistance` | A | quantum-source-compression-and-cq-capacity, knill-laflamme-recovery-and-subsystem-codes, bell-states-teleportation-and-dense-coding |
| 24 | `quantum-channel-capacities-and-entanglement-assistance-examples` | B | quantum-channel-capacities-and-entanglement-assistance |

## Your content, in full

### `quantum-channel-capacities-and-entanglement-assistance` — Quantum Channel Capacities and Entanglement Assistance

- `lem-it-finite-mixture-entropy-bounds` · lemma — Entropy bounds for a finite mixture of states
- `lem-it-exponential-cq-spectral-projectors` · lemma — Exponential averaged spectral projectors for a finite cq ensemble
- `lem-it-finite-unitary-averaging-decoupling-bound` · lemma — Finite unitary averaging and a decoupling second-moment bound
- `lem-it-finite-extension-from-purification-channel` · lemma — Every finite extension is obtained from a purification by a channel
- `def-it-qudit-erasure-channel` · definition — Finite-dimensional quantum erasure channel
- `lem-it-finite-superadditive-sequence-limit` · lemma — Limit formula for linearly bounded superadditive sequences
- `def-it-quantum-channel-complement-and-coherent-information` · definition — Complementary channels and coherent information
- `lem-it-flagged-state-entropy-formula` · lemma — Entropy of a finite flagged state
- `thm-it-finite-quantum-mutual-information-data-processing` · theorem — Data processing for finite quantum mutual information
- `lem-it-quantum-entropy-maximized-at-maximally-mixed-state` · lemma — The maximally mixed state maximizes finite quantum entropy
- `lem-it-dimension-dependent-quantum-entropy-continuity` · lemma — Dimension-dependent quantum entropy continuity and Holevo control
- `lem-it-flat-spectral-type-information-approximation` · lemma — Exact flat spectral-type reduction of channel information
- `lem-it-flat-input-coherent-information-achievability` · lemma — Flat-input coherent information is achievable by subspace codes
- `thm-it-qudit-erasure-channel-is-cptp` · theorem — The finite-dimensional erasure map is a quantum channel
- `def-it-degradable-channel` · definition — Degradable and antidegradable channels
- `lem-it-quantum-coherent-information-complement-identity` · lemma — Coherent information equals output entropy minus environment entropy
- `def-it-quantum-channel-private-information` · definition — Private information of a finite channel ensemble
- `lem-it-finite-cq-wiretap-strong-secrecy-achievability` · lemma — Finite cq wiretap achievability with strong Holevo secrecy
- `lem-it-flat-input-entanglement-assisted-achievability` · lemma — Flat-input entanglement-assisted achievability by Weyl coding
- `lem-it-maximum-coherent-information-attained` · lemma — Finite channel information maxima are attained
- `lem-it-qudit-erasure-channel-complement-and-degradability` · lemma — Complement and degradation maps of the erasure channel
- `lem-it-private-information-is-coherent-information-difference` · lemma — Private information is an average coherent-information difference
- `lem-it-quantum-and-private-information-product-additivity` · lemma — Product additivity of coherent and private information
- `lem-it-entanglement-assisted-information-is-additive` · lemma — Additivity of optimized entanglement-assisted information
- `lem-it-qudit-erasure-channel-coherent-information` · lemma — Coherent information of a qudit erasure channel
- `def-it-quantum-channel-operational-capacities` · definition — Operational quantum, private, and entanglement-assisted capacities
- `lem-it-degradable-channel-coherent-information-concavity-and-subadditivity` · lemma — Coherent-information concavity and subadditivity for degradable channels
- `thm-it-quantum-channel-capacity-regularized-coherent-information` · theorem — Regularized coherent-information formula for quantum capacity
- `thm-it-quantum-channel-capacity-regularized-private-information` · theorem — Regularized private-information formula for quantum channel capacity
- `thm-it-entanglement-assisted-classical-capacity-additive-formula` · theorem — Additive entanglement-assisted classical capacity formula
- `thm-it-degradable-channel-single-letter-capacities` · theorem — Single-letter quantum and private capacities of degradable channels
- `thm-it-qudit-erasure-channel-exact-capacities` · theorem — Exact quantum, private, and entanglement-assisted erasure capacities

### `quantum-channel-capacities-and-entanglement-assistance-examples` — Quantum Channel Capacities and Entanglement Assistance — Examples

- `ex-it-noiseless-qubit-entanglement-assisted-capacity` · example — Entanglement-assisted capacity of a noiseless qubit
- `ex-it-qudit-erasure-channel-capacity-regimes` · example — Capacity regimes of the qubit erasure channel

## Your seams

Check each listed cross-batch edge for citation fidelity in both directions.
- `quantum-channel-capacities-and-entanglement-assistance` requires `quantum-source-compression-and-cq-capacity`
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
