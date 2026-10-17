# Batch 4 authoring notes — EMG-MG04

Run `physics-remaining-80-2026-10-17`, batch `4`, role `beta`. This record covers only the assigned pair `emg-mg04` / `emg-mg04-examples` and its batch evidence.

## Plan and design resolution

- `research/plan-spec.json` is current: the A page `emg-mg04` requires only `emg-mg03`, while its B companion requires the A page. The older track-design reservation lists M03, M02 and M01 as direct page requirements. The plan controls. M03 itself requires M02; M02 requires M01 and its mathematical suppliers, so the omitted older page edges are transitive. No shared plan or page graph was changed.
- The current plan-spec rows have empty item arrays. The full track-design reservation and current `proposed-inventory.json` reserve the same five A items and two B examples. Those seven assigned items are populated in the batch manifest and placed on the two local pages in the reserved order.
- The finished inventory is five A items and two B examples, well under the 100-item page cap.
- The source inventory's seven typed M01 replacement prerequisites are retained in each assigned item's dependencies and roles. Their present form is research-only, not a production item carrier. The scalar-plane-wave example also retains a direct dependency on `lem-emg-maxwell-current-forms`: it substitutes the sourced equation to show that its nonzero current obstructs the Maxwell equation. That direct use was absent from the earlier B inventory.
- Complete local geometric prerequisites are declared where the arguments use them, including the flow, Lie-derivative, compact-divergence, localized-test, bundle, curvature, exterior-derivative and cutoff suppliers. `inventory_expansion_required` is recorded in the manifest; the shared proposed inventory was not edited.

## Inspected supplier interfaces and open status

M02 and M03 carriers are present in the current run manifests and as local draft items. They were read at their current statements and proofs; their draft status is retained and is not treated as proof acceptance.

- `def-emg-local-potentials-and-circle-data` (M02, level 0) supplies a countable cover, a U(1) cocycle, local phase lifts and normalized potentials with $A_j=A_i+\kappa_0df_{ij}$. The charged-scalar item uses this exact local convention.
- `lem-emg-circle-connection-gluing` (M02, level 1) states the fixed-bundle construction, global curvature, and global one-form differences between fixed-sector connections. Its proof is conditional on the exact set-sized-object replacement interface named in that item.
- `lem-emg-maxwell-current-forms` (M03, level 0) states the smooth sourced convention $dF=0$ and $\nabla_aF^{ab}=-\mu_0j^b$ (equivalently its displayed form equation). The Maxwell-stress lemma and plane-wave example use this exact sign and smoothness condition. The matter Noether lemma keeps this dependency as inherited notation only and does not assume a Maxwell equation.
- `lem-emg-maxwell-action-variation` (M03, level 2) gives the fixed-sector compact connection and inverse-metric variations, including the Hilbert tensor. The Einstein variation and Maxwell-stress divergence items use that interface conditionally.

The seven typed M01 carriers are absent from `items/` and remain unresolved in the current frontier. Their exact planned replacement text is recorded in `research/extended-frameworks-2026-10-03/einstein-maxwell-models/foundational-replacements.md` and in the proof-contract evidence. They are:

1. `def-emg-finite-real-supremum-domain`: real suprema/infima only for nonempty sets bounded in the appropriate direction.
2. `def-emg-real-metric-axiom-convention`: finite real-valued metric/pseudometric axioms, with nonnegativity derived separately.
3. `lem-emg-metric-axioms-imply-nonnegativity`: derives nonnegativity from symmetry, the diagonal axiom and the triangle inequality.
4. `def-emg-explicit-power-regimes`: separates positive-base rational powers from real powers defined through exponential and logarithm.
5. `lem-emg-sequence-limit-criterion-with-choice`: epsilon-delta and sequence limits are equivalent with $\mathrm{AC}_\omega$ used only in the reverse direction.
6. `def-emg-boundaryless-completeness-domain`: distinguishes metric completeness from two-sided geodesic completeness and states the boundaryless domain.
7. `def-emg-set-size-and-class-schema`: uses set-sized objects and formula-defined classes, not a proper-class quantification domain.

The source audit marks the inherited root remark closure open; these proposed replacements do not repair or certify the read-only mathematical originals. All seven assigned items declare the M01 dependencies, so all seven readiness decisions remain escalated. Proposed owner action: complete the authorized M01 carrier/source-closure repair on `emg-mg01` A (or provide an owner-reviewed exact replacement path) and then recheck every dependent M02/M03/M04 proof against the actual carrier statements.

The inventory also retains `GR-G3` for `lem-emg-einstein-action-variation`. The record in `proposed-inventory.json` calls it “Curvature symmetries and contracted Bianchi for smooth Lorentz metric” and marks it `completed-research-argument-not-published`; there is no `items/GR-G3.md` carrier. The authored proof uses the current published `thm-gr-second-bianchi-and-divergence-free-einstein` for its actual Bianchi step but preserves `GR-G3` as an unresolved inventory edge. Owner action: provide its production carrier or resolve the inherited edge after reviewing the published replacement.

## Dependency levels

Levels were recomputed over all item manifests in this run. Only dependencies owned by this run raise an item's level; external published items, absent M01 carriers and `GR-G3` do not raise it.

| Item | Level | Highest in-run supplier |
|---|---:|---|
| `def-emg-charged-scalar-functional` | 1 | `def-emg-local-potentials-and-circle-data` (0) |
| `lem-emg-matter-noether-exchange` | 2 | `lem-emg-circle-connection-gluing` (1) |
| `lem-emg-einstein-action-variation` | 3 | `lem-emg-maxwell-action-variation` (2) |
| `lem-emg-charged-scalar-variation` | 3 | `lem-emg-matter-noether-exchange` (2) |
| `lem-emg-maxwell-stress-divergence` | 3 | `lem-emg-maxwell-action-variation` (2) |
| `ex-emgmath-scalar-plane-wave` | 4 | `lem-emg-charged-scalar-variation` (3) |
| `ex-emgmath-eh-boundary-derivative` | 4 | `lem-emg-einstein-action-variation` (3) |

The stored run scheduling graph places batch 4 at level 2 with only batch 3 in `requires`. The actual item dependencies also point directly to batch-2 items, so recomputation from the populated manifest yields the batch edge set `requires:["2","3"]` at the same level 2. `batch-dependency-levels.json` is shared owner state and was left unchanged; the required check result is recorded below.

## Sources and scope

The companion `batch-4.coverage.json` records three independent full lecture-note sources, their complete-document retrieval stamps, the actual inspected locators, and a disposition for every harvested section. The full author-hosted David Tong General Relativity PDF was inspected at §4.1 and §§4.5.2–4.5.3; the complete Carroll arXiv PDF was inspected in Chs. 4–5 at the EH, Maxwell-stress and diffeomorphism locators; the full David Tong Gauge Theory PDF was inspected at §2.5.2. Their differences in action normalization and field/source conventions are not silently imported. All deductions are proved locally under the declared suppliers. No empirical data, reported observation, measured precision, quantum claim or coupled PDE existence claim is introduced.

## Scoped checks

Final scoped results after item, page and manifest edits:

- `source-fetch-check --stamp`: pass, 3/3 full PDFs stamped, no retrieval failures. Verified documents have 290, 238 and 457 pages respectively. `coverage-checklist`: pass, one A page, ten harvested results, zero warnings.
- `proof-contract.mjs --strict`: pass, 7/7 assigned items, zero errors or warnings. `proof-layout.mjs`: pass, 7 items / 31 numbered steps / zero defects. `precheck.mts`: pass, all 7 items. `rendercheck.mjs`: pass, all 7 items and 2 pages.
- The batch-4 manifest dependency levels recompute exactly: 1, 2, 3, 3, 3, 4, 4 as tabulated above. The run-wide `item-dependency-levels.mjs check` still reports 106 errors in other batches' empty inventories and mismatched rows; a direct recomputation confirms all seven batch-4 item levels match and reports zero batch-4 level errors.
- `content-policy --manifest-only --authored` reports exactly 50 unresolved batch prerequisites: the seven absent M01 typed replacements for each of seven items (49 edges) plus `GR-G3` for the Einstein variation. `depcheck --items-file` reports 99 unresolved dependency/link entries from those same missing suppliers, with no additional warning after the plane-wave example's direct scalar-functional dependency was added. These are the documented owner blockers, not omitted or weakened dependencies.
- The latest `batch-dependency-levels.mjs check` is blocked while parsing a duplicate YAML mapping key in current dependency data mentioning `thm-kolmogorov-extension-for-standard-borel-coordinate-spaces`; no file in this assignment owns that carrier, so it was left untouched. The earlier successful recomputation of the current assigned graph gave batch 4 level 2 with `requires:["2","3"]`, due to direct M02 item dependencies in addition to the M03 page edge. The shared `batch-dependency-levels.json` remains unchanged for owner repair.
- All seven batch-4 Step 1 records are `escalated`, with their current direct dependency lists recorded. Six existing escalations were preserved without overwrite; the missing `lem-emg-einstein-action-variation` record was added with `--decision escalated` and no `--owner`. The run-wide Step 1 check remains open because the rest of the 312-item run contains unresolved items/pages; the seven assigned records all remain escalated for the exact prerequisites above.

No test suite was added or run. No shared plan, run-level dependency graph, engine state, verdict, published item, root mathematical original or imported mathematical supplier was edited.
