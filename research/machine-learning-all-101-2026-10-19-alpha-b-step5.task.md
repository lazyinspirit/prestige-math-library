# Step 5 adjudication — group **b**, run `machine-learning-all-101-2026-10-19`

You are the group Alpha for batches 5, 6, 7: 3 A/B pair(s), 6 page(s), 26 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **5**: `research/machine-learning-all-101-2026-10-19-batch-5-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **6**: `research/machine-learning-all-101-2026-10-19-batch-6-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **7**: `research/machine-learning-all-101-2026-10-19-batch-7-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 5 | `rademacher-complexity-and-generalization` | A | machine-learning | 2704 | `concentration-inequalities-and-tail-bounds`, `finite-class-pac-learning-and-erm`, `symmetrization-rademacher-complexity-and-covering-entropy` |
| 5 | `rademacher-complexity-and-generalization-examples` | B | machine-learning | 2705 | `rademacher-complexity-and-generalization` |
| 6 | `algorithmic-stability-and-generalization` | A | machine-learning | 2706 | `concentration-inequalities-and-tail-bounds`, `rademacher-complexity-and-generalization` |
| 6 | `algorithmic-stability-and-generalization-examples` | B | machine-learning | 2707 | `algorithmic-stability-and-generalization` |
| 7 | `compression-and-pac-bayes-generalization` | A | machine-learning | 2708 | `concentration-inequalities-and-tail-bounds`, `prediction-problems-risks-and-empirical-minimization`, `product-measures-and-the-fubini-tonelli-theorems`, `symmetrization-rademacher-complexity-and-covering-entropy`, `finite-alphabet-entropy-and-divergence` |
| 7 | `compression-and-pac-bayes-generalization-examples` | B | machine-learning | 2709 | `compression-and-pac-bayes-generalization`, `trust-region-and-cubic-regularization-methods` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `rademacher-complexity-and-generalization` — Rademacher complexity and uniform generalization (5 item(s))

- `def-rademacher-complexity` · definition — One-sided Rademacher complexity
- `thm-rademacher-contraction-inequality` · theorem — One-sided coordinate Rademacher contraction
- `thm-rademacher-symmetrization-bound` · theorem — One-sided Rademacher symmetrization bound
- `thm-rademacher-uniform-generalization` · theorem — Rademacher uniform generalization bounds
- `cor-erm-excess-risk-from-uniform-deviation` · corollary — ERM excess risk from Rademacher uniform deviation

### `rademacher-complexity-and-generalization-examples` — Rademacher complexity and uniform generalization — Examples (3 item(s))

- `ex-finite-class-rademacher-complexity` · example — A two-function loss class has explicit Rademacher complexity
- `ex-bounded-linear-predictor-rademacher-bound` · example — Bounded linear predictors have a radius-dependent bound
- `ex-clipped-linear-class-shows-loose-radius-bound` · example — Clipping can make the linear radius bound loose

### `algorithmic-stability-and-generalization` — Algorithmic stability and generalization (4 item(s))

- `def-uniform-algorithmic-stability` · definition — Uniform algorithmic stability under deletion
- `thm-uniform-stability-expected-generalization` · theorem — Expected generalization from uniform stability
- `thm-uniform-stability-high-probability-generalization` · theorem — High-probability generalization from uniform stability
- `thm-strongly-convex-regularized-erm-stability` · theorem — Strongly convex RKHS regularized ERM is stable

### `algorithmic-stability-and-generalization-examples` — Algorithmic stability and generalization — Examples (3 item(s))

- `ex-strongly-convex-regularized-loss-stability` · example — Absolute-loss RKHS regularization has an explicit stability envelope
- `ex-one-nearest-neighbor-has-unit-deletion-instability` · example — A nearest-neighbor rule can have unit deletion instability and zero training loss
- `ex-stability-versus-training-accuracy-and-rademacher-bound` · example — Training accuracy, algorithmic stability, and class-wide Rademacher bounds

### `compression-and-pac-bayes-generalization` — Sample compression and PAC-Bayes bounds (8 item(s))

- `def-pac-bayes-prior-and-posterior` · definition — PAC-Bayes priors, posteriors, and relative entropy
- `lem-compression-binomial-sum-bound` · lemma — A binomial-sum bound for compression sample sizes
- `lem-pac-bayes-donsker-varadhan-inequality` · lemma — The PAC-Bayes change-of-measure inequality
- `def-sample-compression-scheme` · definition — Deterministic sample-compression schemes
- `thm-pac-bayes-kl-bound` · theorem — The PAC-Bayes KL generalization bound
- `thm-compression-generalization-bound` · theorem — The sample-compression generalization bound
- `cor-pac-bayes-risk-bound` · corollary — A PAC-Bayes bound for a finite tuning grid
- `cor-compression-sample-size-bound` · corollary — A sample-size consequence for compression schemes

### `compression-and-pac-bayes-generalization-examples` — Sample compression and PAC-Bayes bounds — Examples (3 item(s))

- `ex-pac-bayes-single-hypothesis-posterior` · example — A posterior concentrated on one hypothesis
- `cex-pac-bayes-data-dependent-prior-fails` · counterexample — A data-dependent prior can invalidate the PAC-Bayes bound
- `ex-finite-support-sample-compression` · example — A finite-support sample-compressed classifier

## Your seams

Your pages depend on another group's:

- `rademacher-complexity-and-generalization` requires `finite-class-pac-learning-and-erm` (group a, batch 3)
- `compression-and-pac-bayes-generalization` requires `prediction-problems-risks-and-empirical-minimization` (group a, batch 2)

Another group's pages depend on yours:

- `distribution-shift-and-domain-adaptation` (group c) requires your `rademacher-complexity-and-generalization`
- `norm-and-margin-generalization-for-neural-networks` (group r) requires your `rademacher-complexity-and-generalization`
- `self-supervised-and-contrastive-representation-learning` (group s) requires your `rademacher-complexity-and-generalization`

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
