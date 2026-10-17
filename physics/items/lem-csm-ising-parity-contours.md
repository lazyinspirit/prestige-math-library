---
id: lem-csm-ising-parity-contours
kind: lemma
title: "Square-lattice even graphs and parity contour separation"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps: ["def-csm-finite-range-lattice-interaction"]
justified_by: []
dependency_roles: {"def-csm-finite-range-lattice-interaction": "mathematical-premise"}
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  scraped: []
  references:
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction (complete author PDF, revised 2017)"
      url: "https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf"
      locator: "Chapter 3, PDF pp. 127–132; Chapter 6, PDF pp. 265–289; Chapter 6 §6.12, PDF pp. 329–332 (printed pp. 311–314)."
    - title: "Junior Seminar in Mathematical Physics, Proofs from the Book: Ising, DLR, Dobrushin and Peierls sections (complete 99-page seminar notes)"
      url: "https://web.math.princeton.edu/~js129/PDFs/Junior_Seminar_in_Mathematical_Physics__Proofs_from_the_Book.pdf"
      locator: "PDF pp. 20–24, 31–43, and 52–55."
---

## Statement

Let $n\geq1$, set $B_n=[-n,n]^2\cap\mathbb Z^2$, let $s:B_n\to\{-1,+1\}$, and extend $s$ by $+1$ on $\mathbb Z^2\setminus B_n$. The dual lattice has vertex set $\mathbb Z^2+(\tfrac12,\tfrac12)$ and edges between its nearest-neighbor vertices. Draw a dual edge across each primal nearest-neighbor bond whose endpoint spins disagree. The resulting finite dual graph has even degree at every vertex and decomposes into edge-disjoint simple dual cycles. For each such cycle $\gamma$, define the inside of a primal site by the parity of intersections of the horizontal ray from that site to $+\infty$ with $\gamma$. Then the inside is finite and contained in $B_n$, and two neighboring primal sites have different inside parity exactly when their bond is crossed by $\gamma$. Consequently, if $s(0)=-1$, at least one cycle in the decomposition has the origin inside.

The schematic below places primal sites at integer-coordinate intersections and dual vertices at pairs of half-integers. Each thick dual segment crosses the perpendicular primal bond at its midpoint; the dashed ray from the origin crosses the displayed cycle once. The center spin is negative and the surrounding spins are positive. This is one local picture of the parity convention, not a proof of the separation or cycle-decomposition claims.

```tikz
\begin{tikzpicture}[scale=1.15]
  \foreach \x in {-1,0,1} {
    \draw[gray!55] (\x,-1.3) -- (\x,1.3);
    \draw[gray!55] (-1.3,\x) -- (1.3,\x);
  }
  \draw[red!75!black,dashed,->] (0,0) -- (1.25,0) node[right] {$+\infty$};
  \draw[very thick,blue!75!black] (-0.5,-0.5) -- (0.5,-0.5) -- (0.5,0.5) -- (-0.5,0.5) -- cycle;
  \node[draw,circle,fill=white,inner sep=1.5pt] at (-1,-1) {$+$};
  \node[draw,circle,fill=white,inner sep=1.5pt] at (0,-1) {$+$};
  \node[draw,circle,fill=white,inner sep=1.5pt] at (1,-1) {$+$};
  \node[draw,circle,fill=white,inner sep=1.5pt] at (-1,0) {$+$};
  \node[draw,circle,fill=white,inner sep=1.5pt] at (0,0) {$-$};
  \node[draw,circle,fill=white,inner sep=1.5pt] at (1,0) {$+$};
  \node[draw,circle,fill=white,inner sep=1.5pt] at (-1,1) {$+$};
  \node[draw,circle,fill=white,inner sep=1.5pt] at (0,1) {$+$};
  \node[draw,circle,fill=white,inner sep=1.5pt] at (1,1) {$+$};
  \foreach \x/\y in {-0.5/-0.5,0.5/-0.5,0.5/0.5,-0.5/0.5} {
    \node[draw,rectangle,fill=blue!75!black,inner sep=1.2pt] at (\x,\y) {};
  }
  \node[below] at (0,-1.45) {primal spins and bonds};
  \node[right] at (0.65,0.48) {dual contour};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** A square-lattice configuration with all exterior spins $+1$ and the nearest-neighbor mismatch graph on its dual square lattice.

[A1] The model uses the finite-range lattice configuration convention of [[def-csm-finite-range-lattice-interaction]].

## Proof

1.1 Around each dual vertex the product of the four primal nearest-neighbor spin products is $1$, since each corner spin occurs twice. Hence the number of disagreeing bonds incident to that vertex is even. The mismatch graph is finite because all spins outside the finite box are $+1$. [given, A1, algebra]

2.1 Start from an unused edge and extend a trail along unused edges. Since every vertex has even degree, the trail cannot stop at a vertex other than its starting vertex; finiteness therefore gives a closed trail. Taking the segment between the first repeated vertex extracts a simple cycle. Removing its edges preserves even degree at every vertex, so repeating the finite procedure decomposes every edge into edge-disjoint cycles. The square lattice has no loops, parallel edges, or triangles, so each cycle has length at least four. [step 1.1, construct]

3.1 Dual vertices have half-integer coordinates, so a ray from an integer-height primal site meets no dual vertex. For horizontally adjacent sites, the symmetric difference of their rightward rays is exactly the horizontal unit segment crossing their joining primal bond, so their parity differs exactly when that bond is crossed by $\gamma$. For vertically adjacent sites $u=(i,j)$ and $v=(i,j+1)$, choose an integer $M$ larger than every horizontal coordinate of $\gamma$ and consider the rectangle $[i,M]\times[j,j+1]$. Its boundary contains no dual vertices. As the closed cycle is traversed, the indicator of whether its current vertex lies inside this rectangle toggles at each transverse boundary crossing and returns to its starting value, so the total number of boundary crossings is even. There is no crossing on the far side $x=M$; the other crossings are exactly those of the two truncated horizontal rays from $u,v$ and the dual edge across the primal bond $\{u,v\}$. Hence the two ray-intersection counts have different parity exactly when that vertical bond is crossed by $\gamma$. [step 2.1, construct]

4.1 Every primal site outside a rectangle containing $\gamma$ has parity zero, since its ray either misses $\gamma$ or crosses the full cycle an even number of times; thus the inside is finite. In a plus-boundary box, any site outside the box has an outward lattice path to infinity lying entirely in the plus exterior. Along this path no bond is a mismatch, so step 3.1 keeps its parity zero; hence every cycle-inside site lies in the box. Along any primal path, the spin changes exactly on mismatch edges. A path from the origin to the all-plus exterior therefore crosses an odd number of mismatch edges if $s_0=-1$. For each cycle in the edge-disjoint decomposition from step 2.1, step 3.1 says its parity changes along the path exactly when that path crosses one of its edges; its parity is zero at the exterior endpoint. The sum modulo two of the cycle parity changes is the total mismatch-edge count, which is odd, so at least one cycle has origin parity one, as claimed. [given, step 2.1, step 3.1] ∎ 
