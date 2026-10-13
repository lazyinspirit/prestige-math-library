---
id: def-sr-four-velocity-and-four-acceleration
kind: definition
title: "Four-velocity and four-acceleration of a future timelike worldline"
status: published
origin: pipeline
domain: mathematics
dependency_level: 10
deps:
  - def-sr-proper-time
  - lem-sr-proper-time-parametrization
  - def-sr-regular-causal-curve-and-worldline
  - def-inertial-frame-and-inertial-chart
  - def-lorentz-form-and-inertia
  - def-causal-classification-of-lorentz-vectors
  - def-time-orientation-and-future-causal-sets
  - lem-timelike-cone-has-two-convex-components
  - def-vector-valued-derivative-and-integral
  - thm-chain-rule
  - thm-componentwise-limits-and-continuity
  - thm-algebra-of-continuous-functions
  - thm-algebra-of-derivatives
  - cor-differentiable-implies-continuous
  - def-derivative
  - def-interval
dependency_roles:
  def-sr-proper-time: mathematical-premise
  lem-sr-proper-time-parametrization: mathematical-premise
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-componentwise-limits-and-continuity: mathematical-premise
  thm-algebra-of-continuous-functions: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  cor-differentiable-implies-continuous: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook), Sections 3.5 and 3.7 pp. 60-68; signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision), Section 2.2 pp. 27-28 and Section 2.3 pp. 28-30 (PDF pp. 28-31); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 pp. 26-27 (PDF pp. 33-34; worldline, proper time (1.97), four-velocity (1.98)-(1.99)) and Chapter 3 pp. 68-71 (PDF pp. 75-78)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Definition

Let $c > 0$ and let $x : I \to A$ be a $C^{1}$ future timelike worldline with
proper-time function $\tau$ and inverse $\rho$ of
[[def-sr-proper-time]] and [[lem-sr-proper-time-parametrization]].

**(a) Four-velocity.** The **four-velocity** of $x$ is the map $U : I \to V$
defined by

$$U(s) := \frac{x'(s)}{\tau'(s)} = \frac{c\,x'(s)}{\sqrt{-\eta(x'(s),x'(s))}} ;$$

equivalently, $U(s)$ is the tangent at parameter value $s$ of the proper-time
parametrized worldline $x \circ \rho$, read at the proper-time parameter
$\tau(s)$: by clause (iv) of [[lem-sr-proper-time-parametrization]],
$(x \circ \rho)'(\tau(s)) = x'(s)/\tau'(s) = U(s)$. The map $U$ is continuous,
$U(s)$ is future timelike for every $s \in I$, and $U$ does not depend on the
base point chosen for $\tau$ (changing the base point adds a constant to
$\tau$).

**(b) Four-acceleration.** If $x$ is $C^{2}$, that is, $x'$ is differentiable
with continuous derivative ([[def-sr-regular-causal-curve-and-worldline]]), the
**four-acceleration** of $x$ is the map $A : I \to V$ defined by

$$A(s) := \frac{U'(s)}{\tau'(s)} = \frac{c\,U'(s)}{\sqrt{-\eta(x'(s),x'(s))}} ;$$

equivalently, $A(s)$ is the derivative with respect to the proper-time parameter
of the four-velocity along the worldline: by the chain rule,
$A(s) = (U \circ \rho)'(\tau(s))$. The map $A$ is continuous.

**(c) Observer.** The **dimensionless four-velocity** of $x$ is $u := U/c$. A
**point observer** of the model at an event is a future unit timelike vector
$n \in V$, $\eta(n,n) = -1$ ([[def-causal-classification-of-lorentz-vectors]],
[[def-time-orientation-and-future-causal-sets]]); the four-velocity of the
observer's own worldline, the straight future timelike line through the event
with tangent $cn$, is $cn$ at each of its events.

**(d) Names and scope.** The names four-velocity and four-acceleration are the
model's names for $U$ and $A$; the physical interpretation, including the units
in which $U$ and $A$ are measured, is supplied with the coordinate conventions
of the framework and is not part of the affine geometry. The definition makes no
claim that $U$ has norm $-c^{2}$ or that $A$ is orthogonal to $U$; those are
proved in [[thm-sr-proper-time-and-observer-decomposition]].

## Remarks

- **Well-definedness.** (i) The division by $\tau'(s)$ is legitimate because
  $\tau'(s) > 0$ for every $s$ by clause (i) of
  [[lem-sr-proper-time-parametrization]]. (ii) The identification
  $U(s) = (x \circ \rho)'(\tau(s))$ is clause (iv) of that lemma. (iii)
  Continuity of $U$: in an inertial chart the coordinate components of $U$ are
  $U^{j} = y^{j'}/\tau'$, quotients of the continuous functions $y^{j'}$ (the
  components of the continuous coordinate derivative) and the continuous
  positive $\tau'$, hence continuous
  ([[thm-componentwise-limits-and-continuity]],
  [[thm-algebra-of-continuous-functions]]); by the componentwise
  characterisation of continuity for $\mathbb{R}^{4}$-valued maps and the
  identification of $U$ with $E(U_{\mathrm{coord}})$ this gives continuity of
  the $V$-valued map $U$. (iv) $U(s)$ is future timelike because it is the
  positive multiple $\tau'(s)^{-1}x'(s)$ of the future timelike vector $x'(s)$:
  in a future $\eta$-orthonormal basis the future timelike set is
  $\{v : v^{0} > |v_{\mathrm{sp}}|\}$, stable under multiplication by positive
  scalars ([[lem-timelike-cone-has-two-convex-components]],
  [[def-time-orientation-and-future-causal-sets]]). (v) $A$ is defined only when
  $x$ is $C^{2}$, in which case $U$ is $C^{1}$: the coordinate expression
  $g_x=(y^{0'})^2-\sum_{j=1}^3(y^{j'})^2$ is $C^{1}$, and the
  square-root chain rule on $g_x>0$ makes
  $\tau'=c^{-1}\sqrt{g_x}$ $C^{1}$
  ([[def-sr-proper-time]], [[thm-chain-rule]]). Its chart components
  $y^{j'}/\tau'$ are therefore quotients of $C^{1}$ functions with nonvanishing
  denominator ([[thm-algebra-of-derivatives]]), so $U'$ exists, is continuous
  ([[cor-differentiable-implies-continuous]],
  [[thm-algebra-of-continuous-functions]]), and $A = U'/\tau'$ is continuous
  as another quotient. (vi) The observer clause is consistent with (a): the
  straight line with tangent $cn$ has tangent of squared $\eta$-length
  $\eta(cn,cn) = -c^{2}$, so its proper-time derivative is
  $c^{-1}\sqrt{c^{2}} = 1$ and its four-velocity is $cn$.
- **What is deliberately not asserted here.** Neither the norm of $U$ nor the
  orthogonality of $A$ with $U$ is asserted above, so the definition cannot be
  used as if those identities were definitional; they are theorems of
  [[thm-sr-proper-time-and-observer-decomposition]]. No choice principle is
  used: all objects are defined by explicit formulas from the given worldline.
