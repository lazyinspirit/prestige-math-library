---
id: lem-em-boundary-of-a-bounded-smooth-domain-is-a-compact-embedded-hypersurface
kind: lemma
title: "The boundary of a bounded smooth domain is a compact embedded hypersurface"
status: draft
origin: session
dependency_level: 0
domain: mathematics
deps: [def-bounded-c-k-domain-and-boundary-charts, def-bounded-c-one-domain-boundary-charts-and-outward-normal, def-surface-integral-on-a-compact-c-one-hypersurface, lem-surface-integral-is-independent-of-c-one-boundary-charts, def-metric-interior-closure-boundary, def-metric-topology, def-metric-compactness, def-metric-space, def-metric-ball, def-metric-bounded-diameter, def-metric-continuity, thm-metric-closure-characterisation, thm-heine-borel-rn, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm, def-norm-and-normed-space, lem-metrics-on-rn, lem-standard-basis-of-f-n, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, cor-rn-is-polygonally-connected-and-locally-path-connected, thm-path-connected-implies-connected, thm-continuous-image-of-a-connected-space, thm-connectedness-characterisations, def-connected-component-and-quasicomponent, thm-components-partition-and-are-closed, def-locally-connected, thm-unions-of-connected-sets, def-ck-euclidean-maps-and-diffeomorphisms, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, thm-total-differentiability-gives-a-local-linear-bound-and-continuity, def-linear-isometry-and-orthogonal-or-unitary-operator, lem-finite-ambient-partitions-for-euclidean-boundary-integration, lem-euclidean-balls-are-bounded-c-one-domains, def-euclidean-spheres-and-closed-balls, thm-real-power-continuity-and-derivatives, def-countable-choice, lem-compactness-is-intrinsic, thm-metric-open-set-algebra]
dependency_roles:
  thm-metric-open-set-algebra: mathematical-premise
  lem-compactness-is-intrinsic: mathematical-premise
  def-bounded-c-k-domain-and-boundary-charts: mathematical-premise
  def-bounded-c-one-domain-boundary-charts-and-outward-normal: mathematical-premise
  def-surface-integral-on-a-compact-c-one-hypersurface: mathematical-premise
  lem-surface-integral-is-independent-of-c-one-boundary-charts: mathematical-premise
  def-metric-interior-closure-boundary: mathematical-premise
  def-metric-topology: mathematical-premise
  def-metric-compactness: mathematical-premise
  def-metric-space: mathematical-premise
  def-metric-ball: mathematical-premise
  def-metric-bounded-diameter: mathematical-premise
  def-metric-continuity: mathematical-premise
  thm-metric-closure-characterisation: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  def-norm-and-normed-space: mathematical-premise
  lem-metrics-on-rn: mathematical-premise
  lem-standard-basis-of-f-n: mathematical-premise
  lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric: mathematical-premise
  cor-rn-is-polygonally-connected-and-locally-path-connected: mathematical-premise
  thm-path-connected-implies-connected: mathematical-premise
  thm-continuous-image-of-a-connected-space: mathematical-premise
  thm-connectedness-characterisations: mathematical-premise
  def-connected-component-and-quasicomponent: mathematical-premise
  thm-components-partition-and-are-closed: mathematical-premise
  def-locally-connected: mathematical-premise
  thm-unions-of-connected-sets: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-total-differentiability-gives-a-local-linear-bound-and-continuity: mathematical-premise
  def-linear-isometry-and-orthogonal-or-unitary-operator: mathematical-premise
  lem-finite-ambient-partitions-for-euclidean-boundary-integration: mathematical-premise
  lem-euclidean-balls-are-bounded-c-one-domains: mathematical-premise
  def-euclidean-spheres-and-closed-balls: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: Richard S. Laugesen, Linear Analysis and Partial Differential Equations (2020)
      url: https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf
      locator: "Chapter 3 §3.4, Definition 3.10, printed p. 59 (bounded C^k domains and boundary charts)."
    - title: John K. Hunter, Notes on Partial Differential Equations (University of California, Davis, 2014)
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "§1.10 Definitions 1.34-1.35 and §1.10.3, printed pp. 13-16 (boundary charts, outward normals and surface integration conventions); §1.10.2 printed p. 15 (the Gram surface density)."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$), the convention of the boundary-chart and surface-measure interfaces cited below ([[def-countable-choice]]); no other choice principle is used. Let $k\ge1$ and let $D\subset\mathbb R^3$ be a bounded $C^k$ domain in the sense of [[def-bounded-c-k-domain-and-boundary-charts]] (nonempty, bounded, open, and locally exactly the one-sided subgraph of a $C^k$ graph function over a hyperplane). Then:

(a) [Compactness and finiteness] $\partial D$ is nonempty and compact; the complement $\mathbb R^3\setminus\partial D$ need not be connected here. Moreover $\partial D$ has finitely many connected components, and each connected component of $\partial D$ is compact.

(b) [Finite embedded presentation] the local boundary charts give finitely many regular injective $C^k$ parametrisations of $\partial D$ with $C^k$ coordinate transitions, of the graph type required by [[def-surface-integral-on-a-compact-c-one-hypersurface]]: writing a chart as $R(p)=(y,s)$, the graph map $y\mapsto R^{-1}(y,h(y))$ is injective, of class $C^k$, with $C^k$ inverse (the inverse is $p\mapsto\pi(R(p))$ restricted to the graph, where $\pi(y,s)=y$); consequently $\partial D$ is a compact embedded $C^k$ hypersurface, and for $k\ge1$ it carries the finite surface measure of [[def-surface-integral-on-a-compact-c-one-hypersurface]] and [[lem-surface-integral-is-independent-of-c-one-boundary-charts]].

(c) [Normal field] the outward unit normal $\nu$ of [[def-bounded-c-one-domain-boundary-charts-and-outward-normal]] is a continuous unit normal field on $\partial D$, with $\nu(x)$ orthogonal to the tangent plane of the graph chart at each $x$; it is the field used by the Green and divergence items cited by this page's consumers.

The statement is geometric: it asserts no differentiability of $D$ beyond $C^k$, no boundedness of chart derivatives beyond the compact patches, and no connectedness of either $D$ or $\partial D$.

## Facts & Assumptions


**Given:** Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $k\ge1$ and let $D\subset\mathbb R^3$ be a bounded $C^k$ domain; write $\partial D$ for its metric boundary ([[def-metric-interior-closure-boundary]]) and use the Euclidean metric $d_2$ with induced norm $\lVert\cdot\rVert_2$ on $\mathbb R^3$ ([[lem-metrics-on-rn]], [[def-euclidean-inner-product]], [[thm-cauchy-schwarz-and-the-euclidean-norm]]).

[F1] The chart property: for every $x\in\partial D$ there are an open $W\subseteq\mathbb R^3$ with $x\in W$, a rigid motion $R(p)=Qp+b$ with orthogonal $Q$, an open ball $B\subseteq\mathbb R^2$ and $h\in C^k(B;\mathbb R)$ with $R(D\cap W)=R(W)\cap\{(y,s):s<h(y)\}$; in particular $\partial D\cap W=R^{-1}(\{(y,s):s=h(y)\}\cap R(W))$ ([[def-bounded-c-k-domain-and-boundary-charts]]). Shrinking $W$ preserves this identity.

[F2] In such coordinates the outward normal is $\nu=(-Dh(y),1)/\sqrt{1+\lvert Dh(y)\rvert^2}$ transported back to ambient coordinates by the inverse orthogonal map $Q^{\mathsf T}$, and it agrees on chart overlaps ([[def-bounded-c-one-domain-boundary-charts-and-outward-normal]], [[lem-surface-integral-is-independent-of-c-one-boundary-charts]]).

[F3] Surface integration on a compact embedded $C^1$ hypersurface is built from finitely many regular injective $C^1$ parametrisations with $C^1$ transitions and an ambient partition subordinate to the chart neighbourhoods ([[def-surface-integral-on-a-compact-c-one-hypersurface]]).

[F4] For any compact Euclidean set covered by finitely many open sets $U_j$ there are smooth nonnegative $\chi_j$ with compact support in $U_j$ and $\sum_j\chi_j=1$ on a neighbourhood of the set ([[lem-finite-ambient-partitions-for-euclidean-boundary-integration]]).

[F5] The chart integral of [F3] defines a finite Borel measure independent of charts and partitions; in graph coordinates its density is $\sqrt{1+\lvert Dh\rvert^2}$; on a one-sided domain boundary the outward unit normal of [F2] is continuous ([[lem-surface-integral-is-independent-of-c-one-boundary-charts]]).

[F6] Metric boundary, interior and closure: $\partial A=\overline A\setminus\operatorname{int}(A)$, $\operatorname{int}(A)\subseteq A\subseteq\overline A$, every ball about an adherent point meets $A$, and $\operatorname{int}(A)$ is open ([[def-metric-interior-closure-boundary]]).

[F7] A set is closed exactly when its complement is open ([[def-metric-topology]]). Arbitrary unions and finite intersections of open sets are open ([[thm-metric-open-set-algebra]]); by taking complements and applying De Morgan's laws, arbitrary intersections and finite unions of closed sets are closed. Complements interchange open and closed sets.

[F8] $\overline A$ is closed, contains $A$, and is contained in every closed superset of $A$; $A$ is closed if and only if $A=\overline A$ ([[thm-metric-closure-characterisation]]).

[F9] A subset of $\mathbb R^n$ is compact exactly when it is closed and bounded ([[def-metric-compactness]], [[thm-heine-borel-rn]]). For a compact subset, an ambient open cover has a finite subcover by [[lem-compactness-is-intrinsic]].

[F10] $A$ is bounded when $A\subseteq B(x_0,r)$ for some $x_0$ and $r>0$, where $B(x_0,r)=\{y:d_2(y,x_0)<r\}$; distances satisfy the triangle inequality ([[def-metric-bounded-diameter]], [[def-metric-ball]], [[def-metric-space]]).

[F11] $\mathbb R^3$ is polygonally connected and connected, and every path-connected space is connected ([[cor-rn-is-polygonally-connected-and-locally-path-connected]], [[thm-path-connected-implies-connected]]).

[F12] A continuous image of a connected space is connected ([[thm-continuous-image-of-a-connected-space]]).

[F13] The only clopen subsets of a connected space are the empty set and the whole space ([[thm-connectedness-characterisations]]).

[F14] Components are nonempty, pairwise disjoint, cover the space, are maximal connected sets, and are closed ([[def-connected-component-and-quasicomponent]], [[thm-components-partition-and-are-closed]]).

[F15] A union of connected sets with a common point is connected ([[thm-unions-of-connected-sets]]).

[F16] Local connectedness at $x$ means that every open neighbourhood of $x$ contains an open connected neighbourhood of $x$; a set that is locally connected at each of its points is locally connected ([[def-locally-connected]]).

[F17] $C^k$ maps between open Euclidean sets, their composition rule, the chain rule, and the algebra of derivatives; $C^k$ means all partial derivatives through order $k$ exist and are continuous, and total differentiability implies continuity ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[thm-chain-rule-for-total-derivatives]], [[thm-algebra-of-derivatives]], [[thm-total-differentiability-gives-a-local-linear-bound-and-continuity]]).

[F18] The Euclidean norm is a norm inducing $d_2$, so it is homogeneous and satisfies the triangle inequality; orthogonal maps are invertible linear isometries and preserve norms and distances, hence are continuous in both directions ([[thm-cauchy-schwarz-and-the-euclidean-norm]], [[def-norm-and-normed-space]], [[def-linear-isometry-and-orthogonal-or-unitary-operator]], [[def-metric-continuity]]).

[F19] Every norm on $\mathbb R^n$ is continuous for $d_2$, and here the coordinate basis is labelled from one: $e_j=e_{j-1}^{\mathrm{can}}$ for $j=1,2,3$. Thus $e_1$ denotes the first coordinate vector, with $\lVert e_1\rVert_2=1$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]], [[lem-standard-basis-of-f-n]]).

[F20] The open ball $B_R(a)\subseteq\mathbb R^n$, $n\ge2$, is a bounded $C^1$ domain with boundary the Euclidean sphere $S_R(a)$; the local graph function $h(w)=\sqrt{R^2-\lvert w\rvert^2}-R$ is $C^\infty$ on $\lvert w\rvert<R$, by iterated differentiation of the real power $s\mapsto s^{1/2}$ on $(0,\infty)$ ([[thm-real-power-continuity-and-derivatives]]) composed with the polynomial $R^2-\lvert w\rvert^2$ ([[lem-euclidean-balls-are-bounded-c-one-domains]], [[def-euclidean-spheres-and-closed-balls]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

## Proof

**Proof technique:** direct.

1.1 $\partial D$ is closed. By [F6], $\partial D=\overline D\setminus\operatorname{int}(D)=\overline D\cap(\mathbb R^3\setminus\operatorname{int}(D))$, an intersection of the closed set $\overline D$ [F8] with the complement of the open set $\operatorname{int}(D)$ [F6], hence closed [F7]. [F6, F7, F8]

1.2 $\partial D$ is bounded. Since $D$ is bounded, fix $x_0\in\mathbb R^3$ and $r>0$ with $D\subseteq B(x_0,r)$ [F10]. Let $x\in\overline D$. By [F6] the ball $B(x,1)$ meets $D$, so there is $y\in D$ with $d_2(x,y)<1$; then $d_2(y,x_0)<r$ and the triangle inequality gives $d_2(x,x_0)\le d_2(x,y)+d_2(y,x_0)<1+r$ [F10]. Hence $\overline D\subseteq B(x_0,1+r)$ is bounded, and $\partial D\subseteq\overline D$ is bounded [F10, F6]. [F6, F10]

1.3 Chart patches. Let $x\in\partial D$ and let $G$ be an open neighbourhood of $x$ in $\mathbb R^3$. Apply [F1] to get $W$, $R$, $B$, $h$ with the chart identity; replacing $W$ by the open set $W\cap G$ preserves it [F1], so assume $W\subseteq G$. Write $R(p)=(y,s)$, $\pi(y,s)=y$, put $y_x:=\pi(R(x))$, and set $B'':=\pi\bigl(R(W)\cap\{(y,s):s=h(y)\}\bigr)$. This is an open subset of $B$ containing $y_x$: the set $R(W)\cap\{s=h(y)\}$ is relatively open in the graph $\Gamma=\{(y,h(y)):y\in B\}$, and $\pi|_\Gamma:\Gamma\to B$ is a homeomorphism: its inverse $y\mapsto(y,h(y))$ and the projection are continuous by [F17], so its image is open; and $y_x\in B''$ because $x\in\partial D\cap W$ maps to a point of the graph [F1]. Define $X:B''\to\mathbb R^3$, $X(y):=R^{-1}(y,h(y))$. Then $X(B'')=\partial D\cap W$: every $X(y)$ lies in $\partial D\cap W$ by [F1], and conversely for $p\in\partial D\cap W$ the point $R(p)\in R(W)$ has $s=h(y)$ [F1], so $\pi(R(p))\in B''$ and $X(\pi(R(p)))=R^{-1}(y,h(y))=R^{-1}(R(p))=p$. Moreover $X$ is injective with inverse $\pi\circ R$ restricted to $X(B'')$, because $\pi(R(X(y)))=y$ and $X(\pi(R(p)))=p$ for $p=X(y)$. [F1, F17, given]

2.1 $\partial D\ne\varnothing$. Suppose $\partial D=\varnothing$. Then $\overline D\subseteq\operatorname{int}(D)$ by [F6], and since $\operatorname{int}(D)\subseteq D\subseteq\overline D$ [F6] we get $D=\overline D$, so $D$ is closed [F8] as well as open; that is, $D$ is clopen, and $D\ne\varnothing$ by hypothesis. Moreover $D\ne\mathbb R^3$: if $D=\mathbb R^3$ then $\mathbb R^3=D\subseteq B(x_0,r)$ for the ball of step 1.2, but the point $w:=x_0+(r+1)e_1$ satisfies $d_2(w,x_0)=\lVert (r+1)e_1\rVert_2=(r+1)\lVert e_1\rVert_2=r+1>r$, so $w\in\mathbb R^3\setminus B(x_0,r)$ [F18, F19]. Thus $D$ is a proper nonempty clopen subset of the connected space $\mathbb R^3$ [F11], contradicting [F13]. Hence $\partial D\ne\varnothing$. [F6, F8, F10, F11, F13, F18, F19, step 1.2]

2.2 $\partial D$ is compact by [F9], being closed [step 1.1] and bounded [step 1.2]. [F9, step 1.1, step 1.2]

2.3 $X$ is of class $C^k$, regular, and its inverse is $C^k$. The map $g(y):=(y,h(y))$ has components the coordinate functions and $h$, all $C^k$, so $g$ is $C^k$ with all partial derivatives continuous [F17]; $R^{-1}(z)=Q^{\mathsf T}(z-b)$ is affine with orthogonal linear part, hence $C^\infty$, continuous, with continuous inverse [F18]. By the chain rule $X=R^{-1}\circ g$ is $C^k$, hence continuous, with $DX(y)=Q^{\mathsf T}\circ Dg(y)$ [F17]. The differential $Dg(y)$ has first two rows the identity, hence is injective, and $Q^{\mathsf T}$ is invertible, so $DX(y)$ is injective at every $y$; thus $X$ is a regular injective parametrisation, regularity being exactly the injectivity of $DX(y)$ just proved. The inverse $\pi\circ R|_{X(B'')}$ is the restriction of the continuous map $\pi\circ R$ [F18] and is continuous at every point of $X(B'')$; so $X$ is a homeomorphism onto $X(B'')$. [F17, F18, step 1.3]

3.1 Connected sub-patches. Let $B_1$ be an open ball with $y_x\in B_1$ and $\overline{B_1}\subseteq B''$, and put $O_1:=W\cap R^{-1}(B_1\times\mathbb R)$, an open neighbourhood of $x$. Then $X(B_1)=\partial D\cap O_1$: the inclusion $\subseteq$ is [step 1.3] with $y\in B_1\subseteq B''$; conversely $p\in\partial D\cap O_1$ has $\pi(R(p))\in B''\cap B_1=B_1$ [step 1.3]; this set is relatively open in $\partial D$ because $O_1$ is open in $\mathbb R^3$ [F7]. The ball $B_1$ is path-connected: for $u,v\in B_1$ and $t\in[0,1]$ the triangle inequality and homogeneity of the norm give $\lVert(1-t)u+tv-y_x\rVert_2\le(1-t)\lVert u-y_x\rVert_2+t\lVert v-y_x\rVert_2<(1-t)\rho+t\rho=\rho$ when $B_1=B(y_x,\rho)$, so the segment $t\mapsto(1-t)u+tv$ stays in $B_1$ [F18]; thus $B_1$ is path-connected, hence connected [F11]. As the continuous image of $B_1$ under $X$ [step 2.3] the set $X(B_1)$ is connected [F12]. Since $B_1$ can be chosen with arbitrarily small radius, $\partial D$ is locally connected [F16]. [F7, F11, F12, F16, F18, step 1.3, step 2.3]

3.2 The normal field. In the coordinates of [step 1.3] the vector $(-Dh_j(y),1)$ is orthogonal to every tangent column $(e_i,\partial_i h_j(y))$ of [step 2.3] because $- (\partial_i h_j)(y)+(\partial_i h_j)(y)=0$, and it is nonzero, so $(-Dh_j,1)/\sqrt{1+\lvert Dh_j\rvert^2}$ is a unit normal field of the graph; by [F2] it is the prescribed outward normal $\nu$, transported back by $Q_j^{\mathsf T}$. Since $h_j$ is $C^k$ with $k\ge1$, $Dh_j$ is continuous, and the norm of $(-Dh_j(y),1)$ is $\sqrt{1+\lvert Dh_j(y)\rvert^2}\ge1$, so $y\mapsto\nu(X_j(y))$ is continuous as a composition of continuous maps on each patch [F17, F19]; by [F5] the field $\nu$ is defined consistently on overlaps and is continuous on all of $\partial D$. This proves (c). [F2, F5, F17, F19, step 1.3, step 2.3]

4.1 Components are open. Let $C$ be a connected component of $\partial D$ [F14] and let $x\in C$. By [step 3.1] and [F16] applied to the open set $\partial D$ itself, there is a connected open-in-$\partial D$ set $V$ with $x\in V$. Then $V\cup C$ is connected [F15], contains $x$, and contains the maximal connected set $C$ [F14], so $V\cup C=C$, i.e. $V\subseteq C$. Hence every point of $C$ has a neighbourhood contained in $C$, so $C$ is open in $\partial D$ [F7]. [F7, F14, F15, step 3.1]

4.2 Finite embedded presentation. The family of all open balls $B_1$ with $\overline{B_1}\subseteq B''$ for charts of [step 1.3] over all $x\in\partial D$ produces open sets $O_1=W\cap R^{-1}(B_1\times\mathbb R)$ whose patches $X(B_1)=\partial D\cap O_1$ [step 3.1] cover $\partial D$; compactness [step 2.2] gives a finite subcover $O_1,\dots,O_N$ with parametrisations $X_j:B_{1,j}\to\partial D\cap O_j$, each regular, injective and $C^k$ [step 2.3] with connected open parameter balls. Let $T:=X_\ell^{-1}\circ X_j$ be a transition, defined on the open set $X_j^{-1}(\partial D\cap O_j\cap O_\ell)\subseteq B_{1,j}$: it is a composition of the homeomorphisms of [step 1.3] and [step 2.3], hence a bijection onto its image, and it is given by $T(y)=\pi(R_\ell(R_j^{-1}(y,h_j(y))))$, a composition of affine $C^\infty$ maps with the $C^k$ map $g_j(y)=(y,h_j(y))$ and the linear projection $\pi$; so $T$ is $C^k$ with $C^k$ inverse $X_j^{-1}\circ X_\ell$ [F17]. With $K:=\partial D$ and the finitely many open sets $O_j$ covering it, [F4] supplies smooth $\chi_j$ with compact support in $O_j$ and $\sum_j\chi_j=1$ on a neighbourhood of $\partial D$. This is exactly the finite presentation used by the surface integral [F3]; by [F5] the chart integral then defines the finite Borel surface measure of $\partial D$, independent of the charts and partition, with graph density $\sqrt{1+\lvert Dh_j\rvert^2}$, and $\partial D$ is a compact embedded $C^k$ hypersurface. This proves (b). [F3, F4, F5, F17, step 2.2, step 1.3, step 2.3, step 3.1]

5.1 Finitely many components. The components of $\partial D$ are nonempty, pairwise disjoint, cover $\partial D$ [F14], and are open [step 4.1]; being pairwise disjoint, every subfamily with the same union has the same members. Hence they form an open cover of the compact space $\partial D$ [step 2.2], which therefore has a finite subcover [F9]; any component meets that finite union and is therefore one of its finitely many members. So $\partial D$ has finitely many components; each is closed [F14] and bounded (being a subset of bounded $\partial D$), hence compact [F9]. This proves (a). [F9, F14, step 2.2, step 4.1]

6.1 The complement need not be connected. Let $c_1:=0$, $c_2:=4e_1$ and $D_0:=B_1(c_1)\cup B_1(c_2)$. Each ball is a bounded $C^1$ domain whose local graph function is $C^\infty$ [F20]; since $d_2(c_1,c_2)=4>2$, the closed balls are disjoint, and at a boundary point of $B_1(c_1)$ the chart of [F20] shrunk to the open complement of the closed ball around $c_2$ exhibits $D_0$ locally as the same subgraph, and symmetrically, so $D_0$ is a bounded $C^k$ domain for every $k\ge1$ [F1, F20]. Its boundary is $\partial D_0=S_1(c_1)\cup S_1(c_2)$: a point of either sphere lies in $\overline{D_0}$ but, every ball about it meeting the exterior of that ball, outside $\operatorname{int}(D_0)$ [F6, F20], while a point of $B_1(c_1)$ or $B_1(c_2)$ lies in the interior of $D_0$, and a point outside both closed balls has a ball avoiding $D_0$ entirely [F6, F7, F20]. Now put $U:=B_1(c_1)$ and $V:=B_1(c_2)\cup(\mathbb R^3\setminus(\overline B_1(c_1)\cup\overline B_1(c_2)))$. Both are open [F7, F20], nonempty, and disjoint, because $B_1(c_2)\subseteq\overline B_1(c_2)$ is disjoint from the exterior term; and $U\cup V=\mathbb R^3\setminus\partial D_0$, since the removed set $\partial D_0$ is exactly the union of the two spheres. Thus $U$ and $V$, open in the subspace $\mathbb R^3\setminus\partial D_0$, nonempty, disjoint and covering it, form a separation of the complement [F6, F7]. This witnesses the asserted non-claim for every $k\ge1$. [F1, F6, F7, F20] ∎
