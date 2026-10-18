# Batch 60 authoring notes

Run: `numerical-analysis-remaining-71-2026-10-17`  
Pair: `least-squares-fem-and-practical-dpg` / `least-squares-fem-and-practical-dpg-examples`  
Batch dependency level: 3; prerequisite batch: 38  
Scheduling input SHA-256: `432e8113021662076ce5e7a06e5c2e36e0db1488bffb1073e0cd909c1c4d8f0c`.

## Controlling documents and plan reconciliation

Read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the owner-authoring direction, the batch assignment, `plan-spec.json`, the complete PE30 design section, the current run evidence, and dependency-level input before authoring. The owner-authoring direction controls stale task/design conflicts. The pair retains the complete assigned scope: exact first-order least-squares Poisson, RT0/P1 conformity and best residual approximation; ultraweak Poisson trace quotients; ideal energy projection; practical P1/R3 DPG Fortin, conditional quasi-optimality, residual estimator with data oscillation; boundary and finite-dimensional examples.

The PE30 plan-spec formulation uses residuals $(\sigma+\nabla u,\operatorname{div}\sigma-f)$, while the PE30 prose design writes $(\sigma-\nabla u,\operatorname{div}\sigma+f)$. Set $\sigma_{spec}=-\sigma_{design}$: both residual components become the negatives of the plan-spec components, so the squared objective is identical. Batch 60 follows the plan-spec sign convention throughout. The DPG form signs are derived from $\sigma=-\nabla u$ and $\operatorname{div}\sigma=f$.

The design names Strang’s lemmas for variational-crime comparison; the exact conforming least-squares proof has no such perturbation and the separate remark explicitly excludes quadrature, geometry and roundoff claims. The page-level prerequisite remains unchanged. The design’s two-dimensional candidate practical spaces are $P_1^2\times P_1$, continuous scalar P2 and normal P1 traces, with broken vector/scalar P3 tests. The local Fortin proof uses the exact p=1,d=2 specialization of the full practical-DPG Fortin construction.

## Inventory and dependency order

The final inventory is 19 A-page items and 4 B-page examples (the local normal-trace surjectivity lemma was added before the kernel consumer). The assigned maximum page size is not approached. Final item levels (supplier first; labels match the full current run graph) are:

| Level | Items |
|---:|---|
| 2 | `lem-na-ultraweak-poisson-rotation-trace-2d` |
| 4 | `def-na-least-squares-poisson-first-order`, `def-na-ultraweak-poisson-dpg-formulation` |
| 5 | `lem-na-least-squares-poisson-residual-norm-equivalence`, `alg-na-practical-dpg-finite-riesz-solves`, `lem-na-hdiv-normal-trace-surjectivity`, `cex-na-least-squares-boundary-omission-nonunique`, `ex-na-least-squares-poisson-residual-certificate` |
| 6 | `lem-na-ultraweak-poisson-skeleton-quotients`, `rem-na-practical-dpg-roundoff-and-normal-equations`, `cex-na-practical-dpg-too-small-test-space` |
| 7 | `lem-na-ultraweak-poisson-bilinear-form-bounded`, `lem-na-ultraweak-poisson-trial-kernel`, `lem-na-least-squares-poisson-space-conformity`, `lem-na-practical-dpg-fortin-p1-r3`, `alg-na-ultraweak-poisson-ideal-trial-to-test` |
| 8 | `thm-na-least-squares-poisson-best-approximation`, `thm-na-ultraweak-poisson-adjoint-graph-infsup`, `thm-na-ideal-ultraweak-poisson-energy-best-approximation`, `thm-na-practical-dpg-fortin-quasioptimality`, `ex-na-ideal-and-practical-dpg-test-vectors` |
| 9 | `thm-na-practical-dpg-residual-estimator-equivalence` |
| 10 | `cor-na-practical-dpg-poisson-quasioptimality-estimator` |

The current full dependency-level calculation matches every final scaffold label after the added local normal-trace lemma. The final scoped command and its actual result are recorded below after remaining checks. The two unresolved proof items remain in the graph at their declared levels so their dependent claims are not omitted.

## Supplier inspection and cross-batch inputs

`research/numerical-analysis-remaining-71-2026-10-17-batch-60.cross-batch-dependencies.json` enumerates the exact external item edges and both page-level requirements. Actual PE08 H(div), weak-normal trace, RT0 conformity, H1 trace, Poincaré, simplex trace, shape-scaling, reference-simplex Poincare–Wirtinger, real L2 completeness, Riesz, BNB, normal-equation, zero-boundary piecewise-polynomial, and published weak-Poisson supplier statements/proofs were inspected. Current PE08 H(div) and the relevant PE08 proof carriers have current Step 1 `ready`, `owner:false` records; these are interface evidence, not independent acceptance. Published suppliers have their published status. Their hypotheses, real-space conventions, and actual proof scope were checked against each use.

The actual Batch 38 `lem-na-weak-hcurl-tangential-trace` Statement is three-dimensional on tetrahedra. Batch 60 does not apply it to two-dimensional triangles. Instead, `lem-na-ultraweak-poisson-rotation-trace-2d` computes $\operatorname{curl}(R\sigma)=\operatorname{div}\sigma$ in distributions and transforms the actual PE08 weak normal Green functional with $t=Rn$. The declared PE09 page prerequisite is retained. Its `def-na-lowest-order-whitney-de-rham-spaces` currently has a Step 1 escalation because its H(div) supplier readiness record was absent when recorded; no Batch 60 proof uses that Whitney item.

The published variational-crime/Strang page and the relevant theorem bodies were inspected. The page is retained as a declared prerequisite, but no Strang estimate is used in this exact-analysis pair.

## Proof disposition and exact open gap

Completed local arguments include: planar H(div)-to-H(curl) rotation/trace identity; least-squares residual norm equivalence with constants; exact finite Riesz algorithm; Hilbert trace quotient construction and the local contractive normal-trace lift by an H1 Riesz solve; DPG bilinear boundedness and the trial-kernel proof; RT0/P1 conformity; full p=1,d=2 Fortin construction with scalar and restricted RT2 moment unisolvence, Piola scaling, divergence commutation and all four form moments; ideal energy projection; mixed BNB proof of conditional practical existence/uniqueness/quasi-optimality; and the abstract residual reliability/efficiency proof with the Fortin oscillation term and explicit cell-average data oscillation.

Two claims retain their full assigned scope and have no fabricated proof:

- `thm-na-ultraweak-poisson-adjoint-graph-infsup`: the inspected complete Demkowicz–Gopalakrishnan Poisson DPG proof uses a global Hodge decomposition and assumes a bounded simply connected Lipschitz domain. This does not establish the plan’s bounded connected Lipschitz polyhedron scope. The practical-DPG paper imports that theorem, and the estimator paper’s Poisson application cites the same ideal result. A topology-corrected 2D decomposition or a topology-free broken-trace proof with mesh-uniform constants is still needed. This affects the model-specific ideal well-posedness/practical stability and estimator corollary.
- `cor-na-practical-dpg-poisson-quasioptimality-estimator`: its statement depends on the preceding connected-domain inf-sup result. The abstract conditional quasi-optimality and estimator theorems are fully proved, but the unconditional model corollary is not supplied.

No domain restriction to simple connectivity was introduced. No prerequisites were omitted to fit page capacity.

## Full-text sources

The A page has six inspected treatments, including a full monograph and five full papers; the B page has four independent source records, including the monograph and the full least-squares, practical DPG, and estimator papers. The chosen sources and exact ranges read are in `research/numerical-analysis-remaining-71-2026-10-17-batch-60.source-coverage.json`; source titles, direct full-text URLs, local byte counts, page counts, SHA-256 values, fetched-body stamps, named-result harvests, item mapping and disposition are included there. The source files and source proofs were inspected in full over the listed relevant sections. Two independent treatments are present on each page.

The Bond–Chaudhry–Cyr–Olson weighted Poisson–Boltzmann theorem has different coefficients and hypotheses and is treated as comparison only. The optional Acta DPG mirror candidate returned 404 during prior source exploration; the exact-title search located publisher metadata, and the selected complete Qiu, Demkowicz–Gopalakrishnan, Demkowicz book and Carstensen–Demkowicz–Gopalakrishnan texts supplied successful full-text alternatives. The failed optional candidate is not represented as a read source or used as proof evidence. No selected coverage source failed retrieval; therefore no dropped-source disposition or `source_resolution` exception was applied.

## Final scoped checks

- `node tools/item-dependency-levels.mjs check --run numerical-analysis-remaining-71-2026-10-17`: passed, 1,420 items across 142 run pages, maximum level 12. The target’s 23 scaffold item levels and all carrier/manifest direct dependency lists match; zero Batch 60 dependency errors.
- `node tools/depcheck.mjs --items-file /tmp/prestige-batch60-items.json --quiet --json`: passed for all 23 assigned items; zero errors/warnings, with prerequisite cycle checks across 1,644 items and 255 pages.
- `node tools/tsx-run.mjs tools/precheck.mts` on the 23 assigned item files: 19 proof-bearing items checked, zero failures.
- `node tools/proof-layout.mjs` on the 23 assigned item files: 52 numbered steps, zero defects.
- `node tools/proof-contract.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-60.proof-contracts.json --strict`: 19/19 completed proof-bearing items, zero errors/warnings; the two no-proof escalations are deliberately outside the contract scope.
- `node tools/source-fetch-check.mjs --coverage research/numerical-analysis-remaining-71-2026-10-17-batch-60.source-coverage.json --stamp`: 10/10 source entries fetch-verified and resolved; zero drops.
- `node tools/coverage-checklist.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-60.coverage.json --require-destination`: 2 pages, 41 harvested results, zero errors/warnings.
- `node tools/content-policy.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-60.pages.json --json`: 23 items, zero errors/warnings.
- Official scoped Step 1 record verification: 23 items, 21 ready and current, 2 escalated; zero missing or stale records. Every record uses `owner:false`. The two escalations are the graph inf-sup theorem and its model-specific corollary described above.

The run-wide batch dependency-level CLI could not parse an unrelated Batch 71 supplier carrier: `items/def-na-finite-state-discounted-bellman-system.md`, its first source `title` in YAML frontmatter (reported as a nested mapping at line 18, column 14). That file is outside this pair’s authority. The item-level dependency schedule and all 23 Batch 60 labels were independently recomputed and passed.

These checks record authoring and readiness evidence only; they do not constitute independent mathematical approval.

## Owner-requested continuation — current carriers and evidence

The original paragraph above records the authentic initial-writer handoff state (19 A items, 4 B examples; two model-specific proof escalations). The current continuation inventory is 20 A items and 4 B examples. It adds exactly `lem-na-ultraweak-poisson-bounded-load-lifting` to the A page, immediately before its graph-inf-sup consumer. The original native result, original prompt, task and initial notes remain unchanged. The exact pre-continuation Step 1 decision rows and raw hashes are preserved in `research/numerical-analysis-remaining-71-2026-10-17-batch-60-step1-records-before-continuation.json`.

The new lifting proof represents an arbitrary broken graph-dual load by its four Riesz coefficients, solves one global real $H^1_0$ variational problem by Lax–Milgram, constructs a global $H(\operatorname{div})$ field with the required divergence, and uses the actual global scalar and normal trace ranges. Its cell Green identities verify all five signed pairings and give $BR=I$. The norm estimate uses the domain Poincaré constant and Countable Choice; it uses neither arbitrary Choice nor a Hodge, simple-connectivity or connected-boundary hypothesis.

The graph-inf-sup proof now derives the primal bound from that right inverse and the existing zero-kernel lemma, then obtains the adjoint bound using the real Hilbert Riesz map. It retains the full connected Lipschitz polyhedron scope in dimensions two and three, including holes. The practical model corollary is explicitly the dimension-two triangular P1/R3 branch selected by PE30; it retains all connected Lipschitz polygons, including holes, homogeneous scalar boundary trace, cell-average data oscillation, reliability and efficiency. The source prose typos in the boundedness and trial-kernel proofs were corrected at their exact references: boundedness cites steps 1.1 and 2.1; the kernel argument cites its Poincaré fact F6. The A-page summary now records the new lift, its right-inverse diagram, and the distinct continuous d=2,3 and practical d=2 scopes.

The current A-page coverage retains the six full-text sources (including a monograph); the B page retains its four independent full-text source records. The Gopalakrishnan–Qiu Section 3.2 formulation and the Demkowicz–Gopalakrishnan topology-dependent route are used as source context only: the new arbitrary-load proof is local and is not attributed to their simply-connected theorem. Existing source history for the optional Acta mirror 404 remains in the original notes; it was not a selected coverage source and no source was dropped. `source-fetch-check --stamp` verifies 10/10 selected sources with zero drops.

The current `research/numerical-analysis-remaining-71-2026-10-17-batch-60.pages.json` contains 24 items with explicit `deps`; all item dependency levels match the current run graph. The same-page new supplier is level 7, its graph theorem is level 8, and the practical model corollary remains level 10. The proof contract now covers all 22 proof-bearing carriers, retaining the original algorithms and remark, with exact current supplier excerpts and mapped steps.

The current cross-batch edge projection has 24 external item suppliers and exactly matches the direct `deps` lists in the manifest; the superseded graph dependencies on `thm-na-infsup-bounded-right-inverse-hilbert` and `thm-na-babuska-brezzi-kernel-coercivity` were removed from that theorem’s current consumer list (the latter remains a premise of the conditional practical theorem). The two planned A-page requirements remain recorded separately: the Strang page is verified as context, and the PE09 page/interface remains open but is not used as a logical premise by this batch’s local planar bridge or topology-free graph proof.

Current scoped checks passed:

- `node tools/manifest-deps.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-60.pages.json`: 24 items, no missing dependency arrays or errors.
- `node tools/item-dependency-levels.mjs check --run numerical-analysis-remaining-71-2026-10-17`: 1,425 items across 142 pages; maximum level 12; no label errors.
- `node tools/depcheck.mjs --items-file /tmp/prestige-batch60-items.json --quiet --json`: focused 24-item scope, zero errors or warnings; dependency closure checks passed.
- `node tools/content-policy.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-60.pages.json --json`: 24 items, zero errors or warnings.
- `node tools/tsx-run.mjs tools/precheck.mts` on the 22 current proof-contract subjects: 22 checked, zero failures.
- `node tools/proof-layout.mjs` on the five explicitly changed item files: 17 steps, zero defects.
- `node tools/proof-contract.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-60.proof-contracts.json --strict --json`: 22/22, zero errors or warnings.
- `node tools/rendercheck.mjs` on the two pages and five changed items: seven carriers, zero errors or warnings.
- `node tools/coverage-checklist.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-60.coverage.json --require-destination --json`: two pages, 44 harvested results, zero errors or warnings.
- `node tools/source-fetch-check.mjs --coverage research/numerical-analysis-remaining-71-2026-10-17-batch-60.source-coverage.json --stamp`: 10/10 sources fetch-verified and resolved, zero drops.

Current Step 1 source records are ready for 22 of the 24 batch items. The two original records for `thm-na-ultraweak-poisson-adjoint-graph-infsup` and `cor-na-practical-dpg-poisson-quasioptimality-estimator` remain escalated in place. Their new proofs, direct dependencies, placements and proof contracts are complete, but `node tools/step1-decisions.mjs record` refuses both replacements with `Only the owner may resolve this record`. The assignment prohibits `--owner` and overwriting an escalation, so these two source records were not changed. This is now an owner-only readiness reconciliation, not a remaining mathematical proof gap; the original escalations and their preimages remain preserved above.

There is also a current scheduling-input discrepancy that was not edited because the run-wide dependency artifact is shared. The initial dispatch and this batch’s preserved scheduling hash say level 3 with prerequisite batch 38 and input SHA-256 `432e8113021662076ce5e7a06e5c2e36e0db1488bffb1073e0cd909c1c4d8f0c`. The current shared `research/numerical-analysis-remaining-71-2026-10-17-batch-dependency-levels.json`, when re-read after continuation authoring, has input SHA-256 `fec27cd865dc71291faa16091edcbc5e87a9f66cd22ac053cd88760800878ea4` and its Batch 60 row is level 3 with requirements 31, 34 and 38. The current page manifest still declares its two planned page prerequisites, and the batch’s cross-batch record preserves the actual open PE09 interface and the unused Strang prerequisite. The item-level calculation passes; root should reconcile the shared batch-level snapshot against its dispatch authority.

All cited Step 1 records are authoring readiness only. The original reviewer’s final supplier and consumer check, independent reviews, native gates and owner reconciliation remain pending.
