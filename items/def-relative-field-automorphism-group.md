---
id: def-relative-field-automorphism-group
kind: definition
title: "Relative field automorphisms and $\\operatorname{Aut}(K/F)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-f-homomorphisms-and-embeddings-of-field-extensions]
justified_by: [thm-relative-automorphism-group-and-separable-degree-bound]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Chapter 3"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "K. Conrad, The Galois Correspondence, Section 4"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/galoiscorr.pdf"
pipeline_run: null
---

## Definition

Let $K/F$ be a field extension. An $F$-automorphism of $K$ is an
$F$-isomorphism $K\to K$. This is the relative-automorphism case of
[[def-f-homomorphisms-and-embeddings-of-field-extensions]].

The set of all $F$-automorphisms of $K$ is denoted

$$\operatorname{Aut}(K/F):=\{\sigma:K\to K:\sigma\text{ is an }F\text{-automorphism}\}.$$

Composition is the proposed operation. That it makes this set a group, and the
basic finite-extension bound on its order, are proved in
[[thm-relative-automorphism-group-and-separable-degree-bound]].
