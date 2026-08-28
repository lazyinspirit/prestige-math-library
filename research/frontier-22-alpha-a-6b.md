# frontier-22 · Alpha group `a` · Step 6b adjudication

Run: `frontier-22`  
Role: `alpha`  
Label: `6b-a`  
Covers: batches `1`, `3`, and `8`  
Date: Friday, August 28, 2026

## Outcome

- Wrote `research/frontier-22-alpha-a-6b-decisions.json` with `35` stamped
  decisions: `15` `accepted_repair`, `15` `amended_repair`, `4`
  `confirmed_fatal`, and `1` `confirmed_nonfatal`.
- Appended `35` closed `frontier-22` rows to `research/defect-ledger.jsonl`,
  one for each owned Step-6 obligation.
- Wrote `40` required `risk_review` records across
  `research/frontier-22-batch-{1,3,8}.proof-contracts.json`.
- Confirmed every routed refuter finding on current bytes. Four were fatal and
  repaired; one was nonfatal and repaired.

## Batch 1

- Accepted the reader repairs on
  `lem-cyclic-permutations-of-a-cyclically-britton-reduced-hnn-word-are-conjugate`,
  `lem-finite-groups-acting-on-trees-have-a-global-fixed-vertex-after-subdivision`,
  `cor-groups-acting-freely-without-inversions-on-trees-are-torsion-free`,
  `ex-regular-cayley-trees-of-free-groups`,
  `fs-the-published-finite-tree-definition-already-covers-bass-serre-trees`,
  and the two touched A-pages.
- Amended three touched carriers:
  `lem-conjugacy-of-cyclically-britton-reduced-hnn-words-reduces-to-associated-subgroup-conjugacy`,
  `thm-conjugacy-theorem-for-cyclically-reduced-hnn-words`, and
  `thm-finite-simplicial-tree-agrees-with-the-published-finite-tree-notion`.
- Confirmed `refuter:1:1` as fatal. The definition
  `def-fixed-subtree-and-minimal-invariant-subtree` falsely claimed uniqueness
  of minimal invariant subtrees; the live definition now states that such
  subtrees need not be unique in general.
- Confirmed `refuter:1:2` as fatal. The HNN conjugacy lemma's stronger
  associated-subgroup conclusion is false on the refuter's `BS(1,2)`-style
  witness. The live lemma now stops at base-group conjugacy after cyclic
  permutation, and the dependent Collins theorem was narrowed to the matching
  positive-length criterion.
- Wrote the required risk reviews for all `12` high/critical batch-1 contract
  items after rereading the current proofs and cited dependencies.

## Batch 3

- Amended the touched carrier for
  `fs-a-group-with-r-conjugacy-classes-has-an-irreducible-of-degree-r`: the
  reader's consequential Q_8 quote sync still matches the current item bytes,
  but the batch-3 contract fingerprint changed later during Step 6b.
- Amended the touched carrier for
  `ex-the-complex-group-algebras-of-q-eight-and-dih-c-four-have-the-same-wedderburn-decomposition`
  because the accepted reader display repair now also carries the required
  Step-6 risk review in its contract entry.
- Confirmed `refuter:3:1` as fatal. The A-page closing paragraph falsely said
  the center computation yields both the irreducible-count theorem and the
  sum-of-squares formula. The live page now states the correct split: the
  center computation yields the irreducible count, while the regular
  representation gives the sum-of-squares formula.
- Wrote the required risk reviews for all `10` high-risk batch-3 contract
  items after rereading the live proofs and their cited dependencies.

## Batch 8

- Accepted eight touched reader repairs whose final carriers now match the
  reader result exactly:
  `thm-a-locally-small-abelian-category-with-a-generator-is-well-powered`,
  `thm-abelian-groups-satisfy-ab4-star`,
  `thm-direct-and-inverse-image-of-subobjects-form-a-galois-connection`,
  `thm-objects-of-finite-length-form-an-abelian-subcategory`,
  `thm-projective-object-characterisations`,
  `thm-schreier-refinement-theorem-in-an-abelian-category`,
  `thm-the-cancellation-and-epimorphism-descriptions-of-a-generator-agree`, and
  `thm-the-meet-of-subobjects-is-their-pullback`.
- Amended ten touched carriers:
  `cor-a-cocomplete-locally-small-abelian-category-with-a-generator-satisfies-the-special-adjoint-functor-theorem-hypotheses-dually-with-representatives-supplied`,
  `cor-inverse-image-preserves-meets-and-direct-image-preserves-joins`,
  `ex-the-galois-connection-of-images-and-preimages-for-a-module-homomorphism`,
  `ex-two-composition-series-of-a-module-refined`, `fs-ab4-implies-ab5`,
  `thm-a-coproduct-of-projectives-is-projective-and-a-product-of-injectives-is-injective`,
  `thm-a-generator-detects-equality-of-subobjects`,
  `thm-the-subobject-lattice-of-an-abelian-category-is-modular`,
  `thm-the-subobjects-of-an-object-in-an-abelian-category-form-a-lattice`, and
  `thm-zassenhaus-butterfly-lemma-in-an-abelian-category`.
- Confirmed `refuter:8:1` as fatal. `def-object-of-finite-length` duplicated
  `thm-jordan-holder-theorem-in-an-abelian-category` in both `deps` and
  `justified_by` even though it is a prerequisite, not a reverse witness. The
  live frontmatter now removes the invalid `justified_by` edge.
- Confirmed `refuter:8:2` as nonfatal. The Statement of
  `thm-the-subobjects-of-an-object-in-an-abelian-category-form-a-lattice`
  cited `def-the-join-of-subobjects-in-an-abelian-category` without declaring
  it. The live item and batch manifest row now declare that dependency.
- Wrote the required risk reviews for all `18` high/critical batch-8 contract
  items after rereading the current proofs and the cited current dependency
  statements, including the published kernel/cokernel correspondence used by
  the special-adjoint corollary.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/def-fixed-subtree-and-minimal-invariant-subtree.md items/lem-conjugacy-of-cyclically-britton-reduced-hnn-words-reduces-to-associated-subgroup-conjugacy.md items/thm-conjugacy-theorem-for-cyclically-reduced-hnn-words.md items/def-object-of-finite-length.md items/thm-the-subobjects-of-an-object-in-an-abelian-category-form-a-lattice.md library/abstract-algebra/maschkes-theorem-and-complete-reducibility.md`
  -> all six files already matched canonical reflow.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-conjugacy-of-cyclically-britton-reduced-hnn-words-reduces-to-associated-subgroup-conjugacy.md items/thm-conjugacy-theorem-for-cyclically-reduced-hnn-words.md items/thm-the-subobjects-of-an-object-in-an-abelian-category-form-a-lattice.md`
  -> `3 checked, 0 failing`.
- `node tools/rendercheck.mjs items/def-fixed-subtree-and-minimal-invariant-subtree.md items/lem-conjugacy-of-cyclically-britton-reduced-hnn-words-reduces-to-associated-subgroup-conjugacy.md items/thm-conjugacy-theorem-for-cyclically-reduced-hnn-words.md items/def-object-of-finite-length.md items/thm-the-subobjects-of-an-object-in-an-abelian-category-form-a-lattice.md library/abstract-algebra/maschkes-theorem-and-complete-reducibility.md`
  -> `OK — 6 file(s)`.
- `node tools/regen-contract-entries.mjs research/frontier-22-batch-1.proof-contracts.json lem-conjugacy-of-cyclically-britton-reduced-hnn-words-reduces-to-associated-subgroup-conjugacy thm-conjugacy-theorem-for-cyclically-reduced-hnn-words thm-unique-reduced-path-characterisation-of-simplicial-trees lem-barycentric-subdivision-removes-edge-inversions lem-nonempty-fixed-vertex-set-of-a-tree-automorphism-is-a-subtree`
  -> regenerated `5` affected batch-1 entries.
- `node tools/proof-contract.mjs research/frontier-22-batch-1.proof-contracts.json --strict`
  -> `0 error(s), 0 warning(s), 44/44 item(s) checked`.
- `node tools/proof-contract.mjs research/frontier-22-batch-3.proof-contracts.json --strict`
  -> `0 error(s), 0 warning(s), 24/24 item(s) checked`.
- `node tools/proof-contract.mjs research/frontier-22-batch-8.proof-contracts.json --strict`
  -> `0 error(s), 0 warning(s), 44/44 item(s) checked`.
- `node tools/content-policy.mjs research/frontier-22-batch-1.pages.json research/frontier-22-batch-8.pages.json`
  -> `122 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/risk-report.mjs research/frontier-22-batch-1.proof-contracts.json --require-reviewed`
  -> `0 error(s), 44 item(s) routed`.
- `node tools/risk-report.mjs research/frontier-22-batch-3.proof-contracts.json --require-reviewed`
  -> `0 error(s), 24 item(s) routed`.
- `node tools/risk-report.mjs research/frontier-22-batch-8.proof-contracts.json --require-reviewed`
  -> `0 error(s), 44 item(s) routed`.
- `node tools/defect-ledger.mjs append --file /tmp/frontier-22-alpha-a-6b-ledger-rows.json`
  -> appended `35` rows and re-rendered `research/DEFECT-LEDGER.md`.
- `node tools/defect-ledger.mjs validate --run frontier-22`
  -> `178 defect row(s) checked, 0 error(s)`.
- `node tools/step6-scope.mjs stamp --run frontier-22 --group a`
  -> stamped `35` current carrier hashes.
- `node tools/step6-scope.mjs check --run frontier-22 --phase adjudicate --batch 1`
  -> `60 item(s) routed, 12 adjudication obligation(s), 0 error(s)`.
- `node tools/step6-scope.mjs check --run frontier-22 --phase adjudicate --batch 3`
  -> `29 item(s) routed, 3 adjudication obligation(s), 0 error(s)`.
- `node tools/step6-scope.mjs check --run frontier-22 --phase adjudicate --batch 8`
  -> `62 item(s) routed, 20 adjudication obligation(s), 0 error(s)`.

## Blockers

- None in the owned Step-6 batch scope.
