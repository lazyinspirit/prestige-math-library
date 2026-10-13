---
id: def-nrqm-angular-momentum-framework-angular-momentum-observables
aliases: [nrqm-angular-momentum-framework-angular-momentum-observables]
kind: definition
domain: physics
title: "Orbital, spin and total angular momentum of the massive spin-s model: assigned sharp observables, units and readings"
status: draft
origin: session
dependency_level: 9
deps: [def-axiom-of-choice, def-countable-choice, def-dependent-choice, def-nrqm-framework-quantities-and-units, def-nrqm-kinematics-framework-massive-spin-s-model, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-state-geometry-framework-state-space, def-nrqm-state-geometry-pure-mixed-states-and-purity, def-self-adjoint-positive-unitary-and-normal-operator, def-strongly-continuous-one-parameter-unitary-group, def-symmetric-self-adjoint-and-essentially-self-adjoint, lem-nrqm-angular-momentum-product-flow-generator, lem-nrqm-angular-momentum-su2-lift-of-the-rotation-action, lem-nrqm-angular-momentum-orbital-casimir-identity, lem-nrqm-kinematics-componentwise-position-and-momentum, lem-nrqm-symmetries-rotation-generators-on-schwartz-classes, post-nrqm-framework-autonomous-dynamics, post-nrqm-framework-identical-particles-and-spin, post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle, post-nrqm-framework-observable-and-probability, post-nrqm-framework-state-and-composition, prop-nrqm-orbital-and-spin-finite-spin-matrices, thm-bounded-borel-pvm-integral, thm-nrqm-orbital-and-spin-sphere-onb, thm-nrqm-orbital-and-spin-orbital-self-adjoint-generators]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  def-self-adjoint-positive-unitary-and-normal-operator: mathematical-premise
  def-strongly-continuous-one-parameter-unitary-group: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  lem-nrqm-angular-momentum-product-flow-generator: mathematical-premise
  lem-nrqm-angular-momentum-su2-lift-of-the-rotation-action: mathematical-premise
  lem-nrqm-angular-momentum-orbital-casimir-identity: mathematical-premise
  lem-nrqm-kinematics-componentwise-position-and-momentum: mathematical-premise
  lem-nrqm-symmetries-rotation-generators-on-schwartz-classes: mathematical-premise
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  thm-bounded-borel-pvm-integral: mathematical-premise
  thm-nrqm-orbital-and-spin-sphere-onb: mathematical-premise
  thm-nrqm-orbital-and-spin-orbital-self-adjoint-generators: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The angular momentum readings of the massive spin-s particle model: the orbital generators of the spatial coordinate rotations, the internal spin matrices of the spin assignment P6, and their self-adjoint sum, each read as an assigned sharp observable of the framework with units of action, together with the declaration that the internal factor is not a spatial object. The item fixes terminology and readings of P1, P2, P4, P5 and P6; it asserts no dynamics, no magnetic coupling, no apparatus or detection model, no spin-orbit or relativistic structure and no empirical identification of any laboratory quantity with the operators named."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Chapter 7, Sections 7.2 and 7.4, printed pages 145-154 and 158-164 (PDF pages 153-162 and 166-172): orbital angular momentum, spin as an intrinsic angular momentum, and the total angular momentum J of a particle with spin"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 9 'Angular Momentum', Section 1.2, printed pages 6-9 (properties of the orbital angular momentum operators) and Section 2, printed pages 11-18 (the algebraic theory of angular momentum and its multiplets)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/e765f050b2fd50a9d87d2ae801e9c52f_MIT8_05F13_Chap_09.pdf"
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Sections 4.1-4.1.2, printed pages 96-103 (PDF pages 99-106): angular momentum as the generator of rotations, its algebra and the l,m quantum numbers"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
verification:
  precheck: n/a
---
## Definition

**(a) Adopted readings.** Adopt the state and composition postulate P1, the
observable and probability postulate P2, the autonomous-dynamics postulate P4,
the kinematics and massive-particle model postulate P5 and the internal-factor
assignment of the identical-particle and spin postulate P6, all read for the
spin-$s$ model of [[def-nrqm-kinematics-framework-massive-spin-s-model]] with
mass parameter $m>0$, spin label $s\in\{0,\tfrac12,1,\tfrac32,\dots\}$ and
$r=2s+1$
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-autonomous-dynamics]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]],
[[post-nrqm-framework-identical-particles-and-spin]],
[[def-nrqm-state-geometry-framework-state-space]],
[[def-nrqm-observables-framework-observable-and-outcome-law]]). Let
$H_{s}=L^{2}(\mathbb R^{3};\mathbb C^{r})$ be the model's state space with
componentwise operators $Q_{j},P_{k}$, and let $\mathcal S^{(r)}$ be its
componentwise Schwartz class
([[lem-nrqm-kinematics-componentwise-position-and-momentum]]). Units are
those of [[def-nrqm-framework-quantities-and-units]]; the unit of angular
momentum is the unit of action (J$\,$s).

**(b) Orbital angular momentum.** For $i=1,2,3$ let $L_{i}$ be the
self-adjoint operator on $H_{s}$ of
[[lem-nrqm-symmetries-rotation-generators-on-schwartz-classes]], the Stone
generator of the coordinate rotation group $t\mapsto U(R_{i}(t))$, so that
$U(R_{i}(t))=e^{-itL_{i}/\hbar}$ and, on the Schwartz class,
$$L_{i}\psi=\sum_{j,k=1}^{3}\varepsilon_{ijk}\,Q_{j}P_{k}\psi$$
([[lem-nrqm-symmetries-rotation-generators-on-schwartz-classes]] clause (b),
[[def-strongly-continuous-one-parameter-unitary-group]]). The model reads
$(L_{i},\mathrm{J\,s})$ as an **assigned sharp observable**, called the
$i$-th **orbital angular momentum** of the model, with outcome law
$\mu^{L_{i}}_{\rho}$ in a preparation $\rho$
([[def-nrqm-observables-framework-observable-and-outcome-law]] clauses (a),(b),
[[def-nrqm-state-geometry-pure-mixed-states-and-purity]]). The operators
$L_{i}$ act on the spatial factor only; their reading on the angular degrees
of freedom is the one supplied by the sphere operators
[[thm-nrqm-orbital-and-spin-orbital-self-adjoint-generators]] and
[[thm-nrqm-orbital-and-spin-sphere-onb]], and the finite-blocks identity
$\sum_{i}L_{i}^{2}F=\hbar^{2}l(l+1)F$ on the harmonic span is the content of a
separate lemma of this page
([[lem-nrqm-angular-momentum-orbital-casimir-identity]]).

**(c) Spin angular momentum.** Let $S_{i}=\hbar J_{i}$ be the internal
operators of [[def-nrqm-kinematics-framework-massive-spin-s-model]] clause
(c), the matrix actions $\bigl(S_{i}f\bigr)_{l}=\hbar\sum_{m}(J_{i})_{lm}f_{m}$
of the self-adjoint matrices of
[[prop-nrqm-orbital-and-spin-finite-spin-matrices]]. The model reads
$(S_{i},\mathrm{J\,s})$ as an assigned sharp observable, the $i$-th **spin
angular momentum**; on the internal factor,
$$[S_{i},S_{j}]=i\hbar\sum_{k=1}^{3}\varepsilon_{ijk}S_{k},\qquad S^{2}:=S_{x}^{2}+S_{y}^{2}+S_{z}^{2}=\hbar^{2}s(s+1)I$$
([[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clauses (a),(b),(c),
[[post-nrqm-framework-identical-particles-and-spin]] clause (ii)). The
**ladder** operators $S_{\pm}:=S_{x}\pm iS_{y}$ and the finite projections on
the basis vectors $e_{m}$ are structural objects of the internal factor, not
assigned sharp observables. They satisfy $S_+^*=S_-$; for $s>0$ they
are not self-adjoint, since $S_+e_{-s}=\hbar\sqrt{2s}\,e_{-s+1}\ne0$
whereas $S_-e_{-s}=0$, while for $s=0$ both vanish and are self-adjoint.
For $s=\tfrac12$
one has $S_{i}=\tfrac{\hbar}{2}\sigma_{i}$ in the Pauli matrices
([[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clause (e)). The internal
factor is a finite-dimensional bookkeeping factor: it is not a spatial
coordinate, not a rotating body and not a relativistic spinor, and the model
assigns no position or worldline to it.

**(d) Total angular momentum.** For each $i$ let
$$J_{i}^{\mathrm{tot}}:=L_{i}+S_{i},\qquad D(J_{i}^{\mathrm{tot}}):=D(L_{i}),$$
the self-adjoint sum of
[[lem-nrqm-angular-momentum-su2-lift-of-the-rotation-action]] clause (c)
(well defined because $S_{i}$ is bounded and strongly commutes with $L_{i}$;
[[lem-nrqm-angular-momentum-product-flow-generator]] clause (a),
[[def-symmetric-self-adjoint-and-essentially-self-adjoint]]). The model reads
$(J_{i}^{\mathrm{tot}},\mathrm{J\,s})$ as an assigned sharp observable, the
$i$-th **total angular momentum**; its flow is the coordinate subgroup
$t\mapsto U_{s}(A_{i}(t))$ of the lifted rotation action, using the physical-axes cover $\rho(W)=C^{-1}\rho_0(W)C$ defined in that lemma (rather than the literal quaternion-coordinate cover $\rho_0$),
$U_{s}(A_{i}(t))=e^{-itJ_{i}^{\mathrm{tot}}/\hbar}$
([[lem-nrqm-angular-momentum-su2-lift-of-the-rotation-action]] clauses (b),(c)).

**(e) Status and scope.** Clauses (a)-(d) fix the angular momentum vocabulary
of this page within P1, P2, P4, P5 and P6 and the cited readings. No new
physical assumption is added; in particular no magnetic coupling, no
spin-orbit interaction, no SU(2) gauge structure and no anomaly is
introduced. Whether a laboratory angular momentum measurement is described by
one of the assigned pairs $(L_{i},\mathrm{J\,s})$, $(S_{i},\mathrm{J\,s})$ or
$(J_{i}^{\mathrm{tot}},\mathrm{J\,s})$ is a tested identification with
uncertainty under the preparation and apparatus postulate P7, not a
consequence of this definition; no measurement procedure, apparatus,
resolution or empirical value is supplied here. Antiunitary symmetries,
superselection rules and symmetries of preparations as opposed to dynamics
are outside the definition.

## Remarks

- **Why the sum is a definition and not a theorem.** The operator identity
  $J_{i}^{\mathrm{tot}}=L_{i}+S_{i}$ is self-adjoint on $D(L_i)$ because
  $S_i$ is bounded self-adjoint; the adjoint-domain argument in
  [[lem-nrqm-angular-momentum-product-flow-generator]] Proof steps 1.1,
  1.3 and 2.1 uses no commutation hypothesis for this conclusion.
  Strong commutation identifies the flow of the sum with the product of
  the two flows; that commutation and product-flow identity are proved in
  [[lem-nrqm-angular-momentum-su2-lift-of-the-rotation-action]], and this
  definition only names the resulting assigned observable.
- **Orbital and spin are distinct.** $L_{i}$ acts on the spatial factor and
  $S_{i}$ on the internal factor; no term of this definition identifies the
  spin with a rotation of a spatial body, and the page proves no spin-orbit
  coupling.
