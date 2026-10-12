---
id: lem-gr-corresponding-set-smooth-extension
kind: lemma
title: "The set of boundary points with a corresponding point is open in the boundary and the embedding extends smoothly over it"
status: draft
origin: session
domain: mathematics
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-development-and-data-fixing-isometry, def-gr-common-subdevelopment-and-corresponding-boundary, lem-gr-subdevelopment-convexity, lem-gr-corresponding-boundary-structure, lem-gr-isometric-immersion-rigidity, thm-gr-convex-normal-neighborhoods, thm-gr-local-geodesics-and-exponential-map, lem-gr-joint-exponential-diffeomorphism, lem-gr-parallel-transport-and-geodesic-speed, def-gr-normal-neighborhoods-and-position-vectors, def-gr-causal-curves-and-reachability, def-gr-smooth-lorentzian-objects, def-c-r-and-smooth-maps-between-smooth-manifolds, def-continuity-real]
dependency_roles:
  def-gr-development-and-data-fixing-isometry: mathematical-premise
  def-gr-common-subdevelopment-and-corresponding-boundary: mathematical-premise
  lem-gr-subdevelopment-convexity: mathematical-premise
  lem-gr-corresponding-boundary-structure: mathematical-premise
  lem-gr-isometric-immersion-rigidity: mathematical-premise
  thm-gr-convex-normal-neighborhoods: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  lem-gr-joint-exponential-diffeomorphism: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  def-gr-normal-neighborhoods-and-position-vectors: mathematical-premise
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

**(b)** there is a smooth map $\Phi:U\cup C\to M'$ whose restriction to $U$ is
$\varphi$ and whose value at $p\in C$ is the unique corresponding boundary
point of $p$; every $p\in C$ has an open neighbourhood $W_p$ in $M$ and there
is a smooth **local isometry**
$$\widehat\varphi_p:W_p\to M',\qquad
\widehat\varphi_p(q)=\exp_{\varphi(a_p)}\bigl(d\varphi_{a_p}(\exp_{a_p}^{-1}q)\bigr)$$
built from a common interior base point $a_p\in I^-(p)\cap U$ and the
exponential maps, such that $\widehat\varphi_p$ agrees with $\varphi$ on
$W_p\cap U$ and $\Phi$ agrees with $\widehat\varphi_p$ on
$W_p\cap(U\cup C)$. In particular $\Phi$ is an isometric immersion at every
point of $U\cup C$ in the following sense: $\widehat\varphi_p{}^*(g')=g$ on
$W_p$ and $\widehat\varphi_p{}^*(\psi'{}^i)=\psi^i$ on $W_p$ for every matter
field, each $\widehat\varphi_p$ being a local diffeomorphism onto its image.

## Facts & Assumptions

**Given:** developments $M,M'$ of the same data, a common subdevelopment $(U,\varphi)$, and the set $C$ of clause (c) of [[def-gr-common-subdevelopment-and-corresponding-boundary]].

[L1] Convex normal neighbourhoods and exponential maps: every point has arbitrarily small convex normal neighbourhoods on which the exponential map is a diffeomorphism from a radial domain, radial geodesics vary smoothly, and $\varphi(\exp_a X)=\exp_{\varphi(a)}(d\varphi_aX)$ for the isometric immersion $\varphi$ ([[thm-gr-convex-normal-neighborhoods]] clauses (a)-(c), [[def-gr-normal-neighborhoods-and-position-vectors]], [[thm-gr-local-geodesics-and-exponential-map]] clauses (a) and (d), [[lem-gr-isometric-immersion-rigidity]] step 1.1).

[L2] Norms of geodesic velocities: the quantity $g(\gamma',\gamma')$ is constant along a geodesic, so the radial geodesic of [L1] joining $a$ to a point $q\in I^+(a)$ is timelike and causal ([[lem-gr-parallel-transport-and-geodesic-speed]], [[def-gr-causal-curves-and-reachability]]).

[L3] Corresponding-point structure: the future boundary $\partial U\cap I^+(\Sigma)$ is achronal; corresponding points to the future satisfy $\varphi(I^-(p)\cap U)=I'^-(p')\cap\varphi(U)$, and a point of $\partial U$ has at most one corresponding point; every future timelike curve in $U$ converging to $p$ is mapped by $\varphi$ to a curve converging to $p'$ ([[lem-gr-corresponding-boundary-structure]] clauses (a)-(c)).

[L4] Convexity of the subdevelopment: every causal curve in $M$ from $\Sigma$ to a point of $U\cap I^+(\Sigma)$ is contained in $U$ ([[lem-gr-subdevelopment-convexity]] clause (a)).

[L5] Development data: $\varphi$ is a development embedding, hence a smooth isometric immersion preserving the time orientation and the matter fields: $\varphi^*(g')=g$ and $\varphi^*(\psi'{}^i)=\psi^i$ on $U$ ([[def-gr-development-and-data-fixing-isometry]] clauses (b)-(c)). Since $U$ is open and $p\in\partial U$, the set $W_p\cap U$ is a nonempty open subset of the open set $W_p$ that accumulates at every point of $W_p\cap\partial U$; differentiability and continuity of smooth maps are local properties, so an identity between two smooth tensor fields on $W_p$ that holds on $W_p\cap U$ extends to the closure of that set in $W_p$ ([[def-c-r-and-smooth-maps-between-smooth-manifolds]], [[def-continuity-real]]).

No choice principle is used in this item.

## Proof

**Proof technique:** direct.

1.1 (Local construction at a corresponding pair.) Let $p\in C$ with corresponding point $p'$, both to the future of the initial surface (the past case is the time reverse), and choose a future timelike geodesic $\gamma:[-\varepsilon,0)\to U$ with $\gamma(s)\to p$ as $s\nearrow0$ (any future timelike curve in $U$ converging to $p$ qualifies; such curves exist because every neighbourhood of $p$ meets $U$ and $U$ is open). By [L3] the curve $\varphi\circ\gamma$ converges to $p'$ and is a timelike geodesic of $M'$ [L1]. Choose convex normal neighbourhoods $V\ni p$ and $V'\ni p'$ [L1] and shrink $\varepsilon$ so that $\gamma([-\varepsilon,0))\subseteq V$ and $\varphi(\gamma([-\varepsilon,0)))\subseteq V'$; write $a:=\gamma(-\varepsilon)$. For every chosen neighbourhood there is a smaller open neighbourhood $W\ni p$, $W\subseteq V$, with $W\subseteq I^+(a)$ and $d\varphi_a\bigl(\exp_a^{-1}(W)\bigr)\subseteq\exp_{\varphi(a)}^{-1}(V')$ (shrink $W$ using continuity of the inverse exponential map [L1]). Define $\widehat\varphi:W\to M'$ by $\widehat\varphi(q):=\exp_{\varphi(a)}\bigl(d\varphi_a(\exp_a^{-1}q)\bigr)$. [given, L1, L3, choose, construct]

1.2 (Properties of the local map.) By [L1] $\widehat\varphi$ is a smooth map, indeed a diffeomorphism onto an open subset of $V'$, and it agrees with $\varphi$ on $W\cap U$: for $q=\exp_aX\in W\cap U$ one has $\widehat\varphi(q)=\exp_{\varphi(a)}(d\varphi_aX)=\varphi(\exp_aX)=\varphi(q)$ by the commutation of the exponential map with isometries [L1]. [step 1.1, L1, algebra]

1.3 (The local map is an isometric immersion and preserves the matter fields.) Both $\widehat\varphi{}^*(g')$ and $g$ are smooth symmetric covariant $2$-tensor fields on the open set $W$; they agree on the nonempty open subset $W\cap U$ because $\widehat\varphi=\varphi$ there and $\varphi$ is an isometric immersion [L5]. By [L5] the subset $W\cap U$ accumulates at every point of $W\cap\partial U$, so by continuity of both tensor fields and of the difference, the identity extends to the closure of $W\cap U$ in $W$; since $W\cap U$ is dense in $W$ (every point of $W\cap\partial U$ is a limit of points of $U$ and points of $W\cap U$ itself are already in the set), $\widehat\varphi{}^*(g')=g$ on all of $W$. The same argument applies to each matter field: $\widehat\varphi{}^*(\psi'{}^i)$ and $\psi^i$ are smooth sections of the same tensor bundle over $W$, they agree on $W\cap U$ by [L5], and hence agree on $W$. Consequently $\widehat\varphi$ is a local isometry of $W$ into $M'$, so at each point its differential preserves the metric and all matter fields. [step 1.2, L5, algebra]

2.1 (The radial segment to a boundary point of $W$ lies in $U$.) Let $q\in W\cap\partial U$ and write $X:=\exp_a^{-1}(q)$, so that $q=\exp_aX$ and the radial geodesic $\rho(s):=\exp_a(sX)$, $s\in[0,1]$, is timelike with $\rho(1)=q$ [L1, L2]. Then $\rho(s)\in I^+(a)\subseteq I^+(\Sigma)$ for $s\in(0,1]$, and $\rho(s)\to q$ as $s\nearrow1$. I claim $\rho(s)\in U$ for every $s\in[0,1)$: if $s_1:=\inf\{s\in[0,1):\rho(s)\notin U\}$ satisfied $s_1<1$, then $\rho(s_1)\notin U$ while $\rho(s_1)$ is a limit of points of $U$, so $\rho(s_1)\in\partial U$, and $\rho(s_1)\ll q$ with both points in $\partial U\cap I^+(\Sigma)$, contradicting achronality [L3]. Hence the segment $\rho|_{[0,1)}\subseteq U$. [step 1.1, L2, L3, contradiction]

2.2 ($W\cap\partial U\subseteq C$.) Let $q\in W\cap\partial U$. Then $q$ is a limit of points of the image of $\gamma$, which is a timelike curve in $U$; equivalently, the radial segment $\rho|_{[0,1)}$ of step 2.1 is a future timelike curve in $U$ converging to $q$. Its image under $\varphi$ is a timelike curve in $M'$; on the other hand $\widehat\varphi(\rho(s))=\exp_{\varphi(a)}(s\,d\varphi_aX)$ by the definition in step 1.1 and [L1], and this converges to $\widehat\varphi(q)$ as $s\nearrow1$, while by step 1.2, $\widehat\varphi(\rho(s))=\varphi(\rho(s))$ for $s<1$. Hence the curve $\varphi\circ\rho$ converges to $\widehat\varphi(q)$; the convergence is to a point of the closure of $\varphi(U)=\varphi(U)$, and $\widehat\varphi$ is a local diffeomorphism at $q$, so $\widehat\varphi(q)$ is a boundary point of $\varphi(U)$: $\widehat\varphi(q)\in\partial\varphi(U)$. Since for every pair of open neighbourhoods $V_0\ni q$, $V'_0\ni\widehat\varphi(q)$, convergence gives $s<1$ with $\rho(s)\in V_0\cap U$ and $\varphi(\rho(s))=\widehat\varphi(\rho(s))\in V'_0$, the pair $(q,\widehat\varphi(q))$ is corresponding, so $q\in C$. Thus $W\cap\partial U\subseteq C$; since $C\subseteq\partial U$ and the sets $W$ constructed around points of $C$ cover $C$, this makes $C$ open in $\partial U$. This is clause (a). [step 2.1, L3, algebra]

3.1 (The global extension.) Define $\Phi:U\cup C\to M'$ by $\Phi(x):=\varphi(x)$ for $x\in U$ and $\Phi(q):=$ the unique corresponding point of $q$ for $q\in C$ (unique by [L3]). The map is well defined, and it is smooth: near a point $x\in U$ it equals the smooth map $\varphi$; near a point $q\in C$ it equals the smooth map $\widehat\varphi$ of step 1.1 on $W$ intersected with $U\cup C$, because on $W\cap U$ the two agree (step 1.2) and on $W\cap\partial U$ both take the value of the unique corresponding point (step 2.2 and [L3], using that the value of $\Phi$ at boundary points is the corresponding point by definition). Hence $\Phi$ is smooth, it has the stated local form, and by step 1.3 the local maps $\widehat\varphi_p$ are local isometries with $\widehat\varphi_p{}^*(g')=g$ and $\widehat\varphi_p{}^*(\psi'{}^i)=\psi^i$ on $W_p$. This is clause (b). [step 1.3, step 2.2, L1, L3, algebra] ∎

## Remarks

Lemma 3.8 of Sbierski's paper is clauses (a)-(b). The phrase "extends smoothly
over $U\cup C$" refers to the local agreement with the explicit
normal-coordinate formula; no smooth structure on the boundary itself is
constructed. Step 1.3 records the additional fact, used in
[[lem-gr-no-corresponding-boundary-points]], that the extension is an isometric
immersion preserving the matter fields near every point of $C$: the local
formula is a composition of the exponential map of $M'$ with the linear
isometry $d\varphi_a$ and the inverse exponential of $M$, and it agrees with
the isometric immersion $\varphi$ on the dense subset $W\cap U$ of $W$, so the
pullback identities extend by continuity. The result is the closure step of
the method of continuity: in [[lem-gr-spacelike-restart-hypersurface]] the
extension is restarted across a spacelike surface.
