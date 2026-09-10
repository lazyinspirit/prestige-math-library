---
id: "lem-point-wedges-preserve-a-common-triangle-minsize-bound"
kind: "lemma"
title: "Point wedges preserve common triangle minsize bounds"
status: published
origin: "pipeline"
deps: ["def-real-tree-tripods-and-geodesic-triangle-minsize", "lem-triangle-extrema-and-real-tree-tripod-rules", "def-axiom-of-choice"]
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
    - title: "Frigerio–Sisto, Characterizing hyperbolic spaces and real trees — Lemma 11 (PDF pp. 7–8), sublinear criterion context; local wedge argument for uniformity"
      url: "https://arxiv.org/pdf/0810.1526"
pipeline_run: "phase-2-hg-prerequisite"
proof_strategy: direct
---

## Statement

Assume AC. Let $(X_i,o_i)$ be a countable family of pointed geodesic metric spaces, and let $F:[0,\infty)\to[0,\infty)$ be nondecreasing with $m_{X_i}(P)\leq F(P)$ for every $i,P$. Form the disjoint union with all roots identified to $o$ and retain one root even for an empty family. Give it the metric that restricts to $d_i$ on a factor and satisfies
$$d(x,y)=d_i(x,o_i)+d_j(o_j,y)\quad(i\ne j).$$
This wedge $W$ is geodesic; every factor is isometrically and geodesically embedded, in the strong sense that every ambient geodesic between its points lies in that factor. Moreover $m_W(P)\leq F(P)$.

## Facts & Assumptions

**Given:** Assume AC and the displayed pointed family and common nondecreasing majorant.

[F1] Minsize concerns the actual three chosen sides, and $m_X(P)$ takes the supremum over their triangles of perimeter at most $P$. ([[def-real-tree-tripods-and-geodesic-triangle-minsize]]).

[F2] A finite geodesic triangle attains its minsize. ([[lem-triangle-extrema-and-real-tree-tripod-rules]]).

[F3] AC permits selections of geodesics across the given family when needed. ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 The formula is well-defined at the common root because $d_i(o_i,o_i)=0$. It is symmetric and nonnegative. A cross-factor pair has zero distance only if both points are roots; within a factor this is its metric axiom. For the triangle inequality, if $x,z$ are in the same factor and $y$ outside, then $d(x,y)+d(y,z)=d(x,o)+2d(y,o)+d(o,z)\geq d(x,z)$. If $x,z$ are in distinct factors and $y$ in a third, the same sum is $d(x,z)+2d(y,o)$. If $y$ shares the factor of $x$ or of $z$, apply that factor's triangle inequality to the portion from its point to the root. If all are in one factor use its metric inequality. These cases also include root points by assigning the root to the needed factor. Thus $W$ is a metric and each inclusion is isometric. [given]

2.1 For endpoints in one factor any factor geodesic retains its distances in $W$. For endpoints in different factors concatenate a geodesic from $x$ to $o$ and one from $o$ to $y$. Across the joining time, the cross-factor formula gives distance equal to the sum of the two remaining lengths, hence the difference of parameters. On each portion isometry is inherited. This constructs an isometric interval for every pair, including zero lengths; the empty-family wedge is a singleton. Only two geodesics are needed for a specified pair; AC also allows simultaneous selections if desired. [step 1.1, F3]

3.1 If endpoints $x,y$ are in one factor and a geodesic contained a nonroot point $z$ of another factor, additivity along a geodesic would give $$d(x,y)=d(x,z)+d(z,y)=d(x,o)+2d(z,o)+d(o,y)>d(x,y),$$ a contradiction. Thus every such geodesic lies in the factor. If $x,y$ are in different factors, the same computation excludes a nonroot point from any third factor. Put $a=d(x,o)$ and let $z$ be the point at time $a$ on any geodesic from $x$ to $y$. If $z$ is in the factor of $x$, then $d(z,y)=d(z,o)+d(o,y)$, whereas geodesic additivity makes $d(z,y)=d(o,y)$, hence $z=o$. If $z$ is in the factor of $y$, then $d(x,z)=d(x,o)+d(o,z)=a$ again forces $z=o$. Therefore every cross-factor geodesic passes through the root at exactly time $a$; its two portions are geodesics in the corresponding factors by the first assertion. [step 1.1, step 2.1, algebra]

4.1 Consider any chosen triangle of perimeter $p\leq P$. If its vertices all belong to one factor, all its sides lie there by step 3.1 and its minsize is at most $F(p)\leq F(P)$. If all vertices are roots this same conclusion follows from its zero sides even when there are no factors. [step 3.1, F1, given]

4.2 Suppose two nonroot vertices $x,y$ lie in one factor and the third $z$ lies in another factor or is the root. The side $[x,y]$ and the actual portions $[y,o]\subset[y,z]$, $[o,x]\subset[z,x]$ form a chosen geodesic triangle in the first factor. Its perimeter $p_0=d(x,y)+d(y,o)+d(o,x)$ is at most $p$, since the other two sides add $2d(o,z)$. Its minimizing triple is also an admissible triple for the original triangle. Thus the original minsize is at most $F(p_0)\leq F(P)$. This uses the actual root segments, so it needs no uniqueness of those segments. [step 3.1, F1, F2, given]

5.1 In the remaining nontrivial cases the vertices lie in three distinct factors, or in two distinct factors with the third vertex the root. All three chosen sides then contain $o$, by step 3.1, so the triple $(o,o,o)$ has diameter zero. A triangle with one nonroot vertex and two roots is contained in its factor and was included in step 4.1. These cases exhaust repetitions and root vertices. The bound for every triangle proves $m_W(P)\leq F(P)$ on taking the supremum. [step 3.1, step 4.1, step 4.2, F1] ∎
