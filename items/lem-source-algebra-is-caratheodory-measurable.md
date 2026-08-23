---
id: lem-source-algebra-is-caratheodory-measurable
kind: lemma
title: "Assuming countable choice, every source-algebra set is measurable for the induced outer measure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-premeasure-on-an-algebra, def-outer-measure-induced-by-a-premeasure, cor-premeasure-induced-set-function-is-an-outer-measure, def-caratheodory-measurable-set, lem-caratheodory-subadditive-inequality-is-automatic, def-countable-choice]
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
    - title: "G. Folland, Real Analysis, 2nd ed., Proposition 1.13(b)"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "T. Tao, An Introduction to Measure Theory, Theorem 1.7.8"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Countable Choice. Every member of the source algebra is Carathéodory measurable for the induced outer measure.

## Facts & Assumptions

**Given:** Countable choice, a premeasure $\mu_0$ on an algebra $\mathcal A_0$, its induced outer set function $\mu^*$, a set $E\in\mathcal A_0$, and a test set $A\subseteq X$.

[F1] A **premeasure** on an algebra $\mathcal A_0$ vanishes at the empty set and is countably additive whenever a disjoint sequence in $\mathcal A_0$ has its union in $\mathcal A_0$. ([[def-premeasure-on-an-algebra]])

[F2] The set function induced by $\mu_0$ assigns $E\subseteq X$ the infimum of $\sum_k\mu_0(A_k)$ over all countable algebra covers $E\subseteq\bigcup_kA_k$. ([[def-outer-measure-induced-by-a-premeasure]])

[L1] For every outer measure $\mu^*$ and all $A,E\subseteq X$, $\mu^*(A)\le\mu^*(A\cap E)+\mu^*(A\setminus E)$. ([[lem-caratheodory-subadditive-inequality-is-automatic]])

[L2] Assuming countable choice, the outer set function induced by a premeasure is an outer measure. ([[cor-premeasure-induced-set-function-is-an-outer-measure]])

## Proof

**Proof technique:** direct.

1.1 If $\mu^*(A)=+\infty$, the reverse Carathéodory inequality is automatic. If $\mu^*(A)<+\infty$, then for any $\varepsilon>0$ choose an algebra cover $(C_k)$ of $A$ with $\sum_k\mu_0(C_k)<\mu^*(A)+\varepsilon$; since $E\in\mathcal A_0$, the two sequences $(C_k\cap E)$ and $(C_k\setminus E)$ lie in the algebra, cover $A\cap E$ and $A\setminus E$, and [F1] gives $\mu_0(C_k)=\mu_0(C_k\cap E)+\mu_0(C_k\setminus E)$. [F1, F2, choose, cases]

2.1 By the defining infima, step 1.1 gives $\mu^*(A\cap E)+\mu^*(A\setminus E)<\mu^*(A)+\varepsilon$; since this holds for every positive $\varepsilon$, the left side is at most $\mu^*(A)$. Countable choice makes $\mu^*$ an outer measure by [L2], so [L1] applies to it and gives the reverse inequality. Thus the Carathéodory identity holds for every $A$. [step 1.1, L1, L2, algebra] ∎
