---
id: thm-a-reflective-subcategory-has-every-colimit-the-ambient-category-has
kind: theorem
title: "A reflective subcategory has every ambient colimit, obtained by reflecting an ambient colimit"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-reflective-subcategory-and-reflector, thm-the-counit-of-a-reflection-is-an-isomorphism, cor-left-adjoints-preserve-colimits, def-limit-and-colimit-of-a-diagram]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, section 4.5"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Let $R\dashv I$ exhibit $\mathcal A$ as a reflective full subcategory of $\mathcal C$. If $D:\mathcal J\to\mathcal A$ and $ID$ has a colimit $L$ in $\mathcal C$, then $D$ has a colimit in $\mathcal A$, represented by $R(L)$. In particular, the inclusion need not preserve this colimit.

## Facts & Assumptions

**Given:** A reflection $R\dashv I$ ([[def-reflective-subcategory-and-reflector]]), a diagram $D:\mathcal J\to\mathcal A$, and a colimiting cocone $\lambda_j:I(D_j)\to L$ in $\mathcal C$.

[L1] The counit $\varepsilon_A:RI(A)\to A$ of a reflection is an isomorphism for every $A\in\mathcal A$ ([[thm-the-counit-of-a-reflection-is-an-isomorphism]]).

[L2] A left adjoint sends every existing colimiting cocone to a colimiting cocone ([[cor-left-adjoints-preserve-colimits]]).

[L3] A colimit is a cocone through which every cocone factors uniquely ([[def-limit-and-colimit-of-a-diagram]]).

## Proof

**Proof technique:** direct.

1.1 Apply $R$ to the ambient cocone. By [L2], $(R(L),R(\lambda_j))$ is colimiting for $RI D$; precomposing its legs with the inverses $\varepsilon_{D_j}^{-1}:D_j\to RI(D_j)$ of the isomorphisms supplied by [L1] transports it to a cocone with legs $R(\lambda_j)\circ\varepsilon_{D_j}^{-1}:D_j\to R(L)$, also for the empty indexing category. [L1, L2]

2.1 Transport across isomorphisms preserves the existence and uniqueness clauses in [L3], so the resulting cocone is a colimit of $D$ in $\mathcal A$. The construction applies the reflector to $L$ and does not assert that $I(R(L))$ is isomorphic to $L$, so it does not assert preservation by the inclusion. [step 1.1, L1, L3] ∎
