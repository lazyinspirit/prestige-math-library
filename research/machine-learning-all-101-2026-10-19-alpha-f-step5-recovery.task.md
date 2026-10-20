# Step 5 adjudication — group **f**, run `machine-learning-all-101-2026-10-19`

You are the group Alpha for batches 17, 18, 19: 3 A/B pair(s), 6 page(s), 25 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **17**: `research/machine-learning-all-101-2026-10-19-batch-17-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **18**: `research/machine-learning-all-101-2026-10-19-batch-18-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **19**: `research/machine-learning-all-101-2026-10-19-batch-19-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 17 | `ml02-cart` | A | machine-learning | 2728 | `inner-product-spaces-and-orthogonality` |
| 17 | `ml02-cart-examples` | B | machine-learning | 2729 | `ml02-cart` |
| 18 | `ml02-random-forests` | A | machine-learning | 2730 | `independence-borel-cantelli-and-zero-one-laws`, `ml02-cart`, `probability-spaces-random-variables-and-expectation`, `product-measures-and-the-fubini-tonelli-theorems`, `strong-laws-of-large-numbers` |
| 18 | `ml02-random-forests-examples` | B | machine-learning | 2731 | `ml02-random-forests` |
| 19 | `ml02-boosting` | A | machine-learning | 2732 | `ml02-cart`, `the-total-derivative` |
| 19 | `ml02-boosting-examples` | B | machine-learning | 2733 | `ml02-boosting` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `ml02-cart` — CART trees and pruning (7 item(s))

- `def-empirical-decision-tree` · definition — Empirical axis-aligned binary decision trees
- `thm-node-mean-minimizes-squared-error` · theorem — The sample mean uniquely minimizes squared error on a nonempty leaf
- `def-cost-complexity-pruning` · definition — Cost-complexity criteria for subtrees
- `alg-cart-greedy-split` · algorithm — Greedy axis-aligned CART growth on a finite sample
- `alg-weakest-link-pruning` · algorithm — Weakest-link pruning of a finite tree
- `thm-cart-greedy-split-is-best-listed-split-and-terminates` · theorem — Greedy CART minimizes the listed split loss and terminates
- `thm-weakest-link-pruning-terminates` · theorem — Weakest-link pruning terminates at the root

### `ml02-cart-examples` — CART trees and pruning — Examples (2 item(s))

- `ex-cart-subtrees-same-fit-different-penalties` · example — Two fitted subtrees with different leaf penalties
- `ex-cart-one-dimensional-threshold-tree` · example — A one-dimensional regression threshold tree

### `ml02-random-forests` — Bagging and random forests (4 item(s))

- `alg-bagged-random-forest` · algorithm — Bagged random-forest construction on a fixed finite sample
- `thm-infinite-forest-vote-limit` · theorem — Almost-sure limiting risk of an infinite random-forest classifier
- `thm-random-forest-strength-correlation-bound` · theorem — Breiman's random-forest strength–correlation error bound
- `thm-regression-forest-risk-under-unbiased-randomized-trees` · theorem — Unbiased randomized-tree residual correlation bounds forest risk

### `ml02-random-forests-examples` — Bagging and random forests — Examples (3 item(s))

- `ex-random-forest-zero-margin-vote-limit` · example — A zero-margin bootstrap forest need not approach strict-margin risk
- `ex-random-forest-out-of-bag-diagnostic` · example — An out-of-bag prediction can differ from the full finite forest
- `ex-random-forest-strength-correlation-tradeoff` · example — A two-stump strength and correlation calculation

### `ml02-boosting` — AdaBoost and gradient boosting (6 item(s))

- `alg-adaboost-m1` · algorithm — Finite-sample AdaBoost.M1 with half-log coefficients
- `def-negative-gradient-pseudo-residual` · definition — Negative-gradient pseudo-residuals for a finite empirical loss
- `lem-pseudo-residuals-are-negative-score-gradient` · lemma — Pseudo-residuals are the negative gradient in sample-score space
- `thm-adaboost-exponential-training-error-bound` · theorem — AdaBoost's exponential training-loss and nonpositive-margin bound
- `alg-gradient-boosting` · algorithm — Exact-line-search gradient tree boosting on a finite sample
- `thm-gradient-boosting-empirical-loss-nonincreasing` · theorem — Gradient tree boosting does not increase empirical loss

### `ml02-boosting-examples` — AdaBoost and gradient boosting — Examples (3 item(s))

- `ex-adaboost-perfect-round-stops` · example — AdaBoost stops at a perfect round
- `ex-adaboost-two-rounds-and-margin-bound` · example — Two AdaBoost rounds with normalized weights
- `ex-gradient-boosting-zero-tree-direction` · example — A one-leaf fit can project a nonzero gradient to zero

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

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
