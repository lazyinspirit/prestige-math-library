---
id: lem-sr-endpoint-displacement-of-a-future-timelike-worldline
kind: lemma
title: "The displacement of a future timelike worldline is future timelike"
status: published
origin: pipeline
domain: mathematics
proof_strategy: direct
deps: [def-sr-regular-causal-curve-and-worldline, def-sr-affine-minkowski-model, def-inertial-frame-and-inertial-chart, lem-timelike-cone-has-two-convex-components, def-spatial-euclidean-structure-of-an-inertial-frame, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, thm-norm-inequality-for-the-vector-valued-integral, thm-monotonicity-of-the-integral, thm-nonnegative-continuous-with-zero-integral-vanishes, cor-triangle-inequality-for-inner-product-norm, def-vector-valued-derivative-and-integral, def-oriented-integral, def-interval, lem-sr-weak-piecewise-causal-integrability, def-lorentz-form-and-inertia, def-ordered-field, thm-linearity-of-the-integral]
dependency_roles:
  thm-linearity-of-the-integral: mathematical-premise
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-sr-affine-minkowski-model: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  def-spatial-euclidean-structure-of-an-inertial-frame: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  thm-norm-inequality-for-the-vector-valued-integral: mathematical-premise
  thm-monotonicity-of-the-integral: mathematical-premise
  thm-nonnegative-continuous-with-zero-integral-vanishes: mathematical-premise
  cor-triangle-inequality-for-inner-product-norm: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-oriented-integral: mathematical-premise
  def-interval: mathematical-premise
  lem-sr-weak-piecewise-causal-integrability: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-ordered-field: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook): section 1.3.3 'The gamma factor' pp. 25-27 and sections 3.5-3.7 pp. 60-68; signature (+---) converted to (-+++) and c = 1 formulas converted to x^0 = c t"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 3 pp. 68-73 (proper-time functional, geodesic variation, the maximality remark and its 'locally' caveat, the twin remark)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022), sections 2.2-2.3 pp. 27-30 (timelike and causal curves; curves of extremal proper time); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
dependency_level: 9
aliases: []
---

## Statement

Let $c>0$ and let $x:[a,b]\to A$ be a future timelike worldline with $a<b$
([[def-interval]]) that is piecewise $C^1$ with partition
$a=s_0<s_1<\dots<s_m=b$ in the weak sense of
[[def-sr-regular-causal-curve-and-worldline]], with future timelike interior
tangents and finite one-sided difference-quotient tangents. Put $p:=x(a)$,
$q:=x(b)$ and $d:=q-p$. Then $d$ is future timelike. More precisely, writing
$\xi^a:=x_A^a\circ x$ for the coordinate path of the chart $x_A$ of any inertial
frame, one has
$$\xi^0(b)-\xi^0(a)>0\qquad\text{and}\qquad|\xi_{\mathrm{vec}}(b)-\xi_{\mathrm{vec}}(a)|<\xi^0(b)-\xi^0(a),$$
where $|\cdot|$ is the Euclidean spatial norm of
[[def-spatial-euclidean-structure-of-an-inertial-frame]]. Consequently $p\ne q$,
the number $\sqrt{-\eta(d,d)}$ is a positive real number, and in every inertial
chart the time component of $d$ is positive and dominates the Euclidean norm of
its spatial part, which is exactly the coordinate description of future
timelikeness in that chart. Completeness of the real numbers is inherited
from the improper-integrability supplier; no compactness assumption beyond
the given compact interval or choice principle is used.

## Facts & Assumptions

**Given:** A real $c>0$; an inertial frame with chart $x_A$ and coordinate path $y:=\xi=(y^0,z)$ of a piecewise $C^1$ future timelike worldline $x:[a,b]\to A$, $a<b$, with partition $a=s_0<\dots<s_m=b$, future timelike interior tangents and finite one-sided difference-quotient tangents ([[def-interval]], [[def-sr-affine-minkowski-model]]).

[F1] The weak piecewise class ([[def-sr-regular-causal-curve-and-worldline]]): $x$ is $C^1$ on every open piece $(s_{i-1},s_i)$ with future timelike tangent $x'$ there, and the finite one-sided difference-quotient derivatives at both ends of every piece exist; no continuous extension of the open-piece derivative to the closed piece is assumed.

[F2] Improper integrability and endpoint increments ([[lem-sr-weak-piecewise-causal-integrability]]): for the piece $(\alpha,\beta)=(s_{i-1},s_i)$ with the notation $\int_{(\alpha,\beta)}g=\lim_{u\downarrow\alpha}\int_u^rg+\lim_{v\uparrow\beta}\int_r^vg$ of that lemma, one has $y^0{}'\ge|z'|\ge0$ and $y^0{}'>0$ on $(\alpha,\beta)$; every coordinate derivative is absolutely improperly Riemann integrable with signed improper integral its endpoint increment, so $\int_{(\alpha,\beta)}y^{j}{}'=y^j(\beta)-y^j(\alpha)$ in the oriented convention of [[def-oriented-integral]]; the improper values are additive under subdivision; and $D=x(b)-x(a)$ is nonzero future causal, with $D^0>0$ and $|D_{\mathrm{spatial}}|\le D^0$ in every inertial chart.

[F3] Chart metric and cone coordinates ([[def-inertial-frame-and-inertial-chart]], [[lem-timelike-cone-has-two-convex-components]], [[def-spatial-euclidean-structure-of-an-inertial-frame]], [[def-lorentz-form-and-inertia]]): in the chart of an inertial frame (first basis vector future) a vector $v$ with coordinates $(v^0,v_s)$ is future timelike exactly when $v^0>|v_s|$, and $-\eta(v,v)=(v^0)^2-|v_s|^2$; $\eta$ is bilinear.

[L4] Norm inequalities ([[cor-triangle-inequality-for-inner-product-norm]], [[thm-norm-inequality-for-the-vector-valued-integral]], [[def-vector-valued-derivative-and-integral]]): the spatial Euclidean norm satisfies the triangle inequality, finite sums included; and for vector-valued functions on an interval, $\bigl\|\int_c^d f\bigr\|\le\int_c^d\|f\|$ whenever $f$ is Riemann integrable.

[L5] Monotonicity and positivity of the Riemann integral ([[thm-monotonicity-of-the-integral]], [[thm-nonnegative-continuous-with-zero-integral-vanishes]], [[def-oriented-integral]]): if $g_1\le g_2$ pointwise on $[c,d]$ then $\int_c^d g_1\le\int_c^d g_2$; and if a nonnegative continuous real function on $[c,d]$ has positive value at some point, then its integral over $[c,d]$ is positive.

[L6] Order arithmetic of $\mathbb{R}$ ([[def-ordered-field]]): the order is transitive, and a finite sum of positive reals is positive.

[L7] Integral linearity ([[thm-linearity-of-the-integral]]): for integrable real functions on a compact truncation, $\int(f-g)=\int f-\int g$. If the two improper integrals are finite, passing to their one-sided limits proves the same identity for their difference.

## Proof

**Proof technique:** direct.

1.1 Fix the inertial frame and write $y=\xi=x_A\circ x=(y^0,z)$ with $z=(y^1,y^2,y^3)$; the partition has $m\ge1$ pieces, and on each open piece $(s_{i-1},s_i)$ the tangent $x'$ is future timelike, so by [F3] $y^0{}'(u)>|z'(u)|\ge0$ at every $u\in(s_{i-1},s_i)$. [given, F1, F3]

2.1 The hypotheses of [F2] are satisfied: $x$ is $C^1$ on the open pieces, the one-sided difference-quotient derivatives are finite, and the interior tangents are future timelike, hence in particular nonzero future causal; therefore clauses (a)-(d) of [F2] apply to each piece $(\alpha,\beta)=(s_{i-1},s_i)$. [step 1.1, F1, F2]

3.1 Per piece: the difference $g_i:=y^0{}'-|z'|$ is continuous and positive on $(\alpha,\beta)$ by step 1.1, so for any $\alpha<u<v<\beta$ its integral over $[u,v]$ is positive by [L5]; the improper integral $\int_{(\alpha,\beta)}g_i$ dominates that truncated integral, and the additive decomposition of [F2] gives $\int_{(\alpha,\beta)}g_i=\int_{(\alpha,\beta)}y^0{}'-\int_{(\alpha,\beta)}|z'|$, so $\int_{(\alpha,\beta)}|z'|<\int_{(\alpha,\beta)}y^0{}'=y^0(\beta)-y^0(\alpha)$ with the last equality from [F2]; in particular $y^0(\beta)-y^0(\alpha)>0$. [step 2.1, F2, L5, L7]

3.2 Per piece the spatial increment satisfies $|z(\beta)-z(\alpha)|=\bigl\|\int_{(\alpha,\beta)}z'\bigr\|\le\int_{(\alpha,\beta)}|z'|$: for $\alpha<u<v<\beta$ the vector norm inequality of [L4] gives $\bigl\|\int_u^vz'\bigr\|\le\int_u^v|z'|$, and letting $u\downarrow\alpha$, $v\uparrow\beta$ with the endpoint-increment limits of [F2] and continuity of the norm yields the claim. [step 2.1, F2, L4]

4.1 Summing the finitely many pieces, with $\Delta_iz:=z(s_i)-z(s_{i-1})$: $|z(b)-z(a)|\le\sum_{i=1}^m|\Delta_iz|\le\sum_{i=1}^m\int_{(s_{i-1},s_i)}|z'|<\sum_{i=1}^m\int_{(s_{i-1},s_i)}y^0{}'=y^0(b)-y^0(a)$, where the first inequality is the finite triangle inequality [L4], the second is step 3.2, the strict inequality is step 3.1 together with positivity of the finite sum of the positive differences $\int_{(s_{i-1},s_i)}(y^0{}'-|z'|)$ [L6], and the final equality is additivity over the partition from [F2]; in particular $y^0(b)-y^0(a)>0$ and $|z(b)-z(a)|<y^0(b)-y^0(a)$. [step 3.2, F2, L4, L6]

5.1 Consequently, in this chart the displacement $d=q-p$ has coordinates $(y^0(b)-y^0(a),\,z(b)-z(a))$ with positive time component strictly dominating the spatial norm, so $d$ is future timelike by the coordinate criterion [F3]; since the inertial chart was arbitrary, the same conclusion holds in every inertial chart. Hence $p\ne q$ ($d\ne0$ because it is timelike), and by bilinearity [F3] one has $-\eta(d,d)=(y^0(b)-y^0(a))^2-|z(b)-z(a)|^2>0$, so $\sqrt{-\eta(d,d)}$ is a positive real number, and the time component of $d$ dominates in every inertial chart — the coordinate description of future timelikeness. [step 4.1, F3, L4]

6.1 The argument uses only the weak piecewise class on the compact interval $[a,b]$, truncated Riemann integrals and their one-sided limits, and the finite sum over the $m$ pieces: completeness of $\mathbb{R}$ is used by [F2] to obtain finite improper limits from monotone bounded truncation integrals, no compactness assumption beyond the interval $[a,b]$ is made, and no choice principle is used. [step 5.1] ∎
