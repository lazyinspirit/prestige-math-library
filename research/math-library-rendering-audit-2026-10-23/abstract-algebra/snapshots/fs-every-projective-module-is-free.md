---
id: fs-every-projective-module-is-free
kind: false-statement
title: "Every projective module is free"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-projective-module-characterizations, thm-free-modules-are-projective-with-choice-boundary, def-free-module-on-a-set-and-standard-basis]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "A. Kleshchev, Lectures on Abstract Algebra for Graduate Students, sections 3.6, 3.14, and 3.15"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/Alg600LN12.pdf"
    - title: "The Stacks Project, Algebra"
      url: "https://stacks.math.columbia.edu/tag/05CD"
    - title: "P. Hekmati, Homological Algebra, section 3.1"
      url: "https://www.math.auckland.ac.nz/~hekmati/HomologicalAlgebra.pdf"
pipeline_run: null
---

## Statement

> **False.** Every projective module is free.

## Facts & Assumptions

**Given:** $R=\mathbb Z/6\mathbb Z$ and the ideal $P=3R=\{0,3\}$.

[L1] Under AC, projective modules are exactly the direct summands of free modules ([[thm-projective-module-characterizations]]).

[L2] A free module with a finite basis is projective using only finite choice, which is provable in ZF ([[thm-free-modules-are-projective-with-choice-boundary]]).

[F1] A free module is a direct sum of copies of the regular module ([[def-free-module-on-a-set-and-standard-basis]]).

## Refutation

**Proof technique:** direct.

1.1 Modulo six, $3$ and $4$ are orthogonal idempotents with sum one, so $R=3R\oplus4R$. The rank-one free module $R$ is projective without AC by [L2], and the direct lifting argument for a summand makes $P$ projective; this is the finite instance of [L1]. [given, L1, L2, algebra]

1.2 The module $P$ has two elements. By [F1], a free module on no basis vectors has one element, one on a nonempty finite set of size $k$ has $6^k$ elements, and one on an infinite set is infinite. Therefore $P$ is not free. [F1, algebra]

2.1 The projective nonfree module $P$ refutes the statement. [step 1.1, step 1.2] ∎
