# Step 3a reader report — batch 89

Run: physics-non-fluid-129-2026-10-21-r2  
Role: reader, reader-89  
Scope: batch 89 only

## Opened inventory

The assigned pages were opened:

- csm-frontier-critical-gaussian-rg — draft A page; its frontmatter places 11 items.
- csm-frontier-critical-gaussian-rg-examples — draft B page; its frontmatter places one example.

The page prerequisites were opened as context: physics pages csm-frontier-large-deviation-ensembles (draft), csm-frontier-quantitative-dlr (draft), and csm-exact-models (published); root mathematics pages finite-fourier-analysis-and-the-fast-fourier-transform, congruences-and-the-chinese-remainder-theorem, and direct-matrix-factorisations-lu-cholesky-and-qr (all read-only). The two current-run page edges to batches 86 and 88 remain recorded as verified in the batch cross-batch file; those page reviews do not supply mathematical proof steps.

All 12 assigned items were opened in dependency order:

- Level 0: def-csm-frontier-infinite-volume-criticality, def-csm-frontier-finite-gaussian-precision, lem-csm-frontier-periodic-laplacian-spectrum, lem-csm-frontier-sine-comparison, lem-csm-frontier-schur-complement-positive, lem-csm-frontier-quartic-engineering-scaling.
- Level 1: lem-csm-frontier-massless-torus-normalization-diverges, alg-csm-frontier-gaussian-block-rg.
- Level 2: def-csm-frontier-gaussian-lattice, thm-csm-frontier-gaussian-block-rg-correct.
- Level 3: thm-csm-frontier-gaussian-massless-dimension, ex-csm-frontier-rg-generates-couplings.

The exact direct item-supplier inventory was opened. Eight suppliers are other assigned items listed above; the published local supplier is thm-csm-examples-quadratic-covariance (opened with its proof and current published home csm-exact-models). The 40 imported mathematics suppliers whose claim statements were checked are:

cor-additivity-of-the-nonnegative-lebesgue-integral; cor-complex-exponential-cartesian-form-modulus-and-eulers-identity; cor-differentiable-implies-continuous; cor-mean-value-theorem; def-addition-and-multiplication-modulo-n; def-complex-exponential; def-countable-choice; def-integers-modulo-n; def-integrable-real-and-complex-functions-and-their-integrals; def-lebesgue-measure-and-the-lebesgue-sigma-algebra; def-natural-logarithm; def-nonnegative-lebesgue-integral; lem-complex-conjugation-and-modulus-laws; lem-derivative-of-a-power; lem-finite-sum-reindexing-and-fubini; lem-orthogonality-of-characters-on-a-finite-cyclic-group; prop-order-and-scalar-rules-for-the-nonnegative-integral; thm-algebra-of-derivatives; thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions; thm-chain-rule; thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique; thm-complex-exponential-addition-and-real-extension; thm-continuous-preimages-of-borel-sets-are-borel; thm-determinant-multiplicative; thm-determinant-of-a-triangular-matrix; thm-geometric-series; thm-integers-modulo-n-basic-algebra; thm-kernel-and-fibres-of-complex-exponential; thm-lebesgue-measure-of-a-box-of-every-kind; thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets; thm-monotone-convergence-for-the-integral; thm-natural-logarithm-laws; thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions; thm-quarter-turn-values-and-shift-formulas; thm-real-square-matrix-invertible-iff-determinant-nonzero; thm-sine-and-cosine-addition-formulas; thm-sine-and-cosine-derivatives; thm-sine-cosine-signs-monotonicity-and-ranges; thm-standard-representatives-modulo-n; thm-tonelli-theorem-for-sigma-finite-product-spaces.

The published definition def-cm-covariance-matrix-of-a-random-vector was also inspected as a candidate notation supplier; the finite-Gaussian definition now gives the needed expectation and covariance integrals locally, so no new dependency was added.

The batch manifest, coverage record, author notes, cross-batch file, and proof-contract file were opened as evidence, not treated as verdicts; the affected contracts were inspected and refreshed. The current authored claims and proofs were checked independently.

## Repairs and evidence

Seven assigned items were repaired:

1. def-csm-frontier-infinite-volume-criticality: corrected the Tong locator from §1.2.3 to §1.2.1, printed pp. 12–13, where the notes discuss finite partition-function analyticity and the thermodynamic-limit singularity possibility. Corrected the Friedli–Velenik locator from Chapter 3 §3.10 pp. 118–121 to Chapter 1 §1.5 pp. 47–48, the discussion of finite-volume real analyticity and singular behavior after the thermodynamic limit. The exact arXiv version cited for Touchette does use §V.F, printed pp. 55–56 / PDF pp. 54–55; that locator was retained. The relevant passages were checked in the [Tong lecture PDF](https://davidtong.org/pdfs/teaching/statistical-field-theory/sft1.pdf), the authors' [Friedli–Velenik Introduction](https://www.unige.ch/~velenik/smbook/Introduction.pdf), and the cited [Touchette arXiv PDF](https://arxiv.org/pdf/0804.0327).

2. def-csm-frontier-finite-gaussian-precision: defined the mean vector and covariance matrix by their coordinate integrals and stated that the cited Gaussian theorem makes them finite, zero, and K⁻¹ respectively. Defined centered after stating the zero-mean conclusion. The physical conversion now states the SI units of Kphys, kB, T, and β. The local covariance theorem was read in full; its proof establishes the needed absolute integrability of first and second moments.

3. def-csm-frontier-gaussian-lattice: tied the physical conversion to the exact earlier quadratic convention and made the dimensionless and SI precision relation explicit, including Kphys = (kBT/Φ*²)K(d,L,m,κ). This is dimensional bookkeeping, not an empirical premise.

4. lem-csm-frontier-schur-complement-positive: defined symmetric positive definiteness before its use and made the block matrix dimensions explicit. The local completion-of-the-square proof and the positive Schur complement argument remain unchanged.

5. lem-csm-frontier-quartic-engineering-scaling: defined C_c^∞(Rᵈ) as real-valued functions with continuous partial derivatives of every order and compact support; the support is given as the closure of the nonzero set. The proof's change-of-variables and chain-rule calculations are unchanged.

6. thm-csm-frontier-gaussian-massless-dimension: defined k·x and |k|₂² by coordinate sums and called κ a positive parameter. The dyadic shell estimates and dimension threshold remain unchanged.

7. thm-csm-frontier-gaussian-block-rg-correct: defined the zero-dimensional eliminated-coordinate space and its measure as the singleton with unit mass. The normalizer proof now handles no elimination, complete elimination, and the case with both retained and eliminated coordinates separately; Tonelli and the positive-dimensional product-measure theorem are used in the latter case. The assigned algorithm and B-page example were checked as direct consumers: the algorithm's zero-change stages use the unit-mass convention, and the example uses one scalar elimination with nonempty retained coordinates. The affected proof-contract derivations, empty-boundary record, and exact current supplier excerpts were refreshed.

The direct and indirect assigned consumers of the clarified covariance, physical-convention, Schur, and Gaussian-elimination claims were checked; none required further edits. No changed item had a verification.judge record, so none was removed. No item was withdrawn or removed in the reader repairs.

## Diagram review

No TikZ or tikzcd diagram occurs in the two assigned pages or 12 items. These finite-dimensional matrix and integral arguments do not require an explanatory diagram; no diagram was added.

## Validation

- Reflow ran on each of the seven changed item paths; all reported unchanged.
- Precheck ran on each changed path: the four proof-bearing items passed; the three definitions had no proof steps to check and reported 0 checked, 0 failing.
- Final proof-layout command covered all seven changed item paths: 7 items, 13 proof steps, 0 defects.
- No full-run gate or publication action was attempted.

## Page verdicts and remaining issues

- csm-frontier-critical-gaussian-rg (A page): reader verdict — pass after the listed repairs. All 11 placed items and its page prerequisites were reviewed; the page remains frontmatter-only.
- csm-frontier-critical-gaussian-rg-examples (B page): reader verdict — pass. Its single star-elimination example has a positive-definite witness and the Schur-complement computation gives every distinct-leaf entry −1.

No defect remains unedited in the assigned pages or items, and no published dependency defect was found. The authors' batch notes report that the run-wide dependency-level snapshot is stale and requires owner recomputation at the drained join; I did not independently validate or alter run-wide state. I also did not re-audit the complete proofs of all imported mathematics suppliers; their exact statement/hypothesis uses were checked, and the local Gaussian supplier proof used for the normalization and covariance claims was read in full.
