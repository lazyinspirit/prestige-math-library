---
id: lem-no-return-sets-have-null-preimage-towers
kind: lemma
title: No-return sets have disjoint null preimage towers
deps: ["def-measure-preserving-transformation-and-system", "prop-measure-preserving-compositions-iterates-and-completions", "def-measure", "prop-measure-monotonicity"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: E–W Theorem 2.11 p.21
      url: https://webspace.maths.qmul.ac.uk/f.vivaldi/teaching/ETAD/NotesI.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Let $(X,\mathcal A,\mu,T)$ be a measure-preserving system with $\mu(X)<\infty$. For $E\in\mathcal A$ put $W=E\setminus\bigcup_{n\ge1}T^{-n}E$. Then the measurable sets $T^{-n}W$, $n\ge0$, are pairwise disjoint and all have measure zero.

## Facts & Assumptions

[F1] Nonnegative iterates preserve the original measure; only that choice-free clause is used. [[prop-measure-preserving-compositions-iterates-and-completions]].

[F2] Countable additivity gives finite additivity by padding with empty sets. [[def-measure]].

[F3] The measure of a measurable subset is bounded by that of its ambient set. [[prop-measure-monotonicity]].

## Proof

**Given:** Let $(X,\mathcal A,\mu,T)$ be a measure-preserving system with $\mu(X)<\infty$. For $E\in\mathcal A$ put $W=E\setminus\bigcup_{n\ge1}T^{-n}E$. Then the measurable sets $T^{-n}W$, $n\ge0$, are pairwise disjoint and all have measure zero.

1.1 Each $T^n$ is measurable and preserves $\mu$, so $W$ and every $T^{-n}W$ are measurable and $\mu(T^{-n}W)=\mu(W)$. Here $T^0$ is the identity. [F1, given]

2.1 For $0\le i<j$, membership of $x$ in both $T^{-i}W$ and $T^{-j}W$ would give $T^ix\in W\subseteq E$ and $T^{j-i}(T^ix)\in W\subseteq E$. This contradicts the absence of every positive return from $W$. Thus the tower sets are pairwise disjoint. [step 1.1, given]

3.1 For every positive integer $N$, finite additivity and monotonicity give $N\mu(W)=\mu(\bigcup_{n=0}^{N-1}T^{-n}W)\le\mu(X)$. Since the right side is finite, a positive $\mu(W)$ would violate this bound for an integer $N>\mu(X)/\mu(W)$. Hence $\mu(W)=0$, and step 1.1 makes every tower level null. This also covers $E=\varnothing$ and $\mu(X)=0$. [step 1.1, step 2.1, F2, F3, algebra] ∎

