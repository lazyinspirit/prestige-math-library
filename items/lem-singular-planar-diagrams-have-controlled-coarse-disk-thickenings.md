---
id: "lem-singular-planar-diagrams-have-controlled-coarse-disk-thickenings"
kind: "lemma"
title: "Controlled coarse triangulation of singular planar diagrams"
status: published
origin: "pipeline"
deps: ["lem-relator-expressions-give-controlled-singular-planar-diagrams", "def-bounded-edge-coarse-triangular-filling", "lem-finite-polygonal-disk-and-collar-surgery"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
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

**Given:** A finite diagram supplied by the expression lemma, with its Cayley vertex labels and filled bounded regions; edge count E, expression face bound m, outer length n, total face incidence I, and I<=Lm.

[F1] Every bounded region is a face with preserved characteristic occurrence walk; E<=Lm+n and labels are consistent. ([[lem-relator-expressions-give-controlled-singular-planar-diagrams]]).

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
