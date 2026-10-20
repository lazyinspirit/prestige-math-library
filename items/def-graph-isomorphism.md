---
id: def-graph-isomorphism
kind: definition
title: "Label-preserving graph isomorphisms"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-finite-labeled-graph]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Christopher Morris et al., Weisfeiler and Leman Go Neural: Higher-Order Graph Neural Networks"
      url: "https://ojs.aaai.org/index.php/AAAI/article/download/4384/4262"
      locator: "§2, Notation and Background, labeled graph isomorphism."
    - title: "Pan Li and Jure Leskovec, Graph Representation Learning"
      url: "https://www-cs-faculty.stanford.edu/people/jure/pubs/gnnpower-springer22.pdf"
      locator: "Chapter 5 §5.1, Definition 5.3 (Isomorphism)."
    - title: "Keyulu Xu, Weihua Hu, Jure Leskovec, and Stefanie Jegelka, How Powerful are Graph Neural Networks?"
      url: "https://cs.stanford.edu/people/jure/pubs/gin-iclr19.pdf"
      locator: "§2, graph-isomorphism problem and initial node features."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Definition

Let $G=(V,E,\ell)$ and $H=(W,F,m)$ be finite vertex-labeled simple undirected graphs with labels in the same set $\Sigma$. A label-preserving graph isomorphism from $G$ to $H$ is a bijection $\varphi:V\to W$ such that $\ell(v)=m(\varphi(v))$ for every $v\in V$, and for all distinct $u,v\in V$, $\{u,v\}\in E$ if and only if $\{\varphi(u),\varphi(v)\}\in F$. The graphs are isomorphic when such a bijection exists, and nonisomorphic otherwise.

## Definition references

[[def-finite-labeled-graph|finite vertex-labeled simple undirected graphs]]

[Morris et al., “Weisfeiler and Leman Go Neural,” §2](https://ojs.aaai.org/index.php/AAAI/article/download/4384/4262)

[Li and Leskovec, *Graph Representation Learning*, Chapter 5 §5.1](https://www-cs-faculty.stanford.edu/people/jure/pubs/gnnpower-springer22.pdf)

[Xu, Hu, Leskovec, and Jegelka, “How Powerful are Graph Neural Networks?”, §2](https://cs.stanford.edu/people/jure/pubs/gin-iclr19.pdf)
