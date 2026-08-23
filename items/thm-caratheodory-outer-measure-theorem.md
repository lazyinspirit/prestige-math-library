---
id: thm-caratheodory-outer-measure-theorem
kind: theorem
title: "Carathéodory's theorem: measurable sets form a sigma-algebra carrying a complete measure"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-caratheodory-measurable-sets-form-an-algebra, thm-countable-disjoint-caratheodory-splitting, prop-outer-null-sets-are-caratheodory-measurable, lem-algebra-with-countable-disjoint-unions-is-sigma, def-measure, def-complete-measure-space]
aliases: []
landmark: true
short: "Carathéodory's theorem"
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
    - title: "G. Folland, Real Analysis, 2nd ed., Theorem 1.11"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "T. Tao, An Introduction to Measure Theory, Theorem 1.7.3"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

For an outer measure $\mu^*$ on $X$, the Carathéodory measurable subsets form a sigma-algebra, and the restriction of the outer measure to it is a complete measure.

## Facts & Assumptions

**Given:** An outer measure $\mu^*$ on $X$ and its family $\mathcal M_{\mu^*}$ of Carathéodory measurable sets.

[L1] The Carathéodory measurable subsets of $X$ form an algebra of subsets. ([[prop-caratheodory-measurable-sets-form-an-algebra]])

[L2] A countable disjoint union of Carathéodory measurable sets is Carathéodory measurable, and $\mu^*(A\cap\bigcup_kE_k)=\sum_k\mu^*(A\cap E_k)$ for every $A\subseteq X$. ([[thm-countable-disjoint-caratheodory-splitting]])

[L3] Every set of outer measure zero, and every subset of it, is Carathéodory measurable and has outer measure zero. ([[prop-outer-null-sets-are-caratheodory-measurable]])

[L4] Let $\mathcal A$ be an algebra of subsets of $X$. If the union of every pairwise disjoint sequence in $\mathcal A$ belongs to $\mathcal A$, then $\mathcal A$ is a sigma-algebra on $X$. ([[lem-algebra-with-countable-disjoint-unions-is-sigma]])

## Proof

**Proof technique:** direct.

1.1 The family $\mathcal M_{\mu^*}$ is an algebra by [L1] and is closed under countable disjoint unions by [L2], so [L4] makes it a sigma-algebra. [L1, L2, L4]

1.2 For a pairwise disjoint sequence $(E_k)$ in $\mathcal M_{\mu^*}$, use $A=\bigcup_kE_k$ in [L2]; then $A\cap E_k=E_k$, so $\mu^*(\bigcup_kE_k)=\sum_k\mu^*(E_k)$, including infinite values, and the restriction is a measure. [L2, algebra]

2.1 If $N\in\mathcal M_{\mu^*}$ has restricted measure zero and $S\subseteq N$, then [L3] makes $S$ measurable with outer measure zero; hence the restricted measure is complete. [L3, algebra] ∎
