# Batch 64 Step 3a adjudication

Run: `physics-remaining-80-2026-10-17`; group: `batch-64`; scope: batch 64 only.

## Level 1 completed: rotating-mode obstruction

`touched:64:prop-tgr-rotating-mode-gibbs-obstruction`: `reviewed_no_defect`, `change_kind: metadata`, no defect row. The reader normalized statement provenance from `literature-derived` to `ai-altered`; independently checked current bytes against the post snapshot and reconstructed the pre snapshot by reversing exactly that single metadata replacement. No mathematical interface, proof, dependency, or contract derivation changed.

Reviewed all five steps and F1–F3, plus the local completeness proof and its complex-completeness/Hilbert definitions. The coordinate adjoint test establishes the maximal weighted domain; graph limits verify closedness for nonzero real multiples. At a=0 the zero restriction closes on all of H. The geometric series proves both directions, and the absolutely convergent diagonal functional is bounded, complex-linear, positive and normalized exactly when a>0. The phrase “dense finite-support domain D(N)” in 3.1 means the dense domain containing finite-support vectors; the density argument and declared maximal domain are unambiguous and sound. No extra edit is needed.

Sources independently inspected: [Naaijkens](https://arxiv.org/pdf/1311.2717), §3.4 printed pp.76–77 (finite normalized Gibbs/KMS argument), and [Ruelle](https://arxiv.org/pdf/math-ph/0107009), Chapter 1 §7 printed pp.13–14 (strip convention). These are contextual sources, not proofs of the one-mode obstruction. The local proof supplies that result and explicitly excludes a field/spacetime extension.

The initial batch risk report returned four HIGH/CRITICAL items and zero errors. The rotating-mode risk review is complete in the batch contract. Next: level-4 finite-cell factorization, then the level-5 response finding, then level-8 KMS rescaling. No blocker identified at level 1.

## Level 4 completed: finite-cell factorization

Read the entire current theorem and all four direct suppliers: `lem-qsm-matrix-state-calculus`, `lem-qsm-finite-gibbs-kms`, `thm-tgr-electrochemical-stationarity`, and `def-countable-choice`. Independently followed the actual charged calculation through the transport definition, shell-preservation, gauge-energy, massive-shell rigidity and thermal-normalization items. The forward implication uses the exact whole-shell, positive-mass, connected-domain and global-compensator hypotheses and carries AC_omega. The finite tensor eigenbasis proves Z=product Zi and rho=tensor rho_i, including degeneracies, zero energies and the one-cell/one-dimensional cases. The neutral algebra is invariant because H_K commutes with Q, and restriction preserves the strip boundary functions. No additional obligation is owed for this untouched unflagged item; its CRITICAL risk review is complete. No supplier defect or empirical inference was found in the uses reviewed.

Next: independently assess and repair the level-5 normalization finding, including direct consumer checks.

## Level 5 completed: response normalization

`refuter:64:1`, route `flagged`: **confirmed_fatal**, repaired with confidence 1. Defect ID: `physics-remaining-80-2026-10-17-batch64-cell-gibbs-normalizer`.

The bound current pre-edit item matched the post-reader snapshot (`b2b018f752c6bc79b7515f265a6f1148d421cc5947dea39a3f407dd613d3a321`). The factorization supplier defines total Z=product Zi and cell density rho_i=exp(-beta_i G_loc)/Zi. For two zero-energy C² cells with Q_i=0, N_i=1, constant positive temperature, zero chemical potential and potential in Minkowski stationary geometry, all geometric and whole-shell stationarity hypotheses hold: beta is constant and zeta=0. Each Zi=2 whereas total Z=4. The original displayed cell formula has trace 1/2. The ambiguity is material because F1 attributes that formula to the supplier and proof 2.3 repeats the wrong normalizer.

Defined Z_loc:=Zi as the explicit trace on H_i and used it in the Statement, F1 and proof 2.3. Statement provenance is now ai-altered; manifest Statement/provenance and proof-contract derivation 2.3 match. No judge record was present. Added the exact two-cell normalization check to the contract. The underlying response, spectral and static claims retain their full scope.

Read all five proof steps and the actual finite-Kubo, spectral-FDT and Duhamel/Kubo–Mori suppliers in full, together with the already reviewed cell construction and AC_omega definition. Neutrality justifies each chemical unitary factor. The substitution v=Ns preserves the exact first variation and bound; the spectral pushforward preserves atomic weights and zero mass; the static covariance concerns re-preparation. Checked zero control, Q=0, one-dimensional and degenerate spectra, N=1 and the excluded N=0 case. Its HIGH risk review is complete.

Direct-use search over items and library found exactly the two item consumers `ex-tgr-proper-clock-qubit-response` and `pthm-tgr-finite-stationary-response`, plus page `tgr-et03`. Read each current carrier in full. The example defines sigma using its own two-level trace and derives the weights in Verification 1.1. The outside-batch physics theorem defines sigma:=rho_i and explicitly records Zi in F1; its F2 and proof 3.1–4.1 use the corrected normalized response theorem without total Z. The page summary asserts no normalizer formula. All uses remain sound; none needs an edit or a further interface propagation hop. The outside-batch consumer is reported to the owner here for its normal current-context handling; no source repair is requested. Frontier-ledger dispositions retain these stable IDs.

Independently inspected [Kubo](https://staff.ulsu.ru/moliver/ref/kubo/kubo57.pdf) §2, printed pp.572–575, from the batch-47 raw PDF using rendered images, especially (2.1), (2.17), (2.19), (2.24b), and [MIT 8.512 Lecture 1](https://ocw.mit.edu/courses/8-512-theory-of-solids-ii-spring-2009/0d1bb83b0e6471874b6c3e02aff52ad5_MIT8_512s09_lec01_rev2.pdf), §§1.1–1.5, pp.1–8, especially (1.20), (1.28), (1.35), (1.53), (1.59). Kubo's observed B/control A names are reversed relative to this item's observable A/control B; finite trace cyclicity gives the stated +i/hbar sign for a negative control. MIT uses a positive probe convention and hbar=1, so its response sign is converted accordingly. Neither source supplies the exact finite remainder or cell redshift; those deductions use the actual local proofs. No measurements or certainty about nature are claimed.

Reflow returned unchanged; scoped precheck passed (1 checked, 0 failing); scoped rendercheck passed (1 file). Final proof-layout and reviewed-risk checks remain for handoff. Next: finish level-8 KMS risk review.

## Level 8 completed: KMS rescaling

Read the current item, contract and actual `def-qsm-kms-state`, `lem-tgr-killing-thermal-normalization`, and `def-countable-choice`. Its three steps are sound. The supplied KMS definition explicitly defines algebra, state, strong continuity and the bounded beta-hbar strip. Positive scalar composition preserves the group property and continuity; F(z/lambda) establishes width lambda beta hbar and F_tilde(lambda z) establishes the converse. Both boundary orders and lambda=1/zero-observable cases check directly. Geometry uses only the supplied curve and the Killing identity xi(N)=0 (not the extra thermal-Killing premise for spatially constant NT): the metric integral gives tau=N t_K along the interval, with no global complete-flow assertion. AC_omega remains explicit. HIGH risk review completed. The contract's converse boundary locator was corrected from 2.1 to 1.2 as audit enrichment; no item changed or extra decision is owed.

Source caveat for owner: [Ruelle](https://arxiv.org/pdf/math-ph/0107009), printed p.13, final paragraph, actually says gamma beta for the reparametrization alpha^(gamma t). I checked the rendered original page, not just extracted text. Under its immediately preceding strip convention the correct width is beta/gamma for positive gamma: a finite nontrivial Gibbs matrix already checks this. The source sentence therefore has an inverse-factor error. The batch source dossier/coverage's assertion that this sentence independently confirms the direction is inaccurate. Those inherited source-reading attestations are retained as history; do not treat that particular assertion as corroboration. The current theorem uses alpha_(tau/lambda), proves lambda beta directly in both directions, and does not quote the erroneous source sentence or rely on it as a premise. No item correction or prerequisite escalation is needed. Its other source, [Naaijkens](https://arxiv.org/pdf/1311.2717), Definition 3.4.4 p.74, states the same strip boundary order and physical width beta hbar used locally; the local definition explicitly requires boundedness.

## Published findings and scope limits

No defective published supplier was identified in the owned uses. Imported mathematics and all published content remain unchanged; no published-ledger entry is warranted. No additional routed page obligation, withdrawal, substantial unmet prerequisite or unresolved source repair is required for the owned carriers. The outside direct consumer and inherited dossier/source discrepancy above are explicitly reported for owner disposition; neither supplies scientific certification. No judge, stamp, engine dispatch, acceptance gate or stage transition was initiated.

## Final local checks and handoff

- `node tools/physics-support/risk-report.mjs research/physics-remaining-80-2026-10-17-batch-64.proof-contracts.json` — zero errors; routed four HIGH/CRITICAL reviews.
- Same command with `--require-reviewed` after final contract edits — zero errors, all six batch items accounted for, all four required reviews complete.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/reflow.mts items/thm-tgr-finite-response-redshift.md` — unchanged.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/thm-tgr-finite-response-redshift.md` — pass, 1 checked, 0 failing.
- `node tools/physics-support/rendercheck.mjs items/thm-tgr-finite-response-redshift.md` — pass, 1 file.
- `node tools/physics-support/proof-contract.mjs research/physics-remaining-80-2026-10-17-batch-64.proof-contracts.json --strict --items thm-tgr-finite-response-redshift` — 0 errors, 0 warnings, 1/1 checked.
- Required final `node tools/physics-support/proof-layout.mjs items/thm-tgr-finite-response-redshift.md` — 1 item, 5 steps, 0 defects. No subsequent item edits.
- Native defect-ledger append — exactly one fixed fatal row appended, with the exact decision obligation, confidence 1, and generated view refreshed.
- Focused JSON/scope comparison — exactly the two owed decisions, no extras. Current raw hashes of all five unedited items still match the immutable reader-post snapshot. Corrected response raw hash: `1dd11a844356193c28c51686e05cf060a65763a3bb43215cab742b5338e14cf0`.

Authored item changes: only `items/thm-tgr-finite-response-redshift.md`. Owning manifest and proof contract synchronized; frontier and defect ledgers updated. Report and decisions are at the exact dispatch-named paths. No current-carrier blocker remains. The engine retains decision stamping, current-context checks and the gate battery; these local results are not independent judge acceptance.
