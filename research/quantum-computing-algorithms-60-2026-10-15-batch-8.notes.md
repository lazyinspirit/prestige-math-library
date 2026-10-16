# Batch 8 authoring handoff — Controlled Gates, Phase, and Entanglement

Run: `quantum-computing-algorithms-60-2026-10-15` · role: beta · pair: `controlled-gates-phase-and-entanglement`

## Inventory, plan, and levels

The assigned A/B page metadata match `research/plan-spec.json`: order 2180/2181, category `quantum-computing`, titles, companion IDs, and all seven A-page `requires` entries. The QC track design's QC08 scope is preserved: controlled operations, CNOT/CZ/SWAP, multicontrol, relative phase, and entanglement. The design's control-first blocks, root pairing linear in the first argument, explicit controlled/inverse access, and distinct reflection signs are used throughout.

Two planning conflicts are recorded. The owner-authoring direction explicitly releases drafting for all 60 pairs and supersedes the stale design/task text that still says to hold dependent authoring pending the old prerequisite repair. This release grants authoring only; it supplies no proof acceptance, page readiness, execution coverage, or gate waiver. The QC08 row of `plan-spec.json` has `items: []`, while the current audited QC export lists 14 A items and one B example. The manifest follows that inventory and adds one locally required A-page lemma, for 15 A items and one B example total.

The item levels below were recomputed over all current run manifests, counting every in-run supplier and excluding root suppliers. The 16 batch-8 labels all match the computed graph; no cycle was found.

| Level | Batch-8 items |
|---:|---|
| 1 | `thm-qc-unit-vector-projector-is-density` |
| 3 | `def-qc-pure-state-entanglement` |
| 4 | `thm-qc-standalone-global-phase-invariance` |
| 6 | `def-qc-controlled-unitary-access`, `def-qc-relative-phase` |
| 7 | `def-qc-inverse-unitary-access`, `def-qc-controlled-phase-rotation`, `thm-qc-controlled-global-phase-is-relative-phase`, `def-qc-cnot-and-control-target-order`, `def-qc-multicontrol-activation` |
| 8 | `def-qc-controlled-z-and-swap`, `thm-qc-cnot-creates-bell-entanglement`, `def-qc-reflection`, `ex-qc-controlled-global-phase-witness` |
| 9 | `thm-qc-reflection-unitary-involution` |
| 10 | `thm-qc-rank-one-reflection-phase-and-control-sign` |

The page-level batch input remains level 4 with prerequisite batches 1, 2, 3, 4, and 7. The dispatch named scheduling input hash `5853a948dc662edf4f617f17513f4733c3faab723214e776cad31c223b0b0a60`; the current shared batch-dependency file now has hash `8f311e4e9bfdc6fc40a657a21c0c1110bfa7958d26569f247e9ce37bd68f6c26`. Its batch-8 row still says level 4 / requires 1, 2, 3, 4, 7. I did not edit that owner-shared input.

## Proof routes and local correction

The new A-page item `thm-qc-unit-vector-projector-is-density` gives a complete finite-dimensional proof of self-adjointness, idempotence, one-dimensional range, non-negativity, and trace one, including the Parseval step. It is the local supplier used by the phase-probability proofs. This was added because the current QC03 draft `thm-qc-ray-projector-well-defined-and-bijective` uses Parseval in its trace-one calculation without declaring or citing `thm-bessel-inequality-and-finite-parseval-identity`. The new local lemma avoids that supplier in the two global-phase arguments; it does not repair QC03's theorem or certify the QC03 page. Proposed owner placement for that defect is QC03's theorem: add the exact Parseval supplier and cite its use, or revise that proof there.

`def-qc-pure-state-entanglement` proves coefficient-matrix rank invariance under ordered orthonormal basis changes, identifies the rank with the positive Schmidt-term count, and proves product ray iff rank one. Its matrix-rank citation/dependency was corrected to the existing canonical item `cor-matrix-rank-equals-the-rank-of-its-linear-map`. `def-qc-controlled-phase-rotation` declares `thm-complex-exponential-addition-and-real-extension` because its exact relation between controlled phase and controlled $R_z$ uses exponential multiplicativity. The global-phase theorem proves the finite POVM and trace formula locally and states both phase cases. The reflection results prove the projector identities, ray invariance, both sign conventions, controlled-control distinction, conjugation formula, and the separate inverse-access caveat.

No Axiom of Choice is used. Every basis/eigenbasis selection is finite-dimensional and choice-free; the contracts record `axioms: []`. `def-qc-reflection` is a pure definition with `provenance.proof: not-applicable` and justified well-definedness results, so it is not a proof-bearing contract entry.

## Supplier reconciliation and open edges

`research/quantum-computing-algorithms-60-2026-10-15-batch-8.cross-batch-dependencies.json` has 50 current rows: 45 item edges whose exact interfaces were checked, plus five still-open required page edges. The checked item rows are interface reviews only; the supplier carriers remain drafts where their pages are in-run. The five open prerequisites are:

| Required page | Current state | Claims affected |
|---|---|---|
| `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` (QC01) | draft, 10 items | Root inner-product, adjoint, trace, positivity, and finite spectral interfaces used by projectors, POVMs, and reflections. |
| `registers-tensor-products-and-partial-trace` (QC02) | draft, 13 items | Ordered product basis/pairing, tensor maps, and register order used by controlled blocks, POVM effects, Bell coefficients, and multicontrol. |
| `pure-and-mixed-states-ensembles-and-schmidt-decomposition` (QC03) | draft, 15 items | Ray/density conventions and Schmidt interfaces used by phase and entanglement claims; the Parseval defect above remains owner work. |
| `measurements-povms-and-instruments` (QC04) | draft, 16 items | Finite POVM effects, trace outcome weights, and normalization used by both phase-probability results and the B example. |
| `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates` (QC07) | draft, 10 items | Exact $X,Z,H$ conventions and one-qubit gate interfaces used by CNOT, controlled phase, and multicontrol. |

`inner-product-spaces-and-orthogonality` and `the-spectral-theorem-and-singular-value-decomposition` are published root pages. The QC01/QC02/QC03/QC04/QC07 draft status is why no batch-8 item is marked ready. The local A/B carriers are present and complete enough for owner reconciliation; no supplier acceptance is asserted.

## Source and contract evidence

The A-page source ledger records full-text reading and supported-item dispositions from Ronald de Wolf's full lecture notes (`https://arxiv.org/pdf/1907.09415`), John Preskill Chapter 2 (`https://www.preskill.caltech.edu/ph219/chap2_15.pdf`), and John Preskill Chapter 6 (`https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf`). The two independent treatments are de Wolf and Preskill. The current locator details and every harvested result's disposition are in the coverage file. No retrieval failed, no recovery retries/searches were needed, no source was dropped, and no `source_resolution` entry was added. `source-fetch-check --stamp` verified 3/3 sources with 0 new stamps.

`batch-8.proof-contracts.json` covers all 15 proof-bearing items with 58 actual step entries, 111 exact supplier citations, and all eight standard boundary cases per item. Strict validation passed with zero errors/warnings. No registered check in `tools/finite-smoke.mjs` applies to this finite-dimensional quantum batch, so each contract records `finite_smoke: []`; the relevant finite matrix and basis calculations are proved in the item steps.

## Scoped checks and readiness records

Final checks on the assigned items passed: `proof-layout` 16 items / 58 steps / zero defects; phase `precheck` 15 checked / zero failed (the reflection definition is not applicable); strict proof-contract validation 15/15; `rendercheck` 18 files / zero errors and warnings; focused `depcheck` over a 1,051-item / 194-page prerequisite closure with zero errors and warnings; focused `fwdcheck` over 1,032 prerequisite items / 206 pages with zero errors and warnings; `extcheck` 16 items / zero errors and warnings; `citecheck` 16 items / zero warnings; `content-policy` 16 items / zero errors and warnings; and scoped dependency-level recomputation 16/16 labels correct. Cross-batch reconciliation found exactly 50 expected edges with no missing or stale rows.

All 16 item records were created with `node tools/step1-decisions.mjs record` and decision `escalated`, each listing its direct `deps` plus any `justified_by` items. The common reason records the five exact open page prerequisites above; no `--owner` flag was used and no existing escalation was overwritten. The run-wide `step1-decisions check` cannot complete: its latest attempt stops on malformed out-of-scope YAML at an unquoted source `locator` (line 28). A read-only search found that exact locator in several QA19 items, including `items/thm-qa-19-measurement-distribution.md`, `items/alg-qa-19-complete-graph-spatial-search.md`, and `items/def-qa-19-hamiltonian-access-cost-model.md`; the checker does not name which is the first offending path. These files were left untouched. The direct record commands did succeed for all 16 batch-8 items.

The run-wide `item-dependency-levels.mjs check --run` also reports empty inventories and stale labels in other batches; the batch-8-specific graph calculation above is clean. `batch-dependency-levels.mjs check --run` stops on malformed out-of-scope YAML at a source title (line 16), before it can compare the shared input. Focused `depcheck` and `content-policy` passed during the first final sweep, then their last rerun failed while loading the run-wide manifest inventory because `items/alg-qa-19-complete-graph-spatial-search.md` is absent although batch 43 still lists it. This is outside batch 8 and was not repaired here. `fwdcheck`, `extcheck`, and `citecheck` passed again after that change. An earlier attempted `node tools/depcheck.mjs --help` was parsed as an unscoped depcheck and ran the whole corpus; it made no changes and is not used as scoped evidence.

The current autopilot status remains `running`, stage `1-scaffold` at 12/60, with no workers in flight. Its blockers include an invalid pair (`undefined`), the invalid construction scheduling item `def-qc-effective-unitary-matrix-input` in batch 12, a YAML parse failure in another batch handoff, and the existing owner repair/recertification blocker at `research/quantum-computing-algorithms-60-2026-10-15-step1-blockers.json`. No engine state, published content, shared plan, verdict, or other pair's files were changed by this batch.

The A/B page carriers, item manifest, coverage, proof contracts, cross-batch input, notes, and all 16 escalated records are present. Escalations and completion records are scaffolding handoff evidence only; they are not independent mathematical approval.
