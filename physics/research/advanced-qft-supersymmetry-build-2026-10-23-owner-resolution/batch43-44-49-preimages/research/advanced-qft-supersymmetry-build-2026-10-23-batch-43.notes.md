# Batch 43 authoring notes — Anomaly Matching and Categorical Classification Frontier

Run: `advanced-qft-supersymmetry-build-2026-10-23`  
Batch: `43`  
Date: 2026-10-23  
Scope: the assigned A/B pair `qftx-anomaly-matching-and-frontier` and its companion `qftx-anomaly-matching-and-frontier-examples`. All authored carriers remain draft. The two page files are YAML frontmatter only; they have no Markdown bodies or summaries.

## Plan, inventory, and conflicts

The complete design at `research/plan-advanced-qft-and-supersymmetry-track.md` (section “Anomaly Matching and Categorical Classification Frontier”, lines 597–612) asks for a conditional symmetry-preserving-flow result and a status-reviewed classification question. The corresponding `research/plan-spec.json` page row has an empty `items` array, and `scaffold/proposed-inventory.json` names only `pthm-aqft-symmetry-preserving-rg-anomaly-match`. The assigned Batch 43 manifest now inventories five scoped carriers: `def-aqft-exact-background-rg-flow`, `pthm-aqft-symmetry-preserving-rg-anomaly-match`, `op-aqft-fusion-two-category-anomaly-classification`, `ex-aqft-local-anomaly-counterterm-transport`, and `ex-aqft-explicit-breaking-endpoint`. The active dispatch requests the A/B pair and assigned draft content; the plan-spec and shared design were left untouched. This inventory difference is recorded for the owner.

The older research note’s status-review lead describes fusion 2-categories in a 3+1d theory. Current full-text categorical sources place fusion-2-category symmetry defects in 2+1d. The open problem is therefore explicitly bounded to an oriented 2+1d all-boson fusion-2-category setting. The question is a draft after source/status review, not a proved result or supplier.

## Authored claims and conventions

- `def-aqft-exact-background-rg-flow` defines a finite-regulator, background-groupoid-equivariant Wilsonian comparison on a fixed closed Euclidean spacetime. It fixes the group’s global form and action, regulator, measure, nonzero local partition branches, all surviving IR sectors, allowed local counterterms, and a single-valued (C[b]). It asserts no arbitrary continuum RG flow or continuum limit. It directly uses `def-aqft-model-and-scale-data` and `def-aqft-wilsonian-action`; its item level is 3.
- `pthm-aqft-symmetry-preserving-rg-anomaly-match` is now explicitly four-dimensional and spin. It matches (i) the local background-only BRST class in the actual current `def-aqft-thooft-anomaly` interface and (ii) holonomies of the actual inverse determinant line of a smooth Fredholm chiral Dirac family in `def-aqft-global-anomaly-holonomy`. Its added hypotheses state the Wick-rotation identification and a unitary, connection-preserving RG line isomorphism; the theorem does not infer either from scalar partition equality. The proof derives local BRST exactness from the local counterterm and proves equality of line holonomies by the connection-preserving isomorphism on paths and endpoint gauge arrows. It has no spectrum, gap, continuum, phase-exclusion, or empirical conclusion. Its item level is 5.
- `ex-aqft-local-anomaly-counterterm-transport` is a local U(1)^3 counterterm calculation on a closed flat T^4 with trivial bundles and small gauge transformations. The (A_1\wedge A_2\wedge F_3) term has a dimensionless coefficient; the mixed variation is derived by Stokes on the closed torus. Large-gauge quantization and nontrivial bundles are excluded explicitly. Its item level is 6.
- `ex-aqft-explicit-breaking-endpoint` fixes the coordinate lattice Λ_a=(aZ/NaZ)^4, (N\ge2), and a complex scalar with (m_0>0), λ>0, and a fixed nonzero source (j). The proof establishes finite-dimensional integrability by quartic domination and computes a nonzero variation on a constant field, so the exact-U(1) hypothesis fails. It asserts no anomaly value or continuum conclusion. Its item level is 6.
- `op-aqft-fusion-two-category-anomaly-classification` fixes an all-boson finite semisimple fusion 2-category over C, its 2+1d defect/junction interpretation, background groupoid and loops, local counterterms, and bulk class. It asks to define and classify the ℕ→ᶜ→ᵔ anomaly-matching/interface data for fixed ᶜ, including exactness and completeness. Current anomaly definitions have narrower interfaces: 4d infinitesimal BRST, even-dimensional spin Dirac families, and spin relative bordisms. Extending those to the full 2+1d categorical background/junction groupoid is stated as an open duty, not assumed solved. Its item level is 6.

All direct dependency roles are retained in the item carriers and manifest. No proof uses an open problem as a premise. The level formula was recomputed from actual in-run item dependencies: 3, 5, 6, 6, 6 respectively. The A/B page cap is respected.

## Current upstream interfaces and readiness evidence

Fresh `loadStep1Record` and `step1Decision` inspection was performed after the carrier and record state changed during authoring.

- `def-aqft-model-and-scale-data` and `def-aqft-wilsonian-action` are present, their exact definitions were inspected, and their current Step 1 records are ready and hash-current.
- `def-aqft-noninvertible-defect-fusion` is present on the mathematical supplier page; its exact semistrict fusion-2-category definition was inspected and its Step 1 record is ready and hash-current.
- `def-aqft-thooft-anomaly` is present. Its actual statement is a four-dimensional infinitesimal background-only (H^{1,4}(s\mid d_H)) class modulo the declared local counterterms and total derivatives. Its current Step 1 record is ready and hash-current. The separate run-level item dependency check flags its declared level 0 against computed level 3; this supplier was not edited.
- `def-aqft-global-anomaly-holonomy` is present and defines the inverse determinant line of a smooth Fredholm chiral Dirac family on a compact spin manifold, with Quillen metric, Bismut–Freed connection, and path-plus-endpoint-gauge holonomy. Its current owner Step 1 record is escalated and hash-stale. The stored reason refers to an earlier missing `def-aqft-thooft-anomaly` record and old level data; the current tHooft record is now ready, but this batch does not overwrite the owner escalation.
- `def-aqft-anomaly-inflow-relative-theory` is present and defines a line-valued spin boundary theory paired with an inverse spin-bulk line. Its current owner Step 1 record is escalated and hash-stale; the stored reason says the local tHooft interface does not provide determinant-line/global inflow and cites old readiness/level data. This batch does not overwrite that owner escalation.

The actual statements and proofs of the three anomaly suppliers were read. The theorem uses the tHooft carrier only at its 4d BRST interface and makes its Euclidean continuation an explicit model assumption. It uses the determinant-line carrier only for the stated smooth spin Dirac family and includes an explicit RG line-isomorphism assumption. The open problem records where these current interfaces stop and asks for the missing categorical extension. The cross-batch dependency array has one row per direct edge; unresolved readiness/interface checks remain `open`.

## Source coverage and retrieval

Full-text source records, exact locators, item support, reading extent, limitations, and dispositions are in `research/advanced-qft-supersymmetry-build-2026-10-23-batch-43.coverage.json`. The A-page anomaly-matching result uses two independent full lecture treatments: Harvey, *TASI 2003 Lectures on Anomalies*, §2.3, and Tong, *Gauge Theory*, §§2.4 and 3.5. The categorical status review read the relevant full sections in Antinucci et al.; Bhardwaj et al. Parts I and II; Inamura et al.; Robbins and Roy; and Balasubramanian et al. Córdova–Hsin–Zhang and Santaniello et al. are recorded only as adjacent-dimensional comparisons. The coverage search history records that the HTML route for arXiv:2507.01142 failed and the complete canonical PDF was retrieved and read; no source was dropped.

`source-fetch-check --coverage research/advanced-qft-supersymmetry-build-2026-10-23-batch-43.coverage.json --stamp` verified and stamped all 12 source entries; there are zero documented drops.

## Cross-batch graph and owner-owned conflicts

The required cross-batch file is a JSON array with 12 direct edges. It marks the current mathematical fusion-category supplier and both finite-regulator Wilsonian suppliers `verified`. It leaves the anomaly page/item edges `open` where current level/readiness/interface obligations remain. It records only direct edges; transitive observations stay here.

The required run-level dependency graph is stale after this batch’s assigned inventory/dependency changes. A fresh non-writing recomputation gives batch 43 level 8 with direct prerequisite batches `[15, 24, 39, 41, 42]`; the recorded shared graph still has only `[39, 41, 42]`. The new direct item inputs add batches 15 (`def-aqft-noninvertible-defect-fusion`) and 24 (the finite-regulator Wilsonian suppliers). The check reports “Stale batch dependency levels”. The shared dependency-level file is owner-owned and was not modified.

## Scoped validation

- `proof-layout.mjs` on all five changed items: PASS, 5 items, 6 numbered proof steps, 0 defects.
- `proof-contract.mjs ... --strict`: PASS, 5/5 checked, 0 errors, 0 warnings.
- `content-policy.mjs` on the Batch 43 manifest: PASS, 5 scoped items, 0 errors/warnings.
- `rendercheck.mjs` on all five items and both pages: PASS, 7 files; math delimiters, KaTeX, and YAML parsing succeeded.
- Focused `depcheck.mjs --items-file /tmp/advanced-qft-supersymmetry-batch-43-items.json`: PASS for the five selected items and their prerequisite page/cycle closure (1,444 items / 426 pages in the closure).
- `item-dependency-levels.mjs check --run ...`: the five Batch 43 items have the levels above; the run-wide command still reports out-of-scope level errors for `lem-aqft-local-counterterm-shift-is-relative-coboundary` (0 vs 3), `def-aqft-thooft-anomaly` (0 vs 3), `def-aqft-anomaly-matching-data` (1 vs 4), `pthm-aqft-selected-chiral-spectrum-anomaly-cancellation` (2 vs 5), `ex-aqft-single-chiral-fundamental-polynomial` (2 vs 5), `ex-aqft-mixed-background-counterterm-shift` (2 vs 5), and `ex-aqft-vectorlike-conjugate-chiral-pair` (3 vs 6). These are outside Batch 43 and were not edited.
- `batch-dependency-levels.mjs check --run ...`: BLOCKED by the stale owner-owned shared graph noted above; the current graph was computed read-only, and no shared plan was rewritten.

## Final Step 1 records

Fresh `loadStep1Record` and `step1Decision` checks were run after the final item/manifest edits. Four authored records are current and hash-matching:

- `def-aqft-exact-background-rg-flow`: `ready`, examined dependencies `def-aqft-model-and-scale-data` and `def-aqft-wilsonian-action`; both current suppliers are ready/hash-current.
- `pthm-aqft-symmetry-preserving-rg-anomaly-match`: `escalated`, examined dependencies `def-aqft-exact-background-rg-flow`, `def-aqft-thooft-anomaly`, and `def-aqft-global-anomaly-holonomy`; the current global-line supplier has a hash-stale owner escalation, and the tHooft supplier has a level mismatch in the required run-level check.
- `op-aqft-fusion-two-category-anomaly-classification`: `escalated`, examined dependencies `def-aqft-noninvertible-defect-fusion`, `def-aqft-thooft-anomaly`, `def-aqft-global-anomaly-holonomy`, and `def-aqft-anomaly-inflow-relative-theory`; the latter two current Step 1 records are owner-escalated/hash-stale, and the categorical 2+1d anomaly/holonomy/inflow extension remains an explicit open duty.
- `ex-aqft-local-anomaly-counterterm-transport`: `escalated`, examined dependencies `def-aqft-exact-background-rg-flow`, `def-aqft-thooft-anomaly`, and `pthm-aqft-symmetry-preserving-rg-anomaly-match`; the direct physical-result prerequisite is escalated.
- `ex-aqft-explicit-breaking-endpoint`: `escalated`, examined dependency `pthm-aqft-symmetry-preserving-rg-anomaly-match`; the direct theorem prerequisite is escalated. A final proof edit strengthened the finite-lattice integrability bound after its escalation record was written, so `step1Decision` now reports this record's item hash as stale. An attempted same-status recapture was rejected by the native recorder with “Only the owner may resolve this record”; the escalation was not overwritten and no `--owner` flag was used. Owner recapture is required before this record can be current.

All five records use `owner: false`; no owner escalation was overwritten. The ex2 record remains escalated but hash-stale as documented above. Step 1 records describe authoring readiness only, not independent proof acceptance or publication.
