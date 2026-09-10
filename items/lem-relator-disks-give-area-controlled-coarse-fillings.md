---
id: "lem-relator-disks-give-area-controlled-coarse-fillings"
kind: "lemma"
title: "Algebraic relator area controls coarse filling area"
status: published
origin: "pipeline"
deps: ["lem-singular-planar-diagrams-have-controlled-coarse-disk-thickenings", "def-bounded-edge-coarse-triangular-filling", "thm-well-ordering-principle", "thm-the-word-metric-is-a-left-invariant-metric-and-is-the-path-metric-of-the-cayley-graph", "lem-relator-expressions-give-controlled-singular-planar-diagrams", "prop-normal-closure-is-products-of-conjugates", "def-group-presentation"]
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
    - title: "Drutu–Kapovich, Geometric Group Theory — §9.7.4, Definition 9.101 and Proposition 9.103 (PDF pp. 349–351); explicit local conversion and count"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
pipeline_run: "phase-2-hg-prerequisite"
proof_strategy: direct
---

## Statement

Let a finite presentation have defining relators of length at most $L\geq0$. Give the simple Cayley graph its unit-edge metric realization $X$; identity letters traverse constant paths. This is a geodesic metric space inducing the word metric on vertices. Put $r=\max(1,L)$ and $C(L)=20(L+1)$. Every null word $w$ of length $n$ has a coarse triangular filling with
$$N\leq C(L)(\operatorname{Area}(w)+n+1),$$
whose boundary reads $w$ (with permitted subdivisions and repetitions) and whose edge images have length at most $r$. Here algebraic area is the least number of conjugates of defining relators or their inverses in an expression for $w$ in the free group.

Every chosen geodesic triangle in $X$ of perimeter $P$ admits a null edge word of length $n\leq P+6$, marked into three arcs. Each original side and its corresponding edge-path image have Hausdorff distance at most $3$. The same bound $3$ holds between the side and the finite vertex set on that arc.

## Facts & Assumptions

**Given:** Fix the presentation, $L$, a null word $w$, and, for the last part, a chosen geodesic triangle.

[F1] A singular diagram with $E$ edges and total face incidence $I$ thickens to a coarse disk with at most $16E+4I+4$ triangles and edge bound $\max(1,L)$. ([[lem-singular-planar-diagrams-have-controlled-coarse-disk-thickenings]]).

[F2] A nonempty set of natural numbers has a least element. ([[thm-well-ordering-principle]]).

[F3] Vertex word distance is a metric and is attained by a finite shortest edge path. ([[thm-the-word-metric-is-a-left-invariant-metric-and-is-the-path-metric-of-the-cayley-graph]]).

[F4] An expression with $m$ relator factors for a literal null word of length $n$ gives a singular diagram with $I\leq Lm$ and $E\leq Lm+n$, allowing all degeneracies. ([[lem-relator-expressions-give-controlled-singular-planar-diagrams]]).

[F5] The normal closure consists exactly of finite products of conjugates of relators and their inverses. ([[prop-normal-closure-is-products-of-conjugates]]).

[F6] The presented group is the free group modulo the normal closure of its defining relators. ([[def-group-presentation]]).

## Proof

**Proof technique:** direct.

1.1 Replace each edge of the simple Cayley graph by $[0,1]$ and identify its endpoints with its vertices. For points $x,y$ in edge interiors, consider the four numbers consisting of the partial-edge length from $x$ to an endpoint $a$, plus $d_S(a,b)$, plus the partial-edge length from an endpoint $b$ to $y$. Also include $|x-y|$ when they are on the same edge. At a vertex use its sole endpoint and partial length zero. Define $d(x,y)$ as the minimum of these candidates. Every candidate is the length of an actual path, since the integer middle distance has a shortest edge path. Conversely a path either stays in their common edge or first exits the edge of $x$ and last enters the edge of $y$ through endpoints, and its intervening length is at least the vertex distance. Thus this formula is exactly the infimum of path lengths. [F3]

1.2 The set of lengths of finite relator expressions for $w$ is nonempty by the meaning of being trivial in the presented quotient (the kernel is the normal closure, whose elements are such finite products). Choose its least member $m$ and one expression with $m$ factors. The expression-to-diagram construction applies to this exact literal word, including any free cancellations, and gives $I\leq Lm$ and $E\leq Lm+n$. Thus no conjugator length enters the estimate. [F2, F4, F5, F6]

2.1 The formula is symmetric. Distinct points on the same edge have positive direct distance, and all endpoint candidates are positive unless both points are the same vertex; for different edge interiors each candidate has positive endpoint contributions. Hence $d(x,y)=0$ iff $x=y$. Concatenating paths proves the triangle inequality. A path attaining the minimum can be parameterized by its travelled length. If any subpath had a shorter competitor, substitution would shorten the whole path, contradicting minimality. Its parameterization therefore has distance $|s-t|$ between times $s,t$. This proves geodesicity, including the constant path for $x=y$, and preserves the vertex metric. [step 1.1, F3]

2.2 Thicken that diagram. Its count satisfies $$N\leq16E+4I+4\leq20Lm+16n+4\leq20(L+1)(m+n+1).$$ Its boundary carries precisely the word path and repeated subdivision labels are allowed. Face vertices can differ by a subword of one relator, of length at most $L$; band endpoints differ by at most one generator, and repeated labels have distance zero. These are exactly the edge bounds in the thickening lemma. Empty relators, $m=0$, $n=0$, and the isolated vertex all remain covered by its additive $4$ term. [step 1.2, F1]

3.1 For each triangle corner $x$, choose an endpoint $\hat x$ of the unit edge containing it; if it is a vertex take $\hat x=x$. Join $\hat x$ to $x$ along that edge, with length at most one. For a side $[x,y]$, concatenate this connector, the chosen side, and the reverse connector to $\hat y$. A geodesic side is an injective shortest path unless constant, so in each endpoint edge it follows a straight partial interval, then follows whole edges, then a final partial interval. At the joins to the connectors, opposing partial intervals cancel. The remaining path between graph vertices consists of whole edges; if the side lies entirely in one edge the same cancellation leaves either that whole edge or the constant path. Its length is at most $d(x,y)+2$. [step 1.1, step 2.1]

4.1 Cancellation can remove at most the total connector length, at most two, from the original side: each removed part of the side cancels against an equal connector length, since there is no backtracking within the geodesic itself. Every surviving connector point is within one of a side endpoint. Every removed side point is within two of a surviving point or, if the whole path cancels, of the resulting endpoint vertex. Thus the side and the remaining edge-path image have Hausdorff distance at most two. Every point on a whole unit edge is within one of a vertex on the path, so the Hausdorff distance between the side and the finite path vertex set is at most three. This also covers a short side whose entire image cancels, and a constant side. [step 3.1]

5.1 Concatenate the three paths in cyclic order. The endpoint choices agree at the corners, so it is a closed edge path of length $n\leq P+6$; choose a generator label for each simple edge traversed. Its word evaluates to the identity, since starting and ending vertices coincide. Retain the three marked arcs, even when one or all are constant. Apply step 2.2 to this word. Subdivision with repeated vertex labels does not change the finite image sets or the estimate of step 4.1. This proves both assertions. [step 2.2, step 3.1, step 4.1] ∎
