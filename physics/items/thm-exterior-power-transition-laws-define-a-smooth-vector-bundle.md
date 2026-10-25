---
id: thm-exterior-power-transition-laws-define-a-smooth-vector-bundle
kind: theorem
title: "Exterior-power transition laws define a smooth vector bundle"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-exterior-power-bundle-of-the-cotangent-bundle,
       thm-symmetric-and-alternating-images-are-smooth-subbundles]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2019).pdf"
---

## Statement

For every smooth manifold $M$ and $k\ge 0$, the bundle
$\bigwedge^kT^*M\to M$ is a smooth vector bundle.

## Facts & Assumptions

**Given:** A smooth manifold $M$ and an integer $k\ge 0$.

[F1] The bundle $\bigwedge^kT^*M$ is the fibrewise bundle of alternating $k$-covectors ([[def-exterior-power-bundle-of-the-cotangent-bundle]]).

[L1] The alternating fibrewise part of the covariant tensor bundle is a smooth vector subbundle ([[thm-symmetric-and-alternating-images-are-smooth-subbundles]]).

## Proof
**Proof technique:** direct.

1.1 The bundle $T^0_kM$ is the covariant $k$-tensor bundle, and its alternating fibrewise image is the collection of alternating $k$-covectors at each point. [F1, given]

2.1 By [L1], that alternating fibrewise image is a smooth vector subbundle of $T^0_kM$. By step 1.1, this subbundle is exactly $\bigwedge^kT^*M$. [F1, L1, step 1.1]

3.1 Therefore the exterior-power transition laws define a smooth vector bundle. [step 2.1] ∎