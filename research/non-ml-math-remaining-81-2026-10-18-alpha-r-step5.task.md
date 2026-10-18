# Step 5 adjudication — group **r**, run `non-ml-math-remaining-81-2026-10-18`

You are the group Alpha for batches 17, 18, 19: 3 A/B pair(s), 6 page(s), 80 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **17**: `research/non-ml-math-remaining-81-2026-10-18-batch-17-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **18**: `research/non-ml-math-remaining-81-2026-10-18-batch-18-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **19**: `research/non-ml-math-remaining-81-2026-10-18-batch-19-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 17 | `lossy-source-coding-with-side-information` | A | information-theory | 2526 | `rate-distortion-and-lossy-source-coding`, `distributed-source-coding`, `cost-constrained-gaussian-and-feedback-channels` |
| 17 | `lossy-source-coding-with-side-information-examples` | B | information-theory | 2527 | `lossy-source-coding-with-side-information` |
| 18 | `multiuser-channel-networks` | A | information-theory | 2528 | `lossy-source-coding-with-side-information` |
| 18 | `multiuser-channel-networks-examples` | B | information-theory | 2529 | `multiuser-channel-networks` |
| 19 | `relay-and-interference-channel-bounds` | A | information-theory | 2530 | `multiuser-channel-networks` |
| 19 | `relay-and-interference-channel-bounds-examples` | B | information-theory | 2531 | `relay-and-interference-channel-bounds` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `lossy-source-coding-with-side-information` — Lossy Source Coding with Side Information (11 item(s))

- `def-it-finite-strongly-typical-set` · definition — Finite strongly typical sets with support restriction
- `lem-it-finite-type-class-cardinality-bounds` · lemma — Finite type-class cardinality bounds
- `lem-it-finite-codebook-covering-selection-law` · lemma — Finite random-codebook covering and selected-codeword law
- `lem-it-finite-random-bin-packing-bound` · lemma — Finite joint-typicality packing bound for independent random bins
- `lem-it-finite-selected-codeword-markov-typicality` · lemma — Markov typicality for independently selected finite codewords
- `def-it-finite-wyner-ziv-code` · definition — Finite-alphabet lossy source coding with decoder-only side information
- `def-it-finite-multiterminal-lossy-code` · definition — Finite-alphabet multiterminal lossy source code
- `lem-it-wyner-ziv-auxiliary-cardinality-bound` · lemma — Cardinality bound for the finite Wyner-Ziv auxiliary
- `lem-it-finite-wyner-ziv-function-convexity-continuity` · lemma — Convexity, monotonicity, and continuity of finite Wyner-Ziv rate
- `thm-it-berger-tung-finite-multiterminal-inner-bound` · theorem — Finite-alphabet Berger-Tung multiterminal lossy inner bound
- `thm-it-finite-alphabet-wyner-ziv-rate-distortion` · theorem — Finite-alphabet memoryless Wyner-Ziv theorem

### `lossy-source-coding-with-side-information-examples` — Lossy Source Coding with Side Information — Examples (3 item(s))

- `ex-it-wyner-ziv-with-no-side-information` · example — No side information reduces Wyner-Ziv to ordinary rate distortion
- `ex-it-wyner-ziv-lossless-slepian-wolf-endpoint` · example — Lossless Wyner-Ziv endpoint is the Slepian-Wolf rate
- `ex-it-berger-tung-lossless-slepian-wolf-special-case` · example — Berger-Tung inner bound contains the Slepian-Wolf region

### `multiuser-channel-networks` — Multiuser Channel Networks (23 item(s))

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

### `multiuser-channel-networks-examples` — Multiuser Channel Networks — Examples (3 item(s))

- `ex-it-ozarow-awgn-mac-feedback-rate-region-at-rho` · example — A finite-power Ozarow feedback-region slice
- `ex-it-binary-xor-dm-mac-product-input-region` · example — The binary XOR MAC exposes the independent private-input law
- `ex-it-correlated-source-binary-adder-dm-mac` · example — A correlated binary source is sent uncoded over an adder MAC

### `relay-and-interference-channel-bounds` — Relay and Interference Channel Bounds (36 item(s))

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

### `relay-and-interference-channel-bounds-examples` — Relay and Interference Channel Bounds — Examples (4 item(s))

- `ex-real-gaussian-relay-fixed-quantizer-gap` · example — A two-hop Gaussian relay with a half-bit quantization penalty
- `ex-real-gaussian-strong-interference-region` · example — A numerical asymmetric Gaussian channel in the strong regime
- `cex-strong-interference-formula-fails-outside-regime` · counterexample — Outside the strong regime, the MAC intersection can be too small
- `ex-binary-additive-strong-interference-capacity` · example — The binary additive interference channel in the strong regime

## Your seams

Your pages depend on another group's:

- `lossy-source-coding-with-side-information` requires `rate-distortion-and-lossy-source-coding` (group p, batch 11)
- `lossy-source-coding-with-side-information` requires `distributed-source-coding` (group q, batch 16)
- `lossy-source-coding-with-side-information` requires `cost-constrained-gaussian-and-feedback-channels` (group p, batch 13)

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

# Step 5 batch adjudication, `non-ml-math-remaining-81-2026-10-18`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
