# Step 3a reader report — batch 16

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Coverage: batch `16`  
Report: `research/inverse-problems-knot-theory-all-109-2026-10-19-reader-16.md`  
Findings: `research/inverse-problems-knot-theory-all-109-2026-10-19-reader-findings-16.json`

## Opened inventory

Assigned pages:

- `library/inverse-problems/bayesian-inverse-likelihoods-and-posterior-propriety.md`
- `library/inverse-problems/bayesian-inverse-likelihoods-and-posterior-propriety-examples.md`

Assigned items, read in supplier-before-consumer order:

1. `def-ip-misfit-evidence-and-posterior-law`
2. `thm-ip-function-space-posterior-propriety`
3. `ex-ip-proper-gaussian-likelihood-posterior-propriety`
4. `ex-ip-zero-evidence-fiber`
5. `ex-ip-improper-prior-finite-evidence`

For the assigned claims, I opened the relevant current Definition/Statement clauses of their direct dependencies: `def-ip-prior-on-a-forward-domain`, `def-ip-forward-map-and-solution-classes`, `def-measurable-space`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `def-extended-reals`, `def-borel-sigma-algebra-on-the-extended-real-line`, `def-measurable-function-between-measurable-spaces`, `thm-sections-of-product-measurable-functions-are-measurable`, `thm-composition-with-borel-functions-preserves-measurability`, `thm-exponential-is-strictly-increasing`, `thm-exponential-limits-and-range`, `thm-continuous-preimages-of-borel-sets-are-borel`, `def-banach-space`, `def-norm-and-normed-space`, `def-separable-space`, `def-metric-ball`, `def-metric-topology`, `thm-metric-open-set-algebra`, `def-subspace-topology-top`, `def-continuous-map-top`, `thm-product-of-countable`, `thm-rationals-countable`, `lem-q-and-irrationals-dense-r`, `def-countable`, `lem-countable-iff-surjection-from-n`, `lem-subset-of-countable`, `def-borel-sigma-algebra`, `def-measure`, `thm-finite-and-countable-subadditivity-of-measures`, `prop-measure-monotonicity`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `cor-exponential-reciprocal-and-positivity`, `def-real-exponential-function-and-e`, `def-bayesian-model-as-prior-and-sampling-kernel`, `def-measure-kernel-and-probability-kernel`, `def-finite-sigma-finite-and-semifinite-measures`, `def-posterior-evidence-normalizer-and-fiberwise-update`, `prop-fiberwise-posterior-propriety-iff-finite-positive-evidence`, `thm-bayes-formula-for-dominated-kernels`, `def-bayesian-posterior-as-regular-conditional-law`, `def-conditional-law-given-a-random-element`, `def-standard-borel-space`, `def-axiom-of-choice`, `thm-standard-borel-bayesian-posterior-kernel-exists`, `thm-choice-implies-dependent-implies-countable-choice`, `def-standard-normal-and-normal-laws`, `lem-normal-location-scale-density`, `def-natural-logarithm`, `thm-exponential-addition-formula`, `thm-of-square-roots`, `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, `prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets`, `lem-of-square-positive`, `lem-of-abs-value`, `def-integral-of-a-nonnegative-simple-function`, `prop-the-nonnegative-integral-agrees-with-the-simple-integral`, `def-dirac-measure`, `prop-dirac-measure-is-a-probability-measure`, `def-counting-measure`, `prop-counting-measure-is-a-measure`, `thm-counting-measure-integral-is-nonnegative-series`, `thm-geometric-series`, and `lem-pigeonhole`.

I opened the cited portions of Dashti–Stuart, *The Bayesian Approach to Inverse Problems*, arXiv:1302.6989v4 (https://arxiv.org/pdf/1302.6989): §3.2, Theorem 3.4 and its proof, and §4.1, Theorem 4.3 and its proof. The latter uses a bounded positive-mass set and a supremum argument; boundedness alone does not make that set compact. The assigned theorem instead proves positivity locally at a support point, so it does not rely on that source inference. I also opened Latz, *On the Well-posedness of Bayesian Inverse Problems*, arXiv:1902.10257 (https://arxiv.org/pdf/1902.10257): §2.2, Theorem 2.5, its proof in Appendix B (“Proof of Theorem 2.5,” printed pp. 23–24, especially equations (B.2)–(B.3)), and §2.3. The Latz proof assumes an integrable, almost-surely strictly positive likelihood; its degenerate example supplies context for the zero-evidence boundary.

## Item review and edits

- `def-ip-misfit-evidence-and-posterior-law`: no mathematical defect found. The trace-Borel measurability, exponential endpoint, fixed-data normalization, dominated-kernel filler, and standard-Borel version branches are stated separately and match the opened suppliers. Corrected the Latz locator from the ambiguous “Appendix B.2” to the exact Appendix B proof and printed page range.
- `thm-ip-function-space-posterior-propriety`: no mathematical defect found. The proof constructs a countable ball base, proves full measure of the support, selects a point in the full-measure intersection with `D`, and obtains positive evidence from a continuity neighborhood; the common envelope gives finite evidence. Corrected the same Latz locator.
- `ex-ip-proper-gaussian-likelihood-posterior-propriety`: repaired Verification step 4.1. It no longer asserts an unused pointwise upper bound on the Gaussian density without citing exponential monotonicity. It now uses the positive finite evidence already established in step 3.1 and computes the two-atom numerator with the simple-integral fact. Corrected the Latz locator.
- `ex-ip-zero-evidence-fiber`: changed the title and example description to “normalized fiberwise update,” matching the stated distinction between the undefined zero-evidence quotient and the arbitrary probability value allowed in a data-indexed conditional-kernel version.
- `ex-ip-improper-prior-finite-evidence`: made the estimate `n² ≥ n` in Verification step 2.2 explicit as `n² − n = n(n − 1) ≥ 0` for `n ≥ 1`, before the exponential/geometric comparison. Corrected the Latz locator.

No stale `verification.judge` record was present on the edited items. The two affected proof contracts were updated. Reflow reported all five items unchanged; precheck reported zero failures (the definition had zero applicable checks); strict proof-contract validation passed for all five items with zero warnings or errors. The final proof-layout run checked five items and 20 steps with zero defects. No TikZ, tikzcd, or other diagrams occurred in the assigned pages or items.

## Unedited defects

None. All confirmed defects found in the assigned items were repaired within scope. No repair was needed on either page.

## Page verdicts

- `bayesian-inverse-likelihoods-and-posterior-propriety` (A page): no defect found. Its YAML-only body is empty, its draft status and item inventory match the assignment, and `page_layout: compact-v1` is present.
- `bayesian-inverse-likelihoods-and-posterior-propriety-examples` (B page): no defect found. Its YAML-only body is empty, its draft status and example inventory match the assignment, and `page_layout: compact-v1` is present.

## Blocker

The batch review and artifact writing are complete. The final status recomputation still listed batch 16 as missing from `3a-read`, so the engine has not registered this reader result yet; the exact report and findings paths above are ready for intake. No worker was in flight.

Coverage limit: I inspected the direct dependency clauses needed for these claims and the cited source arguments above; I did not re-audit every proof in the full transitive library closure.
