# Step 5 adjudication — group **t**, run `non-ml-math-remaining-81-2026-10-18`

You are the group Alpha for batches 23, 24, 25: 3 A/B pair(s), 6 page(s), 58 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **23**: `research/non-ml-math-remaining-81-2026-10-18-batch-23-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **24**: `research/non-ml-math-remaining-81-2026-10-18-batch-24-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **25**: `research/non-ml-math-remaining-81-2026-10-18-batch-25-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/non-ml-math-remaining-81-2026-10-18-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 23 | `quantum-source-compression-and-cq-capacity` | A | information-theory | 2538 | `quantum-relative-entropy-data-processing-and-strong-subadditivity`, `iid-lossless-source-coding-and-the-aep`, `finite-basis-projector-energies-and-variational-electronic-structure`, `quantum-optimization-sdp-and-variational-algorithms` |
| 23 | `quantum-source-compression-and-cq-capacity-examples` | B | information-theory | 2539 | `quantum-source-compression-and-cq-capacity` |
| 24 | `quantum-channel-capacities-and-entanglement-assistance` | A | information-theory | 2540 | `quantum-source-compression-and-cq-capacity`, `knill-laflamme-recovery-and-subsystem-codes`, `bell-states-teleportation-and-dense-coding` |
| 24 | `quantum-channel-capacities-and-entanglement-assistance-examples` | B | information-theory | 2541 | `quantum-channel-capacities-and-entanglement-assistance` |
| 25 | `quantum-key-distribution-and-composable-secrecy` | A | information-theory | 2542 | `secrecy-and-information-privacy`, `quantum-relative-entropy-data-processing-and-strong-subadditivity` |
| 25 | `quantum-key-distribution-and-composable-secrecy-examples` | B | information-theory | 2543 | `quantum-key-distribution-and-composable-secrecy` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `quantum-source-compression-and-cq-capacity` — Quantum Source Compression and Classical Communication over Quantum Channels (12 item(s))

- `lem-it-finite-gentle-measurement` · lemma — Gentle measurement bound in finite dimensions
- `lem-it-finite-positive-square-root-is-order-preserving` · lemma — The finite positive square root preserves operator order
- `lem-it-hayashi-nagaoka-finite-operator-inequality` · lemma — Finite Hayashi–Nagaoka operator inequality
- `def-it-quantum-source-and-compression-code` · definition — Finite IID quantum source and compression code
- `lem-it-finite-quantum-entropy-continuity` · lemma — Continuity of finite-dimensional quantum entropy
- `lem-it-square-root-cq-packing-bound` · lemma — Finite square-root measurement packing bound for cq states
- `lem-it-schmidt-rank-compression-fidelity-bound` · lemma — Compression dimension bounds entanglement fidelity
- `def-it-classical-quantum-memoryless-channel` · definition — Finite-input memoryless cq channel
- `def-it-cq-channel-block-code-and-error` · definition — Finite cq block codes, average error, and capacity
- `lem-it-cq-typical-projector-dimension` · lemma — Typical-projector bounds for finite quantum sources and cq ensembles
- `thm-it-schumacher-quantum-source-coding` · theorem — Finite-dimensional Schumacher quantum source coding theorem
- `thm-it-hsw-classical-quantum-channel-capacity` · theorem — Holevo–Schumacher–Westmoreland capacity theorem for finite cq channels

### `quantum-source-compression-and-cq-capacity-examples` — Quantum Source Compression and Classical Communication over Quantum Channels — Examples (3 item(s))

- `ex-it-qubit-source-compression` · example — Schumacher compression of a diagonal qubit source
- `cex-it-ensemble-holevo-information-is-not-measured-by-a-fixed-povm` · counterexample — A fixed POVM need not attain ensemble Holevo information
- `ex-it-cq-binary-pure-state-channel` · example — Holevo information of an equiprobable binary pure-state channel

### `quantum-channel-capacities-and-entanglement-assistance` — Quantum Channel Capacities and Entanglement Assistance (32 item(s))

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

### `quantum-channel-capacities-and-entanglement-assistance-examples` — Quantum Channel Capacities and Entanglement Assistance — Examples (2 item(s))

- `ex-it-noiseless-qubit-entanglement-assisted-capacity` · example — Entanglement-assisted capacity of a noiseless qubit
- `ex-it-qudit-erasure-channel-capacity-regimes` · example — Capacity regimes of the qubit erasure channel

### `quantum-key-distribution-and-composable-secrecy` — Quantum Key Distribution and Composable Secrecy (7 item(s))

- `def-qkd-finite-authenticated-protocol` · definition — Finite authenticated key-distribution protocol
- `lem-qkd-classical-key-copy-map-is-channel` · lemma — The finite classical key-copy map is a quantum channel
- `lem-qkd-trace-norm-adds-over-classical-blocks` · lemma — Trace norm of a finite classical block operator
- `def-qkd-abort-aware-composable-security` · definition — Abort-aware real and ideal QKD outputs and security errors
- `lem-qkd-copy-replacement-distance-is-correctness-error` · lemma — Replacing Bob's key by a copy of Alice's costs the correctness error
- `lem-qkd-abort-aware-ideal-output-is-state` · lemma — The abort-aware ideal output and conditional marginals are states
- `thm-qkd-composable-secrecy-sum-bound` · theorem — QKD composable secrecy is bounded by correctness plus secrecy

### `quantum-key-distribution-and-composable-secrecy-examples` — Quantum Key Distribution and Composable Secrecy — Examples (2 item(s))

- `ex-qkd-abort-weighted-secrecy-distance` · example — Abort probability weights an otherwise imperfect one-bit key
- `ex-qkd-secrecy-and-correctness-are-independent` · example — Secrecy and correctness are separate requirements

## Your seams

Your pages depend on another group's:

- `quantum-source-compression-and-cq-capacity` requires `quantum-relative-entropy-data-processing-and-strong-subadditivity` (group s, batch 22)
- `quantum-source-compression-and-cq-capacity` requires `iid-lossless-source-coding-and-the-aep` (group o, batch 9)
- `quantum-key-distribution-and-composable-secrecy` requires `secrecy-and-information-privacy` (group s, batch 20)
- `quantum-key-distribution-and-composable-secrecy` requires `quantum-relative-entropy-data-processing-and-strong-subadditivity` (group s, batch 22)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/non-ml-math-remaining-81-2026-10-18-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-5 closure recovery, `non-ml-math-remaining-81-2026-10-18`

Historical compatibility task only. Preserve historical exact-tuple decisions
as evidence; this template grants no current repair or certification authority.
Historical receipts constrain `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`; do not reinterpret those records
as current round coverage.

Current rounds use `tools/step5-workflow.mjs`, `briefs/step5-adjudicator.md`
and `briefs/step5-owner-repair.md`. Follow those briefs
and the generated round-bound task. Repair all confirmed defects, including
nonfatal defects, and continue downstream repair until complete before the
single central certification pass.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
