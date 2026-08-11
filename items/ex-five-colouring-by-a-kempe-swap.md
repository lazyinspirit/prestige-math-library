---
id: ex-five-colouring-by-a-kempe-swap
kind: example
title: "A degree-five vertex is inserted into a plane graph after one explicit Kempe-chain colour swap"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-five-colour-theorem, def-kempe-chain, lem-kempe-component-colour-swap, lem-alternating-kempe-paths-cannot-both-occur]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Proposition 5.1.2"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch5.pdf"
pipeline_run: null
---

## Example

One Kempe swap extends a five-colouring across the centre of a plane wheel with five rim vertices.

## Facts & Assumptions

**Given:** Let $v_1,v_2,v_3,v_4,v_5$ occur in this cyclic order on a plane $5$-cycle. Colour $v_i$ with colour $i$, and plan to insert a vertex $v$ inside the cycle adjacent to every $v_i$.

[L1] Swapping two colours on one Kempe component preserves a proper colouring ([[lem-kempe-component-colour-swap]]).

[L2] The alternating Kempe connections between cyclic neighbours $v_1,v_3$ and $v_2,v_4$ cannot both occur ([[lem-alternating-kempe-paths-cannot-both-occur]]).

## Verification

**Proof technique:** constructive.

1.1 Before $v$ is inserted, its five prospective neighbours use all five colours. In the subgraph induced by colours $1$ and $3$, both $v_1$ and $v_3$ are isolated: their two cycle neighbours have colours $2,5$ and $2,4$, respectively. In particular there is no alternating $1$-$3$ path between them, consistently with [L2]. [L2, construct]

2.1 Swap colours $1$ and $3$ on the Kempe component $\{v_1\}$. The colouring remains proper by [L1]; now both $v_1$ and $v_3$ have colour $3$, but they are nonadjacent, and no rim vertex has colour $1$. Give the inserted centre $v$ colour $1$. Every spoke then has differently coloured endpoints, producing an explicit five-colouring of the plane wheel and illustrating the swap used in [[thm-five-colour-theorem]]. [L1, step 1.1, discharge-construct] ∎
