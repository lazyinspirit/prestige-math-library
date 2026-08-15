---
id: ex-the-five-cycle-has-homogeneous-number-two
kind: example
title: "The self-complementary five-cycle satisfies $\\operatorname{hom}(C_5)=2$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-homogeneous-set-and-homogeneous-number, def-standard-complete-bipartite-path-and-cycle-graphs, def-graph-isomorphism-and-complement]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Chudnovsky, The Erdos-Hajnal Conjecture: A Survey, sec. 2"
      url: "https://web.math.princeton.edu/~mchudnov/EHsurvey.pdf"
pipeline_run: null
---

## Example

The five-cycle is self-complementary and satisfies $\operatorname{hom}(C_5)=2$.

## Facts & Assumptions

**Given:** The graph $C_5$ on vertices $0,1,2,3,4$.

[L1] The homogeneous number is $\max\{\omega, \alpha\}$ ([[def-homogeneous-set-and-homogeneous-number]]).

[L2] In $C_5$, precisely the consecutive pairs modulo $5$ are edges ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[L3] A graph isomorphism is a bijection preserving adjacency in both directions, and the complement contains precisely the missing pairs ([[def-graph-isomorphism-and-complement]]).

## Verification

**Proof technique:** direct.

1.1 The pair $\{0,1\}$ is an edge and $\{0,2\}$ is a nonedge, so $C_5$ has both a two-vertex clique and a two-vertex stable set. [L2]

1.2 Any three vertices on the cycle contain a consecutive pair, hence an edge; their complement has two omitted vertices, so among the three cyclic gaps one has length at least two, giving a nonconsecutive pair and hence a nonedge. Thus no three vertices are homogeneous. [L2, algebra]

1.3 The map $i\mapsto2i\pmod5$ sends consecutive differences $\pm1$ to differences $\pm2$, exactly the nonedges of $C_5$, so it is an isomorphism $C_5\cong\overline{C_5}$. [L2, L3, algebra]

2.1 Steps 1.1 and 1.2 give $\omega(C_5)=\alpha(C_5)=2$, hence $\operatorname{hom}(C_5)=2$ by [L1]; step 1.3 gives self-complementarity. [step 1.1, step 1.2, step 1.3, L1] ∎
