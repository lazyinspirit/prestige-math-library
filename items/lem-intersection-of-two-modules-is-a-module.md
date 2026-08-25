---
id: lem-intersection-of-two-modules-is-a-module
kind: lemma
title: "The intersection of two modules is a module"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-module-of-a-graph, def-edges-between-sets-and-pure-mixed-pairs]
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Habib and C. Paul, A Survey on Algorithmic Aspects of Modular Decomposition, sec. 2.1"
      url: "https://arxiv.org/pdf/0912.1457"
pipeline_run: null
---

## Statement

If $M$ and $N$ are modules of a finite simple graph $G$, then $M\cap N$ is a
module of $G$. No hypothesis relating $M$ and $N$ is needed, and the case
$M\cap N=\varnothing$ is included.

## Facts & Assumptions

**Given:** Modules $M,N$ of a finite simple graph $G$, and a vertex $v\in V(G)\setminus(M\cap N)$.

[F1] $M$ is a module of $G$ when the pair $(\{v\},M)$ is pure for every $v\in V(G)\setminus M$ ([[def-module-of-a-graph]]).

[F2] The pair $(A,B)$ of disjoint sets is complete when every $a\in A$ is adjacent to every $b\in B$, anticomplete when no $a\in A$ is adjacent to any $b\in B$, and pure when it is complete or anticomplete ([[def-edges-between-sets-and-pure-mixed-pairs]]).

## Proof

**Proof technique:** cases.

1.1 If $v$ is complete to a set $S$ then $v$ is complete to every subset of $S$, and if $v$ is anticomplete to $S$ then $v$ is anticomplete to every subset of $S$; so purity of $(\{v\},S)$ passes to every subset of $S$. [F2]

1.2 First case: $v\notin M$. Then $(\{v\},M)$ is pure because $M$ is a module. [assume-case outM, F1]

1.3 Second case: $v\in M$. Since $v\notin M\cap N$, this forces $v\notin N$, and then $(\{v\},N)$ is pure because $N$ is a module. [assume-case inM, F1, given]

2.1 In the first case step 1.1 applied to $S=M\supseteq M\cap N$ makes $(\{v\},M\cap N)$ pure, and in the second case step 1.1 applied to $S=N\supseteq M\cap N$ does the same. The two cases exhaust the possibilities for $v$. [step 1.1, step 1.2, step 1.3, cases-exhaustive]

3.1 Every vertex outside $M\cap N$ therefore has $(\{v\},M\cap N)$ pure, which is the module condition of [F1], so $M\cap N$ is a module of $G$. [step 2.1, F1] ∎
