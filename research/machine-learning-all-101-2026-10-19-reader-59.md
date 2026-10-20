# Step 3a reader report — batch 59

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Date: 2026-10-19

## Opened inventory

Assigned pages:

- `energy-models-score-matching-and-contrastive-divergence`: draft A page; `page_layout: compact-v1`, frontmatter only, correct five-item inventory and the two declared prerequisite pages.
- `energy-models-score-matching-and-contrastive-divergence-examples`: draft B page; `page_layout: compact-v1`, frontmatter only, with the assigned example in `examples` and no items.

Assigned items, read before consumers:

1. `def-energy-based-density-and-partition-function`
2. `lem-energy-based-density-is-a-probability-measure`
3. `alg-contrastive-divergence-k`
4. `thm-score-matching-integration-by-parts-identity`
5. `thm-contrastive-divergence-k-gradient-omits-chain-derivative`
6. `ex-short-run-contrastive-divergence-bias`

Opened the direct suppliers used by their definitions and arguments, including the measure, measurability, integral, probability, exponential-series, kernel-composition, weak-derivative, Lebesgue-measure, differentiation, logarithm, finite-probability-vector and conditional-expectation items. I also opened `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`, which supplies the measure property used by `def-measure-with-density`.

For the score-matching proof repair, I opened the exact statements of `lem-smooth-bump-between-concentric-euclidean-balls`, `thm-heine-borel-rn`, `thm-extreme-value-metric`, `thm-chain-sum-product-and-composition-rules-for-banach-derivatives`, `thm-logarithm-derivative-and-integral`, `prop-order-and-scalar-rules-for-the-nonnegative-integral`, `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`, `def-mollifier-family-generated-by-a-unit-mass-smooth-bump`, `thm-convolution-with-a-mollifier-is-smooth-and-differentiates-under-the-integral-sign`, `thm-differentiation-under-the-integral-sign`, `thm-fermat-for-euclidean-local-extrema`, `def-jacobian-matrix-and-gradient`, and `thm-total-differentiability-gives-a-local-linear-bound-and-continuity`.

The declared page prerequisites `conditional-expectation` and `f-divergences-renyi-and-hypothesis-testing` were opened to confirm their IDs and published status. They are not assigned pages in this batch.

## Source and mathematical review

- Hyvärinen, “Estimation of Non-Normalized Statistical Models by Score Matching”: checked §2, Theorem 1, and Appendix A (PDF pp. 1–3 and 12–13). The citation accurately describes the original identity as requiring a pointwise boundary condition; the repaired local proof establishes its stated cutoff hypotheses without importing that condition.
- Hinton, “A Practical Guide to Training Restricted Boltzmann Machines,” Version 1: checked §2, including the likelihood gradient, finite reconstruction update, and omitted CD derivative caveat (PDF pp. 3–5). The assigned claims stay within this source's RBM scope.
- Murphy, *Probabilistic Machine Learning: Advanced Topics*, Chapter 24: checked the author-hosted 2025-12-10 PDF locally at PDF pp. 883–893 (printed pp. 849–859), including energy-model equations (24.1)–(24.2), the CD objective (24.19), and basic score matching (24.29)–(24.30). The assigned citations and locators are accurate.

The finite-state CD gradient formulas and the two-state numerical witness check out. At `\theta=0`, the example has `p_0(1)=1/2`, `q_{1,0}(1)=1/4`, exact negative log-likelihood gradient `-1/2`, stop-gradient direction `-1/4`, and CD objective derivative `-1/4-(1/8)log 3`. Its TikZ graph matches the displayed transition matrix: the two self-loops are `3/4`, and each directed cross-transition is `1/4`. No other TikZ/tikzcd diagram occurs in the assigned items or pages.

## Edit and evidence

Repaired `thm-score-matching-integration-by-parts-identity` without changing its Statement. The former proof applied the weak-derivative identity to `p\chi_R`, which is only `C^1`, and asserted a smooth unit-mass mollifier and `C^1` approximation without establishing those prerequisites. It also used the product and chain rules, the logarithm derivative, the zero-density gradient fact, and boundedness of the cutoff gradient without citing the needed results.

The revised proof obtains a smooth cutoff from `lem-smooth-bump-between-concentric-euclidean-balls`, bounds its gradient on a compact ball, normalizes it using half-open box volumes and nonnegative-integral monotonicity, and forms the scaled unit-mass mollifier. It proves the mollified test functions are smooth with a common compact support, transfers the derivative under the integral using an integrable majorant, and passes the weak identities to the `C^1` test by dominated convergence. It now derives `\nabla p=p s_p` on `{p>0}` by the chain and logarithm rules and on `{p=0}` by Fermat's theorem. The exact dependencies, facts, step mappings, citations, and boundary worksheet were updated in `research/machine-learning-all-101-2026-10-19-batch-59.proof-contracts.json`.

No `verification.judge` record existed on the repaired item, so none was removed. The other assigned items were not edited: their statements, proofs, computations, algorithm instructions, references, and contracts were sound. The algorithm already lists the kernel-composition lemma in `deps`; its general result is supplied independently of the algorithm, so it is not a `justified_by` result for that algorithm.

Checks for the repaired theorem:

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-score-matching-integration-by-parts-identity.md` — unchanged, exit 0.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-score-matching-integration-by-parts-identity.md` — pass, 1 checked, 0 failing.
- `node tools/proof-contract.mjs research/machine-learning-all-101-2026-10-19-batch-59.proof-contracts.json --items def-energy-based-density-and-partition-function,lem-energy-based-density-is-a-probability-measure,alg-contrastive-divergence-k,thm-score-matching-integration-by-parts-identity,thm-contrastive-divergence-k-gradient-omits-chain-derivative,ex-short-run-contrastive-divergence-bias` — 0 errors, 0 warnings, 6/6 checked.
- `node tools/proof-layout.mjs items/thm-score-matching-integration-by-parts-identity.md` — 1 item, 5 steps, 0 defects.

## Page verdicts, uneditable defects, and blocker

- A page `energy-models-score-matching-and-contrastive-divergence`: pass. The item inventory, draft status, compact layout flag, prerequisite IDs, and empty body match the assignment and page policy.
- B page `energy-models-score-matching-and-contrastive-divergence-examples`: pass. The example placement, draft status, compact layout flag, and empty body match the assignment and page policy.
- Uneditable defects: none confirmed.
- Batch blocker: none. At the final status check, the run was paused with no worker in flight. Its current unrelated blockers are `split-51` in `3a-split` and `collect-36` in `3a-collect`; neither blocks this batch's reader review.

## Coverage limitation

I checked the direct supplier statements and the complete proof passages needed for the reviewed arguments, but did not re-audit every deeper proof beneath already published suppliers. The two published prerequisite pages were checked for identity and status, not given page-level mathematical verdicts because they are outside batch 59.
