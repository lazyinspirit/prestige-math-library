---
id: def-outer-measure
kind: definition
title: "Outer measures"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-extended-reals, def-nonnegative-extended-series]
justified_by: []
aliases: []
landmark: true
short: '$\mu^*:\mathcal P(X)\to[0,+\infty]$'
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., Section 1.4"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "T. Tao, An Introduction to Measure Theory, Definition 1.7.1"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Definition

An **outer measure** on a set $X$ is a function $\mu^*:\mathcal P(X)\to[0,+\infty]$ that vanishes at the empty set, is monotone, and is countably subadditive. Explicitly:

1. $\mu^*(\varnothing)=0$;
2. if $A\subseteq B\subseteq X$, then $\mu^*(A)\le \mu^*(B)$;
3. for every sequence $(A_k)_{k\in\mathbb N}$ of subsets of $X$,
   $$\mu^*\left(\bigcup_{k\in\mathbb N}A_k\right)\le\sum_{k=0}^{\infty}\mu^*(A_k),$$
   where the sum is the nonnegative extended sum of [[def-nonnegative-extended-series]].

The domain is the whole power set $\mathcal P(X)$. No measurability condition is imposed before $\mu^*(A)$ is defined.
