# Step 3a reader report — batch 46

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Batch: `46`

## Opened inventory

Pages:

- `library/inverse-problems/learned-reconstruction-targets-and-risk.md` (A page)
- `library/inverse-problems/learned-reconstruction-targets-and-risk-examples.md` (B page)

Assigned items, read after their suppliers:

- `prop-ip-posterior-mean-is-square-loss-optimal`
- `def-ip-learned-reconstruction-estimator`
- `def-ip-inverse-risk-under-train-and-test-laws`
- `ex-ip-posterior-mean-outside-nonconvex-signal-class`
- `ex-ip-train-test-prior-shift-changes-risk`
- `ex-ip-calibrated-posterior-sample`

The 26 direct dependency items opened for the assigned claims were:

- `def-measurable-space`
- `def-product-sigma-algebra-and-finite-product-sigma-algebras`
- `def-measure-kernel-and-probability-kernel`
- `def-hilbert-space`
- `def-separable-space`
- `def-real-and-complex-inner-product-space`
- `thm-cauchy-schwarz-in-an-inner-product-space`
- `def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis`
- `thm-product-of-countable`
- `def-axiom-of-choice`
- `def-countable-choice`
- `thm-parseval-equivalences-for-a-complete-orthonormal-family`
- `def-conditional-expectation-given-a-sigma-algebra`
- `thm-conditional-expectation-is-the-l2-orthogonal-projection`
- `thm-measurability-of-integration-against-a-kernel`
- `thm-monotone-convergence-for-the-integral`
- `def-posterior-risk-and-bayes-action`
- `def-conditional-law-given-a-random-element`
- `thm-conditional-integration-through-a-regular-conditional-law`
- `lem-conditional-expectation-is-unique-almost-surely`
- `def-ip-forward-map-and-solution-classes`
- `def-ip-identifiability-and-stability-modulus`
- `def-ip-misfit-evidence-and-posterior-law`
- `def-probability-measure`
- `def-measurable-function-between-measurable-spaces`
- `def-loss-function-and-risk`

I also opened the current batch manifest, `batch-46.proof-contracts.json`, and `batch-46.source-evidence.json`. The source bundle records six fetched references and no unresolved sources. The assigned proofs and statements were checked against their current files rather than treated as settled by those records.

## Review and edits

- `prop-ip-posterior-mean-is-square-loss-optimal`: no defect found. The scalar coordinate means are integrable on `D_2`; Parseval and monotone convergence give a square-summable coefficient family; completeness gives the mean; the countable base argument establishes measurability; and the coordinate risk identities sum to the stated Hilbert-space identity. The RCD claims use the supplied kernel and the stated finite second moment. AC and Countable Choice uses are stated and match the cited suppliers.
- `def-ip-learned-reconstruction-estimator`: no defect found. The definition distinguishes point rules, finite unrolled updates, denoisers, learned priors, score fields, and posterior samplers, and does not claim generic accuracy or sampler correctness. Its complete Definition is uninterrupted by hyperlinks; references follow in `Definition references`.
- `def-ip-inverse-risk-under-train-and-test-laws`: the mathematical definition is sound: kernel integration gives the measurable inner risk, point-mass kernels recover deterministic risk, and no train/test inequality is inferred from the definition. I repaired the InverseBench locator. The old locator pointed to §5 and Appendix C for both observations; the cited conference PDF places the out-of-distribution-source results in the §4.3 subsection “How well do PnPDP methods handle out-of-distribution sources?” (PDF p. 10), while Appendix C, “Robustness to prior mismatch” (PDF pp. 28–29), gives a preliminary Figure 8 comparison. The corrected locator distinguishes those locations and makes clear they provide empirical context, not a universal risk bound. The source was checked at the exact cited conference PDF URL: <https://proceedings.iclr.cc/paper_files/paper/2025/file/e297068f5ec7f483a017948715b591fb-Paper-Conference.pdf>.
- `ex-ip-posterior-mean-outside-nonconvex-signal-class`: no defect found. The posterior mean is zero, its full-space risk is `1`, and both admissible endpoints have risk `2`.
- `ex-ip-train-test-prior-shift-changes-risk`: no defect found. The two joint laws have the same data marginal and the displayed risks are `0` and `1`.
- `ex-ip-calibrated-posterior-sample`: no defect found. With independent equal-probability draws, the sample's expected squared error is `2`, while the mean action's posterior risk is `1`; the calibration claim is correctly limited to the stated constant data value.

The source locators for the assigned items were checked against the relevant passages: Martin, §5.3.1 Definition 5.3 and Example 5.4 (PDF pp. 104–105); Daras et al., §1.2 “Recovery types,” §§2.4.2–2.4.3, and Appendix A.1 Lemma A.1 (PDF p. 25); Dashti–Stuart, §3.2 Theorem 3.4 and §4.1 Theorem 4.3; Ongie et al., §§3.1, 4.1, and 4.2.1; Hoff, §§4.1–4.2; and Zheng et al., §4.3's out-of-distribution subsection and Appendix C. Their use is contextual; the assigned mathematical claims are locally defined or proved. The official ICLR PDF was fetched and its relevant pages extracted after the web PDF reader rejected the file size.

The direct dependency `def-ip-identifiability-and-stability-modulus` contains one TikZ commutative diagram. It correctly depicts `F: U → Y`, `q: U → Q`, and the data-only estimator `Y → Q`; the triangle expresses the defining exactness condition. No TikZ diagram occurs in either assigned page or the six assigned items.

After the citation edit, reflow reported `unchanged`; precheck reported `0 checked, 0 failing`; final proof layout reported `1 items, 0 steps, 0 defects`. The affected definition has no `verification.judge` record and its contract has no proof derivations or routine steps, so no proof-contract rows or judge record required amendment.

No defect remains unedited. No withdrawal was proposed.

## Page verdicts

- A page `learned-reconstruction-targets-and-risk`: no page defect found. Its item inventory matches the assigned A items, the B page is listed as companion, status is draft, the body is empty, and `page_layout: compact-v1` is preserved.
- B page `learned-reconstruction-targets-and-risk-examples`: no page defect found. Its example inventory matches the assigned examples, the A page is required, status is draft, the body is empty, and `page_layout: compact-v1` is preserved.

## Blocker

None.

## Coverage note

I read every assigned item and page and the 26 direct dependency items listed above. I checked the relevant proof bodies of the direct theorem and lemma suppliers used by the assigned proposition. I did not independently re-audit every deeper transitive proof dependency of all published suppliers. No unresolved uncertainty in the assigned claims was identified from the evidence reviewed.
