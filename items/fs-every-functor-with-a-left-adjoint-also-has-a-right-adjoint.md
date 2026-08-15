---
id: fs-every-functor-with-a-left-adjoint-also-has-a-right-adjoint
kind: false-statement
title: 'Every functor with a left adjoint also has a right adjoint'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-the-free-group-functor-is-left-adjoint-to-the-underlying-set-functor, cor-left-adjoints-preserve-colimits, def-initial-terminal-and-zero-object]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Example 4.1.10'
      url: 'https://emilyriehl.github.io/files/context.pdf'
pipeline_run: null
---

## Statement

If a functor has a left adjoint, then it also has a right adjoint.

## Facts & Assumptions

**Given:** The underlying-set functor $U:\mathbf{Grp}\to\mathbf{Set}$.

[F1] The free-group functor is a left adjoint of $U$ ([[thm-the-free-group-functor-is-left-adjoint-to-the-underlying-set-functor]]).

[F2] Every left adjoint preserves colimits, including initial objects ([[cor-left-adjoints-preserve-colimits]]).

[F3] An initial object has exactly one morphism to every object ([[def-initial-terminal-and-zero-object]]).

## Refutation

**Proof technique:** contradiction.

1.1 By [F1], $U$ has a left adjoint. Suppose, as the claim predicts, that $U$ also has a right adjoint. Then $U$ itself is a left adjoint and preserves initial objects by [F2]. [F1, F2, assume-contra]

1.2 The trivial group is initial in $\mathbf{Grp}$, since there is exactly one homomorphism from it to every group. Its underlying set is a singleton. [F3, algebra]

2.1 The empty set, not a singleton, is initial in $\mathbf{Set}$, so step 1.2 contradicts the preservation conclusion of step 1.1. Hence $U$ has no right adjoint and the statement is false. [step 1.1, step 1.2, F3, discharge-contradiction] ∎
