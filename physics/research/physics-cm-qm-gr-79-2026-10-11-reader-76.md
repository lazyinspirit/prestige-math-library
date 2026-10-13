# Step 3a reader report — batch 76

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: reader  
Scope: batch 76 only

## Opened inventory

Read the workspace instructions and content rules in `../CLAUDE.md`, `CLAUDE.md`, `README.md`, `SCHEMA.md`, `WORKFLOW.md`, `../PHYSICS-CONTENT-MODEL.md`, and `briefs/reader.md`. Opened the batch-76 page manifest, proof-contract file, cross-batch-dependency file, and the relevant supplier records in `research/math-imports.json`.

Assigned pages:

- `library/general-relativity/gr-experimental-interface.md` (A page).
- `library/general-relativity/gr-experimental-interface-examples.md` (B page).

Assigned items, reviewed in their logical dependency order after the initial inventory pass:

1. `items/lem-gr-reciprocal-ratio-window.md`.
2. `items/def-gr-observation-and-analysis-architecture.md`.
3. `items/rem-gr-primary-report-research-queue.md`.
4. `items/ex-gr-cosmological-redshift-interface-record-window.md`.
5. `items/cex-gr-bounded-redshift-record-does-not-identify-the-parameter.md`.

Opened the definition's direct geometry and interpretation suppliers: `def-gr-smooth-lorentzian-objects`, `post-gr-spacetime-and-classical-domain`, `def-gr-si-unit-and-coordinate-conventions`, `def-gr-metric-selected-connection`, `thm-gr-nondegenerate-levi-civita-and-tensor-derivative`, `def-gr-timelike-worldline-and-proper-time`, `lem-gr-proper-time-reparametrization-and-four-velocity`, `def-gr-observer-and-rest-space`, `def-gr-observer-congruence-and-adapted-charts`, `def-gr-observer-relative-energy-and-momentum`, `lem-gr-observer-projection-decomposition`, `lem-gr-observer-pairing-with-future-causal-vectors`, `post-gr-ideal-clocks-and-free-fall`, `def-geodesic-of-an-affine-connection`, `def-causal-classification-of-lorentz-vectors`, `def-smooth-manifold`, `def-inner-product-space`, `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`, `def-principal-inverse-sine-and-cosine`, `def-countable-choice`, and `def-gr-linearized-wave-regime-and-detector-coupling`.

Opened the reciprocal-ratio lemma's prerequisites: `def-ordered-field`, `lem-of-sign-rules`, and `lem-of-inverse-positive`.

Opened the example's FLRW, geodesic, redshift, and arithmetic suppliers: `post-gr-flrw-homogeneous-cosmological-model`, `def-gr-flrw-model-data`, `def-gr-flrw-spatial-model`, `lem-gr-flrw-metric-and-comoving-data`, `lem-gr-flrw-christoffel-symbols`, `prop-coordinate-geodesic-equation`, `pthm-gr-flrw-cosmological-redshift`, `lem-gr-reciprocal-ratio-window`, `def-real-exponential-function-and-e`, `thm-derivative-of-exponential`, `def-natural-logarithm`, `thm-logarithm-derivative-and-integral`, `def-derivative`, `thm-algebra-of-derivatives`, and `thm-chain-rule`. For the field-law consistency repair, also opened `pthm-gr-flrw-de-sitter-solutions`, `def-gr-flrw-friedmann-system`, and `pthm-gr-flrw-field-equations-reduction`.

Opened the queue's named prediction targets: `pthm-gr-schwarzschild-stationary-redshift`, `pthm-gr-schwarzschild-circular-orbit-predictions`, and `pthm-gr-plane-wave-tidal-detector-response`. The relevant imported mathematics suppliers were confirmed in `research/math-imports.json` as pinned snapshots; no imported or root mathematics source was edited.

## Findings and item dispositions

### `lem-gr-reciprocal-ratio-window` — sound

The stated map is a bijection on the positive reals. The interval preimage and length calculation preserve the positive-domain hypotheses and handle the equal-endpoint case. Its proof uses the cited ordered-field, sign, and reciprocal-order results as stated; no repair was needed.

### `def-gr-observation-and-analysis-architecture` — sound

The definition supplies domains and regularity for curves, worldlines, observer fields, rays, and charts; separates model readouts from apparatus claims; and defines operational models, closed-bound records, calibration declarations, and hard-bound uncertainty without introducing a probability model. The interpretation condition makes cited prediction theorems conditional on their own hypotheses. No measurement, likelihood, confidence, or empirical result is inferred. No repair was needed.

### `rem-gr-primary-report-research-queue` — sound

The item identifies six destinations for future source retrieval, distinguishes secondary surveys from the primary reports still required for an experiment item, and makes no measurement or empirical-support claim. I checked its model-side pointers against the named Schwarzschild-redshift, Schwarzschild-orbit, and linearized-detector suppliers. The local item search found no existing GR theorem for the listed Shapiro-delay, light-deflection, eccentric-orbit-advance, or binary-arrival-time predictions; those remain accurately marked as future work.

The Will review sections cited by the queue describe the stated report families and analysis methods, but the queue does not present them as primary reports or report any data. The cited review supports that limited pointer role.

### `ex-gr-cosmological-redshift-interface-record-window` — repaired

The ray construction and its proof are sound: the curve is smooth on `(0,∞)`, its tangent is future null, the flat-FLRW Christoffel equations hold, and the scale-factor ratio yields the displayed prediction. The window `[4a_R/7, 2a_R/3]`, its length `2a_R/21`, and endpoint readouts are correct. The record is explicitly illustrative and makes no statistical or empirical inference.

I repaired a model-consistency gap. The prior prose called the datum a hypothetical configuration satisfying the framework's postulates while disclaiming that it satisfied the field law. The homogeneous-cosmology postulate and `post-gr-spacetime-and-classical-domain` treat the field law as part of a model. I set `Λ=3H²/c²>0`, added `pthm-gr-flrw-de-sitter-solutions` as a physical-result prerequisite and `def-gr-si-unit-and-coordinate-conventions` for the parameter's unit, and added fact `[A2]`. The cited theorem applies because `c,H>0`, so `H_Λ=c√(Λ/3)=H`; it verifies that this `k=0`, vacuum datum with `a(t)=A exp(H(t−t₀))` satisfies the field law. The operational-model proof now identifies this solution premise. I updated the item's scope to retain its hypothetical, non-empirical status.

I also corrected an inaccurate Tong citation. Tong's *General Relativity* §4.6.2 is the Friedmann-equations section and does not give the redshift derivation. The replacement cites Tong's *Cosmology* §1.1.3, equations (1.18)–(1.21), which derives the radial null path and wavelength/redshift relation. Carroll's *Lecture Notes on General Relativity*, Ch. 8, (8.61)–(8.67), supports the conserved null-geodesic quantity and scale-factor redshift relation. [Tong, *General Relativity*](https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf); [Tong, *Cosmology*](https://davidtong.org/pdfs/teaching/cosmology/cosmo1.pdf); [Carroll](https://arxiv.org/pdf/gr-qc/9712019).

### `cex-gr-bounded-redshift-record-does-not-identify-the-parameter` — repaired and consumer-checked

The two witnesses `4a_R/7` and `2a_R/3` lie in `(0,a_R)`, map to the box endpoints `3/4` and `1/2`, and differ by `2a_R/21>0`. The counterexample remains valid for the repaired field-law-consistent model because its prediction map, parameter set, record, and comparison rule are unchanged. I carried the declared `Λ=3H²/c²` solution qualification into its Given/F1 text and updated its proof-contract source quote to match the repaired example.

I corrected the same inaccurate Tong §4.6.2 redshift citation here to Tong *Cosmology* §1.1.3, equations (1.18)–(1.21), printed pp. 13–15. The Carroll Ch. 8 citation remains accurate.

## Page verdicts

- `gr-experimental-interface` — **pass**. Its architecture summary matches the definition and accurately states that no experiment item or measured value is supplied.
- `gr-experimental-interface-examples` — **hold for page-prose repair**. The B-page prose was not edited under the reader scope. Its final summary paragraph says “no field-law ... claim is made,” but the repaired example now explicitly uses a vacuum field-law solution. The remaining no-measurement and no-empirical-inference qualifications remain correct. This page defect is reported in the findings JSON.

## Checks and handoff

For both changed items, reflow completed successfully (the counterexample was reflowed once; its later reflow was unchanged), and precheck passed. The final batched proof-layout check passed: `2 items, 7 steps, 0 defects`. There is no mathematical blocker to the reviewed item proofs.

The example now has a direct dependency on the batch-73 de Sitter solution theorem. The supplied batch-76 page manifest and cross-batch-dependency record retain their pre-reader snapshots; they were not edited in this reader repair. The workflow owner should reconcile those run-local dependency records before a later gate. The page-summary hold is the only uneditable content finding.

Coverage limitation: I first opened the assigned carriers to inventory their dependencies, then checked the substantive claims against the relevant supplier statements and proofs. This was not a strictly supplier-first initial file-opening order. I opened the direct suppliers needed for the reviewed arguments, but did not audit every transitive foundational dependency of each supplier.
