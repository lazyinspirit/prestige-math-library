---
id: thm-first-isomorphism-theorem-in-an-abelian-category
kind: theorem
title: "First isomorphism theorem in an abelian category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-image-and-coimage-in-a-category-with-kernels-and-cokernels, def-the-quotient-of-an-object-by-a-subobject, thm-the-quotient-is-independent-of-the-representing-monomorphism, thm-the-canonical-morphism-from-the-coimage-to-the-image-exists-and-is-unique, def-abelian-category]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.3"
      url: "https://link.springer.com/book/10.1007/978-1-4757-4721-8"
    - title: "Junhan Tan, The Freyd-Mitchell Embedding Theorem, Fact 2.8"
      url: "https://arxiv.org/pdf/1901.08591"
pipeline_run: frontier-21
---

## Statement

For every morphism $f:A\to B$ in an abelian category, there is a canonical
isomorphism

$$A/\ker(f)\;\cong\;\operatorname{im}(f).$$

## Facts & Assumptions

**Given:** An abelian category and a morphism $f:A\to B$.

[L1] The quotient by a subobject is the cokernel of a representing monomorphism
([[def-the-quotient-of-an-object-by-a-subobject]],
[[thm-the-quotient-is-independent-of-the-representing-monomorphism]]).

[L2] The coimage is the cokernel of the kernel, and the image is the kernel of
the cokernel
([[def-image-and-coimage-in-a-category-with-kernels-and-cokernels]]).

[L3] The canonical morphism $\operatorname{coim}(f)\to\operatorname{im}(f)$
exists ([[thm-the-canonical-morphism-from-the-coimage-to-the-image-exists-and-is-unique]]).

[L4] In an abelian category that canonical morphism is an isomorphism
([[def-abelian-category]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], the quotient $A/\ker(f)$ is exactly the coimage of $f$. [L1, L2]

2.1 The map from step 1.1 to $\operatorname{im}(f)$ is the canonical coimage-to-image morphism of [L3], and [L4] makes it an isomorphism. Therefore $A/\ker(f)\cong\operatorname{im}(f)$ canonically. [L3, L4, step 1.1] ∎
