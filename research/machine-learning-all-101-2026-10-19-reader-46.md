# Step 3a reader report — batch 46

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Output findings: `research/machine-learning-all-101-2026-10-19-reader-findings-46.json`

## Opened inventory

Assigned pages:

- `library/machine-learning/marchenko-pastur-law-and-edge-bounds.md` (A)
- `library/machine-learning/marchenko-pastur-law-and-edge-bounds-examples.md` (B)

Required page dependencies opened: `library/linear-algebra/the-spectral-theorem-and-singular-value-decomposition.md`, `library/probability/weak-convergence-tightness-and-representation.md`, and `library/mathematical-statistics/robust-influence-and-breakdown.md`.

Assigned items, opened in dependency order:

- Level 0: `def-marchenko-pastur-measure`, `def-sample-covariance-empirical-spectral-distribution`, `def-stieltjes-transform-of-a-real-probability-measure`, `lem-fixed-degree-covariance-trace-and-edge-witnesses`, `lem-fourth-moment-quadratic-form-resolvent-bound`, `lem-rank-one-resolvent-update-and-trace-bound`, `lem-uniform-row-partial-sums-of-nested-finite-variance-array`.
- Level 1: `lem-adapted-resolvent-trace-concentration`, `lem-marchenko-pastur-formula-defines-a-finite-measure`, `lem-nested-iid-fourth-moment-truncation-and-diagonal-control`, `lem-sample-covariance-empirical-law-is-a-probability-measure`, `lem-stieltjes-transform-inversion-and-uniqueness-on-the-real-line`.
- Level 2: `lem-nonbacktracking-covariance-high-moment-bound`, `thm-marchenko-pastur-law-for-sample-covariance`.
- Level 3: `lem-largest-sample-covariance-eigenvalue-lower-bound`, `lem-sample-covariance-spectrum-confinement`.
- Level 4: `lem-largest-sample-covariance-eigenvalue-upper-bound`, `thm-bai-yin-smallest-singular-value-limits`.
- Level 5: `thm-largest-eigenvalue-sample-covariance-edge`, `thm-smallest-positive-eigenvalue-sample-covariance-edge`.
- Level 6: `ex-marchenko-pastur-law-and-edges-at-aspect-one-quarter`, `ex-marchenko-pastur-law-and-edges-at-aspect-four`, `ex-marchenko-pastur-law-and-closing-edge-at-aspect-one`.

Direct external item suppliers opened at their claim/fact interfaces: `cor-first-borel-cantelli-lemma-for-events`, `cor-markov-inequality-for-random-variables`, `cor-rank-equals-number-of-nonzero-singular-values`, `cor-real-spectral-theorem-for-self-adjoint-endomorphisms`, `cor-tightness-extracts-a-weakly-convergent-subsequence`, `def-almost-sure-convergence-of-random-variables`, `def-axiom-of-choice`, `def-borel-sigma-algebra`, `def-dirac-measure`, `def-identically-distributed-and-iid-random-variables`, `def-integrable-real-and-complex-functions-and-their-integrals`, `def-lebesgue-measure-and-the-lebesgue-sigma-algebra`, `def-probability-measure`, `def-weak-convergence-of-borel-probability-measures`, `lem-finite-empirical-measure-is-a-probability-law`, `thm-chebyshev-inequality`, `thm-dominated-convergence`, `thm-dynkin-pi-lambda`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-identity-theorem-holomorphic-functions`, `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`, `thm-independent-random-elements-have-product-joint-law`, `thm-kolmogorov-iid-l1-strong-law`, `thm-mcdiarmid-bounded-differences`, `thm-operator-norm-is-the-largest-singular-value`, `thm-singular-value-decomposition`, and `thm-tonelli-theorem-for-sigma-finite-product-spaces`.

Additional suppliers opened to verify the measure-construction hypotheses: `def-countable-choice`, `thm-choice-implies-dependent-implies-countable-choice`, `thm-lebesgue-measure-is-a-complete-measure`, and `thm-borel-sets-are-lebesgue-measurable`.

For the changed measure/Stieltjes interfaces, I also checked the relevant claims of the batch-47 consumers `cor-isotropic-minimum-norm-risk-closure-under-edge-gap`, `ex-isotropic-sample-covariance-directional-marchenko-pastur-limit`, `ex-critical-aspect-one-no-positive-edge-gap`, `thm-general-population-sample-covariance-esd-limit-for-bounded-entries`, `thm-directional-sample-covariance-resolvent-limit-for-bounded-entries`, and `thm-directional-sample-covariance-resolvent-limit`. Their statements assume AC, which supplies the added countable-choice premise. No batch-47 files were edited.

## Review findings

The local proofs for the MP weak law, fixed-degree trace moments, nonbacktracking norm bound, spectral confinement, and the upper and lower edge limits were checked in dependency order. The aspect-ratio examples correctly evaluate the density, zero atom, structural zero counts, and edge limits. The weak ESD theorem is not used to prove either edge bound.

The MP formula and Stieltjes inversion proofs used Lebesgue measure as a sigma-finite measure and used Borel kernels/densities as Lebesgue measurable. The repository’s Lebesgue-measure result requires countable choice, so this was a real missing premise. In the inversion proof, the product measurability of the Poisson kernel was also left implicit; it is now derived from continuity and the countable rational-rectangle basis.

No TikZ/tikzcd or other diagram source occurs in the assigned items, and none of these expositions requires a diagram. No statement/definition/example section in the assigned items is interrupted by a hyperlink.

## Repairs and evidence

- `items/lem-adapted-resolvent-trace-concentration.md`: stated that all indexed random vectors live on one common probability space. Borel–Cantelli in proof step 4.1 is an almost-sure statement across (n), so this shared space is required. The existing independence assumption remains within each fixed (n); no cross-(n) independence was added.
- `items/thm-marchenko-pastur-law-for-sample-covariance.md`: stated a common probability space and that one common entry law is shared across all (X_n). The proof uses one fourth moment μ₄ in step 2.1 and the variance ((μ₄-1)/(np_n)) in step 5.1. Added the AC-to-countable-choice bridge used by its MP-measure and inversion suppliers.
- `items/def-marchenko-pastur-measure.md` and `items/lem-marchenko-pastur-formula-defines-a-finite-measure.md`: made countable choice explicit. `thm-lebesgue-measure-is-a-complete-measure` establishes that Lebesgue measure is a measure under countable choice, and `thm-borel-sets-are-lebesgue-measurable` supplies the needed measurability of the density.
- `items/lem-marchenko-pastur-formula-defines-a-finite-measure.md`: updated its dependencies and proof facts to cite the countable-choice Lebesgue measure and Borel-measurability results.
- `items/lem-stieltjes-transform-inversion-and-uniqueness-on-the-real-line.md`: made countable choice explicit, added the Lebesgue measure/Borel measurability suppliers, and supplied the missing product-measurability argument for the continuous kernel using rational open rectangles. Its dependencies and proof-contract citations were updated.
- `items/thm-marchenko-pastur-law-for-sample-covariance.md` and the three assigned example items: recorded AC ⇒ countable choice as an explicit fact and dependency, and cited it where those items use the conditional MP-measure interfaces.
- `items/thm-bai-yin-smallest-singular-value-limits.md`: changed the title to “Bai–Yin lower singular-value limits and full rank away from aspect one.” The statement proves full rectangular rank only for γ≠1 and allows rank defects at γ=1.
- `research/machine-learning-all-101-2026-10-19-batch-46.proof-contracts.json`: refreshed affected source quotes and added the common-space/common-law inputs plus the countable-choice, Borel-measurability, and AC-to-countable-choice citations and step inputs. The changed item frontmatter contained no `verification.judge` record to remove.

Source checks: Junyi Liao, *Random Matrix Theory*, Theorem 2.1 (printed p. 30) states that for iid complex entries with mean zero and variance one and aspect ratio $\alpha>0$, the ESD of $n^{-1}X_nX_n^*$ converges almost surely to the MP density $\sqrt{(\lambda_+-x)(x-\lambda_-)}/(2\pi\alpha x)$ on $[\lambda_-,\lambda_+]$, with an atom $1-1/\alpha$ at zero when $\alpha>1$, where $\lambda_\pm=(1\pm\sqrt\alpha)^2$. Its §2.1.3 (printed pp. 34–38) gives the bounded reduction, row-deletion/Schur-complement calculation, and Stieltjes fixed-point argument ([notes PDF](https://jurrivhleon.github.io/notes/rmt.pdf)). The official Project Euclid abstract for Bai and Yin, *Annals of Probability* 21(3) (1993), pp. 1275–1294, Theorem 1, states that the least eigenvalue for $p\le n$ (or the $(p-n+1)$-st for $p>n$) tends to $(1-\sqrt\gamma)^2$ for iid mean-zero, variance-one entries with finite fourth moment; it also reports the largest-edge limit as a byproduct ([publication record](https://doi.org/10.1214/aop/1176989118)). The full Bai–Yin paper did not load in this review. The original Marchenko–Pastur English PDF timed out at the MathNet record ([article page](https://doi.org/10.1070/SM1967v001n04ABEH001994)); the local batch proof was checked directly.

## Unedited defects

No confirmed defect remains in the assigned items or pages. No proposed withdrawal or out-of-scope repair was left pending.

## Page verdicts

- `marchenko-pastur-law-and-edge-bounds` (A): no page defect found. The page is metadata-only with `page_layout: compact-v1`; its item inventory matches the batch manifest.
- `marchenko-pastur-law-and-edge-bounds-examples` (B): no page defect found. The body is empty with `page_layout: compact-v1`; its three examples match the batch manifest.

## Validation and blockers

Reflow and precheck were run for all nine changed items. Reflow reported them unchanged; precheck passed for all proof-bearing items, and the definition precheck reported 0 checked and 0 failing. The required single batched command, `node tools/proof-layout.mjs` over all nine changed item paths, reported 9 items, 28 steps, and 0 defects.

No batch-46 blocker remains. At the final run-status check (2026-10-19 12:16 UTC), the live run still listed unrelated blockers: `3a-split` on `split-51` (covers 51) and `3a-collect` on `collect-36` (covers 36).
