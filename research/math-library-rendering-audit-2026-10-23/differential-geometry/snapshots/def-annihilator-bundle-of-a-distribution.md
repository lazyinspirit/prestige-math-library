---
id: def-annihilator-bundle-of-a-distribution
kind: definition
title: "The annihilator bundle of a distribution"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-smooth-distribution-on-a-manifold,
       prop-local-frame-characterization-of-a-smooth-distribution,
       def-dual-and-hom-vector-bundles,
       def-annihilators-under-the-evaluation-pairing,
       thm-the-cotangent-bundle-has-a-canonical-smooth-2n-manifold-structure]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-09-05
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=w4bhBwAAQBAJ"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Definition

Let $\mathcal D$ be a smooth distribution on $M$. Its **annihilator bundle**
is the subset

$$\mathcal D^\circ := \{\alpha \in T^*M : \alpha(v) = 0 \text{ for every } v \in \mathcal D_{\pi(\alpha)}\}.$$

Equivalently, the fibre over $p$ is the annihilator subspace
$\mathcal D_p^\circ \subseteq T_p^*M$.
