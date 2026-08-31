---
id: prop-pullback-is-functorial-up-to-canonical-bundle-isomorphism
kind: proposition
title: "Pullback is functorial up to canonical bundle isomorphism"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pullback-vector-bundle-as-a-fibre-product, thm-the-pullback-fibre-product-is-a-smooth-vector-bundle, def-vector-bundle-map-over-a-smooth-base-map]
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

For a smooth vector bundle $\pi:E\to M$, there are canonical bundle
isomorphisms

$$\operatorname{id}_M^*E\cong E, \qquad (f\circ g)^*E\cong g^*(f^*E).$$

## Facts & Assumptions

**Given:** A smooth vector bundle $E\to M$ and smooth maps $g:P\to N$ and
$f:N\to M$.

[L1] The pullback bundle is the fibre-product set with its smooth bundle
structure ([[def-pullback-vector-bundle-as-a-fibre-product]],
[[thm-the-pullback-fibre-product-is-a-smooth-vector-bundle]]).

## Proof

**Proof technique:** direct.

1.1 For the identity map, define $I:\operatorname{id}_M^*E\to E$ by $I(p,e)=e$. This is well defined because $p=\pi(e)$ in the identity pullback, and its inverse is $e\mapsto(\pi(e),e)$. [L1, given, construct]
2.1 An element of $g^*(f^*E)$ is a pair $(x,(g(x),e))$ with $f(g(x))=\pi(e)$. Send it to $(x,e)\in(f\circ g)^*E$. The inverse is $(x,e)\mapsto(x,(g(x),e))$. In the pulled-back bundle charts of [L1], both maps are the identity on the fibre coordinate, so they are smooth vector bundle isomorphisms. [L1, step 1.1, algebra] ∎