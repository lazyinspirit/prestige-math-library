# Batch 29 authoring notes — Finite Abelian Fourier Analysis

Run: `quantum-computing-algorithms-60-2026-10-15`; role: beta; batch: 29.

## Inventory, placement, and dependency levels

The assigned pair contains 19 A-page items and one B-page example, well below the 100-item page limit. The A page is `finite-abelian-fourier-analysis` (order 2222); the companion is `finite-abelian-fourier-analysis-examples`.

Item levels were recomputed from the current manifest and current carrier dependencies. There are 50 in-pair supplier edges and no cycle; all 20 manifest dependency levels match their carrier frontmatter and the recomputed local DAG levels. The groups are:

- Level 0: `def-qa-finite-abelian-character-dual`, `def-qa-finite-abelian-convolution`, `lem-qa-finite-character-values-have-unit-modulus`.
- Level 1: `lem-qa-cyclic-group-has-n-characters`, `lem-qa-character-dual-of-a-product-factors`, `def-qa-finite-abelian-subgroup-annihilator`.
- Level 2: `thm-qa-finite-abelian-dual-has-same-cardinality`.
- Level 3: `thm-qa-finite-abelian-character-dual-is-finite-abelian-group`, `thm-qa-finite-abelian-dual-character-orthogonality`, `def-qa-normalized-finite-abelian-fourier-transform`, `thm-qa-finite-abelian-subgroup-annihilator-cardinality`.
- Level 4: `lem-qa-finite-abelian-annihilators-are-subgroups`, `thm-qa-finite-abelian-fourier-transform-is-unitary`, `thm-qa-finite-abelian-fourier-convolution`, `thm-qa-finite-abelian-evaluation-map-isomorphism`, `thm-qa-finite-abelian-coset-fourier-transform`, `ex-qa-finite-abelian-fourier-tables-and-convolution`.
- Level 5: `thm-qa-finite-abelian-fourier-inversion`, `thm-qa-finite-abelian-parseval`, `thm-qa-finite-abelian-double-annihilator`.

The batch-level scheduling artifact declares batch 29 at dependency level 0 with no prerequisite batches. All 11 page prerequisites were present and published: `cosets-and-lagranges-theorem`, `cyclic-groups-and-direct-products`, `finite-abelian-characters-for-combinatorics`, `group-homomorphisms-and-the-isomorphism-theorems`, `monoids-groups-and-subgroups`, `normal-subgroups-and-quotient-groups`, `rings-subrings-and-integral-domains`, `roots-and-rational-powers`, `the-complex-exponential-and-eulers-formula`, `the-structure-of-finite-abelian-groups`, and `vector-spaces-and-subspaces`. All direct external item suppliers were inspected in their current bodies; the cross-batch sidecar records 86 item edges across 36 published item suppliers and 11 published page prerequisites. No supplier ID remains unresolved.

## Plan/design reconciliation

The generated task says “design: none found,” but the current planning source contains the complete `QA05 — Finite abelian Fourier analysis` section in `research/quantum-algorithms-planning/sections/qa_r1.md`; it governs this pair. `research/plan-spec.json` has the assigned page and same 11 prerequisites but `items: []`, so its empty item list does not supersede the QA05 scope. The design fixes the negative-character normalized transform, proves dual-index column orthogonality separately from row orthogonality, keeps unnormalized convolution and its `sqrt(|G|)` factor explicit, and distinguishes a coset-indicator coefficient from a normalized coset-state amplitude. These conventions and distinctions are retained.

The current audited proposal inventory gives the B example `C2`, `C3`, and `C2×C3`; the QA05 design specifically calls for `C4`, `C2×C2`, and their subgroups. The B example includes all five groups (`C2`, `C3`, `C4`, `C2×C2`, `C2×C3`) and explicit subgroup-annihilator checks, preserving both scopes. Two local A-page helpers are retained: `lem-qa-finite-character-values-have-unit-modulus` gives a direct finite-order proof rather than depending on the already-published representation bridge’s modulus clause; `lem-qa-finite-abelian-annihilators-are-subgroups` supplies the subgroup closure needed for annihilator and double-annihilator claims. Neither helper suppresses a prerequisite.

No choice principle is used: the proofs use finite cyclic decompositions, finite sets, and finite sums. The B-page tables provide the applicable finite verification; there is no named Fourier finite-smoke registry entry, and none is claimed.

## Sources and dispositions

Three independent author-hosted treatments were read in full and checked at the relevant sections:

- Ronald de Wolf, *Quantum Computing: Lecture Notes*, version 6: complete 239-page PDF; Chapter 4, PDF pp. 41–48, and Chapter 6 §§6.1–6.2.1, PDF pp. 57–60; [arXiv PDF](https://arxiv.org/pdf/1907.09415).
- Andrew M. Childs, *Lecture Notes on Quantum Algorithms*, 17 April 2025: complete 191-page PDF; Chapter 4 §§4.1–4.4, PDF pp. 25–28, and Chapter 6, PDF pp. 33–37; [author-hosted PDF](https://cs.umd.edu/~amchilds/qa/qa.pdf).
- John Preskill, *Quantum Information*, Chapter 6: complete 64-page chapter; §§6.2.2, PDF pp. 17–18, and §6.5.3, PDF pp. 30–34; [author-hosted PDF](https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf).

The treatments are used as convention and context cross-checks; complete local proofs remain in the carriers, including the finite geometric sums and convolution reindexing. The two helper proofs are recorded as locally proved. The expanded B tables and every finite orthogonality, inversion, Parseval, convolution, and annihilator calculation are original local calculations. There were no retrieval failures or source drops, so no `source_resolution` failure record applies. `source-fetch-check --coverage research/quantum-computing-algorithms-60-2026-10-15-batch-29.coverage.json --stamp` reported 3/3 sources fetch-verified, 0 newly stamped, and 3/3 resolved.

Coverage source 0 had a metadata mismatch: the de Wolf URL and fetched PDF were paired with Preskill’s title, locator, and local text path. This record was corrected to de Wolf’s title, QA05 locator, and `research/quantum-algorithms-planning/sources/qa_r1/de-wolf-1907.09415.txt`; the existing fetch history and stamp were preserved. Childs and Preskill entries remain as their inspected sources.

## Scoped checks and remaining owner work

`proof-contract.mjs --strict` passed for all 16 proof-bearing items with 0 errors and 0 warnings. `proof-layout.mjs` passed for all 20 assigned carriers: 62 steps, 0 defects. A local manifest/carrier consistency and dependency-DAG check found 0 mismatches. The run-wide `item-dependency-levels.mjs check --run quantum-computing-algorithms-60-2026-10-15` reports 275 unrelated run errors; none names an item in this Fourier pair.

All 20 Step 1 records are `ready`, `owner: false`, and rechecked closed against the current snapshot. The standard record command initially could not traverse unrelated malformed YAML elsewhere in the workspace. To complete the assigned readiness records without editing those items, the canonical `node tools/step1-decisions.mjs record` command was run with a temporary `/tmp` YAML preloader that only normalized unquoted colon-bearing `title` strings and a terminal unterminated source `locator` string in memory. It did not alter repository content. The resulting 20 records were subsequently checked with `step1Decision`: 20/20 closed.

The run-level batch scheduling input in `research/quantum-computing-algorithms-60-2026-10-15-batch-dependency-levels.json` still has dispatch hash `5853a948dc662edf4f617f17513f4733c3faab723214e776cad31c223b0b0a60`; this batch manifest changed when exact item dependencies were added. The shared artifact was not edited. The standard run-level check is also blocked by an unquoted source title in unrelated `items/thm-qc-stabilizer-encoder-correctness.md:22`. With the same read-only title normalization, the checker confirms the scheduling artifact is stale; a read-only recomputation at this handoff gives hash `1d145c5756b0f59e256747128d3135b2799f4e766ab983b1d40bd9bb05ec151d` and batch 29 remains level 0 with no prerequisite batches. The owner should repair/reconcile run-wide metadata and recompute the shared scheduling input before the next gate.
