---
id: cor-a-continuous-functor-to-set-from-a-chosen-well-powered-saft-category-is-representable
kind: corollary
title: "With the objectwise SAFT universal arrows supplied, a continuous Set-valued functor from a chosen-well-powered SAFT category is representable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-special-adjoint-functor-theorem-objectwise-form, thm-special-adjoint-functor-theorem-functor-form, def-presheaf-representable-functor-and-representation, def-adjunction-by-unit-counit-and-triangle-identities, thm-the-adjunction-hom-set-bijection-under-local-smallness]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, section V.8"
      url: "https://web.archive.org/web/20251104003129if_/https://pages.jh.edu/rrynasi1/NewFoundations4Math/Literature/Textbooks/Mac_Lane1998CategoriesForTheWorkingMathematician.2ndEdition.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal C$ be complete and locally small, with a supplied small coseparating set and a supplied well-powering. Let $F:\mathcal C\to\mathbf{Set}$ be continuous. If a supplied family of the objectwise SAFT universal arrows is given, then $F$ is covariantly representable.

## Facts & Assumptions

**Given:** The category, functor, and supplied SAFT data in the Statement.

[L1] Under the supplied-well-powering branch, objectwise SAFT produces initial objects in the comma categories of a continuous functor, and supplied initial objects assemble into a left adjoint ([[thm-special-adjoint-functor-theorem-objectwise-form]], [[thm-special-adjoint-functor-theorem-functor-form]]).

[L2] A covariant Set-valued functor is representable when it is naturally isomorphic to $\mathcal C(R,-)$ for some $R$ ([[def-presheaf-representable-functor-and-representation]]).

[L3] For locally small $\mathcal C$ and $\mathcal D$, an adjunction $F\dashv G$ determines bijections $\Phi_{c,d}:\mathcal D(Fc,d)\to\mathcal C(c,Gd)$, $\Phi_{c,d}(u)=G(u)\circ\eta_c$, natural in $c$ and $d$ ([[thm-the-adjunction-hom-set-bijection-under-local-smallness]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the supplied universal arrows assemble into a left adjoint $L:\mathbf{Set}\to\mathcal C$ to $F$. [L1]

2.1 Let $1$ be a singleton set. The adjunction bijection in [L3] gives $\mathcal C(L(1),C)\cong\mathbf{Set}(1,F(C))\cong F(C)$, naturally in $C$. Hence $F$ is represented by $L(1)$ in the sense of [L2]. [step 1.1, L2, L3] ∎
