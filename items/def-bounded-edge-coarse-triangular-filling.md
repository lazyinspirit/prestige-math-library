---
id: "def-bounded-edge-coarse-triangular-filling"
kind: "definition"
title: "Bounded-edge coarse fillings of loops and triangles"
status: "draft"
origin: "pipeline"
deps: ["def-metric-space", "def-algebraic-relator-area-and-dehn-function-of-a-finite-presentation"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
sources:
  scraped: []
  references:
    - title: "Drutu–Kapovich, Geometric Group Theory — §9.7.4 Definitions 9.101–9.102 and coarse filling conventions"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
pipeline_run: "phase-2-hg-prerequisite"
---

## Definition

Let $X$ be a metric space ([[def-metric-space]]). A **coarse triangular disk of edge bound $r>0$** is a finite combinatorial triangulation $D$ of a topological closed disk, together with a vertex map $f:V(D)\to X$ such that $d(f(u),f(v))\le r$ for every edge $uv$. Its area $N$ is the number of domain triangles, including triangles whose vertex images coincide or are otherwise degenerate.

Choose a cyclic ordering $v_0,\ldots,v_{q-1}$ of the boundary vertices of $D$. The **boundary map** is the cyclic list $(f(v_0),\ldots,f(v_{q-1}))$. An **exact filling** of a prescribed nonempty cyclic list $C=(x_0,\ldots,x_{k-1})$ requires $q=k$ and $f(v_j)=x_j$ after choosing compatible starting points and traversal directions.

A **filling of $C$ up to inserted repetitions** instead requires the boundary list to be a **repetition refinement** of $C$: replace each occurrence $x_j$ by a block of $a_j\ge1$ consecutive copies of $x_j$, with $q=\sum_{j=0}^{k-1}a_j$, and require entry-for-entry agreement with this expanded list in cyclic order. The block data are part of the boundary identification; distinct occurrences remain distinct even if their images agree. Thus insertion changes the list to which exact agreement applies. Unqualified fillings allowing repetitions below use this refinement convention. A length-zero closed walk at a specified point $x$ is represented by the singleton list $(x)$, not by an empty list; its refinements are constant boundary lists. The area always counts the actual refined disk, with no claim that insertion preserves that count.

For marked triangular boundaries, refinements must retain the three corner occurrences in cyclic order and the image set of each corresponding closed arc. Copies at a corner may lie on either incident arc; a constant marked arc may be represented by a nonempty string of copies of its corner image. For a boundary divided into three consecutive closed arcs $B_1,B_2,B_3$, sharing their corner vertices, its **coarse minsize** is the minimum diameter of $\{f(v_1),f(v_2),f(v_3)\}$ with $v_i$ a vertex of $B_i$. Each arc contains a corner, so these are finite nonempty sets.

Only the vertex map to $X$ is required. No continuous extension to $X$ is part of the data. Later coordinate maps to $\mathbb R^2$ are extended affinely on the abstract triangles. For a presentation, **algebraic relator area** retains the normal-closure-expression convention of [[def-algebraic-relator-area-and-dehn-function-of-a-finite-presentation]]; it is not defined as this coarse triangle count.
