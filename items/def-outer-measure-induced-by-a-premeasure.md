---
id: def-outer-measure-induced-by-a-premeasure
kind: definition
title: "The outer set function induced by a premeasure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-premeasure-on-an-algebra, lem-extended-reals-complete]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., formula 1.12"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "T. Tao, An Introduction to Measure Theory, Theorem 1.7.8"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Definition

Let $\mu_0$ be a premeasure on an algebra $\mathcal A_0$ of subsets of $X$. The set function induced by $\mu_0$ assigns $E\subseteq X$ the infimum of $\sum_k\mu_0(A_k)$ over all countable algebra covers $E\subseteq\bigcup_kA_k$. In symbols,

$$\mu^*(E):=\inf\left\{\sum_{k=0}^{\infty}\mu_0(A_k): A_k\in\mathcal A_0\text{ and }E\subseteq\bigcup_{k\in\mathbb N}A_k\right\}.$$

The family of covering costs is nonempty because $X\in\mathcal A_0$ and $(X,\varnothing,\varnothing,\ldots)$ covers every $E$. It therefore has an infimum in $[0,+\infty]$ by completeness of the extended real line ([[lem-extended-reals-complete]]). This definition calls $\mu^*$ an **outer set function** until its outer-measure axioms have been proved.
