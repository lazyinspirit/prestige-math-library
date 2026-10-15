# Step 3a reader report — batch 1

Run: statistical-models-experiments-62  
Batch: 1  
Reader: reader-1

## Opened inventory

Assigned pages:

- scientific-statistical-model-contracts (A), [library/statistical-models-and-experiments/scientific-statistical-model-contracts.md](../library/statistical-models-and-experiments/scientific-statistical-model-contracts.md)
- scientific-statistical-model-contracts-examples (B), [library/statistical-models-and-experiments/scientific-statistical-model-contracts-examples.md](../library/statistical-models-and-experiments/scientific-statistical-model-contracts-examples.md)

Assigned items:

- def-scientific-statistical-model-contract
- ex-technical-biological-units-and-repeated-visits
- ex-unvalidated-calibration-offset-is-not-identifiable

Published suppliers opened to check the assigned definitions and constructions:

- def-algebra-of-subsets, def-sigma-algebra, def-measurable-space
- def-extended-reals, def-nonnegative-extended-series, def-measure, def-measure-space, def-probability-measure
- def-measurable-function-between-measurable-spaces
- def-random-element-and-real-random-variable, def-law-or-distribution-of-a-random-element, lem-law-of-a-random-element-is-a-probability-measure
- def-statistical-experiment, def-parametric-statistical-model, def-estimand-on-a-statistical-model, def-observational-equivalence, def-identifiability-of-an-estimand, def-statistic-and-estimator
- def-dirac-measure, prop-dirac-measure-is-a-probability-measure

Supporting artifacts opened: research/statistical-models-experiments-62-batch-1.pages.json, research/statistical-models-experiments-62-batch-1.coverage.json, and research/statistical-models-experiments-62-batch-1.proof-contracts.json. These were used as navigation and contract evidence, not as verdicts.

The two bibliography locators in the assigned definition were checked in the PDFs. Wickham's Statistics: Lecture Three — Linear Models, PDF pp. 2–3, describes response and predictor data layout and gives simple-regression and ANOVA examples ([source](https://www.stat.berkeley.edu/~rice/Stat230A/statiii.pdf)). Li's STA610 notes, PDF p. 3, §2.1, describe nested units, including repeated measurements within persons ([source](https://stat.duke.edu/~fl35/teaching/610-26F/Lecture1_ProblemOfCorrelatedData.pdf)). These are contextual sources; the assigned proofs rely on the local definitions and elementary constructions.

## Review and edits

### def-scientific-statistical-model-contract

Verdict: sound. The fields preserve the distinction between the mathematical consequences of a specified model and empirical or physical adequacy. The stochastic mechanism is correctly specified as a probability kernel with measurability in the state variable, and the text avoids asserting that a conditional version exists for an arbitrary joint law. No edit was needed.

### ex-technical-biological-units-and-repeated-visits

Verdict: the finite randomization construction and finite-schedule estimand are sound. For Ω=𝒵, π(B)=|B|/70 is countably additive because only finitely many disjoint sets can be nonempty. The response record map is measurable into the full-power-set observation space, and its pushforward is a probability law. Its image is a measurable support set of probability one.

Edits:

- Named the participant-level analysis unit and made the row/index convention explicit.
- Marked Z and the response vector as random/recorded and u,d as fixed/latent.
- Added the measurable assignment and response extractors. Their measurability follows directly because the observation sigma-algebra is the full power set.
- Replaced the claim that the assignment law is “design-controlled by the specification.” The contract definition requires a protocol-imposed design checked against implementation records. The revised remark states that π is stipulated in this mathematical example, and describes the records needed for an empirical design-controlled classification. It also classifies the measurement rule as empirically assessable through calibration or validation measurements, while stating that none are supplied.
- Updated the proof-contract derivations for steps 1.2 and 2.1 to match the current item.

The evidence for these clarifications is the assigned contract definition's unit, quantity-status, measurable-map, and adequacy-assumption fields. No verification.judge record was present to remove.

### ex-unvalidated-calibration-offset-is-not-identifiable

Verdict: the witness is valid for the unrestricted parameter set ℝ²: (q,b) and (q+1,b−1) have the same Dirac law and different target values. The title and main claim are accurate.

Edit: qualified the remark that added calibration data or a restriction on b changes the conclusion. It now states the sufficient cases (calibration identifies b, or the model fixes known b=b₀) and notes that arbitrary extra data or nontrivial restrictions may still leave q unidentified. No proof-contract derivation changed. No verification.judge record was present to remove.

## Page verdicts

- scientific-statistical-model-contracts (A): sound summary; it accurately describes the record fields and separates model implications from empirical adequacy. No page edit.
- scientific-statistical-model-contracts-examples (B): sound summary; both examples support the stated claims about distinct participant/visit/assay indices, the specified law, and the calibration-offset nonidentifiability example. No page prose edit.

## Validation

- Reflow: both edited example items reflowed successfully.
- Precheck: both edited example items passed (1 checked, 0 failing each).
- Proof layout: node tools/proof-layout.mjs items/ex-technical-biological-units-and-repeated-visits.md items/ex-unvalidated-calibration-offset-is-not-identifiable.md reported 2 items, 7 steps, 0 defects.
- The updated batch proof-contract JSON parsed successfully.

## Uneditable defects and blockers

No defects remain that are outside this assignment's edit scope. No blocker remains.

## Coverage limitation

The assigned pages and items were all opened, and the supplier statements used in the assigned arguments were checked. The initial lookup did not maintain strict supplier-first order in every transitive branch: def-statistical-experiment was opened before its suppliers, def-sigma-algebra before def-algebra-of-subsets, and def-nonnegative-extended-series before its own suppliers. I subsequently read the relevant supplier definitions, but did not audit unrelated foundational subtrees (including the recursion/completeness prerequisites of the nonnegative-series definition or the Borel-specific branch of the random-element definition). The assigned constructions use only finite counting, full-power-set measurability, and the stated pushforward/Dirac facts; no conclusion in the assigned items depends on those unreviewed branches.
