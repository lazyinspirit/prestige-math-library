---
id: thm-sum-of-solvable-ideals-is-solvable
kind: theorem
title: The sum of solvable ideals is solvable
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-radical-of-a-finite-dimensional-lie-algebra, prop-subalgebras-quotients-and-extensions-of-solvable-lie-algebras]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, Corollary 3.5"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "Corollary 3.5, printed p. 16"
---

## Statement

The sum of two solvable ideals of a Lie algebra is a solvable ideal.
Consequently every finite-dimensional Lie algebra has a unique largest
solvable ideal: the sum of all its solvable ideals.

## Facts & Assumptions

**Given:** Ideals $\mathfrak i,\mathfrak j$ of a Lie algebra $\mathfrak g$;
for the final assertion, $\mathfrak g$ is finite-dimensional.

[L1] The radical is intended to be the unique largest solvable ideal
([[def-radical-of-a-finite-dimensional-lie-algebra]]).

[L2] Quotients and extensions of solvable Lie algebras are solvable
([[prop-subalgebras-quotients-and-extensions-of-solvable-lie-algebras]]).

## Proof

**Proof technique:** direct.

1.1 The subspace $\mathfrak i+\mathfrak j$ is an ideal because both summands are ideals. The map $\mathfrak j\to(\mathfrak i+\mathfrak j)/\mathfrak i$, $y\mapsto y+\mathfrak i$, is a surjective Lie homomorphism with kernel $\mathfrak i\cap\mathfrak j$, so it induces the explicit isomorphism $\mathfrak j/(\mathfrak i\cap\mathfrak j)\cong(\mathfrak i+\mathfrak j)/\mathfrak i$. [given, algebra]

2.1 If $\mathfrak i$ and $\mathfrak j$ are solvable, [L2] makes the quotient in step 1.1 solvable; applying [L2] again to the ideal $\mathfrak i$ in $\mathfrak i+\mathfrak j$ proves that the sum is solvable. Repetition gives the same result for every specified finite sum, including the empty sum $0$. [L2, step 1.1, algebra]

3.1 Let $R$ be the algebraic sum of all solvable ideals of finite-dimensional $\mathfrak g$. It is an ideal and contains each such ideal. Choose a finite basis $r_1,\ldots,r_t$ of $R$; by the definition of algebraic sum, each $r_s$ belongs to a finite sum of solvable ideals. Collecting the finitely many ideals occurring in these finitely many expressions gives solvable ideals $I_1,\ldots,I_N$ with $R=I_1+\cdots+I_N$. Step 2.1 makes $R$ solvable, so [L1] identifies it as $\operatorname{rad}(\mathfrak g)$; any two largest ideals contain one another and are equal. All selections are finite after one finite basis is fixed, so AC is not used. [L1, step 2.1, algebra] ∎
