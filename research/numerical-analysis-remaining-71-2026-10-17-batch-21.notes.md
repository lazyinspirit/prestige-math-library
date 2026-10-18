# Batch 21 authoring and evidence notes

Run: `numerical-analysis-remaining-71-2026-10-17`  
Pair: `alternating-tensor-optimization-and-effective-eigenproblems`  
A page order: 2596 · B page: `alternating-tensor-optimization-and-effective-eigenproblems-examples`

## Controlling plan and conflicts

Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, `briefs/beta-scaffold.md`, the generated batch-21 assignment and dependency-order task, the owner authoring direction, the current plan and batch evidence, `research/numerical-analysis-remaining-71-2026-10-17-batch-dependency-levels.json`, the full LIN-DMRG design section in `research/plan-numerical-linear-track.md`, and its `research/plan-spec.json` row before writing carriers.

- The current plan-spec row and the scaffold manifest require `tensor-train-compression-and-truncation-error` and `restarted-and-block-eigensolvers`. The narrative LIN-DMRG section also names `the-spectral-theorem-and-singular-value-decomposition` as page-level context. Kept the page manifest aligned with the controlling plan-spec, and declared the exact needed item dependencies instead: spectral theorem / Rayleigh, Gram–Schmidt, SVD, TT rounding, and TT error suppliers. The design-versus-spec mismatch is also recorded in the cross-batch input as `design-interface` / `not-consumed`.
- The design describes the Hamiltonian as supplied by physics, but gives no exact physics item ID or matrix-assembly interface. These items take a finite Hermitian matrix `H` on the finite coefficient space as an explicit input and prove only conditional statements about that input. They make no physical-model assembly claim. If an assembly prerequisite was intended, the owner must supply its exact item ID and hypotheses; it would belong before `def-na-finite-mps-state-and-hermitian-hamiltonian` or as a separate interface item.
- Periodic trace MPS inputs are covered by an explicit exact conversion to open-boundary TT form. Local effective problems use exact finite Hermitian ground solves. The published restarted/block eigensolver page remains declared page context; no restarted or approximate eigensolver output is used to justify exact local monotonicity.
- The pair fits the page cap: ten A items and three B examples. The B page depends on the A page.

## Inventory and dependency levels

The scaffold inventory and all `deps` were written before carriers. Levels were recomputed from the current batch-10 and batch-21 item manifests: an item with no supplier in this run's batch graph has level zero; otherwise it is one plus the greatest direct supplier level. The batch-21 dispatch level is 1 and its only prerequisite batch is 10, matching the scheduling input. Current item levels:

| Level | Items |
|---:|---|
| 0 | `lem-na-finite-hermitian-ground-vector-with-deterministic-tie` |
| 1 | `lem-na-normalized-rayleigh-energy-perturbation` |
| 2 | `def-na-finite-mps-state-and-hermitian-hamiltonian` |
| 3 | `lem-na-periodic-mps-to-open-tt`; `lem-na-mixed-canonical-qr-gauge-preserves-state`; `lem-na-mps-environment-isometry-and-effective-hamiltonian` |
| 4 | `prop-na-exact-local-dmrg-update-does-not-increase-energy`; `alg-na-alternating-tensor-optimization-and-effective-eigenproblems` |
| 5 | `thm-na-dmrg-sweep-truncation-energy-increase-bound`; `thm-na-convergent-exact-dmrg-sweeps-are-coordinatewise-stationary`; `ex-na-two-site-spin-chain-exact-local-solve`; `ex-na-degenerate-local-ground-state-tie-break` |
| 6 | `ex-na-two-site-tt-truncation-can-increase-energy` |

The verified batch-10 supplier bodies read for this pair were `def-finite-tensor-arrays-and-frobenius-inner-product`, `def-tensor-train-cores-bond-ranks-and-canonical-gauges`, `alg-tensor-train-rounding`, and the complete proof of `thm-tensor-train-exact-ranks-and-root-sum-square-truncation-error`. Their current Step-1 records are `ready` (owner=false); this is authoring-readiness evidence, not approval. Their manifest item levels are 0, 1, 2, and 3, respectively. The cross-batch file names each consumed batch-10 interface, required hypotheses, affected claims, and inspection evidence.

Published local prerequisites were checked at their source bodies, not inferred from page membership: `def-self-adjoint-and-normal-endomorphism`, `prop-self-adjoint-and-normal-matrix-criteria-in-orthonormal-bases`, `def-rayleigh-quotient`, `thm-courant-fischer-min-max-principle`, the real and complex spectral theorems, `thm-finite-dimensional-orthogonal-decomposition`, `thm-gram-schmidt-orthonormalisation`, `thm-singular-value-decomposition`, `def-operator-norm-on-a-finite-dimensional-inner-product-space`, `thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces`, `cor-triangle-inequality-for-inner-product-norm`, and `lem-reverse-triangle-inequality-in-a-normed-space`. The local ground-vector result has separate real and complex proof branches. All tie choices use a fixed finite basis scan; no choice axiom is used.

## Source reading and retrieval record

Four independent full-text treatments are harvested on the A page. Schollwöck's complete 122-page review and Misguich's complete 64-page lecture notes support the DMRG/canonical-form material; Oseledets's complete 23-page paper and Dupuy's complete 72-page lecture notes support TT rounding and tail estimates. Their exact section ranges and every harvested result's disposition are in `batch-21.coverage.json`.

- Schollwöck, `https://arxiv.org/pdf/1008.3477`: §§4.4.1–4.4.2 canonical MPS forms; §§6.2–6.4 effective Hamiltonian, local update, and two-site truncation. Full local PDF inspected; the downloaded file was 2,072,146 bytes, SHA-256 prefix `54b0bfe2aa0caecc`, 122 pages.
- Misguich, `https://arxiv.org/pdf/2606.24803`: §2.1 periodic MPS; §§2.4.1–2.4.3 canonical forms; §2.7 DMRG and effective Hamiltonian (PDF pp. 24–26). Full local PDF inspected; 2,608,031 bytes, SHA-256 prefix `cb6d86ba09ab1bcc`, 64 pages.
- Oseledets, `https://users.math.msu.edu/users/iwenmark/Teaching/CMSE890/TENSOR_oseledets2011.pdf`: §2, Theorem 2.2 and full error proof (pp. 2298–2300); §3 rounding/orthogonalization (pp. 2301–2304). The prior batch-10 full-text stamp was reused (2026-10-17T11:30:34.233Z; 257,440 bytes; SHA-256 prefix `7bd3e595053e951b`; 23 pages). Later exploratory direct curls to the MSU PDF returned 212-byte non-PDF bodies (two local response files); the SIAM epdf and RG mirror alternatives returned HTTP 403. The complete PDF was inspected in the web PDF viewer and the already-stamped batch-10 full-text copy was reused. These failed probes are not represented as successful fetches. No source is dropped or unresolved, so no `source_resolution` alternative-proof record is appropriate.
- Dupuy, `https://msdupuy.github.io/teaching/TT_lectures_2026.pdf`: §1.2.2 canonical gauges; Theorem 1.2.14 and proof (pp. 20–22). The prior batch-10 full-text stamp was reused (2026-10-17T11:30:34.561Z; 1,067,147 bytes; SHA-256 prefix `9aeda0f5a503865e`; 72 pages).

`node tools/source-fetch-check.mjs --coverage research/numerical-analysis-remaining-71-2026-10-17-batch-21.coverage.json --stamp` reported 4/4 fetch-verified, 0 newly stamped: all four full-text receipts were already present in the coverage when the scoped stamp check ran. The local download hashes and page counts above are recorded as retrieval evidence; the successful check did not claim to create new receipts. No `source_resolution` drop was made.

## Mathematical scope and reconciliation notes

The pair contains 10 A items and 3 fully computed B examples. The local results explicitly state finite field, dimensions, Hermitian hypotheses, center shape and lexicographic vectorization, one-/two-site window conventions, exact arithmetic, rank/tail conventions, and conditions for normalizing post-truncation output. The mixed-gauge environment proof expands the finite Frobenius pairing and derives `E*E=I`; diagrams are explanatory notation only. The local QR proof handles rectangular and rank-deficient matricizations exactly and uses no numerical threshold. The truncation-energy theorem uses `τ<1` exactly where it proves the rounded tensor is nonzero; it makes no normalized-output claim for `τ≥1`. The stationarity theorem assumes convergence at each update stage in one consistent fixed-rank gauge and asserts no convergence or global-optimality result.

No supplier body was absent from this batch's interface check, and no cross-batch change is requested. The only design interfaces requiring reconciliation are the missing exact physics assembly ID (if physical assembly is intended) and the narrative-versus-plan-spec spectral-page requirement described above; neither is silently treated as a proven external fact.

## Scoped checks and decisions

Final scoped check commands and results are appended after the last edit. Proof contracts cover all eight proof-bearing A items and all three B examples; definitions and the algorithm are marked `verification.precheck: n/a`. A Step-1 `ready` record is written only after the item body, direct dependencies, page placement, contract, and required precheck are current. The run-wide status remains owner-blocked independently of this pair; no `.autopilot/` runtime state, shared plan, published item, or verdict was edited.

The batch manifest stores the three B examples as B-page `items` (matching batch 10's manifest convention); the library B page stores the same IDs in its reader-facing `examples` list. All thirteen current item contracts, including the B carriers, therefore participate in manifest dependency and Step-1 scope checks.

### Final scoped checks — 2026-10-17

- `node tools/tsx-run.mjs tools/precheck.mts <11 proof-bearing items>`: **pass**, 11 checked, 0 failing. Each of those items now records `verification.precheck: pass`; the finite-state definition and algorithm record `n/a`.
- `node tools/proof-layout.mjs <13 changed item paths>`: **pass**, 13 items, 31 numbered steps, 0 defects.
- `node tools/rendercheck.mjs <13 items and 2 library pages>`: **pass**, 15 files; all math parsed under KaTeX and all frontmatter parsed.
- `node tools/depcheck.mjs --items-file /tmp/pml-batch21-item-ids.json --json --quiet`: **pass**, all 13 assigned items and both pages in scope, 0 errors and 0 warnings.
- `node tools/content-policy.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-21.pages.json`: **pass**, 13 scoped items, 0 errors and 0 warnings.
- `node tools/proof-contract.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-21.proof-contracts.json --strict`: **pass**, all 11 proof-bearing carriers checked, 0 errors and 0 warnings.
- `node tools/coverage-checklist.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-21.coverage.json`: **pass**, one A page, 17 harvested results, 0 errors and 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/numerical-analysis-remaining-71-2026-10-17-batch-21.coverage.json --stamp`: **pass**, 4/4 source receipts accepted, no newly stamped sources and no drops.
- Scoped `dependencyLevels` over the batch-10 and batch-21 manifests: **pass**, 32 items, no cycles or label errors, maximum level 6. The thirteen batch-21 item dependency sets exactly match item frontmatter.

The unscoped run-level item checker and batch-dependency checker are blocked by malformed out-of-scope run input: `research/numerical-analysis-remaining-71-2026-10-17-batch-49.pages.json` fails JSON parsing with `Invalid \\escape` at line 143, column 198. The run-level item checker also reports unrelated unfilled pages and earlier item-level label mismatches. No other batch file or shared dependency-level input was edited. The scoped batch-10/batch-21 calculation above independently confirms this pair's labels.

All 13 batch-21 items have `ready`, `owner: false` Step-1 records, with their exact direct `deps` stored in each record. The full-repository `step1-decisions` command cannot load the run while batch 49 is malformed. To preserve the assigned records without touching batch 49, the same `tools/step1-decisions.mjs record` command was run from a temporary scoped snapshot containing the unchanged plan-spec, batch-10 and batch-21 manifests/coverage, and the shared item bodies. Its scoped `check` returned **32/32 ready; closed=true**. The thirteen new records were copied to the run's research directory only after verifying their IDs, decisions, owner flags, and dependency lists; no existing record was overwritten. The ordinary repository-wide `step1-decisions check --run` still fails before record validation on the same batch-49 JSON parse error.

The live `.autopilot/numerical-analysis-remaining-71-2026-10-17` status recomputed at 2026-10-17T12:43:05.932Z remains `running`, stage `1-scaffold`, 30/71 covered, nothing in flight. Its blocker remains the owner repair/recertification requirement recorded in the shared Step-1 blocker file. Runtime state and verdicts were left untouched. No test suite was run.

After the final complex self-adjointness citation, QR rank wording, and algorithm local-energy definition were changed, the scoped readiness check identified nine downstream records as stale through their dependency hashes. Those nine (the affected suppliers, proposition/algorithm consumers, sweep/stationarity theorems, and three examples) were refreshed with `step1-decisions.mjs record` in the same scoped snapshot. The refreshed scoped check again returned **32/32 ready; closed=true**; all thirteen batch-21 records remain `ready`, owner=false. No escalation was overwritten.
