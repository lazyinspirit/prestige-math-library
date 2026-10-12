---
id: thm-gr-convex-normal-neighborhoods
kind: theorem
title: "Existence of strictly convex normal neighborhoods: small coordinate balls are normal neighborhoods of each of their points"
status: draft
origin: session
domain: mathematics
dependency_level: 11
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [lem-gr-joint-exponential-diffeomorphism, lem-gr-coordinate-ball-geodesic-convexity, lem-gr-contained-geodesic-velocity-bound, def-gr-normal-neighborhoods-and-position-vectors, thm-gr-point-normal-and-exponential-coordinate-charts, thm-gr-local-geodesics-and-exponential-map, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, def-christoffel-symbols-of-an-affine-connection, prop-coordinate-geodesic-equation, thm-smooth-inverse-function-theorem-on-manifolds, def-differential-of-a-smooth-map, thm-smooth-dependence-of-ode-solutions-on-parameters, def-interval, def-c-r-and-smooth-maps-between-smooth-manifolds, thm-chain-rule-for-total-derivatives]
dependency_roles:
  lem-gr-joint-exponential-diffeomorphism: mathematical-premise
  lem-gr-coordinate-ball-geodesic-convexity: mathematical-premise
  lem-gr-contained-geodesic-velocity-bound: mathematical-premise
  def-gr-normal-neighborhoods-and-position-vectors: mathematical-premise
  thm-gr-point-normal-and-exponential-coordinate-charts: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  prop-coordinate-geodesic-equation: mathematical-premise
  thm-smooth-inverse-function-theorem-on-manifolds: mathematical-premise
  def-differential-of-a-smooth-map: mathematical-premise
  thm-smooth-dependence-of-ode-solutions-on-parameters: mathematical-premise
  def-interval: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: Theorem 2.4 (strictly convex normal neighborhoods and the joint exponential diffeomorphism; coordinate balls can be chosen) printed p. 26, and Definition 2.3 printed p. 26"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): normal coordinates and convexity, Sections 2.2-2.3 with Proposition 2.2.6 and Definition 2.2.7 (printed pp. 10-13)"
      url: "https://arxiv.org/pdf/1110.6706"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$
([[def-gr-smooth-lorentzian-objects]],
[[def-gr-metric-selected-connection]]) and geodesics as in
[[thm-gr-local-geodesics-and-exponential-map]]. Let $p\in M$ and let
$O\subseteq M$ be an open neighborhood of $p$. Then there are a chart
$(U,x)$ around $p$ with $x(p)=0$ and a radius $r>0$ such that
$C:=x^{-1}(B_r)$, $B_r=\{y\in\mathbb R^4:|y|_{\mathrm e}<r\}$ based at
$0=x(p)$, is contained in $O$ and has the following properties.

**(a) Normal neighborhood of each point.** For every $q\in C$ define
$$W_q:=\bigl\{u\in\mathcal E_q:\ \exp_q(tu)\in C\ \text{for every }t\in[0,1]\bigr\},$$
where $\mathcal E_q$ is the exponential domain of
[[thm-gr-local-geodesics-and-exponential-map]] clause (d). Then $W_q$ is an
open star-shaped neighborhood of $0$ in $T_qM$, and
$\exp_q|_{W_q}:W_q\to C$ is a diffeomorphism onto $C$.

**(b) Unique contained joining segment.** For all $q,q'\in C$ there is
exactly one geodesic segment joining $q$ to $q'$ whose image is contained in
$C$, namely
$$x_{q,q'}:[0,1]\to C,\qquad x_{q,q'}(t)=\exp_q\bigl(t\,v(q,q')\bigr),$$
where $v(q,q')$ is the two-point inverse velocity of
[[lem-gr-joint-exponential-diffeomorphism]] clause (c). For $q\ne q'$ the
points $x_{q,q'}(t)$, $0<t<1$, lie in $C$ strictly inside the coordinate
ball, i.e. $|x(x_{q,q'}(t))|_{\mathrm e}<r$; and $x_{q',q}$ is the time
reverse of $x_{q,q'}$ up to affine reparametrization.

**(c) Strict convexity.** In the terminology of
[[def-gr-normal-neighborhoods-and-position-vectors]] clause (b), $C$ is a
strictly convex normal neighborhood; in particular the position vector
$P(q,q')=d(\exp_q)_{v(q,q')}\bigl(v(q,q')\bigr)$ and the squared
displacement $D^2(q,q')=g_q\bigl(v(q,q'),v(q,q')\bigr)$ are defined for all
$q,q'\in C$.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$ with metric-selected connection $\nabla$, a point $p\in M$ and an open neighborhood $O\ni p$.

[L1] Point-normal charts exist: there is a chart $(U_0,x)$ around $p$ with $x(p)=0$ and $\Gamma^a{}_{bc}(p)=0$; the Christoffel symbols are the smooth chart functions of [[def-christoffel-symbols-of-an-affine-connection]] ([[thm-gr-point-normal-and-exponential-coordinate-charts]] clause (a)).

[L2] By [[lem-gr-joint-exponential-diffeomorphism]] there are a chart
$(U,x)$ around $p$ with $x(p)=0$, radii $r_0,\rho>0$, a constant
$\Lambda\ge0$ and $s_0\in(0,r_0)$ such that, writing $|v|_x$ for Euclidean
coordinate components,
$$V=\{(q,v):q\in x^{-1}(B_{r_0}),\,|v|_x<\rho\},\qquad x^{-1}(B_{s_0})\times x^{-1}(B_{s_0})\subseteq W=\Phi(V),$$
$\Phi(q,v)=(q,\exp_qv)$ maps $V$ diffeomorphically onto $W$, and for
$q,r\in x^{-1}(B_{s_0})$ the velocity $v(q,r)$ satisfies
$|v(q,r)|_x\le\Lambda|x(q)-x(r)|_{\mathrm e}$ and $v(q,q)=0$. We take this
chart also to satisfy [L1]; this is legitimate because both statements are
valid in every chart sufficiently small around $p$, and we may first fix
the point-normal chart and then apply the joint-exponential construction
inside it.

[L3] Containment and speed bound, with $\|\Gamma\|$ the Euclidean bilinear operator norm of [[lem-gr-coordinate-ball-geodesic-convexity]]: if a geodesic segment $\gamma:[0,1]\to U$ has image in the coordinate ball $x^{-1}(B_{r_1})$ with $\|\Gamma\|_{\overline{B_{r_1}}}\,r_1\le\frac1{100}$ and $r_1\le\frac14$, and if its image is contained in $x^{-1}(B_r)$ for some $r\le r_1$, then $|\dot x(0)|_{\mathrm e}\le 4r$ ([[lem-gr-contained-geodesic-velocity-bound]] clause (b)); and, for $0\le t\le1$ with $4\|\Gamma\|_{\overline{B_{r_1}}}\,|\dot x(0)|_{\mathrm e}t\le1$, $|\dot x(t)|_{\mathrm e}\le\frac43|\dot x(0)|_{\mathrm e}$ ([[lem-gr-contained-geodesic-velocity-bound]] clause (a)).

[L4] Convexity: if a geodesic segment $\gamma:[0,1]\to U$ has image in $x^{-1}(B_{r_1})$ with $\|\Gamma\|_{\overline{B_{r_1}}}\,r_1\le\frac12$ and both endpoints in $x^{-1}(B_{r_2})$, $r_2<r_1$, then its image lies in the closed ball $x^{-1}(\overline{B_{r_2}})$, and along it $f''\ge|\dot x|_{\mathrm e}^2$ for $f=|x|_{\mathrm e}^2$ ([[lem-gr-coordinate-ball-geodesic-convexity]] clauses (a) and (b)). Moreover a convex function attaining its maximum at an interior point of an interval is constant on that interval.

[L5] Smooth dependence of geodesics on initial data and the local diffeomorphism theorem: the evaluation $(t,q,v)\mapsto\gamma_{q,v}(t)$ is smooth on its open domain and $d(\exp_q)_u$ is invertible whenever $(q,u)\in V$ ([[thm-gr-local-geodesics-and-exponential-map]] clause (b), [[lem-gr-joint-exponential-diffeomorphism]] clause (c), [[thm-smooth-inverse-function-theorem-on-manifolds]]).

[L6] If $C$ is an open set and $\exp_q:W_q\to C$ is injective with invertible differential at every point, then it is a diffeomorphism onto $C$ ([[thm-smooth-inverse-function-theorem-on-manifolds]]: a bijective smooth map whose differential is everywhere invertible is a diffeomorphism onto its image, the inverse being smooth because it is a local inverse of a local diffeomorphism and bijectivity makes the local inverses patch).

## Proof

**Proof technique:** direct.

1.1 (Setup and choice of $r$.) Fix the point-normal chart $(U,x)$ of [L1] and shrink it to satisfy [L2] with constants $r_0,\rho,\Lambda,s_0$. Since $\Gamma(p)=0$ by [L1] and the Christoffel symbols are continuous on the coordinate domain [L1], we may choose $r_1>0$ with $r_1\le r_0$ and $$\|\Gamma\|_{\overline{B_{r_1}}}\,r_1\le\tfrac1{100},\qquad r_1\le\tfrac14,\qquad x^{-1}(B_{r_1})\subseteq O .$$ Choose $r>0$ with $$r\le\min\Bigl\{\frac{r_1}{8\Lambda''},\ \frac{s_0}2,\ \frac{\rho}{32\Lambda'},\ \frac{1}{100\,\max(\Gamma_0\Lambda',1)},\ \frac14\Bigr\},$$ where $\Lambda':=\max(\Lambda,1)$, $\Lambda'':=\max(\tfrac83\Lambda,1)$ and $\Gamma_0:=\|\Gamma\|_{\overline{B_{r_1}}}$. Then $C=x^{-1}(B_r)\subseteq O\cap x^{-1}(B_{s_0})$. [L1, L2, construct]

2.1 (The two-point geodesic stays in $C$.) Let $q,q'\in C$ and let $\Gamma_0:=\|\Gamma\|_{\overline{B_{r_1}}}$. Put $u:=v(q,q')\in T_qM$, so $|u|_x\le\Lambda|x(q)-x(q')|_{\mathrm e}\le 2\Lambda r\le \frac{\rho}{16}<\rho$ and $(q,u)\in V$; let $\gamma:[0,1]\to M$, $\gamma(t)=\exp_q(tu)$, be the corresponding geodesic. Since $|u|_x\le 2\Lambda r$ and $r\le\frac1{100\max(\Gamma_0\Lambda',1)}$, we have $4\Gamma_0|u|_x\le 8\Gamma_0\Lambda r\le\frac8{100}<1$, so $\delta=1$ satisfies $4\Gamma_0|u|_x\delta\le1$; [L3] then gives, as long as the image stays in $x^{-1}(B_{r_1})$, $$\bigl|\dot x(t)\bigr|_{\mathrm e}\le\tfrac43|u|_x\le\tfrac83\Lambda r,\qquad \bigl|x(\gamma(t))-x(q)\bigr|_{\mathrm e}\le\tfrac83\Lambda r .$$ By $x(q)\in B_r$ and $\frac83\Lambda r\le r_1/8<r_1-r$ (which holds because $r\le r_1/(8\Lambda'')$), an exit from $x^{-1}(B_{r_1})$ at the first parameter $T$ would force a displacement of norm at least $r_1-r$ while the bound gives at most $\frac83\Lambda r<r_1-r$, a contradiction; hence the whole image lies in $x^{-1}(B_{r_1})$. [L3, step 1.1, algebra]

3.1 (Containment in $C$ and strict interiority.) The image of $\gamma$ lies in $x^{-1}(B_{r_1})$ by step 2.1, both endpoints $q=\gamma(0)$ and $q'=\gamma(1)$ lie in $B_r$, and $\|\Gamma\|_{\overline{B_{r_1}}}r_1\le\frac1{100}\le\frac12$; [L4] applied with $r_2=r<r_1$ gives $|x(\gamma(t))|_{\mathrm e}\le r$ for all $t\in[0,1]$. If moreover $q\ne q'$ and $|x(\gamma(t_0))|_{\mathrm e}=r$ for some $t_0\in(0,1)$, then the convex function $f(t)=|x(\gamma(t))|_{\mathrm e}^2$ attains its maximum $r^2$ at the interior point $t_0$, hence is constant on $[0,1]$ by [L4]; then $f''\equiv0$ while [L4] also gives $f''\ge|\dot x|_{\mathrm e}^2$, so $\dot x\equiv0$ and $\gamma$ is constant, contradicting $q\ne q'$. Hence $|x(\gamma(t))|_{\mathrm e}<r$ for $0<t<1$. In particular the image of $\gamma$ is contained in $C$; and for $q=q'$ the velocity is $u=v(q,q)=0$ and $\gamma$ is the constant geodesic at $q$. [step 2.1, L4, algebra]

4.1 (Uniqueness of the contained joining segment.) Let $\eta:[0,1]\to C$ be a geodesic segment, in the chart, with $\eta(0)=q$, $\eta(1)=q'$ and image in $C$. By [L3] applied with the ball $C=x^{-1}(B_r)$ (its image lies in $x^{-1}(B_{r_1})$ because $C\subseteq x^{-1}(B_{r_1})$, and $r\le\frac14$), $|\dot x_\eta(0)|_{\mathrm e}\le 4r\le\frac\rho{8\Lambda'}\le\frac\rho8<\rho$; hence $(q,\eta'(0))\in V$ and $\Phi(q,\eta'(0))=(q,q')=\Phi(q,v(q,q'))$. Injectivity of $\Phi|_V$ gives $\eta'(0)=v(q,q')$, and uniqueness of geodesics with given initial data ([[thm-gr-local-geodesics-and-exponential-map]] clause (a)) gives $\eta=t\mapsto\exp_q(tv(q,q'))=\gamma$. Combined with step 3.1 this proves (b) and the uniqueness assertion. [step 3.1, L2, L3, given]

4.2 (The domains $W_q$.) Fix $q\in C$ and let $W_q$ be as in (a). It is star-shaped by construction: if $u\in W_q$ and $\lambda\in[0,1]$, the segment $t\mapsto\exp_q(t\lambda u)$, $t\in[0,1]$, is the initial arc of $t\mapsto\exp_q(tu)$ by the scaling rule of [[thm-gr-local-geodesics-and-exponential-map]] clause (c), hence lies in $C$ and $\lambda u\in W_q$. It is open: if $u\in W_q$, the geodesic $\gamma_{q,u}$ is defined on $[0,1]$ with image in the open set $C$; choosing $\varepsilon>0$ with $\gamma_{q,u}([0,1+\varepsilon])\subset C$ (possible by [L5] since $\gamma_{q,u}(1)\in C$ is an interior point and the geodesic extends) and using smooth dependence on initial data [L5], all $u'$ sufficiently close to $u$ have $\gamma_{q,u'}([0,1+\varepsilon])\subset C$, so $u'\in W_q$. And $\exp_q(W_q)=C$: the inclusion $\subseteq$ is by definition of $W_q$; for $q'\in C$ the velocity $v(q,q')$ lies in $W_q$ by step 3.1 and $\exp_q(v(q,q'))=q'$. [L2, L5, step 3.1, construct]

5.1 ($\exp_q:W_q\to C$ is a diffeomorphism.) It is smooth because $\exp_q$ is smooth on its domain [L5]; it is surjective by step 4.2; it is injective: if $\exp_q(u)=\exp_q(u')=q'$ with $u,u'\in W_q$, then the segments of $u$ and $u'$ lie in $C$, so [L3] gives $|u|_x,|u'|_x\le4r<\rho$; hence $(q,u),(q,u')\in V$ and $\Phi(q,u)=(q,q')=\Phi(q,u')$ forces $u=u'$. Finally, for $u\in W_q$ we have $|u|_x\le4r<\rho$ and $q\in x^{-1}(B_r)\subseteq x^{-1}(B_{s_0})$, so $(q,u)\in V$ and $d(\exp_q)_u$ is invertible by [L5]. A bijective local diffeomorphism onto $C$ is a diffeomorphism by [L6]. This proves (a). [step 4.2, L2, L3, L5, L6]

6.1 (Conclusion.) Steps 2.1, 3.1 and 4.1 establish (b); steps 4.2 and 5.1 establish (a); together with the definitions of [[def-gr-normal-neighborhoods-and-position-vectors]] this gives (c). This completes the proof. [step 3.1, step 4.1, step 5.1, given] ∎

## Remarks

- **Smallness is essential.** The theorem asserts the existence of some small ball; it does not claim that every coordinate ball is convex, and it does not produce an explicit radius. The proof shows that the radius may be chosen once the chart, the velocity radius $\rho$ and the Lipschitz constant $\Lambda$ of the two-point inverse are fixed.

- **The closure form.** The standard terminology "strictly convex normal" allows pairs of the closure; the proof above shows the stronger interior statement for the open ball: the joining segment meets the boundary sphere only if it is constant. This is the form used in [[lem-gr-contained-geodesic-velocity-bound]] and in the local causality statements of [[thm-gr-normal-neighborhood-causal-cone]].

- **No completeness.** The construction is local; the domains $W_q$ may be much smaller than $\mathcal E_q$, and no global geodesic convexity or injectivity radius statement is made.
