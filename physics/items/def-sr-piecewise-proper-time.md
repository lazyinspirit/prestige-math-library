---
id: def-sr-piecewise-proper-time
kind: definition
title: "Total proper time of a piecewise C^1 future timelike worldline"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 9
deps:
  - lem-sr-weak-piecewise-causal-integrability
  - def-sr-proper-time
  - def-sr-regular-causal-curve-and-worldline
  - def-oriented-integral
  - def-lorentz-form-and-inertia
  - lem-lorentz-form-has-orthonormal-basis
  - thm-continuous-implies-integrable
  - thm-additivity-over-subintervals
  - thm-algebra-of-continuous-functions
  - thm-composition-of-continuous-functions
  - thm-real-power-continuity-and-derivatives
  - def-rational-power
  - def-interval
  - def-continuity-real
  - thm-ftc-second-part
  - thm-monotonicity-of-the-integral
  - thm-nonnegative-continuous-with-zero-integral-vanishes
dependency_roles:
  lem-sr-weak-piecewise-causal-integrability: mathematical-premise
  def-sr-proper-time: mathematical-premise
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-oriented-integral: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  lem-lorentz-form-has-orthonormal-basis: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-additivity-over-subintervals: mathematical-premise
  thm-algebra-of-continuous-functions: mathematical-premise
  thm-composition-of-continuous-functions: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  def-rational-power: mathematical-premise
  def-interval: mathematical-premise
  def-continuity-real: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  thm-nonnegative-continuous-with-zero-integral-vanishes: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10, sections 1.3.3 'The gamma factor' pp. 25-27 and 1.5 'Triangle and Cauchy-Schwarz inequalities' pp. 36-37 (signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t)"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 3 pp. 68-73 (proper-time functional, geodesic variation, the maximality remark and its 'locally' caveat, the twin remark)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022), section 2.3 'Curves of extremal proper time' pp. 28-30; Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Definition

Let $c > 0$ be the conversion constant of [[def-sr-proper-time]] and let
$x : [a,b] \to A$, $a < b$, be a piecewise $C^{1}$ future timelike worldline in
the weak sense of [[def-sr-regular-causal-curve-and-worldline]]: $x$ is $C^{1}$
on each open piece of a finite partition $a = s_0 < \cdots < s_m = b$, its
interior tangents and finite one-sided difference-quotient endpoint tangents are
future timelike, and continuous extension of the derivative is not assumed.

**(i) The piecewise density.** On each open piece let

$$g_i(t) = \sqrt{-\eta\bigl(x'(t),x'(t)\bigr)} > 0 .$$

By clause (b) of [[lem-sr-weak-piecewise-causal-integrability]] the function
$g_i$ is continuous on $(s_{i-1},s_i)$ and its two-ended improper Riemann
integral

$$\int_{(s_{i-1},s_i)} g_i \;:=\; \lim_{u \downarrow s_{i-1}} \int_u^{r} g_i \;+\; \lim_{v \uparrow s_i} \int_r^{v} g_i$$

(for any $r \in (s_{i-1},s_i)$) is finite and nonnegative; it is positive
because $g_i$ is positive and continuous on a nondegenerate compact interior
subinterval, the improper value dominates the ordinary integral over such a
subinterval ([[thm-monotonicity-of-the-integral]]), and that ordinary integral
is strictly positive: a continuous nonnegative function on a nondegenerate
compact interval whose integral vanishes is identically zero there
([[thm-nonnegative-continuous-with-zero-integral-vanishes]]), whereas $g_i$ is
strictly positive at every point of the piece.

**(ii) Total proper time.** Define

$$\Delta\tau_{[a,b]}(x) \;:=\; c^{-1} \sum_{i=1}^{m} \int_{(s_{i-1},s_i)} g_i .$$

The finite sum is independent of the admissible partition, by subdivision
additivity and a common refinement (clause (c) of
[[lem-sr-weak-piecewise-causal-integrability]]), and it is independent of the
inertial chart: for every truncation $s_{i-1} < u < r < v < s_i$ the ordinary
integral $\int_u^v g_i$ is intrinsic by [[def-sr-proper-time]] (applied to the
$C^{1}$ restriction), and the improper value is the limit of these intrinsic
truncation values, which is intrinsic.

**(iii) Based proper-time function.** For a distinguished $s_0 \in [a,b]$ set
$\tau_x(s) := \Delta\tau_{[s_0,s]}(x)$ for $s \ge s_0$ and
$\tau_x(s) := -\Delta\tau_{[s,s_0]}(x)$ for $s < s_0$, with
$\tau_x(s_0) = 0$, using restrictions and oriented limits
([[def-oriented-integral]], [[def-interval]]). It is strictly increasing, and
changing the distinguished base point changes it by an additive constant.

**(iv) Corner hypothesis (H).** Hypothesis (H) is the special case in which
each open-piece derivative has finite limits at both ends of its piece and hence
extends continuously to the closed piece. Under (H) the limiting values equal
the finite one-sided quotient derivatives of the curve, each $g_i$ extends
continuously and positively to the closed piece, its improper integral equals
its ordinary Riemann integral there
([[thm-continuous-implies-integrable]], [[thm-ftc-second-part]]), and the same
finite-sum formula applies. In particular, if $x$ is globally $C^{1}$ on
$[a,b]$ (the one-piece case of (H)), then
$\Delta\tau_{[a,b]}(x) = \tau(b) - \tau(a)$ of [[def-sr-proper-time]].

**(v) Straight pieces.** If on the piece $(s_{i-1},s_i)$ the tangent is a
constant future timelike vector $d_i$, the contribution of that piece is
$c^{-1}(s_i - s_{i-1})\sqrt{-\eta(d_i,d_i)}$; a piecewise straight future
timelike worldline therefore has total proper time equal to the finite sum of
its straight-segment proper times. In every case $\Delta\tau_{[a,b]}(x) > 0$.

**(vi) Additivity over concatenation.** For $a < d < b$, the restrictions of a
weak piecewise worldline $x$ to $[a,d]$ and $[d,b]$ satisfy
$\Delta\tau_{[a,b]}(x) = \Delta\tau_{[a,d]}(x) + \Delta\tau_{[d,b]}(x)$: insert
$d$ into the partition and use (ii).

The definition supplies metric time only; identification with an ideal clock
reading is a separate physical assumption. No global $C^{1}$ inverse, tangent at
a kink, or four-acceleration at a kink is asserted.

## Remarks

- **Well-definedness is the integrability lemma.** The finiteness of each
  improper integral, the independence of $r$, the additivity under subdivision
  and the independence of the admissible partition are clauses (b) and (c) of
  [[lem-sr-weak-piecewise-causal-integrability]], not new hypotheses; the
  definition only packages the sums and the based function. Because the
  integrals are one-dimensional Riemann integrals of coordinate functions and
  no object is selected from a family, no choice principle is used.

- **Why the chart does not enter.** The two-ended improper integrals are formed
  in a fixed inertial chart, but each truncation integral is the intrinsic
  proper-time difference of a $C^{1}$ restriction, and the improper value is the
  limit of the truncation values along a monotone family; the limit of intrinsic
  numbers is intrinsic. So $\Delta\tau_{[a,b]}(x)$ is a function of the
  parametrized worldline alone.

- **Under (H) nothing improper remains.** If the derivative extends
  continuously to the closed piece with endpoint value $w$, then for
  $u < v$ in the piece the truncated fundamental theorem gives
  $x(v)-x(u) = \int_u^v x'$ (coordinatewise, and the value in $V$ is recovered),
  so the quotient $\bigl(x(s_{i-1}+h)-x(s_{i-1})\bigr)/h$ is the average
  $\frac{1}{h}\int_{s_{i-1}}^{s_{i-1}+h} x'$ of the continuous extension over a
  shrinking interval and tends to $w$; the extended endpoint value is therefore
  the one-sided quotient tangent of the curve, and similarly at the right end
  ([[thm-ftc-second-part]], [[thm-monotonicity-of-the-integral]]). The improper
  integral over the closed piece is then an ordinary Riemann integral by its
  definition as the common limit of the two truncations.

- **Scope.** The construction covers future timelike piecewise $C^{1}$ curves;
  tangent vectors at kinks and four-accelerations at kinks are not defined here,
  and the statement asserts no clock reading, no maximality property of straight
  worldlines and no empirical content. The factor $c^{-1}$ appears once, in
  (ii); sums of the functions of this definition must not receive a further
  factor.
