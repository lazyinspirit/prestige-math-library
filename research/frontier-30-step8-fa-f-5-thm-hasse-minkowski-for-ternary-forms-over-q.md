# Final-adjudicator evidence: `thm-hasse-minkowski-for-ternary-forms-over-q`

## Disposition

`repaired`

## Defect and mathematical basis

The Alpha correctly repaired the normal-form step by allowing similarity by a
nonzero rational scalar and independent coordinate rescaling.  A separate
fatal descent gap remained.  The quotient
`b_0=(t^2-a)/b` is an arbitrary nonzero integer and need not be squarefree,
whereas the induction measure was defined only after replacing both
coefficients by squarefree representatives.  Applying that induction directly
to `Z^2-aX^2-b_0Y^2` was therefore unjustified.  The proof also used field-norm
language locally even at places where the quadratic algebra can split.

I inspected the theorem, all five direct dependencies, the Hilbert-symbol
A-page and paired examples page, batch-8 manifest and coverage, the batch and
merged proof contracts, the critical-risk record, both frozen judge
rejections, defects `frontier-30-S8-f-030` and `frontier-30-S8-f-046`, and the
Alpha recovery adjudication.

Authoritative verification:

- https://math.mit.edu/classes/18.782/2013fa/LectureNotes11.pdf — Sutherland's
  Theorem 11.12 states Hasse-Minkowski and its ternary case normalizes to
  `z^2-a x^2-b y^2` with nonzero squarefree integer coefficients, chooses a
  square root modulo the larger coefficient, obtains a strictly smaller norm
  quotient, and descends on the coefficient-size measure.
- https://www.samraskin.net/forms.pdf — Raskin's Hasse-principle section states
  the local-global theorem, explicitly replaces rational coefficient square
  classes by signed squarefree integer representatives, and performs the
  coefficient descent using Hilbert-symbol/norm identities.

## Independent repair

For nonzero `b_0`, I wrote `b_0=d c^2` with `d` a signed squarefree integer.
Then `|d| <= |b_0| < |b|`, so the normalized measure strictly decreases.  At
each place, if `beta_v` has quadratic-algebra norm `b`, then

`(t+T)/(c beta_v)`

has norm `d`, including in the split algebra because nonzero norm makes
`beta_v` a unit and the determinant norm is multiplicative.  Thus
`Z^2-aX^2-dY^2` is locally isotropic everywhere.  After induction gives a
rational zero, the proof uses the globally nonsquare case and divides
`t+sqrt(a)` by `c` times the resulting element of norm `d`; the quotient has
norm `b` and yields a rational zero of the original form.  The globally square
case is discharged before this field quotient.

No direct dependency was edited, so no owner-prerequisite-repair licence is
applicable.  I regenerated the theorem's citation/derivation entries in the
batch-8 and merged proof contracts and updated their critical-risk records to
cover squarefree normalization and split local algebras.

Focused checks passed:

- phase-format precheck of the theorem;
- strict batch-8 and merged proof-contract checks for the theorem;
- batch-8 citation-fidelity check.

