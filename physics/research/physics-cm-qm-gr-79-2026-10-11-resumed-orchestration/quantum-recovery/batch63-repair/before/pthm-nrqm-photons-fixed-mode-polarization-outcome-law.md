---
id: pthm-nrqm-photons-fixed-mode-polarization-outcome-law
kind: physics-theorem
title: "The analyser outcome law of the fixed-mode polarisation model: Born probabilities and the Malus ratio"
status: draft
origin: pipeline
domain: physics
dependency_level: 11
deps: [post-nrqm-photons-radiation-extension-and-transverse-mode-assignment, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-ideal-conditional-measurement, def-nrqm-photons-framework-fixed-mode-polarization-model, def-nrqm-state-geometry-framework-state-space, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-measurement-framework-declared-measurements-and-instruments, def-nrqm-framework-quantities-and-units, def-nrqm-state-geometry-pure-mixed-states-and-purity, lem-nrqm-photons-analyzer-projections-and-overlaps, lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues, lem-nrqm-observables-outcome-law-affinity-and-trace-norm-continuity, lem-nrqm-observables-spectral-support-and-outcome-law, lem-nrqm-measurement-selective-luders-update, lem-nrqm-measurement-nonselective-luders-map, def-hilbert-orthogonal-projection, def-resolvent-and-spectrum-of-a-closed-unbounded-operator, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  post-nrqm-photons-radiation-extension-and-transverse-mode-assignment: physical-assumption
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-ideal-conditional-measurement: physical-assumption
  def-nrqm-photons-framework-fixed-mode-polarization-model: formulation-prerequisite
  def-nrqm-state-geometry-framework-state-space: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-measurement-framework-declared-measurements-and-instruments: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: mathematical-premise
  lem-nrqm-photons-analyzer-projections-and-overlaps: mathematical-premise
  lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues: mathematical-premise
  lem-nrqm-observables-outcome-law-affinity-and-trace-norm-continuity: mathematical-premise
  lem-nrqm-observables-spectral-support-and-outcome-law: mathematical-premise
  lem-nrqm-measurement-selective-luders-update: mathematical-premise
  lem-nrqm-measurement-nonselective-luders-map: mathematical-premise
  def-hilbert-orthogonal-projection: mathematical-premise
  def-resolvent-and-spectrum-of-a-closed-unbounded-operator: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
forward_refs: [ex-nrqm-photons-malus-and-jones-analyzer-ratios]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The conditional outcome law of the declared polarisation analyser of the fixed propagation-mode model: the analyser is a declared ideal sharp measurement with projections P_theta and P_theta-perp, its Born law in a pure linear-polarisation preparation is cos^2(theta-phi) and sin^2(theta-phi), the law is affine over statistical mixtures and invariant under the phases of the preparation, the conditional post-passage state is the analysed polarisation ray, and a second ideal analyser gives the relative cos^2 law. The result is conditional on P1, P2, P3 and the adopted model; no laboratory polariser is identified with the declared ideal analyser and no empirical result is asserted."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 1.3.6 printed pages 14-15 (PDF pages 22-23): amplitudes cos(theta) and sin(theta) for transmission and blocking, the transmitted probability cos^2(theta), and the consecutive analyser discussion"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 3 'Linear algebra: vector spaces and operators', Section 7 printed pages 24-28: orthogonal projections, measurement probabilities and the unitary calculus of polarisation filters"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/04b0570b349e84d74129eef504498472_MIT8_05F13_Chap_03.pdf"
---

## Statement

Adopt the state and composition postulate P1, the observable and probability
postulate P2 and the ideal conditional-measurement postulate P3
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-ideal-conditional-measurement]]), the radiation
extension postulate clause (i)
([[post-nrqm-photons-radiation-extension-and-transverse-mode-assignment]]) and
the declared fixed-mode polarisation model
[[def-nrqm-photons-framework-fixed-mode-polarization-model]], in the state
vocabulary of [[def-nrqm-state-geometry-framework-state-space]] and the
observable and measurement vocabularies of
[[def-nrqm-observables-framework-observable-and-outcome-law]] and
[[def-nrqm-measurement-framework-declared-measurements-and-instruments]].
Assume the Axiom of Countable Choice and the Axiom of Choice, the choice
hypotheses of the cited spectral and measurement mathematics
([[def-countable-choice]], [[def-axiom-of-choice]]). Fix angles
$\varphi,\theta,\theta'\in\mathbb R$ and write
$\psi_{\varphi}=\cos\varphi\,e_{1}+\sin\varphi\,e_{2}$ and
$P_{\theta}$ for the analyser projections of the model. Then:

(a) the declared polarisation analyser at angle $\theta$ is a declared ideal
sharp measurement with outcome structure $(P_{\theta},P_{\theta}^{\perp})$, the
outcome labels $+1$ and $-1$ naming the first and second projection, in
the sense of clause (a) of
[[def-nrqm-measurement-framework-declared-measurements-and-instruments]]:
$P_{\theta}$ and $P_{\theta}^{\perp}$ are bounded orthogonal projections with
$P_{\theta}P_{\theta}^{\perp}=0$ and $P_{\theta}+P_{\theta}^{\perp}=I$;

(b) the spectral projection-valued measure $E$ of the bounded self-adjoint
operator $P_{\theta}$ (assigned with unit $1$; its values on the two outcomes
are $1$ and $0$, while the analyser labels are $+1$ and $-1$) satisfies
$$E(\{1\})=P_{\theta},\qquad E(\{0\})=P_{\theta}^{\perp},\qquad E(\mathbb R\setminus\{0,1\})=0,$$
consequently the outcome law of the assigned sharp quantity $P_{\theta}$ in a
preparation $\rho\in D(V)$ is
$$p_{+1}(\rho)=\operatorname{tr}(\rho P_{\theta}),\qquad p_{-1}(\rho)=\operatorname{tr}(\rho P_{\theta}^{\perp})=1-p_{+1}(\rho),$$
which is exactly the law of the declared analyser;

(c) for the linear-polarisation preparation $\psi_{\varphi}$ and a general
pure preparation with unit vector $\psi=\alpha e_{1}+\beta e_{2}$,
$$p_{+1}(\psi_{\varphi})=\cos^{2}(\theta-\varphi),\qquad p_{-1}(\psi_{\varphi})=\sin^{2}(\theta-\varphi),\qquad p_{+1}(\psi)=|\alpha\cos\theta+\beta\sin\theta|^{2};$$
for a statistical mixture $\rho=\sum_{n}w_{n}\rho_{n}$ of preparations the law
is affine, $p_{+1}(\rho)=\sum_{n}w_{n}p_{+1}(\rho_{n})$;

(d) the law is invariant under the phase of the preparation and under the
phase of the analysed direction: $p_{+1}$ depends only on the rays
$[\psi_{\varphi}]$ and $[e_{\theta}]$, is $2\pi$-periodic in each argument, and
satisfies $p_{+1}(\theta,\varphi)=p_{+1}(\theta-\varphi,0)$;

(e) if $p_{+1}(\rho)>0$, the conditional state after the outcome $+1$ of the
analyser is $\rho_{+1}=P_{\theta}\rho P_{\theta}/p_{+1}(\rho)$; for the pure
preparation $[\psi_{\varphi}]$ with $\cos(\theta-\varphi)\ne0$ it is the pure
state of the analysed ray $[e_{\theta}]$, and a second analyser at angle
$\theta'$ then gives the conditional probability
$\cos^{2}(\theta'-\theta)$ for the outcome $+1$. If the outcome is discarded,
the state is $\Phi(\rho)=P_{\theta}\rho P_{\theta}+P_{\theta}^{\perp}\rho P_{\theta}^{\perp}$;

(f) the assertions (a)-(e) are conditional consequences of P1, P2, P3 and the
adopted model. They assert no dynamics, no laboratory polariser, no detector
efficiency, no loss, no sampling model and no empirical result; in particular
the fraction $\cos^{2}(\theta-\varphi)$ is a model probability of the declared
ideal analyser, not a measured count.

## Facts & Assumptions

**Given:** the postulates P1, P2, P3 and the declared fixed-mode model with polarisation space $V$, orthonormal basis $(e_{1},e_{2})$, rays $[\psi_{\varphi}]$ and analyser projections $P_{\theta},P_{\theta}^{\perp}$, together with the cited spectral and measurement mathematics.

[F1] **Projection pair.** $P_{\theta}$ and $P_{\theta}^{\perp}$ are orthogonal projections on $V$ with $P_{\theta}P_{\theta}=P_{\theta}=P_{\theta}^{*}$, $P_{\theta}+P_{\theta}^{\perp}=I$, $P_{\theta}P_{\theta}^{\perp}=P_{\theta}^{\perp}P_{\theta}=0$, $\|P_{\theta}\|=1$, and their ranges are $\mathbb Ce_{\theta}$ and $\mathbb Ce_{\theta}^{\perp}$: $\ker(P_{\theta}-I)=\mathbb Ce_{\theta}$, $\ker P_{\theta}=\mathbb Ce_{\theta}^{\perp}$ ([[lem-nrqm-photons-analyzer-projections-and-overlaps]] clauses (a),(d), [[def-hilbert-orthogonal-projection]]).

[F2] **Analyser law.** For the declared analyser the outcome law of clause (ii) of P2 is $\rho\mapsto\operatorname{tr}(\rho E_{\theta}(\cdot))$ for the spectral measure of the assigned observable; a declared ideal sharp measurement has mutually orthogonal projections with strong sum $I$, outcome probabilities $\operatorname{tr}(\rho P_{a})$ and Lueders update of clause (b) of the measurement definition ([[def-nrqm-measurement-framework-declared-measurements-and-instruments]] clauses (a),(b), [[def-nrqm-observables-framework-observable-and-outcome-law]] clause (b)).

[F3] **Spectral atoms.** For a self-adjoint operator $A$ with spectral measure $E$, the projection $E(\{\lambda\})$ is the orthogonal projection onto $\ker(A-\lambda)$; hence at an eigenvalue $\lambda$ with eigenspace $\mathbb C u$, $u$ unit, one has $E(\{\lambda\})=T_{u,u}$ and $\operatorname{tr}(\rho E(\{\lambda\}))=\langle u,\rho u\rangle$ ([[lem-nrqm-observables-spectral-measure-atoms-and-eigenvalues]] clause (a)).

[F4] **Overlaps.** For all real $\varphi,\theta$: $\langle e_{\theta},\psi_{\varphi}\rangle=\cos(\theta-\varphi)$ and $\|P_{\theta}\psi_{\varphi}\|^{2}=\langle\psi_{\varphi},P_{\theta}\psi_{\varphi}\rangle=\cos^{2}(\theta-\varphi)$; moreover $P_{\theta}(z\psi)=zP_{\theta}\psi$ for all $z\in\mathbb C$ ([[lem-nrqm-photons-analyzer-projections-and-overlaps]] clauses (b),(c)).

[F5] **Affinity and updates.** The outcome law of an assigned sharp observable is affine in the preparation: $\mu^{A}_{\sum_{n}w_{n}\rho_{n}}=\sum_{n}w_{n}\mu^{A}_{\rho_{n}}$; the selective Lueders update of a declared ideal sharp measurement with outcome projection $P_{a}$ and $p_{a}=\operatorname{tr}(\rho P_{a})>0$ is $\rho_{a}=P_{a}\rho P_{a}/p_{a}$, and the discarded-outcome state is $\Phi(\rho)=\sum_{a}P_{a}\rho P_{a}$ ([[lem-nrqm-observables-outcome-law-affinity-and-trace-norm-continuity]], [[lem-nrqm-measurement-selective-luders-update]], [[lem-nrqm-measurement-nonselective-luders-map]], [[def-nrqm-state-geometry-pure-mixed-states-and-purity]]).

## Proof

1.1 [The analyser is a declared ideal sharp measurement] By [F1] the two projections of the analyser are bounded, orthogonal and mutually orthogonal with $P_{\theta}+P_{\theta}^{\perp}=I$; therefore the pair $(P_{\theta},P_{\theta}^{\perp})$ is a declared ideal sharp measurement in the sense of clause (a) of the measurement definition, with outcome labels $+1$ and $-1$. This is (a). [F1, F2, algebra]

1.2 [Spectral law] The operator $P_{\theta}$ is bounded and self-adjoint by [F1], so it has a spectral projection-valued measure $E$ ([[def-nrqm-observables-framework-observable-and-outcome-law]] clause (b)). Its eigenvalues are $1$ and $0$, with eigenspaces $\mathbb Ce_{\theta}$ and $\mathbb Ce_{\theta}^{\perp}$ by [F1]; by [F3], $E(\{1\})$ is the orthogonal projection onto $\mathbb Ce_{\theta}$, that is $P_{\theta}$, and $E(\{0\})$ is the orthogonal projection onto $\mathbb Ce_{\theta}^{\perp}$, that is $P_{\theta}^{\perp}=I-P_{\theta}$. Since $P_{\theta}$ is a projection one has $P_{\theta}^2=P_{\theta}$, so for $\lambda\notin\{0,1\}$ the bounded operator $\frac{1}{1-\lambda}P_{\theta}-\frac{1}{\lambda}(I-P_{\theta})$ is a two-sided inverse of $P_{\theta}-\lambda I$ (multiplying out gives $P_{\theta}+(I-P_{\theta})=I$), hence the spectrum is contained in $\{0,1\}$ ([[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]], [[def-hilbert-orthogonal-projection]]); therefore $E(\mathbb R\setminus\{0,1\})=E(\mathbb R\setminus\sigma(P_{\theta}))=0$ by [[lem-nrqm-observables-spectral-support-and-outcome-law]] clause (a). For any preparation $\rho$ the outcome law of the assigned quantity $P_{\theta}$ at the value $1$ is $\operatorname{tr}(\rho E(\{1\}))=\operatorname{tr}(\rho P_{\theta})$ by [F2]; at the value $-1$ the projection is $E(\{0\})=P_{\theta}^{\perp}$, and the two weights sum to $\operatorname{tr}(\rho I)=1$. This is (b). [F1, F2, F3, algebra]

1.3 [Pure preparations] Let $\psi=\alpha e_{1}+\beta e_{2}$ be a unit vector. Since $E(\{1\})=P_{\theta}$, the probability is $\|P_{\theta}\psi\|^{2}=\langle\psi,P_{\theta}\psi\rangle=|\langle\psi,e_{\theta}\rangle|^{2}=|\alpha\cos\theta+\beta\sin\theta|^{2}$; for $\psi=\psi_{\varphi}$ this equals $\cos^{2}(\theta-\varphi)$ by [F4], and then $p_{-1}=1-p_{+1}=\sin^{2}(\theta-\varphi)$. [F1, F3, F4, algebra]

1.4 [Mixtures and phases] If $\rho=\sum_{n}w_{n}\rho_{n}$ is a statistical mixture, [F5] gives $p_{+1}(\rho)=\sum_{n}w_{n}\operatorname{tr}(\rho_{n}P_{\theta})=\sum_{n}w_{n}p_{+1}(\rho_{n})$. The number $|\langle z\psi,e_{\theta}\rangle|^{2}/\|z\psi\|^{2}=|\langle\psi,e_{\theta}\rangle|^{2}$ for $z\ne0$ is unchanged by scaling the representative, so the law depends only on the rays; the identities $P_{\theta+2\pi}=P_{\theta}$ and $P_{\theta+\pi}=P_{\theta}$ of [F4] give the stated periodicities, and $p_{+1}(\theta,\varphi)=\cos^{2}(\theta-\varphi)=p_{+1}(\theta-\varphi,0)$. This proves (c) and (d). [F4, F5, algebra]

2.1 [Conditional and discarded states] Let $\rho$ be a preparation with $p_{+1}(\rho)>0$. By [F5] the conditional state after the outcome $+1$ is $\rho_{+1}=P_{\theta}\rho P_{\theta}/p_{+1}(\rho)$. For the pure preparation of $\psi_{\varphi}$ with $\cos(\theta-\varphi)\ne0$ one has $P_{\theta}\psi_{\varphi}=\langle\psi_{\varphi},e_{\theta}\rangle e_{\theta}=\cos(\theta-\varphi)e_{\theta}$ by [F4]; hence $P_{\theta}\rho P_{\theta}=|\cos(\theta-\varphi)|^{2}T_{e_{\theta},e_{\theta}}$ and $\rho_{+1}=T_{e_{\theta},e_{\theta}}$, the pure state of the ray $[e_{\theta}]$ ([[def-nrqm-state-geometry-pure-mixed-states-and-purity]]). Applying the pure-preparation formula of step 1.3 to the preparation $[e_{\theta}]$ at analyser angle $\theta'$ gives conditional probability $|\langle e_{\theta},e_{\theta'}\rangle|^{2}=\cos^{2}(\theta'-\theta)$ by [F4]. The discarded-outcome state is $\Phi(\rho)=P_{\theta}\rho P_{\theta}+P_{\theta}^{\perp}\rho P_{\theta}^{\perp}$ by [F5]. This proves (e). [F4, F5, step 1.3, algebra]

3.1 [Assembly and scope] Steps 1.1 and 1.2 prove (a) and (b), steps 1.3 and 1.4 prove (c) and (d), and step 2.1 proves (e). All assertions are conditional on P1, P2, P3 and the adopted model; no laboratory apparatus, no sampling model and no measured number occurs in the argument, which is (f). [step 1.1, step 1.2, step 1.3, step 1.4, step 2.1] ∎

## Remarks

- **The same number classically.** The number $\cos^{2}(\theta-\varphi)$ is also
  the intensity ratio of the declared classical transverse-field model of
  [[ex-nrqm-photons-malus-and-jones-analyzer-ratios]]; the comparison shows
  that this ratio alone does not distinguish the two declared models.
- **Absorption.** For a laboratory absorber the "blocked" outcome of the
  declared analyser is used only through its discarded-outcome law: clause (v)
  of P3 asserts no post-absorption one-photon state, and no such state is used
  here.
