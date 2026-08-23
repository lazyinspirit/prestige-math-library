---
id: lem-finite-caratheodory-splitting
kind: lemma
title: "Outer measure splits exactly over finite Carathéodory-measurable partitions"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-caratheodory-measurable-set, prop-caratheodory-measurable-sets-form-an-algebra, def-nonnegative-extended-series]
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., proof of Theorem 1.11"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "T. Tao, An Introduction to Measure Theory, proof of Theorem 1.7.3"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

Let $E_0,\ldots,E_{n-1}$ be pairwise disjoint Carathéodory measurable subsets of $X$, where $n\in\mathbb N$. For every $A\subseteq X$,

$$\mu^*(A)=\sum_{k<n}\mu^*(A\cap E_k)+\mu^*\left(A\setminus\bigcup_{k<n}E_k\right).$$

If $E_0,\ldots,E_{n-1}$ are pairwise disjoint Carathéodory measurable sets, then outer measure splits every test set over those pieces and the remaining complement.

## Facts & Assumptions

**Given:** An outer measure $\mu^*$, a natural number $n$, pairwise disjoint Carathéodory measurable sets $E_0,\ldots,E_{n-1}$, and a test set $A\subseteq X$.

[F1] A set $E\subseteq X$ is **Carathéodory measurable** for $\mu^*$ when $\mu^*(A)=\mu^*(A\cap E)+\mu^*(A\setminus E)$ for every $A\subseteq X$. ([[def-caratheodory-measurable-set]])

[L1] The Carathéodory measurable subsets of $X$ form an algebra of subsets. ([[prop-caratheodory-measurable-sets-form-an-algebra]])

## Proof

**Proof technique:** induction.

1.1 At $n=0$ the finite union is empty and the finite sum is the empty sum $0$, so the formula is $\mu^*(A)=0+\mu^*(A)$; moreover every partial union $U_n:=\bigcup_{k<n}E_k$ is measurable by [L1]. [L1, base]

1.2 Assume the displayed formula at $n$ and put $R_n:=A\setminus U_n$. [ih]

2.1 Since $E_n$ is disjoint from $U_n$, [F1] gives $\mu^*(R_n)=\mu^*(A\cap E_n)+\mu^*(A\setminus U_{n+1})$. Substituting this equality into the induction hypothesis in step 1.2 gives the formula for $n+1$, including empty pieces and infinite values without cancellation. [step 1.2, F1, algebra]

3.1 Step 1.1 is the base case and step 2.1 proves the successor case, so the formula holds for every $n\in\mathbb N$. [step 1.1, step 2.1, discharge-induction] ∎
