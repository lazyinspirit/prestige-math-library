---
id: def-nrqm-bell-declared-spin-arrangement
aliases: [nrqm-bell-declared-spin-arrangement]
kind: definition
domain: physics
title: "Declared spin correlation arrangement of the framework: two spin-half factors, four directions, joint sign tables and local-response models"
status: draft
origin: session
dependency_level: 12
deps: [def-nrqm-bell-binary-correlation-models, def-nrqm-bell-local-response-representation, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-ideal-conditional-measurement, post-nrqm-framework-identical-particles-and-spin, post-nrqm-framework-preparation-and-apparatus, def-nrqm-state-geometry-framework-state-space, def-nrqm-state-geometry-pure-mixed-states-and-purity, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-framework-quantities-and-units, def-nrqm-kinematics-framework-massive-spin-s-model, def-nrqm-composites-framework-composite-systems-and-local-readouts, def-nrqm-measurement-framework-declared-measurements-and-instruments, def-nrqm-angular-momentum-framework-angular-momentum-observables, prop-nrqm-orbital-and-spin-finite-spin-matrices, lem-nrqm-composites-local-pvm-tensor-extension, lem-nrqm-composites-bounded-tensor-maps, pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws]
dependency_roles:
  def-nrqm-bell-binary-correlation-models: mathematical-premise
  def-nrqm-bell-local-response-representation: mathematical-premise
  post-nrqm-framework-state-and-composition: formulation-prerequisite
  post-nrqm-framework-observable-and-probability: formulation-prerequisite
  post-nrqm-framework-ideal-conditional-measurement: formulation-prerequisite
  post-nrqm-framework-identical-particles-and-spin: formulation-prerequisite
  post-nrqm-framework-preparation-and-apparatus: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-composites-framework-composite-systems-and-local-readouts: formulation-prerequisite
  def-nrqm-measurement-framework-declared-measurements-and-instruments: formulation-prerequisite
  def-nrqm-angular-momentum-framework-angular-momentum-observables: formulation-prerequisite
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  lem-nrqm-composites-local-pvm-tensor-extension: mathematical-premise
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
  pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws: physical-result
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The declared model vocabulary of a two-station spin comparison inside the framework: two declared spin-half internal factors, a declared composite preparation, two declared unit directions per station, the four declared joint sign measurements with their outcome laws, the correlation table and the CHSH functional, and the class of local-response models of that table. The definition adds no physical assumption beyond P1, P2, P3, P6 and P7 in their stated readings; it assigns no spatial position, worldline, separation or temporal order to the factors, asserts no dynamics, no apparatus realization, no measured correlation and no empirical fact, and leaves the identification of a laboratory arrangement with these declarations to the tested identification of P7."
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 8 'Multiparticle States and Tensor Products', Section 5, chapter pages 16-19: the two-observer spin comparison, its four measurement choices and the joint probabilities p(ab|xy)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/ffe665c0cba2eae19a83e88dec42925c_MIT8_05F13_Chap_08.pdf"
    - title: "N. Brunner, D. Cavalcanti, S. Pironio, V. Scarani and S. Wehner, 'Bell nonlocality', Reviews of Modern Physics 86 (2014) 419, Section II.A, PDF pages 2-3: the two-station scenario with two measurement choices per station and its joint table"
      url: "https://arxiv.org/pdf/1303.2849"
verification:
  precheck: n/a
---

## Definition

Adopt the state and composition postulate P1, the observable and probability
postulate P2, the ideal conditional-measurement postulate P3, the
internal-factor assignment of the identical-particle and spin postulate P6 and
the preparation and apparatus discipline P7
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-ideal-conditional-measurement]],
[[post-nrqm-framework-identical-particles-and-spin]],
[[post-nrqm-framework-preparation-and-apparatus]]), together with the
composite, observable and measurement readings of
[[def-nrqm-composites-framework-composite-systems-and-local-readouts]],
[[def-nrqm-observables-framework-observable-and-outcome-law]] and
[[def-nrqm-measurement-framework-declared-measurements-and-instruments]], the
angular momentum readings of
[[def-nrqm-angular-momentum-framework-angular-momentum-observables]] and the
units of [[def-nrqm-framework-quantities-and-units]]. Assume the Axiom of
Countable Choice and the Axiom of Choice, the hypotheses of the cited
mathematical suppliers. The following vocabulary is used by this page.

**(a) Declared spin-half factors.** A **declared spin-half factor** is the
internal factor $V=\mathbb C^{2}$ of the spin-$s$ model
[[def-nrqm-kinematics-framework-massive-spin-s-model]] with spin label
$s=\tfrac12$, with its orthonormal basis $(e_{+},e_{-})$, the self-adjoint
matrices $J_{i}=\tfrac12\sigma_{i}$ of
[[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clause (e) and the spin
observables $S_{i}:=\hbar J_{i}$, read as assigned sharp observables with unit
$\mathrm{J\,s}$ by clause (c) of
[[def-nrqm-angular-momentum-framework-angular-momentum-observables]] and P6
clause (ii). For a unit direction $n\in\mathbb R^{3}$ put
$S_{n}:=\sum_{i}n_{i}S_{i}$. By
[[pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws]] clause (c) the
observable $S_{n}$ has the two eigenvalues $\pm\tfrac{\hbar}{2}$ with
spectral projections
$$P_{n,\varepsilon}:=\tfrac12\bigl(I+\varepsilon\,n\cdot\sigma\bigr), \qquad \varepsilon\in\Sigma=\{-1,+1\},$$
and the label $\varepsilon$ attached to the projection $P_{n,\varepsilon}$ is
the **sign label** of the outcome; the outcome coordinate is
$\varepsilon\hbar/2$, read in the unit $\mathrm{J\,s}$, while the sign label
itself is dimensionless.

**(b) Declared arrangement.** A **declared spin correlation arrangement**
consists of: the declared composite $V\widehat\otimes V$ of two declared
spin-half factors, with inclusion $\kappa$, in the sense of clause (a) of
[[def-nrqm-composites-framework-composite-systems-and-local-readouts]] (a
declared pair of distinguishable subsystems whose assigned spaces are the two
internal factors); a **declared preparation** $\rho\in D(V\widehat\otimes V)$,
the set of density operators on the composite
([[def-nrqm-state-geometry-framework-state-space]],
[[def-nrqm-state-geometry-pure-mixed-states-and-purity]]); and two unit
**setting directions** $a_{0},a_{1}\in\mathbb R^{3}$ for the first station and
$b_{0},b_{1}\in\mathbb R^{3}$ for the second station. The setting labels are
$I=J=\{0,1\}$.

**(c) Declared local sign measurements.** For the first station and setting
$i\in I$, the **declared local sign measurement** is the declared ideal sharp
measurement whose outcome structure is the pair
$(P_{a_{i},+}\otimes I,\;P_{a_{i},-}\otimes I)$ with the sign labels $\pm1$:
these are the spectral projections of the local readout of the assigned
observable $(S_{a_{i}},\mathrm{J\,s})$ on the declared composite, the local
readout being constructed through the spectral measure by clause (c) of
[[def-nrqm-composites-framework-composite-systems-and-local-readouts]] and
[[lem-nrqm-composites-local-pvm-tensor-extension]]. The second station's
declared local sign measurement for setting $j$ is
$(I\otimes P_{b_{j},+},\;I\otimes P_{b_{j},-})$, defined symmetrically.

**(d) Declared joint sign measurement and tables.** For $(i,j)\in I\times J$
the **declared joint sign measurement** of the setting pair is the declared
ideal sharp measurement of the composite whose outcome structure is
$$E_{ij}:=\bigl(P_{a_{i},\varepsilon}\otimes P_{b_{j},\delta}\bigr)_{(\varepsilon,\delta)\in\Sigma\times\Sigma}, \qquad E_{ij}(\varepsilon,\delta)=P_{a_{i},\varepsilon}\otimes P_{b_{j},\delta},$$
with the pair of sign labels as its labels: by clause (c) of
[[pthm-nrqm-angular-momentum-spin-spectra-and-outcome-laws]] each factor is an
orthogonal projection, and the tensor calculus of
[[lem-nrqm-composites-bounded-tensor-maps]] gives
$E_{ij}(\varepsilon,\delta)E_{ij}(\varepsilon',\delta')=
\delta_{\varepsilon\varepsilon'}\delta_{\delta\delta'}E_{ij}(\varepsilon,\delta)$
and $\sum_{\varepsilon,\delta}E_{ij}(\varepsilon,\delta)=I$, so this is a
finite family of mutually orthogonal projections resolving the identity, as
required by clause (a) of
[[def-nrqm-measurement-framework-declared-measurements-and-instruments]]. Its
**outcome law** in the declared preparation $\rho$ is
$$\nu^{\rho}_{ij}(\varepsilon,\delta):=\operatorname{tr}\bigl(\rho\,E_{ij}(\varepsilon,\delta)\bigr), \qquad (\varepsilon,\delta)\in\Sigma\times\Sigma,$$
read from clause (b) of
[[def-nrqm-measurement-framework-declared-measurements-and-instruments]]
(compare P2 clause (ii), [[post-nrqm-framework-observable-and-probability]]).
The **correlation table of the arrangement** is the family
$\nu^{\rho}=(\nu^{\rho}_{ij})_{(i,j)\in I\times J}$, which is a binary
correlation model on $(I,J)$ in the sense of
[[def-nrqm-bell-binary-correlation-models]] clause (a); its correlations
$E_{ij}(\nu^{\rho})$, its marginals and its CHSH functional $S(\nu^{\rho})$ are
the ones of clauses (b) and (d) of that definition, and are written
$S(\rho;a_{0},a_{1};b_{0},b_{1})$ when the arrangement data are displayed.

**(e) Declared local-response models of the arrangement.** A **declared
local-response model of the arrangement** is a local-response representation,
in the sense of [[def-nrqm-bell-local-response-representation]], of the
correlation table $\nu^{\rho}$. It is a model of the same four tables: it
consists of a probability space of **specifications** and of per-station
response laws, subject to the representation identity, and it need not be a
model of the framework's state space. The arrangement **admits a
local-response model** when such a representation exists.

**(f) Scope.** Clauses (a)-(e) fix model vocabulary. They assign no spatial
position, worldline, spatial separation or temporal order to the two factors;
they assert no dynamics, no interaction, no apparatus, no detection procedure
and no measured correlation; they do not assert that the composite is prepared
by any particular laboratory procedure. Whether a laboratory arrangement
realizes the declared preparation, the declared directions and the declared
sign measurements is a tested identification with uncertainty under P7
([[post-nrqm-framework-preparation-and-apparatus]]), not a consequence of this
definition; the model's assignments of states to preparations and of spectral
projections to quantities are the readings of P1, P2 and P3 fixed on the
earlier pages.

## Remarks

- **Why the joint measurement is declared and not derived.** The framework's
  measurement vocabulary declares outcome structures; it does not assert that
  arbitrary observables of two factors possess a joint sharp measurement. For
  the arrangement the product family of clause (d) is itself a finite family
  of mutually orthogonal projections resolving the identity, so the joint
  measurement of the two sign measurements is a declared ideal sharp
  measurement of the composite in the framework's own sense. No claim is made
  that an arbitrary pair of laboratory procedures realizes it.
- **Sign labels versus coordinates.** The sign labels $\pm1$ are the outcome
  indices used by the correlation tables; the physical outcome coordinates are
  $\pm\hbar/2$ in the unit $\mathrm{J\,s}$. The correlation and the CHSH
  functional of clause (d) are functionals of the sign labels and are
  dimensionless; no numerical value of an angular momentum coordinate is
  asserted anywhere.
