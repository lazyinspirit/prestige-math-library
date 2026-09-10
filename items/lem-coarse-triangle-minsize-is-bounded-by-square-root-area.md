---
id: "lem-coarse-triangle-minsize-is-bounded-by-square-root-area"
kind: "lemma"
title: "Coarse triangle minsize is bounded by square root of area"
status: "draft"
origin: "pipeline"
deps: ["lem-polygonal-boundary-crossing-for-affine-disk-maps", "def-bounded-edge-coarse-triangular-filling", "def-real-tree-tripods-and-geodesic-triangle-minsize", "thm-of-square-roots"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Drutu–Kapovich, Geometric Group Theory — §9.7.4, Propositions 9.103–9.104, PDF pp. 350–352; corrected affine-edge barrier $h=m/2-r$"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
pipeline_run: "phase-2-hg-prerequisite"
proof_strategy: direct
---

## Statement

If a coarse triangular boundary has an $r$-edge filling with $N$ triangles, and $A_1,A_2,A_3$ are its nonempty finite marked vertex-image sets, put
$$m=\min_{a_i\in A_i}\operatorname{diam}\{a_1,a_2,a_3\}.$$
Then $m\leq2r\sqrt N+2r$. If three continuous boundary sides have Hausdorff distance at most $e\geq0$ from the corresponding finite sets $A_i$, their minsize is at most $2r\sqrt N+2r+2e$.

## Facts & Assumptions

**Given:** Fix a coarse disk, its vertex map $f$, and its three marked vertex sets.

[F1] An affine disk with the axis and exterior-square boundary conditions covers the open square and satisfies $h^2\leq Nr^2$. ([[lem-polygonal-boundary-crossing-for-affine-disk-maps]]).

[F2] Every boundary arc is nonempty as a vertex set, and images of endpoints of each triangulation edge are at distance at most $r$. ([[def-bounded-edge-coarse-triangular-filling]]).

[F3] Minsize is the infimum of diameters of triples with one point on each side. ([[def-real-tree-tripods-and-geodesic-triangle-minsize]]).

[F4] Every nonnegative real has a unique nonnegative square root. ([[thm-of-square-roots]]).

## Proof

**Proof technique:** direct.

1.1 Finite nonempty sets have attained distance minima. At each disk vertex $v$ define $s(v)=d(f(v),A_1)$ and $t(v)=d(f(v),A_2)$, and extend the pair affinely over each triangle. The triangle inequality gives $|d(x,A_i)-d(y,A_i)|\leq d(x,y)$ by using a nearest point for each of $x,y$ in turn. Consequently both coordinate differences on an edge are at most $r$. On the first arc $s=0$ throughout each edge and $t\geq0$; on the second $t=0$ and $s\geq0$; their common endpoint maps to the origin. [F2]

2.1 At any vertex of the third arc, choose nearest $a_1\in A_1,a_2\in A_2$ to its image $a_3$. If both coordinates were less than $m/2$, then $d(a_1,a_3)<m/2$, $d(a_2,a_3)<m/2$, and $d(a_1,a_2)\leq d(a_1,a_3)+d(a_3,a_2)<m$. All three pair distances would be less than $m$, contradicting its finite minimum definition. Hence $\max(s,t)\geq m/2$ at each third-arc vertex. [step 1.1]

3.1 On an edge of that arc start at either endpoint. A coordinate which is at least $m/2$ there decreases by at most $r$ along the affine segment. Thus $\max(s,t)\geq h:=m/2-r$ everywhere on the third arc. Its axis endpoints also have their nonzero coordinate at least $m/2\geq h$. If $h>0$, all hypotheses of the crossing lemma now hold, so $h^2\leq Nr^2$. This deduction retains the loss of $r$ between vertices; the vertex barrier alone would not suffice. [step 1.1, step 2.1, F1]

4.1 Put $q=\sqrt N\geq0$. Then $(rq)^2=Nr^2$. For nonnegative numbers squaring preserves order, because $b^2-a^2=(b-a)(b+a)$. Therefore $h>0$ and $h^2\leq(rq)^2$ imply $h\leq rq$, so $m\leq2r\sqrt N+2r$. If $h\leq0$ then $m\leq2r$, which implies the same bound. This also treats $r=0$ and $N=0$ whenever such data are supplied. [step 3.1, F4]

5.1 Choose a minimizing vertex triple $(a_1,a_2,a_3)$. By the Hausdorff hypothesis, for every $\eta>0$ there are points $b_i$ on the respective continuous sides with $d(a_i,b_i)\leq e+\eta$. Thus $d(b_i,b_j)\leq d(a_i,a_j)+2e+2\eta\leq m+2e+2\eta$. Taking the infimum over side triples and then letting $\eta\downarrow0$ gives continuous minsize at most $m+2e$. Combining with step 4.1 proves the assertion. If the side sets are compact the distances are attained, but this limiting argument does not require attainment. [step 4.1, F3] ∎
