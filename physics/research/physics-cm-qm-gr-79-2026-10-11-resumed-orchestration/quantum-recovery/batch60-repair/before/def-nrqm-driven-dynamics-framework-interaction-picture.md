---
id: def-nrqm-driven-dynamics-framework-interaction-picture
aliases: [nrqm-driven-dynamics-framework-interaction-picture]
kind: definition
domain: physics
title: "The interaction picture of the declared driven model: readings, the interaction propagator and picture equivalence of outcome laws"
status: draft
origin: session
dependency_level: 9
deps: [def-nrqm-driven-dynamics-framework-driven-model, def-nrqm-autonomous-dynamics-framework-evolution, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, def-nrqm-observables-framework-observable-and-outcome-law, def-nrqm-state-geometry-pure-mixed-states-and-purity, lem-nrqm-autonomous-dynamics-heisenberg-flow, lem-nrqm-composites-density-and-scalar-spectral-probability, def-hilbert-space, def-bounded-linear-operator, def-operator-norm, def-symmetric-self-adjoint-and-essentially-self-adjoint, thm-nrqm-controlled-dynamics-strong-bounded-interaction-picture, def-inner-product-space, def-countable-choice, def-axiom-of-choice, def-nrqm-framework-quantities-and-units]
dependency_roles:
  def-nrqm-driven-dynamics-framework-driven-model: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-nrqm-state-geometry-pure-mixed-states-and-purity: formulation-prerequisite
  lem-nrqm-autonomous-dynamics-heisenberg-flow: mathematical-premise
  lem-nrqm-composites-density-and-scalar-spectral-probability: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  thm-nrqm-controlled-dynamics-strong-bounded-interaction-picture: mathematical-premise
  def-inner-product-space: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The interaction-picture readings of the declared driven model in the bounded-control class: the free-flow factor E(t) = exp(-itH0/hbar), the interaction state, interaction preparation and interaction propagator, the interaction-picture control V_I(t), the decomposition of the physical propagator, the agreement of the two pictures' outcome laws under the conjugate observable, and the agreement of energy-basis transition probabilities. The item fixes terminology and readings only; it adopts no assumption beyond the declared driven model, P1, P2 and the cited mathematics, and asserts no measurement, apparatus, detector or empirical result."
sources:
  references:
    - title: "B. Zwiebach, MIT 8.05 Quantum Physics II (Fall 2013), Chapter 6 'Quantum Dynamics', Section 2.3 printed pages 15-17 (PDF pages 15-17): the time-ordered exponential of a time-dependent Hamiltonian and the interaction-picture construction"
      url: "https://ocw.mit.edu/courses/8-05-quantum-physics-ii-fall-2013/79a8091ef4f18d8e3ff76a097e8db33c_MIT8_05F13_Chap_06.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Chapter 5 printed pages 123-131 (PDF pages 135-143): unitary dynamics and the relation between the Schroedinger and interaction pictures"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: n/a
---

## Definition

**(a) Setting.** Adopt the framework data and the declared driven model of [[def-nrqm-driven-dynamics-framework-driven-model]] in the **bounded-control class** of its clause (b)(ii): $\mathfrak H$ is the model's state space ([[def-hilbert-space]]), $H_{0}$ is self-adjoint on its exact dense domain $D(H_{0})$ ([[def-symmetric-self-adjoint-and-essentially-self-adjoint]]), $V:I\to\mathcal B(\mathfrak H)$ is strongly continuous with self-adjoint values and $v=\sup_{t\in I}\|V(t)\|<\infty$ ([[def-bounded-linear-operator]], [[def-operator-norm]]), $H(t)=H_{0}+V(t)$ on $D(H_{0})$, and $U(t,s)$ is the mild propagator of clause (c)(ii) constructed in [[thm-nrqm-controlled-dynamics-strong-bounded-interaction-picture]]. The readings of P1 and P2 are those of [[post-nrqm-framework-state-and-composition]], [[post-nrqm-framework-observable-and-probability]], [[def-nrqm-state-geometry-pure-mixed-states-and-purity]] and [[def-nrqm-observables-framework-observable-and-outcome-law]]; all times lie in $I$ and are read in seconds as in [[def-nrqm-framework-quantities-and-units]]. Assume the Axiom of Countable Choice and the Axiom of Choice as the choice hypotheses of the cited suppliers ([[def-countable-choice]], [[def-axiom-of-choice]]).

**(b) The free-flow factor.** The **free-flow factor** of the model is the autonomous flow of the unperturbed part,
$$E(t):=e^{-itH_{0}/\hbar}\qquad(t\in I),$$
the reading of clause (b) of [[def-nrqm-autonomous-dynamics-framework-evolution]] applied to the assigned energy observable $(H_{0},\mathrm J)$; it is a strongly continuous one-parameter unitary family restricted to $I$. The **interaction-picture control** is the family $V_{I}:I\to\mathcal B(\mathfrak H)$,
$$V_{I}(t):=E(-t)V(t)E(t),$$
which is strongly continuous with self-adjoint values and $\|V_{I}(t)\|=\|V(t)\|\le v$. The **interaction propagator** is
$$U_{I}(t,s):=E(-t)U(t,s)E(s)\qquad(s,t\in I),$$
and the model's clause (c)(ii) supplies, as the cited theorem proves, the decomposition
$$U(t,s)=E(t)U_{I}(t,s)E(-s).$$
The interaction propagator is unitary, jointly strongly continuous, satisfies $U_{I}(s,s)=I$ and the cocycle $U_{I}(t,r)=U_{I}(t,s)U_{I}(s,r)$, and its first-endpoint map is strongly differentiable with
$$i\hbar\,\partial_{t}U_{I}(t,s)\psi=V_{I}(t)U_{I}(t,s)\psi\qquad(\psi\in\mathfrak H),$$
all as supplied by [[thm-nrqm-controlled-dynamics-strong-bounded-interaction-picture]]; these are readings of that theorem in the model's vocabulary, not new assumptions.

**(c) Interaction states and preparations.** For a Schroedinger-picture state vector $\psi(t)=U(t,s)\psi(s)$ the **interaction-picture state** is
$$\psi_{I}(t):=E(-t)\psi(t),\qquad\text{equivalently}\qquad\psi_{I}(t)=U_{I}(t,s)\psi_{I}(s),$$
and for a preparation $\rho$ with $\rho(t)=U(t,s)\rho(s)U(t,s)^{*}$ the **interaction-picture preparation** is
$$\rho_{I}(t):=E(-t)\rho(t)E(t),$$
which is again a preparation of the model by [[lem-nrqm-composites-density-and-scalar-spectral-probability]]; for a pure preparation $[\psi(s)]$, $[\psi_{I}(t)]$ is pure. The map $\psi(t)\mapsto\psi_{I}(t)$ is unitary at every $t$, so $\|\psi_{I}(t)\|=\|\psi(t)\|$.

**(d) The two pictures assign the same outcome laws.** Let $(A,u_{A})$ be an assigned sharp observable with $A\in\mathcal B(\mathfrak H)$ bounded and let $A_{I}(t):=E(-t)AE(t)$ be its interaction-picture representative, which is again a bounded self-adjoint observable with $E_{A_{I}(t)}(B)=E(-t)E_{A}(B)E(t)$ for every Borel set $B$ by clause (d) of [[lem-nrqm-autonomous-dynamics-heisenberg-flow]] applied to the flow $E$ of the self-adjoint $T=-H_{0}/\hbar$. Then for every preparation $\rho$ specified at $s$ and every $t\in I$,
$$\mu^{A}_{\rho(t)}(B)=\mu^{A_{I}(t)}_{\rho_{I}(t)}(B)\qquad(B\subseteq\mathbb R\ \text{Borel}),$$
because $\rho(t)=E(t)\rho_{I}(t)E(-t)$ and $\operatorname{tr}\bigl(E(t)\rho_{I}E(-t)E_{A}(B)\bigr)=\operatorname{tr}\bigl(\rho_{I}E(-t)E_{A}(B)E(t)\bigr)$ by cyclicity of the trace; equivalently, for a pure preparation, $\|E_{A}(B)\psi(t)\|=\|E_{A_{I}(t)}(B)\psi_{I}(t)\|$. This identity is the precise sense in which the two pictures are two bookkeeping devices for the same model; it is a reading of P2 together with the cited mathematics, not a claim about apparatuses.

**(e) Energy-basis transition amplitudes.** Let $\varphi_{a},\varphi_{b}\in D(H_{0})$ be unit eigenvectors, $H_{0}\varphi_{a}=E_{a}\varphi_{a}$, $H_{0}\varphi_{b}=E_{b}\varphi_{b}$, and let $A_{ba}(t,s)$ and $p_{ba}(t,s)$ be the transition amplitude and probability of clause (e) of [[def-nrqm-driven-dynamics-framework-driven-model]]. Then
$$A_{ba}(t,s)=e^{is(E_{a}-E_{b})/\hbar}\bigl\langle U_{I}(t,s)\varphi_{a},\varphi_{b}\bigr\rangle ,\qquad\text{hence}\qquad p_{ba}(t,s)=\bigl|\bigl\langle U_{I}(t,s)\varphi_{a},\varphi_{b}\bigr\rangle\bigr|^{2},$$
by the decomposition of clause (b) and $E(-s)\varphi_{a}=e^{isE_{a}/\hbar}\varphi_{a}$, $\langle E(t)\chi,\varphi_{b}\rangle=e^{-itE_{b}/\hbar}\langle\chi,\varphi_{b}\rangle$; the phases are of modulus one ([[def-inner-product-space]]). The transition probability is therefore computable in either picture, and the definition records this as the reading used by the page's amplitude theorem; no measurement frequency or rate is defined.

**(f) Status and scope.** Clauses (b)-(e) are readings of the declared driven model, of clauses (b)-(e) of [[def-nrqm-driven-dynamics-framework-driven-model]], and of P1 and P2, in the vocabulary of the cited mathematics. The interaction picture is a change of description of the same model: it adds no assumption, no physical process, no measurement and no empirical claim, and it asserts nothing about detectors, records or the laboratory realization of the model.
