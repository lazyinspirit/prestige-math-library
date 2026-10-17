---
page: verified-linear-systems-and-spectral-enclosures-examples
title: "Verified linear systems and spectral enclosures — Examples"
status: published
requires: [verified-linear-systems-and-spectral-enclosures]
items: []
examples:
  - ex-certified-ill-conditioned-two-by-two-linear-solve
  - ex-uncertain-linear-matrix-family-contains-singular-member
  - ex-hermitian-eigenvalue-bisection-by-verified-inertia
---

## Examples

These examples check an exact residual enclosure for a system with condition
number $2^{20}$, show why an interval family containing a singular member
cannot receive a uniform inverse certificate, and carry out ordered Hermitian
eigenvalue bisection with exact inertia queries. The bisection example records
the exact shifts and counts, including the finite query budget.
