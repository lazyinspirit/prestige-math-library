---
id: post-nrqm-angular-momentum-magnetic-moment-coupling
aliases: [ nrqm-angular-momentum-magnetic-moment-coupling ]
kind: postulate
domain: physics
title: "Effective magnetic-moment coupling of the finite-spin model:
  gyromagnetic parameter, magnetic moment and Zeeman energy operator"
status: draft
origin: session
dependency_level: 9
deps:
  [
    def-adjoint-of-a-densely-defined-unbounded-operator,
    def-axiom-of-choice,
    def-countable-choice,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-kinematics-framework-massive-spin-s-model,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-nrqm-state-geometry-framework-state-space,
    def-symmetric-self-adjoint-and-essentially-self-adjoint,
    lem-nrqm-kinematics-componentwise-position-and-momentum,
    post-nrqm-framework-autonomous-dynamics,
    post-nrqm-framework-identical-particles-and-spin,
    post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-state-and-composition,
    prop-nrqm-orbital-and-spin-finite-spin-matrices,
    thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators
  ]
dependency_roles:
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  lem-nrqm-kinematics-componentwise-position-and-momentum: mathematical-premise
  post-nrqm-framework-autonomous-dynamics: formulation-prerequisite
  post-nrqm-framework-identical-particles-and-spin: formulation-prerequisite
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: formulation-prerequisite
  post-nrqm-framework-observable-and-probability: formulation-prerequisite
  post-nrqm-framework-state-and-composition: formulation-prerequisite
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The effective magnetic-moment coupling of the framework's
  massive spin-s particle model in a declared inertial frame, for a prescribed
  real bounded measurable magnetic field profile and a declared real
  gyromagnetic parameter gamma_s: the magnetic moment mu = gamma_s S with unit J
  T^-1, the Zeeman energy operator H_Z on the domain of the free operator, its
  units and the autonomous unitary evolution assigned to it by P4, and the
  status of gamma_s and of the static field profile as empirical or
  externally prescribed model inputs. The item asserts no Maxwell equation, no
  source model, no derivation of gamma_s from charge and mass, no spin-orbit or
  relativistic correction, no time-dependent or open-system dynamics and no
  measured value; it is a model
  assumption adopted on this page only."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 7.4,
        printed pages 158-169 (PDF pages 166-177): spin angular momentum, the
        magnetic moment of a spin-half particle, the Stern-Gerlach coupling and
        magnetic precession"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 2 'Spin
        One-Half, Bras, Kets, and Operators', Section 1, printed pages 1-7 (the
        magnetic dipole in a nonuniform magnetic field and the two-peak
        Stern-Gerlach idealization) and Section 4, printed pages 16-19 (the spin
        operator in an arbitrary direction and its two eigenvalues)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/a56c316e4ec\
        548d8bd0a554fac9a74e8_MIT8_05F13_Chap_02.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 7 'Two
        State Systems', Sections 2-3, chapter pages 2-6 (spin precession in a
        uniform magnetic field and the precession frequency)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/7c376a3b5b2\
        7e5ea586a7e37b85a05d3_MIT8_05F13_Chap_07.pdf"
verification:
  precheck: n/a
---
## Postulate

Adopt as a physical assumption of the framework, for the declared massive
spin-$s$ particle model of
[[def-nrqm-kinematics-framework-massive-spin-s-model]] and only within the
scope stated below, the following **effective magnetic-moment coupling**
([[def-nrqm-framework-quantities-and-units]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]],
[[post-nrqm-framework-identical-particles-and-spin]]).

**(i) Gyromagnetic parameter and magnetic moment.** For the declared spin
label $s$ assign a real **gyromagnetic parameter** $\gamma_{s}$, with unit
$\mathrm{s^{-1}\,T^{-1}}$, and define the **magnetic moment** of the model as
the internal-factor operator
$$\boldsymbol\mu:=\gamma_{s}\mathbf S=(\gamma_{s}S_{1},\gamma_{s}S_{2},\gamma_{s}S_{3}),$$
with unit $\mathrm{J\,T^{-1}}$. Here $\mathbf S=(S_{1},S_{2},S_{3})$ are the
spin operators of [[prop-nrqm-orbital-and-spin-finite-spin-matrices]] read on
the internal factor as in
[[def-nrqm-kinematics-framework-massive-spin-s-model]] clause (c). The
parameter $\gamma_{s}$ is an empirical model parameter of the species: it is
part of the declared model data, with uncertainty, and it is not derived from
$s$, from the mass parameter $m$ or from the charge of the particle; no
relation between $\gamma_{s}$ and any other species parameter is asserted by
this postulate.

**(ii) Prescribed field and Zeeman energy operator.** Let
$\mathbf B:\mathbb R^{3}\to\mathbb R^{3}$ be a real bounded measurable
vector field, the **prescribed magnetic field profile**, with components
$B_{i}$ in tesla, entering the model as externally prescribed data
([[def-nrqm-state-geometry-framework-state-space]],
[[lem-nrqm-kinematics-componentwise-position-and-momentum]]); in the
declared inertial frame the model adopts the **Zeeman energy operator**
$$H_{Z}:=H_{0}+M_{W},\qquad H_{0}:=\frac{1}{2m}\sum_{k=1}^{3}P_{k}^{2},\qquad M_{W}f:=-\sum_{i=1}^{3}\gamma_{s}B_{i}(\cdot)\bigl(S_{i}f\bigr)(\cdot),$$
on the componentwise domain
$D(H_{Z}):=W^{2,2}(\mathbb R^{3};\mathbb C^{r})$, the domain of $H_{0}$
(componentwise, [[lem-nrqm-kinematics-componentwise-position-and-momentum]];
$\sum_{k}P_{k}^{2}$ is the componentwise free operator with that domain by
[[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]
clause (b) applied to each component). The added term $M_{W}$ is bounded with
$\|M_{W}\|\le|\gamma_{s}|\sum_{i}\|B_{i}\|_{\infty}\max_{i}\|S_{i}\|$;
its matrix value is Hermitian almost everywhere since $B_i$ and
$\gamma_s$ are real and each finite spin matrix is self-adjoint. Integrating
the fibrewise inner-product identity gives $M_W^*=M_W$ on $H_s$.
For completeness, if $y\in D((H_0+M_W)^*)$ and $z=(H_0+M_W)^*y$, then
$\langle H_0x,y\rangle=\langle x,z-M_Wy\rangle$ for every $x\in D(H_0)$.
Self-adjointness of $H_0$ gives $y\in D(H_0)$ and $H_0y=z-M_Wy$;
the reverse adjoint inclusion follows from symmetry. Thus $H_Z=H_Z^*$
on the unchanged domain
([[def-adjoint-of-a-densely-defined-unbounded-operator]],
[[def-symmetric-self-adjoint-and-essentially-self-adjoint]]), with unit
joule, and the assignment $t\mapsto e^{-itH_{Z}/\hbar}$ is
a strongly continuous one-parameter unitary group read in the
autonomous-dynamics postulate P4
([[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-autonomous-dynamics]],
[[def-nrqm-observables-framework-observable-and-outcome-law]]). The profile
$\mathbf B$ is a model input; the items of this page assert neither the
Maxwell equations nor a source or boundary realization of $\mathbf B$, and
the boundedness of $\mathbf B$ is an explicit hypothesis, not a general
property of magnetic fields.

**(iii) What is assumed and what is not.** (a) The coupling
$-\boldsymbol\mu\cdot\mathbf B(Q)$ is an **effective interaction**: it is
adopted, not derived from the spin representation P6, from the
minimal-coupling postulate P5a of the framework or from classical
electromagnetism. (b) No value of $\gamma_{s}$ and no comparison with
measured gyromagnetic ratios or $g$-factors is made here. (c) No spin-orbit
coupling, no fine or hyperfine structure, no relativistic correction and no
radiation reaction is included. (d) A time-dependent field profile requires
its own domain and evolution hypotheses and is outside this postulate. (e)
The internal factor is not a spatial current distribution and $\boldsymbol\mu$
is not asserted to arise from a rotating charge distribution.

(iv) **Status.** This postulate is an adopted model assumption with the
physical scope above; it is motivated by and formulated after the cited
sources, which treat the coupling as a model input, and no deduction of it
from the framework's other postulates is claimed.

## Remarks

- **Why a bounded profile.** The domain statement is that of the free
  operator on $W^{2,2}$; it does not cover linearly growing fields, point
  dipoles or fields whose components leave $L^{\infty}$, each of which would
  require a separate form-domain or resolvent analysis.
- **Units check.** $\gamma_{s}$ in $\mathrm{s^{-1}\,T^{-1}}$ times $S_{i}$ in
  $\mathrm{J\,s}$ gives $\mathrm{J\,T^{-1}}$ for $\mu_{i}$, and
  $\mu_{i}B_{i}$ in $\mathrm{J\,T^{-1}\cdot T}=\mathrm{J}$; the phase
  $H_{Z}t/\hbar$ is dimensionless. The parameter $\gamma_{s}$ is read in the
  conventions of [[def-nrqm-framework-quantities-and-units]]; no numerical
  value is asserted and, in particular, no exact value of any $g$-factor is
  assumed.
