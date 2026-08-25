---
id: def-directed-labelled-cayley-graph
kind: definition
title: "The directed labelled Cayley graph of a group with respect to a subset"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-labelled-directed-graph-and-labelled-graph-isomorphism, def-group, def-generated-subgroup]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "C. Drutu and M. Kapovich, Geometric Group Theory, Section 7.9"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
---

## Definition

Let $G$ be a group and let $S \subseteq G$. The **directed labelled Cayley
graph** of $G$ with respect to $S$ is the labelled directed graph

$$\operatorname{Cay}_{\mathrm{dir}}(G,S)$$

with vertex set $G$ and labelled arc set

$$A := \{\, (g,s,gs) : g \in G,\ s \in S \,\} \subseteq G \times S \times G.$$

Thus each generator $s \in S$ supplies from every vertex $g$ a directed edge
labelled $s$ to the vertex $gs$. If $e \in S$, the graph has a labelled loop at
every vertex.
