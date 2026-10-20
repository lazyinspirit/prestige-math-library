---
id: def-graph-isomorphism-network
kind: definition
title: "Graph Isomorphism Network update rule"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps: [def-message-passing-gnn]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Keyulu Xu, Weihua Hu, Jure Leskovec, and Stefanie Jegelka, How Powerful are Graph Neural Networks?"
      url: "https://cs.stanford.edu/people/jure/pubs/gin-iclr19.pdf"
      locator: "§4.1, Eq. (4.1), Graph Isomorphism Network update."
    - title: "Pan Li and Jure Leskovec, Graph Representation Learning"
      url: "https://www-cs-faculty.stanford.edu/people/jure/pubs/gnnpower-springer22.pdf"
      locator: "Chapter 5 §5.3.4, GIN update and sum aggregation."
    - title: "Christopher Morris et al., Weisfeiler and Leman Go Neural: Higher-Order Graph Neural Networks"
      url: "https://ojs.aaai.org/index.php/AAAI/article/download/4384/4262"
      locator: "§3, Eq. (5), simple sum-based one-dimensional GNN update."
verification:
  precheck: n/a
---

## Definition

Fix a finite depth $K\in\mathbb N_0$, positive integer dimensions $d_0,\ldots,d_K$, an initial embedding $\eta:\Sigma\to\mathbb R^{d_0}$, scalars $\varepsilon_1,\ldots,\varepsilon_K\in\mathbb R$, and maps $M_k:\mathbb R^{d_{k-1}}\to\mathbb R^{d_k}$ for $1\le k\le K$. Each $M_k$ is a multilayer perceptron, meaning a finite composition of affine maps between finite-dimensional real vector spaces and coordinatewise applications of a fixed scalar activation. On a finite vertex-labeled simple undirected graph $G$, initialize $h_v^0=\eta(\ell(v))$ and update

$$
h_v^k=M_k\!\left((1+\varepsilon_k)h_v^{k-1}+\sum_{u\in N_G(v)}h_u^{k-1}\right)\qquad(1\le k\le K).
$$

For a chosen output set $Y$, the graph readout is a map $R:\mathsf M_{\mathrm{fin}}(\mathbb R^{d_K})\to Y$ on the multiset of final vertex features. The neighbor sum counts each neighbor vertex once, so equal feature vectors at different neighbors contribute with their multiplicity. This definition imposes no injectivity condition on the perceptrons or the readout and makes no claim that a fixed finite architecture realizes an arbitrary injection.

## Definition references

[[def-message-passing-gnn|aggregation-based updates and multiset graph readouts]]

[Xu, Hu, Leskovec, and Jegelka, “How Powerful are Graph Neural Networks?”, §4.1, Eq. (4.1)](https://cs.stanford.edu/people/jure/pubs/gin-iclr19.pdf)

[Li and Leskovec, *Graph Representation Learning*, Chapter 5 §5.3.4](https://www-cs-faculty.stanford.edu/people/jure/pubs/gnnpower-springer22.pdf)

[Morris et al., “Weisfeiler and Leman Go Neural,” §3, Eq. (5)](https://ojs.aaai.org/index.php/AAAI/article/download/4384/4262)
