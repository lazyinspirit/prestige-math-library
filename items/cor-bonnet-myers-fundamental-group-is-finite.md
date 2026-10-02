---
id: cor-bonnet-myers-fundamental-group-is-finite
kind: corollary
title: Bonnet-Myers fundamental group is finite
status: published
origin: pipeline
deps:
  - thm-bonnet-myers
  - lem-pullback-metric-on-a-cover-of-a-complete-manifold-is-complete
  - thm-universal-cover-existence
  - thm-deck-group-of-a-universal-cover-is-the-fundamental-group
  - def-covering-map-and-evenly-covered-neighbourhoods
  - def-compact-space
  - thm-closed-subspace-of-a-compact-space-is-compact
  - thm-riemannian-distance-is-a-metric
  - def-countable-choice
  - prop-topological-manifolds-are-locally-compact-and-locally-path-connected
  - thm-connected-and-locally-path-connected-implies-path-connected
  - cor-convex-subsets-of-rn-are-contractible
  - def-semilocally-simply-connected-space
  - def-universal-covering-space
  - def-ricci-curvature
  - lem-ricci-curvature-is-symmetric-and-basis-independent
  - thm-fundamental-theorem-of-riemannian-geometry
  - def-riemannian-isometry-and-local-isometry
  - def-riemann-curvature-four-tensor
  - def-deck-transformation-and-deck-group
  - prop-deck-transformations-are-determined-by-one-point-and-act-freely
  - ex-discrete-metric-compact-iff-finite
  - def-simply-connected
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "§§27.1 and 28.2, pp.199–200, 210–212: Myers' theorem and finiteness of the fundamental group"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§12, pp.59–62: Myers' theorem and its covering argument"
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$(M,g)$ be a complete, connected, boundaryless Riemannian manifold of dimension
$n\ge2$, and let $k>0$. Suppose the Ricci curvature satisfies
$$\operatorname{Ric}_p(v,v)\ge(n-1)\,k\,g_p(v,v) \qquad\text{for every }p\in M\text{ and every }v\in T_pM.$$
Then the fundamental group of $M$ is finite: for every basepoint $b\in M$ the
group $\pi_1(M,b)$ is a finite group.

The proof lifts the metric to the universal cover, transfers the Ricci lower
bound by the local-isometry property, applies Bonnet–Myers to the cover, and
counts the covering fibre. No sectional-curvature bound and no compactness of
$M$ is assumed.

## Facts & Assumptions

**Given:** The inherited $\mathrm{AC}_\omega$ of [A1], a complete connected
boundaryless Riemannian manifold $(M,g)$ of dimension $n\ge2$, a real number
$k>0$, and the pointwise Ricci lower bound
$\operatorname{Ric}\ge(n-1)k\,g$.

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$
([[def-countable-choice]]), carried by the geodesic, covering and
Hopf–Rinow interfaces used below; all constructions below are canonical.

[F1] Manifolds and covers: a topological manifold is locally path-connected
([[prop-topological-manifolds-are-locally-compact-and-locally-path-connected]]),
a connected locally path-connected space is path-connected
([[thm-connected-and-locally-path-connected-implies-path-connected]]), and a
Euclidean ball is convex, hence contractible, so loops inside one chart ball
are null-homotopic ([[cor-convex-subsets-of-rn-are-contractible]],
[[def-semilocally-simply-connected-space]]). Every nonempty path-connected,
locally path-connected, semilocally simply connected space has a universal
covering space ([[thm-universal-cover-existence]]), whose total space is
connected and simply connected ([[def-universal-covering-space]],
[[def-simply-connected]]).

[F2] Lifted metric: let $(\hat M,\hat g)$ be complete, connected and
boundaryless of dimension $n$, let $N$ be a connected boundaryless smooth
$n$-manifold and let $\pi:N\to\hat M$ be a smooth covering map that is a local
diffeomorphism. Then $\pi^*\hat g$ is a Riemannian metric on $N$,
$\pi:(N,\pi^*\hat g)\to(\hat M,\hat g)$ is a local isometry, and
$(N,\pi^*\hat g)$ is geodesically complete, hence complete as a metric space
([[lem-pullback-metric-on-a-cover-of-a-complete-manifold-is-complete]]).

[F3] Curvature under a local isometry: the Levi-Civita connection of a smooth
Riemannian metric is unique ([[thm-fundamental-theorem-of-riemannian-geometry]]),
the curvature is defined from that connection by
$R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$
([[def-riemann-curvature-four-tensor]]), and a local isometry is a smooth map
whose differential preserves the metric at every point
([[def-riemannian-isometry-and-local-isometry]]). Ricci curvature is the trace
$\operatorname{Ric}(X,Y)=\operatorname{tr}\bigl(Z\mapsto R(Z,X)Y\bigr)$
([[def-ricci-curvature]]), computed in an orthonormal basis by
$\operatorname{Ric}(X,Y)=\sum_i\operatorname{Rm}(e_i,X,Y,e_i)$
([[lem-ricci-curvature-is-symmetric-and-basis-independent]]).

[F4] Bonnet–Myers: a nonempty, complete, connected, boundaryless Riemannian manifold of
dimension $n\ge2$ with $\operatorname{Ric}\ge(n-1)k\,g$ and $k>0$ is compact
([[thm-bonnet-myers]]); compactness is the open-cover compactness of
[[def-compact-space]], and a closed subset of a compact space is compact
([[thm-closed-subspace-of-a-compact-space-is-compact]]).

[F5] Covering fibres and deck groups: a covering map has evenly covered
neighbourhoods ([[def-covering-map-and-evenly-covered-neighbourhoods]]); deck
transformations of a covering with connected total space are determined by
their value at one point and act freely
([[prop-deck-transformations-are-determined-by-one-point-and-act-freely]],
[[def-deck-transformation-and-deck-group]]), and the deck group of a universal
cover is isomorphic to the fundamental group of the base
([[thm-deck-group-of-a-universal-cover-is-the-fundamental-group]]).

[F6] Metric topology: the Riemannian distance makes a connected Riemannian
manifold a metric space ([[thm-riemannian-distance-is-a-metric]]), so points
are closed and closed subsets are exactly the complements of open sets there; a
set with the discrete topology is compact exactly when it is finite
([[ex-discrete-metric-compact-iff-finite]]).

## Proof

**Proof technique:** direct: pass to the universal cover, lift the metric and
the Ricci bound, apply Bonnet–Myers to the compact cover, and count the fibre.

1.1 $M$ has a universal cover. [F1, given]
Being a connected topological manifold, $M$ is locally path-connected by [F1],
so it is path-connected by the same reference. It is semilocally simply
connected: every point has a chart whose domain is homeomorphic to an open set
of $\mathbb R^n$, and inside a Euclidean ball around the image of the point,
which is convex and hence contractible by [F1], every loop is null-homotopic;
the chart transports this null-homotopy into $M$. By [F1] there is therefore a
universal covering space $\pi:N\to M$, with $N$ connected and simply connected.
[F1, given]

2.1 The lifted metric is complete and $\pi$ is a local isometry. [F2, given, step 1.1]
Both $M$ and $N$ are connected boundaryless smooth $n$-manifolds, $\pi$ is a
smooth covering map and a local diffeomorphism, and $M$ is complete with
$\dim M=n\ge2$; [F2] applies with $\hat M=M$, $\hat g=g$ and gives that
$\pi^*g$ is a Riemannian metric on $N$, that
$\pi:(N,\pi^*g)\to(M,g)$ is a local isometry, and that $(N,\pi^*g)$ is complete.
[F2, given, step 1.1]

3.1 Local isometries transport the curvature and the Ricci tensor. [F2, F3, step 2.1]
Write $\hat g=\pi^*g$. Since $\pi$ is a local diffeomorphism and
$d\pi$ preserves the metric, pushing the Levi-Civita connection of $\hat g$
forward by $\pi$ produces a connection on $M$ that is torsion-free and
metric-compatible; by the uniqueness in [F3] it is the Levi-Civita connection
of $g$. Consequently $\pi$ carries the curvature endomorphism of $\hat g$ to
that of $g$:
$$d\pi\bigl(\hat R(X,Y)Z\bigr)=R(d\pi X,d\pi Y)\,d\pi Z \qquad(X,Y,Z\in T_xN).$$
Let $X,Y\in T_xN$ and let $(e_i)_{i=1}^n$ be an orthonormal basis of $T_xN$;
then $(d\pi e_i)$ is an orthonormal basis of $T_{\pi(x)}M$, because $d\pi$ is
an isometry. Using the orthonormal-basis formula of [F3] twice,
$$\operatorname{Ric}_{\hat g}(X,Y) =\sum_{i=1}^n\hat g\bigl(\hat R(e_i,X)Y,e_i\bigr) =\sum_{i=1}^n g\bigl(R(d\pi e_i,d\pi X)d\pi Y,d\pi e_i\bigr) =\operatorname{Ric}_g(d\pi X,d\pi Y).$$
[F2, F3, step 2.1]

4.1 The cover satisfies the hypotheses of Bonnet–Myers and is compact. [F3, F4, given, step 1.1, step 2.1, step 3.1]
For every $x\in N$ and $Z\in T_xN$ the identity of step 3.1 and the hypothesis
on $M$ give
$$\operatorname{Ric}_{\hat g}(Z,Z)=\operatorname{Ric}_g(d\pi Z,d\pi Z) \ge(n-1)k\,g(d\pi Z,d\pi Z)=(n-1)k\,\hat g(Z,Z),$$
because $d\pi$ is an isometry. Here $k>0$, $n\ge2$, and $(N,\hat g)$ is
complete, connected and boundaryless by steps 1.1 and 2.1. By [F4] the cover
$(N,\hat g)$ is compact. [F3, F4, given, step 1.1, step 2.1, step 3.1]

5.1 Every fibre of $\pi$ is finite. [F4, F5, F6, step 2.1, step 4.1]
Fix $p\in M$ and let $F=\pi^{-1}(p)$. The fibre is nonempty because $\pi$ is a
covering map and hence surjective. It is a discrete subspace of $N$: given
$y\in F$, an evenly covered neighbourhood $U$ of $p$ in $M$ has
$\pi^{-1}(U)=\bigsqcup_\alpha V_\alpha$ with $\pi|V_\alpha$ a homeomorphism
onto $U$ and $y\in V_\alpha$, so $V_\alpha\cap F=\{y\}$ and $\{y\}$ is open in
$F$ by [F5]. The fibre is closed in $N$: by [F6] the singleton $\{p\}$ is
closed in the metric space $M$, and $F=\pi^{-1}(\{p\})$ is the preimage of a
closed set under the continuous map $\pi$. Since $N$ is compact by step 4.1,
[F4] makes $F$ compact; a compact space with the discrete topology is finite by
[F6]. [F4, F5, F6, step 2.1, step 4.1]

6.1 The fundamental group is finite. [F5, given, step 1.1, step 5.1]
Fix a basepoint $b\in M$ and let $F=\pi^{-1}(b)$, finite by step 5.1, with a
chosen point $y_0\in F$. By [F5] the deck group of the universal cover is
isomorphic to $\pi_1(M,b)$, and the evaluation map
$\operatorname{Deck}(\pi)\to F$, $h\mapsto h(y_0)$, is injective because deck
transformations of the connected total space $N$ agreeing at one point are
equal. Hence $|\pi_1(M,b)|=|\operatorname{Deck}(\pi)|\le|F|<\infty$. As $b$ was
arbitrary this proves finiteness of the fundamental group at every basepoint.
[F5, given, step 1.1, step 5.1]

7.1 Boundary cases and conventions. [F4, F6, step 4.1, step 5.1, step 6.1]
If $M$ is empty then it has no basepoint and the assertion about
$\pi_1(M,b)$ is vacuous; if $M$ is nonempty, connectedness makes the universal
cover nonempty and every fibre nonempty. The case $n=2$ is included: the normal
trace has one term and the Ricci bound is a scalar-curvature bound. The case
$k>0$ is essential, since a flat torus is complete with
$\operatorname{Ric}=0$ and infinite fundamental group; the statement assumes
$k>0$ and no uniform bound is weakened here. The inequality in step 4.1 is
pointwise and no integrability or completeness of the cover beyond step 2.1 is
used. No choice beyond the inherited [A1] is used. [F4, F6, step 4.1, step 5.1, step 6.1] ∎

## Source locator

Datar §27.1 and §28.2, pp.199–200 and 210–212, and Eschenburg §12, pp.59–62,
prove finiteness of the fundamental group by the covering argument used above.
