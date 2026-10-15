# Step 5 adjudication — group **q**, run `statistical-models-experiments-62`

You are the group Alpha for batches 49, 50, 51: 3 A/B pair(s), 6 page(s), 40 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **49**: `research/statistical-models-experiments-62-batch-49-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **50**: `research/statistical-models-experiments-62-batch-50-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **51**: `research/statistical-models-experiments-62-batch-51-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/statistical-models-experiments-62-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 49 | `spatial-point-process-summaries-and-palm-laws` | A | statistical-models-and-experiments | 2014 | `poisson-and-cox-point-process-models`, `measures-and-their-basic-properties`, `stationary-markov-chains-and-ergodic-limits` |
| 49 | `spatial-point-process-summaries-and-palm-laws-examples` | B | statistical-models-and-experiments | 2015 | `spatial-point-process-summaries-and-palm-laws` |
| 50 | `finite-window-spatial-point-process-likelihoods` | A | statistical-models-and-experiments | 2016 | `poisson-and-cox-point-process-models`, `dominated-experiments-likelihood-and-sufficiency`, `measures-and-their-basic-properties` |
| 50 | `finite-window-spatial-point-process-likelihoods-examples` | B | statistical-models-and-experiments | 2017 | `finite-window-spatial-point-process-likelihoods` |
| 51 | `temporal-point-process-intensity-and-likelihood` | A | statistical-models-and-experiments | 2018 | `counting-process-compensators-and-integrals`, `poisson-and-cox-point-process-models`, `dominated-experiments-likelihood-and-sufficiency`, `brownian-motion-construction-and-continuity`, `the-ito-integral-with-respect-to-brownian-motion` |
| 51 | `temporal-point-process-intensity-and-likelihood-examples` | B | statistical-models-and-experiments | 2019 | `temporal-point-process-intensity-and-likelihood` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `spatial-point-process-summaries-and-palm-laws` — Spatial summaries and Palm laws (18 item(s))

- `lem-convex-windows-admit-rectangle-approximations-and-are-folner` · lemma — Compact convex windows admit rectangle approximations and have negligible translated boundary
- `lem-translation-invariant-locally-finite-borel-measure-on-rd` · lemma — A locally finite translation-invariant Borel measure on $\mathbb R^d$ is a multiple of Lebesgue measure
- `thm-choice-free-l1-mean-limit-for-stationary-sequences` · theorem — An integrable stationary sequence has an L1 Cesaro limit
- `def-spatial-recentering-action` · definition — Recentering a point configuration at a spatial location
- `def-stationary-point-process-and-intensity` · definition — Stationarity, finite intensity, and spatial ergodicity
- `lem-joint-measurability-of-spatial-recentering` · lemma — The spatial recentering action is jointly measurable
- `def-full-palm-distribution` · definition — The full Palm distribution defined by the refined Campbell identity
- `def-second-factorial-and-reduced-moment-measures` · definition — Second factorial and reduced second factorial moment measures
- `thm-poisson-mecke-identity` · theorem — Mecke identity for locally finite Poisson point processes
- `thm-stationary-point-process-intensity-measure-is-rho-lebesgue` · theorem — A stationary point process of finite intensity has mean measure rho times Lebesgue measure
- `thm-refined-campbell-formula-and-palm-law-existence` · theorem — Existence and uniqueness of the full Palm law and the refined Campbell identity
- `thm-second-factorial-and-reduced-measures-are-locally-finite` · theorem — Factorial and reduced factorial moment measures are well-defined and locally finite
- `thm-stationary-point-process-counts-converge-to-spatial-intensity` · theorem — Spatial ergodic limit for counts in dilates of a convex window
- `thm-reduced-second-factorial-moment-palm-identity` · theorem — The reduced second factorial moment measure is the Palm expectation after one-occurrence deletion
- `def-pair-correlation-and-ripleys-k-function` · definition — Pair-correlation density and Ripley K-function
- `alg-border-corrected-ripleys-k-estimator` · algorithm — Border-corrected estimator for Ripley K
- `thm-homogeneous-poisson-ripleys-k-is-ball-volume` · theorem — Ripley K for a homogeneous Poisson process is Euclidean ball volume
- `thm-pair-correlation-integrates-to-ripleys-k` · theorem — A pair-correlation density integrates to Ripley K

### `spatial-point-process-summaries-and-palm-laws-examples` — Spatial summaries and Palm laws — Examples (2 item(s))

- `ex-uniformly-translated-lattice-palm-and-multiplicities` · example — A translated lattice exposes recentering, atomic pair measures, and one-occurrence deletion
- `ex-window-edge-border-estimator` · example — A finite window makes the border correction weight visible

### `finite-window-spatial-point-process-likelihoods` — Finite-window spatial likelihood (12 item(s))

- `lem-borel-product-of-second-countable-spaces` · lemma — Borel sigma-algebra of a product of second-countable spaces
- `def-finite-window-spatial-observation` · definition — Finite-window spatial observations and configurations
- `lem-finite-configuration-product-measurable` · lemma — Products of a measurable intensity over finite configurations are measurable
- `lem-finite-window-pair-count-is-measurable` · lemma — Finite-window pair counts are measurable
- `lem-finite-product-measure-with-density` · lemma — Finite products of measures with densities have the product density
- `def-papangelou-conditional-intensity` · definition — Papangelou conditional intensity on a finite window
- `def-finite-window-pseudolikelihood` · definition — Finite-window point-process pseudolikelihood
- `def-finite-window-gibbs-density` · definition — Finite-window Gibbs density relative to a Poisson reference
- `lem-diffuse-finite-window-poisson-process-is-simple` · lemma — A finite Poisson process with atomless intensity is simple
- `thm-finite-window-spatial-poisson-likelihood` · theorem — Finite-window spatial Poisson likelihood relative to unit rate
- `prop-homogeneous-poisson-window-mle` · proposition — Homogeneous Poisson rate MLE in a positive-volume window
- `lem-finite-window-gibbs-density-ratio-is-papangelou` · lemma — A positive finite-window Gibbs density has its density-ratio Papangelou intensity

### `finite-window-spatial-point-process-likelihoods-examples` — Finite-window spatial likelihood — Examples (2 item(s))

- `ex-homogeneous-poisson-window-mle-boundary` · example — Homogeneous Poisson rate estimation at positive-count and zero-count boundaries
- `ex-strauss-exact-likelihood-versus-pseudolikelihood` · example — Exact and pseudo likelihoods for finite-window Poisson and Strauss models

### `temporal-point-process-intensity-and-likelihood` — Temporal intensity and likelihood (4 item(s))

- `def-temporal-point-process-and-conditional-intensity` · definition — Temporal point-process models and conditional intensity
- `lem-conditional-intensity-interevent-survival-and-density` · lemma — Inter-event survival and density from a conditional intensity
- `lem-homogeneous-poisson-ordered-event-time-density` · lemma — Finite-window homogeneous Poisson construction and ordered event-time density
- `thm-conditional-intensity-interevent-law-and-point-pattern-likelihood` · theorem — Conditional-intensity inter-event law and point-pattern likelihood

### `temporal-point-process-intensity-and-likelihood-examples` — Temporal intensity and likelihood — Examples (2 item(s))

- `ex-terminating-temporal-point-process-with-terminal-mass` · example — A finite-window Poisson process that terminates at time one
- `ex-poisson-and-history-dependent-temporal-intensities` · example — Homogeneous Poisson likelihood and a Hawkes intensity specification

## Your seams

Your pages depend on another group's:

- `spatial-point-process-summaries-and-palm-laws` requires `poisson-and-cox-point-process-models` (group p, batch 48)
- `finite-window-spatial-point-process-likelihoods` requires `poisson-and-cox-point-process-models` (group p, batch 48)
- `temporal-point-process-intensity-and-likelihood` requires `counting-process-compensators-and-integrals` (group j, batch 30)
- `temporal-point-process-intensity-and-likelihood` requires `poisson-and-cox-point-process-models` (group p, batch 48)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/statistical-models-experiments-62-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 5 batch adjudication, `statistical-models-experiments-62`

- Follow `briefs/step5-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.

**Algorithms.** Use `kind: algorithm`, an `alg-` ID and `## Definition`; algorithms function identically to definitions. Specify inputs, outputs, admissible conditions and exact instructions, including branches, calls and loops. A larger algorithm may compose or repeatedly invoke earlier smaller algorithms/procedures: put those supplier IDs in the larger algorithm's `deps`. Repetition in an execution does not create a self-edge or permit a prerequisite cycle. State correctness, termination, complexity and other properties in separate proved lemmas, theorems, propositions or corollaries; use `justified_by` for results establishing well-definedness under the ordinary definition rule. Procedure instructions are not a phase proof. Review the defining procedure and its actual prerequisites; changes to its Definition trigger the ordinary direct/indirect consumer checks.
