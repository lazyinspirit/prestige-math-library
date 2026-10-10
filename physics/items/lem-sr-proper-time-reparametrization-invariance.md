---
id: lem-sr-proper-time-reparametrization-invariance
kind: lemma
title: "Length-integral invariance under monotone C^1 maps and proper-time invariance under regular increasing maps"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 9
deps:
  - def-sr-proper-time
  - def-sr-regular-causal-curve-and-worldline
  - def-inertial-frame-and-inertial-chart
  - def-lorentz-form-and-inertia
  - def-causal-classification-of-lorentz-vectors
  - def-time-orientation-and-future-causal-sets
  - lem-timelike-cone-has-two-convex-components
  - thm-substitution
  - thm-continuous-implies-integrable
  - thm-chain-rule
  - thm-componentwise-limits-and-continuity
  - thm-composition-of-continuous-functions
  - thm-algebra-of-continuous-functions
  - def-vector-valued-derivative-and-integral
  - def-interval
dependency_roles:
  def-sr-proper-time: mathematical-premise
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  thm-substitution: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-componentwise-limits-and-continuity: mathematical-premise
  thm-composition-of-continuous-functions: mathematical-premise
  thm-algebra-of-continuous-functions: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
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

## Statement

Let $c > 0$, let $x : I \to A$ be a $C^{1}$ future timelike worldline
([[def-sr-regular-causal-curve-and-worldline]]), let $a < b$ with
$[a,b] \subseteq I$, and let $c_0 < d_0$. Let
$\varphi : [c_0,d_0] \to [a,b]$ be a strictly increasing $C^{1}$ surjection,
with one-sided endpoint derivatives as in
[[def-sr-regular-causal-curve-and-worldline]].

Then $\varphi(c_0) = a$, $\varphi(d_0) = b$ and $\varphi' \ge 0$. Put
$y = x \circ \varphi$ and $f(s) = \sqrt{-\eta(x'(s),x'(s))}$. The $C^{1}$ curve
$y$ has tangent

$$y'(u) = \varphi'(u)\,x'\bigl(\varphi(u)\bigr),$$

which is future timelike exactly where $\varphi'(u) > 0$ and is the zero vector
where $\varphi'(u) = 0$. Its nonnegative length integrand

$$\sqrt{-\eta\bigl(y'(u),y'(u)\bigr)} = \varphi'(u)\,f\bigl(\varphi(u)\bigr)$$

is defined even when $y$ is not a worldline, and the broad substitution identity

$$\int_{c_0}^{d_0}\sqrt{-\eta\bigl(y'(u),y'(u)\bigr)}\;du \;=\; \int_a^b f(s)\;ds \;=\; c\bigl(\tau_x(b)-\tau_x(a)\bigr)$$

holds. If $\varphi'(u) > 0$ at every point, including the one-sided endpoint
derivatives, then $y$ is a $C^{1}$ future timelike worldline, its proper-time
function $\tau_y$ of [[def-sr-proper-time]] is defined, and
$\tau_y(d_0)-\tau_y(c_0) = \tau_x(b)-\tau_x(a)$; more generally
$\tau_y(u)-\tau_y(v) = \tau_x(\varphi(u))-\tau_x(\varphi(v))$ for all
$v,u \in [c_0,d_0]$, so $\tau_y$ and $\tau_x \circ \varphi$ differ by a
base-point constant. No $\tau_y$ is asserted for a zero-tangent curve outside
that definition.

For a strictly decreasing $C^{1}$ surjection $\varphi$ onto $[a,b]$ one has
$\varphi(c_0) = b$, $\varphi(d_0) = a$ and $\varphi' \le 0$; the tangent of $y$
is past timelike where $\varphi' < 0$ and zero where $\varphi' = 0$, so $y$ is
not a future timelike worldline, while the nonnegative length integral still
equals $\int_a^b f$: oriented substitution gives
$\int_{c_0}^{d_0}\varphi' f(\varphi) = \int_b^a f$, and
$|\varphi'| = -\varphi'$ reverses that sign.

These are mathematical curve-integral identities; physical clock reading is a
separate premise. No inverse of $\varphi$ and no nonvanishing derivative are
needed for the broad integral identities.

## Facts & Assumptions

**Given:** A real $c > 0$; a $C^{1}$ future timelike worldline $x : I \to A$; reals $a < b$ with $[a,b] \subseteq I$; reals $c_0 < d_0$; a strictly increasing (respectively strictly decreasing) $C^{1}$ surjection $\varphi : [c_0,d_0] \to [a,b]$ with one-sided endpoint derivatives; the composite $y = x \circ \varphi$; and $f(s) = \sqrt{-\eta(x'(s),x'(s))}$.

[L1] Curves and reparametrizations ([[def-sr-regular-causal-curve-and-worldline]], [[def-interval]]): a strictly increasing surjection $[c_0,d_0] \to [a,b]$ maps endpoints to endpoints, so $\varphi(c_0) = a$ and $\varphi(d_0) = b$ (respectively $\varphi(c_0) = b$, $\varphi(d_0) = a$ in the decreasing case); a $C^1$ increasing function has $\varphi' \ge 0$, a $C^1$ decreasing one has $\varphi' \le 0$; and the tangent of a curve is the limit of difference quotients over the relevant side.

[L2] Chart calculus ([[def-inertial-frame-and-inertial-chart]], [[def-vector-valued-derivative-and-integral]]): in an inertial chart with coordinate path $y_{A} = x_A \circ x$ the frame isomorphism $E$ is linear, an $A$-valued curve is differentiable exactly when each coordinate component is, with componentwise derivatives, and its tangent is $E$ applied to the coordinate derivative; a map is $C^{1}$ exactly when all components are $C^{1}$.

[L3] Chain rule ([[thm-chain-rule]]): for real functions, $(g \circ \varphi)'(u) = g'(\varphi(u))\,\varphi'(u)$ whenever $g$ is differentiable at $\varphi(u)$ and $\varphi$ at $u$, with the one-sided reading at endpoints.

[L4] Bilinearity ([[def-lorentz-form-and-inertia]]): $\eta(\lambda v,\lambda v) = \lambda^{2}\eta(v,v)$ for real $\lambda$.

[L5] Substitution ([[thm-substitution]], [[thm-continuous-implies-integrable]], [[def-sr-proper-time]]): if $\varphi : [c_0,d_0] \to [a,b]$ is differentiable with $\varphi'$ integrable and $g$ is continuous on an order-convex set containing $\varphi[\,[c_0,d_0]\,]$, then $\int_{\varphi(c_0)}^{\varphi(d_0)} g = \int_{c_0}^{d_0} (g \circ \varphi)\,\varphi'$; the derivative of a $C^{1}$ function on a compact interval is continuous and hence integrable; and $f$ is continuous on $I$ with $\tau_x$ as in [[def-sr-proper-time]].

[L6] Proper time ([[def-sr-proper-time]]): for $u < v$ in a worldline's domain, $\tau(v) - \tau(u) = c^{-1}\int_u^v \sqrt{-\eta(x',x')}$ through the oriented integral; $\tau_y$ is defined only when $y$ is a $C^{1}$ future timelike worldline.

[L7] The future and past cones ([[lem-timelike-cone-has-two-convex-components]], [[def-time-orientation-and-future-causal-sets]], [[def-causal-classification-of-lorentz-vectors]]): in a future $\eta$-orthonormal basis the future timelike set is $C^{+} = \{v : v^{0} > |v_{\mathrm{sp}}|\}$ and the past timelike set is $C^{-} = \{v : v^{0} < -|v_{\mathrm{sp}}|\}$; both are closed under multiplication by positive, respectively negative, scalars: $\lambda v \in C^{+}$ for $\lambda > 0$ and $v \in C^{+}$, and $\lambda v \in C^{-}$ for $\lambda < 0$ and $v \in C^{+}$.

[L8] Continuity of composites ([[thm-componentwise-limits-and-continuity]], [[thm-composition-of-continuous-functions]], [[thm-algebra-of-continuous-functions]]): components of continuous vector-valued maps are continuous, composites of continuous real functions are continuous, and products and sums of continuous real functions are continuous.

## Proof

**Proof technique:** direct.

1.1 A strictly increasing surjection carries the least point to the least point and the greatest to the greatest point of the target interval, so $\varphi(c_0) = a$, $\varphi(d_0) = b$ and (in the decreasing case) $\varphi(c_0) = b$, $\varphi(d_0) = a$; the derivative of a $C^{1}$ monotone function has the sign of the monotonicity, $\varphi' \ge 0$ or $\varphi' \le 0$, with the one-sided reading at the endpoints. [given, L1]

2.1 In an inertial chart, the coordinate path of $y$ is $y_A \circ \varphi$; each component $(y_A)^{j} \circ \varphi$ is differentiable with derivative $((y_A)^{j'} \circ \varphi)\,\varphi'$ by the chain rule [L3], and the derivatives are continuous by [L8] because $(y_A)^{j'}$ and $\varphi$ are continuous; hence $y$ is $C^{1}$ with $y'(u) = \varphi'(u)x'(\varphi(u))$ by the componentwise characterisation and linearity of $E$ [L2]. [step 1.1, L2, L3, L8]

3.1 Bilinearity [L4] gives $-\eta(y'(u),y'(u)) = \varphi'(u)^{2}\,\bigl(-\eta(x'(\varphi(u)),x'(\varphi(u)))\bigr) = \varphi'(u)^{2} f(\varphi(u))^{2}$, so the nonnegative length integrand is $\sqrt{-\eta(y',y')} = |\varphi'(u)| f(\varphi(u))$, which equals $\varphi'(u) f(\varphi(u))$ in the increasing case and $-\varphi'(u) f(\varphi(u))$ in the decreasing case. [step 2.1, L4]

3.2 At every $u$, $x'(\varphi(u))$ is future timelike because $\varphi(u) \in [a,b] \subseteq I$; by the cone description [L7], $y'(u) = \varphi'(u)x'(\varphi(u))$ is future timelike where $\varphi'(u) > 0$, is the zero vector where $\varphi'(u) = 0$, and is past timelike where $\varphi'(u) < 0$. [step 2.1, L7]

4.1 Since $\varphi'$ is continuous on $[c_0,d_0]$, hence integrable, and $f$ is continuous on the order-convex $I$ containing $\varphi[\,[c_0,d_0]\,]$, substitution [L5] applied to the increasing case gives $\int_{c_0}^{d_0}\varphi' f(\varphi) = \int_{\varphi(c_0)}^{\varphi(d_0)} f = \int_a^b f = c(\tau_x(b)-\tau_x(a))$ by [L6]; combined with step 3.1 this proves the broad identity. [step 1.1, step 3.1, L5, L6]

4.2 Where $\varphi' = 0$ the tangent $y'$ is zero, so $y$ is not a worldline of [[def-sr-regular-causal-curve-and-worldline]] and no proper-time function is defined for it by [L6]; the length integrand of step 3.1 remains defined, which is exactly the content of the broad identity. [step 3.1, step 3.2, L6]

4.3 In the strictly decreasing case, step 3.2 makes every tangent of $y$ past timelike or zero, so $y$ is not a future timelike worldline; and substitution [L5] with oriented endpoints gives $\int_{c_0}^{d_0}\varphi' f(\varphi) = \int_{\varphi(c_0)}^{\varphi(d_0)} f = \int_b^a f = -\int_a^b f$, which combined with $\sqrt{-\eta(y',y')} = -\varphi' f(\varphi)$ from step 3.1 yields $\int_{c_0}^{d_0}\sqrt{-\eta(y',y')} = \int_a^b f = c(\tau_x(b)-\tau_x(a))$. [step 3.1, step 3.2, L5, L6]

5.1 If $\varphi' > 0$ at every point including the one-sided endpoint derivatives, then by step 3.2 every tangent of $y$ is future timelike, so $y$ is a $C^{1}$ future timelike worldline and $\tau_y$ is defined; its endpoint increment is $\tau_y(d_0)-\tau_y(c_0) = c^{-1}\int_{c_0}^{d_0}\sqrt{-\eta(y',y')} = \tau_x(b)-\tau_x(a)$ by step 4.1. [step 4.1, step 3.2, L6]

6.1 For $v < u$ in $[c_0,d_0]$, substitution [L5] on $[v,u]$ gives $\tau_y(u)-\tau_y(v) = c^{-1}\int_{\varphi(v)}^{\varphi(u)} f = \tau_x(\varphi(u))-\tau_x(\varphi(v))$ by [L6], so the based functions $\tau_y$ and $\tau_x \circ \varphi$ differ by the base-point constant. [step 4.1, step 5.1, L5, L6]

7.1 No step forms an inverse of $\varphi$, divides by $\varphi'$, or assumes a derivative-limit hypothesis at the endpoints; and no object is selected from a family, so no choice principle is used. [step 4.1, step 4.3] ∎

## Remarks

- **The broad identity is the substitution theorem, not a proper-time theorem.** The left-hand integrand is the nonnegative square root $|\varphi'|\,f \circ \varphi$, which exists for every $C^{1}$ $\varphi$; only when $\varphi'$ is everywhere positive is this integrand the length integrand of an actual worldline $y$, and only then is $\tau_y$ defined. The zero-tangent case is deliberately separated from the worldline case.

- **Everything is a one-dimensional substitution.** The curve enters only through the continuity of $f$ and the chain rule for its coordinate components; no derivative-limit hypothesis, no improper integral and no choice principle is used.
