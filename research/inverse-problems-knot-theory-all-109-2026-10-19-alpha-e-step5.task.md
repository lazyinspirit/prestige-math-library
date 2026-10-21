# Step 5 adjudication — group **e**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the group Alpha for batches 13, 14, 15: 3 A/B pair(s), 6 page(s), 17 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **13**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-13-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **14**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-14-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **15**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-15-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 13 | `network-tomography-and-experiment-design` | A | inverse-problems | 3022 | `statistical-inverse-experiments-and-white-noise`, `statistical-experiments-models-and-identifiability`, `em-algorithm-and-latent-variable-likelihood-ascent` |
| 13 | `network-tomography-and-experiment-design-examples` | B | inverse-problems | 3023 | `network-tomography-and-experiment-design` |
| 14 | `statistical-inverse-model-misspecification` | A | inverse-problems | 3024 | `inverse-problems-identifiability-and-stability`, `statistical-inverse-experiments-and-white-noise`, `gaussian-sequence-models-and-risk-decomposition`, `losses-risk-and-decision-rules` |
| 14 | `statistical-inverse-model-misspecification-examples` | B | inverse-problems | 3025 | `statistical-inverse-model-misspecification` |
| 15 | `function-space-priors-and-random-regularity` | A | inverse-problems | 3026 | `inverse-problems-identifiability-and-stability`, `gaussian-process-support-and-concentration`, `spectral-regularization-and-parameter-choice`, `weak-nonparametric-bernstein-von-mises` |
| 15 | `function-space-priors-and-random-regularity-examples` | B | inverse-problems | 3027 | `function-space-priors-and-random-regularity`, `spectral-regularization-and-parameter-choice`, `cost-constrained-gaussian-and-feedback-channels` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `network-tomography-and-experiment-design` — Active network tomography and identifiability by design (4 item(s))

- `def-ip-tree-probing-experiment` · definition — Finite-tree multicast loss experiments
- `def-ip-network-tomography-design-criterion` · definition — Split and coverage condition for a multicast design
- `alg-ip-link-loss-em` · algorithm — EM for active tree link-loss tomography
- `thm-ip-flexicast-link-loss-identifiability` · theorem — Link-loss identifiability from split and coverage

### `network-tomography-and-experiment-design-examples` — Active network tomography and identifiability by design — Examples and Counterexamples (2 item(s))

- `ex-ip-independent-normal-delays-have-nonidentifiable-link-means` · example — Additive Gaussian tree delays do not identify link means
- `ex-ip-unicast-product-nonidentifiability-and-multicast-recovery` · example — Unicast products lose link identifiability; multicast restores it

### `statistical-inverse-model-misspecification` — Unknown operators, model mismatch, and robustness limits (2 item(s))

- `def-ip-operator-and-prior-mismatch` · definition — Operator, noise-law, and prior-support mismatch
- `thm-ip-no-uniform-recovery-under-unrestricted-operator-mismatch` · theorem — Equal observation laws force a metric-risk lower bound

### `statistical-inverse-model-misspecification-examples` — Unknown operators, model mismatch, and robustness limits — Examples and Counterexamples (2 item(s))

- `ex-ip-restricted-operator-class-positive-modulus` · example — A restricted two-operator class with a positive stability modulus
- `ex-ip-identical-laws-under-operator-mismatch` · example — Distinct truths and operators with identical noisy data laws

### `function-space-priors-and-random-regularity` — Function-space priors and sample regularity (4 item(s))

- `lem-ip-weighted-coefficient-spaces-are-hilbert` · lemma — Weighted coefficient spaces form a Hilbert scale
- `lem-ip-coordinate-vectors-form-a-basis-of-ell-two` · lemma — Coordinate vectors form the Hilbert basis of real ell-two
- `def-ip-prior-on-a-forward-domain` · definition — A Borel prior concentrated on a forward-map domain
- `lem-ip-gaussian-series-prior-regularity` · lemma — Weighted Hilbert Gaussian series and prior regularity

### `function-space-priors-and-random-regularity-examples` — Function-space priors and sample regularity — Examples and Counterexamples (3 item(s))

- `ex-ip-prior-misses-uniform-ellipticity-domain` · example — A Gaussian coefficient law with mass outside the uniform-ellipticity domain
- `ex-ip-trace-class-gaussian-has-full-support` · example — A trace-class Gaussian with full support and a proper Cameron–Martin space
- `ex-ip-gaussian-series-at-besov-threshold` · example — A Gaussian wavelet series at the Besov threshold

## Your seams

Your pages depend on another group's:

- `network-tomography-and-experiment-design` requires `statistical-inverse-experiments-and-white-noise` (group c, batch 7)
- `statistical-inverse-model-misspecification` requires `inverse-problems-identifiability-and-stability` (group a, batch 1)
- `statistical-inverse-model-misspecification` requires `statistical-inverse-experiments-and-white-noise` (group c, batch 7)
- `statistical-inverse-model-misspecification` requires `gaussian-sequence-models-and-risk-decomposition` (group c, batch 8)
- `function-space-priors-and-random-regularity` requires `inverse-problems-identifiability-and-stability` (group a, batch 1)

Another group's pages depend on yours:

- `bayesian-inverse-likelihoods-and-posterior-propriety` (group f) requires your `function-space-priors-and-random-regularity`
- `map-estimators-and-cameron-martin-geometry` (group g) requires your `function-space-priors-and-random-regularity`
- `function-space-mcmc-and-pcn` (group h) requires your `function-space-priors-and-random-regularity`
- `inverse-problem-benchmarking-and-shift` (group q) requires your `statistical-inverse-model-misspecification`
- `open-frontiers-in-learned-inverse-problems` (group r) requires your `statistical-inverse-model-misspecification`
- `dynamic-data-identifiability-and-system-realization` (group s) requires your `statistical-inverse-model-misspecification`

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
