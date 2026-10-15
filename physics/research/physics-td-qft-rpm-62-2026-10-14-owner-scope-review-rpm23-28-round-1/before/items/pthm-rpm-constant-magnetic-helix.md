---
id: pthm-rpm-constant-magnetic-helix
kind: physics-theorem
title: "Exact relativistic helix in a uniform magnetic field"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Exact global coordinate-time solutions of the adopted flat external-field charged test-particle model for a uniform constant magnetic field. The force law is conditional on the local RPM action postulate and its draft equivalence and mass-shell suppliers. The result describes model orbits only, with no self-field, radiation reaction, measurement, or empirical claim."
empirical_premises: []
deps:
  - def-rpm-charge-spin-model
  - post-rpm-external-charge-action
  - pthm-rpm-external-charge-action-equivalence
  - pthm-rpm-charge-mass-shell
  - def-countable-choice
  - def-em-electromagnetic-tensor
  - post-sr-massive-particle-dynamics
  - pthm-sr-momentum-and-four-force
  - thm-sr-proper-time-and-observer-decomposition
  - def-cross-product-in-r3
  - def-sine-and-cosine-by-power-series
  - thm-sine-and-cosine-derivatives
  - thm-real-power-continuity-and-derivatives
  - cor-zero-derivative-implies-constant
  - thm-algebra-of-derivatives
dependency_roles:
  thm-algebra-of-derivatives: mathematical-premise
  def-rpm-charge-spin-model: formulation-prerequisite
  post-rpm-external-charge-action: physical-assumption
  pthm-rpm-external-charge-action-equivalence: physical-result
  pthm-rpm-charge-mass-shell: physical-result
  def-countable-choice: mathematical-premise
  def-em-electromagnetic-tensor: formulation-prerequisite
  post-sr-massive-particle-dynamics: physical-assumption
  pthm-sr-momentum-and-four-force: physical-result
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-cross-product-in-r3: mathematical-premise
  def-sine-and-cosine-by-power-series: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
sources:
  references:
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Electrodynamics, §9.6, complete online textbook section"
      url: "https://phys.libretexts.org/Bookshelves/Electricity_and_Magnetism/Essential_Graduate_Physics_-_Classical_Electrodynamics_(Likharev)/09:_Special_Relativity/9.06:_Relativistic_Particles_in_Electric_and_Magnetic_Fields"
      locator: "§9.6 discussion and equations for constant electric and magnetic fields and crossed fields; full relevant section inspected."
    - title: "Michael Fowler, University of Virginia, Electromagnetism Lecture 73: Particle in Constant Fields, complete lecture page"
      url: "https://galileoandeinstein.phys.virginia.edu/Elec_Mag/2022_Lectures/EM_73_Particle_Const_Fields.html"
      locator: "Complete Lecture 73: exact uniform-electric-field trajectory, magnetic helix and crossed-field drift/rest-frame argument inspected."
verification: {}
---

## Statement

Use the flat SI charged-particle model and local external-action adoption of [[def-rpm-charge-spin-model]] and [[post-rpm-external-charge-action]], with the conditional equation and coordinate Lorentz force of [[pthm-rpm-external-charge-action-equivalence]] and [[pthm-rpm-charge-mass-shell]], adopt the flat massive-particle momentum model [[post-sr-massive-particle-dynamics]], and assume $\mathrm{AC}_\omega$ of [[def-countable-choice]] for the canonical tangent-bundle smooth structure required by the current local IVP and action-equivalence carriers. Let $m>0$ be in kilograms, $q\in\mathbb R$ in coulombs, $c>0$ in metres per second, and $B_0\in\mathbb R$ in tesla; $\mathbf E=0$, $\mathbf B=B_0e_3$. The smooth global potential $\phi=0$, $\mathbf A=(-B_0x^2/2,B_0x^1/2,0)$ has $\nabla\times\mathbf A=B_0e_3$. Spatial coordinates are in metres, coordinate time $t$ in seconds, and initial momentum components in kilograms metres per second. Given initial position $\mathbf x_0$ and momentum $\mathbf p_0=(p_{01},p_{02},p_{03})$ at $t=0$, define

$$S_0=\sqrt{m^2c^2+|\mathbf p_0|^2},\qquad \gamma_0=S_0/(mc),\qquad \Omega=\frac{qB_0}{\gamma_0m}.$$

Here $S_0$ has momentum units, $\gamma_0$ is dimensionless, and the signed angular frequency $\Omega$ has units of inverse seconds; all displayed positions are in metres and $\mathcal E$ is in joules.

For $\Omega\ne0$, the exact momentum and energy are

$$p_1(t)=p_{01}\cos(\Omega t)+p_{02}\sin(\Omega t),\quad p_2(t)=p_{02}\cos(\Omega t)-p_{01}\sin(\Omega t),\quad p_3(t)=p_{03},\quad \mathcal E(t)=cS_0,$$

and the exact position is

$$x^1(t)=x^1_0+\frac{c}{S_0\Omega}\bigl(p_{01}\sin(\Omega t)+p_{02}(1-\cos(\Omega t))\bigr),$$
$$x^2(t)=x^2_0+\frac{c}{S_0\Omega}\bigl(p_{02}\sin(\Omega t)-p_{01}(1-\cos(\Omega t))\bigr),\qquad x^3(t)=x^3_0+\frac{cp_{03}}{S_0}t.$$

The transverse projection is a circle of radius $|\mathbf p_\perp|/|qB_0|$ when $\mathbf p_\perp=(p_{01},p_{02})\ne0$; it is a straight line parallel to $e_3$ when $\mathbf p_\perp=0$. If $p_{03}=0$ the circular orbit is planar. The field does no work. If $\Omega=0$ (including $q=0$ or $B_0=0$), the solution is free motion $\mathbf p(t)=\mathbf p_0$, $\mathcal E=cS_0$, $\mathbf x(t)=\mathbf x_0+c\mathbf p_0t/S_0$. These formulas give a global future-timelike orbit and are unique on every common connected time interval; they are conditional model deductions, not empirical claims.

## Facts & Assumptions

**Given:** A named inertial SI chart, $m>0$, constant $q$, $c>0$, the uniform field and explicit potential above, the adopted local action and flat massive-particle models, and $\mathrm{AC}_\omega$ for the canonical tangent-bundle smooth structure.

[F1] [[def-rpm-charge-spin-model]]: the charged test-body field is an alternating two-form, $P=mU$, $m>0$, and in the flat SI chart $F_{0i}=-E_i/c$, $F_{ij}=\epsilon_{ijk}B_k$; local $C^2$ potentials represent $F=dA$.

[A1] [[post-rpm-external-charge-action]]: model trajectories are stationary for the fixed-endpoint external-charge action in a local potential domain.

[F2] [[pthm-rpm-external-charge-action-equivalence]]: under the local hypotheses and $\mathrm{AC}_\omega$, stationarity is equivalent to $m\nabla_UU=qF^\sharp(U)$.

[F3] [[pthm-rpm-charge-mass-shell]]: in the flat inertial specialization, $d\mathbf p/dt=q(\mathbf E+\mathbf v\times\mathbf B)$ and $d\mathcal E/dt=q\mathbf E\cdot\mathbf v$.

[A2] [[post-sr-massive-particle-dynamics]]: a flat-model massive particle has constant $m>0$ and kinetic four-momentum $P=mU$.

[A3] [[def-countable-choice]]: assume only countable choice $\mathrm{AC}_\omega$ for the canonical tangent-bundle smooth structure, as stated by the current RPM suppliers.

[F4] [[pthm-sr-momentum-and-four-force]]: in an inertial frame, $\mathcal E=\gamma mc^2$, $\mathbf p=\gamma m\mathbf v$, and $\mathcal E^2=m^2c^4+c^2|\mathbf p|^2$.

[F5] [[thm-sr-proper-time-and-observer-decomposition]]: future timelike chart motion has $|\mathbf v|<c$.

[F6] [[thm-sine-and-cosine-derivatives]]: $(\sin s)'=\cos s$ and $(\cos s)'=-\sin s$.

[F7] [[cor-zero-derivative-implies-constant]]: a differentiable scalar function on an interval with zero derivative is constant.

[F8] [[def-cross-product-in-r3]]: the right-handed coordinate convention gives $e_2\times e_3=e_1$ and $e_1\times e_3=-e_2$.

[F9] [[thm-algebra-of-derivatives]]: differentiable real components obey the sum and product rules, so $(d_1^2+d_2^2)'=2d_1d_1'+2d_2d_2'$.

## Proof

1.1 The potential components satisfy $F_{12}=\partial_1A_2-\partial_2A_1=B_0$ and all electric components vanish, by the tensor convention [F1]. The potential is smooth on all of Minkowski space, so the local-potential assumption [A1] applies, and under [A3], [F2] supplies the covariant equation. The coordinate force and energy equations are therefore those of [F3]. [given, F1, A1, A3, F2, F3, algebra]

2.1 With $\mathbf E=0$, the actual current carrier [F3] under [A3] gives $\dot{\mathcal E}=0$. The adopted massive-particle model [A2] and inertial relations [F4] give $\mathcal E^2=c^2(m^2c^2+|\mathbf p|^2)$ and $\mathbf v=c^2\mathbf p/\mathcal E$. Thus $\mathcal E=cS_0$ and $\mathbf v=c\mathbf p/S_0$. Using [F3], [F8], and $\mathbf v=c\mathbf p/S_0$, one has $\mathbf v\times B_0e_3=B_0(v_2e_1-v_1e_2)$, so $\dot p_1=\Omega p_2$, $\dot p_2=-\Omega p_1$, $\dot p_3=0$ because $qB_0c/S_0=qB_0/(\gamma_0m)=\Omega$. Differentiation using [F6] verifies the stated sinusoidal momenta and their initial values. The sum and product rules [F9] show that the rotating components also satisfy $\frac d{dt}(p_1^2+p_2^2)=2\Omega p_1p_2-2\Omega p_1p_2=0$, so $|\mathbf p(t)|=|\mathbf p_0|$ and the displayed constant $\mathcal E=cS_0$ obeys the shell and $\dot{\mathcal E}=0$; when $\Omega=0$, the force is zero and momentum is constant. [step 1.1, A2, A3, F3, F4, F6, F8, F9, algebra]

3.1 For $\Omega\ne0$, differentiating the proposed $x^1$ and $x^2$ with [F6] gives $\dot x^1=cp_1/S_0$ and $\dot x^2=cp_2/S_0$; differentiating $x^3$ gives $cp_3/S_0$. These are exactly the velocity components from step 2.1, and all increments vanish at $t=0$. For $\Omega=0$, the stated free position has constant derivative $c\mathbf p_0/S_0=\mathbf v$. [step 2.1, F6, algebra]

4.1 For $\Omega\ne0$, set $A=c p_{01}/(S_0\Omega)$ and $B=c p_{02}/(S_0\Omega)$. The transverse coordinates relative to the fixed centre $(x^1_0+B,x^2_0-A)$ are $(A\sin\Omega t-B\cos\Omega t,\,B\sin\Omega t+A\cos\Omega t)$; their squared distance from that centre is $A^2+B^2$. Since $S_0=\gamma_0mc$ and $|\Omega|=|qB_0|/(\gamma_0m)$, the radius is $c|\mathbf p_\perp|/(S_0|\Omega|)=|\mathbf p_\perp|/|qB_0|$. If $\mathbf p_\perp=0$, both transverse velocity components vanish; if $p_{03}=0$, $x^3$ is constant. The energy constancy in step 2.1 proves zero magnetic work. [step 2.1, step 3.1, F3, algebra]

5.1 The displayed curves satisfy the force equation and initial data by steps 2.1 and 3.1. Any other solution with the same data has constant energy $\mathcal E=cS_0$ by [F3], so step 2.1 puts its momentum in the same constant-coefficient system $\dot p_1=\Omega p_2$, $\dot p_2=-\Omega p_1$, $\dot p_3=0$. For the difference $d$ of two such momenta, the product rule [F9] gives $\frac d{dt}(d_1^2+d_2^2)=2\Omega d_1d_2-2\Omega d_2d_1=0$, and $\dot d_3=0$. With zero initial difference, [F7] makes $d_1^2+d_2^2=0$ and $d_3=0$ on every common connected interval, hence both momenta agree, including $\Omega=0$. Their velocities then agree by [F4], so each position difference has zero derivative and zero initial value; [F7] gives equality. The formulas are smooth for all real $t$; $S_0\ge mc>0$, and in the rotating case the denominator $\Omega$ is nonzero. The resulting worldline is timelike by [F5]. [step 2.1, step 3.1, F3, F4, F5, F7, F9, algebra] ∎
