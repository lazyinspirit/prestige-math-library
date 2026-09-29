# Step 5a Reader Report — Batch 17

- **Run:** `frontier-36-complete`
- **Role:** reader (`reader-17`)
- **Manifest:** `research/frontier-36-complete-batch-17.pages.json`
- **Verdict:** pass; no confirmed or suspected defect remains.
- **Blocker:** none.

## Inventory opened

### Assigned pages

- `library/representation-theory/specht-modules-and-the-irreducibles-of-the-symmetric-group.md` (A page)
- `library/representation-theory/specht-modules-and-the-irreducibles-of-the-symmetric-group-examples.md` (B page)

### Manifest prerequisite pages

- `library/representation-theory/young-diagrams-tableaux-and-permutation-modules.md`
- `library/abstract-algebra/maschkes-theorem-and-complete-reducibility.md`
- `library/abstract-algebra/characters-and-the-orthogonality-relations.md`

### Assigned items

All 21 item files listed by the manifest were opened and read:

**A page (17 items):**

- `def-column-antisymmetrizer-polytabloid-and-specht-module`
- `lem-polytabloid-covariance-and-column-sign`
- `def-invariant-inner-product-on-a-tabloid-module`
- `lem-column-collision-causes-antisymmetrizer-cancellation`
- `lem-column-antisymmetrizer-detects-dominance`
- `lem-antisymmetrizer-image-on-its-tabloid-module-is-one-dimensional`
- `thm-james-submodule-theorem-in-characteristic-zero`
- `lem-specht-module-has-nondegenerate-self-pairing-in-characteristic-zero`
- `thm-complex-specht-modules-are-irreducible`
- `thm-specht-to-permutation-homomorphism-dominance`
- `cor-distinct-specht-modules-are-inequivalent`
- `thm-complex-irreducibles-of-symmetric-groups-are-specht-modules`
- `def-tabloid-and-column-orders-for-specht-straightening`
- `lem-leading-tabloid-coefficient-of-a-standard-polytabloid`
- `lem-adjacent-column-garnir-relation`
- `lem-garnir-straightening-of-polytabloids`
- `thm-standard-polytabloid-basis`

**B page (4 items):**

- `ex-polytabloids-for-shape-two-one`
- `ex-trivial-and-sign-specht-modules`
- `ex-specht-modules-of-s3`
- `cex-specht-irreducibility-fails-without-the-characteristic-zero-hypothesis`

### Direct item dependencies

Opened each of the 41 unique direct dependency item files named by the assigned items. I checked the statement, relevant hypotheses and conventions, and the cited result or derivation needed at the use site. I read full arguments for the substantive combinatorial lemma, the finite-group Maschke theorem, the algebraically closed field class-count theorem, and the symmetric-group cycle-type corollary. The direct dependency inventory was:

`def-partition-young-diagram-and-conjugate-partition`; `def-young-tableau-standard-tableau-and-shape`; `def-row-and-column-stabilizers-of-a-tableau`; `def-young-subgroup-tabloid-and-permutation-module`; `def-inversions-inversion-number-and-sign`; `lem-tableau-stabilizers-transform-by-conjugation`; `thm-sign-is-a-homomorphism`; `lem-basic-combinatorial-lemma-for-tableaux`; `def-dominance-order-on-partitions`; `def-orthogonality-and-orthogonal-complement`; `def-subrepresentation-and-irreducible-representation`; `def-intertwiner-equivalent-and-faithful-representations`; `def-natural-numbers`; `def-symmetric-group`; `lem-symmetric-group-is-a-group`; `thm-group-actions-and-group-ring-modules-correspond`; `thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order`; `thm-number-of-bijections-of-a-finite-set`; `thm-number-of-irreducible-representations-equals-the-number-of-conjugacy-classes-when-k-is-algebraically-closed-and-char-k-does-not-divide-group-order`; `cor-symmetric-conjugacy-classes-are-indexed-by-cycle-types`; `def-finite-dimensional-representation-of-a-group-over-a-field`; `cor-symmetric-group-has-factorial-cardinality-again`; `def-finite-cardinality`; `thm-subset-of-a-finite-set`; `def-injection-surjection-bijection`; `def-complex-numbers-and-arithmetic`; `thm-complex-numbers-form-a-field`; `def-field-homomorphism`; `thm-the-complex-numbers-are-algebraically-closed`; `thm-reals-ordered-field`; `lem-of-naturals-positive`; `lem-characteristic-and-additive-order`; `lem-characteristic-divisibility-and-invertibility-of-a-natural-scalar-in-a-field`; `lem-nat-embeds-int`; `def-linear-basis`; `def-linear-combination-and-span`; `lem-span-is-the-set-of-linear-combinations`; `def-dimension`; `def-trivial-regular-and-permutation-representations`; `def-sign-representation-and-restriction-of-a-representation`; `def-linear-subspace`.

The 21 records in `research/frontier-36-complete-batch-17.proof-contracts.json` were also checked against their items. I found no open boundary or contract/item mismatch.

## Mathematical review and evidence

- The column antisymmetrizer and polytabloid definitions are well-defined, including the empty-shape convention. Covariance and the column-sign identity match the left action used by the items. The invariant Hermitian form is positive definite and unitary, and its compatibility with the antisymmetrizer is used with the stated inner-product convention.
- The column-collision cancellation pairs terms using a transposition that fixes the tabloid and reverses sign. The dominance-detection and one-dimensional-image arguments apply the row-column incidence lemma with the needed shape hypotheses; the equal-shape case and coefficient normalization check out.
- The characteristic-zero submodule theorem treats both alternatives, and the self-pairing, irreducibility, homomorphism/dominance, inequivalence, and completeness claims retain their field, direction, and partition hypotheses. The class-count step is applied to (S_n) over (mathbb C), where the finite-group and algebraic-closure hypotheses hold, including the empty partition convention.
- The tabloid and column orders are finite total orders. The standard-polytabloid independence argument uses the leading coefficient correctly. The adjacent-column Garnir identity is translated explicitly to the local left-action convention. In the straightening argument, the identity coset is isolated, each other sorted term moves the greatest changed label to a later column, and reverse induction on the finite order terminates. The resulting spanning and basis claims follow.
- I checked the examples directly: the ((2,1)) polytabloids and (S_3) matrices have the stated signs and actions; the one-row and one-column modules are trivial and sign; and in characteristic two the augmentation subspace for ((2,1)) in (S_4) contains the stated proper invariant line, so it witnesses failure of irreducibility without the characteristic-zero hypothesis.
- The A- and B-page summaries agree with the carriers. The prerequisite-page summaries used for this batch did not introduce a conflicting claim.

For an external check on the less routine arguments, I consulted:

- Charlotte Chan, *Representation Theory of Symmetric Groups*, Definition 3.8, Lemmas 3.10–3.11, Lemma 2.14 and Definition 2.12, Theorem 4.1 and Corollary 4.2, Theorem 4.4 and Corollary 4.5, Theorem 4.11 and Remark 4.13, Example 3.14, Lemma 9.3 and Theorem 9.4 (printed pp. 9–17, 31–32): [lecture notes PDF](https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf). The notes use the equivalent dominance convention μ ≼ λ where the local items write λ ≽ μ.
- Mark Wildon, *Representation Theory of the Symmetric Group*, Definition 6.6, Theorem 6.8, Definition 6.9, Lemma 6.10 and Proposition 6.5 (printed pp. 27–31): [lecture notes PDF](https://www.ma.rhul.ac.uk/~uvah099/Maths/Sym/SymGroup2014.pdf). Wildon writes the action on the right; the assigned Garnir proof establishes the corresponding identity for its left action.
- Pavel Etingof et al., *Introduction to Representation Theory*, Theorem 3.5 and Corollary 3.6 (printed pp. 33–34), for the complex finite-group class-function dimension result used as a cross-check: [authors’ PDF](https://klein.mit.edu/~etingof/reprbook.pdf). The local classification proof uses the library’s explicitly stated algebraically closed field version.
- David A. Craven, *Groups, Geometries and Representation Theory*, Sections 1.8 and 2.1 and pp. 19–22, for the submodule theorem and characteristic-zero Specht-module consequence: [lecture notes PDF](https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf). The assigned irreducibility argument is checked directly using its nondegenerate Hermitian self-pairing.

## Page verdicts

- **A page — pass.** All 17 current items, their statements and proof obligations, and the page summary were reviewed. No edit was indicated.
- **B page — pass.** All four current examples/counterexample items and the page summary were reviewed. Computations and witness satisfy the stated claims. No edit was indicated.
- **Prerequisite page: Young diagrams, tableaux, and permutation modules — no conflicting prerequisite claim found** in the material used by this batch.
- **Prerequisite page: Maschke’s theorem and complete reducibility — no conflicting prerequisite claim found** in the material used by this batch.
- **Prerequisite page: Characters and orthogonality relations — no conflicting prerequisite claim found** in the material used by this batch. The assigned classification argument uses the class-count result; it does not rely on the prerequisite page’s orthogonality discussion.

## Edits, uneditable defects, and coverage

- **Edits:** none. Therefore no proof contract was changed, no `verification.judge` record was removed, and no reflow/precheck was run.
- **Uneditable defects:** none identified; the findings array is empty.
- **Coverage limitation:** I opened every assigned item, assigned page, manifest prerequisite page, and every direct dependency item. I checked dependency statements and relevant cited arguments, reading the complete arguments where needed for this review, but did not independently re-audit the full transitive dependency closure of every routine published prerequisite. This report does not claim that broader audit.
- No Step-5a rendered evidence bundle was available in the live run workspace when this review was performed; current repository files and the manifest were read directly.
