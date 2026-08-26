---
id: def-viral-property-for-a-finite-family
kind: definition
title: "The viral property for a finite forbidden family"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-h-free-and-family-free-graph, def-induced-copy-number, def-c-sparse-and-c-restricted-vertex-set, def-real-power]
justified_by: []
aliases: []
landmark: true
verification:
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

Let $\mathcal F$ be a finite family of finite graphs. We say that $\mathcal F$ is
**viral** if there exists a real number $d\ge1$ such that for every real
$\epsilon\in(0,\tfrac12)$ and every nonempty finite simple graph $G$ satisfying

$$\operatorname{ind}_H(G)<\bigl(\epsilon^d|V(G)|\bigr)^{|V(H)|} \qquad\text{for every }H\in\mathcal F,$$

there is an $\epsilon$-restricted vertex set $X\subseteq V(G)$ with

$$|X|\ge\epsilon^d|V(G)|.$$

The induced-copy count is that of [[def-induced-copy-number]], and
$\epsilon$-restricted is in the sense of
[[def-c-sparse-and-c-restricted-vertex-set]].

## Remarks

- Viral families are allowed to be vacuous: if the displayed copy bounds have no
  nonempty instances, the implication is still true.
- The source formulation is already in the induced-copy and restricted-set
  language used on this page, so no change of normalization is hidden here.
