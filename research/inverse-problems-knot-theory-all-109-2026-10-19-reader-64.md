# Step 3a reader report — batch 64

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Batch: `64`

## Opened pages

- `multivariable-alexander-modules-and-chain-models` (A), `library/knot-theory/multivariable-alexander-modules-and-chain-models.md`.
- `multivariable-alexander-modules-and-chain-models-examples` (B), `library/knot-theory/multivariable-alexander-modules-and-chain-models-examples.md`.

Both pages contain YAML frontmatter only, preserve `page_layout: compact-v1`, and have no Markdown body or summary. Their item inventories match the batch manifest.

## Opened assigned items

Read all 16 current item files in supplier-before-consumer order:

1. `lem-multivariable-laurent-ring-noetherian-ufd`
2. `def-based-string-link-and-labeled-link-peripheral-system`
3. `def-maximal-abelian-cover-alexander-module`
4. `lem-link-wirtinger-crossing-ball-cover`
5. `lem-maximal-abelian-cover-link-exterior-retraction`
6. `lem-string-link-exterior-homology-and-meridian-maps`
7. `lem-link-wirtinger-local-meridian-conjugacy`
8. `def-topological-linking-number-by-meridian-coordinate`
9. `lem-maximal-abelian-cover-cellular-chain-model`
10. `lem-link-peripheral-longitude-word-from-diagram`
11. `alg-abelian-cover-chain-model-from-triangulated-exterior`
12. `lem-multivariable-alexander-order-and-specialization`
13. `thm-abelian-cover-chain-model-from-triangulated-exterior-procedure-properties`
14. `thm-abelian-cover-chain-model-computes-alexander-module`
15. `cex-knot-kt-09-boundary-case`
16. `ex-knot-kt-09-worked-cases`

## Dependency evidence opened

Opened the exact statement or definition interfaces needed by the assigned proofs for these suppliers:

- Polynomial rings: `lem-the-laurent-polynomial-ring-is-noetherian-and-a-unique-factorisation-domain`; `cor-finite-variable-polynomial-ring-noetherian`; `thm-noetherian-ring-quotients-and-localisations`; `lem-gauss-lemma-over-a-ufd`; `thm-polynomial-ring-over-a-field-is-a-ufd`.
- Link, peripheral, and cover definitions: `def-oriented-link-in-s-three-and-ambient-isotopy`; `def-knot-exterior`; `def-knot-meridian-and-preferred-longitude`; `def-one-variable-alexander-module-of-an-oriented-link`; `def-normal-and-conormal-bundles-of-an-embedded-submanifold`; `def-tubular-neighbourhood-of-an-embedded-submanifold`; `prop-normal-and-conormal-bundles-are-smooth-vector-bundles`; `thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere`; `lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold`; `def-axiom-of-choice`; `def-regular-oriented-link-diagram`; `def-oriented-crossing-sign-writhe-and-blackboard-framing`.
- Covering, fundamental-group, and homology results: `prop-the-first-hurewicz-map-in-degree-one-is-abelianization`; `thm-classification-of-connected-covering-spaces`; `thm-regular-covering-characterizations`; `cor-deck-group-of-a-regular-covering`; `def-deck-transformation-and-deck-group`; `def-group-ring`; `thm-group-ring-is-a-unital-algebra-with-basis-g`; `thm-seifert-van-kampen`; `thm-homotopy-lifting-for-covering-maps`; `thm-path-lifting-for-covering-maps`; `lem-continuity-is-local-and-pastes`; `def-retraction-and-deformation-retract`; `prop-retracts-inject-fundamental-groups`; `cor-homotopic-maps-induce-the-same-map-on-singular-homology`; `thm-excision-for-singular-homology`; `thm-long-exact-sequence-of-a-pair-in-singular-homology`; `cor-homology-of-spheres`; `def-singular-chain-complex-and-singular-homology`; `thm-cellular-homology-computes-singular-homology`; `thm-fundamental-group-of-finite-wedge-of-circles`; `lem-a-finitely-punctured-disk-retracts-to-a-wedge-of-circles`; `thm-euclidean-inverse-function-theorem`; `thm-higher-dimensional-spheres-are-simply-connected`.
- Fitting ideals: `def-elementary-ideals-of-a-finitely-presented-module`; `lem-elementary-ideals-are-independent-of-the-presentation`.
- Added finite-CW supplier: `thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations`.

The three draft suppliers outside batch 64 (`def-knot-exterior`, `def-knot-meridian-and-preferred-longitude`, and `def-oriented-crossing-sign-writhe-and-blackboard-framing`) were read at their current versions. I found no defect in the interfaces used by batch 64.

## Edits and evidence

- In `lem-multivariable-alexander-order-and-specialization`, the proof used `lem-maximal-abelian-cover-cellular-chain-model` as though a finite CW structure on every compact link exterior had already been supplied. That supplier only handles a given finite CW structure. Added the finite triangulation theorem as a dependency and Fact `[F10]`, then invoked it to choose a finite CW structure before applying the cellular-chain lemma. The compact smooth exterior with boundary is within the theorem's stated class; the Axiom of Choice is already an explicit hypothesis. Regenerated this item's contract.
- In `ex-knot-kt-09-worked-cases`, Fact `[F5]` cited `prop-retracts-inject-fundamental-groups` as evidence that the Laurent ring is a domain, UFD, and has signed monomial units. The opened proposition only concerns the fundamental-group map induced by a retract. Removed that inaccurate citation; `lem-multivariable-laurent-ring-noetherian-ufd` supplies all three ring facts. Regenerated this item's contract.
- In `lem-string-link-exterior-homology-and-meridian-maps`, the punctured-disk diagram showed three separate arcs ending near the boundary, with no shared access basepoint, although the text and proof use compatible paths from a common basepoint. Redrew the three noncrossing stems from a marked common boundary basepoint to the punctures. The proof and its claim are unchanged.

No changed item had a `verification.judge` record to remove. No Statement or Definition was changed.

## Unedited defects

None confirmed. In particular, the current draft suppliers in other batches listed above were not edited.

## Page verdicts

- `multivariable-alexander-modules-and-chain-models` (A): pass. Frontmatter-only, compact layout, correct assigned inventory, and no summary body.
- `multivariable-alexander-modules-and-chain-models-examples` (B): pass. Frontmatter-only, compact layout, correct companion relation and two-example inventory, and no summary body.

## Validation and blockers

- Reflow: `unchanged` for all three changed items.
- Precheck: pass for all three changed items.
- Proof layout: one command over all three changed items; 18 proof steps checked, 0 defects.
- Batch 64 proof contracts: regenerated for the three changed items; no entries skipped.
- Blocker: none.

## Coverage note

I checked the current authored arguments and exact supplier interfaces used by the assigned items. I did not independently reconstruct every proof in the transitive foundational dependency closure. I read Hatcher, *Algebraic Topology*, §2.2, Theorem 2.35 (printed p. 140), for cellular homology, and the Stacks Project, Tag 07Z6, Lemma 15.8.2 and Definition 15.8.3, for Fitting-ideal indexing and invariance. The cited Friedl PDF timed out when opened through the browser, so I did not independently verify its bibliography locators; the assigned crossing and longitude arguments were reviewed from their local proofs, and I found no citation defect supported by the material I could read. For finite CW existence I relied on the opened library theorem and its local proof/statement; its bibliography points to Munkres, §10.6, printed pp. 103–105, and I did not independently re-read that scanned source's full argument.
