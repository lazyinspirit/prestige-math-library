---
id: thm-a-closed-monoidal-category-has-its-tensor-cocontinuous-in-each-variable
kind: theorem
title: "In a biclosed monoidal category tensor is cocontinuous in each variable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-left-closed-and-right-closed-monoidal-category, cor-left-adjoints-preserve-colimits]
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
    - title: "Emily Riehl, Category Theory in Context, 2nd ed., Section 4.4 and Theorem 4.2.1"
      url: "https://emilyriehl.github.io/files/context.pdf"
---

## Statement

Let $\mathcal C$ be a biclosed monoidal category. For every object $X$, the functors $-\otimes X$ and $X\otimes-$ preserve every colimit that exists in $\mathcal C$.

## Facts & Assumptions

**Given:** A biclosed monoidal category $\mathcal C$ and an object $X$.

[L1] Biclosed means that $-\otimes X$ and $X\otimes-$ are left adjoints for every $X$ ([[def-left-closed-and-right-closed-monoidal-category]]).

[L2] Every left adjoint preserves all colimits that exist in its domain ([[cor-left-adjoints-preserve-colimits]]).

## Proof

**Proof technique:** direct.

1.1 Since $\mathcal C$ is biclosed, the functor $-\otimes X$ has a right adjoint and is therefore a left adjoint by [L1]. [given, L1]

1.2 Likewise $X\otimes-$ has a right adjoint and is a left adjoint. [given, L1]

2.1 Apply [L2] to step 1.1 to conclude that $-\otimes X$ preserves every colimit that exists in $\mathcal C$. [step 1.1, L2]

2.2 Apply [L2] to step 1.2 to conclude that $X\otimes-$ preserves every colimit that exists in $\mathcal C$. [step 1.2, L2]

3.1 Hence tensoring with a fixed object is cocontinuous in each variable. [step 2.1, step 2.2] ∎
