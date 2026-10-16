# Batch 5 authoring checkpoint

Run: `quantum-computing-algorithms-60-2026-10-15` · pair: `channels-kraus-choi-and-stinespring-representations`

## Disposition

The owner direction’s conditional hold is cleared by current disk evidence. The separate `quantum-prerequisites-4-2026-10-15` run is `COMPLETE`; all 18 published-repair receipts listed by `prerequisite-repairs.json` validate against the live carriers; and a fresh run of the current proposal-check logic reports pass. Continue with this pair using the declared interfaces for unfinished cross-pair suppliers, and record every unresolved supplier check honestly.

At this checkpoint, no draft items, A/B page carriers, proof contracts, readiness records, or Step 1 decisions had been added. The assigned `batch-5.pages.json` still had empty item arrays. Those carriers and metadata are the next authoring work.

## Plan comparison

The QC05 design and canonical `plan-spec.json` agree on the A/B page IDs, titles, order 2174/2175, category, and eight `requires` edges. The design scope is isometries, unitary channels, CPTP maps, and finite Kraus/Choi/Stinespring equivalences. The design’s root inner-product convention is linear in the first argument; Dirac notation must translate by `⟨x|y⟩_D = ⟨y,x⟩_root`, with `|x⟩⟨y|` represented by `xy†`. The design also distinguishes trace preservation from trace nonincrease and requires local finite-dimensional equivalence proofs.

The canonical plan and assigned page metadata currently have `items: []`. The current audited planning export proposes the following 16 A items and one B example. This is a planning-only inventory; it has not been admitted to the run manifest.

Page prerequisites from the assigned task and canonical plan:

- `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`
- `inner-product-spaces-and-orthogonality`
- `linear-maps-rank-nullity-and-quotient-spaces`
- `matrices-and-the-matrix-of-a-linear-map`
- `measurements-povms-and-instruments`
- `pure-and-mixed-states-ensembles-and-schmidt-decomposition`
- `registers-tensor-products-and-partial-trace`
- `the-spectral-theorem-and-singular-value-decomposition`

## Planning-only proposed item graph

Levels below were computed from the current QC proposed-item dependency graph, counting proposed in-run suppliers and excluding root suppliers. They are planning metadata only; no levels were entered in the run manifest.

- Level 1: `def-qc-kraus-representation` — `def-linear-map`, `def-qc-dirac-notation-conversion`.
- Level 2: `def-qc-choi-matrix` — `def-linear-map`, `def-qc-register-and-computational-basis`, `def-qc-tensor-register-and-permutation`.
- Level 3: `def-qc-isometric-stinespring-representation` — `def-qc-tensor-register-and-permutation`, `def-qc-partial-trace`; `lem-qc-positive-choi-matrix-yields-kraus-operators` — `def-qc-choi-matrix`, `def-qc-kraus-representation`, `thm-non-negative-operator-characterisations`, `thm-non-negative-square-root-exists-and-is-unique`.
- Level 4: `def-qc-quantum-channel` — `def-qc-completely-positive-map`, `def-trace-of-an-endomorphism`; `lem-qc-complete-positivity-implies-choi-positivity` — `def-qc-completely-positive-map`, `def-qc-choi-matrix`, `def-qc-register-and-computational-basis`; `thm-qc-kraus-map-completely-positive` — `def-qc-kraus-representation`, `def-qc-completely-positive-map`.
- Level 5: `thm-qc-isometry-partial-trace-is-channel` — `def-qc-isometric-stinespring-representation`, `thm-qc-partial-trace-positive-and-trace-preserving`; `thm-qc-kraus-choi-equivalence` — `def-qc-completely-positive-map`, `def-qc-choi-matrix`, `def-qc-kraus-representation`, `lem-qc-complete-positivity-implies-choi-positivity`, `lem-qc-positive-choi-matrix-yields-kraus-operators`, `thm-qc-kraus-map-completely-positive`; `thm-qc-trace-preserving-kraus-normalization` — `def-qc-kraus-representation`, `def-qc-quantum-channel`, `def-trace-of-an-endomorphism`, `thm-trace-of-ab-equals-trace-of-ba`, `thm-matrix-of-the-adjoint-is-the-conjugate-transpose`; `def-qc-unitary-conjugation-channel` — `def-qc-quantum-channel`, `def-linear-isometry-and-orthogonal-or-unitary-operator`.
- Level 6: `thm-qc-channels-compose-and-tensor` — `def-qc-quantum-channel`, `def-qc-completely-positive-map`, `thm-qc-partial-trace-positive-and-trace-preserving`, `thm-qc-kraus-choi-equivalence`, `thm-qc-trace-preserving-kraus-normalization`, `thm-qc-tensor-map-composition-and-adjoint`; `thm-qc-choi-trace-preservation-condition` — `def-qc-choi-matrix`, `thm-qc-trace-preserving-kraus-normalization`, `thm-qc-partial-trace-characterization-and-basis-independence`, `thm-qc-kraus-choi-equivalence`, `def-trace-of-an-endomorphism`, `thm-trace-of-ab-equals-trace-of-ba`; `thm-qc-finite-stinespring-dilation` — `def-qc-quantum-channel`, `thm-qc-kraus-choi-equivalence`, `thm-qc-trace-preserving-kraus-normalization`, `def-qc-isometric-stinespring-representation`; `prop-qc-unitary-conjugation-is-channel` — `def-qc-unitary-conjugation-channel`, `thm-qc-kraus-map-completely-positive`, `thm-qc-trace-preserving-kraus-normalization`.
- Level 7: `thm-qc-finite-kraus-choi-stinespring-equivalence` — `thm-qc-kraus-choi-equivalence`, `thm-qc-trace-preserving-kraus-normalization`, `thm-qc-choi-trace-preservation-condition`, `thm-qc-finite-stinespring-dilation`, `thm-qc-isometry-partial-trace-is-channel`.
- B example, level 8: `ex-qc-dephasing-channel-kraus-choi` — `thm-qc-finite-kraus-choi-stinespring-equivalence`.

Batch-level scheduling evidence remains dependency level 4 with prerequisite batches 1, 2, 3, and 4; input hash `9b2c249d4992d9068191bb0f9b1490b0713c8529fcbaa1869bd16d178d892f85`.

## Prerequisite reconciliation and status conflict

- `research/quantum-planning-review/prerequisite-repairs.json` records ten inherited remark targets, eighteen consumer repairs, and fourteen typed suppliers. Every one of its eighteen repaired root carriers now has a `verification.repair` pointer. The read-only `recordedPublishedRepair` policy check returned `ok: true` for all 18, including current content hashes and required local checks.
- A fresh run of `research/quantum-planning-review/check-proposals.mjs` logic against current plan inputs, with only its report redirected to `/tmp`, returned `pass`: 120 pages, 896 proposed items, 1,835 root prerequisites, zero errors, zero warnings.
- The separate native run `quantum-prerequisites-4-2026-10-15` reports `COMPLETE`; the fourteen listed supplier carriers are present and published. This run’s receipts are context only and provide no coverage for the current run.
- Earlier planning text and `planned-repair-check.json` still describe the former hold and a virtual overlay. The virtual check does not establish current source state. Current live repair receipts and the fresh current proposal check establish that the authoring precondition has since been met; the stale shared plan/evidence remains owner-owned and was not edited here.

The design and canonical page metadata agree. A separate state mismatch remains recorded for the owner: the design audit text says the actual checker fails, while the current source check passes after the live repair integration. No shared plan or owner verdict was changed to reconcile that historical text.

## Work status at this checkpoint

The proposed inventory is 16 A items and one B example. Statements, actual supplier bodies, proofs, source readings, source-fetch stamps, proof contracts, coverage, and item decisions are still to be completed. No source retrieval has yet been attempted, so no retrieval failure or `source_resolution` disposition is recorded. Run `node tools/proof-layout.mjs` on the changed item paths after authoring is complete.


## Step 1 authoring completion update — 2026-10-16

This section supersedes the historical “Work status at this checkpoint” above. That checkpoint predates the current owner release and authoring work; its old inventory, 18-receipt count, source status, and `9b2c…` scheduling hash are retained as history, not current evidence.

### Current control inputs and recorded conflicts

- The QC05 row at `research/plan-quantum-computing-track.md:79` and `plan-spec.json` agree on the A/B IDs, titles, order 2174/2175, category, and all eight A-page `requires` edges. `plan-spec.json` still has empty item inventories. The assigned batch manifest and this authored inventory therefore control item placement; the track’s audited proposal inventory is planning context only.
- The track design’s later planning narrative still says the pre-authoring hold is open (around line 223). The binding `research/quantum-computing-algorithms-60-2026-10-15-owner-authoring-direction.md` explicitly releases that hold after actual integration: 71 valid published-repair receipts, zero pending proposals, and a fresh source check at 120 pages, 896 items, 1,835 roots, zero errors/warnings. The owner direction supersedes the stale design narrative. No shared plan or engine state was edited.
- Three recorded scheduling hashes differ: the dispatch states `5853a948dc662edf4f617f17513f4733c3faab723214e776cad31c223b0b0a60`, the dependency-level JSON records `6beb634293f46e0546f97d6d8af0c9859ee65f4a443cd36b80487b88dc3897c2`, and the older checkpoint above records `9b2c249d4992d9068191bb0f9b1490b0713c8529fcbaa1869bd16d178d892f85`. Their relationship is not documented by the inspected artifacts. I recomputed this pair’s item levels from the current item graph and recorded the digest discrepancy for owner reconciliation; I did not change shared scheduling inputs.

### Final inventory and dependency levels

The assigned manifest started with 18 A items and one B example. I removed the duplicate `lem-qc-nondegenerate-trace-pairing`: the exact trace-pairing result is already authored in batch 2 as `lem-qc-trace-pairing-nondegenerate`, with the statement needed by TP normalization. I added two proved local A-page prerequisites: `lem-qc-linear-isometry-adjoint-identities` (norm isometry to adjoint identities, including the surjective case) and `lem-qc-tensor-products-of-operator-matrix-units-form-a-basis` (to define tensor channel maps on the whole operator space). I retained `prop-qc-unitary-conjugation-global-phase-invariant` from the assigned scaffold and phase warning. Final inventory: 19 A items and one B example; no page-capacity issue.

Levels below are the recomputed item levels, counting all current in-run suppliers. They match the current carriers and batch-5 manifest; suppliers are ordered before their consumers:

- Level 0: `def-qc-kraus-representation`, `lem-qc-linear-isometry-adjoint-identities`.
- Level 1: `def-qc-unitary-conjugation-channel`, `thm-qc-trace-preserving-kraus-normalization`.
- Level 2: `prop-qc-unitary-conjugation-global-phase-invariant`.
- Level 3: `def-qc-choi-matrix`, `def-qc-isometric-stinespring-representation`, `lem-qc-tensor-products-of-operator-matrix-units-form-a-basis`.
- Level 4: `lem-qc-positive-choi-matrix-yields-kraus-operators`.
- Level 5: `def-qc-quantum-channel`, `lem-qc-complete-positivity-implies-choi-positivity`, `thm-qc-kraus-map-completely-positive`.
- Level 6: `thm-qc-isometry-partial-trace-is-channel`, `thm-qc-kraus-choi-equivalence`, `prop-qc-unitary-conjugation-is-channel`.
- Level 7: `thm-qc-channels-compose-and-tensor`, `thm-qc-choi-trace-preservation-condition`, `thm-qc-finite-stinespring-dilation`.
- Level 8: `thm-qc-finite-kraus-choi-stinespring-equivalence`.
- Level 9: `ex-qc-dephasing-channel-kraus-choi`.

The final whole-run level check reports 84 errors outside this pair: 54 unfilled future page inventories and 30 level mismatches on other items. It reports no batch-5 item-level mismatch. An earlier authoring check reported 102; this final count supersedes it. Those other batches and the shared scheduler are outside this assignment.

### Prerequisite and proof reconciliation

All eight required page bodies were inspected. The QC01 page fixes the first-linear root inner product, ordered orthonormal coordinates, and zero-dimensional conventions; the linear-algebra pages supply polarization, bases, adjoints, linear maps, coordinates, matrix units, multiplication, and trace; QC02 fixes product tensor order and proves partial-trace characterization; QC03 defines density operators as non-negative trace-one endomorphisms; QC04 supplies finite block amplifications; the spectral page supplies finite spectral decomposition and non-negative square roots. The actual batch 2, 3, and 4 item carriers used by this pair were read directly, including `lem-qc-trace-pairing-nondegenerate`, the tensor/partial-trace suppliers, `def-qc-density-operator`, and the CP definition.

Two same-page dependency declarations that had described a channelhood theorem as `justified_by` for a definition were corrected. `SCHEMA.md` reserves `justified_by` for a result establishing well-definedness and requires its target to depend on the item; the isometric Stinespring and unitary conjugation definitions are well-defined directly and do not assert channelhood. Their definitions now state only their typed maps and formulas; the channelhood theorems remain separate. This removes misleading reverse edges without weakening either channel theorem.

The final Choi proofs use the declared input-first order explicitly. CP-to-Choi applies the `H ⊗ C^n` block amplification and conjugates by the finite basis-swap isometry to obtain `H ⊗ K`. Positive-Choi-to-Kraus constructs operators from square-root eigenvectors and checks every matrix-unit entry. The TP normalization uses the exact batch-2 trace-pairing supplier. The tensor channel theorem now defines its extension on product operator matrix units and proves these form a basis. The qubit example uses `def-qc-density-operator`, computes the full phase-flip action and input-first Choi matrix, and checks positivity and output partial trace. It avoids equating Preskill’s dephasing parameter with the example’s identity weight; only the fully dephased `p=1/2` case is shared.

### Cross-batch evidence and owner escalation

`research/quantum-computing-algorithms-60-2026-10-15-batch-5.cross-batch-dependencies.json` records 4 required-page edges and 44 direct item edges to batches 2–4; all non-CP supplier interfaces were verified against the actual bodies. The four other `requires` pages are published linear-algebra pages outside this run and are documented above rather than inserted as orphaned run edges.

The batch-4 item `def-qc-completely-positive-map` has an exact metadata defect: `lem-qc-finite-ancilla-amplification-is-block-map` occurs in both its `deps` and `justified_by`, contrary to `SCHEMA.md`. Its actual block-amplification definition was read and is mathematically the needed interface, but six direct consumer edges are kept `open` in the batch-5 cross-batch input for owner repair. The following 11 assigned items, including transitive consumers, are recorded `escalated`: `def-qc-quantum-channel`, `lem-qc-complete-positivity-implies-choi-positivity`, `thm-qc-kraus-map-completely-positive`, `thm-qc-isometry-partial-trace-is-channel`, `thm-qc-kraus-choi-equivalence`, `prop-qc-unitary-conjugation-is-channel`, `thm-qc-channels-compose-and-tensor`, `thm-qc-choi-trace-preservation-condition`, `thm-qc-finite-stinespring-dilation`, `thm-qc-finite-kraus-choi-stinespring-equivalence`, and `ex-qc-dephasing-channel-kraus-choi`. The other nine assigned items have complete local and external prerequisites and are recorded `ready`. No `--owner` override or acceptance is asserted.

### Source and check evidence

Watrous’s full-text book was read at Definition 2.13, Example 2.14, Proposition 2.20, Corollary 2.21, Theorem 2.22, Corollaries 2.23–2.24, Theorem 2.25, Theorem 2.26, Corollary 2.27, and the specified §2.2.3 isometric/unitary and dephasing headings. Preskill’s full Chapter 3 text was read at §§3.2.1, 3.2.6, 3.3.1–3.3.2; §3.4.2 was read through equations (3.97)–(3.101) for the B example. Each harvested result has a named disposition in the coverage file. Watrous is recorded as a textbook and Preskill as lecture notes. Existing fetch stamps were preserved; no retrieval failed and no source-resolution recovery entry was needed.

- `coverage-checklist --require-destination`: 2 pages, 25 harvested results, 0 errors/warnings.
- `source-fetch-check --stamp`: 4/4 source records fetch-verified, 0 newly stamped; 4/4 resolved, 0 drops.
- `proof-contract.mjs --strict`: 20/20 items, 0 errors/warnings; 129 exact supplier citations, 41 proof-step entries, all eight standard boundary cases per item, and a finite midpoint check for the qubit example.
- Item dependency-level checking has no batch-5 mismatch. Whole-run blockers are listed above.
- `proof-layout.mjs` and the remaining scoped format checks are to be run after this update is complete.


## Final scoped gate outcomes

The prospective sentence above about running layout/format checks is superseded by these final results after the last item edits:

- `node tools/proof-layout.mjs <20 changed item paths>`: 20 items, 41 numbered steps, zero defects.
- `node tools/rendercheck.mjs <20 item paths> <A/B page paths> --json`: 22 files, zero errors/warnings. A first scoped render caught five multiline display blocks; they were reflowed onto single source lines and the rerun passed.
- `node tools/precheck.mts <20 item paths> --json` through `tools/tsx-run.mjs`: 20 files, 15 proof-bearing files checked, all 15 report `untagged-steps`; the five definitions are not applicable. The normative worker parser inspects only the source line that begins a numbered step (`worker/src/precheck.ts`, `proposedPrecheck` tag loop at lines 193–204), while this dispatch requires justification tags at the end of each complete step paragraph. The full step-ending tags are present and are read by `proof-contract.mjs`; proof layout passes. I preserved the assigned proof format and recorded this checker incompatibility rather than duplicating tags at step openings.
- Scoped `depcheck` with the 20 batch-5 item IDs: zero errors and zero warnings; 790 item/page prerequisite-closure checks.
- `content-policy` on the batch-5 manifest: 20 items, zero errors/warnings.
- `coverage-checklist --require-destination`: two page entries, 25 harvested results, zero errors/warnings.
- `source-fetch-check --stamp`: all four source records fetch-verified and resolved; no new stamps or drops.
- Strict proof contracts: 20/20 items, zero errors/warnings. The finite midpoint calculation for the qubit example remains supplementary to its symbolic proof.
- Every assigned item has a hash-bound Step 1 record. Nine are ready and eleven are escalated; all nine current ready hashes were recomputed and match the final carriers.

Two global checkers cannot close over the other 59 pairs. The final whole-run item-level checker reports 84 external errors (54 future page inventories still empty and 30 item-level mismatches); none names a batch-5 item. `step1-decisions check --run` cannot finish its whole-run scan because the unrelated batch-17 carrier `items/thm-qa-19-measurement-distribution.md:29` has an unquoted colon in its YAML `locator` scalar (`Chapter 17 §17.1, PDF pp.81–82 …: the finite walk state …`). This item is outside batch 5 and was not edited. The nine ready records are current by direct hash recomputation despite that repository-wide scan blocker.


## Read-only autopilot status

The prescribed `node tools/tsx-run.mjs tools/autopilot/bin/autopilot.mts status --run quantum-computing-algorithms-60-2026-10-15 --state-dir .autopilot/quantum-computing-algorithms-60-2026-10-15` recomputed the run at handoff: it remains `running` at `1-scaffold`, reports 14/60 pairs covered, nothing in flight, and still lists batch 5 among missing artifacts despite the assigned batch-5 carriers/evidence now on disk. Existing global blockers include `Invalid pair undefined`, an invalid batch-12 construction item identity, a failed handoff from unrelated malformed YAML, and the owner Step 1 stalemate file for units 29 and 2. These are owner/engine-owned; I did not modify `.autopilot/`, transition the run, or edit another batch.


## Correction to the CP supplier review and Step 1 records

A direct re-read of the current `items/def-qc-completely-positive-map.md` frontmatter corrected an earlier stale claim in this note: the supplier lists `lem-qc-finite-ancilla-amplification-is-block-map` once in `deps` and has no `justified_by` field. Its Definition uses that proved block-map lemma, and the lemma’s actual proof supplies the finite amplification rule. There is no duplicate-`deps`/`justified_by` schema defect and no remaining mathematical prerequisite gap from this supplier. The six batch-5 cross-batch item edges to the CP definition have been changed from `open` to `verified` with the exact current interface evidence.

The 11 batch-5 Step 1 records already marked `escalated` were created from the earlier contrary report. The dispatch forbids overwriting an escalation or using `--owner`, so those records are preserved unchanged. Their recorded CP-metadata reason is superseded by this correction; an owner must review and clear them. I have not represented those eleven as ready or changed engine state. The nine ready record hashes remain current. A repository-wide `step1-decisions check` remains blocked by the unrelated batch-17 YAML locator documented above.
