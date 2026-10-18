# Step 5 adjudication — group **s**, run `non-ml-math-remaining-81-2026-10-18`

You are the group Alpha for batches 20, 21, 22: 3 A/B pair(s), 6 page(s), 48 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **20**: `research/non-ml-math-remaining-81-2026-10-18-batch-20-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **21**: `research/non-ml-math-remaining-81-2026-10-18-batch-21-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **22**: `research/non-ml-math-remaining-81-2026-10-18-batch-22-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 20 | `secrecy-and-information-privacy` | A | information-theory | 2532 | `discrete-memoryless-channel-capacity`, `iid-lossless-source-coding-and-the-aep`, `trust-region-and-cubic-regularization-methods` |
| 20 | `secrecy-and-information-privacy-examples` | B | information-theory | 2533 | `secrecy-and-information-privacy` |
| 21 | `quantum-information-measures` | A | information-theory | 2534 | `finite-alphabet-entropy-and-divergence`, `trace-distance-fidelity-and-information-limits`, `knill-laflamme-recovery-and-subsystem-codes`, `trust-region-and-cubic-regularization-methods` |
| 21 | `quantum-information-measures-examples` | B | information-theory | 2535 | `quantum-information-measures` |
| 22 | `quantum-relative-entropy-data-processing-and-strong-subadditivity` | A | information-theory | 2536 | `quantum-information-measures` |
| 22 | `quantum-relative-entropy-data-processing-and-strong-subadditivity-examples` | B | information-theory | 2537 | `quantum-relative-entropy-data-processing-and-strong-subadditivity` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `secrecy-and-information-privacy` — Secrecy and Information Privacy (14 item(s))

- `thm-it-universal-hashing-leftover-bound` · theorem — Classical leftover-hash bound with public side information
- `def-it-finite-source-privacy-utility-region` · definition — Finite-source privacy–utility region
- `def-it-information-leakage-and-equivocation` · definition — Information leakage and equivocation for finite observations
- `lem-it-finite-wiretap-product-kernel-is-stochastic` · lemma — The finite wiretap product law is stochastic
- `def-it-wiretap-channel` · definition — Finite discrete memoryless wiretap channel and code model
- `thm-it-perfect-privacy-kernel-criterion` · theorem — A finite kernel criterion for perfect privacy
- `def-it-degraded-wiretap-channel` · definition — Finite degraded wiretap channel
- `def-it-weak-and-strong-secrecy` · definition — Weak and strong secrecy for wiretap code sequences
- `lem-it-finite-dmc-information-density-concentration` · lemma — Information-density concentration for a fixed finite DMC input law
- `def-it-wiretap-secrecy-capacities` · definition — Operational weak and strong secrecy capacities
- `lem-it-channel-resolvability-soft-covering` · lemma — Finite DMC resolvability by random codebooks
- `lem-it-classical-wiretap-auxiliary-cardinality` · lemma — The finite wiretap auxiliary has cardinality at most |X|
- `thm-it-finite-classical-wiretap-auxiliary-capacity` · theorem — Strong-secrecy capacity of a finite DMC wiretap channel
- `thm-it-degraded-wiretap-secrecy-capacity` · theorem — Secrecy capacity of a finite degraded wiretap channel

### `secrecy-and-information-privacy-examples` — Secrecy and Information Privacy — Examples (3 item(s))

- `ex-it-information-bottleneck-finite-model` · example — A finite information-bottleneck privacy model
- `ex-it-weak-secrecy-does-not-imply-strong-secrecy` · example — Weak secrecy does not imply strong secrecy
- `ex-it-degraded-wiretap-capacity` · example — A degraded binary erasure wiretap channel

### `quantum-information-measures` — Quantum Information Measures (21 item(s))

- `def-it-von-neumann-entropy` · definition — Finite-dimensional von Neumann entropy
- `lem-it-partial-traces-of-a-state-are-states` · lemma — Partial traces of a finite bipartite state are states
- `lem-it-finite-cq-block-sum-is-a-state` · lemma — An orthogonal finite ensemble block sum is a density operator
- `lem-it-inverse-compression-resolvent` · lemma — Inverse compression for positive resolvents
- `lem-it-finite-classical-kl-nonnegative-equality` · lemma — Nonnegativity and equality for finite classical relative entropy
- `lem-it-finite-povm-measurement-channel` · lemma — A finite POVM defines a classical-output quantum channel
- `def-it-finite-dimensional-quantum-relative-entropy` · definition — Finite-dimensional quantum relative entropy
- `def-it-finite-quantum-information-measures` · definition — Finite quantum mutual, conditional, and conditional mutual information
- `lem-it-operator-jensen-negative-log` · lemma — The compression Jensen inequality for the negative logarithm
- `def-it-classical-quantum-state-and-holevo-information` · definition — Finite classical-quantum states and Holevo information
- `lem-it-quantum-entropy-support-and-finiteness` · lemma — Joint state support is contained in the tensor product of its marginal supports
- `lem-it-relative-modular-representation` · lemma — Relative modular representation of finite quantum relative entropy
- `lem-it-quantum-relative-entropy-support-regularization` · lemma — Support-sensitive regularization limit for quantum relative entropy
- `lem-it-quantum-relative-entropy-isometric-invariance` · lemma — Isometric invariance of finite quantum relative entropy
- `thm-it-finite-quantum-conditional-mutual-information-identities` · theorem — Finite quantum conditional mutual information identity
- `thm-it-quantum-relative-entropy-joint-convexity` · theorem — Joint convexity of finite quantum relative entropy
- `thm-it-quantum-entropy-identities` · theorem — Finite quantum mutual information identities and the Holevo identity
- `thm-it-quantum-relative-entropy-partial-trace-data-processing` · theorem — Partial-trace data processing for finite quantum relative entropy
- `thm-it-quantum-relative-entropy-channel-data-processing` · theorem — Channel data processing for finite quantum relative entropy
- `thm-it-quantum-relative-entropy-nonnegative-equality` · theorem — Nonnegativity and equality for finite quantum relative entropy
- `thm-it-holevo-measurement-bound` · theorem — The finite Holevo measurement bound

### `quantum-information-measures-examples` — Quantum Information Measures — Examples (4 item(s))

- `ex-it-qubit-von-neumann-entropy` · example — Entropy of a diagonal qubit state
- `ex-it-classical-ensemble-holevo-equality` · example — An orthogonal ensemble attains its Holevo information
- `cex-it-non-full-support-quantum-kl-is-infinite` · counterexample — Normalized states can have infinite quantum relative entropy
- `ex-it-bell-pair-negative-conditional-entropy` · example — A Bell pair has negative quantum conditional entropy

### `quantum-relative-entropy-data-processing-and-strong-subadditivity` — Quantum Relative Entropy, Data Processing, and Strong Subadditivity (3 item(s))

- `lem-it-finite-weyl-twirl-partial-trace` · lemma — The finite Weyl twirl is the normalized partial trace
- `thm-it-finite-strong-subadditivity` · theorem — Strong subadditivity of finite-dimensional quantum entropy
- `thm-it-finite-quantum-conditional-mutual-information-nonnegative` · theorem — Nonnegativity of finite-dimensional quantum conditional mutual information

### `quantum-relative-entropy-data-processing-and-strong-subadditivity-examples` — Quantum Relative Entropy, Data Processing, and Strong Subadditivity — Examples (3 item(s))

- `ex-it-dephasing-quantum-relative-entropy-dpi` · example — Qubit dephasing decreases quantum relative entropy
- `ex-it-strong-subadditivity-for-pure-tripartite-state` · example — Strong subadditivity for a pure GHZ tripartite state
- `cex-it-fidelity-data-processing-does-not-prove-qre-dpi` · counterexample — Fidelity and trace-distance inequalities do not imply QRE data processing

## Your seams

Your pages depend on another group's:

- `secrecy-and-information-privacy` requires `discrete-memoryless-channel-capacity` (group p, batch 12)
- `secrecy-and-information-privacy` requires `iid-lossless-source-coding-and-the-aep` (group o, batch 9)
- `quantum-information-measures` requires `finite-alphabet-entropy-and-divergence` (group m, batch 4)

Another group's pages depend on yours:

- `quantum-source-compression-and-cq-capacity` (group t) requires your `quantum-relative-entropy-data-processing-and-strong-subadditivity`
- `quantum-key-distribution-and-composable-secrecy` (group t) requires your `secrecy-and-information-privacy`
- `quantum-key-distribution-and-composable-secrecy` (group t) requires your `quantum-relative-entropy-data-processing-and-strong-subadditivity`

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
