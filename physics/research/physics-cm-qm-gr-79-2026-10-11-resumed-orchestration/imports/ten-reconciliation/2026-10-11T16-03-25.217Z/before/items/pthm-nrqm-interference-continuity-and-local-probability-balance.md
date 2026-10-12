---
id: pthm-nrqm-interference-continuity-and-local-probability-balance
aliases: [nrqm-interference-continuity-and-local-probability-balance]
kind: physics-theorem
domain: physics
title: "Continuity equation and local balance of the position probability of the massive model"
status: draft
origin: session
dependency_level: 9
deps: [def-nrqm-kinematics-framework-massive-spin-s-model, def-nrqm-autonomous-dynamics-framework-evolution, pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow, thm-nrqm-magnetic-and-detection-smooth-local-continuity-calculation, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle, post-nrqm-framework-identical-particles-and-spin, def-nrqm-framework-quantities-and-units, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-kinematics-framework-massive-spin-s-model: formulation-prerequisite
  def-nrqm-autonomous-dynamics-framework-evolution: formulation-prerequisite
  pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow: physical-result
  thm-nrqm-magnetic-and-detection-smooth-local-continuity-calculation: mathematical-premise
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle: physical-assumption
  post-nrqm-framework-identical-particles-and-spin: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The local probability balance of the massive spin-s model of the framework in its smooth regime: for a componentwise C2 solution of the model's Schroedinger equation with a continuous real potential, the position density and the model's probability current satisfy the pointwise continuity equation and its integrated form over bounded C1 regions with zero normal flux boundary, and the total position probability is conserved under explicit domination and surface-flux hypotheses; separately, the model's assigned unitary flow conserves the norm of every state without regularity hypotheses. The statement is conditional on P1, P2, P4, P5 and P6 and the cited mathematics. It does not assert that the flow of an arbitrary L2 initial vector possesses a C2 representative, does not identify a screen record rate with the surface flux, and records no empirical result."
sources:
  references:
    - title: "D. Tong, Quantum Mechanics (author-hosted lecture set), Section 1.2, printed pages 9-13 (PDF pages 12-16): the Schroedinger equation and conservation of total probability; Section 1.3 printed pages 14-18: the probability current"
      url: "https://davidtong.org/pdfs/teaching/quantum-mechanics/qm.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 2.3 printed pages 32-33 (PDF pages 40-41): the probability current, the continuity equation and the surface-flux balance"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the state and composition postulate P1, the observable and probability
postulate P2, the autonomous-dynamics postulate P4 and the kinematics and
massive-particle model postulate P5 with its internal-factor postulate P6, all
read through [[def-nrqm-kinematics-framework-massive-spin-s-model]] and
[[def-nrqm-autonomous-dynamics-framework-evolution]]
([[post-nrqm-framework-state-and-composition]],
[[post-nrqm-framework-observable-and-probability]],
[[post-nrqm-framework-autonomous-dynamics]],
[[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]],
[[post-nrqm-framework-identical-particles-and-spin]]). Assume the Axiom of
Countable Choice and the Axiom of Choice ([[def-countable-choice]],
[[def-axiom-of-choice]]). Fix $m>0$, a spin label $s$ with $r=2s+1$, nonempty
open sets $\Omega\subseteq\mathbb R^{3}$ and $I\subseteq\mathbb R$, a
continuous real $V:\Omega\to\mathbb R$, and a function
$\psi:\Omega\times I\to\mathbb C^{r}$ whose components $\psi_{l}$ and the
functions $\partial_{t}\psi_{l}$, $\partial_{j}\psi_{l}$,
$\partial_{k}\partial_{j}\psi_{l}$ exist and are continuous on
$\Omega\times I$, and which satisfies the **model equation**
$$i\hbar\,\partial_{t}\psi_{l}(x,t)=-\frac{\hbar^{2}}{2m}\Delta\psi_{l}(x,t)+V(x)\psi_{l}(x,t)\qquad(l=1,\dots,r,\ (x,t)\in\Omega\times I),$$
the componentwise reading of the Schroedinger equation of the model
([[def-nrqm-kinematics-framework-massive-spin-s-model]] clause (a),
[[def-nrqm-autonomous-dynamics-framework-evolution]] clause (c)). Define the
**position density** and the **probability current** of the model by
$$n(x,t):=\|\psi(x,t)\|_{\mathbb C^{r}}^{2},\qquad j(x,t):=\frac{\hbar}{m}\operatorname{Im}\bigl\langle\psi(x,t),\nabla\psi(x,t)\bigr\rangle_{\mathbb C^{r}} =\frac{\hbar}{m}\sum_{l=1}^{r}\operatorname{Im}\bigl(\overline{\psi_{l}(x,t)}\,\nabla\psi_{l}(x,t)\bigr).$$
Then:

(a) *Pointwise continuity.* For every $(x,t)\in\Omega\times I$,
$$\partial_{t}n(x,t)+\operatorname{div}j(x,t)=0 .$$

(b) *Integrated balance.* If $D\subseteq\Omega$ is a bounded open set with
$C^{1}$ boundary and $\overline D\subseteq\Omega$
([[thm-nrqm-magnetic-and-detection-smooth-local-continuity-calculation]], in
which the divergence theorem for such domains is cited), then $t\mapsto\int_{D}n(x,t)dx$
is differentiable on $I$ with
$$\frac{d}{dt}\int_{D}n(x,t)\,dx=-\int_{\partial D}j(x,t)\cdot\nu(x)\,dS ,$$
$\nu$ the outward unit normal.

(c) *Global conservation under domination.* If $\Omega=\mathbb R^{3}$, if for
every $l$ there is $g_{l}\in L^{1}(\mathbb R^{3})$ with
$|\psi_{l}(x,t)|^{2}\le g_{l}(x)$ for almost every $x$ and every $t\in I$, and
if $\lim_{R\to\infty}\sup_{t\in I}\int_{\{|x|=R\}}|j_{l}(x,t)|\,dS=0$ for every
$l$, then $t\mapsto\sum_{l}\int_{\mathbb R^{3}}|\psi_{l}(x,t)|^{2}dx$ is
constant on $I$.

(d) *Flow conservation.* For the model's assigned unitary flow
$U(t)=\exp(-itH_{\mathrm{op}}/\hbar)$ on the model's state space and every
$\psi_{0}\in H_{s}$, one has $\|U(t)\psi_{0}\|=\|\psi_{0}\|$ for every
$t\in\mathbb R$; consequently the model's position probability of a unit
preparation integrates to one at every time, without the regularity hypotheses
of (a)-(c) ([[pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow]] clause
(a)).

(e) *Units, reading and scope.* In the SI conventions of
[[def-nrqm-framework-quantities-and-units]] the density $n$ has unit
$\mathrm m^{-3}$ and the current $j$ has unit $\mathrm m^{-2}\mathrm s^{-1}$;
the display of (a) is the local balance of the model's position probability in
its smooth regime, and (b) reads the rate of change of the probability of a
region as minus the outward probability flux across its boundary. The
statement does not assert that the flow of an arbitrary $L^{2}$ initial vector
has a representative obeying the regularity hypotheses of (a)-(c), does not
identify a recorded screen rate or any detection law with the surface flux (the
detection model of this page is the declared effect and bin model), and records
no empirical result.

## Facts & Assumptions

**Given:** The postulates and model readings of the statement; the Axiom of Countable Choice and the Axiom of Choice; $m>0$, $r=2s+1$, open $\Omega\subseteq\mathbb R^{3}$ and interval $I$, continuous real $V$, the componentwise $C^{2}$ solution $\psi$ of the model equation, and the density $n$ and current $j$; in (d) a state vector $\psi_{0}\in H_{s}$ and the flow $U(t)$.

[F1] **Smooth scalar continuity theorem.** For $\hbar>0$, $m>0$, open $\Omega\subseteq\mathbb R^{3}$, an open interval $I$, continuous real $V$ and a $C^{2}$ solution $u$ of $i\hbar\partial_{t}u=-\frac{\hbar^{2}}{2m}\Delta u+Vu$ on $\Omega\times I$ with continuous $\partial_{t}u$, the current $j_{u}:=\frac{\hbar}{m}\operatorname{Im}(\overline u\nabla u)$ satisfies $\partial_{t}|u|^{2}+\operatorname{div}j_{u}=0$ pointwise and, on every bounded open $D$ with $C^{1}$ boundary and $\overline D\subseteq\Omega$, $\frac{d}{dt}\int_{D}|u|^{2}dx=-\int_{\partial D}j_{u}\cdot\nu\,dS$; moreover, if $\Omega=\mathbb R^{3}$, $|u(x,t)|^{2}\le g(x)$ for a.e. $x$ and every $t$ with $g\in L^{1}$, and $\lim_{R\to\infty}\sup_{t\in I}\int_{\{|x|=R\}}|j_{u}(x,t)|dS=0$, then $\int_{\mathbb R^{3}}|u|^{2}dx$ is constant on $I$ ([[thm-nrqm-magnetic-and-detection-smooth-local-continuity-calculation]] clauses (a)-(c)).

[F2] **Componentwise model equation.** The model's scalar Hamiltonian is $H_{\mathrm{op}}=-\frac{\hbar^{2}}{2m}\Delta+V(Q)$ on the componentwise domain $W^{2,2}$, acting componentwise; its assigned flow is $U(t)=\exp(-itH_{\mathrm{op}}/\hbar)$, and the Schroedinger equation holds in the norm-differentiable sense on the domain ([[def-nrqm-kinematics-framework-massive-spin-s-model]] clause (a), [[def-nrqm-autonomous-dynamics-framework-evolution]] clauses (a)-(c), [[post-nrqm-framework-autonomous-dynamics]] clauses (i)-(iii), [[post-nrqm-framework-nonrelativistic-kinematics-and-massive-particle]] clause (iv)).

[F3] **Flow conservation.** For the model's flow, $\|U(t)\psi_{0}\|=\|\psi_{0}\|$ for every $\psi_{0}\in H_{s}$ and every $t$, and the flow is a strongly continuous one-parameter unitary group ([[pthm-nrqm-autonomous-dynamics-schrodinger-picture-flow]] clause (a)).

[F4] **Units.** The position wave function of the model has unit $\mathrm m^{-3/2}$ in the position measure, so $n=|\psi|^{2}$ has unit $\mathrm m^{-3}$, the action $\hbar$ has unit $\mathrm J\,\mathrm s$, the mass $m$ has unit $\mathrm{kg}$, and $\hbar/m$ has unit $\mathrm m^{2}\mathrm s^{-1}$, so the current $j$ has unit $\mathrm m^{-2}\mathrm s^{-1}$ ([[def-nrqm-framework-quantities-and-units]]).

## Proof

**Proof technique:** direct; apply the scalar continuity theorem to each component of the model equation, sum the componentwise identities and balances, sum the global conservation statements under the stated domination and flux hypotheses, and read flow conservation off the model's unitary group.

**Given:** The data of the statement and [F1]-[F4].

1.1 [Componentwise continuity] For each $l$ the component $\psi_{l}$ satisfies the hypotheses of [F1] with the same $\Omega,I,V$ by [F2], so $\partial_{t}|\psi_{l}|^{2}+\operatorname{div}j_{l}=0$ pointwise with $j_{l}=\frac{\hbar}{m}\operatorname{Im}(\overline{\psi_{l}}\nabla\psi_{l})$, and on every admissible $D$ one has $\frac{d}{dt}\int_{D}|\psi_{l}|^{2}dx=-\int_{\partial D}j_{l}\cdot\nu\,dS$. [given, F1, F2]

1.2 [Flow conservation] By [F3] applied to the model's flow, $\|U(t)\psi_{0}\|=\|\psi_{0}\|$ for every $\psi_{0}\in H_{s}$ and $t\in\mathbb R$; for a unit $\psi_{0}$ the total position probability is $\|U(t)\psi_{0}\|^{2}=1$ at every time. This proves (d). [given, F3, algebra]

2.1 [Summed local balance] Since $n=\sum_{l}|\psi_{l}|^{2}$, $j=\sum_{l}j_{l}$ and the sum is finite, adding the $r$ equations of step 1.1 gives $\partial_{t}n+\operatorname{div}j=\sum_{l}(\partial_{t}|\psi_{l}|^{2}+\operatorname{div}j_{l})=0$ pointwise on $\Omega\times I$, which is (a). For (b), finitely many differentiable functions may be added, so $t\mapsto\int_{D}n\,dx=\sum_{l}\int_{D}|\psi_{l}|^{2}dx$ is differentiable with derivative $-\sum_{l}\int_{\partial D}j_{l}\cdot\nu\,dS=-\int_{\partial D}j\cdot\nu\,dS$ by step 1.1 and linearity of the surface integral. [given, step 1.1, algebra]

2.2 [Global conservation] Assume the hypotheses of (c). Each component satisfies the domination hypothesis $|\psi_{l}|^{2}\le g_{l}$ and the flux hypothesis of [F1], so $\int|\psi_{l}|^{2}dx$ is constant on $I$ for every $l$; the finite sum $t\mapsto\sum_{l}\int|\psi_{l}|^{2}dx$ is then constant on $I$. This proves (c). [given, step 1.1, F1, algebra]

3.1 [Conclusion] Steps 2.1, 2.2 and 1.2 establish (a)-(d); the unit computation of (e) reads the wave-function unit, the action unit and the mass unit of [F4]: $\hbar/m$ has unit $\mathrm m^{2}\mathrm s^{-1}$, so $j$ has unit $\mathrm m^{-2}\mathrm s^{-1}$ while $n$ has unit $\mathrm m^{-3}$. The remaining assertions of (e) are scope statements: no regularity of the flow of an arbitrary $L^{2}$ vector is claimed, and no detection law is identified with the flux. [step 1.2, step 2.1, step 2.2, F4, algebra] ∎

## Remarks

- **The smooth regime is an added hypothesis.** The theorem concerns a
  componentwise $C^{2}$ solution of the model equation. The model's assigned
  flow is norm-differentiable on its domain and conserves the total
  probability, but the existence of a $C^{2}$ representative with the stated
  pointwise equation is a separate regularity assumption and is not derived
  here.
- **The current is not a detection rate.** The current $j$ describes the local
  balance of the model's position probability; it is not by itself the
  recorded rate of a detector. The pair's recorded-outcome model assigns
  probabilities through the declared effects of the recorded detector.
