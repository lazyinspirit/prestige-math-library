# Step 5 adjudication — group **f**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the group Alpha for batches 16, 17, 18: 3 A/B pair(s), 6 page(s), 17 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **16**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-16-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **17**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-17-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **18**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-18-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 16 | `bayesian-inverse-likelihoods-and-posterior-propriety` | A | inverse-problems | 3028 | `function-space-priors-and-random-regularity`, `bayesian-models-priors-and-posterior-laws`, `conditional-distributions-and-regular-conditional-probability` |
| 16 | `bayesian-inverse-likelihoods-and-posterior-propriety-examples` | B | inverse-problems | 3029 | `bayesian-inverse-likelihoods-and-posterior-propriety`, `rejection-sampling` |
| 17 | `hellinger-posterior-stability-and-discretization` | A | inverse-problems | 3030 | `bayesian-inverse-likelihoods-and-posterior-propriety`, `posterior-consistency-and-tests`, `outward-rounded-interval-and-ball-arithmetic` |
| 17 | `hellinger-posterior-stability-and-discretization-examples` | B | inverse-problems | 3031 | `hellinger-posterior-stability-and-discretization` |
| 18 | `linear-gaussian-inverse-posteriors-and-tikhonov` | A | inverse-problems | 3032 | `bayesian-inverse-likelihoods-and-posterior-propriety`, `gaussian-process-priors-and-posterior-laws`, `the-moore-penrose-pseudoinverse-and-regularised-least-squares` |
| 18 | `linear-gaussian-inverse-posteriors-and-tikhonov-examples` | B | inverse-problems | 3033 | `linear-gaussian-inverse-posteriors-and-tikhonov` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `bayesian-inverse-likelihoods-and-posterior-propriety` — Likelihood potentials and posterior propriety (2 item(s))

- `def-ip-misfit-evidence-and-posterior-law` · definition — Misfit evidence and the potential posterior law
- `thm-ip-function-space-posterior-propriety` · theorem — Function-space posterior propriety from a common lower envelope

### `bayesian-inverse-likelihoods-and-posterior-propriety-examples` — Likelihood potentials and posterior propriety — Examples and Counterexamples (3 item(s))

- `ex-ip-proper-gaussian-likelihood-posterior-propriety` · example — A proper Gaussian likelihood gives a proper posterior
- `ex-ip-zero-evidence-fiber` · example — A zero-evidence fiber has no normalized fiberwise update
- `ex-ip-improper-prior-finite-evidence` · example — An improper counting prior can have finite evidence at one datum

### `hellinger-posterior-stability-and-discretization` — Hellinger stability and posterior discretization (3 item(s))

- `lem-ip-prior-support-has-full-measure` · lemma — The support of a Borel probability on a separable Banach space has full measure
- `thm-ip-hellinger-data-stability` · theorem — Hellinger stability of function-space posteriors under data perturbations
- `thm-ip-posterior-potential-discretization-error` · theorem — Hellinger error bound for posterior potential discretization

### `hellinger-posterior-stability-and-discretization-examples` — Hellinger stability and posterior discretization — Examples and Counterexamples (3 item(s))

- `cex-ip-equal-posterior-means-do-not-control-hellinger` · counterexample — Equal posterior means do not control the full posterior
- `ex-ip-stable-potential-posterior` · example — A stable two-point potential gives a Lipschitz posterior
- `cex-ip-nonintegrable-potential-error-envelope` · counterexample — A nonintegrable error envelope destroys the linear Hellinger rate

### `linear-gaussian-inverse-posteriors-and-tikhonov` — Linear Gaussian inverse posteriors and Tikhonov (3 item(s))

- `lem-ip-singular-gaussian-support-and-pseudoinverse` · lemma — Support and pseudoinverse coordinates of a finite singular Gaussian
- `thm-ip-finite-linear-gaussian-posterior` · theorem — Finite linear Gaussian inverse posterior with singular prior covariance
- `cor-ip-gaussian-map-equals-tikhonov-minimizer` · corollary — Finite Gaussian MAP, posterior mean, and support-restricted Tikhonov minimizer coincide

### `linear-gaussian-inverse-posteriors-and-tikhonov-examples` — Linear Gaussian inverse posteriors and Tikhonov — Examples and Counterexamples (3 item(s))

- `ex-ip-singular-state-gaussian-posterior` · example — A rank-one prior gives a singular Gaussian inverse posterior
- `ex-ip-prior-whitened-tikhonov-posterior` · example — Prior whitening turns an anisotropic Gaussian posterior into Tikhonov form
- `cex-ip-nongaussian-map-differs-from-posterior-mean` · counterexample — A non-Gaussian posterior can have different MAP and mean

## Your seams

Your pages depend on another group's:

- `bayesian-inverse-likelihoods-and-posterior-propriety` requires `function-space-priors-and-random-regularity` (group e, batch 15)

Another group's pages depend on yours:

- `map-estimators-and-cameron-martin-geometry` (group g) requires your `bayesian-inverse-likelihoods-and-posterior-propriety`
- `posterior-contraction-in-gaussian-sequence-inversion` (group g) requires your `bayesian-inverse-likelihoods-and-posterior-propriety`
- `posterior-contraction-in-gaussian-sequence-inversion` (group g) requires your `linear-gaussian-inverse-posteriors-and-tikhonov`
- `credible-sets-and-frequency-coverage-in-inverse-problems` (group g) requires your `bayesian-inverse-likelihoods-and-posterior-propriety`
- `function-space-mcmc-and-pcn` (group h) requires your `bayesian-inverse-likelihoods-and-posterior-propriety`
- `posterior-computation-error-and-diagnostics` (group h) requires your `hellinger-posterior-stability-and-discretization`
- `conditional-flow-matching-for-inverse-posteriors` (group h) requires your `bayesian-inverse-likelihoods-and-posterior-propriety`
- `conditional-flow-matching-for-inverse-posteriors` (group h) requires your `hellinger-posterior-stability-and-discretization`
- `learned-reconstruction-targets-and-risk` (group p) requires your `bayesian-inverse-likelihoods-and-posterior-propriety`
- `bayesian-inverse-experimental-design-and-information-gain` (group r) requires your `bayesian-inverse-likelihoods-and-posterior-propriety`
- `bayesian-inverse-experimental-design-and-information-gain` (group r) requires your `linear-gaussian-inverse-posteriors-and-tikhonov`

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
