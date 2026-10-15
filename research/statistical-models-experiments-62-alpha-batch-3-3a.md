# Step 3a adjudication — batch-3

Run: `statistical-models-experiments-62`. Scope: batch 3 only. Routed decisions: two touched carriers; no reader, refuter, or page obligations. Reader findings and refuter flags are empty. The live `.autopilot/statistical-models-experiments-62/` state exists; latest commit inspected: `79fa523ad2`.

## Level 0 completed

`lem-full-column-rank-matrix-has-economy-qr`: independently reviewed current Statement, all three steps and all five cited supplier statements/proofs. The orthogonal complement has dimension n-p; its orthonormal basis completes X to a square invertible matrix. The leading square-QR block gives X=QR; positive diagonal ensures invertibility and P_X=QQ^T follows by matrix multiplication. Checked p=1, n=p+1, excluded rank-deficient and zero-dimensional cases, and finite existential choices. No defect and no owed decision. Complete risk review recorded in the batch contract before advancing.

Source consulted: [Panchenko, MIT Section 15](https://ocw.mit.edu/courses/18-443-statistics-for-applications-fall-2006/dbc17cbfdac61daaff75056992d0af9a_section15.pdf), PDF pp. 3-4 (economy QR and orthogonal completion). Local suppliers: `thm-finite-dimensional-orthogonal-decomposition`, `cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases`, `thm-dimension-of-a-linear-subspace`, `cor-dimension-of-a-direct-sum`, `thm-qr-factorisation-over-r-or-c`.

Initial risk-report passed (5 items; QR HIGH, both routed theorems CRITICAL). No item edits. Next: exact inference theorem and its current supplier statements/proofs, then interval theorem; finish remaining risk records and decisions and focused checks.

## Level 4 completed

`thm-exact-gaussian-linear-regression-inference`: accepted reader repair, confidence 1. Independently reviewed all six steps and all 30 declared suppliers, including current batch-2 first-moment, least-squares and estimability definitions/results. The variance nuisance is held fixed when instantiating the beta-indexed first-moment model. QR yields independent coefficient and residual normal blocks, a positive chi-square residual and the nonzero-contrast t law. The reduced-subspace orthogonal decomposition proves the partial F law, including q=p and the empty reduced design. Checked p=1, n-p=1, q=1, c≠0, sigma²>0, both test hypothesis witnesses, every null parameter, Borel constant-branch statistics and RSS=0 MLE nonexistence. AC is inherited from Gaussian law construction, characteristic-function/Fourier uniqueness and countable-choice measurability; no stronger unstated assumption is used.

Exact historical comparison: stripping only the `nl -ba` line-number prefixes from the complete source at `research/statistical-models-experiments-62-dispatch/reader-reader-3.attempt-1.log:6372` recovers the frozen pre-reader SHA-256 `093ffeb5be3b96f2a096316b0b33459c64ec7350ef25aea1c5dd1eeeea4b3401`. Current source matches frozen post-reader SHA-256 `7eab3716c6437ffb1acdd29dd9f492193e76df132a3008ee3d78ac73d38d90b5`. The differences are the explicit ambient projection matrix, removal of undefined P_U (U previously denoted an orthogonal basis matrix), elementary Borel/rejection and alternative-witness explanations, and a terminal newline. The ambiguous projection notation is a nonfatal local defect; the short measurability and witness derivations are polish. Both reader repairs are mathematically justified. No theorem conclusion or hypothesis changed.

The only direct item/reference consumer is the in-batch interval theorem, whose F1 needs precisely the unchanged beta-hat, RSS and t laws. The A-page prose also cites the theorem. The explicit projection formula preserves the existing content contract, so no outside consumer repair or escalation is needed. The complete risk review is now recorded before advancing to level 5. Defect references: `sme62-b3-3a-projection-notation` and `sme62-b3-3a-test-derivation-polish`.

Additional sources checked: [Panchenko, Section 15](https://ocw.mit.edu/courses/18-443-statistics-for-applications-fall-2006/dbc17cbfdac61daaff75056992d0af9a_section15.pdf), PDF pp.1-7; [Panchenko, Lecture 4](https://ocw.mit.edu/courses/18-443-statistics-for-applications-fall-2006/da928274a46632ce0d35d2012a1c8e74_lecture4.pdf), PDF pp.1-4. Neither reading substitutes for the local proofs.

## Level 5 completed

`thm-gaussian-regression-confidence-and-prediction-intervals`: accepted reader repair, confidence 1. Independently reviewed all three steps and its thirteen prerequisites. The confidence-set definition requires sets in the full parameter space: D_c has closed Borel membership sections, while the exact pivot inverse D′_c can include every parameter when s=0. They agree on s>0 and thus have identical coverage at every parameter. The original argument compressed this distinction; the reader makes it explicit. The future-response numerator has variance sigma²(1+h₀), and the product-law factorization gives joint independence from RSS, rather than relying on pairwise independence alone. The reader also makes the elementary measurable-affine independence transfers explicit. These are nonfatal proof polish, not counterexamples to either coverage conclusion.

Checked c≠0, x₀≠0, x₀=0 (mean coverage 1; prediction coverage 1−α still holds), p=1, ν=1, s=0 under every sampling law, fixed arbitrary x₀, and excluded α endpoints. No simultaneous-band or conditional-on-training-data coverage is asserted. AC remains inherited explicitly.

The complete source recovered at `research/statistical-models-experiments-62-dispatch/reader-reader-3.attempt-1.log:6622` matches frozen pre-reader SHA-256 `a1fdb6394ebe28a5b3b89ffd917b6bc8c852925506b4bd086bfd2adc97c14f65`; current bytes match frozen post-reader `00843fe2677f1c4aa135a3359b277448f5c949ac326bde9d0db497681e6ea7b1`. Statement/Definition and prerequisites did not change. Complete risk review recorded. Defect references: `sme62-b3-3a-pivot-inversion-polish`, `sme62-b3-3a-prediction-independence-polish`.

Sources: [Wickham, Linear Models](https://www.stat.berkeley.edu/~rice/Stat230A/statiii.pdf), PDF pp.3-7 for projections, estimability and Gaussian inference; [Stanford Stats 203 Lecture 4](https://web.stanford.edu/class/stats203/lectures/lecture4/), “CI for the Mean Response” and “Prediction Interval” (lines 89-96 and 120-129). The added future-error variance matches the prediction formula. Stanford’s summary-table “No” for mean-interval normality is not used to assert exact nonnormal finite-sample t coverage; the local Gaussian assumptions remain essential.

## Scope and dispositions

Exactly two touched decisions are owed and recorded; no additional decision is supplied for the unflagged QR lemma or other untouched items. All five current raw item hashes equal their immutable reader-post hashes. No Alpha item, page, manifest, provenance or verification edit was necessary; mathematical source acceptance retains the reader’s updated contract derivations and quotations. Only three risk_review fields and the owned cross-batch dependency evidence are enriched.

No defective published supplier was found in the inspected prerequisite claims; published carriers were read-only. No published ledger entry, withdrawal or owner escalation is needed. Review coverage includes current routed proofs, their direct cited carriers and the prerequisite arguments needed for those uses; it does not claim a recursive audit of the whole published library. Checks and ledger append results are recorded below when completed.

Source caveat: Wickham PDF p.7, second displayed partial-F formula (text lines 614-620), prints full RSS minus reduced RSS. For nested models that sign is reversed: the local theorem correctly uses reduced RSS minus full RSS, equal to the nonnegative squared norm of the removed fitted component. The preceding fitted-norm formula is consistent with the local theorem. This source typo does not invalidate the independently proved current carrier; no library carrier imports that incorrect formula in this dispatch.

## Final local checks and handoff

- `node tools/risk-report.mjs research/statistical-models-experiments-62-batch-3.proof-contracts.json` — passed initially; three required risk reviews completed in dependency order.
- `node tools/risk-report.mjs research/statistical-models-experiments-62-batch-3.proof-contracts.json --require-reviewed` — exit 0, 5 items routed, 0 errors.
- `node tools/proof-contract.mjs research/statistical-models-experiments-62-batch-3.proof-contracts.json --strict --json` — exit 0, all 5 items checked, no errors or warnings.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-exact-gaussian-linear-regression-inference.md items/thm-gaussian-regression-confidence-and-prediction-intervals.md` — exit 0, both passed.
- `node tools/proof-layout.mjs items/thm-exact-gaussian-linear-regression-inference.md items/thm-gaussian-regression-confidence-and-prediction-intervals.md` — exit 0, 2 items, 9 steps, 0 defects. No item source edits or formatter changes were made by Alpha.
- `node tools/defect-ledger.mjs append --file /tmp/sme62-batch3-defects.json` — exit 0; appended exactly four closed rows and regenerated the ledger view.
- `node tools/frontier-dependency-ledger.mjs refresh --run statistical-models-experiments-62` — exit 0, refreshed and deduplicated the engine-managed unified view from owned inputs.
- Local JSON/inventory assertions — exactly the two owed touched decisions, confidence 1 on each, four matching closed ledger rows, and all five item raw hashes still equal the reader-post snapshot after checks.

Both reports are complete. No blockers or unresolved local defects remain. No judge, stamp, certification, dispatch, gate battery or stage transition was initiated. The engine owns decision hash stamping and the gate battery after this handoff.
