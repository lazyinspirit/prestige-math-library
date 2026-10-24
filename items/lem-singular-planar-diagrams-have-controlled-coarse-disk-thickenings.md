---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/lem-singular-planar-diagrams-have-controlled-coarse-disk-thickenings.json
  precheck: pass
id: "lem-singular-planar-diagrams-have-controlled-coarse-disk-thickenings"
kind: "lemma"
title: "Controlled coarse triangulation of singular planar diagrams"
status: published
origin: "pipeline"
deps: ["lem-relator-expressions-give-controlled-singular-planar-diagrams", "def-bounded-edge-coarse-triangular-filling", "lem-finite-polygonal-disk-and-collar-surgery"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
sources:
  scraped: []
  references:
    - title: "Drutu–Kapovich, Geometric Group Theory — §7.10.2 canonical enlargement after Definition 7.98, PDF pp.261–262; local compatible 4d/8/4k subdivision count"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
pipeline_run: "phase-2-hg-prerequisite"
proof_strategy: direct
---

## Statement

A diagram supplied by the preceding construction, with $E$ edges, at most $m$ faces, outer length $n$ and total face incidence $I\le Lm$, has a coarse triangular disk retaining its outer vertex walk up to inserted repetitions, with edge bound $r=\max(1,L)$ and at most $16E+4I+4$ triangles. In particular it has at most $20(L+1)(m+n+1)$ triangles when $E\le Lm+n$. This includes loops, monogons, bigons, repeated occurrences and zero-face diagrams.

## Facts & Assumptions

**Given:** A finite diagram supplied by the expression lemma, with its Cayley vertex labels and filled bounded regions; edge count $E$, expression face bound $m$, outer length $n$, total face incidence $I$, and $I\le Lm$.

[F1] Every bounded region is a face with preserved characteristic occurrence walk; $E\le Lm+n$ and labels are consistent. ([[lem-relator-expressions-give-controlled-singular-planar-diagrams]]).

[F2] The disk-and-band neighbourhood becomes a disk when its inner boundary circles are filled. ([[lem-finite-polygonal-disk-and-collar-surgery]]).

[F3] Only adjacent vertex distances are required, and all domain triangles count. ([[def-bounded-edge-coarse-triangular-filling]]).

## Proof

**Proof technique:** direct.

1.1 Take the vertex disks and edge bands from [F2]. For a vertex of degree $d\ge1$, mark both endpoints and the midpoint of each of its d attachment intervals, and the midpoint of each intervening sector. There are $4d$ boundary subdivision vertices. Triangulate this disk as a fan from a new center, transporting a convex polygon fan by a boundary-preserving disk parameterization if necessary. A loop contributes two distinct attachments. [F2]

2.1 Each band has its end midpoints already marked; mark one midpoint on each long shore as well. Its subdivided boundary is an 8-gon; cone it from its own center into eight triangles. The attachments agree with the two subdivisions on every vertex-disk attachment interval. Along a bounded face of k occurrences, its neighbourhood boundary traverses one long shore and one vertex sector per occurrence, each divided in two. Thus it is a simple $4k$-gon. Cap it and triangulate by an abstract center fan transported to the cap. This requires no visibility from a geometric center of a nonconvex face. [step 1.1, F1, F2]

3.1 Let p be the actual number of faces. There is one such cap for each bounded graph region, hence exactly p caps with $p\le m$ and total occurrence count I by [F1]. The union fills all bounded complementary circles of the neighbourhood and is a genuine closed disk by [F2]. Its count is $\sum_v4\deg(v)+8E+4I=8E+8E+4I=16E+4I$, since each edge contributes two germs even when it is a loop. Distinct disk/band/cap centers and the compatible subdivided seams give a combinatorial triangulation. Monogons and bigons have 4 and 8 cap boundary vertices, respectively, so the same count applies. [step 1.1, step 2.1, F1, F2]

3.2 Assign every vertex of a vertex disk, including its center, the original graph vertex label. On each band choose one of its two endpoint labels for its center and both long-shore midpoints; the end vertices keep their corresponding vertex-disk labels. All band triangle edges then have length at most one in the Cayley vertex metric. No seam has conflicting labels. Choose one boundary label for each cap center. Every boundary label on a k-occurrence cap lies on the same relator walk, and can be reached from the chosen label by at most k generator steps, so every cap edge has length at most $k\le L$; the other cap edges lie on band shores or constant vertex sectors. Therefore all edge lengths are at most $\max(1,L)$. [step 2.1, F1, F3]

4.1 On an outside edge occurrence, the two long-shore segments read its endpoint labels in the original order with one repetition; every intervening vertex sector is constant. Thus the outer cyclic list is the original walk with inserted repeated labels, even at bridges, loops or cut vertices. If $E=0$, connectedness gives one vertex and no face; use a square with a center and four triangles, all with that vertex label. This realizes the length-zero walk up to repetitions. [step 3.2, F1, F3]

5.1 In all cases $N\le16E+4I+4\le20Lm+16n+4\le20(L+1)(m+n+1)$ for $L,m,n\ge0$. The disk topology, preserved boundary and edge bound in the previous steps give the promised coarse filling with this count. [step 3.1, step 3.2, step 4.1, F1, F3, algebra] ∎

## Remarks

The local models below show the subdivision bookkeeping in steps 1.1–3.2: a degree-two vertex disk, an edge band, and a two-occurrence cap. Dots are subdivision vertices; each center is a new vertex. The blue sides of the first two models are attachment intervals, each split in two, so they match when glued. All vertices of the vertex disk have one Cayley label. In the band, the three vertices on either end have that endpoint's label; its center and both shore midpoints may all receive the left endpoint's label.

```tikz
\begin{tikzpicture}[scale=1.05]
\begin{scope}[xshift=0cm]
\coordinate (v0) at (-1,0.8);
\coordinate (v1) at (-1,0);
\coordinate (v2) at (-1,-0.8);
\coordinate (v3) at (0,-0.8);
\coordinate (v4) at (1,-0.8);
\coordinate (v5) at (1,0);
\coordinate (v6) at (1,0.8);
\coordinate (v7) at (0,0.8);
\coordinate (vc) at (0,0);
\draw[gray] (vc) -- (v0);
\draw[gray] (vc) -- (v1);
\draw[gray] (vc) -- (v2);
\draw[gray] (vc) -- (v3);
\draw[gray] (vc) -- (v4);
\draw[gray] (vc) -- (v5);
\draw[gray] (vc) -- (v6);
\draw[gray] (vc) -- (v7);
\draw[blue,thick] (v0) -- (v1);
\draw[blue,thick] (v1) -- (v2);
\draw[red,thick] (v2) -- (v3);
\draw[red,thick] (v3) -- (v4);
\draw[blue,thick] (v4) -- (v5);
\draw[blue,thick] (v5) -- (v6);
\draw[red,thick] (v6) -- (v7);
\draw[red,thick] (v7) -- (v0);
\fill (v0) circle (1.5pt);
\fill (v1) circle (1.5pt);
\fill (v2) circle (1.5pt);
\fill (v3) circle (1.5pt);
\fill (v4) circle (1.5pt);
\fill (v5) circle (1.5pt);
\fill (v6) circle (1.5pt);
\fill (v7) circle (1.5pt);
\fill (vc) circle (1.5pt);
\node at (0,1.65) {Vertex disk: $d=2$};
\end{scope}
\begin{scope}[xshift=3.5cm]
\coordinate (b0) at (-1,0.8);
\coordinate (b1) at (-1,0);
\coordinate (b2) at (-1,-0.8);
\coordinate (b3) at (0,-0.8);
\coordinate (b4) at (1,-0.8);
\coordinate (b5) at (1,0);
\coordinate (b6) at (1,0.8);
\coordinate (b7) at (0,0.8);
\coordinate (bc) at (0,0);
\draw[gray] (bc) -- (b0);
\draw[gray] (bc) -- (b1);
\draw[gray] (bc) -- (b2);
\draw[gray] (bc) -- (b3);
\draw[gray] (bc) -- (b4);
\draw[gray] (bc) -- (b5);
\draw[gray] (bc) -- (b6);
\draw[gray] (bc) -- (b7);
\draw[blue,thick] (b0) -- (b1);
\draw[blue,thick] (b1) -- (b2);
\draw[red,thick] (b2) -- (b3);
\draw[red,thick] (b3) -- (b4);
\draw[blue,thick] (b4) -- (b5);
\draw[blue,thick] (b5) -- (b6);
\draw[red,thick] (b6) -- (b7);
\draw[red,thick] (b7) -- (b0);
\fill (b0) circle (1.5pt);
\fill (b1) circle (1.5pt);
\fill (b2) circle (1.5pt);
\fill (b3) circle (1.5pt);
\fill (b4) circle (1.5pt);
\fill (b5) circle (1.5pt);
\fill (b6) circle (1.5pt);
\fill (b7) circle (1.5pt);
\fill (bc) circle (1.5pt);
\node at (0,1.65) {Band: $8$ triangles};
\end{scope}
\begin{scope}[xshift=7cm]
\coordinate (q0) at (-1,0.5);
\coordinate (q1) at (-1,-0.5);
\coordinate (q2) at (-0.5,-1);
\coordinate (q3) at (0.5,-1);
\coordinate (q4) at (1,-0.5);
\coordinate (q5) at (1,0.5);
\coordinate (q6) at (0.5,1);
\coordinate (q7) at (-0.5,1);
\coordinate (qc) at (0,0);
\draw[gray] (qc) -- (q0);
\draw[gray] (qc) -- (q1);
\draw[gray] (qc) -- (q2);
\draw[gray] (qc) -- (q3);
\draw[gray] (qc) -- (q4);
\draw[gray] (qc) -- (q5);
\draw[gray] (qc) -- (q6);
\draw[gray] (qc) -- (q7);
\draw[blue,thick] (q0) -- (q1);
\draw[blue,thick] (q1) -- (q2);
\draw[red,thick] (q2) -- (q3);
\draw[red,thick] (q3) -- (q4);
\draw[blue,thick] (q4) -- (q5);
\draw[blue,thick] (q5) -- (q6);
\draw[red,thick] (q6) -- (q7);
\draw[red,thick] (q7) -- (q0);
\fill (q0) circle (1.5pt);
\fill (q1) circle (1.5pt);
\fill (q2) circle (1.5pt);
\fill (q3) circle (1.5pt);
\fill (q4) circle (1.5pt);
\fill (q5) circle (1.5pt);
\fill (q6) circle (1.5pt);
\fill (q7) circle (1.5pt);
\fill (qc) circle (1.5pt);
\node[font=\scriptsize] at (-1.25,0.625) {$q_0$};
\node[font=\scriptsize] at (-1.25,-0.625) {$q_1$};
\node[font=\scriptsize] at (-0.625,-1.25) {$q_2$};
\node[font=\scriptsize] at (0.625,-1.25) {$q_3$};
\node[font=\scriptsize] at (1.25,-0.625) {$q_4$};
\node[font=\scriptsize] at (1.25,0.625) {$q_5$};
\node[font=\scriptsize] at (0.625,1.25) {$q_6$};
\node[font=\scriptsize] at (-0.625,1.25) {$q_7$};
\node at (0,1.65) {Cap: $k=2$};
\end{scope}
\end{tikzpicture}
```

On the cap, $q_0q_1q_2$ and $q_4q_5q_6$ are the two long shores (blue); $q_2q_3q_4$ and $q_6q_7q_0$ are the intervening vertex sectors (red). Thus each occurrence contributes four boundary segments. This is an abstract disk model transported by a boundary-preserving parametrization, not a claim that the original face is convex or that its characteristic boundary walk is embedded. Its eight boundary vertices are distinct even when their graph images or Cayley labels repeat. The same alternating shore–sector pattern gives $4k$ cap vertices in general. The vertex-disk model shows two distinct attachments; a loop uses two distinct attachments at the same vertex, as in step 1.1.

For a traversal of a band shore from endpoint label $u$ to endpoint label $v$, choosing the midpoint label $u$ gives $u,u,v$ (the reverse traversal gives $v,u,u$). Vertex sectors insert only repeated labels. This illustrates the outer-walk convention of step 4.1, including distinct occurrences at bridges and cut vertices; it makes no injectivity assertion about the walk. The proof and all bounds above are independent of the schematic.
