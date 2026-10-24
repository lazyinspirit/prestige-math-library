---
id: thm-interchange-law-for-natural-transformations
kind: theorem
title: "Horizontal and vertical composition of natural transformations satisfy the interchange law"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-vertical-composition-of-natural-transformations, lem-vertical-composition-of-natural-transformations-is-natural, def-horizontal-composition-and-whiskering-of-natural-transformations, lem-horizontal-composition-of-natural-transformations-is-natural]
justified_by: []
aliases: []
landmark: true
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

Whenever the expressions are defined,

$$(\beta'\circ\beta)*(\alpha'\circ\alpha)=(\beta'*\alpha')\circ(\beta*\alpha).$$

Thus horizontal and vertical composition of natural transformations satisfy the
interchange law.

## Facts & Assumptions

**Given:** Natural transformations $\alpha:F\Rightarrow G$, $\alpha':G\Rightarrow K:\mathcal C\to\mathcal D$ and $\beta:H\Rightarrow L$, $\beta':L\Rightarrow M:\mathcal D\to\mathcal E$.

[L1] Vertical composition is componentwise and its composites are natural ([[def-vertical-composition-of-natural-transformations]], [[lem-vertical-composition-of-natural-transformations-is-natural]]); horizontal composition has the standard component formula and its composites are natural ([[def-horizontal-composition-and-whiskering-of-natural-transformations]], [[lem-horizontal-composition-of-natural-transformations-is-natural]]).

## Proof

**Proof technique:** direct.

1.1 At an object $A$, expand the left side by [L1] as $\beta'_{KA}\circ\beta_{KA}\circ H(\alpha'_A)\circ H(\alpha_A)$. [given, L1]

2.1 Naturality of $\beta$ at $\alpha'_A:GA\to KA$ gives $\beta_{KA}\circ H(\alpha'_A)=L(\alpha'_A)\circ\beta_{GA}$. Substitution turns step 1.1 into $(\beta'_{KA}\circ L(\alpha'_A))\circ(\beta_{GA}\circ H(\alpha_A))$. [step 1.1, L1]

3.1 The two parenthesised factors are the $A$-components of $\beta'*\alpha'$ and $\beta*\alpha$, so every component agrees with the right side and the transformations are equal. [step 2.1, L1] ∎
