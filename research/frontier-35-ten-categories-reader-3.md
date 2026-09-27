# Step 5a reader report — batch 3

Run: `frontier-35-ten-categories`  
Role: `reader-3`

## Opened inventory

Opened both assigned pages:

- A: `library/algebraic-geometry/algebraic-differentials-separability-and-smooth-local-presentations.md`
- B: `library/algebraic-geometry/algebraic-differentials-separability-and-smooth-local-presentations-examples.md`

Opened all 26 A-page items and all 7 B-page items listed in the batch manifest:

- A items: `def-ag-universal-algebraic-differentials`, `lem-ag-differentials-universal-property`, `lem-ag-polynomial-quotient-differentials`, `lem-ag-differentials-localization-base-change`, `lem-ag-differentials-transitivity`, `def-ag-separating-transcendence-basis`, `thm-ag-separating-transcendence-basis-perfect-field`, `thm-ag-field-differentials-separable-rank`, `lem-ag-separable-residue-cotangent-sequence`, `thm-ag-field-extension-of-schemes`, `def-ag-geometrically-regular-algebra-and-fibre`, `def-ag-standard-smooth-algebra`, `lem-ag-base-change-of-standard-smooth-presentations`, `lem-ag-standard-smooth-fibre-regular-parameters`, `lem-ag-local-flatness-regular-parameters`, `lem-ag-standard-smooth-flatness`, `lem-ag-standard-smooth-regular-geometric-fibres`, `lem-ag-flat-local-regularity-ascent-descent`, `lem-ag-finite-field-extension-separable-factorization`, `lem-ag-geometric-regularity-field-tests`, `thm-ag-geometric-regularity-perfect-base`, `thm-ag-perfect-field-jacobian-regularity`, `lem-ag-geometrically-regular-fibres-local-presentation`, `thm-ag-standard-smooth-geometric-regularity`, `thm-ag-standard-smooth-base-change-composition`, `thm-ag-submersion-criterion-standard-smooth`.
- B items: `ex-ag-differentials-polynomial-and-hypersurface`, `cex-ag-differentials-arbitrary-map-is-not-base-change`, `ex-ag-separable-and-inseparable-field-differentials`, `ex-ag-standard-smooth-hypersurface-chart`, `ex-ag-field-change-inseparable-thickening`, `cex-ag-regular-factors-product-not-regular`, `ex-ag-projection-submersion-parameters`.

For the repaired flatness argument, opened the published dependency `items/thm-krull-intersection-theorem.md`, Statement. For the field-extension assertions, checked Stacks Algebra Lemma 10.42.4 (tag 04KM), and the adjacent perfect-base results in Lemmas 10.44.1 (tag 0H71) and 10.44.2 (tag 030W).

## Repairs

1. `items/lem-ag-standard-smooth-flatness.md`, proof step 3.1: removed the invalid inference that flatness of `N_i` makes `K⊗κ → N_i⊗κ` injective for an arbitrary submodule `K`. The replacement uses flatness to identify `J^r/J^{r+1}` with `(m^r/m^{r+1})⊗κ(N_i/J)`, then uses the fibre nonzerodivisor to get injectivity on each graded piece. A kernel element lies in every `J^r`; the cited Krull intersection theorem applies because `N_i` is Noetherian local and `J=mN_i` lies in its Jacobson radical. Added the dependency and fact [F35], and updated contract step 3.1 and its citation.
2. `items/thm-ag-field-extension-of-schemes.md`, proof step 5.1: corrected the second base-change tensor product from `(...⊗_k K)⊗_k L` to `(...⊗_k K)⊗_K L`. The construction of `(X_K)_L` is over `K`; the canonical isomorphism to `A_i⊗_k L` then has the stated base. Updated contract step 5.1.
3. `items/lem-ag-finite-field-extension-separable-factorization.md`, Statement: replaced the ambiguous field chain with a commutative square of embeddings, explicitly specifying that `k'/k` and `K'/K` are finite purely inseparable extensions and that `K'/k'` is separably generated. This matches Stacks Algebra Lemma 10.42.4 (tag 04KM). Updated contract step 4.1 and the copied statement citation in `lem-ag-geometric-regularity-field-tests`.
4. `items/lem-ag-geometrically-regular-fibres-local-presentation.md`, Statement and proof step 6.1: made the polynomial ring `P`, its prime `q'`, the polynomial `u∈P`, and its image `bar u∈S` explicit. The chart is localized at `u` on `P/(f)` and at `bar u` on `S`. In the proof, set `u=gh` in `P`; then `bar u` is the localization element in `S`, and inverting it makes the Jacobian minor a unit. Updated contract step 6.1 and the copied statement citation in `thm-ag-standard-smooth-geometric-regularity`.

Updated `research/frontier-35-ten-categories-batch-3.proof-contracts.json` for all four changed proof/statement obligations and the affected copied citations. No `verification.judge` record was present in the changed items, so none was removed. No item or claim was withdrawn.

## Validation

Ran `tools/reflow.mts` and `tools/precheck.mts` for each of the four changed items. All four prechecks passed; reflow completed for all four (one reflowed, three were unchanged).

## Uneditable defects

None found. The Krull-intersection dependency statement was verified and required no edit. No unresolved mathematical uncertainty or blocker remains in the assigned batch.

## Page verdicts

- A page: sound after the item repairs. Its summary remains consistent with the current item statements; no page-prose edit was needed.
- B page: sound. Its examples and summary were consistent; no edit was needed.

## Coverage note

All assigned page and item files were opened. Dependency targets and external references were followed where needed to check the reviewed claims; I did not independently audit unrelated results across the full dependency closure.
