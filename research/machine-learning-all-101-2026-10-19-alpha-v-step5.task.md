# Step 5 adjudication — group **v**, run `machine-learning-all-101-2026-10-19`

You are the group Alpha for batches 65, 66, 67: 3 A/B pair(s), 6 page(s), 32 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **65**: `research/machine-learning-all-101-2026-10-19-batch-65-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **66**: `research/machine-learning-all-101-2026-10-19-batch-66-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **67**: `research/machine-learning-all-101-2026-10-19-batch-67-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 65 | `neural-odes-and-continuous-normalizing-flows` | A | machine-learning | 2818 | `discrete-continuous-and-pde-adjoint-sensitivities`, `euclidean-ordinary-differential-equations-with-smooth-dependence`, `global-ode-and-density-error`, `matrix-differentiation-and-first-order-spectral-perturbation`, `picard-lindelof-and-first-order-odes`, `product-measures-and-the-fubini-tonelli-theorems` |
| 65 | `neural-odes-and-continuous-normalizing-flows-examples` | B | machine-learning | 2819 | `neural-odes-and-continuous-normalizing-flows` |
| 66 | `discrete-diffusion-and-variational-objectives` | A | machine-learning | 2820 | `conjugate-families-and-posterior-prediction`, `variational-inference-and-evidence-lower-bound`, `state-space-models-as-probability-laws` |
| 66 | `discrete-diffusion-and-variational-objectives-examples` | B | machine-learning | 2821 | `discrete-diffusion-and-variational-objectives` |
| 67 | `anderson-reverse-time-diffusion` | A | machine-learning | 2822 | `forward-ito-sde-well-posedness`, `gaussian-smoothing-densities-scores-and-endpoint-limits` |
| 67 | `anderson-reverse-time-diffusion-examples` | B | machine-learning | 2873 | `anderson-reverse-time-diffusion` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `neural-odes-and-continuous-normalizing-flows` — Neural ODEs and continuous normalizing flows (4 item(s))

- `def-neural-ode` · definition — A parameterized neural ordinary differential equation
- `thm-neural-ode-global-smooth-flow` · theorem — A globally Lipschitz neural ODE has a global smooth flow
- `thm-instantaneous-change-of-variables-for-ode-flow` · theorem — Instantaneous change of variables along a neural ODE flow
- `alg-adjoint-sensitivity-method` · algorithm — Exact continuous adjoint sensitivity for a neural ODE

### `neural-odes-and-continuous-normalizing-flows-examples` — Neural ODEs and continuous normalizing flows — Examples (1 item(s))

- `ex-numerical-adjoint-error` · example — A finite Euler adjoint gradient can differ from the exact flow gradient

### `discrete-diffusion-and-variational-objectives` — Discrete diffusion chains and DDPM objectives (6 item(s))

- `def-forward-gaussian-diffusion-chain` · definition — Finite Gaussian forward chain and Gaussian reverse model
- `lem-isotropic-gaussian-kl-formula` · lemma — Reverse KL between isotropic Gaussian laws
- `thm-gaussian-forward-and-posterior-kernels` · theorem — Closed Gaussian forward marginal and conditioned posterior
- `thm-ddpm-elbo-decomposition` · theorem — DDPM variational objective and weighted noise-prediction terms
- `alg-epsilon-prediction-diffusion-training` · algorithm — Epsilon-prediction diffusion objective estimator
- `lem-diffusion-objective-estimator-expectation` · lemma — Expected output of the diffusion objective estimator

### `discrete-diffusion-and-variational-objectives-examples` — Discrete diffusion chains and DDPM objectives — Examples (2 item(s))

- `ex-scalar-gaussian-diffusion-chain` · example — Two-step scalar Gaussian forward chain and posterior
- `ex-weighted-and-simple-diffusion-losses` · example — Weighted ELBO term differs from the simple diffusion loss

### `anderson-reverse-time-diffusion` — Anderson reverse-time diffusion (16 item(s))

- `def-reversed-transition-kernels-for-diffusions` · definition — Bayes-reversed transition kernels for a diffusion
- `lem-continuous-local-martingale-quadratic-variation` · lemma — Quadratic variation of a continuous local martingale
- `lem-density-translation-factorization` · lemma — A translated conditional density factorizes after subtraction
- `lem-elliptic-local-martingale-brownian-representation` · lemma — An elliptic local martingale has a Brownian driver
- `lem-normalized-parabolic-bellman-bounded-weak-solution` · lemma — A normalized parabolic Bellman equation has a bounded weak solution
- `lem-parabolic-bellman-barrier-with-lebesgue-height-bound` · lemma — A parabolic Bellman barrier with a Lebesgue height bound
- `lem-stopped-uniformly-elliptic-semimartingale-occupation-absolute-continuity` · lemma — Stopped occupation absolute continuity for uniformly elliptic Ito processes
- `lem-forward-density-duality-identifies-reverse-process` · lemma — Forward density duality identifies an auxiliary reverse process
- `lem-forward-kolmogorov-duality-gives-reversed-martingales` · lemma — Forward Kolmogorov duality gives reversed martingales
- `lem-reversed-kernels-and-generator-identity` · lemma — Reversed kernels, generator, and martingale problem
- `thm-anderson-reverse-time-diffusion` · theorem — Anderson's bounded-start reverse-time diffusion theorem
- `def-bayes-reversed-gaussian-smoothing-kernels` · definition — Bayes-reversed Gaussian smoothing kernels
- `lem-predictable-elliptic-martingale-brownian-reconstruction` · lemma — Brownian reconstruction with a predictable elliptic coefficient
- `thm-markov-diffusion-reversal-by-bayes-kernels` · theorem — Reverse-time SDE for an unbounded-start Markov diffusion
- `lem-reversed-smoothing-generator-and-martingale` · lemma — Generator and martingale problem for reversed Gaussian smoothing
- `thm-gaussian-smoothing-reversal-on-truncated-time-interval` · theorem — Reverse Gaussian smoothing on a truncated time interval

### `anderson-reverse-time-diffusion-examples` — Anderson reverse-time diffusion — Examples (3 item(s))

- `cex-state-dependent-diffusion-score-only-reversal` · counterexample — State-dependent diffusion needs a divergence correction
- `ex-bounded-start-anderson-reversal` · example — Bounded-start Brownian reversal under Anderson's hypotheses
- `ex-stationary-ornstein-uhlenbeck-reversal` · example — A stationary Ornstein–Uhlenbeck diffusion reverses to itself

## Your seams

Your pages depend on another group's:

- `anderson-reverse-time-diffusion` requires `gaussian-smoothing-densities-scores-and-endpoint-limits` (group ah, batch 1)

Another group's pages depend on yours:

- `score-sdes-and-reverse-time-generation` (group w) requires your `anderson-reverse-time-diffusion`
- `conditional-flow-matching-and-transport-paths` (group w) requires your `neural-odes-and-continuous-normalizing-flows`

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
