# Step 3a reader report — batch 56

Run: `statistical-models-experiments-62`  
Role: reader  
Date: 2026-10-15

## Opened inventory

### Assigned pages

- `library/statistical-models-and-experiments/polyhedral-selective-inference.md` (A page)
- `library/statistical-models-and-experiments/polyhedral-selective-inference-examples.md` (B page)

### Assigned items, reviewed in dependency-level order

- Level 0: `def-polyhedral-selection-event-and-contrast-interval`, `lem-standard-normal-cdf-is-continuous-and-strictly-increasing`, `def-exact-selective-confidence-set-for-a-functional`.
- Level 1: `def-polyhedral-selective-normal-pivot`, `lem-polyhedral-event-restricts-contrast-to-interval`, `thm-gaussian-contrast-independent-of-orthogonal-residual`.
- Level 2: `thm-truncated-normal-selective-pivot-is-conditionally-uniform`.
- Level 3: `cor-exact-polyhedral-selective-tests-and-confidence-sets`.
- Level 4: `ex-selective-inference-after-choosing-the-larger-of-two-means`.

### External item dependencies opened

`def-axiom-of-choice`, `def-orthogonal-projection`, `def-statistical-experiment`, `def-confidence-set-and-coverage`, `thm-derivative-of-exponential`, `thm-extreme-value-r`, `thm-continuity-from-below-for-measures`, `thm-continuity-from-above-for-measures`, `def-standard-normal-and-normal-laws`, `def-multivariate-normal-law`, `thm-orthogonal-projection-has-independent-chi-square-sums`, `lem-measurable-functions-preserve-independence`, `thm-independent-random-elements-have-product-joint-law`, `thm-conditional-density-formula`, `def-p-value`, `def-test-size-and-power`, `thm-p-value-superuniformity`, `def-pivot`, and `thm-pivot-inversion-exact-coverage`. I also opened `lem-normal-density-has-total-mass-one`, needed by the standard-normal supplier.

Task instructions read: `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/reader.md`, and the batch manifest. I also reviewed the cross-batch dependency list, coverage/source context, dependency-order task, and the corollary's proof-contract entry. The cross-batch dependency list is empty.

## Review and edits

The selection decomposition is correct: (y=c_\eta T(y)+Z(y)), with (Z(y)\perp\eta), and the rowwise sign cases yield the stated lower and upper limits, including zero rows and empty constraint sets. The Gaussian independence theorem applies the isotropic multivariate-normal representation to the rank-one orthogonal projection. The conditional-density proof correctly excludes zero-normalizer fibers as a selected-marginal null set, computes the truncated-normal kernel on positive fibers, and applies the continuous probability-integral transform. The worked two-mean example has (S=\{Y_1\ge Y_2\}), (L(Z)=Y_2), (U(Z)=+\infty), and its displayed pivot and p-value formulas follow from the definitions.

I repaired one claim-boundary defect in `items/cor-exact-polyhedral-selective-tests-and-confidence-sets.md` (statement and proof steps 1.1–2.1). The size definition requires both a nonempty null and a nonempty alternative; the original size clause made only the alternative condition explicit. The statement and proof now require (H_0(\vartheta)\ne\varnothing) for the p-value/type-I-error conclusions and both (H_0(\vartheta)\ne\varnothing) and a nonempty alternative for the size conclusion. This matches `def-test-size-and-power` and `thm-p-value-superuniformity`. I updated the corresponding step claims and empty-case boundary in `research/statistical-models-experiments-62-batch-56.proof-contracts.json`. The item had no `verification.judge` record to remove.

Source checks: Lee, Sun, Sun, and Taylor, [*Exact Post-Selection Inference, with Application to the Lasso*](https://arxiv.org/pdf/1311.6238), PDF pp. 11–13 (Lemma 5.1 and Theorem 5.2) supports the interval reduction and conditional truncated-normal pivot; its §6, PDF pp. 14–15, discusses inversion, including an interval-shape result not claimed here. Fithian, Sun, and Taylor, [*Optimal Inference After Model Selection*](https://arxiv.org/pdf/1410.2597), §2.4, PDF p. 8, gives selective test/confidence-set duality with at-least coverage; exact equality here follows from the local uniform-pivot proof. Rasines, [*LTCC Week 3: Selective Inference*](https://ltcc.ac.uk/media/london-taught-course-centre/LTCC_week3.pdf), slides 17–22, covers the polyhedral reduction and truncated-normal CDF. Slide 17's displayed general-covariance coefficient (c=(\eta^T\Sigma^{-1}\eta)^{-1}\Sigma\eta) does not satisfy (\eta^Tc=1) in general; Lee et al. give (c=\Sigma\eta/(\eta^T\Sigma\eta)) in Eq. (5.3), PDF p. 11. The assigned proof uses only the correct isotropic coefficient (c_\eta=\eta/\|\eta\|^2), so this source issue does not affect its argument.

No other assigned item or page defect was confirmed. No uneditable defect remains.

## Page verdicts

- **`polyhedral-selective-inference` (A): sound after the repair.** Its summary accurately limits the results to one fixed finite polyhedron, a fixed contrast, known positive variance, and positive selection probability; it disclaims robustness, unknown-variance validity, unions of polyhedra, selected-family guarantees, and asymptotic claims.
- **`polyhedral-selective-inference-examples` (B): sound.** Its objective matches the worked two-normal example, and the example's selection event, truncation interval, pivot, p-value, and central confidence-set construction are correct.

## Validation and blockers

- `node tools/tsx-run.mjs tools/reflow.mts items/cor-exact-polyhedral-selective-tests-and-confidence-sets.md`: unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/cor-exact-polyhedral-selective-tests-and-confidence-sets.md`: pass, one proof checked, zero failures.
- `node tools/proof-layout.mjs items/cor-exact-polyhedral-selective-tests-and-confidence-sets.md`: one item, three steps, zero defects.
- Updated proof-contract JSON parses successfully.
- Blocker: none.

## Coverage note

Both assigned pages, all nine assigned items, and all direct item dependencies named in the batch manifest were opened. I did not independently audit every transitive dependency of the published suppliers or open the five page-level `requires` pages; none supplies an inference in the reviewed fixed-event finite-sample argument beyond the local item interfaces checked above, and the A-page explicitly disclaims an asymptotic claim.
