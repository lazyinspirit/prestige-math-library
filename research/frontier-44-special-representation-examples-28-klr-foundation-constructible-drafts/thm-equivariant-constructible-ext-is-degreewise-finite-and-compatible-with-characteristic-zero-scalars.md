---
id: thm-equivariant-constructible-ext-is-degreewise-finite-and-compatible-with-characteristic-zero-scalars
kind: theorem
title: "Equivariant constructible Ext is degreewise finite and compatible with characteristic zero scalars"
status: draft
origin: session
deps: ["def-equivariant-constructible-derived-category-for-complex-algebraic-varieties", "lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model", "lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom", "thm-constructible-six-functors-proper-base-change-and-verdier-duality", "thm-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes", "lem-general-linear-stiefel-perverse-normalization-is-exact-and-conservative"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "BBD §§1.4 and 2.1; Bernstein–Lunts Part I, finite resolution construction"
      url: "https://www.numdam.org/item/AST_1982__100__1_0.pdf"
---

## Statement

Assume AC. Let $G$ be a product of complex general linear groups acting on a separated finite-type complex algebraic variety $X$, and let $k$ have characteristic zero. For bounded algebraically constructible $A,B$ in the actual $D^b_{G,c}(X;k)$, every $\operatorname{Ext}_G^m(A,B)$ is finite-dimensional and vanishes for sufficiently negative m. For every characteristic-zero field extension $k\to K$, the canonical map $\operatorname{Ext}_G^m(A,B)\otimes_kK\to\operatorname{Ext}_G^m(A_K,B_K)$ is an isomorphism, natural and compatible with shifts and Yoneda composition. Extension commutes with coherent six operations, normalized Verdier duality, perverse truncation and intermediate extension on these bounded constructible objects. The total Ext space need not be finite-dimensional; simplicity is not asserted preserved under extension.

## Facts & Assumptions

**Given:** AC and the coefficient, variety, bounds and maps specified in the Statement.

[F1] The actual stated local construction of [[def-equivariant-constructible-derived-category-for-complex-algebraic-varieties]] is used with its explicit hypotheses.

[F2] The actual stated local construction of [[lem-finite-simplicial-constructible-sheaves-have-a-derived-incidence-model]] is used with its explicit hypotheses.

[F3] The actual stated local construction of [[lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom]] is used with its explicit hypotheses.

[F4] The actual stated local construction of [[thm-constructible-six-functors-proper-base-change-and-verdier-duality]] is used with its explicit hypotheses.

[F5] The actual stated local construction of [[thm-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes]] is used with its explicit hypotheses.

[F6] The actual stated local construction of [[lem-general-linear-stiefel-perverse-normalization-is-exact-and-conservative]] is used with its explicit hypotheses.

## Proof

1.1 Choose an interval I containing A and B[m], and choose N with r_N≥length(I). The preceding theorem identifies the desired Ext group with the ordinary Hom group of the finite-type algebraic variety X_N. The ordinary constructible finite-cochain/derived-Hom supplier makes this group finite-dimensional. If A≤a and B≥b, then B[m]≥b−m, so Hom_G(A,B[m])=0 for m<b−a by ordinary t-structure orthogonality on the actual simplicial derived category. [given, F1, F2, F3, F4, F5, F6]

1.2 Scalar extension on the simplicial category is termwise tensor with K; it is exact and commutes with inverse image. Free quotient descent commutes with extension, because it is given locally by exact inverse image along algebraic sections and gluing. Thus Q_N(A_K)=(A_N)_K and similarly for B. The same r_N works over k and K: the Stiefel cohomology vanishing proof is over every field and extension preserves the ordinary amplitudes. In the commutative square of Hom comparisons, the two vertical arrows are the full-faithfulness isomorphisms just proved and the bottom horizontal arrow is the actual ordinary bounded constructible Hom coefficient-extension isomorphism. Hence the top horizontal arrow is an isomorphism. This is a finite-stage proof; it never tensors an infinite total bar complex or assumes arbitrary infinite products commute with extension. Composition is preserved because Q_N and scalar extension are functors and all Hom comparisons are adjunction maps. For a finite number of composable classes, choose one N for all their bounded shifted source/target objects; the resulting comparison proves Yoneda-product compatibility. [given, F1, F2, F3, F4, F5, F6]

2.1 The ordinary six operations at a smooth finite resolution determine the equivariant operations through smooth base-change comparison. Ordinary field extension commutes with these operations by their actual finite constructible models; uniqueness of the resolution comparison lifts this to the equivariant category. Normalized duality uses ω_XN⊗a_XN*ω_BN^−1, so its scalar comparison is the finite-dimensional ordinary duality comparison, with the same orientation correction over both fields. The normalized finite-resolution functor is perverse exact and conservative. Extend its truncation triangles by the exact scalar functor and compare them with the unique target truncation triangles; their support/cosupport inequalities are preserved and reflected by field extension, so these are the target perverse truncations. Consequently extension is exact on the heart; applying it to the image of pH^0j!→pH^0Rj* proves intermediate-extension/IC commutation. Simplicity is not assumed preserved by scalar extension; semisimplicity over arbitrary characteristic-zero fields belongs to the separately owned monodromy/coefficient argument. [given, F1, F2, F3, F4, F5, F6] ∎

## Source notes

Research draft from the exact named local inputs. Ordinary geometric constructions retain their current draft/open status; this carries no native acceptance or independent audit.
