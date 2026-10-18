# Step 3a reader report — batch 8

Run: `numerical-analysis-remaining-71-2026-10-17`  
Batch: `8`  
Role: independent reader

## Run and scope

The autopilot status command reported the run as live at `3a-read`; the reader artifact for batch 8 was still missing at that check. The assigned manifest contains the A page `nonuniform-fast-fourier-transforms` and its B examples companion.

## Opened inventory

Pages:

- `nonuniform-fast-fourier-transforms` — `library/numerical-linear-algebra-and-approximation/nonuniform-fast-fourier-transforms.md`
- `nonuniform-fast-fourier-transforms-examples` — `library/numerical-linear-algebra-and-approximation/nonuniform-fast-fourier-transforms-examples.md`

Assigned items, read in manifest dependency order:

- Level 0: `def-nufft-finite-array-norms`; `def-nufft-periodized-gaussian-gridding-kernel`.
- Level 1: `lem-nufft-finite-euclidean-norm-triangle`; `def-nufft-transform-types-and-mode-conventions`; `lem-nufft-gaussian-periodization-converges`.
- Level 2: `lem-nufft-gaussian-image-tail-bound`; `lem-nufft-gaussian-periodization-fourier-series`; `lem-nufft-gaussian-spread-truncation-tail`.
- Level 3: `lem-nufft-gaussian-grid-alias-identity-and-bound`.
- Level 4: `alg-nufft-certified-gaussian-gridding-type1-type2`.
- Level 5: `lem-nufft-certified-gaussian-gridding-returns-a-status`; `thm-nufft-gaussian-gridding-error-and-type2-adjoint`.
- B-page examples: `ex-nufft-mri-fourier-samples`; `ex-nufft-small-deconvolution-mode-is-inconclusive`; `ex-nufft-clustered-sources-l1-error`.

Relevant published suppliers opened for the analytic and computational arguments included:

- Gaussian, Fourier, and complex foundations: `def-countable-choice`, `def-schwartz-space-and-its-seminorms`, `thm-poisson-summation-for-schwartz-functions`, `lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization`, `def-finite-sum-in-a-commutative-monoid`, `thm-generalised-associativity`, `def-complex-exponential`, `thm-complex-exponential-addition-and-real-extension`, `thm-kernel-and-fibres-of-complex-exponential`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `lem-complex-conjugation-and-modulus-laws`, and `thm-complex-numbers-form-a-field`.
- Real analysis and finite estimates: `def-complete-ordered-real-field`, `def-real-elementary-functions-and-domains`, `lem-archimedean-property-from-completeness`, `thm-geometric-series`, `cor-exponential-reciprocal-and-positivity`, `thm-exponential-is-strictly-increasing`, `thm-exponential-addition-formula`, `thm-exponential-beats-every-polynomial`, `thm-derivative-of-exponential`, `lem-derivative-algebra-and-chain-rules`, `def-continuity-and-derivative-on-real-interval`, `thm-ftc-second-part`, `thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions`, `thm-sine-and-cosine-derivatives`, `lem-elementary-power-series-converge-uniformly-on-bounded-sets`, `lem-nonnegative-square-root-exists-and-unique`, `lem-of-square-positive`, `lem-of-square-monotone`, `lem-real-and-complex-modulus-rules`, and `thm-induction-principle`.
- Certified arithmetic and transforms: `def-intervals-rectangles-and-complex-balls`, `def-dyadic-floating-point-format-and-directed-rounding`, `def-standard-relative-floating-point-model-and-unit-roundoff`, `def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma`, `def-outward-rounded-interval-and-ball-operations`, `thm-outward-rounded-operations-are-isotone-and-dag-sound`, `alg-certified-elementary-range-evaluation`, `thm-real-elementary-range-enclosures`, `alg-dyadic-square-root-bisection`, `alg-na-certified-unit-circle-phase`, `alg-na-computed-unitary-radix-two-fft`, `thm-na-computed-unitary-radix-two-fft-error-bound`, `thm-na-interval-pi-matches-canonical-fourier-pi`, and `thm-finite-parseval-and-plancherel`.
- Complexity and matrix conventions: `def-matrix-product-and-identity-matrix`, `def-logarithm-to-a-base`, `thm-natural-logarithm-laws`, and `thm-radix-two-fft-arithmetic-complexity`.

## Review and repair

The Gaussian convergence, finite image-tail, spread-tail, Fourier-series, grid-alias, adjoint, interval-containment, and error-transfer arguments are supported by their stated hypotheses and dependencies. Countable Choice is explicitly retained where the Schwartz Poisson-summation and Gaussian Fourier-transform results are used. The type-3 convention remains separate from the type-1/type-2 fast algorithm and its complexity claim.

I repaired one confirmed algorithm-specification gap. In `alg-nufft-certified-gaussian-gridding-type1-type2`, step 2 defined each periodic support set using a minimum over all integers but did not give a finite construction. The error theorem's complexity estimate counted retained support cells and therefore relied on an unstated efficient construction. The algorithm now computes $a_{j,r}=M_rx_{j,r}$, enumerates the integers from $\lceil a_{j,r}-w_r\rceil$ through $\lfloor a_{j,r}+w_r\rfloor$, and reduces them modulo $M_r$. Multiplying the original membership condition by $M_r$ proves this is the same set; the range has at most $2w_r+1$ integers, whose residues are distinct because $M_r\ge2w_r+1$.

I updated the termination proof in `lem-nufft-certified-gaussian-gridding-returns-a-status` to cite that finite support loop and updated step 4.1 of `thm-nufft-gaussian-gridding-error-and-type2-adjoint` to include its index-generation cost. For fixed $d$ and $L_r\ge1$, this cost is bounded by the theorem's displayed per-source grid term. The affected proof-contract derivations and citations were updated; citations to the current algorithm Definition in the in-scope proof contracts were refreshed. No stale `verification.judge` record was present on the edited items, and no judge stamp was added.

No other assigned item defect was confirmed. In particular, the MRI dot products, the $p=5$ least-subnormal comparison, and the clustered-source formula and $\ell^1$-scaled absolute-error interpretation check out.

## Page verdicts

- `nonuniform-fast-fourier-transforms`: **Pass after the support-enumeration repair.** The page summary accurately states the type conventions, the separate Gaussian truncations, the successful-certificate/error branch, and the type-3 limitation.
- `nonuniform-fast-fourier-transforms-examples`: **Pass.** The summary stays within the finite point-source/MRI model and does not suggest an acquisition or reconstruction guarantee.

## Uneditable defects and blockers

No uneditable defects were found in the assigned pages, assigned items, or the inspected dependency statements. No blocker remains.

## Required checks

- Reflow: algorithm, status lemma, and error theorem reported unchanged.
- Precheck: algorithm `0 checked, 0 failing`; status lemma and error theorem each `PASS`, with `0 failing`.
- Final proof layout: `3 items, 9 steps, 0 defects`.

External bibliography PDFs were not re-fetched or independently locator-checked; the reviewed proof obligations were supplied by the local arguments and their opened local dependencies, and no unresolved source-dependent claim remained.
