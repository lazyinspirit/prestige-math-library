---
id: lem-gr-joint-exponential-diffeomorphism
kind: lemma
title: "The joint exponential map: smoothness, invertible differential at the diagonal, and the small-velocity two-point inverse"
status: published
origin: session
domain: mathematics
dependency_level: 9
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [thm-gr-local-geodesics-and-exponential-map, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-gr-metric-selected-connection, def-gr-smooth-lorentzian-objects, thm-smooth-inverse-function-theorem-on-manifolds, def-differential-of-a-smooth-map, thm-chain-rule-for-total-derivatives, def-c-r-and-smooth-maps-between-smooth-manifolds, def-christoffel-symbols-of-an-affine-connection, cor-vector-valued-ftc-and-lipschitz-bound, lem-coordinate-balls-form-a-basis-of-a-topological-manifold, def-smooth-manifold]
dependency_roles:
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  thm-smooth-inverse-function-theorem-on-manifolds: mathematical-premise
  def-differential-of-a-smooth-map: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
  cor-vector-valued-ftc-and-lipschitz-bound: mathematical-premise
  lem-coordinate-balls-form-a-basis-of-a-topological-manifold: mathematical-premise
  def-smooth-manifold: mathematical-premise
sources:
  references:
    - title: "E. Minguzzi, Lorentzian causality theory, Living Reviews in Relativity 22 (2019), article 3: normal neighborhoods (Definition 2.2 printed p. 26) and Theorem 2.4 with the joint exponential diffeomorphism onto pairs of nearby points (printed p. 26); Gauss' Lemma and the position vector (Definition 2.5, Theorem 2.6 printed pp. 26-27)"
      url: "https://inspirehep.net/files/7a575d682fd15aaad8463a778fac1609"
    - title: "P. T. Chrusciel, Elements of causality theory, arXiv:1110.6706 (2011): the exponential map and normal neighborhoods, sections 2.2-2.4"
      url: "https://arxiv.org/pdf/1110.6706"
verification:
  precheck: pass
---

## Statement

Let $(M,g,N)$ be a time-oriented smooth Lorentzian four-manifold with
metric-selected connection $\nabla$
([[def-gr-smooth-lorentzian-objects]],
[[def-gr-metric-selected-connection]],
[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]), and let
geodesics, their maximal domains $I_{q,v}$ and the exponential maps
$\exp_q$ be those of [[thm-gr-local-geodesics-and-exponential-map]]. Fix
$p\in M$. Write $\pi:TM\to M$ for the bundle projection.

**(a) Smoothness of the joint map.** The set
$$\mathcal D:=\{(q,v)\in TM:\ 1\in I_{q,v}\}\subseteq TM$$
is open in $TM$, and the **joint exponential map**
$$\Phi:\mathcal D\longrightarrow M\times M,\qquad \Phi(q,v):=(q,\exp_q v),$$
is smooth.

**(b) Differential at $(p,0)$.** The differential $d\Phi_{(p,0)}$ is an
isomorphism. Explicitly, fix a smooth chart $(U,x)$ around $p$; it induces
the chart $(TU,Tx)$ of $TM$ and the product chart $(U\times U,x\times x)$ of
$M\times M$, and under the induced identifications
$T_{(p,0)}(TM)\cong T_pM\oplus T_pM$ and
$T_{(p,p)}(M\times M)\cong T_pM\oplus T_pM$ one has
$$d\Phi_{(p,0)}(u,w)=(u,\ u+w)\qquad\text{for all }u,w\in T_pM .$$

**(c) Diffeomorphism and two-point inverse.** There are open neighborhoods
$V\subseteq\mathcal D$ of $(p,0)$ and $W\subseteq M\times M$ of $(p,p)$ such
that $\Phi|_V:V\to W$ is a diffeomorphism. Moreover $V$ can be chosen
product-like: there are a chart $(U,x)$ around $p$ with $x(p)=0$, a radius
$r>0$ and a velocity radius $\rho>0$ such that, writing $B_s:=\{y\in\mathbb
R^4:|y|_{\mathrm e}<s\}$,
$$V=\bigl\{(q,v):\ q\in x^{-1}(B_r),\ \text{the coordinate components of }v\text{ in }(TU,Tx)\text{ lie in }B_\rho\bigr\},$$
and there is $s\in(0,r)$ with $x^{-1}(\overline{B_s})\times x^{-1}(\overline{B_s})\subseteq W$.
Consequently the velocity map
$$v:W\longrightarrow TM,\qquad (q,r)\longmapsto v(q,r):=\text{the vector with }(q,v(q,r))\in V,\ \Phi(q,v(q,r))=(q,r),$$
is well defined and smooth, and $\exp_q\bigl(v(q,r)\bigr)=r$ for all
$(q,r)\in W$.

**(d) Lipschitz bound for the two-point inverse.** On every pair
$x^{-1}(B_s)\times x^{-1}(B_s)\subseteq W$ as in (c) there is a constant
$\Lambda\ge 0$ such that, for all $q,r\in x^{-1}(B_s)$,
$$|v(q,r)|_x\le\Lambda\,\bigl|x(q)-x(r)\bigr|_{\mathrm e},$$
where $|v|_x$ denotes the Euclidean norm of the coordinate components of
$v$ and $v(q,q)=0$. In particular $|v(q,r)|_x\le 2\Lambda s$ on this pair.

## Facts & Assumptions

**Given:** A time-oriented smooth Lorentzian four-manifold $(M,g,N)$ with metric-selected connection $\nabla$ and a point $p\in M$.

[L1] The set $\mathcal G=\{(t,q,v):t\in I_{q,v}\}$ is open in $\mathbb R\times TM$ and the evaluation map $(t,q,v)\mapsto\gamma_{q,v}(t)$ is smooth on $\mathcal G$; the maximal geodesic $\gamma_{q,v}$ is the unique geodesic with $\gamma_{q,v}(0)=q$, $\gamma_{q,v}'(0)=v$; scaling $\gamma_{q,sv}(t)=\gamma_{q,v}(st)$ holds; $\exp_q(0)=q$ and $d(\exp_q)_0=\operatorname{id}_{T_qM}$ under the canonical identification ([[thm-gr-local-geodesics-and-exponential-map]] clauses (a)-(d)).

[L2] A smooth map between smooth manifolds whose differential at a point is an isomorphism restricts to a diffeomorphism from an open neighborhood of that point onto an open neighborhood of its image ([[thm-smooth-inverse-function-theorem-on-manifolds]], [[def-differential-of-a-smooth-map]]).

[L3] The chain rule computes the differential of a composition of smooth maps, and in a chart the differential acts on the components by the Jacobian matrix ([[thm-chain-rule-for-total-derivatives]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[L4] Let $f:[a,b]\to\mathbb R^m$ be continuous and differentiable on $(a,b)$ with $\|f'(t)\|_2\le M$ there; then $\|f(t)-f(s)\|_2\le M|t-s|$ ([[cor-vector-valued-ftc-and-lipschitz-bound]] clause 2).

[L5] Translate the coordinates of any chart around $p$ so that $x(p)=0$. For such a centered chart, coordinate balls form a basis of the topology: if $O$ is open and $p\in O$ then $x^{-1}(B_s)\subseteq O$ for all sufficiently small $s>0$ ([[lem-coordinate-balls-form-a-basis-of-a-topological-manifold]]). Consequently an open neighborhood of $(p,p)$ in $M\times M$ contains $x^{-1}(B_s)\times x^{-1}(B_s)$ for some $s>0$.

## Proof

**Proof technique:** direct.

1.1 (Openness and smoothness of $\Phi$.) The set $\mathcal D=\{(q,v):(1,q,v)\in\mathcal G\}$ is the preimage of the open set $\mathcal G$ under the continuous map $(q,v)\mapsto(1,q,v)$; hence it is open in $TM$. The identity $\Phi(q,v)=(q,\gamma_{q,v}(1))$ exhibits $\Phi$ as the composition of the smooth map $(q,v)\mapsto(1,q,v)$ with the smooth evaluation of [L1] followed by the smooth map $(q,v)\mapsto(q,v)$; hence $\Phi$ is smooth, proving (a). [L1, L3, given]

1.2 (Coordinate form of $\Phi$ and its differential.) Fix a chart $(U,x)$ around $p$, translate it so that $x(p)=0$, and write $TU\cong x(U)\times\mathbb R^4$, so that a tangent vector $v\in T_qM$ with $q\in U$ has components $\eta\in\mathbb R^4$. The coordinate representative of $\Phi$ is $$(\xi,\eta)\longmapsto\bigl(\xi,\ e(\xi,\eta)\bigr),\qquad e(\xi,\eta):=x\bigl(\exp_{x^{-1}(\xi)}(\eta)\bigr).$$ By [L1], $e$ is smooth on its domain, and $e(\xi,0)=\xi$ for every $\xi$, so $\partial e/\partial\xi(0,0)=\mathrm{id}_{\mathbb R^4}$; and $\eta\mapsto e(0,\eta)=x(\exp_p(\eta))$ has derivative $\mathrm{id}_{\mathbb R^4}$ at $\eta=0$ by the identity $d(\exp_p)_0=\operatorname{id}_{T_pM}$ of [L1] read in the chart. Therefore the Jacobian matrix of the representative at $(0,0)$ is the block matrix $\begin{pmatrix}I&0\\ I&I\end{pmatrix}$, i.e., in the identifications of (b) $$d\Phi_{(p,0)}(u,w)=(u,u+w).$$ [L1, L3, given, algebra]

2.1 (Invertibility and the diffeomorphism.) The map $(u,w)\mapsto(u,u+w)$ is an isomorphism with inverse $(u,y)\mapsto(u,y-u)$; hence $d\Phi_{(p,0)}$ is an isomorphism, and [L2] gives open neighborhoods $V_0$ of $(p,0)$ and $W_0$ of $(p,p)$ with $\Phi|_{V_0}:V_0\to W_0$ a diffeomorphism. In the bundle chart $(TU,Tx)$, the open neighborhood $V_0$ contains an exact product $x^{-1}(B_{r_0})\times B_{\rho_0}$ for some $r_0,\rho_0>0$, where the second factor records coordinate components of the tangent vector. Also, by [L5] in the product chart, $W_0$ contains $x^{-1}(B_{s_0})\times x^{-1}(B_{s_0})$ for some $s_0>0$. [L2, L5, step 1.2, construct]

3.1 (Product-like shape of $V$.) Take the exact product $V:=x^{-1}(B_r)\times B_\rho\subseteq V_0$ with $0<r<r_0$ and $0<\rho<\rho_0$, and set $W:=\Phi(V)$. Since $\Phi|_{V_0}$ is a diffeomorphism and $V$ is open, $W$ is open and contains $(p,p)$. By [L5], choose $s>0$ small enough that $x^{-1}(\overline{B_s})\times x^{-1}(\overline{B_s})\subseteq W$ and $s<r$. Then the open product is also contained in $W$. The set $V$ has exactly the displayed product-like form, and $\Phi|_V:V\to W$ is a diffeomorphism. This proves the first two assertions of (c). [step 2.1, L5, construct]

4.1 (The two-point inverse.) Define $v(q,r)$ for $(q,r)\in W$ as the second component of $\Phi^{-1}(q,r)\in V$. Since $\Phi^{-1}$ is smooth and the projection to the second factor is smooth, $v$ is smooth. The identity $\Phi(q,v(q,r))=(q,r)$ unwinds to $\exp_q(v(q,r))=r$ and $(q,v(q,r))\in V$. For $q=r$ we get $\exp_q(v(q,q))=q=\exp_q(0)$ with $(q,v(q,q)),(q,0)\in V$ and $\Phi(q,v(q,q))=\Phi(q,0)=(q,q)$, so $v(q,q)=0$ by injectivity of $\Phi|_V$. This proves the remaining assertions of (c). [step 3.1, L1, construct]

5.1 (Lipschitz bound.) The closed product $x^{-1}(\overline{B_s})\times x^{-1}(\overline{B_s})$ is contained in $W$ by step 3.1. Let $M_0$ be the supremum of $\|Dv\|$ over its coordinate image $\overline{B_s}\times\overline{B_s}$, a compact convex set; it is finite because $v$ is smooth on the open set $W$. For fixed $q\in x^{-1}(B_s)$ and $r,r'\in x^{-1}(B_s)$, the straight coordinate segment from $x(r)$ to $x(r')$ lies in $B_s$, so [L4] applied to $t\mapsto v(q,x^{-1}(x(r)+t(x(r')-x(r))))$ gives $|v(q,r')-v(q,r)|_x\le M_0|x(r')-x(r)|_{\mathrm e}$. Taking $r=q$ and using $v(q,q)=0$ proves (d) with $\Lambda=M_0$; also $|x(q)-x(r)|_{\mathrm e}<2s$ gives $|v(q,r)|_x\le2\Lambda s$. This proves (d) and completes the proof. [step 4.1, step 3.1, L4, algebra] ∎

## Remarks

- **No metric completeness and no global surgery.** The statement is local near the diagonal of $M\times M$ and uses only that the geodesic flow is smooth and that $d(\exp_p)_0=\operatorname{id}$; no completeness, no conjugate-point theory and no global product structure of $M$ is used.

- **Conventions.** The vector $v(q,r)$ is the small initial velocity of the unique geodesic from $q$ to $r$ within the chosen domain $V$; a second geodesic from $q$ to $r$ may exist with initial velocity outside $V$ and is not excluded by this lemma. The chart components of $v$ are used only to state the product shape of $V$ and the Lipschitz bound; the map $v(q,r)$ itself is chart-independent.
