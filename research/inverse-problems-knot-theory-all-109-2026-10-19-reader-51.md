# Step 3a reader report — batch 51

Run: inverse-problems-knot-theory-all-109-2026-10-19

## Opened inventory

Assigned pages:

- library/inverse-problems/inverse-problem-benchmarking-and-shift.md (A page).
- library/inverse-problems/inverse-problem-benchmarking-and-shift-examples.md (B page).

Assigned items, read from suppliers to consumers:

- def-ip-benchmark-risk-and-compute-budget; rem-ip-inversebench-scoped-findings.
- ex-ip-inversebench-first-born-scattering; ex-ip-inversebench-multicoil-mri; ex-ip-inversebench-black-hole-imaging; ex-ip-inversebench-full-waveform-inversion; ex-ip-inversebench-navier-stokes; ex-ip-inversebench-prior-shift; ex-ip-inversebench-solver-invalid-iterate.

Opened dependencies used to check the definitions and examples:

- def-ip-inverse-risk-under-train-and-test-laws; def-ip-learned-reconstruction-estimator; def-ip-operator-and-prior-mismatch; def-ip-pde-solver-admissibility-contract; def-ip-diffusion-prior-score-and-measurement-score.
- thm-measurability-of-integration-against-a-kernel; def-measure-kernel-and-probability-kernel; def-loss-function-and-risk; def-product-sigma-algebra-and-finite-product-sigma-algebras; def-measurable-function-between-measurable-spaces.

The A-page and B-page YAML inventories were checked; both bodies are empty, both preserve page_layout: compact-v1, and neither contains a summary.

## Review and edits

- def-ip-benchmark-risk-and-compute-budget: The law spaces, measurable risk functional, failure recording, and no-risk-transfer caveat are consistent with the opened risk, kernel-integration, estimator, mismatch, and solver-contract dependencies. Its TikZ flow diagram matches the stated protocol and asserts no equality of training and test laws.
- rem-ip-inversebench-scoped-findings: The empirical comparisons, small validation/test splits, prior-shift observations, and first-Born paper/code distinction match the paper and pinned implementation. The claims remain explicitly task-scoped.
- ex-ip-inversebench-first-born-scattering: The finite-sum formula is real-linear in the real contrast array. Pinned inverse_scatter.py lines 322–341 and 374–375 show the forward routine uses the fixed incident field; lines 413–416 build the cached matrix from that field and conjugate it. Since the contrast is real, this agrees with the displayed z_r \overline{u_{\rm in}} coefficient. I corrected the paper locator to include Appendix A.1, Table 3, which gives the stated $\sigma_y=10^{-4}$ noise level (arXiv HTML line 432).
- ex-ip-inversebench-multicoil-mri: The fixed composition PFS_j is linear. The raw-data noise qualification, ESPIRiT sensitivity maps, magnitude-MVUE reference, and train/search/test counts match §4.1, Appendix B.2, and Table 4.
- ex-ip-inversebench-black-hole-imaging: The Fourier visibility and closure formulas are correct on their stated nonzero domains. The code's exact supporting locations are lines 100–128 (orientation flags and ordered indices), 189–217 (conjugation and closure-phase argument), and 218–242 (log-closure-amplitude ratio). I expanded the locator to cover those implementations.
- ex-ip-inversebench-full-waveform-inversion: I added the zero initial pressure and velocity conditions omitted from the example’s wave equation, and updated its source references and verification step. Pinned InverseBench acoustic.py lines 56–64 and 171–175 call the forward solver without a wavefield; locked Devito 4.8.12 wavesolver.py lines 103–106 create a default TimeFunction, while dense.py lines 84–115 and 141–155 show the default allocation is zero. The paper's §4.1 and Appendix B.4 (arXiv HTML lines 227, 634–637), plus Table 2 line 168 for the noise-free setting, support the remaining mesh, CFL, boundary, source/receiver, noise, and sample details.
- ex-ip-inversebench-navier-stokes: The vorticity equation, periodic domain, Gaussian initial-field covariance, forcing, adaptive pseudo-spectral solver, and split counts match §3, §4.1, and Appendix B.5.
- ex-ip-inversebench-prior-shift: The fastMRI counts and same-collection caveat are accurate. Figure 5 and §4.3 support the digit and nine-cell out-of-distribution observations; Appendix C lines 698–702 limits its separate prior-mismatch discussion to a preliminary study. The item makes no population-level risk claim.
- ex-ip-inversebench-solver-invalid-iterate: I removed the unsupported claim that recording an inadmissible call necessarily means assigning it no score. In def-ip-benchmark-risk-and-compute-budget, paragraph 2 requires failure status to be recorded, and paragraph 3 requires a named empirical aggregation rule for a reported finite-sample score; neither says failures must be unscored. The statement now separates required failure reporting from any scoring policy.

I updated the tracked root batch-51 contract in place, changing only the derivation records for the FWI initial-state step and solver-failure scoring step. The existing contract review metadata was preserved. None of the changed item files had a stale verification.judge record to remove.

## Page verdicts

- A page — inverse-problem-benchmarking-and-shift: Pass. Inventory/title/status metadata are intact; no body summary or prose is present. The definition and remark are mathematically and empirically scoped as stated.
- B page — inverse-problem-benchmarking-and-shift-examples: Pass. Inventory/title/status metadata are intact; no body summary or prose is present. The seven example items were checked, and the citation/statement repairs are recorded above.

## Checks and blockers

Reflow and precheck passed for all changed items:

- ex-ip-inversebench-first-born-scattering
- ex-ip-inversebench-black-hole-imaging
- ex-ip-inversebench-full-waveform-inversion
- ex-ip-inversebench-solver-invalid-iterate

The final batched proof-layout check reported 4 items, 9 steps, 0 defects.

No uneditable batch-51 defect remains. The current run status has an unrelated existing blocker: 3a-split reports split-30 failed 3x for batch 30; it is outside this assignment and was not changed. There is no batch-51 blocker.

## Coverage note

I checked the claim-bearing passages in the [InverseBench arXiv HTML, v2](https://arxiv.org/html/2503.11043), including §§3–4.3, Appendix A.1/Table 3, Appendices B.1–B.5, and Appendix C, plus the pinned [inverse-scattering](https://raw.githubusercontent.com/devzhk/InverseBench/1db5932bc2995504491663d1e2c498e7317c5404/inverse_problems/inverse_scatter.py), [black-hole](https://raw.githubusercontent.com/devzhk/InverseBench/1db5932bc2995504491663d1e2c498e7317c5404/inverse_problems/blackhole.py), and [FWI](https://raw.githubusercontent.com/devzhk/InverseBench/1db5932bc2995504491663d1e2c498e7317c5404/inverse_problems/acoustic.py) implementations, along with [Devito 4.8.12 solver](https://raw.githubusercontent.com/devitocodes/devito/v4.8.12/examples/seismic/acoustic/wavesolver.py) and [field-initialization code](https://raw.githubusercontent.com/devitocodes/devito/v4.8.12/devito/types/dense.py). The 17 MB ICLR proceedings PDF could not be fetched by the web reader; the corresponding full-text arXiv HTML and cited implementation files were available. I did not audit unrelated transitive dependencies beyond those needed for the assigned claims.
