# Step 3a reader report — batch 54

Run: `statistical-models-experiments-62`  
Batch: `54`  
Role: reader

## Opened inventory

Assigned pages:

- `library/statistical-models-and-experiments/benjamini-hochberg-independent-fdr-control.md`
- `library/statistical-models-and-experiments/benjamini-hochberg-independent-fdr-control-examples.md`

Assigned items, reviewed in supplier order:

- `items/def-false-discovery-rate-and-familywise-error-rate.md`
- `items/alg-benjamini-hochberg-step-up-procedure.md`
- `items/lem-benjamini-hochberg-leave-one-out-identity.md`
- `items/thm-benjamini-hochberg-independent-fdr.md`
- `items/ex-benjamini-hochberg-fdr-versus-fwer.md`

The batch proof contract was opened at `research/statistical-models-experiments-62-batch-54.proof-contracts.json`.

Opened dependency items:

- Definitions: `def-probability-measure`, `def-expectation-of-a-nonnegative-or-integrable-random-variable`, `def-measurable-function-between-measurable-spaces`, `def-borel-sigma-algebra`, `def-independent-random-elements`, `def-p-value`, `def-statistical-experiment`, `def-statistic-and-estimator`, `def-random-element-and-real-random-variable`, `def-independent-sigma-algebras-and-events`, `def-integrable-real-and-complex-functions-and-their-integrals`, and `def-independent-families-of-event-classes`.
- Results: `cor-expectation-of-an-indicator-is-probability`, `cor-expectation-linearity-monotonicity-and-modulus-bound`, `thm-grouping-independent-sigma-algebras`, `thm-independent-random-elements-have-product-joint-law`, `thm-pi-system-criterion-for-independent-sigma-algebras`, `thm-rectangle-criterion-for-independent-random-elements`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, and `thm-measure-uniqueness-on-a-sigma-finite-pi-system`.

## Review and repairs

The BH algorithm correctly selects the largest rank satisfying the step-up threshold, including the empty-set case and its deterministic tie order. The leave-one-out definition and proof cover `m=1`, ties, endpoint values, and the pointwise identity. The FDR definition correctly fixes the true-null set for the specified law.

I repaired two proof-presentation gaps in assigned items:

1. In `thm-benjamini-hochberg-independent-fdr`, the exact-uniformity condition used `p_i(X)` without introducing a data random element, although the experiment supplies laws on `\mathcal X`. The statement now expresses the event directly on the sample space. The proof explicitly works on `(\mathcal X,\mathcal A,P_\theta)`, identifies `P_i` with `p_i`, derives rank-event measurability and the rejected-set threshold characterization from the algorithm, and justifies integrability of the summands before applying expectation linearity. This removes the reliance on a rejection-set characterization that the leave-one-out lemma proved internally but did not state. I updated the corresponding derivation entries and the example's quoted theorem statement in the batch proof contract. No `verification.judge` record was present to remove.

2. In `ex-benjamini-hochberg-fdr-versus-fwer`, Step 3.1 concluded `FDR=FWER` under the global null from pointwise equality of the FDP and an indicator, without evaluating the indicator's expectation. The step now displays the simple-function integral that gives the required probability. I updated that derivation in the batch proof contract. No `verification.judge` record was present to remove.

The exact FDR identity is sound under the stated exact-uniformity and mutual-independence assumptions. Benjamini and Hochberg's original Theorem 1 gives the BH procedure and the control bound in §3.1 (print pp. 293–294); its Appendix A proves a bound. Benjamini and Yekutieli, §5, Theorem 5.1 (print p. 1181), gives the exact `m_0 q/m` identity for independent continuous test statistics, matching the theorem's exact-uniform true-null case. The locally authored leave-one-out proof also establishes the identity directly. The cited Stanford lecture, pp. 28–29 and 32–36, states the step-up rule and supplies the leave-one-out FDR argument. The links checked were [Benjamini–Hochberg (1995)](https://www.dcscience.net/Benjamini-Hochberg-1995-FDR.pdf), [Benjamini–Yekutieli (2001)](https://www.math.tau.ac.il/~yekutiel/papers/dep_annals.pdf), and [Stanford STATS 200 Lecture 11](https://web.stanford.edu/class/archive/stats/stats200/stats200.1172/Lecture11.pdf). The BH URL recorded in the item timed out; the accessible copy above is the same paper.

## Validation

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-benjamini-hochberg-independent-fdr.md` — passed.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-benjamini-hochberg-independent-fdr.md` — passed.
- `node tools/tsx-run.mjs tools/reflow.mts items/ex-benjamini-hochberg-fdr-versus-fwer.md` — passed.
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-benjamini-hochberg-fdr-versus-fwer.md` — passed.
- `node tools/proof-layout.mjs items/thm-benjamini-hochberg-independent-fdr.md items/ex-benjamini-hochberg-fdr-versus-fwer.md` — `2 items, 7 steps, 0 defects`.

## Page verdicts

- `benjamini-hochberg-independent-fdr-control` — **Pass.** The summary accurately describes the finite BH step-up rule and the exact-uniform independent FDR result. Its caveat that dependent tests and discrete superuniform extensions need separate arguments is correct.
- `benjamini-hochberg-independent-fdr-control-examples` — **Pass.** The two-test calculation gives `FDR=1/4` and `FWER=1/2`; its global-null comparison follows from `V=R` and the indicator integral shown in the example.

## Uneditable defects and blockers

None found. No defect remains in an out-of-scope or published dependency. No blocker.

## Coverage note

All assigned pages, items, their direct item dependencies, and the dependency results needed for the reviewed inferences were opened. During the initial pass, the two expectation corollaries were opened after the assigned theorem; I reviewed both before evaluating the theorem's expectation steps. The batch's original BH PDF URL timed out, so I checked an accessible copy of that same paper and the cited BY paper for the exact-equality statement.
