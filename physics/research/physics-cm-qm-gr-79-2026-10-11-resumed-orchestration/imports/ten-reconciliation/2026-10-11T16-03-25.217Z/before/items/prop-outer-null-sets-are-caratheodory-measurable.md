---
id: prop-outer-null-sets-are-caratheodory-measurable
kind: proposition
title: "Every outer-null set is Carathéodory measurable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-outer-measure, def-caratheodory-measurable-set, lem-caratheodory-subadditive-inequality-is-automatic]
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
    - title: "T. Tao, An Introduction to Measure Theory, Exercise 1.7.1"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "G. Folland, Real Analysis, 2nd ed., Theorem 1.11"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Statement

Every set of outer measure zero, and every subset of it, is Carathéodory measurable and has outer measure zero.

## Facts & Assumptions

**Given:** An outer measure $\mu^*$ on $X$, a set $N\subseteq X$ with $\mu^*(N)=0$, and a subset $S\subseteq N$.

[F1] An **outer measure** on a set $X$ is a function $\mu^*:\mathcal P(X)\to[0,+\infty]$ that vanishes at the empty set, is monotone, and is countably subadditive. ([[def-outer-measure]])

[L1] For every outer measure $\mu^*$ and all $A,E\subseteq X$, $\mu^*(A)\le\mu^*(A\cap E)+\mu^*(A\setminus E)$. ([[lem-caratheodory-subadditive-inequality-is-automatic]])

## Proof

**Proof technique:** direct.

1.1 Monotonicity gives $0\le\mu^*(S)\le\mu^*(N)=0$, so $\mu^*(S)=0$; for every test set $A$, the same argument gives $\mu^*(A\cap S)=0$. [F1, algebra]

2.1 Since $A\setminus S\subseteq A$, monotonicity gives $\mu^*(A)\ge\mu^*(A\setminus S)=\mu^*(A\cap S)+\mu^*(A\setminus S)$ by step 1.1; [L1] supplies the reverse inequality, so $S$ is Carathéodory measurable. [step 1.1, L1, algebra] ∎
