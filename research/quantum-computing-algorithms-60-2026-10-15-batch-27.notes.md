# Batch 27 — Exact Oracle Algorithms

Run: `quantum-computing-algorithms-60-2026-10-15`  
Role: beta  
Pair: `exact-oracle-algorithms` / `exact-oracle-algorithms-examples`

## Scope and controlling plan

The assigned inventory is 14 A-page items and one B-page example. The A page is order 2218, the B page order 2219; both pages are within the 100-item cap. The A page requires `reversible-arithmetic-and-oracle-conversion`, `qubits-bloch-sphere-pauli-algebra-and-one-qubit-gates`, `registers-tensor-products-and-partial-trace`, `finite-dimensional-complex-inner-product-spaces-and-matrix-interfaces`, `computational-problems-promises-and-cost-models`, and `finite-probability-spaces-and-random-variables`.

No separate standalone pair-design artifact was found. The current `QA-03 Exact Oracle Algorithms` section in `research/quantum-algorithms-planning/sections/qa_r1.md` is the governing design section under the owner authoring direction. The generated assignment's “design none found” note is therefore limited to the absence of a separate design file. QA-03's scope and conventions were followed. Its plan metadata agrees with the pair and six page prerequisites; the plan's item inventory was empty at the preauthoring boundary, while the audited proposed-item contracts and this manifest contain the 14+1 inventory. No substantive plan/design conflict remains.

## Scheduling and dependencies

The dispatch named scheduling input hash `0a95c4a44134577565e84ceb1dd2a084be199ec061454f0e140e89b6149cf2d5` and prerequisite batches 1, 2, 7, 25, and 26. The current shared `research/quantum-computing-algorithms-60-2026-10-15-batch-dependency-levels.json` has input hash `3097ae8fe82fb1d0d4b327dafae1991b306dfce9741a5aa065f4536103343bc9`; its batch-27 row currently requires batches 1, 2, 7, 8, 10, 25, and 26. Their recorded levels are 0, 1, 3, 4, 6, 11, and 12, so batch 27 remains level 13. The live shared schedule supersedes the stale dispatch values; it was not edited here.

The actual QA-02 supplier `thm-qa-bit-query-to-phase-query` is present in batch 26 at dependency level 18. Its statement and proof were inspected, including the zero-target X-then-H preparation, one standard query, phase kickback, target return, and separate two-gate accounting. Using this actual supplier raises the three algorithm definitions to level 19 and their correctness theorems to level 20; the B example is level 21. The assigned Hadamard lemma is level 6, promise definitions level 16, and classical query results level 17. Recalculation against the full current run graph matched all 15 labels with no in-scope cycles. Carrier frontmatter dependencies and levels, manifest inventory, and page frontmatter inventories/order match exactly.

The cross-batch sidecar has 99 observations: 6 `page-present`, 8 `published`, and 85 `verified`, with no missing direct suppliers. It records the six direct QA-02 theorem edges as verified from the actual supplier body and does not claim independent acceptance. Six observations for `def-qa-finite-branch-output-law` now include the proof issue below.

## Mathematical scope and supplier issue

The A page defines the Deutsch, Deutsch–Jozsa, and no-offset Bernstein–Vazirani promises and their one-query circuits. It proves exact outputs by the finite F_2^n Hadamard character sum, with explicit gate/query counts and terminal measurement conventions. It also proves the exact deterministic Deutsch–Jozsa lower bound and keeps that separate from bounded-error randomized complexity. The DJ randomized upper bound uses three distinct samples without replacement and proves success at least 3/4 for n >= 2, with the n = 1 case handled by two exact queries. It does not identify de Wolf’s different two-random-query, 1/2-success procedure with this three-sample result. The BV classical lower bound gives a finite decision-tree leaf-count argument, including a finite deterministic-strategy distribution for randomized algorithms. The B page checks the four Deutsch truth tables, an n = 2 balanced DJ instance, the full BV amplitude table for secret 10, and the associated classical costs. No choice principle or physical postulate is used.

One cross-pair supplier proof issue remains for owner reconciliation. In `items/def-qa-finite-branch-output-law.md`, verification step 1.3 at line 98 invokes [F3] `thm-qc-instrument-outcome-law-normalizes` and [F4] `thm-qc-instrument-conditional-state-is-density`; step 5.1 at line 106 nevertheless says, “This proves normalization without using either QC measurement-normalization theorem.” The normalized terminal-law result is derived using those cited inputs, but the independence claim contradicts the proof. This pair does not own that supplier and did not edit it. The affected assigned items are the three algorithm definitions, three quantum correctness theorems, and B example. Their drafts and contracts are complete, but their Step 1 decisions are `escalated` pending supplier reconciliation. The other eight items have complete prerequisites and are recorded `ready`.

## Sources and harvest

Two independent full-text treatments were inspected for the complete cited passages. Coverage records the exact URLs, locators, supported item IDs, and every harvested result's disposition and reason.

| Source | Locator and supported material | A-page disposition totals |
|---|---|---|
| Ronald de Wolf, *Quantum Computing: Lecture Notes*, arXiv:1907.09415v6 (2026-08-27), [PDF](https://arxiv.org/pdf/1907.09415) | Chapter 2 §2.4, including §§2.4.1–2.4.2, PDF pp. 29–32 (printed pp. 17–20); XOR/phase queries, DJ/BV promises and amplitudes, classical query comparisons. Supports all 14 A items. | 11 `included`, 3 `inline` |
| John Preskill, *Quantum Information*, Chapter 6: Quantum Algorithms (updated Nov. 2020), [PDF](https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf) | §6.1, PDF pp. 8–11 (printed pp. 2–5); Deutsch, DJ, BV promises, amplitudes and classical query discussion. Supports all 14 A items. | 11 `included`, 3 `inline` |

The inline dispositions cover the locally proved one-query Deutsch randomized bound, the distinct three-sample DJ guarantee (the sources describe different randomized procedures), and the explicit BV decision-tree bound. The B-page example is marked `inline` for each source because its finite calculations are verified directly from the companion-page contracts. The complete 30-result disposition ledger is in `research/quantum-computing-algorithms-60-2026-10-15-batch-27.coverage.json`.

Both PDFs were fetched successfully on the recorded initial attempts; no retrieval failure, recovery retry, drop, or source-resolution escalation occurred. The QA_R1 ledger records sequential full-document reading of both publications. This batch inspected the cited full-text passages and does not claim a sequential reread of every page. `source-fetch-check --stamp` verified all four A/B source records; the final non-stamping check also resolved 4/4.

## Checks and readiness

- `proof-contract.mjs --strict`: pass, 15/15 contracts, no errors or warnings.
- `precheck.mts`: pass, 12 proof-bearing items checked, 0 failures. Carrier precheck metadata records `pass`; algorithm definitions record `n/a`.
- `proof-layout.mjs` on the 15 assigned items: pass, 30 steps, 0 defects.
- `rendercheck.mjs` on 15 items and both pages: pass, 17 checked, no errors or warnings.
- Scoped `depcheck.mjs`: pass, 15 assigned items, dependency closure 1,094 items and 380 pages, no errors or warnings.
- `content-policy.mjs`: pass, 15 items, no errors or warnings.
- `coverage-checklist.mjs --require-destination`: pass, 2 pages and 30 harvested results, no errors or warnings.
- Source-fetch check: pass, 4/4 fetch-verified and resolved.
- Scoped dependency-level recomputation: all 15 assigned item labels match; batch level 13 recomputes from maximum prerequisite level 12.

Two whole-run checks remain blocked outside this batch. `batch-dependency-levels.mjs check` currently stops on malformed YAML in `items/def-qa-rational-phase-reconstruction.md`: frontmatter line 14 has `justified_by: []` immediately followed at line 15 by an indented list entry `- lem-qa-rational-reconstruction-candidate-uniqueness`, which the parser reports as an implicit map-key error. That file was not edited. The whole-run item-level check reports 28 empty scaffold inventories in later pairs and eight out-of-scope label mismatches (`alg-qa-shor-factoring`, six dependent Shor results/examples, and `cex-qa-18-query-cost-is-not-gate-cost`). The assigned 15 items pass the isolated full-run-graph recomputation despite those unrelated findings.

Step 1 records were made with `node tools/step1-decisions.mjs record`, without `--owner`: eight items are `ready`; the three algorithm definitions, three correctness theorems, and B example are `escalated` for the exact QA01 supplier inconsistency above. These records describe author readiness only and do not constitute independent approval.
