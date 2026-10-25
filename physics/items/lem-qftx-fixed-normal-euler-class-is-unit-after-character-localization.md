---
id: lem-qftx-fixed-normal-euler-class-is-unit-after-character-localization
kind: lemma
title: The fixed normal equivariant Euler class is a localized unit
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 4
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-axiom-of-choice
  - lem-qftx-compact-torus-fixed-locus-normal-weights
  - def-qftx-character-localization
  - lem-qftx-rational-torus-classifying-space-cohomology
  - lem-qftx-compact-manifold-cohomology-positive-ideal-nilpotent
  - lem-qftx-borel-base-is-paracompact-of-cw-type
  - thm-subordinate-partitions-of-unity-exist
  - def-partition-of-unity-subordinate-to-a-cover
  - thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism
  - thm-milnor-join-model-is-a-contractible-free-g-space
  - thm-thom-isomorphism-for-oriented-vector-bundles
  - def-r-oriented-vector-bundle-and-orientation-local-system
  - def-euler-class-by-zero-section-pullback-of-the-thom-class
  - thm-naturality-orientation-sign-and-whitney-product-for-euler-classes
  - def-chern-classes-from-the-projective-bundle-relation
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  lem-qftx-compact-torus-fixed-locus-normal-weights: mathematical-premise
  def-qftx-character-localization: mathematical-premise
  lem-qftx-rational-torus-classifying-space-cohomology: mathematical-premise
  lem-qftx-compact-manifold-cohomology-positive-ideal-nilpotent: mathematical-premise
  lem-qftx-borel-base-is-paracompact-of-cw-type: mathematical-premise
  thm-subordinate-partitions-of-unity-exist: mathematical-premise
  def-partition-of-unity-subordinate-to-a-cover: mathematical-premise
  thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism: mathematical-premise
  thm-milnor-join-model-is-a-contractible-free-g-space: mathematical-premise
  thm-thom-isomorphism-for-oriented-vector-bundles: mathematical-premise
  def-r-oriented-vector-bundle-and-orientation-local-system: mathematical-premise
  def-euler-class-by-zero-section-pullback-of-the-thom-class: mathematical-premise
  thm-naturality-orientation-sign-and-whitney-product-for-euler-classes: mathematical-premise
  def-chern-classes-from-the-projective-bundle-relation: mathematical-premise
justified_by: []
axiom_strength: ZF + AC
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
sources:
  references:
    - title: M. F. Atiyah and R. Bott, The Moment Map and Equivariant Cohomology
      url: https://www.math.stonybrook.edu/~mmovshev/MAT570Spring2008/BOOKS/atiyahbott_moment.pdf
      locator: Section 3, equation (3.7) and its normal-weight derivation, printed pp. 8–9.
    - title: Shubham Dwivedi, Jonathan Herman, Lisa C. Jeffrey, and Theo van den Hurk, Hamiltonian Group Actions and Equivariant Cohomology
      url: https://www.math.toronto.edu/~jeffrey/mat1312/symplecbookpub.pdf
      locator: Section 9.9, Example 9.48, PDF pp. 85–86.
landmark: false
---

## Statement

Assume AC. Let $T=(\mathbb R/\mathbb Z)^r$ act smoothly on a compact finite-dimensional Hausdorff second-countable smooth manifold $M$ without boundary, and set $F=M^T$. Give the normal bundle $\nu_F=(TF)^\perp$ the componentwise $T$-invariant complex orientation supplied by the fixed-locus normal-weight decomposition. Let $\nu_{F,T}=ET\times_T\nu_F\to BT\times F$ be its Borel vector bundle and let $e_T(\nu_F)\in H_T^*(F;k)=H^*(BT\times F;k)$, $k\in\{\mathbb Q,\mathbb R\}$, be its zero-section Euler class. Then $e_T(\nu_F)$ is a unit in $\mathscr S_T(k)^{-1}H_T^*(F;k)$. On each connected component $F_0\subseteq F$, restriction to $BT\times\{p\}$, $p\in F_0$, is the product of the nontrivial character classes of the normal representation at $p$, with multiplicity and the chosen complex orientation.

## Statement references

[Normal-weight product for the equivariant Euler class] [Atiyah–Bott, Section 3, equation (3.7), printed pp. 8–9](https://www.math.stonybrook.edu/~mmovshev/MAT570Spring2008/BOOKS/atiyahbott_moment.pdf)

[Normal-bundle weight and Euler-class computation] [Dwivedi et al., Section 9.9, Example 9.48, PDF pp. 85–86](https://www.math.toronto.edu/~jeffrey/mat1312/symplecbookpub.pdf)

## Facts & Assumptions

**Given:** AC, the compact smooth torus action, its fixed set $F$, and $k\in\{\mathbb Q,\mathbb R\}$.

[A1] Assume full AC, which supplies the Thom-class and partition-of-unity hypotheses below. [[def-axiom-of-choice]]

[F1] The fixed set $F$ is compact with finitely many components, and the normal representation splits into finitely many nontrivial character bundles with a $T$-invariant complex orientation. [[lem-qftx-compact-torus-fixed-locus-normal-weights]]

[F2] The product Milnor Borel construction, coefficient ring $A_T(k)$, character classes, and multiplicative set are as in the character-localization definition. [[def-qftx-character-localization]]

[F3] There is an $N\geq1$ with $H^{q}(F_0;k)=0$ for $q\geq N$, for every component $F_0$, so the positive-degree ideal in each $H^*(F_0;k)$ has $N$th power zero. Also $BT\times F_0$ is paracompact Hausdorff of CW type. [[lem-qftx-compact-manifold-cohomology-positive-ideal-nilpotent]] [[lem-qftx-borel-base-is-paracompact-of-cw-type]]

[F4] Since $BT$ has finite-free homology in each degree over $k$, the external product is a graded-ring isomorphism $A_T(k)\otimes_k H^*(F_0;k)\cong H^*(BT\times F_0;k)$. [[lem-qftx-rational-torus-classifying-space-cohomology]] [[thm-cohomological-kunneth-cross-product-is-a-ring-isomorphism]]

[F5] The Milnor bundle $ET\to BT$ is numerable. The Borel normal vector bundle is locally trivial over the paracompact base $BT\times F_0$, hence admits a subordinate numeration; its supplied complex orientation is an $R$-orientation. The Thom isomorphism then applies, and the Euler class is the zero-section pullback of its normalized Thom class. [[thm-milnor-join-model-is-a-contractible-free-g-space]] [[thm-subordinate-partitions-of-unity-exist]] [[def-partition-of-unity-subordinate-to-a-cover]] [[thm-thom-isomorphism-for-oriented-vector-bundles]] [[def-r-oriented-vector-bundle-and-orientation-local-system]] [[def-euler-class-by-zero-section-pullback-of-the-thom-class]]

[F6] Euler classes are natural under pullback and multiply under ordered direct sums; for a complex line its Euler class is its first Chern class in the complex orientation. [[thm-naturality-orientation-sign-and-whitney-product-for-euler-classes]] [[def-chern-classes-from-the-projective-bundle-relation]]

## Proof

**Given:** The data in the statement.

1.1 Fix a component $F_0$. The action on $F_0$ is trivial, so its Borel base is $BT\times F_0$. By [F5], the Borel normal bundle is numerable and oriented; hence its Thom and Euler classes exist. By [F4], identify $H_T^*(F_0;k)$ as the graded ring $A_T(k)\otimes_kH^*(F_0;k)$. [A1, F1, F2, F4, F5]

2.1 Fix $p\in F_0$. Restriction of $e_T(\nu_F)$ along $BT\times\{p\}\hookrightarrow BT\times F_0$ is the Euler class of the associated normal representation bundle over $BT$. By [F1], that representation is a sum of nontrivial complex character lines. The associated bundle is the direct sum of the corresponding $L_\chi$, with the stated multiplicities. Whitney multiplication in [F6] and $e(L_\chi)=c_1(L_\chi)$ give the claimed product. Every factor is a generator of $\mathscr S_T(k)$. [F1, F2, F5, F6, step 1.1]

3.1 Under the Künneth decomposition of step 1.1 write $e_T(\nu_F)=e_0+n$, where $e_0\in A_T(k)\otimes H^0(F_0;k)$ is the component detected by restriction to $p$, and $n\in A_T(k)\otimes H^{>0}(F_0;k)$. Step 2.1 shows $e_0$ is a product of generators of $\mathscr S_T(k)$, so it is invertible after localization. By [F3], the ideal $J=A_T(k)\otimes H^{>0}(F_0;k)$ satisfies $J^N=0$; therefore $z=e_0^{-1}n$ is nilpotent, and
$$
e_T(\nu_F)^{-1}=e_0^{-1}\sum_{j=0}^{N-1}(-z)^j
$$
is a finite inverse. [F3, F4, step 1.1, step 2.1, algebra]

4.1 There are finitely many components by [F1], so $H_T^*(F;k)$ and its localization split into the finite product of the component rings treated in step 3.1. A finite tuple of units is a unit componentwise. If $F=\varnothing$, its cohomology is the zero ring and its unique element is a unit; if a normal component has rank zero, its product in step 2.1 is $1$. These cases include $r=0$, trivial actions, and empty $M$. [F1, F2, step 2.1, step 3.1] ∎
