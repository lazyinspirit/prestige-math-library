# Step 3a reader report — batch 12

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Result: no confirmed defects; no edits.

## Opened inventory

- `research/machine-learning-all-101-2026-10-19-batch-12.pages.json` and the batch 12 proof-contract record were consulted as scope and evidence, not as mathematical verdicts.
- Assigned A page: `library/machine-learning/fairness-criteria-and-impossibility-boundaries.md`.
- Assigned B page: `library/machine-learning/fairness-criteria-and-impossibility-boundaries-examples.md`.
- Dependency order: `items/def-probability-calibration.md` (the relevant external batch supplier); `items/def-group-risk-score-and-calibration.md`; `items/def-positive-and-negative-score-balance.md`; `items/lem-score-means-as-threshold-rate-areas.md`; `items/thm-calibration-and-balance-incompatibility-for-risk-scores.md`; `items/ex-equal-base-rates-admit-constant-calibrated-score.md`; `items/ex-perfect-risk-prediction-with-unequal-base-rates.md`; `items/ex-threshold-rates-vary-under-score-balance.md`.
- No earlier batch 12 reader report was present. No TikZ/tikzcd or other diagram was present in the assigned pages or items.

## Review and evidence

- The finite group model and binwise calibration definition match Kleinberg, Mullainathan, and Raghavan, *Inherent Trade-Offs in the Fair Determination of Risk Scores*, §§1.1–1.2 and §2 (https://arxiv.org/pdf/1609.05807v2). The source defines the same group-conditioned feature proportions, shared feature-based randomized bin assignment, per-bin calibration, and class-conditional score means. Its §2 proof derives equality of total score and positive mass from calibration, then the equal-base-rate/perfect-prediction alternative. The assigned theorem gives the nondegenerate conditional populations needed for all four class means and proves the conclusion directly.
- The theorem proof was checked step by step. Summing the bin identities gives `E_t[S]=rho_t`; partitioning by outcome gives `rho_t(1-alpha)=(1-rho_t)beta`. If `alpha<1`, positivity of `1-rho_t` yields equal odds and hence equal base rates. If `alpha=1`, then `beta=0`; finite support in `[0,1]` forces score 1 on positives and 0 on negatives. A feature type with `0<p_sigma<1` would induce the same score distribution for both outcomes under the common outcome-independent assignment, contradicting those two concentrations. Thus the assignment is perfect and every feature type used by either group has endpoint outcome probability. No unstated prerequisite is needed.
- The threshold-area lemma follows from the finite expansion `TPR_t(u)=sum_j w_j^+ 1_[0,s_j](u)` and its negative-class analogue. Integrating each indicator gives its score, so both Riemann-integral identities and their domains are correct.
- The three examples were recomputed from their finite distributions. The constant-score example has base rate and both conditional means `1/2`; its calibration identity holds. The endpoint-score example has base rates `1/4` and `3/4`, calibration in both bins, and `S=Y`. In the threshold-rate example, both groups have base rate `1/2`, `E[S]=1/2`, and `E[S^2]=17/50`, so calibration gives positive and negative conditional means `17/25` and `8/25`. At thresholds `1/2` and `9/10`, the displayed TPR/FPR values recompute respectively to `(4/5,1/5)` and `(151/160,79/160)` for the two groups at `1/2`, and `(0,0)` and `(81/160,9/160)` at `9/10`.
- The cited Stanford *Applied Statistics: From Data to Decisions* section “Important Result: impossibility of joint fairness” distinguishes the real-valued KMR score theorem from the binary-classifier theorem and states the positive- and negative-class mean-score criteria (https://stanford-mse-125.github.io/book/lec20-fairness.html, section around the theorem and its discussion). The source supports the assigned references and their caution against conflating the score result with the binary theorem.
- The relevant calibration context in Vaicenavicius et al., “Evaluating Model Calibration in Classification,” PMLR 89 (2019), §§2, 3.1–3.2, was checked (https://proceedings.mlr.press/v89/vaicenavicius19a/vaicenavicius19a.pdf). It defines reliability by equality of the conditional target law and forecast, identifies the calibration function, and defines expected miscalibration from a discrepancy; the assigned `def-probability-calibration` comparison correctly distinguishes full reliability from the aggregate identity obtained when duplicate score bins are grouped together.
- Assigned statements and example descriptions are uninterrupted by hyperlinks; references are in the immediately following `*-references` sections. Both pages contain YAML frontmatter only and retain `page_layout: compact-v1`.

## Edits and unresolved defects

- Edits: none. No item repair was warranted, so no contract update, judge-record removal, reflow, precheck, or proof-layout run was required.
- Defects not editable: none found. No proposed withdrawal is outstanding.

## Page verdicts

- `fairness-criteria-and-impossibility-boundaries`: pass. Assigned inventory matches the manifest; page has no Markdown summary body.
- `fairness-criteria-and-impossibility-boundaries-examples`: pass. Assigned examples match the manifest; page has no Markdown summary body.

## Blocker

None.

## Coverage note

All seven assigned items, both assigned pages, the batch manifest, and the relevant external supplier were reviewed. The four deeper prerequisites listed by `def-probability-calibration` were not independently opened: no assigned proof depends on them, and that supplier is used only to explain the reliability terminology in a definition reference. The cited source definitions and all assigned mathematical claims were checked directly.
