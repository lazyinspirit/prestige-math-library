# phase-2-next-17 — Step 3a scope review, group e

Run: `phase-2-next-17`  
Role: `alpha`  
Batches: 8, 9

This is a scope review only. It does not approve proofs or individual items.

## Evidence reviewed

I reviewed the live batch manifests, coverage ledgers and notes; the canonical plan and prose designs; the scope ledger; the current planning, prerequisite-audit and Step 1 drift records; both cross-batch dependency files; and current Step 3 decision state. There is no current owner scope decision for any of these three pages. The owner's prerequisite audit specifically authorizes the affine-loop page with its two published prerequisites and the highest-root input proved locally.

The coverage gate reports 105 harvested source results with no errors or warnings. The manifest dependency gate reports 59 items with no errors. The canonical plan validates its page ordering and dependencies. For mathematical scope, I also read the complete relevant arguments in the cached, hash-stamped source bodies: Kleshchev §§6–10 for affine root systems, loop realizations and the Weyl–Kac formula; Farrell–Lassueur Chapter 40 for Brauer correspondence and Green compatibility; and Saunders §5 through the proof of Brauer's First Main Theorem and its immediate consequences.

## Decisions

### `affine-lie-algebras-and-loop-central-extensions` — sufficient

The A page supplies the intended untwisted affine construction: the algebraic loop algebra, residue cocycle, central extension, degree derivation, derived/full distinction, affine Cartan data and level, affine-node realization, loop/GCM identification, affine Weyl semidirect product, and real/imaginary roots with multiplicities. It also introduces evaluation modules and the fixed-point definition of twisted loop algebras. The B page exercises the central term, Heisenberg subalgebra, affine \(A_1\) Cartan data, evaluation modules, and normalization failures. This matches the prose role and supplies the affine root/Weyl data needed by the Weyl–Kac page. Universality of the central extension, analytic loop groups and case-by-case twisted classification are not required by this page's stated role. No enrichment or merger is recommended.

### `the-weyl-kac-character-formula` — sufficient

The A page includes the necessary formal completion, Weyl-vector conventions, denominator product with actual root multiplicities, skewness and correction-term argument, denominator identity, integrable numerator argument, orbit/support uniqueness, the Weyl–Kac formula, the generalized Kostant multiplicity formula, finite-type specialization, and untwisted affine factorization. Its added Casimir-expansion lemma closes the source proof interface. The B page tests the finite (A_1) specialization, affine \(\mathfrak{sl}_2\) denominator factors and low weight layers, and the failure of finite-root multiplicity intuition in affine rank two. Analytic convergence and modular forms are properly excluded, affine root data is supplied by the preceding pair, and the Weyl dimension formula is already owned by the earlier finite-dimensional character page. No enrichment or merger is recommended.

### `brauers-first-main-theorem` — sufficient

The A page develops block central characters, upward block induction, defect containment and transitivity, the local existence/injectivity/surjectivity ingredients, the fixed-defect Brauer correspondence, and its Green/Nagao compatibility, including the relative-projectivity support needed for that bridge and the existence of a block module with full defect vertex. The B page provides a nontrivial symmetric-group example, a defining-characteristic example, a counterexample to necessity of centralizer containment, and the two boundary cases. This realizes the prose role of passing from Brauer pairs to block correspondence and then to Green correspondence. The generalized-decomposition-number form of Brauer's Second Main Theorem remains correctly assigned to the next page; cyclic-defect/Brauer-tree theory and conjectural character-placement material are outside this page's design. No enrichment or merger is recommended.

## Scope conclusion

All three A/B pairs are scope-sufficient as currently manifested. This conclusion concerns intended coverage, examples, dependency seams and library role only; proof correctness remains for the later review stages.
