---
id: thm-finite-caratheodory-sets-characterized-by-source-algebra-approximation
kind: theorem
title: "Assuming countable choice, Carathéodory measurability of a finite-outer-measure set is equivalent to source-algebra approximation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-outer-measure-induced-by-a-premeasure, lem-source-algebra-is-caratheodory-measurable, def-caratheodory-measurable-set, lem-caratheodory-subadditive-inequality-is-automatic, def-nonnegative-extended-series, cor-premeasure-induced-set-function-is-an-outer-measure, def-countable-choice]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory, Exercise 1.7.9(ii-iii)"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "G. Folland, Real Analysis, 2nd ed., Exercise 18 in Section 1.4"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Statement

Assume the Axiom of Countable Choice. Let $\mu^*$ be induced by a premeasure $\mu_0$ on $\mathcal A_0$, and let $E\subseteq X$ satisfy $\mu^*(E)<+\infty$. Then $E$ is Carathéodory measurable if and only if for every $\varepsilon>0$ there is $A\in\mathcal A_0$ such that $\mu^*(E\mathbin{\triangle}A)<\varepsilon$.

## Facts & Assumptions

**Given:** Countable choice, the induced outer set function $\mu^*$, a set $E$ of finite outer measure, and a positive real $\varepsilon$.

[F1] The set function induced by $\mu_0$ assigns $E\subseteq X$ the infimum of $\sum_k\mu_0(A_k)$ over all countable algebra covers $E\subseteq\bigcup_kA_k$. ([[def-outer-measure-induced-by-a-premeasure]])

[L1] Assuming countable choice, every member of the source algebra is Carathéodory measurable for the induced outer measure. ([[lem-source-algebra-is-caratheodory-measurable]])

[L3] Assuming countable choice, the outer set function induced by a premeasure is an outer measure. ([[cor-premeasure-induced-set-function-is-an-outer-measure]])

[L2] For every outer measure $\mu^*$ and all $A,E\subseteq X$, $\mu^*(A)\le\mu^*(A\cap E)+\mu^*(A\setminus E)$. ([[lem-caratheodory-subadditive-inequality-is-automatic]])

## Proof

**Proof technique:** direct.

1.1 For the forward direction, suppose $E$ is Carathéodory measurable. Choose by [F1] a cover $(C_k)$ of $E$ with finite cost below $\mu^*(E)+\varepsilon/4$ and put $H=\bigcup_kC_k$. Applying the Carathéodory identity for $E$ to the test set $H$ shows that $\mu^*(H\setminus E)<\varepsilon/4$; the finite total covering cost also has a tail below $\varepsilon/4$, so some finite union $A=\bigcup_{k<n}C_k\in\mathcal A_0$ satisfies $\mu^*(H\setminus A)<\varepsilon/4$. [F1, given, choose, algebra]

2.1 For the forward direction, step 1.1 gives $E\mathbin{\triangle}A\subseteq(H\setminus E)\cup(H\setminus A)$ and hence $\mu^*(E\mathbin{\triangle}A)<\varepsilon$. For the reverse direction, assume the approximation property, fix a test set $T$, and choose $A\in\mathcal A_0$ with $\mu^*(E\mathbin{\triangle}A)<\delta$; since $\mu^*$ is an outer measure by [L3] and $A$ is measurable by [L1], subadditivity gives $\mu^*(T\cap E)+\mu^*(T\setminus E)\le\mu^*(T\cap A)+\mu^*(T\setminus A)+2\delta=\mu^*(T)+2\delta$. [step 1.1, L1, L3, algebra]

3.1 For the reverse direction, letting $\delta$ decrease to $0$ in step 2.1 gives $\mu^*(T\cap E)+\mu^*(T\setminus E)\le\mu^*(T)$, and [L2] applied to the outer measure of [L3] gives the opposite inequality; thus the Carathéodory identity holds for every $T$, completing both implications. [step 2.1, L2, L3, algebra] ∎
