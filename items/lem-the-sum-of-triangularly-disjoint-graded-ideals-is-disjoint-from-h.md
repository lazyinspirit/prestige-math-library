---
id: lem-the-sum-of-triangularly-disjoint-graded-ideals-is-disjoint-from-h
kind: lemma
title: "The sum of triangularly disjoint graded ideals is disjoint from h"
status: draft
origin: pipeline
deps: ["prop-contragredient-algebra-has-a-triangular-decomposition"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Kleshchev, Lectures on Infinite Dimensional Lie Algebras — Lemma 1.3.2 and Theorem 1.3.3(v), pp.13–16"
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
proof_strategy: direct
---

## Statement

Every ideal $J$ of $\widetilde{\mathfrak g}(A)$ is $Q$-graded. The sum $\mathfrak r$ of all ideals with $J\cap\mathfrak h=0$ also has zero intersection with $\mathfrak h$, is the unique largest such ideal, and decomposes as $\mathfrak r=\mathfrak r^-\oplus\mathfrak r^+$, where $\mathfrak r^\pm=\mathfrak r\cap\widetilde{\mathfrak n}^\pm$ are separate ideals.

## Facts & Assumptions

**Given:** The triangular decomposition and an arbitrary ideal J.

[F1] Distinct Q-degrees are distinct Cartan weights, and the zero space is the Cartan. ([[prop-contragredient-algebra-has-a-triangular-decomposition]]).

## Proof

1.1 Write $x\in J$ as $\sum_{\beta\in S}x_\beta$ with finite support. Choose $h\in\mathfrak h$ for which the distinct numbers $\beta(h)$ are pairwise different. Such an $h$ exists: the product of the finitely many nonzero linear polynomials $\beta-\gamma$ is nonzero over the infinite field $\mathbb C$, and a nonzero polynomial cannot vanish at all complex tuples (induct on the number of variables). Applying $\prod_{\gamma\ne\beta}(\operatorname{ad}h-\gamma(h))/(\beta(h)-\gamma(h))$ to $x$ extracts $x_\beta$ and keeps it in $J$. Thus $J$ is graded. [F1, given]

2.1 If $J\cap\mathfrak h=0$, every vector of $J$ has zero degree-zero component by step 1.1. The algebraic sum of all these ideals consists of finite sums of their vectors, so it also has zero degree-zero component. It is an ideal because bracketing distributes over a finite sum, and it contains every such ideal. This proves existence, maximality and uniqueness of $\mathfrak r$. [F1, step 1.1]

3.1 Cartan and positive generators preserve $\mathfrak r^+$. Bracketing a degree $\beta>0$ vector with $f_i$ gives degree $\beta-\alpha_i$. If this degree is zero, the result vanishes by step 2.1; if it has mixed signs it vanishes by F1; it cannot be strictly negative unless $\beta$ were zero or a forbidden fractional multiple of $\alpha_i$. The remaining degree is positive. Hence $\mathfrak r^+$ is stable under all generators and is an ideal. The sign-changing involution proves the negative assertion. The direct sum follows from F1. [F1, step 2.1] ∎

## Sources

Source comparison: [Kleshchev](https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf), Lemma 1.3.2 and Theorem 1.3.3(v), pp.13–16.
