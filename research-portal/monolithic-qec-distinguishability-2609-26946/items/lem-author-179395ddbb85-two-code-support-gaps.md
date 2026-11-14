---
id: lem-author-179395ddbb85-two-code-support-gaps
kind: lemma
domain: mathematics
title: The selected codes have magnetic-support gaps two and three
status: published
origin: session
deps:
  - lem-author-179395ddbb85-two-code-cubic-moments
  - def-qec-prereq-spin-tensor-cg-conventions
dependency_roles:
  lem-author-179395ddbb85-two-code-cubic-moments: mathematical-premise
  def-qec-prereq-spin-tensor-cg-conventions: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 2
---

## Statement

For the two ordered code pairs in the cubic-moment lemma, define support to be the set of magnetic labels with nonzero coefficient. The spin-four union of supports is $\{-4,-2,2,4\}$, with consecutive gaps $(2,4,2)$; the spin-five union is $\{-5,-2,2,5\}$, with consecutive gaps $(3,4,3)$. Their minimum distinct-label separations are therefore two and three. Their hosting spin blocks have dimensions nine and eleven, respectively.

## Facts & Assumptions

**Given:** The finite objects, measure conventions and explicit hypotheses in the Statement.

[F1] The displayed coefficients and magnetic labels of both code pairs are explicit, nonzero and normalized. [[lem-author-179395ddbb85-two-code-cubic-moments]]

[F2] The spin-$J$ block is $V_J=\mathbb C^{2J+1}$ with orthonormal magnetic basis $e_{J,m}$ indexed by $m=-J,-J+1,\ldots,J$. [[def-qec-prereq-spin-tensor-cg-conventions]]

## Proof

**Given:** The finite objects, measure conventions and explicit hypotheses in the Statement.

**Goal:** Establish the stated formula, convergence and qualifications.

1.1 In the spin-four pair the first column uses labels $-4,2$ and the second uses $-2,4$. Sorting their union gives $-4,-2,2,4$, whose consecutive differences are two, four and two. In the spin-five pair the first column uses $-2,5$ and the second uses $-5,2$. Sorting gives $-5,-2,2,5$, whose consecutive differences are three, four and three. [F1, algebra]

2.1 Any difference of two distinct ordered labels is a sum of one or more consecutive positive gaps, so the minimum distinct-label separation equals the smallest consecutive gap. It is therefore two for spin four and three for spin five. A spin-J magnetic basis has $2J+1$ vectors, giving dimensions nine and eleven. This is a comparison of magnetic support and host dimension, not a claim of global optimality among codes. [F1, F2, step 1.1, algebra] ∎
