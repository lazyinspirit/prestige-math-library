# Batch 61 — authoring notes

Run: `physics-remaining-80-2026-10-17`  
Pair: `tgr-c04` / `tgr-c04-examples`  
Category: `thermodynamics-and-general-relativity`  
Library: `physics`

## Plan and design reconciliation

The binding owner direction, full TGR-C04 design section, current plan-spec entries, batch dependency-level record, proposed source inventory, and prior batch 54/57 evidence were inspected before authoring. The plan and design agree on page IDs, order 619/620, titles, category, physics library, pair relation, and page requirements `tgr-i01` and `tgr-mc04`. The plan-spec item arrays and the initially empty batch-61 manifest were inventory placeholders. The source inventory reserves four A items and one B example; all five are now present and placed.

The Cattaneo theorem's direct dependencies include `def-countable-choice` and `def-schwartz-space-and-its-seminorms` in addition to the two reserved suppliers. These explicitly expose the exact `AC_omega` hypothesis and data-class definition required by its global-evolution clause. This is a prerequisite clarification, not a claim expansion. The theorem retains the exact draft mathematical Cattaneo lemma interface and its conditional dependency on the generic linear-system supplier.

The run-level batch record gives batch 61 dependency level 4 with in-run page suppliers batches 54 and 57. The shared level file and canonical plan were not changed.

## Authored inventory and item dependency levels

The A page contains four items and the B page one example, below the 100-item page cap. The scoped item levels use one plus the maximum level of direct suppliers that are items in this run; external mathematical suppliers do not increase an item level.

| Item | Page | Level | Direct dependencies |
|---|---|---:|---|
| `post-tgr-cattaneo-thermal-model` | `tgr-c04` | 6 | `def-tgr-framework-units`; `lem-tgr-cattaneo-stability-causality` |
| `post-tgr-radiation-fluid-model` | `tgr-c04` | 6 | `def-tgr-framework-units`; `def-tgr-entropy-only-radiation-state` |
| `pthm-tgr-cattaneo-thermal-properties` | `tgr-c04` | 7 | `post-tgr-cattaneo-thermal-model`; `lem-tgr-cattaneo-stability-causality`; `def-countable-choice`; `def-schwartz-space-and-its-seminorms` |
| `pthm-tgr-radiation-local-properties` | `tgr-c04` | 7 | `post-tgr-radiation-fluid-model`; `lem-tgr-radiation-state-balance`; `def-countable-choice` |
| `ex-tgr-thermal-damped-model` | `tgr-c04-examples` | 8 | `pthm-tgr-cattaneo-thermal-properties` |

The two postulates are suppliers before both A-page theorems; the B example follows its A-page theorem. Direct roles distinguish formulation, physical assumptions/results, and mathematical premises. No new mathematical carrier was needed.

## Supplier inspection and conditional status

- `def-tgr-framework-units` is present and current at item level 5. Its exact length-coordinate, SI `c`, Lorentzian connection, and dimensionless unit-observer conventions match the two postulates. Its current Step 1 record is owner-ready; this is authoring readiness, not independent proof approval of its transitive mathematical suppliers.
- `lem-tgr-cattaneo-stability-causality` is present in batch 57 at item level 1 with a current Step 1 ready record. Its exact current equations, effective entropy and flux, entropy-production identity, Lyapunov identity, symmetrizer, speed, Fourier estimate, and global-solution caveat were read. Its evolution, norm contraction, and propagation claims remain conditional on its own exact draft `lem-tgr-constant-linear-energy-causality` supplier. No result is treated as proved solely because it is ready.
- `def-tgr-entropy-only-radiation-state` and `lem-tgr-radiation-state-balance` are present in batch 57 at levels 0 and 1 with current Step 1 ready records. Their positive-domain maps, perfect-stress hypotheses, AC_omega strength, proper-time normalization, local entropy proof, frozen linearization, and characteristic spectrum were inspected. The physical radiation theorem explicitly sets `U^a=c u^a` to reconcile the mathematics supplier's `g(U,U)=-c^2` convention with the postulate's `g(u,u)=-1` convention.
- `def-countable-choice` and `def-schwartz-space-and-its-seminorms` are current published mathematical suppliers. Their exact definitions are quoted in the Cattaneo theorem facts. Only countable choice is carried; no stronger choice assumption is added.
- The batch-57 cross-batch file retains its historical OPEN `tgr-mc04` to `tgr-mc03` page row. The owner current-page-context report records that its old stale-readiness premise no longer represents a current carrier absence and that no proof acceptance follows. This batch inspected the actual current MC04 page/items and records its own scoped required-page check as verified; the historical batch-57 evidence was not edited. Batch 54 likewise retains its original page/item observations; this batch checked the exact current framework-definition use and did not certify unrelated transitive proofs.

## Conditional proof routes

- The Cattaneo postulate adopts the supported-rest constant-coefficient subsystem and a specified quadratic effective entropy on an explicit open state neighborhood. It does not describe an unsupported full fluid, report measurements, or claim a universal law.
- The Cattaneo physics theorem applies the current mathematical lemma's exact entropy/Lyapunov identities, derives the two-way causal coefficient condition `kappa <= C tau c^2`, and records global evolution, contraction, finite propagation, and the periodic positive-temperature estimate only with the mathematical supplier's exact conditional hypotheses. The physical interpretation remains restricted to times inside the postulate's state neighborhood.
- The separate radiation postulate adopts an entropy-only state chart and perfect-stress balance, without a number current. Its theorem explicitly converts the dimensionless observer to the proper-time vector, obtains local entropy-current conservation, and computes the frozen Minkowski-rest characteristic speeds `0, 0, ±c/sqrt(3)`. It asserts no global nonlinear solution or quantum value of `a_R`.
- The B example solves one underdamped periodic Fourier mode by direct differentiation. Its forward-time amplitude bounds ensure positive temperature and membership in the selected open state neighborhood; it reports no observation.

No empirical premises or statistical inference are used. Physics conclusions are conditional deductions from adopted models and mathematical suppliers.

## Source reading and dispositions

Five authoritative full texts were read. The radiation branch has two independent full lecture-note treatments; the Cattaneo branch has two independent papers plus a full university lecture-note treatment. Each source entry records exact locators, supported items, limitations, included results, and out-of-scope results in `physics-remaining-80-2026-10-17-batch-61.coverage.json`.

- Éric Gourgoulhon, *An Introduction to Relativistic Hydrodynamics*, full 37-page lecture notes: §§4.2–4.3 and 5.2–5.3, PDF pp. 14–18. The notes support perfect-stress and energy-projection context, but their particle-number first law is not imported into the entropy-only branch.
- Nicolas Borghini, *Elements of Hydrodynamics*, full 202-page lecture notes: X.3.1–X.3.2 and XI.2.1, PDF pp. 150–153 and 177–178. The notes give the perfect-fluid stress/entropy context and the zero-charge ultrarelativistic `p=epsilon/3`, `epsilon proportional to T^4`, `s proportional to T^3` scaling. They do not fix `a_R`; their entropy proof uses conserved-charge hypotheses absent here.
- N. Andersson and G. L. Comer, *Variational multifluid dynamics and causal heat conductivity*, full 15-page paper: §4, equations (4.2)–(4.14), PDF pp. 5–8. The rigid-solid constant-parameter Cattaneo reduction is model context; its constant-parameter assumption is explicitly qualified.
- S. K. Lander and N. Andersson, *Heat conduction in rotating relativistic stars*, full 13-page paper: §2.1, equations (1)–(3), PDF pp. 1–3. The paper treats the simple Cattaneo term phenomenologically and discusses the relativistic causality issue; it does not prove this batch's entropy or PDE estimates.
- MIT OpenCourseWare, 2.57 *Nano-to-Macro Transport Processes*, complete 177-page 2004 lecture notes: Lecture 21, PDF pp. 153–154. The notes derive a hyperbolic heat equation from the Cattaneo law and source-free energy balance and state applicability/evidence cautions; their 2004 empirical-status wording is retained as historical source context, not a current survey or premise.

**Fetch verification:** `node tools/physics-support/source-fetch-check.mjs --coverage research/physics-remaining-80-2026-10-17-batch-61.coverage.json --stamp` passed 5/5 and newly stamped all five full-text PDFs; 0 sources were dropped. The stamped PDF page counts are 37 (Gourgoulhon), 202 (Borghini), 15 (Andersson–Comer), 13 (Lander–Andersson), and 177 (MIT OCW). No retrieval failures or recovery retries occurred.

## Cross-batch dependency inputs

`physics-remaining-80-2026-10-17-batch-61.cross-batch-dependencies.json` is an array with one row per in-run edge: two required page edges and six direct item edges. Each row records the scoped interface check only, not proof approval. The corresponding aggregate page/item interface descriptions and external published mathematical inputs are recorded in `physics-remaining-80-2026-10-17-batch-61.dependency-inputs.json`.

## Readiness and scoped checks

The final Step 1 records are all non-owner `ready` decisions, with the exact direct item dependencies recorded in each file:

| Item | Decision record | Result |
|---|---|---|
| `post-tgr-cattaneo-thermal-model` | `physics-remaining-80-2026-10-17-step1-post-tgr-cattaneo-thermal-model.json` | ready; closure hash `c82674c88d256e9915ee2d3f732948c8033dab154203179654f5fd7791e677c6` |
| `post-tgr-radiation-fluid-model` | `physics-remaining-80-2026-10-17-step1-post-tgr-radiation-fluid-model.json` | ready; closure hash `8f4f7eaa2ba053abb3f61fbeeea4b473d1e01fc961b8c8fcd72ffcb0f3d93868` |
| `pthm-tgr-cattaneo-thermal-properties` | `physics-remaining-80-2026-10-17-step1-pthm-tgr-cattaneo-thermal-properties.json` | ready; closure hash `4fa081c0c0d2b251b21c0cb35e8c3221d3aba7c64c51c293f5d56617cc73eda8` |
| `pthm-tgr-radiation-local-properties` | `physics-remaining-80-2026-10-17-step1-pthm-tgr-radiation-local-properties.json` | ready; closure hash `d6ef2ae57ab87a3070ed05d70c05aac79a86f09077513b307e4ddde8e506efdc` |
| `ex-tgr-thermal-damped-model` | `physics-remaining-80-2026-10-17-step1-ex-tgr-thermal-damped-model.json` | ready; closure hash `29a6829427e338773944268ca3cb0fb294b5548aa555cfb58269b7d7420b0bba` |

These records bind current draft suppliers and completed local arguments. They grant no independent proof or empirical acceptance. The Cattaneo global-evolution chain remains explicitly conditional on its draft generic linear-system supplier.

Final scoped checks:

- `precheck.mts` through `tools/tsx-run.mjs`: 5 items checked, 0 failures. The checker initially proposed canonical phase renumbering for the radiation theorem and B example; those exact phase repairs were adopted before the final pass.
- `proof-layout.mjs` on the five assigned items: 5 items, 11 steps, 0 defects.
- `rendercheck.mjs` on the five items and both pages: 7 files; YAML, KaTeX, and delimiter checks passed.
- `proof-contract.mjs --strict`: 5/5 items, 0 errors, 0 warnings.
- `content-policy.mjs --manifest-only --authored`: 5 items, 0 errors, 0 warnings.
- Explicit `depcheck`, `fwdcheck`, and `extcheck` selections: all passed.
- Scoped item dependency-level calculation over the 17-item transitive closure: 0 errors. The five assigned computed levels match 6, 6, 7, 7, and 8 in the table above.
- `coverage-checklist.mjs`: 1 A page, 13 harvested-result entries, 0 errors, 0 warnings. `source-fetch-check --stamp` fetched/stamped 5/5 full-text PDFs; the subsequent no-network check also passed 5/5, with 0 drops.
- `manifest-deps.mjs`: 5 items, 0 missing dependency arrays. Cross-batch JSON validation: 8 rows, all consumers belong to this batch, and all rows have valid kinds, statuses, and nonempty evidence.
- `manifest-integrity.mjs`: 160 pages owed, 160 present, 0 missing, 0 added.
- Selected `physics-check --plan` on `tgr-c04` and `tgr-c04-examples`: 0 errors. The current plan-spec item arrays remain placeholders, so this pass checked the selected page/plan interface and counted 0 plan items; authored item checks are reported separately above.

The full `batch-dependency-levels.mjs check` could not load the current run graph: it stops with `Duplicate item undefined`. Inspection localized this to the still-unfinished, unassigned batch 64 manifest, where `tgr-et03` and `tgr-et03-examples` contain bare string item IDs rather than authored item objects. The recorded scheduling row for batch 61 remains level 4 with in-run suppliers 54 and 57, matching the current `tgr-c04` page requirements; the full owner-level snapshot was not rewritten. The scoped item-level check for this batch and its actual dependency closure passed.

The shared plan, shared batch-level input snapshot, other batches, verdicts, and engine state remain owner-controlled and were not edited.
