# Step 5 adjudication — group **m**, run `bayesian-computational-statistics-62`

You are the group Alpha for batches 41, 42, 43: 3 A/B pair(s), 6 page(s), 19 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **41**: `research/bayesian-computational-statistics-62-batch-41-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **42**: `research/bayesian-computational-statistics-62-batch-42-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **43**: `research/bayesian-computational-statistics-62-batch-43-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 41 | `state-space-filtering-and-predictive-laws` | A | bayesian-computational-statistics | 2122 | `posterior-propriety-and-dominated-bayes-formula`, `state-space-models-as-probability-laws` |
| 41 | `state-space-filtering-and-predictive-laws-examples` | B | bayesian-computational-statistics | 2123 | `state-space-filtering-and-predictive-laws` |
| 42 | `kalman-filtering` | A | bayesian-computational-statistics | 2124 | `state-space-filtering-and-predictive-laws`, `conjugate-families-and-posterior-prediction`, `direct-matrix-factorisations-lu-cholesky-and-qr` |
| 42 | `kalman-filtering-examples` | B | bayesian-computational-statistics | 2125 | `kalman-filtering` |
| 43 | `kalman-smoothing-and-rts-recursion` | A | bayesian-computational-statistics | 2126 | `kalman-filtering` |
| 43 | `kalman-smoothing-and-rts-recursion-examples` | B | bayesian-computational-statistics | 2127 | `kalman-smoothing-and-rts-recursion` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `state-space-filtering-and-predictive-laws` — State-space models and exact Bayesian filtering (4 item(s))

- `def-state-space-filtering-laws` · definition — Filtering, predictive, and smoothing laws in a finite-horizon state-space model
- `thm-state-space-filtering-and-smoothing-laws-exist` · theorem — Filtering and finite-horizon smoothing laws exist
- `alg-recursive-bayesian-filter` · algorithm — Recursive Bayesian filtering under dominated observations
- `thm-dominated-state-space-filtering-recursion` · theorem — Exact state-space filtering recursion under dominated observations

### `state-space-filtering-and-predictive-laws-examples` — State-space models and exact Bayesian filtering — Examples (3 item(s))

- `ex-finite-hidden-markov-filtering-and-smoothing` · example — A two-state hidden Markov filter and smoother
- `ex-scalar-gaussian-state-space-filter` · example — A scalar Gaussian state-space update by completing the square
- `ex-impossible-observation-zero-evidence-fiber` · example — An impossible observation has zero evidence and only a filler filter value

### `kalman-filtering` — Exact linear-Gaussian Kalman filtering (4 item(s))

- `lem-independent-noise-extends-a-conditional-law` · lemma — Independent noise extends and pushes forward a conditional law
- `alg-kalman-filter` · algorithm — Exact linear-Gaussian Kalman filter
- `lem-one-step-kalman-gaussian-conditioning` · lemma — One-step Gaussian prediction and conditioning
- `thm-kalman-filter-is-exact-posterior` · theorem — The finite-horizon linear-Gaussian Kalman filter is exact

### `kalman-filtering-examples` — Exact linear-Gaussian Kalman filtering — Examples (2 item(s))

- `ex-scalar-kalman-filter-update` · example — A one-step scalar Kalman update
- `ex-kalman-filter-singular-prior-positive-innovation` · example — Singular prior covariance with positive innovation variance

### `kalman-smoothing-and-rts-recursion` — Fixed-interval Gaussian smoothing and RTS recursion (4 item(s))

- `def-fixed-interval-gaussian-smoothing-law` · definition — Fixed-interval smoothing law in a linear-Gaussian model
- `lem-backward-gaussian-kernel-is-valid-under-full-smoothing-data` · lemma — The backward Gaussian kernel remains valid after future observations
- `alg-rauch-tung-striebel-smoother` · algorithm — Rauch–Tung–Striebel fixed-interval Gaussian smoother
- `thm-rauch-tung-striebel-fixed-interval-recursion` · theorem — The Rauch–Tung–Striebel recursion gives fixed-interval Gaussian smoothing laws

### `kalman-smoothing-and-rts-recursion-examples` — Fixed-interval Gaussian smoothing and RTS recursion — Examples (2 item(s))

- `ex-two-time-scalar-rauch-tung-striebel-smoother` · example — Exact two-time scalar Rauch–Tung–Striebel smoothing calculation
- `ex-singular-forecast-covariance-outside-rts-domain` · example — Singular forecast covariance lies outside the ordinary RTS inverse domain

## Your seams

Your pages depend on another group's:

- `state-space-filtering-and-predictive-laws` requires `posterior-propriety-and-dominated-bayes-formula` (group a, batch 5)
- `kalman-filtering` requires `conjugate-families-and-posterior-prediction` (group a, batch 6)

Another group's pages depend on yours:

- `feynman-kac-particle-filters` (group n) requires your `state-space-filtering-and-predictive-laws`
- `particle-smoothing-backward-simulation-and-rbpf` (group n) requires your `kalman-filtering`
- `data-assimilation-variational-and-ensemble-methods` (group o) requires your `kalman-smoothing-and-rts-recursion`

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
