# Reader 12 — batch 12

Run: `physics-em-sr-40-2026-10-08`. Independent Step 5a content review. This report supplies reader verdicts and repair evidence, not judgment, publication approval or verification stamps.

## Assigned inventory and page verdicts

Opened `research/physics-em-sr-40-2026-10-08-batch-12.pages.json`, all six current item carriers, both current page carriers and the complete batch proof contracts. Consulted selected coverage and cross-batch-ledger metadata as navigation evidence, without adopting their verdicts.

| Page | Opened items | Reader verdict |
| --- | --- | --- |
| `library/special-relativity/sr-experimental-interface.md` | `def-sr-experiment-interface-vocabulary`; `rem-sr-primary-report-research-queue`; `exp-sr-stored-lithium-ion-doppler-time-dilation-2014`; `pthm-sr-specified-model-comparison` | No remaining confirmed defect after the repairs below. The summary accurately separates definitions, reported estimates, conditional comparison and research queues. Ready for Step 5b review within the documented source limits. |
| `library/special-relativity/sr-experimental-interface-examples.md` | `ex-sr-operational-record-arithmetic-worked`; `cex-sr-bounded-record-does-not-identify-the-parameter` | No remaining confirmed defect after repairing the run descriptions. Both computations concern illustrative declarations, including the zero-uncertainty boundary in the worked example. B-page prose was read and left unchanged. |

Reviewed titles, classifications, scope, statements/definitions, facts, arguments, witnesses, arithmetic, source qualifications and contract clauses. The vocabulary itself is a declaration of hard constraints, not a statistical data model; the experiment's standard uncertainty therefore cannot instantiate a guaranteed hard-bound event. The comparison theorem preserves that distinction.

## Opened prerequisite inventory

The following item bodies were opened for the framework objects and arguments used by this batch. Their definitions/postulates or statement/facts/proof bodies were read; source bibliographies were not all independently re-retrieved. Suppliers were matched to consumers before completing each consuming argument's review. Initial navigation included previews before that matching pass.

- Affine/frame geometry: `def-affine-space-and-displacement`, `def-lorentz-form-and-inertia`, `def-causal-classification-of-lorentz-vectors`, `def-time-orientation-and-future-causal-sets`, `def-sr-affine-minkowski-model`, `def-inertial-frame-and-inertial-chart`, `lem-lorentz-form-has-orthonormal-basis`, `lem-timelike-cone-has-two-convex-components`, `lem-future-oriented-inertial-frames-exist`, `def-spatial-euclidean-structure-of-an-inertial-frame`.
- Worldline/operational vocabulary: `def-sr-si-units-and-coordinate-conventions`, `post-sr-inertial-covariance`, `post-sr-ideal-clocks-and-light`, `def-sr-regular-causal-curve-and-worldline`, `def-sr-proper-time`, `def-sr-four-velocity-and-four-acceleration`, `thm-sr-proper-time-and-observer-decomposition`, `def-sr-chart-tetrad-and-congruence-distinction`, `def-sr-operational-radar-protocol`.
- Wave and Doppler arguments: `lem-sr-metric-duality-on-lorentz-vector-space`, `def-sr-affine-phase-and-wave-covector`, `lem-sr-future-causal-pairing-negative`, `lem-sr-null-covector-frame-data`, `lem-sr-phase-rate-along-worldline`, `def-sr-null-wave-covector-and-observer-frequency`, `post-sr-ideal-plane-wave-model`, `def-lorentz-boost`, `lem-boost-is-proper-orthochronous-with-inverse`, `lem-sr-null-covector-boost-transformation`, `pthm-sr-null-wave-doppler-and-aberration`.
- Mechanics terms in the vocabulary: `def-sr-observed-energy-momentum-and-kinetic-energy`, `post-sr-massive-particle-dynamics`, `post-sr-ideal-massless-particle-momentum`.
- Published arithmetic proof bodies: `lem-of-sign-rules`, `def-rational-power`, `lem-rational-power-laws`, `lem-rational-power-monotone`.

Additional exact prerequisite definitions/statements were opened, without a full independent audit of their proof cones: `def-vector-space`, `def-linear-map`, `def-linear-isomorphism-and-invertible-linear-map`, `thm-unique-coordinates-with-respect-to-an-ordered-basis`, `def-ordered-field`, `def-euclidean-inner-product`, `thm-cauchy-schwarz-finite`, `thm-sylvesters-law-of-inertia`, `def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space`, `prop-orientations-and-positive-basis-classes-agree-in-positive-dimension`, `lem-sr-proper-time-reparametrization-invariance`, `lem-sr-energy-momentum-observer-identities`, `lem-inertial-chart-transitions-are-affine-lorentz`, `thm-sr-tensor-and-current-transformation`, `lem-affine-minkowski-charts-form-a-smooth-atlas`, `lem-tangent-space-of-affine-minkowski-space-is-v`, `def-ck-tensor-field-on-minkowski-space`.

`research/math-imports.json` was opened to identify the import receipt. Imported/root mathematics was left read-only. This is not an audit of every item in the recursively enumerated foundational closure.

## Sources actually consulted

- [Botermann et al., arXiv:1409.7951v1](https://arxiv.org/pdf/1409.7951v1): read the five-page primary report through the web PDF text, including equations (1)–(4), apparatus and analysis discussion, Figures 1–2, Table I and bibliography. Compared the carrier's reported values and uncertainty entries to these locators. No independent retrieval of references 21–22, raw data, fit weights or covariance was claimed. The record accurately reports these source limits.
- [Crowell, Special Relativity](https://archive.org/download/sr_20220102/sr.pdf): web retrieval failed, then direct PDF retrieval succeeded (10,728,180 bytes). Read printed/PDF pp. 13–15, 22–31, 55–59 and 121–123 using PyMuPDF. These passages support the operational terminology and queue destinations; they do not supply the present experiment's primary data. Operationalism is on p. 26; longitudinal Doppler arithmetic is on p. 56; Ives–Stilwell context is on p. 57.
- [Carroll, Lecture Notes on General Relativity](https://arxiv.org/pdf/gr-qc/9712019): read the relevant printed pp. 1–5, including freely moving rods/clocks, events, interval, metric and Lorentz-group discussion. The adopted signature and restoration of c agree with the local definitions.
- [Tong, General Relativity](https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf): read relevant Sections 1.2.1–1.2.2, pp. 12–16, and the cited Section 1.2.5 passages. Proper time appears on p. 14, Hafele–Keating on p. 25, Pound–Rebka on p. 26. The former source labels assigned those passages to inaccurate section/page ranges.
- [BIPM defining constants](https://www.bipm.org/en/measurement-units/si-defining-constants) and [BIPM metre definition](https://www.bipm.org/en/si-base-units/metre): checked the exact SI numerical value of c and the distinction between fixed unit definitions and empirical realization/applicability.

## Repairs and evidence

1. **Experiment — Setup, Procedure and Uncertainty, now lines 33, 39 and 49.** The original carrier used FWHM, a Lambda system, fitted Lorentzians, weighted centers and Gouy-phase correction without defining the relevant mathematical or operational objects. Added scalar quantity/unit conventions, the finite transition graph, finite count lists and processed real spectra, the Lorentzian-plus-linear function with positive width, residuals and the meaning of weighted centers. Stated that actual weights and estimation law remain unavailable. The additional-phase derivative is explicitly a convention for a C1 phase on a proper-time interval; no real beam profile is reconstructed. The existing apparatus numbers and uncertainty budget were preserved. Evidence: primary report pp. 2–4, Figures 1–2 and Table I; frequency convention supplier (a)/(b). Updated the affected `physics_review` evidence.

2. **Comparison theorem — Statement (a)/(d), Facts F6 and Proof 1.4.** The original assertion that Q_SR satisfies the vocabulary's interpretation obligation did not supply its operational tuple/run description. Constructed S=Theta=(-1,1), identity parameter map, positive model transition-frequency parameters, inverse-boosted rest vector, two null covectors and their phases, reception event o and prediction F=0. The inverse-boost and frame-data suppliers establish admissibility; the displayed resonance equations establish the readings and product. Explicitly stipulated inertial reception observers in the interaction section so that an accelerating ring history is not silently placed inside the Doppler supplier's scope. Defined the nuisance-input terminology. Added the used direct supplier edges/roles and updated F6 citations and derivation 1.4 in the proof contract. This preserves the general comparison rules and the nominal alternative calculation.

3. **Worked example — Example introduction/(a), Facts F4/F6 and Verification 2.1.** The run's emitter curve lacked its domain and the proper-time function required by vocabulary (a); the observer reading also needed a declared reception event. Specified h:R->A, h(rho)=o+rho e0, its smoothness, future unit tangent, length parameter and proper time rho/c; reception is at o. The integral is evaluated directly. The emitter is only a stipulated history, without source dynamics. Added exact worldline/proper-time and affine-phase suppliers and updated the affected contract entries. Frequency-reading justification now names both Doppler clauses (i) and (ii).

4. **Counterexample — Facts F4 and Counterexample 2.1.** Added the exact affine-phase supplier and reception event o, and used Doppler clause (ii) to identify the computed covector data with the observer reading. Updated the affected contract entries. The distinct rational witnesses and the full consistency interval are preserved.

5. **Source locators — all relevant assigned carriers.** Corrected Tong section/page labels in the queue and comparison theorem. Corrected Crowell labels on the vocabulary, comparison theorem and both examples: pp. 23–31 span Sections 1.3–1.4; pp. 55–59 span Sections 3.2–3.3. These are citation-only repairs. No mathematical statement in the vocabulary or queue changed, and no argument worksheet needed alteration for those source-only edits.

6. **Contract boundary correction.** The worked-example empty-case evidence incorrectly described the general record interval as nondegenerate, despite epsilon=0 being allowed. Replaced it with the positive-endpoint inverse argument, explicitly including the singleton case.

No assigned carrier had an existing `verification.judge` record to remove. No acceptance/audit stamp was added. All six assigned item paths changed; neither assigned page changed. No outside item, B-page prose, plan, import or root mathematics was edited.

## Consumer review and independent calculations

The direct-consumer scan of current item dependency/discharge metadata found only `pthm-sr-specified-model-comparison` consuming a changed item's public interface (the experiment). Checked its Statement (d), F2, empirical-premise record and final scope against the experiment after repair: it inherits the same conditions and uncertainty limitations, uses reported scales descriptively, and supplies its atomic/optical/reception assumptions explicitly. No outside direct consumer of a changed batch item was found.

Checked the examples' monotonicity difference, inverse formula, closed endpoint preimage, epsilon=0 case and positive-length formula independently. Exact Fraction arithmetic verified both rational witnesses, their squared frequency ratios and length 7200000/327613801. Decimal arithmetic on the report's rounded frequency centers gave 1.47448495653328538...e-9. Exact rational arithmetic verified the comparator's bounding inequalities at beta=169/500 and its score exceeding 10^7. These checks support the arithmetic, not empirical certainty or a sampling model.

## Outside-scope observations and current resolution

Initially observed `def-sr-si-units-and-coordinate-conventions`, Definition (1) and Status, describing the numerical SI value of c as empirical; `post-sr-ideal-clocks-and-light`, Postulate (ii), repeated that claim. BIPM's metre definition contradicts that numerical-value assertion. Both subjects belong to current-run batch 1 and were outside this reader's edit authority.

During this session another writer corrected both carriers. Reopened the changed relevant clauses, verified exact SI c=299792458 m/s and the separate empirical/model qualification, and checked compatibility with this batch: all algebra needs c>0 and cancels c in the frequency ratios. No unresolved finding remains. Current observed raw hashes are:

- `def-sr-si-units-and-coordinate-conventions`: `083ed42bffb1207a3bfa1ab067cad6ea78d32e7ae434e8401a146faaa268deaa`.
- `post-sr-ideal-clocks-and-light`: `3f69ebfcd81c72a51574fd5ccf0cb991305ef9fad61e96458c90d688c892594e`.

These hashes bind the corrected current bytes, not the historical defect. No original observed-byte binding was saved, so none is claimed. There are no proposed withdrawals, uneditable remaining defects or content blockers.

## Validation and limitations

Ran reflow and precheck on each changed item. Reflow reported unchanged formatting on each. The experiment passed nonproof structure; the theorem, example and counterexample passed direct-proof precheck. Definition and remark precheck reported zero proof items checked, which is not a proof check. The final scoped render and batched proof-layout results are recorded below after the final source-label edits.

An attempted rendercheck `--help` was found to start an implicit broad scan; it was interrupted (exit 130), supplies no validation evidence, and was replaced by the explicit six-file invocation. All substantive successful checks were scoped.

Limits: no raw-data reanalysis, independent verification of borrowed rest-frequency papers, complete likelihood, fit weights, covariance or calibrated speed uncertainty was available. No full-text reading of every bibliography entry or independent audit of the entire transitive mathematics corpus is claimed. RMS/SME translations and other experiment families remain queues, as the current items state. Physical agreement and descriptive scale comparisons establish no framework truth, p-value or coverage probability.

Final checks after the last item edit: all six reflow commands and all six precheck commands exited 0 with the distinctions above. `node tools/physics-support/rendercheck.mjs` on the explicit six assigned paths exited 0: six files parse under renderer YAML and KaTeX. The final command `node tools/physics-support/proof-layout.mjs items/def-sr-experiment-interface-vocabulary.md items/rem-sr-primary-report-research-queue.md items/exp-sr-stored-lithium-ion-doppler-time-dilation-2014.md items/pthm-sr-specified-model-comparison.md items/ex-sr-operational-record-arithmetic-worked.md items/cex-sr-bounded-record-does-not-identify-the-parameter.md` exited 0: `6 items, 20 steps, 0 defects`. These are formatting checks, not independent proof judgments.

Final observed item raw SHA-256 values:

- `def-sr-experiment-interface-vocabulary`: `2de427facfedcd3a087c19ebf670099c8a0e11726d173dea2169f7b4c4e03026`.
- `rem-sr-primary-report-research-queue`: `b4e94d0673d86accbba38ebfea159304847a9b82cf9308773fbbdfdf9dd193af`.
- `exp-sr-stored-lithium-ion-doppler-time-dilation-2014`: `8ff99cce4f4c17077e3faf9c5721679b40928c6e7c6ae29729d86b67094e60a3`.
- `pthm-sr-specified-model-comparison`: `efdf673dfc8b8e8918317acbe7cafb4a6b8a8abe5daaf8bb7aa4f62e593bc98b`.
- `ex-sr-operational-record-arithmetic-worked`: `8ff439e2f50e7b99b52cee0aa01275d6947989299e0cb9ce73a509d9a663fcf7`.
- `cex-sr-bounded-record-does-not-identify-the-parameter`: `77e5beb2159ae428d45d8dc94a521d5e91c3e8e1b25f669fabc4814ac6a26cdc`.

Report completed 2026-10-09T14:20:18.680082+00:00. Findings file: `research/physics-em-sr-40-2026-10-08-reader-findings-12.json`, with an empty remaining-findings array.
