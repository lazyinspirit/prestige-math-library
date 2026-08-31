---
id: thm-the-category-of-small-categories-is-cartesian-closed
kind: theorem
title: "The category of small categories is cartesian closed"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cartesian-closed-category, cor-set-cat-and-every-complete-category-are-cartesian-monoidal, def-functor-category, prop-size-of-functor-categories]
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Tom Leinster, Basic Category Theory, Example 6.3.17"
      url: "https://arxiv.org/pdf/1612.09375.pdf"
---

## Statement

The category $\mathbf{Cat}$ of small categories is cartesian closed. For small categories $\mathcal D,\mathcal E$, the exponential object of $\mathcal E$ by $\mathcal D$ is the functor category $[\mathcal D,\mathcal E]$.

## Facts & Assumptions

**Given:** Small categories $\mathcal C,\mathcal D,\mathcal E$.

[L1] $\mathbf{Cat}$ is cartesian monoidal, so it has finite products ([[cor-set-cat-and-every-complete-category-are-cartesian-monoidal]]).

[L2] For small source and locally small target, the functor category $[\mathcal D,\mathcal E]$ exists and is locally small; if both are small, then it is small ([[def-functor-category]], [[prop-size-of-functor-categories]]).

[L3] A cartesian closed category is one with finite products and a right adjoint to each functor $-\times\mathcal D$ ([[def-cartesian-closed-category]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $\mathbf{Cat}$ has the finite products required in [L3]. By [L2], the functor category $[\mathcal D,\mathcal E]$ is again a small category. [given, L1, L2]

1.2 A functor $F:\mathcal C\times\mathcal D\to\mathcal E$ determines a functor $\widetilde F:\mathcal C\to[\mathcal D,\mathcal E]$ by $\widetilde F(c)(d)=F(c,d)$ on objects and similarly on morphisms. Conversely, a functor $\Phi:\mathcal C\to[\mathcal D,\mathcal E]$ determines $\widehat\Phi:\mathcal C\times\mathcal D\to\mathcal E$ by evaluation, $\widehat\Phi(c,d)=\Phi(c)(d)$. These assignments are inverse and natural in $\mathcal C$. [given, L2, algebra]

2.1 Step 1.2 is exactly the adjunction $\mathbf{Cat}(\mathcal C\times\mathcal D,\mathcal E)\cong\mathbf{Cat}(\mathcal C,[\mathcal D,\mathcal E])$. Thus $-\times\mathcal D$ has right adjoint $[\mathcal D,-]$. With step 1.1, [L3] now gives that $\mathbf{Cat}$ is cartesian closed. [step 1.1, step 1.2, L3] ∎
