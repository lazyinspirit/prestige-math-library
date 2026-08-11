---
id: prop-maximal-plane-triangulation-characterisation
kind: proposition
title: "A two-connected plane graph of order at least three is maximal exactly when every face is triangular"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-face-boundaries-in-two-connected-plane-graphs, def-maximal-plane-and-maximally-planar-graph, lem-plane-edge-face-incidence, thm-polygonal-jordan-curve, def-graph-walk-trail-path-and-cycle, lem-polygonal-crossing-parity-is-locally-constant, lem-polygonal-ray-general-position, def-plane-region-and-frontier, def-polygonal-arc-and-polygon, def-plane-graph-face-and-boundary, cor-components-of-open-subsets-of-rn-are-polygonally-connected]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Proposition 4.2.8"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf"
pipeline_run: null
---

## Statement

A **two-connected** plane graph with at least three vertices is maximal plane if and only if it is a plane triangulation ([[def-maximal-plane-and-maximally-planar-graph]]). Two-connectivity is what makes every facial boundary a cycle ([[prop-face-boundaries-in-two-connected-plane-graphs]]); [[def-plane-graph-face-and-boundary]] assumes no boundary walk is a cycle until a connectivity result proves it, and the polygonal Jordan argument below is about polygons, not about walks that may repeat a vertex. Facial walks and cycles use [[lem-plane-edge-face-incidence]] and [[def-graph-walk-trail-path-and-cycle]].

## Facts & Assumptions

**Given:** A plane graph $G$ with at least three vertices.

[L1] A polygon has exactly two regions, one bounded and one unbounded, and each has frontier the polygon ([[thm-polygonal-jordan-curve]]).

[L2] In a two-connected plane graph, every facial boundary walk is a cycle ([[prop-face-boundaries-in-two-connected-plane-graphs]]).

[L3] For a polygon $P$ and a point $x\notin P$, the parity of the transverse crossings of a general-position ray from $x$ is independent of the ray, is constant on an open neighbourhood of $x$ in the complement, and is therefore constant on each region of $\mathbb R^2\setminus P$ ([[lem-polygonal-crossing-parity-is-locally-constant]]); such a ray exists because only finitely many directions meet a vertex or run along a segment ([[lem-polygonal-ray-general-position]]).

[L4] A region of the complement of a set is a connected component of that complement ([[def-plane-region-and-frontier]]), and every connected component of an open subset of $\mathbb R^n$ is open and polygonally connected ([[cor-components-of-open-subsets-of-rn-are-polygonally-connected]]).

[L5] If the relative interior of an edge meets the frontier of a face, the whole edge lies in that frontier ([[lem-plane-edge-face-incidence]]).

[L6] Each edge is a polygonal arc, a finite union of segments, and edge arcs meet only at a common endpoint ([[def-polygonal-arc-and-polygon]], [[def-plane-graph-face-and-boundary]]).

## Proof

**Proof technique:** direct.

1.1 Let $f$ be a face of $G$. By [L2] its boundary walk is a cycle $C$, drawn as a polygon. By [L5] every frontier point of $f$ in the relative interior of an edge puts that whole edge in the frontier, so $\operatorname{Fr}(f)$ is exactly the point set of $C$. Now $f$ is connected and disjoint from $C$, so it lies in one region $R_0$ of $C$ [L1, L4]; $f$ is open, and $\overline f\cap R_0=(f\cup C)\cap R_0=f$, so $f$ is also closed in $R_0$. A nonempty clopen subset of the connected $R_0$ is all of it, so **the face is one of the two regions of its own boundary cycle**. [L1, L2, L4, L5]

1.2 If instead every face is triangular, the interior of any proposed new plane edge is connected and disjoint from the drawing, so it lies in one face, with both endpoints on that face's boundary [L4]. Those endpoints are already adjacent because that boundary is a triangle, so no missing edge can be added. [given, L4]

2.1 Let $u$ be a vertex of $C$. By [L6] a small enough disc $D$ about $u$ contains no other vertex and meets the drawing only in initial straight segments of the finitely many edges at $u$. Deleting those segments leaves finitely many open sectors of $D$, each connected and disjoint from the drawing and hence inside a single face [L4]. Since $u\in\operatorname{Fr}(f)$, points of $f$ lie in every disc about $u$, so one sector $S$ satisfies $S\subseteq f$, and the straight radius from $u$ into $S$ meets the drawing only at $u$. [step 1.1, L4, L6]

3.1 Let $u\ne v$ be vertices of $C$, with radii as in step 2.1 and inner endpoints $u',v'\in f$. By step 1.1 $f$ is a region, hence an open connected plane set and polygonally connected [L4], so a polygonal path joins $u'$ to $v'$ inside $f$; discarding the portion between the first and last visit to each repeated point makes it simple. Concatenating the two radii with it gives a polygonal arc from $u$ to $v$ meeting the drawing only at $u$ and $v$. If $u$ and $v$ are nonadjacent in $G$, drawing the edge $uv$ along that arc keeps the drawing plane, so $G$ is not maximal plane. [step 1.1, step 2.1, L4]

4.1 Suppose now $G$ is maximal plane and some facial boundary cycle $C$ has length at least four. Let $u_1,u_2,u_3,u_4$ occur in this cyclic order on $C$ and let $P_1,P_2$ be the two $u_1$–$u_3$ subpaths of $C$, with $u_2$ on $P_1$ and $u_4$ on $P_2$. Both pairs are nonconsecutive on $C$, so by step 3.1 $u_1u_3$ and $u_2u_4$ are edges of $G$, neither an edge of $C$; write $e,e'$ for their arcs. They share no endpoint, so by [L6] the relative interior of each avoids $C$ and the other, and both avoid $f$ because they are part of the drawing. Hence $J_1=e\cup P_1$ and $J_2=e\cup P_2$ are polygons. [step 3.1, L6, assume-contra]

5.1 From any point off $C\cup e$ there is a ray meeting that finite union of segments transversely in finitely many nonvertex points, by the finiteness count of [L3], and one such ray is in general position for $C$, $e$, $J_1$ and $J_2$ at once. Its crossings with $J_1$ plus its crossings with $J_2$ equal its crossings with $C$ plus twice its crossings with $e$, so those three parities satisfy $J_1+J_2=C$ modulo two at every point off $C\cup e$. Now $f$ avoids $C$, $J_1$ and $J_2$ and is connected, so all three parities are constant on it, say $p_1$, $p_2$ and $p_1+p_2$. The relative interior of $e'$ is connected and also avoids $J_1$ and $J_2$, so its $J_1$- and $J_2$-parities are constant. Its endpoint $u_4$ is off $J_1$ and lies in $\operatorname{Fr}(f)$ by step 1.1, so a neighbourhood of $u_4$ off $J_1$ carrying a constant parity [L3] meets both $f$ and that relative interior, forcing the $J_1$-parity along $e'$ to be $p_1$; symmetrically $u_2\notin J_2$ forces the $J_2$-parity to be $p_2$. The $C$-parity along $e'$ is then $p_1+p_2$, that of $f$, so $e'$ meets the region of $C$ containing $f$ — which by step 1.1 is $f$ itself. That is impossible for part of the drawing, so the assumption fails and every facial boundary cycle has length three. [step 1.1, step 4.1, L3, discharge-contradiction]

6.1 The order assumption excludes the one- and two-vertex degeneracies, and steps 5.1 and 1.2 prove both directions. [step 5.1, step 1.2] ∎

