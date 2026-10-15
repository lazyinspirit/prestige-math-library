# Step 5 adjudication — group **c**, run `bayesian-computational-statistics-62`

You are the group Alpha for batches 11, 12, 13: 3 A/B pair(s), 6 page(s), 33 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **11**: `research/bayesian-computational-statistics-62-batch-11-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **12**: `research/bayesian-computational-statistics-62-batch-12-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **13**: `research/bayesian-computational-statistics-62-batch-13-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 11 | `iid-posterior-contraction` | A | bayesian-computational-statistics | 2062 | `posterior-consistency-and-tests` |
| 11 | `iid-posterior-contraction-examples` | B | bayesian-computational-statistics | 2063 | `iid-posterior-contraction` |
| 12 | `misspecified-posterior-consistency` | A | bayesian-computational-statistics | 2064 | `iid-posterior-contraction`, `conformal-prediction-and-exchangeable-ranks` |
| 12 | `misspecified-posterior-consistency-examples` | B | bayesian-computational-statistics | 2065 | `misspecified-posterior-consistency` |
| 13 | `parametric-bernstein-von-mises-and-misspecification` | A | bayesian-computational-statistics | 2066 | `misspecified-posterior-consistency`, `local-asymptotic-normality-contiguity-and-efficiency`, `mixed-effects-and-longitudinal-models` |
| 13 | `parametric-bernstein-von-mises-and-misspecification-examples` | B | bayesian-computational-statistics | 2067 | `parametric-bernstein-von-mises-and-misspecification` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `iid-posterior-contraction` — IID posterior contraction by entropy and prior mass (6 item(s))

- `def-hellinger-distance-between-density-laws` · definition — Root-L2 Hellinger distance between density laws
- `lem-iid-bounded-variance-bernstein-tail` · lemma — Bernstein tail bound for independent bounded sums
- `lem-iid-posterior-denominator-lower-bound-from-kl-mass` · lemma — KL prior mass gives a posterior denominator lower bound in probability
- `lem-hellinger-distance-controls-l1-and-total-variation` · lemma — Hellinger distance is a metric and controls L1 and total variation
- `lem-iid-sieve-entropy-produces-exponential-tests` · lemma — Sieve metric entropy produces uniform exponential tests
- `thm-iid-posterior-contraction-by-entropy-and-prior-mass` · theorem — IID posterior contraction by entropy and prior mass

### `iid-posterior-contraction-examples` — IID posterior contraction by entropy and prior mass — Examples (3 item(s))

- `ex-bernoulli-density-logarithmic-contraction-rate` · example — A one-parameter density prior meets the logarithmic contraction conditions
- `ex-high-entropy-sieve-can-fail-without-precluding-contraction` · example — A sieve can miss the entropy bound while the posterior contracts exactly
- `ex-holder-density-rate-from-entropy-balance` · example — A Hölder-density entropy bound gives the source-covered rate

### `misspecified-posterior-consistency` — Posterior consistency at a KL projection (9 item(s))

- `def-kl-projection-set-and-relative-kl-neighborhoods` · definition — KL projection sets and relative KL neighborhoods
- `lem-centered-integrable-iid-random-walk-is-unbounded-above` · lemma — A nonconstant centered integrable IID random walk is unbounded above
- `def-likelihood-tilted-measure-at-kl-projection` · definition — Likelihood-tilted measures at a KL projection
- `lem-likelihood-tilted-measure-is-sigma-finite` · lemma — Likelihood tilts are sigma-finite measures
- `lem-kl-neighborhood-prior-mass-likelihood-denominator-lower-bound` · lemma — KL-neighborhood prior mass lower-bounds the likelihood denominator
- `lem-product-likelihood-tilt-has-product-density` · lemma — Product likelihood tilts have the product density
- `prop-compact-kl-projection-tests-under-fractional-moment-continuity` · proposition — Compact models admit tests at a unique KL projection under fractional-moment continuity
- `lem-exponential-test-posterior-splitting-at-kl-projection` · lemma — Exponential tests and KL mass force posterior exclusion
- `thm-posterior-consistency-at-kl-projection` · theorem — Posterior consistency at a KL projection

### `misspecified-posterior-consistency-examples` — Posterior consistency at a KL projection — Examples (6 item(s))

- `ex-distant-alternatives-without-uniform-tests` · example — Distant alternatives can prevent uniform testability
- `ex-nonunique-kl-projection-set` · example — A nonunique KL projection set need not select one parameter
- `ex-unique-kl-projection-finite-model` · example — A finite misspecified model with a unique KL projection
- `ex-likelihood-tilt-can-have-mass-below-one` · example — A likelihood tilt can be a finite measure of mass below one
- `ex-likelihood-tilt-can-have-mass-above-one` · example — A likelihood tilt can be a finite measure of mass above one
- `cex-weak-tilted-tests-do-not-imply-almost-sure-consistency` · counterexample — Weak tests against likelihood tilts do not ensure almost-sure posterior consistency

### `parametric-bernstein-von-mises-and-misspecification` — Parametric Bernstein–von Mises limits and misspecification (6 item(s))

- `lem-local-lipschitz-class-empirical-process-bound` · lemma — A square-integrable Lipschitz envelope controls a local empirical process
- `thm-lan-implies-total-variation-bvm` · theorem — Compact-uniform LAN and rate contraction imply a total-variation BvM limit
- `cor-qmd-ac-component-lan-to-bvm` · corollary — The QMD route uses normalized absolutely continuous likelihoods and a separate uniform LAN premise
- `thm-misspecified-iid-lan-under-kv-smoothness` · theorem — A local KL expansion and square-integrable log-Lipschitz envelope give misspecified iid LAN
- `cor-misspecified-iid-bvm-under-kv-regularity` · corollary — Misspecified iid LAN gives a BvM limit when the posterior has the required parameter rate
- `thm-misspecified-mle-sandwich-expansion` · theorem — A consistent approximate MLE has the misspecified sandwich limit under local LAN conditions

### `parametric-bernstein-von-mises-and-misspecification-examples` — Parametric Bernstein–von Mises limits and misspecification — Examples (3 item(s))

- `ex-regular-normal-model-bvm` · example — A correctly specified regular normal mean model
- `ex-normal-working-model-misspecified-coverage` · example — A unit-variance normal working model can miscalibrate credible intervals
- `ex-boundary-normal-mean-truncated-posterior` · example — At a boundary, the normal posterior limit is truncated

## Your seams

Your pages depend on another group's:

- `iid-posterior-contraction` requires `posterior-consistency-and-tests` (group b, batch 10)

Another group's pages depend on yours:

- `gaussian-process-posterior-contraction` (group d) requires your `iid-posterior-contraction`
- `dirichlet-normal-mixture-contraction` (group e) requires your `iid-posterior-contraction`
- `functional-bayesian-limits-and-credible-set-calibration` (group f) requires your `iid-posterior-contraction`

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
