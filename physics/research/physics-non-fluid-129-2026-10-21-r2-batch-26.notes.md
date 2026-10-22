# Batch 26 notes — Effective nonlinear electromagnetism and semiclassical consistency

## Plan and design reconciliation

The current batch task and `plan-spec.json` agree on the A/B page IDs, titles, order (749/750), category, library, and four page prerequisites: `emg-mg04`, `emg-fx05`, `emg-mg03`, and `emg-mg01`. The plan-spec page records have empty `items` arrays; the run-local `research/frontier-expansion-2026-10-19/einstein-maxwell-models/inventory.json` and the complete `emg-fx11` design section provide the item-level inventory and proof routes.

The task file lists `cex-emg-fx-neutral-no-amplification` as a B leaf. That item belongs to `emg-fx08-examples` in the track plan and prose scaffold, while the `emg-fx11` inventory, detailed design, and splice map assign `cex-emg-fx-eft-order-does-not-control-derivatives` to `emg-fx11-examples`. The plan controls this conflict; the EFT-derivative counterexample is authored here and the misplaced task leaf is recorded as stale. No owner authoring-direction file was present.

No page-level scope or design warning was dropped. The mathematical normalization `L=X` remains distinct from an SI action prefactor. The coefficients `alpha,beta` are arbitrary and carry inverse-invariant units; no Euler–Heisenberg coefficient, loop order, threshold, or QED origin is assigned. Nonlinear hyperbolicity and characteristic causality remain separate analyses. The semiclassical source interface is conditional on a chosen algebra/state class, renormalization prescription, and spacetime regularity; nonlocal state dependence and curvature counterterms remain possible, and order reduction is a separate approximation. The pair makes no Hawking/KMS/Unruh, generalized-entropy, black-hole thermodynamic, charged-pair-production, or evaporation-endpoint claim.

## Inventory, direct dependencies, and levels

The four A items and one B counterexample fit the A/B page capacities. Their item dependencies and recomputed in-run levels are:

| Item | Direct logical prerequisites | Level |
|---|---|---:|
| `def-emg-fx-nonlinear-lagrangian` | `def-emg-lorentzian-forms`, `def-emg-local-potentials-and-circle-data`, `lem-emg-circle-connection-gluing`, `lem-emg-lorentz-hodge-calculus`, `lem-emg-maxwell-action-variation` | 0 |
| `prop-emg-fx-nonlinear-maxwell-variation` | `def-emg-fx-nonlinear-lagrangian`, `lem-emg-lorentz-hodge-calculus`, `lem-emg-maxwell-action-variation` | 1 |
| `def-emg-fx-semiclassical-source-contract` | `lem-emg-maxwell-stress-divergence` | 0 |
| `prop-emg-fx-semiclassical-consistency` | `def-emg-fx-semiclassical-source-contract`, `lem-emg-maxwell-current-forms`, `lem-emg-maxwell-stress-divergence`, `thm-gr-second-bianchi-and-divergence-free-einstein` | 1 |
| `cex-emg-fx-eft-order-does-not-control-derivatives` | `lem-emg-lorentz-hodge-calculus`, `prop-emg-fx-nonlinear-maxwell-variation` | 2 |

The batch dependency record places batch 26 at level 1 after batch 20. No item in this batch uses a batch-20 item as a proof premise, so the item levels above are determined by the within-batch item edges only. The page-level `emg-fx05` prerequisite remains recorded as a verified cross-batch page edge. The other three page prerequisites are outside this run and remain external context. The item dependency graph is acyclic.

Several direct dependencies were added beyond the short planned lists so the authored interface exposes its actual hypotheses: the nonlinear definition names the Lorentzian geometry and fixed U(1) bundle/connection-gluing interface directly; the semiclassical proposition directly names current conservation and the contracted Bianchi result used by its two proof steps; the B counterexample directly names the Hodge convention used to compute `Y=0`. These are existing mathematical suppliers, not newly owned items. All dependencies are mathematical.

## Supplier interfaces and readiness

The actual current interfaces and proofs of `lem-emg-maxwell-action-variation`, `lem-emg-lorentz-hodge-calculus`, `lem-emg-maxwell-current-forms`, `lem-emg-maxwell-stress-divergence`, and `thm-gr-second-bianchi-and-divergence-free-einstein` were read. The action-variation proof uses a fixed-bundle premise. Its current dependency interfaces `def-emg-local-potentials-and-circle-data` and `lem-emg-circle-connection-gluing` were also inspected, including the complete gluing proof: local forms glue to a global closed curvature and fixed transition data make connection differences global one-forms. The action-variation item contains an older A1 note calling those interfaces drafts; their current carriers are published and their actual statements match the use. The conditional proof uses only that inspected interface and makes no new acceptance claim.

`loadStep1Record` and `step1Decision` were checked for the current batch-20 items used as page context. The four authored `emg-fx05` items (`def-emg-fx-linearized-electrovac`, `lem-emg-fx-linearized-hodge`, `prop-emg-fx-gauge-linearized-solutions`, and `lem-emg-fx-local-linear-wave-control`) have current `ready` records with matching dependency hashes. The external published suppliers return no run-local Step-1 readiness record because they are not owned by this run; that absence was not treated as a prerequisite gap. Their current carrier proofs and exact hypotheses were inspected instead. No argument depends on an uninspected draft/planned supplier, and no missing prerequisite remains.

## Source reading and harvest

Four independent full-text lecture-note sources were retrieved and inspected. Tong and Carroll provide two independent full GR/Maxwell treatments; Sorokin covers generic nonlinear electrodynamics; Ford covers renormalized stress and semiclassical limitations. Exact URLs, locators, per-item support, and an explicit disposition for every harvested section appear in `physics-non-fluid-129-2026-10-21-r2-batch-26.coverage.json`.

- David Tong, *General Relativity*, §§3.2.5 and 4.5.3, with the local-conservation discussion in §4.5.5: [full PDF](https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf). The Maxwell action, source equation, Hilbert stress, and diffeomorphism/Bianchi compatibility are used as context; the new nonlinear variation is proved locally.
- Sean Carroll, *Lecture Notes on General Relativity*, Ch. 1, Ch. 3, Ch. 4, and Ch. 7: [full PDF](https://arxiv.org/pdf/gr-qc/9712019v1). The Bianchi derivation and Maxwell/Einstein conventions were inspected. Carroll's Gaussian normalization and reversed antisymmetric current-index order are not imported.
- Dmitri Sorokin, *Introductory Notes on Non-linear Electrodynamics and its Applications*, §§3.2 and 6: [full PDF](https://arxiv.org/pdf/2112.12118). The two-invariant action and generic field equation provide independent NED context; the local proof sets source current to zero and establishes the exact convention. Causality and birefringence sections are outside the authored claim.
- L. H. Ford, *Quantum Field Theory in Curved Spacetime*, Ch. 3 and §5.1: [full PDF](https://arxiv.org/pdf/gr-qc/9707062). Point-splitting, curvature counterterms, stress fluctuations, and semiclassical limitations support the explicit interface warnings. No state or renormalized source construction is imported.

## Conditional proof and scope

The nonlinear Euler–Lagrange proof differentiates `X,Y` at fixed metric, uses the local Hodge-pairing symmetry, integrates by parts only for compact support, and applies a local smooth-bump test to the continuous coefficient `nabla_a H^{ab}`. The identity `dF=0` follows separately from the connection-curvature definition. The semiclassical consistency proof applies the sourced-current lemma, then the contracted Bianchi identity and the Maxwell stress divergence with the inherited sign; it derives only the necessary exchange identity. The B-page field is a smooth exact oscillatory curvature whose invariant coefficients tend to zero while its derivative scale diverges; it is not asserted to solve the constitutive equation or represent an observation.

## Inherited axiom context

The inspected geometry and integration suppliers record the background axiom $\mathrm{AC}_\omega$: every countable family of nonempty sets has a choice function. The nonlinear compact-action source uses the countable-partition interface; the local field, divergence, and counterexample calculations spend no additional choice. No full Axiom of Choice was used or added as a direct dependency in this batch. The existing transitive dependency metadata reaches def-axiom-of-choice through def-countable-choice, whose own definition item also discusses the implication from full Choice; that is a pre-existing supplier-metadata path, not a proof step used here. Resolving that metadata path would require an owner-scoped supplier review, so it is recorded without editing outside this batch.

## Scoped checks and readiness

- node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts <five item paths> --json: 5 items checked, 0 failing; every proof format passed without a proposed repair.
- node tools/physics-support/proof-layout.mjs <five item paths>: 5 items, 16 numbered steps, 0 defects.
- node tools/physics-support/rendercheck.mjs <five item paths and two page paths> --json: 7 files checked, 0 errors, 0 warnings.
- node tools/physics-support/depcheck.mjs --items-file /tmp/physics-b26-item-scope.json --json: focused item/page checks passed with 0 errors or warnings; dependency closure 1,312 items across 280 pages.
- node tools/physics-support/content-policy.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-26.pages.json: 5 scoped items, 0 errors, 0 warnings.
- node tools/physics-support/manifest-deps.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-26.pages.json: 5 items, 0 missing deps arrays, 0 errors.
- Pair-scoped item dependency calculation: 5 items, maximum level 2, 0 errors.
- Pair-scoped proof-contract-coverage in a temporary validation root: 5 items, 5/5 proof-bearing items covered, 0 errors.
- node tools/physics-support/coverage-checklist.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-26.coverage.json --json: 1 A page, 19 harvested results, 0 errors, 0 warnings.
- node tools/physics-support/source-fetch-check.mjs --coverage research/physics-non-fluid-129-2026-10-21-r2-batch-26.coverage.json --stamp: 4/4 full-text PDFs verified and stamped; 4 newly stamped, 0 failures, 0 drops. A subsequent check-mode run also passed 4/4.
- step1-decisions.mjs record was run without --owner for all five items in supplier-first order. A fresh loadStep1Record/step1Decision pass confirms 5/5 records are current and ready; these are authoring-readiness records, not independent acceptance.
- node tools/physics-support/batch-dependency-levels.mjs check --run physics-non-fluid-129-2026-10-21-r2 reports the shared run-level input stale after this manifest was populated: Stale batch dependency levels; recompute before authoring. The graph read before authoring places batch 26 at level 1 after batch 20; the pair-scoped item-level calculation confirms levels 0/1/0/1/2. The shared run graph remains unchanged for the drained owner join to recompute.
