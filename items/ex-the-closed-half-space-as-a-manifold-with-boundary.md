---
id: ex-the-closed-half-space-as-a-manifold-with-boundary
kind: example
title: "The closed half-space as a manifold with boundary"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-euclidean-upper-half-space-and-its-boundary, def-topological-manifold-with-boundary, def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary, thm-smooth-invariance-of-manifold-boundary, def-inward-outward-and-boundary-tangent-vectors]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ioan Mărcuț, Manifolds (2017 lecture notes), §§14.5, 15.1"
      url: "https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf"
    - title: "Will Merry, Differential Geometry (2021), Lecture 24"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Example

For $n\ge1$, the identity chart on $\mathbb H^n$ gives $\operatorname{Int}\mathbb H^n=\{x^n>0\}$ and $\partial\mathbb H^n=\{x^n=0\}$; at the face, inward vectors have positive last component. For $n=0$, $\mathbb H^0$ is a point with empty boundary.

## Facts & Assumptions

**Given:** An integer $n\ge0$, with $\mathbb H^n$ and $\partial\mathbb H^n$ as in the stated convention.

[L1] The model half-space is $\mathbb H^n=\{x^n\ge0\}$ for $n\ge1$, with face $\{x^n=0\}$; for $n=0$, $\mathbb H^0=\mathbb R^0$ and its face is empty ([[def-euclidean-upper-half-space-and-its-boundary]]).

[L2] Boundary charts define the smooth structure, and face versus relative-interior points is invariant under smooth changes of boundary chart ([[def-topological-manifold-with-boundary]]; [[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]]; [[thm-smooth-invariance-of-manifold-boundary]]).

[L3] At a face point, the last coordinate classifies tangent vectors as inward, outward, or boundary-tangent according as it is positive, negative, or zero ([[def-inward-outward-and-boundary-tangent-vectors]]).

## Verification

**Proof technique:** direct.

1.1 For $n\ge1$, the identity map is a global boundary chart on $\mathbb H^n$; for $n=0$, the unique map identifies the point with $\mathbb R^0$. These charts give the asserted smooth manifolds with boundary. [given, L1, L2]

2.1 For $n\ge1$, [L1] and [L2] identify the intrinsic interior with $\{x^n>0\}$ and the intrinsic boundary with $\{x^n=0\}$. The identity chart identifies every tangent space with $\mathbb R^n$, and [L3] makes the inward vectors at the face precisely those with positive last component. For $n=0$, [L1] makes the unique point interior and the boundary empty. [given, L1, L2, L3, step 1.1] ∎
