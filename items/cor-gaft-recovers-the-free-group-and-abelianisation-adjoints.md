---
id: cor-gaft-recovers-the-free-group-and-abelianisation-adjoints
kind: corollary
title: "GAFT recovers the published free-group and abelianisation adjunctions"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-the-solution-set-for-the-underlying-set-functor-on-groups, thm-general-adjoint-functor-theorem-objectwise-form, thm-general-adjoint-functor-theorem-functor-form, thm-the-free-group-functor-is-left-adjoint-to-the-underlying-set-functor, thm-abelianisation-is-left-adjoint-to-the-inclusion-of-abelian-groups]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, examples 4.7.4 and 4.7.6"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

The general adjoint functor theorem applies to the underlying-set functor $U:\mathbf{Grp}\to\mathbf{Set}$ using the canonical solution sets of [[thm-the-solution-set-for-the-underlying-set-functor-on-groups]]. With the published free groups supplied as the initial comma objects, its functor form gives the published free-group adjunction.

Likewise, the published abelianisation arrows supply singleton solution sets and initial comma objects for the inclusion $\mathbf{Ab}\hookrightarrow\mathbf{Grp}$, so the same functor form gives the published abelianisation adjunction.

## Facts & Assumptions

**Given:** The standard complete locally small categories and continuous functors in the Statement, together with the published universal-arrow data.

[L1] Canonical normal-subgroup quotients give a solution set for $U:\mathbf{Grp}\to\mathbf{Set}$ ([[thm-the-solution-set-for-the-underlying-set-functor-on-groups]]).

[L2] Objectwise GAFT produces initial comma objects, and supplied initial comma objects assemble into a left adjoint ([[thm-general-adjoint-functor-theorem-objectwise-form]], [[thm-general-adjoint-functor-theorem-functor-form]]).

[L3] Chosen free groups define a left adjoint to $U$, and abelianisation defines a left adjoint to $\mathbf{Ab}\hookrightarrow\mathbf{Grp}$ with its quotient arrows as units ([[thm-the-free-group-functor-is-left-adjoint-to-the-underlying-set-functor]], [[thm-abelianisation-is-left-adjoint-to-the-inclusion-of-abelian-groups]]).

## Proof

**Proof technique:** direct.

1.1 For the underlying-set functor, [L1] supplies the solution sets required by objectwise GAFT, while the chosen free-group universal arrows in [L3] supply the initial comma objects. The functor form of [L2] therefore assembles exactly the free-group adjunction. [L1, L2, L3]

2.1 For the abelian inclusion, each unit in [L3] is itself a singleton solution set and supplied initial comma object, so the same argument assembles the abelianisation adjunction. [step 1.1, L2, L3] ∎
