---
id: cor-product-of-invariant-factors-is-the-characteristic-polynomial
kind: corollary
title: "The product of the invariant factors is the characteristic polynomial"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-rational-canonical-form-existence-and-uniqueness, def-characteristic-polynomial-of-an-operator, lem-characteristic-polynomial-of-block-triangular-matrix, def-companion-matrix-of-a-monic-polynomial]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "A. Apisa, Wisconsin Math 542, Lemma 33"
      url: "https://people.math.wisc.edu/~apisa/notes542.pdf"
    - title: "M. Brussel, Finitely Generated Modules over a PID, Section 5.2"
      url: "https://content-calpoly-edu.s3.amazonaws.com/math/1/images/FG%20Modules%20Over%20A%20PID.pdf"
pipeline_run: null
---

## Statement

If $f_1,\ldots,f_r$ are the invariant factors of an endomorphism $T$, then the product of the invariant factors is the characteristic polynomial:

$$\chi_T(x)=\prod_{i=1}^rf_i(x).$$

On the zero space this is the empty product $1$.

## Facts & Assumptions

**Given:** The characteristic polynomial of [[def-characteristic-polynomial-of-an-operator]], the companion-matrix convention of [[def-companion-matrix-of-a-monic-polynomial]], and multiplication of characteristic polynomials across block triangular matrices ([[lem-characteristic-polynomial-of-block-triangular-matrix]]).

[L1] In rational canonical form, the blocks are the companion matrices of the invariant factors ([[thm-rational-canonical-form-existence-and-uniqueness]]).

## Proof

**Proof technique:** direct.

1.1 Expanding $\det(xI-C(f_i))$ along the companion rows gives the monic polynomial $f_i(x)$; this includes zero coefficients and linear companion matrices. [given, algebra]

2.1 By [L1], $T$ is similar to the block diagonal matrix with blocks $C(f_i)$. Characteristic polynomials are similarity-invariant and multiply over block diagonals, so step 1.1 gives $\chi_T=\prod_if_i$. With no blocks, the determinant and product are both $1$. [step 1.1, L1, given] ∎
