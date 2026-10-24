---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/def-klein-bottle.json
  precheck: n/a
id: def-klein-bottle
kind: definition
title: "The Klein bottle as a square quotient"
status: published
origin: pipeline
deps: [def-topological-manifold-without-boundary, def-quotient-topology, thm-heine-borel-rn, thm-compact-subset-of-a-hausdorff-space-is-closed]
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Gallier and Xu, A Guide to the Classification Theorem for Compact Surfaces"
      url: "https://www.cis.upenn.edu/~jean/surfclassif-root.pdf"
      locator: "Chapter 1 §1.2, Figure 1.13(a), printed p.13; Chapter 6 §6.2, Figure 6.3, printed pp.84–85"
    - title: "Koch, Classification of Surfaces"
      url: "https://pages.uoregon.edu/koch/math431/Surfaces.pdf"
      locator: "§3, Theorem 4, printed pp.5–6"
pipeline_run: frontier-36-complete
---

## Definition

The **Klein bottle** is the quotient $K$ of the unit square $Q=[0,1]^2$ by

$$ (x,0)\sim(x,1),\qquad (0,y)\sim(1,1-y) $$

with the quotient topology ([[def-quotient-topology]]). The named surface uses
the convention for topological manifolds without boundary in
[[def-topological-manifold-without-boundary]].

The four corners form one vertex class: the horizontal pairing identifies
$(0,0)$ with $(0,1)$ and $(1,0)$ with $(1,1)$, while the vertical pairing
identifies $(0,0)$ with $(1,1)$ and $(0,1)$ with $(1,0)$. There are two edge
classes and one face. The four corner sectors join, under the paired edge germs, in the cycle
$(00)-(01)-(10)-(11)-(00)$: the bottom-top pairing joins $(00)$ to $(01)$ and
$(10)$ to $(11)$, while the left-right pairing joins $(00)$ to $(11)$ and
$(01)$ to $(10)$. Thus a neighborhood of the vertex is a disk. Interior
points already have disk neighborhoods, and the two half-disks at an edge
interior join to a disk. Thus the quotient has no boundary.

The square $Q$ is compact by [[thm-heine-borel-rn]]. The quotient is compact as
the continuous image of $Q$ and connected as the image of a connected square.
Its edge-pairing relation is a
finite union of the diagonal, closed graphs of the two affine edge maps, and
finitely many vertex pairs, hence is closed in $Q\times Q$. The product
$Q\times Q=[0,1]^4$ is compact by the same Heine–Borel theorem. If $q:Q\to K$ is
the quotient map, then for closed $F\subset Q$ the saturation
$q^{-1}(q(F))$ is the projection of that closed relation intersected with
$F\times Q$; it is compact and therefore closed in $Q$
([[thm-compact-subset-of-a-hausdorff-space-is-closed]]). The quotient topology
makes $q(F)$ closed. Distinct equivalence classes are disjoint compact
subsets of the Hausdorff square, so they have disjoint open neighborhoods
$U,V$ ([[thm-compact-subset-of-a-hausdorff-space-is-closed]]). The open sets
$K\setminus q(Q\setminus U)$ and
$K\setminus q(Q\setminus V)$ separate their quotient points, proving
Hausdorffness. A countable basis for $Q$ gives a countable basis for $K$ by
taking, for each finite union $B$ of basis members,
$K\setminus q(Q\setminus B)$: these are open, and compactness of each fiber
shows they refine every quotient-open neighborhood. (Each fiber is closed in
the compact square, hence compact.) The definition and this finite verification
use no full choice axiom; any finite selection is covered by finite choice.

Orient the square boundary counterclockwise. The bottom and top sides form
the oppositely traversed $a,a^{-1}$ pair; the right and left sides form the
equally traversed $b,b$ pair. The one-polygon word is therefore
$aba^{-1}b$. The later example checks its orientability and Euler
characteristic directly.

## Remarks

The arrows below specify the edge identifications on the square, before
passing to the quotient. The two $a$ arrows point right, representing
$(x,0)\sim(x,1)$; the two $b$ arrows point in opposite vertical directions,
representing $(0,y)\sim(1,1-y)$.

```tikz
\begin{tikzpicture}[scale=1.2]
\draw[thick] (0,0) -- (3,0) -- (3,3) -- (0,3) -- (0,0);
\draw[thick,->] (1.1,0) -- (1.9,0);
\draw[thick,->] (1.1,3) -- (1.9,3);
\draw[thick,->] (0,1.9) -- (0,1.1);
\draw[thick,->] (3,1.1) -- (3,1.9);
\node[below] at (1.5,0) {$a$};
\node[above] at (1.5,3) {$a$};
\node[left] at (0,1.5) {$b$};
\node[right] at (3,1.5) {$b$};
\fill (0,0) circle (1.5pt);
\fill (3,0) circle (1.5pt);
\fill (0,3) circle (1.5pt);
\fill (3,3) circle (1.5pt);
\node[below left] at (0,0) {$(0,0)$};
\node[below right] at (3,0) {$(1,0)$};
\node[above left] at (0,3) {$(0,1)$};
\node[above right] at (3,3) {$(1,1)$};
\node at (1.5,1.5) {$Q$};
\end{tikzpicture}
```

All four marked corners have the same image under $q:Q\to K$. Reading the
boundary counterclockwise from $(0,0)$ gives $aba^{-1}b$: the top is traversed
against its arrow, while the other three sides are traversed along theirs.
The square depicts gluing data, not an embedding of $K$ in three-dimensional
space. The verification above is independent of this illustration.
