---
id: thm-symmetric-and-alternating-images-are-smooth-subbundles
kind: theorem
title: "Symmetric and alternating images are smooth subbundles"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-symmetric-and-alternating-covariant-tensor-subbundles,
       prop-symmetrization-and-alternation-are-projections,
       prop-constant-rank-kernels-and-images-of-bundle-maps-over-one-base-are-subbundles,
       thm-tensor-transition-laws-define-a-smooth-vector-bundle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

For each $k\ge 0$, the symmetric and alternating fibrewise parts of $T^0_kM$
form smooth vector subbundles of the covariant tensor bundle.

## Facts & Assumptions

**Given:** A smooth manifold $M$ and an integer $k\ge 0$.

[F1] The symmetric and alternating parts are defined fibrewise inside the covariant tensor bundle ([[def-symmetric-and-alternating-covariant-tensor-subbundles]]).

[L1] The covariant tensor bundle is a smooth vector bundle, and the fibrewise symmetrization and alternation operators are projections ([[thm-tensor-transition-laws-define-a-smooth-vector-bundle]], [[prop-symmetrization-and-alternation-are-projections]]).

[L2] The image of a constant-rank bundle map over one base is a smooth vector subbundle ([[prop-constant-rank-kernels-and-images-of-bundle-maps-over-one-base-are-subbundles]]).

## Proof
**Proof technique:** direct.

1.1 By [L1], symmetrization and alternation act fibrewise on $T^0_kM$ as smooth bundle endomorphisms over $\operatorname{id}_M$. Their fibres are the usual linear projections onto the symmetric and alternating tensors. [F1, L1, given]
2.1 Because a projection has constant rank equal to the dimension of its image, the fibre ranks of these bundle maps are constant on $M$. Therefore [L2] shows that their images are smooth vector subbundles. [L1, L2, step 1.1, algebra]
3.1 Those images are exactly the symmetric and alternating bundles from [F1]. Hence both are smooth vector subbundles of $T^0_kM$. [F1, step 2.1] ∎