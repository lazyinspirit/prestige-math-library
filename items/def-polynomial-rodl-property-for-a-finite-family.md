---
id: def-polynomial-rodl-property-for-a-finite-family
kind: definition
title: "The polynomial Rödl property for a finite forbidden family"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-h-free-and-family-free-graph, def-c-sparse-and-c-restricted-vertex-set, def-real-power]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "M. Bucić, J. Fox, and H. T. Pham, Equivalence between Erdős-Hajnal and polynomial Rödl and Nikiforov conjectures"
      url: "https://arxiv.org/html/2403.08303v1"
    - title: "S. Huang, Y. Ju, and Y. Zhou, Erdős-Hajnal beyond the five-vertex path, §1.1"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Definition

Let $\mathcal F$ be a finite family of graphs. We say that $\mathcal F$ has the
**polynomial Rödl property** if there exists a real number $d\ge1$ such that for
every real $\epsilon\in(0,\tfrac12)$ and every nonempty $\mathcal F$-free finite
simple graph $G$, there is an $\epsilon$-restricted vertex set
$X\subseteq V(G)$ with

$$
|X|\ge\epsilon^d|V(G)|.
$$

Here $\mathcal F$-free is in the induced-subgraph sense of
[[def-h-free-and-family-free-graph]], $\epsilon$-restricted means
$\epsilon$-sparse or $\epsilon$-dense in the sense of
[[def-c-sparse-and-c-restricted-vertex-set]], and the power $\epsilon^d$ is that
of [[def-real-power]].

## Remarks

- This page keeps the maximum-degree normalization of restricted sets already
  fixed on the sparse-restricted-subgraphs page.
- The same exponent $d$ must work simultaneously for every
  $\epsilon\in(0,\tfrac12)$ and every nonempty $\mathcal F$-free graph.
