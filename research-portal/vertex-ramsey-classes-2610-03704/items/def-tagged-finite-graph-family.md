---
id: def-tagged-finite-graph-family
kind: definition
title: Tagged graph families with anticomplete parts
status: draft
origin: pipeline
domain: mathematics
deps:
  - math:def-finite-simple-graph
  - math:def-cartesian-product
  - math:thm-product-rule
  - math:thm-sum-rule
  - math:def-indexed-family
  - math:thm-the-characterising-property-of-ordered-pairs
  - math:thm-subset-of-a-finite-set
  - math:def-graph-adjacency-incidence-neighbourhood-and-degree
dependency_roles:
  math:def-finite-simple-graph: mathematical-premise
  math:def-cartesian-product: mathematical-premise
  math:thm-product-rule: mathematical-premise
  math:thm-sum-rule: mathematical-premise
  math:def-indexed-family: mathematical-premise
  math:thm-the-characterising-property-of-ordered-pairs: mathematical-premise
  math:thm-subset-of-a-finite-set: mathematical-premise
  math:def-graph-adjacency-incidence-neighbourhood-and-degree: mathematical-premise
provenance:
  statement: ai-generated
  proof: not-applicable
dependency_level: 0
---

## Definition

Let $T$ be a finite set and let $J_t=(V(J_t),E(J_t))$ be a finite simple graph for each $t\in T$. The **disjoint graph family** of the $J_t$ is the finite simple graph $D=(V(D),E(D))$ with vertex set $V(D)=\bigcup_{t\in T}(\{t\}\times V(J_t))$ and edge set $E(D)=\{\{(t,v),(t,w)\}:t\in T,\ \{v,w\}\in E(J_t)\}$. The set $\{t\}\times V(J_t)$ is the **tagged part** for $t$. Distinct tagged parts are **anticomplete**: no edge of $D$ has one endpoint in each. The construction permits an empty index set or empty parts.

## Definition references

[[math:def-finite-simple-graph]]

[[math:def-cartesian-product]]

[[math:def-indexed-family]]

## Justification

For each $t\in T$, the singleton $\{t\}$ is finite because $\{t\}\subseteq T$ and a subset of a finite set is finite. Each tagged part is therefore finite by the finite product rule. Distinct tagged parts are disjoint because equality of ordered pairs implies equality of their first coordinates. The finite sum rule therefore makes their union $V(D)$ finite. Each specified edge is a two-element subset of $V(D)$: its endpoints are distinct because $\{v,w\}$ is an edge of the simple graph $J_t$. Thus $D$ is a finite simple graph. Its edge set is specified uniquely, has no edges between distinct parts, and within the part tagged $t$ the map $v\mapsto(t,v)$ preserves and reflects adjacency. If $T$ is empty, both vertex and edge sets are empty.

[[math:thm-product-rule]]

[[math:thm-sum-rule]]

[[math:thm-the-characterising-property-of-ordered-pairs]]

[[math:thm-subset-of-a-finite-set]]

[[math:def-graph-adjacency-incidence-neighbourhood-and-degree]]
