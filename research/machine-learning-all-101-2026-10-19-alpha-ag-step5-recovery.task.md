# Step 5 adjudication — group **ag**, run `machine-learning-all-101-2026-10-19`

You are the group Alpha for batches 98, 99, 100: 3 A/B pair(s), 6 page(s), 31 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **98**: `research/machine-learning-all-101-2026-10-19-batch-98-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **99**: `research/machine-learning-all-101-2026-10-19-batch-99-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **100**: `research/machine-learning-all-101-2026-10-19-batch-100-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 98 | `monotone-risk-calibration-and-deployment-guarantees` | A | machine-learning | 2990 | `conformal-prediction-and-exchangeable-ranks`, `predictive-calibration-and-uncertainty-under-shift` |
| 98 | `monotone-risk-calibration-and-deployment-guarantees-examples` | B | machine-learning | 2991 | `monotone-risk-calibration-and-deployment-guarantees` |
| 99 | `verifiable-generation-and-test-time-sampling` | A | machine-learning | 2992 | `dominated-experiments-likelihood-and-sufficiency`, `offline-reinforcement-learning-and-off-policy-evaluation`, `policy-gradients-reinforce-and-actor-critic` |
| 99 | `verifiable-generation-and-test-time-sampling-examples` | B | machine-learning | 2993 | `verifiable-generation-and-test-time-sampling` |
| 100 | `active-querying-version-spaces-and-abstention` | A | machine-learning | 2994 | `finite-class-pac-learning-and-erm`, `prediction-problems-risks-and-empirical-minimization`, `vc-dimension-growth-and-pac-classification` |
| 100 | `active-querying-version-spaces-and-abstention-examples` | B | machine-learning | 2995 | `active-querying-version-spaces-and-abstention` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `monotone-risk-calibration-and-deployment-guarantees` — Monotone risk calibration and finite-sample deployment guarantees (5 item(s))

- `def-finite-nested-decision-family-and-bounded-risk` · definition — Finite nested decision families and bounded risk
- `alg-finite-grid-conformal-risk-control` · algorithm — Finite-grid conformal risk control
- `thm-finite-grid-conformal-risk-control` · theorem — Finite-sample expected-risk control on a finite grid
- `thm-finite-grid-monotone-envelope-risk-control` · theorem — Finite-grid risk control by monotone envelopes
- `rem-marginal-risk-control-and-adaptive-reuse` · remark — Marginal risk control, calibration, and adaptive reuse

### `monotone-risk-calibration-and-deployment-guarantees-examples` — Monotone risk calibration and finite-sample deployment guarantees — Examples (4 item(s))

- `ex-zero-loss-finite-grid-risk-control` · example — The all-zero loss boundary
- `ex-finite-grid-risk-control-fallback` · example — Fallback when the calibration correction exceeds the target
- `cex-nonmonotone-finite-grid-risk-control` · counterexample — A nonmonotone loss can defeat first-pass calibration
- `ex-multilabel-false-negative-risk-control` · example — Multilabel false-negative risk control

### `verifiable-generation-and-test-time-sampling` — Verifiable generation, group-relative updates, and test-time sampling (10 item(s))

- `def-verifier-and-generation-protocol` · definition — Finite truncated response spaces, correctness predicates, and verifiers
- `alg-budgeted-verifier-guided-generation` · algorithm — Budgeted verifier-guided generation and best-of-N sampling
- `lem-budgeted-verifier-generation-termination-and-calls` · lemma — Budgeted verifier generation terminates with bounded response and selection calls
- `thm-independent-generation-success-and-verifier-error` · theorem — Independent generation success and verifier false-acceptance bounds
- `lem-finite-response-likelihood-ratio-change-of-measure` · lemma — Finite response likelihood ratios change measure by cancellation
- `alg-finite-group-relative-policy-update` · algorithm — Finite-budget group-relative policy update
- `lem-finite-group-relative-update-termination-and-calls` · lemma — Finite group-relative updates preserve admissibility and have bounded oracle calls
- `lem-finite-response-score-gradient-identities` · lemma — Finite-response score mean and reward-gradient identities
- `thm-group-centered-score-estimator-factor` · theorem — The group-centered score estimator has factor one minus one over G
- `rem-reasoning-training-evidence-and-evaluation-targets` · remark — Reasoning-training evidence and evaluation targets

### `verifiable-generation-and-test-time-sampling-examples` — Verifiable generation, group-relative updates, and test-time sampling — Examples (4 item(s))

- `ex-equal-group-rewards-zero-advantages` · example — Equal group rewards set every normalized advantage to zero
- `ex-perfect-and-false-positive-verifiers` · example — Perfect and false-positive verifiers have different rejection outcomes
- `ex-repeated-dependent-copies-no-sampling-gain` · example — Repeated dependent copies do not increase success probability
- `ex-pass-at-one-oracle-pass-n-verifier-selected-accuracy` · example — Pass-at-one, oracle pass-at-N, and verifier-selected accuracy differ

### `active-querying-version-spaces-and-abstention` — Active querying, version spaces, and abstention (5 item(s))

- `def-pool-based-realizable-active-learning` · definition — Finite pool-based realizable active-learning instance
- `alg-finite-pool-version-space-query` · algorithm — Finite-pool version-space query procedure
- `thm-active-version-space-invariant-and-query-bound` · theorem — Finite-pool version-space invariant and query bound
- `thm-disagreement-abstention-correctness` · theorem — Unanimous version-space prediction and disagreement abstention
- `rem-active-label-complexity-and-noisy-oracles` · remark — Exact labels, slow version-space shrinkage, and abstention limits

### `active-querying-version-spaces-and-abstention-examples` — Active querying, version spaces, and abstention — Examples (3 item(s))

- `ex-threshold-median-query-binary-search` · example — Median queries identify a finite threshold by binary search
- `ex-star-class-linear-disagreements` · example — A finite star class can require one query per alternative
- `ex-active-learning-boundary-cases` · example — Empty pools, singleton classes, and zero query budgets

## Your seams

Your pages depend on another group's:

- `monotone-risk-calibration-and-deployment-guarantees` requires `predictive-calibration-and-uncertainty-under-shift` (group x, batch 72)
- `verifiable-generation-and-test-time-sampling` requires `offline-reinforcement-learning-and-off-policy-evaluation` (group ac, batch 87)
- `verifiable-generation-and-test-time-sampling` requires `policy-gradients-reinforce-and-actor-critic` (group ab, batch 84)
- `active-querying-version-spaces-and-abstention` requires `finite-class-pac-learning-and-erm` (group a, batch 3)
- `active-querying-version-spaces-and-abstention` requires `prediction-problems-risks-and-empirical-minimization` (group a, batch 2)
- `active-querying-version-spaces-and-abstention` requires `vc-dimension-growth-and-pac-classification` (group a, batch 4)

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
