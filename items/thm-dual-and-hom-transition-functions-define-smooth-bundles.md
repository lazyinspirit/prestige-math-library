---
id: thm-dual-and-hom-transition-functions-define-smooth-bundles
kind: theorem
title: "Dual and Hom transition functions define smooth bundles"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-dual-and-hom-vector-bundles, def-vector-bundle-chart-and-transition-function, def-transpose-of-a-linear-map, thm-matrix-of-transpose-is-the-transposed-matrix, thm-real-square-matrix-invertible-iff-determinant-nonzero]
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

If $E\to M$ and $F\to M$ are smooth vector bundles, then $E^*\to M$ and
$\operatorname{Hom}(E,F)\to M$ are smooth vector bundles. In local bundle charts,
the dual transition matrices are $(g_{\beta\alpha}^{-1})^{T}$ and the Hom
transition matrices are $A\mapsto h_{\beta\alpha}Ag_{\beta\alpha}^{-1}$.

## Facts & Assumptions

**Given:** Smooth vector bundles $E\to M$ and $F\to M$ with local transition
matrices $g_{\beta\alpha}$ and $h_{\beta\alpha}$.

[L1] Vector bundle chart changes are fibrewise linear and smooth
([[def-vector-bundle-chart-and-transition-function]]).

[L2] The matrix of the transpose linear map is the transpose matrix
([[thm-matrix-of-transpose-is-the-transposed-matrix]]).

## Proof

**Proof technique:** direct.

1.1 If $\lambda\in E_p^*$ has row-coordinate vector $\ell$ in one dual basis, then after changing the primal basis by $g_{\beta\alpha}(p)$, the same functional has coordinate vector $\ell(g_{\beta\alpha}(p))^{-1}$. By [L2], the dual transition matrix is therefore $(g_{\beta\alpha}(p)^{-1})^T$. [L1, L2, given]
2.1 If $A:E_p\to F_p$ has matrix $B$ in one pair of local frames, then after changing frames by $g_{\beta\alpha}(p)$ and $h_{\beta\alpha}(p)$, the same linear map has matrix $h_{\beta\alpha}(p)Bg_{\beta\alpha}(p)^{-1}$. These formulas are smooth on overlaps because they are built from the smooth transition functions, so they define smooth bundle atlases on $E^*$ and $\operatorname{Hom}(E,F)$. [L1, step 1.1, algebra] ∎