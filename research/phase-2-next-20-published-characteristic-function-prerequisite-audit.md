# Published prerequisite audit: characteristic functions

Date: 2026-09-11. Scope: the exact expectation, independence and integration
interfaces used by the active original-next-20 characteristic-function group.
The complete current bodies and the clauses named below were read. This is a
bounded item-and-used-interface audit, not a full transitive-closure
certification. No published item was edited.

Before disposition, the canonical ledger was searched by every exact ID,
title/mechanism and supplier ID below. None of these items declares an alias.
All eight had one U-P row; one is promoted to A-P and seven receive bounded
no-repair-needed dispositions. No duplicate classification row is introduced.

## Audited pending repair

### `thm-factorization-of-expectations-for-independent-variables`

Current SHA-256:
`ddb47fd9545c95c9e33927bb3f03efd9b9abae8008de6c4175ccd43b2983c9e4`.
The finite independent-joint-law, measurable product-map, Tonelli/Fubini and
change-of-law steps are valid. The nonnegative clause nevertheless writes

`E[product_i g_i(X_i)] = product_i E[g_i(X_i)]`

as an equality in `[0,+infinity]` without excluding a zero expectation together
with an infinite expectation. Under the library's published extended-real
convention, `0*(+infinity)` is undefined. For two independent variables, take
`g_0(X_0)=0` everywhere and a nonnegative `g_1(X_1)` with infinite expectation.
The left side is the defined value zero while the displayed right side is
undefined. Thus the statement, not merely its dependency metadata, has a real
well-definedness defect.

Repair the nonnegative clause casewise. If some factor expectation is zero,
the corresponding nonnegative variable is zero almost everywhere and the
product expectation is zero. If no factor is zero, the finite extended product
is defined in `(0,+infinity]` and repeated Tonelli gives it. Equivalently, state
the displayed extended product only when no mixed zero/infinity case occurs and
give the mixed case separately. Do not silently change the library-wide
extended-real multiplication convention. The integrable clause is unchanged:
all absolute expectations are finite, so both the product and Fubini argument
are defined. Classification: A-P; no new Phase-2 supplier.

The live
`lem-characteristic-functions-under-affine-maps-and-independent-sums` uses only
that integrable clause for bounded sine and cosine factors. Its exact application
is sound and does not inherit the defective nonnegative boundary.

## Bounded clear interfaces

| Item | SHA-256 | Bounded conclusion |
|---|---|---|
| `thm-change-of-variables-for-expectation` | `69eeb922394ca003e31da194904ccc4d8cb0d8726c89a2306e42199b8b72a30e` | Simple functions give the law identity, MCT gives the nonnegative case, and absolute integrability plus real/imaginary decomposition gives the real and complex cases. |
| `def-integrable-real-and-complex-functions-and-their-integrals` | `ba43e04976130819cf23c7556ee6fa06aa341af90a9b7d31f406fbe620017d74` | The positive/negative and real/imaginary definitions avoid undefined infinity subtraction and correctly make complex integrability equivalent to finite modulus integral. |
| `thm-linearity-of-the-lebesgue-integral-on-l-one` | `9d9fa97f1174d181cbe9d7720e8e25d380d83c1243e7a70d3dd87050efdac51c` | The finite positive/negative-part identity proves real additivity; sign cases prove real homogeneity, and component recombination proves complex linearity. |
| `thm-dominated-convergence` | `6503c37b5ff4f446c16408cdd17ef73d0c581d26e7f944edcabda07b4182f17a` | Removing one measurable null set gives pointwise convergence under a finite majorant; reverse Fatou gives `L^1` convergence and the integral triangle inequality gives integral convergence. |
| `thm-independent-random-elements-have-product-joint-law` | `afb3cac63eb52c9a45cfe8089dd742fdc4539ff088ab76d62fe977029f0ba1a2` | The coordinate tuple is measurable on the generated finite product sigma-algebra, rectangle probabilities factor, and finite product-measure uniqueness identifies the law. |
| `lem-measurable-functions-preserve-independence` | `46efb20e7855b2907dc059601dd96b69bc9bdb7e68ab62165f72df6768329135` | Pulling each finite measurable rectangle back through its coordinate map reduces exactly to the original rectangle criterion. |
| `def-expectation-of-a-nonnegative-or-integrable-random-variable` | `6a564c6ba82a58c9886f9dfffd23f5ea8029ecf28e033895cd20654d26108f09` | Nonnegative expectations are extended integrals; signed/complex expectations are only defined under integrability, so the definition itself has no infinity-subtraction ambiguity. |

These seven items move from U-P to bounded clear. The prior dependency-repair
history remains in the canonical ledger; the current files contain the exact
interfaces used here. No new Phase-2 pair or published edit is required.
