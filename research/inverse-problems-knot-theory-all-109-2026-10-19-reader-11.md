# Step 3a reader report — batch 11

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Batch: `11`  
Role: reader

## Opened inventory

Assigned pages:

- `library/inverse-problems/adaptive-spectral-regularization-and-solit.md`
- `library/inverse-problems/adaptive-spectral-regularization-and-solit-examples.md`

Assigned items, read in supplier order after their required supplier sections were opened:

- `items/lem-ip-gaussian-series-norm-tail-and-fourth-moment.md`
- `items/def-ip-ordered-filter-grid-and-source-index.md`
- `items/lem-ip-solit-filter-risk-decomposition-and-monotone-bias.md`
- `items/alg-ip-solit-parameter-choice.md`
- `items/thm-ip-solit-oracle-risk-and-rate.md`
- `items/ex-ip-solit-antiderivative.md`
- `items/ex-ip-solit-satellite-gradiometry.md`
- `items/ex-ip-solit-periodic-heat-equation.md`

Direct item suppliers opened for the claims reviewed:

- `def-countable-choice`, `thm-monotone-convergence-for-the-integral`, `thm-chebyshev-markov-inequality-for-the-integral`, `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`, and `thm-factorization-of-expectations-for-independent-variables`.
- `def-ip-index-source-ball`, `def-compact-spectral-filter-and-qualification`, `thm-singular-value-decomposition-for-compact-operators`, `def-ip-isonormal-white-noise-experiment`, `thm-ip-white-noise-spectral-sequence-representation`, and `def-ip-gaussian-sequence-inverse-model`.
- `thm-holder-inequality-for-integrals` and `thm-minkowski-inequality-for-integrals`.
- `def-hilbert-space`, `def-l-p-space-as-a-quotient-by-null-functions`, `lem-l-two-with-the-integral-pairing-is-a-hilbert-space`, `cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous`, `thm-first-fundamental-theorem-of-calculus-for-l-one`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-a-distribution-with-zero-derivatives-on-a-connected-open-set-is-constant`, `def-the-one-dimensional-torus-and-normalized-haar-integral`, `thm-trigonometric-system-is-complete-in-l-two-of-the-torus`, and `lem-square-summable-sequences-form-a-hilbert-space`.

The four page prerequisites listed on the assigned A page were opened: `statistical-inverse-experiments-and-white-noise`, `gaussian-sequence-models-and-risk-decomposition`, `deterministic-source-conditions-and-optimal-recovery`, and `spectral-regularization-and-parameter-choice` (the last is filed under `numerical-optimization-inverse-problems-and-uncertainty-quantification`). The current batch manifest, proof contracts, cross-batch dependency record, author notes, and coverage record were also inspected as evidence, not as verdicts.

## Independent review and repairs

- `lem-ip-gaussian-series-norm-tail-and-fourth-moment`: the finite Gaussian moment calculation, monotone-limit passage, Chernoff bound, tail passage, and quantile endpoint argument are supported by the stated assumptions and suppliers. No defect found.
- `def-ip-ordered-filter-grid-and-source-index`: the source-class convention, filter bounds, trace variance, and finite stopping index are well-defined under the stated positive variance and geometric-growth hypotheses. No defect found.
- `lem-ip-solit-filter-risk-decomposition-and-monotone-bias`: the filtered coefficients are square summable, the estimator has an (L^2(Omega;X)) limit, and the bias, risk, and pairwise-variance identities follow from the displayed coordinate bounds. No defect found.
- `alg-ip-solit-parameter-choice`: repaired the threshold domain so (x_m) is defined only for (m<m_{\max}), the only indices used by comparison pairs. Also defined the output for every observed sequence: use the (X)-limit of the partial sums when it exists and (0_X) otherwise. The risk-decomposition result gives agreement with the (L^2) estimator almost surely. The algorithm contract's endpoint evidence was updated. The carrier had no `verification.judge` record.
- `thm-ip-solit-oracle-risk-and-rate`: reviewed the current complete local proof, rather than the older notes' claim that no proof was supplied. Added the countable Cauchy-event and pointwise-limit argument showing the observed-data limit-with-fallback estimators and finite comparisons are measurable on the experiment probability space. The proof's tail, union-bound, late-selection, and rate estimates match the stated finite grid and parameter ranges. Updated the theorem contract's algorithm citation and Step 1.1 derivation. The carrier had no `verification.judge` record.
- `ex-ip-solit-antiderivative`: the Green kernel, Dirichlet uniqueness argument, sine spectrum, and piecewise exact data calculation are correct. Its use of the published (L^1) fundamental theorem is affected by the uneditable dependency finding below.
- `ex-ip-solit-satellite-gradiometry`: repaired a multiplicity error in the Tikhonov trace variance. The statement defines (lambda_j) on the ordered singular system with both cosine and sine modes already repeated, while the verification then multiplied a sum over (lambda_n) by two. The variance now uses the per-frequency eigenvalue (mu_n=t_n^2) and its multiplicity factor (2); the finite check uses the same notation. The contract derivation and finite check were updated.
- `ex-ip-solit-periodic-heat-equation`: corrected the simulation description to match Li and Werner's report: it is the empirical *price of adaptation*, especially for spectral cut-off, that is described as irregular. The statement still attributes the (\bar t=0.1), (10^4)-run simulation and leaves minimax behavior explicitly unclear. The contract records the source locator.

The only TikZ diagram in the assigned items is the selector rule diagram in `alg-ip-solit-parameter-choice`. Its arrows correctly show observations, filtered estimates, all-finer-index tests, and selection of the smallest accepted index. No additional diagram is needed for the other assigned expositions.

## Uneditable finding

`thm-first-fundamental-theorem-of-calculus-for-l-one` is published and outside the permitted write scope. Its Statement uses (f\in L^1([a,b])) and evaluates (f(x)) without specifying a measurable representative; the local quotient definition `def-l-p-space-as-a-quotient-by-null-functions` identifies (L^1) elements only up to almost-everywhere equality. The theorem's proof itself chooses a representative when it extends (f) by zero (Proof 1.1) and establishes equality on a full-measure set (Proof 2.1). A representative should be specified and the conclusion stated as equality almost everywhere for that representative. The assigned antiderivative example only needs this almost-everywhere form. The finding is in `research/inverse-problems-knot-theory-all-109-2026-10-19-reader-findings-11.json`.

## Page verdicts

- `adaptive-spectral-regularization-and-solit`: pass for the assigned page. Its YAML inventory matches the five current A items, it has no Markdown body or summary, and it preserves `page_layout: compact-v1`. No page-prose edit was needed.
- `adaptive-spectral-regularization-and-solit-examples`: pass for the assigned page inventory and layout. Its three examples are present, its body is empty, and `page_layout: compact-v1` is preserved. Its antiderivative example has the published-dependency finding recorded above.

## Validation, coverage, and blocker

- Reflow returned `unchanged` for each changed item: `alg-ip-solit-parameter-choice`, `thm-ip-solit-oracle-risk-and-rate`, `ex-ip-solit-satellite-gradiometry`, and `ex-ip-solit-periodic-heat-equation`.
- Precheck passed for the theorem and both repaired examples (`1 checked, 0 failing`); the algorithm reported `0 checked, 0 failing` because it has no proof body. The final batched `node tools/proof-layout.mjs` check covered all four changed item paths: `4 items, 22 steps, 0 defects`.
- Li and Werner's paper was consulted at §3.1.1 and §§3.2.1–3.2.2 (filter and selector conventions), Theorems 3.4 and 3.8 (§3.3.1–3.3.2), Theorems 4.1 and 4.3 and Remark 4.5 (§§4.1–4.2), and the three example sections §§5.3.1–5.3.3. The heat simulation claim is located in §5.3.3, printed p. 22, with $\bar t=0.1$ in the text and $10^4$ Monte Carlo runs in Figure 3's caption. Source: [Li and Werner, *Adaptive minimax optimality in statistical inverse problems via SOLIT*](https://arxiv.org/pdf/2304.10356).
- The 2015 Spokoiny–Willrich preprint was consulted only for related smallest-accepted selection and its multiplicity-correction context; it was not used as a proof supplier for the local SOLIT theorem. The 2019 supplement remains unread and is not used as a premise by the current local proof. The Clason lecture notes cited in the items were not independently opened in this review; no claim was judged insufficient on that basis.
- The current batch manifest lists eight assigned items (five A items and three examples). Older batch notes list seven items and say the theorem proof was absent; I treated those notes as historical and reviewed the current theorem proof on disk. The coverage record also preserves the earlier unretrieved-supplement history.
- Two dependency-order deviations occurred: the Gaussian-series lemma was opened before its five direct suppliers, and the source-ball definition was opened before two of its suppliers. Those supplier statements were then opened and the cited arguments checked; no dependency remained unread for the reviewed claims. I did not audit the full transitive proof closure of every published functional-analysis supplier.
- The run status at review start was `3a-read`, with batch 11's reader artifact missing. The starting repository also had extensive unrelated modifications; no unrelated files were changed. No gate, judge, publication, or commit was performed.

There is no workflow blocker to completing this reader handoff. The published $L^1$ fundamental-theorem interface remains for its owner to repair through the finding route; this reader did not edit published content.
