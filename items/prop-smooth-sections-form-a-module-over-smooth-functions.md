---
id: prop-smooth-sections-form-a-module-over-smooth-functions
kind: proposition
title: "Smooth sections form a module over smooth functions"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-smooth-section-local-section-and-support, prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components, thm-algebra-of-total-derivatives]
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

If $E\to M$ is a smooth vector bundle, then the smooth sections of $E$ form a
module over $C^\infty(M)$ under pointwise addition and scalar multiplication.

## Facts & Assumptions

**Given:** A smooth vector bundle $E\to M$.

[L1] A section is smooth exactly when its local frame components are smooth
([[prop-smoothness-of-a-section-is-equivalent-to-smooth-local-components]]).

[L2] Sums and products of smooth scalar functions are smooth
([[thm-algebra-of-total-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 Let $\sigma,\tau$ be smooth sections and let $f\in C^\infty(M)$. On a local frame, write $\sigma=\sum a_i s_i$ and $\tau=\sum b_i s_i$ with smooth components $a_i,b_i$. Then $\sigma+\tau=\sum(a_i+b_i)s_i$ and $f\sigma=\sum(fa_i)s_i$. [L1, given]
2.1 By [L2], the component functions $a_i+b_i$ and $fa_i$ are smooth, so [L1] shows that $\sigma+\tau$ and $f\sigma$ are again smooth sections. The module axioms hold fibrewise because each fibre is a vector space. [L1, L2, step 1.1] ∎