---
id: rem-nrqm-autonomous-dynamics-scope-and-empirical-status
aliases: [ nrqm-autonomous-dynamics-scope-and-empirical-status ]
kind: remark
domain: physics
title: "What the autonomous-dynamics page adopts, proves and does not claim"
status: draft
origin: pipeline
dependency_level: 11
deps:
  [
    def-axiom-of-choice,
    def-countable-choice,
    def-nrqm-autonomous-dynamics-framework-evolution,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-state-geometry-framework-state-space,
    lem-nrqm-autonomous-dynamics-flow-calculus,
    lem-nrqm-autonomous-dynamics-heisenberg-flow,
    lem-nrqm-autonomous-dynamics-stationary-ray-characterization,
    post-nrqm-framework-autonomous-dynamics,
    pthm-nrqm-autonomous-dynamics-heisenberg-picture,
    pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow,
    pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation
  ]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  lem-nrqm-autonomous-dynamics-flow-calculus: mathematical-premise
  lem-nrqm-autonomous-dynamics-heisenberg-flow: mathematical-premise
  lem-nrqm-autonomous-dynamics-stationary-ray-characterization: mathematical-premise
  post-nrqm-framework-autonomous-dynamics: formulation-prerequisite
  pthm-nrqm-autonomous-dynamics-heisenberg-picture: physical-result
  pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow: physical-result
  pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation: physical-result
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Scope and empirical status of the autonomous-dynamics pair:
  which readings of the autonomous-dynamics postulate P4 are adopted, which
  conditional consequences are proved for an assigned isolated system, and which
  questions are excluded from the page. The remark asserts no dynamics, reports
  no measurement and records no empirical data."
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 2.1, printed pages 55-58 (the physical axioms are assumptions;
        self-adjoint dynamics is a mathematical consequence of the operator
        hypothesis)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted complete lecture set), Section
        1.2, printed pages 9-14 (the Schroedinger equation as an adopted
        equation of motion, and the conservation of total probability)"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
verification:
  precheck: n/a
---

## Scope and status

**What the page adopts.** The single physical assumption materialized here is the autonomous-dynamics postulate [[post-nrqm-framework-autonomous-dynamics]] (P4), read in the vocabulary of [[def-nrqm-autonomous-dynamics-framework-evolution]] for an isolated system of the framework with state space of the type fixed by [[def-nrqm-state-geometry-framework-state-space]]. In particular the assigned energy observable $(H_{\mathrm{op}},u_H)$, its energy unit and the reduced Planck constant entering the phase are model specifications in the sense of [[def-nrqm-framework-quantities-and-units]]; no numerical value of any of them is produced by this page.

**What is proved.** [[pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow]] draws, from P4 and the local mathematics [[lem-nrqm-autonomous-dynamics-flow-calculus]], the unitary flow, the invariance of the energy domain, the domain-qualified Schroedinger equation and the evolution of density-operator preparations. [[pthm-nrqm-autonomous-dynamics-heisenberg-picture]], using [[lem-nrqm-autonomous-dynamics-heisenberg-flow]], identifies the Heisenberg representative of a bounded assigned sharp observable and proves that the two pictures assign the same outcome laws, together with the domain-qualified Heisenberg equation and the freezing of energy-compatible bounded observables. [[pthm-nrqm-autonomous-dynamics-stationary-states-and-energy-conservation]] reads the conservation of the energy law in every preparation, its finite first and second moments for pure preparations represented by nonzero vectors in the energy domain (using unit representatives), the conservation of any bounded energy-compatible observable, and the equivalence of stationary pure preparations with the eigenrays of the energy; the mathematical core of that equivalence is [[lem-nrqm-autonomous-dynamics-stationary-ray-characterization]]. All statements are conditional consequences of the adopted postulates and the cited mathematics; none of them is an empirical claim.

**What is not claimed.** (i) The page treats only the autonomous case: a prescribed time-dependent family $t\mapsto H(t)$ and the propagator problems it raises are not covered by P4(ii) and are deferred to the driven-dynamics development, and an open or reduced non-unitary evolution is an extension requiring an environment model, in the sense of clauses (iv) and (v) of P4. (ii) No measurement, collapse, conditioning or apparatus model is introduced; the outcome law of [[def-nrqm-observables-framework-observable-and-outcome-law]] is used only to read statistics of a preparation, and the state after an outcome is not treated. (iii) No relaxation, equilibration or convergence of the law of a general preparation is asserted. (iv) The converse of the conservation criterion — that a bounded observable whose law is constant in every preparation must be strongly spectrally compatible with the energy — is not proved for a general possibly unbounded $H_{\mathrm{op}}$ and is therefore not claimed. (v) The equation of motion is asserted exactly on the operator domain; for vectors outside the domain only the unitary flow, not the differential equation, is available.

**Empirical status.** Whether a concrete laboratory system realizes P4's isolated-system idealization, and whether a concrete apparatus realizes a preparation of the type used here, are tested identifications with uncertainty, in the sense of the framework's preparation and apparatus assumptions; they are not consequences of P4. This pair records no measurement, apparatus, calibration or data, and the worked companion page contains finite model computations only.
