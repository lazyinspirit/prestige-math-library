---
id: def-nrqm-light-matter-framework-dipole-drive-and-long-wavelength
aliases: [nrqm-light-matter-framework-dipole-drive-and-long-wavelength]
kind: definition
domain: physics
title: "The declared prescribed dipole-drive model and its long-wavelength regime"
status: draft
origin: pipeline
dependency_level: 15
deps: [post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, post-nrqm-approximations-static-finite-level-dipole-coupling, def-nrqm-framework-quantities-and-units, def-nrqm-state-geometry-framework-state-space, def-nrqm-state-geometry-pure-mixed-states-and-purity, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-driven-dynamics-framework-driven-model, thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness, def-hilbert-space, def-bounded-linear-operator, def-operator-norm, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-inner-product-space, def-countable-choice, def-axiom-of-choice, def-nrqm-light-matter-framework-finite-level-coupled-model]
dependency_roles:
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-approximations-static-finite-level-dipole-coupling: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-driven-dynamics-framework-driven-model: formulation-prerequisite
  thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-nrqm-light-matter-framework-finite-level-coupled-model: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The declared prescribed dipole-drive model of the finite-level Coulomb pair: a continuous prescribed electric field family E_ext on a compact time interval read in V m^-1, the bounded norm-continuous Hamiltonian H(t) = H_a - sum_j E_ext,j(t) D_j on the declared finite-dimensional matter factor, its norm-continuous bounded propagator, and the declared long-wavelength regime in which the phase variation of the field across the matter is neglected. The field is prescribed and unaffected by the matter; the definition asserts no Maxwell equation, no back-reaction, no propagation, no quantized field, no photon number, no detector, no spontaneous emission and no rate."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 9.3.2 printed pages 215-217 (PDF pages 223-225): the perturbation of an atom by a classical electromagnetic wave, the long-wavelength expansion of the phase factor and the electric-dipole interaction of the field with the atomic dipole"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "S. Pratt, Lecture Notes on Quantum Mechanics (Michigan State University, PHY 851/852; Internet Archive snapshot of 2024-04-21), Chapter 14 Section 14.3 printed page 221: coupling of a quantum field to an external classical current that is unaffected by the emission, with the contrast to an atom that changes state when it emits"
      url: "http://web.archive.org/web/20240421090356/https://web.pa.msu.edu/people/pratts/phy851/lectures/lectures_full.pdf"
---

## Definition

**(a) Adopted readings.** Adopt the state and composition postulate P1, the
observable and probability postulate P2 and the autonomous-dynamics postulate
P4 ([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-autonomous-dynamics]]) and the static finite-level
dipole postulate
[[post-nrqm-approximations-static-finite-level-dipole-coupling]] clauses
(i)-(iv), in the state and outcome readings of
[[def-nrqm-state-geometry-framework-state-space]],
[[def-nrqm-state-geometry-pure-mixed-states-and-purity]] and
[[def-nrqm-observables-framework-observable-and-outcome-law]] and in the units
of [[def-nrqm-framework-quantities-and-units]]. Assume the Axiom of Countable
Choice and the Axiom of Choice ([[def-countable-choice]],
[[def-axiom-of-choice]]). Read the finite-level matter data of
[[def-nrqm-light-matter-framework-finite-level-coupled-model]] clause (b): the
subspace $W\simeq\mathbb C^{d}$, the compressed matter energy $H_{a}$ (joules)
and the compressed dipole matrices $D^{W}_{1},D^{W}_{2},D^{W}_{3}$
($\mathrm{C\,m}$).

**(b) Prescribed field and its regime.** Fix a nonempty compact interval
$I=[t_{0},t_{1}]\subset\mathbb R$ of physical times (seconds) and a
**prescribed electric field family** $t\mapsto\mathbf E_{\mathrm{ext}}(t)
=(E_{\mathrm{ext},1}(t),E_{\mathrm{ext},2}(t),E_{\mathrm{ext},3}(t))$, a
continuous map $I\to\mathbb R^{3}$ whose components are read in
$\mathrm{V\,m^{-1}}$. The field is prescribed: no Maxwell equation, source
model, propagation, back-reaction or feedback of the matter on the source is
assumed, and no claim is made that a laboratory arrangement realizes it.

**(c) The drive Hamiltonian.** The **declared dipole-drive model** is the
finite-dimensional family
$$H_{\mathrm d}(t):=H_{a}-\sum_{j=1}^{3}E_{\mathrm{ext},j}(t)\,D^{W}_{j}, \qquad t\in I,$$
read as the model's energy in joules, on the matter factor $W\simeq\mathbb
C^{d}$; its **control** is the bounded self-adjoint family
$V(t):=-\sum_{j}E_{\mathrm{ext},j}(t)D^{W}_{j}$ with
$$\|V(t)\|\le\Bigl(\sum_{j=1}^{3}|E_{\mathrm{ext},j}(t)|^{2}\Bigr)^{1/2} \Bigl(\sum_{j=1}^{3}\|D^{W}_{j}\|^{2}\Bigr)^{1/2}<\infty,$$
so $t\mapsto H_{\mathrm d}(t)$ is norm-continuous on $I$
([[def-operator-norm]], [[def-bounded-linear-operator]]). The model therefore
declares the driven model of
[[def-nrqm-driven-dynamics-framework-driven-model]] clause (b)(i) in its
**bounded norm-continuous class**, with propagator $U(t,s)$ the unique
norm-continuous solution of $i\hbar\partial_{t}U(t,s)=H_{\mathrm
d}(t)U(t,s)$, $U(s,s)=I$, constructed by the Dyson series of
[[thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness]]; state and
outcome readings are those of clauses (d)-(e) of the driven model, with level
populations read through the eigenbasis of $H_{a}$.

**(d) Long-wavelength regime.** The model declares a **characteristic matter
length** $L>0$ (metres) of the finite-level factor, and adopts the
**long-wavelength (electric-dipole) regime** for a mode or field wavevector
scale $k$: the spatial phase variation of the field across the matter is
neglected, expressed as the model assumption $|k|L\ll1$, and under this
assumption the interaction of the matter with the field is the dipole form
$-\sum_{j}E_{\mathrm{ext},j}(t)D^{W}_{j}$ displayed in clause (c). The regime
is a model assumption of this pair: it is not derived from a Maxwell field, its
criterion is qualitative in this model (no error bound on the neglected phase
variation is claimed), and its identifications of $L$ and of the field with
laboratory data are tested identifications with uncertainty under P7.

**(e) Scope.** Clauses (b)-(d) are adopted model data and readings of a
declared finite-dimensional matter model with a prescribed classical field. The
model yields stimulated transition calculations through clause (c) and the
mathematics of the driven model; it contains **no quantized field, no photon
number, no vacuum state and no detector**, and a prescribed field of this kind
does not by itself supply spontaneous emission: the prescribed source is
unaffected by the matter's transitions, in contrast to the quantized
light-matter model of
[[def-nrqm-light-matter-framework-finite-level-coupled-model]], where the
field's vacuum and the matter's change of level are one coupled model. No rate,
lifetime, linewidth, decay or empirical result is asserted.
