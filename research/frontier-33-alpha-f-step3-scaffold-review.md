# Frontier 33 Alpha Step 3 scaffold review — group f

## Outcome

Both assigned A/B pairs are sufficient for authoring. I found no in-scope false scaffold claim, missing lemma, backward prerequisite, source gap, or pair-scope defect requiring a manifest or coverage edit. The current `research/plan-spec.json` metadata agrees with both manifests; its empty item arrays are the expected pre-splice state.

| Batch | A page | Order | A/B items | Coverage rows | Verdict |
| --- | --- | ---: | ---: | ---: | --- |
| 14 | `category-o-finiteness-duality-and-blocks` | 510.007 | 31 / 8 | 82 | sufficient |
| 15 | `clifford-theory-over-normal-subgroups` | 510.037 | 14 / 3 | 32 | sufficient |

Reviewed inputs were the two manifests, coverage files, notes files, the RL-4 and RG-4 design sections with their adjacent next-page sections, the current plan entries, all directly used published dependency statements, and the complete source sections named below. The A/B contracts, item IDs, conventions, dependencies, and source locators were checked claim by claim, including zero and extreme cases and the direction of each equivalence.

## Batch 14 — Category O finiteness, duality, and blocks

The route is complete: the definition and Noetherianity inputs lead to finite Borel-stable generators, the support criterion, closure properties, highest-weight filtrations, finite central-image decomposition, finite length and finite Hom; restricted Chevalley duality then supplies costandards and block preservation; integral-reflection linkage plus simple-extension splitting and Verma embeddings supplies the indecomposable block theorem; tensor stability and the two Grothendieck-group bases finish the A page. The B page tests the route on regular, generic, and singular examples and on all material failure boundaries.

The scaffold already makes the necessary source-backed qualifications that the design prose left implicit or overstated:

- finite generation remains an independent hypothesis in the support characterization;
- extension closure is asserted only when the middle term is an `h`-semisimple weight module, with an explicit ambient-extension counterexample;
- every object has a finite filtration by highest-weight quotients and is a quotient of a finite Verma-flag module, rather than being claimed to have a Verma flag itself;
- the standard-basis unitriangularity is restricted to a finite central-character label set (and its downward-closed subsets);
- restricted duality uses the published Chevalley anti-involution, preserving weights.

These formulations are mathematically coherent with the proposed proofs. In particular, the finite central-image argument restricts the center to a finite sum of full generating weight spaces; the strict-chain bound uses the finite dot-orbit detector; block indecomposability joins adjacent integral-reflection labels by Verma embeddings; and the direct-sum and ambient-extension B items prevent the two principal false converses.

Declared page prerequisites are `homomorphisms-between-verma-modules-and-linkage-examples` and `chain-complexes-and-homology`; the B page depends only on its A page. All 20 distinct item-level external dependencies are present in the current plan and occur earlier, including PBW/triangular decomposition, Hilbert basis, Verma universal and linkage results, central characters, Jordan–Hölder, and the Chevalley contravariant form. No item depends on a B-page supplier.

Complete relevant source sections checked:

- Etingof, *Representations of Lie Groups*, `https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf`: §15.1 pp. 79–81 and §20.4 p. 103;
- Sakellaridis, category O notes, `https://web.archive.org/web/20230424132820if_/https://math.jhu.edu/~sakellar/automorphic-files/vermamodules.pdf`: §2 pp. 2–3 and §6 pp. 9–10;
- Chen, Lectures 2, 6, and 8, `https://windshower.github.io/linchen/teaching/s2024/lecture2.pdf`, `https://windshower.github.io/linchen/teaching/s2024/lecture6.pdf`, and `https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf`: L2 §3 pp. 4–6, L6 §2 pp. 5–6, and L8 §3 pp. 4–6;
- Humphreys, *Representations of Semisimple Lie Algebras in the BGG Category O*, `https://web.archive.org/web/20250810231247if_/https://www.nzdr.ru/data/media/biblio/kolxoz/M/MA/MAr/Humphreys%20J.E.%20Representations%20of%20Semisimple%20Lie%20Algebras%20in%20the%20BGG%20Category%20O%20(AMS,%202008)(ISBN%200821846787)(O)(303s)_MAr_.pdf`: §1.13 pp. 30–32, §3.4 pp. 52–53, §4.9 pp. 83–84, and §4.11 pp. 85–86.

All six coverage sources have current fetch verification. Eleven declines were reviewed and resolved as `stands`: five later results are owned by `projectives-standard-filtrations-and-bgg-reciprocity` at order 510.009, while the remaining stronger, analytic, or geometric material is not used by any retained claim. The exact result-by-result evidence is in `research/frontier-33-alpha-f-scope-decisions.json`.

## Batch 15 — Clifford theory over normal subgroups

The route is complete and noncircular: normal isotypical components are translated by the fixed left-conjugation action; irreducibility forces one orbit and equal multiplicities; the selected component has stabilizer equal to the inertia group; reconstruction and converse irreducibility are proved separately in the left-coset induction model; these give Clifford correspondence, the induction criterion, and the ramification sum of squares; the multiplicity-space evaluation lemma then proves Gallagher correspondence from an assumed genuine extension.

The conventions and boundary hypotheses are explicit and consistent. The scaffold uses `{}^g theta(n)=theta(g^{-1}ng)` and left cosets throughout, does not claim that the whole normal restriction is isotypical, and does not infer existence of an extension merely from invariance. The `S_3/A_3` example explicitly exhibits a reducible normal restriction, while `N=1` and `N=G` check both extreme cases. Gallagher's ramification index is correctly `dim eta`.

The declared A-page prerequisite is `schur-indices-and-fields-of-definition-examples`; the B page depends only on its A page. All 17 distinct item-level external dependencies are present earlier in the current plan, including Maschke semisimplicity, unique isotypical decomposition, character multiplicities and inner products, left-transversal induction, Frobenius reciprocity, Schur's lemma, quotient inflation, and tensor products. No forward or B-page dependency is present.

Complete relevant source sections checked:

- tom Dieck, *Representation Theory*, `https://math.uchicago.edu/~margalit/repthy/tomDieck%20Representation%20Theory.pdf`: §4.2 pp. 53–57 through Remark 4.2.7, including the full proof of Theorem 4.2.4;
- Späth, *Reduction theorems for some global-local conjectures*, `https://darstellungstheorie.uni-wuppertal.de/fileadmin/mathe/darstellungstheorie/LausanneBS_final.pdf`: the conjugation convention and §1.A pp. 2–3 through Remark 1.5;
- Losev, *Representation Theory, Chapter 0. Basics*, `https://web.archive.org/web/20220412025056if_/https://gauss.math.yale.edu/~il282/RT0_new.pdf`: §2.3 pp. 9–11 through Proposition 2.17, including the evaluation and submodule proofs.

All three coverage sources have current fetch verification. Seven declines were reviewed and resolved as `stands`: five projective/factor-set results belong to the existing later page `projective-extensions-and-the-little-group-method` at order 510.039; the generalized character-triple clause is not imported; and no separate repeat of the source's false homogeneous-restriction statement is needed because the retained theorem states the correct orbit formula and the `S_3/A_3` example realizes its failure. Exact evidence is recorded in the scope-decision file.

## Continuity inventory

The batch-14 A IDs reviewed were `def-bgg-category-o`, `lem-enveloping-algebra-is-left-and-right-noetherian`, `lem-finite-b-stable-generators-and-weight-flags-in-category-o`, `prop-equivalent-support-description-of-category-o`, `prop-verma-and-finite-dimensional-modules-lie-in-category-o`, `thm-category-o-is-abelian-and-extension-closed`, `lem-n-plus-invariants-exist-in-every-nonzero-o-module`, `thm-simple-objects-of-category-o-are-highest-weight-modules`, `lem-o-modules-admit-finite-highest-weight-filtrations-after-truncation`, `lem-the-center-has-finite-dimensional-image-on-an-o-object`, `def-generalized-central-character-subcategory-of-o`, `lem-generalized-central-character-submodules-are-direct-summands`, `thm-category-o-decomposes-by-generalized-central-character`, `lem-finite-dot-orbit-weight-spaces-detect-o-subquotients`, `thm-every-category-o-object-has-finite-length`, `prop-hom-spaces-in-category-o-are-finite-dimensional`, `def-restricted-dual-of-a-weight-module`, `lem-simple-highest-weight-modules-are-restricted-self-dual`, `prop-restricted-duality-is-an-exact-involution-on-category-o`, `def-standard-and-costandard-objects-in-category-o`, `prop-costandard-objects-have-simple-socles`, `def-integral-weyl-group-of-a-weight`, `lem-integral-reflection-orbits-are-linkage-equivalence-classes`, `lem-extensions-between-distinct-o-linkage-classes-split`, `lem-o-modules-split-across-separated-simple-classes`, `thm-central-character-summands-split-into-linkage-blocks`, `cor-restricted-duality-preserves-linkage-blocks`, `lem-verma-self-extensions-in-category-o-split`, `prop-tensoring-with-a-finite-dimensional-module-preserves-category-o`, `def-grothendieck-group-and-character-of-category-o`, and `prop-the-grothendieck-group-of-o-has-simple-and-standard-bases`.

The batch-14 B IDs reviewed were `ex-the-regular-integral-sl2-block-of-category-o`, `ex-a-generic-sl2-block-is-semisimple`, `ex-a-singular-a2-central-character-summand`, `cex-the-full-algebraic-dual-of-a-verma-module-is-not-in-o`, `cex-an-infinite-direct-sum-of-verma-modules-is-not-in-category-o`, `cex-a-weight-module-with-unbounded-upward-support-is-not-in-o`, `cex-category-o-is-not-extension-closed-in-all-g-modules`, and `cex-tensor-products-of-two-verma-modules-need-not-lie-in-o`.

The batch-14 external dependency IDs checked were `thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra`, `thm-triangular-decomposition-from-a-chosen-positive-root-system`, `thm-hilbert-basis-theorem`, `prop-weights-of-a-verma-module-lie-below-lambda`, `thm-verma-module-has-a-unique-simple-quotient`, `thm-modules-over-a-ring-form-an-abelian-category`, `thm-universal-property-of-verma-modules`, `def-central-character-of-a-lie-algebra-module`, `cor-central-characters-are-dot-weyl-orbits`, `lem-central-action-on-a-cyclic-highest-weight-module-is-scalar`, `def-chevalley-contravariant-form`, `thm-jordan-holder-theorem-in-an-abelian-category`, `def-verma-module`, `def-root-reflections-and-the-weyl-group-action`, `def-weyl-vector-rho-for-a-chosen-positive-system`, `def-strong-linkage-order-on-weights`, `thm-strong-linkage-principle-for-verma-modules`, `thm-verma-embedding-for-an-arbitrary-positive-root`, `prop-simple-reflection-embedding-of-verma-modules`, and `cor-verma-irreducibility-criterion-from-shapovalov-determinants`.

The batch-15 A IDs reviewed were `def-conjugate-representation-and-inertia-group`, `lem-normal-isotypical-components-are-permuted-by-translation`, `lem-normal-restriction-constituents-form-one-conjugacy-orbit`, `thm-clifford-homogeneous-restriction-formula`, `def-clifford-ramification-index`, `lem-normal-isotypical-component-is-inertia-stable`, `lem-induction-from-the-inertia-group-recovers-the-module`, `lem-inducing-an-irreducible-inertia-module-is-irreducible`, `thm-clifford-correspondence`, `cor-normal-subgroup-induction-irreducibility-criterion`, `cor-clifford-ramification-squares-sum-to-inertia-index`, `def-extension-of-an-irreducible-normal-subgroup-representation`, `lem-isotypical-evaluation-and-subspaces-of-multiplicity-spaces`, and `thm-gallagher-correspondence-for-an-extendible-character`.

The batch-15 B IDs reviewed were `ex-clifford-theory-for-s3-over-a3`, `ex-gallagher-correspondence-for-a-direct-product`, and `ex-clifford-boundaries-n-equals-one-and-n-equals-g`.

The batch-15 external dependency IDs checked were `def-conjugate-representation-and-conjugate-character`, `def-normal-subgroup`, `cor-multiplicity-of-an-irreducible-summand-is-a-character-inner-product`, `cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order`, `thm-isotypic-decomposition-of-a-completely-reducible-representation-is-unique`, `thm-characters-of-direct-sums-tensor-products-and-duals`, `thm-character-inner-product-computes-intertwiner-dimension`, `prop-induced-module-decomposes-over-a-left-transversal`, `thm-induction-is-left-adjoint-to-restriction-for-finite-group-modules`, `cor-frobenius-reciprocity-for-complex-characters`, `cor-a-complex-character-is-irreducible-iff-its-self-inner-product-is-one`, `cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars`, `def-finite-dimensional-representation-of-a-group-over-a-field`, `def-sign-representation-and-restriction-of-a-representation`, `prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient`, `def-tensor-product-of-complex-representations`, and `thm-universal-property-of-module-tensor-products`.

## Scope decisions and validation

`node tools/scope-decisions.mjs refresh --run frontier-33 --group f` produced 18 pending rows. All were resolved as `stands` with current, item-specific evidence: 11 for batch 14 and 7 for batch 15. No row required an owner decision, because every deferral has an existing later destination and every out-of-scope result is absent from the retained proof route.

Checks run on the current artifacts:

- `node tools/scope-decisions.mjs check --run frontier-33 --group f` — 18 current declines, 0 errors.
- `node tools/manifest-deps.mjs research/frontier-33-batch-14.pages.json` — 39 items, 0 missing dependency arrays, 0 errors.
- `node tools/manifest-deps.mjs research/frontier-33-batch-15.pages.json` — 17 items, 0 missing dependency arrays, 0 errors.
- `node tools/coverage-checklist.mjs research/frontier-33-batch-14.coverage.json --require-destination` — 82 rows, 0 errors, 0 warnings.
- `node tools/coverage-checklist.mjs research/frontier-33-batch-15.coverage.json --require-destination` — 32 rows, 0 errors, 0 warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-33-batch-14.pages.json` — 39 items, 0 errors, 0 warnings.
- `node tools/content-policy.mjs --manifest-only research/frontier-33-batch-15.pages.json` — 17 items, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-14.coverage.json` — 6 of 6 sources fetch-verified.
- `node tools/source-fetch-check.mjs --coverage research/frontier-33-batch-15.coverage.json` — 3 of 3 sources fetch-verified.
- `node tools/validate-plan.mjs research/plan-spec.json --repo . --max-items 60` — current plan order is acyclic and consistent, with no item-level cycle, forward reference, B-page dependency, or unresolved ID among pages whose item lists are present.

The historical DNS/fetch blockers recorded near the ends of the batch notes are no longer current: the present coverage files carry valid fetch stamps and both focused source checks pass. No unresolved obligation or blocker remains for authoring these two pairs. No manifest, coverage, batch notes, plan, published content, item, reading-order entry, or judge record was changed during this review.
