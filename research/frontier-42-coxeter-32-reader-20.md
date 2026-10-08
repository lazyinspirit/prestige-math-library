# Reader 20 — batch 20, frontier-42-coxeter-32

Independent reader review completed. No judgment or certification stamps are issued. Confirmed defects were repaired within the assigned scope; no uneditable finding remains.

## Completed review and repairs

- `lem-cg-complexification-satisfies-reflection-invariant-hypotheses`: checked clauses (1)–(5), all Facts and all proof steps. Repaired F6/step 1.1: the cited complexification definition supplied scalar action but no basis theorem. Explicit balanced coordinate maps now prove spanning and independence using `thm-universal-property-of-module-tensor-products`. Statement unchanged. Updated its contract. No `verification.judge` was present. Corrected Etingof locator: Definition 10.5 is on printed p. 56 and Theorem 10.6 on printed p. 57, rather than p. 58.
- `def-cg-coxeter-basic-degrees-and-graded-coinvariants`: checked definition, AC premise, essentiality, quotient grading, rank zero and component conventions.
- `lem-cg-classical-coxeter-spectra-from-reflection-models`: checked normalized simple-root isometries, explicit bipartite signed cycles, determinant computations, low ranks and repeated D-even exponent.
- `lem-cg-basic-degrees-independent-and-coinvariant-series`: checked monomial-series reconstruction, regular-sequence use, Molien traces and componentwise generation/independence.
- `lem-cg-formal-rational-differentials-and-invariant-jacobian`: checked orbit polynomials, minimal-polynomial separability, denominator clearing, chain rule and left inverse.

## Source evidence so far

[Etingof, Representations of Lie Groups](https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf): Definition 10.5, Theorem 10.6, printed pp. 56–57; §12.1, p. 63; Theorem 12.2, p. 64. Read those sections through the web PDF extraction. These state the finite complex-reflection hypotheses and degree/Hilbert-series conclusions; proofs are supplied locally by the opened items.


## Further completed review and repairs

- `thm-cg-coinvariant-top-degree-and-discriminant`: checked every clause and step. F9 incorrectly attributed the coefficient-factorial pairing to definitions which supply only conjugation and generic inner products; it now identifies those conventions and explicitly points to the local construction in step 5.1. Expanded F6's elementary prime argument via the polynomial-domain quotient by a linear coordinate. Updated affected contract derivations.
- `lem-cg-exceptional-coxeter-spectra-from-exact-certificates`: checked all six explicit matrices, edge constants, Newton recurrence, cyclotomic/H4 trigonometric factorizations and orders. Step 6.1 incorrectly called the certificate dual-action matrices transposes. Recomputed each reflection product and certificate matrix over rational coefficient pairs, with theta²=2 or theta²=theta+1: each recorded matrix equals M^{-T}, and M^T D=I. The proof now states the inverse transpose and proves conjugacy M^{-T}=GMG^{-1}. All displayed primal matrices, power traces, characteristic polynomials and M^h=I agree with independent arithmetic. F5 now derives trace linearity/cyclicity from the diagonal sum instead of attributing them to a definition. Updated affected contract derivations.
- `thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees`: checked the regular eigenvector, covector covariance, transpose convention, nonzero residue identification, conjugate eigenvalue sums, exclusion of positive h-multiples, all degree tables and tensor-product decomposition. Opened and read the entire proof of `lem-cg-steinberg-bipartite-root-enumeration`, especially steps 7.1–10.1 establishing the Coxeter-plane sector and root traces used here.
- `ex-cg-a2-discriminant-jacobian-and-top-coinvariant-class`: checked unit normals, root forms, scalar -24i, local invariant generation/independence, six-class quotient basis and nonzero sign class. The explicit adjugate addition is recorded below.
- `ex-cg-i2m-invariants-and-coinvariant-hilbert-series`: checked local dihedral normal form, invariant generation, fibre-product quotient/Hilbert series, algebraic independence and arbitrary-rank Weyl obstruction including m=12. F8's “hence invariant degrees” was unsupported by the cited classical-spectrum supplier, which expressly abstains from invariant degrees. Removed that inference; step 3.1 already proves the degrees locally, and step 4.1 now compares them with spectral residues plus one. Added the actual faithfulness supplier to F2 (already in deps). Corrected nonexistent source “Section 10.6” to Theorem 10.6. Updated F2/F8 contract evidence.
- `ex-cg-e6-and-h3-spectra-from-exact-matrices`: checked matrix/adjugate recurrence, trace lists, characteristic polynomials, primitive roots, exact orders and AC-scoped transfer to basic degrees. F3 now derives trace cyclicity explicitly from the diagonal sum; updated the affected contract derivation.
- A-page prerequisite prose claimed smooth-point tangent spaces and finite proper morphisms were used by these arguments. None of the authored proofs uses them. Replaced that obsolete description with the actual background subjects.

All mathematical statements and displayed spectra/degree tables are preserved. No stale judge record was present in the five changed items. No B-page prose, outside-batch supplier, plan or published content has been edited.


## Determinant prerequisite closure

The last audit found determinant-property uses whose citations named only the determinant definition. Added exact proved suppliers to the relevant existing Facts, deps and contract citations: alternating multilinearity in classical spectra F5; similarity invariance in classical spectra F5, basic Hilbert-series F6 and exceptional spectra F5; the field invertibility criterion in classical spectra F5, rational Jacobian F4, exceptional spectra F5, regular-eigenvector F6 and E6/H3 example F3; multiplicativity in discriminant F8. The criterion supplier is `cor-square-matrix-invertible-iff-determinant-is-a-unit`, specialized to fields, whose units are nonzero scalars. All are published suppliers and their exact Statements were opened; the invertibility and similarity proofs were also read. The A2 and I2(m) examples instead now display the explicit 2x2 adjugates in their local algebraic-independence proofs, so domain cancellation closes the same prerequisite without importing general linear algebra. Exceptional F1 now cites its actual faithfulness supplier. Mathematical interfaces remain unchanged.

These changes also touch `lem-cg-classical-coxeter-spectra-from-reflection-models`, `lem-cg-basic-degrees-independent-and-coinvariant-series`, `lem-cg-formal-rational-differentials-and-invariant-jacobian`, `thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees`, and `ex-cg-a2-discriminant-jacobian-and-top-coinvariant-class`. Together with the earlier five, there are ten changed items. Proof paragraphs and trailing punctuation are preserved/corrected on these items.

## Opened inventory and reading extent

Assigned page files, including frontmatter and all prose:

- `library/coxeter-groups/finite-coxeter-invariants-and-coinvariant-gradings.md` (A).
- `library/coxeter-groups/finite-coxeter-invariants-and-coinvariant-gradings-examples.md` (B).

Assigned item files, with titles, definitions/statements, all Facts, complete proofs, conventions and source locators checked:

- `items/lem-cg-complexification-satisfies-reflection-invariant-hypotheses.md`.
- `items/def-cg-coxeter-basic-degrees-and-graded-coinvariants.md`.
- `items/lem-cg-classical-coxeter-spectra-from-reflection-models.md`.
- `items/lem-cg-basic-degrees-independent-and-coinvariant-series.md`.
- `items/lem-cg-formal-rational-differentials-and-invariant-jacobian.md`.
- `items/thm-cg-coinvariant-top-degree-and-discriminant.md`.
- `items/lem-cg-exceptional-coxeter-spectra-from-exact-certificates.md`.
- `items/thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees.md`.
- `items/ex-cg-a2-discriminant-jacobian-and-top-coinvariant-class.md`.
- `items/ex-cg-i2m-invariants-and-coinvariant-hilbert-series.md`.
- `items/ex-cg-e6-and-h3-spectra-from-exact-matrices.md`.

The list below records 93 outside supplier files opened. For most, the relevant complete Definition or Statement (and applicable Remarks) was read, rather than the entire proof closure. Complete Facts/proofs were additionally read for the four invariant-theory suppliers (algebraic independence, regular sequence, coinvariant Hilbert/order formula, CST), finite-orbit separation, the Hilbert basis theorem, the Steinberg bipartite-root enumeration, operator invertibility, square-matrix invertibility, and similarity invariance. These are distinct from a recursive independent audit of every published foundation. The tensor universal property and determinant criteria used by the repairs were read before those repairs were written.

- `items/cor-an-element-of-finite-order-acts-diagonalisably-over-an-algebraically-closed-field-of-characteristic-zero.md`.
- `items/cor-complex-exponential-cartesian-form-modulus-and-eulers-identity.md`.
- `items/cor-determinant-is-invariant-under-similarity.md`.
- `items/cor-every-system-of-parameters-is-regular-in-a-cohen-macaulay-module.md`.
- `items/cor-square-matrix-invertible-iff-determinant-is-a-unit.md`.
- `items/cor-trigonometric-parity-and-pythagorean-identity.md`.
- `items/def-algebraic-and-transcendental-elements.md`.
- `items/def-algebraically-independent-finite-tuples-over-a-field.md`.
- `items/def-axiom-of-choice.md`.
- `items/def-cartan-matrix-of-a-based-root-system.md`.
- `items/def-cg-bipartite-coxeter-element-and-root-recursion.md`.
- `items/def-cg-canonical-reflection-homomorphism.md`.
- `items/def-cg-coxeter-diagram-components-and-finite-type.md`.
- `items/def-cg-dual-chambers-and-reflection-hyperplanes.md`.
- `items/def-cg-real-coxeter-form-and-reflection.md`.
- `items/def-characteristic-polynomial-of-a-matrix.md`.
- `items/def-cohen-macaulay-local-module-and-ring.md`.
- `items/def-complex-conjugate-real-imaginary-part-and-modulus.md`.
- `items/def-complex-numbers-and-arithmetic.md`.
- `items/def-complexification-of-a-real-linear-map.md`.
- `items/def-complexification-of-a-real-vector-space.md`.
- `items/def-cyclotomic-polynomial.md`.
- `items/def-depth-with-respect-to-an-ideal.md`.
- `items/def-determinant-of-a-linear-operator.md`.
- `items/def-determinant-of-a-square-matrix.md`.
- `items/def-diagonalisable-endomorphism.md`.
- `items/def-eigenvalue-eigenvector-eigenspace-and-spectrum.md`.
- `items/def-field-of-fractions.md`.
- `items/def-finite-linear-invariant-and-coinvariant-polynomial-algebras.md`.
- `items/def-finite-symmetric-group-and-permutation-notation.md`.
- `items/def-formal-derivative-of-a-polynomial.md`.
- `items/def-graded-ring-and-graded-module.md`.
- `items/def-hh-coxeter-matrix-word-group-and-length.md`.
- `items/def-hilbert-function-and-hilbert-series.md`.
- `items/def-inner-product-space.md`.
- `items/def-intertwiner-equivalent-and-faithful-representations.md`.
- `items/def-jacobian-matrix-affine-algebraic-set.md`.
- `items/def-matrix-minors-cofactors-and-adjugate.md`.
- `items/def-multivariate-polynomial-ring-by-iteration.md`.
- `items/def-natural-numbers.md`.
- `items/def-polynomial-ring-over-a-commutative-ring.md`.
- `items/def-reduced-crystallographic-euclidean-root-system.md`.
- `items/def-regular-sequence-on-a-module.md`.
- `items/def-roots-of-unity-in-a-field.md`.
- `items/def-sine-and-cosine-by-power-series.md`.
- `items/def-trace-of-a-square-matrix-over-a-commutative-ring.md`.
- `items/def-weyl-group-of-a-root-system.md`.
- `items/ex-classical-root-systems-in-euclidean-coordinates.md`.
- `items/lem-cg-diagram-products-and-invariant-form-comparison.md`.
- `items/lem-cg-reflection-form-invariance-and-rank-two-orders.md`.
- `items/lem-cg-reflection-representation-descends-and-root-norms.md`.
- `items/lem-cg-steinberg-bipartite-root-enumeration.md`.
- `items/lem-derivative-of-det-i-minus-xa.md`.
- `items/lem-finite-linear-group-invariant-polynomials-separate-orbits.md`.
- `items/lem-finite-reflection-invariant-generators-are-algebraically-independent.md`.
- `items/lem-of-square-monotone.md`.
- `items/lem-polynomial-ideal-finite-generation.md`.
- `items/lem-reflection-basic-invariants-form-a-regular-sequence.md`.
- `items/lem-viete-finite-cosine-product-and-nested-radicals.md`.
- `items/lem-weyl-coinvariant-hilbert-series-has-order-w-dimension.md`.
- `items/prop-distinct-simple-roots-have-nonpositive-inner-product.md`.
- `items/prop-formal-derivative-laws.md`.
- `items/thm-adjugate-identity-over-a-commutative-ring.md`.
- `items/thm-cg-finite-chamber-tiling-and-coset-face-identification.md`.
- `items/thm-cg-finite-coxeter-classification-including-h-and-dihedral.md`.
- `items/thm-cg-finite-type-positive-definite-criterion.md`.
- `items/thm-cg-root-inversion-formulas-and-strong-exchange.md`.
- `items/thm-cg-root-length-criterion-and-faithfulness.md`.
- `items/thm-cg-root-sign-and-simple-reflection-positivity.md`.
- `items/thm-chevalley-shephard-todd-for-finite-weyl-groups.md`.
- `items/thm-cofunction-supplementary-and-reflection-identities.md`.
- `items/thm-complex-exponential-addition-and-real-extension.md`.
- `items/thm-complex-nth-roots-and-roots-of-unity.md`.
- `items/thm-depth-bounded-by-support-dimension.md`.
- `items/thm-determinant-is-product-of-eigenvalues.md`.
- `items/thm-determinant-multiplicative.md`.
- `items/thm-dimension-and-parameters-for-modules.md`.
- `items/thm-double-angle-and-power-reduction-identities.md`.
- `items/thm-eulers-formula.md`.
- `items/thm-evaluation-kernel-and-minimal-polynomial.md`.
- `items/thm-hilbert-basis-theorem.md`.
- `items/thm-induction-principle.md`.
- `items/thm-leibniz-determinant-is-alternating-multilinear-and-normalized.md`.
- `items/thm-noetherian-ring-ideal-characterisations.md`.
- `items/thm-of-square-roots.md`.
- `items/thm-operator-invertible-iff-determinant-nonzero.md`.
- `items/thm-product-to-sum-and-sum-to-product-identities.md`.
- `items/thm-quarter-turn-values-and-shift-formulas.md`.
- `items/thm-rank-two-root-system-classification.md`.
- `items/thm-sine-and-cosine-addition-formulas.md`.
- `items/thm-sine-cosine-signs-monotonicity-and-ranges.md`.
- `items/thm-the-roots-of-the-cyclotomic-polynomial-are-the-primitive-roots-of-unity.md`.
- `items/thm-universal-property-of-module-tensor-products.md`.

Other opened evidence: `CLAUDE.md`, `README.md`, `briefs/reader.md`, the relevant item-format clauses of `SCHEMA.md`, the Step-5 controls in `WORKFLOW.md`, `research/frontier-42-coxeter-32-batch-20.pages.json`, all batch-20 contract derivations/boundaries/citation records, `tools/evidence-bundle.mjs`, and the current run status file. Evidence bundles were used as entry points for the complexification, Hilbert-series and rational-Jacobian branches. Truncated output was followed by bounded targeted reads; no absence inference was made from a cut.

The exact certificate JSON `research/coxeter-scaffold/math-checks/finite-degree-poincare-certificates.json` was opened for all six type records. Its generation program was not read or run, and its stored `checks` flags were not used as proof. Independent rational-pair arithmetic reconstructed reflections from each labelled diagram and application order, compared all six displayed primal products, reconstructed the dual products, checked M^T D=I, computed traces and coefficients by Newton's recurrence, and checked M^h=I. The mathematical factorizations in the item prove the exact orders via the primitive eigenvalues. No group-orbit enumeration was rerun.

## Further authoritative source reading

- [Casselman, Coxeter elements](https://www.math.ubc.ca/~cass/research/pdf/Element.pdf): Section 2, printed p. 5, for the H3 eigenvalues and order; Proposition 3.2, printed p. 6, for absence of eigenvalue 1; Lemmas 3.9–3.10 and Theorem 3.11, printed pp. 8–9, including the complete stated rotation argument; the root-trace discussion on printed p. 10; the type-order table on printed p. 11. The six exceptional exponents are proved by the local matrices, not attributed to this table.
- [Swanson, On eigenvalues of representations of reflection groups and wreath products](https://www.jpswanson.org/talks/2016_eigenvalues.pdf): Definition 1, printed p. 1, gives cyclic residues; Definitions 6, 9 and 14, Theorems 7, 11 and 15 and Remark 12, printed p. 2, give the reflection, degree, coinvariant and regular-element conventions. Read the complete relevant passages. His symmetric algebra is on V; here the polynomial algebra is on V*, and the real Coxeter representation identifies the two through its invariant form. These are consistency checks; the local proofs supply the arguments.
- [Ripoll, Coxeter elements in well-generated reflection groups](https://www.normalesup.org/~vripoll/Strobl_Coxelt.pdf): slide 25 (PDF index 24), complete “Recall: Geometry of Coxeter elements in real groups” slide, states for an irreducible finite real reflection group that the highest degree equals the Coxeter order and describes the rotation plane. No generalized complex-group conclusion is silently substituted for the real Coxeter hypotheses.
- Etingof's complete relevant §11.1 argument, printed pp. 58–60, was also read to compare the algebraic-independence supplier. The relevant §12.1–12.2 degree and coinvariant statements and the S3 example on printed p. 64 were read completely. No claim is made to have read all 162 pages or the full commutative-algebra proof of Theorem 12.2; the local regular-sequence argument is the supplier used here.

## Validation and final page verdicts

After the last item edits, reflow and precheck ran in dependency order on all ten changed items. Every reflow returned `unchanged`; every precheck passed. None of the eleven assigned frontmatters contained a judge record, so no record required removal. The affected contracts were updated, including boundary explanations distinguishing the one-way CST application and rank-zero systems from nonempty components. Normalized comparison of all 240 current citation quotes with their named supplier files found zero mismatches. This mechanical check tests quotation accuracy only, not mathematical sufficiency.

The final required single batched layout command covered the ten changed item paths and returned `proof-layout: 10 items, 56 steps, 0 defects`. All edits preserve Statement/Definition interfaces and the displayed mathematics. The report, batch-20 contract file, ten assigned draft item files and assigned A-page prose are the only task edits. No publication, judgment, engine transition, plan edit or outside-scope repair was performed.

| Page | Reader verdict |
| --- | --- |
| `finite-coxeter-invariants-and-coinvariant-gradings` | No unresolved mathematical defect after the reported citation/prerequisite repairs and correction of the obsolete prerequisite summary. All eight theory items reviewed. |
| `finite-coxeter-invariants-and-coinvariant-gradings-examples` | No unresolved mathematical defect after the reported item repairs. All three examples reviewed; B-page prose was read and left unchanged. |

Uneditable defects: none identified. Proposed withdrawals: none. Blockers: none.

Coverage limits: this is an independent review of the assigned current mathematics, its cited supplier interfaces and the selected complete supplier arguments listed above. It is not a full recursive audit of the published library or a rerun of the group-enumeration certificates. Source passages were read through PDF text extraction; no whole-book reading or independent judge certification is claimed.
