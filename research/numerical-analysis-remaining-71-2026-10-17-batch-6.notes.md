# Batch 6 notes — Wavelet transforms and nonlinear approximation

## Plan reconciliation

- The batch-6 task, research/plan-spec.json, and the complete APP-WAVELET section of research/plan-numerical-linear-track.md agree on pair IDs, category, title, A/B placement, the two requires page IDs, the three scope clauses, and the stated filter-bank/projection proof route. No scope conflict was found.
- The repaired APP-WAVELET note in research/numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md calls computed-fast-transforms-and-convolution and polynomial-approximation-and-chebyshev-interpolation proposed same-frontier pages “not a current library item.” Current repository carriers for both pages are already published. This is a stale supplier-status statement, not a reason to add proof dependencies: the current task and plan retain them as page-level prerequisites, while the local wavelet arguments do not use an item from either page as a proof premise.
- The batch dependency artifact gives batch 6 level 0 with no prerequisite batches. This is consistent with the two required pages being outside this run's item inventory. The authored local item levels are 0–5, computed from actual in-batch deps; no cycle was found in the batch-6 graph.

## Mathematical scope and qualifications

- The finite Haar transform and the periodic compact-filter transform are finite-dimensional procedures. The filter definition fixes tap support, even input length, N >= 2L, modulo indexing, no padding, and the stop rule. The inverse/Parseval proof is an explicit row-correlation calculation.
- The four-tap D4 coefficients are displayed exactly and all QMF and first two high-pass moment identities are checked by arithmetic before use.
- The Haar approximation estimate is for the explicitly defined smooth derivative-bound class and cell-average projection. The norm in the statement is the direct square-integral norm; no general Sobolev-space completeness result is used.
- The higher-order result is a finite, periodic, sampled-data result for the explicit D4 multilevel transform. It proves the two-moment local coefficient estimate from the finite tap support and Taylor remainder. The Besov quantity is the declared finite wavelet-coefficient quasi-norm at critical p = 1/(s+1/2); no equivalence to an intrinsic function-space Besov norm or unproved continuum wavelet-basis theorem is asserted.
- The biorthogonal statement is only the finite Riesz synthesis inequality. Both lower and upper Riesz constants are carried into its error bound.
- No arbitrary-choice principle is used. The local results make no axiom-strength changes to their suppliers.

## Source reading and retrieval

Three independent treatments were inspected for the A page: Strang–Amaratunga's full MIT OCW lecture-note PDFs (Handouts 3, 7, 8, 11, 13, and 15), Mallat's author-hosted 32-page textbook Chapter 9, and Kovačević–Goyal–Vetterli's full 294-page textbook *Fourier and Wavelet Signal Processing*. The latter's Chapter 1, §1.3.2, Example 1.3 (printed pp. 22–23) gives the exact four D4 low-pass coefficients; Handout 8 is recorded as general maxflat/spectral-factorization context, not as the source of that exact vector. Full-text URLs, page locators, item coverage, and each harvested result's inline-versus-local-proof disposition are recorded in numerical-analysis-remaining-71-2026-10-17-batch-6.coverage.json. After adding the textbook source, `node tools/source-fetch-check.mjs --coverage research/numerical-analysis-remaining-71-2026-10-17-batch-6.coverage.json --stamp` reported 10/10 sources verified, with one newly stamped and zero documented drops; the subsequent non-stamping check also passed 10/10.

The published direct suppliers def-euclidean-inner-product, def-continuity-and-derivative-on-real-interval, and lem-taylor-lagrange-remainder-from-mean-value were inspected. The Taylor lemma's complete proof and its mean-value/Rolle support were read; no choice axiom is introduced.

## Scoped checks and external blockers

- Batch-local dependency recomputation checked all 22 manifest items at levels 0–5 with no findings. Strict proof-contract validation passed 22/22; precheck passed all 13 proof-bearing items; rendercheck passed all 22 items and both pages (24 files); proof-layout passed all 22 changed item files (30 numbered steps, zero defects). The author-check evidence at `research/numerical-analysis-remaining-71-2026-10-17-author-check-6.json` records precheck, rendercheck, item content policy, and strict proof-contract checks all passing.
- Final `step1-decisions record` entries are `ready` for all 22 assigned items with their declared direct dependency lists. Recomputing the batch subset after recording found 22/22 current hashes closed and no assigned escalation. The run-wide readiness check remains open on other items/pages outside batch 6.
- The required run-wide dependency check is blocked by other batches' current manifests/items: it reports 92 findings total, comprising 87 empty inventories on other pages and five dependency-level mismatches. The mismatches are `ex-ewald-source-collision-field-singularity` (4 vs computed 1), `lem-na-fresnel-integral` (0 vs 2), `lem-double-exponential-truncated-tail-bound` (0 vs 1), `thm-second-order-meshfree-convolution-bias` (2 vs 3), and `ex-interior-constant-and-affine-kernel-reproduction` (2 vs 3). The empty inventories and mismatched items are outside batch 6 and were left untouched; this batch itself has no dependency-level error or cycle.

During final review, the best-m theorem's $m=N$ explanation was corrected to distinguish the actual zero reconstruction error from the positive general upper bound. The sampled-smooth results now state a globally defined periodic $C^2$ function and identify its restriction to the local class $\mathcal S^2$, so the domain and periodic-extension hypotheses are compatible.

## Readiness boundary

The page prerequisites were verified from the actual published page carriers. All assigned proof dependencies are either local to this batch or exact published definitions/results recorded in the cross-batch dependency file. A ready decision is recorded only after the final carrier, proof contract, dependency labels, and scoped checks pass; these are authoring-readiness records, not mathematical approval.
