---
id: lem-csm-frontier-medial-loop-normalization
kind: lemma
title: "Classical FK medial-loop normalization"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-csm-frontier-finite-potts-fk
  - def-plane-graph-face-and-boundary
  - def-plane-dual-multigraph
  - thm-plane-dual-exists-and-double-dual-recovers-primal
  - cor-euler-formula-for-disconnected-plane-graphs
  - def-temperley-lieb-diagram-category
  - thm-temperley-lieb-diagram-category-laws
  - cor-components-of-open-subsets-of-rn-are-polygonally-connected
dependency_roles:
  def-csm-frontier-finite-potts-fk: mathematical-premise
  def-plane-graph-face-and-boundary: mathematical-premise
  def-plane-dual-multigraph: mathematical-premise
  thm-plane-dual-exists-and-double-dual-recovers-primal: mathematical-premise
  cor-euler-formula-for-disconnected-plane-graphs: mathematical-premise
  def-temperley-lieb-diagram-category: mathematical-premise
  thm-temperley-lieb-diagram-category-laws: mathematical-premise
  cor-components-of-open-subsets-of-rn-are-polygonally-connected: mathematical-premise
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; the graphs, edge subsets, and diagram
  compositions are finite."
proof_strategy: direct
physical_scope: null
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Hugo Duminil-Copin, Geometric Representations of Lattice Spin Models,
        Cours Peccot lecture notes"
      url: https://www.ihes.fr/~duminil/publi/Courspeccot2.pdf
      locator: "Chapter 4, §4.1, printed pp. 37–39: free-boundary loop construction
        and loop-weight representation for finite square-lattice subgraphs."
    - title: "Linnea Grans-Samuelsson, Lawrence Liu, Yifei He, Jesper Lykke Jacobsen,
        and Hubert Saleur, The action of the Virasoro algebra in the
        two-dimensional Potts and loop models at generic Q"
      url: https://arxiv.org/pdf/2007.11539
      locator: "§3.2, PDF pp. 9–10: FK/loop correspondence, frontier partitions, and
        the warning about toroidal boundary subtleties."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

Let $G=(V,E)$ be a finite connected simple plane graph, let $F(G)$ be its face set, and choose its unbounded face as the free exterior face. All vertices are free: no boundary vertices are identified or fixed. Fix an integer $Q\geq2$ and finite edge activities $v_e\geq0$. For $A\subseteq E$, write $G_A=(V,A)$ and let $k(A)$ count its connected components, including isolated vertices. Let $G^*$ be the dual multigraph with one vertex for each face and one dual edge $e^*$ crossing each primal edge $e$; loops and parallel edges are retained. Set $A^*:=\{e^*:e\in E\setminus A\}$ and let $k^*(A)$ count the connected components of the spanning dual subgraph $(F(G),A^*)$, counting isolated faces; the unbounded exterior face is one dual vertex counted once.

The medial graph has one four-valent vertex at each primal-dual edge crossing, joined along the corners of the overlay. At each crossing label the four medial half-edges $h_1,h_2,h_3,h_4$ in cyclic order, with $h_1,h_3$ on the primal-edge sides and $h_2,h_4$ on the dual-edge sides. For $e\in A$, smooth by the noncrossing pairs $(h_4,h_1)$ and $(h_2,h_3)$; for $e\notin A$, smooth by $(h_1,h_2)$ and $(h_3,h_4)$. Equivalently, these curves are the boundary of $N_A$, formed from disjoint small vertex disks and narrow bands along the edges in $A$. Define $\ell(A)$ as the number of connected boundary loops of $N_A$; this also covers a one-vertex graph with no edges. No extra exterior wiring or boundary weight is imposed. Then
$$Z_{FK}(Q,\mathbf v)=Q^{|V|/2}\sum_{A\subseteq E}(\sqrt Q)^{\ell(A)}\prod_{e\in A}\frac{v_e}{\sqrt Q}.$$
The loop value is $\delta=\sqrt Q$. This is a finite mathematical identity; it asserts no semisimplicity, representation faithfulness, trace, categorification, or empirical claim.

## Statement references

[[def-csm-frontier-finite-potts-fk]]

[[def-plane-graph-face-and-boundary]]

[[def-plane-dual-multigraph]]

[[thm-plane-dual-exists-and-double-dual-recovers-primal]]

[[cor-euler-formula-for-disconnected-plane-graphs]]

[[def-temperley-lieb-diagram-category]]

[[thm-temperley-lieb-diagram-category-laws]]

[[cor-components-of-open-subsets-of-rn-are-polygonally-connected]]

## Facts & Assumptions

**Given:** A finite connected simple plane graph $G$, its fixed plane embedding, integer $Q\geq2$, finite activities $v_e\geq0$, and free vertices and exterior face.

[F1] [[def-csm-frontier-finite-potts-fk]]: $G_A=(V,A)$ is spanning, $k(A)$ counts every component including isolated vertices, and $Z_{FK}=\sum_{A\subseteq E}Q^{k(A)}\prod_{e\in A}v_e$.

[F2] [[def-plane-graph-face-and-boundary]]: a plane graph is a finite simple graph with polygonal edge arcs meeting only at shared endpoints; its faces are the regions of the complement.

[F3] [[def-plane-dual-multigraph]] and [[thm-plane-dual-exists-and-double-dual-recovers-primal]]: each face gives one dual vertex and every primal edge has one crossing dual edge, with loops and parallel edges allowed.

[F4] [[cor-euler-formula-for-disconnected-plane-graphs]]: for a plane subgraph with $k$ components, $|V|-|E|+|F|=1+k$, including isolated vertices and the null graph.

[F5] [[def-temperley-lieb-diagram-category]]: stacking places the left factor above the right factor; each closed cycle removed in a composition contributes the loop value $\delta$.

[F6] [[thm-temperley-lieb-diagram-category-laws]]: these diagram compositions are well-defined and associative for every commutative coefficient ring and every $\delta$.

[F7] Every connected component of an open subset of $\mathbb R^n$ is open and polygonally connected ([[cor-components-of-open-subsets-of-rn-are-polygonally-connected]]).

## Proof

**Proof technique:** direct planar component count.

1.1 Fix $A\subseteq E$. The drawing of $G_A$ is a finite union of points and closed line segments, hence is closed in $\mathbb R^2$. Its complement is open, so each of its face components is open and polygonally connected by [F7]. The original faces are vertices of $G^*$. Two such faces lie in the same face of $G_A$ exactly when they are connected by dual edges corresponding to $E\setminus A$. A dual path crosses only absent primal edges and therefore stays in the complement of $G_A$. Conversely, a path between two original face points inside one face of $G_A$ can be chosen polygonal; perturb its finitely many segments to avoid primal vertices and to cross edge interiors transversely. Because it avoids $G_A$, every crossed edge lies in $E\setminus A$, so the crossed dual edges form a path in $(F(G),A^*)$. Thus the faces of $G_A$ correspond bijectively to the components counted by $k^*(A)$. [given, F2, F3, F7, construct]

2.1 Apply [F4] to the spanning plane subgraph $G_A$. Its vertex set is $V$, its edge set is $A$, its component count is $k(A)$, and by step 1.1 its face count is $k^*(A)$. Therefore $|V|-|A|+k^*(A)=1+k(A)$, or $k(A)-k^*(A)=|V|-|A|-1$. [F1, F4, step 1.1, algebra]

2.2 View the fixed embedding on the sphere $S^2$ by adding the point at infinity. By [F4] the plane subgraph $G_A$ has finitely many faces; choose one point in each. For every vertex $x\in V$, including each vertex isolated in $G_A$, choose a closed polygonal disk $D_x$ so that the disks are pairwise disjoint and avoid all the chosen face points. Choose pairwise disjoint attachment intervals on each $\partial D_x$, one for each edge incident to $x$ and in the cyclic order of the embedding. For each $e\in A$, choose a closed polygonal rectangular band around the part of its polygonal arc outside its endpoint disks; make the bands pairwise disjoint, disjoint from all nonendpoint disks, and attach them to the corresponding intervals. These choices are possible with sufficiently small radii and widths because the graph is finite and edge arcs meet only at shared endpoints. Let $N_A$ be the union of these disks and bands. Each band joins exactly its two endpoint disks, and distinct bands otherwise remain disjoint, so the connected components of $N_A$ correspond exactly to those of $G_A$, including isolated-vertex disks; hence there are $k(A)$. Its boundary is a finite disjoint union of simple polygonal circles. In particular, the one-vertex graph with no edges gives one disk and one boundary loop. At a primal-dual crossing, the two sides of an occupied-edge band join the medial half-edges as $(h_4,h_1)$ and $(h_2,h_3)$; when the edge is absent, there is no band there and the two face-side sectors join as $(h_1,h_2)$ and $(h_3,h_4)$. The cyclic ordering of the attachment intervals fixes these local continuations, so $\partial N_A$ gives exactly the smoothings in the Statement and has $\ell(A)$ loops. Inside each face $U$ of $G_A$, the disk-and-band pieces form collars along the facial boundary side occurrences: each band side is a polygonal strip, and intervening vertex-disk sectors join consecutive strips in cyclic order. Repeated vertices or edges in a facial boundary walk are treated as separate side occurrences, so a bridge's two sides remain distinct; an isolated vertex gives a punctured-disk collar in its unique incident face. Choose all radii and widths small enough that distinct collars meet only at their prescribed continuations within the same face. Trimming them leaves a nonempty core $U_A=U\setminus N_A$, since the selected point of $U$ lies outside $N_A$. The core is connected: for finite points use the polygonal path in the plane face $U$ supplied by [F7], perturb the path to meet the finitely many polygonal collar sides transversely, and replace each excursion into a collar by a parallel path just outside $N_A$ along that collar's connected $U$-facing boundary, with the vertex-disk sector prescribing the continuation at each turn. For the unbounded face, $N_A$ is bounded; outside a sufficiently large disk its complement contains the whole exterior, and a ray there joins finite points to the point at infinity in the one-point compactification. Thus the same connected core includes infinity. Each face therefore leaves exactly one nonempty component of $S^2\setminus N_A$. Since $N_A$ contains $G_A$, these trimmed faces are all the components of $S^2\setminus N_A$; by step 1.1 their number is $k^*(A)$. The regions of $S^2\setminus\partial N_A$ are the interiors of the $k(A)$ components of $N_A$ together with those $k^*(A)$ complementary components, so there are $k(A)+k^*(A)$ regions. [F2, F3, F4, F7, given, step 1.1, construct]

3.1 Subdivide each of the disjoint polygonal boundary loops from step 2.2 at at least three distinct points and regard the result as a finite simple plane graph $H_A$, with one cycle component per loop. Each cycle has the same number of vertices and edges, so $|V(H_A)|=|E(H_A)|$, and $H_A$ has $\ell(A)$ connected components. By [F4], its complement therefore has $|F(H_A)|=1+\ell(A)$ regions. These are the regions counted in step 2.2, hence $k(A)+k^*(A)=1+\ell(A)$ and $\ell(A)=k(A)+k^*(A)-1$. [F4, step 2.2, construct, algebra]

4.1 Adding the identities in steps 2.1 and 3.1 yields $2k(A)=|V|-|A|+\ell(A)$. Since $Q\geq2$, its positive square root $\delta=\sqrt Q$ is nonzero, and $Q^{k(A)}\prod_{e\in A}v_e=Q^{|V|/2}(\sqrt Q)^{\ell(A)}\prod_{e\in A}\frac{v_e}{\sqrt Q}$. This equality also holds when an activity is zero, because both corresponding terms vanish. [given, step 2.1, step 3.1, algebra]

5.1 Each subset $A$ selects exactly one of the two noncrossing smoothings at every medial vertex, so summing the termwise identity of step 4.1 over $A\subseteq E$ gives the displayed loop formula. In any fixed rectangular decomposition, the local smoothings are Temperley–Lieb diagrams; [F5] fixes the left-above-right and $\delta$ conventions, and [F6] makes the stacked product independent of parentheses. Thus the local loop weight is exactly $\delta=\sqrt Q$, without invoking a trace or any representation-theoretic property. [F1, F5, F6, step 4.1, algebra] ∎

## Remarks

The local smoothing convention is shown below. The four ends are listed cyclically; $h_1,h_3$ are primal-side half-edges and $h_2,h_4$ are dual-side half-edges. The occupied pairing is used when $e\in A$ and the absent pairing when $e\notin A$. The crossing pairing is never used. The proof counts connected components and regions; it does not infer the partition identity from the picture.

```tikz
\begin{tikzpicture}[scale=0.8, every node/.style={font=\small}]
  \begin{scope}[shift={(0,0)}]
    \draw[gray] (0,0.95)--(0,0.34);
    \draw[gray] (0.95,0)--(0.34,0);
    \draw[gray] (0,-0.95)--(0,-0.34);
    \draw[gray] (-0.95,0)--(-0.34,0);
    \draw[thick,blue] (0,0.34) .. controls (-0.10,0.18) and (-0.18,0.10) .. (-0.34,0);
    \draw[thick,blue] (0.34,0) .. controls (0.18,-0.10) and (0.10,-0.18) .. (0,-0.34);
    \node[above] at (0,1.05) {$h_1$};
    \node[right] at (1.05,0) {$h_2$};
    \node[below] at (0,-1.05) {$h_3$};
    \node[left] at (-1.05,0) {$h_4$};
    \node at (0,-1.55) {$e\in A$: $(h_4,h_1),(h_2,h_3)$};
  \end{scope}
  \begin{scope}[shift={(3.9,0)}]
    \draw[gray] (0,0.95)--(0,0.34);
    \draw[gray] (0.95,0)--(0.34,0);
    \draw[gray] (0,-0.95)--(0,-0.34);
    \draw[gray] (-0.95,0)--(-0.34,0);
    \draw[thick,red] (0,0.34) .. controls (0.10,0.18) and (0.18,0.10) .. (0.34,0);
    \draw[thick,red] (0,-0.34) .. controls (-0.10,-0.18) and (-0.18,-0.10) .. (-0.34,0);
    \node[above] at (0,1.05) {$h_1$};
    \node[right] at (1.05,0) {$h_2$};
    \node[below] at (0,-1.05) {$h_3$};
    \node[left] at (-1.05,0) {$h_4$};
    \node at (0,-1.55) {$e\notin A$: $(h_1,h_2),(h_3,h_4)$};
  \end{scope}
\end{tikzpicture}
```

The FK connectivity join $J_i$ in the transfer algorithm is an idempotent partition operation. It is not the Temperley–Lieb cup-cap generator, whose square contributes a factor $\delta$.
