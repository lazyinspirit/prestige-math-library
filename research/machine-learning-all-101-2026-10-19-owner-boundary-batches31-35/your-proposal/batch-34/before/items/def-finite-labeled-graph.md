---
id: def-finite-labeled-graph
kind: definition
title: "Finite simple undirected graphs with vertex labels"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Keyulu Xu, Weihua Hu, Jure Leskovec, and Stefanie Jegelka, How Powerful are Graph Neural Networks?"
      url: "https://cs.stanford.edu/people/jure/pubs/gin-iclr19.pdf"
      locator: "§2, graph and node-feature conventions; published ICLR 2019 version."
    - title: "Christopher Morris et al., Weisfeiler and Leman Go Neural: Higher-Order Graph Neural Networks"
      url: "https://ojs.aaai.org/index.php/AAAI/article/download/4384/4262"
      locator: "§2, Notation and Background, finite graphs, labeled graphs, and neighborhoods."
    - title: "Pan Li and Jure Leskovec, Graph Representation Learning"
      url: "https://www-cs-faculty.stanford.edu/people/jure/pubs/gnnpower-springer22.pdf"
      locator: "Chapter 5 §§5.1–5.3, graph-structured examples and node features."
verification:
  precheck: n/a
---

## Definition

Fix a set of labels $\Sigma$. A finite vertex-labeled simple undirected graph is a triple $G=(V,E,\ell)$ in which $V$ is a finite set of vertices, $E$ is a set of two-element subsets of $V$, and $\ell:V\to\Sigma$ assigns a label to each vertex. Its neighborhood at $v\in V$ is $N_G(v)=\{u\in V:\{u,v\}\in E\}$. Thus edges have no orientation, loops, or multiplicity. Graphs compared in one labeled-graph statement use the same label set $\Sigma$.

## Definition references

[Xu, Hu, Leskovec, and Jegelka, “How Powerful are Graph Neural Networks?”, §2](https://cs.stanford.edu/people/jure/pubs/gin-iclr19.pdf)

[Morris et al., “Weisfeiler and Leman Go Neural,” §2](https://ojs.aaai.org/index.php/AAAI/article/download/4384/4262)

[Li and Leskovec, *Graph Representation Learning*, Chapter 5](https://www-cs-faculty.stanford.edu/people/jure/pubs/gnnpower-springer22.pdf)
