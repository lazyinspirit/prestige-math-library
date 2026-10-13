---
id: def-nrqm-kinematics-framework-massive-spin-s-model
aliases: [ nrqm-kinematics-framework-massive-spin-s-model ]
kind: definition
domain: physics
title: "The massive spin-s particle model of the framework: state space,
  operators, units and frame readings"
status: draft
origin: session
dependency_level: 8
deps:
  [
    def-axiom-of-choice,
    def-countable-choice,
    def-l-p-space-as-a-quotient-by-null-functions,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-magnetic-and-detection-position-and-momentum-operators,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-state-geometry-framework-state-space,
    def-nrqm-state-geometry-pure-mixed-states-and-purity,
    def-schwartz-space-and-its-seminorms,
    lem-nrqm-kinematics-ccr-and-internal-factor-commutation,
    lem-nrqm-kinematics-component-valued-wavefunction-identifications,
    lem-nrqm-kinematics-componentwise-position-and-momentum,
    lem-nrqm-kinematics-momentum-representation,
    post-nrqm-framework-identical-particles-and-spin,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
    post-nrqm-framework-state-and-composition,
    prop-nrqm-orbital-and-spin-finite-spin-matrices
  ]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-magnetic-and-detection-position-and-momentum-operators: mathematical-premise
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  lem-nrqm-kinematics-ccr-and-internal-factor-commutation: mathematical-premise
  lem-nrqm-kinematics-component-valued-wavefunction-identifications: mathematical-premise
  lem-nrqm-kinematics-componentwise-position-and-momentum: mathematical-premise
  lem-nrqm-kinematics-momentum-representation: mathematical-premise
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The kinematic reading of the massive-particle model postulate
  P5 for one particle of spin label s and mass parameter m>0: the
  component-valued state space L^2(R^3;C^(2s+1)) with its class reading and
  internal factor, the componentwise position and momentum operators with their
  declared units, the internal spin operators as matrix actions, the
  momentum-space representative, and the frame reading of the model. The item
  fixes terminology and readings of P1, P2, P5 and P6; it asserts no dynamics
  beyond what P4 assigns, no apparatus or detection model, no empirical
  identification of any species, and excludes massless, relativistic,
  singular-potential, boundary and radiation models, which require their own
  assumptions."
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 1 'Wave
        Mechanics', Section 6, printed pages 22-24 (PDF pages 22-24): the
        position and momentum operators, momentum eigenstates and the momentum
        representation"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/61bc31b8d8b\
        f0680c322733910a71aa0_MIT8_05F13_Chap_01.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 3.2.3,
        printed pages 75-76 (PDF pages 78-79): momentum eigenstates and the
        Fourier transform"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 2.3
        printed pages 24-32 (PDF pages 32-40): the position representation of
        the momentum operator; Section 6.1 printed pages 105-110 (PDF pages
        113-118): composite systems, product states and operators on the product
        space; Section 7.4 printed pages 158-161 (PDF pages 166-169): spin
        commutes with the spatial operators, with 2s+1 spin states"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: n/a
---
## Definition

**(a) Adopted model and state space.** Adopt the kinematics and
massive-particle model postulate P5 for a declared particle of mass parameter
$m>0$, spin label $s\in\{0,\tfrac12,1,\tfrac32,\dots\}$ and internal factor
assigned as in the identical-particle and spin postulate P6
([[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]],
[[post-nrqm-framework-identical-particles-and-spin]]). Put $r:=2s+1$ and take
as the model's one-particle state space the complex Hilbert space
$$H_{s}:=L^{2}\bigl(\mathbb R^{3};\mathbb C^{r}\bigr) =\Bigl\{f:\mathbb R^{3}\to\mathbb C^{r}\ \text{measurable}:\ \int_{\mathbb R^{3}}\|f(x)\|_{\mathbb C^{r}}^{2}\,dx<\infty\Bigr\}\Big/\!\sim,$$
the quotient by equality almost everywhere, with inner product
$\langle f,g\rangle=\int_{\mathbb R^{3}}\sum_{l=1}^{r}f_{l}\overline{g_{l}}\,dx$
linear in the first argument ([[def-l-p-space-as-a-quotient-by-null-functions]]).
Thus an element of $H_{s}$ is a class of functions, not a function, and
pointwise values of a state are not defined; the position density is read from
the class through the observables of clause (b) and the observable and
probability postulate P2 ([[post-nrqm-framework-state-and-composition]],
[[def-nrqm-state-geometry-framework-state-space]],
[[def-nrqm-observables-framework-observable-and-outcome-law]]). Its dimension
in the conventions of [[def-nrqm-framework-quantities-and-units]] clause (d)1
is $\ell^{-3/2}$ per component. P5 presents the same space as the completed
tensor product $L^{2}(\mathbb R^{3};\mathbb C)\widehat\otimes\mathbb C^{r}$
with the spin factor carrying the representation of P6; the unitary
identification of the two descriptions and the componentwise reading of
componentwise operators are those of
[[lem-nrqm-kinematics-component-valued-wavefunction-identifications]] and
[[lem-nrqm-kinematics-componentwise-position-and-momentum]]. The orthonormal
basis $(e_{m})_{m=-s,\dots,s}$ of $\mathbb C^{r}$ is the basis fixed by P6
([[post-nrqm-framework-identical-particles-and-spin]] clause (ii)).

**(b) Position and momentum.** The model's $j$-th position and $k$-th momentum
are the componentwise operators $Q_{j}$ and $P_{k}$ of
[[lem-nrqm-kinematics-componentwise-position-and-momentum]] clause (a): for
$f=(f_{l})$, restricted to the classes with $x_{j}f_{l}\in L^{2}$ respectively
with $D_{k}f_{l}\in L^{2}$ for all $l$,
$$(Q_{j}f)_{l}(x):=x_{j}f_{l}(x),\qquad (P_{k}f)_{l}:=-i\hbar\,D_{k}f_{l},$$
with $D_{k}$ the weak derivative and $\hbar$ the action constant of
[[def-nrqm-framework-quantities-and-units]]. These are the scalar operators of
[[def-nrqm-magnetic-and-detection-position-and-momentum-operators]] applied
componentwise. The model assigns to $(Q_{j},\mathrm m)$ and to
$(P_{k},\mathrm{kg\,m\,s^{-1}})$ the status of assigned sharp observables in
the sense of [[def-nrqm-observables-framework-observable-and-outcome-law]]
clause (a), with the units of [[def-nrqm-framework-quantities-and-units]]
clause (d)4; both are densely defined and self-adjoint by
[[lem-nrqm-kinematics-componentwise-position-and-momentum]] clause (a). On the
Schwartz core they satisfy the componentwise canonical commutation relations,
and they commute with the internal-factor operators of clause (c) in the sense
of [[lem-nrqm-kinematics-ccr-and-internal-factor-commutation]] clauses (a),(c).

**(c) Internal factor.** For $i\in\{1,2,3\}$ let $S_{i}=\hbar J_{i}$ be the
self-adjoint endomorphisms of $\mathbb C^{r}$ of the spin assignment P6
([[post-nrqm-framework-identical-particles-and-spin]] clause (ii),
[[prop-nrqm-orbital-and-spin-finite-spin-matrices]]), and let the model read
them on $H_{s}$ as the matrix actions
$$(S_{i}f)_{l}:=\hbar\sum_{m=1}^{r}(J_{i})_{lm}f_{m}\qquad(l=1,\dots,r),$$
that is, as the amplifications $I\otimes S_{i}$ under the tensor
identification of clause (a) ([[lem-nrqm-kinematics-ccr-and-internal-factor-commutation]]
clause (d)). Their declared unit is the unit of action ([[def-nrqm-framework-quantities-and-units]]
clause (d)4). The factor is internal bookkeeping: it is not a spatial
coordinate, not a rotating body and not a relativistic spinor, and the model
assigns no position or worldline to it.

**(d) Momentum-space representative.** With $U^{(s)}$ the unitary of
[[lem-nrqm-kinematics-momentum-representation]] for $r=2s+1$, the
**momentum-space representative** of a preparation vector $\psi\in H_{s}$ is
$\psi_{p}:=U^{(s)}\psi\in L^{2}(\mathbb R^{3},dp;\mathbb C^{r})$; for a
Schwartz class $\psi$ it is the componentwise Fourier transform
$$(\psi_{p})_{l}(p)=(2\pi\hbar)^{-3/2}\int_{\mathbb R^{3}}e^{-ip\cdot x/\hbar}\psi_{l}(x)\,dx,$$
and its dimension is $(\mathrm{kg\,m\,s^{-1}})^{-3/2}$ per component
([[def-nrqm-framework-quantities-and-units]] clause (d)2). By
[[lem-nrqm-kinematics-momentum-representation]] clause (b), $P_{k}$ acts on the
momentum representative by multiplication by $p_{k}$; this is the model's
momentum reading and no measured momentum distribution is identified with
$|\psi_{p}|^{2}$ by this definition.

**(e) Frame reading.** The model's inertial frames are the global coordinate
charts of P5; frame changes are the Galilean transformations of P5, with
parameters and units as in [[def-nrqm-framework-quantities-and-units]]. This
definition uses P5's frame class only. For translations by $a\in\mathbb R^3$ and boosts with parameter $u\in\mathbb R^3$, choose the componentwise representative convention
$$(T_a\psi)(x)=\psi(x-a),\qquad (B_u(t)\psi)(x)=\exp\!\left(\frac{i}{\hbar}\left(mu\cdot x-\tfrac12m|u|^2t\right)\right)\psi(x-ut).$$
Here $a$ is length-valued, $u$ velocity-valued and $t$ time-valued, so the phase is dimensionless. These formulas specify classes almost everywhere and are chosen model conventions. The covariance theorems of this page derive operator and outcome-law identities conditional on these choices; they do not derive the choice of representative convention itself. No Lorentz transformation law is claimed.

**(f) Status.** Clauses (a)-(e) record the readings of P1, P2, P5 and P6 in the
terminology of this page and fix the objects used by its theorems. They assert
no time evolution beyond what the autonomous-dynamics postulate P4 assigns
([[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]]
clause (iv)), no preparation or apparatus model, no detection model and no
empirical result. Massless particles, relativistic matter, radiation, singular
or unbounded potentials and boundary or confined realizations are separate
model assumptions with their own domains and self-adjointness statements; none
is obtained from this definition.

## Remarks

- **Why the class reading matters.** $H_{s}$ consists of almost-everywhere
  classes; the operators $Q_{j}$ and $P_{k}$ are defined on the classes of
  clause (b) and the core identities hold on the Schwartz classes. Phrases such
  as "the value of the wave function at $x$" are shorthand for a chosen
  representative and are not part of the model's state assignment.
- **Units.** The wave function, its momentum representative, the position and
  momentum spectral coordinates and the internal matrices are read in the
  units fixed by [[def-nrqm-framework-quantities-and-units]]; no numerical
  value, and in particular no value of $m$, $s$ or $\hbar$, is asserted beyond
  the exact defining constants of the current SI recorded there.
