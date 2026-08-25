---
id: lem-graphs-on-three-vertices-are-not-prime
kind: lemma
title: "No graph on exactly three vertices is prime"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-prime-graph, def-module-of-a-graph, def-finite-simple-graph, def-finite-cardinality, def-edges-between-sets-and-pure-mixed-pairs]
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Habib and C. Paul, A Survey on Algorithmic Aspects of Modular Decomposition, sec. 2.4"
      url: "https://arxiv.org/pdf/0912.1457"
pipeline_run: null
---

## Statement

Every finite simple graph $G$ with $|V(G)|=3$ has a nontrivial module, and is
therefore not prime.

## Facts & Assumptions

**Given:** A finite simple graph $G$ with $V(G)=\{x,y,z\}$, three distinct vertices.

[F1] $M$ is a module of $G$ when the pair $(\{v\},M)$ is pure for every $v\in V(G)\setminus M$, and $M$ is nontrivial when $2\le|M|$ and $|M|\le|V(G)|-1$ ([[def-module-of-a-graph]], [[def-finite-cardinality]]).

[F2] $G$ is prime when every module of $G$ is trivial ([[def-prime-graph]]).

[F3] The edge set of $G$ is a set of two-element subsets of $V(G)$, and the two-element subsets of $\{x,y,z\}$ are exactly $\{x,y\}$, $\{x,z\}$ and $\{y,z\}$ ([[def-finite-simple-graph]]).

[F4] A disjoint pair is complete when every cross pair is an edge, anticomplete when no cross pair is an edge, and pure when it is complete or anticomplete ([[def-edges-between-sets-and-pure-mixed-pairs]]).

## Proof

**Proof technique:** cases.

1.1 By [F3] the graph has at most three edges, so $|E(G)|$ is $0$, $1$, $2$ or $3$, and any two-element $M\subseteq V(G)$ has $|M|=2=|V(G)|-1$, hence is nontrivial once it is a module. [F1, F3]

1.2 First case: $|E(G)|=0$. Take $M=\{x,y\}$; the only vertex outside is $z$, and it is adjacent to neither, so $(\{z\},M)$ is anticomplete. [assume-case none, F3, F4]

1.3 Second case: $|E(G)|=3$. Take $M=\{x,y\}$; the only vertex outside is $z$, and by [F3] both $\{x,z\}$ and $\{y,z\}$ are edges, so $(\{z\},M)$ is complete. [assume-case all, F3, F4]

1.4 Third case: $|E(G)|=1$, say the single edge is $\{p,q\}$ and $r$ is the remaining vertex. Take $M=\{p,q\}$; neither $\{p,r\}$ nor $\{q,r\}$ is an edge, since there is only one edge and it is $\{p,q\}$, so $(\{r\},M)$ is anticomplete. [assume-case one, F3, F4]

1.5 Fourth case: $|E(G)|=2$. Each of the three possible edges listed in [F3] meets each of the other two, so the two edges of $G$ share a vertex $q$; write them as $\{p,q\}$ and $\{q,r\}$ with $\{p,q,r\}=V(G)$. Take $M=\{p,r\}$; the only vertex outside is $q$, which is adjacent to both, so $(\{q\},M)$ is complete. [assume-case two, F3, F4]

2.1 The four cases cover every value of $|E(G)|$ allowed by step 1.1, and in each of them the exhibited two-element set $M$ has $(\{v\},M)$ pure for the single vertex $v$ outside it, so $M$ is a module. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, F1, cases-exhaustive]

3.1 That module is nontrivial by step 1.1, so $G$ is not prime. [step 2.1, F1, F2] ∎
