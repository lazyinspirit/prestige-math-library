---
id: cor-gaft-recovers-the-free-group-and-abelianisation-adjoints
kind: corollary
title: "GAFT recovers the published free-group adjunction, and the comma-initial criterion the abelianisation adjunction"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-the-solution-set-for-the-underlying-set-functor-on-groups, thm-general-adjoint-functor-theorem-objectwise-form, thm-general-adjoint-functor-theorem-functor-form, thm-the-free-group-functor-is-left-adjoint-to-the-underlying-set-functor, thm-abelianisation-is-left-adjoint-to-the-inclusion-of-abelian-groups, thm-grp-is-complete-and-cocomplete, prop-groups-and-homomorphisms-form-category-grp, thm-right-adjoints-preserve-limits, thm-a-left-adjoint-exists-exactly-when-every-comma-category-has-an-initial-object]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, examples 4.7.4 and 4.7.6"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

The general adjoint functor theorem applies to the underlying-set functor $U:\mathbf{Grp}\to\mathbf{Set}$ using the canonical solution sets of [[thm-the-solution-set-for-the-underlying-set-functor-on-groups]]. With the published free groups supplied as the initial comma objects, its functor form gives the published free-group adjunction.

Likewise, the published abelianisation arrows supply singleton solution sets and initial comma objects for the inclusion $\mathbf{Ab}\hookrightarrow\mathbf{Grp}$, and assembling that supplied family recovers the published abelianisation adjunction. That second assembly uses only [[thm-a-left-adjoint-exists-exactly-when-every-comma-category-has-an-initial-object]] and not the GAFT functor form, whose hypotheses of completeness, local smallness and continuity are not established here for the abelian inclusion.

## Facts & Assumptions

**Given:** The published universal-arrow data named in the Statement. The completeness, local smallness and continuity that the objectwise theorem needs are not assumed here; they are established in step 1.1 from [L4], [L5] and [L6].

[L1] Canonical normal-subgroup quotients give a solution set for $U:\mathbf{Grp}\to\mathbf{Set}$ ([[thm-the-solution-set-for-the-underlying-set-functor-on-groups]]).

[L2] Objectwise GAFT produces initial comma objects, and supplied initial comma objects assemble into a left adjoint ([[thm-general-adjoint-functor-theorem-objectwise-form]], [[thm-general-adjoint-functor-theorem-functor-form]]).

[L3] Chosen free groups define a left adjoint to $U$, and abelianisation defines a left adjoint to $\mathbf{Ab}\hookrightarrow\mathbf{Grp}$ with its quotient arrows as units ([[thm-the-free-group-functor-is-left-adjoint-to-the-underlying-set-functor]], [[thm-abelianisation-is-left-adjoint-to-the-inclusion-of-abelian-groups]]).

[L4] The category $\mathbf{Grp}$ of groups and group homomorphisms has all small limits and all small colimits ([[thm-grp-is-complete-and-cocomplete]]).

[L5] Groups and group homomorphisms form the large locally small category $\mathbf{Grp}$ ([[prop-groups-and-homomorphisms-form-category-grp]]).

[L6] If $F$ is left adjoint to $G$ and a diagram $D$ has a limit $(L,\lambda)$, then $(GL,G\lambda)$ is a limit of $GD$; thus $G$ preserves every limit that exists ([[thm-right-adjoints-preserve-limits]]).

[L7] A left adjoint to $G:\mathcal D\to\mathcal C$ is supplied exactly by choosing, for every $c\in\mathcal C$, an initial object $(Fc,\eta_c)$ of the comma category $(c\downarrow G)$; these choices determine $F$ on morphisms and the adjunction uniquely ([[thm-a-left-adjoint-exists-exactly-when-every-comma-category-has-an-initial-object]]).

## Proof

**Proof technique:** direct.

1.1 The objectwise theorem in [L2] needs $\mathbf{Grp}$ complete and locally small and $U$ continuous. Fact [L4] gives all small limits in $\mathbf{Grp}$, so it is complete, and [L5] gives local smallness. By [L3] the chosen free-group functor is left adjoint to $U$, so [L6] makes $U$ preserve every limit that exists, in particular every small limit; hence $U$ is continuous. [L2, L3, L4, L5, L6]

2.1 For the underlying-set functor, step 1.1 discharges those hypotheses and [L1] supplies the solution sets required by objectwise GAFT, while the chosen free-group universal arrows in [L3] supply the initial comma objects. The functor form of [L2] therefore assembles exactly the free-group adjunction. [step 1.1, L1, L2, L3]

3.1 For the abelian inclusion, each unit in [L3] is itself a singleton solution set and a supplied initial object of the corresponding comma category. Assembling that supplied family into a left adjoint is exactly [L7], which asks only for an initial object in every comma category and carries no completeness or continuity hypothesis; so the abelianisation adjunction is recovered from the supplied family by [L7]. The functor form of [L2] is not invoked for this branch, since its Statement does require $\mathcal A$ complete and locally small and $U$ continuous, and those hypotheses are not established here for $\mathbf{Ab}\hookrightarrow\mathbf{Grp}$. [step 2.1, L3, L7] ∎
