# Step 3a reader report — batch 42

Run: non-ml-math-remaining-81-2026-10-18  
Role: reader-42

## Opened inventory

Assigned pages:

- A page: library/differential-geometry/formal-deformation-quantization-and-hochschild-control.md
- B page: library/differential-geometry/formal-deformation-quantization-and-hochschild-control-examples.md

Assigned items, read after their suppliers:

- Level 0: def-formal-associative-deformation-of-a-commutative-algebra; def-general-poisson-bivector-and-bracket; def-hh-cochain-complex-and-gerstenhaber-bracket.
- Level 1: prop-coordinate-jacobi-and-schouten-criterion-for-poisson-bivectors; prop-first-order-star-commutator-is-a-poisson-bracket; prop-hochschild-cochains-form-a-differential-graded-lie-algebra.
- Level 2: def-formal-star-product-on-a-poisson-manifold; thm-higher-order-hochschild-obstruction-class; cex-nonpoisson-bivector-cannot-be-a-first-order-star-commutator.
- Level 3: def-formal-equivalence-of-star-products; ex-moyal-star-product-for-a-constant-poisson-tensor.
- Level 4: prop-formal-equivalence-changes-first-order-by-a-hochschild-coboundary.

Opened direct item dependencies:

- def-algebra-over-a-commutative-ring
- def-formal-power-series-and-coefficient-extraction
- def-formal-order-and-x-adic-topology
- def-smooth-manifold
- def-cochain-complex-in-an-abelian-category
- thm-chain-rule-for-differentials-of-smooth-maps
- def-poisson-bracket-on-a-symplectic-manifold
- def-hamiltonian-vector-field-and-hamiltonian-function
- def-symplectic-form-and-symplectic-manifold

Opened additional dependency context used by those claims:

- def-differential-of-a-smooth-map
- def-symplectic-vector-space
- thm-hamiltonian-vector-fields-exist-uniquely-for-smooth-functions

Opened the required page routes named by the assigned A-page: library/differential-geometry/poisson-algebras-and-hamiltonian-representations.md and library/homological-algebra/dg-and-homological-algebra-foundations.md. I also checked the relevant scope summary of library/homological-algebra/hochschild-homology-and-diagonal-koszul-resolutions.md and the referenced published context item physics/items/ex-qft-regular-quadratic-star-product.md with its page physics/library/quantum-field-theory-mathematics/qft-ir03-examples.md.

Reviewed the batch-42 proof-contract, source-coverage, cross-batch-dependency, and coverage artifacts as evidence, and compared their relevant contents with the current carriers. The proof-contract file covers the seven proof-like items; its cited facts and step mappings match the current item text. The current item dependency closure has no cross-batch logical supplier.

## Mathematical review

- The coefficientwise deformation definition uses a finite sum at each formal order, preserves the unit exactly when the positive-order coefficients vanish on a unit input, and makes no analytic convergence claim.
- The Poisson-bivector definition supplies skew coordinate data and the tensor transition law. The coordinate proposition derives overlap invariance, the biderivation identities, the Jacobiator formula, and the converse using a compactly supported coordinate cutoff. Its Schouten factor agrees with the explicitly fixed convention.
- The first-order commutator proposition derives Jacobi from the associative commutator identity and Leibniz from the exact commutator product rule. The full skew coefficient used here differs by a factor of two from some source conventions; the local proof verifies the stated normalization directly over the real numbers.
- The Hochschild definition fixes the insertion signs and coboundary convention. The DGLA proof supplies the insertion pre-Lie identity, graded Jacobi, the square-zero differential, its signed relation to the standard Hochschild differential, and closure of the normalized multidifferential subcomplex.
- The star-product definition matches its dependencies and states the real first-order normalization. The order-n theorem correctly identifies the associator coefficient O_n, proves it is a normalized multidifferential cocycle by the Bianchi identity, and obtains the extension condition δB_n = O_n with no claim of automatic later extensions.
- The gauge-equivalence definition and first-order proposition use the stated map T and its inverse consistently. The expansion gives B_1' = B_1 + δD_1; commutativity makes this coboundary symmetric, so the skew terms agree.
- The counterexample computes the Jacobiator x^2 - y^2 and evaluates it as 1 at (1,0,0). The Moyal example proves coefficientwise finiteness, the unit, associativity, first-order normalization, degenerate cases, and the canonical symplectic sign.

## Source checks

I opened the cited Witherspoon, Moshayedi, and Kontsevich PDFs and inspected the relevant passages:

- Sarah J. Witherspoon, *Hochschild Cohomology for Algebras*, https://people.tamu.edu/~sjw/pub/gsm204.pdf: Chapter 1, §1.4, Definition 1.4.1 and Lemma 1.4.3 (Gerstenhaber insertion and bracket identities); Chapter 5, §5.1, equations (5.1.8)–(5.1.9) (coefficientwise associativity obstructions); §5.2, Definition 5.2.2 and Lemma 5.2.5 (first-order change under formal equivalence); §5.3, Definition 5.3.2 (Poisson convention with half the skew coefficient). The source leaves direct computations abbreviated; the assigned local proofs supply the needed calculations. The sign in the equivalence formula depends on whether the gauge parameter is T or T^{-1}.
- Nima Moshayedi, *Lectures on Symplectic Geometry, Poisson Geometry, Deformation Quantization and Quantum Field Theory*, https://arxiv.org/pdf/2012.14662: §3.1.1, Exercise 3.1.6 and Definition 3.1.7 (Jacobi/Schouten and Poisson conventions); §4.1.1, Definition 4.1.5 and Remark 4.1.6 (star-product definition and bidifferential coefficients); §4.1.2, Definition 4.1.8 (Moyal convention); §4.1.4, Definition 4.1.17 and Remark 4.1.18 (gauge map); §4.2.5, Propositions 4.2.40 and 4.2.43 (Hochschild DGLA). The source’s Moyal parameter uses iℏ/2; the assigned carrier states and proves its real-parameter convention locally.
- Maxim Kontsevich, *Deformation Quantization of Poisson Manifolds, I*, https://arxiv.org/pdf/q-alg/9709040: §§1.2 and 1.4.1 (first-order Poisson and gauge conventions; constant-tensor Moyal product). Its gauge-action parameter is inverse to T as named in the assigned definition. The paper’s formality proof in §§6–7 was not used as a supplier.

## Edits and unresolved defects

No assigned item or page prose was edited. No proof contract or judge record required maintenance. No confirmed defect remains uneditable.

## Page verdicts

- formal-deformation-quantization-and-hochschild-control: no defect identified in its title, summary, scope boundaries, dependencies, or mathematical conventions.
- formal-deformation-quantization-and-hochschild-control-examples: no defect identified in its summary or in its descriptions of the two examples.

## Blocker

None.

## Coverage note

All assigned pages and items were opened, along with the direct logical dependencies needed to assess the arguments and the relevant cited source passages. I did not audit unrelated transitive proofs in published material. No unresolved uncertainty affects an assigned claim.

