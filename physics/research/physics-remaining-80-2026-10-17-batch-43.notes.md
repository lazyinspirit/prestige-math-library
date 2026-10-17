# Batch 43 notes — Finite-excitation vacuum spin representation and normality

Run `physics-remaining-80-2026-10-17`, role **beta**, batch **43**. Owned pair: A `qsm-nonnormal-thermal-states` (order 583) and B `qsm-nonnormal-thermal-states-examples` (order 584), category `quantum-statistical-mechanics`. All seven assigned items are mathematical; no physical postulate, measurement, or empirical inference is asserted.

## Plan, scope, and inventory

The owner authoring direction was read first. The current plan specification requires only `qsm-kms-equilibrium` at the A-page level and requires the A page at the B-page level. The older prose reservation additionally listed `qsm-quasilocal-states` as an A-page prerequisite. The current `plan-spec.json` controls: the A page keeps only `qsm-kms-equilibrium` in `requires`; item-level mathematical dependencies on the quasi-local carriers remain explicit wherever needed. The plan-spec item arrays are intentionally empty before build authoring; the current paired inventory supplies four A items and three B examples, now transcribed to the batch manifest.

| Page | Items | Recomputed item levels |
|---|---|---|
| A `qsm-nonnormal-thermal-states` | `def-qsm-vacuum-spin-representation`; `lem-qsm-vacuum-representation-irreducible`; `thm-qsm-onsite-product-kms`; `thm-qsm-product-thermal-state-nonnormal` | 5, 6, 10, 11 |
| B `qsm-nonnormal-thermal-states-examples` | `cex-qsm-invariant-not-kms`; `cex-qsm-global-spin-thermal-trace-diverges`; `ex-qsm-nonnormal-tracial-spin-state` | 11, 12, 12 |

The A page remains within the 100-item cap. Its four items occur supplier-before-consumer; all B examples consume the completed A-page results. Every local mathematical dependency uses `mathematical-premise`; `physical_scope` is null and `empirical_premises` is empty throughout.

## Supplier interfaces and proof status

The assigned claims and proofs were checked against the current carriers in batches 36, 38, 39, and 41, including the full local proofs for the finite-matrix C*-identity/state-density duality, quasi-local completion and consistent-state extension, state compactness, finite-range dynamics and local generator, KMS strip uniqueness and Gibbs strip limits, finite-dimensional Gibbs/KMS characterization, and the finite-excitation commutant argument. The exact supplier inputs, current interface excerpts, hashes, Step-1 records, in-run closure, and imported mathematics boundary are in `batch-43.dependency-inputs.json`. It records 21 reachable in-run supplier items and 31 pinned imported mathematical suppliers, with zero missing or stale supplier carriers.

The older batch-38 concern about normalized rational vectors is historical. The current `lem-qsm-matrix-state-calculus` proof explicitly approximates unit vectors by normalizations of dense rational-coordinate vectors, without asserting the normalized vectors remain rational. Its current owner Step-1 record is `ready`; the separate current `lem-qsm-finite-matrix-cstar-and-state-duality` supplies the exact C*-identity and positive-functional/density norm interface. Both remain draft mathematical inputs, and these records are authoring readiness, not independent proof acceptance. Historical batch-38 notes and cross-batch rows were left unchanged.

Batch-39 notes also preserve an earlier escalation saying the finite-matrix C*-identity supplier lacked Step-1 readiness. The current owner Step-1 record `research/physics-remaining-80-2026-10-17-step1-lem-qsm-finite-matrix-cstar-and-state-duality.json` is later, current, and `ready`; the full current proof was re-read. Batch-39's historical notes and cross-batch evidence remain unchanged.

`thm-qsm-onsite-product-kms` uses the exact local-pair KMS limit interface and separately proves the all-observable extension by norm approximation and uniqueness by restriction to invariant local algebras. The proof keeps the finite-matrix and Countable-Choice conditions explicit. `thm-qsm-product-thermal-state-nonnormal` defines extension precisely, proves the cylinder-projection suprema used by normality, and handles the trace-class limit with finite-tail bounds. Its scope is `q≥2` and a finite Hermitian onsite Hamiltonian; no claim about other representations or physical relaxation is made.

The cross-batch dependency file is a JSON array with 24 verified item edges and one verified KMS-page edge. A scoped reconciliation matched all 25 rows exactly to current manifest dependencies; every row records only the inspected statement/hypothesis/use match, not independent proof approval. All 31 pinned imported-mathematics boundary hashes in the dependency-input record match `research/math-imports.json`. All seven local Step-1 records are `ready`, `owner: false`, with their exact direct dependencies and current dependency-closure hashes; a fresh native `step1Decision` check confirmed all seven are `ready-current`. The Step-1 records mean authoring readiness only.

## Source reading and coverage

Two independent complete lecture-note treatments were read at full-text locators: Pieter Naaijkens, *Quantum Spin Systems on Infinite Lattices*, §3.1 pp. 50–53 and §3.4 pp. 74–77; and David Ruelle, *Topics in Quantum Statistical Mechanics and Operator Algebras*, Ch. 1 §§5, 7, Ch. 2 §§1, 5, 6. URLs, precise harvested headings, item support, and each result’s disposition are in `batch-43.coverage.json`; the reading method and limitations are in `batch-43-sources/source-reading.md`.

Both source PDFs were retrieved and read from complete local copies, then independently re-fetched from their full-text URLs. `source-fetch-check --stamp` verified all four page/source records (4/4 full-text PDFs; 4/4 resolved; zero drops). The initial `pdfinfo`/`pdftotext` parser probe failed because those utilities are absent; PyMuPDF 1.27.2.3 successfully extracted and verified the already retrieved PDFs. This was not a source retrieval failure, so no source-resolution decision or alternative proof was needed.

## Scoped checks

- Final `author-check.mts` passed with fingerprint `667ff4494eab96848a9b9687a640e85c5feddc0482f7a78c4b1c50a11195e6cf`: precheck 6 proof-bearing items, zero failures; rendercheck all seven items and both pages; content-policy 7/7 with zero errors or warnings; strict proof contracts 6/6 with zero errors or warnings.
- Final `proof-layout.mjs` on the seven explicit item paths passed: 25 steps, zero defects.
- Focused `depcheck` passed: 7 selected items, 1,432 dependency-closure items and 512 pages, zero errors or warnings. Focused `fwdcheck` and `extcheck` also passed with zero errors or warnings.
- `coverage-checklist --require-destination` passed: 2 pages, 20 harvested results, zero errors or warnings. `source-fetch-check` check mode passed 4/4.
- A batch-local recomputation checked all seven item levels against every same-run logical supplier, including same-pair suppliers: levels 5, 6, 10, 11, 11, 12, 12; zero mismatches. The page-level batch level remains 4 because its maximum supplier batch is 41 at level 3.

The whole-run `item-dependency-levels.mjs check` remains nonzero because 38 other, unassigned pages still have empty scaffold inventories: `tgr-phs02`, `tgr-phs02-examples`, `emg-s02`, `emg-s02-examples`, `tgr-et03`, `tgr-et03-examples`, `tgr-pet02`, `tgr-pet02-examples`, `tgr-phs03`, `tgr-phs03-examples`, `tgr-c04`, `tgr-c04-examples`, `tgr-mhs01`, `tgr-mhs01-examples`, `tgr-pet01`, `tgr-pet01-examples`, `emg-mp02`, `emg-mp02-examples`, `qsm-dt-relaxation`, `qsm-dt-relaxation-examples`, `emg-mp03`, `emg-mp03-examples`, `emg-ms03`, `emg-ms03-examples`, `qsm-infinite-spin-physical-models`, `qsm-infinite-spin-physical-models-examples`, `qsm-dt-channels`, `qsm-dt-channels-examples`, `tgr-g01`, `tgr-g01-examples`, `tgr-g02`, `tgr-g02-examples`, `tgr-pet03`, `tgr-pet03-examples`, `tgr-phs04`, `tgr-phs04-examples`, `tgr-phs01`, `tgr-phs01-examples`. It reported no batch-43 item-level mismatch.

The shared `batch-dependency-levels.json` check reports stale run inputs and asks for recomputation. Its stored batch-43 row remains level 4 with `requires: [41]`; current authored item edges also reach batches 36, 38, and 39 directly. The level is unchanged, but the run-level graph/input hash must be refreshed by its owner after the batch writers drain. This shared plan was not edited.

The separate whole-run `proof-contract-coverage.mjs` helper is blocked by the unrelated empty inventory `emg-mp03`; the batch-scoped strict `proof-contract.mjs` and the full `author-check` passed. An unsupported `content-policy.mjs --help` probe treated `--help` as a filename and returned a `batch-read` error; it made no changes, and the proper scoped content-policy check passed in `author-check`.

No assigned item has an unresolved mathematical prerequisite. The two run-level metadata blockers above remain owner-scoped and do not change the current carrier interfaces or the seven item-level dependency calculations.
