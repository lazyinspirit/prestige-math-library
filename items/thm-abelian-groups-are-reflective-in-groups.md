---
id: thm-abelian-groups-are-reflective-in-groups
kind: theorem
title: "Abelian groups form a reflective full subcategory of groups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-reflective-subcategory-and-reflector, thm-abelianisation-is-left-adjoint-to-the-inclusion-of-abelian-groups]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, example 4.5.13"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

The full subcategory $\mathbf{Ab}$ of abelian groups is reflective in $\mathbf{Grp}$, with reflector given by abelianisation.

## Facts & Assumptions

**Given:** The full inclusion $I:\mathbf{Ab}\hookrightarrow\mathbf{Grp}$.

[L1] Abelianisation defines a functor left adjoint to $I$, and every map from a group to an abelian group factors uniquely through the abelianisation quotient ([[thm-abelianisation-is-left-adjoint-to-the-inclusion-of-abelian-groups]]).

[L2] A full subcategory is reflective when its inclusion has a left adjoint ([[def-reflective-subcategory-and-reflector]]).

## Proof

**Proof technique:** direct.

1.1 The adjunction of [L1] exhibits the full inclusion $I$ as a right adjoint with abelianisation as its left adjoint. [L1]

2.1 Hence [L2] makes $\mathbf{Ab}$ reflective in $\mathbf{Grp}$ with abelianisation as reflector. [step 1.1, L2] ∎
