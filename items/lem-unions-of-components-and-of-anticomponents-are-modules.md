---
id: lem-unions-of-components-and-of-anticomponents-are-modules
kind: lemma
title: "Every union of connected components is a module, and so is every union of anticonnected components"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-module-of-a-graph, cor-connected-components-partition-the-vertex-set, lem-anticonnected-components-are-complement-components, lem-components-are-anticomplete-and-anticomponents-complete, def-connected-graph-and-connected-component, def-anticonnected-graph-and-anticonnected-component, def-edges-between-sets-and-pure-mixed-pairs]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "M. Habib and C. Paul, A Survey on Algorithmic Aspects of Modular Decomposition, sec. 2.3"
      url: "https://arxiv.org/pdf/0912.1457"
pipeline_run: null
---

## Statement

Let $G$ be a finite simple graph. If $M$ is a union of vertex sets of connected
components of $G$, then $M$ is a module of $G$, and every vertex outside $M$ is
anticomplete to $M$. If $M$ is a union of anticomponents of $G$, then $M$ is a
module of $G$, and every vertex outside $M$ is complete to $M$.

## Facts & Assumptions

**Given:** A finite simple graph $G$.

[F1] $M$ is a module of $G$ when the pair $(\{v\},M)$ is pure for every $v\in V(G)\setminus M$ ([[def-module-of-a-graph]]).

[L1] The vertex sets $C_G(v)$ of the connected components of $G$ are nonempty, cover $V(G)$, and any two are equal or disjoint ([[cor-connected-components-partition-the-vertex-set]], [[def-connected-graph-and-connected-component]]).

[L2] Distinct connected components of a graph are anticomplete to one another, and distinct anticomponents are complete to one another ([[lem-components-are-anticomplete-and-anticomponents-complete]]).

[F2] The anticomponents of $G$ are exactly the connected components of $\overline G$; consequently their vertex sets are nonempty, cover $V(G)$, and any two are equal or disjoint ([[lem-anticonnected-components-are-complement-components]], [[cor-connected-components-partition-the-vertex-set]]).

[F3] The pair $(A,B)$ of disjoint sets is complete when every vertex of $A$ is adjacent to every vertex of $B$, anticomplete when no vertex of $A$ is adjacent to any vertex of $B$, and pure when it is complete or anticomplete ([[def-edges-between-sets-and-pure-mixed-pairs]]).

## Proof

**Proof technique:** direct.

1.1 Let $M$ be a union of component vertex sets and let $v\in V(G)\setminus M$. The component $C_G(v)$ meets no component contained in $M$, since $v\notin M$ and distinct components are disjoint, so $C_G(v)$ is distinct from every component inside $M$. [L1]

1.2 Let $M$ be a union of anticomponents and let $v\in V(G)\setminus M$. The anticomponent containing $v$ is disjoint from every anticomponent inside $M$ and hence distinct from each of them. [F2]

2.1 In the component case of step 1.1, $v$ has no neighbour in any component inside $M$, so $v$ has no neighbour in $M$ and $(\{v\},M)$ is anticomplete, hence pure. [step 1.1, L2, F3]

2.2 In the anticomponent case of step 1.2, $v$ is adjacent to every vertex of every anticomponent inside $M$, so $v$ is adjacent to every vertex of $M$ and $(\{v\},M)$ is complete, hence pure. [step 1.2, L2, F3]

3.1 Steps 2.1 and 2.2 verify the condition of [F1] at every vertex outside $M$ in the two cases, so both kinds of union are modules, with the stated purity. [step 2.1, step 2.2, F1] ∎
