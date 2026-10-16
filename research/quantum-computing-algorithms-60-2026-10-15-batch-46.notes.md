# Batch 46 authoring notes — Block Encodings

## Scope, plan, and design

The current `research/plan-spec.json` entry matches the assignment's A/B page IDs, category, order, companion relation, and all nine A-page `requires` edges. Its item inventories are empty because it is the pre-authoring plan. The current audited `research/quantum-algorithms-planning/proposed-items.json` supplies the assigned ten A items and two B examples; those twelve IDs are now in the batch manifest.

The task says “design: none found.” No separate page-specific design file was found, but the current audited `research/quantum-algorithms-planning/sections/qa_r5.md`, “QA22 — Block encodings,” is a substantive design section. Under the owner direction that the current audited exports supersede stale embedded snapshots, I followed QA22 and recorded the task/design mismatch here. The plan controls page metadata and item placement; no stronger conflict with the current QA22 scope was found.

The page retains the root inner product linear in its first argument, with Dirac conversion `⟨x|y⟩_D = ⟨y,x⟩_root`. The projected block error is normalized as `||B_U − A/α|| ≤ ε`. Rectangular matrices use explicit finite isometric input/output paddings whose dimensions are part of the encoding data. A bare matrix supplies no forward, inverse, controlled, SELECT, or preparation operation.

## Inventory, dependencies, and levels

The A page has ten items and the B page has two examples, below the 100-item cap. The pair-level scheduling input assigns batch 46 dependency level 11 and prerequisite batches 1, 2, 8, 9, 10, 14, and 24. This page level is separate from the item levels below.

The assigned item levels were recomputed from the current populated run-manifest dependency graph. Suppliers precede their consumers; the current graph contains no detected logical dependency cycle.

| Item | Page | Current dependency level |
|---|---|---:|
| `def-qa-22-block-encoding` | A | 7 |
| `lem-qa-22-block-compression-contraction` | A | 8 |
| `def-qa-22-block-encoding-access-model` | A | 11 |
| `alg-qa-22-product-block-encoding` | A | 12 |
| `thm-qa-22-adjoint-block-encoding` | A | 12 |
| `thm-qa-22-product-block-encoding-correctness` | A | 13 |
| `thm-qa-22-long-product-error-recurrence` | A | 14 |
| `ex-qa-22-product-error` | B | 14 |
| `alg-qa-22-lcu-block-encoding` | A | 14 |
| `thm-qa-22-lcu-block-encoding-correctness` | A | 15 |
| `thm-qa-22-block-encoding-error-and-query-cost` | A | 16 |
| `ex-qa-22-two-term-lcu` | B | 17 |

These current labels differ from the earlier audited QA proposal graph because prerequisite manifests changed after the assigned input was emitted. For example, the current batch-9 circuit-denotation item is level 6 (proposal level 5); batch-14 circuit-cost and uniform-family items are level 10 (proposal levels 6 and 7); batch-10 `def-qc-coherent-function-oracle` is level 13 (proposal level 9); and the batch-24 state-preparation cost suppliers now compute at levels 9, 12, and 13. The assigned levels use the current run graph. The old shared batch-dependency input hash is `931f64fcfa5736273f470121f92953f1ef36acd09ae0a7a19455c0cd6099fd2e`; its batch-46 level remains 11, but its full input hash needs owner refresh after local manifest edits.

The refreshed cross-batch closure contains 44 logical suppliers and six additional in-run `justified_by` well-definedness suppliers (50 unique prerequisites total). Every current supplier carrier exists and is draft. All were inspected at their current bodies; none of those drafts is treated as independent approval. The supplier/source `deps` arrays match, while the `justified_by` arrays for `alg-qc-state-preparation` and `def-qc-projective-chord-distance` differ from their manifests. Four other upstream carriers omit their own `dependency_level`: `def-qc-controlled-unitary-access`, `def-qc-inverse-unitary-access`, `def-qc-cnot-and-control-target-order`, and `def-qc-clifford-t-gate-library`. The exact current carrier, manifest, computed, and proposal levels are recorded in the cross-batch evidence. No cycle was found in the current populated logical graph. The run-wide item-level checker currently reports 53 empty scaffold inventories and no dependency-level mismatch among populated items.

## Supplier interfaces and unresolved items

The required pages `uniform-circuit-families-promise-problems-and-complexity` (batch 14), `state-preparation-isometry-synthesis-and-limits` (24), `registers-tensor-products-and-partial-trace` (2), `circuit-syntax-denotational-semantics-and-measurement` (9), `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces` (1), `controlled-gates-phase-and-entanglement` (8), and `reversible-computation-ancillas-and-coherent-oracles` (10) have populated draft manifests and draft page carriers. The required Hilbert-space and spectral/SVD pages are published prerequisite context. Their exact page paths, item counts, batch levels, and observed interfaces are recorded in `batch-46.cross-batch-dependencies.json`.

The direct item interfaces were read at their current bodies. The register/tensor suppliers declare positive-dimensional registers, ordered product inner products, identity extensions, and wire permutations. The Dirac supplier fixes the root-linear-first conversion and its current coordinate-identity well-definedness theorem was read. The circuit supplier now exists and defines chronological `L_1`-first composition, unitary denotations, and identity-extended wires; it is draft. Controlled and inverse access remain separate operations and costs. State preparation is conditional on an exact normalized table in the ideal continuous-angle model, with table-reading, gates, work bits, and precision kept separate.

One required direct interface remains unresolved: `def-qc-coherent-function-oracle` defines only the Boolean XOR oracle `O_f|x,y⟩=|x,y⊕f(x)⟩`; that body does not define the unitary-valued `SELECT=Σ_j |j⟩⟨j|⊗U_j` required by LCU. The LCU algorithm treats SELECT as a separately supplied, explicitly costed unitary and claims no implementation from the XOR oracle. The proposal's direct dependency on the XOR oracle therefore needs owner reconciliation. The LCU algorithm, its correctness theorem, the combined error/cost theorem, and the two-term LCU example remain escalated with this exact dependency visible; no dependent claim was omitted.

Two stale supplier-side checks were also observed outside batch-46 scope. `items/def-qc-clifford-t-gate-library.md:60` still says the QC09 resource item is absent, although the current `items/def-qc-elementary-circuit-resources.md` carrier is present and its cost interface was inspected. `items/lem-qc-x-cnot-toffoli-and-fredkin-are-involutions.md` still has `verification.precheck: pending`. These do not change the authored block-encoding arguments; they remain visible for owner reconciliation.

## Authoring and proof route

The A page defines finite normalized block encodings, proves the compression is a contraction, specifies a separate-access cost model, defines product and adjoint constructions, and proves the product perturbation bound and arbitrary-length recurrence. The LCU definition handles term-dependent normalizations `α_j`, zero-term omission, coefficient phases, padded index labels, common ancilla width, and explicit PREPARE/SELECT costs. The optional coefficient-table route uses the exact QC24 table model. Since zero coefficients are omitted, `w_0>0`; the first amplitude `√w_0` has phase zero, so QC24's convention of dropping the reference phase prepares the exact `|χ⟩` vector in this instance. The stated table bit scan, continuous-angle gate/depth bound, and reusable clean-work bound remain separate from finite-alphabet compilation and Turing bit-time claims.

The product proof derives the normalized error expression locally and then proves the sharper contraction bound. The recurrence uses a telescoping expansion and includes `k=1`. The adjoint proof derives equality of operator norms from the adjoint pairing and Cauchy–Schwarz rather than relying on an uninspected SVD convention. The B page verifies explicit unitary dilations and the exact diagonal product-error and two-term LCU calculations. No choice principle is used; all arguments are finite-dimensional and choice-free.

## Sources and disposition

Two independent full-text treatments support the A page:

| Source | Inspected locator | Harvest disposition |
|---|---|---|
| Andrew M. Childs, *Lecture Notes on Quantum Algorithms* ([full PDF](https://www.cs.umd.edu/~amchilds/qa/qa.pdf)) | Ch. 28 §28.3, Eqs. (28.11)–(28.20); Ch. 29 §29.1 and closure discussion, printed pp. 141–144 / PDF pp. 149–152 | Included the projected block, coefficient-state/SELECT/unprepare identity, and composition context. Its rough notes were not used instead of local proofs. |
| András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, *Quantum singular value transformation and beyond* ([full PDF](https://arxiv.org/pdf/1806.01838)) | Definition 43 (PDF p. 41), Lemma 52 (pp. 46–47), Lemma 53 (pp. 47–48) | Included the projected block, rectangular padding, LCU route, and separate-ancilla product method. Its unnormalized error convention and state-preparation-pair convention were not copied; the QA22 claims are rederived locally. |

Both author-hosted full-text retrieval stamps were reused from the audited QA5 source pass. The current `source-fetch-check --stamp` returned **2/2 fetch-verified, 0 newly stamped, 0 drops**. The exact URLs, locators, fetched hashes, and result-by-result dispositions remain in `batch-46.coverage.json`. No retrieval failed, so no recovery retry or `source_resolution` record was needed. The block-compression, adjoint, recurrence, access-cost accounting, and finite examples are proved or specified locally rather than presented as harvested source results.

## Readiness and handoff

The proof contracts are aligned to the current numbered proof steps and include exact supplier excerpts, item-specific boundary dispositions, and the applicable finite checks (none of the current finite-smoke registry cases is a QA22 block-encoding check; both B examples carry their exact calculations locally). No item is marked accepted or published. Only the LCU branch and its consumers are escalated for the unresolved SELECT dependency; the other items receive authoring-ready decisions because their direct and transitive interfaces, placements, proof contracts, and local arguments were checked. These readiness records are authoring handoffs, not independent mathematical approval.

The recomputed native status says the run is `running` at `1-scaffold`, with 24/60 batches covered, no workers in flight, an owner repair/recertification blocker in `research/quantum-computing-algorithms-60-2026-10-15-step1-blockers.json`, and batch 46 still missing its native artifact. The batch-level dependency check cannot recompute because unrelated `items/lem-qc-binary-dual-dimension.md:26` has an unquoted source title (`John Preskill, Quantum Computation, Chapter 7: Quantum Error Correction`). The owner must repair that source and refresh shared scheduling inputs; this batch did not edit either. The current Git log has no closeout commit for this run. This batch did not edit `.autopilot`, shared plans, published content, or owner verdicts.

## Scoped checks

| Check | Result |
|---|---|
| `node tools/proof-layout.mjs` on the 12 assigned item files | Pass; 12 items, 26 proof steps, 0 defects. |
| Scoped `tools/precheck.mts` | Pass; 9 proof-bearing items checked, 0 failures; 3 definitions/algorithms are not applicable. |
| `node tools/rendercheck.mjs` on 12 items and 2 pages | Pass; 14 files, 0 errors, 0 warnings. |
| `node tools/depcheck.mjs --items-file /tmp/qa46-items.json --json` | Pass; 12 assigned items, 0 errors, 0 warnings. A first invocation used an unsupported selector and fell back to full-corpus mode (4,788 errors and 986 warnings); it was immediately rerun with the scoped selector. No out-of-scope files were changed. |
| `node tools/proof-contract.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-46.proof-contracts.json --strict --json` | Pass; all 12 contracts checked, 0 errors, 0 warnings. |
| `node tools/boundary-audit.mjs` on the batch-46 contracts | Pass; 96 boundary rows, 0 template clusters, 0 contradicted candidates. |
| `node tools/source-fetch-check.mjs --coverage research/quantum-computing-algorithms-60-2026-10-15-batch-46.coverage.json --stamp` | Pass; 2/2 fetch-verified, 0 new stamps, 0 drops. |
| `node tools/item-dependency-levels.mjs check --run quantum-computing-algorithms-60-2026-10-15` | Run-wide check exits nonzero only for 53 other empty scaffold inventories; no dependency-level mismatch is reported. All 12 batch-46 labels equal their current computed levels. |
| `node tools/batch-dependency-levels.mjs check --run quantum-computing-algorithms-60-2026-10-15` | Blocked before recomputation by the unrelated YAML error at `items/lem-qc-binary-dual-dimension.md:26`; the shared sidecar was left untouched. |

`step1-decisions` records were created with `owner: false`: eight items are authoring-ready and four LCU-dependent items are escalated. Recomputing those records gives `closed: true` for the eight ready items and preserves the four escalations. These are authoring handoffs, not independent mathematical acceptance.
