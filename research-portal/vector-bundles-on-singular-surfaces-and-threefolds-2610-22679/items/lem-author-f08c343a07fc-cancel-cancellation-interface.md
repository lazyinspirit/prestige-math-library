---
id: lem-author-f08c343a07fc-cancel-cancellation-interface
kind: lemma
title: Local application interface for a critical-rank cancellation theorem
status: draft
domain: mathematics
deps:
  - lem-author-f08c343a07fc-cancel-module-classes
  - lem-author-f08c343a07fc-cancel-spectral-kzero-stability
  - lem-author-f08c343a07fc-cancel-cancellative-free-summands
  - math:def-axiom-of-choice
dependency_roles:
  lem-author-f08c343a07fc-cancel-module-classes: mathematical-premise
  lem-author-f08c343a07fc-cancel-spectral-kzero-stability: mathematical-premise
  lem-author-f08c343a07fc-cancel-cancellative-free-summands: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 13
---

## Statement
Assume AC and the suitable universes used for the article's perfect K-theory construction. Let $X=\operatorname{Spec}A$ be noetherian affine and $r\geq0$. Suppose every constant-rank-$r$ finite projective $A$-module is cancellative in the free-stabilization sense. Then two rank-$r$ bundles $E,F$ on $X$ are isomorphic exactly when $[E]=[F]$ in the article\'s spectral $K_0(X)$.

## Facts & Assumptions

**Given:** The data and hypotheses in the statement.

**Goal:** Establish the stated conclusion.

[F1] Rank and isomorphism classes pass through the affine equivalence. [[lem-author-f08c343a07fc-cancel-module-classes]]

[F2] Under AC and the stated universes, spectral K-zero equality for vector bundles on a noetherian affine scheme is equivalent to a common finite free module stabilization. [[lem-author-f08c343a07fc-cancel-spectral-kzero-stability]]

[F3] The meaning of cancellative is fixed by [[lem-author-f08c343a07fc-cancel-cancellative-free-summands]].

## Proof

1.1 If the K-zero classes agree, let $P,Q$ be the modules of sections. They have constant rank $r$, and [F2] gives $P\oplus A^N\cong Q\oplus A^N$. By the assumed cancellativity, $P\cong Q$. By [F1], $E\cong F$. [F1, F2, F3, given]

2.1 If $E\cong F$, the spectral object-class map assigns the same element to both; equivalently [F2] applies with $N=0$. Hence the converse holds too. [F2, step 1.1] ∎
