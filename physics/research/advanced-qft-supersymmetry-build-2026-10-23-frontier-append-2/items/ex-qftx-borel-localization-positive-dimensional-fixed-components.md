---
id: ex-qftx-borel-localization-positive-dimensional-fixed-components
kind: example
title: Rotation on one factor of a product with positive-dimensional fixed components
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 6
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-qftx-character-localization
  - lem-qftx-rational-torus-classifying-space-cohomology
  - thm-borel-localization-for-compact-torus-actions
  - thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism
  - lem-cohomology-ring-of-infinite-complex-projective-space
  - thm-topological-universal-coefficient-short-exact-sequence-for-cohomology
  - lem-torus-classifying-space-cohomology
dependency_roles:
  def-qftx-character-localization: mathematical-premise
  lem-qftx-rational-torus-classifying-space-cohomology: mathematical-premise
  thm-borel-localization-for-compact-torus-actions: mathematical-premise
  thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism: mathematical-premise
  lem-cohomology-ring-of-infinite-complex-projective-space: mathematical-premise
  thm-topological-universal-coefficient-short-exact-sequence-for-cohomology: mathematical-premise
  lem-torus-classifying-space-cohomology: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
      locator: Section 3.2, Theorem 3.19, printed pp. 220–222.
    - title: M. F. Atiyah and R. Bott, The Moment Map and Equivariant Cohomology
      url: https://www.math.stonybrook.edu/~mmovshev/MAT570Spring2008/BOOKS/atiyahbott_moment.pdf
      locator: Section 3, fixed-component restriction, printed pp. 8–9.
landmark: false
---

## Example

Let \(T=\mathbb R/\mathbb Z\) act on \(M=\mathbb{CP}^1\times\mathbb{CP}^1\) by \(t\cdot([z_0:z_1],q)=([z_0:e^{2\pi it}z_1],q)\), and let \(k\in\{\mathbb Q,\mathbb R\}\). The fixed set is the disjoint union \(F=(\{p_+\}\times\mathbb{CP}^1)\amalg(\{p_-\}\times\mathbb{CP}^1)\), with \(p_+=[1:0]\) and \(p_-=[0:1]\); the normal weights are \(+1\) and \(-1\), respectively. Let \(u\in H^2(BT;k)\) be the weight-one character class and \(b\in H^2(\mathbb{CP}^1;k)\) the generator with \(b^2=0\). Then localized restriction identifies
\[
\mathscr S_T(k)^{-1}H_T^*(M;k)\cong
\bigl(\mathscr S_T(k)^{-1}A_T(k)\otimes_k k[b]/(b^2)\bigr)\oplus
\bigl(\mathscr S_T(k)^{-1}A_T(k)\otimes_k k[b]/(b^2)\bigr),
\]
where the two summands are the Borel cohomology of the two positive-dimensional fixed components.

## Example references

[Compact-torus Borel localization theorem] [[thm-borel-localization-for-compact-torus-actions]]

[Character classes and localization conventions] [[def-qftx-character-localization]]

[Integral projective-space cohomology] [[lem-cohomology-ring-of-infinite-complex-projective-space]]

[Fixed-component restriction] [Atiyah–Bott, Section 3, printed pp. 8–9](https://www.math.stonybrook.edu/~mmovshev/MAT570Spring2008/BOOKS/atiyahbott_moment.pdf)

## Facts & Assumptions

**Given:** The product action, the product Milnor model, and \(k\in\{\mathbb Q,\mathbb R\}\).

[F1] The weight-one class is a polynomial generator \(u\), and the inverse character has class \(-u\); the set \(\mathscr S_T(k)\) inverts both. The real coefficient interface still lacks its current Step 1 readiness record. [[def-qftx-character-localization]]

[F2] \(H^*(\mathbb{CP}^1;k)=k[b]/(b^2)\), with \(|b|=2\), by the integral projective-space ring and natural coefficient change. [[lem-cohomology-ring-of-infinite-complex-projective-space]] [[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]]

[F3] The external product is a graded-ring isomorphism when one factor has finite-free homology in each degree; \(BT\) has that property over \(k\). [[thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism]] [[lem-qftx-rational-torus-classifying-space-cohomology]]

[F4] Restriction to the fixed set becomes an isomorphism after character localization. [[thm-borel-localization-for-compact-torus-actions]]

## Verification

**Given:** The action and conventions in the Example.

1.1 If both coordinates \(z_0,z_1\) of the first factor are nonzero, its projective line cannot be fixed by every circle element, so the fixed points of that factor are exactly \(p_+\) and \(p_-\); the second factor is fixed pointwise. In the charts \(w=z_1/z_0\) and \(v=z_0/z_1\), the normal weights are \(+1\) and \(-1\), so the corresponding character classes are \(u\) and \(-u\), both invertible in \(\mathscr S_T(k)^{-1}A_T(k)\). [F1, algebra]

2.1 The Borel construction of \(F\) is the disjoint union of two copies of \(BT\times\mathbb{CP}^1\). By [F2] and the ring Künneth isomorphism [F3], each component has ring \(A_T(k)[b]/(b^2)\). As an \(A_T(k)\)-module this is \(A_T(k)\oplus A_T(k)b\); localizing its two coefficients gives \(\mathscr S_T(k)^{-1}A_T(k)\otimes_k k[b]/(b^2)\). Applying [F4] proves the claimed localized restriction formula. [F1, F2, F3, F4, algebra] ∎
