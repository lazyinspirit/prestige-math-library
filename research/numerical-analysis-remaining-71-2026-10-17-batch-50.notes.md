# Batch 50 authoring notes — PE26

## Plan and scope reconciliation

The assigned PE26 design at `research/plan-numerical-spatial-track.md` §PE26 and the matching A/B records in `research/plan-spec.json` agree on page IDs, order 2654/2655, category, title, direct `requires` edge, scope, examples, and proof route. No plan conflict needs resolution. The plan-spec `items: []` fields were page-level planning metadata; the authored item inventory is now in this batch's scaffold manifest.

The design's full scope is retained: local discrete harmonic extension and interface Schur complements; fully assembled and partially assembled trace spaces; primal constraints; coefficient-scaled averaging; BDDC; FETI-DP multipliers with an explicit redundant-row convention; exact static condensation; well-defined local/coarse solves; the common nonunit spectrum; a 2D scalar second-order diffusion bound; and the distinction between conditioning and cost. The logarithmic trace, edge cutoff, discrete Sobolev, coefficient-weighting and averaging estimates are local A-page items. The bound is limited to the stated shape-regular bounded-complexity polygon family, matching quasiuniform P1 meshes, subdomain-constant positive coefficients, all vertices primal, and coefficient scaling. No 3D vertex-only, arbitrary graph/mesh, arbitrary high-contrast, or inexact-solver claim is made.

## Inventory and item levels

The scaffold inventory has 19 A-page items and 4 B-page examples (23 total, below the 100-item page cap). Item levels were computed from the listed in-run `deps` before carriers were created; external published suppliers do not raise the in-run item level. The level groups are:

- Level 0: `def-pe26-scalar-substructuring-model`, `lem-pe26-preconditioned-operator-norm-bound`.
- Level 1: `thm-pe26-local-energy-kernel-and-interior-spd`, `def-pe26-primal-interface-spaces-and-jumps`.
- Level 2: `thm-pe26-primal-constraints-remove-floating-kernels`, `def-pe26-discrete-harmonic-extension-and-schur-complement`.
- Level 3: `thm-pe26-harmonic-extension-minimizes-energy`, `thm-pe26-static-condensation-is-exact-interface-solve`, `def-pe26-scaled-averaging-and-bddc-preconditioner`.
- Level 4: `prop-pe26-bddc-constrained-local-minimization`, `def-pe26-feti-dp-dual-system-and-preconditioner`, `lem-pe26-discrete-trace-schur-equivalence`.
- Level 5: `prop-pe26-feti-dp-is-dual-schur-complement`, `lem-pe26-complementary-primal-dual-spectrum`, `lem-pe26-log-edge-cutoff-and-discrete-sobolev`, `rem-pe26-conditioning-and-work-are-separate`.
- Level 6: `thm-pe26-nontrivial-spectrum-bddc-feti-dp`, `lem-pe26-scaled-averaging-energy-bound`, `ex-pe26-two-floating-poisson-subdomains`.
- Level 7: `thm-pe26-condition-number-2d-polylogarithmic`, `ex-pe26-matching-primal-dual-spectrum`.
- Level 8: `ex-pe26-coarse-solve-work-bottleneck`.
- Level 3 B item: `ex-pe26-missing-primal-corner`.

The batch-level dependency remains level 2 after prerequisite batch 45, exactly as the bound scheduling input specifies. The item graph is acyclic. `research/numerical-analysis-remaining-71-2026-10-17-batch-50.cross-batch-dependencies.json` records the unresolved page-level PE25 edge separately from item dependencies.

## Supplier inspection and unresolved interfaces

Read the actual published `def-block-lu-factorisation` definition and the complete proof of `thm-block-lu-factorisation-via-an-invertible-leading-block`. Their exact hypothesis is an invertible leading block; the local interior block is proved positive definite before that factorization is applied. Also read `def-reference-finite-element-and-unisolvent-dofs`, `def-matching-affine-simplicial-meshes`, and `def-broken-and-conforming-polynomial-spaces`; their content is used only for the reference-element, matching-mesh, affine P1 and trace-matching conventions stated in the model definition. The proof dependencies do not use a choice axiom.

The current actual NA-06 page contains ILU(0) and flexible-GMRES results, not a BDDC/FETI-DP supplier; no NA-06 theorem is imported. The current NA-28 mesh page's published matching-mesh and conforming-polynomial definitions are read and cited directly. NA-29's Céa/Aubin–Nitsche results are not used by the PE26 algebraic or condition-number arguments.

The PE26 page has a controlling page-level `requires` edge to `overlapping-schwarz-and-stable-subspace-decompositions` (PE25). At inspection its batch-45 manifest had an empty PE25 item inventory and the PE25 A carrier was absent. The exact still-required planned interfaces are SPD conforming diffusion, a stable decomposition constant C0, a strengthened Cauchy–Schwarz/overlap constant C1, and the two-level P1 Poisson specialization on quasiuniform shape-regular meshes, shape-regular subdomains, coarse diameter H and overlap delta with bounded overlap. The PE26 items do not quote absent bodies or rely on PE25 conclusions; the PE25 page edge nevertheless remains pending, so this pair cannot be marked ready.

## Sources and retrieval record

Three complete full-text sources were inspected, with independent treatments and a full graduate tutorial:

| Source | Read locator | Fetch stamp |
| --- | --- | --- |
| Olof B. Widlund, *Introduction to the Design and Theory of Domain Decomposition Algorithms*, DD20 Tutorial | PDF pp. 24–34, 35–37, 83–97 | 596,267 bytes; 98 pages; SHA-256 prefix `b1774c36d8c37fe2` |
| Oliver Rheinbach, *Parallel Scalable Iterative Substructuring* | Chapter 1 §§1.6–1.7, pp. 21–22; Chapter 2 §§2.1–2.4, pp. 24–47 | 7,193,651 bytes; 186 pages; SHA-256 prefix `f30121c1fa4945cf` |
| Jan Mandel and Bedřich Sousedík, *BDDC and FETI-DP under Minimalist Assumptions* | §§3.1–3.3 and §4, PDF pp. 3–8; §5 for the model specialization | 173,399 bytes; 11 pages; SHA-256 prefix `b3c47a68c8e6a696` |

`source-fetch-check --stamp` recorded a successful full-body retrieval for each selected source; the coverage file records per-result dispositions and the bounded reading extent. The proof contracts bind exact excerpts from local suppliers. Source citations support context and independent comparison; they do not replace the authored proofs.

During source search, Springer chapter links for the Toselli–Widlund monograph returned cache-miss errors; the NDL-hosted full-book URL returned HTTP 502, and a separate repository copy exposed only seven front-matter pages. Those candidate links were not cited. A full 98-page Widlund tutorial and the complete Rheinbach dissertation supplied the required accessible treatments. No selected source failed retrieval, so there is no dropped-source or owner-escalation record.

## Run state and readiness

The recomputed native run status at authoring start was `running`, with no worker in flight. The only recorded native 1-scaffold blocker was the separate `stage-stalemate` finding for unit `1`; it is outside this batch's control. This batch's source, proof-contract, page, dependency and decision records do not change native state or verdicts.

All PE26 items have complete local drafts and contracts, but item decisions remain `escalated` while the explicit PE25 page prerequisite lacks an inspectable carrier. This is a construction handoff, not proof acceptance or independent approval. Final scoped check outputs and the exact readiness reasons are appended below after they are run.


## Final scoped checks and handoff (2026-10-17)

- `precheck.mts items/*pe26*.md --json`: 23 files, 17 proof-bearing items checked, 0 failures; the five definitions and one remark are `not-applicable` by construction.
- `proof-layout.mjs items/*pe26*.md`: 23 items, 48 proof steps, 0 defects.
- Strict proof-contract validation: 23/23 contracts accepted, 48 proof-step rows, no errors or warnings.
- `source-fetch-check` in check mode: 3/3 selected sources fetch-verified and resolved; no source drops.
- Scoped `rendercheck` over the 23 item carriers and both PE26 pages: 25 checked, 0 errors, 0 warnings.
- Scoped dependency computation and carrier/manifest/readiness cross-check: all 23 item dependency lists and levels match; acyclic graph, maximum level 8; every readiness record includes the exact direct dependency list.
- Pair `audit-manifest`: 70 declared relationships across 23 items, 0 defects (64 same-batch and 6 published-backward).
- Run-wide `item-dependency-levels.mjs check --run numerical-analysis-remaining-71-2026-10-17` could not parse the out-of-scope `research/numerical-analysis-remaining-71-2026-10-17-batch-49.pages.json`: invalid JSON escape at line 151, column 199. The PE26 scoped graph passes; batch 49 was not edited.
- Step 1 decisions: all 23 PE26 items are recorded `escalated` with their direct dependencies and the exact unresolved PE25 page prerequisite; no owner override was used.
- Final recomputed native status remains `running`, with no worker in flight and 35/71 scaffold units counted. The current native blocker is the run-level 1-scaffold owner-repair/recertification gate recorded in `research/numerical-analysis-remaining-71-2026-10-17-step1-blockers.json`; this pair did not modify it or claim a run transition.
