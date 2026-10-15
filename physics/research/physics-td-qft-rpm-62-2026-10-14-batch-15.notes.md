# Batch 15 authoring notes — td-finite-statistical-bridge

## Scope, plan comparison, and capacity

This batch owns only `td-finite-statistical-bridge` (A, order 284) and `td-finite-statistical-bridge-examples` (B, order 285), plus their 23 assigned item carriers and batch evidence. The final inventory has 18 A items and five B examples: 18/32 A reservations and 5/21 B reservations, both below the 100-item page cap. The B examples calculate locally from the A-page carriers; none depends on an NRQM B-page example.

The current task and `plan-spec.json` require four A-page prerequisites: `qm-many-body-and-equilibrium-models`, `td-math-continuum-pressure`, `td-math-mixture-dynamics-and-shells`, and `td-potentials-and-responses`. The complete track-design section at `research/plan-thermodynamics-track.md` § “Finite Statistical Bridge” lists only the latter three and omits the Qm page. The plan/task requirement is followed; the omitted Qm edge is recorded as a design conflict, not dropped.

The older source scaffold’s baseline claim map has 16 named A items; the current track design and run plan have 18, adding `pthm-td-finite-quantum-free-energy-minimum` and `pthm-td-finite-mode-occupation-and-trace-formulas`. Both current items were authored. The older L19 scaffold also contains a physics consumer named `pthm-td-stable-tempered-free-cube-grand-pressure`, which is absent from the current 18-item plan inventory. It was not added as an unassigned item; the current page instead preserves the planned bounded finite-range lattice result and the batch-14 page prerequisite.

The local A page distinguishes adopted finite canonical and microcanonical preparation rules from deductions, finite statistical identities from macroscopic Legendre potentials, and equilibrium preparations from dynamics. The B page labels all calculations as hypothetical model calculations, not reported observations.

## Batch and item dependency levels

The current `batch-dependency-levels.json` row gives batch 15 level 4 with prerequisite batches `1, 9, 11, 12, 14`. The assigned page’s explicit requirements are Qm plus batches 9, 12, and 14; batch 11 is in their dependency closure. The current upstream edges include batch 9 → 8, batches 12 and 14 → 11, and batch 8 → 1, 2, and 4. No cycle occurs in the assigned item closure.

The final item-level labels were recomputed from the populated current-run manifests. The scoped closure contains 43 items across five pages and has zero dependency-level errors:

| Level | Batch-15 items |
|---:|---|
| 1 | `pthm-td-finite-quantum-free-energy-minimum` |
| 2 | `def-td-regular-hamiltonian-shell-preparation` |
| 3 | `def-td-finite-microstate-model`, `pthm-td-general-quantum-canonical-identities` |
| 4 | `post-td-canonical-sampling`, `post-td-microcanonical-sampling`, `pthm-td-qualified-discrete-quantum-dephasing` |
| 5 | `pthm-td-countable-canonical-identities`, `pthm-td-finite-bath-canonical-error`, `pthm-td-finite-canonical-identities`, `pthm-td-invariant-regular-microcanonical-shell`, `pthm-td-lattice-bulk-pressure`, `pthm-td-measurable-canonical-identities`, `ex-td-no-automatic-equilibration` |
| 6 | `pthm-td-differentiable-pressure-concentration`, `pthm-td-finite-entropy-maximum`, `pthm-td-independent-factorization` |
| 7 | `pthm-td-finite-mode-occupation-and-trace-formulas`, `ex-td-two-site-thermal-ensemble` |
| 8 | `rem-td-ensemble-limit-hypotheses`, `ex-td-finite-mode-thermal-ensemble`, `ex-td-infinite-mode-trace-divergence`, `ex-td-two-site-no-thermalization` |

The whole-run `item-dependency-levels.mjs check` remains nonzero outside batch 15: 13 unrelated empty page inventories and 13 stale labels in other batches. The scoped closure check above has no errors and all 23 batch-15 labels match their computed levels. The exact other-batch findings were left untouched.

## Supplier interfaces and readiness

All direct carrier files used by the assigned items are present. I re-read the complete current statements and proofs for the batch-11 countable, measurable, finite-bath, lattice, limiting-derivative/concentration, general trace-Gibbs, and Bose/Fermi suppliers. Their interface and hypotheses are recorded in the consuming Facts blocks and exact supplier statement excerpts in the proof contracts. These are current draft carriers; their Step 1 records are escalated because `td-math-ensembles-and-limits` still lacks its required batch-4 prerequisite closure (`td-math-nonsmooth-equilibrium`). They are used conditionally, not treated as accepted results.

The batch-12 carriers for Hamiltonian volume/recurrence, regular energy-shell measure, and discrete quantum Cesaro dephasing are present, and their full current arguments were inspected. Their Step 1 readiness records are missing, so the shell-invariance and dephasing conclusions remain conditional. The shell consumer adds an explicit $C^\infty$ Hamiltonian hypothesis, stronger than the shell definition’s $C^2$ condition, to match the actual Hamiltonian-volume supplier; it also assumes a globally defined invertible flow on the full band. No completeness, ergodicity, equilibration, or time-average identity is inferred from local equations.

Batch 9 has 12 A carriers, batch 12 has 13, and batch 14 has five; none of these three prerequisite pages has a closed current Step 1 record. Batch 9’s potential/response inputs, batch 12’s shell/dynamics inputs, and batch 14’s continuum-pressure inputs therefore remain open page-level edges. The current page edge to `qm-many-body-and-equilibrium-models` is also open: the relevant published NRQM carriers were inspected, but the published records lack current audit/source-review markers. In particular, the canonical postulate and NRQM entropy/free-energy definition show only `verification.precheck: n/a`; the thermal-equilibrium characterization and thermal-occupation result show `precheck: pass` without `audited`, `verified`, or `sources_checked`; the single-mode trace theorem has no verification marker; and the two-level formula lemma has `precheck: pass` only. The autonomy postulate and evolution definition likewise have `precheck: n/a` only. Published status alone was not treated as acceptance.

Readiness was recorded with `step1-decisions.mjs record`, without `--owner`: `def-td-finite-microstate-model` is `ready` because its complete definition, placement, contract, imported `def-function`, and three current TD1 dependencies are present; the other 22 items are `escalated` because one or more exact direct suppliers/page edges are not current or accepted. The per-item records list every examined direct dependency. Cross-page and item status evidence is in `batch-15.cross-batch-dependencies.json`.

The readiness command’s reason text contains an overbroad pair-level sentence, “B page requires the A page,” on these 17 escalated A items: `def-td-regular-hamiltonian-shell-preparation`, `post-td-canonical-sampling`, `post-td-microcanonical-sampling`, `pthm-td-countable-canonical-identities`, `pthm-td-differentiable-pressure-concentration`, `pthm-td-finite-bath-canonical-error`, `pthm-td-finite-canonical-identities`, `pthm-td-finite-entropy-maximum`, `pthm-td-general-quantum-canonical-identities`, `pthm-td-independent-factorization`, `pthm-td-invariant-regular-microcanonical-shell`, `pthm-td-lattice-bulk-pressure`, `pthm-td-measurable-canonical-identities`, `pthm-td-finite-quantum-free-energy-minimum`, `pthm-td-finite-mode-occupation-and-trace-formulas`, `pthm-td-qualified-discrete-quantum-dephasing`, and `rem-td-ensemble-limit-hypotheses`. That B→A edge is not an input to those A items; their escalations are independently justified by the direct unresolved suppliers listed earlier in each record. The user’s instruction forbids overwriting an escalation, so those records were left intact. The actual A-side required page edges and their open status are stated accurately in the cross-batch file.

## Full-text sources and dispositions

Two independent complete lecture-note treatments were read for the A page:

- [David Tong, *Statistical Physics*](https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf), complete 191-page author-hosted PDF: §§1.2–1.3, printed pp. 2–27, for microcanonical/canonical ensembles, entropy, and reservoir qualifications; §§3.5–3.6, pp. 77–106, for Bose/Fermi mode models; §5.3.1, pp. 156–157, for lattice-model context.
- [Daniel Arovas, *Lecture Notes on Thermodynamics and Statistical Mechanics*](https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf), complete 635-page UCSD notes: §§4.2–4.6, printed pp. 192–217, for ensembles and quantum density matrices; §§5.6–5.7, pp. 277–303, for noninteracting quantum modes; §6.2.2, pp. 330–333, for the Ising lattice model.

The coverage file records every assigned A item against both sources, source-review limits, and each result’s `included`/`inline` disposition. Its B-page harvest is restricted to the mode, finite canonical, and dynamical-context results the sources actually support; the remaining frozen and infinite-mode examples are proved from the local A-page assumptions. All examples are hypothetical. No measurements, apparatus, or statistical inference are asserted.

`source-fetch-check --stamp` fetched all four page/source records successfully: Tong 1,951,403 bytes, SHA-256 prefix `9d41ab5d5751a44e`, 191 pages; Arovas 29,792,744 bytes, prefix `e584592effa68e36`, 635 pages. The environment has `pdfinfo` but not `mutool`; a temporary `/private/tmp` compatibility wrapper passed the downloaded PDF to the real `pdfinfo` parser for page-count verification. Each fetch returned a full-text body on its first attempt. There were no retrieval failures, retries, dropped sources, or `source_resolution` failure records.

## Scoped checks and remaining blockers

| Check | Result |
|---|---|
| Precheck | 23 files; 20 checked; 0 failures. Two definitions and the scope remark are not applicable to phase checking. |
| Proof layout | 23 assigned items, 38 numbered steps, 0 defects. A temporary resolver under `/private/tmp` mapped the app’s `@/` and extensionless TypeScript imports because the installed fallback loader does not resolve the app’s `tsconfig` aliases. |
| Content policy | 23 assigned items; 0 errors, 0 warnings. |
| Dependency check | Focused on the 23 assigned IDs; 0 errors, 0 warnings. |
| Forward-reference check | Focused on the 23 assigned IDs; 0 errors, 0 warnings; no owned forward references. |
| Proof contracts | Strict contract validation covers all 23 entries; 0 errors, 0 warnings. The isolated contract-coverage check covers 18 proof-bearing arguments out of 18. |
| Source coverage | 2 pages, 42 harvested results, 0 errors, 0 warnings. |
| Source fetch | 4/4 coverage records verified; 0 documented drops. |
| Item levels | Assigned 43-item dependency closure across five pages; 0 mismatches or cycles. |

The whole-run `proof-contract-coverage.mjs --run` command cannot load this run because it encounters the unrelated empty inventory `rpm-external-charge-examples`. The assigned pair’s manifest/contract coverage was therefore also run in an isolated temporary scope containing exactly its 23 manifest items; it reports 18/18 proof-bearing arguments covered. No out-of-scope manifest was edited.

Read-only autopilot status at 2026-10-14 05:24 UTC still reports the run as running at `1-scaffold` (42/64 covered; batches 6, 7, 13, 15, 18, 20, 44, 51 and 14 other units remain missing). `step1-blockers.json` records the stage-stalemate units `4, 24, 40, 5, 28, 29, 49`; the status also reports a recorded-scheduling-scope mismatch. No run state, control file, shared plan, or verdict was changed. The remaining batch-15 escalations require current prerequisite-page readiness and owner review of the cited published NRQM carriers’ missing acceptance evidence; the completed authoring and checks do not constitute independent approval.
