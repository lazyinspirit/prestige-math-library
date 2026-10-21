---
id: alg-message-passing-forward-pass
kind: algorithm
title: "Finite-depth message-passing forward pass"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [def-finite-labeled-graph, def-message-passing-gnn]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Keyulu Xu, Weihua Hu, Jure Leskovec, and Stefanie Jegelka, How Powerful are Graph Neural Networks?"
      url: "https://cs.stanford.edu/people/jure/pubs/gin-iclr19.pdf"
      locator: "§2, Eq. (2.1) neighborhood aggregation and combination, and Eq. (2.4) graph readout."
    - title: "Christopher Morris et al., Weisfeiler and Leman Go Neural: Higher-Order Graph Neural Networks"
      url: "https://ojs.aaai.org/index.php/AAAI/article/download/4384/4262"
      locator: "§3, Graph Neural Networks, layerwise aggregation and graph representation."
    - title: "Pan Li and Jure Leskovec, Graph Representation Learning"
      url: "https://www-cs-faculty.stanford.edu/people/jure/pubs/gnnpower-springer22.pdf"
      locator: "Chapter 5 §5.3.2, message-passing computation."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Definition

Given a finite vertex-labeled graph $G=(V,E,\ell)$, a finite nonnegative integer $K$, feature spaces and maps of the types in the aggregation-based message-passing definition, compute a graph output as follows. Initialize $h_v^0=\eta(\ell(v))$ for every $v\in V$. For each $k=1,\ldots,K$, first compute $a_v^k=A_k(\{\!\{h_u^{k-1}:u\in N_G(v)\}\!\})$ for every $v\in V$, then set $h_v^k=U_k(h_v^{k-1},a_v^k)$ for every $v\in V$. Return $R(\{\!\{h_v^K:v\in V\}\!\})$. When $K=0$, return $R(\{\!\{\eta(\ell(v)):v\in V\}\!\})$ without a layer update.

## Definition references

[[def-finite-labeled-graph|finite labeled graphs and neighborhoods]]

[[def-message-passing-gnn|the typed aggregation, update, and readout maps]]

[Xu, Hu, Leskovec, and Jegelka, “How Powerful are Graph Neural Networks?”, §2](https://cs.stanford.edu/people/jure/pubs/gin-iclr19.pdf)

[Morris et al., “Weisfeiler and Leman Go Neural,” §3](https://ojs.aaai.org/index.php/AAAI/article/download/4384/4262)

[Li and Leskovec, *Graph Representation Learning*, Chapter 5 §5.3.2](https://www-cs-faculty.stanford.edu/people/jure/pubs/gnnpower-springer22.pdf)
