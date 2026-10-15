# Step 5 adjudication — group **t**, run `statistical-models-experiments-62`

You are the group Alpha for batches 58, 59, 60: 3 A/B pair(s), 6 page(s), 18 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **58**: `research/statistical-models-experiments-62-batch-58-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **59**: `research/statistical-models-experiments-62-batch-59-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **60**: `research/statistical-models-experiments-62-batch-60-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 58 | `discrete-sequential-test-validity-and-ville` | A | statistical-models-and-experiments | 2032 | `sequential-testing-and-anytime-valid-inference`, `discrete-time-martingales`, `stopping-times-and-optional-stopping`, `probability-spaces-random-variables-and-expectation`, `independence-borel-cantelli-and-zero-one-laws` |
| 58 | `discrete-sequential-test-validity-and-ville-examples` | B | statistical-models-and-experiments | 2033 | `discrete-sequential-test-validity-and-ville` |
| 59 | `sequential-likelihood-ratio-tests` | A | statistical-models-and-experiments | 2034 | `dominated-experiments-likelihood-and-sufficiency`, `sequential-testing-and-anytime-valid-inference`, `stopping-times-and-optional-stopping`, `strong-laws-of-large-numbers`, `conditional-expectation` |
| 59 | `sequential-likelihood-ratio-tests-examples` | B | statistical-models-and-experiments | 2035 | `sequential-likelihood-ratio-tests` |
| 60 | `subgaussian-mixture-confidence-sequences` | A | statistical-models-and-experiments | 2036 | `discrete-sequential-test-validity-and-ville`, `sequential-testing-and-anytime-valid-inference`, `conditional-expectation`, `product-measures-and-the-fubini-tonelli-theorems`, `weak-convergence-tightness-and-representation` |
| 60 | `subgaussian-mixture-confidence-sequences-examples` | B | statistical-models-and-experiments | 2037 | `subgaussian-mixture-confidence-sequences`, `concentration-inequalities-and-tail-bounds` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `discrete-sequential-test-validity-and-ville` — Discrete test supermartingales and Ville (2 item(s))

- `lem-finite-horizon-test-supermartingale-crossing-bound` · lemma — Finite-horizon crossing bound for a nonnegative test supermartingale
- `thm-discrete-ville-inequality` · theorem — Discrete Ville inequality and anytime threshold validity

### `discrete-sequential-test-validity-and-ville-examples` — Discrete test supermartingales and Ville — Examples (2 item(s))

- `ex-independent-uniform-repeated-peeking-inflates-global-null-error` · example — Repeated unadjusted tests inflate global-null error
- `cex-test-supermartingale-supremum-threshold-need-not-be-attained` · counterexample — A supermartingale supremum threshold need not be attained

### `sequential-likelihood-ratio-tests` — Sequential likelihood-ratio tests (4 item(s))

- `alg-sequential-likelihood-ratio-test` · algorithm — Sequential likelihood-ratio test
- `lem-iid-sequential-likelihood-ratio-factorization` · lemma — Finite-sample likelihood ratio for iid observations
- `thm-sequential-likelihood-ratio-test-error-bounds` · theorem — Terminal error bounds for a sequential likelihood-ratio test
- `thm-sequential-likelihood-ratio-test-terminates-under-drift` · theorem — Iid drift conditions imply almost-sure test termination

### `sequential-likelihood-ratio-tests-examples` — Sequential likelihood-ratio tests — Examples (1 item(s))

- `ex-bernoulli-sequential-likelihood-ratio-crossings` · example — Exact Bernoulli crossings in a sequential likelihood-ratio test

### `subgaussian-mixture-confidence-sequences` — Sub-Gaussian mixture confidence sequences (7 item(s))

- `def-conditional-subgaussian-increments` · definition — Conditionally sub-Gaussian increments
- `def-gaussian-mixture-confidence-sequence-boundary` · definition — Gaussian-mixture confidence-sequence boundary
- `lem-gaussian-exponential-mixture-integral` · lemma — Closed form for a Gaussian exponential mixture
- `lem-conditional-subgaussian-exponential-process` · lemma — Conditional sub-Gaussian increments generate exponential test supermartingales
- `lem-gaussian-mixture-boundary-crossing-equivalence` · lemma — The Gaussian-mixture threshold is the stated square-root boundary
- `thm-gaussian-mixture-test-supermartingale` · theorem — The Gaussian mixture is a sub-Gaussian test supermartingale
- `thm-subgaussian-mixture-confidence-sequence` · theorem — A Gaussian mixture confidence sequence for conditional sub-Gaussian means

### `subgaussian-mixture-confidence-sequences-examples` — Sub-Gaussian mixture confidence sequences — Examples (2 item(s))

- `cex-marginal-subgaussianity-does-not-justify-mixture-confidence-sequence` · counterexample — Marginal sub-Gaussianity does not justify an anytime confidence sequence
- `ex-independent-gaussian-increments-subgaussian-mixture-confidence-sequence` · example — Independent Gaussian increments satisfy the conditional proxy

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
