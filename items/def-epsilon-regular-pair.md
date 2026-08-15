---
id: def-epsilon-regular-pair
kind: definition
title: "$\\epsilon$-regular pairs and self-regular vertex sets"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-edge-density-between-vertex-sets]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Y. Zhao, Graph Theory and Additive Combinatorics, Definition 2.1.2"
      url: "https://yufeizhao.com/gtacbook/2.pdf"
    - title: "D. Conlon and J. Fox, Graph removal lemmas, sec. 2.1"
      url: "https://arxiv.org/pdf/1211.3487"
pipeline_run: null
---

## Definition

Let $X,Y$ be nonempty vertex sets in a graph and let $\epsilon>0$. The pair $(X,Y)$ is **$\epsilon$-regular** if every $A\subseteq X$ and $B\subseteq Y$ with $|A|\ge\epsilon|X|$ and $|B|\ge\epsilon|Y|$ satisfies
$$|d(A,B)-d(X,Y)|\le\epsilon.$$
If this fails, such $A,B$ are an **irregularity witness**. The definition permits $X=Y$ and permits overlap. A nonempty vertex set $X$ is **$\epsilon$-self-regular** when $(X,X)$ is $\epsilon$-regular ([[def-edge-density-between-vertex-sets]]).

We also call a pair **$0$-regular** when every pair of nonempty subsets $A\subseteq X$, $B\subseteq Y$ has $d(A,B)=d(X,Y)$. This is the exact limiting form of the positive-parameter definition and avoids assigning a density to an empty subpair.
