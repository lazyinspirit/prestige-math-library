---
id: thm-clique-independence-chromatic-bounds
kind: theorem
title: "The bounds $\\omega(G)\\leq\\chi(G)$ and $|V(G)|\\leq\\chi(G)\\alpha(G)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-proper-vertex-colouring-and-chromatic-number,
       def-clique-and-independence-numbers, thm-sum-rule]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Bondy and Murty, Graph Theory, Stable Sets and Cliques"
      url: "https://link.springer.com/book/10.1007/978-1-4471-7621-3"
pipeline_run: null
---

## Statement

For every finite simple graph $G=(V,E)$,

$$\omega(G)\leq\chi(G),\qquad |V|\leq\chi(G)\alpha(G).$$

Both inequalities include the null graph, where all displayed quantities are
$0$.

## Facts & Assumptions

**Given:** A finite simple graph $G=(V,E)$ and a proper $\chi(G)$-colouring $c:V\to\chi(G)$.

[L1] Adjacent vertices receive different colours, and the fibres $C_j:=c^{-1}[\{j\}]$ are the colour classes ([[def-proper-vertex-colouring-and-chromatic-number]]).

[L2] A clique has all pairs adjacent, an independent set has no adjacent pair, and $\omega(G)$ and $\alpha(G)$ are the corresponding maximum cardinalities ([[def-clique-and-independence-numbers]]).

[L3] The cardinality of a finite disjoint union is the sum of the cardinalities of its blocks ([[thm-sum-rule]], clause 2).

## Proof

**Proof technique:** direct.

1.1 If $K$ is a clique, then [L1] makes $c|_K$ injective into the $\chi(G)$-element colour set, so $|K|\leq\chi(G)$; maximizing over cliques gives $\omega(G)\leq\chi(G)$. [L1, L2]

1.2 Each colour class $C_j$ is independent, since two vertices in it have the same colour and therefore cannot be adjacent by [L1]; hence $|C_j|\leq\alpha(G)$ by [L2]. [L1, L2]

2.1 The colour classes are pairwise disjoint and have union $V$, so [L3] and step 1.2 give $|V|=\sum_{j\in\chi(G)}|C_j|\leq\sum_{j\in\chi(G)}\alpha(G)=\chi(G)\alpha(G)$. [step 1.2, L3]

3.1 Steps 1.1 and 2.1 prove the two claimed bounds, including the empty family of colour classes when $V=\varnothing$. [step 1.1, step 2.1] ∎
