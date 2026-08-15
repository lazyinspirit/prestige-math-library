---
id: fs-left-adjoints-preserve-limits
kind: false-statement
title: 'Left adjoints preserve limits'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-the-free-group-functor-is-left-adjoint-to-the-underlying-set-functor, thm-reduced-words-form-the-free-group, def-initial-terminal-and-zero-object]
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
    - title: 'Tom Leinster, Basic Category Theory, Example 2.1.3'
      url: 'https://arxiv.org/pdf/1612.09375.pdf'
pipeline_run: null
---

## Statement

Every left adjoint preserves all limits that exist.

## Facts & Assumptions

**Given:** The free-group functor $F:\mathbf{Set}\to\mathbf{Grp}$.

[F1] The functor $F$ is left adjoint to the underlying-set functor $U:\mathbf{Grp}\to\mathbf{Set}$ ([[thm-the-free-group-functor-is-left-adjoint-to-the-underlying-set-functor]]).

[F2] The reduced words on $X\sqcup X^{-1}$ form the free group on $X$, with each $x\in X$ represented by a one-letter word ([[thm-reduced-words-form-the-free-group]]).

[F3] A terminal object admits exactly one morphism from every object, hence exactly one endomorphism ([[def-initial-terminal-and-zero-object]]).

## Refutation

**Proof technique:** direct.

1.1 A singleton $1=\{x\}$ is terminal in $\mathbf{Set}$. By [F2], $F(1)$ contains the distinct empty word and one-letter word $x$, so its identity homomorphism differs from its trivial endomorphism. [F2, algebra]

2.1 Therefore $F(1)$ is not terminal by [F3], although $F$ is a left adjoint by [F1]. The terminal-object limit is not preserved, so the statement is false. [step 1.1, F1, F3] ∎
