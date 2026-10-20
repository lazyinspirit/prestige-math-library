---
id: def-message-passing-gnn
kind: definition
title: "Aggregation-based message-passing graph neural networks"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-finite-labeled-graph, def-multiset]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Keyulu Xu, Weihua Hu, Jure Leskovec, and Stefanie Jegelka, How Powerful are Graph Neural Networks?"
      url: "https://cs.stanford.edu/people/jure/pubs/gin-iclr19.pdf"
      locator: "§2, Eq. (2.1) for neighborhood aggregation and combination, Eq. (2.4) for graph readout."
    - title: "Christopher Morris et al., Weisfeiler and Leman Go Neural: Higher-Order Graph Neural Networks"
      url: "https://ojs.aaai.org/index.php/AAAI/article/download/4384/4262"
      locator: "§3, Graph Neural Networks, Eqs. (5)–(6), node updates, and graph representation."
    - title: "Pan Li and Jure Leskovec, Graph Representation Learning"
      url: "https://www-cs-faculty.stanford.edu/people/jure/pubs/gnnpower-springer22.pdf"
      locator: "Chapter 5 §5.3.2, message, aggregation, update, and graph representation."
verification:
  precheck: n/a
---

## Definition

Fix a finite vertex-labeled simple undirected graph $G=(V,E,\ell)$, a finite nonnegative depth $K$, feature sets $H_0,\ldots,H_K$, and an initial map $\eta:\Sigma\to H_0$. For each $k=1,\ldots,K$, choose a set $Z_k$, an aggregation function $A_k:\mathsf M_{\mathrm{fin}}(H_{k-1})\to Z_k$ on finite multisets, and an update function $U_k:H_{k-1}\times Z_k\to H_k$. Initialize $h_v^0=\eta(\ell(v))$ and recursively set

$$
a_v^k=A_k\!\left(\{\!\{h_u^{k-1}:u\in N_G(v)\}\!\}\right),\qquad h_v^k=U_k(h_v^{k-1},a_v^k).
$$

For a chosen output set $Y$, a graph readout is a function $R:\mathsf M_{\mathrm{fin}}(H_K)\to Y$; the graph output is $z_G=R(\{\!\{h_v^K:v\in V\}\!\})$. The same maps are used on every graph being compared. The model has no vertex-identity input and uses no graph-wide information before the readout. It distinguishes two graphs when their outputs differ.

## Definition references

[[def-finite-labeled-graph|finite vertex-labeled simple undirected graphs and neighborhoods]]

[[def-multiset|finite multisets with multiplicities]]

[Xu, Hu, Leskovec, and Jegelka, “How Powerful are Graph Neural Networks?”, §2](https://cs.stanford.edu/people/jure/pubs/gin-iclr19.pdf)

[Morris et al., “Weisfeiler and Leman Go Neural,” §3](https://ojs.aaai.org/index.php/AAAI/article/download/4384/4262)

[Li and Leskovec, *Graph Representation Learning*, Chapter 5 §5.3.2](https://www-cs-faculty.stanford.edu/people/jure/pubs/gnnpower-springer22.pdf)
