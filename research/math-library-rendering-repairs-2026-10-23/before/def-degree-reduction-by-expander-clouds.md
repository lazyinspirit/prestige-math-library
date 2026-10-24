---
id: def-degree-reduction-by-expander-clouds
kind: definition
title: "Degree reduction by expander incidence clouds"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-constraint-graph-and-labeling-value, def-constraint-graph-regularization, lem-constraint-expander-overlay]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-27
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Irit Dinur, The PCP theorem by gap amplification, §4 Definitions 4.1-4.2 and Corollary 4.3, pp. 13-15."
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.5.1 the 'nice' instances and the preprocessing of Lemma 18.29."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Definition

Fix the alphabet $\Sigma$ of [[def-constraint-graph-and-labeling-value]], a total ordering of $\Sigma$ used for plurality tie breaking, and the reverse-paired degree-$128$ expander family $H_r$ with unnormalized edge expansion at least $h_0=7/10$ for $r\ge2$ that is used in [[def-constraint-graph-regularization]].

Let $G$ be a binary constraint graph over $\Sigma$ in the published convention. The **degree-reduction map** $R_{\deg}$ is the following deterministic construction, which is the published cloud-and-overlay preprocessing read as a map on explicit encodings.

1. If $E(G)=\varnothing$, output the empty graph over $\Sigma$, which has value one.
2. Otherwise delete isolated vertices, and replace every vertex $v$ of degree $r$ by a cloud of its $r$ incidence ports, so that each original edge contributes its two distinct ports, a loop contributing two distinct ports at its vertex. Put a copy of $H_r$ inside the cloud, with equality relations on all its edges, and keep one **external** edge for each original edge, joining its two designated ports and carrying the same relation in the same endpoint order. The result is the cloud graph $G_1$ of [[lem-constraint-expander-overlay]]; it has degree $129$ and $2|E(G)|$ vertices.
3. On the $2|E(G)|$ ports add a copy of $H_{2|E(G)|}$ with tautological relations and $65$ ordinary tautological loops at every port, i.e. $130$ loop slots, to obtain the **registered graph** $G_2$. By the published count, $G_2$ is $387$-regular with $2|E(G)|$ vertices and $387|E(G)|$ ordinary edges, its normalized adjacency satisfies $\alpha(G_2)\le\rho_2=(259+128\rho_0)/387<1$, and its alphabet is still $\Sigma$.

The **decoding map** $D$ sends a labeling $\tau$ of $G_2$ (equivalently of $G_1$, on which it depends only through the ports) to the labeling $D\tau$ of $G$ that assigns to each original vertex the most frequent label among the ports of its cloud, breaking ties by the fixed ordering; deleted isolated vertices receive the first symbol of $\Sigma$. This is the plurality decoding of [[def-constraint-graph-regularization]].

Every step is a fixed function of the explicit input encoding: listing the $H_r$ adjacency lists, copying $2|E(G)|$ relation tables and adding $387|E(G)|$ tautological slots takes time and output length polynomial in the input encoding length, and the output parameters $2|E(G)|$, $387|E(G)|$, $387$, $\rho_2$ depend only on the fixed family and on $|E(G)|$. The map is the first of the two transformations composed in [[thm-gap-amplification-step]]; its quantitative unsatisfiability guarantee is stated and proved there, not here.
