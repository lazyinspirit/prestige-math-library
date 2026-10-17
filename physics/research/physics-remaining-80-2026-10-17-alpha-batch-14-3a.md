# Step 3a — batch 14

Run: `physics-remaining-80-2026-10-17`; group: `batch-14`.

Scope has no touched items, page obligations, reader findings or refuter findings. The decisions file therefore requires an empty array. Mandatory risk reviews proceed in the generated order: observer theorem (level 2), then global-constraints theorem (level 5).

## Observer theorem — completed risk review

Reviewed `items/pthm-emg-observer-maxwell-current.md`, all four proof steps, and its seven direct suppliers: `post-emg-covariant-maxwell`, `lem-emg-maxwell-current-forms`, `lem-emg-gauss-finite-chain`, `thm-gr-point-normal-and-exponential-coordinate-charts`, `thm-sylvesters-law-of-inertia`, `thm-gr-density-divergence-and-finite-chain-flux`, and `def-countable-choice`. Also checked the published Hodge and metric-volume/current definitions at the exact uses.

The signed form equation gives conservation via d²=0 and the density-divergence identity. The rest-space splitting, nondegeneracy and inertia argument justify positive Gram-Schmidt denominators. The arbitrary-basis exponential chart aligns its time axis with n(p); the derivatives are of chart abbreviations, distinct from a varying observer field. Component signs and SI factors give the four equations. Finite-chain Stokes gives charge with coefficient 1/(mu0 c), including zero chains, without an infinity limit. No new choice beyond the stated AC_omega is used. No confirmed defect; no item changes or consumer propagation.

Source checks: [Tong, GR §3.2.5](https://www.damtp.cam.ac.uk/user/tong/gr/grhtml/S3.html), equations (3.114)–(3.115), supplies the form and Stokes structure with different conventions; the local signs were recomputed. [BIPM SI Brochure v4.01](https://www.bipm.org/documents/20126/41483022/SI-Brochure-9.pdf), §2.3.1, PDF pages 128–129, confirms exact c and experimentally determined mu0. These are conditional model deductions with no measured numerical premise or empirical confirmation claim. Draft mathematical suppliers retain their status; this review does not certify their unrelated transitive closure.

Initial risk report: exit 0, observer CRITICAL 9, global constraints CRITICAL 12, stress example MODERATE 3. Observer contract risk review completed before proceeding to the higher-level global-constraints review.

## Global constraints — completed risk review

Reviewed `items/pthm-emg-gauss-global-constraints.md` and all seven direct suppliers. The shared Maxwell, finite-chain, Hodge and countable-choice suppliers were already checked for the preceding item. Additional reads were `def-emg-topological-sector` (Definition) and `lem-emg-sphere-flux-holonomy` (current Statement and Proof), together with the finite-chain Stokes theorem and Lorentzian geometry conventions.

Steps 1.1–1.2 preserve the side-flux sign and the zero-current condition throughout the bounding chain. Step 1.3 computes outward flux 4πb at every positive radius; the supplier proves smoothness and closedness away from the origin. Nonzero flux precludes a bounding finite chain by Stokes. Step 1.4 has *(e²∧e³)=e⁰∧e¹, so d*F_b=0; continuity extends the calculation across polar axes. Step 2.1 uses the expressly supplied finite-cycle representation, with no triangulation claim. Step 2.2 introduces no circle-normalization or quantization premise. Step 3.1 uses *²=-id to give *(-*F_b)=F_b and both source-free equations. Zero chains, b=0 (excluded only from the nonzero-flux clause), positive-radius restriction and the excluded origin are consistent. No confirmed defect in these owned uses.

The old contract risk note described seven missing carriers; the current sphere proof declares authored carriers and supplies the relevant smoothness/closure/flux argument. The replacement risk review records the actual current use, while retaining the supplier's draft status. This is review enrichment, not a repair or proof acceptance of the whole supplier chain.

## Remaining inventory and dispositions

Opened both current page summaries and `ex-emg-electric-stress`, and checked the latter's two substitutions against the current `lem-emg-maxwell-observer-stress` Statement and component proof. Both diagonal stresses and the Lorentz trace agree, including zero fields. These untouched, unflagged carriers owe no decisions; no page was edited. The example page's conservative draft-closure qualification is retained.

Reader report/findings and refuter report contain no findings. No defect-ledger rows are warranted. No defective published supplier was confirmed in the examined uses, so no published-ledger mutation or lock was needed. No public interface changed and no consumer repair or propagation is required. Frontier dependency notes retain exact supplier IDs and draft-status qualifications. No blockers or owner escalations were found within this scope.

## Checks and limits

The immutable pre/post snapshots have identical item, contract, manifest and page fingerprints. All three current item raw SHA-256 hashes match their post snapshots (and therefore pre snapshots): observer `eb1feee3adf9cbeec1e71ab70d21325f7b77bf64204b7f750add195f09b36f55`; global constraints `78d3cc44c564543a8199b6c77b882f308d603563a40ffd3386fa1d34d1c8ca46`; example `019ad02181cbc81758d30a832adbe11b3164b22912e57b51e95b40418f32f76d`.

All 16 contract citation excerpts were checked for exact presence in current supplier bytes. Only the two mandatory contract risk reviews were changed; immutable snapshots were preserved. No item was edited, so item reflow, precheck and proof-layout after editing are inapplicable. No judge, stamp, certification or gate battery was run. Final required risk-report result follows.

`node tools/physics-support/risk-report.mjs research/physics-remaining-80-2026-10-17-batch-14.proof-contracts.json --require-reviewed` exited 0: `risk-report: 0 error(s), 3 item(s) routed`. Both CRITICAL contracts have complete Alpha risk reviews. Report and decisions JSON are complete; decisions is empty as required by the routed scope.
