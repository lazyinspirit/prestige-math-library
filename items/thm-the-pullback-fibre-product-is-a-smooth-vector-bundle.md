---
id: thm-the-pullback-fibre-product-is-a-smooth-vector-bundle
kind: theorem
title: "The pullback fibre product is a smooth vector bundle"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pullback-vector-bundle-as-a-fibre-product, def-vector-bundle-chart-and-transition-function, def-restriction-of-a-vector-bundle, prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
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

If $\pi:E\to M$ is a smooth rank-$r$ vector bundle and $f:N\to M$ is smooth,
then the fibre product $f^*E$ is a smooth rank-$r$ vector bundle over $N$.

## Facts & Assumptions

**Given:** A smooth rank-$r$ vector bundle $\pi:E\to M$ and a smooth map
$f:N\to M$.

[L1] A vector bundle chart on $E$ over $U\subseteq M$ is a diffeomorphism
$E|_U\cong U\times\mathbb R^r$ with transition functions of the form
$(p,v)\mapsto(p,g_{\beta\alpha}(p)v)$
([[def-vector-bundle-chart-and-transition-function]]).

[L2] The restriction $E|_U$ is the same total space over the smaller open base
([[def-restriction-of-a-vector-bundle]]).

## Proof

**Proof technique:** direct.

1.1 Let $\Phi_\alpha:E|_{U_\alpha}\to U_\alpha\times\mathbb R^r$ be a vector bundle chart. For $q\in f^{-1}(U_\alpha)$ and $(q,e)\in f^*E$, define $\widetilde\Phi_\alpha(q,e)=(q,v)$ when $\Phi_\alpha(e)=(f(q),v)$. This is a bijection $(f^*E)|_{f^{-1}(U_\alpha)}\to f^{-1}(U_\alpha)\times\mathbb R^r$. [L1, L2, given, construct]
2.1 On overlaps, $\widetilde\Phi_\beta\circ\widetilde\Phi_\alpha^{-1}(q,v)=(q,g_{\beta\alpha}(f(q))v)$. These chart changes are smooth and fibrewise linear because the original transition functions are smooth. Therefore the pulled-back charts define a smooth rank-$r$ vector bundle over $N$. [L1, step 1.1, algebra] ∎