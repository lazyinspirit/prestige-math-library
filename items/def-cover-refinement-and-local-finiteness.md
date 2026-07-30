---
id: def-cover-refinement-and-local-finiteness
kind: definition
title: "Refinements, locally finite families, point-finite families, and star refinements"
status: published
origin: session
deps: [def-compact-space, def-neighbourhood-top, def-topological-space]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "J. Robbin, Partitions of Unity"
      url: "https://people.math.wisc.edu/~jwrobbin/partitions_of_unity.pdf"
    - title: "Dartmouth Point-Set Topology, Lecture 25"
      url: "https://math.dartmouth.edu/~rmaguire/teaching/dartmouth_math_054_2022_summer/lectures/2022_summer_point_set_topology_lecture_25.pdf"
pipeline_run: null
---

## Definition

Let $X$ be a topological space. A family $\mathcal V$ of subsets of $X$ is a
**refinement** of a family $\mathcal U$ when every $V\in\mathcal V$ is contained
in some $U\in\mathcal U$. It is an **open refinement** when, additionally, every
$V\in\mathcal V$ is open. A refinement of a cover need not itself cover $X$;
when it does, it is called a **refining cover**.

A family $\mathcal A$ of subsets of $X$ is **locally finite** when every point
$x\in X$ has a neighbourhood meeting only finitely many members of $\mathcal A$.
It is **point-finite** when every $x\in X$ belongs to only finitely many members
of $\mathcal A$. Local finiteness implies point-finiteness: a neighbourhood of
$x$ meeting only finitely many members contains $x$, so every member containing
$x$ is among those finitely many. The converse is not part of the definition and
can fail.

For a family $\mathcal U$ and a subset $A\subseteq X$, its **star about $A$** is
$$\operatorname{St}(A,\mathcal U):=\bigcup\{U\in\mathcal U:U\cap A\ne\varnothing\}.$$
A cover $\mathcal V$ is a **star refinement** of a cover $\mathcal U$ when for
every $V\in\mathcal V$ there is $U\in\mathcal U$ with
$\operatorname{St}(V,\mathcal V)\subseteq U$.

## Remarks

The word “neighbourhood” has the library convention from
[[def-neighbourhood-top]]: it need not itself be open. Replacing it by an open
neighbourhood gives the same local-finiteness condition, because every
neighbourhood contains an open one about the same point.
