---
id: lem-csm-frontier-medial-loop-normalization
kind: lemma
title: "Classical FK medial-loop normalization"
status: draft
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
dependency_roles:
  def-csm-frontier-finite-potts-fk: mathematical-premise
  def-plane-graph-face-and-boundary: mathematical-premise
  def-plane-dual-multigraph: mathematical-premise
  thm-plane-dual-exists-and-double-dual-recovers-primal: mathematical-premise
  cor-euler-formula-for-disconnected-plane-graphs: mathematical-premise
  def-temperley-lieb-diagram-category: mathematical-premise
  thm-temperley-lieb-diagram-category-laws: mathematical-premise
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; the graphs, edge subsets, and diagram compositions are finite."
proof_strategy: direct
physical_scope: null
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Hugo Duminil-Copin, Geometric Representations of Lattice Spin Models, Cours Peccot lecture notes"
      url: https://www.ihes.fr/~duminil/publi/Courspeccot2.pdf
      locator: "Chapter 4, §4.1, printed pp. 37–39: free-boundary loop construction and loop-weight representation for finite square-lattice subgraphs."
    - title: "Linnea Grans-Samuelsson, Lawrence Liu, Yifei He, Jesper Lykke Jacobsen, and Hubert Saleur, The action of the Virasoro algebra in the two-dimensional Potts and loop models at generic Q"
      url: https://arxiv.org/pdf/2007.11539
      locator: "§3.2, PDF pp. 9–10: FK/loop correspondence, frontier partitions, and the warning about toroidal boundary subtleties."
verification:
  precheck: pending
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

## Facts & Assumptions

**Given:** A finite connected simple plane graph $G$, its fixed plane embedding, integer $Q\geq2$, finite activities $v_e\geq0$, and free vertices and exterior face.

[F1] [[def-csm-frontier-finite-potts-fk]]: $G_A=(V,A)$ is spanning, $k(A)$ counts every component including isolated vertices, and $Z_{FK}=\sum_{A\subseteq E}Q^{k(A)}\prod_{e\in A}v_e$.

[F2] [[def-plane-graph-face-and-boundary]]: a plane graph is a finite simple graph with polygonal edge arcs meeting only at shared endpoints; its faces are the regions of the complement.

[F3] [[def-plane-dual-multigraph]] and [[thm-plane-dual-exists-and-double-dual-recovers-primal]]: each face gives one dual vertex and every primal edge has one crossing dual edge, with loops and parallel edges allowed.

[F4] [[cor-euler-formula-for-disconnected-plane-graphs]]: for a plane subgraph with $k$ components, $|V|-|E|+|F|=1+k$, including isolated vertices and the null graph.

[F5] [[def-temperley-lieb-diagram-category]]: stacking places the left factor above the right factor; each closed cycle removed in a composition contributes the loop value $\delta$.

[F6] [[thm-temperley-lieb-diagram-category-laws]]: these diagram compositions are well-defined and associative for every commutative coefficient ring and every $\delta$.

## Proof

**Proof technique:** direct planar component count.

1.1 Fix $A\subseteq E$. The original faces are vertices of $G^*$. Two such faces lie in the same face of $G_A$ exactly when they are connected by dual edges corresponding to $E\setminus A$. A dual path crosses only absent primal edges and therefore stays in the complement of $G_A$. Conversely, a path between two original face points inside one face of $G_A$ can be chosen polygonal; perturb its finitely many segments to avoid primal vertices and to cross edge interiors transversely. Because it avoids $G_A$, every crossed edge lies in $E\setminus A$, so the crossed dual edges form a path in $(F(G),A^*)$. Thus the faces of $G_A$ correspond bijectively to the components counted by $k^*(A)$. [given, F2, F3, construct]

2.1 Apply [F4] to the spanning plane subgraph $G_A$. Its vertex set is $V$, its edge set is $A$, its component count is $k(A)$, and by step 1.1 its face count is $k^*(A)$. Therefore $|V|-|A|+k^*(A)=1+k(A)$, or $k(A)-k^*(A)=|V|-|A|-1$. [F1, F4, step 1.1, algebra]

2.2 View the plane embedding on the sphere by adding the point at infinity, and take a sufficiently thin regular neighborhood $N_A$ of $G_A$, built from disjoint small vertex disks and bands along the edges in $A$. Its connected components retract onto those of $G_A$, so there are $k(A)$. At a primal-dual crossing, the boundary of an occupied-edge band follows the pairs $(h_4,h_1)$ and $(h_2,h_3)$; where the edge is absent, the two face-side sectors join and the boundary follows $(h_1,h_2)$ and $(h_3,h_4)$. Thus $\partial N_A$ is exactly the state of smoothings defined in the Statement and has $\ell(A)$ loops. The components of $S^2\setminus G_A$ are its faces, counted by $k^*(A)$ in step 1.1. Removing the thin vertex disks and edge bands from each such face only removes boundary collars and leaves it connected: any polygonal path in the face can be pushed along the same face-side boundary of each disk or band it meets. Hence $S^2\setminus N_A$ also has $k^*(A)$ components. The complement of $\partial N_A$ is the disjoint union of the interiors of $N_A$ and $S^2\setminus N_A$, so its number of regions is $k(A)+k^*(A)$. [F2, F3, given, step 1.1, construct]

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
