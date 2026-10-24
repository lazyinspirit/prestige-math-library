---
id: thm-images-commute-with-tensor-products-in-a-multitensor-category
kind: theorem
title: "Images commute with tensor products in a multitensor category"
status: published
origin: pipeline
deps: [thm-the-tensor-product-in-a-multitensor-category-is-biexact, def-image-and-coimage-in-a-category-with-kernels-and-cokernels]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, Proposition 4.2.8"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

For morphisms $f:X\to X'$ and $g:Y\to Y'$ in a multitensor category, the
canonical map $\operatorname{im}(f)\otimes\operatorname{im}(g)\to
\operatorname{im}(f\otimes g)$ is an isomorphism.

## Facts & Assumptions

**Given:** Morphisms $f:X\to X'$ and $g:Y\to Y'$.

[F1] Tensoring in either variable is exact ([[thm-the-tensor-product-in-a-multitensor-category-is-biexact]]).

[F2] An image is the kernel of a cokernel ([[def-image-and-coimage-in-a-category-with-kernels-and-cokernels]]).

## Proof

**Proof technique:** direct.

1.1 Factor $f$ and $g$ as an epimorphism followed by a monomorphism through their images, as specified by [F2]. [F2, given]

2.1 Exactness in [F1] preserves those epimorphisms and monomorphisms after tensoring, first in one variable and then in the other. Hence $f\otimes g$ factors as an epimorphism onto $\operatorname{im}(f)\otimes\operatorname{im}(g)$ followed by a monomorphism. [step 1.1, F1]

3.1 In an abelian category this epi--mono factorization identifies its middle object with the image. Therefore the displayed canonical map is an isomorphism. [step 2.1, F2] ∎
