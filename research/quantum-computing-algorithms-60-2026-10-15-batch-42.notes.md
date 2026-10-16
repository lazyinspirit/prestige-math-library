# Batch 42 authoring notes

Run: `quantum-computing-algorithms-60-2026-10-15`  
Pair: `quantum-walk-search-and-element-distinctness`

## Scope and controlling records

- Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the batch-42 task and dependency order, `briefs/beta-scaffold.md`, the owner-authoring-direction file, the relevant plan-spec records, the batch dependency-level input, and the audited quantum-algorithms planning exports.
- No pair-specific design file or design section governs this pair. The owner-authoring-direction file controls over stale task/design text.
- `research/plan-spec.json` has empty item arrays for this pair; the current audited planning exports enumerate 13 A items and 3 B items. The empty arrays conflict with those audited inventories. I followed the audited item inventory and the controlling pair scope, and recorded the conflict here rather than treating the empty arrays as approval to omit claims.
- Added `lem-qa-18-johnson-walk-spectrum` on the A page because the ED query-cost claim needs the exact lazy Johnson spectrum and absolute gap. Added `def-qa-18-canonical-skip-list-for-element-distinctness` before the QRAM theorem to define the stable hash buckets, nested promotion levels, rank spans, and canonical storage used by its local proof. Final inventory: 15 A items and 3 B examples, below the 100-item cap.

## Sources read and harvest disposition

The full relevant reasoning was inspected in each text, not only the abstracts or theorem statements:

- Childs, *Lecture Notes on Quantum Algorithms*, Chapter 18 §18.4 and Chapter 20 §§20.1–20.3, [full PDF](https://www.cs.umd.edu/~amchilds/qa/qa.pdf).
- de Wolf, *Quantum Computing: Lecture Notes*, Chapter 8 §§8.1–8.3.2, [full PDF](https://arxiv.org/pdf/1907.09415).
- Magniez–Nayak–Roland–Santha, *Search via Quantum Walk*, §§2–4 including the complete approximate-reflection, recursive-amplification, and retained-state tolerant-finding proofs, [full paper](https://arxiv.org/pdf/quant-ph/0608026).
- Ambainis, *Quantum walk algorithm for element distinctness*, §§3–6 including the data-structure operations, canonical hash/skip-list representation, bounded-runtime cutoff, and hybrid lemmas, [full paper](https://arxiv.org/pdf/quant-ph/0311001).

The page/item-to-locator/disposition ledger is in `research/quantum-computing-algorithms-60-2026-10-15-batch-42.coverage.json`. `source-fetch-check --stamp` retrieved and stamped all 6 source records; no retrieval failed, so no recovery search/retry or source-resolution disposition was required.

## Mathematical and interface notes

- The marked-set detection proof uses the general row-stochastic discriminant for the absorbing kernel. It does not assume that the modified absorbing chain is reversible. The empty marked set has exact zero phase; the singleton state space and full marked set exit by their direct branches.
- The symmetric compressed-walk lemma is local. It proves nonnegative spectrum from laziness and bounds every Rayleigh quotient by decomposing a vector supported off the marked set into its uniform and orthogonal components.
- The Johnson spectrum proof is local from incidence raising/lowering maps. Its finite-dimensional injectivity, surjectivity, and eigenspace-dimension arguments now cite `thm-rank-nullity`, `thm-finite-dimensional-orthogonal-decomposition`, and the exact adjoint/orthogonal-complement definitions. The marked fraction for one fixed collision pair is an exact binomial ratio; multiple collision pairs only enlarge the marked set.
- The reversible search proof keeps the source's no-reset semantics after failed measurements. The last ideal angle step is treated separately: before the last step the trigonometric Lipschitz constant is 3; at the last step an explicit polynomial bound controls the possible small angle overshoot. This avoids applying the π/4-range inequality outside its hypotheses.
- The original QA17 access escalations concern depth-convention and numeric-label observations. After native batch 42 drained, the owner checked the actual access Definition/theorem and reused genuine supplier-repair evidence: the full-workspace word restricts to the clean logical walk, each controlled constituent is charged, and no minimum-depth equality is used. These historical holds are not retained as a mathematical interface defect; root owns current levels and readiness binding.
- The original direct QC08 holds cite five draft-page prerequisites. Actual controlled/inverse/reflection bodies and proofs supply the needed exact capabilities and signs. Their source status remains draft; focused body/interface reconciliation grants no independent acceptance or publication.
- `def-qc-circuit-cost-model` and `def-qc-uniform-circuit-family` remain escalated in their own records. The ED input is a supplied finite coherent value oracle. No family-uniformity or minimum-depth theorem is claimed. The optional ordinary Boolean-oracle line uses the ready explicit-schedule suppliers `def-qc-elementary-circuit-resources` and `thm-qc-reversible-embedding-parallel-depth` and reports written schedule depth only.
- Review of the initial QRAM proof found two data-structure defects: complement unranking relied on a scan not bounded by the selected-bucket capacity, and the skip-list promotion order/spans and collision multiplicity update were not sufficiently specified. The local interface is now defined in `def-qa-18-canonical-skip-list-for-element-distinctness`; its theorem proves rank-based complement unranking, exact multiplicity updates, d-wise bucket/list tail bounds, reversible capped updates, and a seed-wise hybrid error estimate. The finite-range direct branch starts below a fixed input-independent threshold `N0` chosen from the hybrid error bound.
- The QRAM gate-cost theorem explicitly assumes a compatible, seed-preserving controlled/inverse Johnson row-access implementation, with its gate cost `G_row`, and uniform subset preparation, with cost `G_subset`. Its actual Statement proves a conditional supplied-cost profile and does not assert the unconditional gate-time bound. The query-only owner row lemma does not construct an efficient QRAM row circuit or prove either gate bound; an unconditional gate-time strengthening remains a separate obligation. Proposed A-page suppliers before `thm-qa-18-element-distinctness-qr-access-gate-cost`: `thm-qa-18-uniform-subset-preparation-gate-cost` for `G_subset`, and `thm-qa-18-compatible-johnson-row-access-gate-cost` for the seed-preserving row-access construction and polylogarithmic `G_row`. Neither proposed supplier is authored or accepted. QPE gate occurrences use the ideal continuous-rotation submodel of `thm-qa-phase-estimation-access-cost`; fixed finite-gate synthesis remains a separate cost. The irreducible polynomial representation is hardwired per size and no generator-time bound is claimed.

## Exact finite checks

The Johnson examples were independently enumerated with exact integer subset matrices. For `N=5,r=2`, lexicographically enumerate the 10 subsets and set `B_ST=12P(S,T)`, with diagonal 6 and off-diagonal 1 exactly when `|S∩T|=1`. Exact characteristic polynomial coefficients are

`[1,-60,1590,-24540,244545,-1645536,7578000,-23600640,47604480,-56197120,29503488]`,

which factor as `(x-12)(x-7)^4(x-4)^5`. For `N=6,r=3`, enumerate the 20 triples and set `B_ST=18P(S,T)`, with diagonal 9 and off-diagonal 1 exactly when `|S∩T|=2`. The exact coefficients are

`[1,-180,15300,-816720,30711600,-864909504,18930820800,-329804501760,4645358161920,-53428067901440,504571732475904,-3919984492216320,25011206931087360,-130360040635760640,549653498371768320,-1846162817657339904,4824151913052241920,-9452457827122544640,13066168749344686080,-11361885868995379200,4674604471815241728]`,

which factor as `(x-18)(x-12)^5(x-8)^9(x-6)^5`. These exact checks corroborate, but do not replace, the local spectrum proof. No registered `finite-smoke` Johnson check exists, so `finite_smoke: []` is used in the proof contracts.

## Scoped checks

- `node tools/proof-layout.mjs` on all 18 batch-42 items: 18 items, 49 numbered steps, 0 defects.
- `node tools/proof-contract.mjs ...batch-42.proof-contracts.json --strict`: 0 errors, 0 warnings, 18/18 items.
- `node tools/source-fetch-check.mjs --coverage ...batch-42.coverage.json`: all 6 source stamps fetch-verified; 0 documented drops.
- Full-run dependency check found no batch-42 errors. It still reports 8 unrelated issues: one empty batch-55 examples inventory, `ex-qa-27-sparse-diagonal-qlsp` at declared level 14 versus computed 13, and six QA34 dependency-level mismatches. The scoped batch-42 item count is 18 and its labels match computed levels 3–17.
- The batch-42 cross-batch input contains 72 item edges and 9 page edges: 11 open item edges (QA17 access model/cost and QC08 controlled/inverse/reflection prerequisites), 6 open page edges, and 64 verified edges. Exact edge-key comparison found no missing, extra, duplicate, or malformed batch-42 review rows. The full derived ledger `collect` check cannot complete because unrelated `batch-11.cross-batch-dependencies.json` has an invalid review/consumer-ownership row; no other batch input was changed.
- `step1-decisions.mjs record` was run for all 18 items without `--owner`: 10 current `ready` records and 8 `escalated` records; a scoped hash check found no missing or stale records and no owner overrides. The escalations are the eight controlled-walk/search/query/gate dependent items listed above.
- Read-only autopilot status at 2026-10-15T19:40:40Z still reports the run `running` at `1-scaffold`, 54/60 covered, missing batches 40, 42, 49, 51, 53, and 54, no in-flight dispatch, and batch 42 among the missing dispatch artifacts. Four pre-existing stage blockers remain: invalid pair plan, invalid construction identity in batch 12, malformed item handoff metadata, and the Step 1 owner-repair hold. No engine state or transition was changed; this handoff does not claim dispatch completion or approval.

## Focused owner query-access repair after native drain

Exact final native sources, all eight original escalation records, both page carriers and batch metadata were preserved in `.autopilot/owner-qa18-preimages/quantum-computing-algorithms-60-2026-10-15/batch42-drained/`. New `lem-qa-18-johnson-stored-data-query-access` transports the walk by the stored-data isometry and supplies clean two-query row/control/inverse circuits. The exact costs are stored-vertex setup `r`, elementary replacement `2`, stationary edge setup at most `r+2`, controlled row reflection at most `4`, and controlled `W`/inverse at most `8`. The query theorem now uses the stronger required access profile and retains `r+O(N/sqrt(r))` and `O(N^(2/3))`. Its two examples retain unchanged mass/count/asymptotic uses; the QRAM consumer retains its explicit supplied gate-cost assumptions. Only the corresponding source/Facts, citation/derivation mirrors, source coverage, placement and cross-edge observations changed. Historical native checks/decisions above remain historical, not new readiness or independent review. Root will assign current graph levels and bind inputs after all writers drain.
