---
id: lem-affine-minkowski-charts-form-a-smooth-atlas
kind: lemma
title: "The affine atlas makes the Minkowski model a smooth 4-manifold diffeomorphic to R^4"
status: draft
origin: session
domain: mathematics
dependency_level: 6
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps: [def-sr-affine-minkowski-model, def-inertial-frame-and-inertial-chart, lem-future-oriented-inertial-frames-exist, def-topological-space, def-homeomorphism-and-open-maps, def-topological-manifold-without-boundary, def-smooth-atlas, def-smooth-manifold, def-diffeomorphism-and-local-diffeomorphism-of-manifolds, def-c-r-and-smooth-maps-between-smooth-manifolds, prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure, def-ck-and-multi-index-notation-in-several-variables, def-linear-isomorphism-and-invertible-linear-map, thm-algebra-of-total-derivatives, thm-continuous-partial-derivatives-imply-total-differentiability, def-hausdorff-space, def-second-countable-space, thm-metric-hausdorff-separation, thm-rational-points-and-boxes-in-rn, lem-product-topology-on-rn, def-manifold-chart-coordinate-domain-and-coordinate-functions, def-smoothly-compatible-charts, thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas, def-directional-and-partial-derivatives, cor-triangle-inequality-for-inner-product-norm]
dependency_roles:
  def-sr-affine-minkowski-model: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  lem-future-oriented-inertial-frames-exist: mathematical-premise
  def-topological-space: mathematical-premise
  def-homeomorphism-and-open-maps: mathematical-premise
  def-topological-manifold-without-boundary: mathematical-premise
  def-smooth-atlas: mathematical-premise
  def-smooth-manifold: mathematical-premise
  def-diffeomorphism-and-local-diffeomorphism-of-manifolds: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-linear-isomorphism-and-invertible-linear-map: mathematical-premise
  thm-algebra-of-total-derivatives: mathematical-premise
  thm-continuous-partial-derivatives-imply-total-differentiability: mathematical-premise
  def-hausdorff-space: mathematical-premise
  def-second-countable-space: mathematical-premise
  thm-metric-hausdorff-separation: mathematical-premise
  thm-rational-points-and-boxes-in-rn: mathematical-premise
  lem-product-topology-on-rn: mathematical-premise
  def-manifold-chart-coordinate-domain-and-coordinate-functions: mathematical-premise
  def-smoothly-compatible-charts: mathematical-premise
  thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  cor-triangle-inequality-for-inner-product-norm: mathematical-premise
justified_by: []
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 pp. 2-7 (PDF pp. 9-14)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 2.1-2.2 pp. 25-28 (PDF pp. 26-29); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Let $(A,V,\eta,C^+)$ be an oriented time-oriented affine Minkowski space and let
$x:A\to\mathbb R^4$ be one inertial chart. Give $A$ the **transported topology**
in which a set $U\subseteq A$ is open exactly when $x(U)$ is open in
$\mathbb R^4$; this is the unique topology making $x$ a homeomorphism onto
$\mathbb R^4$. Then:

1. $A$ is a Hausdorff, second-countable topological $4$-manifold.
2. The one-chart family $\{(A,x)\}$ is a smooth atlas, so $A$ is a smooth
   $4$-manifold, and $x$ is a diffeomorphism onto $\mathbb R^4$ carrying its
   standard smooth structure.
3. Every affine chart of $A$, that is, every map $y(p)=Mx(p)+b$ with $M$ an
   invertible $4\times4$ real matrix and $b\in\mathbb R^4$, and in particular
   every inertial chart, belongs to the same smooth structure, and its
   transition with $x$ is the smooth diffeomorphism $u\mapsto Mu+b$ of
   $\mathbb R^4$, with inverse $u\mapsto M^{-1}(u-b)$.
4. The transported topology and the smooth structure do not depend on the choice
   of the initial inertial chart $x$.

## Facts & Assumptions

**Given:** An oriented time-oriented affine Minkowski space $(A,V,\eta,C^+)$ and an inertial chart $x:A\to\mathbb R^4$, with $A$ carrying the transported topology.

[L1] The inertial chart is $x(p)=E^{-1}(p-o)$ for an inertial frame $(o;e_0,e_1,e_2,e_3)$, it is a bijection $A\to\mathbb R^4$, and for another inertial frame with chart $x'$ one has $x'=M^{-1}(x-x(o'))$ for the change-of-basis matrix $M$ between the two ordered bases ([[def-inertial-frame-and-inertial-chart]]).

[L2] A homeomorphism is a continuous bijection whose inverse is continuous; a bijection $f$ is continuous exactly when $f^{-1}(V)$ is open for every open $V$, and $f^{-1}$ is continuous exactly when $f(U)$ is open for every open $U$ ([[def-homeomorphism-and-open-maps]]).

[L3] A topology is a family of open sets containing $\varnothing$ and $X$ and closed under arbitrary unions and finite intersections; the whole space is open ([[def-topological-space]]).

[L4] A topological $n$-manifold is a topological space that is Hausdorff, second countable and locally Euclidean of dimension $n$ ([[def-topological-manifold-without-boundary]]).

[L5] A space is Hausdorff when distinct points have disjoint open neighbourhoods ([[def-hausdorff-space]]).

[L6] In a metric space distinct points $p\ne q$ satisfy $B(p,d(p,q)/2)\cap B(q,d(p,q)/2)=\varnothing$, so every metric space is Hausdorff ([[thm-metric-hausdorff-separation]]).

[L7] $\mathbb R^n$ with its product topology is the metric topology of $d_\infty$ and is metrizable ([[lem-product-topology-on-rn]], claim 3).

[L8] For $n\ge1$ the rational open boxes form a countable basis for the product topology on $\mathbb R^n$ ([[thm-rational-points-and-boxes-in-rn]]).

[L9] A space is second countable when its topology has an at most countable basis, that is, an at most countable family such that every open set is a union of members of the family ([[def-second-countable-space]]).

[L10] A chart on a topological $n$-manifold is a pair $(U,\varphi)$ with $U$ open and $\varphi:U\to\varphi(U)$ a homeomorphism onto an open subset of $\mathbb R^n$ ([[def-manifold-chart-coordinate-domain-and-coordinate-functions]]).

[L11] Charts $(U,\varphi)$, $(V,\psi)$ are smoothly compatible when $U\cap V=\varnothing$ or both transition maps $\psi\circ\varphi^{-1}$ and $\varphi\circ\psi^{-1}$ are smooth, a map between open subsets of Euclidean spaces being smooth when every component is of class $C^k$ for every $k$ ([[def-smoothly-compatible-charts]]).

[L12] A smooth atlas on a topological manifold is a covering family of pairwise smoothly compatible charts; a smooth structure is a maximal smooth atlas, and a smooth manifold is a topological manifold with a smooth structure ([[def-smooth-atlas]], [[def-smooth-manifold]]).

[L13] Every smooth atlas is contained in exactly one maximal smooth atlas, its generated structure; two atlases generate the same structure if and only if their union is a smooth atlas ([[thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas]]).

[L14] A scalar map is of class $C^k$ when every iterated coordinate partial derivative through order $k$ exists and is continuous ([[def-ck-and-multi-index-notation-in-several-variables]]); the $j$-th partial derivative is the directional derivative in the direction of the $j$-th standard basis vector ([[def-directional-and-partial-derivatives]]).

[L15] The function induced by an inner product satisfies $\lVert v\rVert\ge0$, $\lVert v\rVert=0$ if and only if $v=0$, $\lVert\lambda v\rVert=|\lambda|\lVert v\rVert$ and $\lVert u+v\rVert\le\lVert u\rVert+\lVert v\rVert$ ([[cor-triangle-inequality-for-inner-product-norm]]).

[L16] An invertible linear map $T:V\to W$ has a unique inverse linear map $T^{-1}$ and the two are mutually inverse bijections ([[def-linear-isomorphism-and-invertible-linear-map]]).

[L17] An open subset $W\subseteq\mathbb R^n$, $n\ge1$, is a smooth $n$-manifold with the standard smooth structure generated by the one-chart atlas $\{(W,\mathrm{id}_W)\}$ ([[prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure]]).

[L18] A diffeomorphism of smooth manifolds is a bijective smooth map whose inverse is smooth; smoothness of a map between smooth manifolds is smoothness of its coordinate representatives ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

## Proof

1.1 The chart $x$ is a bijection $A\to\mathbb R^4$ by [L1]. Its preimages of Euclidean open sets form a topology: preimages preserve arbitrary unions and finite intersections and carry $\varnothing,\mathbb R^4$ to $\varnothing,A$, respectively, so [L3] applies. By the definition of this transported topology $x^{-1}(V)$ is open in $A$ for every open $V\subseteq\mathbb R^4$ while $(x^{-1})^{-1}(U)=x(U)$ is open in $\mathbb R^4$ for every open $U\subseteq A$; hence $x$ and $x^{-1}$ are continuous by [L2], so $x$ is a homeomorphism [L2], and the transported topology is the unique topology for which this holds, its open sets being exactly the preimages of the open sets of $\mathbb R^4$ [L2, L3]. [L1, L2, L3]

1.2 Let $N$ be an invertible real $4\times4$ matrix and $c\in\mathbb R^4$, and put $g(u):=Nu+c$. Then $g$ is a bijection of $\mathbb R^4$ with inverse $g^{-1}(w)=N^{-1}(w-c)$ by [L16]. Each component is $g_l(u)=\sum_jN_{lj}u_j+c_l$; by the definition of the partial derivative [L14], $\partial_jg_l(a)=N_{lj}$ for every $a$, a constant function, and every iterated partial derivative of order at least $2$ is the partial derivative of a constant, hence exists and equals $0$; therefore each component is of class $C^k$ for every $k$ by [L14], so $g$ is smooth by [L11]. Moreover $g$ and $g^{-1}$ are continuous: $\lvert(Nx)_l\rvert\le(\max_j\lvert x_j\rvert)\sum_j\lvert N_{lj}\rvert\le\lVert x\rVert_2\sum_j\lvert N_{lj}\rvert$ by [L15], so $\lVert g(u)-g(v)\rVert_2=\lVert N(u-v)\rVert_2\le K_N\lVert u-v\rVert_2$ with $K_N:=\bigl(\sum_l(\sum_j\lvert N_{lj}\rvert)^2\bigr)^{1/2}$, which is the Lipschitz condition giving the $\varepsilon$-$\delta$ definition of continuity, and the same estimate with $N^{-1}$ in place of $N$ applies to $g^{-1}$. [L11, L14, L15, L16, algebra]

2.1 $\mathbb R^4$ with its standard topology is metrizable by [L7], so distinct points of $\mathbb R^4$ have disjoint open neighbourhoods by [L6]. For $p\ne q$ in $A$ the points $x(p)\ne x(q)$ are distinct because $x$ is injective by step 1.1; choosing disjoint open sets $V\ni x(p)$ and $W\ni x(q)$ in $\mathbb R^4$, the preimages $x^{-1}(V)$ and $x^{-1}(W)$ are open in $A$ by step 1.1 and are disjoint, so $A$ is Hausdorff by [L5]. [step 1.1, L5, L6, L7]

2.2 The rational open boxes form a countable basis $\mathcal B$ of $\mathbb R^4$ by [L8]. The family $\{x^{-1}(B):B\in\mathcal B\}$ is countable and consists of open subsets of $A$ by step 1.1; and it is a basis for the transported topology: if $U\subseteq A$ is open, then $x(U)$ is open in $\mathbb R^4$ by step 1.1 and equals the union of the members of $\mathcal B$ contained in it, so $U$ is the union of the corresponding sets $x^{-1}(B)$, each open in $A$. Hence $A$ is second countable by [L9]. [step 1.1, L8, L9]

2.3 Let $y(p)=Mx(p)+b$ with $M$ invertible and $b\in\mathbb R^4$, and put $g(u):=Mu+b$. Then $y=g\circ x$ is a bijection $A\to\mathbb R^4$ by steps 1.1 and 1.2; it is continuous because for open $V\subseteq\mathbb R^4$ the preimage $y^{-1}(V)=x^{-1}(g^{-1}(V))$ is open in $A$ by steps 1.1 and 1.2; and $y^{-1}$ is continuous because for open $U\subseteq A$ its preimage under $y^{-1}$ is $y(U)=g(x(U))$, open in $\mathbb R^4$ by steps 1.1 and 1.2. Thus $y$ is a homeomorphism onto $\mathbb R^4$. [step 1.1, step 1.2, L10]

2.4 Let $(o';e'_0,e'_1,e'_2,e'_3)$ be another inertial frame with chart $x'$. By the transition law of [L1], $x'=M^{-1}\bigl(x-x(o')\bigr)=M^{-1}x+b$ with $b:=-M^{-1}x(o')$, where $M$ is the change-of-basis matrix between the two ordered bases and $M^{-1}$ is invertible because both families are ordered bases; this exhibits $x'$ as an affine chart with invertible linear part $M^{-1}$ in the sense of the affine maps of step 1.2. [step 1.2, L1]

3.1 By step 2.1 the space $A$ is Hausdorff and by step 2.2 it is second countable. It is locally Euclidean of dimension $4$: for every $p\in A$ the whole space $A$ is an open neighbourhood of $p$ by [L3], and $x:A\to\mathbb R^4$ is a homeomorphism onto the open subset $\mathbb R^4\subseteq\mathbb R^4$ by step 1.1. Hence $A$ is a topological $4$-manifold by [L4], proving claim 1; the homeomorphisms $x$ and $y$ established in steps 1.1 and 2.3 are therefore charts by [L10]. [step 1.1, step 2.1, step 2.2, step 2.3, L3, L4, L10]

3.2 The transition map between the charts $(A,x)$ and $(A,y)$ of step 2.3 is $y\circ x^{-1}=g$, and its inverse transition is $x\circ y^{-1}=g^{-1}$; by step 1.2 both are smooth, so the two charts are smoothly compatible by [L11]. [step 1.2, step 2.3, L11]

3.3 Let $x'$ be another inertial chart, written $x'=g'\circ x$ with $g'$ an affine map of $\mathbb R^4$ with invertible linear part by step 2.4. For a subset $U\subseteq A$, openness in the topology transported by $x'$ means that $x'(U)=g'(x(U))$ is open in $\mathbb R^4$, which by step 1.2 (a homeomorphism maps open sets to open sets and reflects them) is equivalent to $x(U)$ being open in $\mathbb R^4$, that is, to $U$ being open in the topology transported by $x$ by step 1.1. Hence the two transported topologies coincide. [step 1.1, step 1.2, step 2.4]

4.1 The pair $(A,x)$ is a chart by steps 1.1 and [L10]; the one-chart family $\{(A,x)\}$ covers $A$ and its sole transition $x\circ x^{-1}=\mathrm{id}_{\mathbb R^4}$ is smooth by step 1.2, so it is a smooth atlas by [L12]; the maximal smooth atlas it generates exists and is unique by [L13], and $A$ with this smooth structure is a smooth $4$-manifold by [L12]. [step 1.1, step 1.2, step 3.1, L10, L12, L13]

5.1 Every affine chart $y=Mx+b$ is smoothly compatible with the chart $(A,x)$ by step 3.2, and every inertial chart is an affine chart by step 2.4; hence each of these charts belongs to the smooth structure generated by the atlas $\{(A,x)\}$ of step 4.1, by the criterion of [L13] that two one-chart atlases generate the same structure exactly when their union is a smooth atlas. [step 2.4, step 3.2, step 4.1, L13]

5.2 $\mathbb R^4$ is an open subset of itself and carries the standard smooth structure generated by the one-chart atlas $\{(\mathbb R^4,\mathrm{id})\}$ by [L17]. With respect to the charts $(A,x)$ of step 4.1 and $(\mathbb R^4,\mathrm{id})$, the coordinate representative of $x$ is $\mathrm{id}\circ x\circ x^{-1}=\mathrm{id}_{\mathbb R^4}$ and the representative of $x^{-1}$ is likewise $\mathrm{id}_{\mathbb R^4}$; the identity of $\mathbb R^4$ has components $u_l$ whose partial derivatives are the constants $\delta_{lj}$ with all higher iterated partial derivatives $0$, so it is smooth by [L14] and [L11]. Hence $x$ is a smooth bijection with smooth inverse, that is, a diffeomorphism $A\to\mathbb R^4$ by [L18], proving claim 2. [step 1.1, step 3.1, step 4.1, L11, L14, L17, L18]

6.1 The smooth structures generated by the one-chart atlases $\{(A,x)\}$ and $\{(A,x')\}$ of two inertial charts coincide: by step 2.4 and step 5.1 the chart $x'$ is smoothly compatible with $x$, so the union of the two one-chart atlases is a smooth atlas and [L13] gives equality of the generated maximal atlases; combined with step 3.3 this proves claim 3 for the transition and claim 4. [step 2.4, step 3.3, step 5.1, L13, algebra] ∎
