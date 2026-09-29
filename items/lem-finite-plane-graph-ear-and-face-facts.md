---
id: lem-finite-plane-graph-ear-and-face-facts
kind: lemma
title: "Finite plane graph ear and face facts"
status: published
origin: pipeline
deps: [cor-components-of-open-subsets-of-rn-are-polygonally-connected, def-axiom-of-choice, def-bipartite-graph, def-connected-graph-and-connected-component, def-cycles-trees-and-forests-in-a-simple-graph, def-finite-simple-graph, def-graph-walk-trail-path-and-cycle, def-homeomorphism-and-open-maps, def-metric-space, def-plane-graph-face-and-boundary, def-polygonal-arc-and-polygon, def-standard-complete-bipartite-path-and-cycle-graphs, def-subspace-topology-top, def-vertex-and-edge-connectivity, lem-continuity-is-local-and-pastes, lem-metrics-on-rn, lem-plane-arc-complements-and-accessible-jordan-points, lem-plane-edge-face-incidence, prop-plane-forest-has-one-face, thm-compact-subset-of-a-hausdorff-space-is-closed, thm-compactness-under-continuous-maps, thm-continuous-bijection-from-a-compact-space-has-continuous-inverse, thm-forest-edge-component-count, thm-heine-borel-rn, thm-jordan-brouwer-separation, thm-polygonal-jordan-curve]
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "Carsten Thomassen, The Jordan–Schönflies Theorem and the Classification of Surfaces"
      url: "https://people.math.wisc.edu/~dymarz/751/thomass.pdf"
      locator: "Lemmas 2.3–2.4, 2.7–2.8 and 2.13–2.14, printed pp.118–123; the crosscut, ear, face-correspondence and counting arguments are derived locally below"
pipeline_run: frontier-36-complete
---

## Statement

Assume AC for the hybrid Jordan-boundary assertion below. Every finite connected
graph has a spanning tree, and every finite $2$-connected graph with at least
three vertices has an ear decomposition beginning with any specified cycle.
Here $2$-connected means that at least three vertices are present and deleting
any one vertex leaves the graph connected.

For a finite simple graph drawn in the plane by simple polygonal arcs whose
interiors are pairwise disjoint and miss all vertices, every face of a
$2$-connected drawing has a simple cycle as its boundary, and every connected
drawing satisfies $V-E+F=2$. A connected simple bipartite polygonal plane graph
with $V\ge3$ satisfies $E\le2V-4$; consequently $K_{3,3}$ has no polygonal
plane drawing.

The following hybrid form also holds: let a finite $2$-connected graph be
drawn in the plane by simple arcs meeting only at common endpoints, let one
cycle $C$ be drawn as a Jordan curve, and require every other edge to be a
simple polygonal arc whose relative interior lies in the bounded component of
$\mathbb R^2\setminus C$. Then every component of the drawing's complement has
a graph cycle as its boundary, and $V-E+F=2$.

The graph selections are finite. The polygonal assertions use no choice axiom;
AC is used only in the hybrid assertion, through
[[thm-jordan-brouwer-separation]] in the crosscut argument.

## Facts & Assumptions

**Given:** A finite simple graph $G$ and, when a drawing is specified, vertices
as distinct points and edges as simple arcs meeting only at common endpoints
and satisfying the stated polygonal or hybrid hypotheses.

[A1] AC is [[def-axiom-of-choice]]. The only use here is the cited conclusion
of [[thm-jordan-brouwer-separation]], which assumes AC and gives, for an
embedded circle in the plane, exactly two complementary components with that
curve as their common boundary; that conclusion enters the crosscut claim of
step 1.3 and hence the hybrid step 4.1.

[L1] The conventions for finite simple graphs, connectedness, walks, paths,
cycles, trees and forests are those of [[def-finite-simple-graph]],
[[def-connected-graph-and-connected-component]],
[[def-graph-walk-trail-path-and-cycle]] and
[[def-cycles-trees-and-forests-in-a-simple-graph]].

[L2] A graph is $2$-connected here when it has at least three vertices and
deleting any one vertex leaves it connected
([[def-vertex-and-edge-connectivity]]).

[L3] Bipartite graphs have the bipartition convention of
[[def-bipartite-graph]], and $K_{3,3}$ has six vertices, nine edges and is
connected and bipartite
([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[L4] Plane graphs, faces, facial boundary walks and boundary subgraphs are as
in [[def-plane-graph-face-and-boundary]]. A facial boundary walk traverses the
edges of its frontier; a cycle edge has two distinct incident faces, one on
each local side; a bridge is incident with one face on both local sides; and if
the relative interior of an edge meets the frontier of a face then the whole
edge lies in that frontier ([[lem-plane-edge-face-incidence]]).

[L5] A polygonally embedded finite forest has exactly one face, and a finite
forest satisfies $|V|-|E|=c$, where $c$ is its number of components
([[prop-plane-forest-has-one-face]], [[thm-forest-edge-component-count]]).

[L6] Every connected component of an open subset of $\mathbb R^n$ is open in
$\mathbb R^n$ and polygonally connected
([[cor-components-of-open-subsets-of-rn-are-polygonally-connected]]).

[L7] A polygonal arc is the image of an injective piecewise affine
parametrization of $[0,1]$, a polygon is a simple closed polygonal curve, an
embedding is a continuous injective map that is a homeomorphism onto its image,
and maps defined on a finite closed cover that agree on overlaps paste
continuously ([[def-polygonal-arc-and-polygon]],
[[def-homeomorphism-and-open-maps]], [[lem-continuity-is-local-and-pastes]]).

[L8] The unit circle is compact and metric, subspaces carry the restricted
topology and metric whose balls are traces of plane balls, continuous images of
compact spaces are compact, compact subsets of the Hausdorff plane are closed,
and a continuous bijection from a compact metric space onto a metric space has
continuous inverse ([[thm-heine-borel-rn]], [[def-subspace-topology-top]],
[[def-metric-space]], [[lem-metrics-on-rn]],
[[thm-compactness-under-continuous-maps]],
[[thm-compact-subset-of-a-hausdorff-space-is-closed]],
[[thm-continuous-bijection-from-a-compact-space-has-continuous-inverse]]).

[L9] For the image $P$ of an embedding of $[0,1]$ into $\mathbb R^2$, the
complement $\mathbb R^2\setminus P$ is polygonally path connected
([[lem-plane-arc-complements-and-accessible-jordan-points]]).

[F1] A polygon has exactly two complementary regions, one bounded and one
unbounded, and each has the polygon as frontier
([[thm-polygonal-jordan-curve]]).

[F2] Under AC, a Jordan curve in $\mathbb R^2$ has exactly two complementary
components, one bounded and one unbounded, with the curve as their common
boundary ([[thm-jordan-brouwer-separation]]).

## Proof

**Given:** A finite simple graph and, for the drawing claims, a drawing as in
the statement.

1.1 Among the finitely many acyclic subsets of $E(G)$ choose one maximal by inclusion and call it $S$. If the subgraph $(V(G),S)$ had two components, then a path in the connected graph $G$ between vertices in different components would contain an edge whose endpoints lie in different components of $(V(G),S)$; adding that edge to $S$ keeps it acyclic, contradicting maximality. So $(V(G),S)$ is acyclic, connected and spans $V(G)$: it is a spanning tree. The selection is from one nonempty finite collection. [L1]

1.2 Let $G$ be $2$-connected, so $|V(G)|\ge3$ by [L2], and let $C$ be a specified cycle of $G$. Such a cycle exists: an acyclic connected graph is a tree, a tree with at least three vertices has a vertex of degree at least two, and such a vertex is a cut vertex, contradicting [L2]. Start with $H=C$ and repeat: if $V(H)\ne V(G)$, take a component $K$ of $G-V(H)$. It has a neighbour in $V(H)$ because $G$ is connected, and it has at least two distinct attachment vertices, because a unique attachment vertex would be a cut vertex, again contradicting [L2]. Pick distinct attachments $a_1,a_2$ with neighbours $w_1,w_2\in K$, take a simple path in $K$ from $w_1$ to $w_2$ (a single vertex when $w_1=w_2$), and add the ear $a_1w_1\cdots w_2a_2$, all of whose internal vertices lie in $K$ and are therefore new. If instead $V(H)=V(G)$ but $E(H)\ne E(G)$, add one missing edge as a one-edge ear. Each step adds at least one edge of $G$ and removes none, so after at most $|E(G)\setminus E(C)|$ steps the process stops at a subgraph with $V(H)=V(G)$ and $E(H)=E(G)$, that is, at $G$. Adding a path with distinct endpoints to a $2$-connected graph preserves $2$-connectivity: after deleting any one vertex, the old graph $H$ is unchanged when the deleted vertex is new and remains connected when it lies in $H$ by 2-connectivity, and every remaining part of the added path is attached to a surviving endpoint of that path, so the result is connected and still has at least three vertices. [L1, L2]

1.3 **Crosscut claim.** Let $J$ be a Jordan curve with complementary regions $U$ (bounded) and $O$ (unbounded), let $p\ne q$ be points of $J$, and let $P$ be a simple polygonal arc from $p$ to $q$ whose remaining points all lie in one region $V$ of $\mathbb R^2\setminus J$; write $W$ for the region of $\mathbb R^2\setminus J$ different from $V$. Let $J_1,J_2$ be the two closed arcs of $J$ from $p$ to $q$ and put $D_i=J_i\cup P$. First, each $D_i$ is a Jordan curve: pasting parametrizations of $J_i$ and $P$ at their common endpoints gives a continuous bijection from the unit circle onto $D_i$, which is a homeomorphism because the unit circle is compact metric and $D_i$ carries the subspace topology and restricted metric of the plane; hence $D_i$ is compact and closed in the plane. [L7, L8] By [F1] if $J$ is a polygon, and otherwise by [A1, F2], each $D_i$ has exactly two complementary regions, and each of them has frontier $D_i$. Let $Z_i$ be the region of $\mathbb R^2\setminus D_i$ containing $W$, which is well defined because $W$ is connected and disjoint from $D_i$, and let $Y_i$ be the other region. Every point of $J\setminus J_i$ lies in $Z_i$: such a point $x$ has a ball $B$ about it disjoint from $D_i$, and $B$ meets $W$ because $x$ lies in the frontier of $W$, which is $J$; since $B$ is connected and contained in $\mathbb R^2\setminus D_i$, it lies in $Z_i$. Consequently $Y_i$ is disjoint from $J$, as it misses $J_i\subseteq D_i$ and misses $J\setminus J_i\subseteq Z_i$; being connected, $Y_i$ lies in one region of $\mathbb R^2\setminus J$, and since $W\subseteq Z_i$ it is not $W$, so $Y_i\subseteq V$. Next $Y_2\subseteq Z_1$: the set $Y_2$ misses $P\subseteq D_2$ and misses $J$, so it is contained in $\mathbb R^2\setminus D_1$; and $Y_2$ has points arbitrarily close to each point of the open arc $J_2\setminus\{p,q\}$, because the frontier of $Y_2$ is $D_2$; that arc is contained in $J\setminus J_1\subseteq Z_1$, and $Z_1$ is open, so $Y_2$ meets $Z_1$ and therefore lies in $Z_1$. Symmetrically $Y_1\subseteq Z_2$, so $Y_1\cap Y_2=\varnothing$. Now fix $x\in P\setminus\{p,q\}$. Because $P$ is a finite simple polygonal arc, choose a sufficiently small ball $B\subseteq V$ about $x$ that misses every nonlocal segment of $P$; then $B\cap P$ is just the one segment germ through $x$, or the two adjacent germs when $x$ is a polygonal vertex. Since $V$ misses $J$, we have $B\cap D_i=B\cap P$, so $B\setminus D_i=B\setminus P$ has exactly two connected local sides: two half-disks in the straight case and two sectors at a bend. Each local side is connected and contained in $\mathbb R^2\setminus D_i$, so it lies in $Z_i$ or in $Y_i$; as $x$ lies in the frontier of both $Z_i$ and $Y_i$, the ball $B$ meets both, so the two local sides receive opposite labels for each $i$; and no local side lies in both $Y_1$ and $Y_2$, because those sets are disjoint. Hence one local side lies in $Y_1$ and the other in $Y_2$. Finally let $N$ be a component of $V\setminus P$. It is open in the plane and closed in $V\setminus P$. Its closure in $V$ meets $P\setminus\{p,q\}$: otherwise it would be closed in $V$, and it is also open in $V$, so it would equal the connected set $V$, although the nonempty set $P\setminus\{p,q\}$ lies in $V$ and misses $V\setminus P$. So a ball $B\subseteq V$ about a point of that closure meets $N$, and $N$ misses $P$, so $N$ meets $B\setminus P$ and hence meets $Y_1\cup Y_2$. Since each $Y_i$ is open and has frontier $D_i$, which is disjoint from $V\setminus P$, each $Y_i$ is also closed in $V\setminus P$; the connected set $N$, meeting $Y_1\cup Y_2$, therefore lies in $Y_1$ or in $Y_2$. Hence $V\setminus P=Y_1\sqcup Y_2$ is exactly the decomposition into components, while $W$ remains a region of $\mathbb R^2\setminus(J\cup P)$ with frontier $J$. Therefore $\mathbb R^2\setminus(J\cup P)$ has exactly three regions, with frontiers $J,D_1,D_2$. The polygonal case of this claim is choice-free, and the arbitrary-Jordan case uses AC exactly through [F2]. [A1, F1, F2, L6, L7, L8]

2.1 **Polygonal face induction.** Let now $G$ be $2$-connected and polygonally drawn. Build it by the ear decomposition of step 1.2 from any cycle, and induct on the number of added ears, with the invariant: every face of the current drawing has a simple cycle as its facial boundary walk, and the drawing satisfies $V-E+F=2$. For the initial cycle $C_0$, which is a polygon, [F1] gives exactly two regions with frontier $C_0$, so each facial boundary walk traverses the cycle once, and $V-E+F=|V|-|V|+2=2$. Assume the invariant for a drawing $H$, and let $Q$ be the next ear, a polygonal arc with distinct endpoints $u\ne v$ on the drawing of $H$ and with relative interior disjoint from that drawing. The relative interior of $Q$ is connected and lies in the complement of the drawing of $H$, so it is contained in a single face $F$; let $J$ be the boundary cycle of $F$ and let $V$ be the region of $\mathbb R^2\setminus J$ containing $F$. By [L4] the frontier of $F$ meets the drawing $X_H$ of $H$ exactly in $J$. Since a face is a component of the open complement of $X_H$, its frontier lies in $X_H$; hence $\operatorname{Fr}(F)=J$. If $F$ were a proper subset of $V$, [L6] would give a polygonal path in $V$ from a point of $F$ to a point of $V\setminus F$. The first point at which that path leaves the open set $F$ would lie in $\operatorname{Fr}(F)\cap V=J\cap V=\varnothing$. Thus $F=V$. Apply step 1.3 to the polygonal Jordan curve $J$, the distinct points $u,v\in J$ and the polygonal arc $Q$, whose relative interior lies in $V$: the two arcs $J_1,J_2$ of $J$ from $u$ to $v$ give graph cycles $D_i=J_i\cup Q$ of the new drawing, and $F\setminus Q=Y_1\sqcup Y_2$, where $Y_i$ is the region of $\mathbb R^2\setminus D_i$ that does not contain the region of $\mathbb R^2\setminus J$ different from $V$, and the frontier of $Y_i$ is $D_i$. Every other face $F'$ of $H$ is disjoint from $Q$, because the relative interior of $Q$ lies in $F$ and the endpoints of $Q$ lie in the drawing of $H$; so $F'$ is a connected subset of the complement of the new drawing, and it is closed there because its frontier lies in the drawing of $H$ and misses the relative interior of $Q$, which lies in the open face $F$. Distinct faces of $H$ remain distinct regions, and every point of the complement of the new drawing belongs either to an old face other than $F$ or to $F\setminus Q=Y_1\cup Y_2$. Hence the regions of the new drawing are exactly the faces of $H$ other than $F$, together with $Y_1$ and $Y_2$; their frontiers are the old boundary cycles together with $D_1$ and $D_2$, so the invariant passes to the new drawing. An ear with $k\ge1$ edges contributes $k-1$ new vertices, $k$ new edges and one new region, so $V-E+F$ is unchanged. Induction over the finitely many ears proves the facial-cycle and Euler claims for $G$. [F1, L4, L6, L7, step 1.2, step 1.3]

2.2 Let $G$ be any connected polygonally drawn finite simple graph and let $T$ be a spanning tree of $G$, chosen as in step 1.1. The drawn subgraph $T$ is a polygonally embedded finite forest, so by [L5] it has exactly one face and $|E(T)|=|V(G)|-1$; therefore $V-E+F=2$ for $T$. Delete the edges of $G\setminus T$ one at a time, in any order. At each stage the current drawing $H$ still contains $T$, so it is connected, and the edge $e$ being deleted lies on a cycle of $H$: the unique path in $T$ between its endpoints, together with $e$, is a cycle. By [L4] the relative interior of $e$ lies in the frontier of exactly two distinct faces $F_1\ne F_2$ of $H$, one on each local side, and in the frontier of no other face. Let $X$ be the drawing of $H$, put $\Omega=\mathbb R^2\setminus(X\setminus\operatorname{int}(e))$, and put $R=F_1\cup\operatorname{int}(e)\cup F_2$, where $\operatorname{int}(e)$ is the relative interior of the polygonal arc $e$. The set $R$ is connected: each connected face $F_i$ has every point of $\operatorname{int}(e)$ in its closure, so adjoining that connected arc joins the two faces. It is open in $\Omega$: at each point $x\in\operatorname{int}(e)$ a sufficiently small disk misses $X\setminus\operatorname{int}(e)$, and the local polygonal arc of $e$ separates the disk into two sides lying respectively in $F_1$ and $F_2$ by [L4]; thus the whole disk lies in $R$. At points of the faces openness is immediate. The old faces other than $F_1,F_2$ are open subsets of $\Omega$, and $\Omega$ is the disjoint union of these faces and $R$. Therefore $R$ is also closed in $\Omega$, as is each other old face: the complement of each is a union of the displayed open sets. Since all these sets are connected, they are exactly the connected components of $\Omega$. Thus deleting $e$ merges precisely $F_1,F_2$ and leaves all other faces distinct. Each deletion lowers $E$ and $F$ by one and preserves $V-E+F$, so after the finitely many deletions the expression for $G$ equals that for $T$, namely $2$. This argument also covers the one-vertex graph with no edges, where $F=1$. [L1, L4, L5, L6, L7, step 1.1]

3.1 Let $G$ be connected, simple, bipartite and polygonally drawn with $V\ge3$, and fix a bipartition $(A,B)$ as in [L3]. Every face has a facial boundary walk, a closed walk of $G$ that traverses each edge of its frontier once per local side [L4]. A closed walk $(v_0,\dots,v_\ell)$ of a bipartite graph has even length: each step interchanges $A$ and $B$, so $v_i$ lies in $A$ or in $B$ according as $i$ is even or odd, and $v_\ell=v_0$ forces $\ell$ even. Hence every facial walk has even length. No facial walk has length $1$ or $2$. A walk of length $1$ would traverse a loop, excluded in a simple graph; a facial walk of length $2$ traverses the single edge $e=\{v_0,v_1\}$ twice, and the frontier of that face would then be exactly the point set of $e$. But $V\ge3$ gives a vertex $y$ off $e$, and $\mathbb R^2\setminus e$ is polygonally path connected by [L9], so a polygonal path in $\mathbb R^2\setminus e$ from a point of that face to $y$ would have a first parameter $t_0$ at which it leaves the face, and that point would lie in the frontier of the face, hence in the point set of $e$, contradicting that the path avoids $e$. Hence every facial walk has length at least $4$. Each edge has exactly two local sides and each local side is traversed exactly once by the walk of the face on that side, so the sum of the lengths of all facial walks is $2E$; a bridge borders one face on both local sides [L4] and is traversed twice by that walk. Therefore $4F\le2E$. With $F=2-V+E$ from step 2.2 this gives $2E-2V+4\le E$, that is $E\le2V-4$. The graph $K_{3,3}$ is connected and bipartite with $V=6$ and $E=9$ by [L3], and $9>8=2\cdot6-4$, so $K_{3,3}$ has no polygonal plane drawing. [L3, L4, L9, step 2.2]

4.1 **Hybrid induction.** Let now $G$ be $2$-connected, so $|V(G)|\ge3$ by [L2], and drawn as in the hybrid hypothesis: the cycle $C$ is drawn as a Jordan curve, and every other edge arc has its relative interior in the bounded region $U$ of $\mathbb R^2\setminus C$. Build $G$ by the ear decomposition of step 1.2 from the specified cycle $C$, and induct on the number of added ears, with the invariant: the exterior region of $C$ is a face with boundary cycle $C$, and every other face has a Jordan curve as frontier, that frontier being a graph cycle of the current drawing. For the initial drawing $C$, [F2] gives exactly two regions, the bounded $U$ and the exterior, each with frontier $C$, so both facial boundaries are the cycle $C$, and $V-E+F=|V|-|V|+2=2$. Let the next ear $Q$ with $k\ge1$ edges be added, with distinct endpoints $u\ne v$ on the drawing of $H$ and relative interior disjoint from it; by hypothesis that relative interior lies in $U$. It is connected, so it lies in a single face $F$ of $H$, and $F$ is not the exterior region, which is disjoint from $U$. Hence $F$ is a bounded face with a Jordan graph cycle $J$ as its frontier. Let $V$ be the region of $\mathbb R^2\setminus J$ containing $F$. If $F$ were a proper subset of $V$, [L6] would give a polygonal path in $V$ from a point of $F$ to a point of $V\setminus F$. The first point at which it leaves $F$ would lie in $\operatorname{Fr}(F)\cap V=J\cap V=\varnothing$. Thus $F=V$, and $V$ is the bounded region because $F\subseteq U$. In this AC-qualified hybrid argument, invoke [F2] for Jordan separation in the crosscut proof of step 1.3 even when $J$ happens to be polygonal; the optional [F1] choice-free branch of that earlier proof is not used here. Apply the bounded case of step 1.3 to $J$, $u,v$ and the polygonal arc $Q$: the curves $D_i=J_i\cup Q$ are Jordan curves and graph cycles of the new drawing, $F\setminus Q=Y_1\sqcup Y_2$, and the frontier of $Y_i$ is $D_i$. Every old face $F^{\prime}\ne F$ misses the relative interior of $Q$, so it remains connected and open in the complement of the new drawing. Its old frontier is a Jordan graph cycle contained in the old graph and hence in the new graph, so $F^{\prime}$ is also closed in that new complement. It therefore remains one component with the same frontier; the exterior region of $C$ is among these unchanged faces. Hence the invariant passes to the new drawing, and an ear with $k$ edges contributes $k-1$ vertices, $k$ edges and one region, so $V-E+F$ is unchanged. Induction over the finitely many ears proves both hybrid conclusions. All selections here are finite, and AC enters only through [F2], used for every Jordan crosscut in this hybrid argument. [A1, F2, L2, L6, L7, step 1.2, step 1.3] ∎

## Remarks

The arbitrary-simple-arc facial-cycle, Euler, bipartite-bound and $K_{3,3}$
claims belong to the later post-Jordan–Schönflies extension item. The hybrid
case above is limited to one arbitrary Jordan boundary with polygonal interior
edges, so it does not use or anticipate that later result. The crosscut claim
of step 1.3 covers both components of the complement of $J$, which is what
allows step 2.1 to split the unbounded face as well; no disk-closure,
local-flatness or Schönflies assertion is used anywhere above.
