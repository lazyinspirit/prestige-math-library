---
id: ex-the-bull-graph-is-self-complementary
kind: example
title: "The bull graph is self-complementary"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-bull-graph, def-graph-isomorphism-and-complement]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky and Shmuel Safra, The Erdős-Hajnal conjecture for bull-free graphs, Section 1"
      url: "https://web.math.princeton.edu/~mchudnov/EHbullfree.pdf"
---

## Example

The bull graph is isomorphic to its complement.

## Facts & Assumptions

**Given:** The bull graph on vertices $\{x_1,x_2,x_3,y,z\}$.

[F1] The bull has edges $x_1x_2$, $x_2x_3$, $x_1x_3$, $x_1y$, and $x_2z$ ([[def-bull-graph]]).

[F2] In the complement graph, two distinct vertices are adjacent exactly when they are nonadjacent in the original graph ([[def-graph-isomorphism-and-complement]]).

## Verification

**Proof technique:** direct.

1.1 Define $\varphi$ by $\varphi(x_1)=y$, $\varphi(x_2)=z$, $\varphi(x_3)=x_3$, $\varphi(y)=x_2$, and $\varphi(z)=x_1$. Using [F1] and [F2], one checks that the five complement-edges are exactly the images under $\varphi$ of the five bull edges. [F1, F2, construct, algebra]

2.1 Thus $\varphi$ is an isomorphism from the bull to its complement, so the bull is self-complementary. [step 1.1] ∎
