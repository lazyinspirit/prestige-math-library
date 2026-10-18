# Step 3a reader report — batch 49

Run: `non-ml-math-remaining-81-2026-10-18`  
Role: reader  
Verdict: both assigned pages pass after two in-scope corrections; no uneditable defects or blockers remain.

## Opened inventory

### Assigned pages

- A page: `library/quantum-algebra-and-representation-theory/vertex-modules-rational-and-logarithmic-regimes.md`
- B page: `library/quantum-algebra-and-representation-theory/vertex-modules-rational-and-logarithmic-regimes-examples.md`

### Assigned items

The 14 A-page items were read in dependency order:

- `lem-module-jacobi-formal-delta-substitution-identity`
- `def-vertex-algebra-module`
- `def-conformal-vertex-algebra`
- `def-admissible-vertex-algebra-module`
- `def-grading-restricted-generalized-vertex-module`
- `def-ordinary-vertex-module`
- `def-positive-energy-vertex-module`
- `def-rational-vertex-algebra`
- `def-c2-cofinite-vertex-algebra`
- `def-logarithmic-vertex-module`
- `def-rank-one-heisenberg-vertex-algebra`
- `thm-rank-one-heisenberg-vertex-operator-algebra`
- `lem-heisenberg-normal-ordered-fields-satisfy-module-jacobi`
- `thm-rank-one-heisenberg-jordan-fock-module`

The three B-page examples were read:

- `ex-trivial-vertex-algebra-is-rational`
- `cex-finite-simple-module-classes-do-not-imply-semisimplicity-for-a-commutative-vertex-algebra`
- `ex-rank-one-heisenberg-jordan-module-is-logarithmic`

### Dependency pages and items

Opened dependency pages:

- `vertex-algebra-state-field-foundations`
- `category-o-finiteness-duality-and-blocks`
- `highest-weight-theory-for-complex-semisimple-lie-algebras`

Opened dependency items needed for the formal conventions, oscillator construction, rationality example, and page-level BGG comparison:

- `def-formal-distribution-on-a-vector-space`
- `def-formal-laurent-series-and-residue`
- `def-vertex-algebra-state-field`
- `def-virasoro-algebra`
- `def-witt-algebra`
- `lem-witt-cubic-cocycle-is-a-2-cocycle`
- `def-polynomial-ring-on-a-family-of-indeterminates`
- `thm-polynomial-ring-on-a-family-is-a-commutative-ring`
- `def-monomials-on-an-index-set`
- `lem-state-field-reconstruction-from-local-generators`
- `def-axiom-of-choice`
- `def-choice-function`
- `cor-every-vector-space-has-a-basis`
- `thm-every-independent-set-extends-to-a-basis`
- `def-bgg-category-o`
- `thm-every-category-o-object-has-finite-length`
- `thm-category-o-decomposes-by-generalized-central-character`
- `thm-central-character-summands-split-into-linkage-blocks`

The batch proof contract file was read and its seven result rows were compared with the current proof steps and boundary records: the delta-substitution lemma, trivial rationality example, dual-number counterexample, Heisenberg VOA theorem, Heisenberg module lemma, Jordan Fock theorem, and logarithmic Heisenberg example. The rows match the reviewed claims and proof steps; no proof-contract edit was needed because the mathematical proofs were not changed. The theorem title is not represented in its derivation contract, and the module definition has no proof-contract row. Neither edited item had a `verification.judge` record to remove.

## Mathematical and source review

The formal delta identity was checked coefficientwise against the stated two binomial expansions: negative powers of `z_0` cancel, and each nonnegative `z_0` coefficient agrees after splitting the right-hand binomial sum at `n=j`. The local proof, not a citation substitution, establishes the identity. Nozaradan, *Introduction to Vertex Algebras*, §§1.2–1.3, gives the two expansion conventions and formal delta distribution; Huang–Lepowsky–Zhang, §2, Definition 2.9 and equation (2.37), gives the same formal delta terms in the module Jacobi convention. [Nozaradan](https://arxiv.org/pdf/0809.1380) · [Huang–Lepowsky–Zhang](https://arxiv.org/pdf/1012.4193)

The oscillator proof was checked independently from the explicit polynomial operators. The Heisenberg commutator, field truncation, translation covariance, vacuum creation, normal-product reconstruction, conformal modes, central term, and finite nonnegative weight spaces follow from the displayed formulas. The module lemma proves the common Wick expression, its iterate, and full three-variable module Jacobi, with degree projections supplying the coefficientwise finiteness argument for arbitrary `E` and `A`. The Jordan-family theorem correctly separates the nonzero and zero parameter cases: `L_F(0)` is nonsemisimple exactly when `λ ≠ 0`.

For source cross-checks, Arakawa–Moreau, *Arc Spaces and Vertex Algebras*, Theorem 2.2 (Wick formula, printed pp. 50–51), §2.9 Definition 2.6 and Lemma 2.8 (modules, p. 59), §3.1 Proposition 3.1 and Example 3.1 (Heisenberg construction, printed pp. 66–69), and §3.3 Example 3.4 (conformal Heisenberg field and central charge, pp. 71–72) state the corresponding constructions and conventions. The local item proofs supply the exact conclusions claimed here. [Arakawa–Moreau](https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf)

HLZ Definition 2.12 and Remark 2.27 give the generalized-eigenspace, finite-dimensionality, and lower-bound conventions used by the module definitions. The published BGG page and its local definition and finite-length/block statements support the A-page comparison; the page does not assert a VOA/category-O equivalence.

## Edits and evidence

1. `items/thm-rank-one-heisenberg-jordan-fock-module.md`: changed the title to say the family is grading-restricted and is logarithmic exactly when `λ` is nonzero. The former title read as though every parameter gave a logarithmic module; Statement and Proof step 3.1 explicitly show that `λ=0` is ordinary and not logarithmic.

2. `items/def-vertex-algebra-module.md`: corrected the Arakawa–Moreau source locator from §2.7 to §2.9, Definition 2.6 and Lemma 2.8. The opened source places “Modules over vertex algebras” in §2.9, p. 59. Added a locator note to HLZ Definition 2.9 identifying the lower-truncation, vacuum, and Jacobi clauses used here and distinguishing the additional conformal grading and Virasoro conditions in that source from this ungraded module definition.

For both changed items, `reflow.mts` reported `unchanged`. `precheck.mts` passed the theorem (1 proof checked, 0 failures) and returned 0 checked, 0 failures for the definition. The final batched command `node tools/proof-layout.mjs items/thm-rank-one-heisenberg-jordan-fock-module.md items/def-vertex-algebra-module.md` reported 2 items, 4 steps, 0 defects.

## Defects not edited

None. No defects were found in an out-of-scope draft supplier, published dependency, B-page prose, or other-batch carrier.

## Page verdicts

- `vertex-modules-rational-and-logarithmic-regimes` (A): **Pass.** The module-class distinctions, admissible rationality convention, `C_2` definition, explicit Heisenberg VOA/module construction, and page boundaries match the reviewed statements and proofs. Its rank-one family summary correctly records the `λ=0` ordinary case.
- `vertex-modules-rational-and-logarithmic-regimes-examples` (B): **Pass.** The one-dimensional rational example, finite-label nonsplit dual-number extension (explicitly nonconformal), and `λ=1` logarithmic module are correctly stated and verified by their suppliers and local calculations.

## Blockers and coverage limits

No blocker. Assigned pages and all 17 assigned items were opened; dependency statements and proof sections needed for the claims above were also opened. External-source review was limited to the cited relevant sections, not a general audit of those books or papers. No unresolved mathematical uncertainty remains for this batch.
