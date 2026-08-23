---
id: def-galois-group-of-a-separable-polynomial
kind: definition
title: "The Galois group of a separable polynomial"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-polynomials-that-split-and-splitting-fields, def-finite-galois-extension-and-galois-group, thm-finite-galois-extension-characterizations, thm-isomorphisms-extend-to-splitting-fields]
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
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, The Galois group of a polynomial"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "K. Conrad, Galois Groups of Cubics and Quartics, Section 1"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cubicquartic.pdf"
pipeline_run: null
---

## Definition

Let $0\ne f\in F[x]$ be separable, and let $L/F$ be a splitting field of $f$
([[def-polynomials-that-split-and-splitting-fields]]). By
[[thm-finite-galois-extension-characterizations]], the extension $L/F$ is
finite Galois. The **Galois group of $f$ over $F$** is

$$G_f:=\operatorname{Gal}(L/F).$$

An ordering of the roots identifies $G_f$ with a permutation group. A different
ordering conjugates that subgroup in the corresponding symmetric group.
Isomorphisms between splitting fields exist by
[[thm-isomorphisms-extend-to-splitting-fields]] and conjugate their automorphism
groups. Thus the abstract group, and its root action up to relabelling, do not
depend on the chosen splitting field.
