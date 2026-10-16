# Batch 43 authoring notes — Continuous-Time Quantum Walks

Run: `quantum-computing-algorithms-60-2026-10-15` · batch: `43` · role: beta

## Scope, authority, and planning decisions

- The generated beta task says `design: none found`. The owner-authoring direction explicitly makes the current audited QA track design controlling, so I read and followed the complete QA19 section in `research/quantum-algorithms-planning/sections/qa_r4.md`. The operative QA19 design requires the finite-matrix evolution, graph-generator conventions, measurement law, hypercube transfer, complete-graph search and cost accounting, plus B-page checks of the power-of-two preparation and irregular-graph generators. The generated task/design conflict is resolved in favor of the current plan and owner direction.
- The plan-spec A/B page IDs, titles, category, ordering (A 2250, B 2251), and prerequisites match the assignment. `plan-spec.json` has pre-authoring empty `items`; the current audited QA proposal has 11 A and 3 B items. I added two local A-page results needed before using their claims: `lem-qa-19-single-outcome-probability-stability` for the `2ρ` measurement guarantee and `lem-qa-19-hadamard-uniform-state-preparation` for the power-of-two `A_s` construction. Final inventory is 13 A items and 3 B items; no capacity issue.
- The B design’s irregular-graph comparison is covered on P3 by exact spectra for adjacency, normalized adjacency, and both Laplacian signs. The B search example calculates the general-N invariant block and N=2 boundary, then checks the standard-binary Hadamard preparation for N=2 and N=4. The A algorithm/resource statements cite the local all-n preparation proof and retain the primitive-gate/synthesis-cost condition.
- The user-dispatch scheduling hash is `6beb634293f46e0546f97d6d8af0c9859ee65f4a443cd36b80487b88dc3897c2`. The latest observed `batch-dependency-levels.json` input hash is `d63e4218fb1ccb60e0ff71096e37391ecc9824c4dcf111b70f219fa5d0642df6` (file SHA-256 `bffed4fcae59517868625bd8e6d262f44729652d0c077bbfe87f16532a372f5e`). Its batch-43 row remains level 11 with prerequisite batches 1, 2, 3, 4, 8, 10, and 14. The shared schedule was not edited; `coverage.json` records the latest observed input hash.
- The disk-recomputed autopilot snapshot taken at authoring start showed the run in Step 1 `scaffold`, no in-flight workers, and unrelated pre-existing blockers (undefined pair, missing batch-12 identity, malformed YAML in another handoff). No run transition or engine state was changed.

## Item inventory, direct dependencies, and levels

Levels count all suppliers assigned to this run, including suppliers in other batches. The new Hadamard lemma is level 11 because its current-run circuit-cost supplier is level 10. The batch manifest is the authoritative full dependency record; this compact table mirrors its exact direct `deps` and levels.

| Item | Level | Direct dependencies |
|---|---:|---|
| `def-qa-19-finite-matrix-dynamics` | 0 | `def-self-adjoint-and-normal-endomorphism`, `thm-complex-spectral-theorem-for-normal-endomorphisms`, `def-functional-calculus-for-a-normal-endomorphism`, `thm-complex-exponential-addition-and-real-extension`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity` |
| `lem-qa-19-hadamard-uniform-state-preparation` | 11 | `def-qc-register-and-computational-basis`, `def-qc-tensor-register-and-permutation`, `thm-qc-computational-basis-orthonormal`, `def-qc-circuit-cost-model` |
| `def-qa-19-graph-generator-conventions` | 1 | `def-self-adjoint-and-normal-endomorphism`, `def-adjoint-of-a-linear-map-between-inner-product-spaces`, `def-qc-register-and-computational-basis` |
| `thm-qa-19-matrix-exponential-unitary-properties` | 1 | `def-qa-19-finite-matrix-dynamics`, `def-self-adjoint-and-normal-endomorphism`, `def-adjoint-of-a-linear-map-between-inner-product-spaces`, `def-real-and-complex-inner-product-space`, `thm-complex-spectral-theorem-for-normal-endomorphisms`, `def-functional-calculus-for-a-normal-endomorphism`, `thm-complex-exponential-addition-and-real-extension`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `thm-complex-exponential-is-entire-with-derivative-itself`, `cor-mean-value-theorem`, `thm-algebra-of-derivatives` |
| `def-qa-19-continuous-time-walk` | 2 | `def-qa-19-finite-matrix-dynamics`, `def-qa-19-graph-generator-conventions`, `def-qc-pure-state-and-ray`, `def-qc-register-and-computational-basis` |
| `thm-qa-19-measurement-distribution` | 3 | `def-qa-19-continuous-time-walk`, `thm-qa-19-matrix-exponential-unitary-properties`, `def-qc-pure-state-and-ray`, `thm-qc-ray-projector-well-defined-and-bijective`, `def-qc-projective-measurement`, `thm-qc-projective-measurement-outcome-law`, `def-qc-dirac-notation-conversion`, `def-real-and-complex-inner-product-space`, `def-trace-of-an-endomorphism`, `thm-bessel-inequality-and-finite-parseval-identity` |
| `lem-qa-19-single-outcome-probability-stability` | 4 | `thm-qa-19-measurement-distribution`, `thm-bessel-inequality-and-finite-parseval-identity`, `def-operator-norm-on-a-finite-dimensional-inner-product-space`, `def-linear-isometry-and-orthogonal-or-unitary-operator`, `def-complex-conjugate-real-imaginary-part-and-modulus`, `thm-cauchy-schwarz-and-the-euclidean-norm` |
| `def-qa-19-hamiltonian-access-cost-model` | 11 | `def-qa-19-finite-matrix-dynamics`, `def-qc-controlled-unitary-access`, `def-qc-inverse-unitary-access`, `def-qc-circuit-cost-model`, `def-qc-uniform-circuit-family` |
| `alg-qa-19-hypercube-state-transfer` | 12 | `def-qa-19-finite-matrix-dynamics`, `def-qa-19-continuous-time-walk`, `def-qa-19-graph-generator-conventions`, `def-qa-19-hamiltonian-access-cost-model`, `def-qc-projective-measurement`, `def-qc-circuit-cost-model`, `def-qc-dirac-notation-conversion`, `def-qc-register-and-computational-basis`, `def-qc-tensor-register-and-permutation`, `lem-qa-19-hadamard-uniform-state-preparation` |
| `thm-qa-19-hypercube-transfer-correctness` | 13 | `alg-qa-19-hypercube-state-transfer`, `def-qa-19-finite-matrix-dynamics`, `thm-qa-19-matrix-exponential-unitary-properties`, `thm-complex-spectral-theorem-for-normal-endomorphisms`, `def-qc-dirac-notation-conversion`, `def-qc-register-and-computational-basis`, `def-qc-tensor-register-and-permutation`, `thm-qc-computational-basis-orthonormal`, `thm-qa-19-measurement-distribution`, `thm-complex-exponential-addition-and-real-extension`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `thm-quarter-turn-values-and-shift-formulas` |
| `alg-qa-19-complete-graph-spatial-search` | 14 | `def-qa-19-continuous-time-walk`, `def-qa-19-graph-generator-conventions`, `def-qa-19-hamiltonian-access-cost-model`, `def-qc-coherent-function-oracle`, `def-qc-projective-measurement`, `def-qc-circuit-cost-model`, `def-qc-dirac-notation-conversion`, `def-qc-register-and-computational-basis`, `def-qc-tensor-register-and-permutation`, `lem-qa-19-hadamard-uniform-state-preparation` |
| `thm-qa-19-complete-graph-search-correctness` | 15 | `alg-qa-19-complete-graph-spatial-search`, `def-qa-19-finite-matrix-dynamics`, `thm-qa-19-matrix-exponential-unitary-properties`, `def-qa-19-hamiltonian-access-cost-model`, `def-qc-dirac-notation-conversion`, `def-qc-register-and-computational-basis`, `thm-qc-computational-basis-orthonormal`, `thm-qa-19-measurement-distribution`, `lem-qa-19-single-outcome-probability-stability`, `thm-complex-exponential-addition-and-real-extension`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `thm-quarter-turn-values-and-shift-formulas` |
| `thm-qa-19-continuous-walk-resource-accounting` | 15 | `alg-qa-19-hypercube-state-transfer`, `thm-qa-19-hypercube-transfer-correctness`, `alg-qa-19-complete-graph-spatial-search`, `def-qa-19-hamiltonian-access-cost-model`, `def-qc-circuit-cost-model`, `def-qc-projective-measurement`, `lem-qa-19-hadamard-uniform-state-preparation` |
| `cex-qa-19-adjacency-laplacian-sign-conventions` | 3 | `def-qa-19-graph-generator-conventions`, `def-qa-19-finite-matrix-dynamics`, `thm-qa-19-matrix-exponential-unitary-properties`, `def-qc-register-and-computational-basis`, `thm-qc-computational-basis-orthonormal`, `def-qc-projective-measurement`, `thm-qc-projective-measurement-outcome-law`, `thm-complex-exponential-addition-and-real-extension`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `thm-quarter-turn-values-and-shift-formulas`, `thm-sine-cosine-zero-sets-and-fundamental-period`, `def-sine-and-cosine-by-power-series`, `thm-alternating-series-test` |
| `ex-qa-19-hypercube-for-n-one-and-two` | 14 | `alg-qa-19-hypercube-state-transfer`, `thm-qa-19-hypercube-transfer-correctness`, `def-qa-19-finite-matrix-dynamics`, `def-qc-register-and-computational-basis`, `def-qc-tensor-register-and-permutation`, `thm-qc-computational-basis-orthonormal`, `thm-qa-19-measurement-distribution`, `thm-complex-exponential-addition-and-real-extension`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `thm-quarter-turn-values-and-shift-formulas` |
| `ex-qa-19-complete-graph-search-matrix` | 16 | `alg-qa-19-complete-graph-spatial-search`, `thm-qa-19-complete-graph-search-correctness`, `def-qa-19-graph-generator-conventions`, `def-qc-dirac-notation-conversion`, `def-qc-register-and-computational-basis`, `thm-qc-computational-basis-orthonormal`, `lem-qa-19-hadamard-uniform-state-preparation` |

## Cross-batch supplier review

`batch-43.cross-batch-dependencies.json` contains 54 declared cross-batch edges: 52 verified and 2 open. Current supplier bodies/proofs and the stated hypotheses/conventions were inspected for the verified edges; these are authoring evidence, not independent approval. All required predecessor batches and external supplier pages were present.

The only open edges are:

- `def-qa-19-hamiltonian-access-cost-model` → `def-qc-controlled-unitary-access`: the current batch-8 manifest assigns level 6, but the actual supplier carrier has no `dependency_level` field.
- `def-qa-19-hamiltonian-access-cost-model` → `def-qc-inverse-unitary-access`: the current batch-8 manifest assigns level 7, but the actual supplier carrier has no `dependency_level` field.

The mathematical access interfaces and proofs were inspected and match this pair’s declared use; the source-level certificate remains incomplete. `def-qc-circuit-cost-model` and `def-qc-uniform-circuit-family` currently match their batch-14 manifest level 10, so they are not unresolved. This metadata gap blocks Step 1 readiness for the Hamiltonian access model and its dependent hypercube/search algorithms, correctness claims, resource theorem, and B examples. Those eight items are recorded as `escalated`; no supplier carrier was edited.

## Sources, reading evidence, and dispositions

Two independent full lecture-note treatments were inspected for the A-page scope:

- Andrew M. Childs, *Lecture Notes on Quantum Algorithms*, <https://www.cs.umd.edu/~amchilds/qa/qa.pdf>. Chapter 17 §§17.1–17.2, PDF pp.81–82 (printed p.74 on PDF p.82), support finite graph-evolution and hypercube context. The exact local unitarity/differential proofs and both search calculations are supplied in this batch.
- Ronald de Wolf, *Quantum Computing: Lecture Notes*, <https://arxiv.org/pdf/1907.09415>. Chapter 9 §9.1, PDF pp.83–84 (printed pp.71–72), supports finite Hermitian evolution and separates the matrix target from implementation cost. Chapter 2 §2.1.2, PDF p.21 (printed p.9) and PDF p.26 (printed p.14), gives the Hadamard matrix and Eq. (2.1) uniform-state identity used by the local preparation lemma.

Source records preserve PDF/text SHA-256 values, byte/page counts, retrieval history, exact locators, supported items, and per-result dispositions in `batch-43.source-evidence.json` and `batch-43.coverage.json`. Childs Ch.19 §§19.1–19.3 was checked only to classify its search discussion as discrete-time and out of scope; Ch.31 §31.3 was checked only to classify it as adiabatic optimization and out of scope. The general-N complete-graph search, approximation bound, hypercube tensor proof, resource account, and all finite examples are proved locally. No source retrieval failed, no recovery retry was needed, no source was dropped, and `source_resolution` remains empty.

Final `source-fetch-check --stamp` result: 4/4 source records fetch-verified, 4/4 resolved, 0 newly stamped. Both A and B page coverage rows reuse the already verified Childs/de Wolf full-text stamps.

## Proof and finite-check coverage

The contracts in `batch-43.proof-contracts.json` cover all 16 items, every numbered step and linked fact, exact excerpts from current supplier statements/definitions/examples, all eight standard boundary dispositions, and explicit axiom fields. No additional axiom is used. The finite checks record the K2 same-time Laplacian-sign probability difference, P3 generator spectra and minimum target-ray times, the hypercube n=0,1,2 amplitudes/probabilities, complete-graph N=2 success and gap, the Hadamard n=0,1,2 preparations/gate counts, and boundary resource counts.

## Scoped validation and readiness

Final scoped results:

- `precheck.mts`: 16 files, 10 proof-bearing checked, 0 failing; 6 definitions/algorithms not applicable.
- `rendercheck.mjs`: all 16 changed items and both pages checked, 0 errors and 0 warnings.
- `depcheck.mjs --items-file /tmp/batch43-item-selection.json`: 0 errors and 0 warnings for the 16 items and both pages.
- `proof-contract.mjs --strict`: 16/16 checked, 0 errors, 0 warnings.
- `proof-layout.mjs` on all 16 explicitly changed items: 45 numbered steps, 0 defects.
- `source-fetch-check.mjs --stamp`: 4/4 fetch-verified, 4/4 resolved, 0 newly stamped.
- `item-dependency-levels.mjs check --run quantum-computing-algorithms-60-2026-10-15`: exit 1 due 34 empty inventories and 8 item-level mismatches in other batches; no batch-43 item was reported. The 16 batch-43 labels match their computed in-run levels. No other pair was edited.

Readiness decisions are authoring records only and are not independent approval. The 8 items without the open controlled/inverse metadata chain are `ready`; the 8 affected by that chain are `escalated`, with direct dependencies and exact supplier evidence stored in their Step 1 records.

### Readiness-check tracker limitation

All 16 batch-43 records were written with `step1-decisions.mjs record` (8 `ready`, 8 `escalated`); no `--owner` option was used. A subsequent run-wide `step1-decisions.mjs check --run quantum-computing-algorithms-60-2026-10-15` could not load the snapshot because nine unrelated batch-58 item carriers have malformed YAML source titles (`Ronald de Wolf, Quantum Computing: …` is unquoted): `alg-qa-34-error-budget-allocation`, `def-qa-34-output-and-cost-types`, `def-qa-34-heralded-verification-contract`, `thm-qa-34-classical-output-writing-lower-bound`, `thm-qa-34-adaptive-failure-union-bound`, `thm-qa-34-error-budget-allocation-correctness`, `thm-qa-34-tang-recommendation-sampler`, `rem-qa-34-dequantization-scope`, and `cex-qa-34-state-output-not-amplitude-list`. These are not batch-43 prerequisites and were not edited. A read-only parse of all 45 distinct direct supplier item carriers for batch 43 found no malformed YAML.
