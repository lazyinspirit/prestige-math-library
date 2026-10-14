# Step 5 adjudication — group **m**, run `mathematical-statistics-foundations-37`

You are the group Alpha for batches 37: 1 A/B pair(s), 2 page(s), 15 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **37**: `research/mathematical-statistics-foundations-37-batch-37-step5-context.json` — missing; the Step-4 digest gate must resolve this.

Each digest records conventions, load-bearing claims, opened dependencies and concerns.
A concern independently agreeing with a judge rejection is evidence to examine carefully.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.**
Open each relevant dependency, including published content and other groups.
**You may write only inside your own group.** A `confirmed_fatal` licenses repair
to an item in these batches. For a defect owned by another group, record a finding in
`research/mathematical-statistics-foundations-37-step5-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`.
The source tuple is provenance only; it cannot license repair to the target.
The gate routes a stable alert to the owning group; an unanswered finding fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 37 | `conformal-prediction-and-exchangeable-ranks` | A | mathematical-statistics | 1916 | `probability-spaces-random-variables-and-expectation`, `measurable-functions-and-simple-approximation`, `estimators-and-randomized-procedures` |
| 37 | `conformal-prediction-and-exchangeable-ranks-examples` | B | mathematical-statistics | 1917 | `conformal-prediction-and-exchangeable-ranks` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `conformal-prediction-and-exchangeable-ranks` — Conformal Prediction and Exchangeable Ranks (11 item(s))

- `lem-coordinate-maps-and-permutations-are-measurable-on-finite-products` · lemma — Coordinate maps and permutations are measurable on finite products
- `lem-regular-conditional-kernels-push-forward-under-measurable-random-maps` · lemma — Regular conditional kernels push forward under measurable random maps
- `def-exchangeable-random-elements` · definition — Exchangeable random elements
- `def-conformal-nonconformity-score-and-rank-pvalue` · definition — Conformal scores and rank p-values
- `lem-finite-order-statistic-and-rank-maps-are-measurable` · lemma — Finite order statistics and rank maps are measurable
- `lem-permutation-equivariant-score-map-preserves-exchangeability` · lemma — Permutation-equivariant scores preserve exchangeability
- `alg-split-conformal-prediction-set` · algorithm — Split conformal prediction set
- `alg-full-conformal-prediction-set` · algorithm — Full conformal prediction set
- `thm-conformal-rank-superuniformity-under-exchangeability` · theorem — Conformal rank superuniformity under exchangeability
- `thm-split-conformal-marginal-coverage` · theorem — Split conformal marginal coverage
- `thm-full-conformal-marginal-coverage` · theorem — Full conformal marginal coverage

### `conformal-prediction-and-exchangeable-ranks-examples` — Conformal Prediction and Exchangeable Ranks — Examples (4 item(s))

- `ex-split-conformal-conservative-ties` · example — Split conformal coverage can be conservative when scores tie
- `ex-full-conformal-candidate-ranking` · example — Full conformal ranks a candidate in an augmented sample
- `cex-conformal-rare-subgroup-poor-conditional-coverage` · counterexample — Marginal split coverage need not give rare-subgroup coverage
- `cex-conformal-coverage-under-distribution-shift` · counterexample — Exchangeability failure can destroy split coverage

## Your seams

Your pages depend on another group's:

- `conformal-prediction-and-exchangeable-ranks` requires `estimators-and-randomized-procedures` (group a, batch 2)

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

## Step-4 reader warnings

None. No Step-4 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/mathematical-statistics-foundations-37-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Historical Step-5 closure recovery, `mathematical-statistics-foundations-37`

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
