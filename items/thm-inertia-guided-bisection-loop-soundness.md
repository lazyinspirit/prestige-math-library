---
id: thm-inertia-guided-bisection-loop-soundness
kind: theorem
title: Certified inertia counts maintain ordered eigenvalue brackets
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [thm-complex-spectral-theorem-for-normal-endomorphisms]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Nicholas J. Higham, Numerical Linear Algebra and Matrix Analysis, MIMS EPrint 2015.103, §5.6"
      url: "https://eprints.maths.manchester.ac.uk/2411/01/covered/MIMS_ep2015_103.pdf"
---

## Statement

Let $n\ge1$, let $\mathcal A$ be a nonempty family of Hermitian $n\times n$ matrices, and let a closed interval $[L,U]$ initially contain every ordered eigenvalue $\lambda_k(A)$ for every $A\in\mathcal A$, with eigenvalues listed increasingly. For a query shift $\tau$, suppose the query either returns inconclusive or returns an integer $\nu(\tau)$ such that every $A\in\mathcal A$ is nonsingular at $A-\tau I$ and exactly $\nu(\tau)$ of its eigenvalues lie below $\tau$. For each $k\in\{1,\ldots,n\}$, start with $[L,U]$ and repeat at most $N\in\mathbb N_0$ times: query its midpoint $\tau$; if $\nu(\tau)\ge k$, replace $U$ by $\tau$, and otherwise replace $L$ by $\tau$; stop when width is at most $\varepsilon>0$. An inconclusive query returns the current interval without changing it. Every returned interval contains $\lambda_k(A)$ for every $A\in\mathcal A$. After $s$ successful queries its width is $(U-L)2^{-s}$.

## Facts & Assumptions

**Given:** The initial uniform bracket, tolerance $\varepsilon>0$, budget $N$, and the stated query semantics.

[F1] Hermitian matrices have real ordered eigenvalues ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[A1] Every successful query count equals the number of eigenvalues strictly below that shift for every admitted matrix; a successful query excludes a zero eigenvalue at the shift.

## Proof

1.1 Fix $k$. The initial interval contains $\lambda_k(A)$ for every $A$ by hypothesis. At a successful shift $\tau$, if $\nu(\tau)\ge k$, then at least $k$ eigenvalues of every $A$ are below $\tau$, so $\lambda_k(A)<\tau$ and replacing the upper endpoint by $\tau$ preserves every enclosure. If $\nu(\tau)<k$, then fewer than $k$ eigenvalues of every $A$ are below $\tau$; nonsingularity at the shift makes all remaining eigenvalues strictly above $\tau$, so $\lambda_k(A)>\tau$ and replacing the lower endpoint preserves every enclosure. [given, F1, A1, algebra]

2.1 Each successful update replaces one endpoint by the midpoint and halves the width. An inconclusive query leaves the already valid interval unchanged. Induction on the number $s$ of successful queries gives width $(U-L)2^{-s}$ and retains the eigenvalue enclosure in every return branch. [given, step 1.1, algebra] ∎

