---
id: pthm-rpm-crossed-field-drift
kind: physics-theorem
title: "Subcritical crossed fields and exact drift-frame orbits"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 6
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Exact conditional flat-space statement for constant perpendicular electric and magnetic fields in the adopted external charged test-particle model. When $|E|<c|B|$, a subluminal passive boost removes the electric field and every solution is the inverse boost of a uniform-magnetic-field orbit. A constant drift-velocity solution is singled out, but the theorem does not claim that all particle velocities equal the drift velocity. Null and supercritical crossed fields are excluded; no self-field, radiation reaction, measurement, or empirical claim is made."
empirical_premises: []
deps:
  - def-rpm-charge-spin-model
  - post-rpm-external-charge-action
  - pthm-rpm-external-charge-action-equivalence
  - pthm-rpm-charge-mass-shell
  - post-sr-massive-particle-dynamics
  - pthm-rpm-constant-magnetic-helix
  - def-em-electromagnetic-tensor
  - pthm-em-lorentz-field-transform
  - def-cross-product-in-r3
  - lem-cm-cross-product-triple-identity
  - def-lorentz-boost
  - lem-boost-is-proper-orthochronous-with-inverse
  - post-sr-inertial-covariance
  - thm-sr-proper-time-and-observer-decomposition
dependency_roles:
  def-rpm-charge-spin-model: formulation-prerequisite
  post-rpm-external-charge-action: physical-assumption
  pthm-rpm-external-charge-action-equivalence: physical-result
  pthm-rpm-charge-mass-shell: physical-result
  post-sr-massive-particle-dynamics: physical-assumption
  pthm-rpm-constant-magnetic-helix: physical-result
  def-em-electromagnetic-tensor: formulation-prerequisite
  pthm-em-lorentz-field-transform: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  lem-cm-cross-product-triple-identity: mathematical-premise
  def-lorentz-boost: mathematical-premise
  lem-boost-is-proper-orthochronous-with-inverse: mathematical-premise
  post-sr-inertial-covariance: physical-assumption
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
sources:
  references:
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Electrodynamics, §9.6, complete online textbook section"
      url: "https://phys.libretexts.org/Bookshelves/Electricity_and_Magnetism/Essential_Graduate_Physics_-_Classical_Electrodynamics_(Likharev)/09:_Special_Relativity/9.06:_Relativistic_Particles_in_Electric_and_Magnetic_Fields"
      locator: "§9.6 discussion and equations for constant electric and magnetic fields, subcritical crossed-field frame, and supercritical boundary; full relevant section inspected."
    - title: "Michael Fowler, University of Virginia, Electromagnetism Lecture 73: Particle in Constant Fields, complete lecture page"
      url: "https://galileoandeinstein.phys.virginia.edu/Elec_Mag/2022_Lectures/EM_73_Particle_Const_Fields.html"
      locator: "Complete Lecture 73: crossed-field drift and magnetic-rest-frame construction, along with constant-field orbit cases and limitations, inspected."
verification: {}
---

## Statement

In the flat SI charged-particle model with adopted action, conditional force equation, and flat massive-particle momentum model [[post-rpm-external-charge-action]], [[pthm-rpm-external-charge-action-equivalence]], [[pthm-rpm-charge-mass-shell]], and [[post-sr-massive-particle-dynamics]], let $\mathbf E=E_0e_1$, $\mathbf B=B_0e_3$, $B_0\ne0$, and $|E_0|<c|B_0|$. Use the smooth combined potential $\phi=-E_0x^1$, $\mathbf A=(-B_0x^2/2,B_0x^1/2,0)$. Define

$$\mathbf v_d=\frac{\mathbf E\times\mathbf B}{|\mathbf B|^2}=-\frac{E_0}{B_0}e_2,\qquad \gamma_d=(1-|\mathbf v_d|^2/c^2)^{-1/2}.$$

The passive Lorentz boost of velocity $\mathbf v_d$ transforms these fields to $\mathbf E'=0$, $\mathbf B'=\mathbf B/\gamma_d$. Consequently every flat-model solution in the laboratory frame is the inverse boost of the uniform-magnetic-field orbit of [[pthm-rpm-constant-magnetic-helix]] with the boosted initial data. The laboratory coordinate time increases strictly and ranges over all real values along that inverse-boosted orbit. In particular, the constant velocity $\mathbf v=\mathbf v_d$ is an exact solution because $\mathbf E+\mathbf v_d\times\mathbf B=0$. Other initial data give boosted helical orbits; the theorem does not identify every velocity with $\mathbf v_d$. The cases $|E_0|=c|B_0|$ and $|E_0|>c|B_0|$ are outside the statement.

## Facts & Assumptions

**Given:** The adopted external-field test-particle model, the named inertial SI chart, $m>0$, constant $q$, $c>0$, the constant perpendicular fields and their smooth combined potential.

[F1] [[def-rpm-charge-spin-model]]: the model has constant $m>0,q$, $P=mU$, and the flat SI field components use $F_{0i}=-E_i/c$, $F_{ij}=\epsilon_{ijk}B_k$.

[A1] [[post-rpm-external-charge-action]]: model trajectories are stationary points of the external-charge action on the local potential domain.

[F2] [[pthm-rpm-external-charge-action-equivalence]]: stationarity gives $m\nabla_UU=qF^\sharp(U)$ under the local hypotheses.

[F3] [[pthm-rpm-charge-mass-shell]]: in an inertial flat chart the coordinate force is $d\mathbf p/dt=q(\mathbf E+\mathbf v\times\mathbf B)$, and its local solutions are unique for given future-timelike initial data.

[A2] [[post-sr-massive-particle-dynamics]]: the flat massive particle has constant $m>0$ and kinetic four-momentum $P=mU$.

[F4] [[pthm-em-lorentz-field-transform]]: under the passive boost of velocity $v$, $E'=\gamma_v(E+v\times B)-\frac{\gamma_v^2}{\gamma_v+1}v(v\cdot E)/c^2$ and $B'=\gamma_v(B-v\times E/c^2)-\frac{\gamma_v^2}{\gamma_v+1}v(v\cdot B)/c^2$.

[F5] [[pthm-rpm-constant-magnetic-helix]]: for a uniform magnetic field and zero electric field, the exact future-timelike orbit with any boosted initial data is the stated global helix (or its free degeneracy), unique on common intervals.

[F6] [[thm-sr-proper-time-and-observer-decomposition]]: Lorentz boosts preserve the Minkowski timelike cone, and a future timelike chart velocity has magnitude below $c$.

[F7] [[lem-cm-cross-product-triple-identity]]: the vector triple product is $u\times(v\times w)=v(u\cdot w)-w(u\cdot v)$.

[F8] [[post-sr-inertial-covariance]]: an inertial change of description is an affine isometry of Minkowski spacetime preserving the metric and future cone.

[F9] [[def-lorentz-boost]]: a passive boost has $x'^0=\gamma(x^0-\boldsymbol\beta\cdot\mathbf x)$ and inverse $x^0=\gamma(x'^0+\boldsymbol\beta\cdot\mathbf x')$.

[F10] [[def-cross-product-in-r3]]: in the standard right-handed basis, $e_2\times e_3=e_1$ and $e_1\times e_3=-e_2$.

[F11] [[lem-boost-is-proper-orthochronous-with-inverse]]: the passive Lorentz boost $B(\boldsymbol\beta)$ is a proper orthochronous Lorentz map with inverse $B(-\boldsymbol\beta)$.

## Proof

1.1 The scalar and vector potentials are smooth. By [F1], their tensor components are $F_{01}=-E_0/c$, $F_{12}=B_0$, and the remaining independent components vanish, so they give precisely the displayed fields. Thus [A1] applies and [F2] yields the covariant force equation; under the flat massive-particle adoption [A2], [F3] gives the coordinate Lorentz law in the named inertial chart. [given, F1, A1, F2, A2, F3, algebra]

1.2 The component definition [F10] gives $\mathbf v_d=-E_0e_2/B_0$, so $|\mathbf v_d|/c=|E_0|/(c|B_0|)<1$. Also $\mathbf v_d\cdot\mathbf E=\mathbf v_d\cdot\mathbf B=0$ and, by the triple-product identity [F7], $\mathbf v_d\times\mathbf B=-\mathbf E$. Substitution in [F4] makes the electric parallel correction terms zero and gives $\mathbf E'=\gamma_d(\mathbf E+\mathbf v_d\times\mathbf B)=0$. The same component definition gives $\mathbf v_d\times\mathbf E= (E_0^2/B_0)e_3$, so the magnetic formula gives $\mathbf B'=\gamma_d(B_0-E_0^2/(B_0c^2))e_3=\mathbf B/\gamma_d$, using $1-|\mathbf v_d|^2/c^2=\gamma_d^{-2}$. [step 1.1, F4, F7, F10, algebra]

2.1 Boost any laboratory initial event and future-timelike four-velocity into the primed chart; metric and future-cone preservation keep the transformed data future timelike by [F8]. The primed field is uniform magnetic by step 1.2, so [F5] supplies its unique global orbit. The action in [A1] is unchanged by the boost: [F8] preserves the metric term, and pulling the one-form potential back by the coordinate change preserves its line integral. Thus stationary curves map to stationary curves, and [F2] gives the covariant force equation in either chart. Applying the inverse Lorentz map therefore gives a laboratory worldline with the original initial data. Conversely, any laboratory solution transforms to a primed solution and coincides with the unique [F5] orbit; hence all laboratory solutions are exactly the inverse boosts of those magnetic orbits. [step 1.2, F2, F5, F8, algebra]

2.2 With $\boldsymbol\beta=\mathbf v_d/c$, the inverse $B(-\boldsymbol\beta)$ from [F11] applied to the time-coordinate formula [F9] gives $t=\gamma_d(t'+\mathbf v_d\cdot\mathbf x'/c^2)$. Differentiating along the magnetic-frame orbit gives $dt/dt'=\gamma_d(1+\mathbf v_d\cdot\mathbf v'/c^2)$. Since its speed satisfies $|\mathbf v'|<c$ by [F5, F6], this derivative is at least $\gamma_d(1-|\mathbf v_d|/c)>0$. The positive lower bound makes $t$ strictly increasing and unbounded in both directions as $t'$ ranges over $\mathbb R$; thus the inverse-boosted curve is defined as a laboratory-time orbit for all real $t$. [step 2.1, F5, F6, F9, F11, algebra]

3.1 Finally, $\mathbf v_d\times\mathbf B=-\mathbf E$ from step 1.2, so the laboratory force in [F3] vanishes at constant $\mathbf v=\mathbf v_d$. The corresponding momentum is constant and its speed is subluminal by step 1.2. This exhibits one exact drift solution; step 2.1 shows that general initial data instead produce inverse-boosted magnetic orbits. No assertion is made about null or supercritical fields. [step 1.2, step 2.1, F3, algebra] ∎
