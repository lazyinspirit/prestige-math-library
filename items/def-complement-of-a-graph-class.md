---
id: def-complement-of-a-graph-class
kind: definition
title: "The complement of a graph class"
status: published
origin: session
deps: [def-hereditary-graph-class, def-graph-isomorphism-and-complement]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "ISGCI, Information System on Graph Classes and their Inclusions"
      url: "https://www.cs.sfu.ca/~pavol/graphclasses/"
pipeline_run: null
---

## Definition

For a graph class $\mathcal C$, its **complement class** is

$$\overline{\mathcal C}:=\{G:\overline G\in\mathcal C\}.$$

It consists exactly of those graphs whose complements belong to $\mathcal C$. If $\mathcal C$ is isomorphism-closed, this is equivalently the isomorphism-closed class of complements of members of $\mathcal C$ ([[def-graph-isomorphism-and-complement]]). The notation does not mean set-theoretic complement inside the class of all graphs.

When $\mathcal C$ is isomorphism-closed, so is $\overline{\mathcal C}$, because an isomorphism of graphs induces an isomorphism of their complements.
