---
id: def-schreier-rewriting-map
kind: definition
title: "The Schreier rewriting map"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-alphabet-words-and-reduction, def-schreier-generator, def-schreier-transversal-and-schreier-system]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Roger C. Lyndon and Paul E. Schupp, Combinatorial Group Theory"
      url: "https://www.scribd.com/document/384118619/CombinatorialGroupTheory"
    - title: "M. I. Kargapolov and Ju. I. Merzljakov, Fundamentals of the Theory of Groups"
      url: "https://www.scribd.com/document/1049379192/Fundamentals-of-the-Theory-of-Groups-M-I-Kargapolov-J-I-Merzljakov"
---

## Definition

Let $F(X)$ be a free group, let $H\le F(X)$, and let $\mathcal T$ be a
Schreier system. For a word

$$w=a_1\cdots a_n\qquad (a_j\in X\sqcup X^{-1}),$$

define successive representatives by

$$t_0:=1,\qquad t_j:=\overline{a_1\cdots a_j}\in\mathcal T\quad (1\le j\le n).$$

For each $j$, define the $j$th rewriting factor $\sigma_j$ by

$$\sigma_j:=\begin{cases}s(t_{j-1},x), & a_j=x\in X,\\ s(t_j,x)^{-1}, & a_j=x^{-1}\in X^{-1}.\end{cases}$$

The **Schreier rewriting map** sends $w$ to the word in Schreier generators and
their inverses

$$\tau(w):=\sigma_1\sigma_2\cdots \sigma_n.$$

When $w$ represents an element of $H$, the last coset is $H$, so $t_n=1$.
