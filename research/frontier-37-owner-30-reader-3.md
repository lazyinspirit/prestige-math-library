# Step 5a reader report — batch 3

Run: frontier-37-owner-30

## Opened inventory

Manifest: research/frontier-37-owner-30-batch-3.pages.json.

Assigned pages:

- A page: library/number-theory/dirichlets-unit-theorem-regulators-and-s-units.md
- B companion: library/number-theory/dirichlets-unit-theorem-regulators-and-s-units-examples.md

All 18 A-page items:

- lem-roots-of-unity-in-a-number-field-are-finite
- thm-kronecker-root-of-unity-criterion
- lem-algebraic-integer-is-a-unit-iff-norm-is-plus-or-minus-one
- thm-product-formula-for-number-fields
- def-logarithmic-unit-embedding
- lem-unit-logarithms-lie-in-the-product-formula-hyperplane
- lem-kernel-of-the-unit-logarithm-is-the-roots-of-unity
- lem-discrete-subgroups-of-real-vector-spaces-are-lattices
- lem-logarithmic-unit-image-is-discrete
- thm-logarithmic-unit-image-is-a-full-lattice
- thm-dirichlet-unit-theorem
- def-fundamental-units
- def-number-field-regulator
- lem-deleted-row-minors-of-a-matrix-with-zero-column-sums
- thm-number-field-regulator-is-well-defined
- cor-unit-ranks-by-number-field-signature
- def-s-integers-and-s-units-of-a-number-field
- thm-s-unit-theorem

All 7 B-page examples:

- ex-units-of-q-and-imaginary-quadratic-fields
- ex-real-quadratic-units-and-pell
- ex-units-in-a-real-cubic-field
- ex-regulator-of-a-real-quadratic-field
- ex-change-of-fundamental-units-preserves-regulator
- ex-s-units-of-q
- cex-z-sqrt-d-units-need-not-equal-ok-units

Dependency items opened to verify the relevant arguments:

- cor-independent-set-is-no-larger-than-a-finite-spanning-set
- cor-index-of-a-full-rank-integer-sublattice-is-the-absolute-determinant
- lem-bounded-conjugates-give-finitely-many-integral-polynomials
- cor-minkowski-convex-body-theorem-at-equality
- lem-finitely-many-number-field-ideals-of-bounded-norm
- thm-ring-of-integers-and-ideals-are-full-lattices
- thm-covolume-of-an-ideal-lattice
- thm-principal-ideal-norm-is-absolute-field-norm
- thm-principal-divisor-exact-sequence
- thm-finiteness-of-the-number-field-class-group
- thm-unique-factorisation-of-ideals-in-dedekind-domains
- lem-finite-support-of-ideal-valuations
- thm-negative-pell-period-parity-criterion
- cor-all-integral-pell-solutions
- thm-all-positive-pell-solutions-are-fundamental-powers
- thm-lagrange-existence-for-pell-equation
- thm-ring-of-integers-of-a-quadratic-field
- cor-algebraic-integer-minimal-polynomial-criterion
- thm-evaluation-kernel-and-minimal-polynomial

The batch proof-contract file and the run-level contract file were opened for this batch:
research/frontier-37-owner-30-batch-3.proof-contracts.json and
research/frontier-37-owner-30-proof-contracts.json.

## Repairs

1. items/thm-product-formula-for-number-fields.md, Proof 1.1: removed the irrelevant [F1] ideal-factorization tag. The representation x=a/b is established by clearing denominators in a minimal polynomial and applying the cited minimal-polynomial criterion; [F1] supports the later finite-place factorization in Proof 2.1. Updated both proof contracts so [F1] no longer claims use at 1.1 and the derivation records given and algebra.

2. items/thm-logarithmic-unit-image-is-a-full-lattice.md, Proof 7.2: corrected “unbounded above and below as d→∞” to the needed fact that the absolute value tends to infinity. The coefficient z_p−z_q is nonzero by Step 1.3, so this gives the required choice of positive d. Synchronized the derivation in both proof-contract files.

3. items/ex-regulator-of-a-real-quadratic-field.md, Example and Verification 5.1: clarified that 9+4√5=ε⁶ generates the norm-one Pell subgroup (up to sign), while the full order unit group is ±⟨ε³⟩. Thus the rank-one determinant from the Pell generator is 6R_K; it does not generate the full unit group of Z[√5]. This is supported by the opened assigned example ex-real-quadratic-units-and-pell. Synchronized the proof contract.

4. items/cex-z-sqrt-d-units-need-not-equal-ok-units.md, Verification 3.2 and 4.1: corrected the codomain of n↦εⁿ from Q× to ⟨ε⟩⊂O_K×, and clarified the distinction between the norm-one Pell subgroup and the full maximal-order unit group. Synchronized the two derivations in both proof-contract files.

5. library/number-theory/dirichlets-unit-theorem-regulators-and-s-units.md: removed two inaccurate summary claims. The product formula is not the page's only Choice-sensitive result: the full-lattice proof also assumes Choice for its Minkowski and measure inputs. The S-unit proof uses the valuation map with finite-index image in Z^S, not a saturated valuation lattice. The summary now states these interfaces accurately.

## Validation

Required item checks:

| Item | Reflow | Precheck |
| --- | --- | --- |
| thm-product-formula-for-number-fields | reflowed | PASS |
| thm-logarithmic-unit-image-is-a-full-lattice | unchanged | PASS |
| ex-regulator-of-a-real-quadratic-field | unchanged | PASS |
| cex-z-sqrt-d-units-need-not-equal-ok-units | unchanged | PASS |

The batch and run-level proof-contract entries agree for the assigned scope, and the repaired derivation claims match the current item steps. No verification.judge record was present on the changed items.

## Page verdicts

- A page: pass after the two summary repairs; no unresolved page or item defect found in the assigned scope.
- B companion: pass; no prose edits made and no remaining defect found in its assigned examples.

## Uneditable defects

None.

## Blocker

None.

## Coverage limitation

No standalone rendered evidence bundle was supplied with the reader dispatch or found under this run's .autopilot state. I read the assigned current pages and items directly and opened the dependencies listed above. I did not independently fetch every external bibliography locator; the local cited arguments resolved the mathematical checks and repairs in this batch.
