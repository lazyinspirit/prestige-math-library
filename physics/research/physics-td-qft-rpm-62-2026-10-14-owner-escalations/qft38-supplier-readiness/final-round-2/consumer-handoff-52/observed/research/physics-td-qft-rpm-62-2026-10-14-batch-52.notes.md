# Batch 52 — Positive transverse free photon model

Run `physics-td-qft-rpm-62-2026-10-14`; beta-owned pair `qft-g01` / `qft-g01-examples`.

## Inventory, placement, and dependency levels

The A page contains the seven IDs reserved for QFT-G01, in supplier-before-consumer order. The B page contains both reserved thought experiments. No other pair’s items were authored or moved. The A and B pages contain 7 and 2 items, respectively, under the 100-item cap.

| Item | Page | Final dependency level | Main local inputs |
|---|---|---:|---|
| `def-qft-qed-physical-gauge-quantities` | A | 3 | QFT framework units, QED gauge data, EM potential/tensor/gauge conventions |
| `post-qft-free-photon-model` | A | 7 | transverse space and Fock definition, C01 measurement postulate, photon quotient/covariance/Weyl carriers, smooth source-free EM input |
| `post-qft-qed-local-coupling` | A | 8 | QFT framework and QED gauge conventions, physical-unit dictionary, F01 Dirac model, free-photon model, gauge convention |
| `pthm-qft-photon-physical-properties` | A | 8 | free-photon model, transverse definition, auxiliary quotient, Lorentz/spectrum and second-quantized spectrum carriers |
| `pthm-qft-photon-local-observables` | A | 8 | free-photon model, local field-strength and local Weyl carriers |
| `pthm-qft-qed-classical-coupling` | A | 9 | local action, SI/natural dictionary, Dirac projection data, current/variation carrier, bump lemma, EM component and Maxwell conventions |
| `pthm-qft-qed-coulomb-constraints` | A | 10 | local action, preceding classical current result, Coulomb solver, finite-mode constraints, QED/Dirac and EM conventions |
| `texp-qft-photon-auxiliary-comparison` | B | 9 | physical-photon result, null quotient, smooth bump, Countable Choice |
| `texp-qft-qed-neutral-cell` | B | 11 | Coulomb theorem, local QED model, Coulomb solver, Countable Choice |

These are item levels recomputed from the current run manifests, including the populated batch 44 and batch 51 inventories. They differ from the provisional within-batch levels used while those manifests were empty. The final values match `batch-52.pages.json`; no cycle or level mismatch names a batch-52 item.

## Plan/design reconciliation

The current plan-spec row for order 543 requires `qft-f01`, `qft-mg01`, `em-primitives-and-postulates`, and `em-potentials-and-gauge`; the A manifest and page use those exact edges. The original design reservation in `plan-quantum-field-theory-track.md` §“Positive transverse free photon model” lists QFT-C01, QFT-MG01, and QFT-F01 and omits both EM pages. The current plan controls, so the two EM page edges are retained and QFT-C01 is not added as a page requirement. The actual QFT-C01 item `post-qft-constructed-model-and-measurement` remains a direct item dependency of the photon postulate and now has a current ready record; this closes that item edge without changing the page-edge reconciliation. The empty `items: []` arrays in `plan-spec.json` are preauthoring placeholders, not a conflict. The nine assigned item IDs match the QFT-G01 source-inventory reservation exactly.

The source inventory’s original direct-dependency lists are narrower than the claims now authored. The additional dependencies are retained for these reasons:

- The photon postulate claims an actually specified Fock model, free dynamics, a physical auxiliary quotient, and smeared Weyl observables, so it declares the Fock definition, quotient, covariance/spectrum and local-Weyl carriers, Countable Choice, C01 measurement interpretation, and the EM field/gauge inputs used by the statement.
- The charge/unit definition records the exact SI potential, tensor, and gauge-function conventions it uses, and maps the QED gauge-data symbols (q,m,g,mu) explicitly to the SI and natural symbols on this page.
- The local Maxwell–Dirac postulate declares the free-photon and Dirac correspondences and the SI gauge-transformation convention. Its physical theorem additionally cites the matrix conventions, bump supplier used to turn stationarity into a pointwise Dirac equation on an arbitrary open set, and the EM component/sign suppliers.
- QFT-MG01’s current Dirac-current lemma supplies the smooth Dirac variation and conserved natural current but does **not** state the Maxwell-field variation. `pthm-qft-qed-classical-coupling` derives that variation directly from the adopted Maxwell–Dirac action, then converts it to the SI equation and checks the component signs.
- The Coulomb theorem adds the preceding current theorem because its source is (q_{SI}\psi^\dagger\psi), and declares the QED/Dirac conventions needed for the displayed Hamiltonian and finite-mode constraints.
- The photon-properties theorem cites the transverse-space definition for the rank-two fiber and the second-quantized spectrum supplier for the exact self-adjoint domain. The local-observables theorem cites the field-strength distribution separately from the Weyl-algebra result and uses the supplier’s exact (W_{\rm Segal}(\sqrt2 g_h)) normalization.
- The neutral-cell thought experiment cites the local QED postulate used to specify its charge source. The auxiliary comparison cites the smooth-bump result that constructs its normalized witness.

No claim was weakened to fit the page cap. The companion remains a B page and retains its exact two-item reservation.

## Supplier and readiness audit

The current batch 44 (`qft-mg01`) and batch 51 (`qft-f01`) manifests are populated. Every supplier carrier used by this pair exists; each relevant current Statement and complete Proof was inspected and compared with the consuming argument. The status distinction below reflects current Step 1 records, not independent proof approval.

Direct QFT-MG01 inputs:

- `def-qft-photon-transverse-space`, `lem-qft-photon-null-quotient`, and `lem-qft-photon-covariance-spectrum` have current ready records whose hashes match their item and dependency inputs.
- `def-qft-qed-gauge-data`, `lem-qft-photon-local-field-strength`, `lem-qft-photon-local-weyl-observables`, `lem-qft-qed-dirac-gauge-current`, `lem-qft-qed-coulomb-constraint`, and `lem-qft-qed-dirac-first-order-constraints` have current escalated records. The QED gauge-data and Dirac-current chain reaches the escalated `def-qft-dirac-projections`; the local field-strength carrier reaches the escalated scalar-causal-commutator input; local Weyl observables depend on that field-strength carrier; the Coulomb and finite-mode constraint carriers depend on the escalated QED gauge-data input. Their exact interfaces are used conditionally.
- `def-qft-fock-and-test-spaces`, `lem-qft-fock-ccr-car`, `lem-qft-segal-weyl-domain`, `lem-qft-second-quantized-spectrum`, `lem-qft-free-action-equations`, and `lem-qft-lorentz-boost-rotation-factorization` have current ready records. Their use remains limited to the inspected statements and domains.

Other in-run prerequisites:

- `def-qft-framework-units` and `post-qft-constructed-model-and-measurement` now have current ready records. The framework definition fixes the signature, length-coordinate convention, SI constants and engineering dimensions. The measurement postulate specifies Born probabilities only for a supplied model and normalized instrument; it is not empirical confirmation.
- `post-qft-free-field-model` has a current escalated record. Its exact Statement is used conditionally. Its unresolved chain includes `def-qft-dirac-projections`, scalar-smearing and Dirac CAR-locality prerequisites, and an open QFT-F01 page edge. The escalation text still says `def-qft-framework-units` has no current receipt, although that carrier is now ready-current; this subclaim is stale. The other blockers remain open, so the supplier escalation is preserved unchanged.
- Published Countable Choice, Fourier/Parseval, SI, EM tensor, Maxwell, gauge and smooth-bump suppliers were inspected at their exact statements. The two published EM page edges are verified. The QFT-F01 and QFT-MG01 page edges remain open because their required draft-page inputs are not all current and closed.

All nine assigned batch-52 items are recorded `escalated`, with every direct dependency listed and the unresolved supplier/page edges stated in the reason. No item is marked ready from draft status or from a conditional proof. The batch-52 direct cross-batch ledger has 36 rows: 20 verified and 16 open. The two QFT page edges remain open, the two published EM page edges are verified, and item-edge statuses follow the current supplier receipts. Ready records are readiness evidence only. The item dependency levels are recomputed from the populated run manifests and match the batch manifest; no supplier from another pair was authored or modified.

## Source resolution and physical qualifications

For both pages, coverage uses two independent full-text QFT treatments:

| Source | Locator | Role and limit |
|---|---|---|
| David Tong, *Quantum Field Theory*, author-hosted full-text Chapter 6 HTML, `https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html` | §§6.1, 6.2.1–6.2.2, 6.3.1, and §6.7 | Maxwell field, transverse and auxiliary modes, local charged coupling, and scope cautions. Tong uses natural units and the opposite metric signature; our statements translate them explicitly. |
| Mark Srednicki, *Quantum Field Theory*, complete author-hosted 2006 prepublication book draft, `https://web.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf` | §12; §§54–55; §58 | Independent dimensions, Maxwell/Coulomb/transverse-photon and spinor-QED treatment. It uses Heaviside–Lorentz units with (c=\hbar=1); the items retain explicit SI constants. The host asks readers to link to the draft rather than redistribute it. |

Each source result and supported item has an `inline` disposition, locator, and limitation in `batch-52.coverage.json`. No experiment or measured value is reported. The model assignments are adopted postulates; the field equations, quotient properties and torus contradiction are conditional deductions; no statistical inference is made.

The Tong PDF URL `https://www.damtp.cam.ac.uk/user/tong/qft/qft.pdf` was retained in source history but removed from active item citations after six source-fetch attempts retrieved the compressed PDF and `mutool` could not verify its page count. Two official-Cambridge searches located the full Chapter 6 HTML, which was opened and read at the same sections. The HTML URL is active and fetch-stamped. The old URL is recorded as a certain bibliographic substitution in `source_resolution`; it is not a dropped mathematical result, and every affected source result now maps to the replacement HTML source with its item argument and dependencies. `source-fetch-check --stamp` verified the four active page-source entries and recorded the two old PDF entries as documented drops.

## Run state and checks

The requested live status recomputation was attempted with
`node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --run physics-td-qft-rpm-62-2026-10-14 --state-dir .autopilot/physics-td-qft-rpm-62-2026-10-14`. The workspace has no `.autopilot/` directory; the driver reported that the workflow revision differs and no run is configured/status file exists. No engine state, verdict, shared plan, imported mathematics, or published page was changed. The batch work followed the supplied dispatch and current run manifests on disk.

Final scoped checks after the final item, manifest, and contract edits:

- `proof-layout.mjs` on the six proof-bearing batch items: 6 items, 21 steps, 0 defects.
- Strict batch proof contracts: 9/9 items, 0 errors and 0 warnings. `precheck.mts`: 9 item files, 8 applicable, 0 failures. The non-proof definition is not applicable.
- `rendercheck.mjs`: all nine items and both pages pass the real KaTeX and YAML checks. `content-policy.mjs`: 9 items, 0 errors and 0 warnings. `manifest-deps.mjs`: 9 items, 0 missing dependency lists and 0 errors.
- Dependency graph recomputation: 683 run items; no cycle or level error names a batch-52 item. Five existing level errors are unrelated TD items: `def-td-cross-type-reaction-network` (14 recorded, 15 computed), `pthm-td-contact-product-comparison` (12/13), `pthm-td-entropy-under-product-comparison` (13/14), `pthm-td-universal-mixing-entropy` (18/19), and `rem-td-entropy-construction-hypotheses` (19/20). Batch-52 levels remain 3, 7, 8, 8, 8, 9, 10, 9, and 11.
- `coverage-checklist.mjs`: 2 pages, 24 harvested results, 0 errors, 1 low-yield warning (`0/18` QFT-G01 results are marked `included`; the inspected results are disposed inline in the authored arguments). `source-fetch-check.mjs --stamp`: 4/6 source URLs fetch-verified, 6/6 resolved, with two documented Tong-PDF URL drops; the active Tong HTML and Srednicki draft remain verified.
- `step1-decisions.mjs check --run` reports 296/683 items ready overall; the run remains open, and all nine batch-52 items are escalated with current input hashes. The optional `proof-contract-coverage.mjs` scan is run-wide rather than batch-scoped and reports 518 missing merged-contract entries for other run items; none names a batch-52 item. The assigned batch's strict contract check above is clean. No shared contract or run state was changed.
