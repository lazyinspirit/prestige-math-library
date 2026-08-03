---
id: cex-greedy-order-on-p-four
kind: counterexample
title: "A vertex order on $P_4$ makes greedy colouring use three colours although $\\chi(P_4)=2$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [lem-greedy-colouring-bound,
       def-proper-vertex-colouring-and-chromatic-number,
       def-standard-complete-bipartite-path-and-cycle-graphs]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-03
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Counterexample

Let $P_4$ have vertices $0,1,2,3$ and consecutive edges. In the order

$$0,3,1,2,$$

the least-available-colour greedy rule uses three colours, although
$\chi(P_4)=2$.

## Facts & Assumptions

**Given:** The path graph $P_4$ with edges $\{0,1\}$, $\{1,2\}$ and $\{2,3\}$.

[L1] The path-graph convention gives exactly these vertices and edges ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

[L2] The greedy rule assigns the least colour absent from the earlier neighbours ([[lem-greedy-colouring-bound]]).

[L3] A proper colouring assigns different colours to adjacent vertices, and the
chromatic number is the least number of colours in a proper colouring
([[def-proper-vertex-colouring-and-chromatic-number]]).

## Verification

**Proof technique:** direct.

1.1 In the displayed order, vertices $0$ and $3$ are nonadjacent and both receive colour $0$; vertex $1$ is adjacent to $0$ and receives colour $1$; vertex $2$ is adjacent to $3$ of colour $0$ and to $1$ of colour $1$, so it receives colour $2$. Thus greedy uses three colours. [L1, L2]

1.2 The assignment $0,2\mapsto0$ and $1,3\mapsto1$ is a proper $2$-colouring, while the edge $\{0,1\}$ rules out a $1$-colouring. Hence $\chi(P_4)=2$. [L1, L3]

2.1 In the order $0,1,2,3$, greedy assigns colours $0,1,0,1$ and uses only two colours. Together with step 1.1 and step 1.2, this shows that the number used by greedy colouring depends on the vertex order and can exceed the chromatic number. [step 1.1, step 1.2, L1, L2] ∎
