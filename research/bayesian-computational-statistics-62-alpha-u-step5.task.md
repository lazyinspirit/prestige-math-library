# Step 5 adjudication — group **u**, run `bayesian-computational-statistics-62`

You are the group Alpha for batches 1, 62: 2 A/B pair(s), 4 page(s), 16 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **1**: `research/bayesian-computational-statistics-62-batch-1-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **62**: `research/bayesian-computational-statistics-62-batch-62-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/bayesian-computational-statistics-62-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 1 | `forward-ito-sde-well-posedness` | A | probability | 2042 | `itos-formula-and-brownian-martingales` |
| 1 | `forward-ito-sde-well-posedness-examples` | B | probability | 2043 | `forward-ito-sde-well-posedness` |
| 62 | `identifiability-and-approximation-bias-in-computational-inference` | A | bayesian-computational-statistics | 2164 | `em-algorithm-and-latent-variable-likelihood-ascent`, `variational-inference-and-evidence-lower-bound`, `laplace-approximation-and-marginal-integration`, `approximate-bayesian-computation-and-simulation-based-inference`, `statistical-and-computational-error-accounting`, `synthetic-likelihood-and-indirect-inference` |
| 62 | `identifiability-and-approximation-bias-in-computational-inference-examples` | B | bayesian-computational-statistics | 2165 | `identifiability-and-approximation-bias-in-computational-inference` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `forward-ito-sde-well-posedness` — Forward Itô SDE Well-Posedness (5 item(s))

- `def-ito-sde-and-strong-solution` · definition — Itô SDE data and strong solution
- `lem-lipschitz-sde-map-is-well-defined` · lemma — Well-definedness and estimates for the Lipschitz SDE map
- `lem-lipschitz-sde-local-solution-has-finite-path-moment` · lemma — A Lipschitz SDE solution has a finite path-sup second moment
- `thm-global-strong-well-posedness-for-lipschitz-ito-sdes` · theorem — Global strong well-posedness for Lipschitz Itô SDEs
- `thm-finite-horizon-moments-for-lipschitz-ito-sdes` · theorem — Finite-horizon moments for Lipschitz Itô SDEs

### `forward-ito-sde-well-posedness-examples` — Forward Itô SDE Well-Posedness — Examples (2 item(s))

- `ex-global-lipschitz-scalar-ornstein-uhlenbeck-well-posedness` · example — A scalar Ornstein–Uhlenbeck SDE satisfies the strong well-posedness hypotheses
- `ex-singular-initial-law-at-sde-endpoint` · example — A deterministic initial law is singular although the SDE is well-posed

### `identifiability-and-approximation-bias-in-computational-inference` — Identifiability and approximation bias in computational inference (4 item(s))

- `thm-total-variation-bounds-for-expectations` · theorem — Total variation controls expectations of bounded functions
- `def-exact-inferential-target-and-approximation-chain` · definition — Exact inferential targets and approximation chains
- `thm-metric-approximation-error-decomposition` · theorem — Metric approximation error decomposes along a finite reference chain
- `lem-gaussian-density-integrals-for-supplied-length-measures` · lemma — Gaussian density integrals for supplied length measures

### `identifiability-and-approximation-bias-in-computational-inference-examples` — Identifiability and approximation bias in computational inference — Examples (5 item(s))

- `cex-local-hessian-does-not-capture-multiple-modes` · counterexample — A full-rank local Hessian does not capture both posterior modes
- `cex-mean-field-variational-posterior-misses-correlation` · counterexample — An optimized mean-field law can lose posterior correlation
- `cex-synthetic-likelihood-changes-inferential-target` · counterexample — A Gaussian synthetic likelihood can change an exact posterior
- `cex-identifiable-nonconstant-summary-loses-parameter` · counterexample — A nonconstant summary can lose an identifiable parameter
- `cex-positive-abc-tolerance-changes-posterior-target` · counterexample — Positive ABC tolerance changes an identity-summary target

## Your seams

Your pages depend on another group's:

- `identifiability-and-approximation-bias-in-computational-inference` requires `em-algorithm-and-latent-variable-likelihood-ascent` (group g, batch 24)
- `identifiability-and-approximation-bias-in-computational-inference` requires `variational-inference-and-evidence-lower-bound` (group g, batch 25)
- `identifiability-and-approximation-bias-in-computational-inference` requires `laplace-approximation-and-marginal-integration` (group h, batch 26)
- `identifiability-and-approximation-bias-in-computational-inference` requires `approximate-bayesian-computation-and-simulation-based-inference` (group h, batch 27)
- `identifiability-and-approximation-bias-in-computational-inference` requires `statistical-and-computational-error-accounting` (group r, batch 57)
- `identifiability-and-approximation-bias-in-computational-inference` requires `synthetic-likelihood-and-indirect-inference` (group s, batch 61)

Another group's pages depend on yours:

- `langevin-monte-carlo-mala-and-ula` (group l) requires your `forward-ito-sde-well-posedness`
- `euler-maruyama-scheme-and-conditions` (group t) requires your `forward-ito-sde-well-posedness`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/bayesian-computational-statistics-62-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 5 batch adjudication, `bayesian-computational-statistics-62`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
