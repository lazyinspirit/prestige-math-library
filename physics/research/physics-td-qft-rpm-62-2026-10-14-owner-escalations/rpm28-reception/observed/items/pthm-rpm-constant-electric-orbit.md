---
id: pthm-rpm-constant-electric-orbit
kind: physics-theorem
title: "Exact relativistic orbit in a uniform electric field"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "Exact global coordinate-time solutions of the adopted flat external-field charged test-particle model for a uniform constant electric field, with fixed SI conventions and a smooth explicit potential. The force law is conditional on the local RPM action postulate and its draft equivalence and mass-shell suppliers. No self-field, radiation reaction, measurement, or empirical claim is included."
empirical_premises: []
deps:
  - def-rpm-charge-spin-model
  - post-rpm-external-charge-action
  - pthm-rpm-external-charge-action-equivalence
  - pthm-rpm-charge-mass-shell
  - def-em-electromagnetic-tensor
  - post-sr-massive-particle-dynamics
  - pthm-sr-momentum-and-four-force
  - thm-sr-proper-time-and-observer-decomposition
  - thm-logarithm-derivative-and-integral
  - thm-real-power-continuity-and-derivatives
  - cor-zero-derivative-implies-constant
dependency_roles:
  def-rpm-charge-spin-model: formulation-prerequisite
  post-rpm-external-charge-action: physical-assumption
  pthm-rpm-external-charge-action-equivalence: physical-result
  pthm-rpm-charge-mass-shell: physical-result
  def-em-electromagnetic-tensor: formulation-prerequisite
  post-sr-massive-particle-dynamics: physical-assumption
  pthm-sr-momentum-and-four-force: physical-result
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
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

In the flat Minkowski specialization of [[def-rpm-charge-spin-model]], adopt the fixed-endpoint external-charge action [[post-rpm-external-charge-action]], its conditional stationary-action equivalence [[pthm-rpm-external-charge-action-equivalence]], and the flat massive-particle momentum model [[post-sr-massive-particle-dynamics]]. Let $m>0$, $q\in\mathbb R$, $c>0$, $E_0\in\mathbb R$, and let the uniform field in one named inertial SI chart be $\mathbf E=E_0e_1$, $\mathbf B=0$. A smooth global potential is $\phi=-E_0x^1$, $\mathbf A=0$, so the local-potential hypothesis is satisfied. Set $F_0=qE_0$ (newtons), take initial event $(0,\mathbf x_0)$ and initial momentum $\mathbf p_0=(p_{01},\mathbf p_\perp)$ at $t=0$, and define

$$p_1(t)=p_{01}+F_0t,\qquad \Pi=\sqrt{m^2c^2+|\mathbf p_\perp|^2}>0,\qquad \mathcal E(t)=c\sqrt{\Pi^2+p_1(t)^2},\qquad \mathbf v(t)=\frac{c(p_1(t)e_1+\mathbf p_\perp)}{\sqrt{\Pi^2+p_1(t)^2}}.$$

If $F_0\ne0$, the exact position for every $t\in\mathbb R$ is

$$x^1(t)=x^1_0+\frac c{F_0}\left(\sqrt{\Pi^2+p_1(t)^2}-\sqrt{\Pi^2+p_{01}^2}\right),$$
$$\mathbf x_\perp(t)=\mathbf x_{\perp0}+\frac{c\mathbf p_\perp}{F_0}\log\!\left(\frac{p_1(t)+\sqrt{\Pi^2+p_1(t)^2}}{p_{01}+\sqrt{\Pi^2+p_{01}^2}}\right).$$

If $F_0=0$, the field exerts no force on the particle and the orbit is free:
$\mathbf p(t)=\mathbf p_0$, $\mathcal E(t)=\mathcal E(0)$ and
$\mathbf x(t)=\mathbf x_0+c^2\mathbf p_0t/\mathcal E(0)$. These formulas define future-timelike worldlines for all finite coordinate times; any model solution with the same data agrees with them on every common connected time interval. This is a conditional model deduction, not evidence that the adopted action describes a measured particle.

## Facts & Assumptions

**Given:** A named inertial SI chart $x^0=ct$, prescribed $m>0$, charge $q$, constant $c>0$, initial momentum and position, the uniform field and its displayed smooth potential, and the adopted local action model.

[F1] [[def-rpm-charge-spin-model]]: $m>0$ and $q$ are constant parameters, $P=mU$, the field convention is $F_{0i}=-E_i/c$, $F_{ij}=\epsilon_{ijk}B_k$, and a local $C^2$ potential may represent $F=dA$.

[A1] [[post-rpm-external-charge-action]]: model trajectories are stationary points of the fixed-endpoint charged-particle action in a local potential domain.

[F2] [[pthm-rpm-external-charge-action-equivalence]]: under the preceding local action hypotheses, stationarity is equivalent to $m\nabla_UU=qF^\sharp(U)$.

[F3] [[pthm-rpm-charge-mass-shell]]: in the flat inertial SI specialization, the equation gives $d\mathbf p/dt=q(\mathbf E+\mathbf v\times\mathbf B)$ and $d\mathcal E/dt=q\mathbf E\cdot\mathbf v$.

[A2] [[post-sr-massive-particle-dynamics]]: a flat-model massive particle has constant $m>0$ and kinetic four-momentum $P=mU$.

[F4] [[pthm-sr-momentum-and-four-force]]: in a named inertial frame, the massive particle has $\mathcal E=\gamma mc^2$, $\mathbf p=\gamma m\mathbf v$, and $\mathcal E^2=m^2c^4+c^2|\mathbf p|^2$.

[F5] [[thm-sr-proper-time-and-observer-decomposition]]: future timelike chart motion has $dt/d\tau=\gamma>0$ and $|\mathbf v|<c$.

[F6] [[thm-logarithm-derivative-and-integral]]: on positive arguments, $d(\log s)/ds=1/s$ and the logarithmic integral rule applies.

[F7] [[thm-real-power-continuity-and-derivatives]]: for positive $s$, $d(s^{1/2})/ds=1/(2\sqrt{s})$.

[F8] [[cor-zero-derivative-implies-constant]]: a differentiable scalar function on an interval with zero derivative is constant there.

## Proof

1.1 The displayed scalar and vector potentials are smooth on all of Minkowski space. With the covector convention $A_0=-\phi/c$ and $A_i=\mathbf A_i$, they give $F_{01}=-E_0/c$, $F_{ij}=0$, hence exactly the field in [F1]. Thus the action potential-domain hypothesis [A1] is met, and [F2] gives its covariant Lorentz-force equation. [given, F1, A1, F2, algebra]

1.2 Apply [F3] to this field: $\dot p_1=F_0$, $\dot{\mathbf p}_\perp=0$, and $\dot{\mathcal E}=F_0v_1$. Integration with the initial data gives $p_1(t)=p_{01}+F_0t$ and constant $\mathbf p_\perp$. By adopted [A2] and the inertial momentum relations [F4], $\mathcal E^2=m^2c^4+c^2|\mathbf p|^2$; since $\mathcal E=\gamma mc^2>0$, this is $\mathcal E=c\sqrt{m^2c^2+|\mathbf p|^2}$, while $\mathbf p=\gamma m\mathbf v$ gives $\mathbf v=c^2\mathbf p/\mathcal E$. Thus the definitions of $\Pi,\mathcal E,\mathbf v$ in the statement follow. Since $m,c>0$, the square-root denominator is at least $mc>0$, and [F5] gives subluminal motion. [step 1.1, F3, A2, F4, F5, algebra]

2.1 Suppose $F_0\ne0$. Differentiating the proposed $x^1(t)$ and using $\dot p_1=F_0$ gives $\dot x^1=cp_1/\sqrt{\Pi^2+p_1^2}=v_1$. For the transverse formula, the derivative of $\log(p+\sqrt{\Pi^2+p^2})$ is $1/\sqrt{\Pi^2+p^2}$: the argument is positive since $\sqrt{\Pi^2+p^2}>|p|$, and the identity follows from [F6, F7] and the chain rule. Hence $\dot{\mathbf x}_\perp=c\mathbf p_\perp/\sqrt{\Pi^2+p_1^2}=\mathbf v_\perp$. At $t=0$ both position increments vanish, so these formulas have the prescribed initial position and velocity. [step 1.2, F6, F7, algebra]

2.2 If $F_0=0$, [F3] makes $\mathbf p$ and $\mathcal E$ constant, so the displayed free position has derivative $c^2\mathbf p_0/\mathcal E(0)=\mathbf v$ and the initial position. Its speed is below $c$ by [F5]. [step 1.2, F3, F5, algebra]

3.1 In either case the constructed curve satisfies the force equation and the initial data by steps 1.2–2.2. Any other solution has the same momentum by integrating [F3]; subtracting its position from the displayed one gives a differentiable vector with zero derivative and zero initial value, so each component vanishes by [F8]. Thus it agrees throughout any common connected interval. The formulas have positive square-root arguments and positive logarithm arguments for every finite $t$, so they extend smoothly over all $\mathbb R$. [step 1.2, step 2.1, step 2.2, F3, F8, algebra] ∎
