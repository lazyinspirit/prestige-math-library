---
id: def-polarized-endomorphism-of-projective-variety
kind: definition
title: "Polarized endomorphism of a projective variety"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-variety-scheme-theoretic
  - def-projective-morphism-pre-proj
  - def-invertible-sheaf
  - def-ample-invertible-sheaf
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Joseph H. Silverman, Arithmetic and dynamical degrees on projective varieties, Chapter 3 of Dynamical Systems and Diophantine Approximation"
      url: "https://swc-math.github.io/aws/2010/2010SilvermanNotes.pdf"
      locator: "Lecture 3, printed pp. 14–16"
    - title: "Alexander Carney, The Arithmetic Hodge Index Theorem and Rigidity of Dynamical Systems over Function Fields"
      url: "https://arxiv.org/pdf/1810.06342v2"
      locator: "§1.1 and §4.3"
verification: {}
proof_strategy: direct
---

## Definition

Let $K$ be a field, let $X$ be a projective $K$-variety, and let $f:X\to X$ be a $K$-morphism. A **polarization of weight $d$** for $f$ consists of an ample invertible sheaf $L$ on $X$ and an integer $d>1$ for which an isomorphism $f^*L\cong L^{\otimes d}$ exists. The data $(X,f,L,d)$ form a **polarized dynamical system**. No choice of a representative height function is part of this definition.

## Definition references

[[def-projective-morphism-pre-proj]]

[[def-invertible-sheaf]]

[[def-ample-invertible-sheaf]]

## Facts & Assumptions

**Given:** A field $K$, a projective $K$-variety $X$, a $K$-morphism $f:X\to X$, an ample invertible sheaf $L$, an integer $d>1$, and an isomorphism $f^*L\cong L^{\otimes d}$.

[F1] A variety is an integral finite-type scheme over a field; a projective morphism factors as a closed immersion into projective space followed by the projective-space structure map; an invertible sheaf is a line bundle; and ampleness is absolute ampleness on $X$. ([[def-variety-scheme-theoretic]], [[def-projective-morphism-pre-proj]], [[def-invertible-sheaf]], [[def-ample-invertible-sheaf]])

## Verification

1.1 The pullback $f^*L$ and tensor power $L^{\otimes d}$ are invertible sheaves on the same $K$-scheme $X$, so the displayed isomorphism is a well-typed condition. [given, F1, algebra]

2.1 The stipulated data therefore determine a morphism together with an ample eigen-sheaf and an integer eigenvalue greater than one, which is exactly the declared polarized dynamical system. [given, F1, step 1.1, algebra] ∎
