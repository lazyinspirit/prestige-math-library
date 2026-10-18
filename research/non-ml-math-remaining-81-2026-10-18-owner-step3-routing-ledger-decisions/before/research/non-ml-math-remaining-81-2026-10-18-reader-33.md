# Step 3a reader report — batch 33

Run: `non-ml-math-remaining-81-2026-10-18`  
Batch: `33`  
Dispatch: `reader-33`

## Result

I reviewed the current authored mathematics independently. I made no edits to
assigned carriers. Two nonfatal defects remain in a published matrix-Lie-algebra
dependency; they are routed separately in the findings JSON. There is no blocker.

The autopilot status at review showed the run active in `3a-read`, with 17/81
batches covered and no dispatch running. The recent Git history and workspace
status were checked; the workspace already contained many unrelated changes.
Review and output were confined to batch 33 and its named report/findings files.

## Opened inventory

Both assigned pages were opened:

- A: `lie-superalgebras-and-super-representation-theory`
- B: `lie-superalgebras-and-super-representation-theory-examples`

All 23 assigned items were opened in dependency order:

- Level 0: `def-associative-superalgebra-over-complex-numbers`,
  `def-lie-superalgebra-over-complex-numbers`.
- Level 1: `def-complexified-four-dimensional-n1-super-poincare-bracket-data`,
  `def-gl-1-1-bracket-data`, `def-lie-supermodule`,
  `def-triangular-decomposition-of-a-lie-superalgebra`,
  `lem-ideal-generated-by-homogeneous-elements-is-graded`,
  `lem-odd-self-jacobi-in-characteristic-zero`.
- Level 2: `def-highest-weight-vector-and-module-for-a-lie-superalgebra`,
  `def-simple-and-semisimple-lie-supermodules`,
  `def-universal-enveloping-superalgebra`,
  `thm-complexified-four-dimensional-n1-super-poincare-bracket-satisfies-jacobi`,
  `thm-gl-1-1-is-a-lie-superalgebra`.
- Level 3: `def-two-dimensional-highest-weight-module-for-gl-1-1`,
  `thm-super-poincare-birkhoff-witt-ordered-monomial-basis`,
  `thm-universal-property-of-the-enveloping-superalgebra`,
  `ex-complexified-four-dimensional-n1-super-poincare-spinor-bracket`.
- Level 4: `thm-supermodules-equivalent-to-graded-u-modules`,
  `thm-two-dimensional-highest-weight-module-for-gl-1-1-is-well-defined`,
  `ex-odd-subalgebra-of-gl-1-1-has-exterior-enveloping-algebra`.
- Level 5: `def-typicality-for-gl-1-1-highest-weights`,
  `cex-finite-dimensional-lie-supermodules-need-not-be-semisimple`.
- Level 6: `ex-typicality-boundary-for-gl-1-1-highest-weight-modules`.

I also opened the relevant direct dependencies used by the assigned claims:
`def-algebraic-dual-and-linear-functional`,
`def-classical-complex-matrix-lie-algebras`,
`def-generated-and-principal-ideals`, `def-left-right-and-two-sided-ideal`,
`def-linear-map`, `def-tensor-algebra-of-a-vector-space`,
`def-tensor-product-of-modules-by-generators-and-relations`,
`def-vector-space`, `lem-field-is-a-commutative-ring`,
`lem-ideal-criterion-and-intersections`,
`thm-commutative-ring-module-structure-on-a-tensor-product`,
`thm-tensor-product-basis-from-bases`,
`thm-universal-property-of-module-tensor-products`, and
`thm-universal-property-of-the-tensor-algebra`. Supporting interfaces opened
for those uses included the balanced-map definition, free modules and their
universal property, direct sums and their universal property, tensor-unit and
direct-sum tensor results, the associativity/symmetry and finite-iteration
tensor results, and the algebra-over-a-commutative-ring definition. I also
opened `def-field`, `def-lie-algebra-over-a-field`,
`def-vector-space-of-linear-maps`, and the linked
`def-special-linear-lie-algebra-sl-two` target.

The A page's declared page prerequisites were opened:
`algebraic-representation-and-tensor-symmetry-map` and
`highest-weight-theory-for-complex-semisimple-lie-algebras`. For the current
batch-32 representation interface, I opened
`def-unital-associative-algebra-representation` and
`thm-associative-algebra-representations-are-unital-modules`. The assigned
items make no logical use of that ungraded interface or of ordinary
highest-weight classification; those page requirements are contextual.
The B page's A-page requirement was checked against the assigned A page.

Relevant authoritative source sections were opened at their cited locations:

- Barbier, *A minimal representation for the orthosymplectic Lie-superalgebra*:
  §§2.1–2.2, §2.4.1, §2.6.2–2.6.4; Theorem 2.6.4 states the ordered even/odd
  PBW basis, while the thesis refers elsewhere for its proof.
- Caston–Fioresi, *Mathematical Foundations of Supersymmetry*: §§1.1–1.3,
  including the graded bracket and characteristic caveat (Remark 1.2.4).
- Serganova, *Kac–Moody Superalgebras and Integrability*: the typicality
  definition in Remark 11.2, p. 31, which is explicitly relative to root data.
- Figueroa-O'Farrill, *BUSSTEPP Lectures on Supersymmetry*: §I.3,
  Appendix A.2–A.3, and the Pauli/Weyl-spinor conventions in Appendix A.6.
  Section I.3 gives the odd bracket as a translation and states the field
  realization's on-shell qualification.
- Etingof, *Lie Groups and Lie Algebras*: §8.1, printed p. 48, for the matrix
  commutator Jacobi identity used in the finding below.
- Knapp, *Lie Groups Beyond an Introduction*, digital second edition: §I.1,
  Examples 2–9, printed pp. 25–27, for the matrix commutator Lie bracket and
  classical subalgebra closure examples; these pages also expose the inaccurate
  locator in the published dependency's Knapp reference.

## Review and contract checks

The two basic definitions give the intended complex grading, signed Jacobi,
even unit, and supercommutator. The odd self-Jacobi lemma follows by substituting
an odd element into the signed identity and using that 3 is invertible in
`C`. The homogeneous-ideal lemma expands finite products into their two graded
components and gives the quotient grading needed by the enveloping
superalgebra definition.

The `gl(1|1)` proof covers all parity patterns and verifies its specified
triangular datum. The two-dimensional action proof checks the even–odd
commutators, the odd squares and mixed anticommutator on both basis vectors;
the highest-weight and generation claims follow from the displayed action.
The typicality example checks exactly the four graded subspaces possible in
the `1|1` module. The `K(0,0)` witness is finite-dimensional and nonsplit in
the declared graded category.

The N=1 definition gives an explicit tensor action and cross-chiral bracket.
Its Jacobi proof verifies the dual and tensor actions are representations,
checks equivariance of the odd bracket, and covers all four parity patterns.
The Pauli-coordinate example uses a trace-dual basis and an invertible basis
change; it does not assert a real form, conjugation, or field-theoretic
closure. The super-enveloping universal property and module correspondence
follow from the tensor quotient and its defining relations. The local super-PBW
proof has a well-founded length/inversion measure and resolves strict and
repeated-odd overlaps using signed Jacobi and odd self-Jacobi. Its supplied
basis/order hypothesis avoids a basis-selection step.

I reviewed all 23 proof contracts against the current sources for derivation
coverage, cited suppliers, boundary cases, and step references. No contract
change was needed. The page summaries accurately describe the local results
and their scope. The following outside defect remains uneditable:

- `def-classical-complex-matrix-lie-algebras`, Definition, opening sentence:
  it asserts that the listed matrix spaces are Lie subalgebras and supplies
  bracket-closure computations, but does not establish the Jacobi identity for
  the ambient matrix commutator. Its only declared dependency,
  `def-lie-algebra-over-a-field`, states the Lie-algebra axioms without proving
  this matrix fact. The assigned consumer
  `thm-complexified-four-dimensional-n1-super-poincare-bracket-satisfies-jacobi`
  cites the matrix Lie-algebra claim as [F1] and uses it in Proof 3.1 for the
  even Jacobi component. The missing verification is the direct associative
  expansion of `[[A,B],C] + [[B,C],A] + [[C,A],B]`, whose terms cancel. This is
  an immediate, nonfatal omission; Knapp §I.1, Example 2, printed p. 25,
  supplies that expansion.
- `def-classical-complex-matrix-lie-algebras`, frontmatter
  `sources.references` entry for Knapp, `locator`: the linked digital second
  edition's general commutator proof is in §I.1, Example 2, printed pp. 25–26,
  with the classical-subalgebra closure examples on pp. 26–27. The recorded
  locator says the §1 examples are on printed pp. 42–48. The Etingof source
  entry is a separate relevant reference, but does not correct this Knapp
  locator; use the actual section and printed pages in the linked edition.

## Edits and validation

No assigned item or page was edited. Only this report and the findings JSON
were created. Since no item changed, item reflow, precheck, and proof-layout
were not applicable; no stale judge records or contracts were changed.

## Page verdicts

- `lie-superalgebras-and-super-representation-theory` (A): **Pass.** Its
  summary matches the assigned definitions and local proofs, and it carefully
  limits the N=1 and highest-weight claims.
- `lie-superalgebras-and-super-representation-theory-examples` (B): **Pass.**
  Its four examples match their current witnesses and proofs, with the graded
  semisimplicity and no-reality-condition boundaries stated accurately.

## Blocker and coverage limitation

No blocker. I did not recursively audit unrelated transitive branches of the
published suppliers or every item on the two prerequisite pages; no assigned
proof imports those unrelated claims. The findings JSON records both
published-dependency defects whose closure reaches an assigned theorem.
