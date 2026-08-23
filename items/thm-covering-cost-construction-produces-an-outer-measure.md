---
id: thm-covering-cost-construction-produces-an-outer-measure
kind: theorem
title: "Assuming countable choice, countable covering costs define an outer measure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-outer-measure, def-nonnegative-extended-series, thm-tonelli-for-nonnegative-double-series, lem-extended-reals-complete, def-countable-choice, thm-product-of-countable]
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
    - title: "G. Folland, Real Analysis, 2nd ed., Proposition 1.10"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Statement

Assume the Axiom of Countable Choice. Let $X$ be a set, let $\mathcal C\subseteq\mathcal P(X)$ contain $\varnothing$ and $X$, and let $p:\mathcal C\to[0,+\infty]$ satisfy $p(\varnothing)=0$. For $E\subseteq X$, define

$$\mu^*(E):=\inf\left\{\sum_{k=0}^{\infty}p(C_k): (C_k)_{k\in\mathbb N}\text{ is in }\mathcal C\text{ and }E\subseteq\bigcup_kC_k\right\}.$$

Then $\mu^*$ is an outer measure on $X$. In short: assuming countable choice, the infimum of countable covering costs defines an outer measure.

## Facts & Assumptions

**Given:** The data in the Statement and the Axiom of Countable Choice.

[F1] Countable choice says that for every family $(X_n)_{n\in\mathbb N}$ of nonempty sets, there is a function $f$ on $\mathbb N$ with $f(n)\in X_n$ for every $n$. ([[def-countable-choice]])

[L1] For every double sequence $(a_{ij})_{i,j\in\mathbb N}$ in $[0,+\infty]$, the two iterated nonnegative extended sums are equal, so the order of summation may be interchanged even when the common value is $+\infty$. ([[thm-tonelli-for-nonnegative-double-series]])

[L2] If $A$ and $B$ are at most countable, then $A\times B$ is at most countable, with an explicit enumeration and no choice principle. ([[thm-product-of-countable]])

## Proof

**Proof technique:** direct.

1.1 The sequence consisting only of empty sets covers $\varnothing$ at cost $0$, so $\mu^*(\varnothing)=0$; if $E\subseteq F$, every cover of $F$ covers $E$, so taking infima gives $\mu^*(E)\le\mu^*(F)$. [given, algebra]

2.1 Let $(E_j)$ be a sequence. If some $\mu^*(E_j)=+\infty$, the desired subadditive inequality is automatic. Otherwise, for $\varepsilon>0$, [F1] selects for each $j$ a cover $(C_{jk})_k$ of $E_j$ with cost below $\mu^*(E_j)+\varepsilon2^{-(j+1)}$; [L2] enumerates the doubly indexed family as one sequence covering $\bigcup_jE_j$, and [L1] computes its cost as at most $\sum_j\mu^*(E_j)+\varepsilon$, since the displayed geometric error series has partial sums $\varepsilon(1-2^{-n})$. Letting $\varepsilon$ decrease to $0$ proves countable subadditivity, so with step 1.1 the function is an outer measure. [step 1.1, F1, L1, L2, choose, algebra] ∎
