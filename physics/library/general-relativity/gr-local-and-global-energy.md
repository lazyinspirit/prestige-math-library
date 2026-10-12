---
requires:
  - gr-einstein-and-matter
  - gr-framework-and-geometry
  - gr-tensors-and-observers
  - gr-connections-and-free-fall
  - gr-curvature-and-tides
page: gr-local-and-global-energy
title: "Local And Global Energy"
status: draft
library: physics
items:
  - def-gr-observer-energy-momentum-current
  - lem-gr-observer-energy-momentum-decomposition
  - def-gr-measured-energy-density-flux-and-stress
  - def-gr-congruence-acceleration-and-expansion
  - lem-gr-congruence-acceleration-and-expansion-properties
  - lem-gr-energy-momentum-current-divergence
  - lem-gr-killing-congruence-kinematics-and-energy-current
  - def-gr-killing-energy-charge
  - pthm-gr-local-energy-balance
  - rem-gr-no-universal-global-energy
  - rem-gr-local-and-global-energy-scope-and-deferrals
examples: []
---

This page treats energy in the classical gravitational framework of
[[gr-einstein-and-matter]]: what can be said locally about the energy content of
matter as measured by an observer congruence, and under which additional
hypotheses a conserved global energy exists. Seven items are mathematics —
complete conditional deductions inside a time-oriented smooth Lorentzian
four-manifold, with a chosen orientation on the domain for flux statements — and four are physics: one physical reading of the measured
fields, one definition of the Killing energy, one model-conditional theorem and
one scope note. No item reports a measurement, and none asserts that the model
or its postulates describe nature.

**The observer split.** For a smooth symmetric covariant $2$-tensor field $T$
and a smooth observer congruence $n$, the measured energy density
$\mu=T_{ab}n^an^b$, the energy-momentum current $J=-T(\cdot,n)$, the energy
flux $\Phi=J-\mu n$ and the spatial stress $S=h^*h^*T$ are defined in
[[def-gr-observer-energy-momentum-current]]; the orthogonal decomposition
$T^{ab}=\mu n^an^b+n^a\Phi^b+n^b\Phi^a+S^{ab}$, its uniqueness and the
component formulas in a $g$-orthonormal frame are proved in
[[lem-gr-observer-energy-momentum-decomposition]]. The physical reading of
these fields as the energy density, energy flux and momentum density, and
stress measured by the congruence, with the framework's units, is
[[def-gr-measured-energy-density-flux-and-stress]]; it is a reading, not a
positivity or conservation statement.

**Kinematics and the local balance.** The acceleration $a=\nabla_nn$, the
expansion $\theta=\nabla_an^a$ and the along-congruence derivative $D$ of a
congruence are defined in
[[def-gr-congruence-acceleration-and-expansion]] and characterized in
[[lem-gr-congruence-acceleration-and-expansion-properties]]. For on-shell
matter, $\nabla_aJ^a=-T^{ab}\nabla_an_b$, equivalently
$D\mu+\mu\theta+\nabla_a\Phi^a=-T^{ab}\nabla_an_b$, and the finite-chain
bookkeeping of the current is
[[lem-gr-energy-momentum-current-divergence]]. Fluxes use the metric volume form on the oriented matter domain; the
current and its tensor need not extend outside that domain. The balance is a source-term
identity: the measured energy current alone need not be conserved.

**Stationary models and the Killing energy.** If the model admits an
everywhere timelike future-directed Killing field $\xi$, then with
$X=\sqrt{-g(\xi,\xi)}$ and $n=\xi/X$ the redshift-weighted current $XJ$ is
divergence-free and equals minus the Killing current $T(\cdot,\xi)$
([[lem-gr-killing-congruence-kinematics-and-energy-current]]). The Killing
energy $Q_\xi(\Sigma)=-\Phi_{T(\cdot,\xi)}(\Sigma)$ of a finite three-chain is
defined in [[def-gr-killing-energy-charge]], and
[[pthm-gr-local-energy-balance]] assembles the physical statement: the local
balance holds in every smooth model of the adopted field law, and in a
stationary model the Killing energy assigned to homologous slices is conserved
up to the side flux. The mathematical conservation implication needs
Killing symmetry and $\nabla^aT_{ab}=0$; the field law is one source of this
divergence condition.

**Scope.** [[rem-gr-no-universal-global-energy]] records what the framework
does not provide: an observer-independent local energy density, a local
gravitational energy density, or any global energy without a symmetry and
control of the flux; asymptotic masses are deferred to a boundary-asymptotic
module. [[rem-gr-local-and-global-energy-scope-and-deferrals]] fixes the page's
conventions, the smooth and finite-chain restrictions, the choice assumption
and the obligations deferred to other pages. The companion page
[[gr-local-and-global-energy-examples]] works the translating-dust,
boost-congruence and perfect-fluid balances, the Killing energy of a static
dust, and two counterexamples separating measured energy from observer
independence and from on-shell positivity.
