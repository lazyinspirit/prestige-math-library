---
id: thm-countable-disjoint-caratheodory-splitting
kind: theorem
title: "Countable disjoint unions of Carathéodory measurable sets are measurable and split every test set"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-finite-caratheodory-splitting, lem-caratheodory-subadditive-inequality-is-automatic, def-outer-measure, def-nonnegative-extended-series]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., Exercise 17 in Section 1.4"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "T. Tao, An Introduction to Measure Theory, proof of Theorem 1.7.3"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

Let $(E_k)_{k\in\mathbb N}$ be a pairwise disjoint sequence of Carathéodory measurable subsets of $X$, and put $E=\bigcup_kE_k$. Then $E$ is Carathéodory measurable and

$$\mu^*(A\cap E)=\sum_{k=0}^{\infty}\mu^*(A\cap E_k)$$

for every $A\subseteq X$. Equivalently: a countable disjoint union of Carathéodory measurable sets is Carathéodory measurable, and $\mu^*(A\cap\bigcup_kE_k)=\sum_k\mu^*(A\cap E_k)$ for every $A\subseteq X$.

## Facts & Assumptions

**Given:** A pairwise disjoint sequence $(E_k)$ of Carathéodory measurable sets, its union $E$, and a test set $A\subseteq X$.

[L1] If $E_0,\ldots,E_{n-1}$ are pairwise disjoint Carathéodory measurable sets, then outer measure splits every test set over those pieces and the remaining complement. ([[lem-finite-caratheodory-splitting]])

[F1] An **outer measure** on a set $X$ is a function $\mu^*:\mathcal P(X)\to[0,+\infty]$ that vanishes at the empty set, is monotone, and is countably subadditive. ([[def-outer-measure]])

## Proof

**Proof technique:** direct.

1.1 Applying [L1] to the first $n$ sets and to $A$ gives $\mu^*(A)\ge\sum_{k<n}\mu^*(A\cap E_k)+\mu^*(A\setminus E)$, because $A\setminus E\subseteq A\setminus\bigcup_{k<n}E_k$ and outer measure is monotone; this includes $n=0$. [L1, algebra]

2.1 Taking the supremum over $n$ in step 1.1 yields $\mu^*(A)\ge\sum_k\mu^*(A\cap E_k)+\mu^*(A\setminus E)$. Apply step 1.1 again with the test set $A\cap E$: its remainder outside $E$ is empty, so taking the supremum gives $\mu^*(A\cap E)\ge\sum_k\mu^*(A\cap E_k)$ without subtracting an infinite quantity. Countable subadditivity gives the reverse inequality. Substituting this equality into the first bound and using subadditivity on $(A\cap E)\cup(A\setminus E)$ proves the Carathéodory identity, even when the series is $+\infty$. [step 1.1, F1, algebra] ∎
