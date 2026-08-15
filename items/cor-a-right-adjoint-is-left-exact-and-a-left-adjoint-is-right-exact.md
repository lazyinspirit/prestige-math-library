---
id: cor-a-right-adjoint-is-left-exact-and-a-left-adjoint-is-right-exact
kind: corollary
title: 'A right adjoint is left exact and a left adjoint is right exact'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-right-adjoints-preserve-limits, cor-left-adjoints-preserve-colimits, def-left-exact-and-right-exact-functor]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Definition 4.6.7 and Theorem 4.6.2'
      url: 'https://emilyriehl.github.io/files/context.pdf'
pipeline_run: null
---

## Statement

Every right adjoint is left exact, and every left adjoint is right exact. The assertion concerns finite limits or colimits that exist in the source category; it does not assert that the source has them.

## Facts & Assumptions

**Given:** An adjunction $F\dashv G$.

[L1] Right adjoints preserve every limit that exists ([[thm-right-adjoints-preserve-limits]]).

[L2] Left adjoints preserve every colimit that exists ([[cor-left-adjoints-preserve-colimits]]).

[L3] Left exact means preserving existing finite limits, and right exact means preserving existing finite colimits ([[def-left-exact-and-right-exact-functor]]).

## Proof

**Proof technique:** direct.

1.1 Applying [L1] to finite indexing categories shows that $G$ preserves every existing finite limit. [L1]

1.2 Applying [L2] to finite indexing categories shows that $F$ preserves every existing finite colimit. [L2]

2.1 Unfolding [L3], step 1.1 says that $G$ is left exact and step 1.2 says that $F$ is right exact, without adding an existence hypothesis. [step 1.1, step 1.2, L3] ∎
