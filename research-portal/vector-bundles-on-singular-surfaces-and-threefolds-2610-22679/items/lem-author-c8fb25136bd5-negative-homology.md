---
id: lem-author-c8fb25136bd5-negative-homology
kind: lemma
title: Negative homology of the cycle complex
status: draft
domain: mathematics
deps:
  - def-bloch-higher-cycle-complex
dependency_roles:
  def-bloch-higher-cycle-complex: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 4
---

## Statement
For a field $k$, a smooth finite-type $k$-scheme $X$, $r\geq0$, and an integer $n<0$, one has $H_nz^r(X,\bullet)=0$.

## Facts & Assumptions

**Given:** $k$, $X$, $r$ and $n$ as in the statement.

**Goal:** Compute the indicated homology group.

[F1] The Bloch complex has zero chain group in every negative degree, and its homology is the kernel modulo the image. [[def-bloch-higher-cycle-complex]]

## Proof

1.1 Since $n<0$, the chain group in degree $n$ is zero, so the kernel of its outgoing differential is zero. [F1]

2.1 The incoming image is a subgroup of this zero kernel; consequently their quotient is zero. [F1, step 1.1] ∎
