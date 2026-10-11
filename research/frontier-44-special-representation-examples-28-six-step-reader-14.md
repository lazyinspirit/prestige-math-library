# Independent reader 14 — batch 14

Run: `frontier-44-special-representation-examples-28-six-step`. This is a reader report, not a judge stamp or publication decision. Review used the current carriers independently of manifest strategies and earlier author decisions. All 17 assigned items and both pages were opened; 13 assigned draft items, their affected proof contracts, and A-page prose were repaired. B-page prose, other batches, published items, and the plan were not edited.

## Page verdicts

- `cores-quotients-and-blocks-of-symmetric-groups` (A): **hold on the representation branch**. The abacus/core/quotient arguments are repaired and independently checked. The full block and weight-one claims are retained; their local arguments now state the necessary conventions and supplied finite-algebra prerequisites. The three fatal outside-supplier proof obligations below prevent unconditional acceptance of the Schur/Murphy/Jantzen foundation. A-page prose now restricts same-runner relocation to divisible hook lengths and states the q-Schur stable range.
- `cores-quotients-and-blocks-of-symmetric-groups-examples` (B): **hold on source-dependent block conclusions**, with the two abacus examples numerically and logically checked. The counterexample's cores, hook counts and weights are correct after the hook-list repair. The characteristic-three group module/form calculation is direct; the q-Schur matrix and block claims still consume the held suppliers. No B-page prose edit was made.

## Assigned opened inventory and outcomes

Both `library/special-topics-in-representation-theory/cores-quotients-and-blocks-of-symmetric-groups.md` and its `-examples.md` companion were read, including their summaries and frontmatter inventories.

| Assigned item | Reader outcome |
| --- | --- |
| `def-beta-set-and-e-runner-abacus-of-a-partition` | Unchanged: P, beta shifts, inverse, finite configurations and empty partition checked. |
| `lem-hooks-are-bead-gap-pairs-on-an-abacus` | Rebuilt gap/removal proof; row versus existential hook criterion corrected. |
| `def-e-core-e-quotient-and-e-weight` | Repaired runner overlap, shift counts, quotient normalization and regularity proof. |
| `lem-virtual-weyl-combinations-detect-q-schur-block-separation` | Repaired supporting facts; supplied indecomposability and precise weight-matrix independence argument. |
| `thm-e-core-is-independent-of-the-rim-hook-removal-order` | Repaired facts/strip notation and shift proof; added normalized quotient well-definedness. |
| `thm-e-quotient-controls-hooks-divisible-by-e` | Bijection checked; specified that hook removal means its corresponding rim-strip removal. |
| `prop-core-quotient-size-and-weight-formula` | Corrected self-references and the induction over every possible first removal; made rim-strip notation explicit. |
| `thm-q-schur-weyl-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core` | Retained the corrected connectivity proof; explicit finite/infinite/zero-rank conventions, conjugate-core argument and finite-algebra suppliers added. Supplier hold remains. |
| `thm-weight-one-block-decomposition-pattern` | Retained full matrices; added finite-e and d>=n hypotheses, complete one-move enumeration, dominance comparison and empty-core convention. Supplier hold remains. |
| `cor-type-a-hecke-specht-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core` | Both block-count inequalities checked; repaired finite/infinite indexing convention and named Wedderburn supplier. |
| `thm-nakayama-block-classification-for-symmetric-groups` | Unchanged mathematics: specialization/core and weight parametrization checked against opened targets; stale specialization contract quotation refreshed. |
| `prop-weight-zero-symmetric-group-blocks-are-defect-zero` | Corrected ordinary Specht dominance direction, projective-cover citation, all-Specht-row bookkeeping and multiplicity-one justification. |
| `rem-block-weight-is-not-the-same-as-numerical-defect` | Added the missing block-classification dependency and citation; no positive-weight defect-group formula was asserted. |
| `ex-three-core-and-three-quotient-by-abacus` | Unchanged: all beads, intermediate partitions, four divisible hooks and their quotient images checked. |
| `ex-three-core-of-four-three-two-one` | Unchanged: both three-step removal orders and the terminal core checked. |
| `cex-the-same-number-of-removable-p-hooks-does-not-replace-the-core-test` | Corrected both size-two cores to hook lists (2,1), retaining the distinct-core witness. |
| `ex-a-weight-one-block-decomposition-matrix` | Preserved all matrices; stated q=1/characteristic 3, cited integral base change, and proved the polytabloid basis/extreme modules and James form quotient directly. |

## Repair evidence

1. **Bead-gap lemma, old Proof 1.1/2.2/2.4 and Statement (iii).** The old zero case treated the exclusion of the bead incorrectly, used the hook-set equivalence before shift invariance, and asserted unconditional preservation of runner counts after arbitrary hook relocation. The repaired proof uses the exact padded formula `h_i=lambda_i+m-i`, gaps `g_j=m+j-1-lambda'_j`, and the sorted insertion of that gap. It handles the empty/padded rows explicitly. Its final statement distinguishes a fixed row from existence in any row. This directly derives the same substantive hook/strip dictionary, with the corrected divisibility hypothesis. Law/Tomczak Corollary 4.5 and Proposition 4.7 provide independent source comparison; several typos in the printed proof were not copied.
2. **Core definition, Runner label sets and Remarks.** For example, runner sets `{0}` and `{0}` overlap. A one-shift has counts `(c_(e-1)+1,c_0,...,c_(e-2))`, not a mere permutation; an e-shift increases each count and replaces each runner set by its one-shift, preserving its partition. The old regularity argument assigned zero arm length to all nodes in column a, including rows longer than a; the repair uses the bottom e rows whose length actually equals a. These corrections preserve the original core/normalized quotient definitions.
3. **Core-independence theorem.** The old F3 falsely claimed every ordered pair of beta-sets was related by a nonnegative shift in that order. The corrected fact permits interchanging them. The explicit runner shift gives packed-set commutation, proves normalized ordered quotient invariance, and closes the definition's previously undischarged quotient assertion. Bead movement uses one row/e labels and nonnegative positions, and removes the corresponding rim strip. The prechecker reordered independent construction steps; its proposal was adopted with references preserved.
4. **Quotient theorem and size proposition.** Ordinary arm/leg hooks are not themselves generally removable node sets. The notation now explicitly means removal of their corresponding rim strips. The proposition's old steps 3.1 and 4.1 cited themselves; repaired references point to the earlier induction step. The proof applies its argument to every possible first removal instead of presupposing an order-independent step count.
5. **Virtual Weyl block separation.** Removed the false language about arbitrary modules' 'actual Weyl multiplicities'; arbitrary modules need not have Weyl filtrations. A simple head forces indecomposability because each nonzero finite-dimensional summand has a simple quotient. Central block projections then either retain or kill a Weyl module. Applying exact weight dimensions to a zero virtual Weyl combination and the restricted unitriangular Kostka matrix supplies the precise independence argument. The Kostka theorem was opened and added as a supplier.
6. **q-Schur block theorem.** The finite core-index congruence no longer applies to infinity; `C_infinity(lambda)=lambda` is expressly a separate convention, and rank zero is checked directly. The conjugate beta-set argument now includes the proof that transposition conjugates cores. The Cartan derivation now names the actual cellular tensor-layer, nilpotent-radical and Wedderburn results. Its lift computation records the actual error update `-3a^2+4a^3`. The binary-row/vertical-removal and two-target bridge arguments were checked against the complete corrected Lyle–Mathas proofs, not the manuscript's erroneous first-row-only argument.
7. **Weight-one theorem.** The original Statement omitted the Schur rank and allowed an undefined infinite weight-one size. It now specifies finite e and d>=n. A fixed normalized beta length determines a unique packed set for the core; total displacement one moves one runner's bottom bead. The pair of lost/gained beta values also proves the asserted dominance chain. Empty core rows are padded by zero. Signed coefficients and positivity induction are retained, and the direct finite checks below independently reproduce the alternating sum.
8. **Hecke block corollary.** The two opposite block-count inequalities and their matching idempotent supports are valid. Corrected the infinite-parameter core notation, the typo 'partition n', and the unnamed Wedderburn use in the semisimple-corner argument.
9. **Weight-zero proposition.** The opened group unitriangularity theorem says the simple label dominates the Specht row label, whereas old F4 reversed this. A simple head does not alone prove diagonal multiplicity one. The corrected proof uses the actual unitriangular diagonal and shows every Specht row in the block has the same size-n core and is therefore lambda. The projective-cover interpretation of Cartan entries is cited to its actual defining supplier, rather than to the defect-group definition.
10. **Counterexample.** Both `(2)` and `(1,1)` have hook lengths 2 and 1. Their core status, single removable 3-hook, weight one and distinct cores survive the correction.
11. **Characteristic-three example.** The displayed middle polytabloids span all differences of the three tabloid vectors and are independent. The original complex-only tabloid/Specht definitions were insufficient as citations for characteristic-three base change; the integral supplier was opened and added. The extreme shapes are derived from their finite polytabloid formulas. The ordinary Gram matrix is `[[2,1],[1,2]]`, with characteristic-three kernel spanned by the all-ones vector; thus its James quotient is sign, while the one-row quotient is trivial. Conjugacy of transpositions proves the one-dimensional quotient's full sign action. The independent Murphy action/form computation, all balanced beta sequences and both displayed matrices were checked. An unsupported attribution of these label identifications merely to the abstract classification was replaced by the direct calculation.
12. **Remark and A-page prose.** The remark now declares its actual finite-Hecke block supplier. The summary restricts same-runner relocation to e-divisible hooks and gives the Schur stable range. The unproved positive-weight defect-group formula remains explicitly outside the asserted results.

Every materially edited proof contract has current step claims, inputs, exact supplier quotations and fact uses. Quotations in unchanged assigned consumers were refreshed where their sources changed; the Nakayama contract's stale specialization quotation was also corrected. Stale judge records were removed from edited items where present. No mathematical acceptance stamp was added.

## Opened prerequisite inventory

The following direct supplier carriers were opened for their definitions/statements and used local arguments. They were not treated as automatically valid because of their status or previous audits. This list records actual supplied content reading, not a recursive audit of every supplier's own closure:

- `items/def-alternating-weyl-and-specht-symbols-from-beta-sequences.md`.
- `items/def-blocks-of-a-finite-dimensional-algebra-by-primitive-central-idempotents.md`.
- `items/def-column-antisymmetrizer-polytabloid-and-specht-module.md`.
- `items/def-defect-group-and-numerical-defect-of-a-block.md`.
- `items/def-dominance-order-on-partitions.md`.
- `items/def-e-regular-and-e-restricted-partitions.md`.
- `items/def-grothendieck-group-of-an-essentially-small-abelian-category.md`.
- `items/def-hook-arm-leg-and-hook-length.md`.
- `items/def-p-blocks-by-primitive-central-idempotents.md`.
- `items/def-partition-young-diagram-and-conjugate-partition.md`.
- `items/def-q-integer-q-factorial-and-q-multinomial.md`.
- `items/def-quantum-characteristic-of-an-invertible-hecke-parameter.md`.
- `items/def-removable-and-addable-nodes-of-a-partition.md`.
- `items/def-removable-border-strip-and-height.md`.
- `items/def-schur-idempotent-and-schur-functor-for-type-a-q-schur-algebras.md`.
- `items/def-splitting-p-modular-system-for-a-finite-group.md`.
- `items/def-type-a-hecke-specht-module-and-cell-form.md`.
- `items/def-type-a-q-schur-algebra-and-weyl-modules.md`.
- `items/def-young-subgroup-tabloid-and-permutation-module.md`.
- `items/lem-cell-form-is-associative-and-its-radical-is-a-submodule.md`.
- `items/lem-central-idempotent-decompositions-of-one-are-unique.md`.
- `items/lem-dj-bridge-murphy-cellular-basis-and-cell-form.md`.
- `items/lem-dj-bridge-row-permutation-module-standard-action.md`.
- `items/lem-hooks-correspond-to-removable-border-strips.md`.
- `items/lem-semistandard-weight-dimensions-detect-virtual-weyl-classes.md`.
- `items/lem-the-identity-of-a-finite-dimensional-algebra-decomposes-into-primitive-central-idempotents.md`.
- `items/prop-hecke-specht-theory-specializes-to-group-specht-theory-at-q-one.md`.
- `items/prop-p-regular-and-p-restricted-simple-labels-are-related-by-conjugate-sign-duality.md`.
- `items/thm-cartan-matrix-is-d-transpose-d.md`.
- `items/thm-defect-zero-blocks-are-simple-algebras.md`.
- `items/thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell.md`.
- `items/thm-modular-simple-modules-of-sn-are-the-p-regular-specht-heads.md`.
- `items/thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra.md`.
- `items/thm-q-schaper-virtual-radical-layer-formula.md`.
- `items/thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules.md`.
- `items/thm-symmetric-group-decomposition-matrix-is-dominance-unitriangular.md`.

Additional prerequisite bodies opened:

- `items/def-cellular-algebra-basis-and-cell-module.md`.
- `items/def-integral-specht-lattice-and-base-change.md`.
- `items/def-modular-specht-form-and-radical-quotient.md`.
- `items/def-projective-indecomposable-characters-and-cartan-invariants.md`.
- `items/def-semistandard-tableau-and-kostka-number.md`.
- `items/lem-kostka-change-of-basis-is-dominance-unitriangular.md`.
- `items/thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple.md`.
- `items/thm-wedderburn-artin-theorem.md`.
- `items/thm-simple-type-a-hecke-modules-are-indexed-by-e-regular-partitions.md`.
- `items/thm-q-schur-weyl-weight-space-gram-determinant-hook-product.md`.
- `items/def-jantzen-filtration-of-a-lifted-cell-module.md`.
- `items/lem-jantzen-layer-dimensions-equal-the-gram-determinant-valuation.md`.
- `items/def-murphy-elements-and-murphy-tableau-elements.md`.

Additional focused interfaces opened: `def-generic-type-a-hecke-algebra` (Definition), `thm-standard-basis-of-the-generic-type-a-hecke-algebra` (Statement), `def-left-and-right-modules` (Definition), and `def-direct-sum-of-a-family-of-modules` (Definition).

## Authoritative source reading

- [Law/Tomczak, Representation Theory of Symmetric Groups](https://math.berkeley.edu/~ltomczak/notes/Mich2022/RepSn_Notes.pdf), printed/PDF pp.53–63: complete relevant beta-set, gap, hook relocation, runner-shift, core and quotient arguments; Proposition 4.12 proof. Lemma 4.9's proof is left to an exercise in the source, so its identities were proved locally rather than claimed as a read source proof.
- [Mathas, Hecke algebras and Schur algebras of the symmetric group](https://web.math.ucsb.edu/~bigelow/books/mathas.pdf): Corollary 5.37 and Proposition 5.38 complete printed proofs, pp.62–63; Lemma 3.13, Lemma 3.14 and Corollary 3.15 with complete proofs, pp.22–23; Theorem 4.10 and Corollary 4.12 with their proofs, pp.39–40, and Theorem 4.14 with its complete proof, p.41; Lemmas 5.13–5.17 and Theorem 5.18, complete relevant arguments, pp.49–51, also the preceding standard norm comparison on pp.48–49. PDF pages were rendered locally where text glyph extraction was unreliable. The source establishes the asserted basis/norm statements, but a literature reference does not replace the missing active local suppliers required by SCHEMA.
- [Lyle–Mathas, Blocks of cyclotomic Hecke algebras](https://arxiv.org/pdf/math/0607451), printed/PDF pp.12–14 and 17–18: complete Proposition 3.6(b), Proposition 3.7 and Proposition 4.2/Corollary 4.3 proofs and the correcting Remark. This confirms the direction and caveat of the connectivity route retained in the owned block theorem.

## Uneditable supplier findings

The JSON carrier supplies exact item IDs, assigned consuming items and raw observed-byte bindings for currently inspected producer content. All these items belong to other exact current-run batches, not to the published library or this batch.

### `def-removable-border-strip-and-height` — nonfatal

Location: Definition, The counting identity; Remarks, Border strips are the pieces of the rim that can be peeled off. Assigned consumer: `lem-hooks-are-bead-gap-pairs-on-an-abacus`. Class: `false-claim`.

The asserted downward/rightward traversal is false in the fixed English convention. For lambda=(2,2), nu=(1), the removable strip consists of (1,2),(2,2),(2,1); from its northeast end it travels down then left. The width/height identity remains correct. Replace the traversal by left/down (or its reversed up/right traversal) and justify the rim-path assertion; the opened hook/rim-strip supplier proves the appropriate left/down path.

Observed current raw SHA-256: `d876773c9b63f43d7e4b7febe29bdaac2775388e40e87a2bdc8a857bba92f23f`.

### `lem-hooks-correspond-to-removable-border-strips` — nonfatal

Location: Remarks, Sizes versus shapes (historically observed text). Assigned consumer: `lem-hooks-are-bead-gap-pairs-on-an-abacus`. Class: `false-claim`.

The originally opened remark gave hooks of (3,2) as 4,3 on the rim and 2,1 below-right. Direct hook arithmetic gives rows (4,3,1) and (2,1), and the nodes of lengths 4 and 3 are not both rim nodes. Original observed raw SHA-256 was df4f3f289ffedf3539359e16f4f33800c755ed0041417ba03d7ab84489b91869. Another writer corrected this remark during review: current raw SHA-256 d5ac7e1bc8d4efd39d57030b61827b6097cc0c93531671947ec3bcfe7b1423b1 has the correct rows. The historical bytes are not available as a verified producer pre snapshot, so observed_source is null. This historical finding is resolved on the inspected current remark; do not bind it to corrected current bytes.

### `def-type-a-q-schur-algebra-and-weyl-modules` — fatal

Location: Definition, Cellular structure and Explicit normalization of the semistandard maps. Assigned consumer: `lem-virtual-weyl-combinations-detect-q-schur-block-separation`. Class: `unlicensed-inference`.

The End_H(M) construction is followed by assertions of the semistandard Hom/intersection basis, the swap anti-involution, and the cellular triangular law, without a local proof or justified_by supplier. The opened cellular definition gives conditional axioms, the Murphy-elements definition gives Hecke elements, and the opened standard-basis theorem only gives the Hecke basis; none establishes the semistandard Schur basis. Thus the Weyl cell module/form and its weight dimensions used by this batch are not locally discharged. Supply a proved semistandard intersection/Hom basis and cellularity theorem, including the actual map normalization and base change; the source identifies these as Mathas Corollaries 4.9/4.12 and Theorem 4.14, not a consequence of the definition of an endomorphism algebra.

Observed current raw SHA-256: `37c120cf383f18b5a44a1209bd520ee7ab613a75d8ff5e163eb5ed78f4ee6275`.

### `lem-dj-bridge-murphy-cellular-basis-and-cell-form` — fatal

Location: Proof 5.1, Two-index straightening; Proof 7.1 and 9.1 use of first-index stability. Assigned consumer: `ex-a-weight-one-block-decomposition-matrix`. Class: `unlicensed-inference`.

Step 5.1 presupposes, for every nonstandard row-standard tableau t, a Garnir tableau g and t=g*w with additive length, replacing its proof by instructions to choose a violation and order swaps. The earlier support lemma proves an implication assuming such an additive factorization; it does not establish its existence. Moreover the stated two-index reduction permits changing the first index, whereas 7.1/9.1 subsequently require the stronger fixed-first-index reduction with coefficients independent of that index. Supply the factorization induction and the fixed-index specialization of straightening. I read Mathas Lemma 3.13 and its complete inductive proof (printed p.22), Lemma 3.14 (pp.22-23), and Corollary 3.15 (p.23); these are the missing intermediate arguments, rather than an automatic implication from the support estimate.

Observed current raw SHA-256: `6f35fad3832a075f85594e1c17983763bdff5d1bd7b60f89bd56de5d28c3ecdc`.

### `thm-q-schur-weyl-weight-space-gram-determinant-hook-product` — fatal

Location: Proof 2.1, Compute the semistandard norms, including the missing scalar. Assigned consumer: `thm-q-schur-weyl-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core`. Class: `unlicensed-inference`.

The proof introduces unnamed maps U_T,V_T, asserts their adjointness, V_T f_t=pi_t psi_T, and the leading coefficient one of U_T psi_T, without defining these maps or calculating the displayed scalars from the semistandard maps. Standard-tableau seminormal action and the regular Schur corner identity do not establish the nonregular weight comparison. I read the complete Mathas Lemmas 5.13-5.17 and Theorem 5.18 arguments (printed pp.49-51): they define the specific canonical weight maps, prove the fiber leading term and eigenvector property, compute the first-standardization scalar, and propagate it by adjacent swaps. Supply those normalized maps and computations locally (or as proved suppliers) before applying the norm formula; the current short references to evaluation and bubble sorting do not supply them.

Observed current raw SHA-256: `e44ac2efca9444a6a819bb669a4038079959941490a5778fa96f64ffc442e905`.

### `lem-jantzen-layer-dimensions-equal-the-gram-determinant-valuation` — nonfatal

Location: Proof 1.1, Since f_1,...,f_d is an R-basis of Hom_R(M,R). Assigned consumer: `thm-q-schur-weyl-modules-are-in-the-same-block-iff-their-labels-have-the-same-e-core`. Class: `false-claim`.

F2 defines f_j as a second basis of M, not a basis of Hom_R(M,R). If the Smith diagonal has a nonunit entry, the pairing images of f_j do not form a dual basis either: for M=Z with pairing 3xy, the pairing image of f_1 generates 3Z inside the dual Z. The ensuing divisibility test is valid because the f_j form a basis of M. Replace the false dual-basis assertion by this actual basis-of-M reason; no additional result is required and the valuation identity itself is unaffected.

Observed current raw SHA-256: `0016df153b050e05bb2374b41a4c184dbca54ce49dd84950dc3b5b939941c902`.


## Consumer checks and additional outside-consumer defect

The dependency graph identified 46 consumers downstream of the changed foundational claims, including 34 outside this batch. All owned consumers were checked during the supplier-first repair pass. The two direct external consumers were read in full after the repaired interfaces were fixed: `lem-fixed-component-core-multipartitions-are-cyclotomic-jantzen-connected` preserves the finite-e core/weight and all-rank Hecke criterion uses; `lem-charged-core-height-matrices-have-content-preserving-descent-and-minimal-switch-connectivity` preserves the core-removal theorem use but has the independent defect below. The other external consumers received focused claim/interface checks, not full independent KLR/Fock proof audits.

**Additional uneditable consumer defect, batch 48:** `lem-charged-core-height-matrices-have-content-preserving-descent-and-minimal-switch-connectivity`, Facts F1 and its attribution in Given, falsely says any integer set with full negative tail and bounded positive tail determines a partition at an already fixed charge c. With c=0 and B={0,-1,-2,...}, its formula yields lambda_i=1 for every i, hence no finite partition. The infinite beta set must have charge balance c, equivalently beta_i=c-i eventually (or the corresponding finite-reference bead-minus-gap count). The assigned core definition only defines finite normalized beta-sets, so it does not supply this infinite charged convention or its converse. Establish the charge-balanced correspondence locally and apply it to the matrices in step 1.3; the column-sum condition there appears to be the intended balance, but it does not make the stated unrestricted F1 true. This is a confirmed false prerequisite claim, not a change forced by our repaired finite core convention. Raw observed current source SHA-256 is `a4b0177ef9612049ca6144090797bf0c218c94269fa051fe096abf6cb1bd02ae`.

This downstream item is not a supplier in an assigned item's dependency closure. The reader supplier-routing schema requires an assigned consumer reaching an outside item, so no false reversed dependency or assigned-item identity was invented in the JSON. The defect is escalated here for its batch-48 owner and recorded in coverage_note. No outside consumer was edited.

External consumer inventory (claim/interface sections opened):

- `items/cex-specializing-v-to-one-forgets-graded-decomposition-information.md`.
- `items/cex-the-whole-affine-hecke-algebra-is-not-one-cyclotomic-klr-block.md`.
- `items/cor-cyclotomic-hecke-blocks-inherit-a-nontrivial-z-grading.md`.
- `items/cor-graded-specht-classes-form-a-basis-of-the-module-grothendieck-group.md`.
- `items/def-graded-adjustment-polynomials-in-positive-characteristic.md`.
- `items/def-graded-cartan-pairing-between-projectives-and-modules.md`.
- `items/def-graded-module-and-projective-grothendieck-groups-for-klr-towers.md`.
- `items/def-graded-specht-module-by-homogeneous-standard-tableaux.md`.
- `items/def-integral-form-of-the-cyclotomic-hecke-klr-block.md`.
- `items/def-nondegenerate-root-of-unity-level-one-hecke-regime.md`.
- `items/def-residue-sequence-idempotents-and-cyclotomic-hecke-blocks.md`.
- `items/ex-degenerate-level-one-hecke-klr-map-for-s3.md`.
- `items/ex-level-one-rank-two-cyclotomic-klr-algebra-at-e-three.md`.
- `items/ex-projective-versus-simple-grothendieck-classes-in-a-small-block.md`.
- `items/lem-charged-core-height-matrices-have-content-preserving-descent-and-minimal-switch-connectivity.md`.
- `items/lem-degree-and-codegree-of-standard-tableaux.md`.
- `items/lem-fixed-component-core-multipartitions-are-cyclotomic-jantzen-connected.md`.
- `items/lem-graded-algebra-isomorphism-transports-the-graded-module-category.md`.
- `items/lem-positive-characteristic-specht-head-and-cyclotomic-crystal-labels-agree.md`.
- `items/lem-rational-garnir-annihilator-lines-present-the-specified-specht-generator.md`.
- `items/lem-reduction-of-characteristic-zero-simple-modules-modulo-p.md`.
- `items/prop-qg8-categorification-transports-across-the-hecke-klr-bridge.md`.
- `items/prop-shifted-degrees-and-garnir-exchanges-for-standard-tableaux.md`.
- `items/rem-canonical-bases-do-not-solve-arbitrary-positive-characteristic-decomposition-numbers.md`.
- `items/thm-ariki-canonical-basis-theorem-in-characteristic-zero.md`.
- `items/thm-brundan-kleshchev-blockwise-hecke-klr-isomorphism.md`.
- `items/thm-cyclotomic-hecke-central-content-sectors-are-zero-or-primitive-blocks.md`.
- `items/thm-cyclotomic-multipartitions-of-fixed-content-are-jantzen-connected.md`.
- `items/thm-graded-decomposition-numbers-equal-canonical-basis-coefficients-in-characteristic-zero.md`.
- `items/thm-graded-specht-classes-realize-standard-fock-vectors.md`.
- `items/thm-graded-specht-heads-classify-the-graded-simple-modules.md`.
- `items/thm-graded-specht-module-has-homogeneous-tableau-basis.md`.
- `items/thm-graded-specht-restriction-has-the-removable-node-filtration.md`.
- `items/thm-positive-characteristic-decomposition-polynomials-factor-through-adjustment.md`.

## Validation and limits

- Per-item `node tools/tsx-run.mjs tools/reflow.mts items/<id>.md` and `node tools/tsx-run.mjs tools/precheck.mts items/<id>.md` completed on all 13 changed items. The two initially proposed phase reorderings were adopted and rechecked; final results: 11 proof-bearing items pass and 2 prose/definition items are not applicable.
- `node tools/proof-contract.mjs research/frontier-44-special-representation-examples-28-six-step-batch-14.proof-contracts.json --strict`: 17/17 checked, zero errors and warnings.
- Explicit-path rendercheck of the 13 changed items and both assigned pages: 15 files, zero YAML/math/render errors.
- The required final single batched `node tools/proof-layout.mjs` command covered all 13 changed paths after the final item edits/reflow: **13 items, 56 steps, zero defects**.
- Independent finite arithmetic: all 139 partitions of size at most 10, e=2,...,5, four beta shifts, 4,424 rim-strip checks, all maximal hook-removal terminal cores, and all 41 complete weight-one classes in that range passed. The check also reproduces the signed balanced Jantzen sums; these finite checks supplement, and do not prove, the general statements.

No publication, judging, certification, native gate transition or outside-batch repair was attempted. The fatal representation-supplier proof gaps and the outside downstream charged-beta prerequisite are blockers for their owning leads. The corrected historical hook-list finding has no verified immutable pre-source-byte binding and is not asserted against its corrected current bytes. Broader recursive audits of all published prerequisites, and full proofs of the 34 outside KLR/Fock consumers, were not performed. Sources and checks listed above are the actual evidence produced.
