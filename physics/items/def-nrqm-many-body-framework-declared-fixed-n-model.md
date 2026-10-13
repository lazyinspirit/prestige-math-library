---
id: def-nrqm-many-body-framework-declared-fixed-n-model
aliases: [ nrqm-many-body-framework-declared-fixed-n-model ]
kind: definition
domain: physics
title: "The declared fixed-N many-body model: species sector, one-particle data,
  interaction and the sector energy observable"
status: draft
origin: pipeline
dependency_level: 10
deps:
  [
    def-nrqm-identical-particles-framework-species-sectors-and-preparations,
    def-nrqm-kinematics-framework-massive-spin-s-model,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-autonomous-dynamics-framework-evolution,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-state-geometry-framework-state-space,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-autonomous-dynamics,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
    post-nrqm-framework-identical-particles-and-spin,
    post-nrqm-framework-preparation-and-apparatus,
    thm-nrqm-fock-and-equilibrium-permutation-restricted-self-adjointness,
    thm-nrqm-fock-and-equilibrium-fixed-n-coulomb-self-adjointness,
    lem-nrqm-composites-euclidean-l2-product-unitary,
    lem-nrqm-composites-hilbert-tensor-construction,
    lem-nrqm-composites-bounded-tensor-maps,
    lem-nrqm-composites-permutation-sector-projections,
    def-hilbert-space,
    def-bounded-linear-operator,
    def-symmetric-self-adjoint-and-essentially-self-adjoint,
    def-countable-choice,
    def-axiom-of-choice,
    lem-nrqm-many-body-finite-spin-product-identification,
    lem-nrqm-many-body-cc-bounded-spatial-realization,
    thm-kato-rellich
  ]
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
  post-nrqm-framework-preparation-and-apparatus: physical-assumption
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
  lem-nrqm-many-body-finite-spin-product-identification: mathematical-premise
  lem-nrqm-many-body-cc-bounded-spatial-realization: mathematical-premise
  thm-kato-rellich: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The declared fixed-N many-body model of the framework: a
  declared species sector of P6, a declared one-particle energy operator
  (spatial massive-model or explicitly retained finite-mode realization), a declared pair
  interaction (bounded or Coulomb), the labelled energy operator and its
  self-adjoint restriction to the adopted symmetric or antisymmetric N-particle
  sector, read on nonzero sectors as the model's assigned energy observable
  and generator of P4 evolution; zero sectors are mathematical bookkeeping
  with no preparation or physical observable assignment. Finite modes are
  embedded in the full spatial spin space, while their energy and dynamics
  are separately adopted effective inputs; full spatial kinematics and spin
  rotations are not automatically assigned on the retained space. The model is an adopted kinematic-dynamical input of the pair; it
  asserts no stability of matter, no Hunziker-van Winter-Zhislin threshold
  statement, no thermodynamic limit, no thermalization and no identification
  with a laboratory sample, and every interaction constant is an empirical model
  parameter with uncertainty."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections 6.1
        and 10.1-10.2 printed pages 104-111 and 226-235 (PDF pages 112-119 and
        234-243): composite systems, the non-interacting composite Hamiltonian,
        the antisymmetric electron-pair wavefunction and the two-electron
        Hamiltonian with the mutual electrostatic repulsion term (10.24a)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "F. H. L. Essler, Advanced Quantum Theory (Oxford lecture notes,
        2017/18), Chapter 1 Sections 1.1, 1.2 and 1.4 pp. 3-13: systems of
        independent particles, the occupation-number representation, Fock space
        and the second-quantised form of one- and two-body operators (equations
        (46)-(48) and Section 1.4.3)"
      url: "http://www-thphys.physics.ox.ac.uk/courses/C6/C6_2017/C6Notes/lecturenote\
        s2017AQT.pdf"
verification:
  precheck: n/a
---

## Definition

**Slot convention.** For $\ell\ge1$, $S_\ell$ acts on $\{0,\dots,\ell-1\}$ as in [[lem-nrqm-composites-permutation-sector-projections]]. On one-based tuple positions use $\widehat{\pi}(k):=1+\pi(k-1)$ for $1\le k\le\ell$. Conjugation by $k\mapsto k-1$ gives $\widehat{\pi\sigma}=\widehat{\pi}\circ\widehat{\sigma}$ and $\widehat{\pi^{-1}}=\widehat{\pi}^{-1}$; thus the supplier's tensor action becomes $U_\pi(v_1\otimes\cdots\otimes v_\ell)=v_{\widehat{\pi}^{-1}(1)}\otimes\cdots\otimes v_{\widehat{\pi}^{-1}(\ell)}$. The parameters of $U_\pi$ and $\operatorname{sgn}(\pi)$ remain canonical zero-based permutations.

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
P5 and the massive spin-$s$ reading below apply to the full spatial space
$H_s=L^2(\mathbb R^3;\mathbb C^{2s+1})$. In the finite-mode branch,
clause (b)(ii) explicitly replaces P5's full-space state and Hamiltonian
assignments (iii),(iv) by retained-space assignments: P1, P2 and P4 are
read on that retained space, P6(i) gives its permutation sectors, and
P6(ii) still specifies spin on $H_s$, with no automatic full spin
representation on the retained space. This is an additional model
idealization, not a consequence of P5.
Let the species parameters mass $m>0$
(kg), spin label $s\in\{0,\tfrac12,1,\dots\}$ and statistics choice
$\sigma\in\{+,-\}$ be given in the vocabulary of that definition and let
$H$ be the one-particle space of the chosen branch below. Use the sector
and preparation constructions of that definition (c)-(e) on $H$; fix an integer
$N\ge1$ and let $\mathfrak H_N^\sigma=\operatorname{ran}P_\sigma^{(N)}\subseteq
H^{\otimes N}$ be the declared $N$-particle sector. All quantities below are
read in the SI conventions and units of
[[def-nrqm-framework-quantities-and-units]] (energies in joules). Assume the
Axiom of Countable Choice ([[def-countable-choice]]) and the Axiom of Choice
([[def-axiom-of-choice]]). AC is inherited from the adopted general spectral
observable and evolution interfaces of P2 and P4 and the operator suppliers
of P5; it is also required by the Coulomb realization in clause (d)(ii).
The bounded spatial operator construction in clause (d)(i) itself uses only
Countable Choice. Adopt [[post-nrqm-framework-preparation-and-apparatus]]
(P7) for the qualified apparatus and parameter identifications below.

**(b) Declared one-particle data.** The model declares a one-particle
**energy operator** in one of the two following realizations.

(i) *Spatial realization.* The one-particle space is
$H=L^2(\mathbb R^3;\mathbb C^{2s+1})$ and, with $\hbar>0$ the reduced Planck
constant, the model declares a **kinetic operator** $K_1:=-\frac{\hbar^2}{2m}\Delta$
on $L^2(\mathbb R^3;\mathbb C^{2s+1})$ and a real, measurable, bounded
**external potential** $V_{\mathrm{ext}}:\mathbb R^3\to\mathbb R$ of essential
supremum $\|V_{\mathrm{ext}}\|_\infty<\infty$; the declared one-particle
operator is $h:=K_1+V_{\mathrm{ext}}(Q)$, self-adjoint by [[lem-nrqm-many-body-cc-bounded-spatial-realization]] with $N=1$, $M=2s+1$ and $a_1=\hbar^2/(2m)$, with domain
$W^{2,2}(\mathbb R^3;\mathbb C^{2s+1})$. The particular singular external potential $V_{\mathrm{ext}}^b-g/|x|$ is included in the Coulomb branch of clause (c)(ii), whose one-particle $h$ is specified there using the $N=1$ instance of clause (d)(ii). Any other more singular declared $V_{\mathrm{ext}}$ requires a separately supplied self-adjoint realization before its operator is read as an observable.

(ii) *Finite-mode realization.* A finite-dimensional complex Hilbert space
$K$ of dimension $d\ge1$ with a declared orthonormal basis
$(f_1,\dots,f_d)$ ([[def-hilbert-space]]) is declared together with a
self-adjoint **one-particle operator** $h\in\mathcal B(K)$
([[def-bounded-linear-operator]], [[def-symmetric-self-adjoint-and-essentially-self-adjoint]]).
Also declare an orthonormal family $(g_1,\dots,g_d)$ in the full spatial
spin space $H_s$ of [[def-nrqm-kinematics-framework-massive-spin-s-model]]
clause (a). Define the **retained-mode isometry**, its adjoint, and its
orthogonal projection by
$$J:K\to H_s,\qquad J\Bigl(\sum_{j=1}^dc_jf_j\Bigr)=\sum_{j=1}^dc_jg_j,\qquad J^*\psi=\sum_{j=1}^d\langle\psi,g_j\rangle f_j,\qquad R:=JJ^*.$$
Thus $J^*J=I_K$, $R^2=R=R^*$ and
$\operatorname{ran}R=\operatorname{span}\{g_1,\dots,g_d\}$; inner products
are linear in the first variable. Here $H=K$ is the effective one-particle
space, and $\psi\in K$ represents the retained full-space vector $J\psi$.
The tensor map $J_N:=J^{\otimes N}$ of
[[lem-nrqm-composites-bounded-tensor-maps]] is an isometry and satisfies
$J_NU_\pi^K=U_\pi^{H_s}J_N$: the two sides agree on elementary tensors
by the slot convention and hence on the completion. The finite projection
sums consequently give $J_NP_\sigma^{(N),K}=P_\sigma^{(N),H_s}J_N$.
The retained sector is therefore isometrically embedded in the full
species sector, preserving its statistics choice.

The internal spin matrices and rotations of P6(ii) act on $H_s$.
Their restrictions are assigned on $K$ only when they preserve
$\operatorname{ran}J$; for example a full internal rotation action on $K$
requires $(I\otimes D_s(A))\operatorname{ran}J=\operatorname{ran}J$ for
every $A\in SU(2)$, with $D_s$ exactly as in P6(ii), and is then read as
$J^*(I\otimes D_s(A))J$. No such invariance is imposed here, so $d$ need
not be a multiple of $2s+1$: one retained spinor mode for $s=1/2$ is
permitted without identifying $K$ with the full two-dimensional spin
factor. P5's full-space position, momentum and commutation relations
are not asserted on $K$. The finite operator $h$ and pair operator $W$
of clause (c)(i) are independently adopted effective energy data; no
compression of a spatial Hamiltonian, equality with its evolution,
or approximation error bound is asserted. Identifying the retained modes
and these energy data with a laboratory preparation is a tested
identification with uncertainty under P7, not part of the mathematical
embedding.

**(c) Declared interaction.** The model declares a **pair interaction** in the
matching realization.

(i) *Bounded interaction.* In the spatial realization let
$W:\mathbb R^3\to\mathbb R$ be real, measurable, bounded with
$W(-z)=W(z)$ for almost every $z$ and $\|W\|_\infty<\infty$. In the
finite-mode realization let $W\in\mathcal B(K\widehat\otimes K)$ be
self-adjoint with $U_{(0\,1)}WU_{(0\,1)}=W$, where $U_{(0\,1)}$ is the exchange
unitary of [[lem-nrqm-composites-permutation-sector-projections]] clause (a)
in the tensor square $\widehat{K\otimes K}$ of
[[lem-nrqm-composites-hilbert-tensor-construction]]. The interaction strength
constants entering $W$ are empirical model parameters with their uncertainties
in the sense of P6 clause (iii).

(ii) *Coulomb interaction.* In the spatial realization the model may declare $W(z):=\kappa/|z|$ with a real coupling $\kappa\in\mathbb R$ in $\mathrm J\,\mathrm m$ (repulsive for $\kappa>0$). Retain a real bounded measurable external term $V_{\mathrm{ext}}^b$ as in clause (b)(i), and permit the additional singular term $-g/|x|$, where $g\in\mathbb R$ is also in $\mathrm J\,\mathrm m$, so each distance denominator in metres gives an energy in joules; the total external potential is $V_{\mathrm{ext}}^b(x)-g/|x|$. In this branch the declared one-particle operator is $h=K_1+M_{V_{\mathrm{ext}}^b-g/|x|}$ on $W^{2,2}(\mathbb R^3;\mathbb C^{2s+1})$, including the singular external term. Its self-adjointness and lower bound are the $N=1$ finite-component instance of clause (d)(ii), with no pair term. Thus the bounded one-particle reading in clause (b)(i) is replaced by this supplied Coulomb reading, rather than leaving the singular external term solely in $H_{\mathrm{lab}}$. The pair interaction still consists only of $\kappa/|x_i-x_j|$. The declared scalar potential on $\mathbb R^{3N}$ is
$$V(X)=V_b(X)+V_C(X),\qquad V_b(X)=\sum_{i=1}^NV_{\mathrm{ext}}^b(x_i),\qquad V_C(X)=-g\sum_{i=1}^N\frac1{|x_i|}+\kappa\sum_{1\le i<j\le N}\frac1{|x_i-x_j|}.$$
The cases $g=0$, $\kappa=0$, $V_{\mathrm{ext}}^b=0$ and either sign of either coupling are allowed. Singular values on their null collision sets are irrelevant to the multiplier classes. The singular part is supplied by [[thm-nrqm-fock-and-equilibrium-fixed-n-coulomb-self-adjointness]]; the bounded external addition is included by the exact-domain argument in clause (d)(ii), rather than attributed to a source statement which contains only the singular sum.

**(d) The labelled energy operator and its sector restriction.** Fix the
particle masses $m_1=\cdots=m_N=m$ of the declared species.

(i) *Spatial, bounded case.* Put $r_s:=2s+1$, $\mathcal S_N:=(\mathbb C^{r_s})^{\otimes N}$ and $M:=r_s^N$. The finite product spin basis identifies $\mathcal S_N$ with $\mathbb C^M$. Use the full finite-component product unitary
$$\Theta_N:H^{\otimes N}\longrightarrow L^2(\mathbb R^{3N};\mathbb C^M),\qquad [\Theta_N(f_1\otimes\cdots\otimes f_N)]_a(X)=\prod_{j=1}^N[f_j(x_j)]_{a_j},$$
where $a\in\{1,\dots,r_s\}^N$. Its construction and combined spatial/spin permutation action are proved in [[lem-nrqm-many-body-finite-spin-product-identification]], from the finite-component extension of [[lem-nrqm-composites-euclidean-l2-product-unitary]]. For $V(X)=\sum_iV_{\mathrm{ext}}(x_i)+\sum_{i<j}W(x_i-x_j)$ define $H_{\mathrm{lab}}=-\hbar^2\Delta_X/(2m)+M_V$ componentwise. The CC-only [[lem-nrqm-many-body-cc-bounded-spatial-realization]], with $a_i=\hbar^2/(2m)$ and component count $M$, supplies self-adjointness on
$$D(H_{\mathrm{lab}})=W^{2,2}(\mathbb R^{3N};\mathbb C^M)=W^{2,2}(\mathbb R^{3N};\mathbb C)\otimes \mathcal S_N,$$
and the lower bound $-\|V\|_\infty$. Equal masses, identical external potentials and the even pair potential make the scalar domain and operator invariant under spatial block permutations. The finite-component lemma shows that the combined permutations $\mathcal U_\pi=\Theta_NU_\pi\Theta_N^{-1}$ also permute the spin slots and commute with $H_{\mathrm{lab}}$ on its domain. Thus $\mathcal P_\sigma:=\Theta_NP_\sigma^{(N)}\Theta_N^{-1}$ reduces the operator by [[thm-nrqm-fock-and-equilibrium-permutation-restricted-self-adjointness]] (a)-(d), and the transported sector energy is
$$H_N^{\sigma,\mathrm{coord}}:=H_{\mathrm{lab}}\big|_{D(H_{\mathrm{lab}})\cap\operatorname{ran}\mathcal P_\sigma}.$$
It is self-adjoint on $\operatorname{ran}\mathcal P_\sigma=\Theta_N\mathfrak H_N^\sigma$, with the zero operator on the zero-sector branch. The model's tensor reading is $H_N^\sigma:=\Theta_N^{-1}H_N^{\sigma,\mathrm{coord}}\Theta_N$ on $\mathfrak H_N^\sigma$. Every constant spin action commutes with the spin-independent labelled operator; a common spin unitary $A^{\otimes N}$ preserves each identical-particle sector by the finite-component lemma. For $s=0$, $M=1$ and this is the scalar product reading; for $N=1$, $M=2s+1$ and it is the one-particle component reading.

(ii) *Spatial Coulomb case.* Put $r=2s+1$, $\mathcal S_N=(\mathbb C^r)^{\otimes N}$ and $M=r^N$. Use the full spin-product unitary $\Theta_N:(L^2(\mathbb R^3;\mathbb C^r))^{\otimes N}\to L^2(\mathbb R^{3N};\mathbb C^M)$ of [[lem-nrqm-many-body-finite-spin-product-identification]] (a),(b), including its combined spatial/internal permutation action. To apply the literal Fourier normalization of [[thm-nrqm-fock-and-equilibrium-fixed-n-coulomb-self-adjointness]], choose in that mathematical theorem the masses $\widetilde m_i=m/(4\pi^2)$, its parameter $\hbar$ unchanged, one fixed center at zero, coefficients $z_{i1}=-g$ and $z_{ij}=\kappa$. The mathematical masses here are substitution parameters used to realize the already declared kinetic operator; the physical species mass remains $m$. The source kinetic symbol becomes $4\pi^2\hbar^2|\xi|^2/(2m)$, so its scalar operator is exactly
$$T_C=-\frac{\hbar^2}{2m}\Delta_X+V_C(X),\qquad D(T_C)=H^2(\mathbb R^{3N};\mathbb C).$$
By the source's clauses (b),(c), $T_C$ and its finite-component extension are self-adjoint on these exact domains and bounded below for all stated real $g,\kappa$. The real bounded multiplier $M_{V_b}$ has norm at most $N\|V_{\mathrm{ext}}^b\|_\infty$, hence relative bound zero with respect to $T_C$ and to its finite-component extension. The canonical [[thm-kato-rellich]] makes
$$H_{\mathrm{lab}}=-\frac{\hbar^2}{2m}\Delta_X+V_C+V_b,\qquad D(H_{\mathrm{lab}})=H^2(\mathbb R^{3N};\mathbb C^M),$$
self-adjoint on exactly this domain and bounded below; if the singular operator has lower bound $c_C$, the sum has lower bound $c_C-N\|V_{\mathrm{ext}}^b\|_\infty$. Equal masses, identical external slots and pair-independent signed coefficient $\kappa$ make the scalar operator invariant under spatial permutations. These permutations preserve $H^2$ by permuting the weak-derivative coordinates; the constant internal tensor permutations preserve the finite-component domain too. Consequently the combined projections $\mathcal P_\sigma=\Theta_NP_\sigma^{(N)}\Theta_N^{-1}$ reduce $H_{\mathrm{lab}}$, and [[lem-nrqm-many-body-finite-spin-product-identification]] (c) gives self-adjointness of its restriction on the exact domain $H^2\cap\operatorname{ran}\mathcal P_\sigma$. The declared sector energy is this restriction transported back by $\Theta_N^{-1}$ to $\mathfrak H_N^\sigma$, with the unique zero-space operator when that sector is zero. This Coulomb construction uses AC in addition to the inherited framework choice hypotheses of clause (a).

(iii) *Finite-mode case.* On $K^{\otimes N}$ put
$$H_{\mathrm{lab}}:=\sum_{i=1}^N h^{(i)}+\sum_{1\le i<j\le N}W^{(ij)},$$
where $h^{(i)}$ is the slot operator of
[[lem-nrqm-composites-bounded-tensor-maps]] (the identity on all factors but
the $i$-th, $h$ on the $i$-th) and $W^{(ij)}$ is the transport of
$W\in\mathcal B(K\widehat\otimes K)$ to the pair of slots $(i,j)$ by any
canonical permutation $\pi$ whose transported map $\widehat{\pi}$ moves that pair to the first two slots; the symmetry
$U_{(0\,1)}WU_{(0\,1)}=W$ makes the order of the pair immaterial and
$W\otimes I$ commutes with permutations fixing the first two slots, so the
transported operator is independent of the permutation chosen. Then
$H_{\mathrm{lab}}$ is bounded and self-adjoint,
it commutes with every permutation unitary, and the model's sector energy
operator is $H_N^\sigma:=H_{\mathrm{lab}}|_{\mathfrak H_N^\sigma}=P_\sigma^{(N)}H_{\mathrm{lab}}P_\sigma^{(N)}|_{\mathfrak H_N^\sigma}$.

**(e) The model's energy reading and evolution.** In every realization with
$\mathfrak H_N^\sigma\ne\{0\}$, the pair $(H_N^\sigma,\mathrm J)$ is declared to be the **assigned energy
observable** of the $N$-particle sector in the sense of
[[def-nrqm-observables-framework-observable-and-outcome-law]] clause (a): its
outcome law in a declared sector preparation $\rho$ is the law
$\mu^{H_N^\sigma}_\rho(B)=\operatorname{tr}(\rho E_{H_N^\sigma}(B))$ of that
definition clause (b), and its spectral data are those of the self-adjoint
operator constructed in clause (d). The **model evolution** is the unitary
flow $U(t)=\exp(-itH_N^\sigma/\hbar)$ of
[[def-nrqm-autonomous-dynamics-framework-evolution]] clause (b) with this
generator. If $\mathfrak H_N^\sigma=\{0\}$, clause (d) retains the unique
zero-space operator only as mathematical bookkeeping: every operator on this
space has trace zero, so there is no trace-one preparation, no assigned
physical energy observable and no preparation evolution under P1-P4.
The identification of the operator with the energy of a concrete
sample, and the assignment of numerical masses, couplings and potentials to a
laboratory species, are tested identifications with uncertainty under P7;
they are not consequences of P1-P6.

**(f) The non-interacting reading.** The model is called **non-interacting**
when $W=0$ (equivalently $\kappa=0$ only in the Coulomb branch of clause (c)(ii)), so that
$H_{\mathrm{lab}}=\sum_{i=1}^Nh^{(i)}$; in the spatial realization this is the
case of the external potential summed over slots of the stated bounded or Coulomb realization.

**(g) Scope.** The declared model is a kinematic and dynamical input of this
pair: on a nonzero sector it fixes a state space, a sector, an energy operator
and an evolution; a zero sector carries only the mathematical convention of
clause (e). It asserts no stability of matter, no Hunziker-van
Winter-Zhislin threshold statement, no statement about excited threshold
structure, no thermodynamic limit, no equilibration or thermalization, no
measured energy and no identification of its parameters with a particular
laboratory sample beyond the tested identifications of P7. The finite-mode
realization is the retained-space idealization of clause (b)(ii), with
independently assigned finite energy data and no claimed accuracy relative
to spatial evolution; the spatial realization is an idealization of an $N$-particle
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
  in J, $W$ in J and $g,\kappa$ in J m; in the finite-mode realization $h$ and
  $W$ are declared directly in joules. No magnetic coupling, spin-orbit term or
  velocity-dependent interaction is part of this model.
