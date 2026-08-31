---
id: prop-bundle-maps-over-f-are-sections-of-the-pulled-back-hom-bundle
kind: proposition
title: "Bundle maps over f are sections of the pulled-back Hom bundle"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pullback-vector-bundle-as-a-fibre-product, thm-the-pullback-fibre-product-is-a-smooth-vector-bundle, def-dual-and-hom-vector-bundles, prop-sections-of-hom-are-the-same-as-smooth-fibrewise-linear-maps]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---
## Statement

Let $\Phi:E\to F$ be a smooth vector bundle map over a smooth map $f:M\to N$.
Then $\Phi$ is naturally equivalent to a smooth section of the pulled-back Hom
bundle $\operatorname{Hom}(E,f^*F)\to M$.

## Facts & Assumptions

**Given:** Smooth vector bundles $E\to M$, $F\to N$, a smooth map $f:M\to N$,
and a bundle map $\Phi:E\to F$ over $f$.

[L1] The pullback fibre product $f^*F$ is a smooth vector bundle over $M$
([[thm-the-pullback-fibre-product-is-a-smooth-vector-bundle]]).

[L2] Sections of a Hom bundle are the same as fibrewise linear bundle maps over
the identity ([[prop-sections-of-hom-are-the-same-as-smooth-fibrewise-linear-maps]]).

## Proof

**Proof technique:** direct.

1.1 For each $p\in M$, the fibre map $\Phi_p:E_p\to F_{f(p)}$ may be viewed as a linear map $E_p\to(f^*F)_p$ because $(f^*F)_p$ is canonically $F_{f(p)}$. Hence $p\mapsto\Phi_p$ defines a section of $\operatorname{Hom}(E,f^*F)\to M$. [L1, given, construct]

2.1 In local trivializations the matrix of this section is exactly the local matrix of $\Phi$, so the section is smooth exactly when $\Phi$ is smooth. Therefore [L2] applied to the bundles $E$ and $f^*F$ yields the required bijection. [L1, L2, step 1.1, algebra] ∎