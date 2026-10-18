# Step 5 adjudication — group **p**, run `non-ml-math-remaining-81-2026-10-18`

You are the group Alpha for batches 11, 12, 13: 3 A/B pair(s), 6 page(s), 71 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **11**: `research/non-ml-math-remaining-81-2026-10-18-batch-11-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **12**: `research/non-ml-math-remaining-81-2026-10-18-batch-12-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **13**: `research/non-ml-math-remaining-81-2026-10-18-batch-13-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 11 | `rate-distortion-and-lossy-source-coding` | A | information-theory | 2514 | `gaussian-orthogonal-decomposition-and-quadratic-forms`, `stationary-ergodic-sources-and-universal-coding` |
| 11 | `rate-distortion-and-lossy-source-coding-examples` | B | information-theory | 2515 | `rate-distortion-and-lossy-source-coding` |
| 12 | `discrete-memoryless-channel-capacity` | A | information-theory | 2516 | `f-divergences-renyi-and-hypothesis-testing` |
| 12 | `discrete-memoryless-channel-capacity-examples` | B | information-theory | 2517 | `discrete-memoryless-channel-capacity` |
| 13 | `cost-constrained-gaussian-and-feedback-channels` | A | information-theory | 2518 | `discrete-memoryless-channel-capacity`, `gaussian-orthogonal-decomposition-and-quadratic-forms`, `mixed-effects-and-longitudinal-models` |
| 13 | `cost-constrained-gaussian-and-feedback-channels-examples` | B | information-theory | 2519 | `cost-constrained-gaussian-and-feedback-channels` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `rate-distortion-and-lossy-source-coding` — Rate Distortion and Lossy Source Coding (19 item(s))

- `def-it-general-mutual-information` · definition — Mutual information for standard-Borel random elements
- `def-it-single-letter-distortion-and-block-distortion` · definition — Single-letter and block distortion
- `lem-it-finite-vector-gaussian-water-level-allocation` · lemma — Finite Gaussian water-level allocation
- `def-it-general-rate-distortion-function` · definition — General single-letter information rate-distortion function
- `def-it-operational-rate-distortion-function` · definition — Fixed-length operational rate-distortion functions
- `lem-it-finite-rate-distortion-minimum-attained` · lemma — Attainment of finite-alphabet rate-distortion minima
- `def-it-information-rate-distortion-function` · definition — Finite-alphabet information rate-distortion function
- `def-it-stationary-finite-block-information-rdf` · definition — Stationary finite-block information rate-distortion function
- `lem-it-gaussian-reference-kernel-information-lower-bound` · lemma — Gaussian reference-kernel mutual-information lower bound
- `lem-it-rate-distortion-convexity-and-monotonicity` · lemma — Convexity, monotonicity, and continuity of finite rate-distortion
- `thm-it-binary-hamming-rate-distortion` · theorem — Binary Hamming rate-distortion function
- `alg-it-finite-alphabet-blahut-arimoto` · algorithm — Finite-alphabet Blahut–Arimoto rate-distortion algorithm
- `lem-it-stationary-block-rdf-limit-and-endpoint-continuity` · lemma — Stationary block rate-distortion limit and endpoint continuity
- `thm-it-finite-alphabet-rate-distortion-coding-theorem` · theorem — Finite-alphabet memoryless rate-distortion coding theorem
- `thm-it-gaussian-squared-error-rate-distortion` · theorem — Gaussian squared-error rate-distortion function
- `thm-it-gaussian-vector-squared-error-rate-distortion` · theorem — Finite-dimensional Gaussian vector squared-error rate-distortion function
- `lem-it-random-cut-ergodic-block-channel-approximation` · lemma — Random-cut stationary ergodic block-channel approximation
- `thm-it-blahut-arimoto-certified-gap-termination` · theorem — Blahut–Arimoto certified gap and termination
- `thm-it-stationary-ergodic-rate-distortion-bounded-distortion` · theorem — Stationary-ergodic bounded-distortion rate-distortion theorem

### `rate-distortion-and-lossy-source-coding-examples` — Rate Distortion and Lossy Source Coding — Examples (3 item(s))

- `ex-it-binary-hamming-rate-distortion-curve` · example — Binary Hamming rate-distortion curve at p equals one quarter
- `cex-it-continuous-optimal-reconstruction-need-not-have-a-density` · counterexample — A Gaussian rate-distortion optimizer need not have a density
- `ex-it-gaussian-distortion-waterline` · example — Finite Gaussian-vector distortion waterline

### `discrete-memoryless-channel-capacity` — Discrete Memoryless Channel Capacity (18 item(s))

- `def-channel-sequence` · definition — Channel sequences
- `def-discrete-memoryless-channel` · definition — Finite discrete memoryless channels
- `lem-discrete-memoryless-channel-block-kernels-are-stochastic` · lemma — The DMC product laws are stochastic kernels
- `def-discrete-memoryless-channel-information-capacity` · definition — Single-letter information capacity of a finite DMC
- `def-fixed-length-channel-code` · definition — Fixed-length codes for a finite DMC
- `def-discrete-memoryless-channel-information-density` · definition — Finite DMC information density
- `lem-discrete-memoryless-channel-capacity-is-attained` · lemma — Finite DMC information capacity is attained
- `lem-discrete-memoryless-channel-n-letter-information-bound` · lemma — The n-letter mutual information of a DMC is at most nC
- `def-fixed-length-channel-code-errors` · definition — Average and maximal error of a fixed-length code
- `lem-discrete-memoryless-channel-iid-information-density-converges` · lemma — IID DMC information density converges to mutual information
- `lem-discrete-memoryless-channel-capacity-achieving-output-divergence-bound` · lemma — Capacity-achieving output laws bound every row divergence
- `def-discrete-memoryless-channel-operational-capacity` · definition — Average-error and maximal-error DMC capacities
- `lem-discrete-memoryless-channel-average-to-maximal-expurgation` · lemma — Expurgation converts small average error to small maximal error
- `thm-discrete-memoryless-channel-random-coding-achievability` · theorem — Random coding achieves every rate below finite DMC capacity
- `lem-discrete-memoryless-channel-information-density-concentration` · lemma — Uniform concentration around the capacity output divergence bound
- `thm-discrete-memoryless-channel-average-error-converse` · theorem — Reliable average-error DMC rates do not exceed capacity
- `thm-discrete-memoryless-channel-alphabet-scoped-strong-converse` · theorem — Strong converse for finite-alphabet DMCs
- `thm-discrete-memoryless-channel-capacity-formula` · theorem — Operational capacity formula for a finite DMC

### `discrete-memoryless-channel-capacity-examples` — Discrete Memoryless Channel Capacity — Examples (2 item(s))

- `ex-binary-symmetric-channel-capacity` · example — Capacity of the binary symmetric channel
- `ex-binary-erasure-channel-capacity` · example — Capacity of the binary erasure channel

### `cost-constrained-gaussian-and-feedback-channels` — Cost-Constrained, Gaussian, and Feedback Channels (25 item(s))

- `def-parallel-gaussian-channel-with-power-constraint` · definition — Finite-dimensional additive Gaussian channel with average power
- `lem-cost-pruned-random-code` · lemma — A low-error random code can be pruned to satisfy a strict average cost constraint
- `lem-density-channel-threshold-random-coding-bound` · lemma — Threshold decoding bound for memoryless channels with densities
- `lem-finite-simplex-entropy-continuity-and-concavity` · lemma — Finite-simplex entropy is continuous and concave
- `lem-gaussian-maximum-differential-entropy-under-variance` · lemma — A Gaussian maximizes scalar differential entropy at fixed variance
- `lem-jensen-for-integrable-cost-random-variable` · lemma — Jensen's inequality for an integrable cost random variable
- `lem-standard-normal-fourth-moment` · lemma — A normal variable has finite fourth moment
- `lem-water-filling-optimal-allocation` · lemma — Water-filling maximizes the finite parallel Gaussian allocation objective
- `def-countable-dmc-zero-cost-information-capacity` · definition — Zero-cost information capacity of a countable-input finite-output DMC
- `def-parallel-awgn-feedback-code` · definition — Causal feedback codes for a finite-dimensional Gaussian channel
- `lem-gaussian-noise-orthogonalization` · lemma — Orthogonal coordinates diagonalize a finite-dimensional Gaussian noise law
- `lem-parallel-awgn-single-use-information-bound` · lemma — Finite-input vector Gaussian mutual information is bounded by water-filling
- `lem-parallel-awgn-information-density-convergence` · lemma — Parallel Gaussian information density obeys a finite-variance law of large numbers
- `def-finite-dmc-cost-model` · definition — Finite DMC with a nonnegative input cost and feasible budget
- `lem-parallel-awgn-cost-constrained-achievability` · lemma — Strictly feasible Gaussian inputs yield cost-feasible Gaussian codes
- `def-cost-constrained-dmc-code-and-capacity` · definition — Average-cost fixed-length codes and operational DMC capacity
- `def-finite-dmc-feedback-code` · definition — Causal feedback codes for a finite cost-constrained DMC
- `lem-cost-constrained-dmc-information-capacity-properties` · lemma — Constrained DMC information capacity is attained, nondecreasing, and concave
- `lem-finite-message-fano-for-density-observation` · lemma — Fano's inequality for a finite message observed through a density
- `lem-cost-constrained-dmc-achievability` · lemma — Strictly feasible DMC input laws achieve every lower mutual-information rate
- `lem-cost-constrained-dmc-mutual-information-under-average-cost` · lemma — An average-cost DMC block input has mutual information at most n C_I(Gamma)
- `thm-parallel-awgn-feedback-capacity-water-filling` · theorem — Capacity of finite parallel Gaussian channels with and without feedback
- `thm-cost-constrained-dmc-capacity-formula` · theorem — Average-cost capacity formula for a finite DMC
- `cor-inactive-dmc-cost-constraint-recovers-capacity` · corollary — An inactive DMC cost constraint recovers ordinary capacity
- `thm-feedback-does-not-increase-cost-constrained-dmc-capacity` · theorem — Causal feedback does not increase finite DMC capacity under average cost

### `cost-constrained-gaussian-and-feedback-channels-examples` — Cost-Constrained, Gaussian, and Feedback Channels — Examples (4 item(s))

- `ex-countable-input-channel-finite-capacity-supremum-not-attained` · example — A finite information-capacity supremum need not be attained
- `ex-correlated-gaussian-noise-orthogonal-reduction` · example — Orthogonal reduction of a correlated two-dimensional Gaussian channel
- `ex-two-branch-awgn-water-filling` · example — Water-filling for noise variances one and four
- `ex-binary-identity-channel-with-cost-and-feedback` · example — Cost-constrained capacity of a binary identity channel with feedback

## Your seams

Your pages depend on another group's:

- `rate-distortion-and-lossy-source-coding` requires `stationary-ergodic-sources-and-universal-coding` (group o, batch 10)
- `discrete-memoryless-channel-capacity` requires `f-divergences-renyi-and-hypothesis-testing` (group n, batch 7)

Another group's pages depend on yours:

- `finite-blocklength-and-reliability` (group q) requires your `cost-constrained-gaussian-and-feedback-channels`
- `point-to-point-source-channel-separation` (group q) requires your `discrete-memoryless-channel-capacity`
- `point-to-point-source-channel-separation` (group q) requires your `rate-distortion-and-lossy-source-coding`
- `lossy-source-coding-with-side-information` (group r) requires your `rate-distortion-and-lossy-source-coding`
- `lossy-source-coding-with-side-information` (group r) requires your `cost-constrained-gaussian-and-feedback-channels`
- `secrecy-and-information-privacy` (group s) requires your `discrete-memoryless-channel-capacity`
- `finite-quantization-lloyd-and-compact-companders` (group u) requires your `rate-distortion-and-lossy-source-coding`

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
