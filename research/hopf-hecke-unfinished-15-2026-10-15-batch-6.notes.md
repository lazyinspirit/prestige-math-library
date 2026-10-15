# Batch 6 authoring notes — Hopf Modules, Coinvariants, and the Fundamental Theorem

## Plan, design, and inventory

The controlling HH-7 design in `research/plan-hopf-hecke-algebras-track.md` §HH-7 agrees with the corresponding `plan-spec.json` rows on page IDs, A/B order 1700/1701, titles, category, companion, and the four declared A-page prerequisites. The design's required right-right convention, kernel-defined coinvariants, projection `P(m)=Σm₀S(m₁)`, explicit inverse maps, range-valued construction of β, functor-equivalence proof, examples, and warning that no bijective antipode is assumed are retained. No design/plan mathematical conflict was found. `plan-spec.json` has empty item arrays as page-level planning placeholders; the current-run batch-6 manifest holds the authored item inventory.

The item inventory, direct logical dependencies, and levels used before carrier authoring are:

| Item | Level | Direct `deps` |
|---|---:|---|
| `def-hh-right-right-hopf-module-and-coinvariants` | 3 | `def-hh-scalar-and-tensor-conventions`; `def-hh-right-comodule-and-comodule-morphism`; `def-hh-hopf-algebra-and-antipode`; `def-left-and-right-modules` |
| `lem-hh-coinvariants-form-a-subspace` | 4 | `def-hh-right-right-hopf-module-and-coinvariants` |
| `lem-hh-free-right-right-hopf-module` | 4 | `def-hh-right-right-hopf-module-and-coinvariants`; `def-hh-bialgebra-and-bialgebra-map`; `def-hh-scalar-and-tensor-conventions` |
| `lem-hh-hopf-module-coinvariant-projection` | 5 | `def-hh-right-right-hopf-module-and-coinvariants`; `lem-hh-coinvariants-form-a-subspace`; `def-hh-hopf-algebra-and-antipode`; `thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication` |
| `thm-hh-fundamental-theorem-of-hopf-modules` | 6 | `def-hh-right-right-hopf-module-and-coinvariants`; `lem-hh-coinvariants-form-a-subspace`; `lem-hh-free-right-right-hopf-module`; `lem-hh-hopf-module-coinvariant-projection`; `def-hh-hopf-algebra-and-antipode`; `thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication` |
| `lem-hh-coinvariants-of-free-hopf-module` | 5 | `def-hh-right-right-hopf-module-and-coinvariants`; `lem-hh-free-right-right-hopf-module`; `def-hh-coalgebra-and-coalgebra-map`; `def-hh-bialgebra-and-bialgebra-map` |
| `cor-hh-hopf-module-functor-equivalence` | 7 | `def-hh-right-right-hopf-module-and-coinvariants`; `lem-hh-coinvariants-form-a-subspace`; `lem-hh-free-right-right-hopf-module`; `thm-hh-fundamental-theorem-of-hopf-modules`; `lem-hh-coinvariants-of-free-hopf-module` |
| `ex-hh-regular-hopf-module-projection` | 7 | `def-hh-right-right-hopf-module-and-coinvariants`; `lem-hh-hopf-module-coinvariant-projection`; `thm-hh-fundamental-theorem-of-hopf-modules`; `def-bialgebra-counit-and-antipode` |
| `ex-hh-free-hopf-module-over-group-algebra` | 7 | `def-hh-right-right-hopf-module-and-coinvariants`; `lem-hh-free-right-right-hopf-module`; `lem-hh-coinvariants-of-free-hopf-module`; `lem-hh-hopf-module-coinvariant-projection`; `thm-hh-fundamental-theorem-of-hopf-modules` |
| `ex-hh-free-hopf-module-over-polynomial-hopf-algebra` | 7 | `def-hh-right-right-hopf-module-and-coinvariants`; `lem-hh-free-right-right-hopf-module`; `lem-hh-coinvariants-of-free-hopf-module`; `lem-hh-hopf-module-coinvariant-projection`; `thm-hh-fundamental-theorem-of-hopf-modules`; `def-bialgebra-counit-and-antipode` |
| `cex-hh-separate-action-and-coaction-fail-hopf-compatibility` | 4 | `def-hh-right-right-hopf-module-and-coinvariants`; `def-bialgebra-counit-and-antipode` |

All 11 manifest `deps` sets and `dependency_level` labels match their carrier frontmatter. The definition also has `justified_by: [lem-hh-coinvariants-form-a-subspace]`; that lemma depends on the definition, discharges the subspace property, and is not duplicated in the definition's `deps`. The A page contains seven items and the B page four; both are below the 100-item cap. The current checked batch-level artifact gives batch 6 level 5 and includes batches 2, 3, and 5 from the declared page prerequisites. It also includes batch 1 because `lem-hh-coinvariants-of-free-hopf-module` directly cites the batch-1 coalgebra definition. The level remains 5. The checked artifact input hash is `1853dc9c76664e05ec965d31c6679cb4e7fc2552f9568116ccb64b465e906798`; the dispatch recorded scheduling input `58cf41778ca737ce2c4e0a45aba6eaf8476b4c24fb4e64f5f1794e1d28217856`.

## Supplier inspection and mathematical checks

The actual relevant supplier bodies are present in their current-run manifests and were read, including complete proofs where used: batch 1 coalgebra definition (level 0); batch 2 right-comodule definition (level 1); batch 3 bialgebra definition and convolution lemma (level 1), Hopf definition (level 2), tensor-product coalgebra lemma (level 1), and anti-multiplication/anti-comultiplication theorem with its full proof (level 3); batch 5 module-category/tensor-action definition (level 2). The published scalar/tensor, module, and tensor-coherence suppliers were also inspected. The exact consumed statements and excerpts are in the item Facts & Assumptions, proof contracts, and `batch-6.cross-batch-dependencies.json`. These in-run carriers remain drafts; their presence and inspection do not assert independent review or acceptance.

The projection calculation uses the actual anti-comultiplication identity and both antipode equations. The fundamental theorem proves that β lands in `M^coH⊗H` through `(P⊗id)ρ`; it does not treat individual Sweedler summands as coinvariant. Both composites and action/coaction preservation are checked. No step uses `S⁻¹`, bijectivity of `S`, a basis for arbitrary vector spaces, or the Axiom of Choice. The polynomial example's binomial and alternating-sum arguments hold over every field characteristic; the `C₂` counterexample distinguishes its basis vectors in characteristic two as well.

## Sources and retrieval history

The A and B pages each have two independent full-text lecture-note treatments:

- Hans-Jürgen Schneider, *Lectures on Hopf Algebras*, §2, printed pp. 22–23, including the complete proof of Theorem 2.1: <https://www.famaf.unc.edu.ar/~andrus/papers/Schn1.pdf>.
- D. S. Drogalski, *Chapter 3: Hopf Algebras*, §3.6, printed pp. 42–44 (PDF pp. 43–46), including Definitions 3.34/3.37, Example 3.36, all four proof steps of Theorem 3.38, and Corollary 3.39: <https://mathweb.ucsd.edu/~drogalsk/207a-s20-lecturenotes.pdf>.

The complete relevant arguments were inspected. The B-page source records support the general regular/free Hopf-module construction; the basis, group-like, primitive, binomial, and projection calculations are proved locally. The earlier CiteSeerX Schneider URL returned HTTP 404; that attempt and the successful FaMAF-hosted recovery are preserved in `batch-6.coverage.json`. No source was dropped. Final source coverage reports 2 pages, 20 harvested results, 0 errors, and 0 warnings. `source-fetch-check --stamp` reports 4/4 source entries fetch-verified, with 0 newly stamped.

## Contracts, placement, and scoped checks

- Strict proof-contract validation: 11/11 items checked, 0 errors, 0 warnings.
- Scoped `precheck`: 10 proof-bearing items checked, 0 failures; the definition has no phase proof.
- Explicit `proof-layout`: 11 items, 37 steps, 0 defects.
- Coverage checklist: 2 pages, 20 harvested results, 0 errors, 0 warnings.
- Focused `depcheck`: 11 selected items and 2 selected pages; 297-item/281-page dependency closure; 0 errors and 0 warnings.
- Run-wide item dependency-level check: 138 items across 30 pages, maximum level 14; pass. No assigned item has a level mismatch.
- Batch dependency-level check: 15 batches, maximum level 7; pass.
- `step1-decisions`: all 11 assigned items have current `ready`, `owner:false` records. The run-wide check remains open for other items (54/138 ready); the assigned 11 all verify current. These records describe Step-1 authoring readiness, not independent approval.

The run-wide proof-contract-coverage command stops before validating this batch because another frontier item is missing: `thm-hh-cyclotomic-murphy-basis-and-cellularity`. The assigned strict proof-contract validator passes independently. Neither outside-batch issue was edited.
