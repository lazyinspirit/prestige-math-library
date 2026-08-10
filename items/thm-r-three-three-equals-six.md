---
id: thm-r-three-three-equals-six
kind: theorem
title: "The first exact Ramsey number is $R(3,3)=6$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-off-diagonal-ramsey-number, thm-the-strong-pigeonhole-principle, def-standard-complete-bipartite-path-and-cycle-graphs, def-graph-walk-trail-path-and-cycle]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Douglas West, Combinatorial Game Theory, Ramsey example"
      url: "https://www.whitman.edu/mathematics/cgt_online/cgt.pdf"
pipeline_run: null
---

## Statement

The Ramsey number of [[def-off-diagonal-ramsey-number]] satisfies $R(3,3)=6$. Complete graphs and cycles use [[def-standard-complete-bipartite-path-and-cycle-graphs]] and [[def-graph-walk-trail-path-and-cycle]].

## Facts & Assumptions

**Given:** Red-blue colourings of the edges of $K_6$ and $K_5$.

[L1] If $\lvert A\rvert > k\,\lvert B\rvert$ then there is $b \in B$ with $\lvert f^{-1}[\{b\}]\rvert > k$ ([[thm-the-strong-pigeonhole-principle]]).

## Proof

**Proof technique:** direct.

1.1 At a fixed vertex $v$ of $K_6$, at least three of its five incident edges have one colour by [L1]. Call their other endpoints $a,b,c$ and suppose that colour is red. If one of $ab,bc,ca$ is red it closes a red triangle with $v$; if none is red, then $a,b,c$ form a blue triangle. The same argument with the colour names exchanged proves $6\to(3,3)^2$. [L1]

2.1 On five cyclically ordered vertices, colour the five cycle edges red and the remaining five edges blue. The red graph is a $5$-cycle and has no triangle; the blue graph is also a $5$-cycle, in the order obtained by stepping two places at a time, and has no triangle. Thus $5\not\to(3,3)^2$. [construct]

3.1 Step 1.1 gives $R(3,3)\le6$ and step 2.1 gives $R(3,3)>5$. Since $R(3,3)$ is a natural number, it equals $6$. [step 1.1, step 2.1] ∎

