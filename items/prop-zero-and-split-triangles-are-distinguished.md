---
id: prop-zero-and-split-triangles-are-distinguished
kind: proposition
title: "Zero and split triangles are distinguished"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-triangulated-category, def-biproduct, def-triangulated-category-axiom-tr-one, def-triangulated-category-axiom-tr-two, def-triangulated-category-axiom-tr-three]
proof_strategy: direct
sources:
  references:
    - title: "Charles A. Weibel, Chapter 10, Example 10.1.5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
---

## Statement

In a triangulated category, $X\to0\to X[1]\xrightarrow{1}X[1]$ and the
canonical biproduct triangle
$$X\xrightarrow{\binom{1}{0}}X\oplus Y\xrightarrow{(0\;1)}Y\to X[1]$$
are distinguished.

## Facts & Assumptions

**Given:** A triangulated category and objects $X,Y$.

## Proof

1.1 TR1 supplies $X\xrightarrow{1}X\to0\to X[1]$; applying TR2 gives the displayed zero triangle. [given]

2.1 Distinguished triangles are closed under finite biproducts. Indeed, TR1 completes the biproduct of their first arrows to a distinguished triangle, and TR3 on the two inclusions gives a morphism from the biproduct triangle to this completion that is the identity on its first two objects. For every $W$, the usual TR3 factorization argument on rotations gives exactness of the representable Hom sequence of a distinguished triangle; the sequence of the biproduct triangle is the direct sum of the two exact sequences. The elementary five-lemma diagram chase therefore makes the induced map on third objects bijective after applying $\mathcal T(W,-)$ for every $W$, hence an isomorphism by Yoneda. Thus the biproduct triangle is isomorphic to the TR1 completion and is distinguished. [step 1.1, given]

3.1 The displayed split triangle is the biproduct of the distinguished identity triangle $X\xrightarrow1X\to0\to X[1]$ and the distinguished zero triangle $0\to Y\xrightarrow1Y\to0$.  Step 2.1 therefore makes it distinguished. [step 1.1, step 2.1, given] ∎
