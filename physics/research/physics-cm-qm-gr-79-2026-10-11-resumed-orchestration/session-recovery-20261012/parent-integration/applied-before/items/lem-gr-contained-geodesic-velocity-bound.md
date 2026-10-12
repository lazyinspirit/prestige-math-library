---
id: lem-gr-contained-geodesic-velocity-bound
kind: lemma
title: "Speed bounds along geodesics in a chart, and small initial velocity of every geodesic segment contained in a small ball"
status: draft
origin: session
domain: mathematics
dependency_level: 9
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [prop-coordinate-geodesic-equation, def-christoffel-symbols-of-an-affine-connection, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, thm-gr-local-geodesics-and-exponential-map, cor-bounded-derivative-implies-lipschitz, thm-ftc-second-part, thm-algebra-of-derivatives, def-derivative, def-interval, lem-gr-coordinate-ball-geodesic-convexity]
dependency_roles:
  lem-gr-coordinate-ball-geodesic-convexity: mathematical-premise
  prop-coordinate-geodesic-equation: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  cor-bounded-derivative-implies-lipschitz: mathematical-premise
  thm-ftc-second-part: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-derivative: mathematical-premise
  def-interval: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: strictly convex normal neighborhoods and the containment of small-velocity geodesics, section 2.2 printed pp. 26-27 and the convexity argument of Theorem 2.4"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): Proposition 2.2.6 with proof (printed pp. 12-13), the second-derivative estimate along geodesics in normal coordinates"
      url: "https://arxiv.org/pdf/1110.6706"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$
([[def-gr-smooth-lorentzian-objects]],
[[def-gr-metric-selected-connection]]) and geodesics as in
[[thm-gr-local-geodesics-and-exponential-map]]. Let $(U,x)$ be a chart,
$B_s=\{y\in\mathbb R^4:|y|_{\mathrm e}<s\}$ and let $K\subseteq U$ be compact
with $\|\Gamma\|_K<\infty$ as in
[[lem-gr-coordinate-ball-geodesic-convexity]]. Let $\gamma:[0,1]\to U$ be a
geodesic, write $s\mapsto w(s):=|\dot x(s)|_{\mathrm e}$ for the Euclidean
norm of its coordinate velocity, and let
$$v_0:=w(0).$$

**(a) Two-sided speed bounds.** If $0\le\delta\le1$, $4\|\Gamma\|_K v_0\delta\le1$, and the restriction of $\gamma$ to $[0,\delta]$ has image in $K$, then, for $t\in[0,\delta]$,
$$w(t)\le\frac43 v_0,\qquad\bigl|\dot x(t)-\dot x(0)\bigr|_{\mathrm e}\le\frac49 v_0 .$$
Consequently, when $v_0>0$, the Euclidean coordinate displacement has component at least $\frac59 v_0\delta$ along the unit vector $\dot x(0)/v_0$. When $v_0=0$, the geodesic is constant and the displacement is zero, so no unit initial direction is selected.

**(b) Contained segments have small velocity.** Let $c_0:=\frac1{100}$.
Fix $r>0$ with $r\le\frac14$ and $\|\Gamma\|_K\,r\le c_0$. If the image of
the geodesic $\gamma:[0,1]\to U$ is contained in $K\cap x^{-1}(B_r)$, then
$$|\dot x(0)|_{\mathrm e}\le 4r .$$

## Facts & Assumptions

**Given:** A chart $(U,x)$, a compact $K\subseteq U$, a geodesic $\gamma:[0,1]\to U$ whose image on the relevant subintervals lies in $K$, and $v_0=|\dot x(0)|_{\mathrm e}$.

[L1] The coordinate velocity satisfies $\dot w^2=2\,\dot x\cdot\ddot x =-2\,\dot x\cdot\Gamma(x)[\dot x,\dot x]\le 2\|\Gamma\|_K w^3$ at parameters where the image lies in $K$; hence $w'\le \|\Gamma\|_K w^2$ ([[prop-coordinate-geodesic-equation]], [[def-christoffel-symbols-of-an-affine-connection]], [[thm-algebra-of-derivatives]]).

[L2] If $\,1/w$ has derivative at least $-C$ at every differentiability point of an interval, then $1/w(t)\ge 1/w(0)-Ct$ there ([[cor-bounded-derivative-implies-lipschitz]]).

[L3] For $t$ in a parameter interval on which the image lies in $K$, $\bigl|\dot x(t)-\dot x(0)\bigr|_{\mathrm e} =\bigl|\int_0^t\ddot x(s)\,ds\bigr|_{\mathrm e} \le\int_0^t\|\Gamma\|_K\,w(s)^2ds$ by the geodesic equation and the fundamental theorem of calculus for continuous integrands ([[prop-coordinate-geodesic-equation]], [[thm-ftc-second-part]] for the componentwise statement).

[L4] If two points of a curve lie in the open coordinate ball $x^{-1}(B_r)$, then the Euclidean norm of their coordinate displacement is at most $2r$, by the triangle inequality in $\mathbb R^4$ ([[thm-algebra-of-derivatives]] for the Euclidean norm; the statement is elementary).

## Proof

**Proof technique:** direct.

1.1 (Speed decay.) Assume $v_0>0$ and let $t$ range over a maximal interval $[0,T]$ on which the image lies in $K$ and $w>0$. By [L1], $w'\le\|\Gamma\|_K w^2$ and hence $(1/w)'=-w'/w^2\ge-\|\Gamma\|_K$ there; by [L2], $1/w(t)\ge 1/v_0-\|\Gamma\|_Kt$ and therefore $w(t)\le v_0/(1-\|\Gamma\|_Kv_0t)\le\frac43v_0$ for $4\|\Gamma\|_Kv_0t\le1$. If $v_0=0$, the constant curve has the same initial data as $\gamma$, so uniqueness of the geodesic initial-value problem gives $w\equiv0$. If $\|\Gamma\|_K=0$, the geodesic equation gives $\ddot x=0$ on the subinterval in $K$, so $w=v_0$ and the velocity change is zero. These cases use no reciprocal of $\|\Gamma\|_Kv_0$. [L1, L2, given, algebra]

2.1 (Velocity-change bound.) On $[0,\delta]$ with $0\le\delta\le1$ and $4\|\Gamma\|_Kv_0\delta\le1$, steps 1.1 and [L3] give $\bigl|\dot x(t)-\dot x(0)\bigr|_{\mathrm e} \le\int_0^t\|\Gamma\|_K(4v_0/3)^2ds \le\|\Gamma\|_K v_0^2\,t\,\frac{16}9 \le\frac{4}{9}v_0$ for $4\|\Gamma\|_Kv_0t\le1$. [step 1.1, L3, algebra]

2.2 (Displacement along the initial direction.) Assume $v_0>0$, write $u_0:=\dot x(0)$ and $e:=u_0/v_0$, and put $\varphi(t):=e\cdot x(t)$. Then $\varphi'(0)=v_0$ and, by step 1.1, $\varphi''(t)=e\cdot\ddot x(t)\ge-\|\Gamma\|_K w(t)^2 \ge-\frac{16}9\|\Gamma\|_Kv_0^2$ for $t\le\delta$. Integrating twice on $[0,\delta]$ with $0\le\delta\le1$ and $4\|\Gamma\|_Kv_0\delta\le1$, $$\varphi(\delta)-\varphi(0)\ \ge\ v_0\delta-\frac{8}9\|\Gamma\|_Kv_0^2\delta^2\ =\ v_0\delta\Bigl(1-\frac89\|\Gamma\|_Kv_0\delta\Bigr)\ \ge\ \frac79\,v_0\delta .$$ If $v_0=0$ the displacement bound is trivial. [step 1.1, L3, algebra]

3.1 (Contained segments have small velocity.) Let $r>0$ satisfy $\|\Gamma\|_Kr\le\frac1{100}$ and $r\le\frac14$, let $\gamma:[0,1]\to U$ have image in $x^{-1}(B_r)$, and put $v_0=|\dot x(0)|_{\mathrm e}$. Suppose first that $\|\Gamma\|_Kv_0\le\frac14$. Then $\delta=1$ is admissible in steps 2.1-2.2, and also admissible trivially if $v_0=0$. Both $\gamma(0)$ and $\gamma(1)$ lie in $B_r$, so by [L4] $\bigl|x(\gamma(1))-x(\gamma(0))\bigr|_{\mathrm e}\le2r$; on the other hand the displacement's component along $u_0$ (the case $v_0=0$ is trivial) is at least $\frac79v_0$ by step 2.2, so $v_0\le\frac{18}7r<4r$. Suppose now that $\|\Gamma\|_Kv_0>\frac14$ and $v_0>0$; then $\delta=(4\|\Gamma\|_Kv_0)^{-1}<1$ is admissible, the points $\gamma(0)$ and $\gamma(\delta)$ both lie in $B_r$, so their displacement has norm at most $2r$, while step 2.2 gives a component along $u_0$ of at least $$\frac79\,v_0\delta=\frac7{36\|\Gamma\|_K}>2r,$$ the strict inequality because $\|\Gamma\|_Kr\le\frac1{100}<\frac7{72}$. This contradiction excludes the second case, so always $v_0<4r$. This proves (b). [step 2.1, step 2.2, L4, algebra]

4.1 Combining steps 1.1, 2.1, 2.2 and 3.1 proves (a) and (b) respectively. [step 1.1, step 2.1, step 2.2, step 3.1] ∎

## Remarks

- **The constants are not optimal.** The proof only needs that contained segments have velocity bounded by a quantity tending to zero with $r$; the threshold $4r$ and the constant $c_0=\frac1{100}$ are fixed so that [[thm-gr-convex-normal-neighborhoods]] can choose $r$ smaller than any prescribed velocity radius of the joint exponential diffeomorphism.

- **Uniqueness of contained geodesics.** Combined with [[lem-gr-joint-exponential-diffeomorphism]], step 3.1 says: two geodesic segments contained in a sufficiently small coordinate ball and joining the same pair of points carry initial velocities of size at most $4r$, hence lie in the joint inverse domain when $4r$ is smaller than its velocity radius, and therefore coincide.
