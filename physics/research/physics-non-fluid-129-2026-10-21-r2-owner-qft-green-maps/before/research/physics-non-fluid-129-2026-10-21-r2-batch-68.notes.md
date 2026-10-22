# Batch 68 authoring notes

Run: physics-non-fluid-129-2026-10-21-r2 · role: beta · batch: 68.

## Plan and design comparison

The A/B IDs, page titles, order 833/834, category, mathematics library, companion relation and page prerequisites in plan-spec.json agree with the detailed design. The plan-spec has no preauthoring item inventory for these pages; the detailed design names three A items and one B item. Five additional A-side definitions/lemmas were authored as local prerequisites so the Green quotient, algebraic Weyl construction, Cauchy-test localization and time-slice proof have explicit suppliers. The pair remains below the 100-item page cap, and B remains a leaf.

The detailed time-slice scaffold lists lem-qft-scalar-local-weyl-algebra as a statement reference. Inspection of its complete published statement and proof shows that it applies only to the flat scalar mass-shell Fock representation on open subsets of R⁴. It does not establish the generic curved globally hyperbolic result. Accordingly, it is not used to prove the generic time-slice theorem. The theorem is proved conditionally from the declared Green-data interface and the local cutoff argument. The flat qft-mf02 result is used only to instantiate the commuting-algebra premise in the scoped flat-spacelike specialization of prop-qftx-local-projection-no-signal. This is the recorded item-interface conflict; page-level plan requirements are unchanged.

## Open page-prerequisite escalation

A scoped run of validate-plan on the two batch pages reports five undeclared prerequisite page inputs for qftx-local-algebras: gr-causal-and-initial-value-boundaries, gr-framework-and-geometry, gr-gr13-convex-normal-neighborhoods, gr-tensors-and-observers, and gr-connections-and-free-fall. The new A items cite mathematical suppliers in those pages, including the global causal structure, Cauchy-set topology, causal curve calculus, exponential-map/geodesic results, observer data and metric geometry. Those carrier items were inspected and exist; the unresolved defect is their absence from the declared page-requirement closure, not an omitted item dependency or incomplete local proof. This affects the A page's Green interface, quotient, local net/locality, functoriality, test localization, time-slice theorem and local-operation application; the B page inherits the A prerequisite through its declared companion edge.

The minimal proposed plan change is to add gr-gr13-convex-normal-neighborhoods to the A page's direct requires. Its declared prerequisite closure contains the other four GR pages listed above. Do not alter page requires or shared plan-spec in this batch; owner plan revision is required before plan validation can pass. The same scoped validator reports qft-mf02 as a redundant direct prerequisite because qftx-microlocal-products already requires it. The detailed design and current plan both explicitly name qft-mf02, so the declared edge is retained pending owner decision.

## Authored inventory and in-run dependency levels

Suppliers are listed before consumers in the A manifest.

| Item | Level | In-run suppliers |
|---|---:|---|
| def-qftx-green-hyperbolic-interface | 1 | def-qftx-distributions-on-smooth-manifolds (batch 58) |
| lem-qftx-green-propagator-symplectic-quotient | 2 | def-qftx-green-hyperbolic-interface |
| def-qftx-free-weyl-net | 3 | def-qftx-green-hyperbolic-interface, lem-qftx-green-propagator-symplectic-quotient |
| lem-qftx-free-weyl-functoriality | 4 | def-qftx-free-weyl-net, def-qftx-green-hyperbolic-interface, lem-qftx-green-propagator-symplectic-quotient |
| lem-qftx-causal-time-slice-test-localization | 4 | def-qftx-free-weyl-net, def-qftx-green-hyperbolic-interface, lem-qftx-green-propagator-symplectic-quotient |
| lem-qftx-free-locality | 4 | def-qftx-free-weyl-net, def-qftx-green-hyperbolic-interface, lem-qftx-green-propagator-symplectic-quotient |
| thm-qftx-free-time-slice | 5 | lem-qftx-causal-time-slice-test-localization, lem-qftx-free-weyl-functoriality |
| prop-qftx-local-projection-no-signal | 5 | lem-qftx-free-locality |
| ex-qftx-postselection-conditioning | 6 | prop-qftx-local-projection-no-signal |

All nine items have domain mathematics, library mathematics, and physical_scope null. The no-signalling proposition uses the published finite-instrument normalization item and the exact flat local-Weyl interface only for its stated specialization. The Bell example proves branch probabilities and conditional expectations directly; the nonselective conclusion invokes the proposition.

## Green-map construction obligation and conditional scope

The design explicitly makes construction of retarded/advanced Green maps a new proof obligation. This batch defines the exact interface and fully proves downstream claims conditional on supplied continuous Green maps, their inverse/support identities, formal self-adjointness and the stated Cauchy uniqueness. It does not claim that every normally hyperbolic operator admits such data.

The unresolved proof is the local hyperbolic Cauchy existence/energy-estimate/continuation argument needed to construct the maps and verify continuity, two-sided inverse identities, causal support and uniqueness. Bär–Ginoux–Pfäffle Theorem 3.2.11 and Theorem 3.3.1 with Corollary 3.4.3 use those local PDE results. No complete local reconstruction is present here. This gap affects the instantiation of the Green interface and hence any unconditional application of the symplectic quotient, net, functoriality, time-slice localization and theorem. The authored versions state the Green data as explicit hypotheses and do not treat the missing existence proof as established. Proposed placement is a new A-page supplier, thm-qftx-green-hyperbolic-existence, after the interface data are defined and before the symplectic quotient consumer; its dependencies must include locally proved Cauchy existence/uniqueness, energy estimates and continuation. def-qftx-green-hyperbolic-interface is therefore recorded as escalated; conditional consumers can be ready because their actual stated inputs and carriers are current. Reeh–Schlieder and local factor type remain nonlogical context because the inspected source proof requires edge-of-the-wedge uniqueness not supplied here.

## Prerequisite inspection and source coverage

Batch 58 was checked with the current Step 1 loader and decision function before treating its distribution supplier as a prerequisite: all nine qftx-microlocal-products items are ready and current. Its exact def-qftx-distributions-on-smooth-manifolds statement supplies the test-density topology and Jacobian law used by the Green interface. The qft-mf02 supplier lem-qft-scalar-local-weyl-algebra is published and current, but its inspected interface is the flat mass-shell representation described above. The qft-mc03 supplier lem-qft-finite-instrument-normalization is published and current; its full statement/proof fixes finite bounded Kraus normalization, normalized outcomes and conditional density-state updates.

The coverage file records full-text URLs, exact locators, reading extent, supported items and per-result dispositions:

| Page | Source | Supported results and dispositions |
|---|---|---|
| A | Bär–Ginoux–Pfäffle, Wave Equations on Lorentzian Manifolds and Quantization, Ch. 3 §§3.2–3.4 and Ch. 4 §4.5 | Green existence theorem: deferred to owner decision because its Cauchy PDE construction is not proved here; causal quotient/symplectic form: included in lem-qftx-green-propagator-symplectic-quotient; local commutativity: included in lem-qftx-free-locality; cutoff localization: included in lem-qftx-causal-time-slice-test-localization; time-slice theorem: included in thm-qftx-free-time-slice. |
| A | Fewster–Rejzner, Algebraic Quantum Field Theory—an introduction, version 2, §4.1 A5 and §4.2 | Test quotient/causal propagator, Weyl relations/local covariance, local commutativity and time-slice discussion are included in the corresponding local items. |
| B | Watrous, The Theory of Quantum Information, §§2.3.1–2.3.2 | Kraus normalization is already published as def-qft-finite-bounded-kraus-instrument; conditional partial-measurement formulas are included in ex-qftx-postselection-conditioning. |
| B | Trevisan, Lecture Notes on Quantum Information Theory, §2.2 and §3.5 | Projection probabilities/conditional states are included in the Bell example; Kraus normalization is already published in def-qft-finite-bounded-kraus-instrument. |
| B, preserved history | Griffiths, Notes on Quantum Information Theory, complete three-page §7 | The short PDF was read in full, but six source-fetch attempts exhausted before its required full-document receipt was supplied. The record, all attempts, alternative searches and the complete alternative Bell calculation/dependencies are preserved under source_resolution; it is a resolved dropped source and does not waive coverage. |

The source-fetch checker verified four active source records and one documented source drop. The short Griffiths source is not counted as a fetch stamp. No experimental data or physical postulate is asserted by this pair.

## Cross-batch inputs

The batch-68 cross-batch dependency file is a JSON array with one verified row for the A-page requirement on qftx-microlocal-products and one verified row for the direct distribution-to-Green-interface item edge. The flat qft-mf02 and qft-mc03 published interfaces are outside this run; they are discussed here as inspected inputs and are not added as unsupported cross-batch review rows.

## Scoped check results and readiness

The final `proof-layout` check covered all 9 assigned items and 21 proof steps with 0 defects. Strict proof-contract validation covered 7 proof-bearing items with 0 errors and 0 warnings; content-policy validation covered 9 items with 0 errors and 0 warnings. The focused dependency check covered the 9 items and their closure of 2,442 items / 373 pages with 0 errors and 0 warnings. Render/YAML validation covered 11 files and passed. The two-page coverage checklist covered 16 harvested results with 0 errors and 0 warnings. Normative precheck covered all 7 proof-bearing items and reported 0 failures. The source-fetch check verified 4 of 5 source records and resolved all 5, including the documented Griffiths drop; `--stamp` created 0 new stamps. The batch-58 plus batch-68 item-level recomputation covered 18 items with no errors and confirmed the assigned levels 1–6. These checks establish local authoring consistency, not independent proof approval.

Fresh `loadStep1Record` / `step1Decision` inspection confirms eight current `ready` records: `lem-qftx-green-propagator-symplectic-quotient`, `def-qftx-free-weyl-net`, `lem-qftx-free-weyl-functoriality`, `lem-qftx-causal-time-slice-test-localization`, `lem-qftx-free-locality`, `thm-qftx-free-time-slice`, `prop-qftx-local-projection-no-signal`, and `ex-qftx-postselection-conditioning`. `def-qftx-green-hyperbolic-interface` remains explicitly `escalated` for the missing local Cauchy existence / energy-estimate / continuation proof and proposed supplier `thm-qftx-green-hyperbolic-existence`; it was not overwritten.

The item dependency-level checker over all 129 batches reports 118 empty inventories plus two unrelated stored-level mismatches: `ex-gr-fx14-1` has level 3 but recomputes to 4, and `lem-nrqmx-finite-symplectic-implementers` has level 2 but recomputes to 1. The stored run batch-dependency-levels row still says batch 68 level 1 requiring 58, matching current recomputation, but its input hash is stale after this manifest authoring; it is left for the owner to refresh. The scoped plan check has the five undeclared GR page inputs and proposed direct requirement recorded above. The shared plans, engine state, published items and verdicts were not edited.
