# Step 3a reader report — batch 11

Run: `statistical-models-experiments-62`  
Batch: `11`  
Role: `reader-11`

## Opened inventory

Batch scope was taken from `research/statistical-models-experiments-62-batch-11.pages.json` and reviewed independently of its scaffold and proof-contract verdicts.

| Carrier | Review |
|---|---|
| `library/statistical-models-and-experiments/cluster-and-two-stage-sampling.md` (A page) | Opened; summary checked against its five assigned items. |
| `library/statistical-models-and-experiments/cluster-and-two-stage-sampling-examples.md` (B page) | Opened; summary checked against its two examples. |
| `items/def-cluster-sampling-design-and-cluster-totals.md` | Opened; definition and use of the one-stage design checked. |
| `items/def-two-stage-cluster-sampling-and-expansion-estimator.md` | Opened; product law, inclusion probabilities, and expansion-estimator domains checked. |
| `items/thm-srswor-cluster-total-estimator-unbiased-and-variance.md` | Opened; inclusion counts, indicator covariance, centering identity, and endpoint cases checked. |
| `items/thm-equal-cluster-size-design-effect.md` | Opened; covariance model, variance comparison, range of `rho`, caveats, and cited source remark checked. |
| `items/thm-two-stage-expansion-total-unbiasedness-and-variance.md` | Opened; conditional-mean construction, finite sigma-algebra, conditional-variance decomposition, stage covariance sums, and positivity conditions checked. |
| `items/ex-two-stage-village-field-subsampling.md` | Opened; all twelve estimates, mean, and squared-deviation total checked directly. |
| `items/cex-average-cluster-size-does-not-determine-unequal-size-design-effect.md` | Opened; finite-population variances and the model-averaged design-effect ratio checked algebraically. |
| `research/statistical-models-experiments-62-batch-11.proof-contracts.json` | Opened the seven scoped contracts and compared their cited facts and derivations with current item text. |

Direct dependencies opened for the assigned items: `def-finite-population-and-sampling-design` (draft, current run); `def-moments-variance-and-covariance`; `thm-covariance-bilinearity-and-symmetry`; `thm-variance-of-a-finite-sum`; `def-sigma-algebra`; `def-conditional-expectation-given-a-sigma-algebra`; `def-axiom-of-choice`; `def-conditional-expectation-as-an-ae-class`; `def-conditional-variance`; and `cor-conditional-variance-decomposition`. To check the latter's cited conditional-variance steps, I also opened `lem-conditional-variance-is-well-defined-and-has-the-second-moment-formula` and `thm-basic-algebra-and-order-properties-of-conditional-expectation`.

The source-sensitive passage was checked against [Shalabh, *Sampling Theory*, Chapter 9, PDF p. 7](https://home.iitk.ac.in/~shalab/sampling/chapter9-sampling-cluster-sampling.pdf). That page sets relative efficiency to `E=1` when `rho=0` and then glosses this as “there is no error.” The page context is equality of efficiency with element SRS, not zero sampling variance.

## Review and edit

All assigned definitions and results are mathematically supported by their stated hypotheses and opened direct dependencies. The SRSWOR theorem's formulas cover `m=1` and `m=M`; the two-stage variance formula uses only positive first-order inclusion probabilities and includes no division by pair-inclusion probabilities. The equal-size design-effect proof compares the stated superpopulation variance with the independent element-SRS variance, both positive under `sigma^2>0`. The example's exact mean is `36` and variance is `368/3`. The unequal-size counterexample's ratio is `(5/2)(2M-1)/(2M-5/2)`, which is `199/79` at `M=100` and tends to `5/2`.

One remark in `items/thm-equal-cluster-size-design-effect.md` called the source's unqualified phrase “there is no error” false without stating its relative-efficiency context. I clarified that it means no efficiency loss relative to element SRS from clustering, not zero sampling variance; the item still states that both variances equal `sigma^2/(km_c)>0` when `rho=0`.

This clarification did not change the theorem statement or proof. The batch proof contract was inspected and no contract field records this source-note remark; its proof citations and derivations remain unchanged. The item has no `verification.judge` record to remove. Reflow and precheck were run for the changed item and both passed. The required final layout check also passed:

```text
node tools/tsx-run.mjs tools/reflow.mts items/thm-equal-cluster-size-design-effect.md
reflowed items/thm-equal-cluster-size-design-effect.md

node tools/tsx-run.mjs tools/precheck.mts items/thm-equal-cluster-size-design-effect.md
PASS items/thm-equal-cluster-size-design-effect.md (direct)
1 checked, 0 failing — all clean

node tools/proof-layout.mjs items/thm-equal-cluster-size-design-effect.md
proof-layout: 1 items, 4 steps, 0 defects
```

## Page verdicts

- `cluster-and-two-stage-sampling` (A): **pass after the remark clarification**. Its summary accurately distinguishes design-based two-stage variance decomposition from the no-FPC equal-size superpopulation comparison and carries the Axiom of Choice caveat.
- `cluster-and-two-stage-sampling-examples` (B): **pass**. Its summary accurately describes the direct twelve-outcome calculation and the unequal-size counterexample.

## Unedited defects and blockers

No confirmed defect remains in the assigned items or pages. No finding is being routed. No blocker remains for this batch.

Coverage limitation: I reviewed the assigned carriers, their direct dependencies, and the two additional published suppliers cited in the conditional-variance decomposition proof. I did not independently re-audit the full transitive measure-theory dependency closure beneath those published suppliers. No defect was observed in the opened direct supplier statements or proofs; this report does not claim complete transitive supplier coverage.
