# Batch 31 authoring notes

Run: `non-ml-math-remaining-81-2026-10-18`  
Pair: `topological-quantum-algorithms-and-braid-compilation`  
Pages: A order 2554; B order 2555.  
Scaffold output: `research/non-ml-math-remaining-81-2026-10-18-batch-31.pages.json`.

## Plan and design

The assigned task reported no separate pair-design artifact. I found and read the active QA-37 planning section in `research/quantum-algorithms-planning/sections/qa37-topological-algorithms.md`, the QA-37 row in `research/plan-spec.json`, and the track expansion. I treated the active plan as the controlling scope; the plan-spec summary and detailed scope agree on the finite task model, fusion measurement, SK compilation, finite-rank adiabatic leakage, joint B6 block search, spectator-safe extension, summed error, and physical-realization boundary. There was no unresolved placement or page-capacity issue.

The detailed section's scalar for the SU(2) lift conflicts with the current batch-28 matrix carrier. Its displayed two-dimensional matrices have `det(B_j)=r=e^{-3πi/5}`. The proposed `e^{iπ/10}B_j` has determinant `e^{-2πi/5}`, so it is not in SU(2). The determinant-one lift used here is `zB_j` with `z=e^{3πi/10}`, since `z²r=1`. The plan-spec summary does not prescribe the scalar and has no corresponding conflict. The phase ledger records both `R₁^{e(b)}` for normalized Fibonacci braid words and `(R₁z⁻¹)^{e(b)}` for the SU(2)-lift alphabet.

## Inventory and dependency levels

The assigned pair has 24 A items and 4 B items. Direct dependencies and levels are in the scaffold and item frontmatter; the grouped inventory is:

| Level | Items |
|---:|---|
| 0 | `def-qa-37-certified-matrix-input`, `lem-qa-37-product-error`, `thm-qa-37-output-distribution-error` |
| 4 | `def-qa-37-anyon-task-and-promise` |
| 5 | `def-qa-37-fusion-input-encoding`, `def-qa-37-resource-cost-model` |
| 7 | `def-qa-37-fusion-measurement`, `def-qa-37-n-triple-fusion-code` |
| 8 | `def-qa-37-phase-reference-cost`, `lem-qa-37-local-braid-acts-trivially-on-spectators`, `thm-qa-37-fusion-branch-validity` |
| 9 | `alg-qa-37-exhaustive-b6-block-pair-compiler`, `def-qa-37-finite-adiabatic-braid-input`, `lem-qa-37-fixed-sector-global-phase` |
| 10 | `thm-qa-37-exhaustive-b6-compiler-terminates`, `thm-qa-37-jrs-leakage-bound` |
| 11 | `lem-qa-37-fibonacci-su2-lifts-are-dense`, `lem-qa-37-total-error-budget`, `thm-qa-37-approx-encoded-two-qubit-gate` |
| 12 | `def-qa-37-fibonacci-braid-gate-set`, `def-qa-37-physical-locality-boundary` |
| 13 | `alg-qa-37-su2-solovay-kitaev-compiler` |
| 14 | `thm-qa-37-su2-compiler-error-length` |
| 15 | `thm-qa-37-arbitrary-n-encoded-circuit` |
| 9, 10, 12, 16 (B page) | `ex-qa-37-fusion-measurement-branches`, `cex-qa-37-projective-is-not-controlled`, `ex-qa-37-approximate-b6-target`, `ex-qa-37-fibonacci-budget` |

The local arbitrary-n code definition and local spectator-factor lemma were added because the consumers need those explicit interfaces. The arbitrary-n proof uses exact QSD, SU(2) SK, joint B6 density and the inspected spectator extension; it does not use the earlier arbitrary-n theorem as a premise. Batch 28 supplies the fusion-tree basis/dimension, Fibonacci data, and unitary F-move results. Batch 29 supplies the physical braid interface, fixed-charge code, braid action, determinant character, B6 path/density, block-error and spectator-extension results. Batch 30's toric-code page is a declared page prerequisite only; no toric-code item is a direct logical dependency of this pair.

All direct draft supplier bodies used here were present and inspected at their stated hypotheses and conventions. The current Fibonacci data body and current B6 path/joint-density bodies are consistent; the earlier handoff concern that the Fibonacci data carrier was absent no longer describes the current workspace. These checks record interface consistency only: batch-28/29 supplier items remain drafts, and this batch does not record their acceptance.

The density arguments assume exactly `ACω` through the projective SU(2) lift, single-qubit density, and joint SU(5)×SU(8) B6 density suppliers. The local choice-free proofs remain choice-free; no step upgrades countable choice to full AC.

## Source reading and dispositions

The full-text locators, item-level harvested headings, dispositions, local reading evidence, and fetch stamps are in `research/non-ml-math-remaining-81-2026-10-18-batch-31.coverage.json`. The A page has two independent primary treatments: [Preskill's lecture notes](https://www.preskill.caltech.edu/ph219/topological.pdf), §§9.5 and 9.14–9.17, and [Nayak et al.](https://arxiv.org/pdf/0707.1889), §§II.A–B and IV.B–D. Their chirality/gauge conventions were compared against the current supplier carriers; incompatible conventions were not imported.

Additional full texts read for the exact claims were Dawson–Nielsen, §§2–4, for SK (including its exact-real/bit-cost caveat); [Shende–Bullock–Markov](https://arxiv.org/pdf/quant-ph/0406176), Theorem 13, for exact QSD; [Jansen–Ruskai–Seiler](https://arxiv.org/pdf/quant-ph/0603175), Theorem 3 and Lemmas 1–8, for the finite-rank projector estimate; de Wolf, Chapter 2 §2.2, for circuit approximation/cost context; and Childs, Chapter 30 §§30.1–30.2, as rank-one adiabatic context only. [Freedman–Larsen–Wang](https://arxiv.org/pdf/quant-ph/0001108), Theorem 4.1 and its proof, was read as a cross-check only: it uses a different Jones/modular-functor construction and does not supply the local Fibonacci B6 certificate. All cited sources have fetch stamps; there were no retrieval failures, retries, drops, or `source_resolution` entries.

The SK theorem keeps the published assumptions explicit. The finite bit-cost branch requires polynomial-time target Cauchy names and exact minimal-polynomial/rational-isolating-interval descriptions for the real and imaginary gate coordinates. The fixed finite SU(2) base-net certificate is supplied runtime data; no table, word list, or maximum length was invented here. The B6 compiler uses a dovetailed search with rational Frobenius/coordinate certificates. Its termination proof uses a strict density margin in both blocks; it gives no useful joint word-length or runtime bound.

## Scope limits and error accounting

The finite JRS theorem bounds projector leakage amplitude by `A_m(1)` and probability by `A_m(1)^2`. In-band transport error `ε_tr` identifying the path evolution with the selected F/R action is a separate premise; the JRS bound does not prove that identification. The total measured-output budget is `ε_c + ε_tr + A_m(1) + ε_m`. Physical preparation, material locality, Hamiltonian realization, band holonomy, measurement implementation and phase correction remain separate inputs. The Ising Clifford-only limitation remains in the existing `thm-qc-tqc-ising-braids-clifford-only` supplier; no Ising universality claim is made here.

## Check record

Final scoped checks are recorded below after their last run. A successful authoring/format check or readiness record is not independent mathematical approval.

## Final scoped verification and readiness

- `node tools/tsx-run.mjs tools/precheck.mts --json <batch-31 item files>`: 28 files, 18 proof-bearing items checked, 0 failures; definition/algorithm items without proof phases are not applicable.
- `node tools/proof-contract.mjs research/non-ml-math-remaining-81-2026-10-18-batch-31.proof-contracts.json --strict --json`: all 28 contracts checked, 0 errors, 0 warnings.
- `node tools/proof-layout.mjs <batch-31 item files>`: 28 items, 41 steps, 0 defects.
- `node tools/rendercheck.mjs --json <batch-31 item files>`: 28 checked, 0 errors, 0 warnings.
- Focused `node tools/depcheck.mjs --items-file /tmp/b31ids.json --json --quiet`: 28 items, 0 errors, 0 warnings.
- `node tools/content-policy.mjs research/non-ml-math-remaining-81-2026-10-18-batch-31.pages.json --json`: 28 items, 0 errors, 0 warnings.
- `node tools/coverage-checklist.mjs research/non-ml-math-remaining-81-2026-10-18-batch-31.coverage.json --json`: 2 pages, 38 harvested headings/results, 0 errors, 0 warnings. The new Fibonacci projective-density lemma is covered by the Preskill and Nayak treatments; the local proof uses the exact batch-29 density supplier and gives its lift argument.
- `node tools/source-fetch-check.mjs --coverage research/non-ml-math-remaining-81-2026-10-18-batch-31.coverage.json`: 11/11 source records fetch-verified, 0 drops, 0 retrieval failures or retries.
- `node tools/step1-decisions.mjs record` was used for all 28 assigned items with `decision: ready`, `owner: false`, and each item's exact direct dependency IDs. After the final density-prerequisite edit, the affected six records were refreshed and placement evidence was checked. The subsequent full-run `step1-decisions check` reports no unresolved batch-31 item; the run remains open for work in other batches.
- `node tools/item-dependency-levels.mjs check --run non-ml-math-remaining-81-2026-10-18` exits 1 on the current full-run snapshot with 122 errors elsewhere (empty scaffold inventories and stored dependency levels that differ from computed levels), and **0 batch-31 dependency-level errors**. No other batch was edited.

The author readiness records document completed authoring only; they do not grant independent proof approval, publication, or acceptance of any draft supplier.

`research/non-ml-math-remaining-81-2026-10-18-batch-31.cross-batch-dependencies.json` records 43 verified item-interface edges and 4 page-prerequisite edges, with exact supplier excerpts, required hypotheses, and consumer use locations. There are no unresolved supplier IDs. The batch-30 toric-code page edge is page-level only; no batch-30 item claim is used in a batch-31 proof.
