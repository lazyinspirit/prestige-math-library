---
id: def-action-by-automorphisms
kind: definition
title: "An action of a group $H$ on a group $N$ by automorphisms"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group-action, thm-group-actions-correspond-to-homomorphisms, def-group-isomorphism-and-automorphism]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Semidirect Products"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/semidirect-product.pdf"
pipeline_run: null
---

## Definition

An **action of a group $H$ on a group $N$ by automorphisms** is a homomorphism

$$\alpha:H\longrightarrow\operatorname{Aut}(N).$$

Here automorphisms are those of [[def-group-isomorphism-and-automorphism]]. Writing $\alpha_h=\alpha(h)$, this means that every $\alpha_h$ is an automorphism of $N$, $\alpha_{hk}=\alpha_h\circ\alpha_k$, and $\alpha_1=\operatorname{id}_N$. Equivalently, by [[thm-group-actions-correspond-to-homomorphisms]], it is a group action ([[def-group-action]]) on the underlying set of $N$ for which every acting permutation is an automorphism.
