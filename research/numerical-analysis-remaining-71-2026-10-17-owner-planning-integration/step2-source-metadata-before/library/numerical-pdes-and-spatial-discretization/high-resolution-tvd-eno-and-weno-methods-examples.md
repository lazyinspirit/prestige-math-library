---
page: high-resolution-tvd-eno-and-weno-methods-examples
title: High-resolution TVD, ENO and WENO reconstruction — Examples
status: draft
items: []
examples:
  - ex-na-smooth-linear-advection-reconstruction
  - ex-na-minmod-extremum-clipping
  - ex-na-burgers-godunov-musc-shock
  - ex-na-weno-js-critical-point-epsilon-scaling
  - cex-na-unlimited-centered-reconstruction-overshoots
---

These examples check the affine-advection reconstruction identities, minmod clipping at a smooth maximum, the Burgers entropy shock and its monotone finite-volume baseline, and the actual face-state order for an explicit WENO-JS epsilon scaling at a first-order critical point. The final counterexample computes the new extrema produced by unlimited centered slopes. All cell-average, nodal, face and time-index conventions are those fixed on the companion A page.
