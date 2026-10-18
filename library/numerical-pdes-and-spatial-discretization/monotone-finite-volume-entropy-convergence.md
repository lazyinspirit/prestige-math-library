---
page: monotone-finite-volume-entropy-convergence
title: Monotone finite-volume entropy convergence
status: published
items:
  - def-bounded-bv-data-on-line
  - def-monotone-finite-volume-entropy-scheme
  - def-piecewise-linear-fv-time-interpolant
  - lem-monotone-fv-update-preserves-range-and-tvd
  - lem-monotone-fv-discrete-kruzhkov-inequality
  - lem-monotone-fv-local-compactness-and-trace
  - thm-monotone-finite-volume-entropy-convergence
examples: []
---

This page proves strong local entropy convergence for first-order scalar
finite-volume schemes with a locally Lipschitz, consistent, monotone two-point
flux. It fixes the invariant-interval CFL condition, proves the range, TVD,
time-translation and discrete entropy estimates, and supplies the missing
rational-point local BV compactness and strong initial trace argument. The
initial data may be bounded BV without being integrable at infinity. The source
time-to-space ratio condition is retained; global $L^1$ convergence requires
separate tail control, and no system or entropy-process extension is claimed.
