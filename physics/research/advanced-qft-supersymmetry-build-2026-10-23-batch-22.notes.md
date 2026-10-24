# Batch 22 — Compact Non-Abelian Finite-Lattice Regulator

## Plan and design comparison

Read the complete assigned design at `research/plan-advanced-qft-and-supersymmetry-track.md` lines 303–315 and compared its A/B rows with `research/plan-spec.json` lines 262417–262442. The page IDs, A/B pairing, titles, category, physics library, order 978, and A-page requirement `qftx-nonabelian-lattice-mathematics` agree. The design scopes a finite compact-group regulator, finite-volume observables, a physical slice sector, and a transfer convention without a continuum-limit claim. No design/plan-spec conflict was found. The plan-spec item arrays are empty and the assigned future inventory names the physical postulate; two local mathematical prerequisites and the B example were added to complete the required argument. The proposed inventory's lack of explicit mathematical edges is resolved by recording actual dependencies below; shared plans and dependency snapshots were not changed.

The specialist gauge note rejects obtaining a non-Abelian model by relabeling the compact U(1) rotor. The postulate adopts the finite pure-SU(2) Wilson regulator directly. It uses the defining two-dimensional trace, has no dynamical matter, and asserts no confinement, screening, Lorentzian spectrum, or continuum result.

## Dependency inventory and authoring order

The run-wide item checker computes levels 0, 2, 3, and 4 for the four owned items. `def-qftx-nonabelian-lattice-gauge-data`, the direct batch-6 item input, is level 1 in its own batch. The assigned batch level remains 22 at level 2, requiring batch 6.

1. `lem-qftx-su2-compact-nonabelian-group` — level 0. Proves compact Hausdorff non-Abelian Lie-group structure of the displayed matrix SU(2), its smooth defining representation, matrix parametrization, and normalized trace bound. Dependencies are `def-countable-choice`, `def-lie-group`, `ex-unitary-and-special-unitary-lie-groups`, and `thm-heine-borel-rn`. AC_omega is needed by the imported SU(n) Lie-group construction; compactness and matrix calculations use no choice.
2. `lem-qftx-su2-wilson-transfer-well-defined` — level 2. From the actual batch-6 data interface, it proves positive finite partition function and bounded-observable integrals, a measurable square-integrable transfer kernel, contraction norm bound, range in the closed nonzero group-invariant slice sector, and cyclic finite-volume factorization. Direct dependencies are `def-axiom-of-choice`, `cor-normalized-haar-probability-on-a-compact-group`, `thm-l-two-kernels-give-hilbert-schmidt-operators`, `thm-tonelli-theorem-for-sigma-finite-product-spaces`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `def-qftx-nonabelian-lattice-gauge-data`, and the local SU(2) lemma. The exact face-potential, Borel measure, product, orientation, gauge-action, and holonomy hypotheses are recorded in Facts [F3].
3. `post-qftx-nonabelian-lattice-regulator` — level 3. Adopts the finite periodic four-dimensional pure-SU(2) Euclidean Wilson model, units, link orientation, vertex action, plaquette/action conventions, Haar product measure, observables, slice sector, and transfer kernel. It records the finite lattice-data definition as a formulation prerequisite and uses the local well-definedness theorem for mathematical existence, closure, and finite-integral assertions. Full AC is explicit and supplies AC_omega to the lattice and Lie-group interfaces.
4. `ex-qftx-su2-wilson-lattice-transfer-sector` — level 4. At `Ns=Nt=3`, verifies the all-identity configuration, loop gauge invariance and bound, finite expectation, and transfer-sector/cyclic-integral conclusions. Direct dependencies are the physical postulate, the local well-definedness and SU(2) lemmas, full AC, and normalized Haar probability.

## Batch-6 interface and readiness audit

The batch-6 carriers and current readiness records are now present. The actual `def-qftx-nonabelian-lattice-gauge-data` statement supplies a finite oriented two-complex, a compact noncommutative finite-dimensional Lie group and smooth unitary representation from a gauge datum, oriented link variables with inverse reverse links, vertex gauge action, ordered face holonomy, a chosen normalized bi-invariant Borel probability and finite product, continuous conjugation- and inverse-invariant face potentials, finite action/observable conventions, and the full-volume invariant Gauss sector. The consuming SU(2) action meets those group, measure, orientation, and potential hypotheses. The finite-slice Haar L2 sector is defined separately; it is not identified with the full-volume Boltzmann L2 sector.

Immediately before recording batch-22 readiness, `loadStep1Record` and `step1Decision` were rerun. All eight items on the required batch-6 A page have current `ready` records, including `def-qftx-nonabelian-lattice-gauge-data` and its supporting `lem-qftx-lattice-data-well-defined`. The transitive batch-2 `def-qftx-nonabelian-gauge-data` record is also current and ready. Their actual statements and the complete supporting proof were inspected. Draft status and `verification.precheck: pending` do not block these current readiness records. The page itself is not an item-level readiness-record target; the page edge was checked from its complete current manifest and all eight ready item carriers.

I also inspected batch-6 `def-qftx-su2-wilson-plaquette-measure` and `lem-qftx-su2-one-plaquette-average`: their beta/trace convention matches, and the latter proves the round S3 measure is bi-invariant. The present proof chooses normalized Haar directly, so those one-plaquette carriers are not direct dependencies.

The direct cross-batch rows in `batch-22.cross-batch-dependencies.json` are the A page to `qftx-nonabelian-lattice-mathematics`, the local finite-lattice lemma to `def-qftx-nonabelian-lattice-gauge-data`, and the postulate to that same item. All three are `verified` for their scoped interface checks; this does not assert independent proof acceptance. The batch-6 page transitively requires batch-2 `qftx-gauge-geometry`. The group datum item is ready, but this regulator makes no connection or curvature claim, so the separate principal-connection arguments are not imported as premises. This transitive observation is recorded here rather than as an additional cross-batch review row. Existing compact U(1) rotor items were inspected only as boundary context and are not dependencies.

## Mathematical prerequisite audit

The current supplier statements and proofs were inspected before use. `thm-heine-borel-rn` proves closed-and-bounded compactness in finite-dimensional Euclidean space without a choice principle. `ex-unitary-and-special-unitary-lie-groups` supplies the standard finite-dimensional real Lie-group structures on U(2) and SU(2); its AC_omega hypothesis is explicit. `cor-normalized-haar-probability-on-a-compact-group` requires full AC and supplies unique normalized left Haar probability, right invariance, and inversion invariance. `thm-l-two-kernels-give-hilbert-schmidt-operators` requires full AC and sigma-finite factor measures and supplies the bounded integral operator and Hilbert-space framework. `thm-tonelli-theorem-for-sigma-finite-product-spaces` supplies measurable sections and iterated integration for nonnegative product-measurable functions. `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique` supplies the binary product measure and rectangle formula; the finite iteration is written explicitly in the proof. Full AC implies the AC_omega input carried by the lattice and Lie-group suppliers. The local proofs add no unstated measure or smoothness assumptions.

## Source reading, search, and disposition

Two independent full treatments were read for the A-page scope: Creutz's open-access textbook and Tong's full lattice-gauge lecture-note chapter. Exact URLs, locators, read extents, item mappings, support, and limitations are in `batch-22.coverage.json`.

- Creutz, *Quarks, Gluons and Lattices*, Chapter 7, printed pp. 34–38: directed links and inverses, plaquette Wilson action, finite gauge transformations, and finite Euclidean integration.
- Creutz, Chapter 8, printed pp. 39–43: SU(2) parametrization and compact-group Haar integration conventions.
- Creutz, Chapter 15, printed pp. 101–107: transfer construction, slice L2 link space, residual vertex transformations, and group-singlet Gauss sector. No time-continuum Hamiltonian limit is used.
- Tong, *Gauge Theory*, Chapter 4, §§4.2.1–4.2.3, printed pp. 206–215: non-Abelian links, gauge transformations, Wilson action, normalized Haar products, and finite Euclidean observables. These inspected sections are not cited as the transfer-sector proof.

A direct open of the Kogut 1979 review PDF mirror `https://scalettar.physics.ucdavis.edu/p219a/RevModPhys.51.659.pdf` returned HTTP 502. It was not selected and supports no item. Following that failure, the recorded searches were `Michael Creutz Quarks Gluons Lattices Chapter 7 Cambridge lattice gauge theory PDF` and `David Tong Gauge Theory Chapter 4 Lattice Gauge Theory pdf lattice gauge theory lecture notes`; they located the full Creutz and Tong alternatives, which were retrieved and inspected. The candidate failure is preserved in coverage `retrieval_history`; no active source is dropped or unresolved. `source-fetch-check` verified all 8 active source records.

## Scoped checks and readiness

Each item record is a Step-1 authoring-readiness disposition only; it is not independent review or acceptance.

- Source fetch check: 8/8 active sources verified.
- Coverage checklist: 2 pages, 19 harvested results, 0 errors, 0 warnings.
- Item levels: SU(2) lemma 0, finite-lattice lemma 2, postulate 3, example 4; no batch-22 level mismatch. The run-wide check exits 1 because 52 other scaffold pages have empty inventories; none of its errors names a batch-22 item.
- Shared batch dependency-level check: stale for the current full run graph. The shared snapshot was not modified; its owner must recompute it.
- Explicit-item proof layout: 4 items, 16 proof steps, 0 defects.
- Explicit-item precheck: 4/4 pass, including the postulate's nonproof structure.
- Strict proof contracts: 4/4 items checked, 0 errors, 0 warnings.
- Manifest/content-policy: 4 scoped items, 0 errors, 0 warnings.
- Render check: 6 item/page files pass KaTeX, delimiter, wikilink, and YAML checks.
- Focused dependency check: 4 items and 2 pages, 0 errors, 0 warnings; dependency closure 1,351 items and 262 pages.
- Step-1 records: all four assigned items are `ready`, owner=false, with current dependency hashes and examined supplier context.
