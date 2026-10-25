---
id: cor-left-adjoints-preserve-colimits
kind: corollary
title: 'Left adjoints preserve every colimit that exists'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-right-adjoints-preserve-limits, thm-category-theoretic-duality-principle, prop-limit-colimit-duality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Theorem 4.6.2'
      url: 'https://emilyriehl.github.io/files/context.pdf'
    - title: 'Tom Leinster, Basic Category Theory, Section 6.3'
      url: 'https://arxiv.org/pdf/1612.09375.pdf'
pipeline_run: null
---

## Statement

If $F:\mathcal C\to\mathcal D$ is a left adjoint and a diagram $D:\mathcal J\to\mathcal C$ has a colimit, then applying $F$ to a colimiting cocone produces a colimit of $FD$. Thus left adjoints preserve every colimit that exists.

## Facts & Assumptions

**Given:** An adjunction $F\dashv G$ and a diagram in $\mathcal C$ with a colimit.

[F1] A formal theorem derived from the category axioms has a formal dual obtained by reversing morphisms and exchanging each notion with its opposite-category version ([[thm-category-theoretic-duality-principle]]).

[F2] A cocone is colimiting in a category exactly when the reversed family is a limiting cone in the opposite category ([[prop-limit-colimit-duality]]).

[L1] Right adjoints preserve every limit that exists ([[thm-right-adjoints-preserve-limits]]).

## Proof

**Proof technique:** direct.

1.1 Passing to opposite categories turns $F\dashv G$ into $G^{\mathrm{op}}\dashv F^{\mathrm{op}}$, so $F^{\mathrm{op}}$ is a right adjoint. [F1]

1.2 By [F2], the given colimit in $\mathcal C$ is a limit in $\mathcal C^{\mathrm{op}}$. [F2]

2.1 Apply [L1] to $F^{\mathrm{op}}$: the reversed image cone is limiting in $\mathcal D^{\mathrm{op}}$. [step 1.1, step 1.2, L1]

3.1 Translating back with [F2], the image cocone under $F$ is colimiting in $\mathcal D$. [step 2.1, F2] ∎
