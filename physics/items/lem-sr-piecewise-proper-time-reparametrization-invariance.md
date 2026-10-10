---
id: lem-sr-piecewise-proper-time-reparametrization-invariance
kind: lemma
title: "Proper time is invariant under regular increasing weak piecewise changes of parameter"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 10
deps:
  - def-sr-piecewise-proper-time
  - lem-sr-weak-piecewise-causal-integrability
  - def-sr-regular-causal-curve-and-worldline
  - def-inertial-frame-and-inertial-chart
  - def-lorentz-form-and-inertia
  - def-causal-classification-of-lorentz-vectors
  - def-time-orientation-and-future-causal-sets
  - lem-timelike-cone-has-two-convex-components
  - thm-chain-rule
  - thm-substitution
  - thm-continuous-implies-integrable
  - thm-continuous-inverse
  - thm-componentwise-limits-and-continuity
  - thm-composition-of-continuous-functions
  - thm-algebra-of-continuous-functions
  - cor-differentiable-implies-continuous
  - thm-algebra-of-derivatives
  - cor-mean-value-theorem
  - def-vector-valued-derivative-and-integral
  - def-interval
dependency_roles:
  def-sr-piecewise-proper-time: mathematical-premise
  lem-sr-weak-piecewise-causal-integrability: mathematical-premise
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-substitution: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-continuous-inverse: mathematical-premise
  thm-componentwise-limits-and-continuity: mathematical-premise
  thm-composition-of-continuous-functions: mathematical-premise
  thm-algebra-of-continuous-functions: mathematical-premise
  cor-differentiable-implies-continuous: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
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

Let $c > 0$ and let $x : [a,b] \to A$ be a weak piecewise $C^{1}$ future
timelike worldline: $C^{1}$ on the open pieces of a finite partition
$a = s_0 < \cdots < s_m = b$, with finite future timelike one-sided
difference-quotient derivatives at both ends of every piece
([[def-sr-regular-causal-curve-and-worldline]]). Let
$\varphi : [u,v] \to [a,b]$ be an increasing continuous surjection, $C^{1}$ on
the open pieces of a finite partition, with $\varphi' > 0$ at every interior
smooth point and finite positive one-sided difference-quotient derivatives at
both endpoints of each piece.

Then $\varphi$ is strictly increasing with continuous inverse, $y = x \circ
\varphi$ is a weak piecewise $C^{1}$ future timelike worldline, and

$$\Delta\tau_{[u,v]}(y) = \Delta\tau_{[a,b]}(x)$$

in the notation of [[def-sr-piecewise-proper-time]]. The same equality holds
for every pair of corresponding restricted parameter intervals; based
proper-time functions differ only by their base-point constant. The relevant
partition of $[u,v]$ is the common refinement of $\varphi$'s partition and the
inverse images of $x$'s partition points.

This statement gives worldline and clock consequences only for positive
derivatives, including all one-sided endpoint derivatives; a zero-tangent
composition is not asserted to be a worldline.

## Facts & Assumptions

**Given:** A real $c > 0$; a weak piecewise $C^{1}$ future timelike worldline $x : [a,b] \to A$ with partition $a = s_0 < \cdots < s_m = b$; and an increasing continuous surjection $\varphi : [u,v] \to [a,b]$, $C^{1}$ on the open pieces of a finite partition with $\varphi' > 0$ at interior smooth points and finite positive one-sided difference-quotient derivatives at the piece endpoints.

[L1] Weak piecewise worldlines ([[def-sr-regular-causal-curve-and-worldline]]): $x$ is $C^{1}$ on each open piece with future timelike tangent, its one-sided difference-quotient tangents at the piece endpoints are finite and future timelike, and its finiteness gives continuity at corners; a curve with these properties is a weak piecewise $C^{1}$ future timelike worldline.

[L2] Mean value theorem ([[cor-mean-value-theorem]]): a real function continuous on $[\alpha,\beta]$ and differentiable on $(\alpha,\beta)$ satisfies $g(\beta)-g(\alpha) = g'(c)(\beta-\alpha)$ for some $c \in (\alpha,\beta)$.

[L3] Continuous inverse ([[thm-continuous-inverse]], [[def-interval]]): a continuous injective real function on an order-convex set is strictly monotone, and its inverse is strictly monotone in the same sense and continuous; a strictly increasing surjection $[u,v] \to [a,b]$ has $\varphi(u) = a$, $\varphi(v) = b$, and each point of $[a,b]$ has exactly one preimage.

[L4] Chain rule and derivatives ([[thm-chain-rule]], [[thm-algebra-of-derivatives]], [[def-inertial-frame-and-inertial-chart]], [[def-vector-valued-derivative-and-integral]]): componentwise in an inertial chart, if $s \mapsto y^{j}(s)$ is differentiable at $\sigma$ and $\varphi$ is differentiable at $w$ with $\varphi(w) = \sigma$, then $y^{j} \circ \varphi$ is differentiable at $w$ with derivative $y^{j'}(\sigma)\varphi'(w)$, with one-sided readings at endpoint points; products of these derivatives obey the algebra of derivatives, and differentiability implies continuity ([[cor-differentiable-implies-continuous]]).

[L5] The future cone ([[lem-timelike-cone-has-two-convex-components]], [[def-time-orientation-and-future-causal-sets]], [[def-causal-classification-of-lorentz-vectors]]): in a future $\eta$-orthonormal basis the future timelike set is $\{v : v^{0} > |v_{\mathrm{sp}}|\}$, and it is closed under multiplication by positive scalars.

[L6] Substitution ([[thm-substitution]], [[thm-continuous-implies-integrable]]): if $\varphi$ is differentiable on a compact interval with $\varphi'$ integrable there and $g$ is continuous on an order-convex set containing the image of that interval, then $\int_{\varphi(r)}^{\varphi(s)} g = \int_r^s (g \circ \varphi)\,\varphi'$; a continuous function on a compact interval is integrable there.

[L7] Continuity facts ([[thm-componentwise-limits-and-continuity]], [[thm-composition-of-continuous-functions]], [[thm-algebra-of-continuous-functions]]): components of continuous vector-valued maps are continuous; composites, products, sums and scalar multiples of continuous real functions are continuous.

[L8] Bilinearity of $\eta$ ([[def-lorentz-form-and-inertia]]): $\eta(\lambda v, \lambda w) = \lambda^{2}\eta(v,w)$.

[L9] Weak-piecewise integrability and total proper time ([[lem-sr-weak-piecewise-causal-integrability]], [[def-sr-piecewise-proper-time]]): for a weak piecewise future causal curve the two-ended improper integrals over the pieces are finite and nonnegative, are independent of the cut point, are additive under subdivision and independent of the admissible partition; and $\Delta\tau_{[a,b]}(x) = c^{-1}\sum_i \int_{(s_{i-1},s_i)}\sqrt{-\eta(x',x')}$.

## Proof

**Proof technique:** direct.

1.1 On each open piece of its partition, $\varphi$ is $C^{1}$ with $\varphi' > 0$; the mean value theorem [L2] applied on each closed piece gives $\varphi(\beta)-\varphi(\alpha) = \varphi'(c)(\beta-\alpha) > 0$ for its endpoints $\alpha < \beta$, so $\varphi$ is strictly increasing on every piece and, concatenating the finitely many pieces, strictly increasing on $[u,v]$; hence $\varphi$ is injective with $\varphi(u) = a$, $\varphi(v) = b$, and its inverse is continuous by [L3]. [given, L2, L3]

2.1 Let $\rho_0 < \cdots < \rho_N$ be the increasing enumeration of the partition points of $\varphi$ together with the preimages $\varphi^{-1}(s_1),\dots,\varphi^{-1}(s_{m-1})$, which exist uniquely by [L3]; this is a finite partition of $[u,v]$ (the common refinement). [step 1.1, L3]

3.1 On each open subinterval $(\rho_{k-1},\rho_k)$ the map $\varphi$ is $C^{1}$ and $x$ is $C^{1}$ on the open piece of $x$ containing $\varphi\bigl((\rho_{k-1},\rho_k)\bigr)$, so $y = x \circ \varphi$ is $C^{1}$ there with $y' = \varphi'\,(x' \circ \varphi)$ in coordinates, by the chain rule [L4]; hence every open-piece tangent of $y$ is a positive multiple of a future timelike vector and is future timelike by [L5]. [step 2.1, L5, L4]

4.1 At each endpoint $\rho_k$, the one-sided difference quotients of $y$ exist: writing $k_h := \varphi(\rho_k + h)-\varphi(\rho_k)$ for small $h$ on one side, $\bigl(y(\rho_k+h)-y(\rho_k)\bigr)/h = \bigl[\bigl(x(\varphi(\rho_k)+k_h)-x(\varphi(\rho_k))\bigr)/k_h\bigr]\cdot(k_h/h)$, where $k_h \to 0$ on the correct side, the first factor tends to the finite one-sided quotient tangent of $x$ at $\varphi(\rho_k)$ (or to the tangent $x'$ when $\varphi(\rho_k)$ is interior to an $x$-piece), and the second tends to the finite positive one-sided quotient derivative of $\varphi$ at $\rho_k$; the product is finite and, being a positive multiple of a future timelike vector, future timelike by [L5]. [step 2.1, step 3.1, L1, L5]

4.2 Let $\rho_{k-1} < r < s < \rho_k$. Then $\varphi$ is $C^{1}$ on $[r,s]$ with $\varphi'$ continuous, hence integrable; the function $f := \sqrt{-\eta(x',x')}$ is continuous on the order-convex open piece of $x$ containing $\varphi([r,s])$ by [L7] (it is the composition of the continuous tangent component functions with the square root); substitution [L6] gives $\int_r^s \varphi'(w)\,f(\varphi(w))\,dw = \int_{\varphi(r)}^{\varphi(s)} f$. [step 3.1, L6, L7]

5.1 By bilinearity [L8], $-\eta(y'(w),y'(w)) = \varphi'(w)^{2}\bigl(-\eta(x'(\varphi(w)),x'(\varphi(w)))\bigr)$, so $\sqrt{-\eta(y',y')} = \varphi'(w)\,f(\varphi(w))$ on the open subinterval because $\varphi' > 0$; hence the left side of step 4.2 is the truncation integral of $y$'s length density over $[r,s]$. [step 3.1, step 4.2, L8]

6.1 Both $x$ and $y$ are weak piecewise future timelike curves (the first by hypothesis, the second by steps 3.1 and 4.1), so the improper integrals of $f$ over the pieces of $x$ and of $\sqrt{-\eta(y',y')}$ over the pieces of $y$ exist and are finite by [L9]. Letting $r \downarrow \rho_{k-1}$ and $s \uparrow \rho_k$ in step 4.2, the left side tends to $\int_{(\rho_{k-1},\rho_k)}\sqrt{-\eta(y',y')}$ by definition of the improper integral, and the right side tends to the integral of $f$ over the interval $\bigl(\varphi(\rho_{k-1}),\varphi(\rho_k)\bigr)$ contained in a single open piece of $x$, by continuity and strict monotonicity of $\varphi$; the limits are equal. [step 4.2, step 5.1, step 1.1, L9]

7.1 Summing step 6.1 over the refined pieces and using the additivity of the improper integrals [L9], the intervals $\bigl(\varphi(\rho_{k-1}),\varphi(\rho_k)\bigr)$ partition the pieces of $x$ up to finitely many cutting points, so $\Delta\tau_{[u,v]}(y) = c^{-1}\sum_k\int_{(\rho_{k-1},\rho_k)}\sqrt{-\eta(y',y')} = c^{-1}\sum_i\int_{(s_{i-1},s_i)} f = \Delta\tau_{[a,b]}(x)$. [step 6.1, L9]

8.1 The same argument applied to the restrictions of $x$ and $\varphi$ to corresponding restricted parameter intervals gives $\Delta\tau$ over every pair of corresponding restricted intervals; consequently the based functions $\tau_y$ and $\tau_x \circ \varphi$ differ by the base-point constant. [step 7.1]

9.1 The hypotheses used are $\varphi' > 0$ at every interior smooth point and finite positive one-sided endpoint quotients; at a point where $\varphi' = 0$ the composed tangent is zero and the composition is not a worldline, so no total proper time is asserted for it, and no inverse of $\varphi$ is used in the integral identity of step 7.1; no object is selected from a family, so no choice principle is used. [step 7.1, step 8.1] ∎

## Remarks

- **Why the refined partition is needed.** The preimages of the corners of $x$ must be corners of $y$; refining by them makes $x$ smooth on the image of each open refined piece, so the truncation substitution of step 4.2 applies on compact subintervals, and only then are the improper limits taken. No derivative-limit hypothesis at the corners is used, and $\varphi'$ need not be bounded near a corner.

- **Positive derivative throughout.** The conclusion $\Delta\tau_{[u,v]}(y) = \Delta\tau_{[a,b]}(x)$ is a statement about worldlines; the companion global-$C^{1}$ identity of [[lem-sr-proper-time-reparametrization-invariance]] separately allows vanishing derivatives in the broad curve-integral identity without asserting a worldline there.
