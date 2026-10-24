# Probability rendering audit — lane 03

Reviewed all 69 assigned frozen snapshots and local HTML renderings, including each title and complete ItemBody. Opened all 104 receipt-listed PNG tiles individually with `tools.view_image(detail="original")`; tile paths and capture hashes, plus per-tile view attestations, are recorded in `lane-03.json`. Snapshot, HTML, and PNG hashes match the assignment and capture receipts. Capture metadata reports no KaTeX errors, TikZ diagrams, or diagram failures.

## Rendering findings

No confirmed LaTeX or TikZ rendering defects. No diagram math mismatches were present because there were no existing TikZ diagrams in this lane. Long formulas were reviewed in their standalone tiles; no item is classified as clipped or inaccessible based on the available captures.

## Editorial diagram candidates

- **rem-complete-convergence-implication-diagram** — snapshot lines 24–37. The source names the implication diagram and supplies its arrows and counterexamples. Draw `L^q → L^p → probability → distribution` and `almost sure → probability`; attach each counterexample to the failed reverse implication. Only distributional convergence to a constant is stated as a reverse implication.
- **ex-exit-side-probability-from-an-interval** — lines 26–29, 36, 45–49, 54–57. Show endpoints −2 and 3 with start 0, and label upper/lower first-exit probabilities 2/5 and 3/5. Preserve the almost-sure complementary-exit condition.
- **ex-gamblers-ruin-probability-for-a-biased-walk** — lines 25–26, 42, 44, 46. Draw the finite walk states 0,…,N, starting at i, with p/q nearest-neighbor transitions and absorbing endpoints. Keep the upper-exit probability formula attached to the correct event.
- **ex-polya-urn-proportion-martingale** — lines 26, 46, 48, 50. Show a red/green branch with probabilities `R_n/T_n` and `1−R_n/T_n`, child proportions after reinforcement, and their conditional average `U_n`. Treat real `c` as a weight, as the source does.
- **def-elementary-predictable-brownian-integrand** — lines 36–46. Draw the piecewise-constant process on `(t_k,t_{k+1}]`, with coefficient `ξ_k` measurable at `F_{t_k}`; preserve the left-open/right-closed convention and `H_0=0`.
- **def-upcrossing-number-of-an-interval** — lines 24–30. Sketch a path and levels `a<b`, marking ordered low/high times for `U_N[a,b]`; do not imply a uniquely selected maximizing tuple.
- **cex-pointwise-cdf-convergence-at-a-jump-is-not-required** — lines 36–40. Plot `F_n(t)=1_{t≥1/n}` and `F(t)=1_{t≥0}` to show weak convergence while `F_n(0)≠F(0)` at the limiting jump.
- **thm-finite-dimensional-laws-of-a-markov-chain** — lines 27–33. Draw ordered times `n_0<⋯<n_r`, initial law `μ`, transition kernels with the stated time gaps, and tests `f_j`; show `K^0` as evaluation when `n_0=0`.
- **thm-normal-equations-for-best-affine-l2-prediction** — lines 28–43, 55, 63–69. Show `[X]` projected onto the affine predictor span, with residual perpendicular to the span. Distinguish uniqueness of the predictor class from potentially nonunique coefficients when the covariance matrix is singular.
- **ex-bertrand-chord-paradox-is-a-model-specification-problem** — lines 27–38. Compare the three stated sampling spaces for the same chord-length event and label probabilities `1/3`, `1/2`, and `1/4`; keep the sampling models distinct.
- **thm-probability-law-and-distribution-function-correspondence** — lines 33–46. Show `μ((a,b])=F(b)−F(a)` on the number line, allowing jumps and preserving right-continuity and the two tail limits.
- **thm-density-of-elementary-predictable-processes-in-predictable-l2** — lines 22–40. Show generating rectangles `(s,u]×C` and time-zero sets `{0}×C`, then finite elementary approximants in product-measure `L²`; do not imply pointwise convergence.

No content, publication status, production source, or application files were changed.
