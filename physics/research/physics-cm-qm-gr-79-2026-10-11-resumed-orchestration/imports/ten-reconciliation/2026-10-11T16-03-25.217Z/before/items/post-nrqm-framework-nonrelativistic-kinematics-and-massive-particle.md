---
id: post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle
kind: postulate
title: "Kinematics and massive-particle model postulate P5: Newtonian frames and one-particle operators"
status: draft
origin: session
domain: physics
dependency_level: 6
deps: [def-nrqm-framework-newtonian-spacetime, def-nrqm-framework-inertial-frames, def-nrqm-framework-classical-apparatus-trajectories, def-nrqm-framework-quantities-and-units, def-nrqm-framework-galilei-transformations, lem-nrqm-framework-galilei-transformations-form-a-group, lem-nrqm-framework-ccr-on-the-schwartz-core, def-nrqm-magnetic-and-detection-position-and-momentum-operators, lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint, thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators, def-sobolev-space-wkp-and-its-norm, def-schwartz-space-and-its-seminorms, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-framework-newtonian-spacetime: formulation-prerequisite
  def-nrqm-framework-inertial-frames: formulation-prerequisite
  def-nrqm-framework-classical-apparatus-trajectories: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-framework-galilei-transformations: formulation-prerequisite
  lem-nrqm-framework-galilei-transformations-form-a-group: mathematical-premise
  lem-nrqm-framework-ccr-on-the-schwartz-core: mathematical-premise
  def-nrqm-magnetic-and-detection-position-and-momentum-operators: mathematical-premise
  lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The nonrelativistic kinematics and massive-particle model assumption of the framework: the Newtonian spacetime arena and its inertial frames with Galilean frame changes, classical apparatus trajectories, and the one-particle model of a spin-s particle of mass m with position and momentum operators and the bounded-potential Schroedinger Hamiltonian. Adoption is a model assumption; the item excludes relativistic matter, radiation, massless particles, singular potentials and boundary realizations, which are separate model assumptions, and asserts no empirical identification of any particular particle."
sources:
  references:
    - title: "D. Tong, Dynamics and Relativity (Cambridge lecture notes, Lent 2013), Sections 1.2-1.2.1, printed pages 4-7 (PDF pages 10-13): inertial frames and their Galilean transformations"
      url: "https://davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Sections 1.1-1.2, printed pages 3-14 (PDF pages 6-17): the wave function, its normalization and phase equivalence, the Schroedinger Hamiltonian -hbar^2 Delta/2m + V and the probability current"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 1 'Wave Mechanics', Sections 1-2, printed pages 1-8: the Schroedinger equation and stationary states for a particle in a potential"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/61bc31b8d8bf0680c322733910a71aa0_MIT8_05F13_Chap_01.pdf"
verification:
  precheck: n/a
---

## Postulate

Adopt as physical assumptions of the framework the following kinematics and one-particle model. Assume the Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]), which are the choice hypotheses of the cited operator suppliers.

**(i) Spacetime and frames.** The model reads its events and frames in the Newtonian arena of [[def-nrqm-framework-newtonian-spacetime]], with inertial frames and frame changes as in [[def-nrqm-framework-inertial-frames]]: the frame changes are the Galilean transformations of [[def-nrqm-framework-galilei-transformations]], and their composition is governed by the group law of [[lem-nrqm-framework-galilei-transformations-form-a-group]]. These frames are global coordinate charts, not observer congruences and not time-varying basis fields. The parameters of a frame change are read in the units fixed by [[def-nrqm-framework-quantities-and-units]].

**(ii) Apparatus motion.** The macroscopic constituents of preparations and apparatus are described by the classical trajectories of [[def-nrqm-framework-classical-apparatus-trajectories]]; a quantum particle of the model is not assigned a worldline between preparations and detections.

**(iii) One-particle state space.** For one particle of spin label $s\in\{0,\tfrac12,1,\tfrac32,\dots\}$ and mass parameter $m>0$, the model uses the state space
$$H_{s}:=L^{2}(\mathbb R^{3};\mathbb C)\widehat\otimes\,\mathbb C^{2s+1}\cong L^{2}\bigl(\mathbb R^{3};\mathbb C^{2s+1}\bigr),$$
whose second factor carries the spin representation assigned in the postulate P6, and $\hbar>0$ is the action constant of the adopted unit system. Position and momentum acts on $H_{s}$ componentwise: for $\psi=(\psi_{1},\dots,\psi_{2s+1})$ the $j$-th position acts by $(Q_{j}\psi)_{l}(x):=x_{j}\psi_{l}(x)$ on the classes with $x_{j}\psi_{l}\in L^{2}$, and the $k$-th momentum by $(P_{k}\psi)_{l}:=-i\hbar\,D_{k}\psi_{l}$ on the classes whose componentwise weak derivative lies in $L^{2}$; for one component these are the operators of [[def-nrqm-magnetic-and-detection-position-and-momentum-operators]], whose self-adjointness, domains and Fourier representation are supplied by [[lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint]]. On the Schwartz classes $\mathcal S(\mathbb R^{3};\mathbb C^{2s+1})$ the canonical commutation relation $(Q_{j}P_{k}-P_{k}Q_{j})=i\hbar\delta_{jk}$ holds componentwise by [[lem-nrqm-framework-ccr-on-the-schwartz-core]] ([[def-schwartz-space-and-its-seminorms]]).

**(iv) Baseline Hamiltonian.** For a real bounded measurable potential $V:\mathbb R^{3}\to\mathbb R$ the model uses the scalar Hamiltonian
$$H_{\mathrm{op}}:=-\frac{\hbar^{2}}{2m}\Delta+V(Q),\qquad D(H_{\mathrm{op}})=W^{2,2}(\mathbb R^{3};\mathbb C)\ \text{(componentwise)},$$
with the free part $-\hbar^{2}\Delta/2m$ and the bounded multiplier $V(Q)$ as in [[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]] clauses (b) and (c) ([[def-sobolev-space-wkp-and-its-norm]]); that theorem supplies the self-adjointness of each component operator on the displayed domain and the strongly continuous unitary group it generates, which the dynamics postulate P4 then reads as the evolution. The assignment of the operator $H_{\mathrm{op}}$ to a particle of mass $m$ and spin $s$ is the physical content of this clause; the mathematical properties are those of the cited theorem.

**(v) What is separate.** The model does not follow from P1-P4: the choice of the Newtonian arena, of the frame class, of the tensor factor $\mathbb C^{2s+1}$, of the operators $Q_{j},P_{k}$ as position and momentum and of the Hamiltonian of clause (iv) are all adopted. Singular or unbounded model potentials (Coulomb-type, oscillator-type, boundary and point-interaction realizations) are separate model choices with their own domains and self-adjointness statements, established before use; relativistic matter, massless particles and radiation modes are not obtained by any limit of this massive model and are adopted separately on their own pages. No empirical identification of a particular particle species with a value of $s$ or $m$ is made or recorded here; the species parameters are empirical inputs in the sense of P6 and P7.

**(vi) Status.** Clauses (i)-(v) are adopted assumptions of the framework. They assert that the model is used in the nonrelativistic regime and make no claim that any physical system is exactly described by it; no numerical measurement is recorded.

## Status and scope

- **Spin factor.** The spatial factor $L^{2}(\mathbb R^{3};\mathbb C)$ carries the position and momentum structure; the finite factor carries the spin representation. The model does not identify the internal factor with a spatial coordinate, a rotating body or a classical angular momentum.
- **Bounded baseline only.** Clause (iv) is asserted for real bounded measurable $V$; a potential that is unbounded below, singular or merely form-bounded is not covered, and each such model carries its own hypotheses.
- **Frames and covariance.** The transformation law of states under a frame change is a derived statement about the model's operators and is developed on the kinematics pages; this postulate fixes only which frames and frame changes the model uses.
