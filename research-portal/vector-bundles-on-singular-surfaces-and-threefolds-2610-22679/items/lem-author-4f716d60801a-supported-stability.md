---
id: lem-author-4f716d60801a-supported-stability
kind: lemma
title: Stable supported perfect subcategories and retracts
status: draft
domain: mathematics
deps:
  - thm-author-4f716d60801a-derived-enhancement-input
  - thm-author-4f716d60801a-local-perfect-input
  - lem-author-4f716d60801a-restriction-support
  - lem-author-4f716d60801a-local-perfect-qc
  - math:def-axiom-of-choice
dependency_roles:
  thm-author-4f716d60801a-derived-enhancement-input: mathematical-premise
  thm-author-4f716d60801a-local-perfect-input: mathematical-premise
  lem-author-4f716d60801a-restriction-support: mathematical-premise
  lem-author-4f716d60801a-local-perfect-qc: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 3
---

## Statement
Assume the Axiom of Choice. For any scheme $X$, let $\operatorname{Perf}(X)$ be the full subcategory of $\mathcal D(X)$ on locally perfect objects. For any subset $T\subseteq X$, let $\operatorname{Perf}_T(X)$ be the full subcategory on objects whose cohomological support is contained in $T$. Both are stable and idempotent complete, with finite limits and colimits inherited from $\mathcal D(X)$. If $T$ is closed, $\operatorname{Perf}_T(X)$ is the full kernel of restriction to $X\setminus T$; for arbitrary $T$ it is the intersection of the full kernels of the stalk functors at points outside $T$.

## Facts & Assumptions
**Given:** A scheme $X$, a subset $T$, and the Axiom of Choice.

**Goal:** Establish stability, the kernel descriptions and idempotent completeness.

[F1] [[thm-author-4f716d60801a-derived-enhancement-input]] supplies the stable idempotent-complete ambient category and its homotopy category.

[F2] [[thm-author-4f716d60801a-local-perfect-input]] gives closure of perfect objects under triangles and direct summands.

[F3] [[lem-author-4f716d60801a-restriction-support]] gives exact restriction and stalk functors and their support criteria. [[lem-author-4f716d60801a-local-perfect-qc]] establishes the local condition on derived objects.

## Proof
1.1 Zero and shifts are locally represented by bounded finite locally free complexes. The ambient cofiber of a map between perfect objects is perfect by the triangle closure in [F2]; fibers are shifts of cofibers. Thus the full perfect subcategory is stable and inherits finite exact operations. [F1, F2, F3]

2.1 By [F3], the supported subcategory is the intersection of the indicated stalk kernels and, for closed $T$, the kernel of open restriction. Exact functors preserve zero, shifts and cofibers, so these kernels and their intersection are stable. Their finite limits and colimits are computed in the ambient category. [F3, step 1.1]

3.1 A retract $E$ of a perfect object $P$ in the stable homotopy category is a direct summand: the fiber of the retraction supplies a complement. By [F2], $E$ is perfect. If $P$ is supported in $T$, the cohomology stalks of $E$ are retracts of those of $P$, so $E$ is supported in $T$ by [F3]. [F1, F2, F3, step 2.1]

4.1 Every coherent idempotent in either full subcategory splits in the ambient category by [F1], and its retract remains in that subcategory by step 3.1. Fullness retains the splitting maps and coherences. Thus both subcategories are idempotent complete; their ordinary homotopy-category idempotents split by the same retract argument. [F1, step 1.1, step 2.1, step 3.1] ∎
