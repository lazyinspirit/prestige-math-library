---
id: def-kernel-and-image-of-group-homomorphism
kind: definition
title: 'The kernel and image of a group homomorphism'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group-homomorphism, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Ernst, An Inquiry-Based Approach to Abstract Algebra, Homomorphisms"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/An_Inquiry-Based_Approach_to_Abstract_Algebra_%28Ernst%29/07%3A_Homomorphisms_and_the_Isomorphism_Theorems/7.01%3A_Homomorphisms"
pipeline_run: null
---

## Definition

The kernel and image of a group homomorphism.

For a group homomorphism $f:G\to H$, define

$$\ker f:=\{g\in G:f(g)=e_H\},\qquad\operatorname{im}f:=\{f(g):g\in G\}.$$

Thus $f$ is surjective exactly when $\operatorname{im}f=H$
([[def-injection-surjection-bijection]]).
