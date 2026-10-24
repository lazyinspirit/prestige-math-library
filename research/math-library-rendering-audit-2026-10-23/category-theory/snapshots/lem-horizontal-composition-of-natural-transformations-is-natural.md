---
id: lem-horizontal-composition-of-natural-transformations-is-natural
kind: lemma
title: "Horizontal composites of natural transformations satisfy naturality"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-horizontal-composition-and-whiskering-of-natural-transformations]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Chapter 1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

The horizontal composite of natural transformations satisfies the naturality
equation.

## Facts & Assumptions

**Given:** Natural transformations $\alpha:F\Rightarrow G:\mathcal C\to\mathcal D$ and $\beta:H\Rightarrow L:\mathcal D\to\mathcal E$, and $f:A\to B$ in $\mathcal C$.

[L1] Horizontal composition has component $\beta_{GA}\circ H(\alpha_A)=L(\alpha_A)\circ\beta_{FA}$, and functors preserve composition ([[def-horizontal-composition-and-whiskering-of-natural-transformations]]).

## Proof

**Proof technique:** direct.

1.1 Naturality of $\beta$ at $Gf$ gives $L(Gf)\circ\beta_{GA}=\beta_{GB}\circ H(Gf)$, while functoriality sends the naturality equation $Gf\circ\alpha_A=\alpha_B\circ Ff$ to $H(Gf)\circ H(\alpha_A)=H(\alpha_B)\circ H(Ff)$. [given, L1]

2.1 Combining these equations gives $L(Gf)\circ\beta_{GA}\circ H(\alpha_A)=\beta_{GB}\circ H(\alpha_B)\circ H(Ff)$. [step 1.1, L1]

3.1 The two outer composites are exactly $L(Gf)\circ(\beta*\alpha)_A$ and $(\beta*\alpha)_B\circ H(Ff)$, which proves naturality. [step 2.1, L1] ∎

