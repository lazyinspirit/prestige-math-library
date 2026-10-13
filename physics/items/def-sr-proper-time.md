---
id: def-sr-proper-time
kind: definition
title: "Proper time along a future timelike worldline"
status: published
origin: pipeline
domain: mathematics
dependency_level: 8
deps:
  - def-sr-regular-causal-curve-and-worldline
  - def-oriented-integral
  - def-the-integral-function
  - thm-continuous-implies-integrable
  - def-rational-power
  - thm-real-power-continuity-and-derivatives
  - thm-composition-of-continuous-functions
  - thm-algebra-of-continuous-functions
  - def-continuity-real
  - def-interval
  - lem-lorentz-form-has-orthonormal-basis
  - thm-componentwise-limits-and-continuity
  - thm-additivity-over-subintervals
dependency_roles:
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-oriented-integral: mathematical-premise
  def-the-integral-function: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  def-rational-power: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-composition-of-continuous-functions: mathematical-premise
  thm-algebra-of-continuous-functions: mathematical-premise
  def-continuity-real: mathematical-premise
  def-interval: mathematical-premise
  lem-lorentz-form-has-orthonormal-basis: mathematical-premise
  thm-componentwise-limits-and-continuity: mathematical-premise
  thm-additivity-over-subintervals: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 pp. 26-27 (PDF pp. 33-34; worldline, proper time (1.97), four-velocity (1.98)-(1.99)) and Chapter 3 pp. 68-71 (PDF pp. 75-78)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision), Section 2.2 pp. 27-28 and Section 2.3 pp. 28-30 (PDF pp. 28-31); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook), Sections 3.5 and 3.7 pp. 60-68; signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Definition

Let $c > 0$ be a fixed real number, the conversion constant of the model, and
let $x : I \to A$ be a $C^{1}$ future timelike worldline
([[def-sr-regular-causal-curve-and-worldline]]).

**The integrand.** The function

$$g_x : I \to \mathbb{R}, \qquad g_x(s) := -\eta\bigl(x'(s),x'(s)\bigr),$$

is continuous and strictly positive. For continuity, fix an inertial frame and
write $y := x_A \circ x$ for the coordinate path; by the derivative and regularity definition in
[[def-sr-regular-causal-curve-and-worldline]] the $\mathbb{R}^{4}$-valued map
$y'$ is continuous, so each component $y'^{a}$, $a \in \{0,1,2,3\}$, is a
continuous real function ([[thm-componentwise-limits-and-continuity]]). In the
$\eta$-orthonormal basis underlying the frame one has
$\eta(e_a,e_b) = \operatorname{diag}(-1,1,1,1)_{ab}$
([[def-inertial-frame-and-inertial-chart]]), whence

$$g_x(s) = -\eta\bigl(x'(s),x'(s)\bigr) = \bigl(y'^{0}(s)\bigr)^{2} - \bigl(y'^{1}(s)\bigr)^{2} - \bigl(y'^{2}(s)\bigr)^{2} - \bigl(y'^{3}(s)\bigr)^{2},$$

a finite sum of products of continuous real functions, hence continuous
([[thm-algebra-of-continuous-functions]], [[def-continuity-real]],
[[lem-lorentz-form-has-orthonormal-basis]]). Strict positivity
$g_x(s) = -\eta(x'(s),x'(s)) > 0$ is exactly the future timelike hypothesis on
$x'(s)$ ([[def-causal-classification-of-lorentz-vectors]]).

**The proper-time function.** Hence $u \mapsto \sqrt{g_x(u)}$ is continuous on
$I$: the square root is the power $t^{1/2}$ of [[def-rational-power]], which is
continuous and differentiable on $(0,\infty)$
([[thm-real-power-continuity-and-derivatives]]), and it is composed with the
continuous positive function $g_x$
([[thm-composition-of-continuous-functions]]); consequently it is Riemann
integrable on every compact subinterval of $I$
([[thm-continuous-implies-integrable]], [[def-interval]]). For $s_0, s \in I$
the **proper time from $s_0$ to $s$** is

$$\tau(s) := c^{-1} \int_{s_0}^{s} \sqrt{-\eta\bigl(x'(u),x'(u)\bigr)}\; du,$$

the integral being taken with oriented limits as in [[def-oriented-integral]];
for $a < b$ in $I$ this reads

$$\tau(b) - \tau(a) = c^{-1} \int_a^b \sqrt{-\eta\bigl(x'(u),x'(u)\bigr)}\; du,$$

by oriented additivity ([[thm-additivity-over-subintervals]]); equivalently,
the increment is the integral function with base point $a$ of the density
$c^{-1}\sqrt{g_x}$, evaluated at $b$ on $[a,b]$
([[def-the-integral-function]]). Changing the base point $s_0$ changes $\tau$
by an additive constant, so the elapsed times between parameter values are
intrinsic. $\tau$ depends on the parametrized history $x$ and on the parameter
values; its invariance under increasing $C^{1}$ reparametrizations with everywhere
positive derivative is proved in
[[lem-sr-proper-time-reparametrization-invariance]].

**Straight segments.** For the straight future timelike segment
$x(s) = p + (s-s_0)(q-p)$ of [[def-sr-affine-minkowski-model]] the difference
quotients are identically the future timelike displacement $q-p$, so
$x'(s) = q-p$ and

$$\tau(b) - \tau(a) = c^{-1} \sqrt{-\eta(q-p,q-p)}\,(b-a),$$

the straight-segment proper time of the model's coordinate conventions.

**Scope.** The construction is restricted to future timelike worldlines: on a
future null curve the length density vanishes identically, so its integral
is constant; a zero density at one isolated point does not imply constancy; for a spacelike
curve $-\eta(x',x')$ is negative and the square root is not a real number; and
for a past-directed timelike curve the same integral is defined but is not
attached to a worldline of this model. The construction asserts nothing about
physical clock readings.

## Remarks

- **Well-definedness.** (i) $g_x$ is the composition of the continuous
$V$-valued derivative $x'$, the quadratic form $v \mapsto -\eta(v,v)$ of
[[def-lorentz-form-and-inertia]] and the continuous square root; the coordinate
computation displayed above evaluates the quadratic form in an
$\eta$-orthonormal basis and needs no basis-free topology on $V$. (ii) The
integrand is defined on all of $I$ because strict positivity of $g_x$ is the
future timelike hypothesis, so no branch of the square root and no punctured
domain is needed. (iii) Existence of the integral on every compact subinterval
is [[thm-continuous-implies-integrable]], and the oriented convention of
[[def-oriented-integral]] makes $\tau(s_0) = 0$ and reverses the sign when the
endpoints are exchanged, so $\tau$ is a genuine function on $I$ for every choice
of base point. (iv) The base point enters only additively: for
$s_1, s_2, s \in I$ the additivity identity of
[[thm-additivity-over-subintervals]] gives
$c^{-1}\int_{s_1}^{s} = c^{-1}\int_{s_1}^{s_2} + c^{-1}\int_{s_2}^{s}$, so
replacing the base point $s_0$ by $s_1$ subtracts the constant
$c^{-1}\int_{s_0}^{s_1}$ from the whole function.
(v) The straight-segment value follows by evaluating a constant integrand:
$x' = q-p$ is future timelike, $\sqrt{-\eta(q-p,q-p)}$ is its positive length,
and the integral of a constant over $[a,b]$ is the value times $b-a$.
- **What is deliberately not asserted.** The definition does not assert that
$\tau$ is differentiable or invertible (that is
[[lem-sr-proper-time-parametrization]]) and does not assert that a physical
clock reads $\tau$ (that identification is the adopted assumption
that ideal clocks indicate proper time, an assumption of the framework, not a
mathematical consequence). No choice principle is used: the construction
selects no object from any family and all integrals are one-dimensional.
