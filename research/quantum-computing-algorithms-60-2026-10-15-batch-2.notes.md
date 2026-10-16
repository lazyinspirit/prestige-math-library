# Batch 2 authoring notes

Run `quantum-computing-algorithms-60-2026-10-15`; role beta, batch 2. This is the `registers-tensor-products-and-partial-trace` A/B pair. The controlling owner direction was read first and governs any stale task/design language. The complete QC02 design section at `research/plan-quantum-computing-track.md` §76 was read; its register, ordered tensor, computational basis, partial trace, and proof-route scope is retained.

## Plan and inventory reconciliation

The QC02 design scope agrees with the assigned pair. The corresponding `research/plan-spec.json` pair entry has an empty `items` array while the audited quantum-computing export proposes 12 A-page items. The final batch manifest has 13 A items and one B example: the 12 proposed A items plus the local prerequisite `lem-qc-trace-pairing-nondegenerate`. That additional lemma supplies the trace-pairing uniqueness argument required by the partial-trace characterization. No shared plan was edited. The A page remains below its 100-item cap. The batch dependency record sets batch 2 at level 1, with batch 1 as prerequisite, from scheduling input SHA-256 `5853a948dc662edf4f617f17513f4733c3faab723214e776cad31c223b0b0a60`.

Final inventory and recomputed in-run dependency levels (the complete direct dependency lists are in the manifest and item frontmatter):

| Level | Items | In-run suppliers |
|---|---|---|
| 0 | `def-qc-register-and-computational-basis`; `lem-qc-trace-pairing-nondegenerate` | none |
| 1 | `def-qc-ordered-bitstring-encoding`; `def-qc-tensor-register-and-permutation`; `thm-qc-computational-basis-orthonormal` | register definition |
| 2 | `def-qc-partial-trace`; `def-qc-tensor-map`; `lem-qc-tensor-product-basis-and-dimension` | tensor-register definition |
| 3 | `thm-qc-bitstring-index-is-bijection` | ordered encoding, register definition, tensor-basis lemma |
| 3 | `thm-qc-partial-trace-characterization-and-basis-independence` | partial-trace definition, tensor-map definition, tensor-basis lemma, trace-pairing lemma |
| 3 | `thm-qc-tensor-map-composition-and-adjoint` | tensor-map definition, tensor-basis lemma |
| 3 | `thm-qc-wire-permutation-is-unitary` | tensor-register definition, tensor-basis lemma |
| 4 | `thm-qc-partial-trace-positive-and-trace-preserving` | partial-trace definition, tensor-map definition, characterization theorem, tensor-basis lemma |
| 4 | `ex-qc-register-endian-partial-trace` | register definition (0), ordered encoding (1), computational-basis theorem (1), tensor-register definition (1), tensor-basis lemma (2), partial-trace definition (2), partial-trace characterization (3), and bitstring theorem (3); QC01 suppliers `def-qc-dirac-notation-conversion` (level 0) and `thm-qc-dirac-notation-coordinate-identity` (level 1) |

The level calculation treats only dependencies supplied within this run as level-raising edges. It found no cycle in this pair. All 30 distinct external item dependencies named in the final frontmatter/manifest exist. The eight declared page prerequisites are `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `hilbert-space-geometry-and-riesz-representation`, `inner-product-spaces-and-orthogonality`, `linear-independence-bases-and-dimension`, `linear-maps-rank-nullity-and-quotient-spaces`, `matrices-and-the-matrix-of-a-linear-map`, `tensor-products-of-modules`, and `the-spectral-theorem-and-singular-value-decomposition`. The seven non-QC01 pages are published; QC01 is batch 1 and remains a draft in the active run.

## Mathematical audit and dependency changes

The repository inner product is linear in its first argument. Watrous, de Wolf, and Preskill use bra/ket or second-linear conventions in the cited passages; the items state the repository convention and translate formulas before use. Register dimension `d` is positive; the zero-qubit register is `C` with basis `{1}`, not `C^0`. For ordered tensor factors the empty tensor product is `C`, while any zero-dimensional factor makes the tensor space zero. The partial-trace coordinate formula uses an empty sum when the traced factor has dimension zero.

The trace-pairing proof now constructs its matrix-unit witness as an actual linear endomorphism from unique basis coordinates, checks its linearity and matrix, and invokes the matrix-of-composition supplier before computing the diagonal. This avoids using a matrix unit as an unexplained endomorphism. The partial-trace characterization proof expands the finite trace sums, applies nondegeneracy for uniqueness, and proves basis independence via the same characterization. Its dependencies include both the local trace-pairing lemma and the published matrix-of-composition result.

The tensor-register proof makes the algebraic tensor product's complex-vector-space structure explicit: it depends on the generators-and-relations construction, the commutative-ring module structure theorem, and the finite iterated universal property. Unique coordinates justify the product-basis inner product; the finite basis/dimension lemma handles empty lists and zero factors. All finite constructions use specified finite bases or the finite-dimensional orthonormal-basis supplier; no choice axiom is used. Proof contracts declare no additional axioms.

The original QC01 Dirac-coordinate dependency proposed for `thm-qc-tensor-map-composition-and-adjoint` was removed after checking the finished proof: the argument uses the root first-linear inner product, finite product bases, and the published adjoint interface, but no Dirac amplitudes. Conversely, the B example uses both current QC01 Dirac bodies and declares both exact item dependencies. Those supplier bodies and proofs were inspected; their draft status is recorded in `batch-2.cross-batch-dependencies.json`, with no acceptance asserted.

The example writes the ordered two-qubit Bell vector and projector matrix explicitly, then evaluates each partial-trace entry. It separately verifies `enc_3(101)=5`. The selected convention is big-endian: the first wire has positional weight `2^(n-1)`.

## Sources and proof contracts

The full cached Watrous, de Wolf, and Preskill documents were retrieved earlier in the planning run. The author inspected the complete relevant passages listed in `batch-2.source-evidence.json` and the A/B coverage file, including Watrous §§1.1.1–1.1.2 and §§2.1.1, 2.1.3; de Wolf §1.3, Appendices A.6–A.7 and B.2; and Preskill §2.3. The local source reading did not claim a sequential reread of every page of these full documents. Hashes, PDF page counts, successful retrieval attempts, fetch stamps, URLs, locators, and every harvested item's disposition are recorded in the source evidence and coverage files. No retrieval failed, so no retry or source-resolution escalation was needed.

The 14 scoped items have proof contracts covering 42 numbered steps and 77 exact supplier citations. `proof-contract.mjs --strict` passes with no errors or warnings. Boundary records distinguish checked cases from not-applicable cases; no finite-smoke registry entry applies to this pair, so the contracts list no finite smoke checks. The A/B pages, batch manifest, item frontmatter, proof contracts, source coverage, source evidence, and cross-batch dependency record agree on the final inventory and supplier edges.

## Scoped checks and readiness

Final command results are recorded below after all edits. Run-wide gates may expose unrelated active-run scaffold defects; such failures are reported with their exact scope and are not repaired in this assigned pair.


Final scoped check results:

| Check | Result |
|---|---|
| `node tools/proof-layout.mjs` on the 14 assigned item files | Pass: 14 items, 42 steps, 0 defects. |
| `node tools/tsx-run.mjs tools/precheck.mts` on the 14 assigned item files | Pass: 12 proof-bearing items checked, 0 failing. |
| `node tools/rendercheck.mjs --json` on the 14 assigned items and two page files | Pass: 16 files, 0 errors, 0 warnings. |
| `node tools/proof-contract.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-2.proof-contracts.json --strict` | Pass: 14/14 items, 0 errors, 0 warnings. |
| `node tools/content-policy.mjs research/quantum-computing-algorithms-60-2026-10-15-batch-2.pages.json --json` | Pass: 14 scoped items, 0 errors, 0 warnings. |
| `node tools/depcheck.mjs --items-file research/quantum-computing-algorithms-60-2026-10-15-batch-2.depcheck-scope.json --json` | Pass: 14 selected items; prerequisite closure covers 355 items and 168 pages; 0 errors, 0 warnings. |
| `node tools/source-fetch-check.mjs --coverage research/quantum-computing-algorithms-60-2026-10-15-batch-2.coverage.json --stamp` | Pass: 5/5 source-use records fetch-verified, 5/5 resolved, 0 drops; no new stamp was needed. |
| Scoped manifest/frontmatter/page/evidence consistency audit | Pass: 2 page inventories, 14 items, 5 recorded successful retrieval attempts and 2 exact QC01 item excerpts match; 0 mismatches. |
| Scoped recomputation with the run's `dependencyLevels` algorithm | Pass: all 14 batch-2 labels match; levels range 0–4; 0 batch-2 dependency errors or cycles. |
| `step1-decisions.mjs record` and scoped hash check | 14/14 items recorded `ready`; all 14 records are current against their declared dependency closures. |

Run-wide checks retain unrelated blockers. `node tools/item-dependency-levels.mjs check --run quantum-computing-algorithms-60-2026-10-15` returned 202 errors at the latest check: 58 empty inventories and 144 dependency-level label mismatches in other run pages/items; none names a batch-2 item. `proof-contract-coverage.mjs` cannot construct the full run scope because `stabilizer-circuits-and-gottesman-knill-simulation` has an empty scaffold inventory. The strict proof-contract check above covers every item in this assignment.

`node tools/step1-decisions.mjs check --run quantum-computing-algorithms-60-2026-10-15` is also blocked outside batch 2 by a repository-wide YAML parse failure. The first failing item in the sorted item scan is `items/alg-qa-19-complete-graph-spatial-search.md:28`, where the unquoted source title `Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 9 §9.1` contains a YAML mapping colon. A scan found 45 item frontmatters with parse errors; none is in this pair. The 14 batch-2 readiness records themselves pass the scoped current-hash check. These global blockers were left for the owning batches/owner.
