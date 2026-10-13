---
page: qm-one-dimensional-potentials-examples
title: "Qm One Dimensional Potentials — Examples"
status: published
library: physics
items: []
examples:
  - ex-nrqm-potentials-rectangular-barrier-tunnelling-and-thick-limit
  - ex-nrqm-potentials-finite-well-exact-root-and-count
  - ex-nrqm-potentials-box-spectrum-and-nodes
  - rem-nrqm-potentials-examples-scope-limits
requires:
  - qm-one-dimensional-potentials
  - qm-framework-and-quantities
  - qm-math-intervals-and-contacts
---

The companion page to [[qm-one-dimensional-potentials]] collects three exact
finite computations in the declared models.
[[ex-nrqm-potentials-rectangular-barrier-tunnelling-and-thick-limit]] treats
the rectangular barrier at the exactly solvable scaling $U=2E$ with
$\kappa a=\ln 10$: it obtains $T=400/10201$ and $R=9801/10201$, brackets them
by rationals, compares the exact value with the thick-barrier value $1/25$
with difference $-201/255025$, and verifies the theorem's error bound
$201/125000=0.001608$
([[pthm-nrqm-potentials-barrier-flux-and-transmission]]).
[[ex-nrqm-potentials-finite-well-exact-root-and-count]] exhibits a declared
well depth at which the unique bound state is exactly solvable, with
$k=\kappa=\pi/(4a)$ and binding energy $E=-U/2$, verifies the root condition
with $\tan(\pi/4)=1$, and verifies the exact bound-state counts and branch
parities at declared depths, including the always-present ground state
([[pthm-nrqm-potentials-finite-well-bound-states]]).
[[ex-nrqm-potentials-box-spectrum-and-nodes]] records the exact free
Dirichlet box eigenpairs and nodal points, the exact spectrum under a constant
potential, the attainment of the min-max bound and the positive gaps
([[pthm-nrqm-potentials-interval-spectra-completeness-and-nodes]]).
[[rem-nrqm-potentials-examples-scope-limits]] records the combined scope: the
comparisons are exact internal checks of the cited theorems at declared
parameter values, not simulations, not measurements and not statistical
inference. The displayed decimals are rational bracket endpoints or exact
terminating decimal expansions of rational values, justified in the
verifications.
