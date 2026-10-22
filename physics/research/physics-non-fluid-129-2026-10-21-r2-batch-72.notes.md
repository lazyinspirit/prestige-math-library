# Batch 72 authoring notes

Run: `physics-non-fluid-129-2026-10-21-r2` · batch 72 · role beta.

## Plan, design, and scope

The complete design section at `research/plan-quantum-field-theory-frontier-expansion-track.md` L1451 and its detailed prose scaffold at `research/frontier-expansion-2026-10-19/quantum-field-theory/prose-scaffold.md` L935–1008 agree with the current page records on page IDs, title, category, library, order, companion, and prerequisites. The matching `plan-spec.json` records preserve those interfaces; their item arrays are empty scaffolds, so there is no item-level statement conflict to resolve. No `research/physics-non-fluid-129-2026-10-21-r2-owner-authoring-direction.md` override was present when checked. The design’s conventions, projected-operator scope, warning against a universal gauge-independent local split, and proof route are retained. No plan/design conflict required a change.

Two local mathematical helper results were added to the A-page inventory because the planned arguments require them: `lem-qftx-measurable-helicity-scalarization` gives an explicit Borel unitary fiber representation so the published second-quantized multiplier theorem applies; `lem-qftx-photon-rotation-test-core` proves that the constrained smooth domain is a graph core for every Stone rotation generator. The planned item list was an empty scaffold; these are local prerequisites, not suppliers from another assigned pair. The final inventory is five A-page items and one B-page example, below the 100-item cap. All six are mathematical items with only mathematical dependencies and `mathematical-premise` roles.

The A page retains both planned page requirements: `qftx-photon-helicity` and published `qft-mf01`. The B page requires the A page. No field Noether/Poynting identity, pointwise product of quantized fields, universal local gauge-independent density, or experimental conclusion is claimed. The ℏ and natural-unit conventions are stated at the operator/phase interfaces.

## Prerequisites and dependency levels

The exact current batch-71 interfaces were inspected, not inferred from their draft labels: `def-qftx-photon-helicity-bundle` supplies the weighted transverse space, projectors, helicity multiplier, local smooth sections, and dense domain; `thm-qftx-photon-rotations-helicity` supplies the stated rotation representation and Stone generators with its differential restriction on that domain. Their current `loadStep1Record`/`step1Decision` records were checked as ready/current for the run; this records authored prerequisite readiness, not independent approval. Published `qft-mf01` was inspected as the second page prerequisite. The actual proof obligations required the two local A-page lemmas above. The complete conditional consuming arguments were written against the exact supplier statements and hypotheses.

| Level | Batch-72 items |
|---:|---|
| 2 | `lem-qftx-measurable-helicity-scalarization` |
| 3 | `def-qftx-photon-projected-angular`; `lem-qftx-photon-rotation-test-core` |
| 4 | `thm-qftx-photon-projected-commutators` |
| 5 | `prop-qftx-photon-fock-angular-lift` |
| 6 | `ex-qftx-nonparaxial-spin-projection` |

Levels were set by the in-run supplier formula: zero without an in-run supplier, otherwise one plus its maximum level. The item graph is acyclic and suppliers precede consumers in the A-page order. The batch-level schedule assigns batch 72 level 1 through batch 71; the page/item interfaces used here add no cross-batch edits. The cross-batch artifact records one row per direct in-run page/item edge and does not include published external prerequisites.

## Mathematical audit and source harvest

The proofs fix the second-variable-linear pairing, active rotation convention, ℏ factors, Stone domains, transverse projector, and exact commutator core. The separate projected spin and orbital pieces are not described as independent rotation representations. Fock helicity difference has its maximal direct-sum domain and is identified with the exact joint multiplier; conservation is conditional on the defined natural-unit radial phase. The B example constructs normalized finite-width packets, proves the ℏδ estimate, handles both polar endpoints, and establishes that the exact cone has zero mass-shell measure. No unsupplied prerequisite or unresolved mathematical uncertainty was found during this pass.

Four active authoritative full-text treatments support the A page. The coverage ledger gives each URL, exact read range, harvested results, disposition and supported carrier: Bliokh et al. and Palmerduca–Qin independently treat photon angular momentum; Tong’s complete QFT lecture chapter supplies the transverse photon setup; Kinnunen’s full notes supply the smooth-density input. Dereziński’s current 136-page lecture text and its complete §§5.4 and 5.7 were inspected through the author’s official mirror, but local `source-fetch-check` timed out on both the original `www.fuw.edu.pl` URL and its `users.fuw.edu.pl` mirror after an initial attempt and five retries per URL. Both routes are recorded as dropped from fetch-backed coverage. The Fock conclusions remain fully proved locally and use the inspected published exact-domain multiplier theorem; source removal does not waive coverage. `source_resolution` records the twelve actual endpoint attempts, searches, and the item-specific alternative proof and dependencies. The final active source set has two independent angular-momentum papers and two full lecture-note treatments.

## Final scoped checks

Final scoped results after the last item and page edits:

- Precheck: 6/6 pass. Rendercheck: all 8 assigned items/pages pass. Proof layout: 6 items, 24 numbered steps, 0 defects.
- Strict proof contracts: 6/6 items, 0 errors and 0 warnings. A separate manifest-to-contract scope check confirms all 6/6 carriers are covered. Coverage checklist: 1 A page, 10 harvested results, 0 errors and 0 warnings. Manifest dependency check: 6 items, 0 errors.
- Scoped dependency check: 6 assigned items and their dependency closure, 0 errors or warnings; closure has 1,664 items and 391 pages. The two-manifest item-level calculation for batches 71–72 checks 11 items with no errors, maximum level 6.
- Scoped content policy: 6 items, 0 errors or warnings. Scoped depcheck: all 6 item IDs and both pages, 0 errors or warnings.
- Source fetch: 4/5 source records fetch-verified and 5/5 resolved, with one documented dropped URL route. The dropped Dereziński URLs and all 12 timeout attempts are retained in the source-resolution evidence; the local Fock proof and exact-domain supplier cover every claim.
- Cross-batch dependency input: valid JSON array with 9 direct in-run edges, each carrying nonempty evidence. Page/manifest IDs match. Each batch-72 Step-1 record is `ready` and current; the inspected batch-71 prerequisite records are also `ready` and current. Readiness does not imply independent proof approval.

Two run-wide checks remain owner-scoped and were not repaired here. `item-dependency-levels.mjs check --run` reports 124 empty unworked page inventories and two unrelated stale labels: `ex-gr-fx14-1` (recorded level 3, computed 4) and `lem-nrqmx-finite-symplectic-implementers` (recorded level 2, computed 1). `proof-contract-coverage.mjs --run` stops at the empty frontier inventory `qsmx-modular-equilibrium`; the batch-scoped strict contract check and 6/6 manifest coverage check pass. The shared batch-level schedule digest is stale after the authorized batch-72 manifest update, but its stored graph and recomputed graph both assign batch 72 level 1 with prerequisite batch 71. The shared scheduling file was left unchanged for its owner.
