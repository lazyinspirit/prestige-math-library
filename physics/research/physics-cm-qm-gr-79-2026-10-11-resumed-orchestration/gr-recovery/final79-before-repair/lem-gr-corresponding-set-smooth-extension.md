---
id: lem-gr-corresponding-set-smooth-extension
kind: lemma
title: "The set of boundary points with a corresponding point is open, and the extension preserves the metric, matter fields and connection on the closure side"
status: draft
origin: session
domain: mathematics
dependency_level: 29
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-development-and-data-fixing-isometry, def-gr-common-subdevelopment-and-corresponding-boundary, lem-gr-corresponding-boundary-structure, lem-gr-isometric-immersion-rigidity, thm-gr-convex-normal-neighborhoods, thm-gr-local-geodesics-and-exponential-map, lem-gr-joint-exponential-diffeomorphism, lem-gr-parallel-transport-and-geodesic-speed, def-gr-normal-neighborhoods-and-position-vectors, def-gr-metric-selected-connection, def-gr-causal-curves-and-reachability, def-gr-smooth-lorentzian-objects, def-c-r-and-smooth-maps-between-smooth-manifolds, def-continuity-real]
dependency_roles:
  def-gr-development-and-data-fixing-isometry: mathematical-premise
  def-gr-common-subdevelopment-and-corresponding-boundary: mathematical-premise
  lem-gr-corresponding-boundary-structure: mathematical-premise
  lem-gr-isometric-immersion-rigidity: mathematical-premise
  thm-gr-convex-normal-neighborhoods: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  lem-gr-joint-exponential-diffeomorphism: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  def-gr-normal-neighborhoods-and-position-vectors: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-continuity-real: mathematical-premise
sources:
  references:
    - title: "J. Sbierski, On the Existence of a Maximal Cauchy Development for the Einstein Equations - a Dezornification, arXiv:1309.7591v3 (2015): Lemma 3.8 with full proof (the set C of boundary points with a corresponding point is open in the boundary and psi extends smoothly over U union C), printed pp. 16-17"
      url: "https://arxiv.org/pdf/1309.7591"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: normal neighbourhoods, the position vector and Gauss' lemma, Definition 2.3 and Theorems 2.4-2.6 printed pp. 26-27"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N,j,\psi)$ and $(M',g',N',j',\psi')$ be developments of the same
data and let $(U,\varphi)$ be a common subdevelopment in the sense of
[[def-gr-common-subdevelopment-and-corresponding-boundary]] clause (a). Let
$$C:=\{p\in\partial U:\ p\text{ has a corresponding boundary point in }\partial\varphi(U)\}$$
be the set of boundary points of $U$ that have a corresponding point (clause
(c) of that definition). Then:

**(a)** $C$ is open in $\partial U$: there is an open set $G\subseteq M$ with
$C=G\cap\partial U$.

**(b)** There is an open set $\Omega\subseteq M$ with $U\cup C\subseteq\Omega$
and a smooth map $\Phi:\Omega\to M'$ whose restriction to $U$ is $\varphi$ and
whose value at $p\in C$ is the unique corresponding boundary point of $p$;
moreover, for every $p\in C$ there is an open neighbourhood
$W_p\subseteq\Omega$ of $p$ and a smooth **local diffeomorphism**
$$\widehat\varphi_p:W_p\to M',\qquad \widehat\varphi_p(q)=\exp_{\varphi(a_p)}\bigl(d\varphi_{a_p}(\exp_{a_p}^{-1}q)\bigr)$$
built from a common interior base point $a_p\in I^-(p)\cap U$ and the
exponential maps, such that $\widehat\varphi_p=\varphi$ on $W_p\cap U$ and
$\Phi=\widehat\varphi_p$ on $W_p\cap(U\cup C)$. No isometry property of
$\widehat\varphi_p$ on the part of $W_p$ outside $\overline U$ is claimed.

**(c)** At every point $q\in U\cup C$ the map $\Phi$ preserves the metric, the
matter fields and the metric-selected connection:

1. $g'_{\Phi(q)}(d\Phi_qv,d\Phi_qw)=g_q(v,w)$ for all $v,w\in T_qM$, so
   $\Phi^*(g')=g$ on $U\cup C$;
2. $(\Phi^*\psi'^i)_q=\psi^i_q$ for every listed matter field $i$;
3. for all smooth vector fields $X,Y$ defined on a neighbourhood of $q$ and
   every $q\in U\cup C$,
   $$\nabla'_{d\Phi\,X}d\Phi\,Y=d\Phi\bigl(\nabla_XY\bigr)\quad\text{at }\Phi(q),$$
   equivalently the pullback connection $\Phi^*\nabla'$ equals $\nabla$ at
   $q$, where both sides are read through the invertible differential
   $d\Phi_q$.

**(d)** Every geodesic segment of $(M,g)$ whose image is contained in $U\cup C$
is mapped by $\Phi$ to a geodesic segment of $(M',g')$; a null geodesic
segment is mapped to a null geodesic segment.

**(e)** Let $S\subseteq U\cup C$ be an embedded submanifold of $M$. Then
$\Phi|_S$ is an injective immersion, hence an embedding onto its image, and it
carries the induced metric of $S$, its second fundamental form with respect to
any unit normal field, and the matter fields together with their first
covariant derivatives along $S$ to the corresponding objects of $\Phi(S)$ in
$M'$. In particular $(S,\bar g_S,k_S,\psi|_S)$ and
$(\Phi(S),\bar g_{\Phi(S)},k_{\Phi(S)},\psi'|_{\Phi(S)})$ are identified by
$\Phi|_S$ whenever $S$ is spacelike.

## Facts & Assumptions

**Given:** developments $M,M'$ of the same data, a common subdevelopment $(U,\varphi)$, and the set $C$ of clause (c) of [[def-gr-common-subdevelopment-and-corresponding-boundary]].

[L1] Convex normal neighbourhoods and exponential maps: every point has arbitrarily small convex normal neighbourhoods on which the exponential map is a diffeomorphism from a radial domain, radial geodesics vary smoothly, and $\varphi(\exp_aX)=\exp_{\varphi(a)}(d\varphi_aX)$ for the isometric immersion $\varphi$ ([[thm-gr-convex-normal-neighborhoods]] clauses (a)-(c), [[def-gr-normal-neighborhoods-and-position-vectors]], [[thm-gr-local-geodesics-and-exponential-map]] clauses (a) and (d), [[lem-gr-isometric-immersion-rigidity]] step 1.1).

[L2] Norms of geodesic velocities: $g(\gamma',\gamma')$ is constant along a geodesic, so the radial geodesic of [L1] joining $a$ to a point $q\in I^+(a)$ is timelike ([[lem-gr-parallel-transport-and-geodesic-speed]], [[def-gr-causal-curves-and-reachability]]).

[L3] Corresponding-point structure: the future boundary $\partial U\cap I^+(\Sigma)$ is achronal; corresponding future points satisfy $\varphi(I^-(p)\cap U)=I'^-(p')\cap\varphi(U)$; a point of $\partial U$ has at most one corresponding point; every future timelike curve in $U$ converging to $p$ is mapped by $\varphi$ to a curve converging to $p'$ ([[lem-gr-corresponding-boundary-structure]] clauses (a)-(c)).

[L5] Development data: $\varphi$ is a development embedding, hence a smooth isometric immersion onto the open set $\varphi(U)$ preserving the time orientation and the matter fields: $\varphi^*(g')=g$ and $\varphi^*(\psi'^i)=\psi^i$ on $U$, so $\varphi:U\to\varphi(U)$ is a diffeomorphism ([[def-gr-development-and-data-fixing-isometry]] clauses (b)-(c)). Since $U$ is open, $W_p\cap U$ is a nonempty open subset of the open set $W_p$ that accumulates at every point of $W_p\cap\partial U$; hence an identity between two smooth tensor fields on $W_p$ valid on $W_p\cap U$ extends by continuity to the closure points in $W_p\cap\partial U$ ([[def-c-r-and-smooth-maps-between-smooth-manifolds]], [[def-continuity-real]]).

[L6] Local isometries preserve the connection: for a smooth map $\psi:N\to N'$ with $\psi^*(g')=g$ on an open set the Koszul expressions coincide, so the pullback connection $\psi^*\nabla'$ equals the metric-selected connection $\nabla$ there; equivalently $\psi$ maps geodesics to geodesics with velocity $d\psi(\gamma')$ ([[def-gr-metric-selected-connection]], [[lem-gr-isometric-immersion-rigidity]] step 1.1, [L1]).

No choice principle is used in this item.

## Proof

**Proof technique:** direct.

1.1 (Local construction at a corresponding pair.) Let $p\in C$ with corresponding point $p'$, both to the future of the initial surface (the past case is the time reverse), and choose a future timelike geodesic $\gamma:[-\varepsilon,0)\to U$ with $\gamma(s)\to p$ as $s\nearrow0$ (any future timelike curve in $U$ converging to $p$ qualifies; such curves exist because every neighbourhood of $p$ meets the open set $U$). By [L3] the curve $\varphi\circ\gamma$ converges to $p'$ and is a timelike geodesic of $M'$ [L1]. Choose convex normal neighbourhoods $V\ni p$ and $V'\ni p'$ [L1] and shrink $\varepsilon$ so that $\gamma([-\varepsilon,0))\subseteq V$ and $\varphi(\gamma([-\varepsilon,0)))\subseteq V'$; write $a:=\gamma(-\varepsilon)$. For every chosen neighbourhood there is a smaller open neighbourhood $W\ni p$, $W\subseteq V$, with $W\subseteq I^+(a)$ and $d\varphi_a\bigl(\exp_a^{-1}(W)\bigr)\subseteq\exp_{\varphi(a)}^{-1}(V')$ (shrink $W$ using continuity of the inverse exponential map [L1]). Define $\widehat\varphi:W\to M'$ by $\widehat\varphi(q):=\exp_{\varphi(a)}\bigl(d\varphi_a(\exp_a^{-1}q)\bigr)$. By [L1] $\widehat\varphi$ is a smooth local diffeomorphism onto its image. [given, L1, L2, L3, choose, construct]

2.1 (Agreement with $\varphi$ on the interior part.) For $q=\exp_aX\in W\cap U$ one has $\widehat\varphi(q)=\exp_{\varphi(a)}(d\varphi_aX)=\varphi(\exp_aX)=\varphi(q)$ by commutation of the exponential map with isometries [L1, L5]. [step 1.1, L1, L5, algebra]

3.1 ($W\cap\partial U\subseteq C$.) Let $q\in W\cap\partial U$. Since $q\in\partial U$ and $W$ is a neighbourhood of $q$, every neighbourhood of $q$ contains points of $W\cap U$; choose a sequence $q_n\in W\cap U$ with $q_n\to q$. By step 2.1, $\varphi(q_n)=\widehat\varphi(q_n)\to\widehat\varphi(q)$ by continuity of $\widehat\varphi$ at $q$; in particular $\widehat\varphi(q)$ is a limit of points of the open set $\varphi(U)$. Moreover $\widehat\varphi(q)\notin\varphi(U)$: if $\widehat\varphi(q)=\varphi(u)$ with $u\in U$, then $\varphi(q_n)\to\varphi(u)$ and continuity of the inverse diffeomorphism $\varphi^{-1}:\varphi(U)\to U$ [L5] gives $q_n=\varphi^{-1}(\varphi(q_n))\to u$, hence $u=q\in U$, contradicting $q\in\partial U$. Therefore $\widehat\varphi(q)\in\overline{\varphi(U)}\setminus\varphi(U)=\partial\varphi(U)$. Finally, for open neighbourhoods $V_0\ni q$ and $V_0'\ni\widehat\varphi(q)$ choose $n$ so large that $q_n\in V_0$ (possible since $q_n\to q$) and $\widehat\varphi(q_n)\in V_0'$ (possible since $\widehat\varphi(q_n)\to\widehat\varphi(q)$); then $q_n\in V_0\cap U$ and $\varphi(q_n)\in V_0'$. Hence $(q,\widehat\varphi(q))$ is a corresponding boundary pair, so $q\in C$. [step 1.1, step 2.1, L1, L3, L5, algebra]

4.1 (Clause (a).) By step 3.1, $W\cap\partial U\subseteq C$ for each constructed $W$, and by [L3] every point of $\partial U$ has at most one corresponding point, so the values of the various local maps on $C$ coincide where defined: for $p_1,p_2\in C$ and $q\in W_{p_1}\cap W_{p_2}\cap\partial U$ one has $\widehat\varphi_{p_1}(q)=\widehat\varphi_{p_2}(q)$ because both equal the unique corresponding point of $q$. Since $C=\bigcup_{p\in C}(W_p\cap\partial U)$ with each $W_p$ open, $C$ is open in $\partial U$ with $G:=\bigcup_{p\in C}W_p$. [step 3.1, L3, algebra]

5.1 (The global map and clause (b).) Define $\Omega:=\bigcup_{p\in C}W_p\cup U$ and $\Phi:\Omega\to M'$ by $\Phi(x):=\varphi(x)$ for $x\in U$ and $\Phi(q):=$ the unique corresponding point of $q$ for $q\in C$. This is well defined and smooth: every point of $\Omega$ lies in $U$ or in some $W_p$; on $W_p\cap U$ the maps $\varphi$ and $\widehat\varphi_p$ agree (step 2.1), and on $W_p\cap\partial U$ their values agree (step 4.1); hence the local descriptions $\varphi$ (on $U$) and $\widehat\varphi_p$ (on $W_p$) glue to a smooth map on the open cover $\{U\}\cup\{W_p\}$ of the open set $\Omega$, with $\widehat\varphi_p=\varphi$ on $W_p\cap U$ and $\Phi=\widehat\varphi_p$ on $W_p\cap(U\cup C)$. This is clause (b). [step 2.1, step 4.1, algebra]

6.1 (Metric pullback on $U\cup C$.) Let $T:=\Phi^*(g')-g$, a smooth symmetric covariant $2$-tensor field on $\Omega$. On the open subset $U$ one has $T=0$ by [L5], and $T$ is continuous on $\Omega$. Let $q\in C$ and choose $q_n\in U$, $q_n\to q$ (possible because $q\in\partial U$); then $T(q_n)=0$ for all $n$ and $T(q_n)\to T(q)$ by continuity, so $T(q)=0$. Hence $\Phi^*(g')=g$ at every point of $U\cup C$, which is clause (c)1. [step 5.1, L5, algebra]

6.2 (Connection compatibility on $U\cup C$.) Since $\Phi$ is a local diffeomorphism on $\Omega$ (step 5.1), the pullback connection $\Phi^*\nabla'$ on $T\Omega$, defined by $(\Phi^*\nabla')_XY:=(d\Phi)^{-1}\bigl(\nabla'_{d\Phi\,X}d\Phi\,Y\bigr)$ for smooth $X,Y$, is an affine connection, and $\Theta:=\Phi^*\nabla'-\nabla$ is a smooth $(1,2)$-tensor field on $\Omega$. On the open set $U$ the map $\Phi$ agrees with the isometric immersion $\varphi$, so $\Phi^*\nabla'=\nabla$ on $U$ by [L6], that is $\Theta=0$ on $U$. Being continuous, $\Theta$ vanishes at every limit point of $U$ in $\Omega$, in particular at every point of $C$. Translating $(d\Phi)^{-1}\Theta=0$ back gives (c)3. [step 5.1, L6, algebra]

6.3 (Clause (e): injectivity and embedding.) $\Phi$ is injective on $U$ (a development embedding), injective on $C$ (if $\Phi(q_1)=\Phi(q_2)$ for $q_1,q_2\in C$ with $q_1\ne q_2$, then in the reversed common subdevelopment $(\varphi(U),\varphi^{-1})$ the point $\Phi(q_1)$ has the two corresponding points $q_1,q_2$, contradicting the uniqueness clause of [L3]), and no point of $U$ has the same image as a point of $C$ because $\varphi(U)$ is open in $M'$ while the image of a corresponding pair lies in $\partial\varphi(U)$ (the reversed uniqueness argument also applies; directly, $\Phi(C)\subseteq\partial\varphi(U)$ by step 3.1 applied to the reversed pair, and $\Phi(U)=\varphi(U)$ is open). Hence $\Phi$ is injective on $U\cup C$; since it is a local diffeomorphism, its restriction to $S$ is an injective immersion, and an injective immersion that is a local homeomorphism onto its image is an embedding onto $\Phi(S)$. [step 5.1, L3, L5, algebra]

7.1 (Matter fields.) Let $S_i:=\Phi^*(\psi'^i)-\psi^i$, a smooth section over $\Omega$ of the relevant tensor bundle. On $U$ it vanishes by [L5]; it is continuous; the limit argument of step 6.1 applies verbatim at every $q\in C$, so $S_i(q)=0$. This is clause (c)2. [step 5.1, step 6.1, L5, algebra]

7.2 (Clause (d).) Let $\gamma:J\to M$ be a geodesic segment with image in $U\cup C$, so that $\Phi\circ\gamma$ is a smooth curve in $M'$ with velocity $d\Phi(\gamma')$. At a parameter value $t_0\in J$ choose smooth extensions $X,Y$ of $\gamma'$ to a neighbourhood of $\gamma(t_0)$ in $\Omega$; then at $t_0$ $$\nabla'_{(\Phi\circ\gamma)'}(\Phi\circ\gamma)'=\nabla'_{d\Phi X}d\Phi Y=d\Phi(\nabla_XY)=d\Phi(\nabla_{\gamma'}\gamma')=0$$ by step 6.2 and the geodesic equation for $\gamma$. Hence $\Phi\circ\gamma$ is a geodesic segment, and if $\gamma$ is null then $g'((\Phi\circ\gamma)',(\Phi\circ\gamma)')=g(\gamma',\gamma')=0$ by (c)1, so the image is null. [step 6.1, step 6.2, algebra]

8.1 (Clause (e): induced metric, second fundamental form, matter jets.) At every $q\in S$ the identity (c)1 gives $\Phi^*(\bar g'_{\Phi(S)})=\bar g_S$ pointwise. If $S$ is spacelike with unit normal field $n$ ([[def-gr-spacelike-hypersurfaces-and-cauchy-sets]]), then $d\Phi_q\,n_q$ is orthogonal to $d\Phi_q(T_qS)=T_{\Phi(q)}\Phi(S)$, has the same norm, and has the same time orientation as $n_q$ (on $U$ because $\varphi$ is an isometry preserving the time orientation [L5]; on $C$ by (c)1 and continuity), so $d\Phi(n)=n'$ is the unit normal of $\Phi(S)$. Extending $n$ and $X,Y\in\mathfrak X(S)$ smoothly near $q$ and using (c)3, $$k_{\Phi(S)}(d\Phi X,d\Phi Y)=g'(\nabla'_{d\Phi X}d\Phi n,d\Phi Y)=g'(d\Phi(\nabla_Xn),d\Phi Y)=g(\nabla_Xn,Y)=k_S(X,Y)$$ at $q$. Finally, for a matter field $\Psi'$ of $M'$ and $X\in T_qS$ the pullback connection identity (c)3 implies $\nabla_X(\Phi^*\Psi')=\Phi^*(\nabla'_{d\Phi X}\Psi')$ at $q$, so the first covariant derivatives of the matter fields along $S$ are identified as well. This proves clause (e). ∎. [step 6.1, step 7.1, step 6.2, step 6.3, algebra]

## Remarks

Lemma 3.8 of Sbierski's paper is clauses (a)-(b). Two corrections of its
reading are recorded here. First, the local formula $\widehat\varphi_p$ is a
normal-coordinate identification, **not** an isometry of $W_p$: when $W_p$
meets the interior of the complement of $U$, the set $W_p\cap U$ is not dense
in $W_p$, so the isometry identity cannot be propagated to that exterior part.
What is true, and what clauses (c)-(e) record, is the pointwise statement at
every $q\in U\cup C$: the difference tensor $\Phi^*\nabla'-\nabla$ and the
pullback metric difference are smooth fields on the open set $\Omega$ that
vanish on $U$ and hence, by continuity, at every point of the closure side
$U\cup C$. Second, the consequence used in
[[lem-gr-boundary-null-geodesic-segment]] that geodesics lying in the boundary
map to geodesics is proved in clause (d) through the connection-compatibility
(c)3 and needs no isometry property of $\widehat\varphi_p$ outside
$\overline U$. Clause (e) supplies the transfer of the induced Cauchy data
$(h,K)$ and of the matter jets used by the local geometric uniqueness theorem
in [[lem-gr-no-corresponding-boundary-points]].
