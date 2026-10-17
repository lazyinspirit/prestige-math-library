# Batch 77 Step 3a risk review

Run: `physics-remaining-80-2026-10-17`; group: `batch-77`; role: Alpha.

The authoritative scope has no touched carriers, changed pages, reader findings, or refuter findings. Pre/post item and page hashes agree. No adjudication decisions are owed; the required decisions array is empty. Risk reviews are recorded in the owning batch contract, without changing item interfaces or verification stamps.

## Completed level 7 review

`pthm-tgr-restricted-classical-area`: independently checked both proof steps against its six direct dependencies, including the full authored proof of `thm-tgr-smooth-null-area` and the explicit screen definition. Null contraction yields the required Ricci inequality with the same curvature convention. The mathematical theorem supplies nonnegative expansion, the compact-cut density derivative, and endpoint monotonicity under precisely the retained full future flow and AC_omega assumptions. Empty cuts, zero expansion/convergence and equal endpoints cause no exception. The complete named-model input remains a hypothesis, not a construction or observation. No defect confirmed and no repair made.

Sources checked: Wald, https://arxiv.org/pdf/gr-qc/9912119, section 2, PDF pp. 4–5, focusing, extendibility and the distinct global event-horizon hypotheses. This supports context; the exact restricted deduction uses the local mathematical proof. Direct suppliers inspected: `post-tgr-smooth-horizon-energy-condition`, `thm-tgr-smooth-null-area`, `def-tgr-horizon-screen-family`, `def-countable-choice`, `post-emg-einstein-maxwell-equations`, `def-emg-lorentzian-forms`. Reader/refuter findings are empty and are treated as evidence, not acceptance.

Initial risk-report completed successfully: restricted area CRITICAL 8, KN mechanics CRITICAL 9, Schwarzschild work HIGH 7; postulate MODERATE 4.

## Completed level 11 review

`pthm-tgr-kn-family-mechanics`: independently checked Proof 1.1, 1.2, 2.1 and 3.1 against all eight direct suppliers. Read the full local first-law/Smarr proposition, Schwarzschild lemma, ingoing extension and the further horizon-data calculation. Differentiating the root equation gives `(r_+-m) dr_+=r_+ dm-a da-q dq`; substitution cancels the angular and charge coefficients in the geometric first law. The same root equation proves Smarr. Multiplication by `c^4/G_N` and the stated SI map give precisely the claimed acceleration, angular and voltage coefficients. In particular `j=G_N J/c^3` and `c/alpha=c^2/sqrt(4*pi*epsilon_0*G_N)`. The fixed constants, displayed gauge, length/time normalization and cross-section constancy are respected. Strict subextremality excludes the singular square-root boundary; both signs of spin/charge are allowed. The exact zero-spin/zero-charge lemma supplies the otherwise excluded Schwarzschild point. No defect or repair confirmed.

Direct dependencies inspected: `def-tgr-framework-units`, `def-emg-xs-si-parameters`, `pthm-emg-xs-kn-model`, `thm-emg-xs-kn-extension`, `lem-tgr-schwarzschild-horizon-data`, `pthm-emg-xs-kn-horizons`, `prop-tgr-kn-first-law-smarr`, and `def-countable-choice`. Further geometric proof inspected: `prop-emg-xs-kn-horizon-data`. Source context checked in Wald section 2, PDF pp. 6–9; Carroll equations (7.148)–(7.156), PDF pp. 222–223; and Adamo–Newman section 4, printed pp. 21–22. The source unit systems and thermodynamic discussion are not silently adopted.

## Completed level 12 review

`texp-tgr-classical-schwarzschild-work`: checked both proof steps and all three direct dependencies (the KN family theorem, exact Schwarzschild lemma and countable-choice definition). For positive mass, differentiation gives `dA_H=32*pi*G_N^2*m_*/c^4 dm_*`. The acceleration coefficient is `c^6/(32*pi*G_N^2*m_*)`, so their product is exactly `c^2 dm_*=dE_par`. Zero variations are allowed; the zero-mass endpoint is excluded. Radius, area and signed surface gravity are derived directly on the exact Schwarzschild slice, without invoking the generic nonzero-spin-or-charge theorem outside its domain. Wald and Carroll provide the same classical context identified above. No defect or repair confirmed.

## Scope, source limits and disposition

All three risk reviews are complete in `research/physics-remaining-80-2026-10-17-batch-77.proof-contracts.json`. No item, page, interface, manifest, provenance or judge field changed. No repair confidence or defect-ledger row is applicable because no repair or confirmed defect occurred. No published defect, withdrawal, missing prerequisite or owner blocker was identified in these owned uses. The frontier dependency ledger records this review without changing existing dispositions.

The reviews concern the actual owned proofs and their consumed supplier interfaces, including the further local geometric proofs described above. They do not independently re-audit every ancestor in the 1,930-item transitive closure, certify draft field-equation suppliers, or establish empirical validity. Existing conditional supplier status and empty empirical-premise records are preserved. No new source full-text reading attestation is written: only the relevant retrieved source sections were checked. One Adamo–Newman screenshot request failed with a cache miss; the successfully retrieved parsed section 4 text supplied the area and parameter context. No conclusion relies on that failed retrieval.

Sources consulted: [Wald](https://arxiv.org/pdf/gr-qc/9912119), section 2; [Carroll](https://arxiv.org/pdf/gr-qc/9712019), equations (7.148)–(7.156); [Adamo–Newman](https://arxiv.org/pdf/1410.6626), section 4, printed pp. 21–22. These are context for the separately checked local deductions, with their differing conventions retained.

## Local checks

- Initial risk-report: exit 0; three required high/critical reviews identified.
- Current SHA-256 for each of the four owned items equals both the immutable pre-reader and post-reader hashes. No reader repair disposition is owed.
- Decisions JSON has exactly the required version, run, group and empty decisions array.
- No item was edited, so proof reflow, precheck and the final changed-item proof-layout invocation have no applicable paths. No judge, stamping, engine transition or gate battery was initiated.
- Final `node tools/physics-support/risk-report.mjs research/physics-remaining-80-2026-10-17-batch-77.proof-contracts.json --require-reviewed`: exit 0, 0 errors, 4 items routed; every required risk review is complete.
