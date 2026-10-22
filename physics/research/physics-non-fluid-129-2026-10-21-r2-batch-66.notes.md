# Batch 66 — authoring and dependency notes

Run: `physics-non-fluid-129-2026-10-21-r2`  
Pair: `qftx-on-shell-amplitudes` / `qftx-on-shell-amplitudes-examples`  
Authoring date: 2026-10-21

## Plan and detailed design

The owner direction file `research/physics-non-fluid-129-2026-10-21-r2-owner-authoring-direction.md` is absent. The plan spec and detailed QFT track agree on the A/B IDs, titles, category, mathematics library, order, and page prerequisites: `qft-mx02`, `qft-mg03`, and `qft-mf03` for A; A for B. The plan spec leaves the item inventories empty, while the detailed prose scaffold specifies three A interfaces and one B counterexample. No page-level plan conflict was found.

The A inventory adds `lem-qftx-spinor-factorization`, a local mathematical supplier for the rank-one factorization and its exact little-group uniqueness. This is necessary to justify the spinor variables before the recursion and polarization consumers use them; it stays on the assigned A page and does not change shared plans or another pair's ownership.

The detailed prose scaffold points `prop-qftx-helicity-polarization-ward` to `lem-qft-qed-tree-ward` for a tree-current Ward input. I read the current published item and its complete proof. Its current statement covers finite rational Dirac matrices with mass parameter `mu > 0`, real momenta on the future shell, the displayed external Dirac bilinear currents, and finite-chain telescoping with endpoint terms retained. It does not prove conservation for every complex null on-shell tree current. The authored proposition therefore states and proves reference independence conditional on the exact current condition `h(p,J)=0`; it does not claim that this upstream lemma establishes the condition in the wider complex-momentum setting. The lemma is not an item-level dependency because no proof step uses it. The assigned page still retains its planned `qft-mg03` page requirement. This scope limitation is resolved locally and does not leave a missing premise in the authored conditional statement; no owner escalation is raised.

## Supplier inspection and actual interface

- `qft-mx02` is an existing published mathematics page. Its summary fixes the QFT finite-matrix/example context and warns that its formal tree coefficients do not construct a continuum S-matrix. No item-level result from it is used in the four authored arguments; the page remains a planned page prerequisite.
- `qft-mg03` is an existing published mathematics page. I inspected its current `lem-qft-qed-tree-ward` and its direct/transitive mathematical inputs, including `def-qft-dirac-projections`, `def-qft-scalar-mass-shell`, `def-countable-choice`, and `lem-qft-qed-formal-matrix-ward`, plus the latter's finite/formal definitions. Its real, positive-mass, finite-matrix interface is not widened in this batch.
- `qft-mf03` is an existing published mathematics page. I inspected `def-qft-dirac-projections` and its `justified_by` supplier `lem-qft-dirac-projection-matrices` at their current carriers. The definition's direct closure is `def-qft-fock-and-test-spaces`, `def-countable-choice`, `def-qft-scalar-mass-shell`, `def-sr-affine-minkowski-model`, `def-inertial-frame-and-inertial-chart`, and `def-sine-and-cosine-by-power-series`; those definitions and the Dirac matrix lemma's actual statement/proof were read. The spinor-helicity definition copies only the explicit `(-+++)` coordinate and `h=-eta` Pauli/Clifford convention. The operator, separability and Fock conclusions (including the lemma's stated Countable Choice use) are not used in this batch. The rank-one argument chooses one of two matrix columns and uses no choice principle.
- The external page closure through these three pages contains 213 page IDs; every current carrier is present and `status: published`. Their direct `requires` edges are preserved in the plan and page manifest. This checks page availability only; no unlisted page item is promoted to a premise of the local proofs. The run dependency-level input places batch 66 at level 0 with no in-run page suppliers. No external supplier is treated as a same-run carrier or as an independent proof approval.

Direct item dependencies and recomputed levels:

| Item | Direct `deps` | In-run level | Placement |
|---|---|---:|---|
| `def-qftx-spinor-helicity` | `def-qft-dirac-projections` (external) | 0 | A |
| `lem-qftx-spinor-factorization` | `def-qftx-spinor-helicity` | 1 | A |
| `thm-qftx-rational-bcfw-residue` | `def-qftx-spinor-helicity`, `lem-qftx-spinor-factorization` | 2 | A |
| `prop-qftx-helicity-polarization-ward` | `def-qftx-spinor-helicity`, `lem-qftx-spinor-factorization` | 2 | A |
| `cex-qftx-bcfw-contact-boundary` | `thm-qftx-rational-bcfw-residue` | 3 | B |

All item dependencies are mathematical. The A and B page inventories, item dependencies, and roles are mirrored in `physics-non-fluid-129-2026-10-21-r2-batch-66.pages.json`. Since no logical edge connects this batch to another batch in the current run, `physics-non-fluid-129-2026-10-21-r2-batch-66.cross-batch-dependencies.json` is the empty JSON array. External item/page prerequisites and their inspected interfaces are recorded here, not entered as unsupported cross-batch review rows.

## Source reading and retrieval

The independent book and primary-paper treatments, plus a separate full lecture-note treatment, are recorded in `physics-non-fluid-129-2026-10-21-r2-batch-66.coverage.json` with URLs, exact locators, per-item support/disposition, and fetch stamps:

- Elvang and Huang, *Scattering Amplitudes*, book-length full-text PDF. I read §§2.2–2.4, 2.6 and 3.1–3.3 for null spinors, little-group scaling, the scalar contact coefficient, reference-spinor polarizations, Schouten, the two-line shift, rational tree poles, factorization, and the separate large-z condition. The local proof replaces the contour theorem with partial fractions and retains the source's explicit model-specific caveats.
- Marzolla, *The four-dimensional on-shell three-point amplitude in spinor-helicity formalism and BCFW recursion relations*, complete lecture-note PDF. I read §§2.1, 3, 4.1–4.2 and the general argument in §5 for the complex Pauli map, massless little-group scaling, analytic continuation, factorization channels, and the residue at infinity. Its detailed applications are not imported as proved results.
- Britto, Cachazo, Feng, and Witten, *Direct Proof of Tree-Level Recursion Relation in Yang-Mills Theory*, original full-text paper. I read §§2–3.1 for the matching two-line shift, rational simple propagator poles, on-shell factorization residues and recursion. Its large-z proof is specific to Yang-Mills and the stated helicity pairs, using MHV-diagram or Feynman-diagram arguments; that estimate remains a hypothesis in the local theorem.

`source-fetch-check --stamp` fetched and verified all three complete PDF bodies; the subsequent check reported 3/3 fetch-verified, with zero failures or documented drops. No recovery retry or `source_resolution` disposition was needed. The prior QFT source ledger remains unchanged.

## Scope and proof-status limits

The tree identity is a conditional rational-function theorem. It assumes rationality, regularity at zero, distinct simple nonzero finite poles, decay at infinity, and—only for the recursion substitution—the exact residue-factorization formula. It does not prove any of those properties for a chosen Lagrangian or model. The B counterexample is a formal nonzero scalar contact coefficient; it is not a complete interacting theory or empirical claim. The polarization proposition proves the linear-algebraic reference shift and assumes current conservation. None of the items asserts loop integration, a nonperturbative S-matrix, convergence of perturbative gravity, or an experimental result.

All five items are new drafts on the assigned pages. The A page has four items and the B page one example, below the 100-item page cap. No dependency cycle or missing logical input was found after making the conditional interfaces explicit.

## Final scoped checks and readiness

- Manifest mirror inspection matched the five item IDs, statements, dependency lists and roles, levels, domain/library/scope fields, and page inventories/requirements to their current carriers. The cross-batch dependency file parses as the required empty JSON array; there are no in-run cross-batch edges for this batch.
- `content-policy` on this manifest: 5 scoped items, 0 errors, 0 warnings.
- `depcheck --items-file` for these five items: selected item/page checks and prerequisite-cycle checks passed; the selected closure covered 1,276 items and 253 pages.
- `rendercheck` on five item files and two page files: all 7 passed YAML and KaTeX/render checks.
- Normative `precheck` on the four proof-bearing items: 4 checked, 0 failing.
- `proof-layout` on all five assigned items, including the non-proof definition: 5 items, 11 proof steps, 0 defects.
- Strict proof-contract validation: 4/4 checked, 0 errors, 0 warnings.
- Source fetch-stamp check: all 3/3 sources remain fetch-verified; no drops are recorded.
- Scoped item dependency levels recompute to 0 (`def-qftx-spinor-helicity`), 1 (`lem-qftx-spinor-factorization`), 2 (`thm-qftx-rational-bcfw-residue`), 2 (`prop-qftx-helicity-polarization-ward`), and 3 (`cex-qftx-bcfw-contact-boundary`). The recorded batch schedule is level 0 with no in-run supplier batches.
- `loadStep1Record` and `step1Decision` confirm all five assigned items have current `ready` records with closed hashes and their examined dependency sets. These are Step 1 authoring-readiness records, not independent approvals.

## Run-wide checks that remain blocked outside this batch

- `proof-contract-coverage.mjs` over the whole run could not validate the full frontier because another batch has an empty or invalid page inventory: `emx-paraxial-optics`. The batch-66 strict contract check above passes independently.
- Full-run batch dependency-level recomputation stopped while loading another in-progress manifest: `research/physics-non-fluid-129-2026-10-21-r2-batch-85.pages.json` contains bare string item IDs in `csm-frontier-probability-interfaces` (entries 0–7 and its B-page entry 0), producing `Duplicate item undefined`. Batch 66's scoped item levels and recorded scheduling level pass; the unfinished manifest was left untouched.
