# Step 5 adjudication — group **e**, run `statistical-models-experiments-62`

You are the group Alpha for batches 13, 14, 15: 3 A/B pair(s), 6 page(s), 23 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **13**: `research/statistical-models-experiments-62-batch-13-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **14**: `research/statistical-models-experiments-62-batch-14-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **15**: `research/statistical-models-experiments-62-batch-15-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 13 | `blocking-and-paired-designs` | A | statistical-models-and-experiments | 1942 | `randomized-treatment-assignment-and-sharp-null-tests`, `estimators-and-randomized-procedures`, `gaussian-orthogonal-decomposition-and-quadratic-forms`, `probability-spaces-random-variables-and-expectation` |
| 13 | `blocking-and-paired-designs-examples` | B | statistical-models-and-experiments | 1943 | `blocking-and-paired-designs` |
| 14 | `full-factorial-contrasts-and-interactions` | A | statistical-models-and-experiments | 1944 | `randomized-treatment-assignment-and-sharp-null-tests`, `inner-product-spaces-and-orthogonality`, `probability-spaces-random-variables-and-expectation` |
| 14 | `full-factorial-contrasts-and-interactions-examples` | B | statistical-models-and-experiments | 1945 | `full-factorial-contrasts-and-interactions` |
| 15 | `fractional-factorial-aliasing-and-foldover` | A | statistical-models-and-experiments | 1946 | `full-factorial-contrasts-and-interactions`, `inner-product-spaces-and-orthogonality` |
| 15 | `fractional-factorial-aliasing-and-foldover-examples` | B | statistical-models-and-experiments | 1947 | `fractional-factorial-aliasing-and-foldover` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `blocking-and-paired-designs` — Blocking, pairs, and Latin squares (7 item(s))

- `def-randomized-complete-block-design` · definition — Randomized complete-block design
- `lem-rcbd-nested-contrast-model-and-projection` · lemma — Nested contrast models and projections in a balanced block design
- `def-randomized-latin-square-design` · definition — Randomized Latin-square design
- `thm-paired-randomization-contrast-moments` · theorem — Design expectation and variance of a paired contrast
- `lem-randomly-selected-unit-effect-moments` · lemma — Moments of the effect for the randomly selected treated unit
- `prop-rcbd-treatment-block-interaction-confounded-with-residual` · proposition — One cell observation confounds unrestricted interaction with residual error
- `thm-rcbd-treatment-contrast-f-law` · theorem — Exact Gaussian F law for RCBD treatment contrasts

### `blocking-and-paired-designs-examples` — Blocking, pairs, and Latin squares — Examples (5 item(s))

- `ex-missing-treatment-is-not-a-complete-block` · example — A missing treatment falls outside the complete-block assignment space
- `ex-latin-square-assignment-is-restricted` · example — A Latin-square assignment is a strict subset of RCBD assignments
- `ex-paired-randomization-contrast-with-heterogeneous-effects` · example — A paired contrast with unequal unit-level effects
- `ex-rcbd-interaction-shares-the-residual-subspace` · example — A two-by-two interaction and error share one residual array
- `cex-observed-paired-contrast-variance-is-not-effect-heterogeneity` · counterexample — Observed paired-contrast variance is not determined by effect heterogeneity

### `full-factorial-contrasts-and-interactions` — Full factorials (3 item(s))

- `def-two-level-full-factorial-design` · definition — Two-level full factorial designs and coded effects
- `thm-full-two-level-factorial-contrast-orthogonality` · theorem — Orthogonality of the full two-level factorial contrasts
- `thm-full-factorial-estimator-and-effect-variances` · theorem — Coefficient and factorial-effect variances under equal replication

### `full-factorial-contrasts-and-interactions-examples` — Full factorials — Examples (2 item(s))

- `ex-unbalanced-full-factorial-loses-orthogonality` · example — Unequal replication removes factorial-column orthogonality
- `ex-two-factor-interaction-and-scale-dependence` · example — A two-factor interaction depends on response scale

### `fractional-factorial-aliasing-and-foldover` — Fractional factorial aliases and foldover (4 item(s))

- `def-regular-fractional-factorial-defining-relation-and-resolution` · definition — Regular two-level fractions, signed defining relations, and resolution
- `thm-regular-fractional-factorial-aliasing-criterion` · theorem — The defining subgroup gives the exact alias relations
- `thm-factorial-column-aliases-prevent-separate-identification` · theorem — Aliased factorial columns prevent separate coefficient identification
- `thm-factorial-foldover-separates-opposite-parity-aliases` · theorem — Full and partial foldovers separate aliases by parity

### `fractional-factorial-aliasing-and-foldover-examples` — Fractional factorial aliases and foldover — Examples (2 item(s))

- `ex-two-three-minus-one-alias-class` · example — The alias classes in a $2^{3-1}$ fraction
- `ex-resolution-three-foldover-and-targeted-followup` · example — Full and targeted foldovers of a resolution III fraction

## Your seams

Your pages depend on another group's:

- `blocking-and-paired-designs` requires `randomized-treatment-assignment-and-sharp-null-tests` (group d, batch 12)
- `full-factorial-contrasts-and-interactions` requires `randomized-treatment-assignment-and-sharp-null-tests` (group d, batch 12)

Another group's pages depend on yours:

- `response-surfaces-and-optimal-design` (group f) requires your `full-factorial-contrasts-and-interactions`
- `response-surfaces-and-optimal-design` (group f) requires your `fractional-factorial-aliasing-and-foldover`

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
