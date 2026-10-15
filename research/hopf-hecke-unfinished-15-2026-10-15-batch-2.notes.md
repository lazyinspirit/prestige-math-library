# Batch 2 authoring notes — Comodules, Matrix Coefficients, and Coalgebra Duality

## Scope and plan comparison

Run: \`hopf-hecke-unfinished-15-2026-10-15\`; batch 2; page pair HH-3 at orders 1692–1693. The scheduled batch level is 1, after batch 1; the recorded scheduling input is \`58cf41778ca737ce2c4e0a45aba6eaf8476b4c24fb4e64f5f1794e1d28217856\`.

The complete HH-3 section in \`research/plan-hopf-hecke-algebras-track.md\` and both HH-3 entries in \`research/plan-spec.json\` agree on page IDs, title, category, order, prerequisites, six proposed A claims, and the three example obligations. There is no plan/design conflict. The controlling owner direction replaces the stopped 75-pair run scope; no prior-run execution or review is adopted, no published content was edited, and the shared plan/runtime/verdicts were left untouched.

## Authored inventory and levels

At the first inventory snapshot the HH-2 page manifest and supplier carriers were absent, so levels were drafted from the controlling inventory. The current HH-2 manifest and supplier bodies are now present; the HH-2/HH-3 projection was recomputed from the current manifests. External published items do not raise levels.

| Item | Page | In-run suppliers | Level |
|---|---|---|---:|
| \`def-hh-right-comodule-and-comodule-morphism\` | A | \`def-hh-coalgebra-and-coalgebra-map\` (batch 1, level 0) | 1 |
| \`def-hh-dual-algebra-and-rational-module\` | A | \`def-hh-coalgebra-and-coalgebra-map\` (batch 1, level 0) | 1 |
| \`lem-hh-comodule-kernels-quotients-and-coefficient-identities\` | A | \`def-hh-coalgebra-and-coalgebra-map\`, \`def-hh-right-comodule-and-comodule-morphism\` | 2 |
| \`lem-hh-every-comodule-element-lies-in-a-finite-subcomodule\` | A | \`def-hh-right-comodule-and-comodule-morphism\` | 2 |
| \`thm-hh-comodules-and-rational-dual-modules\` | A | \`def-hh-coalgebra-and-coalgebra-map\` and both A definitions above | 2 |
| \`thm-hh-finite-algebra-coalgebra-duality\` | A | \`def-hh-dual-algebra-and-rational-module\`, \`def-hh-coalgebra-and-coalgebra-map\` | 2 |
| \`ex-hh-group-graded-spaces-as-comodules\` | B | \`def-hh-coalgebra-and-coalgebra-map\`, \`def-hh-right-comodule-and-comodule-morphism\` | 2 |
| \`cex-hh-infinite-dual-module-is-not-rational\` | B | \`def-hh-dual-algebra-and-rational-module\`, \`def-hh-right-comodule-and-comodule-morphism\`, \`def-hh-coalgebra-and-coalgebra-map\` | 2 |
| \`ex-hh-two-dimensional-comodule-coefficient-matrix\` | B | \`def-hh-right-comodule-and-comodule-morphism\`, \`lem-hh-comodule-kernels-quotients-and-coefficient-identities\`, \`lem-hh-finite-comatrix-coalgebra-exists\` (batch 1, level 1) | 3 |
The direct dependency arrays and labels are in the batch manifest. The two A definitions were authored before their level-2 consumers. The B matrix example uses the now-present n=2 finite-comatrix supplier; its statement and proof were checked directly.

## Supplier handoff and affected claims

The first inventory snapshot found the HH-2 item carriers absent, so drafting used the declared interfaces and recorded the exact affected claims. At final reconciliation both supplier carriers and the HH-2 A page are now present as drafts; their actual bodies were inspected, and the interface checks are recorded as `verified` in `research/hopf-hecke-unfinished-15-2026-10-15-batch-2.cross-batch-dependencies.json`.

- `def-hh-coalgebra-and-coalgebra-map` explicitly states a k-vector space, linear `Δ` and `ε`, coassociativity with the associator, both counit identities through unit maps, and coalgebra maps preserving both structure maps. Its statement matches every direct HH-3 use. It is also a transitive prerequisite of `lem-hh-every-comodule-element-lies-in-a-finite-subcomodule` through the right-comodule definition.
- `lem-hh-finite-comatrix-coalgebra-exists` states the basis `c_ij`, formulas `Δ(c_ij)=Σ_l c_il⊗c_lj` and `ε(c_ij)=δ_ij`, and proves linear extension, coassociativity by finite reindexing, and both counit identities. This is exactly the n=2 supplier required by the B matrix example.

These records verify the current supplier text and mathematical interfaces only; they do not imply independent approval of the HH-2 drafts. The batch-2 carriers now use the actual supplier wording rather than treating either interface as unavailable.

## Axiom and convention record

- The kernel/image/quotient lemma uses AC through the published tensor-injection and quotient-kernel supplier; its kernel lift and induced image/quotient structures are proved locally.
- The finite-subcomodule lemma states AC for arbitrary-dimensional C through coefficient separation and tensor injection. When C is finite-dimensional, a separate finite-coordinate proof is given without AC.
- The rational dual-module theorem states AC for arbitrary C through separation of finite tensors by all functionals. It separately proves the finite-dimensional-C case, including uniqueness, the coaction axioms, and the morphism correspondence, without AC.
- Finite algebra-coalgebra duality uses only finite-dimensional bases and tensor duality; no AC is used.
- The declared evaluation convention is \`(f⊗g)(a⊗b)=f(a)g(b)\`. Baker's notes use a reversed dual-factor identification in their discussion; the finite tensor supplier's convention controls this batch, and the A theorem states the switch warning.

## Source retrieval and reading

The coverage file records all inspected named results, locators, supported items, dispositions, and the failed-source resolution history.

- UCSD Math 207A Hopf Algebras lecture notes (64-page full PDF): fetched and stamped; used for convolution, finite duality, group-like and matrix coalgebras, comodules, and rational modules.
- William Chin's 18-page survey: fetched and stamped; used for right comodules, finite coefficient spaces, and comatrix identities.
- Andrew Baker's 55-page course-note PDF: fetched and stamped; used for convolution and finite/restricted duality.
- Radford's Scribd mirror: the full-text checker returned at most 1,590 extracted HTML characters after the initial attempt and five retries, below its 2,048-character threshold. It is marked dropped as a fetch-verified source only; its source history and per-item alternative arguments remain in the coverage record. This did not remove mathematical coverage.

The active source records have fetch stamps. The final source-fetch check passed with the documented Radford drop; its history and alternatives are synchronized to the final batch dependency arrays.

## Capacity, placement, checks, and readiness

The A page has 6 items and the B page has 3 examples/counterexamples, below the 100-item cap. Page placements follow the intended HH-3 A/B split.

- `proof-contract.mjs ... --strict`: 9/9 items checked, 0 errors, 0 warnings. The contracts include exact supplier-section excerpts, every phase step and its inputs, and all eight boundary dispositions.
- `content-policy.mjs` on the batch-2 manifest: 9 scoped items, 0 errors, 0 warnings.
- `coverage-checklist.mjs ... --require-destination`: 1 A page, 27 harvested results, 0 errors, 0 warnings.
- `source-fetch-check.mjs --coverage ...`: 3/4 sources fetch-verified; 4/4 resolved, including one documented Radford drop.
- Scoped `precheck.mts`: 7 proof-bearing items checked, 0 failures. Scoped `proof-layout.mjs`: 9 items, 52 numbered steps, 0 defects.
- Scoped `depcheck.mjs --items-file`: 9 focused items, 0 errors, 0 warnings; dependency closure 269 items across 43 pages.
- HH-2/HH-3 dependency projection: 4 A/B pages, 21 items, no dependency-level errors. HH-3 levels are 1 for the two definitions, 2 for the remaining A results and first two B items, and 3 for the two-dimensional matrix example. All nine batch-2 A/B placements, item dependencies, level labels, and cross-batch rows match their carriers; all cross-batch rows are `verified`.
- `step1-decisions.mjs record` produced `ready` records with `owner:false` for all nine items. Scoped hash validation found all nine records closed against current item and dependency inputs.

These are authoring and structural readiness records. They are not independent approval.
