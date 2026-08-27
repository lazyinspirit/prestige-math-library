---
id: fs-the-canonical-morphism-from-the-coimage-to-the-image-is-invertible-whenever-the-two-objects-are-isomorphic
kind: false-statement
title: "FALSE: if coimage and image happen to be isomorphic as objects, then the canonical map is automatically an isomorphism"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cex-torsion-free-abelian-groups-do-not-form-an-abelian-category, thm-the-canonical-morphism-from-the-coimage-to-the-image-exists-and-is-unique, prop-the-cokernel-of-a-zero-morphism-out-of-the-zero-object-is-an-isomorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Example 4.5.13"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-21
---

## Statement

If the coimage and image of a morphism are isomorphic as objects, then the
canonical map from the coimage to the image is automatically an isomorphism.

## Facts & Assumptions

**Given:** The torsion-free abelian-group subcategory and the morphism
$2:\mathbb Z\to\mathbb Z$.

[L1] The torsion-free abelian-group subcategory is not abelian
([[cex-torsion-free-abelian-groups-do-not-form-an-abelian-category]]).

[L2] Every morphism with kernels and cokernels has a canonical map from its
coimage to its image
([[thm-the-canonical-morphism-from-the-coimage-to-the-image-exists-and-is-unique]]).

[L3] The cokernel of $0\to A$ is $A$, and dually the kernel of $A\to0$ is $A$
([[prop-the-cokernel-of-a-zero-morphism-out-of-the-zero-object-is-an-isomorphism]]).

## Refutation

1.1 In the torsion-free abelian-group subcategory, the morphism $2:\mathbb Z\to\mathbb Z$ has zero kernel. Its cokernel in that subcategory is also zero, because any homomorphism out of $\mathbb Z$ that kills the even subgroup must send $1$ to torsion and hence to $0$. Therefore [L3] identifies both $\operatorname{coim}(2)$ and $\operatorname{im}(2)$ with $\mathbb Z$. [L1, L3]

2.1 The canonical map of [L2] is still the morphism $2:\mathbb Z\to\mathbb Z$, which is not an isomorphism. So isomorphism of the endpoint objects does not force the canonical comparison map itself to be invertible. [L2, step 1.1] ∎
