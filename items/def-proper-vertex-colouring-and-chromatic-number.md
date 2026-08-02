---
id: def-proper-vertex-colouring-and-chromatic-number
kind: definition
title: "Proper vertex colourings and chromatic number"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-simple-graph, def-natural-numbers, def-finite-cardinality,
       thm-well-ordering-principle]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Springer, Graph Theory Fundamentals, Section 1.7.1"
      url: "https://link.springer.com/chapter/10.1007/978-981-96-4745-3_1"
pipeline_run: null
---

## Definition

Let $G=(V,E)$ be a finite simple graph ([[def-finite-simple-graph]]) and let
$k\in\mathbb N$. A **proper $k$-vertex-colouring** is a function

$$c:V\longrightarrow k$$

such that $c(u)\ne c(v)$ whenever $\{u,v\}\in E$. Its fibres are the
**colour classes**. The graph is **$k$-colourable** when such a function exists.

The **chromatic number** of $G$ is

$$\chi(G):=\min\{\,k\in\mathbb N:G\text{ is }k\text{-colourable}\,\}.$$

This minimum exists. Since $V$ is finite, there is a bijection
$b:V\to |V|$ ([[def-finite-cardinality]]), and $b$ is a proper
$|V|$-colouring because adjacent vertices are distinct. The displayed set of
admissible natural numbers is therefore nonempty, so it has a least element by
[[thm-well-ordering-principle]].

The null graph has $V=\varnothing$. Its unique empty function
$\varnothing\to0$ is a proper $0$-colouring, so $\chi(G)=0$. Conversely, a
nonnull graph has no function from its nonempty vertex set to $0=\varnothing$,
and hence has positive chromatic number. Colours are labels only: composing a
proper colouring with a bijection of its colour set changes no adjacency
condition.
