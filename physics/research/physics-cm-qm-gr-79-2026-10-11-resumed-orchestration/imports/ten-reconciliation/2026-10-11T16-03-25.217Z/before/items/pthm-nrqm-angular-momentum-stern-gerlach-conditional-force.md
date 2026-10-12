---
id: pthm-nrqm-angular-momentum-stern-gerlach-conditional-force
aliases: [nrqm-angular-momentum-stern-gerlach-conditional-force]
kind: physics-theorem
domain: physics
title: "The conditional Stern-Gerlach force prediction of the spin-half Zeeman model: transverse momentum rate in a smooth bounded gradient field"
status: draft
origin: session
dependency_level: 11
deps: [def-axiom-of-choice, def-countable-choice, def-nrqm-angular-momentum-framework-angular-momentum-observables, def-nrqm-autonomous-dynamics-framework-evolution, def-nrqm-framework-quantities-and-units, def-nrqm-kinematics-framework-massive-spin-s-model, def-nrqm-magnetic-and-detection-position-and-momentum-operators, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-state-geometry-framework-state-space, def-nrqm-state-geometry-pure-mixed-states-and-purity, def-symmetric-self-adjoint-and-essentially-self-adjoint, lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint, post-nrqm-angular-momentum-magnetic-moment-coupling, post-nrqm-framework-autonomous-dynamics, post-nrqm-framework-identical-particles-and-spin, post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle, post-nrqm-framework-observable-and-probability, post-nrqm-framework-state-and-composition, prop-nrqm-orbital-and-spin-finite-spin-matrices, thm-nrqm-magnetic-and-detection-conditional-stern-gerlach-force]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-nrqm-angular-momentum-framework-angular-momentum-observables: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-magnetic-and-detection-position-and-momentum-operators: mathematical-premise
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint: mathematical-premise
  post-nrqm-angular-momentum-magnetic-moment-coupling: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  prop-nrqm-orbital-and-spin-finite-spin-matrices: mathematical-premise
  thm-nrqm-magnetic-and-detection-conditional-stern-gerlach-force: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A conditional consequence of the postulates P1, P2, P4, P5, P6 and of the adopted effective magnetic-moment coupling for the spin-half model in a static field profile B = (0,0,B_z(x_1)) whose component B_z is C^1 with bounded value and derivative: the identification of the model's Zeeman operator with the smooth bounded-coefficient force model, conservation of the field-aligned spin component and of the sector weights, the conditional rate gamma_s hbar G/2 of the transverse mean momentum in the spin-up sector when the gradient equals G on the support of the transverse marginal, and the divergence-free, curl identity of the profile. The item asserts no apparatus, no measured trajectory, no beam splitting observation and no source-free field realization; it is a model prediction conditional on its stated preparation assumptions."
empirical_premises: []
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 7.4.2, printed pages 161-164 (PDF pages 169-172): the Stern-Gerlach model, the force on a magnetic moment and the two-peak idealization"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 2 'Spin One-Half, Bras, Kets, and Operators', Section 1, printed pages 1-7 (the force on a magnetic dipole in a nonuniform magnetic field and the Stern-Gerlach two-peak idealization) and Section 4, printed pages 16-19 (spin states in an arbitrary direction)"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/a56c316e4ec548d8bd0a554fac9a74e8_MIT8_05F13_Chap_02.pdf"
verification:
  precheck: pass
---
## Statement

Adopt the state and composition postulate P1, the observable and probability
postulate P2, the autonomous-dynamics postulate P4, the kinematics and
massive-particle model postulate P5 and the internal-factor assignment of the
spin postulate P6, read for the massive spin-$\tfrac12$ model of
[[def-nrqm-kinematics-framework-massive-spin-s-model]] with mass parameter
$m>0$ and spin label $s=\tfrac12$, together with the effective
magnetic-moment coupling of
[[post-nrqm-angular-momentum-magnetic-moment-coupling]] with parameter
$\gamma_{1/2}\in\mathbb R$ and the angular momentum readings of
[[def-nrqm-angular-momentum-framework-angular-momentum-observables]]
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-autonomous-dynamics]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]],
[[post-nrqm-framework-identical-particles-and-spin]]), and assume the Axiom
of Choice and the Axiom of Countable Choice ([[def-axiom-of-choice]],
[[def-countable-choice]]). Let $B_{z}\in C^{1}(\mathbb R)$ be real with
$B_{z}$ and $B_{z}'$ bounded, let
$$\mathbf B(x):=\bigl(0,0,B_{z}(x_{1})\bigr),$$
let $H_{Z}$ be the Zeeman operator of the magnetic-moment postulate for this
profile, acting on $H_{1/2}=L^{2}(\mathbb R^{3};\mathbb C^{2})$ with domain
$D(H_{Z})=W^{2,2}(\mathbb R^{3};\mathbb C^{2})$, and let $u(t)=e^{-itH_{Z}/\hbar}u_{0}$
be its flow. Identify $H_{1/2}$ with
$\mathcal H=L^{2}(\mathbb R^{3};\mathbb C)\oplus L^{2}(\mathbb R^{3};\mathbb C)$
through the internal basis $(e_{1/2},e_{-1/2})$, and let $P_{+}:=\tfrac12(I+2S_{3}/\hbar)$
be the fibrewise orthogonal projection onto the spin-up line $e_{1/2}$.
Then:

(a) under this identification $H_{Z}$ is the operator
$$K(u_{+},u_{-})=\Bigl(\frac{1}{2m}\sum_{j}P_{j}^{2}u_{+}-\frac{\gamma_{1/2}\hbar}{2}B_{z}(Q_{x})u_{+},\ \frac{1}{2m}\sum_{j}P_{j}^{2}u_{-}+\frac{\gamma_{1/2}\hbar}{2}B_{z}(Q_{x})u_{-}\Bigr),\qquad D(K)=W^{2,2}\oplus W^{2,2},$$
of [[thm-nrqm-magnetic-and-detection-conditional-stern-gerlach-force]] with
$\gamma_{s}:=\gamma_{1/2}$; consequently $H_{Z}$ is self-adjoint,
$S_{3}H_{Z}=H_{Z}S_{3}$ on $D(H_{Z})$, the sector weights
$\|P_{\pm}u(t)\|^{2}$ and the mean $\langle S_{3}\rangle_{u(t)}$ are
independent of $t$;

(b) if in addition $u_{0}\in D(H_{Z}^{2})$ is a unit vector with
$P_{+}u_{0}=u_{0}$ and $B_{z}'(x_{1})=G$ for every $x_{1}$ in a Borel set
$N\subseteq\mathbb R$ satisfying
$\int_{\mathbb R\setminus N}\eta_{+}(x_{1})\,dx_{1}=0$, where
$\eta_{+}(x_{1}):=\int_{\mathbb R^{2}}|u_{0}^{+}(x_{1},x_{2},x_{3})|^{2}\,dx_{2}\,dx_{3}$
is the first-coordinate marginal density of the spin-up component, then
$$\frac{d}{dt}\Bigr|_{t=0}\bigl\langle P_{x}u(t),u(t)\bigr\rangle=\frac{\gamma_{1/2}\hbar}{2}\,G ;$$
for $t\ne0$ the general rate is
$\frac{d}{dt}\langle P_{x}u(t),u(t)\rangle=\gamma_{1/2}\langle S_{3}B_{z}'(Q_{x})u(t),u(t)\rangle$;

(c) the profile satisfies $\operatorname{div}\mathbf B=0$ and
$\operatorname{curl}\mathbf B=(0,-B_{z}'(x_{1}),0)$ at every point of
$\mathbb R^{3}$, as identities of the displayed components;

(d) **Scope.** The statement is conditional on P1, P2, P4, P5, P6 and the
adopted coupling. Clause (b) is a model prediction for the rate of the mean
transverse momentum of a prepared spin-up state under the marginal-support
hypothesis; it is not an observation of a beam splitting, a trajectory or a
count, it identifies no apparatus, calibration or detector, and it asserts
neither a source-free realization of $\mathbf B$ nor a Maxwell solution.
The word "Stern-Gerlach" names this conditional model, not a reported
experiment; no measured value of $\gamma_{1/2}$ enters and no empirical
conclusion is drawn.

## Facts & Assumptions

**Given:** The postulates P1, P2, P4, P5 and P6 and the magnetic-moment
postulate in the stated readings; the Axiom of Choice and the Axiom of
Countable Choice; the model parameters $m>0$, $s=\tfrac12$,
$\gamma_{1/2}\in\mathbb R$; the field component $B_{z}\in C^{1}(\mathbb R)$
with $B_{z},B_{z}'$ bounded and the profile $\mathbf B=(0,0,B_{z}(x_{1}))$;
the operator $H_{Z}$ and the flow $u(t)$; a unit vector $u_{0}\in D(H_{Z}^{2})$;
the real number $G$.

[F1] **Model operators.** On $H_{1/2}=L^{2}(\mathbb R^{3};\mathbb C^{2})$ the
componentwise operators $P_{j},Q_{j}$ and the internal operators
$S_{i}=\tfrac{\hbar}{2}\sigma_{i}$ are those of
[[def-nrqm-kinematics-framework-massive-spin-s-model]] clauses (b),(c) and
[[prop-nrqm-orbital-and-spin-finite-spin-matrices]] clause (e); in the basis
$(e_{1/2},e_{-1/2})$ one has $S_{3}(u_{+},u_{-})=(\tfrac{\hbar}{2}u_{+},-\tfrac{\hbar}{2}u_{-})$
and $P_{+}=\tfrac12(I+2S_{3}/\hbar)$ projects fibrewise onto $e_{1/2}$.

[F2] **Zeeman operator of the model.** For the profile $\mathbf B$ with
bounded measurable components the Zeeman operator of
[[post-nrqm-angular-momentum-magnetic-moment-coupling]] clause (ii) reads
$H_{Z}=H_{0}-\gamma_{1/2}S_{3}B_{z}(Q_{x})$ on
$D(H_{Z})=W^{2,2}(\mathbb R^{3};\mathbb C^{2})$, where $B_{z}(Q_{x})$ is
componentwise multiplication by $x\mapsto B_{z}(x_{1})$; it is self-adjoint
on that domain by the postulate's bounded-perturbation statement
([[def-nrqm-autonomous-dynamics-framework-evolution]],
[[def-nrqm-state-geometry-framework-state-space]],
[[def-nrqm-state-geometry-pure-mixed-states-and-purity]]).

[F3] **The smooth bounded-coefficient force model.** With $\hbar>0$, $m>0$,
$\gamma_{s}\in\mathbb R$ and real $B_{z}\in C^{1}(\mathbb R)$ with $B_{z}$,
$B_{z}'$ bounded, the operator
$$K(u_{+},u_{-})=\Bigl(\frac{1}{2m}\sum_{j}P_{j}^{2}u_{+}-\frac{\gamma_{s}\hbar}{2}B_{z}(Q_{x})u_{+},\ \frac{1}{2m}\sum_{j}P_{j}^{2}u_{-}+\frac{\gamma_{s}\hbar}{2}B_{z}(Q_{x})u_{-}\Bigr),\quad D(K)=W^{2,2}\oplus W^{2,2},$$
on $\mathcal H=L^{2}(\mathbb R^{3};\mathbb C)\oplus L^{2}(\mathbb R^{3};\mathbb C)$
is self-adjoint, $S_{z}K=KS_{z}$ on $D(K)$ for
$S_{z}(u_{+},u_{-})=(\tfrac{\hbar}{2}u_{+},-\tfrac{\hbar}{2}u_{-})$, the
sector weights and the mean of $S_{z}$ are conserved, for
$u_{0}\in D(K^{2})$ with $\|u_{0}\|=1$ the function
$t\mapsto\langle P_{x}u(t),u(t)\rangle$ is $C^{1}$ with
$\frac{d}{dt}\langle P_{x}u(t),u(t)\rangle=\gamma_{s}\langle S_{z}B_{z}'(Q_{x})u(t),u(t)\rangle$,
and if in addition $p_{+}u_{0}=u_{0}$ with $p_{\pm}:=\tfrac12(I\pm\frac{2}{\hbar}S_{z})$
and $B_{z}'=G$ on a Borel set carrying the first-coordinate marginal of
$u_{0}^{+}$, then
$\frac{d}{dt}|_{t=0}\langle P_{x}u(t),u(t)\rangle=\frac{\gamma_{s}\hbar}{2}G$;
furthermore $\operatorname{div}\mathbf B=0$ and
$\operatorname{curl}\mathbf B=(0,-B_{z}'(x_{1}),0)$ at every point
([[thm-nrqm-magnetic-and-detection-conditional-stern-gerlach-force]] clauses
(a),(b),(c),(d),
[[def-nrqm-magnetic-and-detection-position-and-momentum-operators]],
[[lem-nrqm-magnetic-and-detection-momentum-operators-self-adjoint]]).

## Proof

**Proof technique:** direct; identify the model's Zeeman operator with the
smooth bounded-coefficient force model through the internal basis, transport
the supplier's conservation, force and field identities, and read the
physical scope.

**Given:** The data of the statement and [F1]-[F3].

1.1 [Identification of the operators] Under the identification of $H_{1/2}$ with $\mathcal H$ through $(e_{1/2},e_{-1/2})$, the model's componentwise operators $P_{j},Q_{j}$ of [F1] have exactly the componentwise form of the supplier's operators, whose self-adjointness and componentwise action are those of [F3]'s cited position-and-momentum items; the internal operator $S_{3}$ becomes the diagonal matrix with entries $\pm\hbar/2$, so $-\gamma_{1/2}S_{3}B_{z}(Q_{x})(u_{+},u_{-})=(-\frac{\gamma_{1/2}\hbar}{2}B_{z}(Q_{x})u_{+},+\frac{\gamma_{1/2}\hbar}{2}B_{z}(Q_{x})u_{-})$ and $H_{Z}=K$ with $\gamma_{s}:=\gamma_{1/2}$, including the domain $W^{2,2}\oplus W^{2,2}$; also $P_{\pm}=p_{\pm}$. [F1, F2, F3, algebra]

2.1 [Conservation and force] By step 1.1 and [F3], $H_{Z}=K$ is self-adjoint with $S_{3}H_{Z}=H_{Z}S_{3}$ on $D(H_{Z})$, so the sector weights $\|P_{\pm}u(t)\|^{2}$ and the mean $\langle S_{3}\rangle_{u(t)}$ are independent of $t$; for $u_{0}\in D(H_{Z}^{2})$ with $P_{+}u_{0}=u_{0}$ and the marginal-support hypothesis, the supplier's identities give the general rate $\frac{d}{dt}\langle P_{x}u(t),u(t)\rangle=\gamma_{1/2}\langle S_{3}B_{z}'(Q_{x})u(t),u(t)\rangle$ and the time-zero value $\frac{\gamma_{1/2}\hbar}{2}G$, which are (a) and (b). [step 1.1, F3, algebra]

2.2 [Field identities] By [F3] the displayed profile satisfies $\operatorname{div}\mathbf B=0$ and $\operatorname{curl}\mathbf B=(0,-B_{z}'(x_{1}),0)$ at every point, which is (c). [step 1.1, F3]

3.1 [Assembly and scope] Step 2.1 proves (a) and (b), and step 2.2 proves (c); only the displayed model operators, the adopted coupling and the supplier's conditional identities were used, no apparatus, trajectory, count, calibration or empirical value entered, which is the scope statement (d). [step 2.1, step 2.2, F2] ∎

## Remarks

- **What "force" means here.** Clause (b) is a rate of change of the mean of
  the transverse momentum operator in a declared preparation; it is the model
  counterpart of the classical force $-\nabla(-\boldsymbol\mu\cdot\mathbf B)$
  and does not assert a classical trajectory or a definite transverse
  displacement of an individual particle.
- **The marginal hypothesis.** The support condition on
  $\eta_{+}$ is an explicit hypothesis on the preparation, not a general
  property of solutions; without it the general rate of clause (b) is the
  only identity available, since $B_{z}'$ enters pointwise.
