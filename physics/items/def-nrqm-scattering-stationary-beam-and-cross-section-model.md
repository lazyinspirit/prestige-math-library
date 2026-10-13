---
id: def-nrqm-scattering-stationary-beam-and-cross-section-model
aliases: [ nrqm-scattering-stationary-beam-and-cross-section-model ]
kind: definition
domain: physics
title: "The declared stationary elastic beam model: incident plane wave,
  scattered wave, current readings and differential and total cross sections"
status: published
origin: session
dependency_level: 11
deps:
  [
    def-nrqm-scattering-framework-short-range-model,
    lem-nrqm-scattering-three-dimensional-current-and-flux,
    thm-nrqm-controlled-dynamics-stationary-outgoing-integral-and-flux,
    def-sobolev-space-wkp-and-its-norm,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-autonomous-dynamics,
    post-nrqm-framework-preparation-and-apparatus,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-autonomous-dynamics-framework-evolution,
    pthm-nrqm-kinematics-spin-s-outcome-laws,
    def-l-p-space-as-a-quotient-by-null-functions,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  def-nrqm-scattering-framework-short-range-model: formulation-prerequisite
  lem-nrqm-scattering-three-dimensional-current-and-flux: mathematical-premise
  thm-nrqm-controlled-dynamics-stationary-outgoing-integral-and-flux: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  post-nrqm-framework-state-and-composition: formulation-prerequisite
  post-nrqm-framework-observable-and-probability: formulation-prerequisite
  post-nrqm-framework-autonomous-dynamics: formulation-prerequisite
  post-nrqm-framework-preparation-and-apparatus: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  pthm-nrqm-kinematics-spin-s-outcome-laws: physical-result
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The pair's declared stationary elastic beam model for the
  short-range scattering model: a monochromatic incident plane-wave reading with
  wave number and direction, the corresponding current density, the scattered
  outgoing-wave reading, the declared generalized stationary solution, the
  idealization that the stationary wave is not a state-space element, the
  small-target/elastic equal-channel flux assumptions under which the
  differential and total cross sections are read as ratios of currents, and the
  units of those quantities. The model is an additional assumption of the pair;
  it asserts no preparation, no beam apparatus, no count rate and no measured
  cross section, and no single-particle trajectory claim."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 12.3, printed pages 267-270 (PDF pages 275-278)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin,
        author-hosted course text), Sections 15.1-15.4 printed pages 209-217:
        the scattering amplitude, the differential cross section and flux
        normalization"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
verification:
  precheck: n/a
---

## Definition

**(a) Framework data.** Adopt the state and composition postulate P1, the
observable and probability postulate P2, the autonomous-dynamics postulate P4
and the preparation and apparatus discipline P7
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-autonomous-dynamics]],
[[post-nrqm-framework-preparation-and-apparatus]]), with the short-range
scattering model of
[[def-nrqm-scattering-framework-short-range-model]]: mass $m>0$, spin zero,
state space $H_{0}=L^{2}(\mathbb R^{3};\mathbb C)$, a declared short-range
potential $V$, the free and interacting assigned energy observables
$H^{\mathrm{free}}$ and $H$, its reading of the flow by
[[def-nrqm-autonomous-dynamics-framework-evolution]], and the units of
[[def-nrqm-framework-quantities-and-units]]. Assume the Axiom of Countable
Choice and the Axiom of Choice ([[def-countable-choice]],
[[def-axiom-of-choice]]).

**(b) Incident plane-wave reading and declared density scale.** As an
additional model assumption of the pair, adopt the **stationary elastic beam
model**. Fix a **wave number** $k>0$ in $\mathrm{m^{-1}}$, a **direction**
$d\in S^2$, and an **incident number-density scale** $n_{\mathrm{inc}}>0$ in
$\mathrm{m^{-3}}$. This scale is an explicitly declared model normalization;
no numerical sample density or measured beam value is supplied. Retain the
unit-amplitude, dimensionless incident shape
$$u_{\mathrm{inc}}(x):=e^{ikd\cdot x},$$
with energy reading $E:=\hbar^2k^2/(2m)$ in joules. The **physical incident
beam field** is $\Phi_{\mathrm{inc}}:=\sqrt{n_{\mathrm{inc}}}\,u_{\mathrm{inc}}$,
with unit $\mathrm{m^{-3/2}}$ and constant model number density
$|\Phi_{\mathrm{inc}}|^2=n_{\mathrm{inc}}$. For a dimensionless unit-amplitude
shape $\psi$, write $\mathbf j^{\mathrm{unit}}[\psi]:=(\hbar/m)\operatorname{Im}(\overline\psi\nabla\psi)$ for the mathematical current of
[[lem-nrqm-scattering-three-dimensional-current-and-flux]]. Its incident
value is $(\hbar k/m)d$, with velocity unit $\mathrm{m\,s^{-1}}$. The model's
**physical number-current density** is the current of
$\Phi=\sqrt{n_{\mathrm{inc}}}\psi$,
$$\mathbf j[\Phi]:=\frac{\hbar}{m}\operatorname{Im}(\overline\Phi\nabla\Phi)=n_{\mathrm{inc}}\mathbf j^{\mathrm{unit}}[\psi].$$
Thus the **incident current density** and **incident flux density** through a
plane normal to $d$ are
$$\mathbf j_{\mathrm{inc}}=n_{\mathrm{inc}}\frac{\hbar k}{m}d,\qquad J_{\mathrm{inc}}:=n_{\mathrm{inc}}\frac{\hbar k}{m}>0,$$
both in $\mathrm{m^{-2}s^{-1}}$ as in
[[def-nrqm-framework-quantities-and-units]] clause (d)5. The mathematical
plane-wave current of the cited lemma remains the unit-shape computation;
the density factor supplies the declared physical beam normalization.

**(c) Scattered-wave reading and generalized stationary solution.** For a
declared short-range potential $V$ the model declares a **generalized
stationary solution** at energy $E$ and direction $d$ to be a function
$\Psi:\mathbb R^{3}\to\mathbb C$ in $H^2_{\mathrm{loc}}(\mathbb R^3)$,
meaning that all weak derivatives of order at most two are locally square
integrable ([[def-sobolev-space-wkp-and-its-norm]]), with $V\Psi\in L^2_{\mathrm{loc}}$,
of class $C^{2}$ on the complement of the essential closed support of $V$,
and satisfying the equation on all of $\mathbb R^3$ distributionally:
$$\int_{\mathbb R^3}\Psi(x)\left[-\frac{\hbar^2}{2m}\Delta\eta(x)+(V(x)-E)\eta(x)\right]dx=0\qquad(\eta\in C_c^\infty(\mathbb R^3;\mathbb C)).$$
Here the essential closed support is the complement of the union of open
sets on which $V=0$ almost everywhere; the test functions are smooth and
compactly supported; $\Delta=\sum_{i=0}^{2}\partial_i^2$ uses the spatial
coordinate convention of the current lemma. Outside the essential closed
support, $V=0$ almost everywhere and $\Psi$ is $C^2$, so the continuous
free-equation residual has zero test pairing and hence vanishes pointwise:
$-\frac{\hbar^2}{2m}\Delta\Psi=E\Psi$. The equation containing the declared
representative $V(x)$ holds almost everywhere there; it holds pointwise there
when $V$ is replaced by its zero representative on this exterior open set.
No pointwise equation with arbitrary null-set values of $V$ is asserted.
The solution has the **outgoing asymptotic reading**
$$\Psi(x)=e^{ikd\cdot x}+\frac{f_{k}(\Omega)}{r}e^{ikr}+\mathcal E(x),\qquad x=r\Omega,\ r\to\infty,$$
with a **scattering amplitude** function $f_k:S^2\to\mathbb C$, read in
metres relative to the unit incident shape, and a physical beam field
$\Phi:=\sqrt{n_{\mathrm{inc}}}\Psi$ with unit $\mathrm{m^{-3/2}}$. The same
constant factor multiplies its incident, outgoing and remainder terms;
$f_k$ remains the amplitude relative to the incident field, in metres.
Here $\Omega:=x/r$ is the **outgoing unit direction**. Require
$f_k\in C^1(S^2)$ in the radial-extension convention of
[[lem-nrqm-scattering-three-dimensional-current-and-flux]] (c), and require
$|\mathcal E(r,\Omega)|+|\partial_r\mathcal E(r,\Omega)|\le Cr^{-2}$
uniformly in $\Omega$ for all sufficiently large $r$, with some finite $C$.
For the bounded compact-support class the model selects the outgoing
integral solution of
[[thm-nrqm-controlled-dynamics-stationary-outgoing-integral-and-flux]],
with its potential parameter replaced by $W_x=2mV/\hbar^2$. Explicitly,
choose $R>0$ enclosing the essential support, put
$G_k(z)=e^{ik|z|}/(4\pi|z|)$ for $z\ne0$, and on $L^2(B_R;\mathbb C)$ put
$K_ku(x)=\int_{B_R}G_k(x-y)W_x(y)u(y)dy$. Select
$u=(I+K_k)^{-1}(u_{\mathrm{inc}}|_{B_R})$ and
$\Psi(x)=u_{\mathrm{inc}}(x)-\int_{B_R}G_k(x-y)W_x(y)u(y)dy$,
using the locally continuous representative supplied by $H^2_{\mathrm{loc}}$.
The cited theorem proves invertibility and the global equation, with a smooth
amplitude and these uniform remainder bounds. The selection is independent
of enlarging $R$: the restriction of a solution constructed in a larger ball
solves the smaller invertible integral equation, and $W_x=0$ outside the
smaller ball makes both global integrals identical. Hence the compact-support
model determines $\Psi$ and $f_k$ from $V,k,d$; arbitrary exterior fields
and arbitrary interior extensions are excluded. For the general resolvent-tail
class these requirements define a conditional reading only, without an
existence or uniqueness assertion.
The **scattered physical field** is
$\Phi_{\mathrm{sc}}:=\sqrt{n_{\mathrm{inc}}}(\Psi-u_{\mathrm{inc}})$.
The physical scattered radial current density, obtained by applying the
quadratic current formula to this scattered component, is
$$j_r^{\mathrm{sc}}(r,\Omega)=n_{\mathrm{inc}}\left(\frac{\hbar k}{m}\frac{|f_k(\Omega)|^2}{r^2}+O(r^{-3})\right)\qquad(r\to\infty),$$
in $\mathrm{m^{-2}s^{-1}}$ for the fixed declared density scale. The leading
unit-shape current is clause (c) of
[[lem-nrqm-scattering-three-dimensional-current-and-flux]]; the current of
the remainder is controlled by the stationary theorem. The definition uses
the scattered component, with no assumption that incident/scattered
interference in the total field vanishes.
A generalized stationary solution is generally not an element of $H_{0}$; it
is not a preparation of the model, and clause (d) of
[[def-nrqm-scattering-framework-short-range-model]] does not apply to it. It
is used only through the declared flux quantities computed from it, and every
such use states the idealization.

**(d) Differential and total cross-section readings.** Under the declared
**equal-channel elastic flux assumptions** -- that the incident and outgoing
readings refer to the same elastic channel at the same energy, that the
incident flux density is spatially uniform over the transverse extent of the
target and the outgoing current is read far outside the support of $V$ -- the
model declares the **differential cross section**
$$\frac{d\sigma}{d\Omega}(\Omega):=\lim_{r\to\infty}\frac{r^{2}\,j^{\mathrm{sc}}_{r}(r,\Omega)}{J_{\mathrm{inc}}} =|f_{k}(\Omega)|^{2},$$
read in $\mathrm{m^{2}\,sr^{-1}}$, and the **total cross section**
$$\sigma:=\int_{S^{2}}\frac{d\sigma}{d\Omega}(\Omega)\,d\Omega =\int_{S^{2}}|f_{k}(\Omega)|^{2}\,d\Omega,$$
read in $\mathrm{m^{2}}$, whenever the displayed limit and integral exist; the
existence and finiteness of both are proved on this page for the bounded
compact-support class at $k>0$. No stationary existence or finite
cross-section result is asserted here for the general resolvent-tail class. The common positive density factor cancels in the ratio,
$r^2j_r^{\mathrm{sc}}/J_{\mathrm{inc}}\to |f_k|^2$, so the cross sections are
independent of the declared $n_{\mathrm{inc}}$. This normalization supplies
no relation to the energy outcome law of P2 and no assertion that an $L^2$
preparation realizes either stationary field.

**(e) Status and scope.** Clauses (b)-(d) are declarations of the pair under
P1, P2, P4 and P7 together with the short-range model; they are an idealized
stationary reading and not a model of an apparatus. The new density scale is
a symbolic normalization parameter of that reading, not a measured sample
value; multiplication by $\sqrt{n_{\mathrm{inc}}}$ does not turn the
stationary shape into an $L^2$ preparation. In particular no beam
source, target density, collimation, detector acceptance, efficiency,
background or counting procedure appears, and the symbols
$d\sigma/d\Omega$ and $\sigma$ denote model quantities computed from the
declared solution. An identification of a measured count cross section with
these quantities requires a separate preparation and detection model and
carries the uncertainty of that identification.

## Remarks

- **Flux, not probability.** The cross-section readings are ratios of current
  densities of the declared physical stationary fields, whose currents are
  $n_{\mathrm{inc}}$ times the unit-shape currents computed in
  [[lem-nrqm-scattering-three-dimensional-current-and-flux]]; they are not
  read as probabilities of detecting a single particle, and no such
  single-particle statement is asserted.
- **Optical theorem and other refinements.** No optical theorem, dispersion
  relation or inelastic extension is declared or used on this pair.
