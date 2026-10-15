# Step 5 adjudication — group **g**, run `statistical-models-experiments-62`

You are the group Alpha for batches 19, 20, 21: 3 A/B pair(s), 6 page(s), 35 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **19**: `research/statistical-models-experiments-62-batch-19-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **20**: `research/statistical-models-experiments-62-batch-20-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **21**: `research/statistical-models-experiments-62-batch-21-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 19 | `potential-outcomes-and-causal-identification` | A | statistical-models-and-experiments | 1954 | `statistical-experiments-models-and-identifiability`, `markov-kernels-and-markov-chains`, `conditional-expectation`, `conditional-distributions-and-regular-conditional-probability` |
| 19 | `potential-outcomes-and-causal-identification-examples` | B | statistical-models-and-experiments | 1955 | `potential-outcomes-and-causal-identification` |
| 20 | `structural-causal-models-dags-and-adjustment` | A | statistical-models-and-experiments | 1956 | `potential-outcomes-and-causal-identification`, `statistical-experiments-models-and-identifiability`, `markov-kernels-and-markov-chains`, `conditional-distributions-and-regular-conditional-probability`, `independence-borel-cantelli-and-zero-one-laws` |
| 20 | `structural-causal-models-dags-and-adjustment-examples` | B | statistical-models-and-experiments | 1957 | `structural-causal-models-dags-and-adjustment` |
| 21 | `standardization-and-ipw-identification` | A | statistical-models-and-experiments | 1958 | `potential-outcomes-and-causal-identification`, `statistical-experiments-models-and-identifiability`, `conditional-expectation`, `probability-spaces-random-variables-and-expectation` |
| 21 | `standardization-and-ipw-identification-examples` | B | statistical-models-and-experiments | 1959 | `standardization-and-ipw-identification` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `potential-outcomes-and-causal-identification` — Potential outcomes and identification (6 item(s))

- `def-potential-outcomes-and-consistency` · definition — Potential outcomes and consistency
- `def-positivity-for-discrete-treatment` · definition — Positivity for discrete treatment
- `lem-conditional-independence-integrable-factorization` · lemma — Integrable factorization under conditional independence
- `def-conditional-exchangeability-of-potential-outcomes` · definition — Conditional exchangeability of potential outcomes
- `def-causal-average-treatment-effects` · definition — Average and conditional average treatment effects
- `thm-discrete-treatment-potential-outcome-mean-identification` · theorem — Discrete-treatment potential-outcome means are identifiable

### `potential-outcomes-and-causal-identification-examples` — Potential outcomes and identification — Examples (3 item(s))

- `ex-randomized-treatment-identification` · example — Randomized treatment identifies the target mean contrast
- `ex-binary-confounding-standardization` · example — Binary confounding and standardization
- `ex-positivity-failure-nonidentification` · example — Positivity failure leaves the target unsupported

### `structural-causal-models-dags-and-adjustment` — SCM, DAGs, adjustment (14 item(s))

- `def-d-separation-in-a-dag` · definition — Paths, active paths, and d-separation in a finite DAG
- `lem-finite-products-of-probability-kernels` · lemma — Finite products of probability kernels are probability kernels
- `def-recursive-structural-causal-model-and-dag` · definition — Recursive structural causal models on finite DAGs
- `def-ancestral-moral-graph-of-a-dag` · definition — The ancestral moral graph of a DAG
- `def-faithfulness-of-a-dag-model` · definition — Faithfulness of a law to a DAG
- `lem-recursive-scm-topological-kernel-factorization` · lemma — A Markovian recursive SCM has a topological kernel factorization
- `lem-active-routes-in-a-finite-dag-have-active-paths` · lemma — Every active finite route contains an active path
- `lem-d-separation-ancestral-moral-separation` · lemma — D-separation is separation in the ancestral moral graph
- `lem-conditional-independence-under-kernel-extension-and-conditioning` · lemma — Conditional independence under kernel extension and conditioning
- `thm-dag-factorization-implies-d-separation-conditional-independence` · theorem — DAG factorization implies the global Markov property
- `lem-backdoor-criterion-implies-counterfactual-exchangeability` · lemma — The backdoor criterion implies conditional exchangeability
- `thm-backdoor-adjustment-sufficiency` · theorem — Backdoor adjustment identifies an interventional law
- `lem-frontdoor-interventional-identities` · lemma — Counterfactual identities under the front-door conditions
- `thm-frontdoor-adjustment-sufficiency` · theorem — Front-door adjustment identifies an interventional mean

### `structural-causal-models-dags-and-adjustment-examples` — SCM, DAGs, adjustment — Examples (3 item(s))

- `ex-confounding-and-collider-conditioning` · example — A confounder and a conditioned collider
- `ex-same-observed-law-different-intervention-law` · example — The same observed law can have different intervention laws
- `ex-frontdoor-adjustment-binary-model` · example — A binary SCM where front-door adjustment works

### `standardization-and-ipw-identification` — Standardization and IPW identification (5 item(s))

- `alg-standardization-for-a-causal-mean` · algorithm — Standardization for a causal mean
- `alg-inverse-probability-weighting-for-a-causal-mean` · algorithm — Inverse probability weighting for a causal mean
- `lem-conditional-treatment-indicator-factorization` · lemma — Conditional treatment-indicator factorization
- `thm-standardization-identifies-a-causal-mean` · theorem — Conditional-class standardization identifies a causal mean
- `thm-inverse-probability-weighting-identifies-a-causal-mean` · theorem — Inverse probability weighting identifies a causal mean

### `standardization-and-ipw-identification-examples` — Standardization and IPW identification — Examples (4 item(s))

- `ex-positivity-failure-prevents-standardization-and-ipw-identification` · example — Positivity failure prevents standardization and IPW identification
- `ex-standardization-and-ipw-two-strata-calculation` · example — A two-stratum standardization and IPW calculation
- `ex-extreme-ipw-weights-under-poor-overlap` · example — Extreme IPW weights under poor overlap
- `ex-weight-truncation-changes-the-ipw-target` · example — Weight truncation changes the IPW target

## Your seams

Another group's pages depend on yours:

- `instrumental-variables-and-late` (group h) requires your `potential-outcomes-and-causal-identification`
- `mediation-effects-and-identification` (group h) requires your `potential-outcomes-and-causal-identification`
- `mediation-effects-and-identification` (group h) requires your `structural-causal-models-dags-and-adjustment`

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

# Historical Step-5 closure recovery, `statistical-models-experiments-62`

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
