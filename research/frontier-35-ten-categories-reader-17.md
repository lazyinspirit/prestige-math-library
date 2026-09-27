# Step 5a reader report — batch 17

Run: `frontier-35-ten-categories`  
Role: reader  
Verdict: repairs made to assigned in-flight items; no uneditable defect remains.

## Opened inventory

Read the current prose of both manifest-listed pages:

- A page: `library/braid-groups/type-a-soergel-bimodules-and-hecke-categorification.md`
- B page: `library/braid-groups/type-a-soergel-bimodules-and-hecke-categorification-examples.md`

Read all 36 assigned item files in `items/`:

- A-page items: `def-type-a-reflection-realization-and-polynomial-ring`, `lem-type-a-reduced-words-are-connected-by-braid-moves`, `def-type-a-hecke-algebra-in-soergel-normalization`, `lem-type-a-hecke-standard-basis-for-soergel-comparison`, `def-type-a-soergel-bimodule-for-a-simple-reflection`, `lem-type-a-soergel-generators-are-finite-free-on-both-sides`, `def-bott-samelson-bimodule-of-a-word`, `def-the-type-a-soergel-category`, `def-type-a-standard-graph-bimodules-support-filtrations-and-character`, `lem-type-a-graph-bimodule-extension-vanishing`, `lem-bott-samelson-bimodules-have-delta-and-nabla-support-filtrations`, `lem-type-a-support-filtration-multiplicities-are-intrinsic`, `lem-type-a-soergel-frobenius-biadjunction`, `lem-type-a-character-recursion-under-simple-soergel-tensoring`, `lem-type-a-soergel-special-hom-formula`, `lem-type-a-top-support-layers-are-controlled-by-reflection-localization`, `thm-the-type-a-soergel-hom-formula`, `lem-the-rank-one-soergel-bimodule-square-splits`, `lem-distant-soergel-generators-commute`, `def-the-rank-two-longest-type-a-soergel-bimodule`, `thm-rank-two-type-a-soergel-bimodule-decompositions`, `def-type-a-diagrammatic-soergel-category-and-its-bimodule-functor`, `def-split-grothendieck-rings-of-type-a-soergel-categories`, `lem-the-type-a-diagrammatic-relations-hold-for-soergel-bimodules`, `thm-double-leaves-form-graded-r-bases-of-type-a-diagrammatic-hom-spaces`, `thm-indecomposable-type-a-diagrammatic-soergel-objects-are-indexed-by-permutations-and-shifts`, `thm-the-diagrammatic-character-is-the-split-k-zero-hecke-isomorphism`, `thm-light-leaf-maps-form-bases-of-type-a-soergel-homs-to-the-unit`, `thm-evaluated-double-leaves-form-bases-of-type-a-soergel-bimodule-homs`, `thm-type-a-diagrammatic-and-bimodule-soergel-categories-are-equivalent`, `thm-split-grothendieck-group-of-the-soergel-category-is-the-type-a-hecke-algebra`, and `lem-the-type-a-standard-character-is-multiplicative`.
- B-page items: `ex-the-rank-one-soergel-category`, `ex-the-type-a-two-rank-two-soergel-decomposition`, `ex-hecke-quadratic-relation-from-the-soergel-square`, and `cex-bott-samelson-words-related-by-a-braid-need-not-be-isomorphic-bimodules`.

For dependency checks, opened the current files `items/def-graded-ring-module-bimodule-and-internal-shift`, `items/lem-reduced-adjacent-transposition-words-have-well-defined-positive-lifts`, `items/thm-von-dyck`, `items/thm-induction-principle`, `items/thm-adjacent-transpositions-generate-the-symmetric-group`, `items/thm-transpositions-generate-the-symmetric-group`, `items/lem-finite-weyl-strong-exchange-and-deletion`, `items/def-field`, `items/def-local-ring`, `items/def-the-idempotent-completion-of-a-preadditive-category`, and `items/thm-fundamental-theorem-of-symmetric-polynomials`. Also checked the relevant current supplier-page summaries in `library/homological-algebra/graded-bimodules-and-tensor-functors.md` and `library/braid-groups/garside-structure-normal-forms-and-the-center.md`.

Opened the relevant primary-source passages: Soergel, *Kategorie von Hecke-Algebren und ihre Darstellungstheorie*, Bemerkung 6.2 (PDF p. 16) and Lemma 6.3 (PDF p. 18), [PDF](https://home.mathematik.uni-freiburg.de/soergel/PReprints/bimodrevision.pdf); Libedinsky, *A Gentle Introduction to Soergel Bimodules I*, §4.3 (PDF pp. 21–22) and §4.4 (PDF pp. 22–25), [PDF](https://arxiv.org/pdf/1702.00039); and the cited sections of Elias–Williamson, *Soergel Calculus*, [PDF](https://arxiv.org/pdf/1309.0865).

## Repairs

1. In `items/lem-the-rank-one-soergel-bimodule-square-splits.md`, corrected the shifted graded rank. With the library convention `M{k}_d=M_{d-k}`, shifting the two generators of degrees `-1,+1` by `k` gives `v^{k-1}+v^{k+1}`. Thus shifts `-1,+1` give `v^{-2}+1` and `1+v^2`, respectively. Updated the corresponding derivation and dependent batch proof-contract quotations. The rank-one splitting itself is supported by Libedinsky §4.3, pp. 21–22.

2. In `items/thm-rank-two-type-a-soergel-bimodule-decompositions.md` and `items/ex-the-type-a-two-rank-two-soergel-decomposition.md`, distinguished the coordinate roots/operators used in Libedinsky's calculation from the page's balanced diagrammatic normalization. The coordinate operators are `partial^beta_r`; the balanced operator is `epsilon_r partial^beta_r`. The two color factors change the sign of the zig-zag, and the balanced idempotent agrees with the coordinate idempotent after this translation. Updated both proof contracts' copied derivations to use the coordinate operators.

3. Qualified the formula `partial_i(alpha_i h)=2h` by `h in R^{s_i}` in `items/def-type-a-soergel-bimodule-for-a-simple-reflection.md`, `items/lem-type-a-graph-bimodule-extension-vanishing.md`, and `items/lem-the-type-a-diagrammatic-relations-hold-for-soergel-bimodules.md`, and in the rank-two theorem and example facts. This follows directly from the definition: `partial_i(alpha_i h)=(alpha_i h-s_i(alpha_i h))/alpha_i=2h` when `s_i(h)=h`; for arbitrary `f`, the result is `f+s_i(f)`, not `2f`. Updated the affected batch contract citations.

4. In `items/lem-type-a-support-filtration-multiplicities-are-intrinsic.md`, replaced the adjacent-swap argument where repeated copies of a graph make the distinct-support swap hypothesis inapplicable. The proof now compares the canonical Bruhat-layer quotients and groups their multiplicities by graph index, using Soergel Lemma 6.3, PDF p. 18. Updated the contract facts, derivations, and boundaries to match.

5. In `items/thm-rank-two-type-a-soergel-bimodule-decompositions.md`, corrected the source of the map onto the longest summand to `R tensor_{R^W} R(3)`. The unshifted source would make the displayed map degree `-3`, not degree zero, and would not match the claimed longest bimodule. Libedinsky §4.4.1–4.4.2, PDF pp. 24–25, explicitly gives the shifted `(3)` source and map. Updated the proof contract accordingly.

6. In `items/def-type-a-standard-graph-bimodules-support-filtrations-and-character.md`, repaired Remark 4's argument that every section has support a union of graphs. The previous reasoning inferred this for arbitrary sections from irreducibility, without assuming the section support irreducible; Soergel's Bemerkung 6.2 makes that irreducibility assumption before the argument (PDF p. 16). The replacement filters the cyclic submodule generated by a section: each induced quotient embeds into a single-graph module, so it has either empty support or that graph, and support is additive across the finite filtration. The cited proof-contract quotations concern the earlier support-filtration definition, not this remark, so none required revision for this repair.

No `verification.judge` record was present on the eight changed items. No A-page or B-page prose was edited. The batch proof-contract file is valid JSON after the updates.

## Reflow and precheck

Ran `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` and then `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md` for every changed item. Reflow reported `unchanged` for each. Precheck reported `0 failing` for all eight; the six claim-bearing items passed directly, and the two definition-only items had `0 checked, 0 failing`.

| Changed item | Reflow | Precheck |
|---|---|---|
| `def-type-a-standard-graph-bimodules-support-filtrations-and-character` | unchanged | 0 checked, 0 failing |
| `lem-the-rank-one-soergel-bimodule-square-splits` | unchanged | PASS; 1 checked, 0 failing |
| `thm-rank-two-type-a-soergel-bimodule-decompositions` | unchanged | PASS; 1 checked, 0 failing |
| `ex-the-type-a-two-rank-two-soergel-decomposition` | unchanged | PASS; 1 checked, 0 failing |
| `lem-type-a-support-filtration-multiplicities-are-intrinsic` | unchanged | PASS; 1 checked, 0 failing |
| `def-type-a-soergel-bimodule-for-a-simple-reflection` | unchanged | 0 checked, 0 failing |
| `lem-type-a-graph-bimodule-extension-vanishing` | unchanged | PASS; 1 checked, 0 failing |
| `lem-the-type-a-diagrammatic-relations-hold-for-soergel-bimodules` | unchanged | PASS; 1 checked, 0 failing |

## Page verdicts

- **A page:** The current prose, conventions, and theorem map were reviewed. No page-level defect was found. The in-flight item repairs above address their individual claims.
- **B page:** The current examples prose was reviewed. The rank-one degree sets are `{−2,0}` and `{0,2}`, and the prose's rank-two example is consistent with the coordinate calculation after the item repair. No page-level defect was found; no B-page prose was edited.

## Uneditable defects and blockers

None identified. No blocker remains.
