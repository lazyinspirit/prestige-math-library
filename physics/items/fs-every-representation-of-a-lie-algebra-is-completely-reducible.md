---
id: fs-every-representation-of-a-lie-algebra-is-completely-reducible
kind: false-statement
title: Lie-algebra representations need not be completely reducible
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-irreducible-completely-reducible-and-faithful-lie-algebra-representation]
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, §4.3, printed pp. 52–53"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
---

## Statement

Every representation of every Lie algebra is completely reducible.

## Facts & Assumptions

**Given:** The asserted universal complete reducibility.

[L1] Completely reducible means an algebraic direct sum of irreducible subrepresentations ([[def-irreducible-completely-reducible-and-faithful-lie-algebra-representation]]).

## Refutation

**Proof technique:** direct counterexample.

1.1 Let the one-dimensional abelian Lie algebra $kt$ act on $V=ke_1\oplus ke_2$ by $te_1=0$ and $te_2=e_1$. This is a representation because its sole action operator commutes with itself, and $ke_1$ is a proper nonzero stable line, so $V$ is not irreducible. [construct, algebra]

2.1 Any stable line is spanned by an eigenvector of the nilpotent operator $t$. Its eigenvalue must be zero, and $\ker t=ke_1$, so $ke_1$ is the only stable line. Therefore $V$ cannot be a direct sum of two irreducible one-dimensional subrepresentations; since it is not itself irreducible, it has no decomposition of the form required by [L1]. [step 1.1, L1, algebra]

3.1 This two-dimensional representation is not completely reducible, refuting the universal claim over every field. [step 2.1] ∎
