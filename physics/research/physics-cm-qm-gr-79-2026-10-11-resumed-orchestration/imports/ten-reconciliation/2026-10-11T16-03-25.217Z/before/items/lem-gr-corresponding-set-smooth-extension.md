---
id: lem-gr-corresponding-set-smooth-extension
kind: lemma
title: "The set of boundary points with a corresponding point is open, and the extension preserves the metric, matter fields and connection on the closure side"
status: draft
origin: session
domain: mathematics
dependency_level: 30
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-dependent-choice, lem-gr-subdevelopment-convexity, lem-gr-chronology-openness, lem-gr-cauchy-set-topology-and-graph, def-countable-choice, thm-weak-whitney-proper-embedding-theorem, thm-euclidean-tubular-neighbourhood-theorem, thm-smooth-partitions-of-unity-exist-on-manifolds, thm-smooth-functions-defined-locally-can-be-glued-by-a-partition-of-unity, thm-smooth-inverse-function-theorem-on-manifolds, def-gr-spacelike-hypersurfaces-and-cauchy-sets, def-gr-development-and-data-fixing-isometry, def-gr-common-subdevelopment-and-corresponding-boundary, lem-gr-corresponding-boundary-structure, lem-gr-isometric-immersion-rigidity, thm-gr-convex-normal-neighborhoods, thm-gr-local-geodesics-and-exponential-map, lem-gr-joint-exponential-diffeomorphism, lem-gr-parallel-transport-and-geodesic-speed, def-gr-normal-neighborhoods-and-position-vectors, def-gr-metric-selected-connection, def-gr-causal-curves-and-reachability, def-gr-smooth-lorentzian-objects, def-c-r-and-smooth-maps-between-smooth-manifolds, def-continuity-real]
dependency_roles:
  def-dependent-choice: mathematical-premise
  lem-gr-subdevelopment-convexity: mathematical-premise
  lem-gr-chronology-openness: mathematical-premise
  lem-gr-cauchy-set-topology-and-graph: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-weak-whitney-proper-embedding-theorem: mathematical-premise
  thm-euclidean-tubular-neighbourhood-theorem: mathematical-premise
  thm-smooth-partitions-of-unity-exist-on-manifolds: mathematical-premise
  thm-smooth-functions-defined-locally-can-be-glued-by-a-partition-of-unity: mathematical-premise
  thm-smooth-inverse-function-theorem-on-manifolds: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
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

Assume Countable Choice and Dependent Choice ([[def-countable-choice]], [[def-dependent-choice]]).

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
built from a common interior base point $a_p\in U$, chosen in $I^-(p)$ when $p$ is to the future of the initial surface and in $I^+(p)$ when $p$ is to its past, and the
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
any unit normal field, and the matter fields together with their covariant derivatives of every finite order along $S$ to the corresponding objects of $\Phi(S)$ in
$M'$. In particular $(S,\bar g_S,k_S,\psi|_S)$ and
$(\Phi(S),\bar g_{\Phi(S)},k_{\Phi(S)},\psi'|_{\Phi(S)})$ are identified by
$\Phi|_S$ whenever $S$ is spacelike.

## Facts & Assumptions

**Given:** Countable Choice and Dependent Choice; two fixed developments of the same fixed model and data, a common subdevelopment $(U,\varphi)$, and its corresponding-point set $C$. All causal relations are computed in their stated ambient developments.

[L1] The initial surface $\Sigma$ is contained in $U$, every boundary point is strictly to one side of $\Sigma$, chronology is open, and every causal curve from $\Sigma$ to a future point of $U$ lies in $U$; every causal segment with both endpoints in $U$ lies in $U$ ([[lem-gr-cauchy-set-topology-and-graph]], [[lem-gr-chronology-openness]], [[lem-gr-subdevelopment-convexity]]). The past-side assertions are the time reverse.

[L2] Local geodesics and exponential maps are smooth, convex normal neighborhoods exist, and exponential maps there have smooth inverses; timelike geodesic velocity stays timelike and has constant time orientation ([[thm-gr-local-geodesics-and-exponential-map]], [[thm-gr-convex-normal-neighborhoods]], [[lem-gr-joint-exponential-diffeomorphism]], [[lem-gr-parallel-transport-and-geodesic-speed]]).

[L3] Corresponding points are unique; every future timelike curve in $U$ converging to a future boundary point is mapped to a curve converging to its corresponding point ([[lem-gr-corresponding-boundary-structure]]). Apply the same theorem after time reversal on the past side, and after swapping the two developments for the inverse correspondence.

[L4] The development embedding $\varphi:U\to\varphi(U)$ is a diffeomorphism preserving metric, matter and time orientation. It preserves the metric-selected connection and affinely parametrized geodesics wherever their entire segments lie in $U$ ([[def-gr-development-and-data-fixing-isometry]], [[lem-gr-isometric-immersion-rigidity]], [[def-gr-metric-selected-connection]]).

[L5] Under Countable Choice, $M'$ admits a smooth embedding $e:M'\to\mathbb R^9$; its embedded image has an open Euclidean tubular neighborhood $T$ and a smooth retraction $r:T\to e(M')$ with $r\circ e=e$ ([[thm-weak-whitney-proper-embedding-theorem]], [[thm-euclidean-tubular-neighbourhood-theorem]]). The retraction is the normal-bundle projection composed with the inverse normal-addition diffeomorphism.

[L6] Under Countable Choice, every open cover of a smooth manifold has a subordinate smooth partition of unity with locally finite supports. Weighted sums of locally defined Euclidean-valued smooth maps, extended by zero termwise, are smooth ([[thm-smooth-partitions-of-unity-exist-on-manifolds]], [[thm-smooth-functions-defined-locally-can-be-glued-by-a-partition-of-unity]]).

[L7] An invertible differential is an open condition, and the smooth inverse function theorem gives a local diffeomorphism there ([[thm-smooth-inverse-function-theorem-on-manifolds]]). Smooth tensor identities, including their coordinate derivatives, extend from an open set to its closure by continuity ([[def-c-r-and-smooth-maps-between-smooth-manifolds]], [[def-continuity-real]]).

## Proof

**Proof technique:** direct.

1.1 (The interior past of a future boundary point.) Let $p\in C\cap I^+(\Sigma)$. If $x\in I^-(p)\cap I^+(\Sigma)$, openness of $I^+(x)$ and the fact $p\in\partial U$ give $y\in U\cap I^+(x)\cap I^+(\Sigma)$. Concatenate a future timelike curve from $\Sigma$ to $x$ with one from $x$ to $y$. Past convexity [L1] puts that curve, hence $x$, in $U$. Therefore $I^-(p)\cap I^+(\Sigma)\subseteq U$. Choose a future timelike vector at $p$ and its local geodesic $\gamma$ with $\gamma(0)=p$; for sufficiently small $\varepsilon>0$, its segment $\gamma([-\varepsilon,0))$ lies in $I^-(p)\cap I^+(\Sigma)$ and hence in $U$. This establishes an actual affinely parametrized timelike geodesic, rather than replacing an arbitrary timelike curve by a geodesic. [given, L1, L2, choose, construct]

2.1 (Local normal-coordinate extension.) Let $p'$ correspond to $p$. By [L3] $\varphi\circ\gamma\to p'$. Choose convex normal neighborhoods $V$ of $p$ and $V'$ of $p'$; shorten $\gamma$ so its entire segment and its image lie respectively in $V,V'$, and set $a=\gamma(-\varepsilon)$. By [L4] the image segment is an affinely parametrized geodesic. In the normal chart based at $\varphi(a)$ its inverse-exponential coordinates are its affine parameter times its initial velocity. Continuity at the limit $p'$ therefore gives $d\varphi_a(\exp_a^{-1}p)=\exp_{\varphi(a)}^{-1}p'$. Both vectors lie in the open normal-chart domains. Consequently, on a sufficiently small neighborhood $W$ of $p$, the formula $F_p(q)=\exp_{\varphi(a)}(d\varphi_a(\exp_a^{-1}q))$ is defined and is a diffeomorphism onto its open image. At $q=p$ the vector $\exp_a^{-1}p$ is future timelike; shrink $W\subseteq V\cap I^+(\Sigma)$ until every $\exp_a^{-1}q$ is future timelike as well. Its radial geodesic then joins $a$ to $q$ and stays in $V$. For $q\in W\cap U$, both endpoints lie in $U$, so causal convexity [L1] puts its entire radial segment in $U$. The connection-preserving property [L4] now gives $F_p(q)=\varphi(q)$. For past boundary points repeat with reversed time orientation and an interior base point $a\in I^+(p)\cap U$. [step 1.1, L1, L2, L3, L4, choose, construct]

3.1 (Openness and the boundary values.) If $q\in W\cap\partial U$, take points $q_n\in W\cap U$ tending to $q$ using a countable coordinate-neighborhood basis. Then $\varphi(q_n)=F_p(q_n)\to F_p(q)$. The limit cannot lie in $\varphi(U)$: continuity of $\varphi^{-1}$ there would force $q_n\to\varphi^{-1}(F_p(q))\in U$, contradicting Hausdorff uniqueness of the limit $q\in\partial U$. Thus $F_p(q)\in\partial\varphi(U)$, and the same sequence witnesses the neighborhood definition of correspondence. Hence $q\in C$ and $F_p(q)$ is its unique corresponding point. Each $p\in C$ has such a $W$, so $C$ is relatively open in $\partial U$. Define $f$ on $A:=U\cup C$ by $f|_U=\varphi$ and the unique corresponding values on $C$. Each $F_p$ agrees with $f$ on $W\cap A$. [step 2.1, L3, L4, algebra]

4.1 (Euclidean patching and common jets.) Use the open cover of $\Omega_0:=U\cup\bigcup W$ consisting of $U$ with map $F_0=\varphi$ and all admissible pairs $(W,F_p)$ of step 2.1. Index by all such pairs, so no arbitrary-index choice of one map per boundary point is needed. Obtain [L5] and a subordinate locally finite partition $(\rho_i)$ from [L6]; write $H=\sum_i\rho_i(e\circ F_i):\Omega_0\to\mathbb R^9$. Each term is extended by zero off its cover member; subordinate support makes the extension smooth. At $q\in A$, every term whose support meets $q$ has $F_i(q)=f(q)$, so $H(q)=e(f(q))$. Moreover fix one local extension $F$ near $q$. On the open set $U$ in each overlapping domain one has $eF_i=eF=e\varphi$. If $q\in C$, every coordinate derivative of their difference is zero at $q$ by continuity from $U$; if $q\in U$ the equality holds on a neighborhood. Local finiteness and $\sum_i\rho_i=1$ therefore show that every coordinate derivative of $H-eF$ vanishes at $q$: apply the finite Leibniz expansion to $\sum_i\rho_i(eF_i-eF)$. This proves equality of all jets at every point of $A$. [step 3.1, L5, L6, L7, construct, algebra]

5.1 (Retraction and local invertibility.) The open set $\Omega_1:=H^{-1}(T)$ contains $A$. Define $\Phi=e^{-1}\circ r\circ H$ there. It is smooth and agrees with $f$ on $A$. For a local extension $F$ from step 4.1, the identity $e^{-1}\circ r\circ e\circ F=F$ holds near $q$; chain and Leibniz rules and the common jets from step 4.1 give equality of all jets of $\Phi$ and $F$ at $q\in A$. In particular $d\Phi_q=dF_q$ is invertible. Restrict to the open set $\Omega\subseteq\Omega_1$ where $d\Phi$ is invertible; it contains $A$, and $\Phi$ is a local diffeomorphism by [L7]. For each $p$, replace $W_p$ by $W_p\cap\Omega$. The original exponential formula remains a local diffeomorphism there and agrees with $\Phi$ on $W_p\cap A$. This proves (b), without asserting that the different exponential formulas agree on exterior overlaps. Countable Choice supplies [L5]-[L6], while Countable and Dependent Choice also accompany the boundary-structure supplier [L3]. [step 2.1, step 4.1, L5, L7, construct, algebra]

6.1 (Metric, matter and connection.) On $U$, $\Phi=\varphi$ preserves the metric and matter by [L4], and the connection by its Koszul formula. The smooth tensor fields $\Phi^*g'-g$, $\Phi^*\psi'^i-\psi^i$, and $\Phi^*\nabla'-\nabla$ vanish on $U$. The pullback connection is defined because $\Phi$ is a local diffeomorphism on $\Omega$. All these tensors, and all their coordinate derivatives, vanish at every point of $C$ by continuity from $U$. Thus (c) holds, and the matter identities also hold to first covariant order at each point of $A$. No metric identity is asserted on the exterior of $\overline U$. [step 5.1, L4, L7, algebra]

6.2 (Homeomorphism on the closure side.) The map $f$ is injective on $U$; on $C$ it is injective by applying uniqueness of corresponding points to the reversed common subdevelopment, and its images of $U$ and $C$ are disjoint because they lie respectively in $\varphi(U)$ and its boundary. Write $C'$ for all corresponding boundary points on the primed side. Symmetry of the definition gives $f(A)=\varphi(U)\cup C'$. Apply the local construction of steps 1.1-2.1 to the reversed pair. Near every point of $C'$ it supplies a continuous local extension agreeing with $f^{-1}$ on its part of $\varphi(U)\cup C'$; on the open interior, the ordinary inverse $\varphi^{-1}$ supplies it. Hence $f^{-1}$ is continuous in the subspace topology, while $f$ is continuous as the restriction of $\Phi$. Thus $f:A\to f(A)$ is a homeomorphism. Restricting this homeomorphism to any embedded submanifold $S\subseteq A$ and using the invertibility of $d\Phi$ proves that $\Phi|_S$ is an embedding. [step 3.1, step 5.1, L3, L4, algebra]

7.1 (Geodesic transfer.) In coordinates, the acceleration of $\Phi\circ\gamma$ is the image under $d\Phi$ of the acceleration of $\gamma$, with the difference term precisely the pullback-connection difference of step 6.1. For a geodesic whose entire image lies in $A$, both vanish at each parameter value, so its image is an affinely parametrized geodesic. The metric identity of step 6.1 preserves the zero squared velocity of a null geodesic. This proves (d). [step 6.1, L2, L4, algebra]

8.1 (Induced data.) The metric identity of step 6.1 restricts to the induced metric of $S$. Any unit normal $n$ is carried to the unit normal $d\Phi(n)$ of $\Phi(S)$; time orientation follows on $U$ from [L4] and at $C$ by continuity. Connection compatibility gives $g'(\nabla'_{d\Phi X}d\Phi n,d\Phi Y)=g(\nabla_Xn,Y)$ for tangent vectors $X,Y$, which is equality of the second fundamental forms. The matter identities and all their coordinate derivatives from step 6.1, together with the full jets of connection compatibility, identify every finite-order covariant derivative along $S$. Thus any prescribed complete finite-jet Cauchy data of the fixed model are carried as well. This proves (e), in particular the full restart-hypersurface data identification. [step 6.1, step 6.2, L4, algebra] ∎

## Remarks

The global smooth map is obtained by Euclidean patching followed by a tubular retraction, not by gluing possibly incompatible exterior exponential maps. Its full jets agree with the local exponential extensions on $U\cup C$. Pointwise metric, matter and connection compatibility on that set suffices for the boundary geodesic and restart-data consumers; no exterior isometry is used. Countable Choice is explicit because the Euclidean embedding, tubular neighborhood and partition-of-unity suppliers require it. Dependent Choice is inherited from the boundary-structure supplier. No exterior isometry is asserted.
