# Batch 38 authoring notes

Run: `non-ml-math-remaining-81-2026-10-18`  
Pair: PA-07, `heisenberg-and-algebraic-weyl-algebras`  
Scheduling input: `7096b1bbc6f2d70796b6d63080bb4b0fc6e781f6a5e4da539963fbb746842903`  
Assigned run dependency level: 1; prerequisite batch: 32.

## Plan and design reconciliation

The current `plan-spec.json`, the PA-07 row in `plan-physics-algebras-track.md`, and the full Heisenberg/Weyl design agree on the A/B page IDs, category, order, title, and page-level `requires` route. The original proposed-page contract fixes the standard normalization at `A_n(k)=W_n(k;1)` and asks that the central parameter be stated separately. The authored definition does this with `W_n(k;hbar)` and `A_n(k):=W_n(k;1)`, using the convention `[P_i,X_j]=delta_ij Z` and `[p_i,x_j]=hbar delta_ij 1`.

The Weyl basis proof keeps the supplied PBW theorem's ordered-basis hypothesis explicit, proves the central specialization, constructs maps in both directions, and gives a terminating rewrite system with its same-type and mixed critical pairs. It does not import Dumas's exercise or Etingof's unproved Koszul deformation principle. The trace obstruction is stated only for nonzero `hbar` in characteristic zero; the truncated module is explicitly in characteristic `p`.

The original third PA-07 claim requires a real integration/domain proof, not only a warning or a later-page deferral. Owner repair now adds `lem-common-domain-commutator-integrates-to-weyl-relations` on this A page. It specifies a finite self-adjoint family, a common invariant graph core, scalar commutators, and graph-differentiable functional-calculus unitary orbits. The full proof derives conjugation on the core, equality of the closed operators and their exact domains, the pairwise Weyl relation by exact Stone generator comparison, and the finite-dimensional Weyl cocycle. The standard Heisenberg block gives the stated regular unitary relation and the correctly normalized algebraic A_n(C) action on the invariant domain. This closes the original mathematical obligation under explicit sufficient regularity hypotheses; it does not assert that bare common invariant density suffices. AC and CC are carried explicitly. PA-08 reuses the exact lemma when its hypotheses have been established in the selected model and retains all its own universal-completion, existence/uniqueness and failure-example obligations. The pre-repair deferral remains archived in `research/non-ml-math-remaining-81-2026-10-18-owner-weyl-bridge-placement/archive/`.


The plan declares PA-01 (`algebraic-representation-and-tensor-symmetry-map`) as a page-level prerequisite. At the latest handoff, its batch-32 manifest and A page contain `def-unital-associative-algebra-representation` and `thm-associative-algebra-representations-are-unital-modules`; both current item bodies were inspected. They remain draft items. The original placement inventory calls page `requires` a planning-order route. No PA-01 item is a logical dependency of this pair; actual item dependencies name their direct suppliers. The page-level cross-batch record remains `open` for owner reconciliation, with current disk evidence in `batch-38.cross-batch-dependencies.json`.

## Inventory and dependency levels

The repaired manifest contains eight A-page items and two B-page examples (well under the 100-item cap). The original nine-item scoped calculation gave the levels below; the added bridge has level 1 and the remark remains level 3:

- Level 0: `def-heisenberg-lie-algebra`, `def-polynomial-weyl-algebra`, `lem-trace-of-commutators-of-square-matrices-is-zero`.
- Level 1: `lem-common-domain-commutator-integrates-to-weyl-relations`, `lem-heisenberg-bracket-defines-lie-algebra`, `thm-no-nonzero-finite-dimensional-weyl-modules-in-characteristic-zero`, `ex-truncated-polynomial-weyl-module-in-characteristic-p`.
- Level 2: `thm-polynomial-weyl-algebra-normal-ordered-basis`.
- Level 3: `rem-algebraic-weyl-modules-do-not-automatically-exponentiate`, `ex-polynomial-differential-representation-of-weyl-algebra`.

Exact `deps`, `justified_by` edges, and labels are in `batch-38.pages.json`. The PA-01 page route is reading context. The added PA-07 bridge is a dependency only of its explanatory remark, and its external Stone/spectral suppliers do not raise its batch-local level above 1.

## Supplier and source record

The full current Statement/Proof of `thm-poincare-birkhoff-witt` and its direct supporting items were read. Its supplied basis/order hypothesis is met by the explicit finite Heisenberg basis, and the theorem has no characteristic restriction. The current definitions/proofs of the tensor algebra, generated two-sided ideals, quotient rings, Lie algebras, modules, traces, and polynomial rings were also inspected for the uses made here. Proof contracts quote exact current supplier excerpts. The normal-form proof separates generated-ideal and quotient-ring facts as F7/F8 so their uses are auditable.

Three complete source bodies were fetched, inspected at the full relevant sections, and stamped; no retrieval failed:

- François Dumas, *Noncommutative Invariants*, §§1.3.1, 2.1.1, 3.2.1, complete 103-page PDF.
- Pavel Etingof, *Lectures on Calogero-Moser Systems*, Lecture 8 §§8.2–8.4, complete 74-page notes. The unproved Theorem 8.5/Koszul deformation principle is out of scope and not imported.
- Sheldon Axler, *Linear Algebra Done Right*, 4th ed., §8D Theorem 8.49 and proof, complete 404-page textbook PDF.

URLs, exact locators, read extents, hashes, source-result dispositions, and item-specific arguments/dependencies are recorded in `batch-38.source-coverage.json`, `batch-38.coverage.json`, and `batch-38.source-evidence.json`.

The coverage harvest contains 12 results: four canonical claims are scaffolded; six source results are absorbed inline into the local definitions/proofs; Etingof's unproved Theorem 8.5 is out of scope; the analytic bridge is deferred to PA-08 with a specific reason and destination. `coverage-checklist --require-destination` therefore reports its advisory low-yield warning (4/12 marked `included`); it reports no errors. Alpha should confirm the declined/deferred source dispositions at independent review.

## Scoped checks

Recorded command results after the last item edits:

- `precheck.mts` on the six proof-bearing items: 6/6 passed.
- `proof-contract.mjs ... --strict`: 9/9 checked, zero errors/warnings.
- `proof-layout.mjs` on all nine changed items after final edits: 9 items, 25 proof steps, zero defects.
- `content-policy.mjs` on the batch manifest: 9 items, zero errors/warnings.
- focused `depcheck.mjs` on the nine manifest items and their page/prerequisite closure: zero errors/warnings; 232 prerequisite items and 57 prerequisite pages checked.
- `rendercheck.mjs` on the nine items and two page files after final edits: 11 files, zero errors/warnings.
- scoped `dependencyLevels` on the batch manifest: nine items, no errors; levels as above.
- `source-fetch-check.mjs --stamp`: 3/3 sources fetch-verified and 3/3 resolved; the final repeat newly stamped none.
- `coverage-checklist.mjs ... --require-destination`: zero errors, one low-yield advisory described above.

The read-only run-level `batch-dependency-levels.mjs check --run non-ml-math-remaining-81-2026-10-18` fails before recomputation with `Duplicate item lem-it-quantum-relative-entropy-support-regularization`. The ID is claimed by both batch-21 and batch-22 manifests. Existing owner evidence in `research/non-ml-math-remaining-81-2026-10-18-owner-qre-duplicate/repair.json` is expressly proposal-only and says to wait for genuine native writer drain and owner reconciliation before editing canonical files. The current autopilot snapshot reports no in-flight dispatch, but the proposal repair remains unapplied. Batch 38 did not edit either manifest or the shared scheduling artifact.

Autopilot status recomputed from `.autopilot/non-ml-math-remaining-81-2026-10-18` still reports stage `1-scaffold` blocked by this same duplicate, with no in-flight dispatch. The required `step1-decisions.mjs record` command was attempted for `def-heisenberg-lie-algebra`; it fails at the same duplicate-item check while loading the run snapshot, before writing a record. Therefore this handoff has no machine-readable readiness decisions for any of the nine items. The owner must reconcile the batch-21/22 duplicate through the existing owner process, then recompute and record readiness. No `--owner` flag was used.

## Handoff escalations

1. **PA-07 analytic bridge resolved locally:** The new common-core lemma supplies original claim 3 without deferring an established proof obligation to PA-08. Its conditional interface and focused consumer disposition are in the owner repair record. PA-08's independent rich claims are unchanged.

2. **Readiness tool blocker:** The run snapshot currently rejects duplicate ownership of `lem-it-quantum-relative-entropy-support-regularization` in batch 21 and batch 22. Existing owner QRE evidence says its three-row ownership repair remains proposal-only pending drain and owner reconciliation. Although the current autopilot snapshot has no in-flight dispatch, the owner must confirm and apply the canonical repair through the existing process before this batch's hash-bound readiness receipts can be recorded.
3. **Source-disposition review:** The coverage checker leaves one advisory asking Alpha to confirm the 12 harvested result dispositions; all results have a recorded disposition and all deferrals have reasons/destinations.

These authoring records are not independent mathematical approval or publication evidence.

## Owner focused repair checks

The earlier nine-item check counts and native duplicate/readiness reports above are historical author evidence, retained without a new global-state assertion. The current ten-item manifest adds the bridge; the owner performed focused checks on the edited carriers and their exact contract/dependency context, recorded in `research/non-ml-math-remaining-81-2026-10-18-owner-weyl-bridge-placement/repair.json`. No readiness decision, acceptance stamp, global gate or commit is claimed. Batch 32 has completed native authoring of five draft items across its A/B pair; PA-07 depends on none of those item IDs. Its page-reading route is distinct from the repaired mathematical gap and remains subject to root readiness reconciliation.
