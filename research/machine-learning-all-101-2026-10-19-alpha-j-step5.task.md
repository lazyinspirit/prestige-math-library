# Step 5 adjudication — group **j**, run `machine-learning-all-101-2026-10-19`

You are the group Alpha for batches 29, 30, 31: 3 A/B pair(s), 6 page(s), 65 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **29**: `research/machine-learning-all-101-2026-10-19-batch-29-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **30**: `research/machine-learning-all-101-2026-10-19-batch-30-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **31**: `research/machine-learning-all-101-2026-10-19-batch-31-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 29 | `ml02-private-learning` | A | machine-learning | 2752 | `finite-class-pac-learning-and-erm`, `ml02-differential-privacy`, `quantum-optimization-sdp-and-variational-algorithms` |
| 29 | `ml02-private-learning-examples` | B | machine-learning | 2753 | `ml02-private-learning` |
| 30 | `ml02-federated-optimization` | A | machine-learning | 2754 | `ml02-differential-privacy`, `ml02-linear-sparse-models`, `probability-spaces-random-variables-and-expectation`, `variance-reduced-finite-sum-and-adaptive-gradient-optimization` |
| 30 | `ml02-federated-optimization-examples` | B | machine-learning | 2755 | `ml02-federated-optimization` |
| 31 | `feedforward-networks-and-universal-approximation` | A | machine-learning | 2756 | `stone-weierstrass-general`, `distributions-test-functions-and-differentiation`, `choice-strength-in-baire-urysohn-stone-and-tychonoff`, `outward-rounded-interval-and-ball-arithmetic` |
| 31 | `feedforward-networks-and-universal-approximation-examples` | B | machine-learning | 2757 | `feedforward-networks-and-universal-approximation` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `ml02-private-learning` — Private ERM and private online learning (4 item(s))

- `alg-private-randomized-weighted-majority` · algorithm — Randomized weighted majority with full information
- `alg-private-finite-class-erm` · algorithm — Finite-class empirical-risk selection with exponential weights
- `thm-private-online-learning-regret-under-composition` · theorem — Private online learning regret under composition
- `thm-private-erm-excess-risk` · theorem — Private finite-class ERM excess-risk bound

### `ml02-private-learning-examples` — Private ERM and private online learning — Examples (3 item(s))

- `ex-online-one-round-replacement` · example — Replacing one full loss vector changes a later action kernel
- `ex-private-threshold-class-erm` · example — Private ERM on a four-threshold class
- `ex-private-erm-large-finite-class` · example — A finite class can make private ERM impractical

### `ml02-federated-optimization` — Federated averaging, local SGD, and SCAFFOLD (33 item(s))

- `def-federated-objective-and-client-sampling` · definition — Federated objectives and client sampling
- `alg-local-sgd` · algorithm — Local SGD with periodic synchronization
- `lem-relaxed-euclidean-squared-norm` · lemma — Relaxed inequalities for squared Euclidean norms
- `lem-finite-martingale-difference-sum-variance` · lemma — Second moment bound for a finite martingale-difference sum
- `lem-local-sgd-weighted-recursion` · lemma — Quadratic-weighted telescope for a strongly convex recursion
- `lem-federated-recursion-averaging` · lemma — Geometric and sublinear averaging for descent recursions
- `lem-smooth-convex-gradient-difference` · lemma — Smooth convex gradient differences around a minimizer
- `lem-convex-gradient-step-nonexpansive` · lemma — Gradient steps of smooth convex functions are nonexpansive
- `alg-fedavg` · algorithm — Federated averaging (FedAvg)
- `alg-scaffold` · algorithm — SCAFFOLD with client and server control variates
- `lem-uniform-client-sampling-moments` · lemma — Moments of a uniformly sampled fixed-size client set
- `lem-local-sgd-virtual-progress` · lemma — One-step progress of the virtual local-SGD iterate
- `lem-local-sgd-sampling-variance` · lemma — Variance reduction across independent local-SGD workers
- `lem-local-sgd-client-drift` · lemma — Deviation of local-SGD workers from their virtual mean
- `lem-perturbed-strong-convexity` · lemma — Strong-convexity inequality for a perturbed gradient point
- `thm-local-sgd-convex-round-complexity` · theorem — Strongly convex local-SGD round complexity
- `def-bounded-client-gradient-dissimilarity` · definition — Standard and gap forms of bounded client gradient dissimilarity
- `lem-standard-client-dissimilarity-implies-gap-form` · lemma — Standard client dissimilarity implies the gap form with unchanged parameters
- `lem-fedavg-one-round-progress` · lemma — One-round progress of strongly convex FedAvg
- `lem-fedavg-local-drift` · lemma — Client drift under FedAvg gradient dissimilarity
- `def-scaffold-analysis-trajectory-and-errors` · definition — SCAFFOLD trajectories, client drift, control lag and tracking error
- `thm-fedavg-under-gradient-dissimilarity` · theorem — Strongly convex FedAvg under bounded gradient dissimilarity
- `lem-scaffold-control-tracking-identity` · lemma — Option II controls track gradients at stored client anchors
- `lem-scaffold-convex-server-variance` · lemma — Convex SCAFFOLD server-update second moment
- `lem-scaffold-convex-control-lag` · lemma — Convex SCAFFOLD control-lag recursion
- `lem-scaffold-convex-client-drift` · lemma — Convex SCAFFOLD client-drift bound
- `lem-scaffold-convex-round-progress` · lemma — Strongly convex SCAFFOLD progress in one communication round
- `lem-scaffold-nonconvex-server-variance` · lemma — Nonconvex SCAFFOLD server-update moments
- `lem-scaffold-nonconvex-client-drift` · lemma — Nonconvex SCAFFOLD query-point drift bound
- `lem-scaffold-nonconvex-control-lag` · lemma — Nonconvex SCAFFOLD control-anchor tracking recursion
- `lem-scaffold-nonconvex-round-progress` · lemma — Nonconvex SCAFFOLD progress in one communication round
- `thm-scaffold-convex-and-nonconvex-rates` · theorem — SCAFFOLD rates for strongly convex, convex and nonconvex objectives
- `fs-scaffold-general-convex-uniform-output-round-headline` · false-statement — SCAFFOLD general-convex round headline with a uniform server-iterate output

### `ml02-federated-optimization-examples` — Federated averaging, local SGD, and SCAFFOLD — Examples (4 item(s))

- `ex-local-versus-periodic-synchronization` · example — Local updates and periodic synchronization give different averages
- `ex-client-data-locality-does-not-imply-dp` · example — Keeping records on clients does not imply differential privacy
- `ex-two-client-shifted-optima` · example — Two clients with shifted least-squares optima
- `ex-scaffold-control-correction` · example — SCAFFOLD controls cancel shifted local gradients at the server model

### `feedforward-networks-and-universal-approximation` — Feedforward networks and single-hidden-layer universality (16 item(s))

- `def-feedforward-neural-network` · definition — Finite feedforward computation graphs and layered MLPs
- `def-activation-class-locally-essentially-bounded-ae-continuous` · definition — Locally essentially bounded activations with null discontinuity closure
- `lem-polynomial-ridge-functions-dense-on-compact-sets` · lemma — Polynomial ridge functions are dense on compact sets
- `lem-linear-ridge-pullback-of-null-sets-is-null` · lemma — Nonconstant affine ridge pullbacks preserve Lebesgue nullity
- `lem-fixed-support-test-function-space-is-separable` · lemma — A fixed-support smooth test-function space is separable
- `lem-distribution-with-vanishing-highest-derivative-is-polynomial` · lemma — A distribution with a vanishing derivative is a polynomial
- `lem-continuous-functions-dense-in-lp-for-compactly-supported-finite-borel-measures` · lemma — Continuous functions are dense in Lp for compactly supported finite measures
- `lem-nonzero-real-polynomial-zero-set-is-lebesgue-null` · lemma — The zero set of a nonzero real polynomial is Lebesgue null
- `def-single-hidden-layer-network` · definition — Single-hidden-layer network realization
- `lem-all-polynomial-convolutions-have-uniformly-bounded-degree` · lemma — Polynomial activation convolutions have a common degree bound
- `lem-polynomial-activation-bounded-degree-obstruction` · lemma — Polynomial activations have a bounded-degree obstruction
- `lem-smooth-nonpolynomial-activation-dense-on-compact-intervals` · lemma — Smooth nonpolynomial activations are dense on compact sets
- `lem-network-approximates-smooth-activation-convolutions` · lemma — Networks approximate smooth convolutions of the activation
- `lem-polynomial-convolutions-force-activation-polynomial-ae` · lemma — Polynomial convolutions force activation polynomiality almost everywhere
- `lem-rough-nonpolynomial-activation-universal-on-compact-sets` · lemma — Rough nonpolynomial activations are dense on compact sets
- `thm-single-hidden-layer-universal-approximation` · theorem — Single-hidden-layer universal approximation

### `feedforward-networks-and-universal-approximation-examples` — Feedforward networks and single-hidden-layer universality — Examples (5 item(s))

- `cex-offset-free-sine-ridge-functions-are-not-dense` · counterexample — Offset-free sine ridge functions cannot approximate even targets
- `cex-pointwise-uniformity-fails-for-an-essentially-bounded-activation` · counterexample — Essential boundedness does not imply pointwise uniform universality
- `cex-zero-measure-does-not-force-a-nonpolynomial-activation` · counterexample — The zero-measure Lp boundary
- `ex-polynomial-activation-bounded-degree-obstruction` · example — A polynomial activation confines univariate outputs to bounded degree
- `ex-relu-and-sigmoid-activations-meet-the-universality-conditions` · example — ReLU and logistic sigmoid activation examples

## Your seams

Your pages depend on another group's:

- `ml02-private-learning` requires `finite-class-pac-learning-and-erm` (group a, batch 3)
- `ml02-private-learning` requires `ml02-differential-privacy` (group i, batch 28)
- `ml02-federated-optimization` requires `ml02-differential-privacy` (group i, batch 28)
- `ml02-federated-optimization` requires `ml02-linear-sparse-models` (group d, batch 13)

Another group's pages depend on yours:

- `relu-approximation-rates-and-depth-expressivity` (group k) requires your `feedforward-networks-and-universal-approximation`
- `attention-and-transformer-expressivity` (group l) requires your `feedforward-networks-and-universal-approximation`
- `neural-operators-and-physics-informed-learning` (group l) requires your `feedforward-networks-and-universal-approximation`
- `automatic-differentiation-and-backpropagation` (group m) requires your `feedforward-networks-and-universal-approximation`
- `initialization-and-signal-propagation` (group n) requires your `feedforward-networks-and-universal-approximation`
- `mean-field-training-and-feature-learning` (group q) requires your `feedforward-networks-and-universal-approximation`
- `norm-and-margin-generalization-for-neural-networks` (group r) requires your `feedforward-networks-and-universal-approximation`
- `compression-generalization-for-trained-networks` (group r) requires your `feedforward-networks-and-universal-approximation`
- `algorithmic-stability-of-stochastic-training` (group r) requires your `ml02-federated-optimization`
- `reconstruction-and-masked-autoencoders` (group s) requires your `feedforward-networks-and-universal-approximation`
- `multimodal-contrastive-alignment-and-transfer` (group w) requires your `feedforward-networks-and-universal-approximation`
- `low-rank-adaptation-and-parameter-update-geometry` (group af) requires your `feedforward-networks-and-universal-approximation`

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
