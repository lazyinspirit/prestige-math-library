---
id: def-finite-galois-extension-and-galois-group
kind: definition
title: "Finite Galois extensions and $\\operatorname{Gal}(K/F)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-relative-field-automorphism-group, def-normal-algebraic-extension, def-separable-elements-and-separable-extensions]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Definition 3.9"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "K. Conrad, The Galois Correspondence, Definition 4.4"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/galoiscorr.pdf"
pipeline_run: null
---

## Definition

A finite extension $K/F$ is **Galois** when it is normal
([[def-normal-algebraic-extension]]) and separable
([[def-separable-elements-and-separable-extensions]]). Its **Galois group** is

$$\operatorname{Gal}(K/F):=\operatorname{Aut}(K/F),$$

with the group operation supplied by
[[def-relative-field-automorphism-group]]. The notation
$\operatorname{Gal}(K/F)$ is reserved here for an extension already known to be
finite Galois; for an arbitrary extension the notation remains
$\operatorname{Aut}(K/F)$.
