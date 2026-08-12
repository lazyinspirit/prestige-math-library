---
id: def-zarankiewicz-number
kind: definition
title: "The Zarankiewicz number $z(m,n;s,t)$ for a forbidden $K_{s,t}$ in a bipartite graph"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-extremal-number-turan-graph-and-blowup, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Yufei Zhao, Graph Theory and Additive Combinatorics"
      url: "https://ocw.mit.edu/courses/18-225-graph-theory-and-additive-combinatorics-fall-2023/mit18_225_f23_lec_full.pdf"
pipeline_run: null
---

## Definition

For $m,n\in\mathbb N$ and $s,t\ge1$, the **Zarankiewicz number** $z(m,n;s,t)$ is the maximum number of edges in a bipartite graph with a specified left part of size $m$ and right part of size $n$ that contains no ordinary $K_{s,t}$ whose $s$-vertex part lies on the left and whose $t$-vertex part lies on the right.

The edgeless bipartite graph makes the maximizing family nonempty, and only finitely many subsets of the $mn$ possible cross edges occur. Interchanging the two sides gives the exact symmetry

$$z(m,n;s,t)=z(n,m;t,s).$$

The orientation of $s,t$ is part of the notation; it will determine which additive term appears in the Kővári–Sós–Turán bound.
