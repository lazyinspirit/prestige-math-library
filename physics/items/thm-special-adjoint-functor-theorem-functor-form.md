---
id: thm-special-adjoint-functor-theorem-functor-form
kind: theorem
title: "Special adjoint functor theorem, data-supplied functor form"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-special-adjoint-functor-theorem-objectwise-form, thm-a-left-adjoint-exists-exactly-when-every-comma-category-has-an-initial-object]
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
    - title: "S. Mac Lane, Categories for the Working Mathematician, theorem V.8.2 and corollary"
      url: "https://web.archive.org/web/20251104003129if_/https://pages.jh.edu/rrynasi1/NewFoundations4Math/Literature/Textbooks/Mac_Lane1998CategoriesForTheWorkingMathematician.2ndEdition.pdf"
pipeline_run: null
---

## Statement

Under either hypothesis branch of [[thm-special-adjoint-functor-theorem-objectwise-form]], suppose an initial object of $(C\downarrow U)$ is supplied for every $C\in\mathcal C$. Then these data determine a left adjoint to $U$.

## Facts & Assumptions

**Given:** The SAFT hypotheses and a supplied initial object in every comma category.

[L1] The objectwise SAFT gives an initial object of each fixed comma category under either explicit intersection branch ([[thm-special-adjoint-functor-theorem-objectwise-form]]).

[L2] A supplied family of initial comma objects determines a left adjoint and its adjunction uniquely ([[thm-a-left-adjoint-exists-exactly-when-every-comma-category-has-an-initial-object]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L2] to the supplied initial comma objects. They assemble into a functor $F:\mathcal C\to\mathcal A$ and an adjunction $F\dashv U$. [L1, L2]

2.1 The supplied family is essential data: [L1] is objectwise and does not itself choose one initial object over a proper class. With the family supplied, [L2] completes the construction. [step 1.1, L1, L2] ∎
