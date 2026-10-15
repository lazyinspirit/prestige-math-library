# Step 3a reader report — batch 49

Run: `statistical-models-experiments-62`  
Role: reader  
Batch: `49`

## Assignment and opened inventory

The batch manifest assigns the A page `spatial-point-process-summaries-and-palm-laws`, its B/examples companion `spatial-point-process-summaries-and-palm-laws-examples`, and 20 items. Both page files and every assigned item were opened. Items were reviewed in the manifest's dependency order.

### Pages

- `library/statistical-models-and-experiments/spatial-point-process-summaries-and-palm-laws.md` — A page; summary and item inventory reviewed.
- `library/statistical-models-and-experiments/spatial-point-process-summaries-and-palm-laws-examples.md` — B page; summary and example inventory reviewed.

### Assigned items, dependency order

- Level 0: `lem-convex-windows-admit-rectangle-approximations-and-are-folner`; `lem-translation-invariant-locally-finite-borel-measure-on-rd`; `thm-choice-free-l1-mean-limit-for-stationary-sequences`.
- Levels 1–2: `def-spatial-recentering-action`; `def-stationary-point-process-and-intensity`; `lem-joint-measurability-of-spatial-recentering`.
- Level 3: `def-full-palm-distribution`; `def-second-factorial-and-reduced-moment-measures`; `thm-poisson-mecke-identity`; `thm-stationary-point-process-intensity-measure-is-rho-lebesgue`.
- Level 4: `thm-refined-campbell-formula-and-palm-law-existence`; `thm-second-factorial-and-reduced-measures-are-locally-finite`; `thm-stationary-point-process-counts-converge-to-spatial-intensity`.
- Level 5: `thm-reduced-second-factorial-moment-palm-identity`.
- Level 6: `def-pair-correlation-and-ripleys-k-function`.
- Level 7: `alg-border-corrected-ripleys-k-estimator`; `thm-homogeneous-poisson-ripleys-k-is-ball-volume`; `thm-pair-correlation-integrates-to-ripleys-k`; `ex-uniformly-translated-lattice-palm-and-multiplicities`.
- Level 8: `ex-window-edge-border-estimator`.

### Direct dependencies opened

Every unique direct supplier in the batch manifest was opened at the statement and proof or definition needed for the consumer checks. This included the following published suppliers:

- Measure and geometry: `def-borel-sigma-algebra`; `def-countable-choice`; `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`; `def-measure`; `def-nonnegative-extended-series`; `thm-continuity-from-below-for-measures`; `thm-invertible-linear-images-scale-lebesgue-measure-by-a-constant`; `thm-lebesgue-measure-is-a-complete-measure`; `thm-lebesgue-measure-is-the-unique-normalised-translation-invariant-borel-measure`; `thm-lebesgue-measure-of-a-box-of-every-kind`; `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`.
- Probability and measurable processes: `def-axiom-of-choice`; `def-conditional-expectation-given-a-sigma-algebra`; `def-dirac-measure`; `def-expectation-of-a-nonnegative-or-integrable-random-variable`; `def-law-or-distribution-of-a-random-element`; `def-measure-kernel-and-probability-kernel`; `def-measure-preserving-transformation-and-system`; `def-product-sigma-algebra-and-finite-product-sigma-algebras`; `def-stationary-process-and-canonical-shift`; `lem-law-of-a-random-element-is-a-probability-measure`; `prop-dirac-measure-is-a-probability-measure`; `thm-dominated-convergence`; `thm-dynkin-pi-lambda`; `thm-measurability-of-integration-against-a-kernel`; `thm-measure-uniqueness-on-a-sigma-finite-pi-system`; `thm-monotone-convergence-for-the-integral`; `thm-nonnegative-weighted-sums-of-measures`; `thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable`; `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`; `thm-tonelli-theorem-for-sigma-finite-product-spaces`.
- Point process and Poisson suppliers from current-run batch 48: `def-poisson-and-cox-point-process`; `def-random-measure-and-locally-finite-point-process`; `def-scalar-poisson-count-law`; `lem-deletion-of-one-point-is-measurable`; `lem-mean-measure-and-integrals-of-a-random-point-process`; `lem-poisson-count-law-normalization-and-moments`.
- Other direct measure suppliers: `thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality`.

The batch-48 suppliers were treated as independent current-run dependencies, not as assigned carriers. Their relevant statements and arguments provide the evaluation sigma-algebra and occurrence conventions, expected-measure properties, Poisson finite-count law and moments, and one-occurrence deletion used by batch 49. No defect was confirmed in those supplier claims.

## Independent mathematical review

The reviewed Palm construction, refined Campbell identity, second factorial measures, reduced Palm identity, pair-correlation definition, homogeneous Poisson K calculation, and estimator example preserve the stated domains and multiplicity conventions. The spatial count theorem's limit agrees with the full translation-invariant sigma-algebra and does not assert an almost-sure limit or a rate. The border procedure is a finite-window definition and makes no unbiasedness or asymptotic claim. The two page summaries match the assigned content.

I checked the cited primary-source sections that bear on the specialized claims:

- Last and Penrose, *Lectures on the Poisson Process* (2017 author-hosted PDF): Theorem 8.14 states the L1 spatial mean-ergodic limit for dilates of a compact convex window (PDF pp. 89–92; printed pp. 77–80); Theorem B.11 gives L1 Cesaro convergence for integrable stationary sequences (PDF pp. 276–278; printed pp. 264–266); Theorem 9.1 gives the refined Campbell identity and its Palm-law construction (PDF pp. 94–96; printed pp. 82–84); Theorem 4.1 states the Mecke equation, and the proof of Theorem 4.4 gives the mixed-binomial finite-intensity calculation and independent-cell extension (PDF pp. 39–44; printed pp. 27–32); Proposition 8.7 treats the reduced second factorial moment measure and local square-integrability (PDF pp. 83–84; printed pp. 71–72). [Source](https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf)
- Baddeley, *Spatial Point Processes and their Applications*: The stationary reduced second moment measure and density relation appear in Lecture 2, §§2.4–2.5 (PDF pp. 35–38); the randomly translated grid example is Example 2.15 (PDF p. 37); the border estimator formula is equation (18) in §2.6 (PDF pp. 39–40); the Poisson Palm law as the process plus a fixed point is Example 3.3 (PDF pp. 45–46), with the Campbell–Mecke formula in Theorem 3.2 (PDF pp. 48–49). These are corroborative references; the assigned items contain local arguments. [Source](https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf)

## Repairs made

All repairs below are in assigned, in-flight batch-49 items. They correct proof references or make a choice-free construction explicit; no theorem statement was changed.

- `items/lem-convex-windows-admit-rectangle-approximations-and-are-folner.md:68`: the final step referred to nonexistent step 3.2. It now cites steps 3.1, 4.1, 5.1, and 6.1, which respectively establish positive finite volume, rectangle approximation, translation continuity, and the dilation boundary ratio.
- `items/thm-choice-free-l1-mean-limit-for-stationary-sequences.md:71`: the truncation argument used a countable family of L1 limits without specifying their representatives while asserting choice-freeness. Each limit is now explicitly defined as the measurable limsup of its averages, and the bounded case supplies the almost-sure and L1 convergence to that canonical version. The final signed-case cross-reference at line 75 was also corrected from the malformed range “8.1–4.2” to steps 8.1–9.1.
- `items/thm-second-factorial-and-reduced-measures-are-locally-finite.md:76`: the final proof summary referred to nonexistent step 2.2. It now refers to steps 1.1–4.1, covering construction, measurability, and local finiteness.
- `research/statistical-models-experiments-62-batch-49.proof-contracts.json`: the nonempty-choice boundary evidence for `thm-choice-free-l1-mean-limit-for-stationary-sequences` now records the canonical limsup construction.

No stale `verification.judge` record was present on the edited items. Reflow reported all three items unchanged. Precheck passed for each edited item. The required final `node tools/proof-layout.mjs` run, batched over the three changed item paths, reported 3 items, 22 steps, and 0 defects.

## Defects not repaired

None confirmed in assigned items, either assigned page, or the direct dependencies required to verify this batch. No finding remains for a published dependency or another in-run batch.

## Page verdicts

| Page | Verdict | Evidence |
|---|---|---|
| `spatial-point-process-summaries-and-palm-laws` | Pass after the proof-reference repairs above. | The summary matches the 18 assigned A-page items; the spatial limit, Palm construction, factorial measures, K definition, and finite-data border procedure are supported by the reviewed arguments. |
| `spatial-point-process-summaries-and-palm-laws-examples` | Pass. | The summary matches both examples; the translated-lattice atom and the window-erosion calculation are explicitly verified. |

## Blockers and coverage note

No blocker. I opened both assigned pages, all 20 assigned items, every unique direct supplier in the batch manifest, and the cited primary-source passages listed above. I did not recursively re-audit the entire dependency trees of general measure-theory suppliers; their exact invoked statements and hypotheses were checked against the batch arguments.
