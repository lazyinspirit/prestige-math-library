---
id: pthm-nrqm-angular-momentum-zeeman-precession
aliases: [nrqm-angular-momentum-zeeman-precession]
kind: physics-theorem
domain: physics
title: "Spin precession and the Zeeman splitting in a uniform magnetic field: Larmor angular frequency and the conservation of one component"
status: draft
origin: session
dependency_level: 11
deps: [def-axiom-of-choice, def-bounded-linear-operator, def-countable-choice, def-nrqm-angular-momentum-framework-angular-momentum-observables, def-nrqm-autonomous-dynamics-framework-evolution, def-nrqm-framework-quantities-and-units, def-nrqm-kinematics-framework-massive-spin-s-model, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-state-geometry-framework-state-space, def-nrqm-state-geometry-pure-mixed-states-and-purity, def-nrqm-symmetries-framework-symmetry-groups-and-conservation, def-operator-norm, def-strongly-continuous-one-parameter-unitary-group, def-trace-class-operator, lem-exponential-series-of-a-bounded-operator, lem-nrqm-angular-momentum-product-flow-generator, lem-nrqm-composites-density-and-scalar-spectral-probability, lem-nrqm-kinematics-componentwise-position-and-momentum, lem-nrqm-observables-moments-and-variance, post-nrqm-angular-momentum-magnetic-moment-coupling, post-nrqm-framework-autonomous-dynamics, post-nrqm-framework-identical-particles-and-spin, post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle, post-nrqm-framework-observable-and-probability, post-nrqm-framework-state-and-composition, prop-nrqm-orbital-and-spin-finite-spin-matrices, pthm-nrqm-symmetries-generator-conservation, thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators, thm-nrqm-magnetic-and-detection-conserved-spectral-probability-laws]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-countable-choice: mathematical-premise
  def-nrqm-angular-momentum-framework-angular-momentum-observables: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  def-nrqm-symmetries-framework-symmetry-groups-and-conservation: formulation-prerequisite
  def-operator-norm: mathematical-premise
  def-strongly-continuous-one-parameter-unitary-group: mathematical-premise
  def-trace-class-operator: mathematical-premise
  lem-exponential-series-of-a-bounded-operator: mathematical-premise
  lem-nrqm-angular-momentum-product-flow-generator: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  lem-nrqm-kinematics-componentwise-position-and-momentum: mathematical-premise
  lem-nrqm-observables-moments-and-variance: mathematical-premise
  post-nrqm-angular-momentum-magnetic-moment-coupling: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  pthm-nrqm-symmetries-generator-conservation: physical-result
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  thm-nrqm-magnetic-and-detection-conserved-spectral-probability-laws: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A conditional consequence of the postulates P1, P2, P4, P5, P6 and of the adopted effective magnetic-moment coupling, for a uniform static magnetic field along the third axis of a declared inertial frame: self-adjointness and factorization of the Zeeman energy operator, conservation of the spin component along the field, and Larmor precession of the transverse spin expectations with angular frequency gamma_s B_z. The item concerns the declared model only; it excludes inhomogeneous and time-dependent fields, radiation and relaxation, asserts no measured precession frequency or gyromagnetic ratio, and identifies no apparatus."
empirical_premises: []
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 7.4, printed pages 168-169 (PDF pages 176-177): magnetic precession of a spin in a uniform field and the Larmor frequency"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 7 'Two State Systems', Sections 1-3, chapter pages 1-6 (PDF pages 1-6 of 22): spin precession in a uniform magnetic field and the precession angular frequency"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/7c376a3b5b27e5ea586a7e37b85a05d3_MIT8_05F13_Chap_07.pdf"
verification:
  precheck: pass
---
## Statement

Adopt the state and composition postulate P1, the observable and probability
postulate P2, the autonomous-dynamics postulate P4, the kinematics and
massive-particle model postulate P5 and the internal-factor assignment of the
spin postulate P6, read for the massive spin-$s$ model of
[[def-nrqm-kinematics-framework-massive-spin-s-model]] with mass parameter
$m>0$ and spin label $s$, together with the effective magnetic-moment coupling
adopted in [[post-nrqm-angular-momentum-magnetic-moment-coupling]] and the
angular momentum readings of
[[def-nrqm-angular-momentum-framework-angular-momentum-observables]], and
assume the Axiom of Choice and the Axiom of Countable Choice
([[def-axiom-of-choice]], [[def-countable-choice]]). Fix a real constant
$B_{z}\in\mathbb R$ and use the uniform static field profile
$\mathbf B(x):=(0,0,B_{z})$, so that the Zeeman energy operator of the
postulate is
$$H_{Z}=H_{0}-\gamma_{s}B_{z}S_{3},\qquad H_{0}=\frac{1}{2m}\sum_{k=1}^{3}P_{k}^{2},\qquad D(H_{Z})=W^{2,2}(\mathbb R^{3};\mathbb C^{r}),$$
with flow $U_{Z}(t)=e^{-itH_{Z}/\hbar}$, and put $\omega:=\gamma_{s}B_{z}$
with unit $\mathrm{s^{-1}}$. For a unit vector $\psi\in H_{s}$ put
$\psi(t):=U_{Z}(t)\psi$ and $\langle S_{i}\rangle(t):=\langle
S_{i}\psi(t),\psi(t)\rangle$. Then:

(a) $H_{Z}$ is self-adjoint on $D(H_{Z})$ and
$$U_{Z}(t)=e^{-itH_{0}/\hbar}\,e^{it\gamma_{s}B_{z}S_{3}/\hbar}\qquad(t\in\mathbb R),$$
so in particular the transverse means satisfy, for every $t$,
$$\langle S_{1}\rangle(t)=\cos(\omega t)\langle S_{1}\rangle(0)+\sin(\omega t)\langle S_{2}\rangle(0),\qquad \langle S_{2}\rangle(t)=\cos(\omega t)\langle S_{2}\rangle(0)-\sin(\omega t)\langle S_{1}\rangle(0),$$
and the transverse vector $\bigl(\langle S_{1}\rangle(t),\langle S_{2}\rangle(t)\bigr)$
is the rotation of $\bigl(\langle S_{1}\rangle(0),\langle S_{2}\rangle(0)\bigr)$
by the angle $-\omega t$ in the $(1,2)$-plane;

(b) the component along the field is conserved: $S_{3}U_{Z}(t)=U_{Z}(t)S_{3}$
and $\langle S_{3}\rangle(t)=\langle S_{3}\rangle(0)$ for every unit $\psi$
and every $t$; more generally the outcome law of $S_{3}$ is time-independent
in every preparation;

(c) the conjugation identities
$$e^{itH_{Z}/\hbar}S_{1}e^{-itH_{Z}/\hbar}=\cos(\omega t)S_{1}+\sin(\omega t)S_{2},\qquad e^{itH_{Z}/\hbar}S_{2}e^{-itH_{Z}/\hbar}=\cos(\omega t)S_{2}-\sin(\omega t)S_{1}$$
hold as bounded operator identities, and with $S^{2}=\hbar^{2}s(s+1)I$
(the Casimir operator of the model) also $S^{2}U_{Z}(t)=U_{Z}(t)S^{2}$;

(d) **Scope.** The statement is conditional on P1, P2, P4, P5, P6 and the
adopted coupling; it concerns the uniform static field $\mathbf B=(0,0,B_{z})$
with $B_{z}\in\mathbb R$ and the declared isolated model. It excludes
inhomogeneous and time-dependent fields, spin-dependent spatial potentials,
radiation, relaxation and environment coupling, asserts no measured
precession frequency and no measured gyromagnetic parameter, and identifies
no apparatus: $\omega=\gamma_{s}B_{z}$ is a model quantity computed from
assigned model parameters.

## Facts & Assumptions

**Given:** The postulates P1, P2, P4, P5 and P6 and the magnetic-moment
postulate in the stated readings; the Axiom of Choice and the Axiom of
Countable Choice; the model parameters $m>0$, $s$, $r=2s+1$ and
$\gamma_{s}\in\mathbb R$; the field constant $B_{z}\in\mathbb R$; the
operators $H_{0}$, $H_{Z}$, $S_{i}$, $S^{2}$; a unit vector $\psi$; real
$t,\theta$.

[F1] **Free operator and componentwise structure.** $H_{0}$ is self-adjoint
on $D(H_{0})=W^{2,2}(\mathbb R^{3};\mathbb C^{r})$ with flow
$e^{-itH_{0}/\hbar}$; its terms $P_{k}$ act componentwise and commute with
every fibrewise matrix action, which preserves $W^{2,2}$
([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]]
clause (b) applied componentwise,
[[lem-nrqm-kinematics-componentwise-position-and-momentum]] clause (a),
[[def-nrqm-autonomous-dynamics-framework-evolution]] clause (b)).

[F2] **Magnetic-moment postulate.** With $\gamma_{s}\in\mathbb R$ and a real
bounded measurable profile $\mathbf B$, the Zeeman operator
$H_{Z}=H_{0}-\gamma_{s}\sum_{i}S_{i}B_{i}(Q)$ with domain $D(H_{0})$ is a
bounded self-adjoint perturbation of $H_{0}$, of unit joule, and
$t\mapsto e^{-itH_{Z}/\hbar}$ is its strongly continuous unitary group in the
reading of P4
([[post-nrqm-angular-momentum-magnetic-moment-coupling]] clauses (i),(ii),
[[def-nrqm-observables-framework-observable-and-outcome-law]],
[[def-nrqm-state-geometry-framework-state-space]]).

[F3] **Product flow.** If a bounded self-adjoint $B$ commutes with the flow
$e^{iuA}$ of a self-adjoint $A$, then $A+B$ with domain $D(A)$ is
self-adjoint and $e^{-it(A+B)/\hbar}=e^{-itA/\hbar}e^{-itB/\hbar}$ for all
$t$ ([[lem-nrqm-angular-momentum-product-flow-generator]] clauses (a),(c)).

[F4] **Spin algebra and the ladder conjugation.** On the internal factor,
$[S_{3},S_{\pm}]=\pm\hbar S_{\pm}$ for $S_{\pm}=S_{1}\pm iS_{2}$,
$S_{1}=\tfrac12(S_{+}+S_{-})$, $S_{2}=\tfrac1{2i}(S_{+}-S_{-})$ and
$S^{2}=\hbar^{2}s(s+1)I$; for the bounded exponential,
$e^{i\theta S_{3}/\hbar}S_{\pm}e^{-i\theta S_{3}/\hbar}=e^{\pm i\theta}S_{\pm}$
([[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clauses (a),(b),(c),
[[lem-exponential-series-of-a-bounded-operator]],
[[def-operator-norm]]).

[F5] **Conserved law from commutation.** If a bounded self-adjoint $S$
satisfies $SK\subseteq KS$ for a self-adjoint $K$, then
$Se^{-itK/\hbar}=e^{-itK/\hbar}S$ for all $t$
([[thm-nrqm-magnetic-and-detection-conserved-spectral-probability-laws]]
clause (a')); and if an assigned sharp observable $A$ satisfies
$e^{-isA/\hbar}U(t)=U(t)e^{-isA/\hbar}$ for all $s,t$, then its outcome law is
time-independent in every preparation, with conserved mean and second moment
on $D(A)$
([[pthm-nrqm-symmetries-generator-conservation]] clauses (a),(b),
[[lem-nrqm-observables-moments-and-variance]],
[[lem-nrqm-composites-density-and-scalar-spectral-probability]],
[[def-trace-class-operator]],
[[def-nrqm-state-geometry-pure-mixed-states-and-purity]]).

## Proof

**Proof technique:** direct; write the Zeeman operator as a bounded
perturbation commuting with the free flow, factor its evolution, conjugate the
spin components by the resulting internal rotation, and read conservation of
the field component from the commutation criterion.

**Given:** The data of the statement and [F1]-[F5].

1.1 [Self-adjointness and factorization] The perturbation $B_{0}:=-\gamma_{s}B_{z}S_{3}$ is bounded self-adjoint by [F4]; by [F1] it commutes with every element of the free flow $e^{-itH_{0}/\hbar}$ because it is a fibrewise matrix action commuting with the componentwise free operator; hence [F3] applies with $A:=H_{0}$ and $B:=B_{0}$, so $H_{Z}=H_{0}+B_{0}$ is self-adjoint on $D(H_{0})$ and $e^{-itH_{Z}/\hbar}=e^{-itH_{0}/\hbar}e^{it\gamma_{s}B_{z}S_{3}/\hbar}$ for every $t$. [F1, F2, F3, F4, algebra]

1.2 [Conjugation of the transverse components] By [F4] the map $\theta\mapsto g(\theta):=e^{i\theta S_{3}/\hbar}S_{+}e^{-i\theta S_{3}/\hbar}$ satisfies $g'(\theta)=e^{i\theta S_{3}/\hbar}(i/\hbar)[S_{3},S_{+}]e^{-i\theta S_{3}/\hbar}=ig(\theta)$ by the derivative formula of the bounded exponential, so $g(\theta)=e^{i\theta}S_{+}$; conjugating $S_{-}$ gives $e^{-i\theta}S_{-}$; taking real and imaginary parts via [F4] yields $e^{i\theta S_{3}/\hbar}S_{1}e^{-i\theta S_{3}/\hbar}=\cos\theta\,S_{1}-\sin\theta\,S_{2}$ and $e^{i\theta S_{3}/\hbar}S_{2}e^{-i\theta S_{3}/\hbar}=\sin\theta\,S_{1}+\cos\theta\,S_{2}$. [F4, algebra]

2.1 [Transverse means] By step 1.1, $U_{Z}(t)^{*}=e^{-it\gamma_{s}B_{z}S_{3}/\hbar}e^{itH_{0}/\hbar}$, so using the commutation of $S_{1},S_{2}$ with $H_{0}$ from [F1], $U_{Z}(t)^{*}S_{1}U_{Z}(t)=e^{-i\omega tS_{3}/\hbar}S_{1}e^{i\omega tS_{3}/\hbar}=\cos(\omega t)S_{1}+\sin(\omega t)S_{2}$ and $U_{Z}(t)^{*}S_{2}U_{Z}(t)=\cos(\omega t)S_{2}-\sin(\omega t)S_{1}$ by step 1.2 with $\theta=-\omega t$; taking expectations in the unit vector $\psi$ gives the two displayed mean identities, and the pair transformation is the rotation by $-\omega t$; this is (a) and the conjugation identities of (c). [step 1.1, step 1.2, F1, algebra]

2.2 [Conservation of the field component] By [F4] the bounded self-adjoint $S_{3}$ commutes with $H_{0}$ and with itself, hence $S_{3}H_{Z}\subseteq H_{Z}S_{3}$ on $D(H_{Z})$; [F5] gives $S_{3}U_{Z}(t)=U_{Z}(t)S_{3}$ for every $t$, so $\langle S_{3}\rangle(t)=\langle S_{3}\rangle(0)$ for every unit $\psi$, and applying the second part of [F5] to the assigned sharp observable $(S_{3},\mathrm{J\,s})$ of [[def-nrqm-angular-momentum-framework-angular-momentum-observables]] clause (c) gives the time-independence of the law of $S_{3}$ in every preparation; moreover $S^{2}$ is a scalar operator by [F4] and commutes with $U_{Z}(t)$. This is (b) and the Casimir statement of (c). [step 1.1, F4, F5, algebra]

3.1 [Assembly and scope] Steps 1.1 and 2.1 prove (a) and the conjugation identities of (c), and step 2.2 proves (b) and the Casimir commutation of (c); only the uniform static profile, the componentwise free operator and the internal matrices were used, no inhomogeneous or time-dependent field, radiation, relaxation, apparatus or empirical input entered, which is the scope statement (d). [step 1.1, step 2.1, step 2.2, F2] ∎

## Remarks

- **Sign and naming of the angular frequency.** The model's precession
  angular frequency is $\omega=\gamma_{s}B_{z}$, a signed quantity; the
  transverse vector rotates by $-\omega t$. Physical conventions differing by
  the sign of $\gamma_{s}$ or by the orientation of the field axis differ by
  the sign of $\omega$ and by the sense of the rotation, not by the content of
  the theorem.
- **Energy eigenvalues of the internal factor.** Combining this theorem with
  the spin spectrum page, the internal factor of the uniform-field model has
  the energy offsets $-\gamma_{s}B_{z}\hbar m$, $m=-s,\dots,s$, added to the
  free kinetic energy; the theorem does not assert a spectroscopic
  measurement or the absence of additional structure.
