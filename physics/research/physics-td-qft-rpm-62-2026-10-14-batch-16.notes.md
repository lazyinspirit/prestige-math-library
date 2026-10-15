# Batch 16 authoring notes — Irreversible Boundaries

Run: `physics-td-qft-rpm-62-2026-10-14`  
Role: beta  
Assigned pair: `td-irreversible-boundaries` / `td-irreversible-boundaries-examples`

## Plan and inventory

The current design reserves six A items: `def-td-macro-versus-micro-entropy-claim`, `rem-td-empirical-evidence-contract`, `rem-td-fluctuation-model-hypotheses`, `rem-td-local-equilibrium-branch`, `pthm-td-unitary-entropy-invariance`, and `rem-td-transport-branch`. The current plan names `rem-td-fluctuation-model-hypotheses`; the older baseline source map names `rem-td-fluctuation-theorem-open` and reserves five A items / eight B items. The current plan controls. Five B examples were authored, within the current 11-item B reservation; the A inventory is within its 14-item reservation and both pages are below the 100-item hard cap.

`plan-spec.json` agrees with the design on page IDs, title, order 286, category, library, companion, and the A-page prerequisite `td-finite-statistical-bridge`; its item inventory is empty, so the current design supplies the item names. The older baseline map gives the route `TD2, TD8 → TD9`, while the current page-level plan requires only TD8. The actual A item dependencies on the inspected TD2 entropy postulate and second-law postulate are retained where used. This page-level/item-level difference is recorded for owner review; the plan and shared dependency file were not changed.

## Missing supplier and conditional interface

The current TD8 page and its batch-15 manifest inventory are absent. The planned `def-td-finite-microstate-model`, `post-td-microcanonical-sampling`, and `post-td-canonical-sampling` carriers are also absent. The conditional interface recorded for the consuming definition is a finite labelled set `Ω`, an assigned energy map `E: Ω → R` in joules, and a separately adopted sampling model. Microcanonical sampling additionally needs a declared shell/resolution and uniform weighting or an equivalent preparation rule; canonical weights need extra bath/weak-coupling or constrained maximum-entropy assumptions. None is adopted here. No TD8 sampling rule or finite-ensemble identity is treated as proved.

The six A items and five B examples were completed despite this missing page. `def-td-macro-versus-micro-entropy-claim` records the exact conditional `Ω/E` use and does not identify macrostate, Boltzmann, Gibbs–Shannon, or von Neumann entropy. The TD9 unitary result is transferred only for the exact closed finite-sector model, with the NRQM theorem's P1/P2/P4 readings, canonical-preparation premise, and both ACω and AC assumptions. It makes no claim about macroscopic entropy increase, bath relaxation, thermalization, or laboratory behaviour.

## Inspected cross-batch interfaces

- `def-td-equilibrium-state-domain` is an actual batch-1 draft defining `D_c` on admitted equilibrium macrostates and placing statistical probability preparations on a separate branch.
- `post-td-concave-fundamental-entropy` is an actual batch-2 draft adopting the macroscopic `S_c` function as primitive constitutive data; its concavity and differentiability hypotheses are chart-specific.
- `post-td-macroscopic-second-law` is an actual batch-2 draft postulate for endpoint entropy differences of admitted isolated-compound process records with equilibrium endpoints. It assigns no entropy to intermediate nonequilibrium configurations and asserts no trajectory-wise monotonicity.
- `pthm-nrqm-many-body-unitary-evolution-preserves-entropy` is published. Its full statement, facts, proof, remarks, dependencies, and finite-sector assumptions were read. The target also uses the actual finite-sector entropy, declared fixed-N sector, SI quantity, and autonomous-dynamics definitions; their exact interfaces are recorded in the proof contract and cross-batch file.
- Imported mathematical suppliers remain read-only. The finite-sum, natural-logarithm, logarithm-law, Axiom of Choice, and Axiom of Countable Choice interfaces were inspected at their cited definitions/statements.

The assigned item levels are: A `def-td-macro-versus-micro-entropy-claim` 5, `rem-td-empirical-evidence-contract` 0, `rem-td-fluctuation-model-hypotheses` 6, `rem-td-local-equilibrium-branch` 0, `pthm-td-unitary-entropy-invariance` 6, `rem-td-transport-branch` 1; B `ex-td-macrocell-and-gibbs-entropy` 6, `ex-td-mean-vs-trial-outcome` 7, `ex-td-local-equilibrium-profile` 1, `ex-td-transport-coefficient-model-input` 2, and `ex-td-empty-evidence-record-template` 1. These use the maximum current in-run supplier level; the absent TD8 carrier has no actual level to inspect. The item-level checker reported no error for these eleven IDs.

The shared batch-level file records batch 16 at level 5 with `requires: [15]`; the level remains 5 because batch 15 is level 4 and the added actual batch-2 item dependencies are lower. `batch-dependency-levels.mjs check --run physics-td-qft-rpm-62-2026-10-14` reports `Stale batch dependency levels ...; recompute before authoring`. The shared level file is owner-owned and was left untouched. The owner should refresh it when inventories settle, including the actual item-derived cross-batch edges.

## Sources and dispositions

Full-text reading for the A page used:

- K. Likharev, *Essential Graduate Physics, SM: Statistical Mechanics*, 224-page merged PDF; the complete relevant Chapter 5 §§5.1–5.7 and Chapter 6 §§6.1–6.5 were read.
- D. Arovas, *Lecture Notes on Thermodynamics and Statistical Mechanics*, complete 635-page PDF; §§8.2–8.9 and §§9.2–9.5.
- J. Binney and D. Skinner, *The Physics of Quantum Mechanics*, §§6.3–6.4, printed pp.122–131.
- I. Burmistrov and A. Lunkin, *Lecture Notes on Statistical Mechanics*, §§1.1.1–1.1.3, printed pp.12–14.

Arovas supports the local-equilibrium approximation, kinetic-correction caveat, and relaxation-time/collision-invariant qualifications. Its H-theorem, diffusion, Langevin, Fokker–Planck, hydrodynamic, and ergodic claims are explicitly out of scope unless separately modelled. Binney and Burmistrov support quantum density-operator/entropy context; Binney's adiabatic-entropy discussion is not used as the general unitary-invariance proof. The proof uses the actual published NRQM theorem. No historical anecdote, example, or observation is reported as an experiment.

The Likharev PDF's full text was read in the earlier batch-8 source resolution; this batch read the relevant Chapter 5–6 sections. The same URL already failed the initial page-count check and all five recovery retries. Its previous search and retry history is preserved in `source_resolution`; the source remains a documented drop from active fetch evidence, with current per-item alternative arguments and dependencies recorded there. No mathematical result is dropped. `source-fetch-check --stamp` reports five active fetch-verified sources and one documented source drop; zero new stamps were needed because the five active URLs already had matching full-text stamps. The coverage file records every harvested result and its disposition. `coverage-checklist` reports 19 harvested results and zero errors, with one low-yield warning for the A page (5/14 items included); Alpha should review those explicit out-of-scope dispositions.

## Validation and readiness

- `source-fetch-check --stamp`: 5/6 fetch-verified; 6/6 resolved including the documented drop.
- `content-policy` on the batch manifest: 11 items, 0 errors, 0 warnings.
- Focused `depcheck` on the eleven assigned items and two pages: 0 errors, 0 warnings. A whole-corpus invocation separately reports legacy repository errors and was not used as the scoped result.
- `rendercheck` on the eleven items and two pages: passed; frontmatter parsed and all math spans rendered.
- `precheck` on the theorem and four proof-bearing examples: 5 checked, 0 failing.
- Strict proof-contract check: 5/5 proof-bearing items, 0 errors, 0 warnings. Contracts include exact supplier excerpts, mapped steps and inputs, all eight boundary cases, and finite checks.
- `proof-layout`: 11 changed items, 15 numbered steps, 0 defects. The default runner could not resolve the application `@/` alias and extensionless TypeScript imports; the same renderer was run using a temporary resolver under `/tmp`, with no app-checkout or repository-tool edits.
- `item-dependency-levels.mjs check --run ...` exits nonzero for other batches' empty inventories and stale item levels; none of its reported IDs is in batch 16. Batch-16 item levels listed above match the checker.
- `batch-dependency-levels.mjs check --run ...` reports stale shared batch levels; no owner-managed level evidence was rewritten.
- `step1-decisions.mjs check --run ...` reports the run is not closed. All eleven batch-16 items have explicit `escalated` records with examined dependencies; the exact unresolved prerequisite is TD8. No item was marked ready, and no owner decision was written.

The autopilot run was already held for owner repair/recertification. No engine state, verdict, published item, shared plan, or shared dependency-level file was changed. Batch 16 authoring is complete, but readiness remains escalated pending the actual TD8 carrier and owner refresh of stale shared dependency-level evidence.
