---
id: pthm-nrqm-kinematics-boost-covariance
aliases: [nrqm-kinematics-boost-covariance]
kind: physics-theorem
domain: physics
title: "Galilean boost covariance of the free massive spin-s model and the moving-frame reading"
status: draft
origin: session
dependency_level: 10
deps: [def-axiom-of-choice, def-countable-choice, def-nrqm-autonomous-dynamics-framework-evolution, def-nrqm-framework-quantities-and-units, def-nrqm-kinematics-framework-massive-spin-s-model, def-nrqm-observables-framework-observable-and-outcome-law, def-schwartz-space-and-its-seminorms, def-strongly-continuous-one-parameter-unitary-group, lem-nrqm-kinematics-componentwise-position-and-momentum, lem-nrqm-kinematics-momentum-representation, lem-nrqm-kinematics-orthogonal-sums-of-self-adjoint-operators, lem-nrqm-magnetic-and-detection-weak-product-rule, post-nrqm-framework-autonomous-dynamics, post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle, post-nrqm-framework-observable-and-probability, pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow, pthm-nrqm-kinematics-spin-s-outcome-laws, pthm-nrqm-kinematics-translation-covariance, thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators, thm-nrqm-magnetic-and-detection-galilean-covariance, cor-mean-value-theorem]
dependency_roles:
  cor-mean-value-theorem: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-schwartz-space-and-its-seminorms: mathematical-premise
  def-strongly-continuous-one-parameter-unitary-group: mathematical-premise
  lem-nrqm-kinematics-componentwise-position-and-momentum: mathematical-premise
  lem-nrqm-kinematics-momentum-representation: mathematical-premise
  lem-nrqm-kinematics-orthogonal-sums-of-self-adjoint-operators: mathematical-premise
  lem-nrqm-magnetic-and-detection-weak-product-rule: mathematical-premise
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow: physical-result
  pthm-nrqm-kinematics-spin-s-outcome-laws: physical-result
  pthm-nrqm-kinematics-translation-covariance: physical-result
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  thm-nrqm-magnetic-and-detection-galilean-covariance: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The Galilean boost covariance of the free spin-s massive-particle model and the moving-frame reading of its bounded-potential dynamics: unitarity and domain preservation of the boost family, the operator identities shifting position by ut and momentum by mu together with the resulting law transports, the free-propagator covariance identity, the conjugated free Hamiltonian identity, and the moving-frame Schroedinger equation with the pulled-back potential. The statement is conditional on P2, P4, P5 and P6 and the cited mathematics, holds for the free model and for real bounded measurable potentials only, and asserts no Lorentz covariance, no massless or photon limit, no covariance for singular or unbounded potentials, and no apparatus or empirical result."
proof_strategy: direct
sources:
  references:
    - title: "C. Torre, Galilean Relativity and the Path Integral Formalism in Quantum Mechanics, arXiv:2306.13487 (2023), Section 4 equation (4.23) and Section 6 equation (6.2), pages 12-13 and 17: the Galilean boost law of the wave function requires the multiplicative phase factor, psi_u(r,t)=exp[-(i/hbar) M u.(t u/2 - R)] psi(r-t u,t), the passive reading of psi_u as the wave function in a frame moving with velocity -u relative to the original frame, and the projective composition of boosts u1,u2 to u1+u2"
      url: "https://arxiv.org/pdf/2306.13487"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 7.2 printed pages 167-169 (PDF pages 179-181): the free Schroedinger operator; Section 7.3 printed pages 169-171 (PDF pages 181-183): the time evolution in the free case; Section 8.1 printed pages 173-175 (PDF pages 185-187): position and momentum via their commutation relations and unitary equivalence through the Fourier transform"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---
## Statement

Adopt the observable and probability postulate P2 in the reading of
[[def-nrqm-observables-framework-observable-and-outcome-law]], the
autonomous-dynamics postulate P4 in the reading of
[[def-nrqm-autonomous-dynamics-framework-evolution]], and the kinematics and
massive-particle model postulate P5 and internal-factor postulate P6 read
through [[def-nrqm-kinematics-framework-massive-spin-s-model]] for a particle
of mass parameter $m>0$ and spin label $s$
([[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-autonomous-dynamics]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]]), and
assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Let $H_{s}$ be the model's
state space with componentwise operators $Q_{j},P_{k}$
([[lem-nrqm-kinematics-componentwise-position-and-momentum]]), let
$\mu^{A}_{\psi}(B)=\|E_{A}(B)\psi\|^{2}$ be the outcome law of an assigned sharp
observable $A$ in a unit vector $\psi$, let
$H_{0}:=\frac{1}{2m}\sum_{k}P_{k}^{2}$ with flow
$U_{0}(t)=\exp(-itH_{0}/\hbar)$, and for real bounded measurable
$V:\mathbb R^{3}\to\mathbb R$ let $H_{V}$ and $U_{V}$ be as in
[[pthm-nrqm-kinematics-translation-covariance]] with
$V_{u}(x,t):=V(x-ut)$. For $u\in\mathbb R^{3}$ and $t\in\mathbb R$ define the
**boost operator** $B_{u}(t)$ componentwise by
$$\bigl(B_{u}(t)\psi\bigr)(x):=\exp\Bigl(\frac{i}{\hbar}\Bigl(m\,u\cdot x -\frac{m|u|^{2}}{2}t\Bigr)\Bigr)\psi(x-ut).$$
Then:

(a) for every $u,t$ the operator $B_{u}(t)$ is unitary,
$B_{u}(t)^{-1}=B_{u}(t)^{*}$, and it maps $W^{2,2}(\mathbb R^{3};\mathbb C^{r})$
and $\mathcal S(\mathbb R^{3};\mathbb C^{r})$ onto themselves;

(b) the operator identities
$$Q_{j}B_{u}(t)=B_{u}(t)\bigl(Q_{j}+ut_{j}I\bigr),\qquad P_{k}B_{u}(t)=B_{u}(t)\bigl(P_{k}+mu_{k}I\bigr)$$
hold with domains, and consequently for every unit $\psi$ and Borel
$B\subseteq\mathbb R$
$$\mu^{Q_{j}}_{B_{u}(t)\psi}(B)=\mu^{Q_{j}}_{\psi}(B-ut_{j}),\qquad \mu^{P_{k}}_{B_{u}(t)\psi}(B)=\mu^{P_{k}}_{\psi}(B-mu_{k});$$

(c) **free covariance.** $B_{u}(t)U_{0}(t-s)=U_{0}(t-s)B_{u}(s)$ for all
$s,t\in\mathbb R$; in particular the freely evolved boosted preparation equals
the boost at time $t$ of the initial boosted preparation,
$$B_{u}(t)U_{0}(t)\psi=U_{0}(t)B_{u}(0)\psi\qquad(\psi\in H_{s});$$
and the conjugated free Hamiltonian identity
$$B_{u}(t)^{-1}H_{0}B_{u}(t)=H_{0}+u\cdot P+\frac{m|u|^{2}}{2}I$$
holds on $W^{2,2}(\mathbb R^{3};\mathbb C^{r})$ (in the chart velocity
$v=-u$ of clause (e) it reads $H_{0}-v\cdot P+\frac{m|v|^{2}}{2}I$), the
operator form of the frame change on the free generator;

(d) **moving-frame bounded-potential model.** For every real bounded
measurable $V$ and every $u$, the two-parameter family
$$W_{u}(t,s):=B_{u}(t)\,U_{V}(t-s)\,B_{u}(s)^{-1}$$
consists of unitaries preserving $W^{2,2}(\mathbb R^{3};\mathbb C^{r})$, and
for every $s\in\mathbb R$ and $\psi_{0}\in W^{2,2}(\mathbb R^{3};\mathbb C^{r})$
the curve $t\mapsto W_{u}(t,s)\psi_{0}$ is differentiable into $L^{2}$ and
satisfies
$$i\hbar\frac{d}{dt}\psi(t)=\Bigl(\frac{1}{2m}\sum_{k}P_{k}^{2}+M_{V_{u}(\cdot,t)}\Bigr)\psi(t),\qquad \psi(s)=\psi_{0};$$
it is the unique such curve in the stated class;

(e) **Frame reading and scope.** The model reads the inertial-frame change
$t'=t$, $x'=x+ut$ of P5 (the new chart moves with velocity $-u$ relative to the
old one) on state representatives by $\psi'(x',t)=(B_{u}(t)\psi(\cdot,t))(x')$;
clauses (b)-(d) are the covariance consequences of that reading for the laws
of the free model and for the bounded-potential dynamics in the moving frame.
The statement is conditional on P2, P4, P5 and P6 and the cited mathematics,
concerns the componentwise massive model with real bounded measurable
potentials only, and asserts no Lorentz covariance, no photon limit, no
covariance for singular or unbounded potentials and no worldline of an
unmeasured particle; no apparatus or empirical result is recorded.

## Facts & Assumptions

**Given:** The postulates P2, P4, P5 and P6 read through [[def-nrqm-kinematics-framework-massive-spin-s-model]]; the Axiom of Countable Choice and the Axiom of Choice; the state space $H_{s}$, $r=2s+1$; the componentwise operators $Q_{j},P_{k}$ and their scalar counterparts; the boost operators $B_{u}(t)$; the free energy $H_{0}$; a bounded real measurable $V$ and the operators $H_{V}$, $U_{V}$, $W_{u}(t,s)$; a unit vector $\psi$; a Borel set $B\subseteq\mathbb R$; vectors $u\in\mathbb R^{3}$, $x\in\mathbb R^{3}$; times $s,t$.

[F1] **Scalar boost covariance.** On $L^{2}(\mathbb R^{3};\mathbb C)$ the scalar boost $B_{u}(t)\psi(x)=e^{i(mu\cdot x/\hbar-m|u|^{2}t/2\hbar)}\psi(x-ut)$ is unitary for every $t$ and preserves $W^{1,2}$ and $W^{2,2}$; for the scalar free operator $K_{0}=\frac{1}{2m}\sum_{j}P_{j}^{2}$ one has $B_{u}(t)e^{-i(t-s)K_{0}/\hbar}=e^{-i(t-s)K_{0}/\hbar}B_{u}(s)$; and for every real bounded measurable $V$ the family $B_{u}(t)e^{-i(t-s)K/\hbar}B_{u}(s)^{-1}$ with $K=\frac{1}{2m}\sum_{j}P_{j}^{2}+M_{V}$ preserves $W^{2,2}$, consists of unitaries and its curves solve $i\hbar\frac{d}{dt}v(t)=\bigl(\frac{1}{2m}\sum_{j}P_{j}^{2}+M_{V(\cdot-ut)}\bigr)v(t)$ uniquely in the stated class ([[thm-nrqm-magnetic-and-detection-galilean-covariance]] clauses (a)-(d)). The phase $\varphi(x,t):=mu\cdot x/\hbar-m|u|^{2}t/(2\hbar)$ is smooth with $\nabla\varphi=mu/\hbar$ and $\partial_{t}\varphi=-m|u|^{2}/(2\hbar)$.

[F2] **Componentwise kinematics and laws.** $Q_{j},P_{k}$ are the componentwise operators with their maximal domains, the spectral measures and laws are those of [[pthm-nrqm-kinematics-spin-s-outcome-laws]] clauses (a),(c), and $P_{k}f=-i\hbar D_{k}f$ on its domain ([[lem-nrqm-kinematics-componentwise-position-and-momentum]] clause (a)).

[F3] **Translation identities.** $T_{a}D(Q_{j})=D(Q_{j})$, $T_{a}Q_{j}T_{a}^{-1}=Q_{j}-a_{j}I$, $T_{a}D(P_{k})=D(P_{k})$, $T_{a}P_{k}T_{a}^{-1}=P_{k}$, and $T_{a}$ preserves $W^{2,2}(\mathbb R^{3};\mathbb C^{r})$ and the Schwartz class ([[pthm-nrqm-kinematics-translation-covariance]] clause (a), [[lem-nrqm-kinematics-componentwise-position-and-momentum]] clause (c)).

[F4] **Weak product rule.** If $a\in L^{\infty}(\mathbb R^{d};\mathbb R)$ has bounded weak first derivatives and $f\in W^{1,2}(\mathbb R^{d};\mathbb C)$, then $D_{k}(af)=a\,D_{k}f+(D_{k}a)f$ ([[lem-nrqm-magnetic-and-detection-weak-product-rule]]); componentwise, for a smooth phase with bounded derivatives the same identity holds in $L^{2}(\mathbb R^{d};\mathbb C^{r})$.

[F5] **Flows and uniqueness.** $H_{0}$ and $H_{V}$ are self-adjoint on $W^{2,2}(\mathbb R^{3};\mathbb C^{r})$ with strongly continuous unitary flows preserving the domain and satisfying the Schroedinger equation exactly on it ([[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]] clause (c), [[pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow]] clauses (a)-(c), [[def-strongly-continuous-one-parameter-unitary-group]]).

[F6] A real function continuous on a closed interval and differentiable in its interior with zero derivative is constant, by [[cor-mean-value-theorem]]; restrictions of a differentiable curve to compact intervals satisfy these continuity hypotheses.

## Proof

**Proof technique:** direct; assemble the scalar boost statements componentwise, derive the two operator identities from the multiplier-plus- translation form of $B_{u}(t)$, read off the law transports, and transport the free and moving-potential dynamics through the componentwise identification.

**Given:** The data of the statement and [F1]-[F5].

1.1 [Unitarity and domain preservation] Write $B_{u}(t)=M_{\varphi(\cdot,t)}T_{ut}$ componentwise, where $T_{ut}$ is the componentwise translation and $\varphi(\cdot,t)$ the smooth real phase of [F1]. By [F3] the translation is unitary and preserves $W^{2,2}$ and the Schwartz class; multiplication by the unimodular smooth function $e^{i\varphi}$ is unitary and preserves both classes because the phase is affine with bounded derivatives. Hence $B_{u}(t)$ is unitary with the stated inverse and preserves both classes, componentwise as in the scalar case of [F1]. This proves (a). [F1, F3, algebra]

1.2 [Position identity] By [F3], $Q_{j}T_{ut}=T_{ut}(Q_{j}+ut_{j}I)$ on $D(Q_{j})$; multiplication by $e^{i\varphi}$ commutes with $Q_{j}$ (both are componentwise multipliers). Hence, on $D(Q_{j})$, $Q_{j}B_{u}(t)=M_{e^{i\varphi}}Q_{j}T_{ut} =M_{e^{i\varphi}}T_{ut}(Q_{j}+ut_{j}I)=B_{u}(t)(Q_{j}+ut_{j}I)$, the domain identity following from [F3] and the multiplier form. [F1, F3, algebra]

1.3 [Momentum identity] By [F4] applied componentwise to $\varphi$ and $f\in D(P_{k})$, $e^{i\varphi}f\in D(P_{k})$ and $P_{k}M_{e^{i\varphi}}=M_{e^{i\varphi}}(P_{k}+mu_{k}I)$ because $\hbar\partial_{k}\varphi=mu_{k}$ is constant. By [F3], $P_{k}T_{ut}=T_{ut}P_{k}$; hence $P_{k}B_{u}(t)=M_{e^{i\varphi}}(P_{k}+mu_{k}I)T_{ut} =B_{u}(t)(P_{k}+mu_{k}I)$ with domains. [F1, F3, F4, algebra]

2.1 [Law transports] For a componentwise representative $f$, $(E_{Q_j}(B)B_u(t)f)(x)=\mathbf 1_B(x_j)e^{i\varphi(x,t)}f(x-ut)$, whereas $(B_u(t)E_{Q_j}(B-ut_j)f)(x)=e^{i\varphi(x,t)}\mathbf 1_{B-ut_j}(x_j-ut_j)f(x-ut)$. Since the two indicators agree, $E_{Q_j}(B)B_u(t)=B_u(t)E_{Q_j}(B-ut_j)$; taking norms gives $\mu^{Q_j}_{B_u(t)\psi}(B)=\mu^{Q_j}_{\psi}(B-ut_j)$. For momentum, changing variables $y=x-ut$ in the Fourier transform first on smooth compactly supported representatives yields $(U^{(s)}B_u(t)f)(p)=e^{-it u\cdot p/\hbar+i m|u|^2t/(2\hbar)}(U^{(s)}f)(p-mu)$. The equality extends to all $L^2$ by density and unitarity. Therefore the indicator $\mathbf 1_B(p_k)$ on the left equals the transported indicator $\mathbf 1_{B-mu_k}(p_k-mu_k)$ on the right, so $E_{P_k}(B)B_u(t)=B_u(t)E_{P_k}(B-mu_k)$ and $\mu^{P_k}_{B_u(t)\psi}(B)=\mu^{P_k}_{\psi}(B-mu_k)$. These are the two law transports in (b); neither depends on the phase in the position density. [step 1.2, step 1.3, F2, F3, algebra]

2.2 [Free covariance] By [F5] and [F1], the scalar free identity $B_{u}(t)e^{-i(t-s)K_{0}/\hbar}=e^{-i(t-s)K_{0}/\hbar}B_{u}(s)$ holds for each component, where $K_{0}$ is the scalar free operator; assembling components through the orthogonal-sum identification ([[lem-nrqm-kinematics-orthogonal-sums-of-self-adjoint-operators]] clause (c)) gives $B_{u}(t)U_{0}(t-s)=U_{0}(t-s)B_{u}(s)$ for the componentwise $H_{0}$; at $s=0$ this is the displayed statement. [step 1.1, F1, F5, algebra]

2.3 [Moving-frame model and uniqueness] By [F5] the scalar bounded-potential operator $K$ has flow $e^{-itK/\hbar}$, and [F1] proves that $B_u(t)e^{-i(t-s)K/\hbar}B_u(s)^{-1}$ preserves $W^{2,2}$ and solves the additive equation $i\hbar v'=(\sum_kP_k^2/(2m)+M_{V(\cdot-ut)})v$ with $v(s)=v_0$. Assemble the finitely many components through the orthogonal-sum identification; the resulting $W_u(t,s)$ is unitary, preserves $W^{2,2}(\mathbb R^3;\mathbb C^r)$ and satisfies the displayed equation with $\psi(s)=\psi_0$. To verify uniqueness in the full stated class without an added continuity hypothesis in the $W^{2,2}$ norm, let $z$ be the difference of two $L^2$-differentiable, $W^{2,2}$-valued solutions with the same initial data. For each fixed $t$, the additive operator $A(t)=\sum_kP_k^2/(2m)+M_{V_u(\cdot,t)}$ is symmetric on $W^{2,2}$ because the free operator is self-adjoint and the real bounded multiplier is self-adjoint. Hence $d\|z(t)\|^2/dt=2\operatorname{Re}\langle-iA(t)z(t)/\hbar,z(t)\rangle=0$. The real mean-value theorem gives $\|z(t)\|^2=\|z(s)\|^2=0$ for every $t$. Thus the two curves agree, proving all of (d) for arbitrary initial time $s$. [step 1.1, F1, F5, algebra, F6]

2.4 [Free Hamiltonian conjugation] By step 1.3, $P_{k}B_{u}(t)=B_{u}(t)(P_{k}+mu_{k}I)$ for every $k$; applying this identity twice on $W^{2,2}(\mathbb R^{3};\mathbb C^{r})$ and using that $B_{u}(t)$ maps $W^{2,2}$ onto itself (step 1.1) gives $P_{k}^{2}B_{u}(t)=B_{u}(t)(P_{k}+mu_{k}I)^{2}$, hence $\sum_{k}P_{k}^{2}B_{u}(t)=B_{u}(t)\sum_{k}(P_{k}+mu_{k}I)^{2}$. Conjugating by the unitary $B_{u}(t)$ and dividing by $2m$ gives $B_{u}(t)^{-1}H_{0}B_{u}(t) =H_{0}+u\cdot P+\frac{m|u|^{2}}{2}I$ on $W^{2,2}$, because the $P_{k}$ commute among themselves and $\frac{1}{2m}\sum_{k}(P_{k}+mu_{k}I)^{2} =H_{0}+\frac{1}{2}\bigl(u\cdot P+u\cdot P\bigr)+\frac{m|u|^{2}}{2}I$; this is the second identity of clause (c). [step 1.1, step 1.3, algebra]

3.1 [Frame reading and scope] Clause (e) records the model's convention for the passive boost of P5: the chart change $x'=x+ut$ is read by $B_{u}(t)$, so steps 2.1-2.4 are the covariance statements of the model under that change. The hypotheses actually used are P2, P4, P5 and P6, the componentwise model, real bounded measurable potentials and the cited mathematics; no Lorentz structure, massless limit, singular potential, boundary realization, apparatus or empirical datum is used. [given, step 1.2, step 1.3, step 2.1, step 2.2, step 2.3, step 2.4] ∎

## Remarks

- **The boost phase is not a gauge transformation.** The phase
  $\varphi(x,t)=mu\cdot x/\hbar-m|u|^{2}t/(2\hbar)$ depends on $x$ and shifts the
  momentum by $mu$, as clause (b) records; a gauge transformation of an
  external potential would not change the momentum law. The boost is a
  kinematic frame change of the model, and its free-propagator identity
  (clause (c)) says that the free dynamics is the same in both frames.
- **What is not claimed.** No boost covariance is asserted for potentials
  outside the real bounded measurable class, for confined or boundary
  realizations, or for the internal factor beyond its passive transport by the
  componentwise definition; no relativistic boost or Lorentz transformation
  law is either assumed or derived. The scalar boost family and its
  propagator identity are supplied by
  [[thm-nrqm-magnetic-and-detection-galilean-covariance]]; this item adds the
  componentwise model reading, the two operator identities and the law
  transports.
