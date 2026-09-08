---
id: lem-finite-ambient-partitions-for-euclidean-boundary-integration
kind: lemma
title: Finite ambient partitions near compact sets
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Hunter, Notes on Partial Differential Equations
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Hunter, §1.9.2 Theorem 1.31, printed pp. 12–13. A finite normalized-bump construction is supplied here.
    - title: Sung-Jin Oh, Lecture Notes for Math 222A
      url: https://math.berkeley.edu/~sjoh/pdfs/notes-math222a.pdf
      locator: Oh §3.9, Proposition 3.23 and its complete local graph and partition proof, printed/PDF pp. 47–48.
      original_url: https://web.math.berkeley.edu/~sjoh/pdfs/notes-math222a.pdf
status: draft
origin: pipeline
proof_strategy: direct
deps: ["lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound", "thm-heine-borel-rn", "thm-algebra-of-derivatives", "def-the-standard-smooth-step-function"]
---

## Statement

Under the page measure convention, if a finite family of open sets $U_j\subset\mathbb R^n$ covers compact K, there are smooth nonnegative $\chi_j$ with compact support in $U_j$ such that $\sum_j\chi_j=1$ on a neighborhood of K. These are ambient smooth functions, also when K is only a $C^1$ hypersurface.

## Facts & Assumptions

**Given:** A compact Euclidean set K and a finite open cover of K, with the ambient smooth-step and bump conventions in the statement.

[F1] Nested balls admit smooth bumps with a strict compact support margin. ([[lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound]]).

[F2] Compact Euclidean sets admit finite subcovers. ([[thm-heine-borel-rn]]).

[F3] The standard step has values zero for inputs at most zero and one for inputs at least one. ([[def-the-standard-smooth-step-function]]).

## Proof

1.1 If K is empty take all chi_j zero. Otherwise consider all pairs of concentric balls with positive rational radii r<R whose closed outer ball lies in some U_j and whose inner ball meets K. Their inner balls cover K, because every point has a positive neighborhood inside a member of the given open cover. Compactness (F2) retains finitely many such inner balls covering K. F1 gives corresponding bumps b_l, equal to one on those inner balls and compactly supported in their assigned U_j. [given, F1, F2]

2.1 Put $s=\sum_l b_l$. Then s is smooth with compact support, and s at least one on K. Define $\theta=\sigma(4s-1)$. By F3 theta=1 wherever s at least one half, a neighborhood of K, and its support lies in the compact set where s at least one quarter. On s>0 put $f_l=\theta b_l/s$, and extend by zero on s=0. Because theta vanishes on s at most one quarter, this extension is smooth. Each f_l has compact support in the assigned U_j, is nonnegative, and their sum is theta. [step 1.1, F3, algebra]

3.1 For each j sum f_l over the finitely many bumps assigned to U_j, using zero if no bump is assigned. These sums are the required chi_j: their supports are finite unions of compact subsets of U_j, and their total is theta=1 near K. Since all constructions took place in the ambient Euclidean space, no differentiability of K was required. [step 2.1, algebra] ∎

## Source notes

Hunter, §1.9.2 Theorem 1.31, printed pp. 12–13. A finite normalized-bump construction is supplied here.

