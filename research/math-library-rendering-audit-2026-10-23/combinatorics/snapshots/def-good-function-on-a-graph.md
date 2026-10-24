---
id: def-good-function-on-a-graph
kind: definition
title: "A good function on a graph"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-perfect-graph-for-the-bull-route]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, The Erdős-Hajnal Conjecture: A Survey, Section 2"
      url: "https://web.math.princeton.edu/~mchudnov/EHsurvey.pdf"
    - title: "Maria Chudnovsky and Shmuel Safra, The Erdős-Hajnal conjecture for bull-free graphs, Section 2"
      url: "https://web.math.princeton.edu/~mchudnov/EHbullfree.pdf"
---

## Definition

Let $G$ be a finite graph. A function
$g:V(G)\to\mathbb R_{\ge0}$ is **good** for $G$ when

$$\sum_{v\in V(P)} g(v)\le1$$

for every perfect induced subgraph $P$ of $G$
([[def-perfect-graph-for-the-bull-route]]).

Thus a good function is a nonnegative vertex-weighting whose total weight on
each perfect induced subgraph is at most $1$.
