---
id: def-cm18-observable-model
kind: definition
title: "Operational observable model of the force branch: parameters, preparations, observation times, readout, units and additive error"
status: draft
origin: pipeline
domain: physics
deps: [post-cm01-frames, post-cm01-worldlines, def-cm01-configuration, def-cm01-units, post-cm02-force-superposition, def-cm02-newtonian-flow, pthm-cm02-ivp, def-cm-measurement-model, def-probability-measure, def-random-element-and-real-random-variable]
dependency_roles:
  post-cm01-frames: formulation-prerequisite
  post-cm01-worldlines: formulation-prerequisite
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  post-cm02-force-superposition: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  pthm-cm02-ivp: physical-result
  def-cm-measurement-model: mathematical-premise
  def-probability-measure: mathematical-premise
  def-random-element-and-real-random-variable: mathematical-premise
dependency_level: 11
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "Operational observable models of an adopted force model: a parameter set indexing force maps, a preparation map assigning initial data, a finite family of observation times lying in the maximal motions, a declared readout of the model states, declared units for the readout coordinates, a probability space and an additive error random element with values in a declared open error domain. The item fixes the interface between the force branch and the measurement-model machinery of the companion mathematics page; it asserts no distributional, moment, independence or calibration hypothesis, no apparatus realization and no measurement, and it does not claim that any physical situation satisfies the protocol."
sources:
  references:
    - title: "JCGM 100:2008, Evaluation of measurement data - Guide to the expression of uncertainty in measurement (BIPM, 2008 corrected version), clauses 4.1.1-4.1.4 and equation (1): the measurand function Y = f(X1, ..., XN), the input quantities and the correction quantities; clause 4.1.3 on values brought in from calibrated standards"
      url: "https://www.bipm.org/documents/20126/2071204/JCGM_100_2008_E.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 1.2, chapter pages 3-4 (PDF pages 7-8): the equation of motion m a = F as model input with the force law and its parameters supplied by the model, and the empirical status of the law itself"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.3, printed pages 5-9 (PDF pages 11-15): external forces as declared model contributions and the open-system warning that a force whose source is not modelled must be declared as external"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: n/a
---

## Definition

Fix a force model of the force branch [[post-cm02-force-superposition]]: a
nondegenerate open time window $I_{0}\subseteq\mathbb R$, an open configuration
domain $Q\subseteq\mathbb R^{3N}$ for $N\ge1$ particle labels, with the
collision set removed when the model's force law is singular there
([[def-cm01-configuration]] clause (a)), fixed masses $m_{1},\dots,m_{N}>0$
([[post-cm01-worldlines]] clause (v)), and a force map
$$F:I_{0}\times Q\times(\mathbb R^{3})^{N}\longrightarrow(\mathbb R^{3})^{N}$$
with the standing continuity and state-local-Lipschitz hypotheses of clause
(iii) of that postulate. Fix one inertial frame of the model with adapted
coordinates $(t,x)$ ([[post-cm01-frames]]) and read all times and positions
below in this frame; dimensions and units are those of [[def-cm01-units]].

**Protocol.** An **operational observable model** of this force model in the
frame consists of the following data.

1. **Parameters.** A nonempty set $\Theta$, the **model parameters**, with a
   family $(F_{\theta})_{\theta\in\Theta}$ of force maps on
   $I_{0}\times Q\times(\mathbb R^{3})^{N}$, each satisfying the standing
   hypotheses of the force branch, so that $\bigl(I_{0},Q,(m_{i}),F_{\theta}\bigr)$
   is a force model of that branch for every $\theta\in\Theta$.
2. **Preparations.** A nonempty set $Z$, the **apparatus and preparation
   settings**, and a map $\zeta:Z\to I_{0}\times Q\times(\mathbb R^{3})^{N}$,
   written $\zeta(z)=\bigl(t_{0}(z),x_{0}(z),v_{0}(z)\bigr)$, assigning to
   each setting an initial datum of the model.
3. **Observation times.** A finite strictly increasing family
   $t_{1}<\dots<t_{k}$ in $I_{0}$ with $k\ge1$, the **observation times**.
4. **Definedness.** For every $(\theta,z)\in\Theta\times Z$ the model with
   force map $F_{\theta}$ and initial datum $\zeta(z)$ has a unique maximal
   motion $x_{\theta,z}:J_{\theta,z}\to Q$, with $J_{\theta,z}\subseteq
   I_{0}$ an open interval containing $t_{0}(z)$
   ([[def-cm02-newtonian-flow]], [[pthm-cm02-ivp]]), and the protocol requires
   $[t_{1},t_{k}]\subseteq J_{\theta,z}$. Its **state** at $t_{j}$ is
   $$s_{\theta,z}(t_{j}):=\bigl(x_{\theta,z}(t_{j}),\,w_{\theta,z}(t_{j})\bigr) \in Q\times(\mathbb R^{3})^{N},$$
   where $w_{\theta,z}:=x_{\theta,z}'$ is the coordinate velocity.
5. **Readout.** An integer $d\ge1$ and a map
   $$R:\Theta\times Z\times\bigl(\mathbb R^{3N}\times\mathbb R^{3N}\bigr)^{k} \longrightarrow\mathbb R^{d},$$
   the **readout**, which takes $(\theta,z)$ and an ordered $k$-tuple of
   states as inputs and returns the $d$ numerical readout coordinates; the
   **prediction map** is
   $$\Phi:\Theta\times Z\longrightarrow\mathbb R^{d},\qquad \Phi(\theta,z):=R\bigl(\theta,z,s_{\theta,z}(t_{1}),\dots, s_{\theta,z}(t_{k})\bigr).$$
   No regularity of $R$ in the parameters is assumed; continuity,
   differentiability or measurability in $\theta$ or in the states is an
   additional hypothesis, declared where it is used.
6. **Units.** For each $j\le d$ a dimension $[\Phi_{j}]$ from
   [[def-cm01-units]] is declared, and the coordinate $\Phi_{j}(\theta,z)$ is
   read in the corresponding unit.
7. **Error and observation.** A probability space $(\Omega,\mathfrak F,
   \mathbb P)$ ([[def-probability-measure]]), an open **error domain**
   $V\subseteq\mathbb R^{d}$ with $0\in V$, and a random element
   $\varepsilon:\Omega\to\mathbb R^{d}$ with $\varepsilon(\omega)\in V$ for
   every $\omega$ ([[def-random-element-and-real-random-variable]]). The
   **observation** at $(\theta,z)$ is the random element
   $$Y_{\theta,z}:=\Phi(\theta,z)+\varepsilon:\Omega\longrightarrow\mathbb R^{d},$$
   the sum being read coefficientwise in the declared units, so that the
   coordinate $\varepsilon_{j}$ carries the dimension $[\Phi_{j}]$ for every
   $j$ (rule (b) of [[def-cm01-units]]).

### Well-definedness and conventions

**Well-definedness.** The prediction map is well defined: for each
$(\theta,z)$ the maximal motion is unique by [[pthm-cm02-ivp]], and clause 4
puts the observation times in its interval. For fixed $(\theta,z)$ the
observation is a random element in the sense of
[[def-random-element-and-real-random-variable]]: the map
$\tau(u):=\Phi(\theta,z)+u$ is a translate of $\mathbb R^{d}$, hence
continuous, its preimages of Borel sets are Borel, and
$Y_{\theta,z}^{-1}(B)=\varepsilon^{-1}\bigl(\tau^{-1}(B)\bigr)\in\mathfrak F$
by the measurability of $\varepsilon$. This repeats the argument of
[[def-cm-measurement-model]] for the additive-error observation model with
$h=\Phi$; the mathematical interface used below is exactly that definition.

**No hypothesis on the error is part of the definition.** Mean zero,
square-integrability, boundedness, a stated law, independence across
repetitions, stationarity and calibration are **not** part of the definition;
each must be stated at its point of use, with its exact quantifiers, exactly
as in [[def-cm-measurement-model]]. In particular a deterministic error, for
which $\varepsilon$ is a constant random element, is admitted; the definition
then records a modelled residual rather than a probabilistic error.

**Frame relativity of the protocol.** The observation times are times of the
declared frame, and the prediction map is read in that frame's coordinates;
a change of inertial frame re-expresses the coordinate times and states,
and the readout must be transformed according to its declared law for the
same physical protocol. Its numerical value need not change: the admitted
constant readout $R\equiv0$, for example, has $\Phi\equiv0$ in every frame. The framework therefore always names the frame
in which a protocol is specified; no frame-independent reading of $\Phi$ or
$\varepsilon$ is asserted.

**Scope.** The definition constructs an interface, not a measurement. It does
not assert that any apparatus realizes the protocol, that any preparation can
be reproduced, that the declared error domain or law is correct, or that
$\Phi$ agrees with any physical system. A statement that a physical procedure
satisfies the protocol requires separate empirical evidence, and no such
evidence is part of this item.
