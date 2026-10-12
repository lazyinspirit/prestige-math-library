---
id: lem-gr-isometric-immersion-rigidity
kind: lemma
title: "Rigidity of isometric immersions of a connected Lorentzian manifold, and agreement of data-fixing embeddings on overlaps"
status: draft
origin: session
domain: mathematics
dependency_level: 28
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-development-and-data-fixing-isometry, def-gr-common-subdevelopment-and-corresponding-boundary, lem-gr-subdevelopment-convexity, thm-gr-local-geodesics-and-exponential-map, thm-gr-convex-normal-neighborhoods, lem-gr-joint-exponential-diffeomorphism, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-causal-curves-and-reachability, def-gr-smooth-lorentzian-objects, lem-gr-cauchy-set-topology-and-graph, lem-gr-push-up-rule, def-gr-spacelike-hypersurfaces-and-cauchy-sets, lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form, def-gr-normal-neighborhoods-and-position-vectors, def-c-r-and-smooth-maps-between-smooth-manifolds, def-continuity-real]
dependency_roles:
  def-gr-development-and-data-fixing-isometry: mathematical-premise
  def-gr-common-subdevelopment-and-corresponding-boundary: mathematical-premise
  lem-gr-subdevelopment-convexity: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  thm-gr-convex-normal-neighborhoods: mathematical-premise
  lem-gr-joint-exponential-diffeomorphism: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-causal-curves-and-reachability: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  lem-gr-cauchy-set-topology-and-graph: mathematical-premise
  lem-gr-push-up-rule: mathematical-premise
  def-gr-spacelike-hypersurfaces-and-cauchy-sets: mathematical-premise
  lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form: mathematical-premise
  def-gr-normal-neighborhoods-and-position-vectors: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-continuity-real: mathematical-premise
sources:
  references:
    - title: "J. Sbierski, On the Existence of a Maximal Cauchy Development for the Einstein Equations - a Dezornification, arXiv:1309.7591v3 (2015): Lemma 3.1 with proof (an isometric immersion of a connected Lorentzian manifold is determined by its value and differential at one point) and Corollary 3.2 with proof, printed pp. 12-13"
      url: "https://arxiv.org/pdf/1309.7591"
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): normal neighbourhoods and convexity, Proposition 2.2.6 and Definition 2.2.7, printed pp. 10-13"
      url: "https://arxiv.org/pdf/1110.6706"
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: normal neighbourhoods, the position vector and Gauss' lemma, Definition 2.3 and Theorems 2.4-2.6 printed pp. 26-27"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
verification:
  precheck: pass
---

## Statement

Throughout, for a smooth map $\psi:N\to N'$ between smooth Lorentzian
four-manifolds write $\psi^*(g')=g$ when $g_p(v,w)=g'_{\psi(p)}(d\psi_pv,d\psi_pw)$
for all $p\in N$ and $v,w\in T_pN$; such a map is an **isometric immersion**
([[def-gr-smooth-lorentzian-objects]],
[[def-c-r-and-smooth-maps-between-smooth-manifolds]]). Let $\nabla,\nabla'$ be
the metric-selected connections ([[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]) and let geodesics
and exponential maps be those of
[[thm-gr-local-geodesics-and-exponential-map]].

**(a) Rigidity.** Let $N$ be connected and let
$\psi_1,\psi_2:N\to N'$ be isometric immersions with
$\psi_1(p)=\psi_2(p)$ and $d\psi_1(p)=d\psi_2(p)$ for some $p\in N$. Then
$\psi_1=\psi_2$, that is, $\psi_1(q)=\psi_2(q)$ and $d\psi_1(q)=d\psi_2(q)$
for every $q\in N$.

**(b) Data-fixing embeddings have equal differentials on the initial surface.**
Let $(M,g,N,j,\psi)$, $(M',g',N',j',\psi')$ and $(U,g|_U,N|_U,j,\psi|_U)$ be
as in [[def-gr-common-subdevelopment-and-corresponding-boundary]] clause (a),
and let $\psi_1,\psi_2:U\to M'$ be development embeddings in the sense of
[[def-gr-development-and-data-fixing-isometry]] clause (c). Then
$d\psi_1=d\psi_2$ at every point of $\Sigma:=j(\Sigma)\subseteq U$.

**(c) Agreement on overlaps.** Let $(M,g,N,j,\psi)$ and $(M',g',N',j',\psi')$
be developments of the same data, and let $(U_1,\psi_1)$ and $(U_2,\psi_2)$ be
common subdevelopments in the sense of
[[def-gr-common-subdevelopment-and-corresponding-boundary]] clause (a). Then
$\psi_1=\psi_2$ on $U_1\cap U_2$.

## Facts & Assumptions

**Given:** the maps and developments of the clause under consideration, with their metric-selected connections.

[L1] Local isometries preserve the connection and geodesics: if $\psi^*(g')=g$ and $\nabla,\nabla'$ are metric-selected, then for all smooth vector fields $X,Y$ on the source the pullback identity holds; consequently, if $\gamma$ is a geodesic of $N$, then $\psi\circ\gamma$ is a geodesic of $N'$ with $(\psi\circ\gamma)'(t)=d\psi_{\gamma(t)}\gamma'(t)$, and normal neighbourhoods and the exponential map satisfy $\psi(\exp_p v)=\exp_{\psi(p)}(d\psi_pv)$ whenever the left side is defined ([[def-gr-metric-selected-connection]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]], [[thm-gr-local-geodesics-and-exponential-map]] clauses (a) and (d)).

[L2] Uniqueness of geodesics with given initial data: for $(q,w)\in TM$ the maximal geodesic is unique, and two geodesics with the same value and velocity at one parameter value agree on the intersection of their intervals ([[thm-gr-local-geodesics-and-exponential-map]] clause (a)).

[L3] Strictly convex normal neighbourhoods: every point has arbitrarily small open coordinate balls $C$ that are normal neighbourhoods of each of their points, so that every $q\in C$ is $\exp_p(v)$ for exactly one $v\in T_pC$-radial domain, the radial geodesics vary smoothly, and $d\psi$ is recovered from $\psi\circ\exp_p=\exp_{\psi(p)}\circ d\psi_p$ ([[thm-gr-convex-normal-neighborhoods]] clauses (a)-(b), [[def-gr-normal-neighborhoods-and-position-vectors]], [[lem-gr-joint-exponential-diffeomorphism]]).

[L4] Development data and convexity: $j(\Sigma)$ is a Cauchy set of $M$ and of $U_i$; $M=I^-(\Sigma)\sqcup\Sigma\sqcup I^+(\Sigma)$; a causal curve in $M$ with endpoints in $U_i$ stays in $U_i$; and $p\in I^+(\Sigma)$ means that a timelike curve in $M$ from $\Sigma$ to $p$ exists ([[def-gr-development-and-data-fixing-isometry]] clause (a)5, [[lem-gr-cauchy-set-topology-and-graph]] clause (a), [[lem-gr-subdevelopment-convexity]] clause (c), [[def-gr-causal-curves-and-reachability]] clause (c), [[lem-gr-push-up-rule]]).

[L5] Agreement on the surface: development embeddings satisfy $\psi_1\circ j=j'=\psi_2\circ j$ and preserve the time orientation; since $j(\Sigma)$ is spacelike with a unique future unit normal, $\psi_1$ and $\psi_2$ carry that normal to the future unit normal of $j'(\Sigma)$, so their differentials agree on $T_{j(\sigma)}M$ for every $\sigma\in\Sigma$ ([[def-gr-development-and-data-fixing-isometry]] clauses (b)-(c), [[lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form]], [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] clause (a)).

No choice principle is used in this item.

## Proof

**Proof technique:** direct.

1.1 (The genuine pullback connection.) For an isometric immersion $\psi$ between these equal-dimensional nondegenerate manifolds, $d\psi$ is an isomorphism: its kernel is zero because $g(v,w)=g'(d\psi v,d\psi w)$ for all $w$. Thus $\psi$ is a local diffeomorphism. On each such neighborhood define $D_XY=(d\psi)^{-1}(\nabla'_{\psi_*X}\psi_*Y)$. This pullback satisfies the affine-connection rules, including $D_X(fY)=X(f)Y+fD_XY$, and the local definitions agree on overlaps. Preservation of Lie brackets under a diffeomorphism gives zero torsion, and differentiating $g(Y,Z)=g'(\psi_*Y,\psi_*Z)\circ\psi$ gives metric compatibility. The unique torsion-free compatible connection is therefore $D=\nabla$, by the metric-selected Levi-Civita theorem in [L1]. Hence $\nabla'_{d\psi X}d\psi Y=d\psi(\nabla_XY)$ locally and along curves; geodesics are mapped to geodesics with velocity $d\psi(\gamma')$. This does not treat a connection or the Koszul expression as tensorial in its second argument. [L1, algebra, construct]

1.2 (The agreement set of (a).) Let $A:=\{q\in N:\psi_1(q)=\psi_2(q)\text{ and }d\psi_1(q)=d\psi_2(q)\}$. Then $p\in A$ by hypothesis, so $A\neq\emptyset$. [given, algebra]

1.3 ($A$ is closed.) The maps $q\mapsto(\psi_1(q),d\psi_1(q))$ and $q\mapsto(\psi_2(q),d\psi_2(q))$ are continuous in the natural manifold topologies on $N'$ and its tangent-bundle-like target ([[def-c-r-and-smooth-maps-between-smooth-manifolds]], [[def-continuity-real]]); hence $A$ is the preimage of the diagonal, which is closed, so $A$ is closed in $N$. [L3, def. smooth maps between smooth manifolds, def. continuity, algebra]

1.4 (Clause (b).) By [L5] the differentials of $\psi_1$ and $\psi_2$ agree on every $T_{j(\sigma)}U$, that is, at every point of $\Sigma$, which is clause (b). [L5]

1.5 (Every component of $U_1\cap U_2$ meets $\Sigma$.) Let $x\in U_1\cap U_2$. By [L4] $x$ lies in one of $I^-(\Sigma)$, $\Sigma$, $I^+(\Sigma)$; in the first two cases $x$ itself or a point of $\Sigma$ in the same component exists trivially; if $x\in I^+(\Sigma)$, choose a future timelike curve $\lambda$ in $M$ from a point of $\Sigma$ to $x$ ([L4]); by convexity of $U_1$ and of $U_2$ ([[lem-gr-subdevelopment-convexity]] clauses (a) and (c), applied to the causal curve $\lambda$ and to any subsegment with endpoints in $U_i$) $\lambda\subseteq U_1\cap U_2$, so $x$ lies in the same component of $U_1\cap U_2$ as a point of $\Sigma$; the case $x\in I^-(\Sigma)$ is the time reverse. [L4, algebra]

2.1 ($A$ is open.) Let $q\in A$ and choose by [L3] a strictly convex normal neighbourhood $C$ of $q$ on which the exponential map is a diffeomorphism from a star-shaped open domain $W_q\subseteq T_qN$ onto $C$. For $x\in C$ write $x=\exp_q(v)$ with $v\in W_q$. For $i=1,2$ the curve $t\mapsto\exp_{\psi_i(q)}(t\,d\psi_{i,q}v)$, $t\in[0,1]$, is by step 1.1 a geodesic of $N'$ equal to $\psi_i\circ(s\mapsto\exp_q(sv))$ where defined; since $d\psi_{1,q}=d\psi_{2,q}$ and $\psi_1(q)=\psi_2(q)$, the two geodesics have equal initial data, hence agree at $t=1$ by [L2], so $\psi_1(x)=\psi_2(x)$. Differentiating the identity $\psi_i\circ\exp_q=\exp_{\psi_i(q)}\circ d\psi_{i,q}$ on $W_q$, whose right side is now the same smooth map for $i=1,2$, gives $d\psi_1(x)=d\psi_2(x)$. Hence $C\subseteq A$ and $A$ is open. [step 1.1, step 1.2, L1, L2, L3, algebra]

3.1 (Conclusion of (a).) $N$ is connected and $A$ is nonempty, open and closed by the preceding steps; hence $A=N$, which is the assertion of (a). [step 1.2, step 2.1, step 1.3, discharge-construct]

3.2 (The agreement set of (c).) Let $A\subseteq U_1\cap U_2$ be the set of points at which $\psi_1=\psi_2$ and $d\psi_1=d\psi_2$; on $j(\Sigma)$ the maps have equal values by [L5] and equal differentials by clause (b), so $\Sigma\subseteq A$. The set $A$ is open in $U_1\cap U_2$ by the argument of step 2.1 applied to normal neighbourhoods contained in the open set $U_1\cap U_2$, and closed by the argument of step 1.3. [step 2.1, step 1.3, step 1.4, L3, L5, algebra]

4.1 (Conclusion of (c).) Since $A$ is open and closed in $U_1\cap U_2$ and meets every component of $U_1\cap U_2$ by step 1.5, $A=U_1\cap U_2$; hence $\psi_1=\psi_2$ on $U_1\cap U_2$, which is clause (c). [step 3.2, step 1.5, algebra] ∎

## Remarks

Clause (a) is Sbierski's Lemma 3.1 and clause (c) his Corollary 3.2; the connectedness hypothesis of (a) is essential (the identity and a permutation of isometric components of a disconnected development agree at no point yet are distinct isometric immersions on the respective components). Clause (c) is what makes the patched map of [[lem-gr-maximal-common-development]] well defined on overlaps.
