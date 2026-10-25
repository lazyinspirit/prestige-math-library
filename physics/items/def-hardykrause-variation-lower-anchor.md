---
id: def-hardykrause-variation-lower-anchor
kind: definition
title: "Hardy–Krause variation on subrectangles anchored at the lower corner"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps: [def-hardykrause-variation]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Christoph Aistleitner and Josef Dick, Functions of bounded variation, signed measures, and a general Koksma–Hlawka inequality, Section 2"
      url: "https://arxiv.org/pdf/1406.0230v2"
    - title: "Art B. Owen, Monte Carlo Book: The Quasi-Monte Carlo Parts, Chapter 15 end notes"
      url: "https://artowen.su.domains/mc/qmcstuff.pdf"
---

## Definition

Let $f:[0,1]^d\to\mathbb R$ and let $R=\prod_{j=1}^d[a_j,b_j]\subseteq[0,1]^d$
be a closed axis-parallel rectangle, allowing zero side lengths. For each
nonempty subset $u\subseteq\{1,\ldots,d\}$, define the lower-face restriction
$$f_{u,0,R}(x_u):=f(z),\qquad z_j=\begin{cases}x_j,&j\in u,\\a_j,&j\notin u.\end{cases}$$
If every side indexed by $u$ is nondegenerate, its Vitali variation on
$\prod_{j\in u}[a_j,b_j]$ is the supremum of the sums of absolute alternating
increments over finite product grids on that rectangle, using the convention
of [[def-hardykrause-variation]]. If any side indexed by $u$ has length zero,
that term is defined to be zero. The **Hardy–Krause variation on $R$ anchored
at its lower corner** is
$$V_{HK,0}(f;R):=\sum_{\emptyset\ne u\subseteq\{1,\ldots,d\}}V_V(f_{u,0,R};\prod_{j\in u}[a_j,b_j]),$$
with value $+\infty$ if any summand is infinite. Write
$V_{HK,0}(f):=V_{HK,0}(f;[0,1]^d)$. The lower anchor fixes every complementary
coordinate at the lower endpoint of $R$; this auxiliary convention is distinct
from the upper anchor used in [[def-hardykrause-variation]].
