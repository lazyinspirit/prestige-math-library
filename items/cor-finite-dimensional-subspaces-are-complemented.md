---
id: cor-finite-dimensional-subspaces-are-complemented
kind: corollary
title: Finite-dimensional subspaces are complemented
status: published
origin: pipeline
deps: [thm-coordinate-map-for-a-finite-dimensional-normed-space, cor-finite-dimensional-subspaces-are-closed, thm-norm-preserving-extension-from-any-subspace, def-complemented-subspace, thm-complemented-subspace-iff-range-of-a-bounded-projection]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: Piotr Hajlasz, Functional Analysis, Theorem 10.17(a)
      url: https://sites.pitt.edu/~hajlasz/Notatki/Functional%20Analysis2.pdf
---

## Statement

Every finite-dimensional linear subspace $M$ of a normed space $X$ is
complemented in $X$.

## Facts & Assumptions

**Given:** A finite-dimensional subspace $M\subseteq X$.

[F1] Relative to a fixed finite basis, every coordinate functional on a finite-dimensional normed space is bounded ([[thm-coordinate-map-for-a-finite-dimensional-normed-space]]).

[F2] A bounded functional on a subspace extends norm-preservingly to the ambient normed space ([[thm-norm-preserving-extension-from-any-subspace]]).

[F3] A subspace is complemented exactly when it is the range of a bounded projection ([[thm-complemented-subspace-iff-range-of-a-bounded-projection]]).

## Proof

**Proof technique:** direct.

1.1 Choose a basis $e_1,\ldots,e_n$ of $M$, and let $\phi_j:M\to\mathbb K$ be its coordinate maps. By [F1]--[F2], extend each $\phi_j$ to $f_j\in X^*$. [given, F1, F2, choose]

2.1 Define $P:X\to X$ by $P(x)=\sum_{j=1}^n f_j(x)e_j$. It is bounded, has range in $M$, and for $m=\sum a_je_j\in M$ satisfies $P(m)=m$. [step 1.1, algebra]

3.1 Thus $P^2=P$ and $\operatorname{ran}P=M$; [F3] makes $M$ complemented. [step 2.1, F3] ∎
