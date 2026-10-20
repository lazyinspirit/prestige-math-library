# Step 5 adjudication — group **w**, run `machine-learning-all-101-2026-10-19`

You are the group Alpha for batches 68, 69, 70: 3 A/B pair(s), 6 page(s), 20 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **68**: `research/machine-learning-all-101-2026-10-19-batch-68-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **69**: `research/machine-learning-all-101-2026-10-19-batch-69-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **70**: `research/machine-learning-all-101-2026-10-19-batch-70-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 68 | `score-sdes-and-reverse-time-generation` | A | machine-learning | 2823 | `anderson-reverse-time-diffusion`, `brownian-motion-construction-and-continuity`, `euler-maruyama-convergence`, `itos-formula-and-brownian-martingales`, `the-ito-integral-with-respect-to-brownian-motion`, `langevin-monte-carlo-mala-and-ula` |
| 68 | `score-sdes-and-reverse-time-generation-examples` | B | machine-learning | 2824 | `score-sdes-and-reverse-time-generation` |
| 69 | `conditional-flow-matching-and-transport-paths` | A | machine-learning | 2825 | `compact-metric-kantorovich-rubinstein-duality`, `neural-odes-and-continuous-normalizing-flows` |
| 69 | `conditional-flow-matching-and-transport-paths-examples` | B | machine-learning | 2826 | `conditional-flow-matching-and-transport-paths` |
| 70 | `multimodal-contrastive-alignment-and-transfer` | A | machine-learning | 2827 | `distribution-shift-and-domain-adaptation`, `feedforward-networks-and-universal-approximation` |
| 70 | `multimodal-contrastive-alignment-and-transfer-examples` | B | machine-learning | 2828 | `multimodal-contrastive-alignment-and-transfer` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `score-sdes-and-reverse-time-generation` — Score SDEs and reverse-time generation (3 item(s))

- `def-marginal-score-function` · definition — Marginal score function
- `thm-probability-flow-ode-marginals` · theorem — Probability-flow ODE has the same one-time marginals
- `alg-predictor-corrector-score-sampling` · algorithm — Predictor-corrector sampling for score SDEs

### `score-sdes-and-reverse-time-generation-examples` — Score SDEs and reverse-time generation — Examples (3 item(s))

- `ex-stationary-ornstein-uhlenbeck-probability-flow` · example — Stationary Ornstein–Uhlenbeck score and probability flow
- `ex-singular-data-score-truncation` · example — A singular Brownian data law forces positive-time score truncation
- `ex-vp-finite-terminal-prior-mismatch` · example — Finite VP noise leaves a terminal-prior mismatch

### `conditional-flow-matching-and-transport-paths` — Conditional flow matching and transport paths (9 item(s))

- `def-probability-path-and-velocity-field` · definition — Probability paths and velocity fields
- `lem-conditional-mixture-is-a-probability-path` · lemma — A conditional mixture is a probability path
- `lem-conditional-to-marginal-continuity-equation` · lemma — Conditional continuity equations pass to the marginal path
- `lem-affine-conditional-path-velocity` · lemma — An affine conditional path has the stated velocity field
- `lem-affine-dilation-is-quadratic-cost-optimal` · lemma — A centered law and its affine dilation have an optimal affine coupling
- `thm-conditional-flow-matching-gradient-identity` · theorem — Conditional and marginal flow-matching objectives differ by a constant
- `thm-gaussian-conditional-optimal-transport-map` · theorem — The Gaussian conditional affine map is quadratic-cost optimal
- `alg-flow-matching-training-and-sampling` · algorithm — Conditional flow-matching training and exact-flow sampling
- `lem-flow-matching-training-and-exact-sampling-properties` · lemma — Conditional flow-matching batch gradients and exact-flow output law

### `conditional-flow-matching-and-transport-paths-examples` — Conditional flow matching and transport paths — Examples (2 item(s))

- `ex-gaussian-prior-to-data-conditional-interpolation` · example — A one-dimensional Gaussian prior-to-data conditional interpolation
- `ex-mixture-of-straight-paths-has-nonlinear-marginal-velocity` · example — A mixture of straight Gaussian paths has a nonlinear marginal velocity

### `multimodal-contrastive-alignment-and-transfer` — Multimodal contrastive alignment and transfer (2 item(s))

- `def-symmetric-image-text-contrastive-loss` · definition — Symmetric image-text contrastive loss
- `alg-zero-shot-prompt-classification` · algorithm — Zero-shot prompt classification

### `multimodal-contrastive-alignment-and-transfer-examples` — Multimodal contrastive alignment and transfer — Examples (1 item(s))

- `ex-prompt-and-distribution-sensitive-transfer` · example — Prompt and distribution-sensitive transfer

## Your seams

Your pages depend on another group's:

- `score-sdes-and-reverse-time-generation` requires `anderson-reverse-time-diffusion` (group v, batch 67)
- `conditional-flow-matching-and-transport-paths` requires `compact-metric-kantorovich-rubinstein-duality` (group u, batch 62)
- `conditional-flow-matching-and-transport-paths` requires `neural-odes-and-continuous-normalizing-flows` (group v, batch 65)
- `multimodal-contrastive-alignment-and-transfer` requires `distribution-shift-and-domain-adaptation` (group c, batch 10)
- `multimodal-contrastive-alignment-and-transfer` requires `feedforward-networks-and-universal-approximation` (group j, batch 31)

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
