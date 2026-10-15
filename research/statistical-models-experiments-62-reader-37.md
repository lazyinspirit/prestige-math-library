# Step 3a reader report — batch 37

Run: `statistical-models-experiments-62`  
Role: reader  
Scope: batch `37`

## Inventory opened

- Task instructions: `CLAUDE.md`, `README.md`, `briefs/reader.md`.
- Assignment evidence: `research/statistical-models-experiments-62-batch-37.pages.json`, `research/statistical-models-experiments-62-batch-37.notes.md`, `research/statistical-models-experiments-62-batch-37.cross-batch-dependencies.json`, and `research/statistical-models-experiments-62-batch-37.proof-contracts.json`.
- Assigned pages: `library/statistical-models-and-experiments/detection-and-quantification-limits.md`; `library/statistical-models-and-experiments/detection-and-quantification-limits-examples.md`.
- Assigned items, read in local dependency order: `def-critical-detection-and-quantification-levels`; `lem-standard-normal-cdf-quantiles-and-symmetry`; `lem-normal-location-scale-mean-and-variance`; `thm-known-normal-blank-detection-and-quantification-limits`; `ex-detection-limit-assumptions-and-left-censoring`; `ex-known-blank-normal-detection-and-quantification-limits`; `ex-estimated-blank-variance-inflates-detection-limits`.
- Direct published suppliers opened for the statements, hypotheses, and interfaces used by the assigned items: `def-statistical-experiment`; `def-random-element-and-real-random-variable`; `def-randomized-test`; `def-test-size-and-power`; `def-moments-variance-and-covariance`; `def-expectation-of-a-nonnegative-or-integrable-random-variable`; `def-borel-sigma-algebra`; `cor-expectation-of-an-indicator-is-a-probability`; `lem-probability-measure-basic-identities`; `def-standard-normal-and-normal-laws`; `def-probability-measure`; `def-cumulative-distribution-function-of-a-random-variable`; `lem-normal-density-has-total-mass-one`; `thm-derivative-of-exponential`; `cor-integral-over-a-null-set-vanishes`; `thm-continuity-from-above-for-measures`; `thm-continuity-from-below-for-measures`; `thm-intermediate-value`; `thm-substitution-for-improper-integrals`; `thm-lebesgue-measure-of-a-box-of-every-kind`; `def-axiom-of-choice`; `def-countable-choice`; `lem-axiom-of-choice-implies-countable-choice`; `lem-gaussian-even-moment-bound-for-brownian-increments`; `thm-change-of-variables-for-expectation`; `cor-cauchy-schwarz-for-random-variables`; `cor-expectation-linearity-monotonicity-and-modulus-bound`; `thm-dominated-convergence`; `thm-substitution`; `def-measurable-function-between-measurable-spaces`; `lem-measurable-rejection-function-defines-randomized-test`.
- The run status was recomputed from `.autopilot/statistical-models-experiments-62`; it is active and batch 37 had no prior reader artifact. All listed external suppliers are currently published and are not assigned to another batch in this run.

## Review and evidence

The general definition distinguishes exact blank-tail calibration, a least positive concentration attaining a false-negative target, and a least positive concentration meeting a declared CV tolerance. It does not promise existence when the relevant threshold or least element is absent. The normal quantile proof establishes continuity, strict monotonicity, tail limits, absence of atoms, and symmetry from the density and measure suppliers. The moment lemma establishes integrability, mean zero and unit second moment for the standard normal, then transfers the mean and variance through the affine normal law. The main theorem verifies the measurable positive-decision rule and derives each limit under its stated hypotheses. The heteroscedastic example correctly solves the false-negative equality and CV inequality, including the no-finite-limit boundary cases, and uses the CDF probability for a left-censored report. The estimated-blank example explicitly assumes the additive normal variance model and positive baseline scale; its strict increase comparison is valid for the stated positive multipliers.

I checked the cited measurement-science sources at the relevant locators:

- [NIST SP 958, “Limits for Qualitative Detection and Quantitative Determination,” printed pp. 164–166 (PDF pp. 177–179)](https://nvlpubs.nist.gov/nistpubs/sp958-lide/html/164-166.html), Table I and its assumptions. The “Well-known blank” row reports rounded multipliers 1.64, 3.29, and 10 under `alpha = beta = 0.05`, `k_Q = 10`, and constant blank standard deviation. This supports the table values in the five-percent example, not the more precise `z_0.95 ≈ 1.64485` decimal that was removed.
- [Eurachem Guide, 3rd ed. (2025)](https://www.eurachem.org/images/stories/Guides/pdf/MV_guide_3rd_ed_V1_EN.pdf): §5.3.1 (printed p. 31) distinguishes critical value, LOD, and LOQ; §5.3.2 (printed pp. 31–33) states that the standard deviation used for LOD/LOQ must reflect averaging and blank correction, gives the `sqrt(1/n + 1/n_b)` adjustment when the same blank correction was used in validation, and says no additional adjustment is needed when intermediate-precision conditions already use different blanks; §5.3.4 (printed p. 34) describes the LOQ factor `k_Q` and relative standard deviation convention; §5.3.5.1 (printed p. 35) discusses day-to-day blank variation; Annex B (printed p. 64) explains the critical-value and false-negative calibration and the approximate 3.3 multiplier for `alpha = beta = 0.05`.

The exact formulas are established by the local proofs; the external sources document the measurement conventions and the rounded table entries. The cited sections do not justify treating every blank-estimation procedure as an independent Gaussian variance addition, and the authored example explicitly limits itself to that comparison model.

## Edit

Edited `items/ex-known-blank-normal-detection-and-quantification-limits.md`. The authored example claimed (z_{0.95}\approx1.64485), then used that unsupported numerical value to state rounded 1.645 and 3.29 multipliers. Its cited NIST table gives only the rounded “Well-known blank” row 1.64, 3.29, and 10. I removed the unsupported decimal calculation, retained the exact formulas (L_C=z_{0.95}\sigma_0), (L_D=2z_{0.95}\sigma_0), and (L_Q=10\sigma_0), and retained the NIST table’s independently sourced rounded row. The proof contract now records only the two exact substitution steps and cites the NIST table locator for its rounded source values. The item had no `verification.judge` record to remove.

Validation after the final item edit:

- `node tools/tsx-run.mjs tools/reflow.mts items/ex-known-blank-normal-detection-and-quantification-limits.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/ex-known-blank-normal-detection-and-quantification-limits.md` — pass.
- `node tools/proof-contract.mjs research/statistical-models-experiments-62-batch-37.proof-contracts.json --strict --items ex-known-blank-normal-detection-and-quantification-limits` — 0 errors, 0 warnings.
- Final `node tools/proof-layout.mjs items/ex-known-blank-normal-detection-and-quantification-limits.md` — 1 item, 2 steps, 0 defects.

No other assigned item or page prose required repair. No judge stamp was added.

## Page verdicts and remaining defects

| Page | Verdict |
|---|---|
| `detection-and-quantification-limits` | Sound. Its summary accurately limits the exact formulas to the stated normal model and flags dependence on the response law, blank correction, and censoring convention. |
| `detection-and-quantification-limits-examples` | Sound. The three examples match their explicit models; the B-page prose accurately summarizes the worked cases. |

Uneditable defects remaining: none. Blocker: none.

## Coverage note

All assigned pages and items and their direct published dependency interfaces were opened. The NIST PDF URL itself was too large for the browser fetch, so I used NIST’s official HTML rendering of the cited printed pages; the table and assumptions were accessible there. The relevant Eurachem sections and Annex B were opened directly in the full guide PDF.
