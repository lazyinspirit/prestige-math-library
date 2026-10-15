# Step 5 adjudication — group **f**, run `statistical-models-experiments-62`

You are the group Alpha for batches 16, 17, 18: 3 A/B pair(s), 6 page(s), 25 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **16**: `research/statistical-models-experiments-62-batch-16-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **17**: `research/statistical-models-experiments-62-batch-17-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **18**: `research/statistical-models-experiments-62-batch-18-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 16 | `response-surfaces-and-optimal-design` | A | statistical-models-and-experiments | 1948 | `full-factorial-contrasts-and-interactions`, `fractional-factorial-aliasing-and-foldover`, `matrix-differentiation-and-first-order-spectral-perturbation`, `the-spectral-theorem-and-singular-value-decomposition` |
| 16 | `response-surfaces-and-optimal-design-examples` | B | statistical-models-and-experiments | 1949 | `response-surfaces-and-optimal-design` |
| 17 | `power-and-sample-size-planning` | A | statistical-models-and-experiments | 1950 | `finite-populations-and-sampling-designs`, `randomized-treatment-assignment-and-sharp-null-tests`, `finite-sample-tests-neyman-pearson-and-valid-p-values`, `weak-convergence-tightness-and-representation`, `characteristic-functions-inversion-and-continuity`, `reeb-stability-and-global-foliation-constructions`, `central-limit-theorems` |
| 17 | `power-and-sample-size-planning-examples` | B | statistical-models-and-experiments | 1951 | `power-and-sample-size-planning` |
| 18 | `biological-and-technical-replication` | A | statistical-models-and-experiments | 1952 | `scientific-statistical-model-contracts`, `mixed-effects-and-longitudinal-models`, `probability-spaces-random-variables-and-expectation` |
| 18 | `biological-and-technical-replication-examples` | B | statistical-models-and-experiments | 1953 | `biological-and-technical-replication` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `response-surfaces-and-optimal-design` — Response surfaces and optimal design (6 item(s))

- `def-local-response-surface-model` · definition — Local response-surface models
- `def-approximate-linear-model-design-and-optimality-criteria` · definition — Approximate designs and linear-model optimality criteria
- `lem-log-determinant-concavity-on-positive-definite-matrices` · lemma — The log determinant is concave on positive-definite matrices
- `def-central-composite-design` · definition — Central composite designs
- `thm-second-order-response-surface-stationary-point-and-classification` · theorem — Stationary point and classification of a nonsingular quadratic response surface
- `thm-d-optimality-equivalence-theorem` · theorem — Equivalence criterion for D-optimal approximate designs

### `response-surfaces-and-optimal-design-examples` — Response surfaces and optimal design — Examples (2 item(s))

- `ex-saddle-in-second-order-response-surface` · example — A second-order response surface with a saddle point
- `ex-approximate-vs-exact-d-optimal-design` · example — An approximate D-optimum need not be an exact three-run design

### `power-and-sample-size-planning` — Power and sample size (11 item(s))

- `lem-standard-normal-cdf-quantiles-and-tail-symmetry-for-power` · lemma — Standard-normal CDF, tail, and quantile identities for power calculations
- `lem-iid-normal-sample-mean-law` · lemma — The mean of a finite independent normal sample is normal
- `lem-least-feasible-sample-size-exists` · lemma — A nonempty set of positive integers has a least member
- `lem-ceiling-and-least-positive-integer-threshold` · lemma — Ceilings give the least positive integer meeting a real threshold
- `def-power-and-sample-size-planning-specification` · definition — Power and sample-size planning specifications
- `prop-known-variance-normal-two-sided-z-test-power` · proposition — Both tails determine power for the known-variance two-sided normal z-test
- `alg-finite-candidate-power-sample-size-search` · algorithm — Finite-candidate power and sample-size search
- `thm-known-variance-normal-z-test-power-and-minimum-sample-size` · theorem — Exact power and least sample size for a known-variance normal z-test
- `thm-finite-candidate-power-sample-size-search-correctness` · theorem — Finite-candidate power and sample-size search is correct
- `alg-positive-integer-power-sample-size-search` · algorithm — Search over all positive sample sizes with explicit stopping certificates
- `thm-positive-integer-power-sample-size-search-correctness` · theorem — Correctness and exact termination conditions for all-size planning search

### `power-and-sample-size-planning-examples` — Power and sample size — Examples (3 item(s))

- `ex-two-sided-normal-z-power-includes-both-tails` · example — A two-sided normal z-test retains its lower-tail power
- `ex-known-variance-normal-z-sample-size-and-sensitivity` · example — An exact one-sided normal sample size and its effect-variance sensitivity
- `cex-no-finite-query-universal-sample-size-infeasibility-detector` · counterexample — Finite power-oracle queries cannot universally certify no feasible sample size

### `biological-and-technical-replication` — Biological and technical replication (2 item(s))

- `def-biological-and-technical-replication-model` · definition — Biological and technical replication model
- `thm-mean-and-variance-under-biological-and-technical-replication` · theorem — Mean and variance under balanced biological and technical replication

### `biological-and-technical-replication-examples` — Biological and technical replication — Examples (1 item(s))

- `ex-five-assays-on-one-animal-versus-five-animals` · example — Five assays on one animal versus one assay on five animals

## Your seams

Your pages depend on another group's:

- `response-surfaces-and-optimal-design` requires `full-factorial-contrasts-and-interactions` (group e, batch 14)
- `response-surfaces-and-optimal-design` requires `fractional-factorial-aliasing-and-foldover` (group e, batch 15)
- `power-and-sample-size-planning` requires `finite-populations-and-sampling-designs` (group c, batch 8)
- `power-and-sample-size-planning` requires `randomized-treatment-assignment-and-sharp-null-tests` (group d, batch 12)
- `biological-and-technical-replication` requires `scientific-statistical-model-contracts` (group a, batch 1)
- `biological-and-technical-replication` requires `mixed-effects-and-longitudinal-models` (group c, batch 7)

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
