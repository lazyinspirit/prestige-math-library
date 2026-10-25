---
id: thm-general-adjoint-functor-theorem-functor-form
kind: theorem
title: "General adjoint functor theorem, data-supplied functor form"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-general-adjoint-functor-theorem-objectwise-form, thm-a-left-adjoint-exists-exactly-when-every-comma-category-has-an-initial-object]
aliases: []
landmark: true
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
    - title: "E. Riehl, Category Theory in Context, theorem 4.7.3"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "T. Leinster, Basic Category Theory, theorem 6.3.10"
      url: "https://arxiv.org/pdf/1612.09375"
pipeline_run: null
---

## Statement

Let $U:\mathcal A\to\mathcal C$, where $\mathcal A$ is complete and locally small and $U$ is continuous. Suppose that, for every $C\in\mathcal C$, a solution set at $C$ is supplied and the resulting initial object of $(C\downarrow U)$ is supplied. Then $U$ has a left adjoint.

The conclusion is data-sensitive: objectwise existence from GAFT does not by itself choose one initial comma object over a proper class of objects.

## Facts & Assumptions

**Given:** The displayed hypotheses and a supplied initial object in every comma category $(C\downarrow U)$.

[L1] Under completeness, local smallness, continuity, and a solution set at a fixed object, that fixed comma category has an initial object ([[thm-general-adjoint-functor-theorem-objectwise-form]]).

[L2] A left adjoint is supplied exactly by choosing an initial object in every comma category; those choices determine the functor and adjunction ([[thm-a-left-adjoint-exists-exactly-when-every-comma-category-has-an-initial-object]]).

## Proof

**Proof technique:** direct.

1.1 The supplied initial comma objects satisfy precisely the hypothesis of [L2], so they assemble into a functor $F:\mathcal C\to\mathcal A$ and an adjunction $F\dashv U$. [L1, L2]

2.1 The assembly uses the supplied family, not merely the separate existential conclusions of [L1]; therefore no unrecorded proper-class choice is hidden in the functor form. [step 1.1, L1, L2] ∎
