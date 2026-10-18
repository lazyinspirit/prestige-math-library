# Batch 8 authoring notes — numerical-analysis-remaining-71-2026-10-17

## Scope and run evidence

- Assigned pair: `nonuniform-fast-fourier-transforms` and its examples page only.
- Live autopilot status was checked from `.autopilot/`; run `numerical-analysis-remaining-71-2026-10-17` was at `1-scaffold`, with no items in flight and no completed scaffold items at inspection. The many `research/*RESUME.md` files were not used as live-run evidence.
- The active run's batch-dependency input assigns batch 8 dependency level 0 and no prerequisite batches. No other pair's files or shared state were changed.
- Inventory: 11 A-page items and 3 B-page examples. Local finite-array norm and Euclidean triangle-inequality items were added when review found these were needed to state and compose the vector error bounds without leaving norm conventions or the operator-composition step implicit. The in-pair dependency levels are 0, 1, 2, 3, 4, 5 and 6, computed from declared item `deps`; the B examples depend on the A chain where needed. The exact labels are in the batch manifest and item frontmatter.
- Cross-batch item edges: none. The recorded cross-batch input is `[]`; the required computed-FFT page and the directly used interval-arithmetic items are already published, not in-run batch suppliers.

## Plan comparison and recorded conflict

- `plan-spec.json` and the assigned task give the A page the sole page-level requirement `computed-fast-transforms-and-convolution`. That is retained unchanged; the companion requires the A page.
- The repaired LIN-NUFFT design also names `VAL-INTERVAL` as a proposed same-frontier supplier edge for certified exponential, square-root, interval and ball enclosures, while stating that it adds no external canonical page token to `requires` and that the pair should not rely on an external canonical item as a proof premise. The current repository has published, fully readable interval and elementary-range items implementing those interfaces, and the assigned run contains no VAL-INTERVAL pair or dependency batch. This draft therefore records the inspected interval items as explicit item dependencies and keeps the plan-spec/task page-level requirement unchanged. This is the plan/design status discrepancy for the owner to reconcile; no interval theorem or range result was fabricated and no unsupplied in-run interface is claimed.
- The repaired design warns that type 3 must not inherit type-1 cost without frequency-space scaling/product analysis. The definition and page state this limitation; the Gaussian algorithm and complexity theorem cover only types 1 and 2.
- The A-page source notes, proof scopes and item inventory remain below the 100-item page cap.

## Mathematical dependencies and axiom branches

- Local supplier order: transform and kernel definitions (level 0); local kernel convergence and explicit image/spread tails/Fourier series (levels 1–2); exact grid alias identity and bound (level 3); finite certified gridding procedure (level 4); error/adjoint/complexity theorem (level 5); clustered-source example (level 6). The MRI sample example is level 1; the inconclusive divisor example is level 5.
- The Fourier series of the periodized Gaussian invokes the published Schwartz Poisson-summation theorem and Gaussian Fourier-transform result under Countable Choice. The alias lemma inherits that branch. The algorithm's alias certificate and the error theorem retain the same explicit Countable Choice assumption. The local periodization convergence, grid-tail estimates, image-tail bound, finite matrix transfer and B-page arithmetic examples are choice-free except where the successful-run theorem is invoked.
- The algorithm requires successful outward exp/sqrt/interval/FFT calls, strictly positive certified deconvolution intervals, and finite candidate controls. It returns `inconclusive` on failed range/denominator/FFT or positive-lower-endpoint checks. The small-multiplier example documents a finite-format failure; no successful certificate is claimed there.
- Type 2 uses the exact conjugate-transpose factorization with the same normalization. The theorem separates analytic alias/spread terms from finite interval/FFT radii and states the finite-empty-output case.

## Source harvesting and retrieval

All sources were downloaded, their complete relevant text was inspected, and successful retrieval was verified with `node tools/source-fetch-check.mjs --coverage research/numerical-analysis-remaining-71-2026-10-17-batch-8.coverage.json --stamp` (3/3 sources fetch-verified; 0 drops). The coverage JSON preserves each initial fetch attempt, URL, locator, supported item, and harvested-result disposition.

1. Jens Keiner, Stefan Kunis and Antje Vollrath, *The Nonequispaced FFT and its Applications: A Mini Course at Helsinki University of Technology*, https://math.aalto.fi/numericsyear/NFFT/nfft.pdf. Read the complete relevant Part I slide run 31–69 of the 443-page PDF: Poisson summation, transform types, Gaussian gridding/deconvolution, aliasing/truncation estimates, multivariate extension and operation count. Taylor/B-spline branches are marked out of scope with reasons; the source's Gaussian results are used as proof guides, not as substitutes for local derivations.
2. Leslie Greengard and June-Yub Lee, *Accelerating the Nonuniform Fast Fourier Transform*, https://cims.nyu.edu/~greengar/glee_nufft_sirev.pdf. Read the full 12-page paper (printed pp. 443–454), including definitions, Gaussian gridding, all examples, conclusions and references. Empirical accuracy/timing data are out of scope; MRI is used only as motivation for a newly calculated exact finite example.
3. Leslie Greengard and June-Yub Lee, *NUFFT User's Guide, Version 1.2*, https://cs.nyu.edu/~berger/nufft/nufft_manual.pdf. Read all 13 pages. It supports the explicit type-1/2/3 distinction and the warning that type-3 workspace/cost depends on source and frequency ranges.

No retrieval failed, so no source was dropped and no `source_resolution` recovery record was needed. Harvest dispositions and the exact supported items are retained in the batch coverage file.

## Mechanical checks

Required scoped checks were run after the final authoring and contract pass. No independent approval or publication is implied by these authoring records.

- Item dependency labels and carriers: 14 manifest items agree with item frontmatter dependencies and computed levels; maximum in-batch item level is 6. Both page carriers match their manifest inventories. Cross-batch dependency input is `[]`.
- Source retrieval: `node tools/source-fetch-check.mjs --coverage research/numerical-analysis-remaining-71-2026-10-17-batch-8.coverage.json --stamp` reported 3/3 sources fetch-verified and resolved, with 0 new stamps and 0 documented drops.
- Coverage checklist: 1 page, 22 harvested results, 0 errors, 1 warning. The warning reports 8/22 results scaffolded and asks Alpha to confirm the declined dispositions. The remaining results have recorded inline, deferred, or reasoned out-of-scope dispositions; this is a reconciliation note, not a missing proof premise.
- Item precheck: 13 proof-bearing items checked, 0 failing. `rendercheck` passed all 16 changed item and page files, including real KaTeX and YAML parsing.
- Strict proof contracts: 14/14 items checked, 0 errors, 0 warnings; 117 exact supplier citations and 33 proof-step mappings.
- Proof layout: 14 items, 33 steps, 0 defects.
- Step 1 readiness: records are written only after these checks and supplier/placement review; see the per-item records `research/numerical-analysis-remaining-71-2026-10-17-step1-<item-id>.json`.
