# Ring determinant screening — 2026-09-23

Read all 24 assigned current items in full and the relevant direct supplier contracts. One new potential false-contract flag; 23 bounded no-candidate receipts. No mathematical content changed and no indirect consumers were added. Exact hashes, passages and checks are in [receipts](root-determinants-01-receipts.json).

## Row scaling on a zero-column matrix

`def-row-transformations-over-a-commutative-ring` says:

> A row scaling is reversible exactly when its scalar is a unit.

The definition does not restrict the column count. Its direct matrix definition explicitly admits empty shapes. Take the nonzero ring Z and shape 1 by 0. The matrix set is a singleton and row 0 is the empty function. Scaling it by 0 changes no entry, so the induced transformation is the identity and is reversible. But 0 is not a unit in Z. The independent Terra response agreed with this witness and identified the same missing qualification; this is supporting screening, not adjudication.

This is a potential false-claim/missing-hypothesis flag, not a confirmed-fatal verdict. A later repair could restrict the iff to positive-column matrices, distinguish the empty-width exception, or explicitly define a formal operation whose inverse must work uniformly for all widths. The current text does not specify the latter interpretation. Existing published `def-matrices-over-a-commutative-ring` and `lem-ring-units-form-a-group` suffice to formulate the witness; no new Phase-2 supplier is needed or claimed. No external source was read: the witness follows directly from the displayed function-set and unit definitions.

## Bounded negative checks

The remaining formulas were checked over commutative rings, including zero divisors, characteristic two, and the zero ring. Alternation uses paired permutation terms or additive cancellation rather than division by two. Rigidity gives multiplicativity without invertibility. The field RREF argument has the positive-size and field hypotheses it needs. No defect was inherited from the row-operation definition by positive-square-size consumers.
