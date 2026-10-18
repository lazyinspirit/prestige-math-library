# Step 3a reader report — batch 12

Run: `numerical-analysis-remaining-71-2026-10-17`  
Role: reader  
Verdict: both assigned pages pass; no confirmed defects remain.

## Opened inventory

### Assigned pages

- `library/numerical-linear-algebra-and-approximation/ewald-periodic-potentials-and-particle-mesh-error.md` — draft A page.
- `library/numerical-linear-algebra-and-approximation/ewald-periodic-potentials-and-particle-mesh-error-examples.md` — draft B page.

### Assigned items, dependency order

- Level 0: `def-ewald-causal-cardinal-spline-window`, `def-ewald-three-dimensional-periodic-source-data`, `lem-ewald-screened-coulomb-kernel-and-self-limit`.
- Level 1: `def-ewald-pme-cardinal-assignment-model`, `lem-ewald-gaussian-poisson-periodization`, `lem-ewald-lattice-shell-gaussian-tail-controllers`, `lem-ewald-smooth-torus-fourier-pairing`, `ex-ewald-nonneutral-zero-mode-obstruction`.
- Level 2: `lem-ewald-pme-spline-alias-and-dft-normalization`, `thm-ewald-neutral-periodic-poisson-green-function`.
- Level 3: `lem-ewald-pme-derivative-window-alias-bound`, `thm-ewald-alpha-independent-energy-and-potential`.
- Level 4: `thm-ewald-pme-reciprocal-energy-force-error-bound`, `thm-ewald-real-reciprocal-cutoff-error-bounds`, `ex-ewald-neutral-dipole-cell`, `ex-ewald-source-collision-field-singularity`.
- Level 5: `thm-ewald-total-pme-error-certificate`, `ex-ewald-alpha-cutoff-tradeoff`, `ex-ewald-mesh-energy-force-consistency`.
- Level 6: `alg-ewald-certified-particle-mesh-evaluator`.
- Level 7: `lem-ewald-certified-particle-mesh-evaluator-terminates`.

All 21 listed item carriers and both page carriers were opened. I also opened the batch manifest, reader brief, batch proof-contract file, and active run status. The run status identified this as the active Step 3a read and showed no earlier batch-12 result.

### Published dependency statements opened

The following current published suppliers were opened for the definitions, hypotheses, or exact formulas used by the assigned arguments:

`alg-certified-elementary-range-evaluation`, `alg-dyadic-square-root-bisection`, `alg-na-certified-unit-circle-phase`, `alg-na-computed-fast-transforms-and-convolution`, `alg-na-computed-fft-cyclic-and-linear-convolution`, `alg-na-computed-unitary-radix-two-fft`, `cor-c-one-change-of-variables-for-l-one-functions`, `def-convolution-of-two-functions-on-rn`, `def-countable-choice`, `def-dyadic-floating-point-format-and-directed-rounding`, `def-full-rank-lattice-covolume-and-dual-lattice`, `def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma`, `def-outward-rounded-interval-and-ball-operations`, `def-unitary-discrete-fourier-transform-on-z-mod-n`, `lem-character-orthogonality-on-a-lattice-fundamental-domain`, `lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization`, `lem-lattice-fundamental-parallelotope-partitions-euclidean-space`, `lem-lattice-periodic-continuous-functions-are-determined-by-their-lattice-fourier-coefficients`, `lem-smooth-bump-between-concentric-euclidean-balls`, `thm-chain-rule`, `thm-continuous-partial-derivatives-imply-total-differentiability`, `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`, `thm-ftc-first-part`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-gaussian-integral`, `thm-integration-by-parts`, `thm-na-arbitrary-length-fft-correctness-and-cost`, `thm-of-archimedean`, `thm-p-series-real-exponents`, `thm-poisson-summation-for-a-full-rank-lattice`, `thm-sine-and-cosine-derivatives`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-uniform-derivative-limit-on-a-closed-interval`, `thm-uniform-limit-continuous-real-functions`, and `thm-weierstrass-m-test-for-complex-function-series`.

## Review and evidence

- The causal spline definition is finite and supported on the stated interval. The alias proof derives its convolution, partition, Fourier multiplier, signed aliases, and unitary DFT scaling locally. The conjugated denominator agrees with the negative-sign transform convention. The separate (P=2) derivative branch uses finite piecewise derivatives rather than the divergent absolute derivative-alias series.
- The torus source, zero-mode convention, Gaussian periodization, mean-zero Poisson solution, and alpha-independent Ewald representation retain the cell volume, angular-frequency, neutrality, and self-term factors. The radial shell count and integral controllers bound the stated real and reciprocal tails. The force formulas differentiate the stated energies with the own zero-image term excluded.
- The reciprocal mesh estimates distinguish deterministic pointwise/per-particle bounds from RMS estimates. The correction identities retain the diagonal terms and their branch derivatives. The total certificate separately includes real cutoff, reciprocal cutoff, omitted in-ball modes (including mesh-excluded modes), retained aliases, force differentiation, optional self correction, and arithmetic radii.
- The evaluator specifies finite mode, support, image, controller, and transform loops; unresolved enclosures and branch tests return explicit statuses. The termination proof gives finite bounds for these loops and does not infer attainable accuracy from its operation counts.
- The five examples use admissible neutral or nonneutral data as claimed. Their calculations agree with the supplier conventions, including the dipole structure factor, source singularity, cutoff monotonicity, and the (P=3) energy-gradient force.
- The A-page summary matches the included definitions, proofs, error bounds, and termination result. The B-page summary matches its five examples. Neither page makes a stronger claim than its assigned items establish.
- The batch proof-contract file contains entries for all 21 assigned items. For the 17 proof-bearing items, each current numbered proof/verification step label matches a derivation row. This structural check was treated as evidence, not as a mathematical verdict.

## Literature checks

- Deserno and Holm, [“How to mesh up Ewald sums (I)”](https://arxiv.org/pdf/cond-mat/9807099), §3, equations (18)–(20), printed pp. 4–5, identifies the cardinal spline Fourier multiplier, its (P)-fold convolution construction, and tensor-product assignment. Their accuracy section, equation (37), defines an RMS force error; the assigned deterministic estimates are proved locally and are not attributed to that RMS result.
- The same paper, equations (3)–(6), printed pp. 1–2, records the erfc real-space term, Gaussian-damped reciprocal term, self correction, and alpha-independent Ewald sum; equations (12)–(15), printed pp. 2–3, give force by energy differentiation.
- Lee and Cai, [“Ewald Summation for Coulomb Interactions in a Periodic Supercell”](https://warwick.ac.uk/fac/sci/moac/degreescopy/degrees-copy/modules/ch926/lectures/molsim/ewaldsummationnotes.pdf), §§3–5, equations (24)–(36), printed pp. 3–6, gives the erf/erfc split, the self limit, reciprocal Gaussian coefficient, structure factor, zero mode, and reciprocal energy.
- Cerutti and Case, [“Multi-Level Ewald”](https://pmc.ncbi.nlm.nih.gov/articles/PMC3202610/), §2.1, equations (2)–(7), describes the mesh convolution, cardinal B-spline assignment, reciprocal kernel, and interpolation pipeline. These sources support the numerical context; the assigned proofs supply the local normalization and deterministic bounds.

## Edits, unresolved defects, and blockers

- Edits: none. No confirmed defect required an item or A-page repair; no assigned carrier was changed.
- Unedited defects: none confirmed.
- Page verdicts: A page passes; B page passes.
- Blocker: none.
- Since no item was changed or formatted, the post-edit `proof-layout` command was not applicable. No proof-layout, precheck, reflow, or test command was run.

## Coverage note

The full assigned inventory and the relevant current statements and sections of direct published suppliers were reviewed. I did not independently re-audit every transitive proof in the published library; no conclusion here depends on an uninspected transitive statement. The source checks above are limited to the named sections and locators.
