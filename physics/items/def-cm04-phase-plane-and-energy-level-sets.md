---
id: def-cm04-phase-plane-and-energy-level-sets
kind: definition
title: "The phase plane of a one-dimensional model: phase curves, the energy function and its level sets, and turning points"
status: published
origin: session
domain: physics
dependency_level: 13
deps: [def-cm04-one-dimensional-models-and-equilibria, def-cm01-units, def-cm-mechanical-vector-field-and-energy-in-a-chart, def-cm-equilibrium-and-lyapunov-stability, def-cm-orbital-and-linear-stability, def-euclidean-inner-product, def-interval, def-cm-oscillator-model-and-phase-system]
dependency_roles:
  def-cm04-one-dimensional-models-and-equilibria: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm-mechanical-vector-field-and-energy-in-a-chart: mathematical-premise
  def-cm-equilibrium-and-lyapunov-stability: mathematical-premise
  def-cm-orbital-and-linear-stability: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-interval: mathematical-premise
  def-cm-oscillator-model-and-phase-system: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The geometric vocabulary of the one-dimensional models of this page: the phase plane with position and velocity expressed as numerical SI coordinates, the Euclidean norm on that normalized pair, the phase curve of a motion, the mechanical energy function of a conservative model, its energy level sets and sublevel sets, and turning positions and turning points. The item also fixes how the equilibrium, Lyapunov-stability and linear-stability vocabulary of the mathematical definitions is read for the scalar phase system. It asserts no conservation, no containment of phase curves in level sets, no boundedness and no measured value; those are statements of the theorems of this page."
sources:
  references:
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 3.3, Eqs. (3.24)-(3.29), chapter pages 5-7 (PDF pages 37-39): the energy first integral, the energy diagram, turning points of the one-dimensional motion and the period as twice the quadrature between turning points"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Chapter 3, introduction, printed page 52 (PDF page 55): the quadratic expansion of the potential about a minimum and the constants V_ij entering the linearised equations"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
verification:
  precheck: n/a
---

## Definition

Adopt a one-dimensional model $(m,I_{0},Q,F)$ of
[[def-cm04-one-dimensional-models-and-equilibria]], with phase system
$G_{F}(t,x,v)=(v,F(t,x,v)/m)$.

**(a) Phase plane and phase curves.** The **phase plane** of the model is
$\mathbb R^{2}$ with coordinates $(x,v)$, where $x$ is the position and $v$
the velocity coordinate of clause (b) of [[def-cm04-one-dimensional-models-and-equilibria]].
They are real numerical SI coordinates: if $X_{\rm phys}$ and $V_{\rm phys}$
are the corresponding physical position and velocity, then
$x=X_{\rm phys}/(1\,\mathrm m)$ and
$v=V_{\rm phys}/(1\,\mathrm{m/s})$ ([[def-cm01-units]]). The **phase domain**
of the model is the open set $I_{0}\times Q\times\mathbb R$ of (time,
position, velocity) triples. The phase plane is read with the Euclidean
structure and norm $\lVert(x,v)\rVert_{2}=\sqrt{x^{2}+v^{2}}$ on these
dimensionless numerical coordinates ([[def-euclidean-inner-product]]);
physical displacement and velocity are not added as dimensionful quantities.
Distances used below are those of this norm. For a curve family
$x:J\to Q$ of class $C^{1}$ its **phase curve** is
$t\mapsto(x(t),x'(t))$; when $x$ is a motion of the model the phase curve is
the corresponding solution of the phase system.

**(b) The energy function of a conservative model.** Let the model be a
global potential model of clause (d) of
[[def-cm04-one-dimensional-models-and-equilibria]] with potential $U$ of
class $C^{2}$, so that $F=-U'$. The **energy function** of the model is
$$E:Q\times\mathbb R\longrightarrow\mathbb R,\qquad E(x,v):=\tfrac12 m v^{2}+U(x),$$
of dimension $\mu\ell^{2}\tau^{-2}$ (joules). For $E_{0}\in\mathbb R$ the
**energy level set** of $E_{0}$ and the **energy sublevel set** of $E_{0}$
are
$$\Sigma_{E_{0}}:=\{(x,v)\in Q\times\mathbb R:E(x,v)=E_{0}\},\qquad S_{E_{0}}:=\{(x,v)\in Q\times\mathbb R:E(x,v)\le E_{0}\}.$$

**(c) Turning positions and turning points.** Let the model be as in (b).
A point $x\in Q$ is a **turning position** of the energy $E_{0}$ when
$U(x)=E_{0}$, and the phase-plane point $(x,0)$ is the corresponding
**turning point** of $E_{0}$. A turning position at which $U'$ does not
vanish is a **simple turning position**. In the one-coordinate reading of
[[def-cm-mechanical-vector-field-and-energy-in-a-chart]] the potential
difference $U(x)-E_{0}$ is the sign-controlling quantity for the velocity of
a motion of energy $E_{0}$; the statements of that kind are the content of
the conservation theorem of this page and are not made here.

**(d) Rest points and stability vocabulary.** For a model with a time- and
velocity-independent force law $f$, the equilibria, rest points, strict local
minima and the Lyapunov and asymptotic stability of a rest point are those of
clause (e) of [[def-cm04-one-dimensional-models-and-equilibria]], read for
the phase system $G_{F}$; Lyapunov stability is the notion of
[[def-cm-equilibrium-and-lyapunov-stability]] and linear stability is that of
[[def-cm-orbital-and-linear-stability]], applied to $G_{F}$ at its rest
point. For an oscillator-type model with data $(m,c,k,f)$ of clause (f) of
[[def-cm04-one-dimensional-models-and-equilibria]] the phase system is the
phase-plane system of [[def-cm-oscillator-model-and-phase-system]], and the
phase-plane reading of its equilibria is the one recorded there.

**(e) Status.** This item fixes geometric objects and reads mathematical
stability vocabulary for the scalar phase system; it asserts no conservation
of energy, no containment of a phase curve in a level set, no boundedness of
level sets and no measured value.

## Remarks

- **The phase plane is two-dimensional, and the model is not the pendulum.**
  The coordinates $(x,v)$ are the position and velocity of the declared
  scalar model; a model with an angle coordinate would carry a quotient of
  the line by the periodicity of the physical configuration, which is not
  part of this definition. The pendulum model of the companion page declares
  its own coordinate interval.

- **Level sets are not orbits.** $\Sigma_{E_{0}}$ is a subset of the phase
  plane defined by an equation; that the phase curve of a motion with initial
  energy $E_{0}$ lies in it is a conservation statement, proved separately.
  A level set may be empty, a single rest point, a closed curve or a union of
  curves, and this item asserts nothing about which case occurs.

