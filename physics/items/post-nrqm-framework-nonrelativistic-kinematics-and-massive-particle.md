---
id: post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle
kind: postulate
title: "Kinematics and massive-particle model postulate P5: Newtonian frames and
  one-particle operators"
status: published
origin: session
domain: physics
dependency_level: 7
deps:
  [
    def-nrqm-framework-newtonian-spacetime,
    def-nrqm-framework-inertial-frames,
    def-nrqm-framework-classical-apparatus-trajectories,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-framework-galilei-transformations,
    lem-nrqm-framework-galilei-transformations-form-a-group,
    lem-nrqm-framework-ccr-on-the-schwartz-core,
    def-nrqm-magnetic-and-detection-position-and-momentum-operators,
    lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint,
    thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators,
    lem-nrqm-composites-hilbert-tensor-construction,
    def-adjoint-of-a-densely-defined-unbounded-operator,
    def-symmetric-self-adjoint-and-essentially-self-adjoint,
    def-sobolev-space-wkp-and-its-norm,
    def-schwartz-space-and-its-seminorms,
    def-countable-choice,
    def-axiom-of-choice,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-autonomous-dynamics,
    post-nrqm-framework-identical-particles-and-spin
  ]
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
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  post-nrqm-framework-state-and-composition: formulation-prerequisite
  post-nrqm-framework-autonomous-dynamics: formulation-prerequisite
  post-nrqm-framework-identical-particles-and-spin: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The nonrelativistic kinematics and massive-particle model
  assumption of the framework: the Newtonian spacetime arena and its inertial
  frames with Galilean frame changes, classical apparatus trajectories, and the
  one-particle model of a spin-s particle of mass m with position and momentum
  operators and the bounded-potential Schroedinger Hamiltonian. Adoption is a
  model assumption; the item excludes relativistic matter, radiation, massless
  particles, singular potentials and boundary realizations, which are separate
  model assumptions, and asserts no empirical identification of any particular
  particle."
sources:
  references:
    - title: "D. Tong, Dynamics and Relativity (Cambridge lecture notes, Lent 2013),
        Sections 1.2-1.2.1, printed pages 4-7 (PDF pages 10-13): inertial frames
        and their Galilean transformations"
      url: "https://davidtong.org/pdfs/teaching/dynamics-and-relativity/dynrel.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Sections
        1.1-1.2, printed pages 3-14 (PDF pages 6-17): the wave function, its
        normalization and phase equivalence, the Schroedinger Hamiltonian
        -hbar^2 Delta/2m + V and the probability current"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 1 'Wave
        Mechanics', Sections 1-2, printed pages 1-8: the Schroedinger equation
        and stationary states for a particle in a potential"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/61bc31b8d8b\
        f0680c322733910a71aa0_MIT8_05F13_Chap_01.pdf"
verification:
  precheck: n/a
---

**Mathematical realization used below (not an additional physical assumption).** For each finite $r\ge1$, define $L^2(\mathbb R^3;\mathbb C^r)$ to be the space of $r$-tuples of scalar $L^2$ classes with inner product $\langle(f_l),(g_l)\rangle=\sum_l\langle f_l,g_l\rangle$, and define $\mathcal S(\mathbb R^3;\mathbb C^r):=(\mathcal S(\mathbb R^3;\mathbb C))^r$. The tensor-product universal property extends the bilinear assignment $f\otimes z\mapsto(z_lf)_{l=1}^{r}$ linearly to the algebraic tensor product. It is an isometry there: for $Z=\sum_i f_i\otimes z_i$, $\|\Phi Z\|^{2}=\sum_{i,j}\langle f_i,f_j\rangle\langle z_i,z_j\rangle=\|Z\|^{2}$ by the tensor-product inner product. It extends to the completion and is onto, because each tuple $(f_l)$ is $\Phi(\sum_l f_l\otimes e_l)$. Thus it gives the stated unitary identification. Here $A^*$ is the adjoint of a densely defined operator and $A=A^*$ means equality of domains and values ([[def-adjoint-of-a-densely-defined-unbounded-operator]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]). If $A$ is self-adjoint on the scalar space, the finite direct sum $A^{(r)}=\bigoplus_{l=1}^rA$ on tuples with each $f_l\in D(A)$ is self-adjoint: testing an adjoint vector on inputs with one nonzero component shows each component lies in $D(A^*)$ and gives the component $A^*f_l$; conversely, if each component lies in $D(A^*)$, summing the finitely many adjoint identities shows the tuple lies in $D((A^{(r)})^*)$. Hence $(A^{(r)})^*=\bigoplus_lA^*$, which equals $A^{(r)}$ when $A=A^*$. This applies below to $Q_j$, $P_k$, and the scalar bounded-potential Hamiltonian.

## Postulate

Adopt as physical assumptions of the framework the following kinematics and one-particle model. Assume the Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]), which are the choice hypotheses of the cited operator suppliers.

**(i) Spacetime and frames.** The model reads its events and frames in the Newtonian arena of [[def-nrqm-framework-newtonian-spacetime]], with inertial frames and frame changes as in [[def-nrqm-framework-inertial-frames]]: the frame changes are the Galilean transformations of [[def-nrqm-framework-galilei-transformations]], and their composition is governed by the group law of [[lem-nrqm-framework-galilei-transformations-form-a-group]]. These frames are global coordinate charts, not observer congruences and not time-varying basis fields. The parameters of a frame change are read in the units fixed by [[def-nrqm-framework-quantities-and-units]].

**(ii) Apparatus motion.** The macroscopic constituents of preparations and apparatus are described by the classical trajectories of [[def-nrqm-framework-classical-apparatus-trajectories]]; a quantum particle of the model is not assigned a worldline between preparations and detections.

**(iii) One-particle state space.** For one particle of spin label $s\in\{0,\tfrac12,1,\tfrac32,\dots\}$ and mass parameter $m>0$, the model uses the state space
$$H_{s}:=L^{2}(\mathbb R^{3};\mathbb C)\widehat\otimes\,\mathbb C^{2s+1}\cong L^{2}\bigl(\mathbb R^{3};\mathbb C^{2s+1}\bigr),$$
whose second factor carries the spin representation assigned in the postulate P6, and $\hbar>0$ is the action constant of the adopted unit system. Position and momentum act on $H_s$ componentwise: for $\psi=(\psi_1,\dots,\psi_{2s+1})$ the $j$-th position acts by $(Q_j\psi)_l(x):=x_j\psi_l(x)$ on the classes with $x_j\psi_l\in L^2$, and the $k$-th momentum by $(P_k\psi)_l:=-i\hbar D_k\psi_l$ on the classes whose componentwise weak derivative lies in $L^2$; for one component these are the operators of [[def-nrqm-magnetic-and-detection-position-and-momentum-operators]], whose self-adjointness, domains and Fourier representation are supplied by [[lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint]]. On the componentwise Schwartz space defined in the preceding mathematical realization, the canonical commutation relation $(Q_jP_k-P_kQ_j)\psi=i\hbar\delta_{jk}\psi$ holds componentwise by [[lem-nrqm-framework-ccr-on-the-schwartz-core]] ([[def-schwartz-space-and-its-seminorms]]).

**(iv) Baseline Hamiltonian.** For a real bounded measurable potential $V:\mathbb R^{3}\to\mathbb R$ the model uses the scalar Hamiltonian
$$H_{\mathrm{op}}:=-\frac{\hbar^{2}}{2m}\Delta+V(Q),\qquad D(H_{\mathrm{op}})=W^{2,2}(\mathbb R^{3};\mathbb C)\ \text{(componentwise)},$$
with the free part $-\hbar^{2}\Delta/2m$ and the bounded multiplier $V(Q)$ as in [[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]] clauses (b) and (c) ([[def-sobolev-space-wkp-and-its-norm]]); that theorem supplies the self-adjointness of each component operator on the displayed domain and the strongly continuous unitary group it generates, which the dynamics postulate P4 then reads as the evolution. The assignment of the operator $H_{\mathrm{op}}$ to a particle of mass $m$ and spin $s$ is the physical content of this clause; the mathematical properties are those of the cited theorem.

**(v) What is separate.** The model does not follow from P1-P4: the choice of the Newtonian arena, of the frame class, of the tensor factor $\mathbb C^{2s+1}$, of the operators $Q_{j},P_{k}$ as position and momentum and of the Hamiltonian of clause (iv) are all adopted. Singular or unbounded model potentials (Coulomb-type, oscillator-type, boundary and point-interaction realizations) are separate model choices with their own domains and self-adjointness statements, established before use; relativistic matter, massless particles and radiation modes are not supplied by this massive-model assignment; they are adopted separately on their own pages, without a limiting construction here. No empirical identification of a particular particle species with a value of $s$ or $m$ is made or recorded here; the species parameters are empirical inputs in the sense of P6 and P7.

**(vi) Status.** Clauses (i)-(v) are adopted assumptions of the framework. They assert that the model is used in the nonrelativistic regime and make no claim that any physical system is exactly described by it; no numerical measurement is recorded.

## Status and scope

- **Spin factor.** The spatial factor $L^{2}(\mathbb R^{3};\mathbb C)$ carries the position and momentum structure; the finite factor carries the spin representation. The model does not identify the internal factor with a spatial coordinate, a rotating body or a classical angular momentum.
- **Bounded baseline only.** Clause (iv) is asserted for real bounded measurable $V$; a potential that is unbounded below, singular or merely form-bounded is not covered, and each such model carries its own hypotheses.
- **Frames and covariance.** The transformation law of states under a frame change is a derived statement about the model's operators and is developed on the kinematics pages; this postulate fixes only which frames and frame changes the model uses.
