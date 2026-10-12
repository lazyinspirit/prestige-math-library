---
page: cm-math-variations
title: Cm Math Variations
status: draft
items:
  - cex-cm-dalembert-and-vakonomic-evolutions-differ
  - cor-cm-noether-charges-for-translations-rotations-and-boosts
  - cor-cm-reduced-dalembert-and-generalized-forces
  - def-cm-holonomic-constraint-and-ideal-reactions
  - def-cm-infinitesimal-point-symmetry
  - def-cm-legendre-map-in-a-time-dependent-chart
  - def-cm-nonholonomic-velocity-constraint-law
  - def-cm-time-dependent-lagrangian-and-action
  - lem-cm-c2-bump-functions
  - lem-cm-constraint-multipliers-and-accelerations
  - lem-cm-first-variation-formula
  - lem-cm-legendre-map-local-invertibility
  - prop-cm-coordinate-covariance-of-the-euler-lagrange-expression
  - prop-cm-hamiltonian-branch-identities
  - prop-cm-ideal-holonomic-system-in-a-time-dependent-chart
  - prop-cm-lagrangian-boundary-terms-and-scaling
  - prop-cm-local-action-family-exists
  - prop-cm-mechanical-chart-lagrangian-is-hyperregular
  - prop-cm-nonholonomic-distribution-is-not-tangent-to-level-sets
  - rem-cm-scope-of-point-symmetry
  - rem-cm-scope-of-stationarity
  - rem-cm-scope-of-the-legendre-map
  - thm-cm-endpoint-action-differential
  - thm-cm-hamilton-phase-action-stationarity
  - thm-cm-point-noether-identity-with-time-reparametrization
  - thm-cm-point-symmetry-charge-is-conserved
  - thm-cm-stationarity-iff-euler-lagrange
examples: []
requires:
  - cm-math-dynamics
  - constant-rank-submersions-and-regular-level-sets
  - inverse-and-implicit-function-theorems
  - properties-of-the-integral-and-the-working-ftc
  - the-fundamental-theorems-of-calculus
---

The variational layer of the non-relativistic classical mechanics collection,
all of it mathematics: the time-dependent Lagrangian chart with its action and
fixed-endpoint first variation, the equivalence of stationarity with the
Euler–Lagrange equation, the Legendre map with its regularity and
hyperregularity hypotheses, the Hamiltonian identities on an inverse branch,
the point-symmetry Noether identity with its conserved charges, the covariance
of the Euler–Lagrange expression under chart changes, the reduced d'Alembert
equation for an immersed system, the distinction between non-holonomic
d'Alembert and vakonomic evolutions, regular holonomic constraints with ideal
reactions, and the phase-action and endpoint-action forms of stationarity.
Every item carries `domain: mathematics` and depends only on mathematical
suppliers; nothing here asserts that any model describes nature, and the
physical reading of forces, masses and empirical apparatus remains with the
consuming classical-mechanics pages.

The core of the page is the variational chart. [[def-cm-time-dependent-lagrangian-and-action]]
fixes the data $(O,\mathcal L)$, the admissible curves and variations, the
action $S$ and the Euler–Lagrange expression $E_{\mathcal L}$;
[[lem-cm-first-variation-formula]] proves that the first variation exists and
equals $\int(\mathcal L_q\cdot\eta+\mathcal L_v\cdot\eta')dt$, and
[[thm-cm-stationarity-iff-euler-lagrange]] proves the equivalence of
stationarity with $E_{\mathcal L}(q)=0$, using the explicit $C^2$ bumps of
[[lem-cm-c2-bump-functions]]. [[rem-cm-scope-of-stationarity]] separates
stationarity from minimality and records the exclusion of Sobolev and
broken-extremal classes.

The Legendre layer is [[def-cm-legendre-map-in-a-time-dependent-chart]] with
[[lem-cm-legendre-map-local-invertibility]] (a $C^1$ local inverse branch by
the inverse function theorem), the mechanical positive example
[[prop-cm-mechanical-chart-lagrangian-is-hyperregular]], the branch identities
and equivalence of [[prop-cm-hamiltonian-branch-identities]], and the scope
remarks [[rem-cm-scope-of-the-legendre-map]]. The symmetry layer is
[[def-cm-infinitesimal-point-symmetry]], [[thm-cm-point-symmetry-charge-is-conserved]],
[[prop-cm-lagrangian-boundary-terms-and-scaling]], the general
reparametrisation identity [[thm-cm-point-noether-identity-with-time-reparametrization]],
the charges [[cor-cm-noether-charges-for-translations-rotations-and-boosts]] and
the scope note [[rem-cm-scope-of-point-symmetry]].

The constraint layer separates the mathematical laws cleanly:
[[prop-cm-coordinate-covariance-of-the-euler-lagrange-expression]] and
[[cor-cm-reduced-dalembert-and-generalized-forces]] give the chart and reduced
forms; [[def-cm-nonholonomic-velocity-constraint-law]],
[[prop-cm-nonholonomic-distribution-is-not-tangent-to-level-sets]] and
[[cex-cm-dalembert-and-vakonomic-evolutions-differ]] exhibit a non-integrable
velocity constraint for which the d'Alembert and vakonomic evolutions differ;
[[def-cm-holonomic-constraint-and-ideal-reactions]],
[[lem-cm-constraint-multipliers-and-accelerations]] and
[[prop-cm-ideal-holonomic-system-in-a-time-dependent-chart]] develop the
regular holonomic theory with multipliers, existence, constraint preservation
and the rheonomic reaction power. The page closes with
[[thm-cm-hamilton-phase-action-stationarity]],
[[thm-cm-endpoint-action-differential]] and
[[prop-cm-local-action-family-exists]], the phase-action and endpoint-action
forms of stationarity on a hyperregular chart.
