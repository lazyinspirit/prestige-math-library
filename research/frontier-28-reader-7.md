# frontier-28 reader-7 report

Date: 2026-09-01.
Run: `frontier-28`
Batch: `7`
Role: independent Step-6 reader

## Opened scope

- Control artifacts: `CLAUDE.md`, `README.md`, `research/frontier-28-reader.task.md`, `research/frontier-28-reader-recover-7.task.md`, `research/frontier-28-beta-7.task.md`, `research/frontier-28-batch-7.pages.json`, `research/frontier-28-batch-7.coverage.json`, `research/frontier-28-batch-7.proof-contracts.json`, `research/frontier-28-batch-7.notes.md`, `research/frontier-28-step6-hash-7-pre.json`, `research/plan-category-theory-track.md` (MA-15), `research/plan-spec.json`, and `.autopilot/frontier-28/status.md`.
- Assigned pages: `library/category-theory/braided-and-symmetric-monoidal-categories.md` and `library/category-theory/braided-and-symmetric-monoidal-categories-examples.md`.
- Assigned A-page items: `def-braiding`, `def-braided-monoidal-category`, `thm-the-inverse-braiding-is-a-braiding`, `thm-the-braiding-is-compatible-with-the-unit-constraints`, `thm-in-a-strict-braided-monoidal-category-the-braiding-satisfies-the-yang-baxter-equation`, `def-symmetric-monoidal-category`, `thm-in-the-presence-of-the-symmetry-axiom-one-hexagon-implies-the-other`, `def-braided-monoidal-functor`, `rem-being-braided-is-a-property-of-a-monoidal-functor`, `thm-the-cartesian-swap-braiding-is-a-symmetry`, `thm-the-double-braiding-center-is-symmetric`, `thm-every-braided-monoidal-category-is-monoidally-equivalent-to-a-strict-braided-one`, `def-braid-group-by-the-artin-presentation`, `thm-the-two-strand-braid-group-is-infinite-cyclic`, `thm-the-symmetric-group-has-the-coxeter-presentation`, `thm-the-braid-group-surjects-onto-the-symmetric-group`, `def-the-braid-category`, `cex-the-braid-category-is-braided-but-not-symmetric`, `thm-symmetric-coherence`, `cor-unbracketed-and-unordered-tensor-strings-are-well-defined-in-a-symmetric-monoidal-category`, `thm-braided-coherence-fails-in-the-symmetric-form`, `fs-every-diagram-built-from-the-associator-and-the-braiding-commutes`, `thm-the-braid-category-is-the-free-strict-braided-monoidal-category-on-one-generator`, `thm-braided-coherence-via-underlying-braids`, `cor-two-canonical-braided-composites-agree-exactly-when-their-underlying-braids-agree`, `rem-the-symmetric-and-braided-coherence-theorems-compare-s-n-with-b-n`, `fs-every-braided-monoidal-category-is-equivalent-to-a-strict-commutative-one`, `thm-monoid-objects-in-a-braided-monoidal-category-form-a-monoidal-category`, and `cor-monoid-objects-in-a-symmetric-monoidal-category-form-a-symmetric-monoidal-category`.
- Assigned B-page items: `ex-the-swap-braiding-on-sets`, `ex-the-braid-group-on-three-strands`, `ex-the-hexagon-checked-for-cartesian-products`, `ex-the-sign-braiding-on-supervector-spaces`, `ex-the-two-strand-braiding-in-the-braid-category-has-infinite-order`, `ex-two-canonical-maps-with-different-underlying-braids`, and `ex-commutative-monoid-objects-in-sets-are-ordinary-commutative-monoids`.
- Published dependency items opened for verification: `def-monoidal-category`, `def-natural-isomorphism`, `thm-the-left-unitor-of-a-tensor-product-is-determined`, `thm-the-right-unitor-of-a-tensor-product-is-determined`, `def-strict-monoidal-category`, `def-monoidal-equivalence`, `thm-mac-lane-strictification`, `thm-von-dyck`, `thm-free-groups-are-torsion-free`, `def-finite-symmetric-group-and-permutation-notation`, `lem-symmetric-group-is-a-group`, `thm-adjacent-transpositions-generate-the-symmetric-group`, `def-parenthesised-tensor-word`, `thm-a-category-with-finite-products-is-monoidal`, `def-monoid-object-and-comonoid-object-in-a-monoidal-category`, `thm-the-monoid-object-axioms-may-be-written-without-associators`, `thm-monoid-objects-in-a-cartesian-monoidal-category-are-monoids-in-the-ordinary-sense`, and `def-lax-strong-and-strict-monoidal-functor`.
- Primary-source passages re-opened for the disputed claims: EGNO Definition 8.1.1, Exercise 8.1.6, Proposition 8.1.10, Remark 8.2.5, and Exercise 8.8.2(iv); Mac Lane 1963 Sections 4-5; and Muger Sections 2 and 4, including the lines stating the Coxeter presentation, `B_2 \cong \mathbb Z`, the free strict braided theorem, and `Z_2(\mathcal C)` is symmetric.

## Design/spec check

- The live spec and the batch manifest agree on the owned pair, companion page, and order `365.029`.
- The older MA-15 design block still names a larger prerequisite set than the live spec; I recorded the drift and kept the current `plan-spec` prerequisite `closed-monoidal-categories-and-the-internal-hom-examples` unchanged.

## Confirmed defects and edits

1. Repaired `items/thm-the-braiding-is-compatible-with-the-unit-constraints.md`.
   The displayed unit-compatibility equations were reversed, so both composites in the statement were ill-typed for a braiding `c_{X,Y}: X \otimes Y \to Y \otimes X`. I corrected the two identities to `\rho_X \circ c_{\mathbf 1,X} = \lambda_X` and `\lambda_X \circ c_{X,\mathbf 1} = \rho_X`, and I rewrote the consequence step accordingly.
2. Repaired `items/thm-in-a-strict-braided-monoidal-category-the-braiding-satisfies-the-yang-baxter-equation.md`.
   The old displayed Yang-Baxter equation was ill-typed, and the proof's expansion did not derive it. I replaced the statement by the typed three-object relation and rewrote the proof through strictified hexagons plus naturality of `c_{X,-}`.
3. Repaired `items/thm-in-the-presence-of-the-symmetry-axiom-one-hexagon-implies-the-other.md`.
   The old proof appealed to the inverse-braiding theorem even though the theorem's hypotheses assume only one hexagon, so the argument was circular. I replaced it with the direct inversion-and-variable-permutation argument justified by the symmetry equation.
4. Repaired `items/def-braid-group-by-the-artin-presentation.md`.
   The definition only covered `n >= 2`, while `def-the-braid-category` uses `B_n` for all objects `n in \mathbb N`. I added the trivial `B_0` and `B_1` cases via the empty presentation.
5. Repaired `items/thm-the-symmetric-group-has-the-coxeter-presentation.md`.
   The old injectivity step relied on an uncited bubble-sort normal-form claim. I removed that unsupported derivation and recast the proof as a source-backed theorem using the re-opened Muger Section 4 presentation statement, while keeping the `n=0,1` endpoint cases explicit.
6. Repaired `items/thm-braided-coherence-via-underlying-braids.md` and `items/cor-two-canonical-braided-composites-agree-exactly-when-their-underlying-braids-agree.md`.
   The old theorem stated full mixed-object braided coherence but justified it only from the free braided category on one generator. I narrowed both statements to the fixed-object, fixed-tensor-power case that the one-generator free theorem actually proves, and aligned the proof text with that scope.
7. Updated `research/frontier-28-batch-7.proof-contracts.json`.
   I regenerated the changed contract entries and every downstream entry whose exact quoted source text changed: `thm-the-double-braiding-center-is-symmetric`, `thm-the-two-strand-braid-group-is-infinite-cyclic`, `thm-the-braid-group-surjects-onto-the-symmetric-group`, `thm-symmetric-coherence`, `thm-the-braid-category-is-the-free-strict-braided-monoidal-category-on-one-generator`, `ex-the-braid-group-on-three-strands`, and `ex-two-canonical-maps-with-different-underlying-braids`. I also corrected the stale boundary evidence rows that still pointed at the removed step numbering.

## Per-page verdicts

- `braided-and-symmetric-monoidal-categories`: pass after the repairs above. The current A-page prose, theorem statements, and proof contracts now match the opened dependencies and the checked source passages.
- `braided-and-symmetric-monoidal-categories-examples`: pass. I rechecked the example items against the repaired braid-group and coherence statements; no B-page-body edit was needed.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/def-braid-group-by-the-artin-presentation.md items/thm-the-braiding-is-compatible-with-the-unit-constraints.md items/thm-in-a-strict-braided-monoidal-category-the-braiding-satisfies-the-yang-baxter-equation.md items/thm-in-the-presence-of-the-symmetry-axiom-one-hexagon-implies-the-other.md items/thm-the-symmetric-group-has-the-coxeter-presentation.md items/thm-braided-coherence-via-underlying-braids.md items/cor-two-canonical-braided-composites-agree-exactly-when-their-underlying-braids-agree.md`
  Result: four proof-bearing items reflowed; the others were already stable.
- `node tools/tsx-run.mjs tools/precheck.mts items/def-braid-group-by-the-artin-presentation.md items/thm-the-braiding-is-compatible-with-the-unit-constraints.md items/thm-in-a-strict-braided-monoidal-category-the-braiding-satisfies-the-yang-baxter-equation.md items/thm-in-the-presence-of-the-symmetry-axiom-one-hexagon-implies-the-other.md items/thm-the-symmetric-group-has-the-coxeter-presentation.md items/thm-braided-coherence-via-underlying-braids.md items/cor-two-canonical-braided-composites-agree-exactly-when-their-underlying-braids-agree.md`
  Result: `6 checked, 0 failing`.
- `node tools/regen-contract-entries.mjs research/frontier-28-batch-7.proof-contracts.json thm-the-braiding-is-compatible-with-the-unit-constraints thm-in-a-strict-braided-monoidal-category-the-braiding-satisfies-the-yang-baxter-equation thm-in-the-presence-of-the-symmetry-axiom-one-hexagon-implies-the-other thm-the-double-braiding-center-is-symmetric def-braid-group-by-the-artin-presentation thm-the-two-strand-braid-group-is-infinite-cyclic thm-the-symmetric-group-has-the-coxeter-presentation thm-the-braid-group-surjects-onto-the-symmetric-group thm-symmetric-coherence thm-the-braid-category-is-the-free-strict-braided-monoidal-category-on-one-generator thm-braided-coherence-via-underlying-braids cor-two-canonical-braided-composites-agree-exactly-when-their-underlying-braids-agree ex-the-braid-group-on-three-strands ex-two-canonical-maps-with-different-underlying-braids`
  Result: `regenerated 13, skipped 1` (the skipped carrier was the non-contract definition `def-braid-group-by-the-artin-presentation`).
- `node tools/tsx-run.mjs tools/precheck.mts` over all 28 proof-bearing batch-7 scope items
  Result: `28 checked, 0 failing`.
- `node tools/proof-contract.mjs research/frontier-28-batch-7.proof-contracts.json --strict`
  Result: `0 error(s), 0 warning(s), 28/28 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-28-batch-7.proof-contracts.json --items-dir items --fail-on-missing-quote`
  Result: no missing quotes and no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-28-batch-7.proof-contracts.json --items-dir items --fail-on-contradicted`
  Result: no contradicted boundary dispositions.
- `node tools/content-policy.mjs research/frontier-28-batch-7.pages.json`
  Result: `36 scoped item(s), 0 error(s), 0 warning(s)`.
- `git diff --check -- items/def-braid-group-by-the-artin-presentation.md items/thm-the-braiding-is-compatible-with-the-unit-constraints.md items/thm-in-a-strict-braided-monoidal-category-the-braiding-satisfies-the-yang-baxter-equation.md items/thm-in-the-presence-of-the-symmetry-axiom-one-hexagon-implies-the-other.md items/thm-the-symmetric-group-has-the-coxeter-presentation.md items/thm-braided-coherence-via-underlying-braids.md items/cor-two-canonical-braided-composites-agree-exactly-when-their-underlying-braids-agree.md research/frontier-28-batch-7.proof-contracts.json`
  Result: clean.

## Uneditable defects

- None remain in the opened scope.

## Blockers

- None.
