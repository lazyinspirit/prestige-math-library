---
id: def-gr-normal-neighborhoods-and-position-vectors
kind: definition
title: "Normal neighborhoods, convex normal sets, the position vector and the squared-displacement function"
status: published
origin: session
domain: mathematics
dependency_level: 11
provenance:
  statement: ai-altered
  proof: not-applicable
proof_strategy: null
deps: [thm-gr-local-geodesics-and-exponential-map, lem-gr-joint-exponential-diffeomorphism, thm-gr-point-normal-and-exponential-coordinate-charts, thm-gr-lorentz-gauss-lemma-and-normal-maximum, def-gr-smooth-lorentzian-objects, def-gr-metric-selected-connection, def-c-r-and-smooth-maps-between-smooth-manifolds, def-embedded-submanifold-and-slice-chart]
dependency_roles:
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  lem-gr-joint-exponential-diffeomorphism: mathematical-premise
  thm-gr-point-normal-and-exponential-coordinate-charts: mathematical-premise
  thm-gr-lorentz-gauss-lemma-and-normal-maximum: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-embedded-submanifold-and-slice-chart: mathematical-premise
justified_by: [thm-gr-convex-normal-neighborhoods]
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: normal neighborhoods (Definition 2.2 printed p. 26), convex normal and strictly convex normal sets (Definition 2.3 printed p. 26), position vector (Definition 2.5 printed p. 27) and the function D^2 (equation (2.5) printed p. 27)"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): normal neighbourhoods and exponential coordinates, sections 2.2-2.3"
      url: "https://arxiv.org/pdf/1110.6706"
verification:
  precheck: pass
---

## Definition

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$
([[def-gr-smooth-lorentzian-objects]],
[[def-gr-metric-selected-connection]]), and let $\exp_q:\mathcal E_q\to M$
be the exponential maps of
[[thm-gr-local-geodesics-and-exponential-map]]. For an open set
$U\subseteq M$ write $T U\subseteq TM$ for the tangent vectors based at
points of $U$.

**(a) Normal neighborhood.** An open neighborhood $U$ of $p\in M$ is a
**normal neighborhood of $p$** when there is an open star-shaped subset
$W\subseteq\mathcal E_p$ of $T_pM$ such that $U=\exp_p(W)$ and
$\exp_p|_W:W\to U$ is a diffeomorphism onto $U$
([[thm-gr-point-normal-and-exponential-coordinate-charts]] clause (b)
supplies such pairs). The **exponential coordinates at $p$** on such a $U$
are $u:=\psi\circ\exp_p^{-1}:U\to\mathbb R^4$ for a linear isomorphism
$\psi:T_pM\to\mathbb R^4$.

**(b) Convex normal and strictly convex normal sets.** An open set
$C\subseteq M$ is **convex normal** when it is a normal neighborhood of each
of its points; thus for every $q\in C$ there is an open star-shaped
$C_q\subseteq\mathcal E_q$ with $\exp_q(C_q)=C$ and
$\exp_q|_{C_q}$ a diffeomorphism onto $C$. It is **strictly convex normal**
when it is convex normal and every pair $q,q'\in\overline C$ is joined by exactly one affinely
parametrized geodesic segment $\gamma:[0,1]\to\overline C$ with
$\gamma(0)=q$ and $\gamma(1)=q'$, and, if $q\ne q'$, its parameter interior
$\gamma((0,1))$ lies in $C$. In the degenerate case $q=q'$, the required
segment is the constant geodesic at $q$; no interior-containment condition
is imposed on this degenerate segment when $q\in\partial C$.

**(c) Position vector.** Fix a normal neighborhood $U=\exp_p(W)$ of $p$
as in (a), with its chosen inverse $(\exp_p|_W)^{-1}$, and let $q\in U$.
Put $v:=(\exp_p|_W)^{-1}(q)\in T_pM$. Since $W$ is star-shaped,
$tv\in W$ for $0\le t\le1$, and
$x(t):=\exp_p(tv)$ is the radial geodesic segment in $U$ from $p$ to $q$.
The vector
$$P(p,q):=\gamma_{p,v}'(1)=d(\exp_p)_{v}(v)\in T_qM$$
is the **position vector of $q$ with respect to $p$**; here
$\gamma_{p,v}$ is the maximal geodesic of
[[thm-gr-local-geodesics-and-exponential-map]]. The notation $P(p,q)$
uses this chosen inverse branch; another normal neighborhood may select a
different radial segment for the same endpoints. On a convex normal set
$C$, use the inverse domains $C_p$ of (b) and the joining segment in $C$;
on a strictly convex normal set this segment is unique by (b).
By the Gauss lemma of
[[thm-gr-lorentz-gauss-lemma-and-normal-maximum]]
$g_q(P(p,q),P(p,q))=g_p(\exp_p^{-1}(q),\exp_p^{-1}(q))$.

**(d) Squared-displacement function.** For a normal neighborhood $U$ of
$p$ the **squared-displacement function** is
$$D_p^2:U\to\mathbb R,\qquad D_p^2(q):=g_p\bigl(\exp_p^{-1}(q),\exp_p^{-1}(q)\bigr).$$
It is smooth on $U$ because $\exp_p^{-1}$ is smooth and $g_p$ is bilinear;
$D_p^2(p)=0$, $D_p^2(q)<0$ exactly when $P(p,q)$ is timelike,
$D_p^2(q)=0$ exactly when $P(p,q)$ is null or zero, and $D_p^2(q)>0$
exactly when $P(p,q)$ is spacelike. On a convex normal $C$ we write
$D^2:C\times C\to\mathbb R$, $D^2(p,q):=D_p^2(q)$, whenever the position
vector is defined using these inverse domains.

**(e) Scope.** These are definitions inside the smooth Lorentzian model;
they assert no existence of convex normal sets (supplied separately by
[[thm-gr-convex-normal-neighborhoods]]), no completeness and no physical
reading. The position vector is an element of $T_qM$, not a vector field and
not a coordinate displacement; $D^2$ is not a metric distance and takes
negative values on timelike-separated pairs.

## Remarks

- **Well-definedness.** The conditions in (a) and (b) are consistent by
  [[thm-gr-local-geodesics-and-exponential-map]] clause (d) and
  [[thm-gr-point-normal-and-exponential-coordinate-charts]] clause (b),
  which provide the local diffeomorphism domains used above; the existence
  of convex normal neighborhoods, asserted in the wording of (c), is proved
  in [[thm-gr-convex-normal-neighborhoods]]. The definition records the
  vocabulary only and proves nothing by itself.

- **The pair map.** By [[lem-gr-joint-exponential-diffeomorphism]] the map
  $(p,q)\mapsto \exp_p^{-1}(q)$ is smooth near the diagonal where it is
  defined; the position vector $P(p,q)=d(\exp_p)_{v}(v)$ with
  $v=\exp_p^{-1}(q)$ is thereby a smooth function of $(p,q)$ near such
  configurations, a fact used in [[lem-gr-position-vector-differential]].
