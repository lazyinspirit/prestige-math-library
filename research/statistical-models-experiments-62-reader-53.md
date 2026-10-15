# Step 3a reader report — batch 53

Run: `statistical-models-experiments-62`  
Role: reader (`reader-53`)

## Opened inventory

Assigned pages:

- `library/statistical-models-and-experiments/holm-step-down-familywise-error-control.md`
- `library/statistical-models-and-experiments/holm-step-down-familywise-error-control-examples.md`

Listed page prerequisites opened:

- `library/statistical-models-and-experiments/valid-p-values-bonferroni-and-simultaneous-coverage.md`
- `library/mathematical-statistics/finite-sample-tests-neyman-pearson-and-valid-p-values.md`
- `library/probability/probability-spaces-random-variables-and-expectation.md`

Assigned items opened in dependency order:

1. `alg-holm-step-down-procedure`
2. `lem-holm-rejection-events-are-measurable`
3. `thm-holm-stepdown-strong-fwer`
4. `ex-holm-step-down-versus-bonferroni`

Relevant suppliers opened:

- Current-run batch 52 drafts: `def-null-valid-p-value-and-fwer-fdr` and `thm-bonferroni-familywise-error-control`.
- P-value and experiment context: `def-p-value`, `def-statistic-and-estimator`, `def-statistical-experiment`, `thm-p-value-superuniformity`, and `cor-expectation-of-an-indicator-is-probability`.
- Measurability context: `def-algebra-of-subsets`, `def-sigma-algebra`, `def-measurable-space`, `def-measurable-function-between-measurable-spaces`, `thm-arithmetic-and-lattice-operations-preserve-measurability`, `thm-threshold-characterisations-of-real-and-extended-real-measurability`, `def-borel-sigma-algebra-on-the-extended-real-line`, `thm-generating-family-criterion-for-measurable-functions`, `lem-rat-embeds-dense`, `def-positive-and-negative-parts-of-a-function`, and `rem-zero-times-infinity-convention-for-pointwise-products`.
- Probability context: `def-measure`, `def-probability-measure`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `thm-finite-and-countable-subadditivity-of-measures`, and `lem-probability-measure-basic-identities`.

I checked the cross-batch dependency record as context; run-local records did not govern the mathematical verdicts.

## Mathematical review

- The algorithm specifies the finite family and admissible level, deterministic lexicographic tie-breaking, the passing prefix, and the empty-family extension. The finite maximum contains zero and all tested denominators are positive.
- The measurability proof partitions the data space into finitely many measurable ordering and prefix cells. Their finite unions give each rejection event. The threshold events use the stated trace Borel structure on `[0,1]`.
- For each fixed parameter, the strong-FWER proof handles an empty true-null set separately. Otherwise the earliest-ranked true null must be rejected whenever any true null is rejected. Its Holm cutoff is at most `alpha/m_0`, since the suffix from that rank contains all `m_0` true nulls. The false-rejection event is therefore contained in the union of the true-null events at cutoff `alpha/m_0`; the batch 52 Bonferroni result applies to this fixed subfamily. The argument does not use independence.
- The example's exact comparisons are correct: Holm rejects `{1,2}` and one-step Bonferroni rejects `{1}` for the displayed vector. It makes no claim that the observed p-values are valid or that this one vector establishes an error-rate guarantee.

## Page verdicts

- `holm-step-down-familywise-error-control`: **Pass with supplier notes.** The title and summary match the algorithm, measurability result, and strong-FWER theorem. The fixed-family qualification, arbitrary-dependence scope, and limits concerning simultaneous intervals and data-dependent selection are stated accurately. The assigned proof chain is sound; the two nonfatal supplier omissions below do not affect its Holm-specific inferences.
- `holm-step-down-familywise-error-control-examples`: **Pass.** The summary accurately describes a single arithmetic comparison and preserves the theorem's validity requirement.

## Edits, remaining defects, and blockers

- Edits: none. No assigned item or assigned A-page prose required repair. No item formatting, reflow, or precheck command was needed.
- Uneditable defects:
  - `def-null-valid-p-value-and-fwer-fdr`, Definition, final paragraph (line 45): the note establishes that $R$ and $V_\theta$ are measurable and that the FDP is bounded, then infers integrability without stating that the quotient is measurable. The cited expectation definition requires measurability as well as boundedness. Since $R,V_\theta$ take values in the finite set $\{0,\ldots,m\}$, this closes immediately by partitioning into the measurable cells $\{R=r,V_\theta=v\}$ and observing that the quotient is constant on each cell. This is a nonfatal omission in the current-run batch 52 dependency of `thm-holm-stepdown-strong-fwer`.
  - `thm-threshold-characterisations-of-real-and-extended-real-measurability`, Proof, step 3.1 (line 71): the equivalence of the full-real threshold conditions in steps 2.1 and 2.2 does not by itself show that testing rational thresholds suffices for conditions 3–5. Step 2.2 supplies the reduction for condition 2 only. The omitted closure is immediate from density and countable operations; for example, $\{f\ge a\}=\bigcap_{q\in\mathbb Q,\,q<a}\{f\ge q\}$, $\{f<a\}=\bigcup_{q\in\mathbb Q,\,q<a}\{f<q\}$, and $\{f\le a\}=\bigcap_{q\in\mathbb Q,\,q>a}\{f\le q\}$. This nonfatal published-dependency gap lies in the closure of `lem-holm-rejection-events-are-measurable`; it does not affect that item's use of the all-real threshold criterion.
- Blocker: none.

## Coverage note

The assigned carriers and the suppliers needed for the Holm derivations were checked, including the local proofs for the invoked measurability and subadditivity results. I did not re-audit every remote proof in the broad published foundations and measure-theory dependency closures. The pointwise p-value bound used by Bonferroni also follows directly from the null-valid p-value definition. No external source search was needed to resolve the arguments reviewed here.
