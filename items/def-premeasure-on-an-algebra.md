---
id: def-premeasure-on-an-algebra
kind: definition
title: "Premeasures on algebras of sets"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-algebra-of-subsets, def-extended-reals, def-nonnegative-extended-series]
justified_by: []
aliases: []
landmark: true
short: 'premeasure $\mu_0$ on $\mathcal A_0$'
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., Section 1.4"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "T. Tao, An Introduction to Measure Theory, Definition 1.7.7"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Definition

Let $\mathcal A_0$ be an algebra of subsets of $X$. A **premeasure** on an algebra $\mathcal A_0$ vanishes at the empty set and is countably additive whenever a disjoint sequence in $\mathcal A_0$ has its union in $\mathcal A_0$. Thus $\mu_0:\mathcal A_0\to[0,+\infty]$ is a premeasure when $\mu_0(\varnothing)=0$ and

$$\mu_0\left(\bigcup_{k\in\mathbb N}A_k\right)=\sum_{k=0}^{\infty}\mu_0(A_k)$$

whenever the $A_k$ are pairwise disjoint members of $\mathcal A_0$ and their union belongs to $\mathcal A_0$. Padding a finite disjoint family by empty sets shows that a premeasure is finitely additive.

The premeasure is **finite** if $\mu_0(X)<+\infty$. It is **sigma-finite** if there is a sequence $(P_n)$ in $\mathcal A_0$ with $X=\bigcup_nP_n$ and $\mu_0(P_n)<+\infty$ for every $n$.
