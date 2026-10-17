---
id: lem-vertical-composition-of-natural-transformations-is-natural
kind: lemma
title: "Vertical composites of natural transformations satisfy naturality"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-vertical-composition-of-natural-transformations]
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

The vertical composite of two natural transformations satisfies the naturality
equation.

## Facts & Assumptions

**Given:** Natural transformations $\alpha:F\Rightarrow G$ and $\beta:G\Rightarrow H$, and a morphism $f:A\to B$.

[L1] Vertical composition is componentwise, and $\alpha,\beta$ satisfy their naturality equations ([[def-vertical-composition-of-natural-transformations]]).

## Proof

**Proof technique:** direct.

1.1 By naturality, $Gf\circ\alpha_A=\alpha_B\circ Ff$ and $Hf\circ\beta_A=\beta_B\circ Gf$. [given, L1]

2.1 Therefore $Hf\circ(\beta_A\circ\alpha_A)=(\beta_B\circ Gf)\circ\alpha_A=\beta_B\circ(\alpha_B\circ Ff)=(\beta_B\circ\alpha_B)\circ Ff$. [step 1.1, L1]

3.1 This is the naturality equation for the componentwise family $\beta\circ\alpha$. [step 2.1, L1] ∎

