---
id: def-nrqm-driven-dynamics-framework-driven-model
aliases: [ nrqm-driven-dynamics-framework-driven-model ]
kind: definition
domain: physics
title: "The declared driven model: prescribed time-dependent energy families,
  propagator evolution and the two-level drive models"
status: draft
origin: session
dependency_level: 9
deps:
  [
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-autonomous-dynamics,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-state-geometry-framework-state-space,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-autonomous-dynamics-framework-evolution,
    lem-nrqm-composites-density-and-scalar-spectral-probability,
    def-hilbert-space,
    def-bounded-linear-operator,
    def-operator-norm,
    def-symmetric-self-adjoint-and-essentially-self-adjoint,
    def-sobolev-space-wkp-and-its-norm,
    thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness,
    thm-nrqm-controlled-dynamics-strong-bounded-interaction-picture,
    thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution,
    prop-nrqm-orbital-and-spin-finite-spin-matrices,
    def-inner-product-space,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness: mathematical-premise
  thm-nrqm-controlled-dynamics-strong-bounded-interaction-picture: mathematical-premise
  thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution: mathematical-premise
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The driven-dynamics model of a declared system of the
  framework: a prescribed time-dependent family of self-adjoint energy operators
  in one of three declared regularity classes (bounded norm-continuous on a
  compact interval; a fixed self-adjoint part plus a strongly continuous bounded
  self-adjoint control; a common-domain C^1 family), the unitary two-time
  propagator declared to carry the state evolution, the reading of preparations
  and outcome laws at the running time, the energy-basis transition amplitudes
  and level populations, and the two declared two-level drive models (circular
  and linear polarization). The definition fixes terminology and readings only:
  it adopts the driven-evolution assumption as an additional model assumption
  beyond P4, and asserts no existence theorem (supplied by the cited mathematics
  in each class), no laboratory realization, no measurement, no open system, no
  equilibration and no empirical result."
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Chapter 5 printed pages 123-131 (PDF pages 135-143): quantum dynamics,
        unitary propagators and the Schroedinger equation"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum
        Dynamics', Section 2 printed pages 10-17 (PDF pages 10-17): unitary time
        evolution of a time-dependent Hamiltonian and the time-ordered
        exponential"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f\
        18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 7 'Two
        State Systems', Sections 4-6 printed pages 7-19 (PDF pages 7-19): the
        ammonia two-state model, its oscillation and the rotating-frame
        treatment of a magnetic drive"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/7c376a3b5b2\
        7e5ea586a7e37b85a05d3_MIT8_05F13_Chap_07.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 9.3
        printed pages 213-219 (PDF pages 221-227): time-dependent perturbation
        theory for a Hamiltonian H = H0 + V with a possibly time-dependent V"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: n/a
---

## Definition

**(a) Framework data.** Adopt the state and composition postulate P1, the observable and probability postulate P2 and the autonomous-dynamics postulate P4 ([[post-nrqm-framework-state-and-composition]], [[post-nrqm-framework-observable-and-probability]], [[post-nrqm-framework-autonomous-dynamics]]) for a declared system, in the state, sharp-observable and evolution readings of [[def-nrqm-state-geometry-framework-state-space]], [[def-nrqm-state-geometry-pure-mixed-states-and-purity]], [[def-nrqm-observables-framework-observable-and-outcome-law]] and [[def-nrqm-autonomous-dynamics-framework-evolution]]; units are those of [[def-nrqm-framework-quantities-and-units]]. Assume the Axiom of Countable Choice and the Axiom of Choice as the choice hypotheses of the cited mathematical suppliers ([[def-countable-choice]], [[def-axiom-of-choice]]). The readings below are the reading of clause (iv) of P4 for the page's models; clause (iv) records that a prescribed time-dependent family is **a different model assumption** from the autonomous one, and clause (b) below adopts it.

**(b) Prescribed energy family.** As an additional model assumption of the pair, fix a nonempty compact interval $I=[a,b]\subset\mathbb R$ of physical times (seconds), the declared state space $\mathfrak H$ of the system, a value $\hbar>0$ of the reduced Planck constant as in [[def-nrqm-framework-quantities-and-units]], and a **prescribed family** $t\mapsto H(t)$ of self-adjoint operators on $\mathfrak H$ ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]]) in one of the following three **regularity classes**, whose hypotheses are part of the model declaration:

- **(i) Bounded norm-continuous class.** $D(H(t))=\mathfrak H$ for every $t$; each $H(t)\in\mathcal B(\mathfrak H)$ is self-adjoint ([[def-bounded-linear-operator]]); $t\mapsto H(t)$ is norm-continuous on $I$ ([[def-operator-norm]]); and $K:=\sup_{t\in I}\|H(t)\|/\hbar<\infty$.
- **(ii) Bounded-control class.** $H(t)=H_{0}+V(t)$, where $H_{0}$ is self-adjoint with domain $D(H_{0})\subseteq\mathfrak H$ and $V:I\to\mathcal B(\mathfrak H)$ is strongly continuous with self-adjoint values and $\|V(t)\|=v(t)$, $v:=\sup_{t\in I}v(t)<\infty$.
- **(iii) Common-domain class.** There is a dense linear subspace $Y\subseteq\mathfrak H$ that is itself a Hilbert space continuously embedded in $\mathfrak H$ ([[def-hilbert-space]], for instance $Y=D(H_{0})$ with the graph norm of a self-adjoint $H_{0}$), with $D(H(t))=Y$ for every $t$, each $H(t)$ self-adjoint as an operator on $\mathfrak H$, and $t\mapsto H(t)$ of class $C^{1}(I;\mathcal B(Y,\mathfrak H))$.

The family, its class and its data are **prescribed**: no field equation, source model, back-reaction or feedback of the system on the source is assumed, and no claim is made that any laboratory arrangement realizes the family. The family is coupled to the system through the material hypotheses of the page or of the item that declares a specific model (for instance a magnetic-moment or electric-dipole coupling, or the external-source Coulomb family of the page's adiabatic models); the reading of $H(t)$ as the energy of the declared system is a model assumption.

**(c) The model's evolution.** The **driven model** declares that the time evolution of the system between times $s,t\in I$ is carried by a family $U(t,s)$ of unitary operators on $\mathfrak H$ with
$$U(s,s)=I,\qquad U(t,r)=U(t,s)U(s,r)\quad(r,s,t\in I),\qquad U(t,s)^{*}=U(s,t),$$
jointly strongly continuous in $(t,s)$, solving the time-dependent Schroedinger equation on $I$ in the sense of the class:
in class (i) $U$ is the unique norm-continuous solution of $i\hbar\partial_tU(t,s)=H(t)U(t,s)$ with $U(s,s)=I$ constructed by the Dyson series of [[thm-nrqm-controlled-dynamics-norm-dyson-series-and-uniqueness]] (whose hypothesis is exactly the norm-continuity of the bounded self-adjoint family);
in class (ii) $U$ is the mild propagator constructed in [[thm-nrqm-controlled-dynamics-strong-bounded-interaction-picture]], satisfying $U(t,s)\psi=E(t-s)\psi-\frac{i}{\hbar}\int_s^tE(t-r)V(r)U(r,s)\psi\,dr$ for every $\psi\in\mathfrak H$, with $E(u)=e^{-iuH_{0}/\hbar}$ the autonomous flow of clause (b) of [[def-nrqm-autonomous-dynamics-framework-evolution]];
in class (iii) $U$ is the strong propagator of [[thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution]] with physical generator $A=H/\hbar$, preserving $Y$, for which $t\mapsto U(t,s)y$ is $C^1$ in $\mathfrak H$ with $i\hbar\partial_tU(t,s)y=H(t)U(t,s)y$ for every $y\in Y$.
In each class the cited item is what makes the declaration well posed: it constructs the family and proves uniqueness under the class hypotheses. The model asserts nothing beyond those hypotheses; in particular it asserts no invariant domain and no strong equation for $H_{0}$-domain vectors in class (ii), and no common domain in classes (i) and (ii).

On a singleton interval $I=\{a\}$, the evolution declaration consists only of $U(a,a)=I$; all differential assertions in these class readings apply only when $a<b$, with one-sided derivatives at the endpoints.

**(d) State and outcome readings.** The **evolved preparation** at time $t$ of a preparation $\rho$ specified at time $s$ is $\rho(t):=U(t,s)\rho(s)U(t,s)^{*}$; it is a preparation of the model in the sense of [[def-nrqm-state-geometry-pure-mixed-states-and-purity]] for every $t$, by unitarity of $U(t,s)$ and [[lem-nrqm-composites-density-and-scalar-spectral-probability]]. A pure preparation $[\psi(s)]$ evolves to the pure preparation $[\psi(t)]$ with $\psi(t):=U(t,s)\psi(s)\ne0$. The **outcome law at time $t$** of an assigned sharp observable $(A,u_{A})$ ([[def-nrqm-observables-framework-observable-and-outcome-law]]) in that preparation is $\mu^{A}_{\rho(t)}$, the reading of P2; the definition records the timing convention once and asserts nothing about how or when a record is produced.

**(e) Energy-basis amplitudes and level populations.** In class (ii), let $(\varphi_{j})_{j\in J}$ be an orthonormal family in $D(H_{0})$ with $H_{0}\varphi_{j}=E_{j}\varphi_{j}$ and $E_{j}\in\mathbb R$ (a complete orthonormal family of eigenvectors is not assumed here). For $s\le t$ and labels $i,j$ the **transition amplitude from $i$ at time $s$ to $j$ at time $t$** is the scalar
$$A_{ji}(t,s):=e^{iE_{j}(t-s)/\hbar}\,\bigl\langle U(t,s)\varphi_{i},\varphi_{j}\bigr\rangle ,$$
and the **transition probability** is $p_{ji}(t,s):=|A_{ji}(t,s)|^{2}$. If additionally $E_{j}$ is a simple eigenvalue of $H_{0}$ with spectral projection $P_{j}=E_{H_{0}}(\{E_{j}\})$ onto $\mathbb C\varphi_{j}$, then the definition *states*, as the reading of P2, the identity
$$p_{ji}(t,s)=\mu^{H_{0}}_{\psi(t)}(\{E_{j}\})=\|E_{H_{0}}(\{E_{j}\})\psi(t)\|^{2},\qquad \psi(t)=U(t,s)\varphi_{i},$$
which follows from the rank-one form of $P_{j}$ and the normalization $\|\varphi_{j}\|=1$; $p_{ji}$ is the reading of the outcome probability of the value $E_{j}$ of the assigned energy observable $(H_{0},\mathrm J)$ in the evolved preparation, and it is a property of the declared model, not a measured frequency.

**(f) Declared two-level drive models.** Let $(\sigma_{x},\sigma_{y},\sigma_{z})$ be the Pauli matrices of [[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clause (e) acting on $\mathbb C^{2}$ in the orthonormal basis $(e_{\uparrow},e_{\downarrow})$ ([[def-inner-product-space]]), let $\omega_{0},\Omega_{1},\omega\in\mathbb R$, and put $H_{0}:=\frac{\hbar}{2}\omega_{0}\sigma_{z}$ (class (i) with $I$ any compact interval). The **circular two-level drive model** is the class-(i) family
$$H_{\mathrm c}(t):=\frac{\hbar}{2}\Bigl(\omega_{0}\sigma_{z}+\Omega_{1}\bigl(\cos(\omega t)\sigma_{x}+\sin(\omega t)\sigma_{y}\bigr)\Bigr),$$
and the **linear two-level drive model** is the class-(i) family
$$H_{\mathrm l}(t):=\frac{\hbar}{2}\bigl(\omega_{0}\sigma_{z}+\Omega_{1}\cos(\omega t)\sigma_{x}\bigr).$$
The real parameters $\omega_{0},\Omega_{1},\omega$ represent angular frequencies of dimension duration$^{-1}$, read in $\mathrm{s^{-1}}$; their numerical values are expressed in that unit, so $\omega t$ is dimensionless and $\hbar\omega_{0}$ and $\hbar\Omega_{1}$ have energy units; $\omega_{0}$ is the **splitting frequency** of the model (the level gap is $\hbar|\omega_{0}|$), $\omega$ the **drive frequency**, $\Omega_{1}$ the **transverse coupling**, and $\Delta:=\omega_{0}-\omega$ the **detuning**. Populations of the level pair are the diagonal entries $\langle P_{\bullet}\psi,\psi\rangle$ of the orthogonal projections $P_{\uparrow},P_{\downarrow}$ onto $\mathbb Ce_{\uparrow},\mathbb Ce_{\downarrow}$ in the evolved vector $\psi(t)$. The two families are model data: no identification with a laboratory spin, molecule or field, and no relation of $\Omega_{1}$ to a field amplitude, is asserted; such an identification is a tested identification in the sense of P7.

**(g) Status and scope.** Clauses (b), (c), (f) are adopted model assumptions and readings; the existence and uniqueness of the propagator in each class is cited mathematics, not a consequence of P1, P2 or P4. The model asserts no open-system or environment coupling, no non-unitary reduced dynamics, no measurement or apparatus model, no thermalization or equilibration, no long-time limit and no empirical record; the identification of the family's parameters with laboratory fields and of the system with a laboratory sample is made, if at all, only in separately declared models with their own uncertainty.

## Remarks

- **Why classes (i)-(iii) instead of one general theorem.** A general unbounded time-dependent family requires a domain condition; classes (ii) and (iii) are the two standard sufficient regimes used on this page, and the bounded class (i) covers the finite-level models. Clause (iv) of P4 explicitly does not adopt a general unbounded family, so each class is declared with its own mathematics.
- **Amplitudes are not outcomes.** The scalar $A_{ji}$ is a complex bookkeeping amplitude; the model's outcome probability is the Born number of clause (e). Global phases of the eigenvectors change $A_{ji}$ by a phase and leave $p_{ji}$ unchanged.
