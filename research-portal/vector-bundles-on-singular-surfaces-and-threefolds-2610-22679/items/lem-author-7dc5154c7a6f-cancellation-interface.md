---
id: lem-author-7dc5154c7a6f-cancellation-interface
kind: lemma
title: Local application interface for a critical-rank cancellation theorem
status: published
domain: mathematics
deps:
  - lem-author-7dc5154c7a6f-module-classes
  - lem-author-7dc5154c7a6f-spectral-kzero-stability
  - lem-author-7dc5154c7a6f-cancellative-free-summands
  - math:def-axiom-of-choice
dependency_roles:
  lem-author-7dc5154c7a6f-module-classes: mathematical-premise
  lem-author-7dc5154c7a6f-spectral-kzero-stability: mathematical-premise
  lem-author-7dc5154c7a6f-cancellative-free-summands: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 13
---

## Statement
Assume AC and the suitable universes of the article's perfect K-theory construction. Let $X=\operatorname{Spec}A$ be noetherian affine and $r\geq0$. Suppose every constant-rank-$r$ finite projective $A$-module is cancellative in the free-stabilization sense. Then two rank-$r$ bundles $E,F$ on $X$ are isomorphic exactly when $[E]=[F]$ in the article\'s spectral $K_0(X)$.

## Facts & Assumptions

**Given:** The data and hypotheses in the statement.

**Goal:** Establish the stated conclusion.

[F1] Rank and isomorphism classes pass through the affine equivalence. [[lem-author-7dc5154c7a6f-module-classes]]

[F2] K-zero equality gives a common free module stabilization. [[lem-author-7dc5154c7a6f-spectral-kzero-stability]]

[F3] The meaning of cancellative is fixed by [[lem-author-7dc5154c7a6f-cancellative-free-summands]].

## Proof

1.1 If the K-zero classes agree, let $P,Q$ be the modules of sections. They have constant rank $r$, and [F2] gives $P\oplus A^N\cong Q\oplus A^N$. By the assumed cancellativity, $P\cong Q$. By [F1], $E\cong F$. [F1, F2, F3, given]

2.1 If $E\cong F$, the spectral object-class map assigns the same element to both; equivalently [F2] applies with $N=0$. Hence the converse holds too. [F2, step 1.1] ∎
