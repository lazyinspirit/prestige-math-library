---
id: thm-objects-of-finite-length-form-an-abelian-subcategory
kind: theorem
title: "Objects of finite length form an abelian subcategory"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-object-of-finite-length, thm-length-is-additive-along-a-subobject, def-abelian-subcategory-and-exact-embedding]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik, Tensor Categories, Section 1.5"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
pipeline_run: frontier-22
---

## Statement

In an abelian category, the full subcategory whose objects have finite length is
an abelian subcategory.

## Facts & Assumptions

**Given:** An abelian category $\mathcal A$.

[L1] Finite length is the property defined in [[def-object-of-finite-length]].

[L2] Finite length is stable under passing to subobjects and quotients, and is additive across a subobject ([[thm-length-is-additive-along-a-subobject]]).

[L3] A full subcategory is abelian precisely when it is closed under kernels, cokernels, and finite biproducts computed in the ambient abelian category ([[def-abelian-subcategory-and-exact-embedding]]).

## Proof

**Proof technique:** direct.

1.1 Let $f:X\to Y$ be a morphism between finite-length objects. Since $\ker(f)\le X$ and $\operatorname{im}(f)\le Y$, [L2] makes both $\ker(f)$ and $\operatorname{im}(f)$ finite length. The quotient $Y/\operatorname{im}(f)$ is then finite length by [L2], so the cokernel of $f$ is finite length as well. [L1, L2, construct]

1.2 If $X$ and $Y$ have finite length, then the inclusion $X\rightarrowtail X\oplus Y$ has quotient $Y$. Applying [L2] to that inclusion shows that $X\oplus Y$ has finite length. So the finite-length objects are closed under finite biproducts. [L2, construct]

2.1 Steps 1.1 and 1.2 are exactly the kernel, cokernel, and finite-biproduct closures required by [L3]. Therefore the full subcategory of finite-length objects is an abelian subcategory. [L3, step 1.1, step 1.2] ∎
