# Step 5 adjudication — group **r**, run `machine-learning-all-101-2026-10-19`

You are the group Alpha for batches 53, 54, 55: 3 A/B pair(s), 6 page(s), 23 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **53**: `research/machine-learning-all-101-2026-10-19-batch-53-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **54**: `research/machine-learning-all-101-2026-10-19-batch-54-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **55**: `research/machine-learning-all-101-2026-10-19-batch-55-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/machine-learning-all-101-2026-10-19-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 53 | `norm-and-margin-generalization-for-neural-networks` | A | machine-learning | 2796 | `feedforward-networks-and-universal-approximation`, `matrix-norms-condition-numbers-and-numerical-stability`, `rademacher-complexity-and-generalization`, `the-spectral-theorem-and-singular-value-decomposition` |
| 53 | `norm-and-margin-generalization-for-neural-networks-examples` | B | machine-learning | 2797 | `norm-and-margin-generalization-for-neural-networks` |
| 54 | `compression-generalization-for-trained-networks` | A | machine-learning | 2798 | `feedforward-networks-and-universal-approximation`, `finite-class-pac-learning-and-erm` |
| 54 | `compression-generalization-for-trained-networks-examples` | B | machine-learning | 2799 | `compression-generalization-for-trained-networks` |
| 55 | `algorithmic-stability-of-stochastic-training` | A | machine-learning | 2800 | `stochastic-gradient-descent-for-learning`, `ml02-federated-optimization` |
| 55 | `algorithmic-stability-of-stochastic-training-examples` | B | machine-learning | 2801 | `algorithmic-stability-of-stochastic-training` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `norm-and-margin-generalization-for-neural-networks` — Norm and margin generalization for neural networks (9 item(s))

- `def-sample-covering-number` · definition — Proper Frobenius covering numbers
- `def-spectral-network-complexity` · definition — Spectral network complexity with reference matrices
- `lem-empirical-rademacher-covering-integral` · lemma — A truncated covering integral bounds empirical Rademacher complexity
- `def-multiclass-margin-ramp-loss` · definition — Multiclass margins, ramp loss, and empirical margin loss
- `lem-spectral-network-matrix-cover` · lemma — A proper matrix-product cover from the mixed (2,1) norm
- `lem-multiclass-margin-rademacher-generalization` · lemma — Uniform margin-risk deviation from empirical Rademacher complexity
- `lem-spectral-network-output-covering-entropy` · lemma — Spectral and reference-matrix covering entropy for network outputs
- `lem-bounded-spectral-class-margin-generalization` · lemma — Margin generalization for a bounded spectral-complexity class
- `thm-spectral-margin-bound-for-multiclass-networks` · theorem — A simultaneous spectral margin bound for multiclass networks

### `norm-and-margin-generalization-for-neural-networks-examples` — Norm and margin generalization for neural networks — Examples (3 item(s))

- `ex-norm-margin-network-two-class-computation` · example — A two-class one-layer spectral-margin calculation
- `ex-reference-network-changes-complexity-not-predictions` · example — Changing the reference matrix changes complexity, not the network
- `ex-small-margin-sample-does-not-fix-population-error` · example — A small empirical margin loss does not determine population error

### `compression-generalization-for-trained-networks` — Compression generalization for trained networks (2 item(s))

- `def-margin-preserving-compression` · definition — Margin-preserving compression of score classifiers
- `thm-finite-description-compression-bound` · theorem — Finite-description compression bound for trained classifiers

### `compression-generalization-for-trained-networks-examples` — Compression generalization for trained networks — Examples (1 item(s))

- `ex-compressed-classifier-vs-original-predictor` · example — A compressed classifier can differ from its trained predictor off the sample

### `algorithmic-stability-of-stochastic-training` — Algorithmic stability of stochastic training (5 item(s))

- `lem-iid-sample-plus-ghost-point-are-exchangeable` · lemma — An IID sample and ghost point are exchangeable
- `def-uniform-stability` · definition — Uniform stability for randomized learning rules
- `thm-uniform-stability-implies-expected-generalization` · theorem — Uniform stability implies expected generalization
- `thm-sgd-stability-convex-loss` · theorem — Expected generalization of convex stochastic gradient training
- `thm-sgd-stability-nonconvex-loss` · theorem — Expected generalization of nonconvex stochastic gradient training

### `algorithmic-stability-of-stochastic-training-examples` — Algorithmic stability of stochastic training — Examples (3 item(s))

- `ex-sgd-convex-stability-linear-in-steps` · example — The convex constant-step stability bound is linear in the step count
- `ex-sgd-stability-convex-vs-nonconvex-schedules` · example — Constant and inverse-time schedules give different stability bounds
- `ex-sgd-nonlipschitz-loss-no-uniform-stability` · example — A smooth quadratic loss without global Lipschitzness has unbounded stability

## Your seams

Your pages depend on another group's:

- `norm-and-margin-generalization-for-neural-networks` requires `feedforward-networks-and-universal-approximation` (group j, batch 31)
- `norm-and-margin-generalization-for-neural-networks` requires `rademacher-complexity-and-generalization` (group b, batch 5)
- `compression-generalization-for-trained-networks` requires `feedforward-networks-and-universal-approximation` (group j, batch 31)
- `compression-generalization-for-trained-networks` requires `finite-class-pac-learning-and-erm` (group a, batch 3)
- `algorithmic-stability-of-stochastic-training` requires `stochastic-gradient-descent-for-learning` (group m, batch 40)
- `algorithmic-stability-of-stochastic-training` requires `ml02-federated-optimization` (group j, batch 30)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/machine-learning-all-101-2026-10-19-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 5 batch adjudication, `machine-learning-all-101-2026-10-19`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
