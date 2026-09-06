---
id: fs-h-two-is-defined-here-as-equivalence-classes-of-group-extensions
kind: false-statement
title: "This page defines $H^2$ by group extensions"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-group-cohomology-as-a-derived-functor]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Weibel, Example 6.5.7"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
---

## Statement

This page defines $H^2(G;M)$ as equivalence classes of group extensions.

## Refutation

**Given:** The page's derived-functor definition.

1.1 The definition fixes every degree by $H^n(G;M)=R^n((-)^G)(M)$. [given]

2.1 The extension classification is a separate low-degree theorem and is not used or defined here. [step 1.1] ∎
