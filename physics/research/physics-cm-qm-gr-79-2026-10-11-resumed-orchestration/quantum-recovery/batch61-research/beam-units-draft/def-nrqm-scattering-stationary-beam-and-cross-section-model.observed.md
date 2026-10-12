---
id: def-nrqm-scattering-stationary-beam-and-cross-section-model
aliases: [nrqm-scattering-stationary-beam-and-cross-section-model]
kind: definition
domain: physics
title: "The declared stationary elastic beam model: incident plane wave, scattered wave, current readings and differential and total cross sections"
status: draft
origin: session
dependency_level: 10
deps: [def-nrqm-scattering-framework-short-range-model, lem-nrqm-scattering-three-dimensional-current-and-flux, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, post-nrqm-framework-preparation-and-apparatus, def-nrqm-framework-quantities-and-units, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-autonomous-dynamics-framework-evolution, pthm-nrqm-kinematics-spin-s-outcome-laws, def-l-p-space-as-a-quotient-by-null-functions, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-scattering-framework-short-range-model: formulation-prerequisite
  lem-nrqm-scattering-three-dimensional-current-and-flux: mathematical-premise
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
physical_scope: "The pair's declared stationary elastic beam model for the short-range scattering model: a monochromatic incident plane-wave reading with wave number and direction, the corresponding current density, the scattered outgoing-wave reading, the declared generalized stationary solution, the idealization that the stationary wave is not a state-space element, the small-target/elastic equal-channel flux assumptions under which the differential and total cross sections are read as ratios of currents, and the units of those quantities. The model is an additional assumption of the pair; it asserts no preparation, no beam apparatus, no count rate and no measured cross section, and no single-particle trajectory claim."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 12.3 printed pages 264-270 (PDF pages 272-278): cross sections and scattering experiments, incident and scattered flux and the differential cross section"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Sections 15.1-15.4 printed pages 209-217: the scattering amplitude, the differential cross section and flux normalization"
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

**(b) Incident plane-wave reading.** As an additional model assumption of the
pair, adopt the **stationary elastic beam model**. Fix a **wave number**
$k>0$, read in $\mathrm{m^{-1}}$, and a **direction** $d\in S^{2}$. The model
declares the **incident plane-wave reading**
$$u_{\mathrm{inc}}(x):=e^{ikd\cdot x}$$
with the **incident energy reading** $E:=\hbar^{2}k^{2}/(2m)$ in joules and
the **incident current density**
$$\mathbf j_{\mathrm{inc}}:=\frac{\hbar k}{m}\,d,$$
read in $\mathrm{m^{-2}s^{-1}}$ by clause (d)5 of
[[def-nrqm-framework-quantities-and-units]]; this is the current density of
the pair $u=\cos(kd\cdot x)$, $v=\sin(kd\cdot x)$ computed in clause (c) of
[[lem-nrqm-scattering-three-dimensional-current-and-flux]]. The model
declares the **incident flux density** (current per unit area) to be the
number $J_{\mathrm{inc}}:=\hbar k/m$, read in
$\mathrm{m^{-2}s^{-1}}$.

**(c) Scattered-wave reading and generalized stationary solution.** For a
declared short-range potential $V$ the model declares a **generalized
stationary solution** at energy $E$ and direction $d$ to be a function
$\Psi:\mathbb R^{3}\to\mathbb C$ of class $C^{2}$ on the complement of
$\operatorname{supp}V$ that satisfies
$$-\frac{\hbar^{2}}{2m}\Delta\Psi+V\Psi=E\Psi$$
pointwise there and has the **outgoing asymptotic reading**
$$\Psi(x)=e^{ikd\cdot x}+\frac{f_{k}(\Omega)}{r}e^{ikr}+\mathcal E(x),\qquad x=r\Omega,\ r\to\infty,$$
with a **scattering amplitude** function $f_{k}:S^{2}\to\mathbb C$, read in
metres, an **outgoing unit direction** $\Omega:=x/r$, and a remainder
$\mathcal E$ whose precise decay is fixed by the existence theorem of this
page and is not part of this definition. The model reads the **scattered
current density** in the radial direction through clause (c) of
[[lem-nrqm-scattering-three-dimensional-current-and-flux]] as
$$j^{\mathrm{sc}}_{r}(r,\Omega)=\frac{\hbar k}{m}\frac{|f_{k}(\Omega)|^{2}}{r^{2}}+O(r^{-3}) \qquad(r\to\infty).$$
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
existence and finiteness of both are proved on this page for the declared
classes. The model declares no further normalization: it asserts no relation
between these quantities and the energy outcome law of P2, and it asserts no
claim that any preparation realizes the incident plane-wave reading.

**(e) Status and scope.** Clauses (b)-(d) are declarations of the pair under
P1, P2, P4 and P7 together with the short-range model; they are an idealized
stationary reading and not a model of an apparatus. In particular no beam
source, target density, collimation, detector acceptance, efficiency,
background or counting procedure appears, and the symbols
$d\sigma/d\Omega$ and $\sigma$ denote model quantities computed from the
declared solution. An identification of a measured count cross section with
these quantities requires a separate preparation and detection model and
carries the uncertainty of that identification.

## Remarks

- **Flux, not probability.** The cross-section readings are ratios of current
  densities of a declared stationary field, exactly as computed in
  [[lem-nrqm-scattering-three-dimensional-current-and-flux]]; they are not
  read as probabilities of detecting a single particle, and no such
  single-particle statement is asserted.
- **Optical theorem and other refinements.** No optical theorem, dispersion
  relation or inelastic extension is declared or used on this pair.
