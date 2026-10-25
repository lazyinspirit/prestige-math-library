---
id: thm-absolutely-continuous-functions-have-luzin-property-n
kind: theorem
title: "Absolutely continuous functions have Luzin's property $(N)$"
status: published
origin: pipeline
deps: [def-countable-choice, def-luzin-property-n-on-a-compact-interval, def-absolutely-continuous-function, thm-lebesgue-outer-regularity-for-arbitrary-subsets]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
sources:
  references:
    - title: "Christopher Heil, Absolute Continuity and the Banach--Zaretsky Theorem, Corollary 18"
      url: "https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf"
---

## Statement

Assume the Axiom of Countable Choice. Every absolutely continuous
$F:[a,b]\to\mathbb R$ has property $(N)$.

## Facts & Assumptions

**Given:** Countable choice, $F\in AC[a,b]$, and a null set $E\subseteq[a,b]$.

## Proof

**Proof technique:** direct.

1.1 Given $\varepsilon>0$, choose $\delta$ from [[def-absolutely-continuous-function]]. The endpoints have a finite image, so it suffices to consider $E\cap(a,b)$. Outer regularity [[thm-lebesgue-outer-regularity-for-arbitrary-subsets]] gives an open $U\subseteq(a,b)$ containing it with $\lambda(U)<\delta$. [given, choose]

2.1 Write $U=\bigsqcup_j(a_j,b_j)$. On each $[a_j,b_j]$, continuity gives points $c_j,d_j$ of minimum and maximum value, ordered so that $c_j\le d_j$. Hence $F([a_j,b_j])$ is an interval of length $|F(d_j)-F(c_j)|$. The intervals $[c_j,d_j]$ are disjoint and have total length at most $\lambda(U)$; the AC estimate applies to every finite subfamily, so its nonnegative countable sum is at most $\varepsilon$. [step 1.1, algebra]

3.1 Subadditivity gives $\lambda^*(F(E\cap(a,b)))\le\sum_j|F(d_j)-F(c_j)|\le\varepsilon$. Letting $\varepsilon\downarrow0$ and restoring the finite endpoint image proves property $(N)$ as defined in [[def-luzin-property-n-on-a-compact-interval]]. [step 2.1] ∎
