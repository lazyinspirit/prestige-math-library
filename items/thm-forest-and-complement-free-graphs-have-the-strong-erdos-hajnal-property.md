---
id: thm-forest-and-complement-free-graphs-have-the-strong-erdos-hajnal-property
kind: theorem
title: "For every forest $H$, graphs excluding $H$ and $\\overline{H}$ have a linear pure pair"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-strong-erdos-hajnal-property-for-a-hereditary-class, def-h-free-and-family-free-graph, def-tree-forest-and-leaf, lem-forbidden-induced-subgraph-classes-are-hereditary]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Pure pairs. I. Trees and linear anticomplete pairs, statement 1.2"
      url: "https://arxiv.org/pdf/1809.00919"
pipeline_run: null
---

## Statement

For every forest $H$, there exists a real constant $\epsilon_H>0$ such that
every finite graph $G$ with no induced $H$ and no induced $\overline{H}$ and
with $|V(G)|\ge 2$ contains disjoint sets $A,B\subseteq V(G)$ satisfying

$$|A|\ge \epsilon_H|V(G)|,\qquad |B|\ge \epsilon_H|V(G)|,$$

and such that $(A,B)$ is a pure pair. Equivalently, the hereditary class of
graphs forbidding $H$ and $\overline{H}$ has the strong Erdős-Hajnal property.

## Facts & Assumptions

**Given:** A forest $H$.

[F1] For every forest $H$, the source theorem gives a real constant $\epsilon_H>0$ such that every finite graph $G$ with $|V(G)|\ge 2$ and with no induced $H$ or $\overline{H}$ contains disjoint sets $A,B\subseteq V(G)$ with $$|A|\ge \epsilon_H|V(G)|,\qquad |B|\ge \epsilon_H|V(G)|,$$ and with $(A,B)$ pure.

[L1] Every class defined by forbidden induced subgraphs is hereditary ([[lem-forbidden-induced-subgraph-classes-are-hereditary]]).

[L2] A hereditary class has the strong Erdős-Hajnal property exactly when some positive linear constant works for every graph in the class with at least two vertices ([[def-strong-erdos-hajnal-property-for-a-hereditary-class]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal C_H$ be the class of finite graphs with no induced $H$ and no induced $\overline H$. By [L1], this is a hereditary class. By [F1], some constant $\epsilon_H>0$ works for every graph $G\in\mathcal C_H$ with $|V(G)|\ge 2$. [F1, L1, choose]

2.1 By [L2], step 1.1 is exactly the assertion that $\mathcal C_H$ has the strong Erdős-Hajnal property. This is equivalent to the displayed graph-level formulation. [step 1.1, L2] ∎
