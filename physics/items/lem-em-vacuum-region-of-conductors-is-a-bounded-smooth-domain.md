---
id: lem-em-vacuum-region-of-conductors-is-a-bounded-smooth-domain
kind: lemma
title: "The vacuum region around compact smooth conductors is a bounded smooth domain"
status: draft
origin: session
dependency_level: 1
domain: mathematics
deps: [def-bounded-c-k-domain-and-boundary-charts, def-bounded-c-one-domain-boundary-charts-and-outward-normal, def-countable-choice, def-metric-ball, def-metric-compactness, def-metric-continuity, def-metric-interior-closure-boundary, def-metric-topology, def-metric-space, def-metric-bounded-diameter, thm-metric-closure-characterisation, thm-heine-borel-rn, lem-em-boundary-of-a-bounded-smooth-domain-is-a-compact-embedded-hypersurface, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-norm-and-normed-space, lem-metrics-on-rn, thm-cauchy-schwarz-and-the-euclidean-norm, cor-rn-is-polygonally-connected-and-locally-path-connected, cor-components-of-open-subsets-of-rn-are-polygonally-connected, def-polygonal-path-and-polygonal-connectedness, lem-euclidean-polygonal-paths-are-continuous, thm-path-connected-implies-connected, thm-continuous-image-of-a-connected-space, thm-continuous-image-of-a-compact-space-is-compact, thm-connectedness-characterisations, def-connected-space, def-connected-component-and-quasicomponent, thm-components-partition-and-are-closed, thm-unions-of-connected-sets, def-linear-isometry-and-orthogonal-or-unitary-operator, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, thm-extreme-value-metric, def-ck-euclidean-maps-and-diffeomorphisms, thm-total-differentiability-gives-a-local-linear-bound-and-continuity, lem-compactness-is-intrinsic, thm-metric-continuity-characterisations]
dependency_roles:
  lem-compactness-is-intrinsic: mathematical-premise
  thm-metric-continuity-characterisations: mathematical-premise
  def-bounded-c-k-domain-and-boundary-charts: mathematical-premise
  def-bounded-c-one-domain-boundary-charts-and-outward-normal: mathematical-premise
  def-countable-choice: mathematical-premise
  def-metric-ball: mathematical-premise
  def-metric-compactness: mathematical-premise
  def-metric-continuity: mathematical-premise
  def-metric-interior-closure-boundary: mathematical-premise
  def-metric-topology: mathematical-premise
  def-metric-space: mathematical-premise
  def-metric-bounded-diameter: mathematical-premise
  thm-metric-closure-characterisation: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  lem-em-boundary-of-a-bounded-smooth-domain-is-a-compact-embedded-hypersurface: mathematical-premise
  lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric: mathematical-premise
  def-norm-and-normed-space: mathematical-premise
  lem-metrics-on-rn: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  cor-rn-is-polygonally-connected-and-locally-path-connected: mathematical-premise
  cor-components-of-open-subsets-of-rn-are-polygonally-connected: mathematical-premise
  def-polygonal-path-and-polygonal-connectedness: mathematical-premise
  lem-euclidean-polygonal-paths-are-continuous: mathematical-premise
  thm-path-connected-implies-connected: mathematical-premise
  thm-continuous-image-of-a-connected-space: mathematical-premise
  thm-continuous-image-of-a-compact-space-is-compact: mathematical-premise
  thm-connectedness-characterisations: mathematical-premise
  def-connected-space: mathematical-premise
  def-connected-component-and-quasicomponent: mathematical-premise
  thm-components-partition-and-are-closed: mathematical-premise
  thm-unions-of-connected-sets: mathematical-premise
  def-linear-isometry-and-orthogonal-or-unitary-operator: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-total-differentiability-gives-a-local-linear-bound-and-continuity: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: John K. Hunter, Notes on Partial Differential Equations (University of California, Davis, 2014)
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "§1.10 Definitions 1.34-1.35 and §1.10.3, printed pp. 13-16 (bounded C^1 domains; the domain lies locally on one side of its graph)."
    - title: Richard S. Laugesen, Linear Analysis and Partial Differential Equations (2020)
      url: https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf
      locator: "Chapter 3 §3.4, Definition 3.10, printed p. 59 (the local one-sided graph condition)."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Assume the Axiom of Countable Choice ($\mathrm{AC}_\omega$) as carried by the boundary interfaces ([[def-countable-choice]]). Let $k\ge1$, let $\Omega\subset\mathbb R^3$ be a bounded $C^k$ domain, and let $D_1,\dots,D_m$ ($m\ge0$) be bounded $C^k$ domains with pairwise disjoint closures whose closures satisfy $\overline{D_1}\cup\cdots\cup\overline{D_m}\subset\Omega$ strictly inside $\Omega$. Put

$$\Omega_v:=\Omega\setminus\bigl(\overline{D_1}\cup\cdots\cup\overline{D_m}\bigr).$$

Then:

(a) [Domain] $\Omega_v$ is a bounded $C^k$ domain in the sense of [[def-bounded-c-k-domain-and-boundary-charts]] (in particular nonempty, bounded and open);

(b) [Boundary] $\partial\Omega_v=\partial\Omega\cup\partial D_1\cup\cdots\cup\partial D_m$, a disjoint union of nonempty compact sets; the compact embedded $C^k$ hypersurfaces $\partial\Omega,\partial D_1,\dots,\partial D_m$ are pairwise disjoint ([[lem-em-boundary-of-a-bounded-smooth-domain-is-a-compact-embedded-hypersurface]]);

(c) [Normals and sign] the outward unit normal of $\Omega_v$ at a point of $\partial\Omega$ equals the outward unit normal of $\Omega$, and at a point of $\partial D_j$ it equals the negative of the outward unit normal of $D_j$ defined by [[def-bounded-c-k-domain-and-boundary-charts]] and [[def-bounded-c-one-domain-boundary-charts-and-outward-normal]]; so the outward normal of $\Omega_v$ on $\partial D_j$ points from the vacuum into the conductor;

(d) [Componentwise statement] $\Omega_v$ has finitely many connected components. Each component $U$ is an open bounded $C^k$ domain; its boundary is the compact restricted subset $\partial U\subseteq\partial\Omega_v$, a union of the boundary components incident to $U$. The normal formulas in (c) restrict to those boundary pieces. It need not have every boundary piece of $\Omega_v$, and connectedness of $\Omega_v$ is not asserted.

No regularity beyond $C^k$, no convexity and no topological simplicity is claimed.

## Facts & Assumptions


**Given:** $\mathrm{AC}_\omega$ as in [[def-countable-choice]]; a bounded $C^k$ domain $\Omega\subset\mathbb R^3$, $k\ge1$; bounded $C^k$ domains $D_1,\dots,D_m$ ($m\ge0$) with pairwise disjoint closures all strictly contained in $\Omega$. All metric notions use the Euclidean metric $d_2$ and norm on $\mathbb R^3$; write $B(x,r)$ for open balls, $\overline A$ for closure and $\partial A$ for the metric boundary.

[F1] A bounded set lies in some ball; closures of bounded sets are bounded; a subset of $\mathbb R^n$ is compact exactly when it is closed and bounded; a finite union of compact or of closed sets is closed, and a finite union of bounded sets is bounded ([[def-metric-ball]], [[def-metric-bounded-diameter]], [[def-metric-compactness]], [[thm-heine-borel-rn]], [[def-metric-topology]]). Ambient open covers of compact subsets have finite subcovers ([[lem-compactness-is-intrinsic]]).

[F2] Closure is the smallest closed superset: $A\subseteq F$ with $F$ closed implies $\overline A\subseteq F$, and $A$ is closed iff $A=\overline A$. The boundary is $\partial A=\overline A\setminus\operatorname{int}(A)$, and for open $A$ the interior is $A$ itself; boundaries are closed; every ball about a point of $\overline A$ meets $A$ ([[thm-metric-closure-characterisation]], [[def-metric-interior-closure-boundary]]).

[F3] Distances: $d(x,A)$ is the infimum of $\{d(x,a):a\in A\}$ for nonempty $A$; a continuous real function on a nonempty compact metric space attains its minimum; $|d(x,a)-d(x,a')|\le d(a,a')$, so $q\mapsto d(x,q)$ is continuous, and if $K$ is compact with $x\notin K$ then $d(x,K)>0$ ([[def-metric-bounded-diameter]], [[thm-extreme-value-metric]], [[def-metric-space]], [[def-metric-continuity]], [[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]).

[F4] The chart property and the outward normal: at every boundary point $x$ of a bounded $C^k$ domain $D$ there are an open $W\ni x$, a rigid motion $R=Q\cdot+b$ with orthogonal $Q$, an open ball $B\subseteq\mathbb R^2$, $h\in C^k(B)$ with $R(D\cap W)=R(W)\cap\{(y,s):s<h(y)\}$, and the prescribed outward normal in ambient coordinates is $Q^{\mathsf T}(-Dh(y),1)/\sqrt{1+\lvert Dh(y)\rvert^2}$, agreeing on overlaps; shrinking $W$ preserves the identity ([[def-bounded-c-k-domain-and-boundary-charts]], [[def-bounded-c-one-domain-boundary-charts-and-outward-normal]], [[lem-em-boundary-of-a-bounded-smooth-domain-is-a-compact-embedded-hypersurface]]).

[F5] For a bounded $C^k$ domain the boundary is nonempty, compact, and a compact embedded $C^k$ hypersurface with finitely many connected components; hence also $\partial D\cap W=R^{-1}(\{(y,h(y)):y\in B\}\cap R(W))$ and points of $R(W)$ with $s>h(y)$ lie outside $\overline D$ ([[lem-em-boundary-of-a-bounded-smooth-domain-is-a-compact-embedded-hypersurface]]).

[F6] Let $B_1\subseteq\mathbb R^2$ be a ball, $h\in C(B_1;\mathbb R)$, $c\in\mathbb R$ and $\delta>0$, and suppose $|h(y)-c|\le\delta/4$ for all $y\in B_1$. With $H:=c+\delta/2$ one then has $h(y)<H<h(y)+\delta$ for every $y\in B_1$. Consequently each of the regions $S_+:=\{(y,s):y\in B_1,\ h(y)<s<h(y)+\delta\}$ and $S_-:=\{(y,s):y\in B_1,\ h(y)-\delta<s<h(y)\}$ is polygonally connected: for $u=(y_1,s_1)$ and $v=(y_2,s_2)$ in $S_+$ the segment $[y_1,y_2]$ lies in the convex ball $B_1$ ([[def-metric-ball]], [[def-norm-and-normed-space]], [[thm-cauchy-schwarz-and-the-euclidean-norm]], [[lem-metrics-on-rn]]), every point $(y,H)$ of the middle segment satisfies $h(y)<H<h(y)+\delta$ by the displayed inequality, and the vertical segments from $s_1$ up to $H$ at $y_1$ and from $H$ down to $s_2$ at $y_2$ have all their intermediate heights between the endpoint heights, hence also lie in $S_+$; the same with $H_-:=c-\delta/2$ and the reversed inequalities applies to $S_-$. These three-segment paths are polygonal paths ([[def-polygonal-path-and-polygonal-connectedness]], [[lem-euclidean-polygonal-paths-are-continuous]]), so a polygonally connected set is path-connected and hence connected ([[thm-path-connected-implies-connected]]).

[F7] Rigid motions and reflections: $R=Q\cdot+b$ and $\rho(y,s)=(y,-s)$ are continuous bijections with continuous inverses and preserve distances; images of connected sets under them are connected ([[def-linear-isometry-and-orthogonal-or-unitary-operator]], [[thm-continuous-image-of-a-connected-space]]).

[F8] $C^k$ maps and their algebra: $h\in C^k$ remains $C^k$ under negation; the coordinate functions $(y,s)\mapsto y$ and $(y,s)\mapsto s$ and affine maps are $C^\infty$; the set $\{s>h(y)\}$ is open as the preimage of the open set $(0,\infty)$ under the continuous map $s-h(y)$ ([[def-ck-euclidean-maps-and-diffeomorphisms]], [[thm-algebra-of-derivatives]], [[thm-chain-rule-for-total-derivatives]], [[thm-metric-continuity-characterisations]], [[thm-total-differentiability-gives-a-local-linear-bound-and-continuity]]).

[F9] Every connected component of an open subset of $\mathbb R^n$ is open in $\mathbb R^n$ and polygonally connected; components are nonempty, pairwise disjoint, cover the space, are the maximal connected subsets, and are closed; a union of connected sets with a common point is connected ([[cor-components-of-open-subsets-of-rn-are-polygonally-connected]], [[def-connected-component-and-quasicomponent]], [[thm-components-partition-and-are-closed]], [[thm-unions-of-connected-sets]]).

[F10] A nonempty space is connected exactly when its only clopen subsets are the empty set and the whole space; a connected space is not the disjoint union of two nonempty open subsets; $\mathbb R^3$ is connected ([[thm-connectedness-characterisations]], [[def-connected-space]], [[cor-rn-is-polygonally-connected-and-locally-path-connected]]).

## Proof

**Proof technique:** direct.

1.1 Put $K:=\overline{D_1}\cup\cdots\cup\overline{D_m}$ (so $K=\varnothing$ when $m=0$). Each $\overline{D_j}$ is closed and bounded, hence compact [F1, F2]; $K$ is a finite union of compact sets, hence closed and bounded and therefore compact [F1]. By hypothesis $K\subseteq\Omega$, so $\partial\Omega\cap K=\varnothing$, and the sets $\overline{D_1},\dots,\overline{D_m}$ are pairwise disjoint. Put $\Omega_v:=\Omega\setminus K$; it is open, since $\Omega$ is open and $K$ is closed, and bounded, since $\Omega$ is; and, when $m>0$, for every $x\in\partial\Omega$ we have $d(x,K)>0$ by [F3]. For $m=0$ set $\rho_x:=1$; for $m>0$ set $\rho_x:=d(x,K)>0$. In either case $B(x,\rho_x/2)$ misses $K$. [F1, F2, F3]

2.1 $\Omega_v\ne\varnothing$. Since $\Omega$ is a bounded $C^k$ domain, $\partial\Omega\ne\varnothing$ [F5]; fix $x\in\partial\Omega$ and put $\rho:=\rho_x>0$ as in step 1.1. Every ball about $x$ meets $\Omega$ while $x\notin\Omega$ [F2], so there is $y\in B(x,\rho/2)\cap\Omega$. Then $d(y,q)\ge d(x,q)-d(x,y)>\rho-\rho/2>0$ for every $q\in K$, so $y\notin K$; hence $y\in\Omega_v$. [F2, F3, step 1.1]

2.2 $\partial\Omega_v=\partial\Omega\cup\partial D_1\cup\cdots\cup\partial D_m$ as a disjoint union. For $x\in\partial D_j$: $x\in\overline{D_j}\subseteq\Omega$, so $x\notin\Omega_v$; every ball about $x$ meets $D_j\subseteq K$ [F2], and for a sufficiently small ball it lies in $\Omega$ and misses $\bigcup_{i\ne j}\overline{D_i}$ (positive distances between the pairwise disjoint compact sets [F3]) and meets $\mathbb R^3\setminus\overline{D_j}$ [F4, F5], hence meets $\Omega_v$; so $x\in\partial\Omega_v$. For $x\in\partial\Omega$: every ball about $x$ meets $\Omega$ while $x\notin K$ with $B(x,\rho_x/2)\cap K=\varnothing$ [step 1.1], so small balls meet $\Omega_v$; and $x\notin\Omega_v$; so $x\in\partial\Omega_v$. Conversely let $x\in\partial\Omega_v$; then $x\in\overline{\Omega_v}\subseteq\overline\Omega$ and $x\notin\Omega_v$ [F2]. If $x\notin\Omega$ then $x\in\partial\Omega$. If $x\in\Omega$, then $x\in K$, say $x\in\overline{D_j}$; if $x\in D_j$ then $D_j$ is open and a small ball about $x$ lies in $D_j\subseteq K$, so it misses $\Omega_v$, contradicting $x\in\overline{\Omega_v}$; hence $x\in\overline{D_j}\setminus D_j=\partial D_j$. The displayed pieces are pairwise disjoint because $K\subseteq\Omega$ and the $\overline{D_j}$ are pairwise disjoint, and each is nonempty and compact [F5]. [F2, F3, F4, F5, step 1.1]

3.1 At every point of $\partial\Omega_v$ the vacuum region $\Omega_v$ is locally exactly the one-sided subgraph of a $C^k$ graph. Let $x\in\partial\Omega$. Use the chart of [F4] for $\Omega$ at $x$ and let $\rho:=\rho_x>0$ [step 1.1]; replacing $W$ by the open set $W\cap B(x,\rho/2)$ preserves the chart identity [F4] and makes $W\cap K=\varnothing$, so $\Omega_v\cap W=\Omega\cap W$ and $R(\Omega_v\cap W)=R(W)\cap\{s<h(y)\}$. Let $x\in\partial D_j$. Use the chart of [F4] for $D_j$ at $x$, and replace $W$ by an open ball about $x$ contained in $\Omega$ and avoiding $\bigcup_{i\ne j}\overline{D_i}$; this keeps the chart identity [F4] and gives $\Omega_v\cap W=W\setminus\overline{D_j}$, whose image is $R(W)\cap\{s>h(y)\}$: points with $s<h(y)$ lie in $D_j$, points with $s=h(y)$ lie on $\partial D_j$ [F4, F5]. Put $\rho_0(y,s):=(y,-s)$ and $R_0:=\rho_0\circ R$, $h_0:=-h$; then $R_0$ is a rigid motion, $h_0\in C^k$, and $R_0(\Omega_v\cap W)=R_0(W)\cap\{s<h_0(y)\}$ [F7, F8]. [F4, F5, F7, F8, step 1.1, step 2.2]

3.2 The boundary pieces of [step 2.2] are the compact embedded $C^k$ hypersurfaces of the boundary lemma, and they are pairwise disjoint with nonempty compact pieces; this is (b). [F5, step 2.2]

4.1 $\Omega_v$ is a bounded $C^k$ domain: it is nonempty [step 2.1], bounded and open [step 1.1], and by [step 2.2] every boundary point is treated by one of the two local charts of [step 3.1], each exhibiting $\Omega_v$ locally as the one-sided subgraph of a $C^k$ function over an open ball after a rigid motion [F4, F8]. This is (a). [F4, F8, step 1.1, step 2.1, step 2.2, step 3.1]

4.2 The normals. In the $\partial\Omega$ case of [step 3.1] the chart data for $\Omega_v$ and for $\Omega$ are identical, so the prescribed outward normal of $\Omega_v$, computed by the formula of [F4], equals that of $\Omega$ at every point of $\partial\Omega$. In the $\partial D_j$ case, the chart of $\Omega_v$ is $R_0=\rho_0\circ R$ with graph $h_0=-h$; the orthogonal part of $R_0$ is $\rho_0Q$, whose inverse is $Q^{\mathsf T}\rho_0$, so [F4] gives the vacuum normal $(Q^{\mathsf T}\rho_0)(-Dh_0(y),1)/\sqrt{1+|Dh_0(y)|^2}=(Q^{\mathsf T}\rho_0)(Dh(y),1)/\sqrt{1+|Dh(y)|^2}$, and since $\rho_0(Dh,1)=(Dh,-1)=-(-Dh,1)$ this equals $-Q^{\mathsf T}(-Dh(y),1)/\sqrt{1+|Dh(y)|^2}$, the negative of the prescribed outward normal of $D_j$ [F4, F8]. This is (c). [F4, F7, F8, step 3.1]

4.3 Connected collars and patches. Fix one of the charts of [step 3.1], shrinking its neighborhood to be bounded first. Write $R$ for its rigid motion, $W$ for its domain, $h$ for its graph function and $B''$ for the set of parameters $y$ with $(y,h(y))\in R(W)$, an open subset of $B$ containing the parameter of the distinguished boundary point. Choose a ball $B_1$ with $\overline{B_1}\subseteq B''$; the compact graph set $G:=\{(y,h(y)):y\in\overline{B_1}\}\subseteq R(W)$ ([[thm-heine-borel-rn]], [[thm-continuous-image-of-a-compact-space-is-compact]], [[thm-extreme-value-metric]]) is disjoint from the closed set $\mathbb R^3\setminus R(W)$, the function $z\mapsto d(z,\mathbb R^3\setminus R(W))$ is positive and continuous on $G$ (its Lipschitz constant is at most one by the triangle inequality), hence has a positive minimum $\delta$ by [F3]. Its complement is nonempty because $W$ is bounded. By continuity of $h$ at the parameter $y_x$ of the distinguished point choose a ball $B_1'\subseteq B_1$ around $y_x$ with $|h(y)-h(y_x)|\le\delta/4$ for $y\in B_1'$ [F8]. In the inner case the region $T:=\{(y,s):y\in B_1',\ h(y)<s<h(y)+\delta\}$ is contained in $R(W)$ (every point of $T$ is within $\delta$ of its graph point, which lies in $G$) and in $\{s>h(y)\}$, so $R^{-1}(T)\subseteq\Omega_v\cap W$; in the outer case the same holds for $T:=\{(y,s):y\in B_1',\ h(y)-\delta<s<h(y)\}$ and $\{s<h(y)\}$, by the descriptions of [step 3.1]. The set $T$ is polygonally connected by [F6], hence connected, so $N:=R^{-1}(T)$ is connected as its continuous image [F7]; moreover $N$ accumulates at every point $X(y)$ of the patch $P:=X(B_1')\subseteq\partial\Omega_v$, since the points $(y,h(y)\pm\varepsilon)$ with $0<\varepsilon<\delta$ lie in $T$ and converge to $(y,h(y))$ as $\varepsilon\downarrow0$. [F3, F6, F7, F8, step 3.1]

5.1 Each connected component of the open set $\Omega_v$ is open in $\mathbb R^3$ and polygonally connected [F9]; in particular every component is open. [F9, step 4.1]

5.2 Each patch is incident to exactly one component. The connected nonempty collar $N$ of step 4.3 lies in one component $U$ of $\Omega_v$ [F9]. For $z=X(y_0)\in P$, continuity of $h$ and openness of $B_1'$ give a ball $B(z,r)$ so small that its chart coordinates satisfy $y\in B_1'$ and $|s-h(y)|<\delta$, and that $B(z,r)\subset W$. By step 3.1 the vacuum portion of this ball lies in the one-sided collar, hence $B(z,r)\cap\Omega_v\subset N\subset U$. If $z\in\partial U_1$ for another component, the ball meets $U_1$ by [F2], so $U_1$ meets $N$ and equals $U$ by [F9]. Conversely, every $z\in P$ is in $\partial U$ because the collar accumulates there and $z\notin\Omega_v$. Thus every point of $P$ is incident to exactly $U$. [F2, F9, step 3.1, step 4.3]

6.1 Every component is incident to a patch. Let $U$ be a component of $\Omega_v$. It is nonempty, open and bounded, so $\partial U\ne\varnothing$: otherwise $\overline U=U$, making $U$ a nonempty clopen proper subset of the connected space $\mathbb R^3$ (proper since $U$ is bounded), contradicting [F10]. Also $\partial U\subseteq\partial\Omega_v$: if $x\in\partial U$ then $x\in\overline U\subseteq\overline{\Omega_v}$ and $x\notin\Omega_v$, because $\Omega_v$ is open and $x$ lies neither in the open set $U$ nor in its open complement in $\Omega_v$ [F2, F9]. By [step 2.2] and [step 3.2] every point of $\partial\Omega_v$ lies on one of the finitely many boundary pieces, and the patches of the kind constructed in [step 4.3] cover each piece; so some such patch $P$ meets $\partial U$, and [step 5.2] identifies $U$ as the unique component incident to $P$. [F2, F9, F10, step 2.2, step 3.2, step 5.2]

7.1 Finitely many components. The patches of the kind constructed in [step 4.3], for all boundary points, cover $\partial\Omega_v$ [step 6.1], and $\partial\Omega_v$ is compact [step 3.2]; hence finitely many of them already cover $\partial\Omega_v$. Each determines exactly one component [step 5.2], and every component is determined by one of them [step 6.1]; therefore the components of $\Omega_v$ are among these finitely many, so $\Omega_v$ has finitely many connected components. [step 3.2, step 5.2, step 6.1]

8.1 Each component is a bounded $C^k$ domain with the stated boundary. Let $U$ be a component of $\Omega_v$ and let $P$ be a patch incident to $U$ [step 6.1]. The local description of [step 3.1] shows that, in the chart of $P$, $U$ coincides with the one-sided region described there, hence is locally exactly the one-sided subgraph of the $C^k$ function $h$ (outer case) or of the reflected $C^k$ function $h_0=-h$ (inner case) over a ball [F4, F8, step 3.1, step 5.2]. So $U$ is a bounded $C^k$ domain: it is open [step 5.1], bounded (a subset of bounded $\Omega_v$) and nonempty [F9]. Every point of a patch incident to $U$ is a boundary point of $U$ (it lies in $\partial\Omega_v$ and in the closure of the collar $N\subseteq U$ [step 4.3, step 5.2]), and conversely every boundary point of $U$ lies in a patch incident to $U$ [step 6.1]; hence $\partial U$ equals the union of those patches in a finite covering that are incident to $U$. It is compact because it is closed in $\mathbb R^3$ [F2] and contained in the compact $\partial\Omega_v$ [step 3.2], by [F1]. Finally, let $C$ be a connected component of $\partial\Omega_v$; the assignment to $x\in C$ of the component of $\Omega_v$ incident to a patch containing $x$ takes values in a finite set and is locally constant on $C$ (near a point of a patch it is given by the single component of that patch [step 5.2]), so it is constant on the connected set $C$ [F10]; hence each boundary component of $\partial\Omega_v$ is incident to exactly one component of $\Omega_v$, and $\partial U$ is a union of such boundary components. The normal formulas of [step 4.2] apply verbatim to each piece of $\partial U$, since they are the same local charts. This is (d); connectedness of $\Omega_v$ itself is neither assumed nor asserted. [F4, F8, F9, F10, step 1.1, step 3.1, step 4.2, step 5.1, step 3.2, step 4.3, step 5.2, step 6.1, step 7.1] ∎
