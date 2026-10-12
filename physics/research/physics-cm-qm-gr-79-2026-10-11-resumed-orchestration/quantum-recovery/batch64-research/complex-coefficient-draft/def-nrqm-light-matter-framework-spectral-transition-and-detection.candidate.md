---
id: def-nrqm-light-matter-framework-spectral-transition-and-detection
aliases: [nrqm-light-matter-framework-spectral-transition-and-detection]
kind: definition
domain: physics
title: "Spectral-transition readings of the coupled model: dipole coefficients, the single-vertex photon density and ideal energy-window detection"
status: draft
origin: pipeline
dependency_level: 15
deps: [def-nrqm-light-matter-framework-finite-level-coupled-model, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-ideal-conditional-measurement, post-nrqm-framework-preparation-and-apparatus, def-nrqm-framework-quantities-and-units, def-nrqm-state-geometry-framework-state-space, def-nrqm-state-geometry-pure-mixed-states-and-purity, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-photons-framework-radiation-sector-and-quantum-assignments, def-nrqm-photons-framework-ideal-counting-and-detection-model, def-nrqm-measurement-framework-declared-measurements-and-instruments, thm-nrqm-fock-and-equilibrium-golden-rule-coefficient-approximate-identity, def-inner-product-space, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-countable-choice, def-axiom-of-choice, lem-nrqm-light-matter-first-order-photon-energy-law]
dependency_roles:
  def-nrqm-light-matter-framework-finite-level-coupled-model: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-ideal-conditional-measurement: physical-assumption
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-photons-framework-radiation-sector-and-quantum-assignments: formulation-prerequisite
  def-nrqm-photons-framework-ideal-counting-and-detection-model: formulation-prerequisite
  def-nrqm-measurement-framework-declared-measurements-and-instruments: formulation-prerequisite
  thm-nrqm-fock-and-equilibrium-golden-rule-coefficient-approximate-identity: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  lem-nrqm-light-matter-first-order-photon-energy-law: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The spectral-transition vocabulary of the declared finite-level cutoff dipole model: the transition energy of a declared level pair, its dipole coefficients and single-vertex photon density, the single-vertex emission vector and coefficient, the normalised single-vertex photon-energy law, and the reading of an ideal energy-window detector on the single-vertex one-photon preparation. The definition fixes vocabulary and model quantities only: it asserts no sharp spectral line, no spectrometer or calibration, no exact model probability, no rate, no measurement record and no empirical result."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 9.3.2 printed pages 216-218 (PDF pages 224-226): the dipole matrix element of the perturbing field, the transition rate proportional to its modulus squared and the energy density of the field"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum Dynamics', Section 5.3 printed pages 48-50: number states of a field mode, energy n*hbar*omega and the field expectation of a coherent state"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 4.4.2 printed pages 118-122 (PDF pages 121-125): the photon relation E=hbar*omega and E=pc as extra input, and the explicit deferral of coupling to radiation to a separately scoped extension"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
---

## Definition

**(a) Adopted readings.** Adopt the state and composition postulate P1, the
observable and probability postulate P2, the ideal conditional-measurement
postulate P3 and the preparation and apparatus discipline P7
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-ideal-conditional-measurement]],
[[post-nrqm-framework-preparation-and-apparatus]]), the finite-level cutoff
dipole model
[[def-nrqm-light-matter-framework-finite-level-coupled-model]], the radiation
sector definition
[[def-nrqm-photons-framework-radiation-sector-and-quantum-assignments]] and
the declared ideal counting and energy-window detection models
[[def-nrqm-photons-framework-ideal-counting-and-detection-model]], in the
readings of [[def-nrqm-state-geometry-framework-state-space]],
[[def-nrqm-state-geometry-pure-mixed-states-and-purity]],
[[def-nrqm-observables-framework-observable-and-outcome-law]] and
[[def-nrqm-measurement-framework-declared-measurements-and-instruments]], with
the units of [[def-nrqm-framework-quantities-and-units]]. Assume the Axioms of
Countable Choice and of Choice ([[def-countable-choice]],
[[def-axiom-of-choice]]).

**(b) Declared level pair and transition energy.** A **declared level pair**
$(a,b)$ of the model is an ordered pair of orthonormal eigenvectors $v_{a},
v_{b}\in\mathbb C^{d}$ of the compressed matter energy $H_{a}$
([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]],
[[def-inner-product-space]]). Its **transition energy** is
$\Delta:=E_{a}-E_{b}$, read in joules; the pair is **upward** when
$\Delta>0$, meaning level $a$ lies above level $b$ in the model's energy
ordering.

**(c) Dipole coefficients and single-vertex photon density.** For an upward
declared level pair $(a,b)$ and the couplings $D^{W}_{j},g_{j},\eta_{0}$ of
[[def-nrqm-light-matter-framework-finite-level-coupled-model]] clauses (c),(d),
the model's **dipole coefficients** are the complex numbers
$$c_{j}:=\bigl\langle D^{W}_{j}v_{a},\,v_{b}\bigr\rangle_{\mathbb C^{d}} \qquad(j=1,\dots,J),$$
the model's **single-vertex mode vector** is
$$M:=\sum_{j=1}^{J}c_{j}\,g_{j}\in\mathfrak h,$$
and the model's **single-vertex photon density** is the finite Borel measure on
$\mathbb R$
$$\nu_{b}(B):=\int_{\mathbb R^{3}}\mathbf 1_{B}\bigl(\varepsilon(k)\bigr)\, \|M(k)\|_{\mathbb C^{3}}^{2}\,d^{3}k,\qquad B\subseteq\mathbb R\ \text{Borel},$$
read in the model's units and supported in $(0,\Lambda]$. The pairing is linear in its first argument and conjugate-linear in its
second. Thus $c_j$ is the actual coefficient of $v_b$ in $D_j^Wv_a$,
and Hermiticity gives $\langle D_j^Wv_b,v_a\rangle=\overline{c_j}$.
These are exactly the coefficients of
[[thm-nrqm-fock-and-equilibrium-golden-rule-coefficient-approximate-identity]]
clause (c), with no conjugation or change of the transverse mode vectors;
its mode vector and measure are the present $M$ and $\nu_b$.

**(d) Single-vertex emission vector and coefficient.** For $t\ge0$ the model's
**single-vertex emission vector** is the element of $\mathfrak h$
$$A_{b}(\cdot,t):\quad k\mapsto-\frac{i\eta_{0}}{\hbar}M(k) \int_{0}^{t}e^{i(\varepsilon(k)-\Delta)s/\hbar}\,ds ,$$
and the model's **single-vertex emission coefficient** is
$$\gamma_{b}(t):=\|A_{b}(\cdot,t)\|_{\mathfrak h}^{2}.$$
The vector and the coefficient are **defined model quantities**: the model
assigns them through this clause and through the cutoff dipole mathematics, and
they are not asserted to be the exact probability of any measurement of the
model. In particular $\gamma_{b}(t)$ is dimensionless and is not a rate; the
reading of a rate coefficient requires a separate limit statement, which is not
part of this definition.

**(e) Normalised single-vertex photon-energy law and ideal detection.** For
$t>0$ and $M\ne0$ the model's **normalised single-vertex photon-energy law** is
the Borel probability measure on $\mathbb R$
$$P_{b,t}(B):=\frac{\int_{B}K_{t}(E-\Delta)\,d\nu_{b}(E)} {\int_{\mathbb R}K_{t}(E-\Delta)\,d\nu_{b}(E)},\qquad K_{t}(x):=\frac{1}{\hbar^{2}t}\Bigl|\int_{0}^{t}e^{ixs/\hbar}\,ds\Bigr|^{2},$$
whose denominator is finite and strictly positive by
[[lem-nrqm-light-matter-first-order-photon-energy-law]] clause (b). This
probability law is defined independently of $\eta_0$, including $\eta_0=0$.
Its amplitude-based preparation reading additionally requires $A_b(\cdot,t)\ne0$.
For $t>0$ and $M\ne0$, this is equivalent to $\eta_0\ne0$, since
$\|A_b(\cdot,t)\|^2=\eta_0^2t\int K_t(E-\Delta)\,d\nu_b(E)$ and the integral
is positive. Under this condition the **declared single-vertex
one-photon preparation** is the unit vector $v_{b}\otimes(A_{b}(\cdot,t)/\|A_{b}(\cdot,t)\|_{\mathfrak h})$
of $\mathbb C^{d}\otimes\mathfrak h\subseteq\mathbb C^{d}\otimes
F(\mathfrak h)$, and for a Borel window $B\subseteq[0,\infty)$ the declared
ideal energy-window detector of window $B$ of
[[def-nrqm-photons-framework-ideal-counting-and-detection-model]] clause (c)
has the Born probability $P_{b,t}(B)$ in that preparation, because the energy
law of a unit one-photon vector $f$ is the push-forward of
$\|f(k)\|_{\mathbb C^{3}}^{2}d^{3}k$ under $k\mapsto\varepsilon(k)$
([[def-nrqm-photons-framework-radiation-sector-and-quantum-assignments]] clause
(e)). When $\eta_0=0$, $A_b(\cdot,t)=0$ and no preparation obtained by
normalizing that emission amplitude is declared; the formal law $P_{b,t}$
remains the probability measure defined above. A **detected photon energy** is therefore a spectral reading of the
assigned free-field energy observable $(H_{f},\mathrm J)$, not a sharp energy
of a normalisable state and not a quantum number of the model's mode labels.

**(f) Scope.** Clauses (b)-(e) fix the model's spectral vocabulary. They assert
no sharp spectral line: the energy law of clause (e) is spread over the support
of $\nu_{b}$, and a point mass at $\Delta$ is only the idealisation proved as a
limit in [[lem-nrqm-light-matter-first-order-photon-energy-law]] clause (c).
They supply no spectrometer, no calibration, no detector response beyond the
declared ideal window, no efficiency, no background, no sampling model, no
count and no measurement record; the identification of a laboratory
spectrometer with a declared window is a tested identification with uncertainty
under P7. The single-vertex quantities of clauses (d)-(e) are conditional model
data; their relation to the model's exact outcome probabilities is a separate
proved statement.
