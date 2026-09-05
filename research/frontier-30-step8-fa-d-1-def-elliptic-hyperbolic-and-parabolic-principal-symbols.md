# Final-adjudicator evidence: `def-elliptic-hyperbolic-and-parabolic-principal-symbols`

Disposition: `accepted-after-review`.

I independently read the current definition, both cited definitions, the full
PDE A/B-page context, the batch-7 manifest and coverage notes, the Step-6 reader
and refuter records, both judge rejections, both Alpha adjudications, the
round-2 repair account, and the current downstream proof-contract quotations.
As a definition it correctly has no local proof contract or proof risk record;
`verification.precheck: n/a` is the repository convention.  It was nevertheless
included in the Step-6 untouched/refuter scope, whose report raised no defect in
this item.

The first repair made strict hyperbolicity nonvacuous in dimension one by
requiring the distinguished covector to be noncharacteristic.  The second
repair addresses the exact remaining fatal defect: positive semidefiniteness
alone includes the zero quadratic form, whereas the added `and nonzero`
condition ensures that a second-order spatial part is actually present.  The
three clauses are now internally consistent: ellipticity is definiteness of a
real symmetric quadratic form; strict hyperbolicity relative to `tau` asks for
two distinct real roots on every transverse affine line and separately
requires `p_2(x,tau) != 0`; and the page's heat-type parabolic convention asks
for a nonzero positive-semidefinite spatial form together with first-order time
evolution.  The wording deliberately includes degenerate spatial diffusion,
which is consistent with the page's pointwise, non-uniform convention and does
not assert uniform parabolicity.

Authoritative source verification:

- https://www.math.toronto.edu/ivrii/PDE-textbook/Chapter1/S1.3.html — Victor
  Ivrii's University of Toronto PDE text, section 1.3, classifies the rank-one
  normal form `u_xx` as the two-variable parabolic case and explicitly notes
  that a second derivative must remain or the equation is first order.  The
  same section presents heat-type forms with a first derivative in the
  evolution variable.  This directly supports the Alpha repair's exclusion of
  the zero spatial quadratic form and the local heat-type convention.

No item, dependency, page, or contract bytes required an independent repair.
Focused render, dependency, content-policy, and strict batch-7 proof-contract
checks passed before recording this decision.
