---
id: def-nrqm-oscillator-framework-quadratic-potential-model
aliases: [ nrqm-oscillator-framework-quadratic-potential-model ]
kind: definition
domain: physics
title: "The quadratic-potential oscillator model of the framework"
status: draft
origin: pipeline
dependency_level: 9
deps:
  [
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-autonomous-dynamics,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
    def-nrqm-state-geometry-framework-state-space,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-autonomous-dynamics-framework-evolution,
    def-nrqm-kinematics-framework-massive-spin-s-model,
    def-nrqm-framework-quantities-and-units,
    lem-nrqm-kinematics-componentwise-position-and-momentum,
    lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma,
    lem-nrqm-oscillator-closed-ladder-domains,
    lem-nrqm-oscillator-unitary-transport-of-spectral-pvms,
    thm-nrqm-oscillator-hermite-recurrence,
    thm-nrqm-oscillator-oscillator-scaling-and-exact-realization,
    thm-nrqm-oscillator-multidimensional-oscillator-completeness,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  lem-nrqm-kinematics-componentwise-position-and-momentum: mathematical-premise
  lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma: mathematical-premise
  lem-nrqm-oscillator-closed-ladder-domains: mathematical-premise
  lem-nrqm-oscillator-unitary-transport-of-spectral-pvms: mathematical-premise
  thm-nrqm-oscillator-hermite-recurrence: mathematical-premise
  thm-nrqm-oscillator-oscillator-scaling-and-exact-realization: mathematical-premise
  thm-nrqm-oscillator-multidimensional-oscillator-completeness: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The one-dimensional and isotropic three-dimensional
  quadratic-potential (harmonic) oscillator model of a spinless massive particle
  of the non-relativistic framework: state space L^2(R,dx) respectively
  L^2(R^3,dx), position and momentum operators with declared units m and kg m
  s^-1, the assigned energy observable H_osc with unit J and a potential-energy
  convention in which V(0) is subtracted, and the assigned dimensionless
  excitation-number observable N_psi with declared unit 1/count. The
  one-dimensional energy operator is the self-adjoint realization of the formal
  differential expression -hbar^2/(2m) d^2/dx^2 + (m omega^2/2) x^2 fixed by the
  oscillator scaling theorem for the declared parameters m>0, omega>0 and
  hbar>0. The model is an adopted idealization of the quadratic part of a C^2
  scalar potential-energy function V:R->R near a non-degenerate local minimum,
  after subtracting V(0); it asserts no measured values, no derivation of m or
  omega from any microscopic theory, no damping, driving or time dependence, no
  coupling to electromagnetic fields or radiation, no spin-dependent force, no
  anharmonic or relativistic correction and no boundary or many-body effect."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, §3.1 printed
        pages 37-41 (PDF pages 45-49): the quadratic potential as the
        equilibrium approximation, the Hamiltonian (3.1), the length scale
        (3.15) and the stationary states"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum
        Dynamics', §1 printed pages 1-9: the quantum harmonic oscillator
        Hamiltonian, its length scale and its spectrum"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f\
        18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        §8.3 printed pages 178-179 (PDF pages 190-191): the oscillator as an
        exactly solvable self-adjoint operator and the polynomial-Gaussian
        eigenbasis"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Definition

**(a) Adopted framework assumptions.** Adopt the state and composition postulate P1, the observable and probability postulate P2, the autonomous-dynamics postulate P4 and the kinematics and massive-particle model postulate P5, in the readings of [[def-nrqm-state-geometry-framework-state-space]], [[def-nrqm-observables-framework-observable-and-outcome-law]], [[def-nrqm-autonomous-dynamics-framework-evolution]] and [[def-nrqm-kinematics-framework-massive-spin-s-model]] ([[post-nrqm-framework-state-and-composition]], [[post-nrqm-framework-observable-and-probability]], [[post-nrqm-framework-autonomous-dynamics]], [[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]]). Assume the Axiom of Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]). Fix real model parameters $m>0$ (mass parameter, unit $\mathrm{kg}$), $\omega>0$ (angular frequency, unit $\mathrm s^{-1}$) and the action constant $\hbar>0$ (unit $\mathrm J\,\mathrm s$) of [[def-nrqm-framework-quantities-and-units]] clause (d)4, and put
$$\ell:=\sqrt{\frac{\hbar}{m\omega}}>0\qquad\text{(unit }\mathrm m\text{),}$$
the model's length scale.

**(b) One-dimensional realization.** The model's one-dimensional state space is the complex Hilbert space $H_1:=L^{2}(\mathbb R,dx;\mathbb C)$ of almost-everywhere classes with inner product linear in the first argument, taken in the scalar reading $r=1$ of the component-valued space of [[lem-nrqm-kinematics-componentwise-position-and-momentum]] for $d=1$. The model's **position** and **momentum** are the operators of that lemma at $d=1$, $r=1$, namely
$$Q:=M_x,\qquad D(Q)=\{f\in H_1:xf\in L^{2}\},\qquad (Qf)(x)=xf(x),$$
$$P:=-i\hbar D_x,\qquad D(P)=\{f\in H_1:\text{the weak derivative }D_xf\text{ lies in }L^{2}\},\qquad Pf=-i\hbar D_xf,$$
which are densely defined and self-adjoint with exactly these domains; the model assigns to $(Q,\mathrm m)$ and to $(P,\mathrm{kg}\,\mathrm m\,\mathrm s^{-1})$ the status of assigned sharp observables in the sense of [[def-nrqm-observables-framework-observable-and-outcome-law]] clause (a), with outcome laws read from P2.

**(c) Energy and excitation-number observables.** Let $g_0,(g_n)_{n\in\mathbb N}$ and the unitary $D:L^{2}(\mathbb R,dy)\to L^{2}(\mathbb R,dx)$ be the Hermite data and scaling map of [[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]] clauses (a), (b) for the parameters $m,\omega,\hbar$. Put $\mathscr P_y:=\{p g_0:p\in\mathbb C[y]\}\subseteq L^{2}(\mathbb R,dy)$; the Hermite recurrence [[thm-nrqm-oscillator-hermite-recurrence]] identifies this polynomial-Gaussian space with $\operatorname{span}\{g_n:n\in\mathbb N\}$, and its scaled image $\mathscr P_x:=D(\mathscr P_y)=\operatorname{span}\{\psi_n:n\in\mathbb N\}$ is the core supplied by the scaling theorem. Let $A$ be the diagonal operator of [[lem-nrqm-oscillator-diagonal-adjoint-and-graph-core-lemma]] for the family $(g_n)$ and eigenvalues $2n+1$. The model's **energy operator** is
$$H_1:=\frac{\hbar\omega}{2}\,D A D^{-1},\qquad D(H_1):=\{f\in H_1:D^{-1}f\in D(A)\},$$
the operator of [[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]] clause (b); its exact domain, action, spectrum and eigenbasis are those established there. The model assigns to $(H_1,\mathrm J)$ the status of assigned energy observable of the isolated system in the sense of [[def-nrqm-autonomous-dynamics-framework-evolution]] clauses (a) and (b): the model's flow is $U(t)=\exp(-itH_1/\hbar)$ and the model's Schroedinger dynamics is the one of that definition. Let $N$ be the self-adjoint number operator on $L^{2}(\mathbb R,dy)$ of [[lem-nrqm-oscillator-closed-ladder-domains]] for the Hermite family $(g_n)$, and set $N_\psi:=DND^{-1}$. Its transported domain and action are
$$D(N_\psi)=\Bigl\{f\in H_1:\sum_n n^2|\langle f,\psi_n\rangle|^2<\infty\Bigr\},\qquad N_\psi f=\sum_n n\langle f,\psi_n\rangle\psi_n,$$
with the series converging in $H_1$; it is self-adjoint by [[lem-nrqm-oscillator-unitary-transport-of-spectral-pvms]] clauses (a), (d). The model assigns to $(N_\psi,1/\mathrm{count})$ the status of its dimensionless excitation-number observable; here $\mathrm{count}$ denotes one excitation count and is dimensionless, so the spectral coordinate $n$ records $n$ excitations, and its outcome laws are read by P2. On the scaled polynomial-Gaussian core $\mathscr P_x$ the operator $H_1$ is the self-adjoint realization of the quadratic expression: for every $f\in\mathscr P_x$,
$$H_1f=-\frac{\hbar^{2}}{2m}f''+\frac{m\omega^{2}}{2}x^{2}f$$
pointwise, and for every $f\in D(H_1)$ the weak identity $\int (H_1f)\varphi\,dx=\int f\bigl(-\frac{\hbar^{2}}{2m}\varphi''+\frac{m\omega^{2}}{2}x^{2}\varphi\bigr)dx$ holds for every $\varphi\in C_c^{\infty}(\mathbb R)$ ([[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]] clauses (c), (d)). The formal differential expression $-\frac{\hbar^{2}}{2m}\frac{d^{2}}{dx^{2}}+\frac{m\omega^{2}}{2}x^{2}$ is the model's **quadratic potential energy plus kinetic energy** reading; no identification of $D(H_1)$ with any independently defined maximal differential-operator domain, and no separate quadratic-form-domain characterization, is asserted.

**(d) Three-dimensional isotropic realization.** For the spinless reading $s=0$ of the massive-particle model of [[def-nrqm-kinematics-framework-massive-spin-s-model]], with state space $H_3:=L^{2}(\mathbb R^{3},dx;\mathbb C)$, position operators $Q_j$ and momentum operators $P_k$ ($j,k\in\{1,2,3\}$) with the domains and units of that definition, the model with common frequency $\omega$ has **energy operator** $H_3$ equal to the diagonal operator $H$ of [[thm-nrqm-oscillator-multidimensional-oscillator-completeness]] clause (c) for $d=3$, $m_j=m$, $\omega_j=\omega$, a self-adjoint operator on $H_3$ with the domain, spectrum and core displayed there. The model assigns to $(H_3,\mathrm J)$ the status of assigned energy observable in the reading of clause (c); its eigenbasis and the identity $H_3=\sum_{j=1}^{3}\bigl(-\frac{\hbar^{2}}{2m}\partial_{x_j}^{2}+\frac{m\omega^{2}}{2}x_j^{2}\bigr)$ on the core are those of that theorem, and the one-dimensional realization of clauses (b) and (c) is the coordinate specialization of this one.

**(e) Physical reading and scope.** Clause (c) defines the model quantities that the page calls the energy and excitation number; it is a **model assumption** that the energy of the declared isolated particle is the assigned observable $(H_1,\mathrm J)$ and that $(N_\psi,1/\mathrm{count})$ is its excitation-number observable. The additive constant of the potential energy is removed at the minimum: for a one-dimensional potential-energy function $V:\mathbb R\to\mathbb R$ of class $C^2$, with values in joules for position $x$ in metres, suppose $V$ has a non-degenerate local minimum at $0$, meaning $V'(0)=0$ and $V''(0)>0$. Taylor's theorem gives $V(x)-V(0)=\frac{1}{2}V''(0)x^{2}+o(x^{2})$ as $x\to0$; the oscillator model approximates this shifted potential-energy function by its quadratic term and sets $m\omega^{2}=V''(0)$. The oscillator's quantum ground energy in this convention is $\hbar\omega/2$. The approximation's deviations at finite amplitude are governed by the higher derivatives and are not developed on this page (Binney §3.1, cited in the references). No measured value, no laboratory identification and no derivation of $m$ or $\omega$ from any microscopic or environmental theory is asserted. The model contains no damping, no external driving, no time-dependent parameters, no coupling to electromagnetic fields or radiation, no spin-dependent force, no anharmonic term, no relativistic correction and no boundary or many-body effect; those are separate model assumptions belonging to their own items. The parameters $m$ and $\omega$ are model parameters of dimensions $\mu$ and $\tau^{-1}$ in the conventions of [[def-nrqm-framework-quantities-and-units]], and all displayed quantities are read in the units fixed there.

**(f) Status.** Clauses (a)-(e) fix the objects used by the theorems of this page and record the readings of P1, P2, P4 and P5 in the model's terminology. They assert no preparation or apparatus model, no detection model, no joint outcome law of position and momentum and no empirical result.

## Remarks

- **Why the model is fixed through the scaling theorem.** The operator $H_1$ is not introduced as "the differential expression with some self-adjoint extension": it is the unique self-adjoint extension of the symmetric operator on the polynomial-Gaussian core that is fixed outright by [[thm-nrqm-oscillator-oscillator-scaling-and-exact-realization]]. The weak identity of clause (c) then records that this operator is the realization of the quadratic expression in the sense of distributions, without claiming that its domain coincides with any maximally defined differential domain.
- **The two realizations are separate adoptions.** Clause (b) declares a particle confined to a line; P5's spacetime arena is $\mathbb R\times\mathbb R^{3}$, so the one-dimensional model is an additional idealization, not a restriction of P5. Clause (d) is the isotropic three-dimensional model of P5 at $s=0$. Later items of this page state their hypotheses for one or the other realization explicitly; results about the one-dimensional realization are not transferred to the three-dimensional one or conversely, except where the multidimensional theorem supplies the identification.
- **Units.** The quantities $\ell$, $Q$, $P$, $H_1$, $H_3$, $m$, $\omega$ and $\hbar$ are read as dimensioned model quantities: $[\ell]=\ell$, $[Q]=\ell$, $[P]=\mu\ell\tau^{-1}$, $[H]=\mu\ell^{2}\tau^{-2}$, $[m]=\mu$, $[\omega]=\tau^{-1}$ and $[\hbar]=\mu\ell^{2}\tau^{-1}$. The excitation number $N_\psi$ is dimensionless and is read in the declared unit $1/\mathrm{count}$; $V(0)$ is subtracted only as a potential-energy offset, and the quantum energy eigenvalues $\hbar\omega(n+\frac12)$ are read in joules.
