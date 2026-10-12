---
id: rem-nrqm-framework-primitive-and-derived-status
kind: remark
title: "Primitive, adopted and derived quantities of the framework"
status: draft
origin: session
domain: physics
dependency_level: 7
deps: [def-nrqm-framework-quantities-and-units, post-nrqm-framework-state-and-composition, post-nrqm-framework-autonomous-dynamics, post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle, post-nrqm-framework-identical-particles-and-spin]
dependency_roles:
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  post-nrqm-framework-state-and-composition: formulation-prerequisite
  post-nrqm-framework-autonomous-dynamics: formulation-prerequisite
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: formulation-prerequisite
  post-nrqm-framework-identical-particles-and-spin: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "An audit of which quantities of the framework are primitive model inputs, which are adopted structures and which are derived within the stated assumptions, together with the empirical status of the measured parameters. The remark records status; it derives no new result and asserts no measured value."
sources:
  references:
    - title: "BIPM, The International System of Units (SI), 9th edition 2019, Chapter 2 pp. 15-25: base and derived units and the exact defining constants"
      url: "https://www.bipm.org/documents/20126/41483022/SI-Brochure-9-EN.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 1.2, printed pages 9-14 (PDF pages 12-17): the Hamiltonian, the action constant and the probability current of the wave function"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
verification:
  precheck: n/a
---

## Primitive, adopted and derived quantities

This remark records the status of the framework's quantities under the conventions of [[def-nrqm-framework-quantities-and-units]] and the postulates of this page. The classification is internal to the framework: a quantity called primitive here may be derived in another framework, and the same name in another framework need not denote the same object.

**Primitive and adopted model inputs.** The following enter the model as inputs rather than being derived within it: the arena objects and their readings (events, absolute time, the spatial metric and the frame parameters of the adopted frames); the state space assigned to each system, with its linear structure [[post-nrqm-framework-state-and-composition]]; the energy operator of an autonomous system [[post-nrqm-framework-autonomous-dynamics]]; the action constant $\hbar$, the particle mass $m>0$, the spin label and the potential of the one-particle model [[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]]; and the species parameters of [[post-nrqm-framework-identical-particles-and-spin]] (mass, charge, spin, statistics, magnetic couplings), which are empirical model inputs.

**Adopted structures.** Separable complex Hilbert spaces with their inner products, the completed tensor product and the space of trace-class operators are mathematical structures; the framework adopts them as the description of states, and their mathematical properties are not physical findings. Similarly the projective measurement family of the conditional-measurement postulate is an adopted apparatus model, and the permutation sector of a species is an adopted assignment.

**Derived quantities and statements.** Within the stated assumptions the following are derived, and each is accompanied by the hypotheses of its derivation: the outcome probability measures $\mu^{A}_{\rho}$ and their finite-resolution restrictions (from P2 and the spectral calculus); the updated preparation of the conditional-measurement rule and the discarded-outcome ensemble (from P3); the evolved vector state and density operator, with the Schroedinger equation on the operator domain (from P4); the position and momentum operators with their domains, the canonical commutator on the Schwartz core and the self-adjointness of the bounded-potential Hamiltonian (mathematical consequences of the operators assigned in P5); the probability current and the continuity equation in regimes where the required regularity holds; means, variances and higher moments where the corresponding integrals exist; and the energies, angular momenta and other spectral quantities of a specified model Hamiltonian. No derived statement is asserted outside its hypotheses.

**Empirical status of measured inputs.** The numerical values of $m$, of charges and of magnetic parameters are not derived by the framework; they are qualified empirical premises in the sense of P7, with uncertainty and measurement conditions. The exact defining constants of the current SI recorded in the unit conventions are conventions of the system of units, not measured findings of this framework; the measured status of $\mu_{0}$ in the same conventions is that of a qualified empirical constant wherever it is used.

**No interpretation claimed.** The classification above records where each object enters the model. It asserts nothing about the ontological status of states, about the completeness of the description or about the empirical truth of the framework; those questions are outside the framework's deductive content.

## Remarks

- A quantity's name and unit do not establish its identity with a similarly named quantity of another framework: the momentum of the one-particle model is the operator assigned in P5, not the classical momentum of a trajectory, and the identification of classical and quantum descriptions in a limit is a separate derived statement where it is claimed.
- The spin label and the internal factor are model inputs of P6; the spin operators are derived from the representation assignment, and no classical rotating-body picture is part of the framework.
