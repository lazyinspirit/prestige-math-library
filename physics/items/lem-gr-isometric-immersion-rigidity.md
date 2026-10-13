---
id: lem-gr-isometric-immersion-rigidity
kind: lemma
title: "Rigidity of isometric immersions of a connected Lorentzian manifold, and agreement of data-fixing embeddings on overlaps"
status: draft
origin: session
domain: mathematics
dependency_level: 29
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-dependent-choice, def-countable-choice, def-gr-development-and-data-fixing-isometry, def-gr-common-subdevelopment-and-corresponding-boundary, lem-gr-subdevelopment-convexity, thm-gr-local-geodesics-and-exponential-map, thm-gr-convex-normal-neighborhoods, lem-gr-joint-exponential-diffeomorphism, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-causal-curves-and-reachability, def-gr-smooth-lorentzian-objects, lem-gr-cauchy-set-topology-and-graph, lem-gr-push-up-rule, def-gr-spacelike-hypersurfaces-and-cauchy-sets, lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form, def-gr-normal-neighborhoods-and-position-vectors, def-c-r-and-smooth-maps-between-smooth-manifolds, def-continuity-real]
dependency_roles:
  def-dependent-choice: mathematical-premise
  def-countable-choice: mathematical-premise
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

**(c) Agreement on overlaps.** Assume Countable Choice and Dependent Choice
([[def-countable-choice]], [[def-dependent-choice]]) for the supplied
causal-convexity and Cauchy-side arguments in this clause. Let $(M,g,N,j,\psi)$ and $(M',g',N',j',\psi')$
be developments of the same data, and let $(U_1,\psi_1)$ and $(U_2,\psi_2)$ be
common subdevelopments in the sense of
[[def-gr-common-subdevelopment-and-corresponding-boundary]] clause (a). Then
$\psi_1=\psi_2$ on $U_1\cap U_2$.

## Facts & Assumptions

**Given:** the maps and developments of the clause under consideration, with their metric-selected connections.

[L1] Local metric matrices and their associated coefficients: in a source chart $x$ and a target chart $y$, write $g_{ab}$ and $g'_{\alpha\beta}$ for the smooth nondegenerate metric matrices and $g^{ab}$ and $g'^{\alpha\beta}$ for their inverses. Indices run from $0$ to $3$ and repeated indices are summed. Define the smooth coordinate arrays $\Gamma^a{}_{bc}:=\tfrac12g^{ad}(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc})$ and $\Gamma'^\alpha{}_{\beta\gamma}$ by the corresponding target formula. These are finite matrix constructions; no theorem about constructing a global tangent-bundle smooth structure, connection, geodesic or exponential map is applied in clauses (a) or (b). The connection/geodesic references in the Statement fix the usual terminology; the proof below instead obtains its needed local identity directly from $\psi^*g'=g$ and differentiation ([[def-gr-smooth-lorentzian-objects]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[L4] Development data and convexity: $j(\Sigma)$ is a Cauchy set of $M$ and of $U_i$; $M=I^-(\Sigma)\sqcup\Sigma\sqcup I^+(\Sigma)$; a causal curve in $M$ with endpoints in $U_i$ stays in $U_i$; and $p\in I^+(\Sigma)$ means that a timelike curve in $M$ from $\Sigma$ to $p$ exists ([[def-gr-development-and-data-fixing-isometry]] clause (a)5, [[lem-gr-cauchy-set-topology-and-graph]] clause (a), [[lem-gr-subdevelopment-convexity]] clause (c), [[def-gr-causal-curves-and-reachability]] clause (c), [[lem-gr-push-up-rule]]).

[L5] Agreement on the surface: development embeddings satisfy $\psi_1\circ j=j'=\psi_2\circ j$ and preserve the time orientation; since $j(\Sigma)$ is spacelike with a unique future unit normal, $\psi_1$ and $\psi_2$ carry that normal to the future unit normal of $j'(\Sigma)$, so their differentials agree on $T_{j(\sigma)}M$ for every $\sigma\in\Sigma$ ([[def-gr-development-and-data-fixing-isometry]] clauses (b)-(c), [[lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form]], [[def-gr-spacelike-hypersurfaces-and-cauchy-sets]] clause (a)).

Clauses (a) and (b) use only local metric matrices, differentiation and finite-dimensional estimates, with no choice principle; clause (c) retains the stated choice premises of its causal-convexity and Cauchy-side suppliers.

## Proof

**Proof technique:** direct.

1.1 (The coordinate identity for the first differential.) In the charts of [L1], write $f=y\circ\psi\circ x^{-1}$ and $J^\alpha{}_a=\partial_af^\alpha$. The equation $g_{ab}=g'_{\alpha\beta}(f)J^\alpha{}_aJ^\beta{}_b$ makes $J$ invertible: if $Jv=0$, then $g(v,w)=0$ for all $w$, so $v=0$. Put $H^\alpha{}_{bc}=\partial_b\partial_cf^\alpha+\Gamma'^\alpha{}_{\beta\gamma}(f)J^\beta{}_bJ^\gamma{}_c$ and $C^a{}_{bc}=(J^{-1})^a{}_\alpha H^\alpha{}_{bc}$. The target coefficient formula gives $\partial_\beta g'_{\gamma\delta}=g'_{\alpha\delta}\Gamma'^\alpha{}_{\beta\gamma}+g'_{\gamma\alpha}\Gamma'^\alpha{}_{\beta\delta}$. Differentiating the metric identity therefore gives $\partial_bg_{cd}=g_{ad}C^a{}_{bc}+g_{ca}C^a{}_{bd}$. Since $C^a{}_{bc}=C^a{}_{cb}$, adding this identity with indices $(b,c,d)$ and $(c,b,d)$ and subtracting the one with indices $(d,b,c)$ yields $2g_{ad}C^a{}_{bc}=\partial_bg_{cd}+\partial_cg_{bd}-\partial_dg_{bc}$. Thus $C^a{}_{bc}=\Gamma^a{}_{bc}$ and $\partial_bJ^\alpha{}_c=\Gamma^d{}_{bc}J^\alpha{}_d-\Gamma'^\alpha{}_{\beta\gamma}(f)J^\beta{}_bJ^\gamma{}_c$. This follows from finite algebra and the smooth metric identity, without an application of the choice-bearing connection or geodesic suppliers. [L1, algebra, construct]

1.2 (The agreement set of (a).) Let $A:=\{q\in N:\psi_1(q)=\psi_2(q)\text{ and }d\psi_1(q)=d\psi_2(q)\}$. Then $p\in A$ by hypothesis, so $A\neq\emptyset$. [given, algebra]

1.3 ($A$ is closed.) Let $q$ lie in the closure of $A$. Since $N'$ is Hausdorff, if $\psi_1(q)\ne\psi_2(q)$ there are disjoint neighborhoods of these values; their inverse images have an open intersection containing $q$ and missing $A$, a contradiction. Thus $\psi_1(q)=\psi_2(q)=r$. Choose a source chart $x:V\to x(V)\subseteq\mathbb R^4$ around $q$ and a target chart $y:W\to y(W)\subseteq\mathbb R^4$ around $r$, shrinking $V$ so both $\psi_i(V)\subseteq W$. The coordinate maps $f_i=y\circ\psi_i\circ x^{-1}$ are smooth. On $x(A\cap V)$ their values and their $4$ by $4$ derivative matrices agree. Each entry of $Df_1-Df_2$ is continuous, so a nonzero entry at $x(q)$ would have a neighborhood disjoint from $x(A\cap V)$, contradicting $q\in\overline A$. Hence $Df_1(x(q))=Df_2(x(q))$. The invertible chart differentials identify these matrices with $d\psi_{i,q}:T_qN\to T_rN'$, giving $d\psi_{1,q}=d\psi_{2,q}$. Thus $q\in A$ and $A$ is closed. [def. smooth maps between smooth manifolds, def. continuity, algebra]

1.4 (Clause (b).) Differentiating $\psi_i\circ j=j'$ makes the differentials equal on $T_{j(\sigma)}\Sigma$. The orthogonal complement of this positive definite three-plane in a Lorentzian four-space is a negative definite line, so it has exactly one future unit vector $n$; the target plane likewise has a unique future unit vector $n'$. The invertible linear isometries $d\psi_i$ carry the source plane to the target plane and preserve future cones, hence carry $n$ to $n'$. Every tangent vector has a unique decomposition into a surface-tangent vector and a multiple of $n$; thus $d\psi_1=d\psi_2$ on $T_{j(\sigma)}U$. This is pointwise finite-dimensional linear algebra and uses no construction of a global normal field or connection. [L5, algebra]

1.5 (Every component of $U_1\cap U_2$ meets $\Sigma$.) Let $x\in U_1\cap U_2$. By [L4] $x$ lies in one of $I^-(\Sigma)$, $\Sigma$, $I^+(\Sigma)$; if $x\in\Sigma$ its component already meets $\Sigma$; if $x\in I^+(\Sigma)$, choose a future timelike curve $\lambda$ in $M$ from a point of $\Sigma$ to $x$ ([L4]); by convexity of $U_1$ and of $U_2$ ([[lem-gr-subdevelopment-convexity]] clauses (a) and (c), applied to the causal curve $\lambda$ and to any subsegment with endpoints in $U_i$) $\lambda\subseteq U_1\cap U_2$, so $x$ lies in the same component of $U_1\cap U_2$ as a point of $\Sigma$; the case $x\in I^-(\Sigma)$ is the time reverse. [L4, algebra]

2.1 ($A$ is open without geodesic existence.) Let $q\in A$. Choose charts $x$ and $y$ with $x(q)=0$ and $y(\psi_i(q))=0$, and shrink to a source coordinate ball $B$ so both $f_i=y\circ\psi_i\circ x^{-1}$ are defined there. By continuity shrink $B$ further so the pairs $(f_i(z),Df_i(z))$ lie in a fixed compact convex ball $Q$ about their common pair at $0$, with the target-coordinate projection of $Q$ contained in $y$'s domain. For $z\in B$ set $u_i(t)=(f_i(tz),Df_i(tz))$, $0\le t\le1$. Step 1.1 gives $\dot f_i^\alpha=z^bJ_i^\alpha{}_b$ and $\dot J_i^\alpha{}_c=z^b(\Gamma^d{}_{bc}(tz)J_i^\alpha{}_d-\Gamma'^\alpha{}_{\beta\gamma}(f_i)J_i^\beta{}_bJ_i^\gamma{}_c)$, a common system $\dot u_i=F_z(t,u_i)$ with $u_1(0)=u_2(0)$. The right side is smooth near $[0,1]\times Q$, so its derivative in $u$ has a finite bound $L$ there; integration along the straight segment in the convex set $Q$ gives $|F_z(t,u)-F_z(t,v)|\le L|u-v|$. If equality holds at the start $a$ of an interval $[a,b]$ with $L(b-a)<1$, the ordinary fundamental theorem of calculus implies $D\le L(b-a)D$, where $D=\max_{[a,b]}|u_1-u_2|$; hence $D=0$. A finite subdivision of $[0,1]$ into such intervals proves $u_1=u_2$ throughout (if $L=0$ one interval suffices). In particular $f_1(z)=f_2(z)$ and $Df_1(z)=Df_2(z)$ for every $z\in B$. Thus $x^{-1}(B)\subseteq A$, and $A$ is open. Only uniqueness of these already supplied smooth coordinate curves was proved; no selections of solutions are needed. [step 1.1, step 1.2, L1, algebra]

3.1 (Conclusion of (a).) $N$ is connected and $A$ is nonempty, open and closed by the preceding steps; hence $A=N$, which is the assertion of (a). [step 1.2, step 2.1, step 1.3, discharge-construct]

3.2 (The agreement set of (c).) Let $A\subseteq U_1\cap U_2$ be the set of points at which $\psi_1=\psi_2$ and $d\psi_1=d\psi_2$; on $j(\Sigma)$ the maps have equal values by [L5] and equal differentials by clause (b), so $\Sigma\subseteq A$. The set $A$ is open in $U_1\cap U_2$ by the argument of step 2.1 applied to coordinate balls contained in the open set $U_1\cap U_2$, and closed by the argument of step 1.3. [step 2.1, step 1.3, step 1.4, L5, algebra]

4.1 (Conclusion of (c).) Since $A$ is open and closed in $U_1\cap U_2$ and meets every component of $U_1\cap U_2$ by step 1.5, $A=U_1\cap U_2$; hence $\psi_1=\psi_2$ on $U_1\cap U_2$, which is clause (c). [step 3.2, step 1.5, algebra] ∎

## Remarks

Clause (a) is Sbierski's Lemma 3.1 and clause (c) his Corollary 3.2; the connectedness hypothesis of (a) is essential (on a disjoint union of three Minkowski copies, the identity and the isometry that fixes the first copy and exchanges the other two have equal value and differential at every point of the first copy but differ elsewhere). Clause (c) is what makes the patched map of [[lem-gr-maximal-common-development]] well defined on overlaps.
