---
id: def-nrqm-many-body-framework-declared-fixed-n-model
aliases: [nrqm-many-body-framework-declared-fixed-n-model]
kind: definition
domain: physics
title: "The declared fixed-N many-body model: species sector, one-particle data, interaction and the sector energy observable"
status: draft
origin: pipeline
dependency_level: 9
deps: [def-nrqm-identical-particles-framework-species-sectors-and-preparations, def-nrqm-kinematics-framework-massive-spin-s-model, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-autonomous-dynamics-framework-evolution, def-nrqm-framework-quantities-and-units, def-nrqm-state-geometry-framework-state-space, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle, post-nrqm-framework-identical-particles-and-spin, thm-nrqm-fock-and-equilibrium-bounded-fixed-n-operator, thm-nrqm-fock-and-equilibrium-permutation-restricted-self-adjointness, thm-nrqm-fock-and-equilibrium-fixed-n-coulomb-self-adjointness, lem-nrqm-composites-euclidean-l2-product-unitary, lem-nrqm-composites-hilbert-tensor-construction, lem-nrqm-composites-bounded-tensor-maps, lem-nrqm-composites-permutation-sector-projections, def-hilbert-space, def-bounded-linear-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-identical-particles-framework-species-sectors-and-preparations: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  thm-nrqm-fock-and-equilibrium-bounded-fixed-n-operator: mathematical-premise
  thm-nrqm-fock-and-equilibrium-permutation-restricted-self-adjointness: mathematical-premise
  thm-nrqm-fock-and-equilibrium-fixed-n-coulomb-self-adjointness: mathematical-premise
  lem-nrqm-composites-euclidean-l2-product-unitary: mathematical-premise
  lem-nrqm-composites-hilbert-tensor-construction: mathematical-premise
  lem-nrqm-composites-bounded-tensor-maps: mathematical-premise
  lem-nrqm-composites-permutation-sector-projections: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The declared fixed-N many-body model of the framework: a declared species sector of P6, a declared one-particle energy operator (spatial massive-model or finite-mode realization), a declared pair interaction (bounded or Coulomb), the labelled energy operator and its self-adjoint restriction to the adopted symmetric or antisymmetric N-particle sector, read as the model's assigned energy observable and generator of P4 evolution. The model is an adopted kinematic-dynamical input of the pair; it asserts no stability of matter, no Hunziker-van Winter-Zhislin threshold statement, no thermodynamic limit, no thermalization and no identification with a laboratory sample, and every interaction constant is an empirical model parameter with uncertainty."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections 6.1 and 10.1-10.2 printed pages 104-111 and 226-235 (PDF pages 112-119 and 234-243): composite systems, the non-interacting composite Hamiltonian, the antisymmetric electron-pair wavefunction and the two-electron Hamiltonian with the mutual electrostatic repulsion term (10.24a)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes, 2017/18), Chapter 1 Sections 1.1, 1.2 and 1.4 pp. 3-13: systems of independent particles, the occupation-number representation, Fock space and the second-quantised form of one- and two-body operators (equations (46)-(48) and Section 1.4.3)"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenotes2017AQT.pdf"
verification:
  precheck: n/a
---

## Definition

**(a) Adopted readings, units and choice hypotheses.** Adopt the state and
composition postulate [[post-nrqm-framework-state-and-composition]] (P1), the
observable and probability postulate
[[post-nrqm-framework-observable-and-probability]] (P2), the
autonomous-dynamics postulate [[post-nrqm-framework-autonomous-dynamics]]
(P4), the non-relativistic kinematics postulate
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]] (P5)
and the identical-particle and spin postulate
[[post-nrqm-framework-identical-particles-and-spin]] (P6), in the state
reading of [[def-nrqm-state-geometry-framework-state-space]], the observable
reading of [[def-nrqm-observables-framework-observable-and-outcome-law]], the
evolution reading of [[def-nrqm-autonomous-dynamics-framework-evolution]] and
the sector vocabulary of
[[def-nrqm-identical-particles-framework-species-sectors-and-preparations]].
Let a **declared species sector** with one-particle space $H$, mass $m>0$
(kg), spin label $s\in\{0,\tfrac12,1,\dots\}$ and statistics choice
$\sigma\in\{+,-\}$ be given as in that definition, in the massive spin-$s$
one-particle reading of
[[def-nrqm-kinematics-framework-massive-spin-s-model]]; fix an integer
$N\ge1$ and let $\mathfrak H_N^\sigma=\operatorname{ran}P_\sigma^{(N)}\subseteq
H^{\otimes N}$ be the declared $N$-particle sector. All quantities below are
read in the SI conventions and units of
[[def-nrqm-framework-quantities-and-units]] (energies in joules). Assume the
Axiom of Countable Choice ([[def-countable-choice]]); the Axiom of Choice
([[def-axiom-of-choice]]) is assumed only in the Coulomb realization of
clause (d)(ii), where it is the choice hypothesis of the cited self-adjointness
theorem.

**(b) Declared one-particle data.** The model declares a one-particle
**energy operator** in one of the two following realizations.

(i) *Spatial realization.* The one-particle space is
$H=L^2(\mathbb R^3;\mathbb C^{2s+1})$ and, with $\hbar>0$ the reduced Planck
constant, the model declares a **kinetic operator** $K_1:=-\frac{\hbar^2}{2m}\Delta$
on $L^2(\mathbb R^3;\mathbb C^{2s+1})$ and a real, measurable, bounded
**external potential** $V_{\mathrm{ext}}:\mathbb R^3\to\mathbb R$ of essential
supremum $\|V_{\mathrm{ext}}\|_\infty<\infty$; the declared one-particle
operator is $h:=K_1+V_{\mathrm{ext}}(Q)$ with domain
$W^{2,2}(\mathbb R^3;\mathbb C^{2s+1})$. A more singular declared
$V_{\mathrm{ext}}$, such as $-g/|x|$, is used only through a separate
self-adjointness statement, which the model must supply before the operator is
read as an observable.

(ii) *Finite-mode realization.* A finite-dimensional complex Hilbert space
$K$ of dimension $d\ge1$ with a declared orthonormal basis
$(f_1,\dots,f_d)$ ([[def-hilbert-space]]) is declared together with a
self-adjoint **one-particle operator** $h\in\mathcal B(K)$
([[def-bounded-linear-operator]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]).
Here the one-particle space of the species is $K$, and the assignment of the
modes $f_j$ to a laboratory mode family is a tested identification under the
preparation and apparatus postulate P7, not part of the definition.

**(c) Declared interaction.** The model declares a **pair interaction** in the
matching realization.

(i) *Bounded interaction.* In the spatial realization let
$W:\mathbb R^3\to\mathbb R$ be real, measurable, bounded with
$W(-z)=W(z)$ for almost every $z$ and $\|W\|_\infty<\infty$. In the
finite-mode realization let $W\in\mathcal B(K\widehat\otimes K)$ be
self-adjoint with $U_{(12)}WU_{(12)}=W$, where $U_{(12)}$ is the exchange
unitary of [[lem-nrqm-composites-permutation-sector-projections]] clause (a)
in the tensor square $\widehat{K\otimes K}$ of
[[lem-nrqm-composites-hilbert-tensor-construction]]. The interaction strength
constants entering $W$ are empirical model parameters with their uncertainties
in the sense of P6 clause (iii).

(ii) *Coulomb interaction.* In the spatial realization the model may declare
the singular pair interaction $W(z):=\kappa/|z|$ with a real coupling
$\kappa\in\mathbb R$ (repulsive for $\kappa>0$), and an external
$V_{\mathrm{ext}}(x):=-g/|x|$ with $g\in\mathbb R$; the combined singular
multiplier is that of
[[thm-nrqm-fock-and-equilibrium-fixed-n-coulomb-self-adjointness]].

**(d) The labelled energy operator and its sector restriction.** Fix the
particle masses $m_1=\cdots=m_N=m$ of the declared species.

(i) *Spatial, bounded case.* With $\Theta:L^2(\mathbb R^3)^{\otimes N}\to L^2(\mathbb R^{3N})$
the Euclidean product unitary of
[[lem-nrqm-composites-euclidean-l2-product-unitary]], form the labelled
operator $H_{\mathrm{lab}}:=K+M_W$ on $L^2(\mathbb R^{3N};\mathbb C^{2s+1})$
of [[thm-nrqm-fock-and-equilibrium-bounded-fixed-n-operator]] clause (b)
whose potential is
$V(X)=\sum_{i=1}^NV_{\mathrm{ext}}(x_i)+\sum_{i<j}W(x_i-x_j)$; by that theorem
$H_{\mathrm{lab}}$ is self-adjoint with domain $D(K)=W^{2,2}(\mathbb R^{3N};\mathbb C^{2s+1})$
and bounded below by $-\|V\|_\infty$. By clause (e) of
[[thm-nrqm-fock-and-equilibrium-permutation-restricted-self-adjointness]] the
transported projections $\Theta P_\sigma^{(N)}\Theta^{-1}$ reduce
$H_{\mathrm{lab}}$, and the restriction
$$H_N^\sigma:=\bigl(\Theta P_\sigma^{(N)}\Theta^{-1}\bigr)H_{\mathrm{lab}}\bigl(\Theta P_\sigma^{(N)}\Theta^{-1}\bigr)\big|_{\operatorname{ran}(\Theta P_\sigma^{(N)}\Theta^{-1})}$$
is a self-adjoint operator on the transported sector; the model identifies it
with the restriction of $H_{\mathrm{lab}}$ to
$\Theta^{-1}$-transported $\mathfrak H_N^\sigma$ in the tensor reading.

(ii) *Spatial Coulomb case.* With the singular data of clause (c)(ii), the
operator $H_{\mathrm{lab}}:=K+M_V$ of
[[thm-nrqm-fock-and-equilibrium-fixed-n-coulomb-self-adjointness]] clause (b)
is self-adjoint with domain $W^{2,2}(\mathbb R^{3N};\mathbb C^{2s+1})$ and
bounded below, and by clause (d) of that theorem its restrictions to the
symmetric and antisymmetric sectors are self-adjoint; the model's sector
energy operator $H_N^\sigma$ is that restriction, with the same reading as in
(i).

(iii) *Finite-mode case.* On $K^{\otimes N}$ put
$$H_{\mathrm{lab}}:=\sum_{i=1}^N h^{(i)}+\sum_{1\le i<j\le N}W^{(ij)},$$
where $h^{(i)}$ is the slot operator of
[[lem-nrqm-composites-bounded-tensor-maps]] (the identity on all factors but
the $i$-th, $h$ on the $i$-th) and $W^{(ij)}$ is the transport of
$W\in\mathcal B(K\widehat\otimes K)$ to the pair of slots $(i,j)$ by any
permutation moving that pair to the first two slots; the symmetry
$U_{(12)}WU_{(12)}=W$ makes the order of the pair immaterial and
$W\otimes I$ commutes with permutations fixing the first two slots, so the
transported operator is independent of the permutation chosen. Then
$H_{\mathrm{lab}}$ is bounded and self-adjoint,
it commutes with every permutation unitary, and the model's sector energy
operator is $H_N^\sigma:=H_{\mathrm{lab}}|_{\mathfrak H_N^\sigma}=P_\sigma^{(N)}H_{\mathrm{lab}}P_\sigma^{(N)}|_{\mathfrak H_N^\sigma}$.

**(e) The model's energy reading and evolution.** In every realization the
pair $(H_N^\sigma,\mathrm J)$ is declared to be the **assigned energy
observable** of the $N$-particle sector in the sense of
[[def-nrqm-observables-framework-observable-and-outcome-law]] clause (a): its
outcome law in a declared sector preparation $\rho$ is the law
$\mu^{H_N^\sigma}_\rho(B)=\operatorname{tr}(\rho E_{H_N^\sigma}(B))$ of that
definition clause (b), and its spectral data are those of the self-adjoint
operator constructed in clause (d). The **model evolution** is the unitary
flow $U(t)=\exp(-itH_N^\sigma/\hbar)$ of
[[def-nrqm-autonomous-dynamics-framework-evolution]] clause (b) with this
generator. The identification of the operator with the energy of a concrete
sample, and the assignment of numerical masses, couplings and potentials to a
laboratory species, are tested identifications with uncertainty under P7;
they are not consequences of P1-P6.

**(f) The non-interacting reading.** The model is called **non-interacting**
when $W=0$ (equivalently $\kappa=0$), so that
$H_{\mathrm{lab}}=\sum_{i=1}^Nh^{(i)}$; in the spatial realization this is the
case $V=V_{\mathrm{ext}}$ summed over slots of the bounded-fixed-$N$ theorem.

**(g) Scope.** The declared model is a kinematic and dynamical input of this
pair: it fixes a state space, a sector, an energy operator and an evolution,
and nothing else. It asserts no stability of matter, no Hunziker-van
Winter-Zhislin threshold statement, no statement about excited threshold
structure, no thermodynamic limit, no equilibration or thermalization, no
measured energy and no identification of its parameters with a particular
laboratory sample beyond the tested identifications of P7. The finite-mode
realization is an idealization confining the one-particle content to $d$
declared modes; the spatial realization is an idealization of an $N$-particle
non-relativistic sample with the declared external field and pair interaction.

## Remarks

- **Why the sector restriction is legitimate.** In the spatial realizations
  the permutation unitaries preserve the domain $W^{2,2}$ and commute with
  $H_{\mathrm{lab}}$, which is exactly the hypothesis of the
  permutation-restricted self-adjointness theorem; in the finite-mode
  realization the bounded operator $H_{\mathrm{lab}}$ commutes with the
  $U_\pi$ by construction, and a bounded operator commuting with a projection
  restricts to a self-adjoint operator on its range.
- **Units.** $m$ is in kg, $\hbar$ in J s, $V_{\mathrm{ext}}$ and $\|V\|_\infty$
  in J, $W$ in J and $\kappa$ in J m; in the finite-mode realization $h$ and
  $W$ are declared directly in joules. No magnetic coupling, spin-orbit term or
  velocity-dependent interaction is part of this model.
