---
id: thm-surface-area-density-is-cross-product-norm
kind: theorem
title: 'The surface area density is the norm of the cross product of the parameter tangents'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-first-fundamental-form-and-surface-area-density, thm-cross-product-norm-is-the-two-vector-gram-determinant]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: 'M. E. Taylor, Introduction to Analysis in Several Variables, formulas 3.2.18-3.2.20'
      url: 'https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf'
    - title: 'R. Sjamaar, Manifolds and Differential Forms, Theorem 8.4'
      url: 'https://pi.math.cornell.edu/~sjamaar/manifolds/manifold.pdf'
pipeline_run: null
---

## Statement

For every parameter point, $J_\varphi=\|\varphi_u\times\varphi_v\|_2$.

The common value is positive in the interior of a regular patch; it may vanish on the parameter boundary under the admitted seam and endpoint convention.

## Facts & Assumptions

**Given:** A regular parametrized surface patch $(D,\varphi)$.

[L1] The density is the nonnegative square root of the determinant of the Gram matrix of $\varphi_u,\varphi_v$ ([[def-first-fundamental-form-and-surface-area-density]]).

[L2] The determinant of a two-vector Gram matrix equals the squared cross-product norm ([[thm-cross-product-norm-is-the-two-vector-gram-determinant]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], $J_\varphi^2=\det G_\varphi=\|\varphi_u\times\varphi_v\|_2^2$. [given, L1, L2]

2.1 Both sides of the claimed equality are nonnegative, so uniqueness of the nonnegative square root gives $J_\varphi=\|\varphi_u\times\varphi_v\|_2$. [step 1.1, algebra]

3.1 Regularity makes the cross product nonzero in the interior, while the patch definition permits boundary zeros; this proves the qualification. [step 2.1] ∎
