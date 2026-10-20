# Step 5 adjudication — group **af**, run `machine-learning-all-101-2026-10-19`

You are the group Alpha for batches 95, 96, 97: 3 A/B pair(s), 6 page(s), 38 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **95**: `research/machine-learning-all-101-2026-10-19-batch-95-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **96**: `research/machine-learning-all-101-2026-10-19-batch-96-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **97**: `research/machine-learning-all-101-2026-10-19-batch-97-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 95 | `low-rank-adaptation-and-parameter-update-geometry` | A | machine-learning | 2984 | `attention-and-transformer-expressivity`, `automatic-differentiation-and-backpropagation`, `automatic-differentiation-and-computational-graphs`, `feedforward-networks-and-universal-approximation` |
| 95 | `low-rank-adaptation-and-parameter-update-geometry-examples` | B | machine-learning | 2985 | `low-rank-adaptation-and-parameter-update-geometry` |
| 96 | `preference-learning-and-direct-preference-optimization` | A | machine-learning | 2986 | `automatic-differentiation-and-backpropagation`, `calibration-proper-losses-and-surrogate-classification`, `ml02-linear-classification`, `variational-inference-and-evidence-lower-bound`, `f-divergences-renyi-and-hypothesis-testing` |
| 96 | `preference-learning-and-direct-preference-optimization-examples` | B | machine-learning | 2987 | `preference-learning-and-direct-preference-optimization` |
| 97 | `discrete-masked-diffusion-and-reverse-generation` | A | machine-learning | 2988 | `markov-kernels-and-markov-chains`, `prediction-problems-risks-and-empirical-minimization`, `variational-inference-and-evidence-lower-bound`, `mcmc-ergodicity-and-mixing`, `f-divergences-renyi-and-hypothesis-testing` |
| 97 | `discrete-masked-diffusion-and-reverse-generation-examples` | B | machine-learning | 2989 | `discrete-masked-diffusion-and-reverse-generation` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `low-rank-adaptation-and-parameter-update-geometry` — Low-rank adaptation and the geometry of parameter updates (5 item(s))

- `def-low-rank-adaptation-of-a-linear-layer` · definition — Low-rank adaptation of a linear layer
- `alg-finite-budget-low-rank-adaptation` · algorithm — Finite-budget low-rank adaptation by gradient descent
- `thm-low-rank-adapter-factorization-ambiguity` · theorem — Rank capacity and factorization ambiguity of a low-rank adapter
- `thm-low-rank-adapter-merging-and-gradients` · theorem — Exact merging and gradients for a low-rank adapter
- `rem-adaptation-rank-and-empirical-transfer` · remark — Rank restrictions and empirical transfer claims

### `low-rank-adaptation-and-parameter-update-geometry-examples` — Low-rank adaptation and the geometry of parameter updates — Examples (4 item(s))

- `ex-low-rank-adapter-change-of-basis` · example — A change of basis gives different factors with the same adapter update
- `ex-rank-one-adapter-cannot-realize-full-rank-update` · example — A rank-one adapter cannot realize a full-rank two-dimensional update
- `ex-zero-zero-initialization-stalls-adaptation` · example — Zero-zero initialization stalls one step, while nonzero A can move
- `ex-merged-and-unmerged-adapter-forward-pass-agree` · example — Merged and unmerged adapter forward passes agree

### `preference-learning-and-direct-preference-optimization` — Preference learning and direct preference optimization (7 item(s))

- `def-kl-regularized-policy-improvement` · definition — Finite KL-regularized policy improvement
- `def-bradley-terry-preference-model` · definition — Finite Bradley–Terry preference model
- `thm-finite-action-gibbs-policy-optimum` · theorem — The finite-action Gibbs policy uniquely maximizes reward minus KL
- `thm-dpo-reward-policy-reparameterization` · theorem — Bradley–Terry reward-policy reparameterization and finite DPO gradient
- `rem-preference-coverage-and-model-misspecification` · remark — Preference coverage and Bradley–Terry model limits
- `alg-direct-preference-optimization-finite-budget` · algorithm — Finite-budget direct preference optimization by mini-batch gradient descent
- `lem-finite-budget-dpo-properties-and-work` · lemma — Finite-budget DPO preserves its valid pair and terminates with finite oracle work

### `preference-learning-and-direct-preference-optimization-examples` — Preference learning and direct preference optimization — Examples (4 item(s))

- `ex-two-response-kl-regularized-gibbs-policy` · example — A two-response Gibbs policy with exact probabilities
- `cex-disconnected-comparison-support-does-not-identify-policy` · counterexample — Disconnected comparison support does not identify Gibbs policy mass
- `ex-prompt-reward-offset-leaves-policy-unchanged` · example — A prompt-only reward offset leaves Bradley–Terry comparisons and policy unchanged
- `cex-zero-reference-support-breaks-dpo-log-ratio` · counterexample — Zero reference support makes the DPO reward ratio undefined

### `discrete-masked-diffusion-and-reverse-generation` — Discrete masked diffusion and finite-state reverse generation (15 item(s))

- `def-finite-masking-diffusion-chain` · definition — Finite masking diffusion chain
- `lem-finite-state-kernel-error-controls-mixtures` · lemma — Uniform row error bounds mixture-kernel error
- `lem-finite-product-kl-additivity` · lemma — Finite product KL is the sum of coordinate KLs
- `thm-finite-chain-reverse-kernel-error-telescope` · theorem — Finite-chain reverse-kernel error telescope
- `lem-finite-masking-chain-is-well-defined` · lemma — Finite masking-chain transitions define a probability law
- `alg-finite-grid-masked-diffusion-sampler` · algorithm — Finite-grid masked reverse sampler
- `lem-finite-grid-masked-sampler-is-well-defined` · lemma — Finite-grid masked sampler defines a normalized law
- `thm-masking-chain-posterior` · theorem — Posterior of a finite masking chain
- `lem-finite-masking-path-reversal-factorization` · lemma — Finite masking path law factors backward by its posterior rows
- `thm-masked-diffusion-kl-reduces-to-cross-entropy` · theorem — Masked-diffusion KL reduces to weighted cross-entropy
- `def-finite-masked-diffusion-generative-model` · definition — Finite masked-diffusion generative model
- `lem-finite-masked-generative-joint-law-is-normalized` · lemma — Finite masked-diffusion joint model is normalized
- `lem-forward-path-is-admissible-for-finite-masked-model` · lemma — Forward path law is admissible for the finite masked model
- `cor-masked-diffusion-finite-elbo-cross-entropy` · corollary — Finite masked-diffusion ELBO is weighted cross-entropy
- `rem-discrete-diffusion-factorization-and-endpoint-limits` · remark — Factorization and finite-endpoint warnings

### `discrete-masked-diffusion-and-reverse-generation-examples` — Discrete masked diffusion and finite-state reverse generation — Examples (3 item(s))

- `ex-finite-chain-model-error-accumulates-with-zero-mesh-error` · example — Finite model error accumulates in a fixed chain
- `cex-factorized-reverse-kernel-fails-for-correlated-tokens` · counterexample — A factorized reverse kernel fails for correlated tokens
- `ex-masked-diffusion-single-token-posterior` · example — One-token posterior on a finite mask schedule

## Your seams

Your pages depend on another group's:

- `low-rank-adaptation-and-parameter-update-geometry` requires `attention-and-transformer-expressivity` (group l, batch 36)
- `low-rank-adaptation-and-parameter-update-geometry` requires `automatic-differentiation-and-backpropagation` (group m, batch 38)
- `low-rank-adaptation-and-parameter-update-geometry` requires `feedforward-networks-and-universal-approximation` (group j, batch 31)
- `preference-learning-and-direct-preference-optimization` requires `automatic-differentiation-and-backpropagation` (group m, batch 38)
- `preference-learning-and-direct-preference-optimization` requires `calibration-proper-losses-and-surrogate-classification` (group c, batch 8)
- `preference-learning-and-direct-preference-optimization` requires `ml02-linear-classification` (group e, batch 14)
- `discrete-masked-diffusion-and-reverse-generation` requires `prediction-problems-risks-and-empirical-minimization` (group a, batch 2)

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

# Historical Step-5 closure recovery, `machine-learning-all-101-2026-10-19`

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
