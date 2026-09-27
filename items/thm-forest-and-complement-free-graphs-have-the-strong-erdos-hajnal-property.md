---
id: thm-forest-and-complement-free-graphs-have-the-strong-erdos-hajnal-property
kind: theorem
title: "For every forest $H$, graphs excluding $H$ and $\\overline{H}$ have a linear pure pair"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-strong-erdos-hajnal-property-for-a-hereditary-class, def-h-free-and-family-free-graph, def-tree-forest-and-leaf, lem-forbidden-induced-subgraph-classes-are-hereditary, cor-rodl-every-h-free-graph-has-a-linear-restricted-set, def-c-sparse-and-c-restricted-vertex-set, thm-forest-free-graphs-have-a-linear-anticomplete-pair-or-a-high-degree-vertex]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, Alex Scott, Paul Seymour, and Sophie Spirkl, Pure pairs. I. Trees and linear anticomplete pairs, statement 1.2"
      url: "https://arxiv.org/pdf/1809.00919"
pipeline_run: null
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-07-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

For every forest $H$, there exists a real constant $\epsilon_H>0$ such that
every finite graph $G$ with no induced $H$ and no induced $\overline{H}$ and
with $|V(G)|\ge 2$ contains disjoint sets $A,B\subseteq V(G)$ satisfying

$$|A|\ge \epsilon_H|V(G)|,\qquad |B|\ge \epsilon_H|V(G)|,$$

and such that $(A,B)$ is a pure pair. Equivalently, the hereditary class of
graphs forbidding $H$ and $\overline{H}$ has the strong Erdős-Hajnal property.

## Facts & Assumptions

**Given:** A forest $H$ and a finite graph excluding both $H$ and $\overline H$.

[L1] There is $e_H>0$ such that every $H$-free graph on at least two vertices has an anticomplete pair with both sides at least $e_H$ times its order, or a vertex of degree at least $e_H$ times its order ([[thm-forest-free-graphs-have-a-linear-anticomplete-pair-or-a-high-degree-vertex]]).

[L2] For $c\in(0,1/2)$, every nonempty $H$-free graph has a $c$-restricted set of size at least $\delta|G|$ for some $\delta>0$ depending on $H,c$ ([[cor-rodl-every-h-free-graph-has-a-linear-restricted-set]]).

[L3] The forbidden induced-subgraph class is hereditary ([[lem-forbidden-induced-subgraph-classes-are-hereditary]]).

## Proof

**Proof technique:** apply Rödl's restricted-set theorem and the forest dichotomy.

1.1 Choose $0<e\le e_H$ with $e<1/2$ and apply [L2] with $c=e/2$, obtaining $\delta>0$. Put $\epsilon_H=\min\{e\delta,\delta\}>0$. [L1, L2, choose]

2.1 Let $G$ exclude $H,\overline H$ and have $n\ge2$ vertices. By [L2] it has $X$ with $|X|\ge\delta n$ which is either $(e/2)$-sparse or $(e/2)$-dense. If $|X|=1$, then $\delta n\le1$; any two distinct vertices of $G$ are a complete or anticomplete pair of singletons, both of size at least $\epsilon_H n$. [step 1.1, L2, algebra]

3.1 Suppose $|X|\ge2$ and $X$ is $(e/2)$-sparse. The induced graph $G[X]$ is $H$-free and has maximum degree at most $(e/2)|X|<e_H|X|$. Therefore [L1] gives disjoint anticomplete $A,B\subseteq X$ with $|A|,|B|\ge e_H|X|\ge\epsilon_Hn$. [step 1.1, step 2.1, L1]

3.2 Suppose instead $|X|\ge2$ and $X$ is $(e/2)$-dense. The complement $\overline{G[X]}$ is $H$-free because $G$ excludes $\overline H$, and its maximum degree is at most $(e/2)|X|$. Apply [L1] there to obtain an anticomplete pair of size at least $e_H|X|$ on each side; it is a complete pair of size at least $\epsilon_Hn$ in $G$. [step 1.1, step 2.1, L1]

4.1 All cases give a pure pair of the required linear size. By [L3] and the definition of strong Erdős–Hajnal property, the hereditary class excluding $H,\overline H$ has that property. [step 2.1, step 3.1, step 3.2, L3] ∎
