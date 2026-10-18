# Step 3a reader report — batch 28

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: reader-28

## Opened inventory

Assigned pages:

- `library/numerical-pdes-and-spatial-discretization/conservative-finite-volume-weak-limits.md` (A)
- `library/numerical-pdes-and-spatial-discretization/conservative-finite-volume-weak-limits-examples.md` (B)

Assigned items, read supplier-first:

- A-page: `def-locally-bounded-distributional-weak-solution`, `def-conservative-finite-volume-scheme`, `def-finite-volume-space-time-reconstruction`, `def-godunov-flux-for-burgers`, `lem-godunov-flux-for-burgers-is-continuous-and-consistent`, `lem-finite-volume-discrete-summation-by-parts`, `lem-conservative-fv-face-fluxes-converge-in-l1loc`, and `thm-conservative-finite-volume-weak-limit`.
- B-page: `ex-godunov-fv-captures-burgers-shock-speed`, `ex-bounded-fv-reconstructions-need-not-be-strongly-compact`, and `cex-conservative-fv-weak-limit-need-not-be-entropic`.

Published direct dependencies opened:

- `def-scalar-conservation-law-and-flux`
- `def-distributional-weak-solution-of-a-scalar-conservation-law`
- `thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity`
- `prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets`
- `def-measure`
- `prop-measure-monotonicity`
- `thm-heine-borel-rn`
- `thm-extreme-value-metric`
- `thm-heine-cantor-metric`
- `def-countable-choice`
- `def-kruzhkov-entropy-solution`
- `thm-rankine-hugoniot-jump-condition`

The face-flux proof also required the exact statements of two indirect suppliers, which I opened: `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant` and `thm-lebesgue-measure-of-a-box-of-every-kind`.

Relevant cited source sections inspected:

- [De Sterck and Ullrich, *Introduction to Computational PDEs*](https://climate.ucdavis.edu/AM452.pdf): §3.2.1 (printed pp. 83–84), §3.2.3 (pp. 88–89), §3.4.1 (pp. 94–96), and §3.4.3 (pp. 97–99). Theorem 3.1 on p. 98 says a conservative scheme which “converges” has a weak limit, without specifying the convergence mode or bounded-range hypotheses, and gives no proof; the local theorem supplies explicit hypotheses and its proof.
- [Seibold, MIT OCW Lecture 19, *Finite Volume Methods*](https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/814ce5a38ea0db4c58eff0c5ad8b111a_MIT18_336S09_lec19.pdf): pp. 1–2 for cell averages, shared face fluxes, the update, and the Burgers Godunov/Riemann construction. These notes support the setup and terminology; the local items supply the exact convergence and entropy calculations.

## Repairs

- `ex-godunov-fv-captures-burgers-shock-speed`, Example data and Verification 3.1: the initial datum assigned no value at `x=0`, and the proof invoked the weak-limit theorem, which assumes `ACω` although this example did not state that assumption. I defined `u0(0)=-1` by taking the right state on `x≥0`, then verified the weak identity directly: `u=u0` for `t>0`, the time integral cancels the initial boundary term, and `fB(u)=1/2` makes the spatial-flux integral zero. This proves the local weak-solution claim without an extra axiom. I replaced the theorem dependency with the local weak-solution definition and updated the proof-contract citation and derivation.

- `cex-conservative-fv-weak-limit-need-not-be-entropic`, Facts & Assumptions: the Riemann datum likewise omitted `u0(0)`. I defined `u0(0)=0` by using `x≤0` for the left state. This point value does not change any cell average, so the recurrence, strong-limit calculation, and entropy defect are unchanged. I updated the corresponding proof-contract derivation.

- `lem-conservative-fv-face-fluxes-converge-in-l1loc`, Facts & Assumptions and Proof 2.1–4.1: the shifted `L1`-norm equality in 2.1 lacked its translation-isometry justification. I added Fact F7 from the published translation-continuity theorem's Facts [L3], localized it to `K+h_m`, and cited it in the step. Step 3.1 also uses that `K` has finite measure, so I added the F3 tag. For Step 4.1 I made the tail qualification `h_m<1` explicit, extended F4 to cover the compact state interval needed for `f`, and cited the box-measure theorem for `lambda_2(I × (0, epsilon)) = |I| epsilon`. I updated the proof-contract citations and derivations for these steps.

No stale `verification.judge` record was present in the three edited items. The existing hash-bound review records in the proof-contract file were preserved.

## Page verdicts

- A-page `conservative-finite-volume-weak-limits`: accurate. Its summary describes the theorem's explicit strong-convergence and local-bound hypotheses and correctly limits the conclusion to the weak identity, without compactness, entropy, or CFL claims.
- B-page `conservative-finite-volume-weak-limits-examples`: accurate. Its summaries match the stationary shock calculation, the bounded noncompact sequence, and the CFL-violating entropy counterexample.

No page prose was edited. No assigned defect remains unedited.

## Validation

- Reflow and precheck passed for `ex-godunov-fv-captures-burgers-shock-speed`.
- Reflow and precheck passed for `cex-conservative-fv-weak-limit-need-not-be-entropic`.
- Reflow left `lem-conservative-fv-face-fluxes-converge-in-l1loc` unchanged; its precheck passed.
- `node tools/proof-layout.mjs` on all three changed item paths reported: 3 items, 12 steps, 0 defects.

## Blocker

None.

## Coverage limit

All assigned pages, items, and direct published dependencies were opened, as were the two indirect measure suppliers needed for the repaired proof. I did not re-audit every transitive proof below all published dependencies or inspect nonrelevant portions of the cited PDFs; the report records the sections actually inspected above.
