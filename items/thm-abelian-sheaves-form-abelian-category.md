---
id: thm-abelian-sheaves-form-abelian-category
kind: theorem
title: "Sheaves of abelian groups, and likewise sheaves of modules on a ringed space, form abelian categories"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-abelian-category, def-kernel-cokernel-image-sheaves, thm-modules-over-a-ring-form-an-abelian-category, def-ringed-space, def-module-on-ringed-space, thm-sheafification-preserves-stalks, thm-sheaf-morphism-isomorphism-stalkwise]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Theorem 17.3.1"
      url: "https://stacks.math.columbia.edu/tag/01AF"
    - title: "Ravi Vakil, The Rising Sea, Theorem 2.6.2 and Section 2.6.I"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
---

## Statement

Let $X$ be a topological space.

1. The category of sheaves of abelian groups on $X$ is an abelian category.
2. If $(X,\mathcal O_X)$ is a ringed space, then the category of
   $\mathcal O_X$-modules is also an abelian category.

## Facts & Assumptions

**Given:** A topological space $X$, and for the second assertion a ringed space
$(X,\mathcal O_X)$.

[F1] An abelian category is an additive category in which every morphism has a
kernel and a cokernel and every coimage-to-image comparison is an isomorphism
([[def-abelian-category]]).

[F2] Kernel sheaves are computed objectwise, while cokernel and image sheaves
are sheafifications of the corresponding objectwise presheaves
([[def-kernel-cokernel-image-sheaves]]).

[L1] For every ring $R$, the category $R\text{-}\mathbf{Mod}$ is abelian
([[thm-modules-over-a-ring-form-an-abelian-category]]).

[L2] Sheafification preserves stalks ([[thm-sheafification-preserves-stalks]]).

[L3] A morphism of sheaves is an isomorphism exactly when it is an isomorphism
on every stalk ([[thm-sheaf-morphism-isomorphism-stalkwise]]).

## Proof

**Proof technique:** direct.

1.1 In both categories, sums and zero morphisms are defined sectionwise, the zero sheaf is a zero object, and finite direct sums are obtained by taking direct sums on every open set. Hence both categories are additive. [given, construct]

2.1 By [F2], every morphism has a kernel and a cokernel. The same item also gives the image sheaf by sheafifying the objectwise image presheaf, and the coimage is the cokernel of the kernel inclusion. [F2, step 1.1]

3.1 Let $\varphi:\mathcal F\to\mathcal G$ be a morphism in either category. At a point $x\in X$, the stalks of the kernel, cokernel, image, and coimage from step 2.1 are the usual kernel, cokernel, image, and coimage of the stalk map $\varphi_x$, because kernels are objectwise and [L2] identifies stalks after sheafification. By [L1], module categories are abelian, and the abelian-group case is the special case of modules over $\mathbb Z$, so the canonical map $\operatorname{coim}(\varphi_x)\to\operatorname{im}(\varphi_x)$ is an isomorphism for every $x$. [F2, L1, L2, step 2.1]

4.1 The sheaf morphism $\operatorname{coim}(\varphi)\to\operatorname{im}(\varphi)$ is therefore an isomorphism on every stalk, so [L3] makes it an isomorphism globally. Together with steps 1.1 and 2.1, [F1] shows that both categories are abelian. [F1, L3, step 1.1, step 2.1, step 3.1] ∎
