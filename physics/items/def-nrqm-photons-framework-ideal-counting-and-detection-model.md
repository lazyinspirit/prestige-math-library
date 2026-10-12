---
id: def-nrqm-photons-framework-ideal-counting-and-detection-model
kind: definition
title: "The declared ideal counting, energy-window and analyser detection models
  of the radiation sector"
status: draft
origin: pipeline
domain: physics
dependency_level: 12
deps:
  [
    post-nrqm-photons-radiation-extension-and-transverse-mode-assignment,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-ideal-conditional-measurement,
    post-nrqm-framework-preparation-and-apparatus,
    def-nrqm-photons-framework-radiation-sector-and-quantum-assignments,
    def-nrqm-photons-framework-fixed-mode-polarization-model,
    def-nrqm-state-geometry-framework-state-space,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-measurement-framework-declared-measurements-and-instruments,
    def-nrqm-framework-quantities-and-units,
    lem-nrqm-fock-and-equilibrium-fock-sector-projections,
    thm-nrqm-fock-and-equilibrium-number-operator-domain,
    lem-nrqm-measurement-selective-luders-update,
    lem-nrqm-measurement-nonselective-luders-map,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  post-nrqm-photons-radiation-extension-and-transverse-mode-assignment: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-ideal-conditional-measurement: physical-assumption
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
  def-nrqm-photons-framework-radiation-sector-and-quantum-assignments: formulation-prerequisite
  def-nrqm-photons-framework-fixed-mode-polarization-model: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-measurement-framework-declared-measurements-and-instruments: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  lem-nrqm-fock-and-equilibrium-fock-sector-projections: mathematical-premise
  thm-nrqm-fock-and-equilibrium-number-operator-domain: mathematical-premise
  lem-nrqm-measurement-selective-luders-update: mathematical-premise
  lem-nrqm-measurement-nonselective-luders-map: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The declared ideal detection models of the radiation sector:
  the ideal total-number counting model with the Fock sector projections as
  outcome structure and the Born law of P2, the ideal energy-window model with
  the spectral projections of the free-field energy, and the polarisation
  analyser of the fixed-mode model. The declaration fixes vocabulary only; it
  asserts no laboratory counter, no absorption instrument, no efficiency, no
  dark counts, no dead time, no background, no calibration and no sampling
  model, and repeated trials require a separately declared statistical model."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section
        1.3.6 printed pages 14-15 (PDF pages 22-23): individual photons either
        passing or being absorbed by an analyser, read as the outcome structure
        of an idealised polarisation measurement"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum
        Dynamics', Section 5.3 printed pages 48-50: number states of a field
        mode and the number operator"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f\
        18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes,
        2017/18), Chapter 1 Section 1.2 printed pages 3-6 (PDF pages 4-7):
        occupation-number states and the number operator of a bosonic Fock
        space"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenote\
        s2017AQT.pdf"
---

## Definition

**(a) Adopted readings.** Adopt the state and composition postulate P1, the
observable and probability postulate P2, the ideal conditional-measurement
postulate P3 and the preparation and apparatus discipline P7
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-ideal-conditional-measurement]],
[[post-nrqm-framework-preparation-and-apparatus]]), the radiation extension
postulate
[[post-nrqm-photons-radiation-extension-and-transverse-mode-assignment]] and
the radiation sector definition
[[def-nrqm-photons-framework-radiation-sector-and-quantum-assignments]], in
the measurement vocabulary of
[[def-nrqm-measurement-framework-declared-measurements-and-instruments]].
Assume the Axioms of Countable Choice and of Choice, the choice hypotheses of
the cited readings ([[def-countable-choice]], [[def-axiom-of-choice]]).

**(b) Declared ideal total-number detector.** The **declared ideal
total-number detector** of the radiation sector is the declared ideal sharp
measurement with outcome set $\mathbb N$, outcome projection
$$P_{n}:=\Pi_{n}\qquad(n\in\mathbb N),$$
the sector projections of the Fock space $F(\mathfrak h)$; the family
$(\Pi_{n})$ consists of mutually orthogonal orthogonal projections with strong
sum $I$ ([[lem-nrqm-fock-and-equilibrium-fock-sector-projections]] clauses
(a),(b),(c)). Its **count law** in a declared radiation preparation $\rho$ is
the reading of clause (ii) of P2,
$$p_{n}(\rho)=\operatorname{tr}(\rho\Pi_{n}),\qquad \sum_{n\in\mathbb N}p_{n}(\rho)=1,$$
and its **number readout** is the assigned total-number observable $(N,1)$ of
[[thm-nrqm-fock-and-equilibrium-number-operator-domain]] read through the atom
law of P2. The conditional post-count state and the discarded-outcome state are
the Lueders updates of the measurement definition
([[lem-nrqm-measurement-selective-luders-update]],
[[lem-nrqm-measurement-nonselective-luders-map]]). The word "count" refers to
the quanta of the declared model; no laboratory counter, no absorption
process, no detection efficiency, no dark count, no dead time and no
background is declared here.

**(c) Declared ideal energy-window detector.** For a Borel set
$B\subseteq[0,\infty)$ read in joules the **declared ideal energy-window
detector of window $B$** is the declared ideal sharp measurement with outcome
structure
$$\bigl(E_{H_f}(B),\ I-E_{H_f}(B)\bigr),$$
where $E_{H_f}$ is the spectral projection-valued measure of the assigned
free-field energy observable $(H_f,\mathrm J)$; its **window law** in the
preparation $\rho$ is $p_{B}(\rho)=\operatorname{tr}(\rho E_{H_f}(B))$ and its
complement probability is $\operatorname{tr}(\rho(I-E_{H_f}(B)))$, the reading
of P2. A finite-resolution detector is described by such a window or by a
declared family of pairwise disjoint windows covering $[0,\infty)$; the
statement that a laboratory spectrometer realizes a declared window, with what
resolution and calibration, is an identification under P7.

**(d) Declared analyser detection.** The **declared polarisation-analyser
detection** of the fixed propagation mode is the analyser family
$\{P_{\theta},P_{\theta}^{\perp}\}$ of
[[def-nrqm-photons-framework-fixed-mode-polarization-model]], read as a
declared ideal sharp measurement of the polarisation factor; its law and its conditional update are proved on this page. It detects the polarisation alternative of the model and is not a photon counter.

**(e) Repetition requires a separate sampling model.** The declaration of a
detector gives the outcome law of a single declared measurement. A prediction
for repeated trials, a count rate, or any statistical comparison with data
requires in addition a declared preparation-and-apparatus model and a sampling
model in the sense of P7 -- for instance an identically-and-independently
repeated preparation with a declared number of trials -- which this page does
not supply. A single measurement outcome law is not a frequency and no
frequency is asserted.

**(f) Destructive detectors are outside the declared class.** A
photoabsorption detector that destroys the absorbed quantum, and any detector
whose post-outcome state of the radiation field is not the Lueders update,
requires its own declared instrument, that is its own outcome effects together
with its own conditional updates (clause (v) of P3, clause (d) of the
measurement definition). No such instrument is declared on this page, and the
"blocked" outcome of the analyser is used only through its discarded-outcome
law.

**(g) Status.** Clauses (b)-(d) fix vocabulary and read the cited postulates;
they add no physical assumption beyond P1-P3, P7 and the radiation model, and
they assert no detection mechanism, no response function and no empirical
result. In particular, the declaration of an ideal counting model is not a
claim that any physical device counts photons, and the energy-window model is
not a claim that any physical spectrometer measures exact energy.
