---
id: thm-handshake-lemma-for-finite-simple-graphs
kind: theorem
title: "Handshake lemma: the sum of the vertex degrees is twice the number of edges"
status: published
origin: session
deps: [def-graph-adjacency-incidence-neighbourhood-and-degree, thm-double-counting, def-a-finite-incidence-relation-and-its-fibres]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Cornell Mathematics, Graph Theory notes"
      url: "https://pi.math.cornell.edu/~zakh/putnam/graph-theory.pdf"
pipeline_run: null
---

## Statement

For every finite simple graph $G=(V,E)$,

$$\sum_{v\in V}\deg_G(v)=2|E|$$

as an identity of natural numbers. It remains valid for the null graph, when
both sides are $0$.

## Facts & Assumptions

**Given:** A finite simple graph $G=(V,E)$.

[L1] For a relation $R\subseteq X\times Y$ between finite sets, the sum of the row-fibre cardinalities and the sum of the column-fibre cardinalities both equal $|R|$ ([[thm-double-counting]]).

[F1] The row and column fibres of a finite incidence relation are finite and are defined by fixing the first or second coordinate ([[def-a-finite-incidence-relation-and-its-fibres]]).

[F2] $\deg_G(v)$ is the number of edges incident with $v$ ([[def-graph-adjacency-incidence-neighbourhood-and-degree]]).

## Proof

**Proof technique:** direct.

1.1 Define the incidence relation $R:=\{\,(v,e)\in V\times E:v\in e\,\}$. Its row fibre at $v$ is the set of edges incident with $v$, so it has cardinality $\deg_G(v)$ by [F2]. [given, F1, F2]

1.2 Every edge $e\in E$ is a two-element subset of $V$, so its column fibre has cardinality $2$. [given, F1]

2.1 Applying [L1] to $R$ and using steps 1.1 and 1.2 gives $\sum_{v\in V}\deg_G(v)=|R|=\sum_{e\in E}2=2|E|$. [step 1.1, step 1.2, L1, algebra] ∎
