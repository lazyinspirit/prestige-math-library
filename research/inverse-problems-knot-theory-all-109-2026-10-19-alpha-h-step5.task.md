# Step 5 adjudication — group **h**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the group Alpha for batches 22, 23, 24: 3 A/B pair(s), 6 page(s), 21 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **22**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-22-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **23**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-23-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **24**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-24-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/inverse-problems-knot-theory-all-109-2026-10-19-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 22 | `function-space-mcmc-and-pcn` | A | inverse-problems | 3040 | `function-space-priors-and-random-regularity`, `bayesian-inverse-likelihoods-and-posterior-propriety`, `general-state-mcmc-kernels-and-reversibility`, `mcmc-ergodicity-and-mixing`, `finite-window-spatial-point-process-likelihoods` |
| 22 | `function-space-mcmc-and-pcn-examples` | B | inverse-problems | 3041 | `function-space-mcmc-and-pcn`, `detection-and-quantification-limits`, `cost-constrained-gaussian-and-feedback-channels`, `finite-window-spatial-point-process-likelihoods` |
| 23 | `posterior-computation-error-and-diagnostics` | A | inverse-problems | 3042 | `hellinger-posterior-stability-and-discretization`, `function-space-mcmc-and-pcn`, `stationary-markov-chains-and-ergodic-limits`, `statistical-and-computational-error-accounting`, `identifiability-and-approximation-bias-in-computational-inference` |
| 23 | `posterior-computation-error-and-diagnostics-examples` | B | inverse-problems | 3043 | `posterior-computation-error-and-diagnostics`, `mcmc-diagnostics-and-finite-run-limitations` |
| 24 | `conditional-flow-matching-for-inverse-posteriors` | A | inverse-problems | 3044 | `bayesian-inverse-likelihoods-and-posterior-propriety`, `hellinger-posterior-stability-and-discretization`, `posterior-computation-error-and-diagnostics`, `conditional-distributions-and-regular-conditional-probability`, `outward-rounded-interval-and-ball-arithmetic`, `strongly-continuous-semigroups-and-hille-yosida` |
| 24 | `conditional-flow-matching-for-inverse-posteriors-examples` | B | inverse-problems | 3045 | `conditional-flow-matching-for-inverse-posteriors` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `function-space-mcmc-and-pcn` — Function-space pCN and invariant posterior kernels (6 item(s))

- `lem-ip-separable-hilbert-borel-laws-determined-by-orthonormal-coordinates` · lemma — Borel laws on a separable Hilbert space are determined by basis coordinates
- `alg-ip-prior-preserving-crank-nicolson` · algorithm — Prior-preserving Crank–Nicolson sampler
- `lem-ip-pcn-transition-kernel-is-measurable` · lemma — The pCN accept-reject procedure defines a probability kernel
- `lem-ip-pcn-reference-pair-law-is-symmetric` · lemma — The pCN Gaussian reference pair law is symmetric
- `thm-ip-pcn-small-step-acceptance-under-potential-bounds` · theorem — pCN stationary mean acceptance tends to one at small scale
- `thm-ip-pcn-posterior-invariance` · theorem — The pCN accept-reject kernel preserves the posterior

### `function-space-mcmc-and-pcn-examples` — Function-space pCN and invariant posterior kernels — Examples and Counterexamples (2 item(s))

- `cex-ip-infinite-dimensional-random-walk-reverse-flow-singular` · counterexample — Infinite-dimensional Gaussian random-walk reverse flow is singular
- `ex-ip-pcn-normal-posterior-invariant` · example — A Gaussian pCN kernel leaves a normal posterior invariant

### `posterior-computation-error-and-diagnostics` — Posterior computation and error accounting (2 item(s))

- `def-ip-posterior-computation-error-budget` · definition — Posterior computation error budget
- `prop-ip-bounded-posterior-functional-error` · proposition — Bounded posterior functionals and stationary sample error

### `posterior-computation-error-and-diagnostics-examples` — Posterior computation and error accounting — Examples and Counterexamples (3 item(s))

- `ex-ip-exact-invariant-kernel-short-run` · example — An exact invariant kernel can be biased over a short run
- `ex-ip-low-ess-despite-correct-invariance` · example — Correct invariance can coexist with low effective sample size
- `ex-ip-biased-pde-solver-posterior-error` · example — A biased forward solve shifts a Gaussian posterior

### `conditional-flow-matching-for-inverse-posteriors` — Conditional flow matching for inverse posteriors (6 item(s))

- `lem-ip-gronwall-with-integrable-coefficient` · lemma — Grönwall inequality with an integrable coefficient
- `lem-ip-lipschitz-ode-triangular-flow-and-c1-density` · lemma — Global Lipschitz ODE flows and the C1 density formula
- `thm-ip-exact-triangular-transport-disintegrates-to-posterior` · theorem — An exact triangular transport disintegrates to the posterior
- `alg-ip-conditional-flow-matching` · algorithm — Conditional flow matching for inverse posteriors
- `lem-ip-conditional-flow-matching-population-and-exact-flow-meaning` · lemma — Population regression and exact-flow meaning of conditional flow matching
- `op-ip-function-space-flow-matching-error-theory` · open-problem — Dimension-uniform conditional flow error for function-valued Bayesian posteriors

### `conditional-flow-matching-for-inverse-posteriors-examples` — Conditional flow matching for inverse posteriors — Examples and Counterexamples (2 item(s))

- `ex-ip-cfm-low-imh-acceptance-with-accurate-means` · example — Accurate posterior means with low independent-MH acceptance
- `ex-ip-likelihood-free-conditional-flow-matching` · example — Likelihood-free conditional flow matching without an MH correction

## Your seams

Your pages depend on another group's:

- `function-space-mcmc-and-pcn` requires `function-space-priors-and-random-regularity` (group e, batch 15)
- `function-space-mcmc-and-pcn` requires `bayesian-inverse-likelihoods-and-posterior-propriety` (group f, batch 16)
- `posterior-computation-error-and-diagnostics` requires `hellinger-posterior-stability-and-discretization` (group f, batch 17)
- `conditional-flow-matching-for-inverse-posteriors` requires `bayesian-inverse-likelihoods-and-posterior-propriety` (group f, batch 16)
- `conditional-flow-matching-for-inverse-posteriors` requires `hellinger-posterior-stability-and-discretization` (group f, batch 17)

Another group's pages depend on yours:

- `bayesian-inverse-experimental-design-and-information-gain` (group r) requires your `posterior-computation-error-and-diagnostics`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/inverse-problems-knot-theory-all-109-2026-10-19-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 5 batch adjudication, `inverse-problems-knot-theory-all-109-2026-10-19`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
