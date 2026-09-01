---
id: def-inverse-limit-topology-for-finite-discrete-groups
kind: definition
title: "The inverse limit of finite groups carries the subspace topology from the product of discrete factors"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-compatible-tuple-inverse-limit-of-groups, def-product-topology, def-subspace-topology-top]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Brian Osserman, Math 6112 notes on inverse limits and profinite groups"
      url: "https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf"
    - title: "H. W. Lenstra, Profinite groups and Galois groups"
      url: "https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf"
---

## Definition

If every $G_i$ in an inverse system is finite and discrete, the inverse limit
$L=\varprojlim G_i$ carries the **inverse-limit topology**, meaning the subspace
topology inherited from the product space $\prod_i G_i$ where each factor has
its discrete topology ([[def-product-topology]], [[def-subspace-topology-top]]).

The intersections of $L$ with cylinder sets form a basis for this topology;
an arbitrary open subset of $L$ is a union of such cylinder traces.
