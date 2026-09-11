# Frontier-22 published ergodic Lp and integral-propagation audit

Date: 2026-09-11

## Scope and deduplication

This bounded audit follows the exact finite-`p` path used by active ergodic and
Chacon work: measure preservation, integral invariance, the real `L^p` carrier
and quotient norm, and the Koopman operator. Complete target proofs and the
used clauses of the existing simple/nonnegative-integral findings were read.
It does not audit every `L^p` or ergodic-theory consumer.

Before classification the canonical index and whole ledger were searched by
all exact IDs, titles, aliases, the simple-integral/MCT/linearity suppliers, and
the Koopman/invariance mechanisms. Six affected IDs and two sound definitions
were previously absent. Two bounded clears and three U-P rows existed and are
moved rather than duplicated. Distinct old evidence remains in the updated
rows. No published item or workflow state was edited.

## Sound interfaces

| Item | SHA-256 | Disposition |
|---|---|---|
| `def-measure-preserving-transformation-and-system` | `91bf721a8828e33a05ad502bf467892626b359128c1f9135dfc31256ab0e6cc5` | The measurable inverse-image identity is the standard definition, explicitly independent of invertibility, completeness and finiteness. New bounded clear. |
| `def-invertible-measure-preserving-system` | `5c2b657272cff6aedcac359146dee223dbcb269a9256046bed96d1fb650fc548` | Actual invertibility and invertibility on one invariant measurable conull restriction are precisely distinguished; no arbitrary exceptional-point inverse is selected. New bounded clear. |
| `prop-essential-supremum-is-attained-as-the-least-essential-bound` | `44129419612e17461944ab5918fecfefcf7b8bc1760638219138c23c28475834` | Essential bounds form an upward-closed nonempty ray, so each `s+1/n` is a bound. Countable subadditivity removes the union of exceptional sets, giving attainment and leastness. U-P to bounded clear. |

## Pending repair and exact propagation

The mathematical formulas below remain standard. Their published
justifications directly use the already A-P arbitrary simple/nonnegative
integral foundation. The common repair is choice-free: adjoin omitted
zero-coefficient complement cells before each finite common refinement in
`lem-well-definedness-of-the-simple-integral`, then propagate that repair
through `def-integral-of-a-nonnegative-simple-function`,
`def-nonnegative-lebesgue-integral`, nonnegative additivity/MCT and finite `L^1`
linearity. No new theorem pair is required.

| Item | SHA-256 | Exact affected clause and repair |
|---|---|---|
| `def-calligraphic-l-p-on-a-measure-space` | `671dba7aede2d9cd2e99863914bc81036e53ef464b707b5972d0841ded7d674c` | For finite `p`, both the functional and membership class use the affected nonnegative integral of `|f|^p`. Keep the correct piecewise finite/infinite power convention and repair the upstream integral foundation. New A-P. |
| `def-l-p-space-as-a-quotient-by-null-functions` | `8be15694fcc6ef5568fbffd304122cae46ddeab6f7927454db739c89eded1cc6` | Its finite-`p` carrier is the preceding affected `mathcal L^p` class. The ae equivalence and quotient clauses are sound, but the all-`p` construction remains load-bearing on that carrier. Bounded clear to A-P; prior overload/quotient receipt retained. |
| `thm-minkowski-inequality-for-integrals` | `e6d0a55bbe5c95dbfbdb3b4fd0e88724bd31fd127a7f76a022650081dd7655eb` | Proofs 1.1--1.2 directly integrate and invoke affected nonnegative homogeneity/additivity; their Holder algebra and the infinity clause are otherwise sound. Repair the common finite refinement. Bounded clear to A-P; prior endpoint audit retained. |
| `thm-calligraphic-l-p-and-l-infinity-are-vector-spaces-for-p-at-least-one` | `06d5b0e45e835b899108387a2b8e618e9029492b03d050fcb9ec096f08053079` | Finite-`p` closure in proof 1.1 uses the affected Minkowski theorem and integral homogeneity. The infinity proof is independent. Repair upstream. U-P to A-P. |
| `prop-null-functions-form-a-linear-subspace-and-are-exactly-the-zero-seminorm-class` | `06a6100bac54422d6449948c6704ad42ff81897030a12105c67a55e026a85ba7` | Finite-`p` proof 1.2 invokes the already A-P nonnegative-integral zero criterion; the null-set algebra and infinity clause are sound. Repair upstream. New A-P. |
| `thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space` | `adf72160c5388d3a4168e5781aef4166e02310a66b67b66a08be1a3ad9f1217a` | Finite-`p` well-definedness and the norm triangle use the affected null-kernel and Minkowski interfaces. The quotient algebra and infinity clause are sound. Repair the common foundation. New A-P. |
| `thm-increasing-simple-approximation-of-a-nonnegative-measurable-function` | `7c04c91bf7468aa30a4475ffb9a4961bfed72b28323cdf9a70c5b088a646f1d1` | The explicit dyadic truncations are simple, increasing and pointwise convergent, so the theorem is mathematically available. But proof 3.1 inserts `[step 2.1, L3, algebra]` and `∎` in the middle of “a dyadic multiple of `2^{-n}`,” leaving the published proof structurally malformed. Move the citation and proof terminator to the end of step 3.1. U-P to A-P; this editorial proof defect does not block the use. |
| `thm-integrals-are-invariant-under-measure-preserving-maps` | `4c014836728804e9be3837d4c8f0ae9acf6d8720b6de0ef8e3a79a888061397b` | Indicator/simple invariance is sound after simple-integral well-definedness; proof 2.1 directly invokes the affected MCT and proof 3.1 the affected finite `L^1` integral/linearity chain. Repair upstream. New A-P. |
| `def-koopman-operator-on-l-p` | `a647b3f27230dd2cb3cbf0a679e98961509f18d01c353817f055e326773a96ad` | The formula is correct, but its assertion that pullback maps `L^p` to itself and is representative-independent is explicitly justified by the affected all-`p` isometry theorem. Repair that finite-`p` path. New A-P. |
| `thm-koopman-operator-is-a-linear-isometry-on-l-p` | `7a92ebc59addfc05df5c84b36ed452307d126ce982ccf36f81207a596d0d6863` | Proof 2.1 uses integral invariance for `|f|^p`, and proof 3.1 uses the affected quotient norm theorem. The `p=infinity` essential-bound argument and the explicit inverse/conull-restriction surjectivity proofs are sound. Repair the finite-`p` foundation. New A-P. |

## Frontier impact and limits

Active ergodic/Chacon drafts consume integral invariance and the Koopman
isometry at finite `p`, so root was notified immediately. A local use may inline
the canonical-fibre simple calculation and the common zero-complement repair,
or depend on the repaired upstream chain once published. These are existing
supplier repairs, not new pairs. This receipt does not claim that the active
drafts fail: their finite-`p` equalities are standard and remain available by
the stated local repair.

No fresh external source retrieval was needed because the issue is an exact
local dependency path and the visible proofs isolate every affected clause.
