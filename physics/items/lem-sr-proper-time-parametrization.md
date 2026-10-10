---
id: lem-sr-proper-time-parametrization
kind: lemma
title: "The proper-time function is a strictly increasing C^1 parametrization with C^1 inverse"
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
  - thm-ftc-first-part
  - thm-additivity-over-subintervals
  - thm-monotonicity-of-the-integral
  - thm-nonnegative-continuous-with-zero-integral-vanishes
  - thm-componentwise-limits-and-continuity
  - thm-composition-of-continuous-functions
  - thm-algebra-of-continuous-functions
  - thm-algebra-of-derivatives
  - cor-differentiable-implies-continuous
  - cor-continuous-image-of-an-interval-is-an-interval
  - thm-continuous-inverse
  - thm-derivative-of-an-inverse
  - cor-zero-derivative-implies-constant
  - def-monotone-function
  - def-derivative
  - def-vector-valued-derivative-and-integral
  - thm-chain-rule
  - def-interval
dependency_roles:
  def-sr-proper-time: mathematical-premise
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-additivity-over-subintervals: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  thm-nonnegative-continuous-with-zero-integral-vanishes: mathematical-premise
  thm-componentwise-limits-and-continuity: mathematical-premise
  thm-composition-of-continuous-functions: mathematical-premise
  thm-algebra-of-continuous-functions: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  cor-differentiable-implies-continuous: mathematical-premise
  cor-continuous-image-of-an-interval-is-an-interval: mathematical-premise
  thm-continuous-inverse: mathematical-premise
  thm-derivative-of-an-inverse: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-monotone-function: mathematical-premise
  def-derivative: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  thm-chain-rule: mathematical-premise
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

Let $c > 0$ and let $x : I \to A$ be a $C^{1}$ future timelike worldline
([[def-sr-regular-causal-curve-and-worldline]]) with proper-time function
$\tau(s) = c^{-1}\int_{s_0}^{s}\sqrt{-\eta(x'(u),x'(u))}\,du$ for a base point
$s_0 \in I$ ([[def-sr-proper-time]]). Then:

**(i)** $\tau$ is differentiable at every $s \in I$, with one-sided derivatives
at the endpoints of $I$, and

$$\tau'(s) = c^{-1}\sqrt{-\eta\bigl(x'(s),x'(s)\bigr)} > 0$$

for every $s \in I$; since $\tau'$ is this composition of continuous maps,
$\tau$ is $C^{1}$ on $I$.

**(ii)** $\tau$ is strictly increasing on $I$, hence injective, and its image
$J := \tau[I]$ is an order-convex subset of $\mathbb{R}$ with at least two
elements, so $\tau : I \to J$ is a bijection.

**(iii)** The inverse $\rho : J \to I$ of $\tau$ is continuous and strictly
increasing, and it is differentiable at every point $\tau(s)$ of $J$ with

$$\rho'\bigl(\tau(s)\bigr) = \frac{1}{\tau'(s)} = \frac{c}{\sqrt{-\eta(x'(s),x'(s))}} > 0 ;$$

hence $\rho$ is $C^{1}$ on $J$.

**(iv)** The reparametrized curve $y := x \circ \rho : J \to A$ is a $C^{1}$
future timelike worldline whose tangent at the proper-time parameter $\tau(s)$ is

$$(x \circ \rho)'\bigl(\tau(s)\bigr) = \frac{x'(s)}{\tau'(s)} = \frac{c\,x'(s)}{\sqrt{-\eta(x'(s),x'(s))}} ;$$

in particular $y$ is parametrized by its own proper time up to the additive
constant of the base point.

## Facts & Assumptions

**Given:** A real $c > 0$; an order-convex $I \subseteq \mathbb{R}$ with at least two elements; a $C^{1}$ future timelike worldline $x : I \to A$; a base point $s_0 \in I$ and the proper-time function $\tau$ of [[def-sr-proper-time]]; and the integrand $h(u) := c^{-1}\sqrt{-\eta(x'(u),x'(u))}$, so that $\tau(s) = \int_{s_0}^s h$ with the oriented integral.

[L1] Proper time ([[def-sr-proper-time]]): $g_x(u) = -\eta(x'(u),x'(u))$ is continuous and strictly positive on $I$, the function $u \mapsto \sqrt{g_x(u)}$ is continuous there, and $\tau(s) = c^{-1}\int_{s_0}^{s}\sqrt{g_x}$ with the oriented integral; changing the base point changes $\tau$ by an additive constant.

[L2] Intervals ([[def-interval]]): order-convex sets with at least two elements are nondegenerate, and every point of such a set is a limit point of it.

[L3] First fundamental theorem ([[thm-ftc-first-part]], [[def-derivative]]): if $f$ is continuous on $[\alpha,\beta]$ and $F(t) = \int_\alpha^t f$ is its integral function, then $F$ is differentiable at every point of $[\alpha,\beta]$ with $F' = f$, the reading at the endpoints being one-sided.

[L4] Continuity facts ([[def-sr-proper-time]], [[thm-composition-of-continuous-functions]], [[thm-algebra-of-continuous-functions]]): $h$ is continuous on $I$ as a composition of the continuous maps $x'$, the quadratic form $-\eta(\cdot,\cdot)$ and the square root; sums, products and scalar multiples of continuous real functions are continuous; and a continuous real function that never vanishes has a continuous reciprocal.

[L5] The future cone ([[def-time-orientation-and-future-causal-sets]], [[def-causal-classification-of-lorentz-vectors]], [[lem-timelike-cone-has-two-convex-components]]): a vector $v$ is timelike exactly when $\eta(v,v) < 0$; fixing a future $\eta$-orthonormal basis, the future timelike set is $C^{+} = \{v : v^{0} > |v_{\mathrm{sp}}|\}$, which is closed under multiplication by positive scalars; a tangent vector $x'(s)$ is future timelike exactly when $x$ is future timelike at $s$.

[L6] Oriented additivity ([[thm-additivity-over-subintervals]]): for integrable $f$ and $u,v,w$ in an interval, $\int_u^v f + \int_v^w f = \int_u^w f$, and $\int_u^u f = 0$.

[L7] Monotonicity of the integral ([[thm-monotonicity-of-the-integral]]): pointwise $\le$ passes to the integral, and a nonnegative integrand has nonnegative integral.

[L8] Vanishing lemma ([[thm-nonnegative-continuous-with-zero-integral-vanishes]]): a continuous nonnegative function on $[a,b]$ with zero integral vanishes identically.

[L9] Continuous image ([[cor-continuous-image-of-an-interval-is-an-interval]], claim 1): the image of an order-convex set under a continuous real function is order-convex.

[L10] Continuous inverse ([[thm-continuous-inverse]]): a continuous injective real function on an order-convex set is strictly monotone, its image is order-convex, it is a bijection onto its image, and the inverse is strictly monotone in the same sense and continuous.

[L11] Derivative of the inverse ([[thm-derivative-of-an-inverse]], clause 1): if $f$ is continuous and injective on the order-convex $I$, $g$ is its inverse, $c \in I$ and $f$ is differentiable at $c$ with $f'(c) \ne 0$, then $g$ is differentiable at $f(c)$ with $g'(f(c)) = 1/f'(c)$.

[L12] Componentwise calculus and chain rule ([[def-vector-valued-derivative-and-integral]], [[thm-chain-rule]], [[thm-componentwise-limits-and-continuity]]): an $\mathbb{R}^{4}$-valued map is differentiable (respectively $C^{1}$) exactly when all its components are, with componentwise derivatives, and a component of a continuous vector-valued map is continuous; the one-variable chain rule applies to real functions.

[L13] Algebra of derivatives ([[thm-algebra-of-derivatives]], [[cor-differentiable-implies-continuous]]): differences of differentiable functions are differentiable with the difference of derivatives, and differentiability implies continuity.

[L14] Zero derivative on an interval ([[cor-zero-derivative-implies-constant]]): a real function continuous on an order-convex set and differentiable with vanishing derivative at every interior point is constant there.

[L15] Bilinearity of $\eta$ ([[def-lorentz-form-and-inertia]]): $\eta(\lambda v, \lambda w) = \lambda^{2}\eta(v,w)$ for real $\lambda$; and the inertial frame isomorphism $E$ is linear ([[def-inertial-frame-and-inertial-chart]]).

## Proof

**Proof technique:** direct.

1.1 The integrand $h$ of [L1] is continuous on $I$; for each $s \in I$ choose reals $\alpha < \beta$ with $[\alpha,\beta] \subseteq I$, $s \in [\alpha,\beta]$ and $s_0 \in [\alpha,\beta]$, where $s$ is an endpoint of $[\alpha,\beta]$ only when it is an endpoint of $I$; then for $t \in [\alpha,\beta]$ oriented additivity [L6] gives $\tau(t) = c^{-1}\int_{s_0}^{t}\sqrt{g_x} = c^{-1}\bigl(F(t) - F(s_0)\bigr)$ with $F(t) := \int_\alpha^t \sqrt{g_x}$. [given, L1, L2, L6]

2.1 By the first fundamental theorem [L3], $F$ is differentiable on $[\alpha,\beta]$ with $F' = \sqrt{g_x}$ (one-sided at the endpoints), so $\tau$ is differentiable at $s$ with $\tau'(s) = c^{-1}\sqrt{g_x(s)} = c^{-1}\sqrt{-\eta(x'(s),x'(s))}$; since $s \in I$ was arbitrary this holds at every point of $I$ with the one-sided reading at endpoints of $I$, and $\tau'$ is continuous on $I$ by [L4]. [step 1.1, L3, L4]

3.1 For every $s \in I$ the tangent $x'(s)$ is future timelike, so $\eta(x'(s),x'(s)) < 0$ by [L5] and $\tau'(s) = c^{-1}\sqrt{-\eta(x'(s),x'(s))} > 0$. [step 2.1, L5]

4.1 For $a < b$ in $I$, oriented additivity [L6] gives $\tau(b) - \tau(a) = c^{-1}\int_a^b\sqrt{g_x} = \int_a^b \tau'$ (using step 2.1 for the integrand); this is $\ge 0$ by monotonicity [L7]. If it were $0$, the continuous nonnegative function $\tau'$ would vanish identically on $[a,b]$ by [L8], contradicting its strict positivity on $[a,b]$ from step 3.1; hence $\tau(b) > \tau(a)$, so $\tau$ is strictly increasing and injective. [step 2.1, step 3.1, L7, L8]

5.1 The image $J = \tau[I]$ is order-convex by [L9] applied to the continuous $\tau$, and it has at least two elements because $I$ is nondegenerate and $\tau$ is injective by step 4.1; hence $\tau : I \to J$ is a bijection. [step 4.1, L2, L9]

6.1 The inverse $\rho : J \to I$ is strictly increasing and continuous on $J$ by the continuous-inverse theorem [L10], applied to the continuous injective $\tau$ on the order-convex set $I$. [step 5.1, L10]

7.1 For $b = \tau(s) \in J$ one has $\tau'(s) > 0$ by step 3.1, so clause 1 of the inverse-derivative theorem [L11] gives that $\rho$ is differentiable at $b$ with $\rho'(b) = 1/\tau'(s) = c/\sqrt{-\eta(x'(s),x'(s))} > 0$. [step 3.1, step 6.1, L11]

8.1 The function $\rho'$ equals $1/(\tau' \circ \rho)$ on $J$: for $b \in J$, $\rho'(b) = 1/\tau'(\rho(b))$ by step 7.1. The composite $\tau' \circ \rho$ is continuous on $J$ (composition of the continuous maps $\rho$ and $\tau'$ of steps 6.1 and 2.1) and strictly positive there, so its reciprocal is continuous by the quotient clause of the algebra of continuous functions; hence $\rho$ is continuously differentiable ($C^{1}$) on $J$. [step 2.1, step 6.1, step 7.1, L4]

9.1 Fix an inertial frame with chart $x_A$ and coordinate path $y = x_A \circ x$, and write $E$ for the linear frame isomorphism. For each $j$ the composite $y^{j} \circ \rho$ is differentiable on $J$ with derivative $(y^{j'} \circ \rho)\,\rho'$ by the chain rule [L12] (with the one-sided reading at endpoints), and this derivative is continuous as a product of the continuous functions $y^{j'} \circ \rho$ and $\rho'$ of steps 6.1 and 8.1; by the componentwise characterisation [L12], $y \circ \rho$ is therefore $C^{1}$ with $(y \circ \rho)' = (y' \circ \rho)\,\rho'$. [step 2.1, step 6.1, step 8.1, L12]

10.1 If $o$ is the frame origin, then $x \circ \rho = o + E(y \circ \rho)$; its displacement difference quotients are $E$ applied to those of $y \circ \rho$. By linearity and the chart derivative identification, step 9.1 and [L15] give $(x \circ \rho)' = \rho' \cdot (x' \circ \rho)$; at $b = \tau(s)$ this reads $(x \circ \rho)'(\tau(s)) = \rho'(\tau(s))\,x'(s) = x'(s)/\tau'(s) = c\,x'(s)/\sqrt{-\eta(x'(s),x'(s))}$ by step 7.1. [step 7.1, step 9.1, L15]

11.1 At each $b = \tau(s) \in J$, bilinearity [L15] and step 3.1 give $\eta\bigl((x \circ \rho)'(b),(x \circ \rho)'(b)\bigr) = \rho'(b)^{2}\,\eta(x'(s),x'(s)) < 0$, so the tangent is timelike; and it is the positive multiple $\rho'(b) \cdot x'(s)$ of the future timelike vector $x'(s)$, with $\rho'(b) > 0$, so by the coordinate description of the future cone [L5] it is future timelike. Hence $y = x \circ \rho$ is a $C^{1}$ future timelike worldline. [step 8.1, step 10.1, L5, L15]

12.1 Let $\tau_y$ be the proper-time function of $y$ with base point $\tau(s_0)$ (defined by [L1] since $J$ is order-convex and $y$ is a $C^{1}$ future timelike worldline by step 11.1). Applying step 2.1 to $y$ gives $\tau_y'(b) = c^{-1}\sqrt{-\eta(y'(b),y'(b))}$ for $b \in J$, and by steps 7.1, 10.1 and [L15] this equals $c^{-1}\rho'(b)\sqrt{-\eta(x'(\rho(b)),x'(\rho(b)))} = \rho'(b)\,\tau'(\rho(b)) = 1$. Hence the function $\sigma(b) := \tau_y(b) - b$ is continuous on $J$ and differentiable at every interior point with $\sigma' = 0$ by the algebra of derivatives [L13], so $\sigma$ is constant by [L14]; therefore $\tau_y(b) - \tau_y(b_0) = b - b_0$ for all $b, b_0 \in J$: the reparametrized worldline is parametrized by its own proper time up to the additive constant $\tau(s_0)$. [step 7.1, step 10.1, step 11.1, L13, L14, L15]

13.1 Every step uses one-dimensional or finite-dimensional calculus and fixed objects of the given worldline: the only "selections" are of the compact interval $[\alpha,\beta]$ around each point, made explicitly from the data, and no choice principle is used. [step 1.1, step 12.1] ∎

## Remarks

- **The proper-time function is the inverse of nothing yet.** Clause (i) proves that $\tau$ is differentiable with positive derivative; strict monotonicity, the inverse and its differentiability are consequences obtained in clauses (ii)-(iii), and the inverse is what makes the proper-time parametrization of clause (iv) available.

- **One-sided readings at the ends.** For a worldline on a half-open or unbounded $I$ the derivatives in clauses (i) and (iii) are one-sided limits at the points of $I$ that are endpoints of $I$; the inverse is formed on the order-convex image $J$, so the same convention applies there. No differentiability is asserted at points of $\overline{I}$ outside $I$.

- **The base point only shifts.** Changing $s_0$ adds a constant to $\tau$ (by [L1]) and hence shifts $J$ and $\rho$ by that constant, while all derivatives $\tau'$, $\rho'$ and the tangent formula of clause (iv) are unchanged.

- **Relation to the four-velocity.** The tangent formula of clause (iv), $(x \circ \rho)'(\tau(s)) = x'(s)/\tau'(s)$, is the object later named the four-velocity in [[def-sr-four-velocity-and-four-acceleration]]; this lemma does not use that definition and asserts nothing about it.
