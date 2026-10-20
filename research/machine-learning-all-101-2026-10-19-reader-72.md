# Step 3a reader report — batch 72

Run: `machine-learning-all-101-2026-10-19`  
Role: reader (`reader-72`)  
Scope: batch `72` only

## Opened inventory

Assigned pages:

- `library/machine-learning/predictive-calibration-and-uncertainty-under-shift.md`
- `library/machine-learning/predictive-calibration-and-uncertainty-under-shift-examples.md`

Assigned items, reviewed in dependency order:

1. `items/alg-split-conformal-set-for-classification.md`
2. `items/def-top-label-calibration.md`
3. `items/alg-validation-temperature-scaling.md`
4. `items/def-binned-expected-calibration-error.md`
5. `items/thm-positive-temperature-scaling-preserves-argmax.md`
6. `items/ex-calibration-degradation-under-shift.md`

Current-run draft suppliers opened before their consumers:

- Batch 8: `def-probability-calibration`, `def-proper-scoring-rule`, and `thm-log-and-brier-strict-propriety`.
- Batch 10: `def-source-target-distributions-and-shift`.

Published direct and relevant transitive suppliers opened:

- Conformal and conditional-probability chain: `def-conformal-nonconformity-score-and-rank-pvalue`, `def-statistic-and-estimator`, `alg-split-conformal-prediction-set`, `lem-finite-order-statistic-and-rank-maps-are-measurable`, `def-independent-sigma-algebras-and-events`, `def-independent-families-of-event-classes`, `def-randomized-procedure-as-a-markov-kernel`, `thm-split-conformal-marginal-coverage`, `thm-conformal-rank-superuniformity-under-exchangeability`, `lem-permutation-equivariant-score-map-preserves-exchangeability`, `lem-regular-conditional-kernels-push-forward-under-measurable-random-maps`, `def-regular-conditional-distribution`, `def-measure-kernel-and-probability-kernel`, and `def-exchangeable-random-elements`.
- Calibration and analysis chain: `def-probability-measure`, `def-borel-sigma-algebra`, `def-natural-logarithm`, `def-real-exponential-function-and-e`, `def-measurable-function-between-measurable-spaces`, `cor-exponential-reciprocal-and-positivity`, `thm-exponential-is-strictly-increasing`, `thm-exponential-addition-formula`, `thm-logarithm-derivative-and-integral`, and `def-loss-function-and-risk`.

The complete relevant source passages were checked in Guo et al., *On Calibration of Modern Neural Networks*, §§2 and 4.2; Ovadia et al., *Can You Trust Your Model's Uncertainty?*, §3, §§4.1–4.4, and the takeaways; Lei et al., *Distribution-Free Predictive Inference for Regression*, §2.2, Theorem 2.2, and Appendix A.1; and Tibshirani, *Conformal Prediction*, §§1.2, 2, 2.1, and 2.3. The official Tibshirani PDF was downloaded after the web PDF parser failed; its relevant pages 2–9 were extracted and read locally.

## Review and edit

The split-classification procedure specifies the finite score rule, adjusted order statistic, `+infinity` branch, candidate scan, and optional shared independent uniform. The calibration definitions preserve the event-integral form, tie rule, fixed bin dependence, and distinction between ECE/MCE and proper scores. The positive-temperature theorem proves normalization, finite validation losses, finite-grid minimizer existence, and equality of the full maximizing-index sets. Its proof steps follow from the stated positivity, monotonicity, and finite-set hypotheses.

The four finite examples check out: the overconfident constant forecast has ECE/MCE `1/10`; validation NLL selects `T=2` and changes one-bin ECE from `3/20` to `0`; the rare subgroup example has marginal coverage `91/100` and rare-feature coverage `1/10`; and the clean-to-corrupted source/target example has target coverage zero because the calibration/test pair is not exchangeable. The example does not claim feature-conditional or shifted-law conformal coverage. The cross-batch calibration and source/target interfaces match the local uses. No diagram is present or needed for these finite computations.

I clarified the empirical OOD remark in `items/ex-calibration-degradation-under-shift.md` (Remarks, current line 152). Ovadia et al. §3, p. 3 states that fully OOD inputs have no ground-truth class among the model's labels and describes prediction-confidence and entropy histograms; §4.3, p. 7 also reports confidence-versus-accuracy curves for mixtures of in-distribution and OOD text examples. The revised sentence records both facts and no longer implies that the paper reports no accuracy plots involving OOD examples. The proof derivations and Facts & Assumptions were unchanged, so no proof-contract row was affected; the item's `verification` block had no `verification.judge` record to remove.

For the edited item, reflow passed, precheck passed (`1` checked, `0` failing), and the final proof-layout check passed (`1` item, `5` steps, `0` defects). No other assigned item was edited.

## Uneditable dependency defects

Each defect below is the same editorial defect: a hyperlink occurs inside a complete `## Definition` or `## Statement`, instead of after that section in an immediately following references section. These subjects are published and outside batch 72's write scope. All are `ill-formed`, nonfatal statement-layout defects; the specified consumer is an assigned item whose dependency closure reaches the subject.

- `def-conformal-nonconformity-score-and-rank-pvalue`, `## Definition`, lines 34–72 (links at 39 and 60); consumer: `alg-split-conformal-set-for-classification`.
- `def-statistic-and-estimator`, `## Definition`, lines 33–41 (links at 34, 38, and 39); consumer: `alg-split-conformal-set-for-classification`.
- `alg-split-conformal-prediction-set`, `## Definition`, lines 29–47 (links at 42 and 47); consumer: `alg-split-conformal-set-for-classification`.
- `def-independent-sigma-algebras-and-events`, `## Definition`, lines 30–32 (link at 32); consumer: `alg-split-conformal-set-for-classification`.
- `def-randomized-procedure-as-a-markov-kernel`, `## Definition`, lines 35–49 (links at 36, 39, and 42); consumer: `alg-split-conformal-set-for-classification`.
- `def-probability-measure`, `## Definition`, line 31; consumer: `def-top-label-calibration`.
- `def-borel-sigma-algebra`, `## Definition`, lines 33–39 (links at 33 and 39); consumer: `def-top-label-calibration`.
- `def-natural-logarithm`, `## Definition`, line 30; consumer: `alg-validation-temperature-scaling`.
- `def-real-exponential-function-and-e`, `## Definition`, line 31; consumer: `alg-validation-temperature-scaling`.
- `def-measurable-function-between-measurable-spaces`, `## Definition`, lines 28–31 (link at 29); consumer: `alg-validation-temperature-scaling`.
- `def-loss-function-and-risk`, `## Definition`, lines 35–49 (links at 36, 38, 42, 46, and 47); consumer: `alg-validation-temperature-scaling`.
- `def-measure-kernel-and-probability-kernel`, `## Definition`, line 27; consumer: `ex-calibration-degradation-under-shift`.
- `def-regular-conditional-distribution`, `## Definition`, lines 27–32 (links at 30); consumer: `ex-calibration-degradation-under-shift`.
- `def-exchangeable-random-elements`, `## Definition`, lines 34–44 (links at 37 and 39); consumer: `ex-calibration-degradation-under-shift`.
- `thm-split-conformal-marginal-coverage`, `## Statement`, lines 34–49 (links at 38 and 43); consumer: `ex-calibration-degradation-under-shift`.
- `lem-permutation-equivariant-score-map-preserves-exchangeability`, `## Statement`, lines 30–34 (link at 33); consumer: `ex-calibration-degradation-under-shift`.

The links identify real dependencies and should be moved, not deleted. No mathematical defect was found in these opened supplier claims that affects batch 72's uses.

## Page verdicts

- `predictive-calibration-and-uncertainty-under-shift`: no page prose defect. Its compact-v1 frontmatter is body-free, has the five assigned items, and retains the three declared prerequisites.
- `predictive-calibration-and-uncertainty-under-shift-examples`: no page prose defect. Its compact-v1 frontmatter is body-free, has the assigned example, and requires the A page.

## Blocker

The batch review itself has no blocker. The latest live run status still records `collect-57` as a 3a-collect failure; it is outside batch 72. No gate, judge, or publication action was taken.
