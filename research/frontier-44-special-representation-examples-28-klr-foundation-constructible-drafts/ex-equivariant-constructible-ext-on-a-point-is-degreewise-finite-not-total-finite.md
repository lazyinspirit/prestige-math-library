---
id: "ex-equivariant-constructible-ext-on-a-point-is-degreewise-finite-not-total-finite"
kind: example
title: "Equivariant Ext of a point is degreewise finite and not total finite"
status: draft
origin: session
deps: ["def-equivariant-constructible-derived-category-for-complex-algebraic-varieties", "thm-equivariant-constructible-ext-is-degreewise-finite-and-compatible-with-characteristic-zero-scalars", "lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom", "thm-cellular-cochains-compute-cohomology-with-local-coefficients"]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bernstein\u2013Lunts, Equivariant Sheaves and Functors, relevant full Part I proof text"
      url: "https://www.math.tau.ac.il/~bernstei/Publication_list/publication_texts/luntz_ESF/3-derived-category-and-functors.pdf"
proof_strategy: direct
---

## Example

For $G=\mathbb C^*$ acting on a point and any characteristic-zero field k, $\operatorname{Ext}_G^m(k,k)$ is k for nonnegative even m and zero otherwise. Hence it is degreewise finite and its total direct sum is infinite-dimensional. Restriction to the ordinary point is not derived fully faithful.

## Facts & Assumptions

**Given:** The spaces, coefficients, ordinary bounds and maps specified above; AC where stated.

[F1] The exact local supplier contract of [[def-equivariant-constructible-derived-category-for-complex-algebraic-varieties]] is used with the hypotheses explicitly stated in its claim.

[F2] The exact local supplier contract of [[thm-equivariant-constructible-ext-is-degreewise-finite-and-compatible-with-characteristic-zero-scalars]] is used with the hypotheses explicitly stated in its claim.

[F3] The exact local supplier contract of [[lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom]] is used with the hypotheses explicitly stated in its claim.

[F4] The exact local supplier contract of [[thm-cellular-cochains-compute-cohomology-with-local-coefficients]] is used with the hypotheses explicitly stated in its claim.

## Verification

1.1 Use the actual full-rank approximation $U_N=\mathbb C^N\setminus\{0\}$ with quotient $\mathbb P^{N-1}$ and cohomology gap $r_N=2(N-1)$. For every fixed m choose N with $r_N\ge m$; the bounded Hom comparison gives $\operatorname{Ext}_G^m(k,k)=H^m(\mathbb P^{N-1};k)$. Coefficients are actual constant analytic sheaves, whose finite polyhedral cochains compute cohomology. [given, F1, F2, F3, F4]

2.1 The usual projective filtration has one cell $\mathbb C^j$ in real degree $2j$, for $0\le j\le N-1$: the last nonzero homogeneous coordinate gives that affine chart. Its characteristic map on the complex unit disk is $z\mapsto[z:\sqrt{1-\lVert z\rVert^2}]$; the interior is homeomorphic to $\mathbb C^j$ by $z\mapsto z/\sqrt{1-\lVert z\rVert^2}$ and the boundary lands in the preceding projective space. Compactness and the Hausdorff quotient identify these attachments with the projective filtration. The finite cellular cochain complex has one k in each even degree and no odd term, so every differential is zero. Thus the stated groups hold for fixed m, independently of sufficiently large N. Infinitely many even groups are nonzero, proving infinite total dimension. Ordinary Ext on a point vanishes in positive degree, so the degree-two class also proves failure of derived forgetful full faithfulness. [given, F1, F2, F3, F4] ∎

## Source notes

This is an authored research draft with a local proof from the exact named suppliers. Its ordinary algebraic triangulation, support/duality and source prerequisites retain their own current proof status. No independent audit, native verdict, readiness or gate pass is asserted. The durable construction and actual source readings are recorded in the constructible packet and proof notes.
