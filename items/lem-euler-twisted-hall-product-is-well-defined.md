---
id: lem-euler-twisted-hall-product-is-well-defined
kind: lemma
title: "The Euler-twisted Hall product is well-defined"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-euler-twisted-hall-algebra
  - lem-untwisted-hall-product-finiteness
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2"
      url: "https://arxiv.org/pdf/math/0611617v2"
      locator: "§1.3, PDF pp. 7–8: finite Hall product support under the Euler twist."
    - title: "Matthew B. Young, Degenerate versions of Green’s theorem for Hall modules, arXiv:1810.08238v2"
      url: "https://arxiv.org/pdf/1810.08238v2"
      locator: "§2.1, PDF pp. 7–8: finite-support Hall multiplication in a finitary category."
verification:
  precheck: pending
---

## Statement

For a finite-field hereditary Hall category, the basis formula in
[[def-euler-twisted-hall-algebra]] has finite support and defines a
$\mathbb Q(\nu)$-bilinear operation on the direct-sum Hall space.

## Facts & Assumptions

**Given:** The category, $\nu=\sqrt q$, and the Euler-twisted basis formula.

[F1] The untwisted coefficient $g^L_{M,N}$ is finite and has finite support in $[L]$ for fixed $M,N$ ([[lem-untwisted-hall-product-finiteness]]).

[F2] The twist scalar $\nu^{\chi_0(M,N)}$ is a well-defined element of $\mathbb Q(\nu)$ because $\chi_0(M,N)$ is an integer ([[def-euler-twisted-hall-algebra]]).

## Proof





1.1 For fixed $M,N$, [F1] gives a finite set of isomorphism classes $[L]$ with nonzero Hall coefficient. Multiplication by the single scalar in [F2] does not enlarge that support, so the displayed basis product is a finite linear combination in the direct sum. [F1, F2, given]

2.1 Every Hall vector has finite support. Bilinearity therefore expands any product of two vectors into a finite sum of the finite basis products in step 1.1, producing an element of the same direct sum. [step 1.1, algebra] ∎

