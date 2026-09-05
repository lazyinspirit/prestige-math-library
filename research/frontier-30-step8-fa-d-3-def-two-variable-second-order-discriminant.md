# Final-adjudicator evidence: `def-two-variable-second-order-discriminant`

Disposition: `accepted-after-review`.

I independently read the current definition and principal-symbol dependency,
the complete PDE A/B-page carrier, the batch-7 manifest and coverage notes, the
Step-6 reader/refuter records, both judge rejections, both Alpha
adjudications, the round-2 repair account, and every current proof-contract
quotation that uses this definition.  The item is a definition with no proof,
so it correctly has no item-local proof contract or proof risk record and uses
`verification.precheck: n/a`; the Step-6 refuter nevertheless opened it and
reported no defect in it.

For the symmetric coefficient matrix `[[A,B],[B,C]]`, its determinant is
`AC-B^2=-Delta`.  Away from the zero matrix, `Delta<0` therefore means a
definite rank-two form, `Delta>0` an indefinite rank-two form, and `Delta=0`
a rank-one semidefinite form.  The first repair correctly excluded the zero
matrix from the rank-one parabolic case.  The second repair correctly changed
the direct dependency to the principal-symbol definition and explicitly
separated this binary-form use of “parabolic” from the page's heat-type
space-time convention.  Consequently neither terminology is being inferred
from an incompatible dependency.  The downstream contracts quote the
discriminant formula exactly, and their uses remain valid.

Authoritative source verification:

- https://www.math.toronto.edu/ivrii/PDE-textbook/Chapter1/S1.3.html — Victor
  Ivrii's University of Toronto PDE text, section 1.3, reduces a nonzero real
  binary second-order principal form to the elliptic, hyperbolic, or rank-one
  parabolic normal forms and explicitly says a second derivative must remain,
  otherwise the equation is first order.  It also separately presents the
  heat-type form with a first derivative in the evolution variable.  This
  supports both the zero-form exclusion and the repaired distinction between
  the two local conventions.

No item, direct dependency, page, or item-local contract required an
independent repair.  Focused render, dependency, content-policy, and strict
batch-7 proof-contract checks passed before recording this decision.
