# Step 3a reader report — batch 73

Run: `physics-remaining-80-2026-10-17`  
Role: `reader-73`

## Opened inventory

- Assigned pages: `tgr-mhs01`, `tgr-mhs01-examples`.
- Assigned items, reviewed in dependency order: `def-tgr-horizon-screen-family`, `lem-tgr-null-screen-quotient-positive`, `lem-tgr-schwarzschild-horizon-data`, `thm-tgr-smooth-null-area`, `prop-tgr-kn-first-law-smarr`, `ex-tgr-schwarzschild-family-data`, and `cex-tgr-ingoing-null-cone-area`.
- Current task evidence: `research/physics-remaining-80-2026-10-17-batch-73.pages.json` and `research/physics-remaining-80-2026-10-17-batch-73.proof-contracts.json`.
- Declared prerequisite pages: `emg-ms02`, `tgr-mi02`, and `em-elementary-mathematical-prerequisites`.
- Current-run suppliers opened for their assigned uses: `thm-emg-xs-kn-extension`, `prop-emg-xs-kn-horizon-data`, `def-emg-causal-solution-and-horizon-vocabulary`, `def-emg-explicit-power-regimes`, `thm-gr-killing-and-on-shell-matter-identities`, `lem-gr-future-causal-classification-by-a-timelike-field`, and `lem-tgr-first-law-calibration-freedom`.
- Mathematical suppliers opened for the checked arguments: `def-gr-smooth-lorentzian-objects`, `def-gr-metric-selected-connection`, `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`, `def-embedded-submanifold-and-slice-chart`, `def-pullback-connection`, `thm-pullback-connection-is-well-defined-and-functorial`, `thm-sylvesters-law-of-inertia`, `def-gr-killing-field`, `thm-real-power-continuity-and-derivatives`, `def-gr-curvature-tensor-and-derived-tensors`, `thm-gr-curvature-tensoriality-and-coordinate-formula`, `thm-gr-local-geodesics-and-exponential-map`, `thm-smooth-inverse-function-theorem-on-manifolds`, `def-riemannian-volume-density`, `def-integral-of-a-compactly-supported-smooth-density`, `thm-density-integration-is-defined-without-an-orientation`, `thm-smooth-partitions-of-unity-exist-on-manifolds`, `lem-em-parameter-integrals`, `cor-mean-value-theorem`, `def-countable-choice`, and `thm-local-existence-uniqueness-and-smooth-dependence-for-manifold-integral-curves`.

## Review and page verdicts

### `tgr-mhs01` — no remaining defect

The screen quotient construction defines the relevant fields and spaces, and the null-screen lemma supplies a valid local null companion, smooth rank-two quotient frame, positive metric, and representative-independent deformation form. The Schwarzschild specialization verifies the stated null Killing horizon, future direction, signed surface gravity, and round-section area directly from the selected ingoing metric. The restricted area theorem's Raychaudhuri calculation, finite-parameter blow-up contradiction, and compact-density differentiation argument are supported under its explicit affine-flow, persistence, null-convergence, and countable-choice hypotheses. The KN differential and Smarr identities, including the fixed-$(a,q)$ work term and the separate fixed-$(j,q)$ work-free family, follow from the displayed algebra and the exact horizon-data suppliers. The page summary preserves the theorem's restricted scope and does not identify mathematical functions with operational thermodynamic quantities.

### `tgr-mhs01-examples` — no remaining defect after the item repair below

The Schwarzschild, nonrotating charged, and extremal-boundary calculations agree with the verified suppliers and the strict-family identities. The cone computation has zero Ricci contraction, negative expansion, decreasing round-cut area, and a finite future vertex. The item's initially unstated initial-cut condition was repaired, so the cuts now lie on the stated cone throughout their pre-vertex interval. The page prose and diagram accurately describe the example and do not supply proof steps.

## Repair

In `items/cex-tgr-ingoing-null-cone-area.md`, the counterexample previously introduced an initial radius `r_0` and parameter `lambda_0` without requiring the initial sphere to lie on `H={t+r=0}`. The claimed cuts would otherwise fail to be subsets of `H`; the subsequent transversality assertion and vertex description would not follow. I set `r_0>0` and `lambda_0=-r_0`, explicitly identify the initial cut on `H`, state the cut interval through `lambda_*=0`, and verify `lambda+r(lambda)=0` for each cut. I also made the weakened implication being refuted explicit in terms of the previously defined generator, cut-flow, and area conventions. This preserves the counterexample's intended claim and makes its witness valid.

I updated the `cex-tgr-ingoing-null-cone-area` derivation entries in the batch proof contract to bind the initial cut and on-cone identity. The item had no `verification.judge` record to remove.

Required checks after the final edit:

- Reflow: `unchanged`.
- Precheck: `PASS` (1 checked, 0 failing).
- Proof layout: 1 item, 4 steps, 0 defects.

## Unedited defects and blockers

No unedited defects or blockers remain in the assigned pages/items or the supplier uses reviewed for this batch. I did not retrieve the cited external PDFs; their locators were not used as proof evidence, and no unresolved source-fidelity question arose. The local arguments and exact in-library supplier interfaces were reviewed directly.
