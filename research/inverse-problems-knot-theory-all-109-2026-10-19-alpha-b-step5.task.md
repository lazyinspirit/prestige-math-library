# Step 5 adjudication — group **b**, run `inverse-problems-knot-theory-all-109-2026-10-19`

You are the group Alpha for batches 4, 5, 6: 3 A/B pair(s), 6 page(s), 14 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. Each batch has its own rejection-blind
Step-4 review digest; read all assigned batch digests before the verdicts.
The digests are notes, not authority. Where they and the item files disagree, the files win.

## Step-4 batch review digests

- Batch **4**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-4-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **5**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-5-step5-context.json` — missing; the Step-4 digest gate must resolve this.
- Batch **6**: `research/inverse-problems-knot-theory-all-109-2026-10-19-batch-6-step5-context.json` — missing; the Step-4 digest gate must resolve this.

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
| 4 | `operator-approximation-and-regularization-error` | A | inverse-problems | 3004 | `linear-operators-pseudoinverses-and-picard-criteria`, `numerical-inverse-problems-and-regularization-error`, `spectral-regularization-and-parameter-choice` |
| 4 | `operator-approximation-and-regularization-error-examples` | B | inverse-problems | 3005 | `operator-approximation-and-regularization-error` |
| 5 | `parameter-choice-and-bakushinskii-veto` | A | inverse-problems | 3006 | `linear-operators-pseudoinverses-and-picard-criteria`, `deterministic-source-conditions-and-optimal-recovery`, `spectral-regularization-and-parameter-choice` |
| 5 | `parameter-choice-and-bakushinskii-veto-examples` | B | inverse-problems | 3007 | `parameter-choice-and-bakushinskii-veto` |
| 6 | `factorized-and-composite-linear-inversion` | A | inverse-problems | 3008 | `linear-operators-pseudoinverses-and-picard-criteria`, `deterministic-source-conditions-and-optimal-recovery`, `parameter-choice-and-bakushinskii-veto`, `spectral-regularization-and-parameter-choice` |
| 6 | `factorized-and-composite-linear-inversion-examples` | B | inverse-problems | 3009 | `factorized-and-composite-linear-inversion` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `operator-approximation-and-regularization-error` — Data, operator, discretization, and solve errors (2 item(s))

- `def-ip-error-budget-for-computed-inversion` · definition — Error budget for computed Tikhonov inversion
- `prop-ip-regularized-output-error-splits-by-source` · proposition — Regularized output error splits into source-specific terms

### `operator-approximation-and-regularization-error-examples` — Data, operator, discretization, and solve errors — Examples and Counterexamples (2 item(s))

- `ex-ip-mesh-sequence-small-singular-values` · example — Vanishing data errors with persistent small-singular-value reconstruction error
- `ex-ip-iterative-tikhonov-solve-stopped-with-residual` · example — Early stopping leaves a nonzero Tikhonov normal residual

### `parameter-choice-and-bakushinskii-veto` — Parameter rules and the noise-free veto (2 item(s))

- `def-ip-noise-level-free-parameter-rule` · definition — Noise-level-free parameter-choice rule
- `thm-ip-bakushinskii-veto` · theorem — Bakushinskii veto for discontinuous pseudoinverses

### `parameter-choice-and-bakushinskii-veto-examples` — Parameter rules and the noise-free veto — Examples and Counterexamples (3 item(s))

- `ex-ip-discrete-grid-l-curve-parameter-choice` · example — A finite-grid L-curve selects an interior parameter
- `cex-ip-noise-underestimation-truncated-svd` · counterexample — Noise underestimation defeats a truncated singular-value rule
- `ex-ip-stable-restricted-class-bakushinskii` · example — Conditional stability on a power-source class

### `factorized-and-composite-linear-inversion` — Factorized and composite linear inversion (3 item(s))

- `def-ip-composite-double-regularization` · definition — Composite double regularization
- `thm-ip-double-discrepancy-conditional-convergence` · theorem — Conditional convergence of double-discrepancy composite inversion
- `op-ip-optimal-composite-discrepancy-rate` · open-problem — Optimal rate for composite double discrepancy

### `factorized-and-composite-linear-inversion-examples` — Factorized and composite linear inversion — Examples and Counterexamples (2 item(s))

- `ex-ip-composite-linear-inversion-commuting-diagonal` · example — Commuting diagonal factors with an explicit composite estimator
- `cex-ip-composite-pseudoinverse-factorization-fails` · counterexample — Rank-deficient noncommuting factors break pseudoinverse composition

## Your seams

Your pages depend on another group's:

- `operator-approximation-and-regularization-error` requires `linear-operators-pseudoinverses-and-picard-criteria` (group a, batch 2)
- `parameter-choice-and-bakushinskii-veto` requires `linear-operators-pseudoinverses-and-picard-criteria` (group a, batch 2)
- `parameter-choice-and-bakushinskii-veto` requires `deterministic-source-conditions-and-optimal-recovery` (group a, batch 3)
- `factorized-and-composite-linear-inversion` requires `linear-operators-pseudoinverses-and-picard-criteria` (group a, batch 2)
- `factorized-and-composite-linear-inversion` requires `deterministic-source-conditions-and-optimal-recovery` (group a, batch 3)

Another group's pages depend on yours:

- `numerical-pde-inversion-and-adjoint-error-control` (group o) requires your `operator-approximation-and-regularization-error`
- `dynamic-data-identifiability-and-system-realization` (group s) requires your `operator-approximation-and-regularization-error`

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
