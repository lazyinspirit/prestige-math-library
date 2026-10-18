# Batch 81 authoring notes — Frobenius algebras and oriented two-dimensional sewing

## Controlling plan and reconciliation

The controlling research/plan-spec.json rows retain A page order 2976, B page order 2977, category hall-algebras-and-tensor-categories, the companion relation, and both A-page requirements:

- algebraic-representation-and-tensor-symmetry-map
- finite-hopf-integrals-frobenius-duality-and-maschke

The B page requires the A page. These plan values are preserved.

The PA-50 entry in research/plan-physics-algebras-track.md at L110 is only the canonical-pair row. Its older prose at L1–L6 and L112–L116 describes an earlier prose-only splice, and the original A/B page scaffolds say the full surface-normal-form proof is blocked. Those records conflict with the binding owner construction at L118–L120 and L194–L198 and with research/non-ml-math-remaining-81-2026-10-18-owner-drift-repair/frobenius/construction.md. The owner construction controls: author ten new A-page items, including the functional/object coproduct proof, collars/decomposition, all relations, derived moves, full I–XI normal form, closed equivalence, and colored knowledgeable equivalence; author the two local B calculations. The older prose and empty plan-spec.json item arrays are not permissions to omit these claims.

The prior A-page prose listed only the algebraic representation page in its reading route, while the current plan also requires the published finite-Hopf page. The plan and owner construction control; both requirements remain. Existing Frobenius-functional, finite-Hopf, and group-algebra suppliers remain navigational links and logical dependencies where actually used. They are not duplicated as page placements.

The source's Theorem 3.22 proves the normal form but Proposition 3.10 leaves the direct surface checks implicit, (3.55) is an exercise, several derived moves are stated without expanded proofs, and §5 says the colored proof is similar. These are assigned local proof obligations in A5, A6, A8, and A10, not imported proofs. The full local proof will preserve arbitrary fields and nonsemisimple algebras, distinguish symmetric from commutative, exclude C=Z(A) as an axiom, and make no modular 3D or point-level fully extended claim.

## Inventory, logical dependencies, and levels

The item inventory and initial direct logical dependencies were fixed in the scaffold manifest before writing any carrier. Proof review added the direct dense-complement supplier to A4 when the parametric-transversality conclusion was checked against its actual statement; the manifest and item frontmatter were updated before the final dependency calculation. Published suppliers outside this run do not raise an item level; a published item retained in another manifest of this run does. `justified_by` is not a dependency edge.

| Item | Direct in-run deps | Level |
|---|---|---:|
| def-oriented-open-closed-surface-category | none | 0 |
| def-frobenius-object-and-knowledgeable-sewing-data | none | 0 |
| lem-finite-frobenius-functional-determines-coproduct | Frobenius data definition | 1 |
| lem-relative-surface-collars-and-elementary-decomposition | surface category definition (0); Batch 3 `prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold` (1); Batch 3 `thm-parametric-transversality` (6) | 7 |
| lem-elementary-surface-sewing-relations | surface category and data definitions | 1 |
| lem-frobenius-sewing-derived-moves | data definition; basic relations | 2 |
| def-relative-open-closed-surface-normal-form | surface/data definitions; decomposition (7) and derived moves | 8 |
| lem-boundary-relative-two-dimensional-surface-normal-form | decomposition (7), relations, derived moves, normal-word definition (8) | 9 |
| thm-closed-oriented-two-dimensional-tqfts-are-commutative-frobenius-algebras | data definition; normal-form theorem (9) | 10 |
| thm-knowledgeable-frobenius-data-classify-open-closed-sewing | data, decomposition (7), relations, derived moves, normal-word (8), normal-form (9) | 10 |
| ex-dual-numbers-are-nonsemisimple-symmetric-frobenius | data definition; functional/coproduct lemma | 2 |
| ex-group-algebra-is-symmetric-but-not-closed-sector | data definition; closed TQFT theorem (10) | 11 |

The assigned batch scheduling input SHA-256 is 7096b1bbc6f2d70796b6d63080bb4b0fc6e781f6a5e4da539963fbb746842903. The separate page-level batch artifact on disk has input SHA-256 8ef5197111cd7fe6e5f51723d594c7e3b569b7e17c45722c4d6fc6142a7e9d07 and still lists Batch 81 at batch dependency level 1 with prerequisite batch 32; no engine artifact was edited. Batch level and item level are different: A4 has direct in-run item suppliers from Batch 3, which raise A4 to item level 7 and its consumers through level 11. There is no direct item-level logical dependency on a Batch 32 item. The controlling A-page `requires` edge to PA-01 is page-level and remains open pending Batch 32 readiness; its exact supplier IDs and current interface are recorded in `batch-81.cross-batch-dependencies.json`.

The required page-level edge to `algebraic-representation-and-tensor-symmetry-map` crosses from Batch 81 to Batch 32. I read its current page body and the actual current `def-unital-associative-algebra-representation` and `thm-associative-algebra-representations-are-unital-modules` carriers. They define unital representations of associative k-algebras and prove their equivalence with k-bilinear unital left-module actions. They are still drafts and have no Step-1 readiness record, so the page-level cross-batch edge remains open pending Batch 32 readiness and owner reconciliation. Batch 81's item graph contains no direct logical edge to either Batch 32 item; the formulas and category/functor facts actually used here come from the inspected item dependencies. This distinction is recorded in `batch-81.cross-batch-dependencies.json`; the page requirement is preserved and no absent excerpt or acceptance is claimed. The second required page, `finite-hopf-integrals-frobenius-duality-and-maschke`, is published; I read the page and the actual Frobenius supplier proof, which assumes a nonzero finite-dimensional Hopf algebra and nonzero left-integral functional and proves a nondegenerate associative pairing, not symmetry.

The item-level ACω branch is explicit. The smooth collar and Morse suppliers used by A1/A4 require ACω; A8–A10 inherit only that branch. A4's transversality step uses the actual published conclusion that bad slices are null, then the actual published dense-complement proposition to choose a good parameter in each open ball. The finite-dimensional Frobenius, typed sewing, relation, and B calculation arguments are choice-free. No full Axiom of Choice or semisimplicity assumption is introduced.

## Supplier-body checks

The actual published def-hh-frobenius-functional-and-associative-pairing defines a Frobenius functional on any finite-dimensional unital algebra over a field by nondegeneracy of (a,b) ↦ ε(ab). The actual thm-hh-finite-hopf-algebras-are-frobenius assumes a nonzero finite-dimensional Hopf algebra over a field and a nonzero left-integral functional; it proves a Frobenius pairing and dual-basis formulas but does not assert symmetry. The actual group-algebra proposition proves the coefficient-of-identity pairing symmetric and nondegenerate for every finite group over every field, despite the narrower title. These old items remain untouched. The new B2 proof uses only the proposition's actual any-field statement and its local S3 multiplication calculation.

The actual published thm-parametric-transversality proof assumes ACω and concludes only that the bad slice parameters form a null set. I also read its transverse-preimage and Morse–Sard suppliers and the published proposition that the complement of a manifold-null set is dense. A4 now declares both direct Batch 3 supplier IDs and uses the dense-complement proposition to choose the needed good perturbation parameter; it does not infer density from nullity without that lemma.

## Source reading, limits, and disposition

Three full-text primary/author-hosted treatments were retrieved and relevant complete arguments inspected. Exact URLs, locators, per-item dispositions, source limits, read extents, and fetch hashes are recorded in non-ml-math-remaining-81-2026-10-18-batch-81.source-coverage.json.

- Lauda–Pfeiffer v3 (47-page full paper), §§3.1–3.7, PDF pp. 12–39; complete Theorem 3.22 I–XI; §4 pp. 39–42; §5 pp. 42–44. The drawings on pp. 18–25 and 32–39 were rendered and inspected. This is the primary route for the exact open/closed category and colored statement.
- Kock's complete 48-page minicourse notes, §1.1–1.3 pp. 6–18, §2.4.2–2.4.12 pp. 25–30, and §3.1.12–3.1.13 pp. 34–36. This is the independent full lecture-note treatment of the closed classification and the coproduct construction; it does not prove the colored open/closed theorem.
- Moore–Segal v1 (89-page full paper), §2.1–2.4, PDF pp. 5–12, and Appendix A.2, printed pp. 71–80. This is an independent open/closed sewing and Morse proof in its boundary-condition-category convention over complex vector spaces; those limits are not imported into the arbitrary-field local theorem.

The historical root source note records that a guessed Kock author-notes URL returned 404 and was not read. That source history is preserved. The author-hosted FS.pdf route above is a separately retrieved full 48-page lecture-note text; no retrieval failed for the three active coverage sources, so no source_resolution drop or escalation is recorded. source-fetch-check --stamp returned 3/3 fetch-verified sources with no documented drops.

**Typed source correction.** In Lauda–Pfeiffer §5, equation (5.8), PDF p. 43, the displayed single chain includes a final composite $(\mu_{abc}\otimes1_{A_{cd}})\alpha^{-1}(1_{A_{ab}}\otimes\Delta_{bcd})$ whose domain is $A_{ab}\otimes A_{bd}$ and codomain is $A_{ac}\otimes A_{cd}$. The first two displayed composites have the opposite domain and codomain, $A_{ac}\otimes A_{cd}\to A_{ab}\otimes A_{bd}$, so the three composites cannot be equated as printed. The local typed definition separates the valid equalities:

$$
\Delta_{abd}\mu_{acd}=(1_{A_{ab}}\otimes\mu_{bcd})\alpha(\Delta_{abc}\otimes1_{A_{cd}}):A_{ac}\otimes A_{cd}\to A_{ab}\otimes A_{bd},
$$
$$
\Delta_{acd}\mu_{abd}=(\mu_{abc}\otimes1_{A_{cd}})\alpha^{-1}(1_{A_{ab}}\otimes\Delta_{bcd}):A_{ab}\otimes A_{bd}\to A_{ac}\otimes A_{cd}.
$$

This correction is local to the authored definition and is used by A2, A5, A6, A8, and A10. The local source transcription and correction require owner review; no source excerpt or acceptance is inferred from the citation.

## Proof limitations and readiness handoff

The ten A-page items and two B examples are drafted, and both page files and the manifest inventory are populated. The following claims remain owner-escalated rather than certified ready:

- `lem-relative-surface-collars-and-elementary-decomposition`: the two mixed-saddle cuts name the source's two incidence patterns but do not yet give the six typed factorizations in (3.26) with each black boundary word and color assignment. Its downstream decomposition claims remain open.
- `lem-elementary-surface-sewing-relations`: the proof sketches the finite disk/pants/annulus matches, but it does not yet provide a distinct explicit seam-edge word and boundary-relative diffeomorphism for every associativity, Frobenius, zipper, centrality, adjunction, and Cardy equality. No completeness claim is made here.
- `lem-frobenius-sewing-derived-moves`: the snakes, pairing transports, cozipper coalgebra map, window/handle identities, and Cardy handle reduction are expanded; the general colored copairing-invariance transpose is still summarized rather than fully written as each typed composite. A6 and dependent claims remain open until that calculation is made explicit.
- `lem-boundary-relative-two-dimensional-surface-normal-form`: the I–XI outline records the outer termination measures, but stages II, III, VI–XI do not yet spell out every local configuration from the source diagrams as a complete typed rewrite case table. Consequently the general colored completeness/equality claim remains escalated; the source figures are not treated as proof.
- `thm-closed-oriented-two-dimensional-tqfts-are-commutative-frobenius-algebras` and `thm-knowledgeable-frobenius-data-classify-open-closed-sewing`: their extraction and reconstruction arguments are drafted against the normal-form interface but cannot be marked ready until the relevant local normal-form proof is complete.

The required Batch 32 page edge remains open because its exact supplier carriers are still drafts without Step-1 readiness. Step-1 `record` succeeded for all 12 Batch 81 items with `decision: escalated` and `owner: false`; no `--owner` option was used. The full-run readiness report remains open at 105/544 ready, which is outside this pair's authority to close.

## Scoped checks and readiness results

- `node tools/manifest-deps.mjs research/non-ml-math-remaining-81-2026-10-18-batch-81.pages.json`: passed, 12 items, no missing `deps` arrays.
- The run-graph dependency calculation gives Batch 81 item levels `0,0,1,7,1,2,8,9,10,10,2,11` in manifest order; there are no Batch 81 item-level graph errors. The higher A4/A7/A8/A9/A10/B2 labels come from the published Batch 3 in-run transversality dependencies documented above. `node tools/item-dependency-levels.mjs check --run ...` still reports 102 **other pages with empty scaffold inventories**, but no dependency-level mismatch or duplicate item ID in this batch. No other page was edited to silence that run-wide blocker.
- `node tools/depcheck.mjs --items-file /tmp/batch81-item-scope.json --json`: passed for all 12 assigned items and both pages, zero errors/warnings; the transitive prerequisite closure covered 1,053 items and 168 pages.
- `node tools/content-policy.mjs research/non-ml-math-remaining-81-2026-10-18-batch-81.pages.json --json`: passed, 12 items, zero errors/warnings.
- `node tools/proof-layout.mjs items/<12 assigned item files>`: passed, 12 items and 72 proof steps, zero defects.
- `node tools/proof-contract.mjs research/non-ml-math-remaining-81-2026-10-18-batch-81.proof-contracts.json --strict`: passed, 12/12 contracts, zero errors or warnings.
- `node tools/coverage-checklist.mjs research/non-ml-math-remaining-81-2026-10-18-batch-81.coverage.json --require-destination`: passed, one A page and 14 harvested results, zero errors or warnings.
- `node tools/source-fetch-check.mjs --coverage research/non-ml-math-remaining-81-2026-10-18-batch-81.source-coverage.json --stamp`: 3/3 sources fetch-verified, zero drops; prior successful stamps were reused.
- `node tools/step1-decisions.mjs record` was run for every assigned item with exact examined dependency IDs and blocker evidence. All 12 records are `escalated` with `owner: false`; no item is marked ready and no independent approval is claimed. The run-wide readiness report remains open at 105/544 ready, including other unfilled pages outside this assignment.

The task carries scheduling-input hash `7096b1bbc6f2d70796b6d63080bb4b0fc6e781f6a5e4da539963fbb746842903`; the on-disk `batch-dependency-levels.json` has input hash `8ef5197111cd7fe6e5f51723d594c7e3b569b7e17c45722c4d6fc6142a7e9d07`. Its Batch 81 batch-level result remains 1 with Batch 32 as prerequisite. The discrepancy is recorded for owner reconciliation; the engine artifact was not changed.

These records document authoring and exact blockers only. They do not clear the open Batch 32 page requirement, the listed local proof obligations, the run-wide empty-scaffold condition, or any later review and approval gate.
