---
id: lem-sr-weak-piecewise-causal-integrability
kind: lemma
title: "Improper integrability and endpoint increments of weak piecewise future causal curves"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 8
deps:
  - def-sr-regular-causal-curve-and-worldline
  - def-inertial-frame-and-inertial-chart
  - def-spatial-euclidean-structure-of-an-inertial-frame
  - def-time-orientation-and-future-causal-sets
  - lem-timelike-cone-has-two-convex-components
  - def-vector-valued-derivative-and-integral
  - cor-differentiable-implies-continuous
  - thm-continuous-implies-integrable
  - thm-ftc-second-part
  - thm-monotonicity-of-the-integral
  - thm-linearity-of-the-integral
  - thm-additivity-over-subintervals
  - thm-norm-inequality-for-the-vector-valued-integral
  - cor-integrability-of-absolute-values-products-and-lattice-operations
  - def-complete-ordered-field
  - thm-real-power-continuity-and-derivatives
  - thm-algebra-of-continuous-functions
  - def-rational-power
  - def-lorentz-form-and-inertia
  - def-causal-classification-of-lorentz-vectors
  - cor-triangle-inequality-for-inner-product-norm
  - thm-componentwise-limits-and-continuity
  - lem-rational-power-monotone
  - thm-nth-roots-exist
  - thm-nonnegative-continuous-with-zero-integral-vanishes
  - lem-integral-elementary-bounds
dependency_roles:
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  cor-differentiable-implies-continuous: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  thm-linearity-of-the-integral: mathematical-premise
  thm-additivity-over-subintervals: mathematical-premise
  thm-norm-inequality-for-the-vector-valued-integral: mathematical-premise
  cor-integrability-of-absolute-values-products-and-lattice-operations: mathematical-premise
  def-complete-ordered-field: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-algebra-of-continuous-functions: mathematical-premise
  def-rational-power: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  cor-triangle-inequality-for-inner-product-norm: mathematical-premise
  thm-componentwise-limits-and-continuity: mathematical-premise
  lem-rational-power-monotone: mathematical-premise
  thm-nth-roots-exist: mathematical-premise
  thm-nonnegative-continuous-with-zero-integral-vanishes: mathematical-premise
  lem-integral-elementary-bounds: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook), Sections 3.5 and 3.7 pp. 60-68; signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision), Section 2.2 pp. 27-28 and Section 2.3 pp. 28-30 (PDF pp. 28-31); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
---

## Statement

Let $x : [a,b] \to A$, $a < b$, be a piecewise $C^{1}$ curve in the sense of
[[def-sr-regular-causal-curve-and-worldline]], with a finite partition
$a = s_0 < \cdots < s_m = b$, $C^{1}$ on each open piece and finite one-sided
difference-quotient derivatives at both ends of each piece. Assume its tangents
are nonzero future causal at every open-piece point and at each one-sided
endpoint.

In any inertial chart ([[def-inertial-frame-and-inertial-chart]]) write
$y = (y^{0},z)$, $z \in \mathbb{R}^{3}$, for the coordinate path. On a piece
$(\alpha,\beta)$, choose $r \in (\alpha,\beta)$; for a function $g$ continuous
there, write

$$\int_{(\alpha,\beta)} g \;:=\; \lim_{u \downarrow \alpha} \int_u^{r} g \;+\; \lim_{v \uparrow \beta} \int_r^{v} g$$

when both limits are finite. Then:

**(a)** $y$ is continuous on $[\alpha,\beta]$, $y^{0'} \ge |z'| \ge 0$ on
$(\alpha,\beta)$, and $y^{0'} > 0$ there.

**(b)** Every coordinate derivative is absolutely improperly Riemann integrable
(its absolute value has finite improper integral), and its signed improper
integral equals the corresponding endpoint increment. The continuous functions
$|z'|$ and $f = \sqrt{(y^{0'})^{2} - |z'|^{2}} = \sqrt{-\eta(x',x')}$ have
finite nonnegative improper integrals, with
$\int_{(\alpha,\beta)} f \le \int_{(\alpha,\beta)} y^{0'} = y^{0}(\beta) - y^{0}(\alpha)$.

**(c)** The improper values are independent of $r$, additive under subdivision,
and the finite piece sums are independent of the admissible partition.

**(d)** $D = x(b)-x(a)$ is nonzero future causal: $D^{0} > 0$ and
$|D_{\mathrm{spatial}}| \le D^{0}$ in every inertial chart. If some interior or
one-sided endpoint tangent is future timelike, then $D$ is future timelike.
Coordinate time is strictly increasing on every nondegenerate subinterval. The
integrals need not be ordinary closed-piece Riemann integrals. No
derivative-limit hypothesis, Lebesgue-integration premise, clock identification,
or choice principle is used.

## Facts & Assumptions

**Given:** Reals $a < b$; a piecewise $C^{1}$ curve $x : [a,b] \to A$ with partition $a = s_0 < \cdots < s_m = b$, $C^{1}$ on each open piece, finite one-sided difference-quotient derivatives at both ends of every piece, and nonzero future causal tangents at every open-piece point and at each one-sided endpoint; an inertial frame with chart $x_A$ and coordinate path $y = (y^{0},z)$; a piece $(\alpha,\beta)$ of the partition and a point $r \in (\alpha,\beta)$.

[L1] Weak piecewise regularity and corner continuity ([[def-sr-regular-causal-curve-and-worldline]]): $x$ is $C^{1}$ on each open piece, so $y$ is $C^{1}$ there and each coordinate $y^{j}$ is differentiable with $y^{j'}$ the corresponding coordinate derivative; the finite one-sided difference-quotient derivatives at the piece endpoints exist, and their finiteness implies continuity of $x$, hence of $y$, at every corner and at $a$ and $b$; derivatives of a function differentiable on an interval are continuous there when the function is $C^{1}$ ([[cor-differentiable-implies-continuous]]).

[L2] Metric in an inertial chart ([[def-inertial-frame-and-inertial-chart]], [[def-spatial-euclidean-structure-of-an-inertial-frame]], [[def-lorentz-form-and-inertia]]): in the chart of an inertial frame the matrix of $\eta$ in the basis $(e_0,\dots,e_3)$ is $\operatorname{diag}(-1,1,1,1)$, the spatial form $\delta$ is the restriction of $\eta$ to $\operatorname{span}(e_1,e_2,e_3)$ with spatial coordinate identification $J:\mathbb R^3\to S$, $J(z):=z^1e_1+z^2e_2+z^3e_3$ (the three entries of $z$ are labelled $z^1,z^2,z^3$), and coordinate norm $|z|:=\sqrt{\delta(J(z),J(z))}=\|z\|_2$, and for a tangent vector $v = x'(u)$ with coordinates $y'(u) = (y^{0'}(u),z'(u))$, $-\eta(v,v) = (y^{0'}(u))^{2} - |z'(u)|^{2}$; $\eta$ is bilinear ([[def-lorentz-form-and-inertia]]).

[L3] The future cone in orthonormal coordinates ([[lem-timelike-cone-has-two-convex-components]], [[def-causal-classification-of-lorentz-vectors]], [[def-time-orientation-and-future-causal-sets]]): with the first basis vector future, the future timelike set is $T_+ = \{v : v^{0} > |v_{\mathrm{sp}}|\}$, its closure is $\operatorname{cl}(T_+) = \{v : v^{0} \ge |v_{\mathrm{sp}}|\}$, and $T_+$ is open in $V$; a nonzero future causal vector $v$ satisfies $v^{0} \ge |v_{\mathrm{sp}}|$ and $v^{0} > 0$; a future timelike vector has $v^{0} > |v_{\mathrm{sp}}|$.

[L4] Truncated fundamental theorem of calculus ([[thm-continuous-implies-integrable]], [[thm-ftc-second-part]], [[def-vector-valued-derivative-and-integral]]): if $\alpha < u < v < \beta$ then on $[u,v]$ each coordinate function $y^{j}$ is differentiable with continuous derivative $y^{j'}$, so $y^{j'}$ is Riemann integrable on $[u,v]$ and $\int_u^v y^{j'} = y^{j}(v) - y^{j}(u)$.

[L5] Order, additivity and linearity of the Riemann integral ([[thm-monotonicity-of-the-integral]], [[thm-additivity-over-subintervals]], [[thm-linearity-of-the-integral]]): if $a \le c \le d$ and the functions are integrable with $g_1 \le g_2$ pointwise then $\int_c^d g_1 \le \int_c^d g_2$, and if $g \ge 0$ then $\int_c^d g \ge 0$; $\int_c^e g = \int_c^d g + \int_d^e g$ for $c \le d \le e$; and the integral is linear in the integrand.

[L6] Completeness and least upper bounds ([[def-complete-ordered-field]]): every nonempty subset of $\mathbb{R}$ that is bounded above has a least upper bound, and if $S = \sup A$ then no $S - \varepsilon$ with $\varepsilon > 0$ is an upper bound of $A$.

[L7] Norm inequality for vector-valued integrals and the triangle inequality ([[thm-norm-inequality-for-the-vector-valued-integral]], [[cor-triangle-inequality-for-inner-product-norm]], [[def-spatial-euclidean-structure-of-an-inertial-frame]]): for $c \le d$ and integrable vector-valued $f$, $\bigl\|\int_c^d f\bigr\|_2 \le \int_c^d \|f\|_2$; and $|u+w| \le |u| + |w|$ for the Euclidean norm on the spatial space, finite sums included.

[L8] Square root and continuity facts ([[def-rational-power]], [[thm-real-power-continuity-and-derivatives]], [[lem-rational-power-monotone]], [[thm-nth-roots-exist]], [[thm-componentwise-limits-and-continuity]], [[thm-algebra-of-continuous-functions]]): $t \mapsto t^{1/2}$ is continuous on $(0,\infty)$ and $a^{1/2}$ is the unique nonnegative square root of $a$; if $0 < s \le t$ then $s^{1/2} \le t^{1/2}$ and $0^{1/2} = 0$; products and finite sums of continuous real functions are continuous, and the components of a continuous $\mathbb{R}^{4}$-valued map are continuous.

[L9] The future cone is closed under sums of its elements: if $v$ is future timelike and $w$ is future causal then $v + w$ is future timelike, and a sum of two future causal vectors is future causal. This is the coordinate computation $(v+w)^{0} = v^{0}+w^{0} > |v_{\mathrm{sp}}| + |w_{\mathrm{sp}}| \ge |v_{\mathrm{sp}}+w_{\mathrm{sp}}|$, respectively the same with nonstrict inequalities, using [L3] and [L7].

[L10] Strict positivity of integrals of positive continuous functions ([[thm-nonnegative-continuous-with-zero-integral-vanishes]], [[lem-integral-elementary-bounds]]): if $g$ is continuous and nonnegative on a nondegenerate compact interval $[p,q]$ and $g(u_0) > 0$ for some $u_0 \in [p,q]$, then $\int_p^q g > 0$, because $\int_p^q g = 0$ would force $g \equiv 0$ on $[p,q]$; in particular a continuous function that is strictly positive at every point of $[p,q]$ has strictly positive integral there. Moreover for a real constant $\mu$ one has $\int_p^q \mu = \mu\,(q-p)$, so $\int_p^q \mu > 0$ whenever $\mu > 0$ and $p < q$.

## Proof

1.1 The coordinate path $y$ is continuous at the corners and the endpoints of the piece by [L1] and $C^{1}$ on $(\alpha,\beta)$, so $y$ is continuous on $[\alpha,\beta]$; on $(\alpha,\beta)$ each coordinate derivative $y^{j'}$ is continuous by [L1], and by the chart form [L2] one has $-\eta(x'(u),x'(u)) = (y^{0'}(u))^{2} - |z'(u)|^{2}$ for every $u \in (\alpha,\beta)$. [given, L1, L2]

2.1 At every $u \in (\alpha,\beta)$ the tangent $x'(u)$ is nonzero future causal, so by [L3] $y^{0'}(u) \ge |z'(u)| \ge 0$ and $y^{0'}(u) > 0$: the spatial inequality uses the coordinate description of the future cone, and strict positivity uses that $x'(u) \ne 0$ rules out the case $y'(u) = 0$. [step 1.1, L3]

2.2 For $\alpha < u < v < \beta$ and each $j \in \{0,1,2,3\}$ the truncated fundamental theorem gives $\int_u^v y^{j'} = y^{j}(v) - y^{j}(u)$ by [L4]. [step 1.1, L4]

3.1 Letting $u \downarrow \alpha$ in the case $j = 0$ of step 2.2, continuity of $y^{0}$ at $\alpha$ gives $\lim_{u \downarrow \alpha} \int_u^r y^{0'} = y^{0}(r) - y^{0}(\alpha)$, a finite real number; it is nonnegative because $y^{0'}(\cdot) \ge 0$ on $(u,r)$ and [L5] applies to the truncations, $y^{0}(r) - y^{0}(\alpha) \ge 0$. [step 2.1, step 2.2, L1, L5]

3.2 Likewise $\lim_{v \uparrow \beta} \int_r^v y^{0'} = y^{0}(\beta) - y^{0}(r)$, finite and nonnegative. [step 2.1, step 2.2, L1, L5]

3.3 The functions $|z'|$ and $f = \sqrt{(y^{0'})^{2}-|z'|^{2}}$ are continuous on $(\alpha,\beta)$ and satisfy $0 \le |z'| \le y^{0'}$ and $0 \le f \le y^{0'}$ there: $|z'|^{2}$ is a finite sum of squares of the continuous functions $z'^{i}$, hence continuous by [L8]; writing $t := |z'|^{2}$, the composite $t^{1/2}$ is continuous where $t > 0$ by [L8], and at a point where $t(u_0) = 0$ the estimate $0 \le |z'(u)| = (|z'(u)|^{2})^{1/2} \le (\sup_{|u-u_0| < \delta}|z'|^{2})^{1/2} < \varepsilon$ for small $\delta$, using monotonicity of the square root and continuity of $|z'|^{2}$ at $u_0$, gives continuity there; the same argument applies to $f$, whose inner function $(y^{0'})^{2}-|z'|^{2}$ is continuous and nonnegative by step 2.1; and the domination $f \le y^{0'}$, $|z'| \le y^{0'}$ follows from $0 \le (y^{0'})^{2} - |z'|^{2} \le (y^{0'})^{2}$, $y^{0'} \ge 0$ and monotonicity of the square root, together with $(y^{0'})^{2}$'s unique nonnegative square root $y^{0'}$ from [L8]. [step 2.1, L3, L8]

3.4 For each $j$, step 2.2 gives $\int_u^r y^{j'} = y^{j}(r)-y^{j}(u)$ and $\int_r^v y^{j'} = y^{j}(v)-y^{j}(r)$; letting $u \downarrow \alpha$ and $v \uparrow \beta$, continuity of $y^{j}$ at $\alpha$ and $\beta$ gives the finite limits $y^{j}(r)-y^{j}(\alpha)$ and $y^{j}(\beta)-y^{j}(r)$, whose sum is $y^{j}(\beta)-y^{j}(\alpha)$: the signed improper integral of each coordinate derivative equals the corresponding endpoint increment. [step 2.2, L1]

4.1 Let $g$ be continuous on $(\alpha,\beta)$ with $0 \le g \le y^{0'}$ pointwise, and put $A(u) := \int_u^r g$ for $u \in (\alpha,r]$. For $\alpha < u_1 < u_2 \le r$, additivity and nonnegativity of the integral [L5] give $A(u_1) = A(u_2) + \int_{u_1}^{u_2} g \ge A(u_2)$, so $A$ is nondecreasing as $u$ decreases; and $A(u) \le \int_u^r y^{0'} = y^{0}(r)-y^{0}(u) \le y^{0}(r)-y^{0}(\alpha)$ by [L5] and step 3.1. The set $\{A(u) : \alpha < u \le r\}$ is nonempty and bounded above, so by [L6] it has a supremum $S$; for every $\varepsilon > 0$ the number $S-\varepsilon$ is not an upper bound, so there is $u_*$ with $A(u_*) > S-\varepsilon$, and every $\alpha < u < u_*$ then satisfies $S-\varepsilon < A(u) \le S$. Hence $\lim_{u \downarrow \alpha} A(u) = S$ exists and is finite. [step 2.1, step 3.1, L5, L6]

4.2 Symmetrically, $B(v) := \int_r^v g$ is nondecreasing in $v$ with $B(v) \le y^{0}(\beta)-y^{0}(r)$ by [L5] and step 3.2, so by [L6] $\lim_{v \uparrow \beta} B(v)$ exists and is finite. [step 2.1, step 3.2, L5, L6]

5.1 Applying steps 4.1 and 4.2 to $g := |z'|$ and $g := f$, which are continuous and dominated by $y^{0'}$ by step 3.3, and passing the truncation inequalities to the finite limits, gives finite improper integrals with $\int_{(\alpha,\beta)} f \le \int_{(\alpha,\beta)} y^{0'} = y^{0}(\beta)-y^{0}(\alpha)$. [step 3.1, step 3.2, step 3.3, step 4.1, step 4.2, L5]

5.2 The improper value is independent of $r$: for $\alpha < r_1 < r_2 < \beta$ and any admissible $g$, the two-sided limit $\lim_{u \downarrow \alpha, v \uparrow \beta} \int_u^v g$ exists and equals $\int_{(\alpha,\beta)} g$ computed with $r = r_1$, because $\int_u^v g = \int_u^{r_1} g + \int_{r_1}^v g$ by [L5] and the two one-sided limits add; the same identity with $r_2$ exhibits the same two-sided limit as the value computed with $r = r_2$, so the two values agree. [step 4.1, step 4.2, L5]

6.1 For each $j$ the absolute value $|y^{j'}|$ is continuous on $(\alpha,\beta)$ with $0 \le |y^{j'}| \le y^{0'}$ by step 2.1, so steps 4.1 and 4.2 give $\int_{(\alpha,\beta)} |y^{j'}| \le y^{0}(\beta)-y^{0}(\alpha) < \infty$: every coordinate derivative is absolutely improperly Riemann integrable. [step 2.1, step 4.1, step 4.2, step 5.1]

6.2 Additivity under subdivision: for $\alpha < \gamma < \beta$ and admissible $g$, splitting $\int_u^v g = \int_u^{\gamma} g + \int_{\gamma}^v g$ and passing to the one-sided limits gives $\int_{(\alpha,\beta)} g = \int_{(\alpha,\gamma)} g + \int_{(\gamma,\beta)} g$. [step 5.2, L5]

7.1 For a piece $(s_{i-1},s_i)$ write $\Delta_i := y(s_i)-y(s_{i-1})$ and $\Delta_{i,\mathrm{sp}} := z(s_i)-z(s_{i-1})$. By steps 4.1 and 4.2, $\Delta_i^{0} = \int_{(s_{i-1},s_i)} y^{0'} > 0$: the improper value dominates the ordinary integral of the continuous function $y^{0'}$ over any nondegenerate compact interior subinterval, and that ordinary integral is strictly positive by [L10] because $y^{0'} > 0$ at every point of the subinterval by step 2.1; and $\bigl|\Delta_{i,\mathrm{sp}}\bigr| = \bigl\|\int_{(s_{i-1},s_i)} z'\bigr\|_2 \le \int_{(s_{i-1},s_i)} |z'| \le \int_{(s_{i-1},s_i)} y^{0'} = \Delta_i^{0}$, the first inequality by [L7] applied to the truncations and passed to the limit, the second by step 2.1 and [L5]. [step 2.1, step 5.1, step 3.4, step 6.1, L5, L7, L10]

7.2 Independence of the admissible partition: let two finite partitions of $[a,b]$ be admissible and let their union be the common refinement, whose points split each piece of either partition into finitely many subintervals; by step 6.2 the total sum over each piece equals the sum of the values over its subintervals, and inductively the total over the refined partition equals the total over each original partition, so the two finite sums agree. [step 6.2]

8.1 Summing over the finitely many pieces gives $D^{0} = \sum_i \Delta_i^{0} > 0$ and, by the triangle inequality of [L7] for the finite sum $\sum_i \Delta_{i,\mathrm{sp}}$ and by step 7.1, $|D_{\mathrm{spatial}}| \le \sum_i |\Delta_{i,\mathrm{sp}}| \le \sum_i \Delta_i^{0} = D^{0}$; hence $D$ is nonzero future causal by [L3]. [step 7.1, L3, L7]

8.2 Coordinate time is strictly increasing on every nondegenerate subinterval: for $s < t$ in $[a,b]$, the increment $y^{0}(t)-y^{0}(s)$ decomposes as a sum of increments over the pieces that meet $[s,t]$, each nonnegative by step 7.1 and at least one strictly positive because $(s,t)$ is nonempty and open and meets some piece in a nondegenerate interval, over which $y^{0'}$ is continuous and positive and hence has strictly positive integral by [L10]. [step 7.1, L5, L10]

9.1 If an interior point $c \in (\alpha,\beta)$ has $x'(c)$ future timelike, then $y^{0'}(c)-|z'(c)| > 0$ by [L3]; the function $y^{0'}-|z'|$ is continuous on $(\alpha,\beta)$ by steps 1.1 and 3.3, so there are $\delta > 0$ and $\mu > 0$ with $y^{0'}-|z'| \ge \mu$ on $[c-\delta,c+\delta] \subset (\alpha,\beta)$. Then $D^{0}-|D_{\mathrm{spatial}}| \ge \sum_i \bigl(\Delta_i^{0}-\bigl|\Delta_{i,\mathrm{sp}}\bigr|\bigr) \ge \int_{(\alpha,\beta)}(y^{0'}-|z'|) \ge \int_{c-\delta}^{c+\delta} \mu = \mu\cdot 2\delta > 0$ by steps 3.4, 6.2, 7.1, [L5] and the constant-integral value of [L10], so $D$ is future timelike by [L3]. [step 5.1, step 7.1, step 8.1, L3, L5, L10]

9.2 If a one-sided endpoint tangent is future timelike, say the right quotient of the piece at $s^{*} \in \{a\} \cup \{s_1,\dots,s_{m-1}\}$ is the future timelike vector $v = y'(s^{*}+)$, then for small $h > 0$ the quotient $\bigl(y(s^{*}+h)-y(s^{*})\bigr)/h$ is eventually future timelike, since it tends to $v$ and the future timelike set is open by [L3]; so $y(s^{*}+h)-y(s^{*}) = h\,q_h$ is future timelike. Split $D = \bigl[y(s^{*})-y(a)\bigr] + \bigl[y(s^{*}+h)-y(s^{*})\bigr] + \bigl[y(b)-y(s^{*}+h)\bigr]$: the first bracket is absent when $s^{*} = a$ and is otherwise future causal by steps 6.2 and 7.1 applied to the restriction to $[a,s^{*}]$, the middle bracket is future timelike, and the last bracket is future causal by steps 6.2 and 7.1 applied to the restriction to $[s^{*}+h,b]$; applying [L9] to the timelike middle bracket and the future causal last bracket, and then once more when the future causal first bracket is present, makes $D$ future timelike, and the cases of a left one-sided endpoint tangent are symmetric. [step 7.1, step 8.1, L3, L9]

10.1 The argument uses only finite-dimensional coordinate computations, truncated Riemann integrals and one-sided limits: no derivative-limit hypothesis on the open pieces, no Lebesgue integration, no clock identification and no choice principle are used. [step 9.1, step 9.2] ∎

## Remarks

- **The improper integrals need not be closed-piece Riemann integrals.** The derivative is not assumed to extend continuously to the corners, and no bound on $|x'|$ near a corner is assumed; the only estimate used is the coordinate domination $0 \le |z'| \le y^{0'}$, which turns the (possibly unbounded) spatial derivatives into functions dominated by the milder quantity $y^{0'}$, itself controlled by the endpoint increment through the truncated fundamental theorem.

- **Where the causal hypothesis is spent.** The sign of $\eta$ alone never enters the integrability conclusions: $\int y^{0'}$ is a finite increment because $y^{0'}$ is a derivative, and domination by $y^{0'}$ needs only $|z'| \le y^{0'}$, which is the future causal inequality. The strict positivity $y^{0'} > 0$ uses in addition that the tangent is nonzero; the strict timelikeness conclusions of clause (d) are the only place where a future timelike (not merely causal) tangent is used.

- **The statement is chart-relative for the improper integrals and chart-independent for the displacement.** The improper integrals are formed in a fixed inertial chart; the conclusions $D \in \operatorname{cl}(C^{+}) \setminus \{0\}$, strict coordinate-time monotonicity and the timelikeness criterion are statements about the intrinsic displacement $D$ and the intrinsic tangents, since the coordinate criterion of [L3] describes the same cone in every inertial chart.
