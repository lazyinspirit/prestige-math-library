---
id: def-sr-proper-acceleration
kind: definition
title: "Proper acceleration of a massive worldline and its agreement with the acceleration of an observer congruence"
status: published
origin: pipeline
domain: physics
dependency_level: 13
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-sr-four-velocity-and-four-acceleration, thm-sr-proper-time-and-observer-decomposition, def-sr-regular-causal-curve-and-worldline, def-sr-observer-congruence-and-kinematics, def-flat-covariant-derivative-on-affine-minkowski-space, def-sr-si-units-and-coordinate-conventions, def-rational-power, def-causal-classification-of-lorentz-vectors, def-sr-affine-minkowski-model, def-inertial-frame-and-inertial-chart, thm-algebra-of-continuous-functions, def-sr-proper-time]
dependency_roles:
  def-sr-proper-time: mathematical-premise
  def-sr-four-velocity-and-four-acceleration: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-sr-observer-congruence-and-kinematics: mathematical-premise
  def-flat-covariant-derivative-on-affine-minkowski-space: mathematical-premise
  def-sr-si-units-and-coordinate-conventions: formulation-prerequisite
  def-rational-power: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  thm-algebra-of-continuous-functions: mathematical-premise
physical_scope: "Conditional kinematic definition inside the flat classical special-relativistic model: the proper acceleration of a C^2 future timelike worldline, its SI unit, and its identification with the magnitude of an ideal accelerometer reading. It presupposes ideal clocks and rods and the model's SI conventions; it asserts no force law, no accelerometer response or calibration model, no gravity, no rotational or quantum effect and no measurement, statistical or empirical content, and it makes no claim about any material body."
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages): Section 3.5.2 'The acceleration vector' p. 61 (the acceleration four-vector, the squared magnitude of the four-acceleration as minus the squared proper acceleration measured by a carried ideal accelerometer); signature (+---) converted to (-+++), c = 1 formulas restored to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "M. Blau, Lecture Notes on General Relativity (University of Bern, last update October 5, 2026, 1052 PDF pages): Sections 1.2 items 8-9 pp. 34-36 (four-velocity normalisation, four-acceleration and its orthogonality to the four-velocity) and Section 1.3 pp. 36-39 (constant proper acceleration)"
      url: "http://www.blau.itp.unibe.ch/newlecturesGR.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
aliases: []
---

## Definition

Let $c>0$ and let $x:I\to A$ be a $C^2$ future timelike worldline in the affine Minkowski model ([[def-sr-affine-minkowski-model]], [[def-sr-regular-causal-curve-and-worldline]]), with generic parameter $s\in I$. Write $\tau:I\to\tau[I]$ for its proper-time function and $U(s):=x'(s)/\tau'(s)$, $A(s):=U'(s)/\tau'(s)$ for its four-velocity and four-acceleration ([[def-sr-four-velocity-and-four-acceleration]]). These are proper-time derivatives evaluated at the event $x(s)$; $s$ need not itself be proper time. Pointwise $\eta(U,U)=-c^2$, $\eta(U,A)=0$, and $A(s)$ is spacelike whenever it is nonzero ([[thm-sr-proper-time-and-observer-decomposition]] (a),(b)).

**(a) Definition.** The **proper acceleration** of $x$ at the parameter value $s$ is the real number

$$a(s) := \sqrt{\eta(A(s),A(s))},$$

the nonnegative square root of [[def-rational-power]]. This is well defined for every $s \in I$. Indeed, fix an inertial chart of $A$ ([[def-inertial-frame-and-inertial-chart]]); since $x$ is $C^2$, the component functions of $A$ are continuous, and $\eta(A,A)$ is a sum of products of continuous component functions, hence continuous, by [[thm-algebra-of-continuous-functions]]. If $A(s) = 0$ then $\eta(A,A) = 0$ at $s$, and if $A(s) \neq 0$ then $A(s)$ is spacelike and $\eta(A,A) > 0$ ([[def-causal-classification-of-lorentz-vectors]]); in both cases the argument of the square root is nonnegative, so $a(s)$ is a well-defined nonnegative real number for every $s \in I$. With the SI coordinate and unit conventions of [[def-sr-si-units-and-coordinate-conventions]], in which $x^0 = c t$ with $t$ in seconds and the spatial coordinates are in metres while $\eta$ has the dimensionless matrix $\operatorname{diag}(-1,1,1,1)$ in an inertial chart, the components of $A$ carry the unit metre per second squared and $\eta(A,A)$ carries the unit $(\text{metre per second squared})^2$, so $a$ carries the unit metre per second squared. The worldline is **uniformly accelerated** when $a$ is constant on $I$.

**(b) Agreement with the acceleration of a congruence.** Let $\Omega$ be a nonempty open subset of $A$ and let $n : \Omega \to V$ be an observer congruence with acceleration field $a_{\mathrm{cg}} := \nabla_n n$, where $\nabla$ is the flat covariant derivative of [[def-flat-covariant-derivative-on-affine-minkowski-space]] ([[def-sr-observer-congruence-and-kinematics]] (b)). If $x$ is a flow line of $n$ and $U = c n$ along $x$, then $A = c^2 a_{\mathrm{cg}}$ along $x$: the derivative along the worldline of the field $n$ is the covariant derivative $\nabla_{dx/d\tau} n = \nabla_{cn} n = c \nabla_n n = c\, a_{\mathrm{cg}}$, by the defining properties of the flat covariant derivative along curves ([[def-flat-covariant-derivative-on-affine-minkowski-space]] (d)), so $A = d(c n)/d\tau = c\, \nabla_{dx/d\tau} n = c^2 a_{\mathrm{cg}}$. Consequently $a = c^2 \sqrt{\eta(a_{\mathrm{cg}},a_{\mathrm{cg}})}$ along $x$: the proper acceleration is $c^2$ times the magnitude of the congruence acceleration. In particular the proper acceleration of a congruence worldline is determined by the congruence field alone, and such a worldline is uniformly accelerated exactly when $\eta(a_{\mathrm{cg}},a_{\mathrm{cg}})$ is constant along it.

**(c) Reading and scope.** This item defines a quantity of the model and fixes its name, its unit and its physical reading. The model reads $a(s)$ as the magnitude that an ideal accelerometer carried along the worldline would register at $s$; this ideal-instrument identification is adopted with the model in the same sense as the framework's ideal-clock reading of proper time and is not derived here. No accelerometer response law, calibration, frequency dependence, force law or interaction is specified or asserted; the definition asserts nothing about which bodies follow which worldlines; no measurement outcome and no statistical, uncertainty or empirical claim is made. No choice principle is used.

## Remarks

- **Nonnegativity is the content of the well-definedness clause.** The projection of the four-acceleration on the orthogonal complement of the four-velocity is spacelike or zero ([[thm-sr-proper-time-and-observer-decomposition]] (b)), so $\eta(A,A) \ge 0$ always, and $a$ vanishes exactly at the parameter values where $A = 0$, i.e. at the events where the worldline has vanishing four-acceleration. Nothing in the definition presumes that such events exist, or fail to exist.
- **Changing the proper-time origin.** In this model the proper-time origin is arbitrary up to an additive constant ([[def-sr-proper-time]]); $a$ is a function of the generic parameter $s$; changing the proper-time origin does not change $U(s)$, $A(s)$ or $a(s)$. When expressed as a function of proper time instead, its argument shifts by that additive constant.
