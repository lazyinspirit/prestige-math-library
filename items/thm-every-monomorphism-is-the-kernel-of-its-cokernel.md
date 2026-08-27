---
id: thm-every-monomorphism-is-the-kernel-of-its-cokernel
kind: theorem
title: "Every monomorphism is the kernel of its cokernel, and dually every epimorphism is the cokernel of its kernel"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-the-kernel-of-a-monomorphism-is-zero-and-the-cokernel-of-an-epimorphism-is-zero, prop-the-cokernel-of-a-zero-morphism-out-of-the-zero-object-is-an-isomorphism, def-image-and-coimage-in-a-category-with-kernels-and-cokernels, thm-a-morphism-factors-uniquely-through-its-image, thm-the-canonical-morphism-from-the-coimage-to-the-image-exists-and-is-unique, def-abelian-category, thm-the-opposite-of-an-abelian-category-is-abelian]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.5, Lemma 12.5.4"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.3"
      url: "https://link.springer.com/book/10.1007/978-1-4757-4721-8"
pipeline_run: frontier-21
---

## Statement

In an abelian category, every monomorphism is the kernel of its cokernel, and
dually every epimorphism is the cokernel of its kernel.

## Facts & Assumptions

**Given:** An abelian category and a monomorphism $m:A\to B$ with cokernel $c:B\to C$.

[L1] The kernel of a monomorphism is zero ([[prop-the-kernel-of-a-monomorphism-is-zero-and-the-cokernel-of-an-epimorphism-is-zero]]).

[L2] The cokernel of $0\to A$ is $A$ ([[prop-the-cokernel-of-a-zero-morphism-out-of-the-zero-object-is-an-isomorphism]]).

[L3] The image and coimage are defined by kernels and cokernels ([[def-image-and-coimage-in-a-category-with-kernels-and-cokernels]]).

[L4] A morphism factors through its image, and the canonical $\operatorname{coim}\to\operatorname{im}$ map exists ([[thm-a-morphism-factors-uniquely-through-its-image]], [[thm-the-canonical-morphism-from-the-coimage-to-the-image-exists-and-is-unique]]).

[L5] In an abelian category the canonical $\operatorname{coim}(m)\to\operatorname{im}(m)$ map is an isomorphism ([[def-abelian-category]]).

[L6] The opposite of an abelian category is abelian ([[thm-the-opposite-of-an-abelian-category-is-abelian]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the kernel of $m$ is zero. Therefore [L2] identifies the coimage projection $q_m:A\to\operatorname{coim}(m)$ with an isomorphism. [L1, L2, L3]

2.1 By definition, the image inclusion $i_m:\operatorname{im}(m)\to B$ is a kernel of the cokernel $c$. Since $m=i_m\overline m q_m$ by [L4], and both $q_m$ and $\overline m$ are isomorphisms by step 1.1 and [L5], there is an isomorphism $u:A\overset{\sim}\longrightarrow\operatorname{im}(m)$ with $i_mu=m$. So $m$ is itself a kernel of $c$ up to the unique compatible isomorphism of kernel objects. [L3, L4, L5, step 1.1]

3.1 By [L6], the opposite of an abelian category is again abelian. Applying step 2.1 there to the opposite of an epimorphism gives that every epimorphism in the original category is the cokernel of its kernel. [L6, step 2.1] ∎
