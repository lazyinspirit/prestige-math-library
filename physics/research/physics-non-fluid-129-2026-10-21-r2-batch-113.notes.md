# Batch 113 authoring notes — tgr-mhs05

## Plan and design reconciliation

- The run-specific owner-authoring-direction file was absent when checked, so there was no later owner override of the task or designs.
- The current research/plan-spec.json row controls the page identity and order: tgr-mhs05 at 923 and tgr-mhs05-examples at 924, both in thermodynamics-and-general-relativity-mathematics, library mathematics, with no A-page requirement. The batch manifest matches it.
- The 2026-10-19 frontier-expansion design and its complete module at research/frontier-expansion-2026-10-19/thermodynamics-and-general-relativity/prose-scaffold.md#tgr-mhs05 control the assigned inventory: three A-page mathematical items and one B-page example. The current plan's item arrays were blank for initial authoring, as expected.
- The older retained track at research/plan-thermodynamics-and-general-relativity-track.md L950 proposed order 659 and said the finite-matrix entropy work would consume thm-qsm-finite-entropy-composition with its then-unpublished status. The current plan's order 923 supersedes 659. The newer detailed module gives the complete C6 finite-matrix proof route, its current item inventory has no external QSM dependency, and the plan has no page-level prerequisite. I followed that current inventory and proved the assigned finite claims directly.
- I inspected the current thm-qsm-finite-entropy-composition carrier and its complete Statement/Proof. Its actual statement concerns finite mixing concavity, product additivity, and bipartite subadditivity; those results are not used by any assigned claim. Its dependency chain includes the Axiom of Choice. The current carrier says published, unlike the older design's unpublished qualifier, but I do not rely on it or infer proof acceptance from that label. A current loadStep1Record lookup found that it is outside this run's manifest, and step1Decision returned “Readiness record missing”; that is not a current assigned-prerequisite gap because this pair does not depend on it. I did not create a cross-batch edge or escalate it. The local proof remains choice-free.
- No local helper item was needed. The finite density, ordered tensor basis, coordinate matrix, trace, and natural-log entropy interfaces use exact mathematical suppliers. Every dependency role is mathematical-premise; no physical assumptions, measurements, or empirical claims occur.

## Inventory, dependencies, and levels

The A-page order is def-tgr-finite-cutoff-outside-entropy, lem-tgr-finite-cutoff-mode-entropy-growth, and lem-tgr-renormalization-finite-part-ambiguity. The B page contains ex-tgr-generalized-entropy-not-monotone-from-definition. The item interfaces and proof contracts match the current prose design.

Scoped item levels were recomputed from the final batch manifest: definition 0, mode-growth lemma 1, finite-part lemma 0, and B example 1. The levels follow the in-batch edges from the definition to the two consumers. A read-only recomputation of the full current run graph returns 129 batches and batch 113 at level 0 with requires empty. The stored run scheduling snapshot is stale after the final manifest update, so batch-dependency-levels.mjs check reports stale; this authoring task did not write the shared scheduling file. The owner join must refresh it before run-wide gates.

research/physics-non-fluid-129-2026-10-21-r2-batch-113.cross-batch-dependencies.json is the required JSON array []. The A page has no cross-batch supplier; the B page requires the A page within this same batch. The published mathematical inputs are external math context, not edges to another batch in this run. Both pages are below the 100-item cap.

## Sources and harvest

research/physics-non-fluid-129-2026-10-21-r2-batch-113.coverage.json records the URLs, exact locators, supported items, limitations, searches, and a disposition for every harvested result. Two independent full-text treatments support the quantum-information definitions: Watrous's book and Preskill's complete Caltech lecture notes. MIT's full real-analysis lecture notes supply context for the sequence-limit notation; the finite-part shift itself is proved by an epsilon argument in the item.

- Watrous, The Theory of Quantum Information, Chapter 2 §2.1.3 and Example 2.8: read the reduced-state definition, equations (2.30)–(2.37), and the coordinate formula. The assigned definition supplies the complete positivity, trace, and basis-independence proof for arbitrary mixed finite inputs.
- Watrous, Chapter 5 §§5.1.1 and 5.2.1: read Definition 5.1's base-2 convention and Definitions 5.17–5.18. The source's relative-entropy result is recorded as out of scope. The assigned item uses natural logarithms and the k_B scale from the plan and exact root entropy definition; no silent base conversion is used.
- Preskill, Quantum Shannon Theory, Chapter 2 §2.3: read equations (2.63)–(2.67). The adjacent positivity/trace calculation is for the displayed pure-state case, so it is not used to justify the general mixed-state item.
- Preskill, Chapter 10 §10.2 and §10.2.1 items 1–3: read equations (10.59)–(10.61), the spectral entropy description, and the pure-state, unitary-invariance, and uniform-spectrum maximum properties. The latter three results are recorded out of scope because the assigned proofs calculate their spectra directly. Its information convention is recorded in coverage; the local mathematical supplier fixes natural logarithms for these items.
- MIT OpenCourseWare 18.100B, Real Analysis, Lecture 3 p. 13: read the epsilon definition of sequence convergence. The finite subtraction identity is then proved directly in the assigned lemma.

An optional Arovas PDF candidate was not adopted. The UCSD file exceeded the browser's full-text limit at 29,816,419 bytes; after searching alternatives, one university mirror also exceeded the limit at 12,633,419 bytes. The assigned source set already has two independent full-text treatments, and all mathematical claims are proved locally, so no selected source remains unresolved and no Arovas reading or fetch stamp is claimed.

The source fetch stamp verified all five selected URLs: Watrous Chapters 2 and 5, Preskill Chapters 2 and 10, and the MIT full notes. Five stamps were newly recorded. Coverage reports one A page, twelve harvested results, and zero errors or warnings.

## Scoped checks and readiness

- Precheck: 4 items, 0 failing.
- Rendercheck: 6 item/page files, 0 errors or warnings.
- Proof layout: 4 changed items, 14 steps, 0 defects.
- Strict proof-contract check: 4/4 items, 0 errors or warnings; each numbered step maps to a contract derivation with exact supplier excerpts and boundary dispositions.
- Scoped depcheck: 4 assigned items, 881-item dependency closure, 180 prerequisite pages, 0 errors or warnings.
- Content policy: 4 assigned items, 0 errors or warnings.
- Scoped dependency levels: 0, 1, 0, 1, no cycles or errors.
- Current batch graph: 129 batches, maximum level 5; batch 113 recomputes to level 0 with no requirements. Stored scheduling snapshot awaits the owner join refresh described above.
- Source-fetch check: 5/5 selected sources fetch-verified, 0 documented drops.

The full batch-scheduling check after the final manifest update reports a stale stored snapshot. A read-only recomputation still returns batch 113 at level 0 with requires empty. This authoring task did not write the shared scheduling file; the owner join must refresh it before run-wide gates.

The four hash-bound Step 1 readiness records are current and each records decision ready with its examined direct dependencies. These records attest authoring readiness only; they do not replace independent proof review. No item prerequisite or selected-source blocker remains for this batch; the shared run scheduling snapshot is the owner handoff noted above.
